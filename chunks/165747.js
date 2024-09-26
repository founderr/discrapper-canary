n.d(t, {
    Z: function () {
        return o;
    }
});
var s = n(735250);
n(470079);
var a = n(475413),
    r = n(955418),
    i = n(689938),
    l = n(451563);
function o(e) {
    let { user: t, hideMessageInput: n, hideExampleButton: o } = e;
    return n
        ? (0, s.jsx)('footer', {
              className: l.footer,
              children:
                  !o &&
                  (0, s.jsx)(a.tG, {
                      text: i.Z.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON,
                      fullWidth: !0
                  })
          })
        : (0, s.jsx)('footer', {
              inert: '',
              className: l.footer,
              children: (0, s.jsx)(r.Z, { user: t })
          });
}
