import svgPaths from "./svg-830edlw4q5";
import imgImage7 from "figma:asset/0dd2934842d6fa9897708ea0e164b300c59f584e.png";

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

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#27272a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">UH Cleveland Medical Center</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="location-marker">
        <div className="absolute inset-[10%_15%_5.5%_15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2007 13.5203">
            <path clipRule="evenodd" d={svgPaths.p50abb00} fill="var(--fill-0, #22D3EE)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <Frame5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#27272a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">Bookmark Project</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] relative shrink-0">
      <Frame8 />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="bookmark">
        <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-5.56%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
              <path d={svgPaths.p3b08fff0} id="Vector" stroke="var(--stroke-0, #3F3F46)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between leading-[0] not-italic px-[16px] relative text-[#27272a] w-full whitespace-nowrap">
          <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-end relative shrink-0 text-[20px]">
            <p className="leading-[1.5]">RoboDog</p>
          </div>
          <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end relative shrink-0 text-[16px]">
            <p className="leading-[1.5]">Carroll Labs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[8px] items-start min-h-px min-w-px relative">
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
    </div>
  );
}

function Text() {
  return (
    <div className="content-start flex flex-wrap gap-y-[10px] items-start relative shrink-0 w-full" data-name="Text">
      <Frame2 />
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

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Text />
      <Tags />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start justify-center px-[16px] relative shrink-0 w-[540px]">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#27272a] text-[16px] w-full">
        <p className="leading-[1.5]">RoboDog is an ongoing research project led by Dr. Bryan Carroll at University Hospitals Cleveland to develop robotic dogs to assist in dermatologic surgery.</p>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Button/Outline/Default">
        <div className="bg-[#3f3f46] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Button/Primitive/Default">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
              <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
                <p className="leading-[1.5]">About the Project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame3 />
    </div>
  );
}

function Stacked() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[424px] py-[12px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.05)] top-[290px] w-[633px]" data-name="Stacked">
      <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Background">
        <div aria-hidden="true" className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Frame10 />
      <Frame1 />
      <div className="h-[215px] relative shrink-0 w-[382px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <Frame4 />
    </div>
  );
}

function Input() {
  return (
    <div className="h-[19px] relative shrink-0 w-[99px]" data-name="Input">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[#71717a] text-[16px] top-[calc(50%+0.5px)]">
        <p className="leading-[1.5]">Domains</p>
      </div>
    </div>
  );
}

function TextPrimitive() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[192px]" data-name="Text/Primitive">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip p-[12px] relative rounded-[inherit] w-full">
        <Input />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TextField() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text/Field">
      <TextPrimitive />
    </div>
  );
}

function Input1() {
  return (
    <div className="h-[19px] relative shrink-0 w-[99px]" data-name="Input">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[#71717a] text-[16px] top-[calc(50%+0.5px)]">
        <p className="leading-[1.5]">Skills</p>
      </div>
    </div>
  );
}

function TextPrimitive1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[192px]" data-name="Text/Primitive">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip p-[12px] relative rounded-[inherit] w-full">
        <Input1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TextField1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text/Field">
      <TextPrimitive1 />
    </div>
  );
}

function Input2() {
  return (
    <div className="h-[19px] relative shrink-0 w-[99px]" data-name="Input">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[#18181b] text-[16px] top-[calc(50%+0.5px)]">
        <p className="leading-[1.5]">Robotics</p>
      </div>
    </div>
  );
}

function TextPrimitive2() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[192px]" data-name="Text/Primitive">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip p-[12px] relative rounded-[inherit] w-full">
        <Input2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Select() {
  return (
    <div className="-translate-y-1/2 absolute h-[19px] right-[12px] top-1/2 w-[276px]" data-name="Select">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 276 19">
        <g id="Select">
          <path d={svgPaths.p31383d80} fill="var(--fill-0, #71717A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Input3() {
  return (
    <div className="-translate-y-1/2 absolute h-[19px] left-[12px] top-1/2 w-[276px]" data-name="Input">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[#71717a] text-[16px] top-[calc(50%+0.5px)]">
        <p className="leading-[1.5]">Projects</p>
      </div>
    </div>
  );
}

function TextSelect() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text/Select">
      <div className="bg-white h-[43px] relative rounded-[4px] shrink-0 w-[132px]" data-name="Text/Primitive">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <Select />
          <Input3 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Input">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">Institution</p>
      </div>
      <div className="h-[5.886px] relative shrink-0 w-[9.8px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 5.88586">
          <path d={svgPaths.p7220cf0} fill="var(--fill-0, #71717A)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function TextPrimitive3() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0" data-name="Text/Primitive">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[12px] py-[10px] relative rounded-[inherit]">
        <Input4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TextField2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text/Field">
      <TextPrimitive3 />
    </div>
  );
}

function Input5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Input">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">Proximity</p>
      </div>
      <div className="h-[5.886px] relative shrink-0 w-[9.8px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 5.88586">
          <path d={svgPaths.p7220cf0} fill="var(--fill-0, #71717A)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function TextPrimitive4() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0" data-name="Text/Primitive">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[12px] py-[10px] relative rounded-[inherit]">
        <Input5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TextField3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text/Field">
      <TextPrimitive4 />
    </div>
  );
}

function Input6() {
  return (
    <div className="h-[19px] relative shrink-0 w-[99px]" data-name="Input">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[#71717a] text-[16px] top-[calc(50%+0.5px)]">
        <p className="leading-[1.5]">Keyword</p>
      </div>
    </div>
  );
}

function TextPrimitive5() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[192px]" data-name="Text/Primitive">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip p-[12px] relative rounded-[inherit] w-full">
        <Input6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TextField4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text/Field">
      <TextPrimitive5 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-end left-[166px] top-[147px]">
      <TextField />
      <TextField1 />
      <TextPrimitive2 />
      <TextSelect />
      <TextField2 />
      <TextField3 />
      <TextField4 />
    </div>
  );
}

function Input7() {
  return (
    <div className="h-[19px] relative shrink-0 w-[99px]" data-name="Input">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[16px] text-white top-[calc(50%+0.5px)]">
        <p className="leading-[1.5]">Search</p>
      </div>
    </div>
  );
}

function TextPrimitive6() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#3f3f46] content-stretch flex gap-[10px] items-center left-[calc(50%+0.5px)] overflow-clip p-[12px] rounded-[4px] top-[206px]" data-name="Text/Primitive">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="search">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p35b67500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <Input7 />
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-white relative size-full" data-name="MacBook Pro 14' - 17">
      <NavigationHeaderDefault />
      <Stacked />
      <Frame9 />
      <TextPrimitive6 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] left-[703px] not-italic text-[16px] text-black top-[120px] whitespace-nowrap">
        <p className="leading-[1.5]">Project Search</p>
      </div>
    </div>
  );
}