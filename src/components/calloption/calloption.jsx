export default function CallOptions({info,ismange, phone = "+1234567890", telegramUser = "user123" }) {
  return (
    ismange&&
    <div className="min-w-1/3 py-6 px-4 fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-[100] border-1 border-blue-500  bg-white/10 backdrop-blur-md rounded-2xl shadow-xl flex flex-col items-center justify-between gap-y-4">
        <div className="flex flex-col justify-center items-center ">
            <img src={info.avatar} alt="" className="w-18 h-18 cursor-pointer rounded-full object-cover border-2 border-blue-500" />
            <p className="text-base text-gray-100 p-2 ">{info.name}</p>
        </div>
      <a href={`tel:${phone}`} className="w-full">
        <button className="bg-blue-950 cursor-pointer  text-white px-4 py-2 rounded w-full ">
          📞 Phone Call
        </button>
      </a>
      <a className="w-full" href={`https://wa.me/${phone.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer">
        <button className="bg-blue-950 cursor-pointer text-white px-4 py-2 rounded w-full">
          💬 WhatsApp
        </button>
      </a>
      <a className="w-full" href={`https://t.me/${telegramUser}`} target="_blank" rel="noopener noreferrer">
        <button className="bg-blue-950 cursor-pointer text-white px-4 py-2 rounded w-full">
          📩 Telegram
        </button>
      </a>
      <a className="w-full" href={`imto://chat?uid=${phone}`} target="_blank">
        <button className="bg-blue-950 cursor-pointer text-white px-4 py-2 rounded w-full">
          📲 IMO (if installed)
        </button>
      </a>
    </div>
  
  );
}
