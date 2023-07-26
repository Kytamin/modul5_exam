import "bootstrap/dist/css/bootstrap.css"
import { useFormik } from "formik"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
function Update() {
    const {id}=useParams()
    const navigate=useNavigate()
    const formAdd = useFormik({
        initialValues: {
            title: "",
            price: "",
            description: ""
        },
        onSubmit:values=>{
            let data={
                title:values.title,
                price:values.price,
                description:values.description,
            }
            axios.put(`http://localhost:8080/tuors/${id}`,data).then(res=>{
                navigate('/list')
            })
        }

    })
    return (
        <>  ADD Tour
            <form onSubmit={formAdd.handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Title</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    name="title"
                    onChange={formAdd.handleChange}
                    value={formAdd.values.title}
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Price</label>
                    <input type="text" 
                    class="form-control"
                     id="exampleInputPassword1"
                     name="price"
                    onChange={formAdd.handleChange}
                    value={formAdd.values.price}
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Description</label>
                    <input type="text" 
                    class="form-control"
                     id="exampleInputPassword1"
                     name="description"
                    onChange={formAdd.handleChange}
                    value={formAdd.values.description}
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
export default Update