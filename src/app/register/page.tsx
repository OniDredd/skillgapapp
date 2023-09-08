export default function page() {
  return (
    <main className="h-screen grid grid-cols-2 justify-center">
        <section className="flex flex-col col-span-1 pl-32 py-20">
            <div className="h-full py-20 px-20 bg-white rounded-xl">
             <h1 className="text-black">Form</h1>
            </div>
        </section>
        <section className="flex flex-col col-span-1 px-20 py-20">
            <h1 className="self-center">Content on the right.</h1>
        </section>
    </main>
  )
}
