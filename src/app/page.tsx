"use client";
import { useTRPC } from "@/trpc/client";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary, useQuery } from "@tanstack/react-query";

const Page = () => {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <HydrationBoundary state={dehydrate(queryClient)}></HydrationBoundary>
    </div>
  );
};

export default Page;
