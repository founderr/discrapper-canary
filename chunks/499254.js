t.d(n, {
    _: function () {
        return i;
    },
    y: function () {
        return a;
    }
});
var l = t(570140);
function i(e, n, t) {
    l.Z.dispatch({
        type: 'APP_LAUNCHER_SHOW',
        entrypoint: e,
        activeViewType: n,
        initialState: t
    });
}
function a(e) {
    l.Z.dispatch({
        type: 'APP_LAUNCHER_DISMISS',
        closeReason: e
    });
}
