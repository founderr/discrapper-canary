n.d(t, {
    C: function () {
        return T;
    },
    Z: function () {
        return S;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(230711),
    s = n(394821),
    l = n(841784),
    u = n(833664),
    c = n(503438),
    d = n(579630),
    _ = n(26033),
    E = n(594174),
    f = n(324745),
    h = n(981631),
    p = n(689938);
let m = () => o.Z.open(h.oAB.CONNECTIONS, null);
function I(e) {
    let { activity: t, onOpenGameSettings: n } = e;
    return (0, d.Z)(t) || (0, c.Z)(t) || (0, s.Z)(t) ? m : (0, u.Z)(t) && !(0, l.Z)(t) ? n : null;
}
function T(e) {
    let { entry: t, onOpenGameSettings: n } = e;
    return (0, _.aA)(t) || (0, _.y0)(t) || (0, _.dU)(t) ? m : (0, _.dX)(t) ? n : null;
}
function g(e) {
    let { activity: t, entry: n, onOpenGameSettings: r } = e;
    return null != n
        ? T({
              entry: n,
              onOpenGameSettings: r
          })
        : null != t
          ? I({
                activity: t,
                onOpenGameSettings: r
            })
          : null;
}
function S(e) {
    let { user: t, activity: n, entry: o, onAction: s, onClose: l } = e,
        u = (0, f.Z)({ onClose: l });
    if (
        !(0, i.e7)([E.default], () => {
            var e;
            return (null === (e = E.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === t.id;
        })
    )
        return null;
    let c = g({
        activity: n,
        entry: o,
        onOpenGameSettings: u
    });
    return null == c
        ? null
        : (0, r.jsx)(a.MenuItem, {
              id: 'manage-privacy',
              label: p.Z.Messages.USER_ACTIVITY_MANAGE_PRIVACY,
              action: () => {
                  null == s || s({ action: 'PRESS_MANAGE_PRIVACY_MENU_ITEM' }), c(), null == l || l();
              }
          });
}
