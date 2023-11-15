import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Strings from "@/locales/en.json";
import { FolderOpen } from "lucide-react";

export function RecentProjectsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <FolderOpen className="mr-2 h-4 w-4" />{" "}
          {Strings.Projects.recentProjectsButton}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-3/4 h-3/4">
        <DialogHeader>
          <DialogTitle>{Strings.Projects.recentProjectsButton}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p>Hello world!</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
