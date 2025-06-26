<template>
  <div class="min-h-screen flex flex-col" :class="platformClass">
    <!-- Fixed ColorMode Toggle for easy access -->
    <div class="fixed top-4 right-4 z-50">
      <ColorModeToggle />
    </div>

    <!-- Main content -->
    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
// Enable device detection
const { $device } = useNuxtApp();

// Platform-specific class
const platformClass = computed(() => {
  if ($device.isDesktop) return "platform-desktop";
  if ($device.isIos) return "platform-ios";
  if ($device.isAndroid) return "platform-android";
  return "platform-universal";
});
</script>

<style scoped>
/* Platform-specific base styles */
.platform-desktop {
  /* Desktop optimizations */
  overflow-x: hidden;
}

.platform-ios {
  /* iOS Safari optimizations */
  -webkit-overflow-scrolling: touch;
  /* Handle safe areas for iOS */
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

.platform-android {
  /* Android optimizations */
  overscroll-behavior: contain;
}

.platform-universal {
  /* Universal fallback */
  min-height: 100vh;
}
</style>
