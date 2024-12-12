r.d(n, {
    Z: function () {
        return f;
    },
    q: function () {
        return _;
    }
});
var i = r(192379),
    a = r(392711),
    s = r.n(a),
    o = r(442837),
    l = r(902704),
    u = r(823379),
    c = r(728345),
    d = r(812206);
function f(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = i.useRef([]);
    return (
        i.useEffect(() => {
            n && !(0, l.E)(e, r.current) && (c.ZP.fetchApplications(s()(e).filter(u.lm).uniq().value(), !1), (r.current = e));
        }, [e, n]),
        (0, o.Wu)([d.Z], () => e.map((e) => (null != e ? d.Z.getApplication(e) : void 0)))
    );
}
function _(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return f(null != e ? [e] : [], n)[0];
}
