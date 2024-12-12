r.d(n, {
    C: function () {
        return I;
    },
    Z: function () {
        return b;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(481060),
    o = r(230711),
    l = r(394821),
    u = r(841784),
    c = r(833664),
    d = r(503438),
    f = r(579630),
    _ = r(26033),
    h = r(594174),
    p = r(324745),
    m = r(981631),
    g = r(388032);
let E = () => o.Z.open(m.oAB.CONNECTIONS, null);
function v(e) {
    let { activity: n, onOpenGameSettings: r } = e;
    return (0, f.Z)(n) || (0, d.Z)(n) || (0, l.Z)(n) ? E : (0, c.Z)(n) && !(0, u.Z)(n) ? r : null;
}
function I(e) {
    let { entry: n, onOpenGameSettings: r } = e;
    return (0, _.aA)(n) || (0, _.y0)(n) || (0, _.dU)(n) ? E : (0, _.dX)(n) ? r : null;
}
function T(e) {
    let { activity: n, entry: r, onOpenGameSettings: i } = e;
    return null != r
        ? I({
              entry: r,
              onOpenGameSettings: i
          })
        : null != n
          ? v({
                activity: n,
                onOpenGameSettings: i
            })
          : null;
}
function b(e) {
    let { user: n, activity: r, entry: o, onAction: l, onClose: u } = e,
        c = (0, p.Z)({ onClose: u });
    if (
        !(0, a.e7)([h.default], () => {
            var e;
            return (null === (e = h.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === n.id;
        })
    )
        return null;
    let d = T({
        activity: r,
        entry: o,
        onOpenGameSettings: c
    });
    return null == d
        ? null
        : (0, i.jsx)(s.MenuItem, {
              id: 'manage-privacy',
              label: g.intl.string(g.t.anfNPT),
              action: () => {
                  null == l || l({ action: 'PRESS_MANAGE_PRIVACY_MENU_ITEM' }), d(), null == u || u();
              }
          });
}
