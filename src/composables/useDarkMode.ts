// ---------------------------------------------------------------------------
// Day 2B exercise — write this composable yourself first,
// then on Day 2F we'll replace it with VueUse's useDark + useStorage
// ---------------------------------------------------------------------------
// TODO Day 2B: implement useDarkMode
//
// It should:
// 1. hold a ref<boolean> called isDark

// 2. expose a toggle() function that flips isDark
// 3. apply / remove a 'dark' class on document.documentElement when isDark changes
//    (hint: use a watch())
// 4. return { isDark, toggle }
//
// Bonus Day 2C: persist the preference in localStorage
//   (hint: initialise isDark from localStorage.getItem('darkMode'))

import { ref, watch } from 'vue'

export function useDarkMode() {
  // TODO Day 2B: replace this stub with your implementation
  const isDark = ref<boolean>(false)

  function toggle() {
    isDark.value = !isDark.value
  }

  watch(isDark, () => {
    //kann ich hier leer lassen, muss aber mit () "referenzieren" das da was ist
    document.documentElement.classList.toggle('dark') //documentElement ist das Html element
  })

  return { isDark, toggle }
}
