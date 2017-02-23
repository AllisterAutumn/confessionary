var NewItem = React.createClass({
  handeClick(){
    var name = this.refs.name.value;
    var description = this.refs.description.value;

    $.ajax({
      url: 'api/v1/items',
      type: 'POST',
      data: { item: {name: name, description: description} },
      success: (item) => {
        this.props.handleSubmit(item);
      }
    });
  },

  //the end of the handleClick method

  render(){
    return(
      <div>
      <p>Who are you?</p>
        <input type="text" ref="name" placeholder="Name"/>
        <br />
        <br />

       <p>What have you to say?</p>
        <textarea type="text" ref="description" placeholder="Sin"></textarea>
        <br />
        <p id="purge" onClick={this.handeClick}>purge</p>

      </div>
      )
  }

  //end of the render method

})
