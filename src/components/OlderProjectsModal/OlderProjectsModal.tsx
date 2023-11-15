import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Strings from "@/locales/en.json";
import { FolderClosed } from "lucide-react";
import { Badge } from "../ui/badge";

export function OlderProjectsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <FolderClosed className="mr-2 h-4 w-4" />{" "}
          {Strings.Projects.olderProjectsButton}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-3/4 h-3/4">
        <DialogHeader>
          <DialogTitle>{Strings.Projects.olderProjectsButton}</DialogTitle>
        </DialogHeader>
        <div>
          <p>Hello world!</p>
          <Badge variant={"outline"}>Figma</Badge>
        </div>
      </DialogContent>
    </Dialog>
  );
}
