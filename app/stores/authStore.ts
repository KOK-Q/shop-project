interface User {
  name: string;
  email: string;
  address: string;
}

export const useAuthStore = defineStore("user", {
  state: () => ({
    user: null as User | null,
    token: null as string | null,
  }),

  actions: {
    setUser() {
      if (import.meta.client) {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        // const users = JSON.parse(localStorage.getItem("users") || "[]");
        if (user && token) {
          this.user = JSON.parse(user);
          this.token = token;
        }
      }
    },

    login(user: User) {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const existing = users.find(
        (u: User) => u.email === user.email && u.name === user.name,
      );

      if (!existing) {
        alert("User not found");
        return false;
      }
      this.user = existing;
      this.token = "fake-token";
      localStorage.setItem("user", JSON.stringify(existing));
      localStorage.setItem("token", this.token);
      return true;
    },

    logout() {
      this.user = null;
      localStorage.removeItem("user");

      this.token = null;
      localStorage.removeItem("token");
      navigateTo("/login");
    },

    signup(user: User) {
      const users = JSON.parse(localStorage.getItem("users") || "[]");

      const existing = users.find((u: User) => {
        return (
          u.email === user.email &&
          u.name === user.name &&
          u.address === user.address
        );
      });

      if (existing) {
        alert("User already exists");
        return false;
      }
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      this.token = "fake-token";
      this.user = user;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", this.token);
      alert("Signup successful");
      return true;
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
});
