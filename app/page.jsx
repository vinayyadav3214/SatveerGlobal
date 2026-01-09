
import Link from 'next/link';
export default function Home() {
  return (
    <main className="p-10 text-center">
      <h1 className="text-5xl font-bold mb-6">Powering Global Trade. Built on Trust.</h1>
      <p className="text-gray-300 mb-8">Institutional-grade import, export, and sourcing solutions.</p>
      <div className="flex justify-center gap-6">
        <Link href="/contact" className="bg-[#d4af37] text-black px-6 py-3 rounded-xl">Request a Quote</Link>
        <Link href="/services" className="border px-6 py-3 rounded-xl">Our Services</Link>
      </div>
    </main>
  );
}
