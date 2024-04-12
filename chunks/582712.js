"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
}), a("47120");
var n = a("735250");
a("470079");
var s = a("442837"),
  l = a("481060"),
  i = a("920440"),
  u = a("695346"),
  d = a("430824"),
  r = a("346656"),
  o = a("88658"),
  S = a("689938"),
  c = a("92522"),
  T = a("444812");

function _(e) {
  let {
    transitionState: t,
    guildId: _,
    onClose: N
  } = e, f = (0, s.useStateFromStores)([d.default], () => d.default.getGuild(_));
  return null == f ? null : (0, n.jsx)(l.ModalRoot, {
    transitionState: t,
    children: (0, n.jsxs)("form", {
      onSubmit: e => {
        e.preventDefault();
        let t = new Set((0, o.getSanitizedRestrictedGuilds)());
        t.add(_), u.RestrictedGuildIds.updateSetting(Array.from(t)).then(() => (0, l.showToast)((0, l.createToast)(S.default.Messages.DM_SETTINGS_UPSELL_SUCCESS_TOAST, l.ToastType.SUCCESS))), N()
      },
      children: [(0, n.jsx)("img", {
        alt: "",
        className: c.headerImage,
        src: T
      }), (0, n.jsxs)(l.ModalHeader, {
        separator: !1,
        className: c.header,
        children: [(0, n.jsx)(l.Heading, {
          variant: "heading-lg/bold",
          className: c.title,
          children: S.default.Messages.DM_SETTINGS_UPSELL_TITLE
        }), (0, n.jsx)(l.Text, {
          variant: "text-md/normal",
          className: c.body,
          children: S.default.Messages.DM_SETTINGS_UPSELL_BODY.format({
            guild_name: f.name
          })
        }), (0, n.jsx)(l.ModalCloseButton, {
          onClick: N,
          className: c.modalCloseButton
        })]
      }), (0, n.jsxs)(l.ModalContent, {
        children: [(0, n.jsx)(l.Text, {
          variant: "text-sm/bold",
          className: c.subtitle,
          children: S.default.Messages.DM_SETTINGS_UPSELL_SUBTITLE
        }), (0, n.jsx)("div", {
          className: c.guildContainer,
          children: (0, n.jsxs)("div", {
            className: c.guildInfo,
            children: [(0, n.jsx)(r.default, {
              guild: f,
              size: r.default.Sizes.SMALL
            }), (0, n.jsx)(l.Text, {
              className: c.guildName,
              variant: "text-md/semibold",
              children: f.name
            })]
          })
        }), (0, n.jsxs)("div", {
          className: c.content,
          children: [(0, n.jsx)(l.Button, {
            className: c.button,
            type: "submit",
            color: l.Button.Colors.BRAND,
            size: l.Button.Sizes.MEDIUM,
            children: S.default.Messages.DM_SETTINGS_UPSELL_YES_BUTTON
          }), (0, n.jsx)(l.Button, {
            className: c.button,
            color: l.Button.Colors.PRIMARY,
            onClick: N,
            children: S.default.Messages.DM_SETTINGS_UPSELL_NO_BUTTON
          }), (0, n.jsx)(l.Text, {
            variant: "text-xs/normal",
            className: c.footer,
            children: S.default.Messages.DM_SETTINGS_UPSELL_FOOTER.format({
              onClick: () => {
                N(), (0, i.transitionToGuild)(_), (0, l.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([a.e("99387"), a.e("59500")]).then(a.bind(a, "241420"));
                  return t => (0, n.jsx)(e, {
                    ...t,
                    guild: f
                  })
                })
              }
            })
          })]
        })]
      })]
    })
  })
}