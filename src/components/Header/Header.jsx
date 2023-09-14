import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 border-b-2 max-w-7xl mx-auto'>
            <h2 className='text-4xl font-bold'>Knowledge Cafe</h2>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;