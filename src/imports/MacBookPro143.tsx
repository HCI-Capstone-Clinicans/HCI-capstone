import svgPaths from "./svg-vultdylvr2";
import imgRectangle12 from "figma:asset/ddae6b8d5d02b2088350f4841c6924acbca5d8f7.png";
import imgRectangle13 from "figma:asset/c1723e711714dd180e9890511514930b6856cfb4.png";
import imgRectangle14 from "figma:asset/83df25dac5dc5e2ced674c21a91028ff1d2960ae.png";

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

function Frame21() {
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

function Frame20() {
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
              <p className="leading-[1.5]">Contact Andrew Chan</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#52525b] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <Frame21 />
      <Frame20 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start py-[48px] relative shrink-0">
      <Frame22 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] w-[173px]">
        <p className="leading-[1.5]">Gallery</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[298px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[66.67%] left-0 max-w-none top-[16.67%] w-full" src={imgRectangle12} />
        </div>
      </div>
      <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5]">Robot Dog Render (future state)</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[298px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle13} />
      </div>
      <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[12px] w-[173px]">
        <p className="leading-[1.5]">Robot Dog Prototype</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[298px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle14} />
      </div>
      <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[12px] w-[173px]">
        <p className="leading-[1.5]">Carroll Labs Team</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame10 />
      <Frame11 />
      <Frame13 />
    </div>
  );
}

function ButtonPrimitiveDefault() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button/Primitive/Default">
      <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.5]">See Skills Map</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#52525b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ButtonOutlineDefault() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Button/Outline/Default">
      <ButtonPrimitiveDefault />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">{`People `}</p>
      </div>
      <ButtonOutlineDefault />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center px-[16px] py-[24px] relative w-full">
          <div className="bg-[#d9d9d9] shrink-0 size-[111px]" />
          <div className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
            <p className="mb-0">Dr Bryan Carroll</p>
            <p className="mb-0">Clinician</p>
            <p className="mb-0">Dermatologic Surgeon, Researcher, Professor at Case Western</p>
            <p>Contact bca@uh.com | 555-555-5555</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center px-[16px] py-[24px] relative w-full">
          <div className="bg-[#d9d9d9] shrink-0 size-[111px]" />
          <div className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
            <p className="mb-0">Dr Maya Patel</p>
            <p className="mb-0">Clinician Support</p>
            <p className="mb-0">Medical Operations Executive</p>
            <p>Contact bca@uh.com | 555-555-5555</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center px-[16px] py-[24px] relative w-full">
          <div className="bg-[#d9d9d9] shrink-0 size-[111px]" />
          <div className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
            <p className="mb-0">Daniel Kim</p>
            <p className="mb-0">Engineer</p>
            <p className="mb-0">Biomedical Engineer Professor at Case Western Reserve</p>
            <p>Contact bca@uh.com | 555-555-5555</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonPrimitiveDefault1() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button/Primitive/Default">
      <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.5]">Contact Project Coordinator</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#52525b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ButtonOutlineDefault1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Button/Outline/Default">
      <ButtonPrimitiveDefault1 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-between pr-[24px] relative shrink-0 w-[797px]">
      <div className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="mb-0">Andrew Chan</p>
        <p className="mb-0">HCI Researcher</p>
        <p className="mb-0">Student Designer at CMU</p>
        <p>Contact bca@uh.com | 555-555-5555</p>
      </div>
      <ButtonOutlineDefault1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#cffafe] relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center px-[16px] py-[24px] relative w-full">
          <div className="bg-[#d9d9d9] shrink-0 size-[111px]" />
          <Frame23 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame19 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] w-[173px]">
        <p className="leading-[1.5]">Project Description</p>
      </div>
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[1.5] not-italic relative shrink-0 text-[#27272a] text-[16px] w-[963px] whitespace-pre-wrap">
        <p className="mb-0">RoboDog is a pioneering research initiative led by Dr. Bryan Carroll at University Hospitals Cleveland, dedicated to exploring the transformative potential of robotic canine technology within the field of dermatologic surgery. The project sits at the intersection of robotics, artificial intelligence, and precision medicine, with the goal of developing autonomous robotic dogs capable of assisting surgeons during complex dermatological procedures. By leveraging advanced sensor arrays, machine learning algorithms, and real-time imaging capabilities, RoboDog aims to enhance surgical accuracy, reduce procedural variability, and improve overall patient outcomes in skin cancer excisions, reconstructive procedures, and other dermatologic interventions.</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Under Dr. Carroll's leadership, the University Hospitals Cleveland research team is working to design robotic platforms that can seamlessly integrate into existing surgical workflows while complementing the expertise of human clinicians. Early-stage development focuses on refining the robots' dexterity and tactile sensitivity to meet the exacting demands of skin surgery, where millimeter-level precision can be the difference between optimal cosmetic results and complications. As the project progresses, Dr. Carroll and his team envision RoboDog serving not only as a surgical assistant but also as a data-gathering tool that contributes to a growing body of knowledge around automated dermatologic care, ultimately helping to expand access to high-quality surgical treatment across a broader range of clinical settings.`}</p>
      </div>
      <Frame9 />
      <Frame12 />
      <Frame14 />
      <Frame18 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 px-[32px] top-[104px] w-[1512px]">
      <Frame1 />
      <Frame7 />
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
    <div className="relative rounded-[24px] shrink-0 w-full">
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

function ButtonPrimitiveDefault2() {
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
      <ButtonPrimitiveDefault2 />
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
    <div className="relative rounded-[24px] shrink-0 w-full">
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
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[32px] top-[499px] w-[205px]">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-white relative size-full" data-name="MacBook Pro 14' - 3">
      <NavigationHeaderDefault />
      <Frame8 />
      <Frame6 />
    </div>
  );
}