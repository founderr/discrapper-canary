e.d(t, {
    Z: function () {
        return c;
    }
});
var i = e(200651);
e(192379);
var l = e(442837),
    a = e(481060),
    r = e(703656),
    u = e(914010),
    d = e(981631),
    o = e(388032);
function c(n) {
    let t = (0, l.e7)([u.Z], () => u.Z.getGuildId());
    return __OVERLAY__ || t !== d.I_8
        ? null
        : (0, i.jsx)(a.MenuItem, {
              id: 'go-to-original-guild',
              label: o.intl.string(o.t.WYj55e),
              action: function () {
                  (0, r.XU)(n.guild_id, n.id);
              }
          });
}
