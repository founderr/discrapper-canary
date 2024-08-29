t.d(s, {
    Z: function () {
        return g;
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
    E = t(605236),
    u = t(626135),
    I = t(617136),
    T = t(497505),
    S = t(341907),
    N = t(46140),
    C = t(981631),
    m = t(689938),
    A = t(74242),
    O = t(66094);
function g() {
    let e = (0, l.wj)((0, _.ZP)()),
        s = a.useMemo(() => ({ backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png', ')') }), []),
        t = a.useCallback(() => {
            (0, d.xf)(),
                (0, S.navigateToQuestHome)(N.dr.USER_SETTINGS_GIFT_INVENTORY, T.jn.QUEST_HOME_MOVE_CALLOUT),
                u.default.track(C.rMx.QUEST_CONTENT_CLICKED, {
                    cta_name: I.jZ.VIEW_QUESTS,
                    ...(0, I.mH)(T.jn.QUEST_HOME_MOVE_CALLOUT)
                });
        }, []);
    return (
        a.useCallback(() => {
            (0, E.EW)(o.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME);
        }, []),
        (0, E.un)(o.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME),
        (0, n.jsxs)('div', {
            className: r()(A.container),
            style: s,
            children: [
                !1,
                (0, n.jsxs)('div', {
                    className: A.textContainer,
                    children: [
                        (0, n.jsxs)('div', {
                            className: A.headerContainer,
                            children: [
                                (0, n.jsx)('img', {
                                    alt: '',
                                    src: O,
                                    className: A.icon
                                }),
                                (0, n.jsx)(c.Heading, {
                                    variant: 'heading-lg/bold',
                                    color: 'always-white',
                                    children: m.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_TITLE
                                })
                            ]
                        }),
                        (0, n.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'text-muted',
                            children: m.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_DESCRIPTION_V2
                        }),
                        (0, n.jsx)(c.Button, {
                            size: 'large',
                            color: e ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
                            className: A.button,
                            onClick: t,
                            innerClassName: A.innerButton,
                            children: (0, n.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                color: e ? 'always-white' : 'text-normal',
                                children: m.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_BUTTON
                            })
                        })
                    ]
                })
            ]
        })
    );
}
