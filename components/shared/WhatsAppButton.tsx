"use client";

interface WhatsAppButtonProps {
  message: string;
  phone?: string;
  className?: string;
  children: React.ReactNode;
}

export default function WhatsAppButton({
  message,
  phone = "94771183257",
  className = "",
  children,
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition font-semibold flex items-center justify-center space-x-2 ${className}`}
    >
      <span>💬</span>
      <span>{children}</span>
    </button>
  );
}
