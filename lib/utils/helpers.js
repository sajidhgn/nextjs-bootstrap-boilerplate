import { toast } from "react-toastify";
import jwt from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";
import confetti from "canvas-confetti";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { getCookie } from "cookies-next";
import { generalApi } from "@/app/lib/services";

// Show Toastr function
export const showToast = (message, status, options) => {
  const toastOptions = {
    type: status,
    position: "top-right",
    autoClose: true,
    hideProgressBar: false,
    closeOnClick: false,
    draggable: true,
    pauseOnHover: true,
    newestOnTop: true,
    rtl: false,
    pauseOnFocusLoss: true,
    theme: "light",
    ...options,
  };

  return toast(message, toastOptions);
};

export const convertToOptions = async (data) => {
  return await data.map((country) => ({
    label: country.name,
    options: country.states.map((state) => ({
      value: state.name,
      label: state.name,
    })),
  }));
};

export function jwtDecoder(token) {
  if (token) {
    const decodedToken = jwtDecode(token);
    return decodedToken;
  }
}

export function getUserId() {
  const token = getCookie("token" || {});
  if (token) {
    const { id } = jwtDecode(token);
    return id;
  }
}

export const isValidToken = (token) => {
  if (!token) return false;

  try {
    const decoded = jwt.decode(token);
    if (!decoded || !decoded.exp) return false;

    const currentTime = Date.now() / 1000; // in seconds
    return decoded.exp > currentTime;
  } catch (error) {
    console.error("Token validation error:", error);
    return false;
  }
};

export const fetchData = async (url, data = {}, method = "GET", callback) => {
  try {
    let response;
    if (method === "GET") {
      response = await axios.get(url);
    } else if (method === "POST") {
      response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    callback(response.data.data);
  } catch (error) {
    console.error(error);
  }
};

export const confettiDecoration = () => {
  // var end = Date.now() + 15 * 1000;
  var colors = [
    "#bb0000",
    "#ffffff",
    "#333333",
    "#ffff00",
    "#2aff00",
    "#2000ff",
    "#00e7ff",
    "#ff00e0",
  ];
  var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 100 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti({
      ...defaults,
      colors: colors,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      colors: colors,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
  // (function frame() {
  //   confetti({
  //     particleCount: 8,
  //     angle: 45,
  //     spread: 50,
  //     origin: { x: 0 },
  //     colors: colors,
  //   });
  //   confetti({
  //     particleCount: 8,
  //     angle: 120,
  //     spread: 50,
  //     origin: { x: 1 },
  //     colors: colors,
  //   });

  //   if (Date.now() < end) {
  //     requestAnimationFrame(frame);
  //   }
  // })();
};

export const handleFileChange = async (e, setData, setLoading) => {
  setLoading(true);
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append("file", file);
  try {
    const response = await generalApi.uploadImage(formData);
    setData(response?.data?.url);
    setLoading(false);
  } catch (err) {
    console.log("File upload failed.");
    setLoading(false);
  }
};

export const truncateText = (text, limit) => {
  return text.length > limit ? text.substring(0, limit) + "..." : text;
};

export const TruncatedContent = ({ content, charLimit }) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");
  const textContent = doc.body.textContent || "";
  const truncatedText = truncateText(textContent, charLimit);

  return (
    <div>
      <p>{truncatedText}</p>
    </div>
  );
};
