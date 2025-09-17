type SelectInputProps<T extends string> = {
  name: string;
  value: T;
  options: Array<T>;
  onChange: (value: T) => void;
};

export default function SelectInput<T extends string>({
  name,
  value,
  options = [],
  onChange,
}: SelectInputProps<T>) {
  return (
    <div className="command-list-item">
      <span>{name}</span>
      <select
        name="name"
        id={`${name}-select`}
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
      >
        {options.map((opt, idx) => (
          <option value={opt} key={`${opt}-${idx}`}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
