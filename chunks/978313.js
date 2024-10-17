n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var a = n(735250),
    r = n(470079),
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
    A = n(110367);
function p(e) {
    let { detectedGame: t, trackAction: n } = e,
        [s, p] = r.useState((null == t ? void 0 : t.summaryLocalized) != null),
        [g, f] = r.useState(!0),
        [T, O] = r.useState(!1),
        N = r.useRef(null),
        { width: R, height: P } = (0, u.Z)();
    return (r.useEffect(() => {
        let e = N.current;
        null != e && O(e.scrollHeight - e.clientHeight > 1 || !g);
    }, [N, R, P, g]),
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
                                  children: s ? m.Z.Messages.MACHINE_TRANSLATED_TRANSLATED.format({ onShowOriginal: () => p(!1) }) : m.Z.Messages.MACHINE_TRANSLATED_ORIGINAL.format({ onShowTranslated: () => p(!0) })
                              })
                          ]
                      }),
                  (0, a.jsx)(l.xv, {
                      ref: N,
                      lineClamp: g ? 8 : void 0,
                      variant: 'text-sm/normal',
                      children: s ? t.summaryLocalized : t.summary
                  }),
                  T &&
                      (0, a.jsx)(d.Clickable, {
                          className: I.clickable,
                          onClick: () => {
                              n(g ? _.as.ShowMore : _.as.ShowLess), f(!g);
                          },
                          children: (0, a.jsx)(l.xv, {
                              variant: 'text-sm/semibold',
                              children: g ? m.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : m.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                          })
                      }),
                  (0, a.jsx)(E.Z, {
                      className: A.platforms,
                      detectedGame: t
                  })
              ]
          });
}
