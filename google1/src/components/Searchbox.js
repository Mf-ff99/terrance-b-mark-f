import React from 'react';  

export default class Searchbox extends React.Component{
        render(){ 
            return(
                <div className='SearchBar'>
    
                    <label htmlFor='SearchInput'className='SearchLabel'>search:</label>
                        <input 
                        name='SearchInput' 
                        value={this.props.props.q} 
                        id='SearchInput' 
                        placeholder='Book name' 
                        type='text'
                        onChange={e => this.props.handleSearchText(e.target.value)}
                        
                        ></input>
                        <button type='submit' onClick={e => this.props.handleSubmit(e)} >Search</button>
                        <br /> 
                        <label htmlFor='filterByType'>print type:</label>
                        <select id='filterByType'
                        name='filterByType'
                        onChange={e => this.props.handleSearch(e.target.value)}>
                            <option value='ALL'>all</option>
                            <option value='BOOKS'>books</option>
                            <option value='MAGAZINES'>magazines</option>
                        </select>
                        <label htmlFor='filter'>book type:</label>
                        <select id='filter'name='filter'
                        onChange={e => this.props.handleFilterByType(e.target.value)}>
                        <option value='ebooks'>ebooks</option>
                        <option value='free-ebooks'>free EBooks</option>
                        <option value='full'>full</option>
                        <option value='partial'>partial</option>
                        </select>
                    
                     </div>
            )
        }

}

