import PropTypes from "prop-types";

function IconArrowLeft({ color }) {
  const defaultColor = "black";
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color ?? defaultColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7071 5.70711C13.0976 5.31658 13.0976 4.68342 12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289L4.29326 11.2925L4.29289 11.2929M12.7071 5.70711L7.41421 11L12.7071 5.70711ZM7.41421 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41421L12.7071 18.2929C13.0976 18.6834 13.0976 19.3166 12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29342 12.7076L4.29289 12.7071M4.29078 12.705C4.19595 12.6096 4.12432 12.4999 4.07588 12.3828L4.29078 12.705ZM4.29078 11.295C4.11106 11.4758 4 11.7249 4 12C4 12.1356 4.02699 12.2649 4.07588 12.3828"
        fill={color ?? defaultColor}
      />
    </svg>
  );
}

IconArrowLeft.propTypes = {
  color: PropTypes.string,
};

export default IconArrowLeft;
