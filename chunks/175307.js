n.d(t, {
    u: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(780384),
    l = n(481060),
    a = n(410030),
    o = n(656867);
function s(e) {
    let { text: t, onClick: n } = e,
        s = (0, a.ZP)(),
        c = (0, r.wj)(s);
    return (0, i.jsxs)(l.Button, {
        size: 'medium',
        color: c ? l.ButtonColors.TRANSPARENT : l.ButtonColors.WHITE,
        className: o.button,
        onClick: n,
        innerClassName: o.innerButton,
        children: [
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/semibold',
                color: 'header-primary',
                children: t
            }),
            (0, i.jsx)(l.LinkExternalSmallIcon, {
                size: 'sm',
                color: l.tokens.colors.HEADER_PRIMARY
            })
        ]
    });
}
