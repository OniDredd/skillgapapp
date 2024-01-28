export default function ValueSection() {
  return (
    <section className="w-full relative flex justify-center items-center overflow-hidden py-20 bg-black border-Secondary-100 border-y-[1px]">
      <video
        className="absolute z-10 w-screen object-cover opacity-20"
        autoPlay
        loop
        muted
      >
        <source src="/videobackground.webm" type="video/webm" />
      </video>
      <div className="relative z-20 flex flex-col place-self-center text-white">
        <div className="w-[856px] h-[482px] place-self-center bg-black border-Secondary-100 border-[1px] hover:shadow-[0px_0px_60px_0px_rgba(24,_212,_0,_0.4)] duration-300 rounded-md">
          <iframe
            className="rounded-md"
            width="854"
            height="480"
            src=""
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
