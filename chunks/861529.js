t.d(n, {
    Z: function () {
        return _;
    }
});
var l = t(735250),
    i = t(470079),
    a = t(120356),
    r = t.n(a),
    o = t(454585),
    s = t(937889),
    c = t(970184),
    u = t(870456),
    d = t(662762),
    m = t(554034);
function _(e) {
    let { content: n, className: t } = e,
        a = (function (e) {
            let n = (0, c.CJ)();
            return (0, i.useMemo)(() => {
                let t;
                return null === n
                    ? null
                    : ((t =
                          null != n.message
                              ? (0, s.rs)(n.message, u.u)
                              : (0, s.p6)({
                                    channelId: n.channelId,
                                    renderOptions: u.u
                                })),
                      o.Z.parse(e, !0, t));
            }, [e, n]);
        })(n);
    return (0, l.jsx)('div', {
        className: r()([t, m.markup, d.markdownContainer]),
        children: a
    });
}
