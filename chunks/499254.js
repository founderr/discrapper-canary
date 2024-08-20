n.d(a, {
    _: function () {
        return r;
    },
    y: function () {
        return s;
    }
});
var t = n(570140);
function r(e, a) {
    t.Z.dispatch({
        type: 'APP_LAUNCHER_SHOW',
        entrypoint: e,
        activeViewType: a
    });
}
function s(e) {
    t.Z.dispatch({
        type: 'APP_LAUNCHER_DISMISS',
        closeReason: e
    });
}
