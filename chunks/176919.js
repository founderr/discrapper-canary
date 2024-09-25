n.d(t, {
    D6: function () {
        return f;
    },
    bp: function () {
        return _;
    },
    wr: function () {
        return r;
    }
});
var r,
    i = n(470079),
    a = n(442837),
    o = n(846519),
    s = n(355467),
    l = n(38618),
    u = n(409813),
    c = n(45572),
    d = n(505649);
function _(e, t, n, r) {
    let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        o = arguments.length > 5 ? arguments[5] : void 0;
    i.useEffect(() => {
        if (null != e) 1 === t && e !== u.h8.AWAITING_AUTHENTICATION ? n(u.h8.AWAITING_AUTHENTICATION) : e === u.h8.AWAITING_AUTHENTICATION && (2 === t ? n(u.h8.REVIEW) : 3 === t && (a ? (null != o ? o() : n(u.h8.REVIEW)) : (r(c.A.COMPLETED), n(u.h8.CONFIRM))));
    }, [e, t, n, r, a, o]);
}
!(function (e) {
    (e[(e.PENDING = 1)] = 'PENDING'), (e[(e.ERROR = 2)] = 'ERROR'), (e[(e.NONE = 3)] = 'NONE');
})(r || (r = {}));
let E = 5000;
function f(e) {
    let t = (0, a.e7)([d.Z], () => d.Z.awaitingPaymentId),
        n = (0, a.e7)([l.Z], () => l.Z.isConnected()),
        r = i.useRef(new o.Xp());
    i.useEffect(() => {
        n || null == t || 1 !== e ? r.current.stop() : r.current.start(E, () => (0, s.O1)(t));
    }, [t, e, n]);
}
