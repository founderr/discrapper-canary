n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    s = n(481060),
    a = n(537583);
function o(e) {
    let { hasMentions: t, truncatedCount: n, className: l } = e;
    return (0, i.jsx)(s.Text, {
        className: r()(a.unreadCount, l, { [a.mention]: t }),
        variant: 'text-xs/normal',
        children: n
    });
}
