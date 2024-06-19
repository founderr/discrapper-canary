n.r(s), n.d(s, {
  default: function() {
    return g
  }
}), n(47120);
var l = n(735250);
n(470079);
var t = n(399606),
  o = n(481060),
  i = n(904245),
  a = n(434404),
  r = n(592125),
  u = n(812545),
  c = n(981631),
  d = n(689938),
  _ = n(924707);

function g(e) {
  let {
    channelId: s,
    messageId: n,
    transitionState: g,
    onClose: S
  } = e, E = (0, t.e7)([r.Z], () => r.Z.getChannel(s)), [F, C] = (0, u.Z)(s), L = null == E ? void 0 : E.guild_id;
  return (0, l.jsx)(o.ConfirmModal, {
    header: d.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
    confirmText: d.Z.Messages.CONFIRM,
    cancelText: d.Z.Messages.CANCEL,
    confirmButtonColor: o.Button.Colors.BRAND,
    onConfirm: () => i.Z.crosspostMessage(s, n),
    transitionState: g,
    onClose: S,
    children: (0, l.jsx)(o.Text, {
      variant: "text-md/normal",
      className: _.spacing,
      children: C ? (0, l.jsx)(o.Spinner, {}) : null != F && null != F.guildsFollowing && F.guildsFollowing > 0 ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.Text, {
          className: _.spacing,
          variant: "text-sm/normal",
          children: d.Z.Messages.PUBLISH_FOLLOWED_NEWS_BODY_REACH.format({
            numGuildsFollowing: F.guildsFollowing
          })
        }), (0, l.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: d.Z.Messages.PUBLISH_FOLLOWED_NEWS_BODY_SETTINGS_INSIGHTS.format({
            onClick: () => {
              null != L && null != S && (S(), a.Z.open(L, c.pNK.ANALYTICS))
            }
          })
        })]
      }) : d.Z.Messages.PUBLISH_FOLLOWED_NEWS_BODY
    })
  })
}