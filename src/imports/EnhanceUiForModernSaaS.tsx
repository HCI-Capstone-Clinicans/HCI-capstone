import svgPaths from "./svg-jwnafuzfci";
import imgImage10 from "figma:asset/783f2c42ea769440e177775b6794f454354e65fd.png";
import imgImageRoboDogPrototype from "figma:asset/ddae6b8d5d02b2088350f4841c6924acbca5d8f7.png";
import imgRectangle12 from "figma:asset/83df25dac5dc5e2ced674c21a91028ff1d2960ae.png";

function Container() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6a7282] text-[13px] top-[2.5px] tracking-[-0.0762px] whitespace-nowrap">← Back to Projects</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] tracking-[0.3395px] uppercase whitespace-nowrap">Prototype development | August 2025 — Ongoing</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] min-h-px min-w-px not-italic relative text-[#101828] text-[30px] tracking-[0.3955px]">RoboDog</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Heading />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-[-6.25px] w-[87px]">
      <div className="relative shrink-0 size-[32px]" data-name="image 10">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] tracking-[-0.3125px] whitespace-nowrap">Carroll Labs</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <Frame />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[19.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#4a5565] text-[13px] top-px tracking-[-0.0762px] whitespace-nowrap">UH Cleveland Medical Center</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon />
      <Text />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-[201.336px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Container6 />
        <Paragraph />
        <Container8 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[9px] size-[12px] top-[7.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p3a7e7417} id="Vector" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 3.5H11V6.5" id="Vector_2" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-gradient-to-r from-[#f0fdf4] h-[26.5px] relative rounded-[8px] shrink-0 to-[#eff6ff] w-[96.102px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[56px] not-italic text-[#008236] text-[11px] text-center top-[5.5px] tracking-[0.0645px] whitespace-nowrap">87% Match</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[37.5px] relative rounded-[8px] shrink-0 w-[118.25px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[59px] not-italic text-[#364153] text-[13px] text-center top-[10px] tracking-[-0.0762px] whitespace-nowrap">Stay Updated</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#364153] text-[13px] text-center tracking-[-0.0762px] whitespace-nowrap">Contact Project Coordinator</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-end relative">
        <Button />
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container9 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white h-[174px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.5px] tracking-[0.3395px] uppercase whitespace-nowrap">Overview</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[63.375px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21.125px] left-0 not-italic text-[#364153] text-[13px] top-px tracking-[-0.0762px] w-[665px]">RoboDog is an innovative research project exploring the application of robotic assistance in dermatologic surgery. Led by Dr. Bryan Carroll at University Hospitals Cleveland Medical Center, the project aims to develop intelligent robotic systems that can assist surgeons during delicate skin procedures.</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[42.25px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21.125px] left-0 not-italic text-[#364153] text-[13px] top-px tracking-[-0.0762px] w-[660px]">The research combines expertise from robotics engineering, human-robot interaction, and clinical practice to create tools that enhance surgical precision while maintaining the human element critical to patient care.</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col h-[105.625px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white h-[188.125px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Heading1 />
        <Container11 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.5px] tracking-[0.3395px] uppercase whitespace-nowrap">Research gallery</p>
    </div>
  );
}

function ImageRoboDogPrototype() {
  return (
    <div className="col-1 justify-self-stretch pointer-events-none relative rounded-[8px] row-1 self-stretch shrink-0" data-name="Image (RoboDog prototype)">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full" src={imgImageRoboDogPrototype} />
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 rounded-[8px]" />
    </div>
  );
}

function ImageRoboDogInLab() {
  return (
    <div className="col-2 justify-self-stretch relative rounded-[8px] row-1 self-stretch shrink-0" data-name="Image (RoboDog in lab)">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute left-0 size-[334px] top-[-99.63px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle12} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[192px] relative shrink-0 w-full" data-name="Container">
      <ImageRoboDogPrototype />
      <ImageRoboDogInLab />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white h-[274.5px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Heading2 />
        <Container13 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[92.773px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.5px] tracking-[0.3395px] uppercase whitespace-nowrap">Team Members</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[115.23px] size-[14px] top-[9.75px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M8.75 1.75H12.25V5.25" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 8.16667L12.25 1.75" id="Vector_2" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p11263c80} id="Vector_3" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-white h-[33.5px] relative rounded-[8px] shrink-0 w-[142.227px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[13px] not-italic text-[#101828] text-[13px] top-[8px] tracking-[-0.0762px] whitespace-nowrap">View Skills Map</p>
        <Icon2 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[33.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Link />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[25.523px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">DBC</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[7.234px] pr-[7.242px] py-px relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[18px] left-0 right-0 top-[21.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] top-px whitespace-nowrap">Principal Investigator</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#101828] text-[13px] top-px tracking-[-0.0762px] whitespace-nowrap">Dr. Bryan Carroll</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.5px] tracking-[0.0645px] whitespace-nowrap">Dermatologic Surgery</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 right-0 top-0">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph3 />
        <Frame1 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[12px] h-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container17() {
  return (
    <div className="col-1 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16.914px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">DK</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[11.539px] pr-[11.547px] py-px relative size-full">
        <Text2 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[19.5px] left-0 top-0 w-[241px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#101828] text-[13px] top-px tracking-[-0.0762px] whitespace-nowrap">Daniel Kim</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[18px] left-0 top-[21.5px] w-[241px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] top-px whitespace-nowrap">Robotics Engineer</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[16.5px] left-0 top-[43.5px] w-[241px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.5px] tracking-[0.0645px] whitespace-nowrap">{`Mechanical & Electronics Engineering`}</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph6 />
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[12px] h-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container21() {
  return (
    <div className="col-2 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container22 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[27.195px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">DMP</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[6.398px] pr-[6.406px] py-px relative size-full">
        <Text3 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[19.5px] left-0 top-0 w-[241px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#101828] text-[13px] top-px tracking-[-0.0762px] whitespace-nowrap">Dr. Maya Patel</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[18px] left-0 top-[21.5px] w-[241px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] top-px whitespace-nowrap">Clinical Research Coordinator</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[16.5px] left-0 top-[43.5px] w-[241px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.5px] tracking-[0.0645px] whitespace-nowrap">Research Operations</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph9 />
        <Paragraph10 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[12px] h-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container25() {
  return (
    <div className="col-1 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container26 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">AC</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11.695px] py-px relative size-full">
        <Text4 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[19.5px] left-0 top-0 w-[241px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#101828] text-[13px] top-px tracking-[-0.0762px] whitespace-nowrap">Andrew Chan</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[18px] left-0 top-[21.5px] w-[241px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#4a5565] text-[12px] top-px whitespace-nowrap">UX Researcher</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[16.5px] left-0 top-[43.5px] w-[241px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.5px] tracking-[0.0645px] whitespace-nowrap">{`Human-Robot Interaction & Service Design`}</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph12 />
        <Paragraph13 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[12px] h-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container29() {
  return (
    <div className="col-2 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container30 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[204px] relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container21 />
      <Container25 />
      <Container29 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white h-[303.5px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1012.125px] items-start left-0 top-0 w-[720px]" data-name="Container">
      <Container3 />
      <Container10 />
      <Container12 />
      <Container14 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.5px] tracking-[0.3395px] uppercase whitespace-nowrap">Project Details</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.5px] tracking-[0.0645px] whitespace-nowrap">Status</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#101828] text-[13px] top-px tracking-[-0.0762px] whitespace-nowrap">Prototype Development</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[38px] items-start relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.5px] tracking-[0.0645px] whitespace-nowrap">Institution</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#101828] text-[13px] top-px tracking-[-0.0762px] whitespace-nowrap">UH Cleveland Medical Center</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[38px] items-start relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.5px] tracking-[0.0645px] whitespace-nowrap">Lab</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#101828] text-[13px] top-px tracking-[-0.0762px] whitespace-nowrap">Carroll Labs</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[38px] items-start relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.5px] tracking-[0.0645px] whitespace-nowrap">Team Size</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#101828] text-[13px] top-px tracking-[-0.0762px] whitespace-nowrap">4 members</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[38px] items-start relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[188px] items-start relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container39 />
      <Container42 />
      <Container45 />
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-white h-[262.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[21px] px-[21px] relative size-full">
        <Heading4 />
        <Container35 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.5px] tracking-[0.3395px] uppercase whitespace-nowrap">Research Areas</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[26.5px] left-0 rounded-[8px] top-0 w-[65px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[8px] not-italic text-[#364153] text-[11px] top-[4.5px] tracking-[0.0645px] whitespace-nowrap">Robotics</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-[#cffafe] border border-[#67e8f9] border-solid h-[26.5px] left-[71px] rounded-[8px] top-0 w-[154.008px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[8px] not-italic text-[#364153] text-[11px] top-[4.5px] tracking-[0.0645px] whitespace-nowrap">Human-Robot Interaction</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[26.5px] left-0 rounded-[8px] top-[32.5px] w-[121.563px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[8px] not-italic text-[#364153] text-[11px] top-[4.5px] tracking-[0.0645px] whitespace-nowrap">Surgery Assistance</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-[#cffafe] border border-[#67e8f9] border-solid h-[26.5px] left-[127.56px] rounded-[8px] top-[32.5px] w-[105.133px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[8px] not-italic text-[#364153] text-[11px] top-[4.5px] tracking-[0.0645px] whitespace-nowrap">Medical Devices</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[26.5px] left-0 rounded-[8px] top-[65px] w-[86.773px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[8px] not-italic text-[#364153] text-[11px] top-[4.5px] tracking-[0.0645px] whitespace-nowrap">UX Research</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[91.5px] relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Text6 />
      <Text7 />
      <Text8 />
      <Text9 />
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-white h-[166px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[21px] px-[21px] relative size-full">
        <Heading5 />
        <Container49 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.5px] tracking-[0.3395px] uppercase whitespace-nowrap">LOOKING FOR</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#364153] text-[11px] tracking-[0.0645px] whitespace-nowrap">Robotics Engineers</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#364153] text-[11px] tracking-[0.0645px] whitespace-nowrap">Grant Writers</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="bg-[#cffafe] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#67e8f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#364153] text-[11px] tracking-[0.0645px] whitespace-nowrap">Human-Robot Interaction Designer</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="bg-[#cffafe] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#67e8f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#364153] text-[11px] tracking-[0.0645px] whitespace-nowrap">Service Designer</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-center flex flex-wrap gap-[6px_4px] items-center relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Text11 />
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-white h-[166px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[21px] px-[21px] relative size-full">
        <Heading6 />
        <Container51 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.5px] tracking-[0.3395px] uppercase whitespace-nowrap">Related Projects</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#101828] text-[13px] top-px tracking-[-0.0762px] whitespace-nowrap">MedAssist AI</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.5px] tracking-[0.0645px] whitespace-nowrap">Surgical assistance platform</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[66px] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[13px] px-[13px] relative size-full">
        <Paragraph15 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#101828] text-[13px] top-px tracking-[-0.0762px] whitespace-nowrap">SmartSuture</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.5px] tracking-[0.0645px] whitespace-nowrap">Automated suturing research</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[66px] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[13px] px-[13px] relative size-full">
        <Paragraph17 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[144px] items-start relative shrink-0 w-full" data-name="Container">
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-white h-[218.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[21px] px-[21px] relative size-full">
        <Heading7 />
        <Container53 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1012.125px] items-start left-[744px] top-0 w-[348px]" data-name="Container">
      <Container34 />
      <Container48 />
      <Container50 />
      <Container52 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[1012.125px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container33 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-[1124.125px] relative shrink-0 w-[1140px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pt-[32px] px-[24px] relative size-full">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function ProjectDetail() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[1181.125px] items-start pt-[57px] relative shrink-0 w-full" data-name="ProjectDetail">
      <MainContent />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[762px] items-start left-0 top-0 w-[1140px]" data-name="Body">
      <ProjectDetail />
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
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3bf3e100} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
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

function Link3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[163.344px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Header1 />
        <Header2 />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="flex-[1_0_0] h-[31.5px] min-h-px min-w-px relative rounded-[8px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[12px] not-italic text-[#4a5565] text-[13px] top-[7px] tracking-[-0.0762px] whitespace-nowrap">Find Collaborators</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[31.5px] relative rounded-[8px] shrink-0 w-[104.914px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[12px] not-italic text-[#4a5565] text-[13px] top-[7px] tracking-[-0.0762px] whitespace-nowrap">Find Projects</p>
      </div>
    </div>
  );
}

function Link6() {
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
        <Link4 />
        <Link5 />
        <Link6 />
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[33.5px] relative rounded-[8px] shrink-0 w-[88.148px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[13px] not-italic text-[#364153] text-[13px] top-[8px] tracking-[-0.0762px] whitespace-nowrap">My Profile</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[24px] pr-[24.008px] relative size-full">
          <Link3 />
          <Navigation />
          <Link7 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[57px] items-start left-0 pb-px top-0 w-[1140px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container54 />
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