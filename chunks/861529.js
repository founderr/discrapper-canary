n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(454585),
    l = n(937889),
    u = n(970184),
    c = n(870456),
    d = n(662762),
    _ = n(554034);
function E(e) {
    let t = (0, u.CJ)();
    return (0, i.useMemo)(() => {
        let n;
        return null === t
            ? null
            : ((n =
                  null != t.message
                      ? (0, l.rs)(t.message, c.u)
                      : (0, l.p6)({
                            channelId: t.channelId,
                            renderOptions: c.u
                        })),
              s.Z.parse(e, !0, n));
    }, [e, t]);
}
function f(e) {
    let { content: t, className: n } = e,
        i = E(t);
    return (0, r.jsx)('div', {
        className: o()([n, _.markup, d.markdownContainer]),
        children: i
    });
}
