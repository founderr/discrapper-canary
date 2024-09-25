let r, i, a, o, s;
n.d(t, {
    i: function () {
        return l;
    }
});
var l,
    u,
    c = n(512722),
    d = n.n(c),
    _ = n(442837),
    E = n(570140),
    f = n(904245),
    h = n(911969),
    p = n(603721),
    m = n(70956);
function I(e, t, n) {
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
function T() {
    return (r = null), (i = null), (a = null), (o = null), (s = null), !0;
}
function g(e) {
    let { messageId: t, nonce: n, data: l } = e;
    switch (l.interactionType) {
        case h.B8.APPLICATION_COMMAND:
            return (a = t), (o = l.channelId), (s = n), !1;
        case h.B8.MODAL_SUBMIT:
            return (
                d()(null == r || 1 === i || 2 === i, 'cannot submit multiple modals at once'),
                (r = n),
                (i = 0),
                setTimeout(() => {
                    r === n && 0 === i && (0, p.yr)(n);
                }, 10 * m.Z.Millis.SECOND),
                !0
            );
        default:
            return !1;
    }
}
function S(e) {
    let { nonce: t } = e;
    return t === s && (f.Z.deleteMessage(o, a, !0), (a = null), (o = null), (s = null)), !1;
}
function A(e) {
    let { nonce: t } = e;
    return t === s && (f.Z.deleteMessage(o, a, !0), (a = null), (o = null), (s = null)), !1;
}
function v(e) {
    let { nonce: t } = e;
    return null != t && t === r && ((i = 2), !0);
}
function N(e) {
    let { nonce: t } = e;
    return null != t && t === r && ((i = 1), !0);
}
!(function (e) {
    (e[(e.IN_FLIGHT = 0)] = 'IN_FLIGHT'), (e[(e.ERRORED = 1)] = 'ERRORED'), (e[(e.SUCCEEDED = 2)] = 'SUCCEEDED');
})(l || (l = {}));
class O extends (u = _.ZP.Store) {
    getModalState(e) {
        return e !== r ? null : i;
    }
}
I(O, 'displayName', 'InteractionModalStore'),
    (t.Z = new O(E.Z, {
        LOGOUT: T,
        INTERACTION_MODAL_CREATE: S,
        INTERACTION_IFRAME_MODAL_CREATE: A,
        INTERACTION_QUEUE: g,
        INTERACTION_SUCCESS: v,
        INTERACTION_FAILURE: N
    }));
