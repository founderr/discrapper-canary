r.d(n, {
    T: function () {
        return s;
    },
    t: function () {
        return o;
    }
});
var i = r(570140),
    a = r(131951);
function s(e) {
    var n, r;
    null === (r = a.Z.getMediaEngine()) || void 0 === r || null === (n = r.presentNativeScreenSharePicker) || void 0 === n || n.call(r, e),
        i.Z.dispatch({
            type: 'NATIVE_SCREEN_SHARE_PICKER_PRESENT',
            style: e
        });
}
function o() {
    var e, n;
    null === (n = a.Z.getMediaEngine()) || void 0 === n || null === (e = n.releaseNativeDesktopVideoSourcePickerStream) || void 0 === e || e.call(n), i.Z.dispatch({ type: 'NATIVE_SCREEN_SHARE_PICKER_RELEASE' });
}
