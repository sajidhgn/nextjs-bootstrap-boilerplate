"use client";
import PropTypes from "prop-types";

const MainTitle = ({ level, children, className, ...props }) => {

  const HeadingTag = `h${Math.min(6, Math.max(1, level))}`;

  return (
    <HeadingTag className={className} {...props}>
      {children}
    </HeadingTag>
  );
};

MainTitle.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

MainTitle.defaultProps = {
  level: 1,
  className: "",
};

export default MainTitle;
