"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  i = s("990547"),
  n = s("481060"),
  d = s("458879"),
  r = s("996453"),
  o = s("601964"),
  u = s("99325"),
  c = s("454432"),
  C = s("492749"),
  m = s("66626"),
  f = s("892322"),
  _ = s("15608"),
  E = s("486527"),
  T = s("264603");

function x(e) {
  let {
    directoryChannelId: t,
    transitionState: s,
    initialSlide: x = E.CreateOrAddGuildSlideTypes.CHOOSE_GUILD,
    onClose: I,
    directoryGuildName: L,
    directoryGuildId: h,
    currentCategoryId: g
  } = e, [S, N] = a.useState(x), [M, p] = a.useState(null), [A, j] = a.useState(null), [U, B] = a.useState(null), [D, H] = a.useState(null), [O, G] = a.useState(null), [R, v] = a.useState(""), [y, b] = a.useState(null != g ? g : E.DirectoryEntryCategories.UNCATEGORIZED), [F, k] = a.useState(!1), {
    availableGuilds: Z,
    addedGuilds: V,
    loading: w
  } = (0, c.default)(h, t);
  a.useEffect(() => {
    N(x)
  }, [N, x]);
  let P = async () => {
    let e = O;
    if (!F) {
      if (null == U || null == A) return;
      let t = await d.default.createGuildFromTemplate(U, D, A);
      G(e = new o.default(t))
    }
    null != e && (await u.addDirectoryGuildEntry(t, e.id, R, y), N(E.CreateOrAddGuildSlideTypes.CONFIRMATION))
  }, z = {
    impression_group: i.ImpressionGroups.DIRECTORY_GUILD_ADD_FLOW
  };
  return (0, l.jsx)("div", {
    children: (0, l.jsx)(n.ModalRoot, {
      transitionState: s,
      disableTrack: !0,
      children: (0, l.jsx)("div", {
        className: T.container,
        children: (0, l.jsxs)(n.Slides, {
          activeSlide: S,
          width: 440,
          onSlideReady: e => p(e),
          children: [(0, l.jsx)(n.Slide, {
            id: E.CreateOrAddGuildSlideTypes.CHOOSE_GUILD,
            impressionName: i.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
            impressionProperties: z,
            children: (0, l.jsx)(C.default, {
              directoryChannelId: t,
              directoryGuildName: L,
              onGuildChosen: e => {
                k(!0), N(E.CreateOrAddGuildSlideTypes.CUSTOMIZE_EXISTING_GUILD), G(e)
              },
              handleChooseCreate: () => {
                k(!1), N(E.CreateOrAddGuildSlideTypes.GUILD_TEMPLATES)
              },
              onClose: I,
              availableGuilds: Z,
              addedGuilds: V,
              loading: w
            })
          }), (0, l.jsx)(n.Slide, {
            id: E.CreateOrAddGuildSlideTypes.GUILD_TEMPLATES,
            impressionName: i.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
            impressionProperties: z,
            children: (0, l.jsx)(_.default, {
              directoryGuildName: L,
              onChooseTemplate: e => {
                k(!1), N(E.CreateOrAddGuildSlideTypes.CUSTOMIZE_NEW_GUILD), j(e)
              },
              onClose: I,
              onBack: () => N(E.CreateOrAddGuildSlideTypes.CHOOSE_GUILD)
            })
          }), (0, l.jsx)(n.Slide, {
            id: E.CreateOrAddGuildSlideTypes.CUSTOMIZE_NEW_GUILD,
            impressionName: i.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
            impressionProperties: z,
            children: (0, l.jsx)(r.default, {
              guildTemplate: A,
              onHubGuildInfoSet: (e, t) => {
                B(e), H(t), N(E.CreateOrAddGuildSlideTypes.CUSTOMIZE_EXISTING_GUILD)
              },
              onClose: I,
              onBack: () => N(E.CreateOrAddGuildSlideTypes.GUILD_TEMPLATES),
              isSlideReady: M === E.CreateOrAddGuildSlideTypes.CUSTOMIZE_NEW_GUILD
            })
          }), (0, l.jsx)(n.Slide, {
            id: E.CreateOrAddGuildSlideTypes.CUSTOMIZE_EXISTING_GUILD,
            impressionName: i.ImpressionNames.HUB_EXISTING_GUILD_CUSTOMIZE,
            impressionProperties: z,
            children: (0, l.jsx)(m.default, {
              directoryChannelId: t,
              description: R,
              onDescriptionChange: v,
              categoryId: y,
              onCategoryIdChange: b,
              onSubmit: P,
              onBack: () => N(F ? E.CreateOrAddGuildSlideTypes.CHOOSE_GUILD : E.CreateOrAddGuildSlideTypes.CUSTOMIZE_NEW_GUILD),
              onClose: I
            })
          }), (0, l.jsx)(n.Slide, {
            id: E.CreateOrAddGuildSlideTypes.CONFIRMATION,
            impressionName: i.ImpressionNames.DIRECTORY_ADD_GUILD_CONFIRMATION,
            impressionProperties: z,
            children: (0, l.jsx)(f.default, {
              directoryGuildName: L,
              guildToAdd: O,
              isExistingGuildFlow: F,
              onClose: I
            })
          })]
        })
      })
    })
  })
}