n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(200651),
    i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(574804);
function l(e) {
    let { countdownText: t, className: n, showInfoIcon: i } = e,
        l = i
            ? (0, r.jsx)(s.CircleInformationIcon, {
                  size: 'xs',
                  color: 'var(--custom-premium-colors-banner-yellow)',
                  className: o.largePillIcon
              })
            : null;
    return (0, r.jsxs)('div', {
        className: a()(o.largeCountdownPill, n),
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-xs/bold',
                className: a()(o.largeCountdownPillText),
                children: t.toUpperCase()
            }),
            l
        ]
    });
}
