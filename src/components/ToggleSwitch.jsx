import '../styles/toggle-switch.css'
import PropTypes from 'prop-types'

export const ToggleSwitch = ({ click }) => {
    return (
        <>
            <label class="ui-switch">
                <input onClick={click} type="checkbox" />
                <div class="slider">
                    <div class="circle"></div>
                </div>
            </label>

        </>
    )
}

ToggleSwitch.propTypes = {
    click: PropTypes.func
}