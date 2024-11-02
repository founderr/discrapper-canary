e.d(t, {
    Z: function () {
        return f;
    }
});
var i = e(200651);
e(192379);
var r = e(852229),
    a = e(399606),
    l = e(481060),
    o = e(228392),
    u = e(592125),
    d = e(934415),
    s = e(981631),
    c = e(388032);
function f(n, t, e) {
    let f = (0, a.e7)([u.Z], () => u.Z.getChannel(n.parent_id));
    return (0, i.jsx)(l.MenuItem, {
        id: 'channel-copy-link',
        label: c.intl.string(c.t.WqhZsr),
        action: () => {
            n.isForumPost() &&
                (0, o.B)({
                    postId: n.id,
                    location: { section: s.jXE.CONTEXT_MENU }
                }),
                (0, r.J)((0, d.EO)(n, f, t, e));
        }
    });
}
