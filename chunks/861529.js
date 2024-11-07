l.d(n, {
    Z: function () {
        return p;
    }
});
var t = l(200651),
    i = l(192379),
    r = l(120356),
    a = l.n(r),
    s = l(454585),
    o = l(937889),
    u = l(970184),
    c = l(870456),
    d = l(712293),
    m = l(882530);
function p(e) {
    let { content: n, className: l } = e,
        r = (function (e) {
            let n = (0, u.CJ)();
            return (0, i.useMemo)(() => {
                let l;
                return null === n
                    ? null
                    : ((l =
                          null != n.message
                              ? (0, o.rs)(n.message, c.u)
                              : (0, o.p6)({
                                    channelId: n.channelId,
                                    renderOptions: c.u
                                })),
                      s.Z.parse(e, !0, l));
            }, [e, n]);
        })(n);
    return (0, t.jsx)('div', {
        className: a()([l, m.markup, d.markdownContainer]),
        children: r
    });
}
