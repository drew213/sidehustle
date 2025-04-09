import { AppContent } from '@/components/App/app-content';
import { AppHeader } from '@/components/App/app-header';
import { AppShell } from '@/components/App/app-shell';
import { type BreadcrumbItem } from '@/types';
import type { PropsWithChildren } from 'react';

export default function AppHeaderLayout({
    children,
    breadcrumbs,
}: PropsWithChildren<{
    breadcrumbs?: BreadcrumbItem[];
}>) {
    return (
        <AppShell>
            <AppHeader breadcrumbs={breadcrumbs} />
            <AppContent>{children}</AppContent>
        </AppShell>
    );
}
