r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(570140),
    a = r(65154);
function s(e, n) {
    i.Z.wait(() => {
        i.Z.dispatch({
            type: 'AUDIO_SET_LOCAL_VIDEO_DISABLED',
            context: a.Yn.DEFAULT,
            userId: e,
            videoToggleState: n,
            persist: !1,
            isAutomatic: !0
        });
    });
}
