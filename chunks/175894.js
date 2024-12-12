r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(192379),
    a = r(570140);
function s(e) {
    let { channel: n, userActivity: r } = e,
        s = n.id,
        o = null == r ? void 0 : r.applicationId;
    i.useEffect(() => {
        null != s &&
            null != o &&
            a.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_OPEN',
                channelId: s,
                applicationId: o
            });
    }, [s, o]);
}
