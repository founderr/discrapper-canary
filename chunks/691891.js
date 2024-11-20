var i = n(200651);
n(192379);
var l = n(120356),
    o = n.n(l),
    r = n(481060),
    s = n(629769);
let a = (e) => {
    let { className: t, onDismiss: n, 'aria-label': l } = e;
    return (0, i.jsx)(r.Button, {
        look: r.Button.Looks.BLANK,
        size: r.Button.Sizes.NONE,
        onClick: n,
        className: o()(s.dismissButton, t),
        'aria-label': l,
        children: (0, i.jsx)(r.XSmallIcon, {
            size: 'xs',
            color: 'currentColor',
            colorClass: s.dismissIcon
        })
    });
};
(a.displayName = 'DismissButton'), (t.Z = a);
