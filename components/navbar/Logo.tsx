import Link from "next/link";
import { GiAbstract062 } from "react-icons/gi";
import { Button } from "../ui/button";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <GiAbstract062 className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
