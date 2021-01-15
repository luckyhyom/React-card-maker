    import { googleProvider,githubProvider,firebaseAuth } from "./firebase";

  class AuthService {
  
      login(providerName) {
          const authProvider = this.provider(providerName);
          return firebaseAuth.signInWithPopup(authProvider);
      }
  
      logout(){
          firebaseAuth.signOut();
      }
  
      onAuthChange(onUserChanged){
          firebaseAuth.onAuthStateChanged(user => {
          onUserChanged(user);
          // user && onUserChanged(user.uid)
        });
      }
  
      provider(providerName) {
          switch(providerName){
              case 'Google': return googleProvider;
              case 'Github': return githubProvider;
              default:
                  throw new Error(`${providerName} is defined`);
          }
      }
  
  }
  
  export default AuthService;