r.d(n, {
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
var i,
    a = r(192379),
    s = r(442837),
    o = r(846519),
    l = r(355467),
    u = r(38618),
    c = r(409813),
    d = r(45572),
    f = r(505649);
function _(e, n, r, i) {
    let s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        o = arguments.length > 5 ? arguments[5] : void 0;
    a.useEffect(() => {
        if (null != e) 1 === n && e !== c.h8.AWAITING_AUTHENTICATION ? r(c.h8.AWAITING_AUTHENTICATION) : e === c.h8.AWAITING_AUTHENTICATION && (2 === n ? r(c.h8.REVIEW) : 3 === n && (s ? (null != o ? o() : r(c.h8.REVIEW)) : (i(d.A.COMPLETED), r(c.h8.CONFIRM))));
    }, [e, n, r, i, s, o]);
}
!(function (e) {
    (e[(e.PENDING = 1)] = 'PENDING'), (e[(e.ERROR = 2)] = 'ERROR'), (e[(e.NONE = 3)] = 'NONE');
})(i || (i = {}));
let h = 5000;
function p(e) {
    let n = (0, s.e7)([f.Z], () => f.Z.awaitingPaymentId),
        r = (0, s.e7)([u.Z], () => u.Z.isConnected()),
        i = a.useRef(new o.Xp());
    a.useEffect(() => {
        r || null == n || 1 !== e ? i.current.stop() : i.current.start(h, () => (0, l.O1)(n));
    }, [n, e, r]);
}
