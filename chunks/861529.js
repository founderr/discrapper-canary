l.d(n, {
    Z: function () {
        return p;
    }
});
var t = l(735250),
    r = l(470079),
    i = l(120356),
    a = l.n(i),
    s = l(454585),
    u = l(937889),
    o = l(970184),
    c = l(870456),
    d = l(869261),
    m = l(910212);
function p(e) {
    let { content: n, className: l } = e,
        i = (function (e) {
            let n = (0, o.CJ)();
            return (0, r.useMemo)(() => {
                let l;
                return null === n
                    ? null
                    : ((l =
                          null != n.message
                              ? (0, u.rs)(n.message, c.u)
                              : (0, u.p6)({
                                    channelId: n.channelId,
                                    renderOptions: c.u
                                })),
                      s.Z.parse(e, !0, l));
            }, [e, n]);
        })(n);
    return (0, t.jsx)('div', {
        className: a()([l, m.markup, d.markdownContainer]),
        children: i
    });
}
