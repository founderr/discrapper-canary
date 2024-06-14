"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  a = n("481060"),
  o = n("129861"),
  l = n("228168"),
  u = n("689938"),
  d = n("660120");

function _(e) {
  let {
    user: t,
    profileType: n,
    usernameIcon: r,
    tags: _,
    nickname: c,
    nicknameIcons: E,
    pronouns: I,
    className: T,
    isTryItOut: f,
    onOpenProfile: S,
    nicknameVariant: h = "heading-lg/bold",
    pronounsVariant: A = "text-sm/medium"
  } = e, m = {
    [d.biteSize]: n === l.UserProfileTypes.BITE_SIZE,
    [d.fullSize]: n === l.UserProfileTypes.FULL_SIZE,
    [d.panel]: n === l.UserProfileTypes.PANEL
  }, N = e => null == S ? e : (0, i.jsx)(a.Clickable, {
    onClick: S,
    className: d.clickableUsername,
    children: e
  }), p = null != I && I.length > 0;
  return (0, i.jsxs)("div", {
    className: s()(d.container, T),
    children: [(0, i.jsxs)("div", {
      className: d.usernameRow,
      children: [N((0, i.jsx)(a.Heading, {
        className: s()(d.nickname, m),
        variant: h,
        children: c
      })), null != E && (0, i.jsx)("div", {
        className: s()(d.nicknameIcons, m),
        children: E
      })]
    }), (0, i.jsxs)("div", {
      className: s()(d.tags, m, p && d.tagsWithPronouns),
      children: [N((0, i.jsx)(o.default, {
        user: t,
        usernameIcon: r,
        forceUsername: !0,
        forcePomelo: f,
        className: d.userTag,
        usernameClass: d.userTagUsername,
        discriminatorClass: d.userTagDiscriminator
      })), p && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          "aria-hidden": "true",
          className: d.dotSpacer
        }), (0, i.jsx)(a.TooltipContainer, {
          className: d.pronounsTooltip,
          text: u.default.Messages.USER_PROFILE_PRONOUNS,
          delay: l.USER_PROFILE_TOOLTIP_DELAY,
          children: (0, i.jsx)(a.Text, {
            variant: A,
            className: d.pronouns,
            color: "header-primary",
            children: I
          })
        })]
      }), _]
    })]
  })
}