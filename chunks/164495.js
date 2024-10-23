n.d(t, {
    y: function () {
        return T;
    }
});
var o = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(481060),
    l = n(617136),
    i = n(497505),
    c = n(918701),
    d = n(796111),
    u = n(667105),
    p = n(341907),
    m = n(604162),
    x = n(46140),
    C = n(689938),
    g = n(128220);
function _(e) {
    let { quest: t, taskDetails: n } = e;
    return (0, o.jsx)(a.Button, {
        className: g.cta,
        color: a.Button.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            (0, p.openVideoQuestModal)(t);
        },
        size: a.Button.Sizes.SMALL,
        children: (0, m.F)(n)
    });
}
let f = (e) => {
        let { quest: t } = e;
        return (0, o.jsx)(a.Button, {
            className: g.cta,
            size: a.Button.Sizes.SMALL,
            onClick: () =>
                (0, c.FE)(t, {
                    content: i.jn.QUEST_BAR_V2,
                    ctaContent: l.jZ.OPEN_GAME_LINK
                }),
            children: C.Z.Messages.QUESTS_GET_THIS_GAME
        });
    },
    h = (e) => {
        let { quest: t } = e;
        return (0, o.jsx)(a.Button, {
            fullWidth: !0,
            className: g.cta,
            onClick: () =>
                (0, c.gI)(
                    { quest: t },
                    {
                        content: i.jn.QUEST_BAR_V2,
                        ctaContent: l.jZ.CONNECT_CONSOLE
                    }
                ),
            size: a.Button.Sizes.SMALL,
            children: C.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA
        });
    },
    E = (e) => {
        let { quest: t, useReducedMotion: n, isExpanded: s, className: l, ctaLabel: c, ...d } = e,
            p = (0, u.hf)({
                quest: t,
                location: i.jn.QUEST_BAR_V2
            });
        return (0, o.jsx)(a.ShinyButton, {
            fullWidth: !0,
            size: a.Button.Sizes.SMALL,
            onClick: p,
            pauseAnimation: n || !s,
            className: r()(g.cta, l),
            buttonShineClassName: g.shine,
            ...d,
            children: null != c ? c : C.Z.Messages.QUESTS_CLAIM_REWARD
        });
    },
    S = (e) => {
        var t;
        let { quest: n, useReducedMotion: s, isExpanded: r, awaitingConsoleConnections: a, hasMadeProgress: l, isProgressing: u, activeScreen: p, taskDetails: m } = e,
            C = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
            g = (0, d.P)({ location: x.dr.QUESTS_BAR }),
            S = (0, c.cr)(n);
        if (C)
            return (0, o.jsx)(E, {
                quest: n,
                useReducedMotion: s,
                isExpanded: r
            });
        if (S)
            return (0, o.jsx)(_, {
                quest: n,
                taskDetails: m
            });
        if (p === i.LI.CONSOLE && a && !g) return (0, o.jsx)(h, { quest: n });
        else if (p !== i.LI.SELECT && !l && !u) return (0, o.jsx)(f, { quest: n });
        return null;
    };
function T(e) {
    return (0, o.jsxs)('div', {
        className: g.ctaButtons,
        children: [
            e.showBackButton &&
                (0, o.jsx)(a.Button, {
                    className: g.backButton,
                    innerClassName: g.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, o.jsx)(a.ChevronSmallLeftIcon, { className: g.backIcon })
                }),
            (0, o.jsx)(S, { ...e })
        ]
    });
}
