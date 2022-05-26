export type SchoolSubjectCardProps = {
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  amount: number;
};

export default function SchoolSubjectCard({
  Icon,
  title,
  amount,
}: SchoolSubjectCardProps) {
  return (
    <div key={title} className="bg-white p-6 rounded-2xl">
      <div className="mb-6">
        <Icon />
      </div>
      <h1 className="mb-1 font-secondary text-base text-base-darker">
        {title}
      </h1>
      <p className="text-input text-xs">{amount} aulas</p>
    </div>
  );
}
