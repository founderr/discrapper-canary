n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n(47120);
var a = n(735250),
  s = n(470079),
  l = n(286379),
  r = n(442837),
  i = n(481060),
  u = n(797614),
  o = n(769654),
  S = n(695346),
  _ = n(430824),
  T = n(346656),
  d = n(88658),
  c = n(401416),
  N = n(920133),
  E = n(689938),
  I = n(432109),
  M = n(444812);

function G(e) {
  let {
    transitionState: t,
    guildId: G,
    onClose: g
  } = e, m = (0, r.e7)([_.Z], () => _.Z.getGuild(G));
  return (s.useEffect(() => {
    (0, c.Y)(G), (0, N.L)(N.Q.MODAL_VIEWED, G), u.Z.increment({
      name: l.V.DM_SETTINGS_UPSELL_VIEW
    })
  }, [G]), null == m) ? null : (0, a.jsx)(i.ModalRoot, {
    transitionState: t,
    className: I.modal,
    children: (0, a.jsxs)("form", {
      onSubmit: e => {
        e.preventDefault();
        let t = new Set((0, d.YK)());
        t.add(G), S.h2.updateSetting(Array.from(t)).then(() => (0, i.showToast)((0, i.createToast)(E.Z.Messages.DM_SETTINGS_UPSELL_SUCCESS_TOAST, i.ToastType.SUCCESS))), g(), (0, N.L)(N.Q.MODAL_DISABLED_DMS, G)
      },
      children: [(0, a.jsx)("img", {
        alt: "",
        className: I.headerImage,
        src: M
      }), (0, a.jsxs)(i.ModalHeader, {
        separator: !1,
        className: I.header,
        children: [(0, a.jsx)(i.Heading, {
          variant: "heading-lg/bold",
          className: I.title,
          children: E.Z.Messages.DM_SETTINGS_UPSELL_TITLE
        }), (0, a.jsx)(i.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          className: I.body,
          children: E.Z.Messages.DM_SETTINGS_UPSELL_BODY.format({
            guild_name: m.name
          })
        })]
      }), (0, a.jsxs)(i.ModalContent, {
        children: [(0, a.jsx)(i.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          className: I.subtitle,
          children: E.Z.Messages.DM_SETTINGS_UPSELL_SUBTITLE
        }), (0, a.jsx)("div", {
          className: I.guildContainer,
          children: (0, a.jsxs)("div", {
            className: I.guildInfo,
            children: [(0, a.jsx)(T.Z, {
              guild: m,
              size: T.Z.Sizes.SMALL
            }), (0, a.jsx)(i.Text, {
              className: I.guildName,
              variant: "text-md/semibold",
              children: m.name
            })]
          })
        }), (0, a.jsxs)("div", {
          className: I.content,
          children: [(0, a.jsx)(i.Button, {
            className: I.button,
            type: "submit",
            color: i.Button.Colors.BRAND,
            size: i.Button.Sizes.MEDIUM,
            children: E.Z.Messages.DM_SETTINGS_UPSELL_YES_BUTTON
          }), (0, a.jsx)(i.Button, {
            className: I.button,
            color: i.Button.Colors.PRIMARY,
            onClick: () => {
              g(), (0, N.L)(N.Q.MODAL_DISMISSED, G)
            },
            children: E.Z.Messages.DM_SETTINGS_UPSELL_NO_BUTTON
          }), (0, a.jsx)(i.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: I.footer,
            children: E.Z.Messages.DM_SETTINGS_UPSELL_FOOTER.format({
              onClick: () => {
                g(), (0, o.X)(G), (0, i.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([n.e("99387"), n.e("88408")]).then(n.bind(n, 241420));
                  return t => (0, a.jsx)(e, {
                    ...t,
                    guild: m
                  })
                }), (0, N.L)(N.Q.MODAL_GUILD_SETTINGS_CLICKED, G)
              }
            })
          })]
        })]
      })]
    })
  })
}