import svgPaths from "./svg-vfwucdefhl";

function Text() {
  return (
    <div className="absolute bg-white border border-[#d1d5dc] border-solid h-[21px] left-0 rounded-[16777200px] top-0 w-[56.844px]" data-name="Text">
      <p className="absolute font-['Instrument_Sans',sans-serif] font-medium leading-[15px] left-[8px] not-italic text-[#364153] text-[10px] top-[2.5px] tracking-[0.1172px] whitespace-nowrap">Surgery</p>
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

function Paragraph() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Instrument_Sans',sans-serif] font-semibold leading-[22.5px] left-0 not-italic text-[#101828] text-[13px] top-[-0.5px] tracking-[-0.2344px] whitespace-nowrap">Dr. Bryan Carroll</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Instrument_Sans',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] top-px whitespace-nowrap">Dermatologic Surgeon</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_110_2717)" id="Icon">
          <path d="M6.25 1.25H8.75V3.75" id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M4.16667 5.83333L8.75 1.25" id="Vector_2" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p215abe00} id="Vector_3" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_110_2717">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-0 top-px">
      <p className="font-['Instrument_Sans',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] whitespace-nowrap">Find others with this skill</p>
      <Icon />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <Frame />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col gap-[5px] items-start p-[13px] relative rounded-[10px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container1 />
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}