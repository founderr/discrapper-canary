t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651),
    a = t(192379),
    s = t(120356),
    l = t.n(s),
    r = t(481060),
    o = t(689938),
    c = t(471951);
let d = [!1, !0];
function u(e) {
    let { isDisabled: n, currentValue: t, onChange: s } = e,
        o = (0, r.useRadioGroup)({
            orientation: 'horizontal',
            isDisabled: n
        }),
        u = a.useCallback(
            (e) => {
                !n && e !== t && s(e);
            },
            [n, t, s]
        );
    return (0, i.jsx)('div', {
        className: l()(c.group, { [c.disabled]: n }),
        ...o,
        children: d.map((e) =>
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
        s = t ? c.allow : c.deny,
        d = t ? r.CheckmarkLargeIcon : r.XSmallIcon,
        u = t ? o.Z.Messages.PERMISSION_OVERRIDE_ALLOW : o.Z.Messages.PERMISSION_OVERRIDE_DENY,
        I = (0, r.useRadioItem)({
            isSelected: n,
            label: u
        });
    return (0, i.jsx)(r.Clickable, {
        className: l()(c.item, s, { [c.selected]: n }),
        onClick: a,
        ...I,
        children: (0, i.jsx)(d, {
            size: 'xs',
            color: 'currentColor'
        })
    });
}
