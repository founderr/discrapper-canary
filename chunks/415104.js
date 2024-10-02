n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var s = n(735250),
    o = n(470079),
    r = n(120356),
    a = n.n(r),
    l = n(617136),
    i = n(113434),
    c = n(497505),
    d = n(602667),
    u = n(439826),
    p = n(43779),
    m = n(981631),
    x = n(968470);
function _(e) {
    let { quest: t, className: n, questContent: r, contentPosition: _, rowIndex: C } = e,
        [g, f] = o.useState(!1),
        [E, h] = o.useState([]),
        S = (0, i.qb)(t),
        T = o.useCallback(() => {
            f(!0),
                (0, l.dA)({
                    questId: t.id,
                    event: m.rMx.QUEST_HOVER,
                    properties: (0, l.mH)(r)
                });
        }, [f, r, t.id]),
        v = o.useCallback(() => {
            f(!1);
        }, [f]);
    return (0, s.jsx)(d.A, {
        questOrQuests: t,
        questContent: r,
        questContentPosition: _,
        questContentRowIndex: C,
        trackGuildAndChannelMetadata: r === c.jn.QUESTS_EMBED,
        children: (e) =>
            (0, s.jsxs)('div', {
                id: 'quest-tile-'.concat(t.id),
                ref: (t) => {
                    e.current = t;
                },
                className: a()(x.container, n),
                onMouseEnter: T,
                onMouseLeave: v,
                children: [
                    (0, s.jsx)(u.Z, {
                        quest: t,
                        isHovering: g,
                        errorHints: E,
                        warningHints: S
                    }),
                    (0, s.jsx)(p.Z, {
                        quest: t,
                        questContent: r,
                        isHovering: g,
                        contentPosition: _,
                        rowIndex: C,
                        onReceiveErrorHints: h
                    })
                ]
            })
    });
}
