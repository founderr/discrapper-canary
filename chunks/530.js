"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  a = n.n(r),
  s = n("481060"),
  o = n("129861"),
  l = n("5192"),
  u = n("228168"),
  d = n("689938"),
  _ = n("660120");

function c(e) {
  let {
    user: t,
    guildId: n,
    channelId: r,
    usernameIcon: c,
    tags: E,
    nicknameIcons: I,
    pronouns: T,
    className: f,
    onOpenProfile: S,
    nicknameVariant: h = "heading-lg/bold",
    pronounsVariant: A = "text-sm/medium"
  } = e, m = e => null == S ? e : (0, i.jsx)(s.Clickable, {
    onClick: S,
    className: _.clickableUsername,
    children: e
  });
  return (0, i.jsxs)("div", {
    className: a()(_.container, f),
    children: [(0, i.jsxs)("div", {
      className: _.usernameRow,
      children: [m((0, i.jsx)(s.Heading, {
        className: _.nickname,
        variant: h,
        children: l.default.getName(n, r, t)
      })), (0, i.jsx)("div", {
        className: _.nicknameIcons,
        children: I
      })]
    }), (0, i.jsxs)("div", {
      className: _.tags,
      children: [m((0, i.jsx)(o.default, {
        user: t,
        usernameIcon: c,
        forceUsername: !0,
        className: _.userTag,
        usernameClass: _.userTagUsername,
        discriminatorClass: _.userTagDiscriminator
      })), null != T && T.length > 0 && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          "aria-hidden": "true",
          className: _.dotSpacer
        }), (0, i.jsx)(s.TooltipContainer, {
          text: d.default.Messages.USER_PROFILE_PRONOUNS,
          delay: u.USER_PROFILE_TOOLTIP_DELAY,
          children: (0, i.jsx)(s.Text, {
            variant: A,
            className: _.pronouns,
            color: "header-primary",
            children: T
          })
        })]
      }), E]
    })]
  })
}