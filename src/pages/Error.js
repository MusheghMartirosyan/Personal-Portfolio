import ErrorImg from '../images/Error404.png'

const Error = () => {
    return(
        <>
            <section style={{
                    margin: '0',
                    textAlign: 'center',
                    alignItems: 'center',
                    width: '100vw',
                    height: '100vh',
                    padding: '0'
            }}>
                <p style={{marginTop: '1rem', color: 'var(--color-primary)', fontSize: '3rem', fontWeight: 'bold'}}>Page Not Found</p>
                <img style={{display: 'inline-block', width: '45%', textAlign: 'center'}} src={ErrorImg} />
            </section>
        </>
    )
}

export default Error