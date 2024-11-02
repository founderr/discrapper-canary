n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(740492),
    s = n(984014),
    o = n(295510),
    c = n(394059),
    u = n(388032);
function d(e, t) {
    let [n, d, h] = (0, s.Z)(e, t),
        m = (0, l.e7)([a.ZP], () => a.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return n
        ? (0, i.jsx)(r.MenuCheckboxItem, {
              id: 'self-stream-hide',
              label: u.intl.string(u.t.aol7iY),
              checked: !d,
              action: () => {
                  if (m || d) return h(!d);
                  (0, r.openModal)((e) =>
                      (0, i.jsx)(o.Z, {
                          ...e,
                          type: c.K.STREAM,
                          onConfirm: () => h(!d)
                      })
                  );
              }
          })
        : null;
}
