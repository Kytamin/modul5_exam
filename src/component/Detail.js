import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react"
import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
function Detail() {
    const{id} =useParams()
    const [detail, setDetail] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8080/tuors/${id}`).then((res) => {
            setDetail(res.data);
        });
    }, {detail});
    return (
        <>
        <h1>CHi tiết Tour</h1>
        <table>
            <tr>tuor du lịch {detail.title}</tr>
            <tr>giá: {detail.price}</tr>
            <tr>giới thiệu:{detail.description}</tr>
        </table>
        <button type="submit" class="btn btn-primary"><Link style={{ textDecoration: "none", color: "inherit" }} to={"/list"}>Back to list</Link></button>
        </>
    )
}

export default Detail