<script setup lang="ts">
interface linkProps {
  icon: string
  title: string
  to: string
}

defineProps<{
  links: linkProps[]
}>()
</script>

<template>
  <RouterLink
    v-for="link in links"
    :key="link.title"
    :to="link.to"
    active-class="text-primary bg-muted"
    exact-active-class="text-primary bg-muted"
    class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground"
  >
    <iconify-icon :icon="link.icon"></iconify-icon>
    <span class="hidden lg:block text-nowrap">{{ link.title }} </span>
  </RouterLink>
</template>
