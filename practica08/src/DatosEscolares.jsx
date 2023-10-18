function DatosEscolares(params) {
    return(
        <
            <fieldSet>
                <legend>{titulo}</legend>
                <label htmlFor="carrera">Carrera</label>
                <input type="text" id="carrera"/>
                <label htmlFor="semestre">Semestre</label>
                <input type="text" id="semestre"/>
            </fieldSet> 
        </>
    )
}

export default DatosEscolares