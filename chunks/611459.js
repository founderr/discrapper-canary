n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var s = n(246841),
    a = n(620662),
    l = n(503438),
    r = n(981631),
    o = n(120297);
function c(e) {
    let { activity: t, user: n, source: c, look: u, color: d, onAction: h } = e;
    return null != t && (0, a.Z)(t, r.xjy.PLAY) && (0, l.Z)(t)
        ? (0, i.jsx)(
              s.Z,
              {
                  className: o.button,
                  size: o.buttonSize,
                  look: u,
                  color: d,
                  fullWidth: !0,
                  activity: t,
                  user: n,
                  source: c,
                  onAction: h
              },
              'play'
          )
        : null;
}
