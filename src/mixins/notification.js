const notificationMixin = {
    methods: {
        notify: function (messageType,message) {
            if(messageType.toLowerCase()==="success"){
                this.$notify({
                    title: 'Success',
                    message: message,
                    type: 'success'
                });
            }

            if(messageType.toLowerCase()==="error"){
                this.$notify({
                    title: 'Error',
                    message: message,
                    type: 'Error'
                });
            }
        }
    }
}
export default notificationMixin