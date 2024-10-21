n.d(t, {
    u: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var a = n(780384),
    s = n(481060),
    r = n(410030),
    l = n(779216);
function o(e) {
    let { text: t, onClick: n } = e,
        o = (0, r.ZP)(),
        c = (0, a.wj)(o);
    return (0, i.jsxs)(s.Button, {
        size: 'medium',
        color: c ? s.ButtonColors.TRANSPARENT : s.ButtonColors.WHITE,
        className: l.button,
        onClick: n,
        innerClassName: l.innerButton,
        children: [
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/semibold',
                color: 'header-primary',
                children: t
            }),
            (0, i.jsx)(s.LinkExternalSmallIcon, {
                size: 'sm',
                color: s.tokens.colors.HEADER_PRIMARY
            })
        ]
    });
}
