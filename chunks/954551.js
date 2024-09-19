n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var s = n(481060),
    a = n(665149),
    r = n(388035),
    l = n(453473),
    o = n(689938);
function c(e) {
    let { onOpen: t, onClose: n, className: c } = e;
    return (0, i.jsx)(l.P, {
        onOpen: t,
        onClose: n,
        popoutPosition: 'bottom',
        popoutAlign: 'right',
        children: (e, t, n, l) =>
            (0, i.jsx)(r.U, {
                location: 'bookmarks-button',
                children: (0, i.jsx)(a.JO, {
                    ...n,
                    className: c,
                    onClick: e,
                    icon: s.BookmarkIcon,
                    'aria-label': o.Z.Messages.FOR_LATER,
                    tooltip: t ? null : o.Z.Messages.FOR_LATER,
                    selected: t,
                    showBadge: l,
                    badgePosition: 'top'
                })
            })
    });
}
