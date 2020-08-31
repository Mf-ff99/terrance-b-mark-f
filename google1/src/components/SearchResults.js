import React from 'react';  

export default  class SearchResults extends React.Component{
        render(){ 
            return(
              <li>
                  <div className= 'bookHeader'>
                    
            <h3>{this.props.title}</h3>
            <img src={this.props.url} alt='book Image'>

            </img>

                  </div>
            <h3>{this.props.author}</h3>
            <h4>{this.props.price}</h4>
            <h4>{this.props.description}</h4>
              </li>
            )
          
    }

}