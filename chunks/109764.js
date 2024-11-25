e.d(t, {
    Z: function () {
        return f;
    }
});
var i = e(200651);
e(192379);
var r = e(852229),
    a = e(399606),
    u = e(481060),
    l = e(228392),
    o = e(592125),
    d = e(934415),
    c = e(981631),
    s = e(388032);
function f(n, t, e) {
    let f = (0, a.e7)([o.Z], () => o.Z.getChannel(n.parent_id));
    return (0, i.jsx)(u.MenuItem, {
        id: 'channel-copy-link',
        label: s.intl.string(s.t.WqhZsr),
        action: () => {
            n.isForumPost() &&
                (0, l.B)({
                    postId: n.id,
                    location: { section: c.jXE.CONTEXT_MENU }
                }),
                (0, r.J)((0, d.EO)(n, f, t, e));
        }
    });
}
