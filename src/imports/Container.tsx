import svgPaths from "./svg-17yzu70kdl";
import { useState } from "react";
import { SkillTooltipCard } from "../app/components/SkillTooltipCard";

// Team members in the 4-person diagram
const ANDREW = { name: "Andrew Chan", role: "HCI Researcher" };
const DANIEL = { name: "Daniel Kim", role: "Robotics Engineer" };
const MAYA = { name: "Dr. Maya Patel", role: "Clinician Support" };
const BRYAN = { name: "Dr. Bryan Carroll", role: "Dermatologic Surgeon" };

function Text() {
  return (
    <div className="absolute bg-white border border-[#d1d5dc] border-solid h-[21px] left-0 rounded-[16777200px] top-0 w-[91.719px]" data-name="Text">
      <p className="absolute font-['Instrument_Sans',sans-serif] font-medium leading-[15px] left-[8px] not-italic text-[#364153] text-[10px] top-[2.5px] tracking-[0.1172px] whitespace-nowrap">Service Design</p>
    </div>
  );
}

function Container1() {
  const [show, setShow] = useState(false);
  return (
    <div
      className="absolute h-[21px] left-[42.7px] top-[204px] w-[154px] cursor-pointer z-10 hover:z-[100]"
      data-name="Container"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Text />
      {show && (
        <div className="absolute top-full left-0 mt-1 z-50 pointer-events-none">
          <SkillTooltipCard
            skillName="Service Design"
            description="Designing end-to-end service experiences through customer journey mapping and touchpoint optimization"
            members={[ANDREW]}
          />
        </div>
      )}
    </div>
  );
}

function Container2() {
  const [show, setShow] = useState(false);
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col inset-[44.64%_58.15%_51.27%_28.64%] items-start pb-px pt-[7px] px-[11px] rounded-[16777200px] cursor-pointer z-10 hover:z-[100]"
      data-name="Container"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="content-stretch flex h-[13.75px] items-start relative shrink-0 w-full">
        <p className="font-['Instrument_Sans',sans-serif] font-medium leading-[13.75px] not-italic relative shrink-0 text-[#101828] text-[10px] text-center tracking-[0.0645px] whitespace-nowrap">UX Writing</p>
      </div>
      {show && (
        <div className="absolute top-full left-0 mt-1 z-50 pointer-events-none">
          <SkillTooltipCard
            skillName="UX Writing"
            description="Crafting user-facing text, microcopy, and documentation to guide product interactions"
            members={[ANDREW, MAYA]}
          />
        </div>
      )}
    </div>
  );
}

function Container3() {
  const [show, setShow] = useState(false);
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col inset-[37.13%_28.99%_58.78%_53.67%] items-start pb-px pt-[7px] px-[11px] rounded-[16777200px] cursor-pointer z-10 hover:z-[100]"
      data-name="Container"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="content-stretch flex h-[13.75px] items-start relative shrink-0 w-full">
        <p className="font-['Instrument_Sans',sans-serif] font-medium leading-[13.75px] not-italic relative shrink-0 text-[#101828] text-[10px] text-center tracking-[0.0645px] whitespace-nowrap">Product Design</p>
      </div>
      {show && (
        <div className="absolute top-full left-0 mt-1 z-50 pointer-events-none">
          <SkillTooltipCard
            skillName="Product Design"
            description="Human-centered digital product design through research, prototyping, and iterative testing"
            members={[ANDREW, DANIEL]}
          />
        </div>
      )}
    </div>
  );
}

function Container4() {
  const [show, setShow] = useState(false);
  return (
    <div
      className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col items-start left-[calc(50%-35.85px)] px-[9px] py-[5px] rounded-[16777200px] top-[calc(50%-91.35px)] cursor-pointer z-10 hover:z-[100]"
      data-name="Container"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="h-[26px] relative shrink-0 w-[66px]">
        <p className="-translate-x-1/2 absolute font-['Instrument_Sans',sans-serif] font-medium leading-[12.5px] left-[34.5px] not-italic text-[#101828] text-[10px] text-center top-px tracking-[0.1172px] w-[67px]">Design Thinking</p>
      </div>
      {show && (
        <div className="absolute top-full left-0 mt-1 z-50 pointer-events-none">
          <SkillTooltipCard
            skillName="Design Thinking"
            description="Iterative problem-solving methodology: Empathize → Define → Ideate → Prototype → Test"
            members={[ANDREW, DANIEL, MAYA]}
          />
        </div>
      )}
    </div>
  );
}

function Container5() {
  const [show, setShow] = useState(false);
  return (
    <div
      className="absolute h-[21px] left-[240.7px] top-[352px] w-[154px] cursor-pointer z-10 hover:z-[100]"
      data-name="Container"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="absolute bg-white border border-[#d1d5dc] border-solid h-[21px] left-0 rounded-[16777200px] top-0 w-[120.859px]">
        <p className="absolute font-['Instrument_Sans',sans-serif] font-medium leading-[15px] left-[8px] not-italic text-[#364153] text-[10px] top-[2.5px] tracking-[0.1172px] whitespace-nowrap">Research Operations</p>
      </div>
      {show && (
        <div className="absolute top-full left-0 mt-1 z-50 pointer-events-none">
          <SkillTooltipCard
            skillName="Research Operations"
            description="Managing research infrastructure, participant recruitment, and synthesis pipelines at scale"
            members={[MAYA]}
          />
        </div>
      )}
    </div>
  );
}

function Container6() {
  const [show, setShow] = useState(false);
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col inset-[67.63%_36.46%_28.28%_51.85%] items-start pb-px pt-[7px] px-[11px] rounded-[16777200px] cursor-pointer z-10 hover:z-[100]"
      data-name="Container"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="content-stretch flex h-[13.75px] items-start relative shrink-0 w-full">
        <p className="font-['Instrument_Sans',sans-serif] font-medium leading-[13.75px] not-italic relative shrink-0 text-[#101828] text-[10px] text-center tracking-[0.0645px] whitespace-nowrap">Medicine</p>
      </div>
      {show && (
        <div className="absolute bottom-full left-0 mb-1 z-50 pointer-events-none">
          <SkillTooltipCard
            skillName="Medicine"
            description="Clinical and biomedical domain knowledge for healthcare application development"
            members={[MAYA, BRYAN]}
          />
        </div>
      )}
    </div>
  );
}

function Container7() {
  const [show, setShow] = useState(false);
  return (
    <div
      className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col items-start left-[calc(50%+93.15px)] px-[11px] py-[7px] rounded-[16777200px] top-[calc(50%+82.65px)] cursor-pointer z-10 hover:z-[100]"
      data-name="Container"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['Instrument_Sans',sans-serif] font-medium leading-[13.75px] not-italic relative shrink-0 text-[#101828] text-[10px] text-center tracking-[0.0645px] w-[96px]">Quantitative Research</p>
      {show && (
        <div className="absolute top-full left-0 mt-1 z-50 pointer-events-none">
          <SkillTooltipCard
            skillName="Quantitative Research"
            description="Statistical analysis and data-driven methods for measuring user behavior and outcomes"
            members={[DANIEL, MAYA]}
          />
        </div>
      )}
    </div>
  );
}

function Container8() {
  const [show, setShow] = useState(false);
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[4px] items-start left-[332.7px] top-[104px] w-[135.164px] cursor-pointer z-10 hover:z-[100]"
      data-name="Container"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="bg-white h-[21px] relative rounded-[16777200px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
        <p className="absolute font-['Instrument_Sans',sans-serif] font-medium leading-[15px] left-[9px] not-italic text-[#364153] text-[10px] top-[3.5px] tracking-[0.1172px] whitespace-nowrap">Mechanical Engineering</p>
      </div>
      <div className="bg-white h-[21px] relative rounded-[16777200px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
        <p className="absolute font-['Instrument_Sans',sans-serif] font-medium leading-[15px] left-[9px] not-italic text-[#364153] text-[10px] top-[3.5px] tracking-[0.1172px] whitespace-nowrap">Electronics Engineering</p>
      </div>
      {show && (
        <div className="absolute top-full left-0 mt-1 z-50 pointer-events-none">
          <SkillTooltipCard
            skillName="Engineering"
            description="Mechanical and electronics engineering for robotic hardware design and embedded systems"
            members={[DANIEL]}
          />
        </div>
      )}
    </div>
  );
}

function Container9() {
  const [show, setShow] = useState(false);
  return (
    <div
      className="absolute h-[21px] left-[428.7px] top-[574px] w-[154px] cursor-pointer z-10 hover:z-[100]"
      data-name="Container"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="absolute bg-white border border-[#d1d5dc] border-solid h-[21px] left-0 rounded-[16777200px] top-0 w-[56.844px]">
        <p className="absolute font-['Instrument_Sans',sans-serif] font-medium leading-[15px] left-[8px] not-italic text-[#364153] text-[10px] top-[2.5px] tracking-[0.1172px] whitespace-nowrap">Surgery</p>
      </div>
      {show && (
        <div className="absolute bottom-full left-0 mb-1 z-50 pointer-events-none">
          <SkillTooltipCard
            skillName="Surgery"
            description="Surgical techniques and procedural domain expertise informing medical device design"
            members={[BRYAN]}
          />
        </div>
      )}
    </div>
  );
}

function Container10() {
  const [show, setShow] = useState(false);
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col items-start left-[205.7px] px-[11px] py-[7px] rounded-[16777200px] top-[146px] cursor-pointer z-10 hover:z-[100]"
      data-name="Container"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['Instrument_Sans',sans-serif] font-medium leading-[13.75px] not-italic relative shrink-0 text-[#101828] text-[10px] text-center tracking-[0.0645px] w-[74px]">Product Development</p>
      {show && (
        <div className="absolute top-full left-0 mt-1 z-50 pointer-events-none">
          <SkillTooltipCard
            skillName="Product Development"
            description="End-to-end process of bringing products from concept through design to market release"
            members={[DANIEL, ANDREW]}
          />
        </div>
      )}
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
      <Container1 />
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
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <div className="absolute inset-[53.23%_0_0_47.31%]" data-name="Vector">
        <div className="absolute inset-[-0.32%_-0.31%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319.794 319.398">
            <path d={svgPaths.p1f411180} fill="var(--fill-0, #FFE4E6)" fillOpacity="0.5" id="Vector" stroke="var(--stroke-0, #F43F5E)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[10px] size-full" data-name="Container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip pl-px pr-[16px] py-px relative rounded-[inherit] size-full">
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}
