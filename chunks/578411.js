"use strict";
n.r(t), n.d(t, {
  GuildLeaveConfirmModalContents: function() {
    return v
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  u = n("151426"),
  i = n("77078"),
  r = n("10641"),
  d = n("592407"),
  o = n("267567"),
  c = n("393414"),
  f = n("49111"),
  E = n("782340"),
  h = n("967659");
let v = e => {
  let {
    guild: t
  } = e, l = t.id, v = async () => {
    let e = o.default.isLurking(l);
    await d.default.leaveGuild(l), e ? (0, c.transitionTo)(f.Routes.GUILD_DISCOVERY) : !(0, r.isDismissibleContentDismissed)(u.DismissibleContent.GUILD_LEAVE_FEEDBACK) && (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("953750").then(n.bind(n, "953750"));
      return n => (0, a.jsx)(e, {
        ...n,
        guildId: l,
        guildName: t.name
      })
    })
  };
  return (0, a.jsx)(i.ConfirmModal, {
    className: s(h.confirmModal),
    bodyClassName: s(h.confirmModalBody),
    header: E.default.Messages.LEAVE_SERVER_TITLE.format({
      name: t.name
    }),
    confirmText: t.hasFeature(f.GuildFeatures.HUB) ? E.default.Messages.LEAVE_HUB : E.default.Messages.LEAVE_SERVER,
    cancelText: E.default.Messages.CANCEL,
    onConfirm: v,
    ...e,
    children: (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      children: t.hasFeature(f.GuildFeatures.HUB) ? E.default.Messages.LEAVE_HUB_BODY.format({
        name: t.name
      }) : E.default.Messages.LEAVE_SERVER_BODY.format({
        name: t.name
      })
    })
  })
}