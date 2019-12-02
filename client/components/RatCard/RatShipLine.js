// Module imports
import React from 'react'
// import PropTypes from 'prop-types'




// Component imports
import { connect } from '../../store'
import CardControls from '../CardControls'




// Component Constants





@connect
class RatShipLine extends React.Component {
  /***************************************************************************\
    Class Properties
  \***************************************************************************/

  state = {
    editMode: false,
    deleteConfirm: false,
    // changes: {},
  }





  /***************************************************************************\
    Private Methods
  \***************************************************************************/





  /***************************************************************************\
    Public Methods
  \***************************************************************************/

  // componentDidMount () {
  //   const {
  //     ship,
  //   } = this.props
  // }

  render () {
    const {
      ship,
    } = this.props

    const {
      editMode,
      // changes,
      deleteConfirm,
    } = this.state

    const {
      shipId,
      name,
      shipType,
    } = ship.attributes

    const idLength = 4
    const idPrefix = 'FR'

    const fullId = idPrefix + String(shipId).padStart(idLength, '0')
    return (
      <>
        <span className="id">{fullId}</span>
        <span className="name">{name}</span>
        <span className="type">{shipType}</span>
        <div className="controls">
          <CardControls
            canSubmit={this.canSubmit}
            controlType="ship"
            deleteConfirmMessage={this.renderDeleteConfirmMessage}
            deleteMode={deleteConfirm}
            editMode={editMode}
            onCancelClick={this._handleCancel}
            onDeleteClick={this._handleDelete}
            onEditClick={this._handleEdit}
            onSubmitClick={this._handleSubmit} />
        </div>
      </>

    )
  }





  /***************************************************************************\
    Getters
  \***************************************************************************/





  /***************************************************************************\
    Redux Properties
  \***************************************************************************/

  static mapDispatchToProps = ['updateShip', 'deleteShip']





  /***************************************************************************\
    Prop Definitions
  \***************************************************************************/

  // static propTypes = {
  //   ship: PropTypes.object.isRequired,
  // }
}





export default RatShipLine
