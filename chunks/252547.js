a.d(n, {
    Z: function () {
        return E;
    }
}),
    a(47120);
var t = a(735250),
    r = a(470079),
    s = a(120356),
    i = a.n(s),
    o = a(793030),
    l = a(481060),
    c = a(383895),
    d = a(689938),
    u = a(51527),
    _ = a(268236);
function E(e) {
    let { entries: n, viewId: a, officialGuildId: s, onClose: E } = e,
        m = n.length > 7,
        [I, A] = r.useState(!1),
        p = r.useMemo(() => n.slice(0, m && !I ? 6 : void 0), [n, m, I]);
    return (0, t.jsxs)('div', {
        children: [
            (0, t.jsx)(o.X6, {
                className: u.sectionHeader,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: d.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
            }),
            0 === n.length
                ? (0, t.jsx)(o.xv, {
                      variant: 'text-xs/semibold',
                      color: 'text-primary',
                      className: _.emptyState,
                      children: d.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                  })
                : (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)('div', {
                              className: i()(_.friends, { [_.fadedEntries]: m && !I }),
                              children: (0, t.jsx)('div', {
                                  className: u.column,
                                  children: p.map((e) =>
                                      (0, t.jsx)(
                                          c.Z,
                                          {
                                              entry: e,
                                              viewId: a,
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
                              (0, t.jsxs)(l.Clickable, {
                                  className: _.expandEntriesButton,
                                  onClick: () => A(!0),
                                  children: [
                                      (0, t.jsx)(o.xv, {
                                          variant: 'text-xs/semibold',
                                          color: 'interactive-normal',
                                          children: d.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES
                                      }),
                                      (0, t.jsx)(l.ChevronSmallDownIcon, { size: 'xs' })
                                  ]
                              })
                      ]
                  })
        ]
    });
}
