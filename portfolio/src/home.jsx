import './home.css'

function Home() {
    return (
        <>
            <section className="home">
                <h1>Hi, I'm Piyush Kochar. </h1>
                <h3>— a passionate web developer with a deep interest in building modern, user-friendly websites.</h3>
                <p>With every line I write, I aim to create clean, responsive, and impactful web interfaces that not only look great but also deliver a seamless user experience.</p>
                <hr className='separator' />

                <div className='social-links'>
                    <a href="https://www.linkedin.com/in/piyush-kochar-6b812b262/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/piyushh-k" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Home
