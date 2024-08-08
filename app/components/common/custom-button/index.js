import Link from "next/link";
const CustomButton = (props) => {
  const { text, anchor, loading, ...rest } = props;

  return (
    <>
      {anchor ? (
        <Link className="btn dbtn" {...rest}>
          {text}
        </Link>
      ) : (
        <button className="btn dbtn" {...rest}>
          {loading ? "Sending..." : text}
        </button>
      )}
    </>
  );
};

export default CustomButton;