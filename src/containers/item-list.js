import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {selectItem} from './../actions/index';

class ItemList extends React.Component {

  createItems() {
    let listItems = this.props.items.map(
      (eachItem) => {
        return(
          <li key={eachItem.id} onClick={()=> {
            this.props.selectItem(eachItem)
          }} >
            {eachItem.name}
            <div style={{display: 'none'}}>
              {eachItem.price}
            </div>
          </li>
        );
      }
    );
    return listItems;
  }

  render() {
    return(
      <ul>
        {this.createItems()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectItem: selectItem}, dispatch);
}

let ItemContainer = connect(mapStateToProps, mapDispatchToProps)(ItemList);

export default ItemContainer;
