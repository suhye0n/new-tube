'use client';

import {
  FlameIcon,
  HistoryIcon,
  HomeIcon,
  ListVideoIcon,
  PlaySquareIcon,
  ThumbsUpIcon,
} from 'lucide-react';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { useAuth, useClerk } from '@clerk/nextjs';

const items = [
  {
    title: '시청 기록',
    url: '/playlists/history',
    icon: HistoryIcon,
    auth: true,
  },
  {
    title: '재생목록',
    url: '/playlists',
    icon: ListVideoIcon,
    auth: true,
  },
  {
    title: '좋아요 표시한 동영상',
    url: '/playlists/liked',
    icon: ThumbsUpIcon,
    auth: true,
  },
];

export const PersonalSection = () => {
  const clerk = useClerk();
  const { isSignedIn } = useAuth();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>내 페이지</SidebarGroupLabel>

      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={false}
                onClick={(e) => {
                  if (!isSignedIn && item.auth) {
                    e.preventDefault();
                    return clerk.openSignIn();
                  }
                }}
              >
                <Link href={item.url} className="flex item-center gap-4">
                  <item.icon />
                  <span className="text-sm">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
