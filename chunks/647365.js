var s = n(735250);
n(470079);
var o = n(453217),
    r = n(100805),
    a = n(784145);
t.Z = function (e) {
    let { collapsedHeight: t, expandedContentRef: n, expansionSpring: l, isExpanded: i, isExpansionAnimationComplete: c, onCtxMenuOpened: d, onCtxMenuClosed: u, onCtxMenuSelection: p, quest: m, useReducedMotion: x } = e;
    return (0, s.jsx)(r.Z, {
        expansionSpring: l,
        className: a.content,
        collapsedHeight: t,
        onCtxMenuOpen: d,
        onCtxMenuClose: u,
        onCtxMenuSelect: p,
        isExpanded: i,
        isExpansionAnimationComplete: c,
        quest: m,
        useReducedMotion: x,
        ref: n,
        children: (0, s.jsx)(o.Z, {
            className: a.content,
            expansionSpring: l,
            isExpanded: i,
            isExpansionAnimationComplete: c,
            quest: m,
            useReducedMotion: x
        })
    });
};
