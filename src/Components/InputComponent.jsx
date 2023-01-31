const inputComponent = () =>{
    return (
        <>
         <div className="navbar-container">
        <h3 className="navbar-title">TODO</h3>

        {/* navbar-input */}
        <div className="navbar-input-container">
          <input type="checkbox" name="input-value-radio" id="input-radio"/>
          <input type="text" name="input-placeholder" id="inputHolder" placeholder='Create a new todo...'/>
        </div>
        {/* End of navbar-input */}
      </div>
        </>
    )
}

export default inputComponent