import React from "react";

const Post = (props) => {
    return(
        // <div className="artikel">
        //     <div className="gambar-artikel">
        //         <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumbnail Artikel"/>
        //     </div>
        //     <div className="konten-artikel">
        //          <div className="judul-artikel">{props.Namabarang}</div>
        //          <p className="isi-artikel">{props.Harga}</p>
        //          <p className="isi-artikel">{props.Deskripsi}</p>
        //          <button className="btn btn-sm btn-warning" onClick={() => props.hapusArtikel(props.idArtikel)}>Hapus</button>
        //     </div>
        // </div>
        <div className="card" style={{width: "400px"}}>
  <img src={props.Image} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.Namabarang}</h5>
    <p className="card-text">{props.Deskripsi}</p>
    <p className="card-text">{props.Harga}</p>

    <a href="#" class="btn btn-primary">Beli</a>
  </div>
</div>
     )
}
export default Post;