import {defineStore} from 'pinia'
import type { loginForm } from '@/api/user/type'
import { reqLogin } from '@/api/user'

let useUserStore = defineStore('User',{
    state: () => {
        return {
            token: localStorage.getItem('token') || ''
    }},
    actions:{
        async userLogin(data:loginForm){
            //console.log('userLogin')
            let result:any = await reqLogin(data);
            //console.log(result)
            if(result.code === 200){
                this.token = result.data.token;
                // 本地持久化存储
                localStorage.setItem('token',result.data.token)
                return 'ok';
            }else{
                return Promise.reject(new Error(result.data.message));
            }
        }
    },
    getters:{

    }
}
)

export default useUserStore;