"use client";

import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

export function UserList() {
  const { getUsers } = useTRPC();
  const { data: users } = useQuery(getUsers.queryOptions());
  return <pre>{JSON.stringify(users, null, 2)}</pre>;
}
