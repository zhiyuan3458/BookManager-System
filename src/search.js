import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import search from '../public/stylesheets/search.css';

class SearchInput extends React.Component{
	constructor(props){
       super(props);
       this.state = {isHaveInDatabase:false,values:[],proposal:[]};
       this.changeHandler = this.changeHandler.bind(this);
	}
    
    componentDidMount(){
    	var that = this.state;
    	$.ajax({
    		url:'/search',
    		data:{type:'getBookName'},
    		success:function(data,status){
    			if(status == 'success'){
    				data.forEach(function(value){
                           that.proposal.push(value);
    				});
                     // that.proposal = data;
    			}
    		},
    		error:function(err){
    			alert(err);
    		}
    	});
    }

    changeHandler(e){
       var proposal = this.state.proposal;
       if(e.target.value != ''){
       	   this.setState({values:[]});
       	   var values = [];
           var inputText = "^"+e.target.value+".*";
           for(var test in proposal){
       	    if(proposal[test].bookName.match(inputText)){
       	    	values.push(proposal[test]);
       	    	this.setState({values:values});
                this.setState({isHaveInDatabase:true}); 
       	    }
           }   
       }else{
       	 this.setState({isHaveInDatabase:false});
       }
    }

	render(){
		var values = this.state.values;
		var xialaUl = '';
		if(this.state.isHaveInDatabase){
             xialaUl = <div><ul className={search.proposal}>
                          {
                          	values.map(function(value){
                          		var url = "/detail?bookId="+value.bookId;
                          		return <a href={url} key={value.bookName}><li key={value}>{value.bookName}</li></a>;
                          	})
                          }
                       </ul></div>;
		}else{
			xialaUl = <div></div>;
		}
		// var xialaUl = this.state.isHaveInDatabase?<div><ul className={search.proposal}>
		//   {this.state.values}
		// </ul></div>:<div></div>; 
		return (
		 <div>
          <div className="input-group"> 
            <input name="search" onChange={this.changeHandler} type="text" className="form-control" placeholder="请输入书名" / >  
            <span className="input-group-btn">  
               <button className="btn btn-info">查找</button>
            </span>
          </div>
           {xialaUl}  
         </div>
		);
	}
}

ReactDOM.render(
	<SearchInput  />,
	document.getElementById("search")
);