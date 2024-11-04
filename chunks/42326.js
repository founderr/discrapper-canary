n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    s = n(481060),
    a = n(618158),
    o = n(649677);
function c(e) {
    let { errorMessage: t, className: n } = e;
    return (0, i.jsx)(s.TooltipContainer, {
        className: r()(n, o.root),
        text: t,
        position: 'bottom',
        color: s.TooltipColors.GREY,
        children: (0, i.jsx)(a.Z, {
            children: (0, i.jsx)(s.CircleWarningIcon, {
                size: 'custom',
                width: 20,
                height: 20,
                color: 'currentColor',
                'aria-label': null != t ? t : '',
                className: o.warningIcon
            })
        })
    });
}
