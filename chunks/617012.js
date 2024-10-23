t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651),
    a = t(192379),
    l = t(120356),
    s = t.n(l),
    o = t(481060),
    r = t(689938),
    d = t(471951);
let c = [!1, !0];
function u(e) {
    let { isDisabled: n, currentValue: t, onChange: l } = e,
        r = (0, o.useRadioGroup)({
            orientation: 'horizontal',
            isDisabled: n
        }),
        u = a.useCallback(
            (e) => {
                !n && e !== t && l(e);
            },
            [n, t, l]
        );
    return (0, i.jsx)('div', {
        className: s()(d.group, { [d.disabled]: n }),
        ...r,
        children: c.map((e) =>
            (0, i.jsx)(
                I,
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
function I(e) {
    let { isSelected: n, itemValue: t, onClick: a } = e,
        l = t ? d.allow : d.deny,
        c = t ? o.CheckmarkLargeIcon : o.XSmallIcon,
        u = t ? r.Z.Messages.PERMISSION_OVERRIDE_ALLOW : r.Z.Messages.PERMISSION_OVERRIDE_DENY,
        I = (0, o.useRadioItem)({
            isSelected: n,
            label: u
        });
    return (0, i.jsx)(o.Clickable, {
        className: s()(d.item, l, { [d.selected]: n }),
        onClick: a,
        ...I,
        children: (0, i.jsx)(c, {
            size: 'xs',
            color: 'currentColor'
        })
    });
}
