import Image from 'next/image'

const HistoryCard = () => {
  return (
    <>
      <div className="mb-6 alpina-dense  text-3xl flex items-center rounded-xl border border-white bg-white/30 p-4 shadow-[0px_12px_32px_-6px_#e4dbc8,0px_2px_16px_-6px_#0000001a] transition-all duration-150 hover:scale-95 hover:bg-background/95 mt-6">
            
            <div className="pr-4 shrink-0">
              <Image src={'https://res.cloudinary.com/dncfedmdx/image/upload/v1733313102/pi-web/chat_flfpqb.svg'} alt='Chat' width={56} height={56} />
            </div>
            <div><h2 className="font-condensed font-bold text-h-m text-primary-700">Download your Pi conversation history</h2><a className="mt-4 text-sm geist-sans block text-secondary" href="/profile/manage-history">Manage history</a></div>
            
          </div>
    </>
  )
}

export default HistoryCard