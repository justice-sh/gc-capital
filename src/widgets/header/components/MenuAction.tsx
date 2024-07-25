import { cn } from "@/shared/utils/cn";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

type Props = { isOpen: boolean; setIsOpen: () => void; className?: string };

const MenuAction = ({ isOpen, setIsOpen, className }: Props) => {
  return (
    <div className={cn("size-6 cursor-pointer text-white", className)} onClick={setIsOpen}>
      {isOpen ? <XMarkIcon /> : <Bars3Icon />}
    </div>
  );
};

export default MenuAction;
