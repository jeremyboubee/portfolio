import { Fragment, type MouseEventHandler } from "preact";
import { useState } from "preact/hooks";
import ChevronDownIcon from "../images/chevron-down.svg?preact";
import ChevronUpIcon from "../images/chevron-up.svg?preact";

interface DropdownItemProps {
  title?: string;
  icon?: any;
  children?: any;
  onClick: MouseEventHandler<HTMLElement>;
}

const DropdownItem = ({
  title,
  icon,
  children,
  onClick,
}: DropdownItemProps) => {
  return (
    <button
      type="button"
      className="w-full border rounded-xl border-(--soft-white)/20 cursor-pointer bg-(--soft-white)/2"
      onClick={onClick}
    >
      <div className="flex justify-between p-4">
        <p className="font-normal">{title ?? "Dropdown title"}</p>
        {icon ?? <ChevronDownIcon fill="currentColor"></ChevronDownIcon>}
      </div>
      {children}
    </button>
  );
};
const DropdownList = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownItems: { [key: string]: string[] } = {
    "Dropdown #1": [
      "Lorem ipsum dolor sit",
      "Amet consectetur, adipisicing elit rerum",
      "Quis repellat ad atque sunt quod inventore",
    ],
    "Dropdown #2": [
      "Quis repellat ad atque sunt quod inventore",
      "Amet consectetur, adipisicing elit rerum",
      "Lorem ipsum dolor sit",
    ],
    "Dropdown #3": [
      "Quis repellat ad atque sunt quod inventore",
      "Lorem ipsum dolor sit",
      "Amet consectetur, adipisicing elit rerum",
    ],
  };

  const onClickToggle = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <ul className="flex flex-col gap-4">
      {Object.entries(dropdownItems).map(([category, content], dropindex) => (
        <Fragment key={`dropdown-${dropindex}`}>
          <li>
            <DropdownItem
              title={category}
              onClick={() => onClickToggle(`dropdown-${dropindex}`)}
              icon={
                openDropdown === `dropdown-${dropindex}` ? (
                  <ChevronUpIcon fill="currentColor"></ChevronUpIcon>
                ) : (
                  <ChevronDownIcon fill="currentColor"></ChevronDownIcon>
                )
              }
            >
              <div
                id={`dropdown-${dropindex}-content`}
                className={`dropdown-content font-thin text-left flex flex-col gap-2 px-6 overflow-hidden transition-all duration-300 ${
                  openDropdown === `dropdown-${dropindex}`
                    ? "opacity-100 pb-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                {content.map((item, item_index) => (
                  <Fragment key={`dropdown-${dropindex}-item-${item_index}`}>
                    <div className="flex gap-3">
                      <span>•</span>
                      <p className="">{item}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </DropdownItem>
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

export default DropdownList;
