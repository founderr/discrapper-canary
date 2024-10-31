n.d(t, {
    i0: function () {
        return T;
    },
    yD: function () {
        return x;
    }
});
var r = n(200651);
n(192379);
var o = n(120356),
    a = n.n(o),
    i = n(481060),
    s = n(617136),
    l = n(497505),
    c = n(918701),
    u = n(796111),
    d = n(667105),
    m = n(341907),
    p = n(604162),
    f = n(46140),
    C = n(689938),
    _ = n(128220);
function v(e) {
    let { quest: t, taskDetails: n } = e;
    return (0, r.jsx)(i.Button, {
        className: _.cta,
        color: i.Button.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            (0, m.openVideoQuestModal)(t);
        },
        size: i.Button.Sizes.SMALL,
        children: (0, p.F9)(n)
    });
}
let E = (e) => {
        let { quest: t } = e;
        return (0, r.jsx)(i.Button, {
            className: _.cta,
            size: i.Button.Sizes.SMALL,
            onClick: () =>
                (0, c.FE)(t, {
                    content: l.jn.QUEST_BAR_V2,
                    ctaContent: s.jZ.OPEN_GAME_LINK
                }),
            children: C.Z.Messages.QUESTS_GET_THIS_GAME
        });
    },
    S = (e) => {
        let { quest: t } = e;
        return (0, r.jsx)(i.Button, {
            fullWidth: !0,
            className: _.cta,
            onClick: () =>
                (0, c.gI)(
                    { quest: t },
                    {
                        content: l.jn.QUEST_BAR_V2,
                        ctaContent: s.jZ.CONNECT_CONSOLE
                    }
                ),
            size: i.Button.Sizes.SMALL,
            children: C.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA
        });
    },
    T = (e) => {
        let { quest: t, useReducedMotion: n, isExpanded: o, className: s, ctaLabel: c, ...u } = e,
            m = (0, d.hf)({
                quest: t,
                location: l.jn.QUEST_BAR_V2
            });
        return (0, r.jsx)(i.ShinyButton, {
            fullWidth: !0,
            size: i.Button.Sizes.SMALL,
            onClick: m,
            pauseAnimation: n || !o,
            className: a()(_.cta, s),
            buttonShineClassName: _.shine,
            ...u,
            children: null != c ? c : C.Z.Messages.QUESTS_CLAIM_REWARD
        });
    },
    g = (e) => {
        var t;
        let { quest: n, useReducedMotion: o, isExpanded: a, awaitingConsoleConnections: i, hasMadeProgress: s, isProgressing: d, activeScreen: m, taskDetails: p } = e,
            C = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
            _ = (0, u.P)({ location: f.dr.QUESTS_BAR }),
            g = (0, c.cr)(n);
        if (C)
            return (0, r.jsx)(T, {
                quest: n,
                useReducedMotion: o,
                isExpanded: a
            });
        if (g)
            return (0, r.jsx)(v, {
                quest: n,
                taskDetails: p
            });
        if (m === l.LI.CONSOLE && i && !_) return (0, r.jsx)(S, { quest: n });
        else if (m !== l.LI.SELECT && !s && !d) return (0, r.jsx)(E, { quest: n });
        return null;
    };
function x(e) {
    return (0, r.jsxs)('div', {
        className: _.ctaButtons,
        children: [
            e.showBackButton &&
                (0, r.jsx)(i.Button, {
                    className: _.backButton,
                    innerClassName: _.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, r.jsx)(i.ChevronSmallLeftIcon, { className: _.backIcon })
                }),
            (0, r.jsx)(g, { ...e })
        ]
    });
}
