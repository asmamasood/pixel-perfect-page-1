
export default function Home() {
  return (
    <div className="bg-[#1d1e2c] h-[1000px] ">
 {/*main content */}

 <main className="text-center p-[104px] ">
 <h5 className="text-blue-400 font montserrat text-5m mb-4">welcome</h5>
 <h1 className="font-bold text-white text text-5xl mb-6">selling on the
    <br /> 
    internet like a pro</h1>
 <p className=" bg text-gray-300 text text-lg mb-10">We know how large objects will act,but things on a
    <br /> small scale just do not act that way.</p>
    <div className="flex justify-center space-x-4">
       <button className="bg-[#23A6F0] py-3 px-8 rounded-lg w-193">Get Quote Now</button>
       <button className="py-3 px-8 border-blue-500 rounded-lg text-blue-500 hover:bg-blue-600">Learn More</button>
    

   </div>
    </main>
{/*card 1*/}

<section className="mt-[104px] mb-[197px] flex justify-between -items-center gap-[30px]">

<div className= " bg-[#FFFFFF] ml-[40px] p-6 w-[328px] h-[292px] hover:shadow-lg transition-all duration-300">
 <div className="w-[70px] h-[76px] mb-[22px] rounded bg-[#FFDCD1] "></div>
 <h2 className="font-bold text-xl text bg-[#252B42]-text mb-2">training courses </h2>
 <div className="bg-[#E74040] h-[2px] w-[50px] rounded"></div>
 <p className="bg-[#737373]-text mt-2">The gradual accumulation of information about atomic and small-scale behaviour... </p>
</div>
{/*card 2*/}
<div className="bg-[#FFFFFF] gap-[20px] p-6 w-[328px] h-[292px] hover:shadow-lg transition-all duration-300">
<div className="w-[70px] h-[76px] mb-[22px] mt[22px] rounded bg-[#B9EAA8] "></div>
 <h2 className="font-bold text-xl text bg-[#252B42]-text mb-2">2,769 online courses </h2>
 <div className="bg-[#E74040] h-[2px] w-[50px] rounded"></div>
 <p className="text bg-[#252B42]-text mt-2">The gradual accumulation of information about atomic and small-scale behaviour... </p>
</div>
{/*card 3*/}
<div className="bg-[#23A6F0] gap-[20px] mr-[40px] p-6 w-[328px] h-[292px] hover:shadow-lg transition-all duration-300  ">
 <div className="w-[70px] h-[76px] mb-[22px] mt-[22px] rounded bg-[#FFFFFF] "></div>
 <h2 className="font-bold text-[16px] mb-2 bg-[#FFFFFF]-text">training courses </h2>
 <div className="bg-white h-[2px] w-[50px] rounded"></div>
 <p className="text bg-[#FFFFFF]-text mt-2">The gradual accumulation of information about atomic and small-scale behaviour... </p>
</div>

</section>

</div>



  );
}
