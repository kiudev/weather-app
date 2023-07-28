import '../styles/toggle-switch.css'
import PropTypes from 'prop-types'

export const ToggleSwitch = ({ click }) => {
    return (
        <>
            <label className="ui-switch">
                <input onClick={click} type="checkbox" />
                <div className="slider">
                    <div className="circle"></div>
                </div>
            </label>
        </>
    )
}

ToggleSwitch.propTypes = {
    click: PropTypes.func,
}
