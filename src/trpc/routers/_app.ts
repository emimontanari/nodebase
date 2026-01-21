import prisma from '@/lib/db';
import { createTRPCRouter, protectedProcedure } from '../init';
import { inngest } from '@/inngest/client';
export const appRouter = createTRPCRouter({
    getWorkflows: protectedProcedure.query(({ ctx }) => {
        console.log({ userId: ctx.auth.user.id });
        return prisma.workflow.findMany();
    }),
    createWorkflow: protectedProcedure.mutation(async ({ ctx, input }) => {

        await inngest.send({
            name: "test/hello.world",
            data: {
                email: "emiliano@montanari.com",
            },
        })
        return { success: true, message: "Workflow creation triggered" }
    })
})

// export type definition of API
export type AppRouter = typeof appRouter;