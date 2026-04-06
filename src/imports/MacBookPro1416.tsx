import svgPaths from "./svg-pt21mh6ak2";

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
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[#71717a] text-[16px] top-[calc(50%+0.5px)]">
        <p className="leading-[1.5]">Interests</p>
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

function Frame1() {
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
    <div className="bg-white relative size-full" data-name="MacBook Pro 14' - 16">
      <NavigationHeaderDefault />
      <Frame1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] left-[703px] not-italic text-[16px] text-black top-[120px] whitespace-nowrap">
        <p className="leading-[1.5]">Project Search</p>
      </div>
      <div className="absolute left-[487px] size-[559px] top-[329px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 559 559">
          <circle cx="279.5" cy="279.5" fill="var(--fill-0, #F4F4F5)" id="Ellipse 14" r="279" stroke="var(--stroke-0, #71717A)" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] left-[759px] not-italic text-[0px] text-black text-center top-[609px] w-[194px]">
        <p>
          <span className="leading-[1.5] text-[36px]">{`54 projects `}</span>
          <span className="font-['Helvetica_Neue:Light',sans-serif] leading-[1.5] not-italic text-[24px]">in Cleveland, Ohio</span>
        </p>
      </div>
      <div className="absolute bg-white border border-[#a1a1aa] border-solid h-[109px] left-[572px] rounded-[4px] top-[457px] w-[74px]" />
      <div className="absolute bg-white border border-[#a1a1aa] border-solid h-[109px] left-[676px] rounded-[4px] top-[402px] w-[74px]" />
      <div className="absolute bg-white border border-[#a1a1aa] border-solid h-[109px] left-[815px] rounded-[4px] top-[436px] w-[74px]" />
      <div className="absolute bg-white border border-[#a1a1aa] border-solid h-[109px] left-[901px] rounded-[4px] top-[545px] w-[74px]" />
      <div className="absolute bg-white border border-[#a1a1aa] border-solid h-[109px] left-[808px] rounded-[4px] top-[673px] w-[74px]" />
      <div className="absolute bg-white border border-[#a1a1aa] border-solid h-[109px] left-[713px] rounded-[4px] top-[719px] w-[74px]" />
      <div className="absolute bg-white border border-[#a1a1aa] border-solid h-[109px] left-[567px] rounded-[4px] top-[642px] w-[74px]" />
      <TextPrimitive6 />
    </div>
  );
}