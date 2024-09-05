t.d(n, {
    Z: function () {
        return E;
    }
}),
    t(47120);
var i = t(735250);
t(470079);
var r = t(442837),
    a = t(481060),
    o = t(740492),
    l = t(27584),
    u = t(295510),
    d = t(394059),
    s = t(65154),
    c = t(689938);
function E(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Yn.DEFAULT,
        [t, E, I] = (0, l.Z)(e, n),
        _ = (0, r.e7)([o.ZP], () => o.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return t
        ? (0, i.jsx)(a.MenuCheckboxItem, {
              id: 'self-video-hide',
              label: c.Z.Messages.SHOW_SELF_VIDEO,
              checked: !E,
              action: () => {
                  if (_ || E) return I(!E);
                  (0, a.openModal)((e) =>
                      (0, i.jsx)(u.Z, {
                          ...e,
                          type: d.K.VIDEO,
                          onConfirm: () => I(!E)
                      })
                  );
              }
          })
        : null;
}
