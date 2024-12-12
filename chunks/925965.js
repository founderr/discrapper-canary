e.exports = function (e) {
    var n,
        i = this;
    'number' != typeof e.which && (e.which = e.keyCode);
    var a = r(619820)(e);
    if (!!a) {
        if ('keyup' === e.type && i.ignoreNextKeyup === a) {
            i.ignoreNextKeyup = !1;
            return;
        }
        (n = r(287901)), i.handleKey(a, n(e), e);
    }
};
