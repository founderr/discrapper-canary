var r = n(47120);
var i = n(147913),
    a = n(592125),
    o = n(944486),
    s = n(116347),
    l = n(237292),
    u = n(118910);
function c(e, t, n) {
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
function d(e) {
    let { channelId: t } = e;
    if (null == t || !(0, l.mG)({ location: 'channel_select' }) || !(0, s.dg)()) return !1;
    let n = a.Z.getChannel(t);
    if (null == n || !n.isDM()) return !1;
    let r = (0, s.uu)(t);
    return (
        null != r &&
        ((0, u.a)({
            warningId: r.id,
            warningType: r.type,
            senderId: n.getRecipientId(),
            channelId: t
        }),
        !0)
    );
}
function _(e) {
    let { channels: t } = e;
    if (!(0, l.mG)({ location: 'channel_updates' }) || !(0, s.dg)()) return !1;
    let n = o.Z.getCurrentlySelectedChannelId();
    if (null == n) return !1;
    let r = t.find((e) => e.id === n);
    if (null == r) return !1;
    let i = (0, s.uu)(r.id);
    return (
        !!(null != i && r.isDM()) &&
        ((0, u.a)({
            warningId: i.id,
            warningType: i.type,
            senderId: r.getRecipientId(),
            channelId: r.id
        }),
        !0)
    );
}
class E extends i.Z {
    constructor(...e) {
        super(...e),
            c(this, 'actions', {
                CHANNEL_SELECT: d,
                CHANNEL_UPDATES: _
            });
    }
}
t.Z = new E();
