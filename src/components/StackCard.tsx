interface StackCardProps {
  text: string;
}

function StackCard({ text }: StackCardProps) {
  return (
    <div className="stack__card">
      <p className="stack__name">{text}</p>
    </div>
  );
}

export default StackCard;
