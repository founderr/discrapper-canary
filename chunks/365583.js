n.d(t, {
    C: function () {
        return E;
    },
    Z: function () {
        return v;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(230711),
    o = n(394821),
    l = n(841784),
    u = n(833664),
    c = n(503438),
    d = n(579630),
    f = n(26033),
    _ = n(594174),
    p = n(324745),
    h = n(981631),
    m = n(388032);
let g = () => s.Z.open(h.oAB.CONNECTIONS, null);
function E(e) {
    let { entry: t, onOpenGameSettings: n } = e;
    return (0, f.aA)(t) || (0, f.y0)(t) || (0, f.dU)(t) ? g : (0, f.dX)(t) ? n : null;
}
function v(e) {
    let { user: t, activity: n, entry: s, onAction: f, onClose: h } = e,
        v = (0, p.Z)({ onClose: h });
    if (
        !(0, i.e7)([_.default], () => {
            var e;
            return (null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === t.id;
        })
    )
        return null;
    let b = (function (e) {
        let { activity: t, entry: n, onOpenGameSettings: r } = e;
        return null != n
            ? E({
                  entry: n,
                  onOpenGameSettings: r
              })
            : null != t
              ? (function (e) {
                    let { activity: t, onOpenGameSettings: n } = e;
                    return (0, d.Z)(t) || (0, c.Z)(t) || (0, o.Z)(t) ? g : (0, u.Z)(t) && !(0, l.Z)(t) ? n : null;
                })({
                    activity: t,
                    onOpenGameSettings: r
                })
              : null;
    })({
        activity: n,
        entry: s,
        onOpenGameSettings: v
    });
    return null == b
        ? null
        : (0, r.jsx)(a.MenuItem, {
              id: 'manage-privacy',
              label: m.intl.string(m.t.anfNPT),
              action: () => {
                  null == f || f({ action: 'PRESS_MANAGE_PRIVACY_MENU_ITEM' }), b(), null == h || h();
              }
          });
}
