r.d(n, {
    Hm: function () {
        return l;
    },
    Tv: function () {
        return o;
    },
    __: function () {
        return a;
    },
    yT: function () {
        return s;
    }
});
var i = r(570140);
function a(e, n, r) {
    i.Z.dispatch({
        type: 'APP_LAUNCHER_SHOW',
        entrypoint: e,
        activeViewType: n,
        initialState: r
    });
}
function s(e) {
    i.Z.dispatch({
        type: 'APP_LAUNCHER_DISMISS',
        closeReason: e
    });
}
function o(e) {
    i.Z.dispatch({
        type: 'APP_LAUNCHER_ADD_FAILED_APP_DM_LOAD',
        channelId: e
    });
}
function l(e) {
    i.Z.dispatch({
        type: 'APP_LAUNCHER_REMOVE_FAILED_APP_DM_LOAD',
        channelId: e
    });
}
