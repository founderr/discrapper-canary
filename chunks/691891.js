var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    o = n(481060),
    a = n(19123);
let s = (e) => {
    let { className: t, onDismiss: n, 'aria-label': r } = e;
    return (0, i.jsx)(o.Button, {
        look: o.Button.Looks.BLANK,
        size: o.Button.Sizes.NONE,
        onClick: n,
        className: l()(a.dismissButton, t),
        'aria-label': r,
        children: (0, i.jsx)(o.XSmallIcon, {
            size: 'xs',
            color: 'currentColor',
            colorClass: a.dismissIcon
        })
    });
};
(s.displayName = 'DismissButton'), (t.Z = s);
