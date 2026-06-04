export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex items-center justify-center bg-gray-500 text-white border-gray-200  h-60">
      {/* Left Side: Copyright */}
      {/* <p>© {currentYear} YourCompany. All rights reserved.</p> */}
      <p className="">
        {/* <img src={koderaLogo} alt="Kodera" className="h-6" /> */}
        Denne nettsiden er utviklet med ❤️ av kvinner i Kodera
        <a
          href="https://kodera.no"
          className="text-[#d63772] hover:text-[#ae295a] transition pl-4"
        >
          Kodera.no
        </a>
      </p>
    </footer>
  );
}
