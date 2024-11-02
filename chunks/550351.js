n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(594190),
    i = n(569545),
    a = n(199902),
    s = n(314897),
    o = n(158776),
    l = n(19780),
    u = n(979651),
    c = n(709054),
    d = n(356659),
    f = n(981631),
    _ = n(388032);
function h(e) {
    let { sourceName: t, sourceApplicationId: n } = (function (e) {
            var t, n;
            if (null != e) {
                let { ownerId: t } = i.my(e);
                if (t !== s.default.getId()) {
                    let e = o.Z.getActivities(t).find((e) => e.type === f.IIU.PLAYING);
                    return {
                        sourceName: null == e ? void 0 : e.name,
                        sourceApplicationId: null == e ? void 0 : e.application_id
                    };
                }
            }
            let l = a.Z.getStreamerActiveStreamMetadata(),
                u = null == l ? void 0 : l.pid,
                c = null != l ? (null != u ? r.ZP.getGameForPID(u) : null) : r.ZP.getVisibleGame();
            return {
                sourceName: null !== (t = null == l ? void 0 : l.sourceName) && void 0 !== t ? t : null == c ? void 0 : c.name,
                sourceApplicationId: null !== (n = null == l ? void 0 : l.id) && void 0 !== n ? n : null == c ? void 0 : c.id
            };
        })(e),
        h = l.Z.getChannelId(),
        p = [s.default.getId()];
    return (
        null != h && (p = Object.keys(u.Z.getVoiceStatesForChannel(h))),
        {
            id: c.default.fromTimestamp(Date.now()),
            version: d.Bg,
            applicationName: null != t ? t : _.intl.string(_.t.qtSJxc),
            applicationId: n,
            users: p,
            clipMethod: 'manual',
            length: 0,
            thumbnail: ''
        }
    );
}
