import { get } from "https://bukulapak.github.io/api/process.js";
let urlAPI = "https://ws-nilai.herokuapp.com/presensinew";
get(urlAPI, isiTablePresensi);
function isiTablePresensi(results) {
  console.log(results);
}
