//mendapatkan paramerter dari url
const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get('presensiId');


export let urlFetch = "https://ws-nilai.herokuapp.com/presensinew/" + presensiId;
