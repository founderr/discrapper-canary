n.d(t, {
    y: function () {
        return g;
    }
});
var o = n(735250);
n(470079);
var s = n(481060),
    r = n(617136),
    a = n(497505),
    l = n(918701),
    i = n(796111),
    c = n(667105),
    d = n(46140),
    u = n(689938),
    p = n(128220);
let m = (e) => {
        let { quest: t } = e;
        return (0, o.jsx)(s.Button, {
            className: p.cta,
            size: s.Button.Sizes.SMALL,
            onClick: () =>
                (0, l.FE)(t, {
                    content: a.jn.QUEST_BAR_V2,
                    ctaContent: r.jZ.OPEN_GAME_LINK
                }),
            children: u.Z.Messages.QUESTS_GET_THIS_GAME
        });
    },
    x = (e) => {
        let { quest: t } = e;
        return (0, o.jsx)(s.Button, {
            fullWidth: !0,
            className: p.cta,
            onClick: () =>
                (0, l.gI)(
                    { quest: t },
                    {
                        content: a.jn.QUEST_BAR_V2,
                        ctaContent: r.jZ.CONNECT_CONSOLE
                    }
                ),
            size: s.Button.Sizes.SMALL,
            children: u.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA
        });
    },
    _ = (e) => {
        let { quest: t, useReducedMotion: n, isExpanded: r } = e,
            l = (0, c.hf)({
                quest: t,
                location: a.jn.QUEST_BAR_V2
            });
        return (0, o.jsx)(s.ShinyButton, {
            fullWidth: !0,
            size: s.Button.Sizes.SMALL,
            onClick: l,
            pauseAnimation: n || !r,
            className: p.cta,
            buttonShineClassName: p.shine,
            children: u.Z.Messages.QUESTS_CLAIM_REWARD
        });
    },
    C = (e) => {
        var t;
        let { quest: n, useReducedMotion: s, isExpanded: r, awaitingConsoleConnections: l, hasMadeProgress: c, isProgressing: u, activeScreen: p } = e,
            C = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
            g = (0, i.P)({ location: d.dr.QUESTS_BAR });
        if (C)
            return (0, o.jsx)(_, {
                quest: n,
                useReducedMotion: s,
                isExpanded: r
            });
        if (p === a.LI.CONSOLE && l && !g) return (0, o.jsx)(x, { quest: n });
        if (p !== a.LI.SELECT && !c && !u) return (0, o.jsx)(m, { quest: n });
        return null;
    };
function g(e) {
    return (0, o.jsxs)('div', {
        className: p.ctaButtons,
        children: [
            e.showBackButton &&
                (0, o.jsx)(s.Button, {
                    className: p.backButton,
                    innerClassName: p.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, o.jsx)(s.ChevronSmallLeftIcon, { className: p.backIcon })
                }),
            (0, o.jsx)(C, { ...e })
        ]
    });
}
