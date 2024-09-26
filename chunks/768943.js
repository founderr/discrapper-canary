var r,
    i = n(47120);
var a = n(442837),
    o = n(759174),
    s = n(570140),
    l = n(786761),
    u = n(594174),
    c = n(686478);
function d(e, t, n) {
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
function _(e) {
    var t, n;
    let r = 10000000000000;
    return null !== (n = null === (t = e.dueAt) || void 0 === t ? void 0 : t.getTime()) && void 0 !== n ? n : r - e.savedAt.getTime();
}
let E = new o.h(
        (e) => {
            let { saveData: t } = e;
            return [c._l.ALL, null != t.dueAt ? c._l.REMINDER : c._l.BOOKMARK];
        },
        (e) => {
            let { saveData: t } = e;
            return _(t);
        }
    ),
    f = !0,
    h = 0,
    p = new Set(),
    m = new Map();
function I(e) {
    let t = m.get(e);
    return null != t && t.size > 0;
}
function T(e) {
    let { channelId: t, messageId: n } = e;
    return ''.concat(t, '-').concat(n);
}
function g(e) {
    var t;
    let n = T(e.saveData);
    null == E.get(n) && (h = Date.now()), E.set(n, e);
    let r = e.saveData.messageId,
        i = e.saveData.channelId,
        a = null !== (t = m.get(i)) && void 0 !== t ? t : new Set();
    a.add(r), m.set(i, a), null == e.message && p.add(r);
}
function S(e) {
    var t;
    let n = T(e),
        r = E.get(n);
    if (null == r) return !1;
    E.delete(n);
    let i = e.messageId;
    null === (t = m.get(r.saveData.channelId)) || void 0 === t || t.delete(i), p.delete(i), (h = Date.now());
}
function A() {
    f = !0;
}
function v() {
    (f = !0), E.clear(), m.clear(), p.clear();
}
function N(e) {
    let { savedMessages: t } = e;
    for (let e of ((f = !1), E.clear(), m.clear(), p.clear(), t)) g(e);
}
function O(e) {
    let { savedMessage: t } = e;
    g(t);
}
function R(e) {
    let { savedMessageData: t } = e;
    return S(t);
}
function C(e) {
    let { messageId: t, channelId: n } = e,
        r = T({
            messageId: t,
            channelId: n
        }),
        i = E.get(r);
    if ((null == i ? void 0 : i.message) == null) return !1;
    let a = { ...i };
    return (a.message = null), E.set(r, a), !0;
}
function y(e) {
    let { id: t, channelId: n } = e;
    return C({
        messageId: t,
        channelId: n
    });
}
function b(e) {
    let { ids: t, channelId: n } = e;
    for (let e of t)
        C({
            messageId: e,
            channelId: n
        });
}
function L(e) {
    let { message: t } = e;
    if (null == t.id || null == t.channel_id) return !1;
    let n = T({
            messageId: t.id,
            channelId: t.channel_id
        }),
        r = E.get(n);
    if ((null == r ? void 0 : r.message) == null) return !1;
    let i = { ...r };
    (i.message = (0, l.wi)(r.message, t)), E.set(n, i);
}
function D() {
    if (0 === p.size || f) return !1;
    f = !0;
}
function M(e) {
    let { channel: t } = e;
    if (0 === p.size || f || !I(t.id)) return !1;
    f = !0;
}
function P(e) {
    let { channels: t } = e;
    if (0 === p.size || f) return !1;
    let n = !1;
    for (let e of t) {
        if (!!I(e.id)) (f = !0), (n = !0);
    }
    return n;
}
function U(e) {
    let { channel: t } = e;
    if (0 === p.size || f || !I(t.id)) return !1;
    f = !0;
}
function w(e) {
    var t;
    let { user: n } = e;
    if (0 === p.size || f || n.id !== (null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
    f = !0;
}
class x extends (r = a.ZP.Store) {
    initialize() {}
    getSavedMessages() {
        return E.values(c._l.ALL);
    }
    getSavedMessage(e, t) {
        return E.get(
            T({
                channelId: e,
                messageId: t
            })
        );
    }
    getMessageBookmarks() {
        return E.values(c._l.BOOKMARK);
    }
    getMessageReminders() {
        return E.values(c._l.REMINDER);
    }
    getOverdueMessageReminderCount() {
        return this.getMessageReminders().filter((e) => {
            let { saveData: t } = e;
            return null == t.dueAt || new Date() > t.dueAt;
        }).length;
    }
    getSavedMessageCount() {
        return E.size();
    }
    getIsStale() {
        return f;
    }
    getLastChanged() {
        return h;
    }
    isMessageBookmarked(e, t) {
        let n = E.get(
            T({
                channelId: e,
                messageId: t
            })
        );
        return null != n && null == n.saveData.dueAt;
    }
    isMessageReminder(e, t) {
        let n = E.get(
            T({
                channelId: e,
                messageId: t
            })
        );
        return null != n && null != n.saveData.dueAt;
    }
    hasOverdueReminder(e) {
        return this.getMessageReminders().some((t) => {
            let { saveData: n } = t;
            return null == n.dueAt || e > n.dueAt;
        });
    }
}
d(x, 'displayName', 'SavedMessagesStore'),
    (t.Z = new x(s.Z, {
        POST_CONNECTION_OPEN: A,
        LOGOUT: v,
        SAVED_MESSAGES_UPDATE: N,
        SAVED_MESSAGE_CREATE: O,
        SAVED_MESSAGE_DELETE: R,
        MESSAGE_DELETE: y,
        MESSAGE_DELETE_BULK: b,
        MESSAGE_UPDATE: L,
        GUILD_CREATE: D,
        GUILD_UPDATE: D,
        GUILD_DELETE: D,
        CHANNEL_CREATE: M,
        CHANNEL_UPDATES: P,
        CHANNEL_DELETE: U,
        GUILD_MEMBER_UPDATE: w,
        GUILD_ROLE_CREATE: D,
        GUILD_ROLE_UPDATE: D,
        GUILD_ROLE_DELETE: D
    }));
