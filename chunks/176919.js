n.d(t, {
    D6: function () {
        return p;
    },
    bp: function () {
        return _;
    },
    wr: function () {
        return i;
    }
});
var r,
    i,
    a = n(192379),
    s = n(442837),
    o = n(846519),
    l = n(355467),
    u = n(38618),
    c = n(409813),
    d = n(45572),
    f = n(505649);
function _(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = arguments.length > 5 ? arguments[5] : void 0;
    a.useEffect(() => {
        if (null != e) 1 === t && e !== c.h8.AWAITING_AUTHENTICATION ? n(c.h8.AWAITING_AUTHENTICATION) : e === c.h8.AWAITING_AUTHENTICATION && (2 === t ? n(c.h8.REVIEW) : 3 === t && (i ? (null != s ? s() : n(c.h8.REVIEW)) : (r(d.A.COMPLETED), n(c.h8.CONFIRM))));
    }, [e, t, n, r, i, s]);
}
((r = i || (i = {}))[(r.PENDING = 1)] = 'PENDING'), (r[(r.ERROR = 2)] = 'ERROR'), (r[(r.NONE = 3)] = 'NONE');
function p(e) {
    let t = (0, s.e7)([f.Z], () => f.Z.awaitingPaymentId),
        n = (0, s.e7)([u.Z], () => u.Z.isConnected()),
        r = a.useRef(new o.Xp());
    a.useEffect(() => {
        n || null == t || 1 !== e ? r.current.stop() : r.current.start(5000, () => (0, l.O1)(t));
    }, [t, e, n]);
}
