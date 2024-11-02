i.d(t, {
    Z: function () {
        return o;
    }
});
var e = i(200651);
i(192379);
var l = i(481060),
    a = i(58642),
    r = i(626135),
    d = i(630388),
    u = i(981631),
    c = i(388032);
function o(n) {
    return null == n
        ? null
        : (0, e.jsx)(l.MenuCheckboxItem, {
              id: 'private',
              label: c.intl.string(c.t.fHDNJi),
              action: function () {
                  if (null == n) return;
                  let t = (0, d.x9)(n.getFlags(), u.eHb.PRIVATE);
                  a.h(n.id, n.branchId, t),
                      r.default.track(u.rMx.APPLICATION_SETTINGS_UPDATED, {
                          private_enabled: (0, d.yE)(t, u.eHb.PRIVATE),
                          ...n.getAnalyticsData()
                      });
              },
              checked: n.hasFlag(u.eHb.PRIVATE)
          });
}
