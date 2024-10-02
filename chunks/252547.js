n.d(a, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var t = n(735250),
    i = n(470079),
    o = n(120356),
    r = n.n(o),
    l = n(793030),
    s = n(481060),
    c = n(383895),
    d = n(689938),
    u = n(51527),
    m = n(268236);
function p(e) {
    let { entries: a, viewId: n, officialGuildId: o, onClose: p } = e,
        g = a.length > 7,
        [f, _] = i.useState(!1),
        x = i.useMemo(() => a.slice(0, g && !f ? 6 : void 0), [a, g, f]);
    return (0, t.jsxs)('div', {
        children: [
            (0, t.jsx)(l.X6, {
                className: u.sectionHeader,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: d.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
            }),
            0 === a.length
                ? (0, t.jsx)(l.xv, {
                      variant: 'text-xs/semibold',
                      color: 'text-primary',
                      className: m.emptyState,
                      children: d.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                  })
                : (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)('div', {
                              className: r()(m.friends, { [m.fadedEntries]: g && !f }),
                              children: (0, t.jsx)('div', {
                                  className: u.column,
                                  children: x.map((e) =>
                                      (0, t.jsx)(
                                          c.Z,
                                          {
                                              entry: e,
                                              viewId: n,
                                              onClose: p,
                                              officialGuildId: o
                                          },
                                          e.id
                                      )
                                  )
                              })
                          }),
                          g &&
                              !f &&
                              (0, t.jsxs)(s.Clickable, {
                                  className: m.expandEntriesButton,
                                  onClick: () => _(!0),
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
