import PropTypes from 'prop-types'

export const Footer = ({ styleText }) => {
    return (
        <>
            <p style={styleText} className="absolute left-0 bottom-0 h-10 w-full text-center text-xl">
                Made with ❤️ by{' '}
                <a
                    className="hover:opacity-60 hover:underline transition-all"
                    href="https://github.com/kiudev"
                    target="_blank"
                    rel="noreferrer"
                >
                    @kiudev
                </a>
            </p>
        </>
    )
}

Footer.propTypes = {
    styleText: PropTypes.object
}
