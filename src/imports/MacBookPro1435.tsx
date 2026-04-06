import svgPaths from "./svg-rwsn9h8t97";
import imgRectangle13 from "figma:asset/9413ba0db7fd4497be1e97294806a8143016fe86.png";
import imgRectangle14 from "figma:asset/50ea0122d65dbf98475b5bcd3be009ec20788d72.png";
import imgRectangle15 from "figma:asset/9b50c70f59b6a8d251cb854d643ae19e2b09f1ee.png";
import imgRectangle16 from "figma:asset/63c954fdc052bbdee5ea11e1d6c367589196bb22.png";

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
    <div className="absolute bg-[#06b6d4] content-stretch flex items-center justify-between left-0 px-[24px] py-[16px] top-0 w-[1512px]" data-name="Navigation/Header/Default">
      <Frame />
      <div className="content-stretch flex items-center relative shrink-0" data-name="Button/Outline/Default">
        <div className="bg-[#06b6d4] relative rounded-[4px] shrink-0" data-name="Button/Primitive/Default">
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

function Frame23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">Blurb</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center p-[10px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#22c55e] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">
        <p className="leading-[1.5]">80% Match</p>
      </div>
    </div>
  );
}

function Frame42() {
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
    <div className="content-stretch flex gap-[12px] items-start justify-end relative shrink-0 w-full">
      <Frame43 />
      <Frame42 />
    </div>
  );
}

function Frame26() {
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

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame26 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Service Design</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">User Research</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">UX Prototyping</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Rapid Prototyping</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame34 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">{`Skills `}</p>
      <Frame6 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Human Robot Interaction</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Human-Centered Design</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">User Research</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Healthcare</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame20 />
      <Frame21 />
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-start flex flex-wrap gap-y-[6px] items-start relative shrink-0">
      <Frame35 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">Interests</p>
      <Frame7 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">In-person</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Frequent Communicator</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Team Player</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame28 />
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-start flex flex-wrap gap-y-[6px] items-start relative shrink-0">
      <Frame36 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">Collaboration Style</p>
      <Frame8 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start justify-center min-h-px min-w-px relative">
      <Frame49 />
      <Frame27 />
      <Frame47 />
      <Frame52 />
      <Frame53 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[64px] items-center px-[32px] py-[24px] relative w-full">
          <div className="relative shrink-0 size-[394px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute bg-[#d9d9d9] inset-0" />
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle13} />
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame50 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[32px] relative w-full">
        <Frame23 />
        <Frame2 />
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">Past Projects</p>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica_Neue:Regular',sans-serif] gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 text-[24px] whitespace-nowrap">
      <p className="relative shrink-0 text-black">Surgical Robot Research</p>
      <div className="relative shrink-0 text-[#a1a1aa]">
        <p className="mb-0">UX Designer</p>
        <p className="text-[#18181b]">! Endorsed by Sophia Skedros</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[394px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle14} />
      </div>
      <Frame60 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica_Neue:Regular',sans-serif] gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 text-[24px] whitespace-nowrap">
      <p className="relative shrink-0 text-black">Operating Room Design</p>
      <p className="relative shrink-0 text-[#a1a1aa]">UX Researcher</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[394px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle15} />
      </div>
      <Frame61 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0">
      <Frame37 />
      <Frame38 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[32px] py-[48px] relative w-full">
          <Frame33 />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[32px] relative w-full">
        <Frame32 />
        <Frame3 />
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">Testimonials</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Rapid Prototyping</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[16px] py-[24px] relative w-full">
          <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">“Jane has a rare ability to translate complex clinical workflows into intuitive design solutions through</p>
          <Frame44 />
          <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">.”</p>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end justify-end relative shrink-0 w-full">
      <Frame1 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">— Surgical Robotics Engineer, Philips Medical</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[24px] relative w-full">
          <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">“Her research consistently surfaces insights that clinicians actually recognize from their day-to-day work.”</p>
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end justify-end relative shrink-0 w-full">
      <Frame5 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">— Attending Surgeon, University Hospital</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[24px] relative w-full">
          <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[18px] text-black w-[1100px]">“Jane moves effortlessly between rigorous user research and rapid prototyping, which makes her an invaluable collaborator on interdisciplinary teams.”</p>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end justify-end relative shrink-0 w-full">
      <Frame9 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">— Product Manager, Healthcare Innovation Lab</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center px-[32px] py-[48px] relative w-full">
          <Frame41 />
          <Frame45 />
          <Frame46 />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[32px] relative w-full">
        <Frame40 />
        <Frame4 />
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">Resume</p>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[394px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle16} />
      </div>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">View resume</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame58 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame57 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Helvetica_Neue:Regular',sans-serif] gap-[32px] items-start leading-[1.5] min-h-px min-w-px not-italic relative text-[24px] text-black">
      <p className="relative shrink-0 whitespace-nowrap">Insights Generated</p>
      <div className="min-w-full relative shrink-0 text-[0px] w-[min-content]">
        <p className="font-['Helvetica_Neue:Bold',sans-serif] mb-0">Bridges Research and Product Development</p>
        <p>Jane’s resume suggests a strength in moving insights from user research into tangible design solutions, combining UX research methods with prototyping and product design experience.</p>
      </div>
      <div className="min-w-full relative shrink-0 text-[0px] w-[min-content]">
        <p className="font-['Helvetica_Neue:Bold',sans-serif] mb-0">Deep Experience in Healthcare Contexts</p>
        <p>Her work on surgical robotics and operating room design indicates a strong ability to understand complex clinical environments and design solutions that fit into high-stakes workflows.</p>
      </div>
      <div className="min-w-full relative shrink-0 text-[0px] w-[min-content]">
        <p className="font-['Helvetica_Neue:Bold',sans-serif] mb-0">Strong Cross-Functional Communication</p>
        <p>Roles that involve collaboration with engineers, clinicians, and product teams highlight her ability to translate user needs and research insights across disciplines.</p>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full">
      <Frame56 />
      <Frame59 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[32px] py-[48px] relative w-full">
          <Frame55 />
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[32px] relative w-full">
        <Frame54 />
        <Frame10 />
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">Skills</p>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Service Design</p>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">User Research</p>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">UX Prototyping</p>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Rapid Prototyping</p>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Product Design</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame65 />
      <Frame66 />
      <Frame67 />
      <Frame68 />
      <Frame69 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame64 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[32px] py-[48px] relative w-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[32px] relative w-full">
        <Frame63 />
        <Frame11 />
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">Interests</p>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Human-robot interaction</p>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Human centered design</p>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Product design</p>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Sustainability</p>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">User research</p>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame73 />
      <Frame74 />
      <Frame75 />
      <Frame76 />
      <Frame77 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame72 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame15 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[32px] py-[48px] relative w-full">
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[32px] relative w-full">
        <Frame71 />
        <Frame13 />
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 px-[128px] top-[96px] w-[1512px]">
      <Frame22 />
      <Frame31 />
      <Frame39 />
      <Frame48 />
      <Frame62 />
      <Frame70 />
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-white relative size-full" data-name="MacBook Pro 14' - 35">
      <NavigationHeaderDefault />
      <Frame51 />
    </div>
  );
}