var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(786761),
    c = n(592125),
    d = n(594174),
    f = n(823379),
    _ = n(709054);
let p = {};
function h(e) {
    var t;
    let n = c.Z.getChannel(null == e ? void 0 : e.channel_id);
    if (null == n || !n.isForumPost()) return !1;
    let r = p[n.id];
    return _.default.compare(null == e ? void 0 : e.id, null == r ? void 0 : null === (t = r.message) || void 0 === t ? void 0 : t.id) > -1;
}
function m(e, t) {
    let n = null == t ? null : (0, u.e5)(t);
    return (
        (p[e] = {
            loaded: !0,
            message: n
        }),
        !0
    );
}
function g(e) {
    return p[e];
}
function E(e) {
    var t;
    return null === (t = p[e]) || void 0 === t ? void 0 : t.message;
}
function v(e) {
    let { threads: t, mostRecentMessages: n } = e;
    t.forEach((e) => m(e.id, null)),
        null == n ||
            n.filter(f.lm).forEach((e) => {
                m(e.channel_id, e);
            });
}
class b extends (s = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, d.default);
    }
    getMessageState(e) {
        return (
            !(e in p) &&
                (p[e] = {
                    loaded: !1,
                    message: null
                }),
            p[e]
        );
    }
}
(a = 'ForumPostRecentMessageStore'),
    (i = 'displayName') in (r = b)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    new b(l.Z, {
        CONNECTION_OPEN: function () {
            p = {};
        },
        MESSAGE_CREATE: function (e) {
            if (e.isPushNotification || !h(e.message)) return !1;
            e.message.channel_id === _.default.castMessageIdAsChannelId(e.message.id) ? m(e.message.channel_id, null) : m(e.message.channel_id, e.message);
        },
        MESSAGE_UPDATE: function (e) {
            if (!h(e.message) || e.message.channel_id === e.message.id) return !1;
            !(function (e, t) {
                let n = (function (e) {
                        return p[e];
                    })(e),
                    r = E(e);
                null != n &&
                    null != r &&
                    (p[e] = {
                        ...n,
                        message: (0, u.wi)(r, t)
                    });
            })(e.message.channel_id, e.message);
        },
        MESSAGE_DELETE: function (e) {
            return (function (e, t) {
                let n = E(e);
                return (null == n ? void 0 : n.id) === t && (delete p[e], !0);
            })(e.channelId, e.id);
        },
        LOAD_FORUM_POSTS: function (e) {
            let { threads: t } = e;
            for (let e in t) m(e, t[e].most_recent_message);
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: v,
        LOAD_THREADS_SUCCESS: v
    });
