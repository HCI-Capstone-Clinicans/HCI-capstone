import svgPaths from "./svg-apgfe5za9g";
import imgRectangle13 from "figma:asset/1a8e8f1388acd7e29af0518ac07ccba9821174d6.png";
import imgRectangle14 from "figma:asset/58fc0ac8e1ce3bfeee1106e5418571c76bcc020d.png";
import imgRectangle15 from "figma:asset/eea162a3bdec95f2e78582620862a4027b240df8.png";

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
    <div className="content-stretch flex font-['Helvetica_Neue:Regular',sans-serif] gap-[24px] items-center leading-[0] not-italic overflow-clip relative shrink-0 text-[#cffafe] text-[16px] whitespace-nowrap" data-name="Links">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.5]">Find Collaborators</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.5]">Find Projects</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
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
    <div className="bg-[#06b6d4] h-[72px] relative shrink-0 w-full" data-name="Navigation/Header/Default">
      <Frame />
      <div className="-translate-y-1/2 absolute content-stretch flex items-center right-[36px] top-1/2" data-name="Button/Outline/Default">
        <div className="bg-[#0e7490] relative rounded-[4px] shrink-0" data-name="Button/Primitive/Default">
          <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
            <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[1.5]">My Profile</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#164e63] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Button/Outline/Default">
        <div className="relative rounded-[4px] shrink-0" data-name="Button/Primitive/Default">
          <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
            <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[1.5]">Import from LinkedIn</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#52525b] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Button/Outline/Default">
        <div className="relative rounded-[4px] shrink-0" data-name="Button/Primitive/Default">
          <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
            <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[1.5]">Import from ORCID</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#52525b] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center px-[32px] relative shrink-0">
      <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">My Profile</p>
      <Frame6 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">My Blurb</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="pencil">
        <div className="absolute inset-[12.5%_12.5%_12.35%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.54%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0003 20.0363">
              <path d={svgPaths.p23f90780} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0">
      <div className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[24px] text-black w-[806px]">
        <p className="mb-0">Vincent Aleven</p>
        <p className="mb-0">HCI Practitioner</p>
        <p className="mb-0">HCI Researcher at Carnegie Mellon University Human Computer Interaction Institute (HCII)</p>
        <p>Contact va@cmu.edu | 555-555-5555</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame20 />
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
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle13} />
          </div>
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[32px] relative w-full">
        <Frame17 />
        <Frame2 />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">My Projects</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="pencil">
        <div className="absolute inset-[12.5%_12.5%_12.35%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.54%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0003 20.0363">
              <path d={svgPaths.p23f90780} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[394px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle14} />
      </div>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">MathTutor Website</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[394px]">
        <div aria-hidden="true" className="absolute border border-[#a1a1aa] border-dashed inset-0 pointer-events-none" />
      </div>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#71717a] text-[24px] whitespace-nowrap">Add another project</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0">
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[32px] py-[48px] relative w-full">
          <Frame24 />
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
        <Frame3 />
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-[766px]">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Button/Outline/Default">
        <div className="relative rounded-[4px] shrink-0" data-name="Button/Primitive/Default">
          <div className="content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
            <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[1.5]">Request a Testimonial</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#52525b] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="pencil">
        <div className="absolute inset-[12.5%_12.5%_12.35%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.54%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0003 20.0363">
              <path d={svgPaths.p23f90780} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">My Testimonials</p>
      </div>
      <Frame29 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[24px] relative w-full">
          <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">“They have a rare ability to turn messy human experiences into elegant, thoughtful interactions.”</p>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end justify-end relative shrink-0 w-full">
      <Frame1 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">— Colleague, Manager at CMU HCII</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[24px] relative w-full">
          <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">“Working with them changed the way I think about design research—they ask questions no one else thinks to ask.”</p>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end justify-end relative shrink-0 w-full">
      <Frame5 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">— Grad Student, CMU HCII</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[24px] relative w-full">
          <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">Their work consistently bridges rigorous research and real human impact.”</p>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end justify-end relative shrink-0 w-full">
      <Frame7 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">— Industry Partner, UX Research Lead</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center px-[32px] py-[48px] relative w-full">
          <Frame30 />
          <Frame31 />
          <Frame32 />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[32px] relative w-full">
        <Frame28 />
        <Frame4 />
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">My Resume</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="pencil">
        <div className="absolute inset-[12.5%_12.5%_12.35%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.54%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0003 20.0363">
              <path d={svgPaths.p23f90780} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <div className="pointer-events-none relative rounded-[24px] shrink-0 size-[394px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[24px] size-full" src={imgRectangle15} />
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 rounded-[24px]" />
      </div>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">My resume</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame38 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame37 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Helvetica_Neue:Regular',sans-serif] gap-[32px] items-start leading-[1.5] min-h-px min-w-px not-italic relative text-[24px] text-black">
      <p className="relative shrink-0 whitespace-nowrap">Insights Generated</p>
      <div className="min-w-full relative shrink-0 text-[0px] w-[min-content]">
        <p className="font-['Helvetica_Neue:Bold',sans-serif] mb-0">Technical Expertise</p>
        <p>Proven ability to optimize chemical processes and streamline production workflows, resulting in improved efficiency and cost reduction. Strong foundation in analytical chemistry and process engineering.</p>
      </div>
      <div className="min-w-full relative shrink-0 text-[0px] w-[min-content]">
        <p className="font-['Helvetica_Neue:Bold',sans-serif] mb-0">Skilled at Rapid Prototyping and Experimentation</p>
        <p>Project experience demonstrates a strength in quickly building and testing interactive systems—using tools like sensors, embedded electronics, and digital interfaces—to explore new human–technology interactions.</p>
      </div>
      <div className="min-w-full relative shrink-0 text-[0px] w-[min-content]">
        <p className="font-['Helvetica_Neue:Bold',sans-serif] mb-0">Effective Cross-Disciplinary Collaborator</p>
        <p>Their background working with designers, engineers, and researchers suggests an ability to communicate across disciplines and help teams align around user-centered goals.</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full">
      <Frame36 />
      <Frame39 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[32px] py-[48px] relative w-full">
          <Frame35 />
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[32px] relative w-full">
        <Frame34 />
        <Frame8 />
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">My Skills</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="pencil">
        <div className="absolute inset-[12.5%_12.5%_12.35%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.54%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0003 20.0363">
              <path d={svgPaths.p23f90780} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Product Design</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Product Design</p>
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

function Frame13() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Product Design</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Product Design</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Product Design</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Product Design</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame43 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[32px] py-[48px] relative w-full">
          <Frame42 />
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[32px] relative w-full">
        <Frame41 />
        <Frame9 />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 top-0 w-[1512px]">
      <NavigationHeaderDefault />
      <Frame19 />
      <Frame16 />
      <Frame22 />
      <Frame27 />
      <Frame33 />
      <Frame40 />
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-white relative size-full" data-name="MacBook Pro 14' - 6">
      <Frame18 />
    </div>
  );
}