t.d(n, {
    Hm: function () {
        return o;
    },
    Tv: function () {
        return i;
    },
    __: function () {
        return r;
    },
    yT: function () {
        return s;
    }
});
var a = t(570140);
function r(e, n, t) {
    a.Z.dispatch({
        type: 'APP_LAUNCHER_SHOW',
        entrypoint: e,
        activeViewType: n,
        initialState: t
    });
}
function s(e) {
    a.Z.dispatch({
        type: 'APP_LAUNCHER_DISMISS',
        closeReason: e
    });
}
function i(e) {
    a.Z.dispatch({
        type: 'APP_LAUNCHER_ADD_FAILED_APP_DM_LOAD',
        channelId: e
    });
}
function o(e) {
    a.Z.dispatch({
        type: 'APP_LAUNCHER_REMOVE_FAILED_APP_DM_LOAD',
        channelId: e
    });
}
