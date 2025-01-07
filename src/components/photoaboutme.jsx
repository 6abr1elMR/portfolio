import './photoaboutme.css';

const Photoaboutme = ({ imgperfil }) => {
    return <div className='photoaboutme'>
        <img src={imgperfil} alt="perfil" />
    </div>;
}

export default Photoaboutme;