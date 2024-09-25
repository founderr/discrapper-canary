n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(526629);
n(442837);
var s = n(686777),
    l = n(113434);
n(569984);
var u = n(497505),
    c = n(602667),
    d = n(87894),
    _ = n(372113),
    E = n(206044),
    f = n(266843),
    h = n(46140),
    p = n(271074);
function m(e) {
    let { quest: t, location: n, initiallyExpanded: r, contentPosition: m } = e,
        [I, T] = a.useState(!1),
        g = a.useCallback(() => T(!0), []),
        S = a.useCallback(() => T(!1), []),
        A = (0, l.tP)(t),
        { containerRef: v, size: N, height: O } = (0, f.h)(),
        R = (0, s.q)({ location: h.dr.QUESTS_CARD }),
        {
            expansionSpring: C,
            isAnimating: y,
            isExpanded: b,
            toggleExpanded: L
        } = (0, f.O)({
            initiallyExpanded:
                !R ||
                r ||
                (0, d.iM)({
                    location: n,
                    quest: t
                })
        }),
        D = null != O ? O : d.U0;
    return (0, i.jsx)(c.A, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: m,
        trackGuildAndChannelMetadata: n === u.jn.QUESTS_EMBED,
        children: (e) =>
            (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(o.animated.div, {
                    style: {
                        maxHeight:
                            n === u.jn.QUESTS_EMBED
                                ? void 0
                                : C.to({
                                      range: [0, 1],
                                      output: [d.DJ, D]
                                  })
                    },
                    className: p.questsCard,
                    onFocus: g,
                    onMouseEnter: g,
                    onBlur: S,
                    onMouseLeave: S,
                    children: (0, i.jsxs)('div', {
                        ref: (t) => {
                            (e.current = t), (v.current = t);
                        },
                        children: [
                            (0, i.jsx)(E.Z, {
                                isFocused: I,
                                isQuestExpired: A,
                                location: n,
                                quest: t,
                                size: N,
                                expansionSpring: C,
                                isAnimating: y,
                                isExpanded: b,
                                isInConcurrentQuestExperiment: R,
                                contentPosition: m,
                                toggleExpanded: L
                            }),
                            (0, i.jsx)(_.Z, {
                                quest: t,
                                isQuestExpired: A,
                                location: n,
                                size: N,
                                isFocused: I,
                                isExpanded: b,
                                isAnimating: y,
                                contentPosition: m
                            })
                        ]
                    })
                })
            })
    });
}
