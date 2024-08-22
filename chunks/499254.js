t.d(e, {
    _: function () {
        return l;
    },
    y: function () {
        return r;
    }
});
var i = t(570140);
function l(n, e) {
    i.Z.dispatch({
        type: 'APP_LAUNCHER_SHOW',
        entrypoint: n,
        activeViewType: e
    });
}
function r(n) {
    i.Z.dispatch({
        type: 'APP_LAUNCHER_DISMISS',
        closeReason: n
    });
}
