e.d(t, {
    Z: function () {
        return l;
    }
});
var i = e(200651);
e(192379);
var a = e(442837),
    c = e(481060),
    u = e(978085),
    r = e(283595),
    d = e(417363);
function l(n, t) {
    let e = (0, a.e7)([d.Z], () => d.Z.getLaunchOptions(n.id, n.branchId)),
        l = (0, a.e7)([r.Z], () => r.Z.getActiveLaunchOptionId(n.id, n.branchId));
    return e.length < 2
        ? null
        : e.map((e) =>
              (0, i.jsx)(
                  c.MenuItem,
                  {
                      id: e.id,
                      label: e.name,
                      action: (i) => {
                          e.id !== l && u.ul(n.id, n.branchId, e.id), null == t || t(i);
                      }
                  },
                  e.id
              )
          );
}
