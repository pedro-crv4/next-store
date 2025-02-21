import { ReactNode, forwardRef } from "react";
import { Transition } from "@headlessui/react";

const NavigationDrawer = forwardRef<
  HTMLDivElement,
  {
    children: ReactNode;
    onClick: () => void;
    isOpen: boolean;
  }
>(({ children, onClick, isOpen }, ref) => {
  return (
    <Transition
        show={isOpen}
        unmount={false} // 🔑 Mantém no DOM para animar a saída
        enter="transition-transform transition-opacity duration-200"
        enterFrom="translate-x-full opacity-0"
        enterTo="translate-x-0 opacity-100"
        leave="transition-transform transition-opacity duration-200"
        leaveFrom="translate-x-0 opacity-100"
        leaveTo="translate-x-full opacity-0"
    >
        <div ref={ref} className="navigation-drawer-background" onClick={onClick}>
            <div
                ref={ref}
                className="navigation-drawer-container"
                onClick={(e) => e.stopPropagation()} // Impede fechamento ao clicar dentro
            >
            <div className="navigation-drawer">{children}</div>
            </div>
        </div>
    </Transition>
  );
});

NavigationDrawer.displayName = "NavigationDrawer";

export default NavigationDrawer;
