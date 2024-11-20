n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    l = n(100621);
n(442837);
var r = n(686777),
    o = n(113434);
n(569984);
var a = n(497505),
    u = n(602667),
    d = n(87894),
    c = n(372113),
    m = n(206044),
    x = n(266843),
    h = n(46140),
    C = n(271074);
function g(e) {
    let { quest: t, location: n, initiallyExpanded: g, contentPosition: p } = e,
        [E, j] = s.useState(!1),
        T = s.useCallback(() => j(!0), []),
        f = s.useCallback(() => j(!1), []),
        v = (0, o.tP)(t),
        { containerRef: S, size: N, height: q } = (0, x.h)(),
        _ = (0, r.q)({ location: h.dr.QUESTS_CARD }),
        {
            expansionSpring: A,
            isAnimating: R,
            isExpanded: b,
            toggleExpanded: I
        } = (0, x.O)({
            initiallyExpanded:
                !_ ||
                g ||
                (0, d.iM)({
                    location: n,
                    quest: t
                })
        }),
        M = null != q ? q : d.U0;
    return (0, i.jsx)(u.A, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: p,
        trackGuildAndChannelMetadata: n === a.jn.QUESTS_EMBED,
        children: (e) =>
            (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(l.animated.div, {
                    style: {
                        maxHeight:
                            n === a.jn.QUESTS_EMBED
                                ? void 0
                                : A.to({
                                      range: [0, 1],
                                      output: [d.DJ, M]
                                  })
                    },
                    className: C.questsCard,
                    onFocus: T,
                    onMouseEnter: T,
                    onBlur: f,
                    onMouseLeave: f,
                    children: (0, i.jsxs)('div', {
                        ref: (t) => {
                            (e.current = t), (S.current = t);
                        },
                        children: [
                            (0, i.jsx)(m.Z, {
                                isFocused: E,
                                isQuestExpired: v,
                                location: n,
                                quest: t,
                                size: N,
                                expansionSpring: A,
                                isAnimating: R,
                                isExpanded: b,
                                isInConcurrentQuestExperiment: _,
                                contentPosition: p,
                                toggleExpanded: I
                            }),
                            (0, i.jsx)(c.Z, {
                                quest: t,
                                isQuestExpired: v,
                                location: n,
                                size: N,
                                isFocused: E,
                                isExpanded: b,
                                isAnimating: R,
                                contentPosition: p
                            })
                        ]
                    })
                })
            })
    });
}
