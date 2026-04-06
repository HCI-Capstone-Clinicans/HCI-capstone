import svgPaths from "./svg-fkrzgmfmuu";

function Heading() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">Find Projects</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#4a5565] text-[13px] top-px tracking-[-0.0762px] whitespace-nowrap">Discover research opportunities in Cleveland, Ohio</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[55.5px] items-start left-[24px] top-[32px] w-[1092px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[92.19px] size-[16px] top-[10.75px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#101828] h-[37.5px] left-[790.5px] rounded-[8px] top-[49.5px] w-[251.5px]" data-name="Button">
      <Icon />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[138.69px] not-italic text-[13px] text-center text-white top-[10px] tracking-[-0.0762px] whitespace-nowrap">Search</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[37.5px] left-0 rounded-[8px] top-0 w-[251.5px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(10,10,10,0.5)] tracking-[-0.0762px] whitespace-nowrap">Domains</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute h-[37.5px] left-[263.5px] rounded-[8px] top-0 w-[251.5px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(10,10,10,0.5)] tracking-[-0.0762px] whitespace-nowrap">Skills</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextInput2() {
  return (
    <div className="absolute h-[37.5px] left-[527px] rounded-[8px] top-0 w-[251.5px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(10,10,10,0.5)] tracking-[-0.0762px] whitespace-nowrap">Interests</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Option() {
  return <div className="absolute left-[-840.5px] size-0 top-[-194.5px]" data-name="Option" />;
}

function Option1() {
  return <div className="absolute left-[-840.5px] size-0 top-[-194.5px]" data-name="Option" />;
}

function Option2() {
  return <div className="absolute left-[-840.5px] size-0 top-[-194.5px]" data-name="Option" />;
}

function Option3() {
  return <div className="absolute left-[-840.5px] size-0 top-[-194.5px]" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="absolute bg-white border border-[#d1d5dc] border-solid h-[37.5px] left-0 rounded-[8px] top-0 w-[251.5px]" data-name="Dropdown">
      <Option />
      <Option1 />
      <Option2 />
      <Option3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[13.5px] not-italic text-[13px] text-[rgba(10,10,10,0.5)] top-[9.5px] tracking-[-0.0762px] whitespace-nowrap">Institutions</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[223.5px] size-[16px] top-[10.75px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[37.5px] left-[790.5px] top-0 w-[251.5px]" data-name="Container">
      <Dropdown />
      <Icon1 />
    </div>
  );
}

function Option4() {
  return <div className="absolute left-[-50px] size-0 top-[-244px]" data-name="Option" />;
}

function Option5() {
  return <div className="absolute left-[-50px] size-0 top-[-244px]" data-name="Option" />;
}

function Option6() {
  return <div className="absolute left-[-50px] size-0 top-[-244px]" data-name="Option" />;
}

function Option7() {
  return <div className="absolute left-[-50px] size-0 top-[-244px]" data-name="Option" />;
}

function Option8() {
  return <div className="absolute left-[-50px] size-0 top-[-244px]" data-name="Option" />;
}

function Dropdown1() {
  return (
    <div className="absolute bg-white border border-[#d1d5dc] border-solid h-[37.5px] left-0 rounded-[8px] top-0 w-[251.5px]" data-name="Dropdown">
      <Option4 />
      <Option5 />
      <Option6 />
      <Option7 />
      <Option8 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[223.5px] size-[16px] top-[10.75px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[37.5px] left-0 top-[49.5px] w-[251.5px]" data-name="Container">
      <Dropdown1 />
      <Icon2 />
    </div>
  );
}

function TextInput3() {
  return (
    <div className="absolute h-[37.5px] left-[263.5px] rounded-[8px] top-[49.5px] w-[515px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(10,10,10,0.5)] tracking-[-0.0762px] whitespace-nowrap">Keyword search...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[87px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <TextInput />
      <TextInput1 />
      <TextInput2 />
      <Container3 />
      <Container4 />
      <TextInput3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[192.5px] items-start left-[24px] pb-px pt-[25px] px-[25px] rounded-[10px] top-[111.5px] w-[1092px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container2 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[212.25px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#101828] text-[0px] top-px tracking-[-0.0762px] whitespace-nowrap">
          <span className="leading-[19.5px] text-[13px]">2</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] text-[#4a5565] text-[13px]">{` projects found in Cleveland, Ohio`}</span>
        </p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[18px] relative shrink-0 w-[44.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">Sort by:</p>
      </div>
    </div>
  );
}

function Option9() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option10() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option11() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown2() {
  return (
    <div className="flex-[1_0_0] h-[26px] min-h-px min-w-px relative rounded-[8px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pl-[-1014px] pr-[1116px] pt-[-385px] relative size-full">
        <Option9 />
        <Option10 />
        <Option11 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[26px] relative shrink-0 w-[154.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text />
        <Dropdown2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-center justify-between left-[24px] top-[328px] w-[1092px]" data-name="Container">
      <Paragraph1 />
      <Container6 />
    </div>
  );
}

function Link() {
  return (
    <div className="h-[28px] relative shrink-0 w-[77.773px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">Burnout Prevention for Primary Caregivers</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <Link />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#4a5565] text-[13px] top-px tracking-[-0.0762px] whitespace-nowrap">Cleveland Art Labs</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] h-[51.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container13 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 13.3333">
            <path d={svgPaths.p1c7dc880} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[51.5px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Button1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1539e500} id="Vector" stroke="var(--stroke-0, #00B8DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p37b99980} id="Vector_2" stroke="var(--stroke-0, #00B8DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[165.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">UH Cleveland Medical Center</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon4 />
      <Text1 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[42.25px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21.125px] left-0 not-italic text-[#364153] text-[13px] top-px tracking-[-0.0762px] w-[805px]">Burnout Prevention is an ongoing research project led by Dr. Susan Stern at University Hospitals Cleveland in conjunction with the Cleveland Institute of Art to develop digital tools to aid caregivers.</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[26.5px] left-0 rounded-[8px] top-0 w-[69px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[10px] not-italic text-[#364153] text-[11px] top-[4.5px] tracking-[0.0645px] whitespace-nowrap">Robotics</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-[#ecfeff] border border-[#a2f4fd] border-solid h-[26.5px] left-[75px] rounded-[8px] top-0 w-[158.008px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[10px] not-italic text-[#007595] text-[11px] top-[4.5px] tracking-[0.0645px] whitespace-nowrap">Human-Robot Interaction</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[26.5px] left-[239.01px] rounded-[8px] top-0 w-[125.563px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[10px] not-italic text-[#364153] text-[11px] top-[4.5px] tracking-[0.0645px] whitespace-nowrap">Surgery Assistance</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[26.5px] relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
      <Text4 />
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#101828] h-[37.5px] relative rounded-[8px] shrink-0 w-[109.5px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[16px] not-italic text-[13px] text-white top-[9px] tracking-[-0.0762px] whitespace-nowrap">View Project</p>
      </div>
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
    <div className="bg-white h-[37.5px] relative rounded-[8px] shrink-0 w-[98.633px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[49.5px] not-italic text-[#364153] text-[13px] text-center top-[10px] tracking-[-0.0762px] whitespace-nowrap">Contact PI</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[8px] h-[45.5px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Link1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1_0_0] h-[231.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Container11 />
        <Container14 />
        <Paragraph3 />
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[279.75px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start pt-[24px] px-[24px] relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white h-[281.75px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[107.25px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">SmartSuture</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <Link2 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#4a5565] text-[13px] top-px tracking-[-0.0762px] whitespace-nowrap">Biomedical Engineering</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[1_0_0] h-[51.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container22 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 13.3333">
            <path d={svgPaths.p1c7dc880} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[51.5px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Button4 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1539e500} id="Vector" stroke="var(--stroke-0, #00B8DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p37b99980} id="Vector_2" stroke="var(--stroke-0, #00B8DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[187.32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">Case Western Reserve University</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon6 />
      <Text5 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[21.125px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21.125px] left-0 not-italic text-[#364153] text-[13px] top-px tracking-[-0.0762px] whitespace-nowrap">Automated suturing research combining robotics and computer vision to assist in minimally invasive procedures.</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-[#ecfeff] border border-[#a2f4fd] border-solid h-[26.5px] left-0 rounded-[8px] top-0 w-[69px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[10px] not-italic text-[#007595] text-[11px] top-[4.5px] tracking-[0.0645px] whitespace-nowrap">Robotics</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[26.5px] left-[75px] rounded-[8px] top-0 w-[111.078px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[10px] not-italic text-[#364153] text-[11px] top-[4.5px] tracking-[0.0645px] whitespace-nowrap">Computer Vision</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[26.5px] left-[192.08px] rounded-[8px] top-0 w-[109.133px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[10px] not-italic text-[#364153] text-[11px] top-[4.5px] tracking-[0.0645px] whitespace-nowrap">Medical Devices</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[26.5px] relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Text7 />
      <Text8 />
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[#101828] h-[37.5px] relative rounded-[8px] shrink-0 w-[109.5px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[16px] not-italic text-[13px] text-white top-[9px] tracking-[-0.0762px] whitespace-nowrap">View Project</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white h-[37.5px] relative rounded-[8px] shrink-0 w-[118.25px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[59px] not-italic text-[#364153] text-[13px] text-center top-[10px] tracking-[-0.0762px] whitespace-nowrap">Stay Updated</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white h-[37.5px] relative rounded-[8px] shrink-0 w-[98.633px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[49.5px] not-italic text-[#364153] text-[13px] text-center top-[10px] tracking-[-0.0762px] whitespace-nowrap">Contact PI</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[8px] h-[45.5px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Link3 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[1_0_0] h-[210.625px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Container20 />
        <Container23 />
        <Paragraph5 />
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[258.625px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start pt-[24px] px-[24px] relative size-full">
        <Container19 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white h-[260.625px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container18 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[558.375px] items-start left-[24px] top-[370px] w-[1092px]" data-name="Container">
      <Container8 />
      <Container17 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-[960.375px] relative shrink-0 w-[1140px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container />
        <Container1 />
        <Container5 />
        <Container7 />
      </div>
    </div>
  );
}

function FindProjects() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[1017.375px] items-start pt-[57px] relative shrink-0 w-full" data-name="FindProjects">
      <MainContent />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[762px] items-start left-0 top-0 w-[1140px]" data-name="Body">
      <FindProjects />
    </div>
  );
}

function Icon7() {
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
        <Icon7 />
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

function Link4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[163.344px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Header1 />
        <Header2 />
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="flex-[1_0_0] h-[31.5px] min-h-px min-w-px relative rounded-[8px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[12px] not-italic text-[#4a5565] text-[13px] top-[7px] tracking-[-0.0762px] whitespace-nowrap">Find Collaborators</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-[#f3f4f6] h-[31.5px] relative rounded-[8px] shrink-0 w-[104.914px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[12px] not-italic text-[#101828] text-[13px] top-[7px] tracking-[-0.0762px] whitespace-nowrap">Find Projects</p>
      </div>
    </div>
  );
}

function Link7() {
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
        <Link5 />
        <Link6 />
        <Link7 />
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[33.5px] relative rounded-[8px] shrink-0 w-[88.148px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[13px] not-italic text-[#364153] text-[13px] top-[8px] tracking-[-0.0762px] whitespace-nowrap">My Profile</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[24px] pr-[24.008px] relative size-full">
          <Link4 />
          <Navigation />
          <Link8 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[57px] items-start left-0 pb-px top-0 w-[1140px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container26 />
    </div>
  );
}

export default function EnhanceUiForModernSaaSSearchUnfilled() {
  return (
    <div className="bg-white relative size-full" data-name="Enhance UI for Modern SaaS - Search Unfilled">
      <Body />
      <Header />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[61px] not-italic text-[13px] text-[rgba(10,10,10,0.5)] top-[254px] tracking-[-0.0762px] whitespace-nowrap">Proximity</p>
    </div>
  );
}