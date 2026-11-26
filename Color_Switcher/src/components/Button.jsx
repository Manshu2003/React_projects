function Button({ color, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="text-white font-bold py-2 px-5 rounded-full shadow-lg capitalize cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
    >
      {children}
    </button>
  );
}

export default Button;