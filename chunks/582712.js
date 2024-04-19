"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("442837"),
  i = a("481060"),
  u = a("920440"),
  r = a("695346"),
  d = a("430824"),
  o = a("346656"),
  c = a("88658"),
  S = a("401416"),
  T = a("689938"),
  _ = a("92522"),
  N = a("444812");

function f(e) {
  let {
    transitionState: t,
    guildId: f,
    onClose: g
  } = e, I = (0, l.useStateFromStores)([d.default], () => d.default.getGuild(f));
  return (s.useEffect(() => {
    (0, S.acknowledgeDmSettingsUpsell)(f)
  }, [f]), null == I) ? null : (0, n.jsx)(i.ModalRoot, {
    transitionState: t,
    className: _.modal,
    children: (0, n.jsxs)("form", {
      onSubmit: e => {
        e.preventDefault();
        let t = new Set((0, c.getSanitizedRestrictedGuilds)());
        t.add(f), r.RestrictedGuildIds.updateSetting(Array.from(t)).then(() => (0, i.showToast)((0, i.createToast)(T.default.Messages.DM_SETTINGS_UPSELL_SUCCESS_TOAST, i.ToastType.SUCCESS))), g()
      },
      children: [(0, n.jsx)("img", {
        alt: "",
        className: _.headerImage,
        src: N
      }), (0, n.jsxs)(i.ModalHeader, {
        separator: !1,
        className: _.header,
        children: [(0, n.jsx)(i.Heading, {
          variant: "heading-lg/bold",
          className: _.title,
          children: T.default.Messages.DM_SETTINGS_UPSELL_TITLE
        }), (0, n.jsx)(i.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          className: _.body,
          children: T.default.Messages.DM_SETTINGS_UPSELL_BODY.format({
            guild_name: I.name
          })
        })]
      }), (0, n.jsxs)(i.ModalContent, {
        children: [(0, n.jsx)(i.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          className: _.subtitle,
          children: T.default.Messages.DM_SETTINGS_UPSELL_SUBTITLE
        }), (0, n.jsx)("div", {
          className: _.guildContainer,
          children: (0, n.jsxs)("div", {
            className: _.guildInfo,
            children: [(0, n.jsx)(o.default, {
              guild: I,
              size: o.default.Sizes.SMALL
            }), (0, n.jsx)(i.Text, {
              className: _.guildName,
              variant: "text-md/semibold",
              children: I.name
            })]
          })
        }), (0, n.jsxs)("div", {
          className: _.content,
          children: [(0, n.jsx)(i.Button, {
            className: _.button,
            type: "submit",
            color: i.Button.Colors.BRAND,
            size: i.Button.Sizes.MEDIUM,
            children: T.default.Messages.DM_SETTINGS_UPSELL_YES_BUTTON
          }), (0, n.jsx)(i.Button, {
            className: _.button,
            color: i.Button.Colors.PRIMARY,
            onClick: g,
            children: T.default.Messages.DM_SETTINGS_UPSELL_NO_BUTTON
          }), (0, n.jsx)(i.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: _.footer,
            children: T.default.Messages.DM_SETTINGS_UPSELL_FOOTER.format({
              onClick: () => {
                g(), (0, u.transitionToGuild)(f), (0, i.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([a.e("99387"), a.e("59500")]).then(a.bind(a, "241420"));
                  return t => (0, n.jsx)(e, {
                    ...t,
                    guild: I
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