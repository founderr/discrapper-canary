n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(740492),
    s = n(27584),
    l = n(295510),
    u = n(394059),
    d = n(65154),
    c = n(689938);
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
        [n, I, f] = (0, s.Z)(e, t),
        E = (0, i.e7)([o.ZP], () => o.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return n
        ? (0, r.jsx)(a.MenuCheckboxItem, {
              id: 'self-video-hide',
              label: c.Z.Messages.SHOW_SELF_VIDEO,
              checked: !I,
              action: () => {
                  if (E || I) return f(!I);
                  (0, a.openModal)((e) =>
                      (0, r.jsx)(l.Z, {
                          ...e,
                          type: u.K.VIDEO,
                          onConfirm: () => f(!I)
                      })
                  );
              }
          })
        : null;
}
