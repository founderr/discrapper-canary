"use strict";
n.r(t), n.d(t, {
  InviteErrorMessage: function() {
    return c
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("77078"),
  a = n("592407"),
  s = n("957255"),
  u = n("49111"),
  o = n("782340"),
  d = n("435808");

function c(e) {
  let {
    guild: t,
    error: n,
    onClose: c
  } = e, f = t.id, h = i.useCallback(() => {
    c(), a.default.open(f, u.GuildSettingsSections.INSTANT_INVITES)
  }, [f, c]), g = i.useCallback(e => (0, l.jsx)(r.Clickable, {
    className: d.errorLink,
    onClick: h,
    children: (0, l.jsx)(r.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), [h]), I = i.useCallback(e => (0, l.jsx)(r.Anchor, {
    href: u.MarketingURLs.INVITES_HELP,
    target: "_blank",
    children: (0, l.jsx)(r.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), []), E = n.code !== u.AbortCodes.TOO_MANY_INVITES ? n.getAnyErrorMessage() : s.default.can(u.Permissions.MANAGE_GUILD, t) ? o.default.Messages.TOO_MANY_INVITES_ERROR.format({
    inviteListHook: g,
    inviteHelpHook: I
  }) : o.default.Messages.TOO_MANY_INVITES_ERROR_MEMBER;
  return (0, l.jsx)(r.Text, {
    className: d.errorMessage,
    variant: "text-xs/normal",
    color: "text-danger",
    children: E
  })
}