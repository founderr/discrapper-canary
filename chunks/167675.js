t.d(e, {
    Z: function () {
        return f;
    }
}),
    t(47120);
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    u = t(740492),
    a = t(27584),
    d = t(295510),
    o = t(394059),
    s = t(65154),
    c = t(388032);
function f(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Yn.DEFAULT,
        [t, f, _] = (0, a.Z)(n, e),
        E = (0, l.e7)([u.ZP], () => u.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return t
        ? (0, i.jsx)(r.MenuCheckboxItem, {
              id: 'self-video-hide',
              label: c.intl.string(c.t.MH8ESU),
              checked: !f,
              action: () => {
                  if (E || f) return _(!f);
                  (0, r.openModal)((n) =>
                      (0, i.jsx)(d.Z, {
                          ...n,
                          type: o.K.VIDEO,
                          onConfirm: () => _(!f)
                      })
                  );
              }
          })
        : null;
}
