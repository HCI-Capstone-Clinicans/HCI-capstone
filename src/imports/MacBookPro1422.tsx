import svgPaths from "./svg-2mcsmds3a0";

function Logo() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Logo">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="user-group">
        <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-6.25%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
              <path d={svgPaths.p21efb780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[1.5]">Clinician Connect</p>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex gap-[24px] items-center leading-[0] not-italic overflow-clip relative shrink-0 text-[#cffafe] text-[16px] whitespace-nowrap" data-name="Links">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.5]">Find Collaborators</p>
      </div>
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.5]">Find Projects</p>
      </div>
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.5]">My Projects</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[32px] items-center left-[24px] top-[20px]">
      <Logo />
      <Links />
    </div>
  );
}

function NavigationHeaderDefault() {
  return (
    <div className="absolute bg-[#06b6d4] h-[72px] left-0 top-0 w-[1512px]" data-name="Navigation/Header/Default">
      <Frame />
      <div className="-translate-y-1/2 absolute content-stretch flex items-center right-[36px] top-1/2" data-name="Button/Outline/Default">
        <div className="relative rounded-[4px] shrink-0" data-name="Button/Primitive/Default">
          <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
            <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[1.5]">My Profile</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#27272a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">UH Cleveland Medical Center</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="location-marker">
        <div className="absolute inset-[10%_15%_5.5%_15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2007 13.5203">
            <path clipRule="evenodd" d={svgPaths.p50abb00} fill="var(--fill-0, #22D3EE)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">Ongoing Research Project</p>
      </div>
      <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#27272a] text-[64px] whitespace-nowrap">
        <p className="leading-[1.5]">RoboDog</p>
      </div>
      <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#27272a] text-[30px] whitespace-nowrap">
        <p className="leading-[1.5]">Carroll Labs</p>
      </div>
      <Frame3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Button/Outline/Default">
        <div className="relative rounded-[4px] shrink-0" data-name="Button/Primitive/Default">
          <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
            <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[1.5]">Stay Updated</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#52525b] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Button/Outline/Default">
        <div className="relative rounded-[4px] shrink-0" data-name="Button/Primitive/Default">
          <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
            <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[1.5]">Contact Project Coordinator</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#52525b] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <Frame10 />
      <Frame9 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start py-[48px] relative shrink-0">
      <Frame11 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex items-start left-0 px-[32px] top-[113px] w-[1512px]">
      <Frame1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[34px] p-[10px] top-[516px]">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] w-[173px]">
        <p className="leading-[1.5]">Skills Map</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-0 left-[1043px] top-[602px] w-[382px]">
      <div className="absolute inset-[-1.5px_-0.39%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 385 3">
          <g id="Group 19">
            <path d="M1.5 1.5H383.5" id="Vector 1" stroke="var(--stroke-0, #D4D4D8)" strokeLinecap="round" strokeWidth="3" />
            <path d="M1.5 1.5H26.5" id="Vector 2" stroke="var(--stroke-0, #18181B)" strokeLinecap="round" strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
            <p className="leading-[1.5]">Service Design</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[109px] items-start left-[428px] top-[1163px] w-[168px]">
      <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black whitespace-nowrap">
        <p className="leading-[1.5]">Andrew Chan</p>
      </div>
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="leading-[1.5]">HCI Researcher</p>
      </div>
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
            <p className="leading-[1.5]">Research Operations</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex flex-col h-[110px] items-start left-[822px] top-[1260px] w-[181px]">
      <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black whitespace-nowrap">
        <p className="leading-[1.5]">Dr. Maya Patel</p>
      </div>
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="leading-[1.5]">Clinician Support</p>
      </div>
      <Frame20 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center w-[98px]">
            <p className="leading-[1.5]">Surgery</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col h-[109px] items-start left-[971px] top-[1577px] w-[217px]">
      <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black whitespace-nowrap">
        <p className="leading-[1.5]">Dr. Bryan Carroll</p>
      </div>
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="leading-[1.5]">Dermatologic Surgeon</p>
      </div>
      <Frame17 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
            <p className="leading-[1.5]">Mechanical Engineering</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
            <p className="leading-[1.5]">{`Electronics Engineering `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex flex-col h-[154px] items-start left-[1003px] top-[915px] w-[178px]">
      <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[30px] text-black w-[min-content]">
        <p className="leading-[1.5]">Daniel Kim</p>
      </div>
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="leading-[1.5]">Robotics Engineer</p>
      </div>
      <Frame21 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex h-[56px] items-center justify-center left-[738px] p-[10px] rounded-[24px] top-[1011px] w-[106px]">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center w-[68px]">
        <p className="leading-[1.5]">Human-Robot Interaction</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex h-[56px] items-center justify-center left-[937px] p-[10px] rounded-[24px] top-[1152px] w-[107px]">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center w-[98px]">
        <p className="leading-[1.5]">Quantitative Research</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex h-[37px] items-center justify-center left-[691px] p-[10px] rounded-[24px] top-[1226px] w-[106px]">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center w-[98px]">
        <p className="leading-[1.5]">UX Writing</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex h-[37px] items-center justify-center left-[580px] p-[10px] rounded-[24px] top-[987px] w-[106px]">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center w-[98px]">
        <p className="leading-[1.5]">Visual Design</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center left-[822px] p-[10px] rounded-[24px] top-[912px] w-[106px]">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center w-[98px]">
        <p className="leading-[1.5]">Product Development</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex h-[51px] items-center justify-center left-[780px] p-[10px] rounded-[24px] top-[1094px] w-[74px]">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center w-[63px]">
        <p className="leading-[1.5]">Design Thinking</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex h-[37px] items-center justify-center left-[937px] p-[10px] rounded-[24px] top-[1435px] w-[106px]">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center w-[98px]">
        <p className="leading-[1.5]">Medicine</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
            <p className="leading-[1.5]">Product Design</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[649px] top-[743px] w-[152px]">
      <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black whitespace-nowrap">
        <p className="leading-[1.5]">You</p>
      </div>
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="leading-[1.5]">HCI Practitioner</p>
      </div>
      <Frame30 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[56px] px-[16px] py-[32px] rounded-[4px] top-[630px]">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#71717a] text-[16px] w-[min-content]">
        <p className="leading-[1.5]">Insights Generated</p>
      </div>
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#27272a] text-[0px] w-[410px]">
        <ul className="list-disc text-[16px]">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.5]">You are closest in skillset to</span>
            <span className="font-['Helvetica_Neue:Bold',sans-serif] leading-[1.5] not-italic">{` Andrew Chan`}</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.5]">You bring a new skill of</span>
            <span className="font-['Helvetica_Neue:Bold',sans-serif] leading-[1.5] not-italic">{` Product Design`}</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.5]">{`The team becomes stronger in `}</span>
            <span className="font-['Helvetica_Neue:Bold',sans-serif] leading-[1.5] not-italic">{`Design Thinking `}</span>
            <span className="leading-[1.5]">and</span>
            <span className="font-['Helvetica_Neue:Bold',sans-serif] leading-[1.5] not-italic">{` Human-Robot Interaction`}</span>
            <span className="leading-[1.5]">{` with you`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Button/Rounded/Default">
        <div className="bg-[#f4f4f5] content-stretch flex items-center overflow-clip px-[16px] py-[5px] relative rounded-[999px] shrink-0" data-name="Button/Primitive/Default">
          <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[12px] text-center whitespace-nowrap">
            <p className="leading-[1.5]">Robotics</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Button/Rounded/Default">
        <div className="bg-[#cffafe] content-stretch flex items-center overflow-clip px-[16px] py-[5px] relative rounded-[999px] shrink-0" data-name="Button/Primitive/Default">
          <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[12px] text-center whitespace-nowrap">
            <p className="leading-[1.5]">Human-Robot Interaction</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Button/Rounded/Default">
        <div className="bg-[#f4f4f5] content-stretch flex items-center overflow-clip px-[16px] py-[5px] relative rounded-[999px] shrink-0" data-name="Button/Primitive/Default">
          <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[12px] text-center whitespace-nowrap">
            <p className="leading-[1.5]">Surgery Assistance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[32px] relative w-full">
        <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[12px] w-full">
          <p className="leading-[1.5]">Project Topics</p>
        </div>
        <Tags />
      </div>
    </div>
  );
}

function ButtonRoundedDefault() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Button/Rounded/Default">
      <div className="bg-[#f4f4f5] content-stretch flex items-center overflow-clip px-[16px] py-[5px] relative rounded-[999px] shrink-0" data-name="Button/Primitive/Default">
        <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[1.5]">Robotics Engineers</p>
        </div>
      </div>
    </div>
  );
}

function ButtonPrimitiveDefault() {
  return (
    <div className="bg-[#cffafe] content-center flex flex-wrap items-center overflow-clip px-[16px] py-[5px] relative rounded-[999px] shrink-0" data-name="Button/Primitive/Default">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[12px] w-[141px]">
        <p className="leading-[1.5]">Human-Robot Interaction Practitioner</p>
      </div>
    </div>
  );
}

function ButtonRoundedDefault1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Button/Rounded/Default">
      <ButtonPrimitiveDefault />
    </div>
  );
}

function ButtonRoundedDefault2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Button/Rounded/Default">
      <div className="bg-[#f4f4f5] content-stretch flex items-center overflow-clip px-[16px] py-[5px] relative rounded-[999px] shrink-0" data-name="Button/Primitive/Default">
        <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[1.5]">Grant Writers</p>
        </div>
      </div>
    </div>
  );
}

function Tags1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="Tags">
      <ButtonRoundedDefault />
      <ButtonRoundedDefault1 />
      <ButtonRoundedDefault2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[32px] relative w-full">
        <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#a1a1aa] text-[12px] w-[min-content]">
          <p className="leading-[1.5]">Looking for</p>
        </div>
        <Tags1 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[56px] top-[848px] w-[205px]">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-white relative size-full" data-name="MacBook Pro 14' - 22">
      <NavigationHeaderDefault />
      <Frame8 />
      <div className="-translate-x-1/2 absolute border border-[#d4d4d8] border-solid h-[1366px] left-[calc(50%-1px)] rounded-[24px] top-[566px] w-[1442px]" />
      <Frame7 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center left-[calc(50%-628px)] top-[calc(50%-406.5px)]" data-name="Button/Bordered/Default">
        <div className="bg-[#52525b] relative rounded-[4px] shrink-0" data-name="Button/Border/Default">
          <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
            <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[1.5]">How do I fit in?</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#3f3f46] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center left-[calc(50%+680.5px)] top-[calc(50%+870.5px)]" data-name="Button/Rounded/Default">
        <div className="bg-[#a1a1aa] content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[999px] shrink-0" data-name="Button/Primitive/Default">
          <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
            <p className="leading-[1.5]">+</p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center left-[calc(50%+630.5px)] top-[calc(50%+870.5px)]" data-name="Button/Rounded/Default">
        <div className="bg-[#a1a1aa] content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[999px] shrink-0" data-name="Button/Primitive/Default">
          <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
            <p className="leading-[1.5]">-</p>
          </div>
        </div>
      </div>
      <Group />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] left-[1007px] not-italic text-[#71717a] text-[12px] text-center top-[602px] whitespace-nowrap">
        <p className="leading-[1.5]">Zoom</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] left-[1034.5px] not-italic text-[#71717a] text-[12px] text-center top-[602px] whitespace-nowrap">
        <p className="leading-[1.5]">0</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] left-[1441.5px] not-italic text-[#71717a] text-[12px] text-center top-[602px] whitespace-nowrap">
        <p className="leading-[1.5]">100</p>
      </div>
      <div className="absolute left-[1060px] size-[15px] top-[594px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <circle cx="7.5" cy="7.5" fill="var(--fill-0, #18181B)" id="Ellipse 12" r="7.5" />
        </svg>
      </div>
      <div className="absolute left-[497px] mix-blend-multiply size-[481px] top-[703px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 481 481">
          <g id="Ellipse 13" style={{ mixBlendMode: "multiply" }}>
            <circle cx="240.5" cy="240.5" fill="var(--fill-0, #60A5FA)" r="240" />
            <circle cx="240.5" cy="240.5" r="240" stroke="var(--stroke-0, #1E40AF)" />
          </g>
        </svg>
      </div>
      <div className="absolute left-[374px] mix-blend-multiply size-[475px] top-[926px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 475 475">
          <g id="Ellipse 8" style={{ mixBlendMode: "multiply" }}>
            <circle cx="237.5" cy="237.5" fill="var(--fill-0, #CFFAFE)" r="237" />
            <circle cx="237.5" cy="237.5" r="237" stroke="var(--stroke-0, #22D3EE)" />
          </g>
        </svg>
      </div>
      <div className="absolute h-[475px] left-[753px] mix-blend-multiply top-[779px] w-[474px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 474 475">
          <g id="Ellipse 9" style={{ mixBlendMode: "multiply" }}>
            <path d={svgPaths.p36795600} fill="var(--fill-0, #ECFDF5)" />
            <path d={svgPaths.p36795600} stroke="var(--stroke-0, #34D399)" />
          </g>
        </svg>
      </div>
      <div className="absolute left-[675px] mix-blend-multiply size-[474px] top-[1060px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 474 474">
          <g id="Ellipse 10" style={{ mixBlendMode: "multiply" }}>
            <circle cx="237" cy="237" fill="var(--fill-0, #FEF3C7)" r="236.5" />
            <circle cx="237" cy="237" r="236.5" stroke="var(--stroke-0, #FBBF24)" />
          </g>
        </svg>
      </div>
      <div className="absolute h-[475px] left-[841px] mix-blend-multiply top-[1377px] w-[476px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 476 475">
          <g id="Ellipse 11" style={{ mixBlendMode: "multiply" }}>
            <path d={svgPaths.p1a809500} fill="var(--fill-0, #FFE4E6)" />
            <path d={svgPaths.p1a809500} stroke="var(--stroke-0, #F43F5E)" />
          </g>
        </svg>
      </div>
      <Frame12 />
      <Frame14 />
      <Frame15 />
      <Frame13 />
      <Frame16 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
      <Frame27 />
      <Frame28 />
      <Frame18 />
      <Frame29 />
      <Frame31 />
      <Frame6 />
    </div>
  );
}