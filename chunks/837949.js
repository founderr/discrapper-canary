t.d(n, {
    Z: function () {
        return g;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    a = t(481060),
    r = t(430824),
    o = t(594174),
    u = t(724213),
    d = t(398758),
    c = t(981631),
    s = t(388032);
function g(e) {
    let n = (0, d.DM)(e),
        t = (0, l.e7)([r.Z], () => r.Z.getGuild(e)),
        g = (0, l.e7)([o.default], () => o.default.getCurrentUser());
    return null != g && null != t && (t.hasFeature(c.oNc.COMMUNITY) || g.isStaff())
        ? (0, i.jsx)(a.MenuCheckboxItem, {
              id: 'opt-in',
              label: s.intl.string(s.t.FB2ZZW),
              checked: !n,
              action: () => {
                  (0, u.kH)(e);
              }
          })
        : null;
}
