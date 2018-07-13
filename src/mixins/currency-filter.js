const myMixin = {
    filters: {
        changeToKsh: function (value) {
            if (!value) return ''
            value = value.toString()
            return 'Ksh' + value
        }
    }
}

export default myMixin