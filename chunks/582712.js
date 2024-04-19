"use strict";
a.r(t), a.d(t, {
  default: function() {
    return I
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("442837"),
  i = a("481060"),
  r = a("920440"),
  u = a("695346"),
  d = a("430824"),
  o = a("346656"),
  c = a("88658"),
  S = a("401416"),
  T = a("920133"),
  _ = a("689938"),
  N = a("92522"),
  E = a("444812");

function I(e) {
  let {
    transitionState: t,
    guildId: I,
    onClose: f
  } = e, g = (0, l.useStateFromStores)([d.default], () => d.default.getGuild(I));
  return (s.useEffect(() => {
    (0, T.trackEvent)(T.DmUpsellActionTypes.MODAL_VIEWED, I), (0, S.acknowledgeDmSettingsUpsell)(I)
  }, [I]), null == g) ? null : (0, n.jsx)(i.ModalRoot, {
    transitionState: t,
    className: N.modal,
    children: (0, n.jsxs)("form", {
      onSubmit: e => {
        e.preventDefault();
        let t = new Set((0, c.getSanitizedRestrictedGuilds)());
        t.add(I), u.RestrictedGuildIds.updateSetting(Array.from(t)).then(() => (0, i.showToast)((0, i.createToast)(_.default.Messages.DM_SETTINGS_UPSELL_SUCCESS_TOAST, i.ToastType.SUCCESS))), f(), (0, T.trackEvent)(T.DmUpsellActionTypes.MODAL_DISABLED_DMS, I)
      },
      children: [(0, n.jsx)("img", {
        alt: "",
        className: N.headerImage,
        src: E
      }), (0, n.jsxs)(i.ModalHeader, {
        separator: !1,
        className: N.header,
        children: [(0, n.jsx)(i.Heading, {
          variant: "heading-lg/bold",
          className: N.title,
          children: _.default.Messages.DM_SETTINGS_UPSELL_TITLE
        }), (0, n.jsx)(i.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          className: N.body,
          children: _.default.Messages.DM_SETTINGS_UPSELL_BODY.format({
            guild_name: g.name
          })
        })]
      }), (0, n.jsxs)(i.ModalContent, {
        children: [(0, n.jsx)(i.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          className: N.subtitle,
          children: _.default.Messages.DM_SETTINGS_UPSELL_SUBTITLE
        }), (0, n.jsx)("div", {
          className: N.guildContainer,
          children: (0, n.jsxs)("div", {
            className: N.guildInfo,
            children: [(0, n.jsx)(o.default, {
              guild: g,
              size: o.default.Sizes.SMALL
            }), (0, n.jsx)(i.Text, {
              className: N.guildName,
              variant: "text-md/semibold",
              children: g.name
            })]
          })
        }), (0, n.jsxs)("div", {
          className: N.content,
          children: [(0, n.jsx)(i.Button, {
            className: N.button,
            type: "submit",
            color: i.Button.Colors.BRAND,
            size: i.Button.Sizes.MEDIUM,
            children: _.default.Messages.DM_SETTINGS_UPSELL_YES_BUTTON
          }), (0, n.jsx)(i.Button, {
            className: N.button,
            color: i.Button.Colors.PRIMARY,
            onClick: () => {
              f(), (0, T.trackEvent)(T.DmUpsellActionTypes.MODAL_DISMISSED, I)
            },
            children: _.default.Messages.DM_SETTINGS_UPSELL_NO_BUTTON
          }), (0, n.jsx)(i.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: N.footer,
            children: _.default.Messages.DM_SETTINGS_UPSELL_FOOTER.format({
              onClick: () => {
                f(), (0, r.transitionToGuild)(I), (0, i.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([a.e("99387"), a.e("59500")]).then(a.bind(a, "241420"));
                  return t => (0, n.jsx)(e, {
                    ...t,
                    guild: g
                  })
                }), (0, T.trackEvent)(T.DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED, I)
              }
            })
          })]
        })]
      })]
    })
  })
}