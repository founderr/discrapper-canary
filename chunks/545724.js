n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(748780),
    o = n(91192),
    c = n(481060),
    d = n(239091),
    u = n(687683),
    h = n(454515);
t.Z = function (e) {
    let { index: t, children: a, user: m, channel: p, onClick: g, isFocused: f, isActive: _, onOtherHover: E, className: I } = e,
        [C, v] = r.useState(!1),
        [S, N] = r.useState(!1),
        T = () => {
            v(!0), f && !_ && !S && (null == E || E());
        },
        x = () => {
            v(!1);
        },
        b = (e, t) => {
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
        id: p.id,
        children: (e) =>
            (0, i.jsx)(c.FocusRing, {
                offset: {
                    left: -8,
                    right: -8
                },
                children: (0, i.jsx)(s.Z.div, {
                    className: l()(h.messageRequestItem, I, {
                        [h.active]: _ || S,
                        [h.firstItem]: 0 === t
                    }),
                    onContextMenu: (e) => b(e, m),
                    onMouseEnter: T,
                    onMouseLeave: x,
                    onClick: null != g ? g : void 0,
                    style: {
                        LIST_ROW_HEIGHT: u.WN,
                        opacity: 1
                    },
                    ...e,
                    children: a(C || _ || S)
                })
            })
    });
};
