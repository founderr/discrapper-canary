n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(386019),
    s = n(388032),
    o = n(249942);
function l(e) {
    return (0, r.jsx)(a.Z, {
        ...e,
        children: (e) =>
            (0, r.jsx)(i.Tooltip, {
                text: s.intl.string(s.t.UKOtz8),
                'aria-label': !1,
                children: (t) =>
                    (0, r.jsx)(i.Clickable, {
                        ...t,
                        ...e,
                        'aria-label': s.intl.string(s.t.UKOtz8),
                        onClick: (n) => {
                            var r;
                            n.stopPropagation(), null === (r = t.onClick) || void 0 === r || r.call(t), e.onClick(n);
                        },
                        onContextMenu: (n) => {
                            var r;
                            n.preventDefault(), null === (r = t.onClick) || void 0 === r || r.call(t), e.onClick(n);
                        },
                        className: o.contextMenu,
                        children: (0, r.jsx)(i.MoreHorizontalIcon, {
                            color: i.tokens.colors.INTERACTIVE_NORMAL,
                            size: 'xs'
                        })
                    })
            })
    });
}
