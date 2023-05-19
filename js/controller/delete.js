function deleteData(IDHAPUS) {
  //   var presensiId = document.querySelector("a[data-presensi-id]").getAttribute("data-presensi-id");

  var presensiId = IDHAPUS;
  console.log(IDHAPUS);
  var target_url = "https://ws-nilai.herokuapp.com/delete/" + presensiId;

  var requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      alert(result.message);
      location.reload();
    })
    .catch((error) => console.log("Error:", error));
}
