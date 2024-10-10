n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    i = n(212433);
n(442837);
var o = n(686777),
    r = n(113434);
n(569984);
var l = n(497505),
    u = n(602667),
    d = n(87894),
    c = n(372113),
    m = n(206044),
    E = n(266843),
    x = n(46140),
    C = n(271074);
function h(e) {
    let { quest: t, location: n, initiallyExpanded: h, contentPosition: _ } = e,
        [T, g] = a.useState(!1),
        p = a.useCallback(() => g(!0), []),
        S = a.useCallback(() => g(!1), []),
        j = (0, r.tP)(t),
        { containerRef: N, size: f, height: v } = (0, E.h)(),
        M = (0, o.q)({ location: x.dr.QUESTS_CARD }),
        {
            expansionSpring: I,
            isAnimating: q,
            isExpanded: R,
            toggleExpanded: A
        } = (0, E.O)({
            initiallyExpanded:
                !M ||
                h ||
                (0, d.iM)({
                    location: n,
                    quest: t
                })
        }),
        Z = null != v ? v : d.U0;
    return (0, s.jsx)(u.A, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: _,
        trackGuildAndChannelMetadata: n === l.jn.QUESTS_EMBED,
        children: (e) =>
            (0, s.jsx)(s.Fragment, {
                children: (0, s.jsx)(i.animated.div, {
                    style: {
                        maxHeight:
                            n === l.jn.QUESTS_EMBED
                                ? void 0
                                : I.to({
                                      range: [0, 1],
                                      output: [d.DJ, Z]
                                  })
                    },
                    className: C.questsCard,
                    onFocus: p,
                    onMouseEnter: p,
                    onBlur: S,
                    onMouseLeave: S,
                    children: (0, s.jsxs)('div', {
                        ref: (t) => {
                            (e.current = t), (N.current = t);
                        },
                        children: [
                            (0, s.jsx)(m.Z, {
                                isFocused: T,
                                isQuestExpired: j,
                                location: n,
                                quest: t,
                                size: f,
                                expansionSpring: I,
                                isAnimating: q,
                                isExpanded: R,
                                isInConcurrentQuestExperiment: M,
                                contentPosition: _,
                                toggleExpanded: A
                            }),
                            (0, s.jsx)(c.Z, {
                                quest: t,
                                isQuestExpired: j,
                                location: n,
                                size: f,
                                isFocused: T,
                                isExpanded: R,
                                isAnimating: q,
                                contentPosition: _
                            })
                        ]
                    })
                })
            })
    });
}
