import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

// Although we are hardcoding the data in the UI as requested for the copy-paste requirement,
// I'm keeping the hook structure in case API integration is desired later.
export function useFeatures() {
  return useQuery({
    queryKey: [api.features.list.path],
    queryFn: async () => {
      // In a real app with backend:
      // const res = await fetch(api.features.list.path);
      // return await res.json();
      
      // For now, returning null to let the frontend handle the hardcoded data
      return null;
    },
    enabled: false // Disable fetching since we use hardcoded data
  });
}
