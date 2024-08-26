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
    E = t(605236),
    u = t(626135),
    I = t(617136),
    T = t(497505),
    S = t(471985),
    N = t(341907),
    C = t(46140),
    m = t(981631),
    A = t(689938),
    O = t(74242),
    g = t(66094);
function h() {
    let e = (0, S.Z)(C.dr.USER_SETTINGS_GIFT_INVENTORY),
        s = (0, l.wj)((0, _.ZP)()),
        t = a.useMemo(() => ({ backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png', ')') }), []),
        i = a.useCallback(() => {
            (0, d.xf)(),
                (0, N.navigateToQuestHome)(C.dr.USER_SETTINGS_GIFT_INVENTORY, T.jn.QUEST_HOME_MOVE_CALLOUT),
                u.default.track(m.rMx.QUEST_CONTENT_CLICKED, {
                    cta_name: I.jZ.VIEW_QUESTS,
                    ...(0, I.mH)(T.jn.QUEST_HOME_MOVE_CALLOUT)
                });
        }, []);
    return (a.useCallback(() => {
        (0, E.EW)(o.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME);
    }, []),
    e)
        ? ((0, E.un)(o.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME),
          (0, n.jsxs)('div', {
              className: r()(O.container),
              style: t,
              children: [
                  !1,
                  (0, n.jsxs)('div', {
                      className: O.textContainer,
                      children: [
                          (0, n.jsxs)('div', {
                              className: O.headerContainer,
                              children: [
                                  (0, n.jsx)('img', {
                                      alt: '',
                                      src: g,
                                      className: O.icon
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
                              color: s ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
                              className: O.button,
                              onClick: i,
                              innerClassName: O.innerButton,
                              children: (0, n.jsx)(c.Text, {
                                  variant: 'text-md/medium',
                                  color: s ? 'always-white' : 'text-normal',
                                  children: A.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_BUTTON
                              })
                          })
                      ]
                  })
              ]
          }))
        : null;
}
