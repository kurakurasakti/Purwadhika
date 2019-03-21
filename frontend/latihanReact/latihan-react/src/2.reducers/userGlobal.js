const INITIAL_STATE = {username : 'Seto' , email : 'email'}

export default (state = INITIAL_STATE, action) => {
    // eslint-disable-next-line eqeqeq
    if (action.type == 'UBAH_USER') {
        return{...INITIAL_STATE, username : action.payload}
    }
    else{
        return state
    }
    
}