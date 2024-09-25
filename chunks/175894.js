n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(470079),
    i = n(570140);
function a(e) {
    let { channel: t, userActivity: n } = e,
        a = t.id,
        o = null == n ? void 0 : n.applicationId;
    r.useEffect(() => {
        null != a &&
            null != o &&
            i.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_OPEN',
                channelId: a,
                applicationId: o
            });
    }, [a, o]);
}
