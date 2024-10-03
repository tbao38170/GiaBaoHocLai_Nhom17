import React, { Component } from 'react'
import { connect } from 'react-redux';

class XucSac extends Component {

    renderXucSac = () => {
        return this.props.mangXucXac.map((xucXac, index) => {
            return <img key={index} className='ml-2' style={{ width: 50, height: 50 }} src={xucXac.hinhAnh} alt={xucXac.hinhAnh}></img>
        })
    }
    render() {
        return (
            <div>
                {this.renderXucSac()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangXucXac: state.BaiTapXucSacReducer.mangXucXac
    }
}
export default connect(mapStateToProps)(XucSac)
