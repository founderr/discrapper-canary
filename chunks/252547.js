a.d(n, {
    Z: function () {
        return p;
    }
}),
    a(47120);
var t = a(735250),
    i = a(470079),
    o = a(120356),
    r = a.n(o),
    l = a(793030),
    s = a(481060),
    c = a(383895),
    d = a(689938),
    u = a(51527),
    m = a(268236);
function p(e) {
    let { entries: n, viewId: a, officialGuildId: o, onClose: p } = e,
        _ = n.length > 7,
        [g, f] = i.useState(!1),
        x = i.useMemo(() => n.slice(0, _ && !g ? 6 : void 0), [n, _, g]);
    return (0, t.jsxs)('div', {
        children: [
            (0, t.jsx)(l.X6, {
                className: u.sectionHeader,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: d.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
            }),
            0 === n.length
                ? (0, t.jsx)(l.xv, {
                      variant: 'text-xs/semibold',
                      color: 'text-primary',
                      className: m.emptyState,
                      children: d.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                  })
                : (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)('div', {
                              className: r()(m.friends, { [m.fadedEntries]: _ && !g }),
                              children: (0, t.jsx)('div', {
                                  className: u.column,
                                  children: x.map((e) =>
                                      (0, t.jsx)(
                                          c.Z,
                                          {
                                              entry: e,
                                              viewId: a,
                                              onClose: p,
                                              officialGuildId: o
                                          },
                                          e.id
                                      )
                                  )
                              })
                          }),
                          _ &&
                              !g &&
                              (0, t.jsxs)(s.Clickable, {
                                  className: m.expandEntriesButton,
                                  onClick: () => f(!0),
                                  children: [
                                      (0, t.jsx)(l.xv, {
                                          variant: 'text-xs/semibold',
                                          color: 'interactive-normal',
                                          children: d.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES
                                      }),
                                      (0, t.jsx)(s.ChevronSmallDownIcon, { size: 'xs' })
                                  ]
                              })
                      ]
                  })
        ]
    });
}
