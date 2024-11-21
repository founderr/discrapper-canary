n.d(t, {
    k: function () {
        return d;
    }
});
var r = n(225750),
    i = n(609095),
    a = n(27691),
    s = n(33693),
    o = n(192379),
    l = n(353732),
    u = n(508241);
let c = o.createContext(null);
function d(e, t) {
    let { focusProps: n } = (0, l.K)(e),
        { keyboardProps: a } = (0, u.v)(e),
        d = (0, s.d)(n, a),
        f = (function (e) {
            let t = (0, o.useContext)(c) || {};
            (0, i.l)(t, e);
            let { ref: n, ...r } = t;
            return r;
        })(t),
        _ = e.isDisabled ? {} : f,
        p = (0, o.useRef)(e.autoFocus);
    return (
        (0, o.useEffect)(() => {
            p.current && t.current && (0, r.e)(t.current), (p.current = !1);
        }, [t]),
        {
            focusableProps: (0, s.d)(
                {
                    ...d,
                    tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
                },
                _
            )
        }
    );
}
