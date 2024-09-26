let r, i;
var a,
    o = n(47120);
var s = n(442837),
    l = n(570140),
    u = n(904245),
    c = n(911969),
    d = n(314897),
    _ = n(592125),
    E = n(70956),
    f = n(622449);
function h(e, t, n) {
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
let p = 5 * E.Z.Millis.MINUTE,
    m = 10 * E.Z.Millis.SECOND,
    I = {},
    T = {},
    g = {};
let S = {};
function A() {
    (I = {}),
        (T = {}),
        (g = {}),
        (S = {}),
        setInterval(() => {
            let e = Date.now();
            for (let [t, n] of Object.entries(S)) e - n.insertedAt > m && delete S[t];
        }, p);
}
function v(e) {
    let { nonce: t, messageId: n, data: r, onCreate: i, onCancel: a, onSuccess: o, onFailure: s } = e;
    null != n && ((T[n] = t), (g[t] = n)),
        (I[t] = {
            state: f.F.QUEUED,
            data: r,
            onCreate: i,
            onCancel: a,
            onSuccess: o,
            onFailure: s
        });
}
function N(e) {
    var t;
    let { nonce: n, interactionId: r } = e;
    if (null == n) return !1;
    let i = I[n];
    if (null == i || i.state !== f.F.QUEUED) return !1;
    (i.state = f.F.CREATED), null === (t = i.onCreate) || void 0 === t || t.call(i, r);
}
function O(e) {
    let { nonce: t } = e;
    U(t);
}
function R(e) {
    let { message: t } = e;
    if (null == t.nonce) return !1;
    {
        var n;
        let e = I[t.nonce];
        if (null == e) return !1;
        null === (n = e.onSuccess) || void 0 === n || n.call(e), w(t.nonce);
    }
}
function C(e) {
    var t;
    let { nonce: n, errorCode: r, errorMessage: i, status: a, reasonCode: o } = e;
    if (null == n) return !1;
    let s = I[n];
    if (null == s) return !1;
    null === (t = s.onFailure) || void 0 === t || t.call(s, r, i, a, o),
        s.data.interactionType === c.B8.APPLICATION_COMMAND
            ? w(n)
            : (I[n] = {
                  ...s,
                  state: f.F.FAILED,
                  errorCode: r,
                  errorMessage: i
              });
}
function y(e) {
    let { channelId: t } = e;
    if (null == _.Z.getChannel(t)) return !1;
    for (let [e, t] of Object.entries(I)) t.state === f.F.FAILED && w(e);
}
function L(e) {
    let { nonce: t } = e;
    U(t);
}
function b(e) {
    let { application: t, nonce: n } = e;
    (i = t.id), U(n);
}
function D() {
    (r = void 0), (i = void 0);
}
function M(e) {
    let { modalKey: t } = e;
    r = t;
}
function P(e) {
    let t,
        n,
        { participants: r } = e,
        i = d.default.getSessionId(),
        a = d.default.getId(),
        o = r.find((e) => e.user_id === a && e.session_id === i);
    if (null == o || null == o.nonce) return;
    let s = S[o.nonce];
    if ((null == s ? ((t = g[o.nonce]), (n = I[o.nonce])) : ((t = s.messageId), (n = s.interaction)), null != n && null != t)) w(o.nonce), null != t && 'channelId' in n.data && u.Z.deleteMessage(n.data.channelId, t, !0);
}
function U(e) {
    var t;
    if (null == e) return !1;
    let n = I[e];
    if (null == n) return !1;
    null === (t = n.onSuccess) || void 0 === t || t.call(n), w(e);
}
function w(e) {
    if (null != S[e]) {
        delete S[e];
        return;
    }
    let t = I[e];
    delete I[e];
    let n = g[e];
    null != n && delete T[n],
        delete g[e],
        (S[e] = {
            insertedAt: Date.now(),
            nonce: e,
            messageId: n,
            interaction: t
        });
}
class x extends (a = s.ZP.Store) {
    getInteraction(e) {
        let t = T[e.id];
        return null != t ? I[t] : null;
    }
    getMessageInteractionStates() {
        let e = {};
        for (let [t, n] of Object.entries(I)) {
            let r = g[t];
            null != r && (e[r] = n.state);
        }
        return e;
    }
    canQueueInteraction(e, t) {
        let n = T[e];
        return (null == n || null == I[n] || I[n].state === f.F.FAILED) && (null == I[t] || I[t].state === f.F.FAILED) && !0;
    }
    getIFrameModalApplicationId() {
        return i;
    }
    getIFrameModalKey() {
        return r;
    }
}
h(x, 'displayName', 'InteractionStore'),
    (t.ZP = new x(l.Z, {
        LOGOUT: A,
        INTERACTION_QUEUE: v,
        INTERACTION_CREATE: N,
        INTERACTION_SUCCESS: O,
        INTERACTION_FAILURE: C,
        MESSAGE_CREATE: R,
        CHANNEL_SELECT: y,
        INTERACTION_IFRAME_MODAL_CREATE: b,
        INTERACTION_IFRAME_MODAL_CLOSE: D,
        INTERACTION_IFRAME_MODAL_KEY_CREATE: M,
        INTERACTION_MODAL_CREATE: L,
        EMBEDDED_ACTIVITY_UPDATE_V2: P
    }));
