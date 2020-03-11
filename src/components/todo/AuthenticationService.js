class AuthenticationService {
    registerSucessfulRegistration(username,password){
        console.log('AuthenticatedUser');
        sessionStorage.setItem('AuthenticatedUser',username);
    }
    logout(){
        console.log('Authentication removed');
        sessionStorage.removeItem('AuthenticatedUser');   
    }
    isUserLogged(){
        let user = sessionStorage.getItem('AuthenticatedUser');
        if (user===null) return false
        return true
    }

}

export default new AuthenticationService()