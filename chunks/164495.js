t.d(n, {
    i0: function () {
        return T;
    },
    yD: function () {
        return x;
    }
});
var r = t(200651);
t(192379);
var o = t(120356),
    a = t.n(o),
    s = t(481060),
    i = t(617136),
    l = t(497505),
    c = t(918701),
    u = t(796111),
    d = t(667105),
    m = t(341907),
    p = t(604162),
    f = t(46140),
    _ = t(689938),
    C = t(128220);
function E(e) {
    let { quest: n, taskDetails: t } = e;
    return (0, r.jsx)(s.Button, {
        className: C.cta,
        color: s.Button.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            (0, m.openVideoQuestModal)(n);
        },
        size: s.Button.Sizes.SMALL,
        children: (0, p.F9)(t)
    });
}
let v = (e) => {
        let { quest: n } = e;
        return (0, r.jsx)(s.Button, {
            className: C.cta,
            size: s.Button.Sizes.SMALL,
            onClick: () =>
                (0, c.FE)(n, {
                    content: l.jn.QUEST_BAR_V2,
                    ctaContent: i.jZ.OPEN_GAME_LINK
                }),
            children: _.Z.Messages.QUESTS_GET_THIS_GAME
        });
    },
    S = (e) => {
        let { quest: n } = e;
        return (0, r.jsx)(s.Button, {
            fullWidth: !0,
            className: C.cta,
            onClick: () =>
                (0, c.gI)(
                    { quest: n },
                    {
                        content: l.jn.QUEST_BAR_V2,
                        ctaContent: i.jZ.CONNECT_CONSOLE
                    }
                ),
            size: s.Button.Sizes.SMALL,
            children: _.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA
        });
    },
    T = (e) => {
        let { quest: n, useReducedMotion: t, isExpanded: o, className: i, ctaLabel: c, ...u } = e,
            m = (0, d.hf)({
                quest: n,
                location: l.jn.QUEST_BAR_V2
            });
        return (0, r.jsx)(s.ShinyButton, {
            fullWidth: !0,
            size: s.Button.Sizes.SMALL,
            onClick: m,
            pauseAnimation: t || !o,
            className: a()(C.cta, i),
            buttonShineClassName: C.shine,
            ...u,
            children: null != c ? c : _.Z.Messages.QUESTS_CLAIM_REWARD
        });
    },
    g = (e) => {
        var n;
        let { quest: t, useReducedMotion: o, isExpanded: a, awaitingConsoleConnections: s, hasMadeProgress: i, isProgressing: d, activeScreen: m, taskDetails: p } = e,
            _ = (null === (n = t.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
            C = (0, u.P)({ location: f.dr.QUESTS_BAR }),
            g = (0, c.cr)(t);
        if (_)
            return (0, r.jsx)(T, {
                quest: t,
                useReducedMotion: o,
                isExpanded: a
            });
        if (g)
            return (0, r.jsx)(E, {
                quest: t,
                taskDetails: p
            });
        if (m === l.LI.CONSOLE && s && !C) return (0, r.jsx)(S, { quest: t });
        else if (m !== l.LI.SELECT && !i && !d) return (0, r.jsx)(v, { quest: t });
        return null;
    };
function x(e) {
    return (0, r.jsxs)('div', {
        className: C.ctaButtons,
        children: [
            e.showBackButton &&
                (0, r.jsx)(s.Button, {
                    className: C.backButton,
                    innerClassName: C.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, r.jsx)(s.ChevronSmallLeftIcon, { className: C.backIcon })
                }),
            (0, r.jsx)(g, { ...e })
        ]
    });
}
