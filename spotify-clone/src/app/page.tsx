import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import {
  ChevronLeft,
  ChevronRight,
  Play
} from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex p-6 gap-4">
            <button className=" rounded-full bg-black/40 p-2">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-2">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-4xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-6 mt-4">
            <a
              href="#"
              className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do novo album do metalica"
              />
              <strong>72 Seasons</strong>
              <button className="w-10 h-10 flex items-center justify-center rounded-full pl-1 invisible group-hover:visible bg-green-400 text-black ml-auto mr-10">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do novo album do metalica"
              />
              <strong>72 Seasons</strong>
              <button className="w-10 h-10 flex items-center justify-center rounded-full pl-1 invisible group-hover:visible bg-green-400 text-black ml-auto mr-10">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do novo album do metalica"
              />
              <strong>72 Seasons</strong>
              <button className="w-10 h-10 flex items-center justify-center rounded-full pl-1 invisible group-hover:visible bg-green-400 text-black ml-auto mr-10">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do novo album do metalica"
              />
              <strong>72 Seasons</strong>
              <button className="w-10 h-10 flex items-center justify-center rounded-full pl-1 invisible group-hover:visible bg-green-400 text-black ml-auto mr-10">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do novo album do metalica"
              />
              <strong>72 Seasons</strong>
              <button className="w-10 h-10 flex items-center justify-center rounded-full pl-1 invisible group-hover:visible bg-green-400 text-black ml-auto mr-10">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do novo album do metalica"
              />
              <strong>72 Seasons</strong>
              <button className="w-10 h-10 flex items-center justify-center rounded-full pl-1 invisible group-hover:visible bg-green-400 text-black ml-auto mr-10">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for you</h2>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <a className="bg-white/5 p-3 rounded-md flex flex-col  gap-2 hover:bg-white/10">
              <Image
                src="/album.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do novo album do metalica"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, CONM, girl in rea and more
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col  gap-2 hover:bg-white/10">
              <Image
                src="/album.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do novo album do metalica"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, CONM, girl in rea and more
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/album.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do novo album do metalica"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, CONM, girl in rea and more
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/album.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do novo album do metalica"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, CONM, girl in rea and more
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/album.jpg"
                className="w-full"
                width={120}
                height={104}
                alt="Capa do novo album do metalica"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, CONM, girl in rea and more
              </span>
            </a>
          </div>
        </main>
      </div>
        <Footer />
    </div>
  );
}
