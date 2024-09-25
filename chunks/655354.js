n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    u = n(689938),
    c = n(521348);
function d(e) {
    let { className: t, onJump: n } = e,
        [r, o] = a.useState(!1),
        d = (e) => {
            o(!0), n(e);
        };
    return (0, i.jsx)(l.Clickable, {
        className: s()(c.jumpButton, t),
        onClick: d,
        children: r
            ? (0, i.jsx)(l.Spinner, { type: l.Spinner.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(l.Text, {
                  variant: 'text-xs/normal',
                  className: c.text,
                  children: u.Z.Messages.JUMP
              })
    });
}
