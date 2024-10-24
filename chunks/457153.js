var o = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(100621),
    i = n(95985),
    c = n(183004);
let d = s.forwardRef(function (e, t) {
    var n;
    let { className: r, expansionSpring: d, isExpanded: u, isExpansionAnimationComplete: p, quest: m, taskDetails: x } = e,
        C = s.useRef(null),
        _ = (null === (n = m.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null;
    return (0, o.jsx)(l.animated.div, {
        ref: t,
        'aria-hidden': u && p,
        className: a()(r, c.contentCollapsed, {
            [c.contentCollapsedExpanded]: u,
            [c.contentCollapsedAccepted]: _
        }),
        style: {
            opacity: d.to({
                range: [0, 1],
                output: [1, 0]
            })
        },
        children: (0, o.jsx)('div', {
            className: c.contentCollapsedWrapper,
            children: _
                ? (0, o.jsx)(i.Z, {
                      contentLocation: 'collapsed',
                      quest: m,
                      progressBarRef: C,
                      isExpanded: !1,
                      taskDetails: x
                  })
                : null
        })
    });
});
t.Z = d;
