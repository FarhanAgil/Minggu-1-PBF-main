import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

const getNewsBlog = () => GetAPI('mahasiswa?_sort-nim&_order=desc');

const postNewsBlog = (dataYgDiKirim) => PostAPI('mahasiswa', dataYgDiKirim);

const deleteNewsBlog = (dataYgDihapus) => DeleteAPI('mahasiswa', dataYgDihapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}
export default API;