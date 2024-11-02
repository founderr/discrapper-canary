n(47120);
var i,
    l,
    r,
    a,
    s = n(442837),
    o = n(570140),
    c = n(786761),
    u = n(594174),
    d = n(355298),
    h = n(333984);
let m = {},
    p = new Set();
function f(e) {
    return d.Z.isMessageRequest(e) || h.Z.isSpam(e);
}
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!f(e) || (null != t && e !== (null == t ? void 0 : t.channel_id))) return;
    let i = null == t ? null : (0, c.e5)(t);
    m[e] = {
        loaded: !0,
        error: n,
        message: i
    };
}
class C extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, h.Z, u.default);
    }
    shouldLoadMessageRequestPreview(e) {
        return !p.has(e);
    }
    getMessageRequestPreview(e) {
        return (
            !(e in m) &&
                (m[e] = {
                    loaded: !1,
                    error: !1,
                    message: null
                }),
            m[e]
        );
    }
}
(a = 'MessageRequestPreviewStore'),
    (r = 'displayName') in (l = C)
        ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = a),
    (t.Z = new C(o.Z, {
        CONNECTION_OPEN: function () {
            (m = {}), p.clear();
        },
        CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            f(t.id) && p.add(t.id);
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            for (let e of t) !f(e.id) && (p.delete(e.id), delete m[e.id]);
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            p.delete(t.id), delete m[t.id];
        },
        MESSAGE_CREATE: function (e) {
            if (e.isPushNotification) return !1;
            g(e.message.channel_id, e.message);
        },
        MESSAGE_UPDATE: function (e) {
            let t = e.message.channel_id;
            if (null == t) return !1;
            let n = m[t];
            if (null == n || null == n.message) return !1;
            m[t] = {
                ...n,
                message: (0, c.wi)(n.message, e.message)
            };
        },
        MESSAGE_DELETE: function (e) {
            if (!f(e.channelId)) return !1;
            m[e.channelId] = {
                loaded: !0,
                error: !1,
                message: null
            };
        },
        LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function (e) {
            let { requestedChannelIds: t, supplementalData: n } = e,
                i = new Set([...t]);
            for (let e of (n.forEach((e) => {
                g(e.channel_id, e.message_preview), i.delete(e.channel_id);
            }),
            Array.from(i)))
                g(e, null);
        },
        LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR: function (e) {
            let { requestedChannelIds: t } = e;
            t.forEach((e) => {
                g(e, null, !0);
            });
        }
    }));
