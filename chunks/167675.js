t.d(e, {
    Z: function () {
        return f;
    }
}),
    t(47120);
var i = t(200651);
t(192379);
var r = t(442837),
    l = t(481060),
    u = t(740492),
    a = t(27584),
    o = t(295510),
    d = t(394059),
    c = t(65154),
    s = t(388032);
function f(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
        [t, f, _] = (0, a.Z)(n, e),
        E = (0, r.e7)([u.ZP], () => u.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return t
        ? (0, i.jsx)(l.MenuCheckboxItem, {
              id: 'self-video-hide',
              label: s.intl.string(s.t.MH8ESU),
              checked: !f,
              action: () => {
                  if (E || f) return _(!f);
                  (0, l.openModal)((n) =>
                      (0, i.jsx)(o.Z, {
                          ...n,
                          type: d.K.VIDEO,
                          onConfirm: () => _(!f)
                      })
                  );
              }
          })
        : null;
}
