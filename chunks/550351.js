r.d(n, {
    Z: function () {
        return m;
    }
});
var i = r(594190),
    a = r(569545),
    s = r(199902),
    o = r(314897),
    l = r(158776),
    u = r(19780),
    c = r(979651),
    d = r(709054),
    f = r(356659),
    _ = r(981631),
    h = r(388032);
function p(e) {
    var n, r;
    if (null != e) {
        let { ownerId: n } = a.my(e);
        if (n !== o.default.getId()) {
            let e = l.Z.getActivities(n).find((e) => e.type === _.IIU.PLAYING);
            return {
                sourceName: null == e ? void 0 : e.name,
                sourceApplicationId: null == e ? void 0 : e.application_id
            };
        }
    }
    let u = s.Z.getStreamerActiveStreamMetadata(),
        c = null == u ? void 0 : u.pid,
        d = (() => (null != u ? (null != c ? i.ZP.getGameForPID(c) : null) : i.ZP.getVisibleGame()))();
    return {
        sourceName: null !== (n = null == u ? void 0 : u.sourceName) && void 0 !== n ? n : null == d ? void 0 : d.name,
        sourceApplicationId: null !== (r = null == u ? void 0 : u.id) && void 0 !== r ? r : null == d ? void 0 : d.id
    };
}
function m(e) {
    let { sourceName: n, sourceApplicationId: r } = p(e),
        i = u.Z.getChannelId(),
        a = [o.default.getId()];
    return (
        null != i && (a = Object.keys(c.Z.getVoiceStatesForChannel(i))),
        {
            id: d.default.fromTimestamp(Date.now()),
            version: f.Bg,
            applicationName: null != n ? n : h.intl.string(h.t.qtSJxc),
            applicationId: r,
            users: a,
            clipMethod: 'manual',
            length: 0,
            thumbnail: ''
        }
    );
}
