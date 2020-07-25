const loadData = (state) => {
  switch(state) {
    case 'zlatoust':
      return JSON.stringify(zlatoust);
      break;

    case 'chelyabinsk':
      return JSON.stringify(chelyabinsk);
      break;

    default:
      return JSON.stringify({error: true});
  }
}

let zlatoust = {
  borshch_s_mitbolami: 174,
  solyanka_s_mitbolami: 194,
  suplapsha_s_mitbolami: 134
}

let chelyabinsk = {
  borshch_s_mitbolami: 175,
  solyanka_s_mitbolami: 195,
  suplapsha_s_mitbolami: 135
}

export default loadData;