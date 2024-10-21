t.d(n, {
    Z: function () {
        return c;
    }
}),
    t(47120);
var i = t(200651);
t(192379);
var r = t(442837),
    o = t(481060),
    a = t(740492),
    u = t(27584),
    s = t(295510),
    l = t(394059),
    d = t(65154),
    E = t(689938);
function c(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
        [t, c, _] = (0, u.Z)(e, n),
        I = (0, r.e7)([a.ZP], () => a.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return t
        ? (0, i.jsx)(o.MenuCheckboxItem, {
              id: 'self-video-hide',
              label: E.Z.Messages.SHOW_SELF_VIDEO,
              checked: !c,
              action: () => {
                  if (I || c) return _(!c);
                  (0, o.openModal)((e) =>
                      (0, i.jsx)(s.Z, {
                          ...e,
                          type: l.K.VIDEO,
                          onConfirm: () => _(!c)
                      })
                  );
              }
          })
        : null;
}
