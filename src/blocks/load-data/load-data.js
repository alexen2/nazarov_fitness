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
  suplapsha_s_mitbolami: 134,
  lagman_s_mitbolami: 184,
  tom_yam_s_fishbolami: 214,
  tom_kkha_s_mitbolami: 194,
  ma_po_tofu_s_farshem: 194,
  fo_s_mitbolami: 224,
  miso_s_fishbolami: 194
}

let chelyabinsk = {
  borshch_s_mitbolami: 175,
  solyanka_s_mitbolami: 195,
  suplapsha_s_mitbolami: 135,
  lagman_s_mitbolami: 185,
  tom_yam_s_fishbolami: 215,
  tom_kkha_s_mitbolami: 195,
  ma_po_tofu_s_farshem: 195,
  fo_s_mitbolami: 225,
  miso_s_fishbolami: 195
}

export default loadData;