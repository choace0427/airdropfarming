export default function Login() {
  return (
    <div className='bg-gradient-to-r from-[#131217] via-[#182445] to-[#131217] min-h-screen flex flex-col'>
      <div className='m-auto'>
        <p className='text-white font-bold text-[28px] text-center'>Enter the world of automated Airdrop Farming</p>
        <p className='text-white font-medium text-center'>One tool to claim them all.</p>
        <p className='text-[#A19997] font-medium text-center'>We offer a streamlined solution for effortless airdrop farming.</p>
        <div className='border border-[#131217] border-b-[3px] border-r-[3px] rounded-lg flex w-fit mt-2 bg-gradient-to-r from-[#131217] to-[#182343]'>
          <div className='bg-[#232a4c] flex flex-col gap-4 px-16 py-30 items-center justify-center m-2 rounded-md w-fit'>
            <img src='./metamask.png' className='w-[120px]' />
            <button className='px-20 py-2 mt-5 border-2 border-[#1a284e] rounded-xl bg-gradient-to-r from-[#161E1E] via-[#1C2A52] to-[#161E1E]'>
              Login with MetaMask
            </button>
            <p className='text-white text-[12px]'>Don't have a MetaMask wallet? Learn more</p>
          </div>
          <div className='px-24 py-20 flex justify-center items-center flex-col'>
            <img src='./loginlogo.png' className='w-[200px]' />
            <p className=' text-transparent: uppercase text-[28px] font-semibold mt-5'>airdrop farming</p>
          </div>
        </div>
      </div>
    </div>
  );
}
