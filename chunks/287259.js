n.d(t, {
    JZ: function () {
        return a;
    },
    fS: function () {
        return r;
    },
    wX: function () {
        return l;
    }
});
var i = n(570140);
function r(e, t) {
    i.Z.dispatch({
        type: 'LIBRARY_TABLE_SORT_UPDATE',
        key: e,
        direction: t
    });
}
function a(e) {
    i.Z.dispatch({
        type: 'LIBRARY_APPLICATION_FILTER_UPDATE',
        query: e
    });
}
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    i.Z.dispatch({
        type: 'LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE',
        key: e,
        isKeyboardEvent: t
    });
}
