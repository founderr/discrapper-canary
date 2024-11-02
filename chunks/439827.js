e.d(t, {
    Z: function () {
        return d;
    }
});
var l = e(200651);
e(192379);
var r = e(442837),
    u = e(481060),
    i = e(434404),
    a = e(357156),
    o = e(430824),
    s = e(981631),
    c = e(388032);
function d(n, t) {
    let e = (0, r.e7)([o.Z], () => (null != n ? o.Z.getGuild(n) : null)),
        { canCreateExpressions: d, canManageAllExpressions: p } = (0, a.XJ)(e);
    return null != n && d && p
        ? (0, l.jsx)(u.MenuItem, {
              id: c.intl.string(c.t['154/bG']),
              label: c.intl.string(c.t['154/bG']),
              action: () => {
                  i.Z.open(n, s.pNK.SOUNDBOARD), null == t || t();
              }
          })
        : null;
}
