import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";

class BlogPost extends Component{
    state = {
        listArtikel:[],
        insertArtikel: {
           userId: 1,
           id: 1,
           title: "",
           body:""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch(`http://localhost:3001/posts`)
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI =>{
            this.setState({
                listArtikel: jsonHasilAmbilDariAPI
            })
        })
        
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusArtikel = (data) => {
        fetch(`http://localhost:3001/posts/${data}`, {method: 'DELETE'})
            .then(res => { 
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahArtikel = (event) =>{
        let formInsertArtikel = {...this.state.insertArtikel};
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        })
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/posts', {
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })

            .then( (response ) => {
                this.ambilDataDariServerAPI();
            });
    }


    render() {
       return(
           <div className="post-artikel">
            
               <h2>TOKO CASING HP ANIME</h2>
               {
                   this.state.listArtikel.map(artikel =>{
                       return <Post key={artikel.id} Image={artikel.Image} Namabarang={artikel.Namabarang} Harga={artikel.Harga} Deskripsi={artikel.Deskripsi} idArtikel={artikel.id}hapusArtikel={this.handleHapusArtikel}/>
                   })
               }
           </div>
       )
    }
}

export default BlogPost;