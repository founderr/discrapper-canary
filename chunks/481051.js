n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var s = n(120356),
    a = n.n(s),
    l = n(481060),
    r = n(537583);
function o(e) {
    let { hasMentions: t, truncatedCount: n, className: s } = e;
    return (0, i.jsx)(l.Text, {
        className: a()(r.unreadCount, s, { [r.mention]: t }),
        variant: 'text-xs/normal',
        children: n
    });
}
