"use client";

import { Button } from "@/components/ui/flow-hover-button";
import { Github } from "lucide-react";

export default function DemoOne() {
  return (
    <Button icon={<Github size={18} />}>
      Hover Over Me
    </Button>
  );
}