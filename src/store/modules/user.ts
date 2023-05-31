import { defineStore } from 'pinia'
import type { loginForm, loginResponseData } from '@/api/user/type'
import { reqLogin ,reqUserInfo} from '@/api/user'
import type { UserState } from './types/type'
// 引入操作本地存储的方法
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
import { constantRoute } from '@/router/routes'
import {REMOVE_TOKEN} from '@/utils/token'

let useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute,
      username: '',
      avatar: '',
    }
  },
  actions: {
    async userLogin(data: loginForm) {
      //console.log('userLogin')
      let result: loginResponseData = await reqLogin(data)
      //console.log(result)
      if (result.code === 200) {
        this.token = result.data.token as string
        // 本地持久化存储
        SET_TOKEN(result.data.token as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },

    // 用户信息
    async userInfo() {
      let result = await reqUserInfo()
      if(result.code === 200){
        this.username = result.data.checkUser.username
        this.avatar = result.data.checkUser.avatar
      }
    },
    async userLogout() {
      this.token = ''
      this.username = ''
      this.avatar = '',
      REMOVE_TOKEN()
    }
  },
  getters: {},
})

export default useUserStore
