n.d(t, {
    D6: function () {
        return I;
    },
    bp: function () {
        return T;
    },
    wr: function () {
        return r;
    }
});
var E,
    r,
    u = n(192379),
    i = n(442837),
    S = n(846519),
    _ = n(355467),
    o = n(38618),
    A = n(409813),
    l = n(45572),
    a = n(505649);
function T(e, t, n, E) {
    let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        i = arguments.length > 5 ? arguments[5] : void 0;
    u.useEffect(() => {
        if (null != e) 1 === t && e !== A.h8.AWAITING_AUTHENTICATION ? n(A.h8.AWAITING_AUTHENTICATION) : e === A.h8.AWAITING_AUTHENTICATION && (2 === t ? n(A.h8.REVIEW) : 3 === t && (r ? (null != i ? i() : n(A.h8.REVIEW)) : (E(l.A.COMPLETED), n(A.h8.CONFIRM))));
    }, [e, t, n, E, r, i]);
}
((E = r || (r = {}))[(E.PENDING = 1)] = 'PENDING'), (E[(E.ERROR = 2)] = 'ERROR'), (E[(E.NONE = 3)] = 'NONE');
function I(e) {
    let t = (0, i.e7)([a.Z], () => a.Z.awaitingPaymentId),
        n = (0, i.e7)([o.Z], () => o.Z.isConnected()),
        E = u.useRef(new S.Xp());
    u.useEffect(() => {
        n || null == t || 1 !== e ? E.current.stop() : E.current.start(5000, () => (0, _.O1)(t));
    }, [t, e, n]);
}
