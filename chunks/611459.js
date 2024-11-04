n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(246841),
    r = n(620662),
    s = n(503438),
    a = n(981631),
    o = n(968333);
function c(e) {
    let { activity: t, user: n, source: c, look: u, color: d, onAction: h } = e;
    return null != t && (0, r.Z)(t, a.xjy.PLAY) && (0, s.Z)(t)
        ? (0, i.jsx)(
              l.Z,
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
