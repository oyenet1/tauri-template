<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
  >
    <!-- Navigation Header -->
    <header
      class="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700"
    >
      <UContainer class="flex items-center justify-between py-4">
        <!-- Logo/Brand -->
        <div class="flex items-center space-x-2">
          <Icon name="i-lucide-zap" class="text-2xl text-primary" />
          <h1 class="text-xl font-bold text-gray-900 dark:text-white">
            TauriApp
          </h1>
        </div>

        <!-- Desktop Navigation -->
        <nav
          v-if="!$device.isMobile"
          class="hidden md:flex items-center space-x-6"
        >
          <UButton variant="ghost" size="sm">Features</UButton>
          <UButton variant="ghost" size="sm">About</UButton>
          <UButton variant="ghost" size="sm">Contact</UButton>
          <UButton color="primary" size="sm">Get Started</UButton>
        </nav>

        <!-- Mobile Menu Button -->
        <UButton
          v-if="$device.isMobile"
          variant="ghost"
          icon="i-lucide-menu"
          @click="showMobileMenu = !showMobileMenu"
        />
      </UContainer>
    </header>

    <!-- Mobile Navigation Menu -->
    <USlideover v-if="$device.isMobile" v-model="showMobileMenu" side="right">
      <div class="p-6 space-y-4">
        <UButton variant="ghost" block size="lg">Features</UButton>
        <UButton variant="ghost" block size="lg">About</UButton>
        <UButton variant="ghost" block size="lg">Contact</UButton>
        <UButton color="primary" block size="lg">Get Started</UButton>
      </div>
    </USlideover>

    <!-- Hero Section -->
    <section class="py-12 md:py-20 lg:py-24">
      <UContainer>
        <div class="text-center space-y-6 md:space-y-8">
          <!-- Platform-specific messaging -->
          <div
            v-if="$device.isDesktop"
            class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium"
          >
            <Icon name="i-lucide-monitor" class="mr-2" />
            Optimized for Desktop
          </div>
          <div
            v-else-if="$device.isIos"
            class="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-medium"
          >
            <Icon name="i-lucide-smartphone" class="mr-2" />
            Native iOS Experience
          </div>
          <div
            v-else-if="$device.isAndroid"
            class="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium"
          >
            <Icon name="i-lucide-smartphone" class="mr-2" />
            Native Android Experience
          </div>

          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            Welcome to
            <span
              class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              TauriApp
            </span>
          </h1>

          <p
            class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            A powerful cross-platform application built with Tauri and Nuxt,
            delivering native performance across desktop, iOS, and Android.
          </p>

          <!-- CTA Buttons -->
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <UButton
              size="lg"
              color="primary"
              :icon="$device.isMobile ? 'i-lucide-download' : 'i-lucide-rocket'"
              class="w-full sm:w-auto"
            >
              {{ $device.isMobile ? "Download App" : "Get Started" }}
            </UButton>
            <UButton
              size="lg"
              variant="outline"
              icon="i-lucide-play-circle"
              class="w-full sm:w-auto"
            >
              Watch Demo
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Features Grid -->
    <section class="py-16 md:py-20">
      <UContainer>
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Platform Features
          </h2>
          <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience the best of each platform with our adaptive design
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Desktop Features -->
          <UCard
            v-if="$device.isDesktop"
            class="transform hover:scale-105 transition-transform duration-200"
          >
            <template #header>
              <div class="flex items-center space-x-3">
                <Icon name="i-lucide-monitor" class="text-2xl text-blue-500" />
                <h3 class="text-xl font-semibold">Desktop Power</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-300">
              Full keyboard shortcuts, multiple windows, and desktop
              integrations for maximum productivity.
            </p>
          </UCard>

          <!-- Mobile Features -->
          <UCard
            v-if="$device.isMobile"
            class="transform hover:scale-105 transition-transform duration-200"
          >
            <template #header>
              <div class="flex items-center space-x-3">
                <Icon
                  name="i-lucide-smartphone"
                  class="text-2xl text-green-500"
                />
                <h3 class="text-xl font-semibold">Mobile Native</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-300">
              Touch gestures, haptic feedback, and mobile-optimized
              interactions.
            </p>
          </UCard>

          <!-- Universal Features -->
          <UCard
            class="transform hover:scale-105 transition-transform duration-200"
          >
            <template #header>
              <div class="flex items-center space-x-3">
                <Icon name="i-lucide-zap" class="text-2xl text-purple-500" />
                <h3 class="text-xl font-semibold">Lightning Fast</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-300">
              Built with Rust and optimized for performance across all
              platforms.
            </p>
          </UCard>

          <UCard
            class="transform hover:scale-105 transition-transform duration-200"
          >
            <template #header>
              <div class="flex items-center space-x-3">
                <Icon name="i-lucide-shield" class="text-2xl text-red-500" />
                <h3 class="text-xl font-semibold">Secure</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-300">
              Advanced security features and sandboxed environment for safe
              operation.
            </p>
          </UCard>

          <UCard
            class="transform hover:scale-105 transition-transform duration-200"
          >
            <template #header>
              <div class="flex items-center space-x-3">
                <Icon
                  name="i-lucide-palette"
                  class="text-2xl text-indigo-500"
                />
                <h3 class="text-xl font-semibold">Beautiful UI</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-300">
              Modern, responsive design that adapts to your device and
              preferences.
            </p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Platform Specific Section -->
    <section class="py-16 md:py-20 bg-white/50 dark:bg-gray-800/50">
      <UContainer>
        <!-- Desktop Section -->
        <div v-if="$device.isDesktop" class="text-center space-y-8">
          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Desktop Productivity
          </h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div class="space-y-4 text-left">
              <div class="flex items-center space-x-3">
                <Icon name="i-lucide-keyboard" class="text-xl text-blue-500" />
                <span class="font-medium">Full Keyboard Support</span>
              </div>
              <div class="flex items-center space-x-3">
                <Icon name="i-lucide-window" class="text-xl text-blue-500" />
                <span class="font-medium">Multi-Window Management</span>
              </div>
              <div class="flex items-center space-x-3">
                <Icon
                  name="i-lucide-hard-drive"
                  class="text-xl text-blue-500"
                />
                <span class="font-medium">File System Access</span>
              </div>
            </div>
            <div
              class="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg p-8 text-center"
            >
              <Icon
                name="i-lucide-monitor"
                class="text-6xl text-blue-500 mx-auto mb-4"
              />
              <p class="text-gray-600 dark:text-gray-300">
                Optimized for your desktop workflow
              </p>
            </div>
          </div>
        </div>

        <!-- iOS Section -->
        <div v-if="$device.isIos" class="text-center space-y-8">
          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            iOS Native Experience
          </h2>
          <div class="grid grid-cols-1 gap-8">
            <div
              class="bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-800 dark:to-blue-900/30 rounded-lg p-8"
            >
              <Icon
                name="i-lucide-smartphone"
                class="text-6xl text-gray-600 dark:text-gray-300 mx-auto mb-4"
              />
              <h3 class="text-xl font-semibold mb-2">
                Seamless iOS Integration
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Designed to feel native on iOS with proper navigation patterns
                and touch interactions.
              </p>
            </div>
          </div>
        </div>

        <!-- Android Section -->
        <div v-if="$device.isAndroid" class="text-center space-y-8">
          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Android Native Experience
          </h2>
          <div class="grid grid-cols-1 gap-8">
            <div
              class="bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-lg p-8"
            >
              <Icon
                name="i-lucide-smartphone"
                class="text-6xl text-green-500 mx-auto mb-4"
              />
              <h3 class="text-xl font-semibold mb-2">
                Material Design Integration
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Follows Android design guidelines with proper material design
                elements and behaviors.
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Footer -->
    <footer
      class="py-12 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
    >
      <UContainer>
        <div class="text-center space-y-4">
          <div class="flex items-center justify-center space-x-2">
            <Icon name="i-lucide-zap" class="text-2xl text-primary" />
            <span class="text-xl font-bold text-gray-900 dark:text-white"
              >TauriApp</span
            >
          </div>
          <p class="text-gray-600 dark:text-gray-300">
            Built with ❤️ using Tauri, Nuxt, and modern web technologies
          </p>
          <div class="flex justify-center space-x-4 pt-4">
            <UButton variant="ghost" icon="i-lucide-github" size="sm" />
            <UButton variant="ghost" icon="i-lucide-twitter" size="sm" />
            <UButton variant="ghost" icon="i-lucide-mail" size="sm" />
          </div>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<script lang="ts" setup>
// Enable device detection
const { $device } = useNuxtApp();

// Mobile menu state
const showMobileMenu = ref(false);

// Meta tags for SEO
useSeoMeta({
  title: "TauriApp - Cross-Platform Desktop & Mobile App",
  description:
    "A powerful cross-platform application built with Tauri and Nuxt, delivering native performance across desktop, iOS, and Android.",
  ogTitle: "TauriApp - Cross-Platform Desktop & Mobile App",
  ogDescription:
    "A powerful cross-platform application built with Tauri and Nuxt, delivering native performance across desktop, iOS, and Android.",
  ogImage: "/og-image.jpg",
  twitterCard: "summary_large_image",
});

// Platform-specific styling
const platformClass = computed(() => {
  if ($device.isDesktop) return "desktop-optimized";
  if ($device.isIos) return "ios-optimized";
  if ($device.isAndroid) return "android-optimized";
  return "universal";
});
</script>

<style scoped>
.ios-optimized {
  /* iOS-specific styles */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
}

.android-optimized {
  /* Android-specific styles */
  touch-action: manipulation;
}

/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
</style>
