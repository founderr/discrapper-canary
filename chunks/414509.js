n.d(t, {
    M: function () {
        return p;
    }
}),
    n(47120);
var r = n(147913),
    i = n(592125),
    a = n(699516),
    s = n(944486),
    o = n(979651),
    l = n(70956),
    u = n(280006),
    c = n(33194),
    d = n(807031),
    _ = n(189275),
    E = n(451092);
let f = 1 * l.Z.Millis.HOUR;
function h(e) {
    let { channelId: t } = e;
    if (null == t) return;
    let n = i.Z.getChannel(t);
    if (null != n && n.isGroupDM()) {
        let e = n.recipients.filter((e) => a.Z.isBlocked(e));
        e.length > 0 &&
            u.E.getCurrentConfig({ location: 'channel_select' }, { autoTrackExposure: !0 }).showAsModal &&
            !n.blockedUserWarningDismissed &&
            (0, _.O)({
                channelId: t,
                blockedUserIds: e
            });
    }
}
function p(e) {
    return (0, c.Iu)(e) > Date.now() - f;
}
class I extends r.Z {
    handleBlockedUserVoiceChannelJoin(e, t) {
        let n = s.Z.getVoiceChannelId();
        if (!(e !== n || !o.Z.isInChannel(n) || p(n))) (0, d.wC)({ location: 'warning_manager' }) && (0, E.H)(n, t);
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = { CHANNEL_SELECT: h }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.Z = new I();
