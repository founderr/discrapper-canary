let i, a;
var s,
    o = r(47120);
var l = r(442837),
    u = r(570140),
    c = r(904245),
    d = r(911969),
    f = r(314897),
    _ = r(592125),
    h = r(70956),
    p = r(622449);
function m(e, n, r) {
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
let g = 5 * h.Z.Millis.MINUTE,
    E = 10 * h.Z.Millis.SECOND,
    v = {},
    I = {},
    T = {};
let b = {};
function y() {
    (v = {}),
        (I = {}),
        (T = {}),
        (b = {}),
        setInterval(() => {
            let e = Date.now();
            for (let [n, r] of Object.entries(b)) e - r.insertedAt > E && delete b[n];
        }, g);
}
function S(e) {
    let { nonce: n, messageId: r, data: i, onCreate: a, onCancel: s, onSuccess: o, onFailure: l } = e;
    null != r && ((I[r] = n), (T[n] = r)),
        (v[n] = {
            state: p.F.QUEUED,
            data: i,
            onCreate: a,
            onCancel: s,
            onSuccess: o,
            onFailure: l
        });
}
function A(e) {
    var n;
    let { nonce: r, interactionId: i } = e;
    if (null == r) return !1;
    let a = v[r];
    if (null == a || a.state !== p.F.QUEUED) return !1;
    (a.state = p.F.CREATED), null === (n = a.onCreate) || void 0 === n || n.call(a, i);
}
function N(e) {
    let { nonce: n } = e;
    M(n);
}
function C(e) {
    let { message: n } = e;
    if (null == n.nonce) return !1;
    {
        var r;
        let e = v[n.nonce];
        if (null == e) return !1;
        null === (r = e.onSuccess) || void 0 === r || r.call(e), k(n.nonce);
    }
}
function R(e) {
    var n;
    let { nonce: r, errorCode: i, errorMessage: a, status: s, reasonCode: o } = e;
    if (null == r) return !1;
    let l = v[r];
    if (null == l) return !1;
    null === (n = l.onFailure) || void 0 === n || n.call(l, i, a, s, o),
        l.data.interactionType === d.B8.APPLICATION_COMMAND
            ? k(r)
            : (v[r] = {
                  ...l,
                  state: p.F.FAILED,
                  errorCode: i,
                  errorMessage: a
              });
}
function O(e) {
    let { channelId: n } = e;
    if (null == _.Z.getChannel(n)) return !1;
    for (let [e, n] of Object.entries(v)) n.state === p.F.FAILED && k(e);
}
function D(e) {
    let { nonce: n } = e;
    M(n);
}
function L(e) {
    let { application: n, nonce: r } = e;
    (a = n.id), M(r);
}
function x() {
    (i = void 0), (a = void 0);
}
function w(e) {
    let { modalKey: n } = e;
    i = n;
}
function P(e) {
    let n,
        r,
        { participants: i } = e,
        a = f.default.getSessionId(),
        s = f.default.getId(),
        o = i.find((e) => e.user_id === s && e.session_id === a);
    if (null == o || null == o.nonce) return;
    let l = b[o.nonce];
    if ((null == l ? ((n = T[o.nonce]), (r = v[o.nonce])) : ((n = l.messageId), (r = l.interaction)), null != r && null != n)) k(o.nonce), null != n && 'channelId' in r.data && c.Z.deleteMessage(r.data.channelId, n, !0);
}
function M(e) {
    var n;
    if (null == e) return !1;
    let r = v[e];
    if (null == r) return !1;
    null === (n = r.onSuccess) || void 0 === n || n.call(r), k(e);
}
function k(e) {
    if (null != b[e]) {
        delete b[e];
        return;
    }
    let n = v[e];
    delete v[e];
    let r = T[e];
    null != r && delete I[r],
        delete T[e],
        (b[e] = {
            insertedAt: Date.now(),
            nonce: e,
            messageId: r,
            interaction: n
        });
}
class U extends (s = l.ZP.Store) {
    getInteraction(e) {
        let n = I[e.id];
        return null != n ? v[n] : null;
    }
    getMessageInteractionStates() {
        let e = {};
        for (let [n, r] of Object.entries(v)) {
            let i = T[n];
            null != i && (e[i] = r.state);
        }
        return e;
    }
    canQueueInteraction(e, n) {
        let r = I[e];
        return (null == r || null == v[r] || v[r].state === p.F.FAILED) && (null == v[n] || v[n].state === p.F.FAILED) && !0;
    }
    getIFrameModalApplicationId() {
        return a;
    }
    getIFrameModalKey() {
        return i;
    }
}
m(U, 'displayName', 'InteractionStore'),
    (n.ZP = new U(u.Z, {
        LOGOUT: y,
        INTERACTION_QUEUE: S,
        INTERACTION_CREATE: A,
        INTERACTION_SUCCESS: N,
        INTERACTION_FAILURE: R,
        MESSAGE_CREATE: C,
        CHANNEL_SELECT: O,
        INTERACTION_IFRAME_MODAL_CREATE: L,
        INTERACTION_IFRAME_MODAL_CLOSE: x,
        INTERACTION_IFRAME_MODAL_KEY_CREATE: w,
        INTERACTION_MODAL_CREATE: D,
        EMBEDDED_ACTIVITY_UPDATE_V2: P
    }));
