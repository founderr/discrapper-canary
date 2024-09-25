var r = n(47120);
var i = n(147913),
    a = n(592125),
    o = n(699516),
    s = n(280006),
    l = n(189275);
function u(e, t, n) {
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
function c(e) {
    let { channelId: t } = e;
    if (null == t) return;
    let n = a.Z.getChannel(t);
    if (null != n && n.isGroupDM()) {
        let e = n.recipients.filter((e) => o.Z.isBlocked(e));
        e.length > 0 &&
            s.E.getCurrentConfig({ location: 'channel_select' }, { autoTrackExposure: !0 }).showAsModal &&
            !n.blockedUserWarningDismissed &&
            (0, l.O)({
                channelId: t,
                blockedUserIds: e
            });
    }
}
class d extends i.Z {
    constructor(...e) {
        super(...e), u(this, 'actions', { CHANNEL_SELECT: c });
    }
}
t.Z = new d();
