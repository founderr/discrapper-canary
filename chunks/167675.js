t.d(n, {
    Z: function () {
        return I;
    }
}),
    t(47120);
var i = t(735250);
t(470079);
var r = t(442837),
    a = t(481060),
    s = t(740492),
    o = t(27584),
    d = t(295510),
    l = t(394059),
    u = t(65154),
    c = t(689938);
function I(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Yn.DEFAULT,
        [t, I, E] = (0, o.Z)(e, n),
        T = (0, r.e7)([s.ZP], () => s.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return t
        ? (0, i.jsx)(a.MenuCheckboxItem, {
              id: 'self-video-hide',
              label: c.Z.Messages.SHOW_SELF_VIDEO,
              checked: !I,
              action: () => {
                  if (T || I) return E(!I);
                  (0, a.openModal)((e) =>
                      (0, i.jsx)(d.Z, {
                          ...e,
                          type: l.K.VIDEO,
                          onConfirm: () => E(!I)
                      })
                  );
              }
          })
        : null;
}
