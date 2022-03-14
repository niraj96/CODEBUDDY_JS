// level {1/2/3}
//Level 2

let getUsers = async()=>{
    try{
        
        let doc = await Promise.all(getUser(), getProfile(), getPosts());
        let user = doc[0];
        let Profile = doc[1];
        let p = doc[2];

        const userProfile = {
            user: user,
            profile: Profile,
            posts: p
        };
    
        return userProfile;
      
    }catch(excp){

        return {status: 500, msg:"Something went wrong"};
    }
}
