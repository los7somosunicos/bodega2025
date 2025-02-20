
import React from "react";

interface GenericButtonProps {
  label?: string; // Texto del botón
  onClick: () => void; // Función a ejecutar
  className?: string; // Estilos personalizados
  type?: "button" | "submit" | "reset"; // Tipo de botón (opcional)
  disabled?: boolean; // Estado deshabilitado (opcional)
  icon?: React.ReactNode;
}

const GenericButton: React.FC<GenericButtonProps> = ({
  label,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  icon = null
}) => {
  return (
    <div className="relative flex justify-center items-center ml-6">
      <button
        type={type}
        onClick={onClick}
        className={`text-white p-2 rounded-md text-sm font-bold transition-colors cursor-pointer ${className}`}
        disabled={disabled}
      >
        {label}
      </button>
      {icon}
    </div>
  );
};

export default GenericButton;
