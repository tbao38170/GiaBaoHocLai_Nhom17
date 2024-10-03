import React, { Component } from 'react'
import './BaiTapXucSac.css'
import XucSac from './XucSac'
import ThongTinTroChoi from './ThongTinTroChoi'
export default class BaiTapXucSac extends Component {
    render() {
        return (
            <div className="game">
                <div className="title-game text-center mt-5 display-4">
                    Game xúc sắc
                </div>

                <div className='row text-center mt-5'>
                    <div className='col-5'>
                        <button className='btnGame'>Tài</button>
                    </div>
                    <div className='col-2'>
                        <XucSac></XucSac>
                    </div>
                    <div className='col-5'>
                        <button className='btnGame'>Xỉu</button>
                    </div>

                </div>
                <div className="text-center">
                    <ThongTinTroChoi></ThongTinTroChoi>
                    <button onClick={() => { this.props.playGame() }} className='btn btn-success mt-5 p-2 display-4'>Play game</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        datCuoc: (taiXiu) =>{
            let action = {
                type:'DAT_CUOC',
                taiXiu
            }
            dispatch(action);
        }
        
    }
}