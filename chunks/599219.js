n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  r = n(120356),
  l = n.n(r),
  o = n(990547),
  i = n(442837),
  c = n(481060),
  d = n(393238),
  u = n(215292),
  E = n(382086),
  p = n(996453),
  h = n(446706),
  m = n(594174),
  _ = n(285952),
  f = n(153124),
  N = n(626135),
  T = n(792125),
  v = n(179645),
  x = n(436046),
  A = n(963209),
  I = n(436457),
  C = n(877758),
  g = n(701476),
  b = n(785997),
  M = n(981631),
  O = n(834891),
  S = n(675999),
  R = n(689938),
  j = n(616054);

function G(e) {
  let t;
  let n = (0, f.Dt)(),
    {
      onSlideChange: r,
      ...G
    } = e,
    {
      onClose: D
    } = G,
    [Z, y] = a.useState(!1),
    F = (0, i.e7)([m.default], () => m.default.getCurrentUser()),
    L = null != F && null == F.nsfwAllowed,
    [k, U] = a.useState(L ? b.F.AGE_GATE : b.F.CHOOSE_TEMPLATE),
    [P, w] = a.useState(null);
  a.useEffect(() => {
    r(Z ? b.F.COMPLETE : k)
  }, [r, k, Z]);
  let [B, H] = a.useState(null), [V, Y] = a.useState(null), [z, J] = a.useState(!1), W = (0, i.e7)([v.Z], () => v.Z.getType() === g.M5.INVITE_UNCLAIMED), K = a.useCallback(e => {
    Y(e), U(b.F.CREATION_INTENT), N.default.track(M.rMx.GUILD_TEMPLATE_SELECTED, {
      template_name: e.label,
      template_code: e.code
    })
  }, [Y, U]), {
    content: X,
    footer: q
  } = (0, E.v)({
    hasFooter: !1,
    onBack: () => {
      Y(null), U(b.F.CHOOSE_TEMPLATE)
    },
    onCreationIntentChosen: e => {
      J(e === S.lr.COMMUNITY), U(b.F.CUSTOMIZE_GUILD)
    }
  }), {
    content: Q,
    footer: $
  } = (0, p.G)({
    guildTemplate: V,
    titleClassName: j.customizeGuildTitle,
    hasFooter: !1,
    onGuildCreated: e => {
      H(e), (null == V ? void 0 : V.id) === O.l.CREATE ? U(b.F.CHANNEL_PROMPT) : y(!0)
    },
    onBack: () => {
      U(b.F.CREATION_INTENT)
    },
    isSlideReady: P === b.F.CUSTOMIZE_GUILD,
    isCommunity: z
  }), {
    content: ee,
    footer: et
  } = (0, u.F)({
    createdGuildId: B,
    hasFooter: !1,
    onChannelPromptCompleted: () => {
      y(!0)
    },
    isSlideReady: P === b.F.CHANNEL_PROMPT
  }), {
    content: en,
    footer: es
  } = (0, I.Z)({
    onBack: () => U(b.F.CHOOSE_TEMPLATE),
    onComplete: () => {
      D()
    },
    onConnect: D,
    isSlideReady: P === b.F.JOIN_GUILD
  });
  switch (k) {
    case b.F.CUSTOMIZE_GUILD:
      t = $;
      break;
    case b.F.CHANNEL_PROMPT:
      t = et;
      break;
    case b.F.JOIN_GUILD:
      t = es;
      break;
    case b.F.CREATION_INTENT:
      t = q
  }
  let {
    ref: ea,
    width: er
  } = (0, d.Z)();
  if (Z) return (0, s.jsx)(c.ModalRoot, {
    ...G,
    size: c.ModalSize.MEDIUM,
    className: l()(j.modal, j.completed),
    "aria-labelledby": n,
    children: (0, s.jsx)(A.Z, {
      onComplete: D
    })
  });
  let el = {
    impression_group: o.ImpressionGroups.GUILD_ADD_NUF
  };
  return (0, s.jsxs)(c.ModalRoot, {
    ...G,
    size: c.ModalSize.MEDIUM,
    className: j.modal,
    "aria-labelledby": n,
    children: [(0, s.jsx)("div", {
      className: j.sidebar,
      children: (0, s.jsx)(C.Z, {
        step: k
      })
    }), (0, s.jsxs)("div", {
      className: l()(j.content, (0, T.Q)(M.BRd.LIGHT)),
      ref: ea,
      children: [(0, s.jsx)("div", {
        className: j.slidesContainer,
        children: (0, s.jsxs)(c.Slides, {
          activeSlide: k,
          onSlideReady: e => w(e),
          centered: !1,
          width: er,
          children: [(0, s.jsx)(c.Slide, {
            id: b.F.AGE_GATE,
            children: (0, s.jsx)("div", {
              className: j.container,
              children: (0, s.jsx)(x.Z, {
                onComplete: () => {
                  W ? D() : U(b.F.CHOOSE_TEMPLATE)
                },
                onClose: D
              })
            })
          }), (0, s.jsx)(c.Slide, {
            id: b.F.CHOOSE_TEMPLATE,
            impressionName: o.ImpressionNames.GUILD_ADD_LANDING,
            impressionProperties: el,
            children: (0, s.jsx)("div", {
              className: l()(j.container, j.shortFooter),
              children: (0, s.jsx)(h.Z, {
                className: j.templates,
                onChooseTemplate: K,
                isNewUser: !0
              })
            })
          }), (0, s.jsx)(c.Slide, {
            id: b.F.CREATION_INTENT,
            impressionName: o.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
            impressionProperties: el,
            children: (0, s.jsx)("div", {
              className: l()(j.container, j.standardFooter),
              children: X
            })
          }), (0, s.jsx)(c.Slide, {
            id: b.F.CUSTOMIZE_GUILD,
            impressionName: o.ImpressionNames.GUILD_ADD_CUSTOMIZE,
            impressionProperties: el,
            children: (0, s.jsx)("div", {
              className: l()(j.container, j.standardFooter),
              children: Q
            })
          }), (0, s.jsx)(c.Slide, {
            id: b.F.CHANNEL_PROMPT,
            impressionName: o.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
            impressionProperties: el,
            children: (0, s.jsx)("div", {
              className: l()(j.container, j.standardFooter),
              children: ee
            })
          }), (0, s.jsx)(c.Slide, {
            id: b.F.JOIN_GUILD,
            impressionName: o.ImpressionNames.GUILD_ADD_JOIN,
            impressionProperties: el,
            children: (0, s.jsx)("div", {
              className: l()(j.container, j.standardFooter),
              children: en
            })
          })]
        })
      }), k !== b.F.AGE_GATE ? (0, s.jsx)(c.ModalCloseButton, {
        onClick: D,
        className: j.closeButton
      }) : null, k === b.F.CHOOSE_TEMPLATE ? (0, s.jsx)(c.ModalFooter, {
        justify: _.Z.Justify.BETWEEN,
        className: l()(j.footer, j.join),
        children: (0, s.jsx)(c.Anchor, {
          className: j.joinCTA,
          onClick: () => {
            U(b.F.JOIN_GUILD)
          },
          children: (0, s.jsxs)(c.Text, {
            variant: "text-sm/medium",
            className: j.joinCTA,
            children: [R.Z.Messages.NUF_HAVE_AN_INVITE_ALREADY, " ", R.Z.Messages.JOIN_SERVER_BUTTON_CTA]
          })
        })
      }) : null, null != t ? (0, s.jsx)(c.ModalFooter, {
        justify: _.Z.Justify.BETWEEN,
        className: j.footer,
        children: t
      }) : null]
    })]
  })
}