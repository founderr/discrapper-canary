t.d(n, {
    _: function () {
        return i;
    },
    y: function () {
        return r;
    }
});
var l = t(570140);
function i(e, n) {
    l.Z.dispatch({
        type: 'APP_LAUNCHER_SHOW',
        entrypoint: e,
        activeViewType: n
    });
}
function r(e) {
    l.Z.dispatch({
        type: 'APP_LAUNCHER_DISMISS',
        closeReason: e
    });
}
