n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(200651);
n(192379);
var i = n(655922),
    a = n(420660),
    s = n(475413),
    o = n(388032);
function l(e) {
    let { activity: t, onAction: n } = e,
        l = (0, i.Z)(t);
    return (0, a.Z)(t) && null != l
        ? (0, r.jsx)(s.tG, {
              text: o.intl.string(o.t['I6JG4+']),
              fullWidth: !0,
              onClick: () => (null == n || n({ action: 'PRESS_WATCH_BUTTON' }), window.open(l))
          })
        : null;
}
