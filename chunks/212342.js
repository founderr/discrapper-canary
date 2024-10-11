n(47120), n(789020);
var i,
    a,
    s,
    l,
    r = n(442837),
    o = n(433517),
    c = n(570140),
    d = n(314897),
    u = n(592125),
    _ = n(496675),
    E = n(594174),
    I = n(630388),
    m = n(110630),
    T = n(981631);
let N = 'ChannelFollowingBumpChannels',
    h = new Set(),
    C = new Set();
class p extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(d.default), (h = new Set(o.K.get(N)));
    }
    shouldShowBump(e) {
        return C.has(e);
    }
}
(l = 'ChannelFollowingPublishBumpStore'),
    (s = 'displayName') in (a = p)
        ? Object.defineProperty(a, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = l),
    (t.Z = new p(c.Z, {
        MESSAGE_CREATE: function (e) {
            var t;
            let { channelId: n, message: i, optimistic: a } = e;
            if (a || h.has(n)) return !1;
            let s = u.Z.getChannel(n),
                l = E.default.getCurrentUser();
            if (!(null != s && s.type === T.d4z.GUILD_ANNOUNCEMENT && (0, m.Z)(i) && (null != l && (null === (t = i.author) || void 0 === t ? void 0 : t.id) === l.id ? _.Z.can(T.Plq.SEND_MESSAGES, s) : _.Z.can(T.Plq.MANAGE_MESSAGES, s)) && !I.yE(Number(i.flags), T.iLy.CROSSPOSTED))) return !1;
            C.add(i.id);
        },
        MESSAGE_UPDATE: function (e) {
            let { message: t } = e;
            C.has(t.id) && I.yE(Number(t.flags), T.iLy.CROSSPOSTED) && C.delete(t.id);
        },
        CHANNEL_SELECT: function (e) {
            C.clear();
        },
        CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function (e) {
            let { messageId: t } = e;
            C.delete(t);
        },
        CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function (e) {
            let { channelId: t } = e;
            h.add(t), o.K.set(N, h), C.clear();
        }
    }));
