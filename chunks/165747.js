t.d(n, {
    Z: function () {
        return s;
    }
});
var i = t(200651);
t(192379);
var a = t(475413),
    r = t(955418),
    o = t(388032),
    l = t(653134);
function s(e) {
    let { user: n, hideMessageInput: t, hideExampleButton: s } = e;
    return t
        ? (0, i.jsx)('footer', {
              className: l.footer,
              children:
                  !s &&
                  (0, i.jsx)(a.tG, {
                      text: o.intl.string(o.t.hZkfwc),
                      fullWidth: !0
                  })
          })
        : (0, i.jsx)('footer', {
              inert: '',
              className: l.footer,
              children: (0, i.jsx)(r.Z, { user: n })
          });
}
