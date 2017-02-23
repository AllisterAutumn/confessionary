var AllItems = React.createClass({
  handleDelete(id){
    this.props.handleDelete(id);
  },
  //end of handle delete


render(){
  var items = this.props.items.map((item, i)=>{
    return (
      <div key={item.id} id="all">
         <h3>{item.name}</h3>
         <p>{item.description}</p>
          <button onClick={this.handleDelete.bind(this, item.id)}>please...this isn't me</button>
      </div>
        )
    });
    return(
        <div>
          {items}
        </div>
      )
  }
})//end of the create class method
