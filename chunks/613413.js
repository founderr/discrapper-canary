n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(314910),
    c = n(906467),
    d = n(857192),
    f = n(835225),
    _ = n(117795),
    p = n(565384),
    h = n(535504);
function m() {
    let { debugTrackedData: e, impressions: t } = (0, p.Xo)((e) => ({
            debugTrackedData: e.debugTrackedData,
            impressions: e.impressions
        })),
        n = (0, o.e7)([d.default], () => d.default.isAnalyticsDebuggerEnabled),
        a = (0, o.e7)([c.Z], () => c.Z.isDeveloper),
        [m, g] = i.useState(!1),
        { name: E, ...v } = null != e ? e : {},
        I = null != E;
    return a && n
        ? (0, r.jsx)(u.ZP, {
              children: (0, r.jsxs)('div', {
                  className: s()(h.container, {
                      [h.containerMinimized]: m,
                      [h.notTracked]: !I
                  }),
                  children: [
                      (0, r.jsx)(l.Clickable, {
                          className: h.minimizeButton,
                          onClick: () => {
                              g(!m);
                          },
                          children: m ? (0, r.jsx)(f.Z, {}) : (0, r.jsx)(_.Z, {})
                      }),
                      (0, r.jsxs)('div', {
                          className: s()(h.content, { [h.contentMinimized]: m }),
                          children: [
                              (0, r.jsxs)(l.Text, {
                                  className: s()(h.label, { [h.notTracked]: !I }),
                                  variant: 'text-xxs/normal',
                                  children: [
                                      I
                                          ? (0, r.jsx)(l.CircleCheckIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: h.iconTracked
                                            })
                                          : (0, r.jsx)(l.CircleXIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: h.iconNotTracked
                                            }),
                                      null != E ? E : '(untracked)'
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: h.current,
                                  children: JSON.stringify(v, void 0, 2)
                              }),
                              (0, r.jsx)(l.Text, {
                                  className: s()(h.label, { [h.notTracked]: !I }),
                                  variant: 'text-xxs/normal',
                                  children: 'impressions stack'
                              }),
                              (0, r.jsx)('div', {
                                  className: h.stack,
                                  children: JSON.stringify(t, void 0, 2)
                              })
                          ]
                      })
                  ]
              })
          })
        : null;
}
