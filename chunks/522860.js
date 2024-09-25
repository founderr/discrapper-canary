n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(194082),
    o = n(739566),
    s = n(834129),
    l = n(689938);
let u = 20;
function c(e) {
    var t;
    let { message: n, channel: c, playingActivity: d, onJoinStream: _, usernameHook: E, compact: f } = e,
        h = (0, o.ZP)(n),
        p = null === (t = n.call) || void 0 === t ? void 0 : t.duration,
        m = E(h),
        I = l.Z.Messages.SYSTEM_MESSAGE_GUILD_STREAM_ACTIVE.format({
            username: h.nick,
            activityName: null != d ? d.name : 'unknown',
            onJoinStream: _,
            usernameHook: m
        });
    return (
        null != p &&
            (I = l.Z.Messages.SYSTEM_MESSAGE_GUILD_STREAM_ENDED.format({
                username: h.nick,
                duration: p.humanize(),
                channelName: c.name,
                usernameHook: m
            })),
        (0, r.jsx)(s.Z, {
            iconNode:
                null != p
                    ? (0, r.jsx)(i.ScreenXIcon, {
                          size: 'custom',
                          color: 'currentColor',
                          width: u,
                          height: u
                      })
                    : (0, r.jsx)(a.ZP, { size: a.ZP.Sizes.SMALL }),
            timestamp: n.timestamp,
            compact: f,
            children: I
        })
    );
}
