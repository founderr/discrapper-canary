t.d(n, {
    Z: function () {
        return E;
    }
});
var l = t(735250);
t(470079);
var i = t(852229),
    u = t(399606),
    r = t(481060),
    a = t(228392),
    d = t(592125),
    o = t(934415),
    s = t(981631),
    c = t(689938);
function E(e, n, t) {
    let E = (0, u.e7)([d.Z], () => d.Z.getChannel(e.parent_id));
    return (0, l.jsx)(r.MenuItem, {
        id: 'channel-copy-link',
        label: c.Z.Messages.COPY_LINK,
        action: () => {
            e.isForumPost() &&
                (0, a.B)({
                    postId: e.id,
                    location: { section: s.jXE.CONTEXT_MENU }
                }),
                (0, i.J)((0, o.EO)(e, E, n, t));
        }
    });
}
