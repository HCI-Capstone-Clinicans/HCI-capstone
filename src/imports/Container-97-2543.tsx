import svgPaths from "./svg-jvi6sum1ep";

function Paragraph() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#99a1af] text-[11px] top-[0.5px] tracking-[0.0645px] whitespace-nowrap">Insights Generated</p>
    </div>
  );
}

function Icon() {
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
      <Icon />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[56px] not-italic text-[#008236] text-[11px] text-center top-[5.5px] tracking-[0.0645px] whitespace-nowrap">87% Match</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="List Item">
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#364153] text-[0px] tracking-[-0.0762px] w-[168px]">
        <li className="leading-[19.5px] list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[13px]">
          {`You are closest in skillset to `}
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-[#364153] tracking-[-0.0762px]">Andrew Chan</span>
        </li>
      </ul>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="List Item">
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#364153] text-[0px] tracking-[-0.0762px] w-[140px]">
        <li className="leading-[19.5px] list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[13px]">
          {`You bring a new skill of `}
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-[#364153] tracking-[-0.0762px]">Product Design</span>
        </li>
      </ul>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="List Item">
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#364153] text-[0px] tracking-[-0.0762px] w-[185px]">
        <li className="leading-[19.5px] list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[13px]">
          {`The team becomes stronger in `}
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-[#364153] tracking-[-0.0762px]">Design Thinking</span>
          {` and `}
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-[#364153] tracking-[-0.0762px]">Human-Robot Interaction</span>
          {` with you`}
        </li>
      </ul>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="List">
      <Button />
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[6px] items-start p-[17px] relative rounded-[10px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Paragraph />
      <List />
    </div>
  );
}