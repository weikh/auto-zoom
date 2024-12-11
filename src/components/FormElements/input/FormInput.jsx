import { Controller } from "react-hook-form";

const FormInput = ({
  control,
  required = false,
  name,
  inputProps = {},
  disabled = false,
  inputLeftElement,
  inputRightElement,
  defaultValue = "",
  placeholder = "",
  autoFocus = false,
  validation,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={validation}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className="relative">
          {/* Left Element */}
          {inputLeftElement && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              {inputLeftElement}
            </div>
          )}

          <input
            value={value}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            autoFocus={autoFocus}
            className={`w-full h-10 pl-10 pr-12 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${disabled ? 'bg-gray-100' : ''}`}
            required={required}
            {...inputProps}
          />

          {/* Right Element */}
          {inputRightElement && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {inputRightElement}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mt-1">{error?.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default FormInput;
