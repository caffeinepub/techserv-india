import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Testimonial } from "../backend";
import { ServiceInterest } from "../backend";
import { useActor } from "./useActor";

export { ServiceInterest };

export function useGetAllTestimonials() {
  const { actor, isFetching } = useActor();
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllTestimonials();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: {
      name: string;
      email: string;
      phone: string;
      organization: string;
      serviceInterest: ServiceInterest;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      await actor.submitInquiry(
        params.name,
        params.email,
        params.phone,
        params.organization,
        params.serviceInterest,
        params.message,
        BigInt(Date.now()),
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
    },
  });
}
