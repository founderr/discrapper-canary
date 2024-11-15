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
    l = n.n(o),
    i = n(481060),
    a = n(617136),
    s = n(497505),
    c = n(918701),
    u = n(796111),
    d = n(667105),
    m = n(341907),
    f = n(604162),
    p = n(46140),
    v = n(388032),
    C = n(128220);
function g(e) {
    let { quest: t, taskDetails: n } = e;
    return (0, r.jsx)(i.Button, {
        className: C.cta,
        color: i.Button.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            (0, m.openVideoQuestModal)(t);
        },
        size: i.Button.Sizes.SMALL,
        children: (0, f.F9)(n)
    });
}
let x = (e) => {
        let { quest: t } = e;
        return (0, r.jsx)(i.Button, {
            className: C.cta,
            size: i.Button.Sizes.SMALL,
            onClick: () =>
                (0, c.FE)(t, {
                    content: s.jn.QUEST_BAR_V2,
                    ctaContent: a.jZ.OPEN_GAME_LINK
                }),
            children: v.intl.string(v.t.lwQdjI)
        });
    },
    S = (e) => {
        let { quest: t } = e;
        return (0, r.jsx)(i.Button, {
            fullWidth: !0,
            className: C.cta,
            onClick: () =>
                (0, c.gI)(
                    { quest: t },
                    {
                        content: s.jn.QUEST_BAR_V2,
                        ctaContent: a.jZ.CONNECT_CONSOLE
                    }
                ),
            size: i.Button.Sizes.SMALL,
            children: v.intl.string(v.t.csptqa)
        });
    },
    E = (e) => {
        let { quest: t, useReducedMotion: n, isExpanded: o, className: a, ctaLabel: c, ...u } = e,
            m = (0, d.hf)({
                quest: t,
                location: s.jn.QUEST_BAR_V2
            });
        return (0, r.jsx)(i.ShinyButton, {
            fullWidth: !0,
            size: i.Button.Sizes.SMALL,
            onClick: m,
            pauseAnimation: n || !o,
            className: l()(C.cta, a),
            buttonShineClassName: C.shine,
            ...u,
            children: null != c ? c : v.intl.string(v.t.cfY4PD)
        });
    },
    h = (e) => {
        var t;
        let { quest: n, useReducedMotion: o, isExpanded: l, awaitingConsoleConnections: i, hasMadeProgress: a, isProgressing: d, activeScreen: m, taskDetails: f } = e,
            v = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
            C = (0, u.P)({ location: p.dr.QUESTS_BAR }),
            h = (0, c.cr)(n);
        if (v)
            return (0, r.jsx)(E, {
                quest: n,
                useReducedMotion: o,
                isExpanded: l
            });
        if (h)
            return (0, r.jsx)(g, {
                quest: n,
                taskDetails: f
            });
        if (m === s.LI.CONSOLE && i && !C) return (0, r.jsx)(S, { quest: n });
        else if (m !== s.LI.SELECT && !a && !d) return (0, r.jsx)(x, { quest: n });
        return null;
    };
function _(e) {
    return (0, r.jsxs)('div', {
        className: C.ctaButtons,
        children: [
            e.showBackButton &&
                (0, r.jsx)(i.Button, {
                    className: C.backButton,
                    innerClassName: C.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, r.jsx)(i.ChevronSmallLeftIcon, { className: C.backIcon })
                }),
            (0, r.jsx)(h, { ...e })
        ]
    });
}
