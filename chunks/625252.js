t.d(s, {
    Z: function () {
        return h;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(704215),
    l = t(780384),
    c = t(481060),
    d = t(37234),
    _ = t(410030),
    u = t(605236),
    E = t(626135),
    T = t(617136),
    S = t(497505),
    I = t(341907),
    N = t(46140),
    C = t(981631),
    A = t(689938),
    m = t(936598),
    g = t(66094);
function h() {
    let e = (0, l.wj)((0, _.ZP)()),
        s = a.useMemo(() => ({ backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png', ')') }), []),
        t = a.useCallback(() => {
            (0, d.xf)(),
                (0, I.navigateToQuestHome)(N.dr.USER_SETTINGS_GIFT_INVENTORY, S.jn.QUEST_HOME_MOVE_CALLOUT),
                E.default.track(C.rMx.QUEST_CONTENT_CLICKED, {
                    cta_name: T.jZ.VIEW_QUESTS,
                    ...(0, T.mH)(S.jn.QUEST_HOME_MOVE_CALLOUT)
                });
        }, []);
    return (
        a.useCallback(() => {
            (0, u.EW)(o.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME);
        }, []),
        (0, u.un)(o.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME),
        (0, n.jsxs)('div', {
            className: r()(m.container),
            style: s,
            children: [
                !1,
                (0, n.jsxs)('div', {
                    className: m.textContainer,
                    children: [
                        (0, n.jsxs)('div', {
                            className: m.headerContainer,
                            children: [
                                (0, n.jsx)('img', {
                                    alt: '',
                                    src: g,
                                    className: m.icon
                                }),
                                (0, n.jsx)(c.Heading, {
                                    variant: 'heading-lg/bold',
                                    color: 'always-white',
                                    children: A.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_TITLE
                                })
                            ]
                        }),
                        (0, n.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'text-muted',
                            children: A.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_DESCRIPTION_V2
                        }),
                        (0, n.jsx)(c.Button, {
                            size: 'large',
                            color: e ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
                            className: m.button,
                            onClick: t,
                            innerClassName: m.innerButton,
                            children: (0, n.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                color: e ? 'always-white' : 'text-normal',
                                children: A.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_BUTTON
                            })
                        })
                    ]
                })
            ]
        })
    );
}
