n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(200651),
    i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(229159);
function l(e) {
    let { countdownText: t, className: n } = e;
    return (0, r.jsx)(s.Text, {
        variant: 'text-xs/bold',
        className: a()(o.largeCountdownPillText, n),
        children: t.toUpperCase()
    });
}
