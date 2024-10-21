n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var a = n(200651),
    r = n(192379),
    s = n(120356),
    i = n.n(s),
    o = n(793030),
    l = n(481060),
    c = n(383895),
    d = n(689938),
    u = n(51527),
    _ = n(268236);
function E(e) {
    let { entries: t, viewId: n, officialGuildId: s, onClose: E } = e,
        m = t.length > 7,
        [I, A] = r.useState(!1),
        p = r.useMemo(() => t.slice(0, m && !I ? 6 : void 0), [t, m, I]);
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsx)(o.X6, {
                className: u.sectionHeader,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: d.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
            }),
            0 === t.length
                ? (0, a.jsx)(o.xv, {
                      variant: 'text-xs/semibold',
                      color: 'text-primary',
                      className: _.emptyState,
                      children: d.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)('div', {
                              className: i()(_.friends, { [_.fadedEntries]: m && !I }),
                              children: (0, a.jsx)('div', {
                                  className: u.column,
                                  children: p.map((e) =>
                                      (0, a.jsx)(
                                          c.Z,
                                          {
                                              entry: e,
                                              viewId: n,
                                              onClose: E,
                                              officialGuildId: s
                                          },
                                          e.id
                                      )
                                  )
                              })
                          }),
                          m &&
                              !I &&
                              (0, a.jsxs)(l.Clickable, {
                                  className: _.expandEntriesButton,
                                  onClick: () => A(!0),
                                  children: [
                                      (0, a.jsx)(o.xv, {
                                          variant: 'text-xs/semibold',
                                          color: 'interactive-normal',
                                          children: d.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES
                                      }),
                                      (0, a.jsx)(l.ChevronSmallDownIcon, { size: 'xs' })
                                  ]
                              })
                      ]
                  })
        ]
    });
}
