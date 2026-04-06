import svgPaths from "./svg-hcuvn867ez";
import imgImage10 from "figma:asset/783f2c42ea769440e177775b6794f454354e65fd.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pdcc8740} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[19.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[47.5px] not-italic text-[#6a7282] text-[13px] text-center top-px tracking-[-0.0762px] whitespace-nowrap">Back to Project</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[19.5px] items-center left-[32px] top-[32px] w-[118px]" data-name="Button">
      <Icon />
      <Text />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[19.5px] left-0 top-0 w-[1076px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-px tracking-[0.3395px] uppercase whitespace-nowrap">Research Project | August 2025 — Ongoing</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[8px] size-[12px] top-[6.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p3a7e7417} id="Vector" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 3.5H11V6.5" id="Vector_2" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-gradient-to-r border border-[#b9f8cf] border-solid from-[#f0fdf4] h-[26.5px] left-[234px] rounded-[8px] to-[#eff6ff] top-[15px] w-[96.102px]" data-name="Button">
      <Icon1 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[55px] not-italic text-[#008236] text-[11px] text-center top-[4.5px] tracking-[0.0645px] whitespace-nowrap">87% Match</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[48px] left-0 top-[23.5px] w-[1076px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[48px] left-0 not-italic text-[#101828] text-[48px] top-[0.5px] tracking-[0.3516px] whitespace-nowrap">RoboDog</p>
      <Button1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-[75.5px]" data-name="Heading 2">
      <div className="relative shrink-0 size-[32px]" data-name="image 10">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] tracking-[0.0703px] whitespace-nowrap">Carroll Labs</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p328a7300} id="Vector" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3a5e5a00} id="Vector_2" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[177.336px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#364153] text-[13px] top-px tracking-[-0.0762px] whitespace-nowrap">UH Cleveland Medical Center</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[19.5px] items-center left-0 top-[115.5px] w-[1076px]" data-name="Container">
      <Icon2 />
      <Text1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[135px] left-[32px] top-[67.5px] w-[1076px]" data-name="Container">
      <Paragraph />
      <Heading />
      <Heading1 />
      <Container3 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[37.5px] relative rounded-[8px] shrink-0 w-[118.25px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[59px] not-italic text-[#364153] text-[13px] text-center top-[10px] tracking-[-0.0762px] whitespace-nowrap">Stay Updated</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[37.5px] relative rounded-[8px] shrink-0 w-[207.914px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[104.5px] not-italic text-[#364153] text-[13px] text-center top-[10px] tracking-[-0.0762px] whitespace-nowrap">Contact Project Coordinator</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[37.5px] items-start left-[32px] top-[226.5px] w-[1076px]" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[296px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Container2 />
      <Container4 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[297px] items-start left-0 pb-px top-0 w-[1140px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#99a1af] text-[11px] top-[0.5px] tracking-[0.0645px] whitespace-nowrap">Project Topics</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex items-center justify-center left-0 px-[12px] py-[3px] rounded-[8px] top-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#364153] text-[11px] tracking-[0.0645px] whitespace-nowrap">Robotics</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-[#cefafe] border border-[#a5f3fc] border-solid h-[24.5px] left-0 rounded-[8px] top-[32.5px] w-[163.094px]" data-name="Text">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[11px] not-italic text-[#364153] text-[11px] top-[3.5px] tracking-[0.0645px] whitespace-nowrap">Human-Robot Interaction</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute bg-[#f3f4f6] border border-[#e4e4e7] border-solid h-[24.5px] left-0 rounded-[8px] top-[65px] w-[130.164px]" data-name="Text">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[11px] not-italic text-[#364153] text-[11px] top-[3.5px] tracking-[0.0645px] whitespace-nowrap">Surgery Assistance</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[89.5px] relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
      <Text4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white h-[152px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Paragraph1 />
        <Container8 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#99a1af] text-[11px] top-[0.5px] tracking-[0.0645px] whitespace-nowrap">Looking for</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] py-[3px] relative">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#364153] text-[11px] text-center tracking-[0.0645px] whitespace-nowrap">Robotics Engineers</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[#cefafe] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#a5f3fc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[12px] py-[6px] relative">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[13.75px] not-italic relative shrink-0 text-[#364153] text-[11px] text-center tracking-[0.0645px] w-[140px]">Human-Robot Interaction Practitioner</p>
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] py-[3px] relative">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#364153] text-[11px] text-center tracking-[0.0645px] whitespace-nowrap">Grant Writers</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Text6 />
      <Text7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white h-[167px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Paragraph2 />
        <Container10 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[810px] relative shrink-0 w-[240px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Container7 />
        <Container9 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Skills Map</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">{`Explore how team members' skills intersect`}</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[44px] relative shrink-0 w-[244.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Heading2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white h-[37.5px] relative rounded-[8px] shrink-0 w-[125.656px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#1e2939] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[63.5px] not-italic text-[#364153] text-[13px] text-center top-[10px] tracking-[-0.0762px] whitespace-nowrap">How do I fit in?</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[28px] opacity-30 relative shrink-0 w-[11.133px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-[6px] not-italic text-[#4a5565] text-[18px] text-center top-0 tracking-[-0.4395px] whitespace-nowrap">−</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[20.38px] not-italic text-[#6a7282] text-[11px] text-center top-[0.5px] tracking-[0.0645px] whitespace-nowrap">0%</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[28px] relative shrink-0 w-[11.133px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-[6px] not-italic text-[#4a5565] text-[18px] text-center top-0 tracking-[-0.4395px] whitespace-nowrap">+</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#f9fafb] h-[42px] relative rounded-[8px] shrink-0 w-[105.109px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[13px] py-px relative size-full">
        <Button5 />
        <Text8 />
        <Button6 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <Button4 />
        <Container15 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[10px] items-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[0px] tracking-[-0.3125px] w-full whitespace-nowrap" data-name="Heading 3">
      <p className="relative shrink-0">
        <span className="leading-[24px] text-[16px]">{`4 `}</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] text-[#6a7282] text-[12px]">Team Members</span>
      </p>
      <p className="relative shrink-0">
        <span className="leading-[24px] text-[16px]">{`11 `}</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] text-[#6a7282] text-[12px]">Total Skills</span>
      </p>
      <p className="relative shrink-0">
        <span className="leading-[24px] text-[16px]">{`6 `}</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] text-[#6a7282] text-[12px]">Shared Skills</span>
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Dr. Bryan Carroll</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[rgba(255,255,255,0.95)] content-stretch flex gap-[8px] items-center px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-[#f43f5e] shrink-0 size-[8px]" />
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Dr. Maya Patel</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[rgba(255,255,255,0.95)] content-stretch flex gap-[8px] items-center px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-[#fbbf24] shrink-0 size-[8px]" />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Andrew Chan</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[rgba(255,255,255,0.95)] content-stretch flex gap-[8px] items-center px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-[#22d3ee] shrink-0 size-[8px]" />
      <Paragraph6 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Daniel Kim</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[rgba(255,255,255,0.95)] content-stretch flex gap-[8px] items-center px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-[#34d399] shrink-0 size-[8px]" />
      <Paragraph7 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-white border border-[#d1d5dc] border-solid h-[21px] left-0 rounded-[16777200px] top-0 w-[91.719px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[8px] not-italic text-[#364153] text-[10px] top-[2.5px] tracking-[0.1172px] whitespace-nowrap">Service Design</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[21px] left-[42.7px] top-[204px] w-[154px]" data-name="Container">
      <Text9 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[13.75px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[13.75px] not-italic relative shrink-0 text-[#101828] text-[10px] text-center tracking-[0.0645px] whitespace-nowrap">UX Writing</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col inset-[44.64%_58.15%_51.27%_28.64%] items-start pb-px pt-[7px] px-[11px] rounded-[16777200px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Paragraph8 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[13.75px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[13.75px] not-italic relative shrink-0 text-[#101828] text-[10px] text-center tracking-[0.0645px] whitespace-nowrap">Product Design</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col inset-[37.13%_28.99%_58.78%_53.67%] items-start pb-px pt-[7px] px-[11px] rounded-[16777200px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Paragraph9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[26px] relative shrink-0 w-[66px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] left-[34.5px] not-italic text-[#101828] text-[10px] text-center top-px tracking-[0.1172px] w-[67px]">Design Thinking</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col items-start left-[calc(50%-35.85px)] px-[9px] py-[5px] rounded-[16777200px] top-[calc(50%-91.35px)]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Paragraph10 />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-white border border-[#d1d5dc] border-solid h-[21px] left-0 rounded-[16777200px] top-0 w-[120.859px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[8px] not-italic text-[#364153] text-[10px] top-[2.5px] tracking-[0.1172px] whitespace-nowrap">Research Operations</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[21px] left-[240.7px] top-[352px] w-[154px]" data-name="Container">
      <Text10 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex h-[13.75px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[13.75px] not-italic relative shrink-0 text-[#101828] text-[10px] text-center tracking-[0.0645px] whitespace-nowrap">Medicine</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col inset-[67.63%_36.46%_28.28%_51.85%] items-start pb-px pt-[7px] px-[11px] rounded-[16777200px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Paragraph11 />
    </div>
  );
}

function Container27() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col items-start left-[calc(50%+93.15px)] px-[11px] py-[7px] rounded-[16777200px] top-[calc(50%+82.65px)]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[13.75px] not-italic relative shrink-0 text-[#101828] text-[10px] text-center tracking-[0.0645px] w-[96px]">Quantitative Research</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="bg-white h-[21px] relative rounded-[16777200px] shrink-0 w-full" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[9px] not-italic text-[#364153] text-[10px] top-[3.5px] tracking-[0.1172px] whitespace-nowrap">Mechanical Engineering</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="bg-white h-[21px] relative rounded-[16777200px] shrink-0 w-full" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[9px] not-italic text-[#364153] text-[10px] top-[3.5px] tracking-[0.1172px] whitespace-nowrap">Electronics Engineering</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[332.7px] top-[104px] w-[135.164px]" data-name="Container">
      <Text11 />
      <Text12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-white border border-[#d1d5dc] border-solid h-[21px] left-0 rounded-[16777200px] top-0 w-[56.844px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[8px] not-italic text-[#364153] text-[10px] top-[2.5px] tracking-[0.1172px] whitespace-nowrap">Surgery</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[21px] left-[428.7px] top-[574px] w-[154px]" data-name="Container">
      <Text13 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col items-start left-[205.7px] px-[11px] py-[7px] rounded-[16777200px] top-[146px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[13.75px] not-italic relative shrink-0 text-[#101828] text-[10px] text-center tracking-[0.0645px] w-[74px]">Product Development</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[678.698px] relative shrink-0 w-[603.096px]">
      <div className="absolute inset-[6.67%_47.37%_46.56%_0]" data-name="Vector">
        <div className="absolute inset-[-0.32%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319.398 319.398">
            <path d={svgPaths.p152e0280} fill="var(--fill-0, #CFFAFE)" fillOpacity="0.5" id="Vector" stroke="var(--stroke-0, #22D3EE)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Container21 />
      <div className="absolute inset-[0_17.14%_53.23%_30.13%]" data-name="Vector">
        <div className="absolute inset-[-0.32%_-0.31%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 319.398">
            <path d={svgPaths.p13300470} fill="var(--fill-0, #ECFDF5)" fillOpacity="0.5" id="Vector" stroke="var(--stroke-0, #34D399)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[30.1%_21.01%_23.13%_26.36%]" data-name="Vector">
        <div className="absolute inset-[-0.32%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319.397 319.397">
            <path d={svgPaths.p14217b00} fill="var(--fill-0, #FEF3C7)" fillOpacity="0.5" id="Vector" stroke="var(--stroke-0, #FBBF24)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Container22 />
      <Container23 />
      <Container24 />
      <Container25 />
      <div className="absolute inset-[53.23%_0_0_47.31%]" data-name="Vector">
        <div className="absolute inset-[-0.32%_-0.31%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319.794 319.398">
            <path d={svgPaths.p1f411180} fill="var(--fill-0, #FFE4E6)" fillOpacity="0.5" id="Vector" stroke="var(--stroke-0, #F43F5E)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Container26 />
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#f9fafb] h-[700px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center pl-px pr-[16px] py-px relative size-full">
          <Frame />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[25px] relative w-full">
        <Container12 />
        <Heading3 />
        <Frame1 />
        <Container20 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[810px] items-start left-[32px] top-[321px] w-[1076px]" data-name="Container">
      <Container6 />
      <Container11 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1140px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container />
        <Container5 />
      </div>
    </div>
  );
}

function SkillsMap() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[1291px] items-start pt-[57px] relative shrink-0 w-full" data-name="SkillsMap">
      <MainContent />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[1212px] items-start left-0 top-0 w-[1140px]" data-name="Body">
      <SkillsMap />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p6f52600} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ad6bc40} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-[#101828] relative rounded-[8px] shrink-0 size-[28px]" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="flex-[1_0_0] h-[22.5px] min-h-px min-w-px relative" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] left-0 not-italic text-[#101828] text-[15px] top-[-0.5px] tracking-[-0.2344px] whitespace-nowrap">Clinician Connect</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[28px] relative shrink-0 w-[163.344px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Header1 />
        <Header2 />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="flex-[1_0_0] h-[31.5px] min-h-px min-w-px relative rounded-[8px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[12px] not-italic text-[#4a5565] text-[13px] top-[7px] tracking-[-0.0762px] whitespace-nowrap">Find Collaborators</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[31.5px] relative rounded-[8px] shrink-0 w-[104.914px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[12px] not-italic text-[#4a5565] text-[13px] top-[7px] tracking-[-0.0762px] whitespace-nowrap">Find Projects</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[31.5px] relative rounded-[8px] shrink-0 w-[97.016px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[12px] not-italic text-[#4a5565] text-[13px] top-[7px] tracking-[-0.0762px] whitespace-nowrap">My Projects</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[31.5px] relative shrink-0 w-[347.609px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Link1 />
        <Link2 />
        <Link3 />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[33.5px] relative rounded-[8px] shrink-0 w-[88.148px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[13px] not-italic text-[#364153] text-[13px] top-[8px] tracking-[-0.0762px] whitespace-nowrap">My Profile</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[24px] pr-[24.008px] relative size-full">
          <Link />
          <Navigation />
          <Link4 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[57px] items-start left-0 pb-px top-0 w-[1140px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container31 />
    </div>
  );
}

export default function EnhanceUiForModernSaaS() {
  return (
    <div className="bg-white relative size-full" data-name="Enhance UI for Modern SaaS">
      <Body />
      <Header />
    </div>
  );
}