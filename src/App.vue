<script setup lang="ts">
// ---------------------------------------------------------------------------
// Day 2C exercise: wire up the dark mode toggle using your useDarkMode composable
// ---------------------------------------------------------------------------

// TODO Day 2C: import useDarkMode from '@/composables/useDarkMode'
import { useDarkMode } from '@/composables/useDarkMode'
const { isDark, toggle } = useDarkMode() //wirde durch useDark/useToggle ersetzt
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
//alternative schreibweise zu dem darüber:
//const useDark = useDarkMode()
//const isDark = useDark.isDark
//const toggle = useDark.toggle
//
// TODO Day 2D: add click-handler to route back
//
// Bonus Day 2F: replace the manual useDarkMode() with 'import { useDark, useToggle } from '@vueuse/core'
</script>

<template>
  <header class="navbar">
    <nav class="navbar__links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>

    <!-- TODO Day 2C/F: replace this button with a working dark mode toggle -->
    <button class="toggle" @click="toggle" aria-label="Toggle dark mode">
      {{ isDark ? '☀' : '☽' }}
    </button>
  </header>

  <main class="container">
    <RouterView />
  </main>

  <footer class="site-footer">
    <div class="footer__spacer"></div>
    <div class="footer__actions">
      <!-- TODO Day 2D: add click-handler to route back -->
      <button type="button" class="footer__button" @click="router.back()">Back</button>
      <!-- TODO Day 2D: add click-handler to route HOME, if not already at HOME -->
      <button
        type="button"
        class="footer__button"
        @click="router.push('/')"
        :disabled="route.path === '/'"
      >
        Home
      </button>
    </div>
  </footer>
</template>
