export default function CTASection() {
    return (
      <section className="w-full flex flex-col justify-center py-16 text-black">
        <div className=" w-3/6 flex flex-col self-center">
          <h2 className="font-heading text-4xl font-black uppercase text-center mb-10">Fighter Updates Central</h2>
          <p className="text-center">
            Stay in the loop! Subscribe for the latest news and exclusive deal alerts from Skill-Gap.
          </p>
          {/* Input box */}
          <div className="flex flex-row my-10">
            <input className="w-full py-3 px-5 text-black rounded-l-sm border-[1px] border-black" placeholder="Enter email address here" type="text" />
            <button className="px-5 bg-black rounded-r-sm hover:bg-Secondary-100 duration-150 text-white">SUBSCRIBE</button> 
          </div>
        </div>
      </section>
    );
  }