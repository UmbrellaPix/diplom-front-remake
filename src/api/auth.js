export default function(instance) {
    return {
        signIn(payload){
            return instance.get('test', payload)
        },
        signUp(payload){
            return instance.get('test', payload)
        },
        logOut(){
            return instance.get('test')
        }
    }
}