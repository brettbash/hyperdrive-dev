export default () => {
    // Global get CSRF token functer (used by forms).
    window.getToken = async () => {
        return await fetch('/!/DynamicToken/refresh')
            .then(res => res.json())
            .then(data => {
                return data.csrf_token
            })
            .catch(function (error) {
                this.error = 'Something went wrong. Please try again later.'
            })
    }
}
