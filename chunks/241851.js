"use strict";
a.r(t), a.d(t, {
  GuildLeaveConfirmModalContents: function() {
    return h
  }
});
var n = a("735250");
a("470079");
var l = a("120356"),
  s = a.n(l),
  u = a("704215"),
  i = a("481060"),
  r = a("605236"),
  d = a("434404"),
  o = a("41776"),
  c = a("703656"),
  f = a("981631"),
  E = a("689938"),
  C = a("246938");
let h = e => {
  let {
    guild: t
  } = e, l = t.id, h = async () => {
    let e = o.default.isLurking(l);
    await d.default.leaveGuild(l), e ? (0, c.transitionTo)(f.Routes.GUILD_DISCOVERY) : !(0, r.isDismissibleContentDismissed)(u.DismissibleContent.GUILD_LEAVE_FEEDBACK) && (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("49237"), a.e("99387"), a.e("41953")]).then(a.bind(a, "131102"));
      return a => (0, n.jsx)(e, {
        ...a,
        guildId: l,
        guildName: t.name
      })
    })
  };
  return (0, n.jsx)(i.ConfirmModal, {
    className: s()(C.__invalid_confirmModal),
    bodyClassName: s()(C.__invalid_confirmModalBody),
    header: E.default.Messages.LEAVE_SERVER_TITLE.format({
      name: t.name
    }),
    confirmText: t.hasFeature(f.GuildFeatures.HUB) ? E.default.Messages.LEAVE_HUB : E.default.Messages.LEAVE_SERVER,
    cancelText: E.default.Messages.CANCEL,
    onConfirm: h,
    ...e,
    children: (0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      children: t.hasFeature(f.GuildFeatures.HUB) ? E.default.Messages.LEAVE_HUB_BODY.format({
        name: t.name
      }) : E.default.Messages.LEAVE_SERVER_BODY.format({
        name: t.name
      })
    })
  })
}