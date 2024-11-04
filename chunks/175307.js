n.d(t, {
    u: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(780384),
    a = n(481060),
    l = n(410030),
    s = n(779216);
function o(e) {
    let { text: t, onClick: n } = e,
        o = (0, l.ZP)(),
        c = (0, r.wj)(o);
    return (0, i.jsxs)(a.Button, {
        size: 'medium',
        color: c ? a.ButtonColors.TRANSPARENT : a.ButtonColors.WHITE,
        className: s.button,
        onClick: n,
        innerClassName: s.innerButton,
        children: [
            (0, i.jsx)(a.Text, {
                variant: 'text-sm/semibold',
                color: 'header-primary',
                children: t
            }),
            (0, i.jsx)(a.LinkExternalSmallIcon, {
                size: 'sm',
                color: a.tokens.colors.HEADER_PRIMARY
            })
        ]
    });
}
