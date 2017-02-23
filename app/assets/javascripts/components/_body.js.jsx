var Body = React.createClass({
getInitialState ( ){
    return {items: []}
  },
  //End of getinitialstate

componentDidMount(){
    $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response })
  });
},
//End of component did mount. This pulls items from the database

handleSubmit(item){
  var newState = this.state.items.concat(item);
  this.setState({items: newState})
  alert("the contract is sealed")
},
//end of handle submit method.This method handles submissions.


handleDelete (id) {
   $.ajax({
    url: `/api/v1/items/${id}`,
    type:  'DELETE',
    success: () => {
      this.removeItemClient(id);
      alert('your sin may be erased, but it will not be forgotten');
    }

   })
},
//End of handle delete method. This method handles deletions.

removeItemClient(id){
  var newItems = this.state.items.filter((item) => {
    return item.id != id;
  });
  this.setState({items: newItems });
},
//end of removeItemClient. This method refreshes the page after an item has been deleted

  render() {
    return (
      <div >
        <NewItem handleSubmit={this.handleSubmit} />
        <div id='parchment'>
        <AllItems  items={this.state.items} handleDelete={this.handleDelete} />
      </div>
      </div>
    )
  } //end of the render method
});


