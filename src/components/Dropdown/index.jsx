const Dropdown = ({ name, label, options, handleInputChange }) => {
  return (
    <div>
      <div>{label}</div>
      <select /* multiple */ name={name} onChange={handleInputChange}>
        <option value="">Select</option>
        {options?.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
