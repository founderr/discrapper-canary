var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    o = n(481060),
    a = n(19123);
let s = (e) => {
    let { className: t, onDismiss: n, 'aria-label': l } = e;
    return (0, i.jsx)(o.Button, {
        look: o.Button.Looks.BLANK,
        size: o.Button.Sizes.NONE,
        onClick: n,
        className: r()(a.dismissButton, t),
        'aria-label': l,
        children: (0, i.jsx)(o.XSmallIcon, {
            size: 'xs',
            color: 'currentColor',
            colorClass: a.dismissIcon
        })
    });
};
(s.displayName = 'DismissButton'), (t.Z = s);
