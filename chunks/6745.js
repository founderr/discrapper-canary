n.d(t, {
    D: function () {
        return c;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(507274),
    l = n(838331),
    u = n(930414);
function c(e) {
    let { children: t, placeholder: n, value: a, onChange: c, onClose: d, showScrollbar: f, className: _, multiSelect: h, ...p } = e,
        m = i.useCallback(
            (e) => {
                c(e), !h && (null == d || d());
            },
            [c, d, h]
        );
    return (0, r.jsx)(o.V, {
        className: s()(u.container, _, { [u.scroller]: f }),
        children: (0, r.jsx)(l.hQ, {
            ...p,
            showScrollbar: f,
            value: a,
            multiSelect: h,
            onChange: m,
            placeholder: n,
            children: t,
            listClassName: u.list
        })
    });
}
