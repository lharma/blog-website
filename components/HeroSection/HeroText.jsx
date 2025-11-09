import Button from "./Button";

export default  function HeroText() {

  
  
  // const checkUser = ()=>{
    
  //  }
  return (
    <div className="w-fit flex flex-col gap-10 items-center justify-center text-center">
      <div className="">
        <p className="text-5xl mb-4">Publish your passions, your way</p>
        <p className="text-2xl">Create a unique and beautiful blog easily</p>
      </div>
      <Button  bgColor='bg-[#ff8000]'/>
    </div>
  );
}
