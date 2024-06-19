n.d(t, {
  Z: function() {
    return C
  }
}), n(47120);
var l = n(735250),
  s = n(470079),
  r = n(512722),
  a = n.n(r),
  i = n(990547),
  o = n(481060),
  c = n(110924),
  u = n(626135),
  _ = n(215292),
  I = n(382086),
  E = n(996453),
  d = n(446706),
  N = n(867581),
  T = n(675999),
  m = n(981631),
  S = n(656999);

function C(e) {
  let {
    transitionState: t,
    initialSlide: n = T._m.GUILD_TEMPLATES,
    onSuccess: r,
    onClose: C,
    onSlideChange: p,
    hasJoinButton: L
  } = e, [A, D] = s.useState(n), f = (0, c.Z)(A), [M, O] = s.useState(null), [U, R] = s.useState(null), [G, g] = s.useState(null), [h, v] = s.useState(!1);
  s.useEffect(() => {
    D(n)
  }, [D, n]), s.useEffect(() => {
    A !== f && p(A)
  }, [p, A, f]);
  let x = s.useCallback(e => {
      D(T._m.CREATION_INTENT), R(e), u.default.track(m.rMx.GUILD_TEMPLATE_SELECTED, {
        template_name: e.id,
        template_code: e.code
      })
    }, []),
    Z = s.useCallback(e => {
      v(e === T.lr.COMMUNITY), D(T._m.CUSTOMIZE_GUILD)
    }, []),
    w = s.useCallback(() => D(T._m.JOIN_GUILD), [D]),
    P = s.useCallback(() => {
      if (A === T._m.CUSTOMIZE_GUILD) {
        D(T._m.CREATION_INTENT);
        return
      }
      D(T._m.GUILD_TEMPLATES), R(null)
    }, [A]),
    k = s.useCallback(e => {
      g(e), r(e)
    }, [r, g]),
    j = s.useCallback(() => {
      a()(null != G, "handleSuccess called before onGuildCreated"), r(G)
    }, [r, G]),
    F = {
      impression_group: i.ImpressionGroups.GUILD_ADD_FLOW
    };
  return (0, l.jsx)("div", {
    children: (0, l.jsx)(o.ModalRoot, {
      transitionState: t,
      disableTrack: !0,
      children: (0, l.jsx)("div", {
        className: S.container,
        children: (0, l.jsxs)(o.Slides, {
          activeSlide: A,
          width: 440,
          onSlideReady: e => O(e),
          children: [(0, l.jsx)(o.Slide, {
            id: T._m.GUILD_TEMPLATES,
            impressionName: i.ImpressionNames.GUILD_ADD_LANDING,
            impressionProperties: F,
            children: (0, l.jsx)(d.Z, {
              isNewUser: !1,
              onJoin: L ? w : void 0,
              onChooseTemplate: x,
              onClose: C
            })
          }), (0, l.jsx)(o.Slide, {
            id: T._m.CREATION_INTENT,
            impressionName: i.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
            impressionProperties: F,
            children: (0, l.jsx)(I.Z, {
              onClose: C,
              onBack: P,
              onCreationIntentChosen: Z
            })
          }), (0, l.jsx)(o.Slide, {
            id: T._m.CUSTOMIZE_GUILD,
            impressionName: i.ImpressionNames.GUILD_ADD_CUSTOMIZE,
            impressionProperties: F,
            children: (0, l.jsx)(E.Z, {
              guildTemplate: U,
              onGuildCreated: k,
              onClose: C,
              onBack: P,
              isSlideReady: M === T._m.CUSTOMIZE_GUILD,
              isCommunity: h
            })
          }), (0, l.jsx)(o.Slide, {
            id: T._m.CHANNEL_PROMPT,
            impressionName: i.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
            impressionProperties: F,
            children: (0, l.jsx)(_.Z, {
              createdGuildId: G,
              onClose: C,
              onChannelPromptCompleted: j,
              isSlideReady: M === T._m.CHANNEL_PROMPT
            })
          }), (0, l.jsx)(o.Slide, {
            id: T._m.JOIN_GUILD,
            impressionName: i.ImpressionNames.GUILD_ADD_JOIN,
            impressionProperties: F,
            children: (0, l.jsx)(N.Z, {
              onBack: P,
              onClose: C,
              isSlideReady: M === T._m.JOIN_GUILD
            })
          })]
        })
      })
    })
  })
}