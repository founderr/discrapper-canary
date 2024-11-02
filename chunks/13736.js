e.d(t, {
    Z: function () {
        return u;
    }
});
var i = e(200651);
e(192379);
var r = e(481060),
    a = e(787014),
    l = e(665906),
    o = e(388032);
function u(n) {
    let t = (0, l.C7)(n),
        e = (0, l.$R)(n),
        u = (0, l.Gu)(n);
    return !t || !e || u || __OVERLAY__
        ? null
        : (0, i.jsx)(r.MenuItem, {
              id: 'edit-thread',
              label: n.isForumPost() ? o.intl.string(o.t.NP1yHB) : o.intl.string(o.t['2Mk1TE']),
              action: () => {
                  (0, r.closeAllModals)(), a.ZP.open(n.id);
              }
          });
}
