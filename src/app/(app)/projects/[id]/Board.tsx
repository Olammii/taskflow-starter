'use client';

import { TodoPanel } from '@/components/ui';

/* ===========================================================================
 * TODO 3 — render the board
 *
 * A client component, because it needs hooks and click handlers.
 *
 * Imports you will need:
 *
 *   import { useState } from 'react';
 *   import { TaskCard } from '@/components/tasks/TaskCard';
 *   import { COLUMNS, TaskColumn } from '@/components/tasks/TaskColumn';
 *   import { BoardSkeleton, EmptyState, ErrorPanel } from '@/components/ui';
 *   import { useTasks } from '@/hooks/useTasks';
 *   import { useUpdateTaskStatus } from '@/hooks/useUpdateTaskStatus';
 *   import { useDeleteTask } from '@/hooks/useDeleteTask';
 *   import type { TaskStatus } from '@/types/database';
 *
 * ---------------------------------------------------------------------------
 * 1. Pull the data
 *
 *      const { data: tasks, isLoading, error, refetch } = useTasks(projectId);
 *
 * 2. THE UX TRIANGLE — four states, on every screen that touches a network:
 *
 *      isLoading   → <BoardSkeleton />
 *      error       → <ErrorPanel message={error.message} onRetry={() => refetch()} />
 *      no tasks    → <EmptyState … />
 *      otherwise   → the board
 *
 *    Juniors ship the success state and call it done. Then a user on slow
 *    wi-fi sees a blank white page and assumes the app is broken. The EMPTY
 *    state is the one everybody forgets: a brand-new board has no tasks, and
 *    if you do not say so, the user assumes it is a bug.
 *
 * 3. For each entry in COLUMNS, filter tasks by status and render a
 *    <TaskColumn> holding one <TaskCard> per task.
 *
 * 4. Drag and drop.
 *
 *      const [draggingId, setDraggingId] = useState<string | null>(null);
 *
 *    That is PURE UI STATE — it never goes near the server, so plain useState
 *    is exactly right. Client state and server state, side by side, each with
 *    the tool that fits.
 *
 *    On drop: bail out if nothing is being dragged or the task is already in
 *    that column (do not send a request for a no-op), otherwise
 *
 *      updateStatus.mutate({ id: draggingId, status });
 * =========================================================================== */

export function Board({ projectId }: { projectId: string }) {
  return (
    <TodoPanel id="TODO 3">
      Build the board for project <code>{projectId}</code>. Start by destructuring{' '}
      <code>useTasks(projectId)</code>, and handle loading, error and empty before you
      render a single column.
    </TodoPanel>
  );
}
