var o = n(200651),
    s = n(192379),
    r = n(113434),
    a = n(308069),
    l = n(613087),
    i = n(457153),
    c = n(254197),
    d = n(321025),
    u = n(203338);
t.Z = function (e) {
    var t;
    let { expandedContentRef: n, expansionSpring: p, isExpanded: m, isExpansionAnimationComplete: x, onCtxMenuOpened: C, onCtxMenuClosed: g, onCtxMenuSelection: _, quest: f, useReducedMotion: h, collapsedHeight: E } = e,
        S = s.useRef(null),
        T = s.useRef(null),
        v = (null === (t = f.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        N = (0, r.Rf)(f);
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
                useReducedMotion: h,
                taskDetails: N
            }),
            (0, o.jsx)(c.Z, {
                expansionSpring: p,
                className: u.content,
                collapsedHeight: E,
                onCtxMenuOpen: C,
                onCtxMenuClose: g,
                onCtxMenuSelect: _,
                overlayRef: T,
                isExpanded: m,
                isExpansionAnimationComplete: x,
                quest: f,
                useReducedMotion: h,
                ref: n,
                taskDetails: N,
                children: (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)(d.Z, {
                            expansionSpring: p,
                            isExpanded: m
                        }),
                        !v &&
                            (0, o.jsx)(a.Z, {
                                quest: f,
                                expansionSpring: p,
                                useReducedMotion: h,
                                isExpanded: m,
                                isExpansionAnimationComplete: x,
                                onCtxMenuOpen: C,
                                onCtxMenuClose: g,
                                onCtxMenuSelect: _
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
