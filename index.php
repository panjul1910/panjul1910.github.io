<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Absensi Per Mata Kuliah dan Per Minggu</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<h1>Absensi Per Mata Kuliah dan Per Minggu</h1>
	<form>
		<label for="nama">Nama:</label>
		<input type="text" id="nama" name="nama" required autocomplete="off">
		<br><br>
		<label for="matkul">Mata Kuliah:</label>
		<select id="matkul" name="matkul" required>
			<option value="" selected disabled>-- Pilih Mata Kuliah --</option>
			<option value="Algoritma dan Pemrograman">Algoritma dan Pemrograman</option>
			<option value="Pemrograman Web">Pemrograman Web</option>
			<option value="Basis Data">Basis Data</option>
			<option value="Sistem Operasi">Sistem Operasi</option>
		</select>
		<br><br>
		<label for="minggu">Minggu Ke:</label>
		<input type="number" id="minggu" name="minggu" min="1" max="16" required>
		<br><br>
		<label for="waktu">Jam Masuk:</label>
		<font id="waktu"></font>
		<br><br>
		<label for="tanggal">Tanggal:</label>
		<font id="tanggal"></font>
		<br><br>
		<button type="button" onclick="tambahAbsensi()">Tambah Absensi</button>
	</form>
	<br>
	<table id="tabelAbsensi">
		<thead>
			<tr>
				<th>Nama</th>
				<th>Mata Kuliah</th>
				<th>Minggu Ke</th>
				<th>Jam Masuk</th>
			</tr>
		</thead>
		<tbody>
		</tbody>
	</table>

	<script src="js/script.js"></script>
</body>
</html>