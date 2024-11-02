n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(194082),
    a = n(739566),
    o = n(834129),
    s = n(388032);
function c(e) {
    var t;
    let { message: n, channel: c, playingActivity: u, onJoinStream: d, usernameHook: m, compact: f } = e,
        h = (0, a.ZP)(n),
        p = null === (t = n.call) || void 0 === t ? void 0 : t.duration,
        g = m(h),
        _ = s.intl.format(s.t.FKXvaG, {
            username: h.nick,
            activityName: null != u ? u.name : 'unknown',
            onJoinStream: d,
            usernameHook: g
        });
    return (
        null != p &&
            (_ = s.intl.format(s.t.NEFxtb, {
                username: h.nick,
                duration: p.humanize(),
                channelName: c.name,
                usernameHook: g
            })),
        (0, i.jsx)(o.Z, {
            iconNode:
                null != p
                    ? (0, i.jsx)(r.ScreenXIcon, {
                          size: 'custom',
                          color: 'currentColor',
                          width: 20,
                          height: 20
                      })
                    : (0, i.jsx)(l.ZP, { size: l.ZP.Sizes.SMALL }),
            timestamp: n.timestamp,
            compact: f,
            children: _
        })
    );
}
