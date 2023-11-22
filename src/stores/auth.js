import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'
import LoginApi from '@/api/login'
const loginApi = new LoginApi()

export const useAuthStore = defineStore('auth', () => {
    const state = reactive({
        access: '',
        refresh: ''
    })

    const token = computed(()=> state.access)
    
    async function login(user) {
        try {
            const data =  await loginApi.Login(user)
            state.access = data.access
            state.refresh = data.refresh
        } catch(e) {
            console.log(e)
        }
    }

  return { login, token}
})