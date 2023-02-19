import "../styles/globals.css";
import Navigator from "./componente/Navigator";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
  
      <head/>
      <body 
      cz-shortcut-listen="true"
       className="bg-gray-50 text-neutral-700 dark:text-white dark:bg-[#c1c1c1] transition-colors duration-300 w-full mx-auto flex items-center justify-between overflow-x-hidden">
        <Navigator/>
        <div className="flex flex-col w-full items-center justify-center p-0 md:items-start md:flex-row">
              {children}
        </div>
      </body>
    </html>
  );
}