n(47120);
var i,
    l,
    a,
    r,
    s = n(442837),
    o = n(570140),
    c = n(430198),
    d = n(314897),
    u = n(592125),
    h = n(709054),
    p = n(522579);
let m = new Set();
class f extends (i = s.ZP.Store) {
    shouldDisplayPrompt(e) {
        return m.has(e);
    }
}
(r = 'MediaPostSharePromptStore'),
    (a = 'displayName') in (l = f)
        ? Object.defineProperty(l, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[a] = r),
    (t.Z = new f(o.Z, {
        CONNECTION_OPEN: function () {
            m = new Set();
        },
        MESSAGE_CREATE: function (e) {
            var t;
            if (e.isPushNotification) return;
            let n = e.message;
            if (d.default.getId() !== (null === (t = n.author) || void 0 === t ? void 0 : t.id) || !(0, p.z9)(n.id, n.channel_id)) return;
            let i = u.Z.getChannel(n.channel_id);
            if (null != i && null != i.parent_id) c.Z.isChannelGated(i.guild_id, i.parent_id) && m.add(h.default.castMessageIdAsChannelId(e.message.id));
        },
        DISMISS_MEDIA_POST_SHARE_PROMPT: function (e) {
            let { threadId: t } = e;
            m.delete(t);
        },
        LOGOUT: function (e) {
            m.clear();
        }
    }));
