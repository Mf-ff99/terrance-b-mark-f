import React from 'react';  

export default class Searchbox extends React.Component{
        render(){ 
            return(
                <div className='SearchBar'>
                    <form >
                    <label htmlFor='SearchInput'className='SearchLabel'>search:</label>
                        <input name='SearchInput' id='SearchInput' placeholder= 'Book name'type='text'></input>
                        <button type='submit' >Search</button>
                        <br /> 
                        <label htmlFor='filterByType'>print type:</label>
                        <select id='filterByType'name='filterByType'>
                            <option value='all'>all</option>
                            <option value='books'>books</option>
                            <option value='magazines'>magazines</option>
                            
                        </select>
                        <label htmlFor='filter'>book type:</label>
                        <select id='filter'name='filter'>
                        <option value='ebooks'>ebooks</option>
                        <option value='free-EBooks'>free EBooks</option>
                        <option value='full'>full</option>
                        <option value='partial'>partial</option>
                        </select>
                        </form>
                     </div>
            )
        }

}