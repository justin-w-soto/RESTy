import React from 'react';
// import style from '../../main.css';

export default function Controls({ onChange, onSubmit}) {
    return( 
    
        <form onChange={onChange} onSubmit={onSubmit}>

        <input aria-label="url" type="text" name="url" placeholder="URL" />

        <section>

          <div>
            <label htmlFor="get">GET
              <input type="radio" id="get" name="method" value="GET" />
            </label>
            <label htmlFor="post">POST
              <input type="radio" id="post" name="method" value="POST" />
            </label>
            <label htmlFor="put">PUT
              <input type="radio" id="put" name="method" value="PUT" />
            </label>
            <label htmlFor="patch">PATCH
              <input type="radio" id="patch" name="method" value="PATCH" />
            </label>
            <label htmlFor="delete">DELETE
              <input type="radio" id="delete" name="method" value="DELETE" />
            </label>
          </div>

          <button>Submit</button>

        </section>

        <textarea aria-label="body" name="body" placeholder="raw JSON body"></textarea>

        </form>
        )
}
       
      
    


