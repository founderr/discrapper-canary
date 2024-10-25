n(47120), n(789020);
var i,
    a,
    s,
    r,
    l = n(442837),
    o = n(433517),
    c = n(570140),
    u = n(314897),
    d = n(592125),
    _ = n(496675),
    E = n(594174),
    I = n(630388),
    m = n(110630),
    f = n(981631);
let T = 'ChannelFollowingBumpChannels',
    h = new Set(),
    N = new Set();
class p extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(u.default), (h = new Set(o.K.get(T)));
    }
    shouldShowBump(e) {
        return N.has(e);
    }
}
(r = 'ChannelFollowingPublishBumpStore'),
    (s = 'displayName') in (a = p)
        ? Object.defineProperty(a, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = r),
    (t.Z = new p(c.Z, {
        MESSAGE_CREATE: function (e) {
            var t;
            let { channelId: n, message: i, optimistic: a } = e;
            if (a || h.has(n)) return !1;
            let s = d.Z.getChannel(n),
                r = E.default.getCurrentUser();
            if (!(null != s && s.type === f.d4z.GUILD_ANNOUNCEMENT && (0, m.Z)(i) && (null != r && (null === (t = i.author) || void 0 === t ? void 0 : t.id) === r.id ? _.Z.can(f.Plq.SEND_MESSAGES, s) : _.Z.can(f.Plq.MANAGE_MESSAGES, s)) && !I.yE(Number(i.flags), f.iLy.CROSSPOSTED))) return !1;
            N.add(i.id);
        },
        MESSAGE_UPDATE: function (e) {
            let { message: t } = e;
            N.has(t.id) && I.yE(Number(t.flags), f.iLy.CROSSPOSTED) && N.delete(t.id);
        },
        CHANNEL_SELECT: function (e) {
            N.clear();
        },
        CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function (e) {
            let { messageId: t } = e;
            N.delete(t);
        },
        CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function (e) {
            let { channelId: t } = e;
            h.add(t), o.K.set(T, h), N.clear();
        }
    }));
