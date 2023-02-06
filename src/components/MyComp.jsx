const MyComp = (promt) => (
    <div>
        <h1>Titolo Principale</h1>
        <h2>titolo Secondario</h2>
        <h3>Questo è testo dinamico: {promt.title}</h3>
        <p style={{backgroundColor: promt.color}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta fugit nemo vel aut. Fugiat, quo aut? In, modi doloremque, voluptatum optio doloribus, necessitatibus veritatis fuga nisi et eum ratione.</p>
    </div>
)

export default MyComp