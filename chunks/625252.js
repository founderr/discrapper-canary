n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(704215),
    o = n(780384),
    c = n(481060),
    d = n(37234),
    u = n(410030),
    m = n(605236),
    h = n(626135),
    g = n(617136),
    p = n(497505),
    x = n(341907),
    S = n(46140),
    T = n(981631),
    C = n(388032),
    E = n(35317),
    _ = n(66094);
function f() {
    let e = (0, o.wj)((0, u.ZP)()),
        t = s.useMemo(() => ({ backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png', ')') }), []),
        n = s.useCallback(() => {
            (0, d.xf)(),
                (0, x.navigateToQuestHome)(S.dr.USER_SETTINGS_GIFT_INVENTORY, p.jn.QUEST_HOME_MOVE_CALLOUT),
                h.default.track(T.rMx.QUEST_CONTENT_CLICKED, {
                    cta_name: g.jZ.VIEW_QUESTS,
                    ...(0, g.mH)(p.jn.QUEST_HOME_MOVE_CALLOUT)
                });
        }, []);
    return (
        s.useCallback(() => {
            (0, m.EW)(a.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME);
        }, []),
        (0, m.un)(a.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME),
        (0, i.jsxs)('div', {
            className: l()(E.container),
            style: t,
            children: [
                !1,
                (0, i.jsxs)('div', {
                    className: E.textContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: E.headerContainer,
                            children: [
                                (0, i.jsx)('img', {
                                    alt: '',
                                    src: _,
                                    className: E.icon
                                }),
                                (0, i.jsx)(c.Heading, {
                                    variant: 'heading-lg/bold',
                                    color: 'always-white',
                                    children: C.intl.string(C.t.z8YP2N)
                                })
                            ]
                        }),
                        (0, i.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'text-muted',
                            children: C.intl.string(C.t.IqmRZ2)
                        }),
                        (0, i.jsx)(c.Button, {
                            size: 'large',
                            color: e ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
                            className: E.button,
                            onClick: n,
                            innerClassName: E.innerButton,
                            children: (0, i.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                color: e ? 'always-white' : 'text-normal',
                                children: C.intl.string(C.t.GURBQk)
                            })
                        })
                    ]
                })
            ]
        })
    );
}
