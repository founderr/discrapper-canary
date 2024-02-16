"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var r = n("37983"),
  i = n("884691"),
  l = n("627445"),
  s = n.n(l),
  a = n("759843"),
  o = n("77078"),
  u = n("84339"),
  c = n("599110"),
  d = n("818351"),
  f = n("21214"),
  _ = n("622210"),
  h = n("72405"),
  p = n("110337"),
  E = n("243338"),
  I = n("49111"),
  m = n("784505");

function g(e) {
  let {
    transitionState: t,
    initialSlide: n = E.CreateGuildSlideTypes.GUILD_TEMPLATES,
    onSuccess: l,
    onClose: g,
    onSlideChange: T,
    hasJoinButton: S
  } = e, [A, C] = i.useState(n), N = (0, u.default)(A), [v, L] = i.useState(null), [w, R] = i.useState(null), [M, O] = i.useState(null), [D, b] = i.useState(!1);
  i.useEffect(() => {
    C(n)
  }, [C, n]), i.useEffect(() => {
    A !== N && T(A)
  }, [T, A, N]);
  let U = i.useCallback(e => {
      C(E.CreateGuildSlideTypes.CREATION_INTENT), R(e), c.default.track(I.AnalyticEvents.GUILD_TEMPLATE_SELECTED, {
        template_name: e.id,
        template_code: e.code
      })
    }, []),
    G = i.useCallback(e => {
      b(e), C(E.CreateGuildSlideTypes.CUSTOMIZE_GUILD)
    }, []),
    y = i.useCallback(() => C(E.CreateGuildSlideTypes.JOIN_GUILD), [C]),
    x = i.useCallback(() => {
      if (A === E.CreateGuildSlideTypes.CUSTOMIZE_GUILD) {
        C(E.CreateGuildSlideTypes.CREATION_INTENT);
        return
      }
      C(E.CreateGuildSlideTypes.GUILD_TEMPLATES), R(null)
    }, [A]),
    P = i.useCallback(e => {
      O(e), l(e)
    }, [l, O]),
    F = i.useCallback(() => {
      s(null != M, "handleSuccess called before onGuildCreated"), l(M)
    }, [l, M]),
    k = {
      impression_group: a.ImpressionGroups.GUILD_ADD_FLOW
    };
  return (0, r.jsx)("div", {
    children: (0, r.jsx)(o.ModalRoot, {
      transitionState: t,
      disableTrack: !0,
      children: (0, r.jsx)("div", {
        className: m.container,
        children: (0, r.jsxs)(o.Slides, {
          activeSlide: A,
          width: 440,
          onSlideReady: e => L(e),
          children: [(0, r.jsx)(o.Slide, {
            id: E.CreateGuildSlideTypes.GUILD_TEMPLATES,
            impressionName: a.ImpressionNames.GUILD_ADD_LANDING,
            impressionProperties: k,
            children: (0, r.jsx)(h.default, {
              isNewUser: !1,
              onJoin: S ? y : void 0,
              onChooseTemplate: U,
              onClose: g
            })
          }), (0, r.jsx)(o.Slide, {
            id: E.CreateGuildSlideTypes.CREATION_INTENT,
            impressionName: a.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
            impressionProperties: k,
            children: (0, r.jsx)(f.default, {
              onClose: g,
              onBack: x,
              onCreationIntentChosen: G
            })
          }), (0, r.jsx)(o.Slide, {
            id: E.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
            impressionName: a.ImpressionNames.GUILD_ADD_CUSTOMIZE,
            impressionProperties: k,
            children: (0, r.jsx)(_.default, {
              guildTemplate: w,
              onGuildCreated: P,
              onClose: g,
              onBack: x,
              isSlideReady: v === E.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
              isCommunity: D
            })
          }), (0, r.jsx)(o.Slide, {
            id: E.CreateGuildSlideTypes.CHANNEL_PROMPT,
            impressionName: a.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
            impressionProperties: k,
            children: (0, r.jsx)(d.default, {
              createdGuildId: M,
              onClose: g,
              onChannelPromptCompleted: F,
              isSlideReady: v === E.CreateGuildSlideTypes.CHANNEL_PROMPT
            })
          }), (0, r.jsx)(o.Slide, {
            id: E.CreateGuildSlideTypes.JOIN_GUILD,
            impressionName: a.ImpressionNames.GUILD_ADD_JOIN,
            impressionProperties: k,
            children: (0, r.jsx)(p.default, {
              onBack: x,
              onClose: g,
              isSlideReady: v === E.CreateGuildSlideTypes.JOIN_GUILD
            })
          })]
        })
      })
    })
  })
}