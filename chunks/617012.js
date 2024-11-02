t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(481060),
    s = t(388032),
    d = t(471951);
let c = [!1, !0];
function u(e) {
    let { isDisabled: n, currentValue: t, onChange: r } = e,
        s = (0, o.useRadioGroup)({
            orientation: 'horizontal',
            isDisabled: n
        }),
        u = l.useCallback(
            (e) => {
                !n && e !== t && r(e);
            },
            [n, t, r]
        );
    return (0, i.jsx)('div', {
        className: a()(d.group, { [d.disabled]: n }),
        ...s,
        children: c.map((e) =>
            (0, i.jsx)(
                m,
                {
                    isSelected: t === e,
                    itemValue: e,
                    onClick: () => u(e)
                },
                e.toString()
            )
        )
    });
}
function m(e) {
    let { isSelected: n, itemValue: t, onClick: l } = e,
        r = t ? d.allow : d.deny,
        c = t ? o.CheckmarkLargeIcon : o.XSmallIcon,
        u = t ? s.intl.string(s.t.RzDfSk) : s.intl.string(s.t['6639Oz']),
        m = (0, o.useRadioItem)({
            isSelected: n,
            label: u
        });
    return (0, i.jsx)(o.Clickable, {
        className: a()(d.item, r, { [d.selected]: n }),
        onClick: l,
        ...m,
        children: (0, i.jsx)(c, {
            size: 'xs',
            color: 'currentColor'
        })
    });
}
