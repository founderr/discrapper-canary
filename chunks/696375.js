s.d(n, {
    Z: function () {
        return o;
    }
});
var a = s(200651);
s(192379);
var t = s(481060),
    i = s(259580),
    l = s(78648);
function o(e) {
    let { url: n, text: s, onClick: o } = e;
    return (0, a.jsx)(t.Anchor, {
        href: n,
        onClick: o,
        className: l.externalLinkWrapper,
        children: (0, a.jsxs)(t.Clickable, {
            className: l.childButton,
            children: [
                (0, a.jsx)(t.Text, {
                    className: l.childText,
                    variant: 'text-md/semibold',
                    children: s
                }),
                (0, a.jsx)(i.Z, {
                    className: l.childIcon,
                    direction: i.Z.Directions.RIGHT
                })
            ]
        })
    });
}
