var r,
    i = n(442837),
    a = n(570140),
    o = n(375954);
function s(e, t, n) {
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
let l = {},
    u = {},
    c = {};
function d(e) {
    let { channel: t, message: n, shouldMention: r = !0, showMentionToggle: i = !0, source: a } = e;
    (l[t.id] = {
        channel: t,
        message: n,
        shouldMention: r,
        showMentionToggle: i
    }),
        (c[t.id] = a);
}
function _(e) {
    let { channel: t, messageId: n, shouldMention: r = !0, showMentionToggle: i = !0 } = e;
    u[t.id] = {
        channel: t,
        messageId: n,
        shouldMention: r,
        showMentionToggle: i
    };
}
function E(e) {
    let { channelId: t, shouldMention: n } = e;
    t in l &&
        (l[t] = {
            ...l[t],
            shouldMention: n
        }),
        t in u &&
            (u[t] = {
                ...u[t],
                shouldMention: n
            });
}
function f(e) {
    let { channelId: t } = e;
    delete l[t], delete u[t];
}
function h(e) {
    var t, n, r;
    let { id: i, channelId: a } = e;
    if ((null === (n = l[a]) || void 0 === n ? void 0 : null === (t = n.message) || void 0 === t ? void 0 : t.id) === i) delete l[a], delete c[a];
    else {
        if ((null === (r = u[a]) || void 0 === r ? void 0 : r.messageId) !== i) return !1;
        delete u[a], delete c[a];
    }
}
function p(e) {
    if (null == e) return !1;
    let t = u[e];
    if (null == t) return !1;
    let n = o.Z.getMessage(e, t.messageId);
    if (null == n) return !1;
    (l[e] = {
        channel: t.channel,
        message: n,
        shouldMention: t.shouldMention,
        showMentionToggle: t.showMentionToggle
    }),
        delete u[e];
}
function m(e) {
    let { channelId: t } = e;
    p(t);
}
function I(e) {
    let { channelId: t } = e;
    p(t);
}
function T() {
    (l = {}), (u = {}), (c = {});
}
class g extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(o.Z);
    }
    getPendingReply(e) {
        return l[e];
    }
    getPendingReplyActionSource(e) {
        return c[e];
    }
}
s(g, 'displayName', 'PendingReplyStore'),
    (t.Z = new g(a.Z, {
        CREATE_PENDING_REPLY: d,
        CREATE_SHALLOW_PENDING_REPLY: _,
        SET_PENDING_REPLY_SHOULD_MENTION: E,
        DELETE_PENDING_REPLY: f,
        CONNECTION_OPEN: T,
        LOGOUT: T,
        MESSAGE_DELETE: h,
        CHANNEL_SELECT: m,
        LOAD_MESSAGES_SUCCESS: I
    }));
