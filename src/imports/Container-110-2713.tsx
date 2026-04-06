import svgPaths from "./svg-mrspmvaqpq";

function Text() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-0 py-[4px] rounded-[16777200px] top-0" data-name="Text">
      <p className="font-['Instrument_Sans',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#364153] text-[10px] tracking-[0.1172px] whitespace-nowrap">2 team members share</p>
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
      <p className="font-['Instrument_Sans',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#364153] text-[10px] tracking-[0.1172px] whitespace-nowrap">Product Development</p>
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

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Instrument_Sans',sans-serif] font-semibold leading-[22.5px] left-0 not-italic text-[#101828] text-[13px] top-[-0.5px] tracking-[-0.2344px] whitespace-nowrap">Daniel Kim</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Instrument_Sans',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] top-px whitespace-nowrap">Robotics Engineer</p>
    </div>
  );
}

function Frame1() {
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
      <p className="absolute font-['Instrument_Sans',sans-serif] font-semibold leading-[22.5px] left-0 not-italic text-[#101828] text-[13px] top-[-0.5px] tracking-[-0.2344px] whitespace-nowrap">Andrew Chan</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Instrument_Sans',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] top-px whitespace-nowrap">HCI Researcher</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_110_2722)" id="Icon">
          <path d="M6.25 1.25H8.75V3.75" id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M4.16667 5.83333L8.75 1.25" id="Vector_2" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p215abe00} id="Vector_3" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_110_2722">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-0 top-px">
      <p className="font-['Instrument_Sans',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] whitespace-nowrap">Find others with this skill</p>
      <Icon />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <Frame4 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col gap-[5px] items-start p-[13px] relative rounded-[10px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Frame3 />
      <Frame2 />
      <Paragraph4 />
    </div>
  );
}