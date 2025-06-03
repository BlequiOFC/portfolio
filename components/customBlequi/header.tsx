import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <span className="text-2xl font-bold">Gustavo Pregigueiro</span>
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        <ul className="flex gap-6 text-sm">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Projetos</Link>
          </li>
          <li>
            <Link href="/">Contato</Link>
          </li>
        </ul>
        <div className="flex flex-1 items-center justify-end"> 
          <Button size="icon">
            <Link href={"htts://github.com/BlequiOFC"} target="_blank">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
