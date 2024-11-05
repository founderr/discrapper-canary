n(47120), n(789020);
var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(433517),
    c = n(570140),
    d = n(314897),
    u = n(592125),
    m = n(496675),
    h = n(594174),
    f = n(630388),
    p = n(110630),
    g = n(981631);
let _ = 'ChannelFollowingBumpChannels',
    C = new Set(),
    E = new Set();
class I extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(d.default), (C = new Set(s.K.get(_)));
    }
    shouldShowBump(e) {
        return E.has(e);
    }
}
(a = 'ChannelFollowingPublishBumpStore'),
    (l = 'displayName') in (r = I)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    (t.Z = new I(c.Z, {
        MESSAGE_CREATE: function (e) {
            var t;
            let { channelId: n, message: i, optimistic: r } = e;
            if (r || C.has(n)) return !1;
            let l = u.Z.getChannel(n),
                a = h.default.getCurrentUser();
            if (!(null != l && l.type === g.d4z.GUILD_ANNOUNCEMENT && (0, p.Z)(i) && (null != a && (null === (t = i.author) || void 0 === t ? void 0 : t.id) === a.id ? m.Z.can(g.Plq.SEND_MESSAGES, l) : m.Z.can(g.Plq.MANAGE_MESSAGES, l)) && !f.yE(Number(i.flags), g.iLy.CROSSPOSTED))) return !1;
            E.add(i.id);
        },
        MESSAGE_UPDATE: function (e) {
            let { message: t } = e;
            E.has(t.id) && f.yE(Number(t.flags), g.iLy.CROSSPOSTED) && E.delete(t.id);
        },
        CHANNEL_SELECT: function (e) {
            E.clear();
        },
        CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function (e) {
            let { messageId: t } = e;
            E.delete(t);
        },
        CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function (e) {
            let { channelId: t } = e;
            C.add(t), s.K.set(_, C), E.clear();
        }
    }));
