t.d(n, {
    i0: function () {
        return x;
    },
    yD: function () {
        return S;
    }
});
var o = t(200651);
t(192379);
var r = t(120356),
    c = t.n(r),
    i = t(481060),
    a = t(617136),
    s = t(497505),
    l = t(918701),
    d = t(796111),
    f = t(667105),
    u = t(341907),
    p = t(604162),
    _ = t(46140),
    C = t(388032),
    v = t(977174);
function g(e) {
    let { quest: n, taskDetails: t } = e;
    return (0, o.jsx)(i.Button, {
        className: v.cta,
        color: i.Button.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            (0, u.openVideoQuestModal)(n);
        },
        size: i.Button.Sizes.SMALL,
        children: (0, p.F9)(t)
    });
}
let m = (e) => {
        let { quest: n } = e;
        return (0, o.jsx)(i.Button, {
            className: v.cta,
            size: i.Button.Sizes.SMALL,
            onClick: () =>
                (0, l.FE)(n, {
                    content: s.jn.QUEST_BAR_V2,
                    ctaContent: a.jZ.OPEN_GAME_LINK
                }),
            children: (0, l.pO)(n) ? C.intl.string(C.t.hvVgAQ) : C.intl.string(C.t.lwQdjI)
        });
    },
    B = (e) => {
        let { quest: n } = e;
        return (0, o.jsx)(i.Button, {
            fullWidth: !0,
            className: v.cta,
            onClick: () =>
                (0, l.gI)(
                    { quest: n },
                    {
                        content: s.jn.QUEST_BAR_V2,
                        ctaContent: a.jZ.CONNECT_CONSOLE
                    }
                ),
            size: i.Button.Sizes.SMALL,
            children: C.intl.string(C.t.csptqa)
        });
    },
    x = (e) => {
        let { quest: n, useReducedMotion: t, isExpanded: r, className: a, ctaLabel: l, ...d } = e,
            u = (0, f.hf)({
                quest: n,
                location: s.jn.QUEST_BAR_V2
            });
        return (0, o.jsx)(i.ShinyButton, {
            fullWidth: !0,
            size: i.Button.Sizes.SMALL,
            onClick: u,
            pauseAnimation: t || !r,
            className: c()(v.cta, a),
            buttonShineClassName: v.shine,
            ...d,
            children: null != l ? l : C.intl.string(C.t.cfY4PD)
        });
    },
    b = (e) => {
        var n;
        let { quest: t, useReducedMotion: r, isExpanded: c, awaitingConsoleConnections: i, hasMadeProgress: a, isProgressing: f, activeScreen: u, taskDetails: p } = e,
            C = (null === (n = t.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
            v = (0, d.P)({ location: _.dr.QUESTS_BAR }),
            b = (0, l.q8)(t);
        if (C)
            return (0, o.jsx)(x, {
                quest: t,
                useReducedMotion: r,
                isExpanded: c
            });
        if (b)
            return (0, o.jsx)(g, {
                quest: t,
                taskDetails: p
            });
        if (u === s.LI.CONSOLE && i && !v) return (0, o.jsx)(B, { quest: t });
        else if (u !== s.LI.SELECT && !a && !f) return (0, o.jsx)(m, { quest: t });
        return null;
    };
function S(e) {
    return (0, o.jsxs)('div', {
        className: v.ctaButtons,
        children: [
            e.showBackButton &&
                (0, o.jsx)(i.Button, {
                    className: v.backButton,
                    innerClassName: v.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, o.jsx)(i.ChevronSmallLeftIcon, { className: v.backIcon })
                }),
            (0, o.jsx)(b, { ...e })
        ]
    });
}
