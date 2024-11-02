e.d(n, {
    Z: function () {
        return E;
    }
}),
    e(47120);
var i = e(200651);
e(192379);
var r = e(442837),
    o = e(481060),
    a = e(740492),
    u = e(27584),
    l = e(295510),
    d = e(394059),
    s = e(65154),
    c = e(388032);
function E(t) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Yn.DEFAULT,
        [e, E, f] = (0, u.Z)(t, n),
        I = (0, r.e7)([a.ZP], () => a.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return e
        ? (0, i.jsx)(o.MenuCheckboxItem, {
              id: 'self-video-hide',
              label: c.intl.string(c.t.MH8ESU),
              checked: !E,
              action: () => {
                  if (I || E) return f(!E);
                  (0, o.openModal)((t) =>
                      (0, i.jsx)(l.Z, {
                          ...t,
                          type: d.K.VIDEO,
                          onConfirm: () => f(!E)
                      })
                  );
              }
          })
        : null;
}
