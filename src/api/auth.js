export default function(instance) {
    return {
        async signIn(login, password){
            const data = {
                withCredentials: true,
                login: login,
                password: password
            }
            var token = await instance.post('auth_page', data).then(response => {
                return response.headers.get('Authorization')
            }).catch(()=>{return null})
            return token
        },
        async tokenAuth(token){
            var auth = await instance.get('auth_token', {
                headers: {
                    Authorization: token
                }
            }).then(response => {
                return response.headers.get('Authorization')
            }).catch(()=>{
                return 'false'
            })
            return auth
        }
    }
}