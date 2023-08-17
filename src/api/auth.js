export default function(instance) {
    return {
        async signIn(data){
            var result = await instance.post('auth', data)
            return result.data
        },
        signUp(data){
            return instance.get('test', data)
        },
        logOut(){
            return instance.get('test')
        },
        async tokenAuth(token){
            var response = await instance.get('auth_token', {
                headers: {
                    Authorization: token
                }
            })
            return response.headers.authorization
        }
    }
}