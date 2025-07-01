
const Card = ({ title, img, description }) => {
    return (
        <div className="card col-2">
            <img src={img} className="card-img-top" width={"200px"} height={"200px"} alt="placeholder" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card