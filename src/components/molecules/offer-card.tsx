import BoldText from "../atoms/bold-text";

export default function OfferCard({
  content,
  title,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="flex flex-col gap-2 border-t border-primary-foreground text-primary-foreground">
      <BoldText>{title}</BoldText>
      <p>{content}</p>
    </div>
  );
}
