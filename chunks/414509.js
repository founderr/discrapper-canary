var r = n(47120);
var i = n(147913),
    a = n(592125),
    o = n(699516),
    s = n(944486),
    l = n(979651),
    u = n(70956),
    c = n(280006),
    d = n(33194),
    _ = n(807031),
    E = n(189275),
    f = n(451092);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let p = 1 * u.Z.Millis.HOUR;
function m(e) {
    let { channelId: t } = e;
    if (null == t) return;
    let n = a.Z.getChannel(t);
    if (null != n && n.isGroupDM()) {
        let e = n.recipients.filter((e) => o.Z.isBlocked(e));
        e.length > 0 &&
            c.E.getCurrentConfig({ location: 'channel_select' }, { autoTrackExposure: !0 }).showAsModal &&
            !n.blockedUserWarningDismissed &&
            (0, E.O)({
                channelId: t,
                blockedUserIds: e
            });
    }
}
function I(e) {
    let { voiceStates: t } = e,
        n = s.Z.getVoiceChannelId();
    if (!l.Z.isInChannel(n) || null == n || (0, d.Iu)(n) > Date.now() - p) return;
    let r = o.Z.getBlockedIDs(),
        i = t.find((e) => r.includes(e.userId) && e.channelId === n);
    null != i && (0, _.F)({ location: 'warning_manager' }) && ((0, f.H)(n, i.userId), _.r.trackExposure({ location: 'warning_manager' }));
}
class T extends i.Z {
    constructor(...e) {
        super(...e),
            h(this, 'actions', {
                CHANNEL_SELECT: m,
                VOICE_STATE_UPDATES: I
            });
    }
}
t.Z = new T();
