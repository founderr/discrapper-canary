function i() {
    let e,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
        r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = window.GLOBAL_ENV.INVITE_HOST;
    return (
        (e = '/'.concat(n)),
        ''
            .concat(r ? ''.concat(location.protocol, '//') : '')
            .concat(i)
            .concat(e)
    );
}
r.d(n, {
    Z: function () {
        return i;
    }
});
