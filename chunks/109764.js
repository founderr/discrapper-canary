t.d(n, {
    Z: function () {
        return _;
    }
});
var i = t(735250);
t(470079);
var u = t(852229),
    a = t(399606),
    r = t(481060),
    l = t(228392),
    d = t(592125),
    s = t(934415),
    o = t(981631),
    c = t(689938);
function _(e, n, t) {
    let _ = (0, a.e7)([d.Z], () => d.Z.getChannel(e.parent_id));
    return (0, i.jsx)(r.MenuItem, {
        id: 'channel-copy-link',
        label: c.Z.Messages.COPY_LINK,
        action: () => {
            e.isForumPost() &&
                (0, l.B)({
                    postId: e.id,
                    location: { section: o.jXE.CONTEXT_MENU }
                }),
                (0, u.J)((0, s.EO)(e, _, n, t));
        }
    });
}
