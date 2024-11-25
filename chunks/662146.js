n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(481060),
    s = n(743778);
function c(e) {
    let { children: t, text: n, color: r, disableWrapper: c = !1, disabled: u = !1, hideOnClick: d = !0, shouldShow: h, forceOpen: p, selected: m = !1, tooltipClass: f, tooltipContentClass: g } = e;
    return (0, i.jsx)(o.Tooltip, {
        shouldShow: h,
        forceOpen: p,
        spacing: 20,
        hideOnClick: d,
        text: u ? null : n,
        position: 'right',
        color: r,
        'aria-label': !1,
        tooltipClassName: a()(s.listItemTooltip, f),
        tooltipContentClassName: g,
        children: (e) =>
            c
                ? l.cloneElement(l.Children.only(t), { ...e })
                : (0, i.jsx)('div', {
                      className: a()(s.listItemWrapper, { [s.selected]: m }),
                      ...e,
                      children: t
                  })
    });
}
