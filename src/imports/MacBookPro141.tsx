import svgPaths from "./svg-zbgjdikw8u";
import imgScreenshot20260311At121845Pm2 from "figma:asset/5c4e5a4412b7212abd90b73b121258a005bcc9c1.png";

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

function Input() {
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
    <div className="absolute content-stretch flex items-center left-[350px] top-[105px]" data-name="Text/Select">
      <div className="bg-white h-[43px] relative rounded-[4px] shrink-0 w-[132px]" data-name="Text/Primitive">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <Select />
          <Input />
        </div>
        <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Input">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">in Cleveland, Ohio</p>
      </div>
    </div>
  );
}

function TextPrimitive() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0" data-name="Text/Primitive">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[12px] py-[10px] relative rounded-[inherit]">
        <Input1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TextField() {
  return (
    <div className="absolute content-stretch flex items-center left-[490px] top-[104px]" data-name="Text/Field">
      <TextPrimitive />
    </div>
  );
}

function Input2() {
  return (
    <div className="-translate-y-1/2 absolute h-[19px] left-[12px] top-1/2 w-[276px]" data-name="Input">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[#71717a] text-[16px] top-[calc(50%+0.5px)]">
        <p className="leading-[1.5]">Searching for</p>
      </div>
    </div>
  );
}

function TextField1() {
  return (
    <div className="absolute content-stretch flex items-center left-[40px] top-[105px]" data-name="Text/Field">
      <div className="bg-white h-[43px] relative rounded-[4px] shrink-0 w-[300px]" data-name="Text/Primitive">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <Input2 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-white relative size-full" data-name="MacBook Pro 14' - 1">
      <div className="absolute h-[1032.692px] left-0 top-[13.65px] w-[1512px]" data-name="Screenshot 2026-03-11 at 12.18.45 PM 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[105.49%] left-[-29.68%] max-w-none top-[-5.49%] w-[129.68%]" src={imgScreenshot20260311At121845Pm2} />
        </div>
      </div>
      <div className="absolute left-[199.35px] overflow-clip size-[69.718px] top-[418.89px]" data-name="location-marker">
        <div className="absolute inset-[10%_15%_5.5%_15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.8053 58.9126">
            <path clipRule="evenodd" d={svgPaths.p8ba0ef0} fill="var(--fill-0, #155E75)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[575.17px] overflow-clip size-[69.718px] top-[349.17px]" data-name="location-marker">
        <div className="absolute inset-[10%_15%_5.5%_15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.8053 58.9126">
            <path clipRule="evenodd" d={svgPaths.p8ba0ef0} fill="var(--fill-0, #155E75)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[674.3px] overflow-clip size-[69.718px] top-[349.17px]" data-name="location-marker">
        <div className="absolute inset-[10%_15%_5.5%_15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.8053 58.9126">
            <path clipRule="evenodd" d={svgPaths.p8ba0ef0} fill="var(--fill-0, #155E75)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[703.71px] overflow-clip size-[69.718px] top-[314.31px]" data-name="location-marker">
        <div className="absolute inset-[10%_15%_5.5%_15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.8053 58.9126">
            <path clipRule="evenodd" d={svgPaths.p8ba0ef0} fill="var(--fill-0, #155E75)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[720.05px] overflow-clip size-[69.718px] top-[335.01px]" data-name="location-marker">
        <div className="absolute inset-[10%_15%_5.5%_15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.8053 58.9126">
            <path clipRule="evenodd" d={svgPaths.p8ba0ef0} fill="var(--fill-0, #155E75)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[989.12px] overflow-clip size-[69.718px] top-[279.45px]" data-name="location-marker">
        <div className="absolute inset-[10%_15%_5.5%_15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.8053 58.9126">
            <path clipRule="evenodd" d={svgPaths.p8ba0ef0} fill="var(--fill-0, #155E75)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[931.38px] overflow-clip size-[69.718px] top-[511.48px]" data-name="location-marker">
        <div className="absolute inset-[10%_15%_5.5%_15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.8053 58.9126">
            <path clipRule="evenodd" d={svgPaths.p8ba0ef0} fill="var(--fill-0, #155E75)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[1034.87px] overflow-clip size-[69.718px] top-[488.61px]" data-name="location-marker">
        <div className="absolute inset-[10%_15%_5.5%_15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.8053 58.9126">
            <path clipRule="evenodd" d={svgPaths.p8ba0ef0} fill="var(--fill-0, #155E75)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[1080px] overflow-clip size-[69.718px] top-[496px]" data-name="location-marker">
        <div className="absolute inset-[10%_15%_5.5%_15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.8053 58.9126">
            <path clipRule="evenodd" d={svgPaths.p8ba0ef0} fill="var(--fill-0, #155E75)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[1027px] overflow-clip size-[69.718px] top-[547px]" data-name="location-marker">
        <div className="absolute inset-[10%_15%_5.5%_15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.8053 58.9126">
            <path clipRule="evenodd" d={svgPaths.p8ba0ef0} fill="var(--fill-0, #155E75)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[1086px] overflow-clip size-[69.718px] top-[543px]" data-name="location-marker">
        <div className="absolute inset-[10%_15%_5.5%_15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.8053 58.9126">
            <path clipRule="evenodd" d={svgPaths.p8ba0ef0} fill="var(--fill-0, #155E75)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[1034.87px] overflow-clip size-[69.718px] top-[617.15px]" data-name="location-marker">
        <div className="absolute inset-[10%_15%_5.5%_15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.8053 58.9126">
            <path clipRule="evenodd" d={svgPaths.p8ba0ef0} fill="var(--fill-0, #155E75)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <NavigationHeaderDefault />
      <TextSelect />
      <TextField />
      <TextField1 />
    </div>
  );
}