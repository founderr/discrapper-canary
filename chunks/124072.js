var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(866442),
    u = n(481060),
    c = n(779699),
    d = n(557092);
let _ = (e) => {
    let { children: t, className: n, color: r, iconType: o, onMouseEnter: _, onMouseLeave: E, ...f } = e,
        [h, p] = a.useState(!1),
        m = a.useCallback(
            (e) => {
                p(!0), null == _ || _(e);
            },
            [p, _]
        ),
        I = a.useCallback(
            (e) => {
                p(!1), null == E || E(e);
            },
            [p, E]
        ),
        T = {};
    return (
        null != r &&
            (T = {
                color: (0, l.Rf)(r),
                backgroundColor: h ? (0, l.br)(r, 0.3) : (0, l.br)(r, 0.1)
            }),
        (0, i.jsx)(u.Clickable, {
            ...f,
            tag: 'span',
            className: s()(n, {
                [d.wrapper]: !0,
                interactive: f.onClick
            }),
            onMouseEnter: m,
            onMouseLeave: I,
            style: T,
            tabIndex: null != f.onClick ? 0 : -1,
            children:
                null != o
                    ? (0, i.jsx)(c.Z, {
                          iconType: o,
                          children: t
                      })
                    : t
        })
    );
};
t.Z = _;
