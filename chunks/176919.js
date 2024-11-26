n.d(e, {
    D6: function () {
        return I;
    },
    bp: function () {
        return T;
    },
    wr: function () {
        return E;
    }
});
var r,
    E,
    i = n(192379),
    u = n(442837),
    S = n(846519),
    o = n(355467),
    _ = n(38618),
    l = n(409813),
    A = n(45572),
    a = n(505649);
function T(t, e, n, r) {
    let E = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        u = arguments.length > 5 ? arguments[5] : void 0;
    i.useEffect(() => {
        if (null != t) 1 === e && t !== l.h8.AWAITING_AUTHENTICATION ? n(l.h8.AWAITING_AUTHENTICATION) : t === l.h8.AWAITING_AUTHENTICATION && (2 === e ? n(l.h8.REVIEW) : 3 === e && (E ? (null != u ? u() : n(l.h8.REVIEW)) : (r(A.A.COMPLETED), n(l.h8.CONFIRM))));
    }, [t, e, n, r, E, u]);
}
((r = E || (E = {}))[(r.PENDING = 1)] = 'PENDING'), (r[(r.ERROR = 2)] = 'ERROR'), (r[(r.NONE = 3)] = 'NONE');
function I(t) {
    let e = (0, u.e7)([a.Z], () => a.Z.awaitingPaymentId),
        n = (0, u.e7)([_.Z], () => _.Z.isConnected()),
        r = i.useRef(new S.Xp());
    i.useEffect(() => {
        n || null == e || 1 !== t ? r.current.stop() : r.current.start(5000, () => (0, o.O1)(e));
    }, [e, t, n]);
}
