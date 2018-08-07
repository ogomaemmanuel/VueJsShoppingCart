import Vue from 'vue';
let $myfilter= [
    Vue.filter("changeToKsh", function (value) {
    if (!value) return ''
    value = value.toString()
    return 'Ksh' + value
}),
    Vue.filter("changeToNaira", function (value) {
        if (!value) return ''
        value = value.toString()
        return 'Naira' + value
    }),
];
export default $myfilter;