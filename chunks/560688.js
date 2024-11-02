n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(131951),
    s = n(65154),
    o = n(388032);
function l(e) {
    a.Z.supports(s.AN.VIDEO)
        ? (0, i.openModalLazy)(async () => {
              let { default: t } = await n.e('67753').then(n.bind(n, 873809));
              return (n) =>
                  (0, r.jsx)(t, {
                      ...n,
                      header: o.intl.string(o.t['8jSzSU']),
                      body: o.intl.string(o.t.bhqSWl),
                      confirmText: o.intl.string(o.t.BddRzc),
                      onConfirm: e
                  });
          })
        : (0, i.openModalLazy)(async () => {
              let { default: t } = await n.e('67753').then(n.bind(n, 873809));
              return (a) =>
                  (0, r.jsx)(t, {
                      ...a,
                      header: o.intl.string(o.t.XLw6FB),
                      body: o.intl.string(o.t.wVjKGh),
                      confirmText: o.intl.string(o.t.BK8LKy),
                      onConfirm: () => {
                          null == e || e(),
                              (0, i.openModalLazy)(async () => {
                                  let { default: e } = await n.e('82935').then(n.bind(n, 431583));
                                  return (t) =>
                                      (0, r.jsx)(e, {
                                          source: 'Video unsupported browser',
                                          ...t
                                      });
                              });
                      }
                  });
          });
}
