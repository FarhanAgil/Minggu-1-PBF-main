import React from "react";

const Post = (props) => {
    return (
        <div class="Mahasiswa">
        <div class="konten-artikel">
            <div class="judul-artikel">{props.nama}</div>
            <p class="isi artikel">{props.nim}</p>
            <p class="isi artikel">{props.alamat}</p>
            <p class="isi artikel">{props.hp}</p>
            <p class="isi artikel">{props.angkatan}</p>
            <p class="isi artikel">{props.status}</p>
            <button className="btn btn-sm btn-warning" onClick={() => props.hapusArtikel(props.idMahasiswa)}>Hapus</button><br /><br />
        </div>
    </div>
    )
}

export default Post;