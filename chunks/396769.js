n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(600164),
    s = n(761673);
function a(e) {
    let { icon: t, onClick: n, label: a } = e;
    return (0, i.jsx)(l.Button, {
        look: l.Button.Looks.BLANK,
        size: l.Button.Sizes.MIN,
        className: s.button,
        onClick: n,
        children: (0, i.jsxs)(r.Z, {
            align: r.Z.Align.CENTER,
            children: [
                (0, i.jsx)('div', {
                    className: s.buttonIcon,
                    children: t
                }),
                (0, i.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    color: 'none',
                    children: a
                })
            ]
        })
    });
}
