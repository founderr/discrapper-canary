n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120);
var a = n(200651),
    r = n(192379),
    s = n(120356),
    i = n.n(s),
    o = n(657707),
    l = n(793030),
    c = n(692547),
    d = n(481060),
    u = n(885006),
    _ = n(810568),
    E = n(221370),
    m = n(689938),
    I = n(51527),
    p = n(110367);
function A(e) {
    let { detectedGame: t, trackAction: n } = e,
        [s, A] = r.useState((null == t ? void 0 : t.summaryLocalized) != null),
        [g, T] = r.useState(!0),
        [f, N] = r.useState(!1),
        O = r.useRef(null),
        { width: R, height: h } = (0, u.Z)();
    return (r.useEffect(() => {
        let e = O.current;
        null != e && N(e.scrollHeight - e.clientHeight > 1 || !g);
    }, [O, R, h, g]),
    null == t.summary)
        ? null
        : (0, a.jsxs)('div', {
              className: i()(I.column, I.gapMd),
              children: [
                  null != t.summaryLocalized &&
                      (0, a.jsxs)('div', {
                          className: i()(I.row, I.gapSm),
                          children: [
                              (0, a.jsx)(o.SxY, {
                                  color: c.Z.colors.HEADER_SECONDARY,
                                  size: 'xs'
                              }),
                              (0, a.jsx)(l.xv, {
                                  variant: 'text-xs/medium',
                                  color: 'header-secondary',
                                  children: s ? m.Z.Messages.MACHINE_TRANSLATED_TRANSLATED.format({ onShowOriginal: () => A(!1) }) : m.Z.Messages.MACHINE_TRANSLATED_ORIGINAL.format({ onShowTranslated: () => A(!0) })
                              })
                          ]
                      }),
                  (0, a.jsx)(l.xv, {
                      ref: O,
                      lineClamp: g ? 8 : void 0,
                      variant: 'text-sm/normal',
                      children: s ? t.summaryLocalized : t.summary
                  }),
                  f &&
                      (0, a.jsx)(d.Clickable, {
                          className: I.clickable,
                          onClick: () => {
                              n(g ? _.as.ShowMore : _.as.ShowLess), T(!g);
                          },
                          children: (0, a.jsx)(l.xv, {
                              variant: 'text-sm/semibold',
                              children: g ? m.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : m.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                          })
                      }),
                  (0, a.jsx)(E.Z, {
                      className: p.platforms,
                      detectedGame: t
                  })
              ]
          });
}
