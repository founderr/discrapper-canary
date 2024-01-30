"use strict";
n.r(t), n.d(t, {
  InviteErrorMessage: function() {
    return c
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("77078"),
  o = n("592407"),
  i = n("957255"),
  r = n("49111"),
  u = n("782340"),
  d = n("435808");

function c(e) {
  let {
    guild: t,
    error: n,
    onClose: c
  } = e, p = t.id, f = a.useCallback(() => {
    c(), o.default.open(p, r.GuildSettingsSections.INSTANT_INVITES)
  }, [p, c]), I = a.useCallback(e => (0, l.jsx)(s.Clickable, {
    className: d.errorLink,
    onClick: f,
    children: (0, l.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), [f]), h = a.useCallback(e => (0, l.jsx)(s.Anchor, {
    href: r.MarketingURLs.INVITES_HELP,
    target: "_blank",
    children: (0, l.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), []), E = n.code !== r.AbortCodes.TOO_MANY_INVITES ? n.getAnyErrorMessage() : i.default.can(r.Permissions.MANAGE_GUILD, t) ? u.default.Messages.TOO_MANY_INVITES_ERROR.format({
    inviteListHook: I,
    inviteHelpHook: h
  }) : u.default.Messages.TOO_MANY_INVITES_ERROR_MEMBER;
  return (0, l.jsx)(s.Text, {
    className: d.errorMessage,
    variant: "text-xs/normal",
    color: "text-danger",
    children: E
  })
}