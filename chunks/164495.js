n.d(t, {
    i0: function () {
        return E;
    },
    yD: function () {
        return _;
    }
});
var r = n(200651);
n(192379);
var o = n(120356),
    i = n.n(o),
    l = n(481060),
    s = n(617136),
    a = n(497505),
    c = n(918701),
    u = n(796111),
    d = n(667105),
    m = n(341907),
    f = n(604162),
    p = n(46140),
    v = n(388032),
    C = n(798020);
function g(e) {
    let { quest: t, taskDetails: n } = e;
    return (0, r.jsx)(l.Button, {
        className: C.cta,
        color: l.Button.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            (0, m.openVideoQuestModal)(t);
        },
        size: l.Button.Sizes.SMALL,
        children: (0, f.F9)(n)
    });
}
let x = (e) => {
        let { quest: t } = e;
        return (0, r.jsx)(l.Button, {
            className: C.cta,
            size: l.Button.Sizes.SMALL,
            onClick: () =>
                (0, c.FE)(t, {
                    content: a.jn.QUEST_BAR_V2,
                    ctaContent: s.jZ.OPEN_GAME_LINK
                }),
            children: v.intl.string(v.t.lwQdjI)
        });
    },
    S = (e) => {
        let { quest: t } = e;
        return (0, r.jsx)(l.Button, {
            fullWidth: !0,
            className: C.cta,
            onClick: () =>
                (0, c.gI)(
                    { quest: t },
                    {
                        content: a.jn.QUEST_BAR_V2,
                        ctaContent: s.jZ.CONNECT_CONSOLE
                    }
                ),
            size: l.Button.Sizes.SMALL,
            children: v.intl.string(v.t.csptqa)
        });
    },
    E = (e) => {
        let { quest: t, useReducedMotion: n, isExpanded: o, className: s, ctaLabel: c, ...u } = e,
            m = (0, d.hf)({
                quest: t,
                location: a.jn.QUEST_BAR_V2
            });
        return (0, r.jsx)(l.ShinyButton, {
            fullWidth: !0,
            size: l.Button.Sizes.SMALL,
            onClick: m,
            pauseAnimation: n || !o,
            className: i()(C.cta, s),
            buttonShineClassName: C.shine,
            ...u,
            children: null != c ? c : v.intl.string(v.t.cfY4PD)
        });
    },
    h = (e) => {
        var t;
        let { quest: n, useReducedMotion: o, isExpanded: i, awaitingConsoleConnections: l, hasMadeProgress: s, isProgressing: d, activeScreen: m, taskDetails: f } = e,
            v = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
            C = (0, u.P)({ location: p.dr.QUESTS_BAR }),
            h = (0, c.q8)(n);
        if (v)
            return (0, r.jsx)(E, {
                quest: n,
                useReducedMotion: o,
                isExpanded: i
            });
        if (h)
            return (0, r.jsx)(g, {
                quest: n,
                taskDetails: f
            });
        if (m === a.LI.CONSOLE && l && !C) return (0, r.jsx)(S, { quest: n });
        else if (m !== a.LI.SELECT && !s && !d) return (0, r.jsx)(x, { quest: n });
        return null;
    };
function _(e) {
    return (0, r.jsxs)('div', {
        className: C.ctaButtons,
        children: [
            e.showBackButton &&
                (0, r.jsx)(l.Button, {
                    className: C.backButton,
                    innerClassName: C.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, r.jsx)(l.ChevronSmallLeftIcon, { className: C.backIcon })
                }),
            (0, r.jsx)(h, { ...e })
        ]
    });
}
