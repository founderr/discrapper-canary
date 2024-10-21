a.d(n, {
    Z: function () {
        return r;
    }
});
var t = a(200651);
a(192379);
var s = a(475413),
    c = a(955418),
    o = a(689938),
    i = a(451563);
function r(e) {
    let { user: n, hideMessageInput: a, hideExampleButton: r } = e;
    return a
        ? (0, t.jsx)('footer', {
              className: i.footer,
              children:
                  !r &&
                  (0, t.jsx)(s.tG, {
                      text: o.Z.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON,
                      fullWidth: !0
                  })
          })
        : (0, t.jsx)('footer', {
              inert: '',
              className: i.footer,
              children: (0, t.jsx)(c.Z, { user: n })
          });
}
