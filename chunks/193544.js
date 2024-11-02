n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(186523),
    c = n(553826),
    d = n(2150),
    u = n(992249),
    m = n(717251),
    h = n(388032),
    g = n(441519);
function x(e) {
    var t, n, l;
    let { changeTitle: x, value: p, options: f, className: C, onChange: I } = e,
        [_, N] = r.useState(p),
        [v, T] = r.useState(!1),
        [j, E] = r.useState(!1),
        S = r.useRef(null);
    r.useEffect(() => {
        N(p);
    }, [p]),
        r.useEffect(
            () => () => {
                clearTimeout(S.current);
            },
            []
        );
    let b = f.find((e) => e.value === _),
        R = (e) => {
            if (!e.disabled && e.value !== _)
                E(!0),
                    null == I || I(e),
                    N(e.value),
                    (S.current = setTimeout(() => {
                        E(!1), T(!1);
                    }, 1000));
        };
    return (0, i.jsx)(u.Z, {
        title: v ? x : null !== (t = null == b ? void 0 : b.title) && void 0 !== t ? t : x,
        description: v ? '('.concat(null !== (n = null == b ? void 0 : b.title) && void 0 !== n ? n : h.intl.string(h.t.PoWNfX), ')') : null !== (l = null == b ? void 0 : b.description) && void 0 !== l ? l : '',
        highlightColor: v ? d.q.NONE : null == b ? void 0 : b.highlightColor,
        action: (0, i.jsx)(a.Button, {
            look: a.Button.Looks.LINK,
            size: a.Button.Sizes.MIN,
            color: a.Button.Colors.LINK,
            children: h.intl.string(h.t.GEgsAw)
        }),
        loading: j,
        className: C,
        children: f.map((e, t) =>
            (0, i.jsx)(
                m.Z,
                {
                    title: e.title,
                    description: e.description,
                    highlightColor: e.highlightColor,
                    className: s()(g.groupCollapsedRow, _ === e.value && g.selected),
                    selected: _ === e.value,
                    action: _ === e.value ? (0, i.jsx)(c.Z, { className: g.radioItem }) : (0, i.jsx)(o.Z, { className: g.radioItem }),
                    onClick: () => R(e),
                    disabled: e.disabled
                },
                ''.concat(e.title, '-').concat(t)
            )
        )
    });
}
