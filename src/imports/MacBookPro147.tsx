import svgPaths from "./svg-ezjhi8jt1r";
import imgRectangle13 from "figma:asset/9413ba0db7fd4497be1e97294806a8143016fe86.png";
import imgRectangle14 from "figma:asset/759e6cedb45da0ad6f8fbabfcb3e19583dd2b237.png";

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
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.5]">Find Collaborators</p>
      </div>
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center relative shrink-0">
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
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <Logo />
      <Links />
    </div>
  );
}

function NavigationHeaderDefault() {
  return (
    <div className="bg-[#06b6d4] relative shrink-0 w-full" data-name="Navigation/Header/Default">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Frame />
          <div className="content-stretch flex items-center relative shrink-0" data-name="Button/Outline/Default">
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
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="search">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.p6b7a180} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Input() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[10px] items-center justify-center left-[12px] top-1/2" data-name="Input">
      <Search />
      <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">
        <p className="leading-[1.5]">Service Designer</p>
      </div>
    </div>
  );
}

function TextPrimitive() {
  return (
    <div className="bg-white h-[43px] relative rounded-[4px] shrink-0 w-[300px]" data-name="Text/Primitive">
      <div className="overflow-clip relative rounded-[inherit] size-full">
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

function Frame17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <TextField />
    </div>
  );
}

function Adjustments() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="adjustments">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="adjustments">
          <path d={svgPaths.p3768500} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Input1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[10px] items-center justify-center left-[12px] top-1/2" data-name="Input">
      <Adjustments />
      <div className="flex flex-col font-['Helvetica_Neue:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">
        <p className="leading-[1.5]">Filter</p>
      </div>
    </div>
  );
}

function TextPrimitive1() {
  return (
    <div className="bg-white h-[43px] relative rounded-[4px] shrink-0 w-[150px]" data-name="Text/Primitive">
      <div className="overflow-clip relative rounded-[inherit] size-full">
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

function Frame19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <TextField1 />
    </div>
  );
}

function Input2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[10px] items-center justify-center left-[12px] top-1/2" data-name="Input">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="sort-descending">
        <div className="absolute inset-[16.67%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-6.25%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
              <path d={svgPaths.p1c597380} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Helvetica_Neue:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">
        <p className="leading-[1.5]">Sort by</p>
      </div>
    </div>
  );
}

function TextPrimitive2() {
  return (
    <div className="bg-white h-[43px] relative rounded-[4px] shrink-0 w-[150px]" data-name="Text/Primitive">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Input2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TextField2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text/Field">
      <TextPrimitive2 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <TextField2 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[6px] items-start justify-center relative shrink-0 w-full">
      <Frame17 />
      <Frame19 />
      <Frame18 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">Results 1-20</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center p-[10px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#22c55e] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">
        <p className="leading-[1.5]">80% Match</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[#0891b2] content-stretch flex items-center justify-center p-[10px] relative rounded-[4px] shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[1.5]">Get in touch</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Frame36 />
      <Frame34 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0">
      <div className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[24px] text-black w-[806px]">
        <p className="mb-0">Jane Smith</p>
        <p className="mb-0">UX Researcher and Designer</p>
        <p className="mb-0">UX Research Manager at Phillips Medical</p>
        <p>Contact js@pm.com | 555-555-5555</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame22 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0">
      <Frame21 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0">
      <Frame41 />
      <Frame33 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[18px] text-black w-[806px]">Past Projects</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame24 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0">
      <Frame23 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0">
      <Frame42 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Button/Outline/Default">
        <div className="relative rounded-[4px] shrink-0" data-name="Button/Primitive/Default">
          <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
            <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[1.5]">Surgical Robot Research</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#52525b] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Button/Outline/Default">
        <div className="relative rounded-[4px] shrink-0" data-name="Button/Primitive/Default">
          <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
            <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[1.5]">Operating Room Design</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#52525b] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame39 />
      <Frame2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Service Design</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">User Research</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">UX Prototyping</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Rapid Prototyping</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Product Design</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame26 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[18px] text-black w-[806px]">{`Skills `}</p>
      <Frame3 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[18px] text-black w-[806px]">Interests</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Human-robot interaction</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Human centered design</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Product design</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Sustainability</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">User research</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame13 />
      <Frame28 />
      <Frame29 />
      <Frame30 />
      <Frame45 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame27 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame25 />
      <Frame4 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0">
      <Frame35 />
      <Frame38 />
      <Frame43 />
      <Frame44 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1264px]">
      <div className="relative shrink-0 size-[394px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle13} />
      </div>
      <Frame37 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex items-start px-[32px] py-[24px] relative w-full">
        <Frame40 />
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-[#fde68a] content-stretch flex items-center justify-center p-[10px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#eab308] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">
        <p className="leading-[1.5]">47% Match</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-[#0891b2] content-stretch flex items-center justify-center p-[10px] relative rounded-[4px] shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[1.5]">Get in touch</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Frame50 />
      <Frame51 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0">
      <div className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[24px] text-black w-[806px]">
        <p className="mb-0">John Doe</p>
        <p className="mb-0">Service Designer</p>
        <p className="mb-0">Service Designer at Pittsburgh International Airport</p>
        <p>Contact jd@pit.com | 555-555-5555</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame54 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0">
      <Frame53 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0">
      <Frame49 />
      <Frame52 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[18px] text-black w-[806px]">Past Projects</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame59 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0">
      <Frame58 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0">
      <Frame57 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Button/Outline/Default">
        <div className="relative rounded-[4px] shrink-0" data-name="Button/Primitive/Default">
          <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
            <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[1.5]">Check-in Robots</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#52525b] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Button/Outline/Default">
        <div className="relative rounded-[4px] shrink-0" data-name="Button/Primitive/Default">
          <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
            <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[1.5]">TSA Kiosk</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#52525b] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame56 />
      <Frame5 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Service Design</p>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">User Research</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">UX Prototyping</p>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Rapid Prototyping</p>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Product Design</p>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame62 />
      <Frame63 />
      <Frame64 />
      <Frame65 />
      <Frame66 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame61 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[18px] text-black w-[806px]">{`Skills `}</p>
      <Frame6 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[18px] text-black w-[806px]">Interests</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Human-robot interaction</p>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Human centered design</p>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Product design</p>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Sustainability</p>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">User research</p>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame70 />
      <Frame71 />
      <Frame72 />
      <Frame73 />
      <Frame74 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame69 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame68 />
      <Frame7 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0">
      <Frame48 />
      <Frame55 />
      <Frame60 />
      <Frame67 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1264px]">
      <div className="relative shrink-0 size-[394px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[124.88%] left-0 max-w-none top-[-3.56%] w-full" src={imgRectangle14} />
        </div>
      </div>
      <Frame47 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex items-start px-[32px] py-[24px] relative w-full">
        <Frame46 />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[32px] relative w-full">
        <Frame15 />
        <Frame20 />
        <Frame1 />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[64px] relative w-full">
        <Frame32 />
        <Frame14 />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 top-0 w-[1512px]">
      <NavigationHeaderDefault />
      <Frame31 />
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-white relative size-full" data-name="MacBook Pro 14' - 7">
      <Frame16 />
    </div>
  );
}