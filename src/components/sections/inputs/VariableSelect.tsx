import SelectInput from "./SelectInput";

type VariableSelectProps<T extends string> = {
  name: string;
  value: Array<T>;
  count: number;
  onChange: (value: Array<T>) => void;
  defaultValue: T;
  options: Array<T>;
};

export function VariableSelect<T extends string>({
  name,
  value = [],
  count = 0,
  onChange,
  defaultValue,
  options = [],
}: VariableSelectProps<T>) {
  const updateValue = (newVal: T, idx: number) => {
    const newArray = [...value];
    newArray[idx] = newVal;
    onChange(newArray);
  };
  console.log(value.length, count);
  // make sure value is equal to valid count, if not adjust
  if (value.length < count) {
    const newValue = [...value];
    const fieldsToAdd = count - value.length;
    for (let i = 0; i < fieldsToAdd; i += 1) {
      newValue.push(defaultValue);
    }
    onChange(newValue);
  } else if (value.length > count) {
    const newValue = [...value];
    const fieldsToRemove = value.length - count;
    for (let i = 0; i < fieldsToRemove; i += 1) {
      newValue.pop();
    }
    onChange(newValue);
  } else {
    return (
      <>
        {value.map((field, idx) => (
          <SelectInput
            key={field + idx}
            name={`${name} ${idx + 1}`}
            value={field}
            options={options}
            onChange={(newVal) => updateValue(newVal, idx)}
          />
        ))}
      </>
    );
  }
  // return variable fields
  return <></>;
}
