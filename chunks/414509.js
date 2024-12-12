r.d(n, {
    B: function () {
        return I;
    }
});
var i = r(47120);
var a = r(147913),
    s = r(592125),
    o = r(19780),
    l = r(699516),
    u = r(70956),
    c = r(280006),
    d = r(33194);
r(452369);
var f = r(807031),
    _ = r(189275),
    h = r(451092);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
r(334431);
let m = 1 * u.Z.Millis.HOUR,
    g = 3 * u.Z.Millis.DAY;
function E(e) {
    let { channelId: n } = e;
    if (null == n) return;
    let r = s.Z.getChannel(n);
    if (null != r && r.isGroupDM()) {
        let e = r.recipients.filter((e) => l.Z.isBlocked(e)),
            i = r.recipients.filter((e) => l.Z.isIgnored(e));
        (e.length > 0 || i.length > 0) &&
            c.E.getCurrentConfig({ location: 'channel_select' }, { autoTrackExposure: !0 }).showAsModal &&
            !r.blockedUserWarningDismissed &&
            !T(n) &&
            (0, _.O)({
                channelId: n,
                blockedUserIds: e,
                ignoredUserIds: i
            });
    }
}
function v(e) {
    let { state: n } = e;
}
function I(e) {
    return (0, d.Iu)(e) > Date.now() - m;
}
function T(e) {
    return (0, d.Iu)(e) > Date.now() - g;
}
class b extends a.Z {
    handleBlockedOrIgnoredUserVoiceChannelJoin(e, n) {
        let r = o.Z.getChannelId();
        if (e === r && null != s.Z.getChannel(e)) (0, f.wC)({ location: 'warning_manager' }) && !I(e) && (0, h.H)(r, n);
    }
    constructor(...e) {
        super(...e),
            p(this, 'actions', {
                CHANNEL_SELECT: E,
                APP_STATE_UPDATE: v
            });
    }
}
n.Z = new b();
