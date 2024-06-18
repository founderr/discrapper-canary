"use strict";
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(367907),
  a = n(524444),
  l = n(297047),
  u = n(592125),
  _ = n(944486),
  c = n(626135),
  d = n(981631),
  E = n(689938),
  I = n(510902);
t.Z = function(e) {
  let {
    guild: t,
    message: n,
    onClose: T
  } = e, h = u.Z.getChannel(_.Z.getChannelId(t.id));
  return (r.useEffect(() => {
    c.default.track(d.rMx.OPEN_POPOUT, {
      type: "New Member Badge Popout",
      guild_id: t.id,
      channel_id: null == h ? void 0 : h.id
    })
  }, []), null == h) ? null : (0, i.jsx)(a.W_, {
    children: (0, i.jsxs)("div", {
      className: I.popoutContainer,
      children: [(0, i.jsxs)("div", {
        className: I.mainContent,
        children: [(0, i.jsx)("div", {
          className: I.iconContainer,
          children: (0, i.jsx)(s.NewUserLargeIcon, {
            size: "custom",
            color: "currentColor",
            width: 40,
            height: 40
          })
        }), (0, i.jsxs)("div", {
          children: [(0, i.jsx)(s.Heading, {
            variant: "heading-md/semibold",
            className: I.header,
            children: E.Z.Messages.NEW_MEMBER_BADGE_TOOLTIP_TEXT
          }), (0, i.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: E.Z.Messages.NEW_MEMBER_BADGE_POPOUT_TEXT
          })]
        })]
      }), (0, i.jsx)(s.Button, {
        size: s.Button.Sizes.SMALL,
        color: s.Button.Colors.BRAND,
        className: I.ctaButton,
        innerClassName: I.ctaButtonContent,
        fullWidth: !0,
        onClick: () => {
          o.ZP.trackWithMetadata(d.rMx.NEW_MEMBER_MENTION_CTA_CLICKED, {
            target_user_id: n.author.id
          }), T(), (0, l.q)(n.author, h.id)
        },
        children: E.Z.Messages.MENTION_USER.format({
          username: n.author.username
        })
      })]
    })
  })
}