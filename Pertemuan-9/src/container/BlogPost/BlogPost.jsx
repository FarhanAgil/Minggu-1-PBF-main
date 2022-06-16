import React, { Component } from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";
import API from "../../services/index";


class BlogPost extends Component {
    state = {
        listmahasiswa: [],
        insertArtikel: {
            id:"",
            nim:"",
            alamat:"",
            hp:"",
            angkatan:"",
            status:""
        }
    }

    // ambilDataDariServerAPI = () => {
    //     fetch(`http://localhost:3001/posts`)
    //     .then(response => response.json())
    //     .then(jsonHasilAmbilDariAPI =>{
    //         this.setState({
    //             listArtikel: jsonHasilAmbilDariAPI
    //         })
    //     })

    // }
    ambilDataDariServerAPI = () =>{
     API.getNewsBlog().then(result => {
        this.setState( {
            listmahasiswa: result
        });
    });   
}


componentDidMount() {
    this.ambilDataDariServerAPI()
}

handleHapusArtikel = (data) => {
    // fetch(`http://localhost:3001/posts/${data}`, { method: 'DELETE' })
    //     .then(res => {
    //         this.ambilDataDariServerAPI()
    //     })
    API.deleteNewsBlog(data).then((response) => {
        this.ambilDataDariServerAPI();
    });
}

handleTambahArtikel = (event) => {
    let formInsertArtikel = { ...this.state.insertArtikel };
    let timestamp = new Date().getTime();
    formInsertArtikel['id'] = timestamp;
    formInsertArtikel[event.target.name] = event.target.value;
    this.setState({
        insertArtikel: formInsertArtikel
    })
}

handleTombolSimpan = () => {
    // fetch('http://localhost:3001/posts', {
    //     method: 'post',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(this.state.insertArtikel)
    // })

    //     .then((response) => {
    //         this.ambilDataDariServerAPI();
    //     });
    API.postNewsBlog(this.state.insertArtikel) .then((response)=> {
        this.ambilDataDariServerAPI();
    });   
}


render() {
    return(
        <div className="post-artikel">
            <div className="form pb-2 border-button">
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">nim</label>
                    <div className="col-sm">
                         <input type="text" className="form-control" id="title" name="nim" onChange={this.handleTambahArtikel}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">nama</label>
                    <div className="col-sm">
                         <input type="text" className="form-control" id="title" name="nama" onChange={this.handleTambahArtikel}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">alamat</label>
                    <div className="col-sm">
                         <input type="text" className="form-control" id="title" name="alamat" onChange={this.handleTambahArtikel}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">hp</label>
                    <div className="col-sm">
                         <input type="text" className="form-control" id="title" name="hp" onChange={this.handleTambahArtikel}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">angkatan</label>
                    <div className="col-sm">
                         <input type="text" className="form-control" id="title" name="angkatan" onChange={this.handleTambahArtikel}/>
                    </div>
                </div>
                <div className="form-group row">
                            <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                            <div className="col-sm-10">
                                <select class="form-control" id="status" name="status" onChange={this.handleTambahArtikel}>
                                    <option>Pilih Status</option>
                                    <option value={"Aktif"}>Aktif</option>
                                    <option value={"Lulus"}>Lulus</option>
                                    <option value={"Drop Out"}>Drop Out</option>
                                </select>
                            </div>
                        </div>
                
                <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
            </div>
            <h2>Daftar Mahasiswa</h2>
            {
                this.state.listmahasiswa.reverse().map(mahasiswa =>{
                    return <Post
                    nim={mahasiswa.nim} nama={mahasiswa.nama} alamat={mahasiswa.alamat} hp={mahasiswa.hp} angkatan={mahasiswa.angkatan} status={mahasiswa.status} idMahasiswa={mahasiswa.id} hapusArtikel={this.handleHapusArtikel}/>
                })
            }
        </div>
    )
}
}

export default BlogPost;