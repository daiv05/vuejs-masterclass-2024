<script setup lang="ts">
import SidebarLinks from '@/components/Layout/SidebarLinks.vue'
import { Button } from '@/components/ui/button'

const links = [
  {
    icon: 'lucide:house',
    title: 'Dashboard',
    to: '/',
  },
  {
    icon: 'lucide:building-2',
    title: 'Projects',
    to: '/projects',
  },
  {
    icon: 'lucide:badge-check',
    title: 'My Tasks',
    to: '/tasks',
  },
]

const accountLinks = [
  {
    icon: 'lucide:user',
    title: 'Profile',
    to: '/profile',
  },
  {
    icon: 'lucide:settings',
    title: 'Settings',
    to: '/settings',
  },
  {
    icon: 'lucide:log-out',
    title: 'Sign out',
    to: '/signout',
  },
]
</script>

<template>
  <aside
    class="flex flex-col h-screen gap-2 border-r fixed bg-muted/40 lg:w-52 w-24 transition-[width]"
  >
    <div class="flex h-16 items-center border-b px-2 lg:px-4 shrink-0 gap-1 justify-between">
      <Button variant="outline" size="icon" class="w-8 h-8">
        <iconify-icon icon="lucide:menu"></iconify-icon>
      </Button>

      <Button variant="outline" size="icon" class="w-8 h-8">
        <iconify-icon icon="lucide:plus"></iconify-icon>
      </Button>
    </div>

    <nav class="flex flex-col gap-2 justify-between h-full relative">
      <div>
        <SidebarLinks :links="links" />
      </div>

      <div class="border-y text-center bg-background py-3">
        <SidebarLinks :links="accountLinks" />
      </div>
    </nav>
  </aside>
</template>
