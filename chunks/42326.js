n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    a = n.n(s),
    l = n(481060),
    r = n(618158),
    o = n(649677);
function c(e) {
    let { errorMessage: t, className: n } = e;
    return (0, i.jsx)(l.TooltipContainer, {
        className: a()(n, o.root),
        text: t,
        position: 'bottom',
        color: l.TooltipColors.GREY,
        children: (0, i.jsx)(r.Z, {
            children: (0, i.jsx)(l.CircleWarningIcon, {
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
