const gbkReducer = (state = '', action) => {
    switch (action.type) {
        case 'PLAYERROCK':
            return state = 'ROCK';
        case 'PLAYERPAPER':
            return state = 'PAPER';
        case 'PLAYERSCISSOR':
            return state = 'SCISSOR';
        default:
            return state;
    }
  };
  
  export default gbkReducer;
  