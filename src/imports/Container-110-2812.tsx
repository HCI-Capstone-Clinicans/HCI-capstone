function Text() {
  return (
    <div className="absolute content-stretch flex items-center left-0 py-[4px] rounded-[16777200px] top-0" data-name="Text">
      <p className="font-['Instrument_Sans',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#dbeafe] text-[10px] tracking-[0.1172px] whitespace-nowrap">3 team members share</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-0 px-[8px] py-[4px] rounded-[16777200px] top-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['Instrument_Sans',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#364153] text-[10px] tracking-[0.1172px] whitespace-nowrap">Human-Robot Interaction</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <Text1 />
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

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Instrument_Sans',sans-serif] font-semibold leading-[22.5px] left-0 not-italic text-[13px] text-white top-[-0.5px] tracking-[-0.2344px] whitespace-nowrap">Daniel Kim</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Instrument_Sans',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#dbeafe] text-[12px] top-px whitespace-nowrap">Robotics Engineer</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Instrument_Sans',sans-serif] font-semibold leading-[22.5px] left-0 not-italic text-[13px] text-white top-[-0.5px] tracking-[-0.2344px] whitespace-nowrap">Andrew Chan</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Instrument_Sans',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#dbeafe] text-[12px] top-px whitespace-nowrap">HCI Researcher</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame1 />
      <Frame />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#155dfc] content-stretch flex flex-col gap-[5px] items-start p-[13px] relative rounded-[10px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Frame2 />
    </div>
  );
}
