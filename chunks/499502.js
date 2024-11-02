i.d(t, {
    Z: function () {
        return u;
    }
});
var e = i(200651);
i(192379);
var l = i(481060),
    a = i(695346),
    r = i(572004),
    d = i(388032);
function u(n, t) {
    let i = t.primarySkuId,
        u = a.Sb.useSetting();
    return !__OVERLAY__ && u && r.wS
        ? (0, e.jsxs)(l.MenuItem, {
              id: 'application-dev',
              label: d.intl.string(d.t.OpuAlJ),
              action: () => (0, r.JG)(t.id),
              children: [
                  (0, e.jsx)(l.MenuItem, {
                      id: 'app-id',
                      label: d.intl.string(d.t.qSHsho),
                      action: () => (0, r.JG)(t.id)
                  }),
                  null != n
                      ? (0, e.jsx)(l.MenuItem, {
                            id: 'branch-id',
                            label: d.intl.string(d.t.g7oyys),
                            action: () => (0, r.JG)(n.branchId)
                        })
                      : null,
                  null != i
                      ? (0, e.jsx)(l.MenuItem, {
                            id: 'sku-id',
                            label: d.intl.string(d.t.hReUdH),
                            action: () => (0, r.JG)(i)
                        })
                      : null
              ]
          })
        : null;
}
