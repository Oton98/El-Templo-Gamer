export const Item = ({ item }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={`./img/${item.img}`} className="card-img-top" alt={`imagen de ${item.marca} ${item.modelo}`} />
            <div className="card-body">
                <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                <p className="card-text">{item.marca}</p>
                <p className="card-text">${item.precio}</p>
                <a className="btn btn-dark">Ver Producto</a>
            </div>
        </div>
    );
}

