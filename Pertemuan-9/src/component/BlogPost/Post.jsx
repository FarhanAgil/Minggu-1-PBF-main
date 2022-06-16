import React from "react";

const Post = (props) => {
    return(
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumbnail Artikel"/>
            </div>
            <div className="konten-artikel">
                 <div className="judul-artikel">{props.nama}</div>
                 <p class="isi-artikel">{props.nim}</p>
            <p class="isi-artikel">{props.alamat}</p>
            <p class="isi-artikel">{props.hp}</p>
            <p class="isi-artikel">{props.angkatan}</p>
            <p class="isi-artikel">{props.status}</p>
                 <button className="btn btn-sm btn-warning" onClick={() => props.hapusArtikel(props.idMahasiswa)}>Hapus</button>
            </div>
        </div>
     )
}
export default Post;