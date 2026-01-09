
export default function Contact() {
  return (
    <section className="p-12 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Request a Quote</h2>
      <form className="space-y-4">
        <input className="w-full p-3 rounded text-black" placeholder="Name" />
        <input className="w-full p-3 rounded text-black" placeholder="Email" />
        <textarea className="w-full p-3 rounded text-black" placeholder="Requirements"></textarea>
        <button className="bg-[#d4af37] text-black px-6 py-3 rounded-xl">Submit</button>
      </form>
      <p className="mt-6">WhatsApp: +1-XXX-XXX-XXXX</p>
    </section>
  );
}
