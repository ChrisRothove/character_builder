type CounterInputProps = {
  name: string;
  value: number;
  max: number;
  onChange: (newValue: number) => void;
};

export default function CounterInput({
  name,
  value,
  max,
  onChange,
}: CounterInputProps) {
  const plusOne = () => {
    if (value + 1 <= max) {
      onChange(value + 1);
    }
  };
  const minusOne = () => {
    if (value - 1 >= 0) {
      onChange(value - 1);
    }
  };
  return (
    <div className="command-list-item">
      <span>{name}</span>
      <div className="counter-buttons">
        <button onClick={minusOne}>-</button>{" "}
        <span>
          {value}/{max}
        </span>{" "}
        <button onClick={plusOne}>+</button>
      </div>
    </div>
  );
}
