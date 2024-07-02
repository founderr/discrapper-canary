t.d(n, {
    Z: function () {
        return l;
    }
});
var i = t(735250);
t(470079);
var a = t(993409), r = t(901952), o = t(689938), s = t(335182);
function l(e) {
    let {
        user: n,
        hideMessageInput: t,
        hideExampleButton: l
    } = e;
    return t ? (0, i.jsx)('footer', {
        className: s.footer,
        children: !l && (0, i.jsx)(a.Z, {
            variant: 'text',
            text: o.Z.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON,
            fullWidth: !0
        })
    }) : (0, i.jsx)('footer', {
        inert: '',
        className: s.footer,
        children: (0, i.jsx)(r.Z, { user: n })
    });
}
