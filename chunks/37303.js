n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    i = n(212433);
n(442837);
var l = n(686777),
    r = n(113434);
n(569984);
var o = n(497505),
    u = n(602667),
    d = n(87894),
    c = n(372113),
    E = n(206044),
    m = n(266843),
    C = n(46140),
    x = n(271074);
function S(e) {
    let { quest: t, location: n, initiallyExpanded: S, contentPosition: T } = e,
        [_, h] = a.useState(!1),
        g = a.useCallback(() => h(!0), []),
        p = a.useCallback(() => h(!1), []),
        j = (0, r.tP)(t),
        { containerRef: N, size: f, height: v } = (0, m.h)(),
        A = (0, l.q)({ location: C.dr.QUESTS_CARD }),
        {
            expansionSpring: M,
            isAnimating: R,
            isExpanded: I,
            toggleExpanded: q
        } = (0, m.O)({
            initiallyExpanded:
                !A ||
                S ||
                (0, d.iM)({
                    location: n,
                    quest: t
                })
        }),
        Z = null != v ? v : d.U0;
    return (0, s.jsx)(u.A, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: T,
        trackGuildAndChannelMetadata: n === o.jn.QUESTS_EMBED,
        children: (e) =>
            (0, s.jsx)(s.Fragment, {
                children: (0, s.jsx)(i.animated.div, {
                    style: {
                        maxHeight:
                            n === o.jn.QUESTS_EMBED
                                ? void 0
                                : M.to({
                                      range: [0, 1],
                                      output: [d.DJ, Z]
                                  })
                    },
                    className: x.questsCard,
                    onFocus: g,
                    onMouseEnter: g,
                    onBlur: p,
                    onMouseLeave: p,
                    children: (0, s.jsxs)('div', {
                        ref: (t) => {
                            (e.current = t), (N.current = t);
                        },
                        children: [
                            (0, s.jsx)(E.Z, {
                                isFocused: _,
                                isQuestExpired: j,
                                location: n,
                                quest: t,
                                size: f,
                                expansionSpring: M,
                                isAnimating: R,
                                isExpanded: I,
                                isInConcurrentQuestExperiment: A,
                                contentPosition: T,
                                toggleExpanded: q
                            }),
                            (0, s.jsx)(c.Z, {
                                quest: t,
                                isQuestExpired: j,
                                location: n,
                                size: f,
                                isFocused: _,
                                isExpanded: I,
                                isAnimating: R,
                                contentPosition: T
                            })
                        ]
                    })
                })
            })
    });
}
