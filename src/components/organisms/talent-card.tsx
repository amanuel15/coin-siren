import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "../ui/avatar";
import { Card, CardHeader } from "../ui/card";
import { ITalent } from "@/types/talent";

export default function TalentCard({ talent }: { talent: ITalent }) {
  return (
    <Card className="max-w-sm">
      <CardHeader className="items-center">
        <Avatar className="w-8 h-8">
          <AvatarImage
            className="w-8 h-8"
            src={talent.profile_picture}
            alt="Profile_Avatar"
          />
          <AvatarFallback>
            {talent.first_name.charAt(0) + talent.last_name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <h3 className="text-2xl font-bold">
          {talent.first_name + " " + talent.last_name}
        </h3>
        <p className="text-primary">{talent.field + " " + talent.yoe}</p>
      </CardHeader>
    </Card>
  );
}
