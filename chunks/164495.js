n.d(t, {
    i0: function () {
        return S;
    },
    yD: function () {
        return x;
    }
});
var r = n(200651);
n(192379);
var o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(617136),
    i = n(497505),
    c = n(918701),
    u = n(796111),
    d = n(667105),
    m = n(341907),
    p = n(604162),
    f = n(46140),
    C = n(689938),
    _ = n(128220);
function E(e) {
    let { quest: t, taskDetails: n } = e;
    return (0, r.jsx)(s.Button, {
        className: _.cta,
        color: s.Button.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            (0, m.openVideoQuestModal)(t);
        },
        size: s.Button.Sizes.SMALL,
        children: (0, p.F9)(n)
    });
}
let v = (e) => {
        let { quest: t } = e;
        return (0, r.jsx)(s.Button, {
            className: _.cta,
            size: s.Button.Sizes.SMALL,
            onClick: () =>
                (0, c.FE)(t, {
                    content: i.jn.QUEST_BAR_V2,
                    ctaContent: l.jZ.OPEN_GAME_LINK
                }),
            children: C.Z.Messages.QUESTS_GET_THIS_GAME
        });
    },
    T = (e) => {
        let { quest: t } = e;
        return (0, r.jsx)(s.Button, {
            fullWidth: !0,
            className: _.cta,
            onClick: () =>
                (0, c.gI)(
                    { quest: t },
                    {
                        content: i.jn.QUEST_BAR_V2,
                        ctaContent: l.jZ.CONNECT_CONSOLE
                    }
                ),
            size: s.Button.Sizes.SMALL,
            children: C.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA
        });
    },
    S = (e) => {
        let { quest: t, useReducedMotion: n, isExpanded: o, className: l, ctaLabel: c, ...u } = e,
            m = (0, d.hf)({
                quest: t,
                location: i.jn.QUEST_BAR_V2
            });
        return (0, r.jsx)(s.ShinyButton, {
            fullWidth: !0,
            size: s.Button.Sizes.SMALL,
            onClick: m,
            pauseAnimation: n || !o,
            className: a()(_.cta, l),
            buttonShineClassName: _.shine,
            ...u,
            children: null != c ? c : C.Z.Messages.QUESTS_CLAIM_REWARD
        });
    },
    g = (e) => {
        var t;
        let { quest: n, useReducedMotion: o, isExpanded: a, awaitingConsoleConnections: s, hasMadeProgress: l, isProgressing: d, activeScreen: m, taskDetails: p } = e,
            C = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
            _ = (0, u.P)({ location: f.dr.QUESTS_BAR }),
            g = (0, c.cr)(n);
        if (C)
            return (0, r.jsx)(S, {
                quest: n,
                useReducedMotion: o,
                isExpanded: a
            });
        if (g)
            return (0, r.jsx)(E, {
                quest: n,
                taskDetails: p
            });
        if (m === i.LI.CONSOLE && s && !_) return (0, r.jsx)(T, { quest: n });
        else if (m !== i.LI.SELECT && !l && !d) return (0, r.jsx)(v, { quest: n });
        return null;
    };
function x(e) {
    return (0, r.jsxs)('div', {
        className: _.ctaButtons,
        children: [
            e.showBackButton &&
                (0, r.jsx)(s.Button, {
                    className: _.backButton,
                    innerClassName: _.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, r.jsx)(s.ChevronSmallLeftIcon, { className: _.backIcon })
                }),
            (0, r.jsx)(g, { ...e })
        ]
    });
}
