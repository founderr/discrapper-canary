n(653041), n(47120), n(724458);
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(959078),
    o = n(442837),
    a = n(481060),
    u = n(607070),
    c = n(553795),
    d = n(358085),
    m = n(617136),
    x = n(111382),
    h = n(113434),
    C = n(918701),
    g = n(566078),
    p = n(667105),
    E = n(388032),
    j = n(490752);
let T = (e) => (0 === e.length ? j.warning : j.danger),
    f = (e, t) => (0 === e.length ? E.intl.formatToPlainString(E.t.gX0Qc3, { gameTitle: t }) : E.intl.formatToPlainString(E.t['28Ql29'], { gameTitle: t })),
    v = (e) => {
        let { quest: t, location: n, errors: s, gameTitle: l, consoleHelpArticle: o, expiredCredentialsInteractable: u } = e;
        if (0 === s.length)
            return (0, i.jsx)(a.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: E.intl.format(E.t.GXqvCw, { gameTitle: l })
            });
        let x = [];
        (0, C.Nj)({ quest: t }) && x.push((0, d.isWeb)() ? E.intl.string(E.t['0UTkPz']) : E.intl.string(E.t.XGRUho));
        let h = [
            ...x,
            ...s.map((e) => {
                if (e.type !== r.K.EXPIRED_CREDENTIAL || !u) return e.message;
                let i = c.Z.getAccount(e.connected_account_id, e.connected_account_type),
                    s = (0, C.C9)(e),
                    l = (0, C._j)(e);
                return E.intl.format(s, {
                    account_name: null == i ? void 0 : i.name,
                    onClick: () => {
                        (0, C.fY)(
                            {
                                quest: t,
                                platformType: l
                            },
                            {
                                content: n,
                                ctaContent: m.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE
                            }
                        );
                    }
                });
            }),
            o
        ];
        return (0, i.jsx)(a.Text, {
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: h.reduce((e, t) => [...e, t, ' '], [])
        });
    };
t.Z = function (e) {
    let t = g.r.build(e.quest.config).application.name,
        n = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        s = (0, p.k3)(e.quest.id, e.location),
        r = (0, x.n)(),
        c = (0, p.g2)({
            useReducedMotion: n,
            className: j.refreshIcon
        }),
        {
            errorHints: d,
            startingConsoleQuest: C,
            startConsoleQuest: S
        } = (0, h.GI)({
            questId: e.quest.id,
            beforeRequest: () => {
                c.startAnimation(),
                    (0, m._3)({
                        questId: e.quest.id,
                        questContent: e.location,
                        questContentCTA: m.jZ.DEFIBRILLATOR
                    });
            },
            afterRequest: c.stopAnimation
        });
    return (0, i.jsxs)('div', {
        className: l()(j.container, { [j.inFlight]: C }),
        children: [
            (0, i.jsxs)('div', {
                className: j.info,
                children: [
                    (0, i.jsxs)('div', {
                        className: j.header,
                        children: [
                            (0, i.jsx)(a.CircleWarningIcon, {
                                className: l()(j.headerIcon, T(d)),
                                size: 'custom',
                                color: 'currentColor',
                                width: 16,
                                height: 16
                            }),
                            (0, i.jsx)(a.Text, {
                                variant: 'text-sm/semibold',
                                children: f(d, t)
                            })
                        ]
                    }),
                    v({
                        quest: e.quest,
                        errors: d,
                        gameTitle: t,
                        location: e.location,
                        consoleHelpArticle: s,
                        expiredCredentialsInteractable: r
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: j.cta,
                children: (0, i.jsx)(a.Button, {
                    color: a.ButtonColors.PRIMARY,
                    onClick: S,
                    disabled: C,
                    children: (0, i.jsxs)('div', {
                        className: j.ctaInner,
                        children: [c.render(), E.intl.string(E.t.nPThNT)]
                    })
                })
            })
        ]
    });
};
