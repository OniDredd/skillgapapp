export default function CoursesSection() {
  return (
    <section className="w-full px-32 py-32 flex flex-col justify-center bg-white border-y-[1px] border-black text-black">
      {/* Dashboard Section */}
      {/* <div className="flex flex-col">
        <h2 className="font-heading uppercase font-black text-2xl text-black">
          You wont go up if you dont know how to get there
        </h2>
        <p>Course Section - Need to plan out more.</p>
      </div> */}

      {/* Values Section */}
      <div className="flex flex-col">
        <div className="flex flex-row mb-20 justify-center items-center">
          <div className="w-full h-[1px] bg-black"/>
          <h3 className="font-heading text-xl font-black uppercase text-center mx-10">Heading</h3>
          <div className="w-full h-[1px] bg-black"/>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col border-[1px] border-black rounded-lg py-10 px-10 shadow-xl">
            <h3 className="font-heading font-black uppercase text-center mb-5">Structured</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Error cumque perferendis ipsa, sunt recusandae minus incidunt culpa veniam. Ipsam eius commodi, 
              officia aliquid ducimus soluta earum deserunt. Provident, porro culpa?
            </p>
          </div>
          <div className="flex flex-col border-[1px] border-black rounded-lg py-10 px-10 shadow-xl">
            <h3 className="font-heading font-black uppercase text-center mb-5">Efficient</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Error cumque perferendis ipsa, sunt recusandae minus incidunt culpa veniam. Ipsam eius commodi, 
              officia aliquid ducimus soluta earum deserunt. Provident, porro culpa?
            </p>
          </div>
          <div className="flex flex-col border-[1px] border-black rounded-lg py-10 px-10 shadow-xl">
            <h3 className="font-heading font-black uppercase text-center mb-5">Seamless</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Error cumque perferendis ipsa, sunt recusandae minus incidunt culpa veniam. Ipsam eius commodi, 
              officia aliquid ducimus soluta earum deserunt. Provident, porro culpa?
            </p>
          </div>
          
        </div>
      </div>
      
    </section>
  );
}