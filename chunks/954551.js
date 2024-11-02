n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(665149),
    a = n(388035),
    o = n(453473),
    s = n(388032);
function c(e) {
    let { onOpen: t, onClose: n, className: c } = e;
    return (0, i.jsx)(o.P, {
        onOpen: t,
        onClose: n,
        popoutPosition: 'bottom',
        popoutAlign: 'right',
        children: (e, t, n, o) =>
            (0, i.jsx)(a.U, {
                location: 'bookmarks-button',
                children: (0, i.jsx)(l.JO, {
                    ...n,
                    className: c,
                    onClick: e,
                    icon: r.BookmarkIcon,
                    'aria-label': s.intl.string(s.t['2pAkDA']),
                    tooltip: t ? null : s.intl.string(s.t['2pAkDA']),
                    selected: t,
                    showBadge: o
                })
            })
    });
}
