import PropTypes from "prop-types";
import { Select, Space } from "antd";
import { FiAlertCircle } from "react-icons/fi";
import { FaAsterisk } from "react-icons/fa";

export default function DropDownSelect({
  title = "",
  className = "",
  change = () => {},
  error = "",
  required = false,
  options = [],
  value,
}) {
  const onSearch = (value) => {
    console.log("search:", value);
  };
  return (
    <div
      className={`flex flex-col ${
        title ? "gap-1" : "gap-0 items-center"
      } w-full `}
    >
      <div className="flex items-center  gap-0.5">
        {title && (
          <label htmlFor="" className="text-xs font-medium 2xl:text-sm ">
            {title}
          </label>
        )}
        {required && <FaAsterisk className="text-[6px] text-rose-600" />}
      </div>
      <span className={` ${className} `}>
        <Select
          mode="multiple"
          style={{
            width: "100%",
          }}
          placeholder={`Select ${title}`}
          defaultValue={value}
          onChange={change}
          options={options}
          optionRender={(option) => (
            <Space>
              <span role="img" aria-label={option.data.label}>
                {option.data.emoji}
              </span>
              {option.data.desc}
            </Space>
          )}
        />

        {error && (
          <FiAlertCircle className="absolute top-3.5 right-4 mr-5 mt-5 transform -translate-y-3/5 text-red-400" />
        )}

        {error && (
          <p className="flex justify-start items-center mt-2 my-1 mb-0 text-[10px] text-red-600">
            <span className="text-[10px] pt-2">{error}</span>
          </p>
        )}
      </span>
    </div>
  );
}
DropDownSelect.propTypes = {
  title: PropTypes.string.isRequired,
  change: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  options: PropTypes.array,
};
