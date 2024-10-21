t.d(n, {
    Z: function () {
        return f;
    }
});
var i = t(200651);
t(192379);
var a = t(852229),
    r = t(399606),
    o = t(481060),
    s = t(228392),
    u = t(592125),
    l = t(934415),
    d = t(981631),
    c = t(689938);
function f(e, n, t) {
    let f = (0, r.e7)([u.Z], () => u.Z.getChannel(e.parent_id));
    return (0, i.jsx)(o.MenuItem, {
        id: 'channel-copy-link',
        label: c.Z.Messages.COPY_LINK,
        action: () => {
            e.isForumPost() &&
                (0, s.B)({
                    postId: e.id,
                    location: { section: d.jXE.CONTEXT_MENU }
                }),
                (0, a.J)((0, l.EO)(e, f, n, t));
        }
    });
}
