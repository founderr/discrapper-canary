n(47120);
var i,
    l,
    r,
    a,
    s = n(442837),
    o = n(570140),
    c = n(430198),
    u = n(314897),
    d = n(592125),
    h = n(709054),
    m = n(522579);
let p = new Set();
class f extends (i = s.ZP.Store) {
    shouldDisplayPrompt(e) {
        return p.has(e);
    }
}
(a = 'MediaPostSharePromptStore'),
    (r = 'displayName') in (l = f)
        ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = a),
    (t.Z = new f(o.Z, {
        CONNECTION_OPEN: function () {
            p = new Set();
        },
        MESSAGE_CREATE: function (e) {
            var t;
            if (e.isPushNotification) return;
            let n = e.message;
            if (u.default.getId() !== (null === (t = n.author) || void 0 === t ? void 0 : t.id) || !(0, m.z9)(n.id, n.channel_id)) return;
            let i = d.Z.getChannel(n.channel_id);
            if (null != i && null != i.parent_id) c.Z.isChannelGated(i.guild_id, i.parent_id) && p.add(h.default.castMessageIdAsChannelId(e.message.id));
        },
        DISMISS_MEDIA_POST_SHARE_PROMPT: function (e) {
            let { threadId: t } = e;
            p.delete(t);
        },
        LOGOUT: function (e) {
            p.clear();
        }
    }));
