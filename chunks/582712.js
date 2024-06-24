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
                  } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("77298"), n.e("23357"), n.e("23755"), n.e("19503"), n.e("89350"), n.e("39709"), n.e("15972"), n.e("12013"), n.e("29549"), n.e("6416"), n.e("43906"), n.e("32776"), n.e("95900"), n.e("8016"), n.e("33053"), n.e("68136"), n.e("31605"), n.e("19464"), n.e("6380"), n.e("76540"), n.e("11250"), n.e("4934"), n.e("22646"), n.e("57878"), n.e("18101"), n.e("65840"), n.e("87624"), n.e("77172"), n.e("67535"), n.e("95393"), n.e("86977"), n.e("5528"), n.e("44517"), n.e("43331"), n.e("81539"), n.e("30419"), n.e("18824"), n.e("90508"), n.e("8739"), n.e("58286"), n.e("31649"), n.e("41947"), n.e("41662"), n.e("97403"), n.e("30243"), n.e("3084"), n.e("88646"), n.e("49508"), n.e("68241"), n.e("97458"), n.e("12549"), n.e("21078"), n.e("37269"), n.e("56399"), n.e("77594"), n.e("54535"), n.e("54443"), n.e("93770"), n.e("35271"), n.e("37941"), n.e("42225")]).then(n.bind(n, 241420));
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