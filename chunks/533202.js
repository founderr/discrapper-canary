t.r(s), t.d(s, {
  default: function() {
    return I
  }
}), t(47120);
var a = t(735250),
  l = t(470079),
  n = t(990547),
  i = t(481060),
  o = t(458879),
  r = t(996453),
  c = t(601964),
  d = t(99325),
  u = t(454432),
  C = t(492749),
  m = t(66626),
  E = t(892322),
  _ = t(15608),
  x = t(486527),
  L = t(942693);

function I(e) {
  let {
    directoryChannelId: s,
    transitionState: t,
    initialSlide: I = x.VX.CHOOSE_GUILD,
    onClose: T,
    directoryGuildName: h,
    directoryGuildId: g,
    currentCategoryId: N
  } = e, [M, Z] = l.useState(I), [j, S] = l.useState(null), [U, B] = l.useState(null), [p, f] = l.useState(null), [A, D] = l.useState(null), [R, H] = l.useState(null), [O, v] = l.useState(""), [G, b] = l.useState(null != N ? N : x.AR.UNCATEGORIZED), [y, V] = l.useState(!1), {
    availableGuilds: k,
    addedGuilds: F,
    loading: w
  } = (0, u.Z)(g, s);
  l.useEffect(() => {
    Z(I)
  }, [Z, I]);
  let P = async () => {
    let e = R;
    if (!y) {
      if (null == p || null == U) return;
      let s = await o.Z.createGuildFromTemplate(p, A, U);
      H(e = new c.ZP(s))
    }
    null != e && (await d.bF(s, e.id, O, G), Z(x.VX.CONFIRMATION))
  }, X = {
    impression_group: n.ImpressionGroups.DIRECTORY_GUILD_ADD_FLOW
  };
  return (0, a.jsx)("div", {
    children: (0, a.jsx)(i.ModalRoot, {
      transitionState: t,
      disableTrack: !0,
      children: (0, a.jsx)("div", {
        className: L.container,
        children: (0, a.jsxs)(i.Slides, {
          activeSlide: M,
          width: 440,
          onSlideReady: e => S(e),
          children: [(0, a.jsx)(i.Slide, {
            id: x.VX.CHOOSE_GUILD,
            impressionName: n.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
            impressionProperties: X,
            children: (0, a.jsx)(C.Z, {
              directoryChannelId: s,
              directoryGuildName: h,
              onGuildChosen: e => {
                V(!0), Z(x.VX.CUSTOMIZE_EXISTING_GUILD), H(e)
              },
              handleChooseCreate: () => {
                V(!1), Z(x.VX.GUILD_TEMPLATES)
              },
              onClose: T,
              availableGuilds: k,
              addedGuilds: F,
              loading: w
            })
          }), (0, a.jsx)(i.Slide, {
            id: x.VX.GUILD_TEMPLATES,
            impressionName: n.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
            impressionProperties: X,
            children: (0, a.jsx)(_.Z, {
              directoryGuildName: h,
              onChooseTemplate: e => {
                V(!1), Z(x.VX.CUSTOMIZE_NEW_GUILD), B(e)
              },
              onClose: T,
              onBack: () => Z(x.VX.CHOOSE_GUILD)
            })
          }), (0, a.jsx)(i.Slide, {
            id: x.VX.CUSTOMIZE_NEW_GUILD,
            impressionName: n.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
            impressionProperties: X,
            children: (0, a.jsx)(r.Z, {
              guildTemplate: U,
              onHubGuildInfoSet: (e, s) => {
                f(e), D(s), Z(x.VX.CUSTOMIZE_EXISTING_GUILD)
              },
              onClose: T,
              onBack: () => Z(x.VX.GUILD_TEMPLATES),
              isSlideReady: j === x.VX.CUSTOMIZE_NEW_GUILD
            })
          }), (0, a.jsx)(i.Slide, {
            id: x.VX.CUSTOMIZE_EXISTING_GUILD,
            impressionName: n.ImpressionNames.HUB_EXISTING_GUILD_CUSTOMIZE,
            impressionProperties: X,
            children: (0, a.jsx)(m.Z, {
              directoryChannelId: s,
              description: O,
              onDescriptionChange: v,
              categoryId: G,
              onCategoryIdChange: b,
              onSubmit: P,
              onBack: () => Z(y ? x.VX.CHOOSE_GUILD : x.VX.CUSTOMIZE_NEW_GUILD),
              onClose: T
            })
          }), (0, a.jsx)(i.Slide, {
            id: x.VX.CONFIRMATION,
            impressionName: n.ImpressionNames.DIRECTORY_ADD_GUILD_CONFIRMATION,
            impressionProperties: X,
            children: (0, a.jsx)(E.Z, {
              directoryGuildName: h,
              guildToAdd: R,
              isExistingGuildFlow: y,
              onClose: T
            })
          })]
        })
      })
    })
  })
}