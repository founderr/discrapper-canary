"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(367907),
  a = n(434404),
  l = n(430824),
  u = n(346656),
  _ = n(981631),
  c = n(689938),
  d = n(93138);
t.Z = e => {
  let {
    guildId: t,
    reportId: n
  } = e, [E, I] = r.useState(!1), T = l.Z.getGuild(t), h = null != T;
  r.useEffect(() => {
    I(!h)
  }, [h]);
  let S = r.useCallback(() => {
    I(!0), o.ZP.trackWithMetadata(_.rMx.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
      guild_id: t,
      report_id: n
    }), a.Z.leaveGuild(t)
  }, [t, n]);
  if (null == T) return null;
  let f = () => {
    (0, s.openModal)(e => (0, i.jsx)(s.ConfirmModal, {
      header: c.Z.Messages.LEAVE_SERVER_TITLE.format({
        name: T.name
      }),
      confirmText: c.Z.Messages.LEAVE_SERVER,
      cancelText: c.Z.Messages.CANCEL,
      onConfirm: S,
      ...e,
      children: (0, i.jsx)(s.Text, {
        variant: "text-md/normal",
        children: c.Z.Messages.LEAVE_SERVER_BODY.format({
          name: T.name
        })
      })
    }))
  };
  return (0, i.jsxs)("div", {
    className: d.container,
    children: [(0, i.jsx)(s.Text, {
      className: d.description,
      variant: "text-sm/normal",
      children: c.Z.Messages.MOBILE_REPORTS_LEAVE_ELEMENT_DESCRIPTION
    }), (0, i.jsxs)("div", {
      className: d.guildContainer,
      children: [(0, i.jsxs)("div", {
        className: d.guildInfo,
        children: [(0, i.jsx)(u.Z, {
          guild: T,
          showBadge: !1,
          animate: !1,
          size: u.Z.Sizes.SMALL,
          "aria-label": T.name,
          className: d.icon,
          active: !0
        }), (0, i.jsx)(s.Text, {
          className: d.guildName,
          variant: "text-sm/semibold",
          children: T.name
        })]
      }), (0, i.jsx)(s.Button, {
        onClick: () => f(),
        disabled: E,
        size: s.Button.Sizes.SMALL,
        color: s.Button.Colors.RED,
        children: E ? c.Z.Messages.MOBILE_REPORTS_LEFT_SERVER : c.Z.Messages.LEAVE_SERVER
      })]
    })]
  })
}