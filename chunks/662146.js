n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(466474);
function c(e) {
    let { children: t, text: n, color: r, disableWrapper: c = !1, disabled: u = !1, hideOnClick: d = !0, shouldShow: h, forceOpen: p, selected: f = !1, tooltipClass: _, tooltipContentClass: m } = e;
    return (0, i.jsx)(s.Tooltip, {
        shouldShow: h,
        forceOpen: p,
        spacing: 20,
        hideOnClick: d,
        text: u ? null : n,
        position: 'right',
        color: r,
        'aria-label': !1,
        tooltipClassName: a()(o.listItemTooltip, _),
        tooltipContentClassName: m,
        children: (e) =>
            c
                ? l.cloneElement(l.Children.only(t), { ...e })
                : (0, i.jsx)('div', {
                      className: a()(o.listItemWrapper, { [o.selected]: f }),
                      ...e,
                      children: t
                  })
    });
}
