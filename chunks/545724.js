n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(748780),
    o = n(91192),
    c = n(481060),
    d = n(239091),
    u = n(687683),
    _ = n(454515);
t.Z = function (e) {
    let { index: t, children: s, user: E, channel: h, onClick: m, isFocused: I, isActive: p, onOtherHover: g, className: T } = e,
        [f, C] = a.useState(!1),
        [S, N] = a.useState(!1),
        A = () => {
            C(!0), I && !p && !S && (null == g || g());
        },
        v = () => {
            C(!1);
        },
        Z = (e, t) => {
            if (null != t)
                N(!0),
                    (0, d.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('5901')]).then(n.bind(n, 881351));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    user: t
                                });
                        },
                        {
                            onClose: () => {
                                N(!1);
                            }
                        }
                    );
        };
    return (0, i.jsx)(o.mh, {
        id: h.id,
        children: (e) =>
            (0, i.jsx)(c.FocusRing, {
                offset: {
                    left: -8,
                    right: -8
                },
                children: (0, i.jsx)(l.Z.div, {
                    className: r()(_.messageRequestItem, T, {
                        [_.active]: p || S,
                        [_.firstItem]: 0 === t
                    }),
                    onContextMenu: (e) => Z(e, E),
                    onMouseEnter: A,
                    onMouseLeave: v,
                    onClick: null != m ? m : void 0,
                    style: {
                        LIST_ROW_HEIGHT: u.WN,
                        opacity: 1
                    },
                    ...e,
                    children: s(f || p || S)
                })
            })
    });
};
