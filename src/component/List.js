import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react"
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function List() {
    const [list, setList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8080/tuors").then((res) => {
            setList(res.data);
        });
    }, [list]);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete')) {
            axios.delete(' http://localhost:8080/tuors/' + id,
            ).then(res => {
            })
        }

    }
    return (
        <div>
            <button type="submit" class="btn btn-primary"><Link style={{ textDecoration: "none", color: "inherit" }} to={"/add"}>Add</Link></button>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Giá</th>
                    </tr>
                </thead>
                <tbody>
                    {list && list.map((item, index) => (
                        <tr>
                            <td>{index}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <button type="submit" class="btn btn-primary"><Link style={{ textDecoration: "none", color: "inherit" }} to={"/detail/" + item.id}>Detail</Link></button>
                            <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                            <td><button><Link style={{ textDecoration: "none", color: "inherit" }} to={"/update/" + item.id}>Update</Link></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default List