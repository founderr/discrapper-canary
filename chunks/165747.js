a.d(n, {
    Z: function () {
        return t;
    }
});
var i = a(735250);
a(470079);
var s = a(475413),
    r = a(955418),
    o = a(689938),
    l = a(451563);
function t(e) {
    let { user: n, hideMessageInput: a, hideExampleButton: t } = e;
    return a
        ? (0, i.jsx)('footer', {
              className: l.footer,
              children:
                  !t &&
                  (0, i.jsx)(s.tG, {
                      text: o.Z.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON,
                      fullWidth: !0
                  })
          })
        : (0, i.jsx)('footer', {
              inert: '',
              className: l.footer,
              children: (0, i.jsx)(r.Z, { user: n })
          });
}
