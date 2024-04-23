export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="py-6 px-10 text-center text-gray-100">
      <small>
        &copy; {year === 2024 ? year : `2024 - ${year}`} Sakura Tanaka. All rights reserved
      </small>
    </div>
  );
};
