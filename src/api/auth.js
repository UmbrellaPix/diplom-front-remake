export default function(instance) {
    return {
        async signIn(payload){
            var result = await instance.post('auth', payload)
            return result.data
        },
        signUp(payload){
            return instance.get('test', payload)
        },
        logOut(){
            return instance.get('test')
        }
    }
}