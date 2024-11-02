n.d(t, {
    Gl: function () {
        return o;
    },
    hG: function () {
        return a;
    },
    oI: function () {
        return r;
    }
});
var i = n(570140);
function a(e, t, n) {
    i.Z.dispatch({
        type: 'CONNECTED_DEVICE_SET',
        displayName: e,
        connectedDevicePreference: t,
        location: n
    });
}
function o(e) {
    i.Z.dispatch({
        type: 'CONNECTED_DEVICE_IGNORE',
        displayName: e
    });
}
function r() {
    i.Z.dispatch({ type: 'CONNECTED_DEVICE_NEVER_SHOW_MODAL' });
}
