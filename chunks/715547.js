n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(655922),
    a = n(420660),
    o = n(475413),
    s = n(689938);
function l(e) {
    let { activity: t, onAction: n } = e,
        l = (0, i.Z)(t);
    return (0, a.Z)(t) && null != l
        ? (0, r.jsx)(o.tG, {
              text: s.Z.Messages.WATCH,
              fullWidth: !0,
              onClick: () => (null == n || n({ action: 'PRESS_WATCH_BUTTON' }), window.open(l))
          })
        : null;
}
