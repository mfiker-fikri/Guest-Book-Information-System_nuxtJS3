// composables/useAuth.ts
import { ref } from 'vue';

export function useAuth() {
  const isAuthenticated = ref(false);

  function login() {
    // Simulate login
    isAuthenticated.value = true;
  }

  function logout() {
    // Simulate logout
    isAuthenticated.value = false;
  }

  return {
    isAuthenticated,
    login,
    logout
  };
}
