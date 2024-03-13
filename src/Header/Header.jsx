import styles from './Header.module.css'

function Header() {
    return(
        <div className={styles.Header}>
            <header>
                <h1 id ='bugs'>🐞 Bugs Incorporation 🐞</h1>
                <p>Bugs.Inc is a premier freelancing company in the software sector, dedicated to empowering innovation through personalized solutions. With expertise in web and mobile development, software engineering, and UI/UX design, we offer high-quality services tailored to meet diverse client needs. Our commitment to excellence, flexibility, and customer satisfaction sets us apart, making Bugs.Inc the ideal partner for your next digital project.</p>
            </header>
            <nav>
            <span><a href="#">Home</a></span>
            <span><a href="#">Services</a></span>
            <span><a href="#">Blog</a></span>
            <span><a href="#">About Us</a></span>
            </nav>
            
        </div>
    );
}

export default Header