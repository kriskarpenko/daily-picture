import { useSearchParams } from "react-router-dom";

/**
 * Hook to get all query params as key value pairs.
 * Usage:
 *   const {param1, param2} = useQueryParams()
 *   const queryParams = useQueryParams()
 * @returns {} object with all query params as key value pairs
 */
export function useQueryParams() {
  const [searchParams] = useSearchParams();
  const result = {};
  searchParams.forEach((value, key) => (result[key] = value));
  return result;
}
