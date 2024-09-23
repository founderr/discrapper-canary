n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    o = n(617136),
    l = n(113434),
    c = n(497505),
    d = n(602667),
    _ = n(439826),
    u = n(43779),
    E = n(981631),
    T = n(968470);
function I(e) {
    let { quest: t, className: n, questContent: r, contentPosition: I, rowIndex: R } = e,
        [m, g] = a.useState(!1),
        [N, C] = a.useState([]),
        p = (0, l.qb)(t),
        f = a.useCallback(() => {
            g(!0),
                (0, o.dA)({
                    questId: t.id,
                    event: E.rMx.QUEST_HOVER,
                    properties: (0, o.mH)(r)
                });
        }, [g, r, t.id]),
        A = a.useCallback(() => {
            g(!1);
        }, [g]);
    return (0, s.jsx)(d.A, {
        questOrQuests: t,
        questContent: r,
        questContentPosition: I,
        questContentRowIndex: R,
        trackGuildAndChannelMetadata: r === c.jn.QUESTS_EMBED,
        children: (e) =>
            (0, s.jsxs)('div', {
                id: 'quest-tile-'.concat(t.id),
                ref: (t) => {
                    e.current = t;
                },
                className: i()(T.container, n),
                onMouseEnter: f,
                onMouseLeave: A,
                children: [
                    (0, s.jsx)(_.Z, {
                        quest: t,
                        isHovering: m,
                        errorHints: N,
                        warningHints: p
                    }),
                    (0, s.jsx)(u.Z, {
                        quest: t,
                        questContent: r,
                        isHovering: m,
                        contentPosition: I,
                        rowIndex: R,
                        onReceiveErrorHints: C
                    })
                ]
            })
    });
}
