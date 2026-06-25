function TextInput({ label, type = 'text', placeholder, required = false, value }) {
  return (
    <label className="field">
      <span>
        {label}{required && <b>*</b>}
      </span>
      <input type={type} placeholder={placeholder} defaultValue={value} />
    </label>
  );
}

export default TextInput;
