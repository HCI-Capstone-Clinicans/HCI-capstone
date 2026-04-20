interface Member {
  name: string;
  role: string;
  isYou?: boolean;
}

interface SkillTooltipCardProps {
  skillName: string;
  description: string;
  members: Member[];
}

export function SkillTooltipCard({ skillName, description, members }: SkillTooltipCardProps) {
  const count = members.length;
  const shareLabel =
    count === 1 ? "1 team member has this skill" : `${count} team members share this skill`;

  return (
    <div className="bg-white border border-[#d1d5dc] rounded-[10px] shadow-[0px_4px_12px_rgba(0,0,0,0.10)] p-[12px] w-[210px]">
      <span className="inline-block px-[8px] py-[3px] text-[10px] font-medium bg-gray-50 text-gray-700 border border-gray-200 rounded-full whitespace-nowrap mb-[8px]">
        {skillName}
      </span>
      <p className="text-[11px] text-[#4a5565] leading-[1.6] mb-[10px]">{description}</p>
      <div className="border-t border-gray-100 pt-[9px]">
        <p className="text-[10px] text-gray-400 mb-[8px]">{shareLabel}</p>
        <div className="space-y-[7px]">
          {members.map((m, i) => (
            <div key={i} className="flex items-start gap-[6px]">
              <div
                className={`w-[6px] h-[6px] rounded-full mt-[3px] flex-shrink-0 ${
                  m.isYou ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
              <div>
                <p
                  className={`text-[11px] font-semibold leading-tight ${
                    m.isYou ? "text-blue-700" : "text-[#101828]"
                  }`}
                >
                  {m.name}
                </p>
                <p className="text-[10px] text-gray-400 leading-tight mt-[1px]">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
