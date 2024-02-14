"use strict";
n.r(t), n.d(t, {
  InviteErrorMessage: function() {
    return c
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("77078"),
  i = n("592407"),
  r = n("957255"),
  u = n("49111"),
  d = n("782340"),
  o = n("696862");

function c(e) {
  let {
    guild: t,
    error: n,
    onClose: c
  } = e, E = t.id, f = a.useCallback(() => {
    c(), i.default.open(E, u.GuildSettingsSections.INSTANT_INVITES)
  }, [E, c]), h = a.useCallback(e => (0, l.jsx)(s.Clickable, {
    className: o.errorLink,
    onClick: f,
    children: (0, l.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), [f]), v = a.useCallback(e => (0, l.jsx)(s.Anchor, {
    href: u.MarketingURLs.INVITES_HELP,
    target: "_blank",
    children: (0, l.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), []), _ = n.code !== u.AbortCodes.TOO_MANY_INVITES ? n.getAnyErrorMessage() : r.default.can(u.Permissions.MANAGE_GUILD, t) ? d.default.Messages.TOO_MANY_INVITES_ERROR.format({
    inviteListHook: h,
    inviteHelpHook: v
  }) : d.default.Messages.TOO_MANY_INVITES_ERROR_MEMBER;
  return (0, l.jsx)(s.Text, {
    className: o.errorMessage,
    variant: "text-xs/normal",
    color: "text-danger",
    children: _
  })
}