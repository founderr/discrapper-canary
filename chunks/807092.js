var i,
    a = r(442837),
    s = r(570140),
    o = r(375954);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = {},
    c = {},
    d = {};
function f(e) {
    let { channel: n, message: r, shouldMention: i = !0, showMentionToggle: a = !0, source: s } = e;
    (u[n.id] = {
        channel: n,
        message: r,
        shouldMention: i,
        showMentionToggle: a
    }),
        (d[n.id] = s);
}
function _(e) {
    let { channel: n, messageId: r, shouldMention: i = !0, showMentionToggle: a = !0 } = e;
    c[n.id] = {
        channel: n,
        messageId: r,
        shouldMention: i,
        showMentionToggle: a
    };
}
function h(e) {
    let { channelId: n, shouldMention: r } = e;
    n in u &&
        (u[n] = {
            ...u[n],
            shouldMention: r
        }),
        n in c &&
            (c[n] = {
                ...c[n],
                shouldMention: r
            });
}
function p(e) {
    let { channelId: n } = e;
    delete u[n], delete c[n];
}
function m(e) {
    var n, r, i;
    let { id: a, channelId: s } = e;
    if ((null === (r = u[s]) || void 0 === r ? void 0 : null === (n = r.message) || void 0 === n ? void 0 : n.id) === a) delete u[s], delete d[s];
    else {
        if ((null === (i = c[s]) || void 0 === i ? void 0 : i.messageId) !== a) return !1;
        delete c[s], delete d[s];
    }
}
function g(e) {
    if (null == e) return !1;
    let n = c[e];
    if (null == n) return !1;
    let r = o.Z.getMessage(e, n.messageId);
    if (null == r) return !1;
    (u[e] = {
        channel: n.channel,
        message: r,
        shouldMention: n.shouldMention,
        showMentionToggle: n.showMentionToggle
    }),
        delete c[e];
}
function E(e) {
    let { channelId: n } = e;
    g(n);
}
function v(e) {
    let { channelId: n } = e;
    g(n);
}
function I() {
    (u = {}), (c = {}), (d = {});
}
class T extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(o.Z);
    }
    getPendingReply(e) {
        return u[e];
    }
    getPendingReplyActionSource(e) {
        return d[e];
    }
}
l(T, 'displayName', 'PendingReplyStore'),
    (n.Z = new T(s.Z, {
        CREATE_PENDING_REPLY: f,
        CREATE_SHALLOW_PENDING_REPLY: _,
        SET_PENDING_REPLY_SHOULD_MENTION: h,
        DELETE_PENDING_REPLY: p,
        CONNECTION_OPEN: I,
        LOGOUT: I,
        MESSAGE_DELETE: m,
        CHANNEL_SELECT: E,
        LOAD_MESSAGES_SUCCESS: v
    }));
