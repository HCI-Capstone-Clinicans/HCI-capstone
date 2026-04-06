function Text() {
  return (
    <div className="absolute bg-white h-[19px] left-0 rounded-[16777200px] top-0 w-[91.852px]" data-name="Text">
      <p className="absolute font-['Instrument_Sans',sans-serif] font-medium leading-[15px] left-[8px] not-italic text-[#1c398e] text-[10px] top-[2.5px] tracking-[0.1172px] whitespace-nowrap">Product Design</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[19px] relative shrink-0 w-full" data-name="Container">
      <Text />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Instrument_Sans',sans-serif] font-semibold leading-[22.5px] left-0 not-italic text-[13px] text-white top-[-0.5px] tracking-[-0.2344px] whitespace-nowrap">You</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Instrument_Sans',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#dbeafe] text-[12px] top-px whitespace-nowrap">Product Designer</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5px] items-start left-[12px] top-[12px] w-[156px]">
      <Container1 />
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#155dfc] relative rounded-[10px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-full" data-name="Container">
      <Frame />
    </div>
  );
}
