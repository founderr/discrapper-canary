"use strict";
n.r(t), n.d(t, {
  InviteErrorMessage: function() {
    return c
  }
});
var l = n("37983"),
  i = n("884691"),
  a = n("77078"),
  s = n("592407"),
  r = n("957255"),
  u = n("49111"),
  o = n("782340"),
  d = n("696862");

function c(e) {
  let {
    guild: t,
    error: n,
    onClose: c
  } = e, f = t.id, h = i.useCallback(() => {
    c(), s.default.open(f, u.GuildSettingsSections.INSTANT_INVITES)
  }, [f, c]), I = i.useCallback(e => (0, l.jsx)(a.Clickable, {
    className: d.errorLink,
    onClick: h,
    children: (0, l.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), [h]), g = i.useCallback(e => (0, l.jsx)(a.Anchor, {
    href: u.MarketingURLs.INVITES_HELP,
    target: "_blank",
    children: (0, l.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), []), E = n.code !== u.AbortCodes.TOO_MANY_INVITES ? n.getAnyErrorMessage() : r.default.can(u.Permissions.MANAGE_GUILD, t) ? o.default.Messages.TOO_MANY_INVITES_ERROR.format({
    inviteListHook: I,
    inviteHelpHook: g
  }) : o.default.Messages.TOO_MANY_INVITES_ERROR_MEMBER;
  return (0, l.jsx)(a.Text, {
    className: d.errorMessage,
    variant: "text-xs/normal",
    color: "text-danger",
    children: E
  })
}