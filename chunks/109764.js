t.d(n, {
  Z: function() {
    return c
  }
});
var i = t(735250);
t(470079);
var a = t(852229),
  s = t(399606),
  l = t(481060),
  u = t(228392),
  r = t(592125),
  _ = t(934415),
  d = t(981631),
  o = t(689938);

function c(e, n, t) {
  let c = (0, s.e7)([r.Z], () => r.Z.getChannel(e.parent_id));
  return (0, i.jsx)(l.MenuItem, {
    id: "channel-copy-link",
    label: o.Z.Messages.COPY_LINK,
    action: () => {
      e.isForumPost() && (0, u.B)({
        postId: e.id,
        location: {
          section: d.jXE.CONTEXT_MENU
        }
      }), (0, a.J)((0, _.EO)(e, c, n, t))
    }
  })
}