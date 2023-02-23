//generate chat wa
//generate link
function buatLink() {
	var pesan = document.getElementById("pesan").value;
	var tlp = document.getElementById("tlp").value;
	var change = tlp.replace(/\D/g, '');
	if (change.startsWith('08')) {
  		change = '62' + change.substr(1);
	}
	var tautan = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(change) + "&text=" + encodeURIComponent(pesan);
	document.getElementById("tautan").innerHTML = tautan;
}
//copy link
function copy() {
	let tautan = document.getElementById("tautan").value;
	if (tautan == "") {
		alert("Tidak Ada Link Yang Bisa Disalin")
	}
	else{
		navigator.clipboard.writeText(tautan);
		alert("Link Sudah Berhasil Di Salin");
	}
}
//mengecek kelengkapan data
function checkfill() {
	var tlp = document.getElementById("tlp").value;
	var pesan = document.getElementById("pesan").value;
	if (tlp == "" || pesan == "") {
		alert("Data Tidak Boleh Ada Yang Kosong");
		return false;
	}
	else {
		buatLink();
	}
}
//mengecek format nomor telepon
function detectnomor() {
	let tlp = document.getElementById("tlp").value;
	let pesan = document. getElementById("pesan").value;
	if (tlp.startsWith('08') || tlp.startsWith('62')) {
		checkfill();
	}
	else {
		if (tlp == "") {
			checkfill();
		}
		else{
			if (pesan == "") {
				checkfill();
			}
			else{
				alert("Nomor Telepon Salah");
				return false;
			}
		}
	}
}
//disable Right Click
document.addEventListener('contextmenu', event => event.preventDefault());
//disable F12
document.onkeypress = function (event) {
  event = (event || window.event);
  if (event.keyCode == 123) {
    return false;
  }
}
document.onmousedown = function (event) {
  event = (event || window.event);
  if (event.keyCode == 123) {
    return false;
  }
}
document.onkeydown = function (event) {
  event = (event || window.event);
  if (event.keyCode == 123) {
    return false;
  }
}
//disable ctrl+u
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.keyCode === 85) {
    event.preventDefault()
  }
});
//disable ctrl+shift+i
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
    event.preventDefault();
  }
});