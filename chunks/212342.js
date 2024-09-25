var r,
    i = n(47120);
var a = n(789020);
var o = n(442837),
    s = n(433517),
    l = n(570140),
    u = n(314897),
    c = n(592125),
    d = n(496675),
    _ = n(594174),
    E = n(630388),
    f = n(110630),
    h = n(981631);
function p(e, t, n) {
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
let m = 'ChannelFollowingBumpChannels',
    I = new Set(),
    T = new Set();
function g(e) {
    var t;
    let { channelId: n, message: r, optimistic: i } = e;
    if (i || I.has(n)) return !1;
    let a = c.Z.getChannel(n),
        o = _.default.getCurrentUser();
    if (!(null != a && a.type === h.d4z.GUILD_ANNOUNCEMENT && (0, f.Z)(r) && (null != o && (null === (t = r.author) || void 0 === t ? void 0 : t.id) === o.id ? d.Z.can(h.Plq.SEND_MESSAGES, a) : d.Z.can(h.Plq.MANAGE_MESSAGES, a)) && !E.yE(Number(r.flags), h.iLy.CROSSPOSTED))) return !1;
    T.add(r.id);
}
function S(e) {
    let { message: t } = e;
    T.has(t.id) && E.yE(Number(t.flags), h.iLy.CROSSPOSTED) && T.delete(t.id);
}
function A(e) {
    let { messageId: t } = e;
    T.delete(t);
}
function v(e) {
    let { channelId: t } = e;
    I.add(t), s.K.set(m, I), T.clear();
}
function N(e) {
    T.clear();
}
class O extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(u.default), (I = new Set(s.K.get(m)));
    }
    shouldShowBump(e) {
        return T.has(e);
    }
}
p(O, 'displayName', 'ChannelFollowingPublishBumpStore'),
    (t.Z = new O(l.Z, {
        MESSAGE_CREATE: g,
        MESSAGE_UPDATE: S,
        CHANNEL_SELECT: N,
        CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: A,
        CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: v
    }));
