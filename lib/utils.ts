import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useToast } from "@/components/ui/use-toast";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// toast

export function toastController(paylaod: any) {
  const { toast } = useToast();
  toast({
    title: paylaod.title,
    description: paylaod.description,
    variant: paylaod.variant,
    duration: paylaod.duration,
  });
}
