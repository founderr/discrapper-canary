var o = n(735250),
    s = n(470079),
    r = n(113434),
    a = n(308069),
    l = n(613087),
    i = n(457153),
    c = n(254197),
    d = n(321025),
    u = n(203338);
t.Z = function (e) {
    var t;
    let { expandedContentRef: n, expansionSpring: p, isExpanded: m, isExpansionAnimationComplete: x, onCtxMenuOpened: _, onCtxMenuClosed: C, onCtxMenuSelection: g, quest: f, useReducedMotion: E, collapsedHeight: h } = e,
        S = s.useRef(null),
        T = s.useRef(null),
        N = (null === (t = f.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        v = (0, r.Rf)(f);
    return (0, o.jsxs)(l.p, {
        expandedContentRef: n,
        collapsedContentRef: S,
        expansionSpring: p,
        children: [
            (0, o.jsx)(i.Z, {
                ref: S,
                className: u.content,
                expansionSpring: p,
                isExpanded: m,
                isExpansionAnimationComplete: x,
                quest: f,
                useReducedMotion: E,
                taskDetails: v
            }),
            (0, o.jsx)(c.Z, {
                expansionSpring: p,
                className: u.content,
                collapsedHeight: h,
                onCtxMenuOpen: _,
                onCtxMenuClose: C,
                onCtxMenuSelect: g,
                overlayRef: T,
                isExpanded: m,
                isExpansionAnimationComplete: x,
                quest: f,
                useReducedMotion: E,
                ref: n,
                taskDetails: v,
                children: (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)(d.Z, {
                            expansionSpring: p,
                            isExpanded: m
                        }),
                        !N &&
                            (0, o.jsx)(a.Z, {
                                quest: f,
                                expansionSpring: p,
                                useReducedMotion: E,
                                isExpanded: m,
                                isExpansionAnimationComplete: x,
                                onCtxMenuOpen: _,
                                onCtxMenuClose: C,
                                onCtxMenuSelect: g
                            })
                    ]
                })
            }),
            (0, o.jsx)('div', {
                ref: T,
                className: u.overlay
            })
        ]
    });
};
