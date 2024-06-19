t.r(s), t.d(s, {
  default: function() {
    return A
  }
}), t(47120);
var a = t(735250),
  n = t(470079),
  l = t(120356),
  i = t.n(l),
  r = t(990547),
  c = t(399606),
  o = t(780384),
  d = t(481060),
  _ = t(935369),
  m = t(367907),
  T = t(213609),
  E = t(44315),
  x = t(210887),
  I = t(626135),
  u = t(923726),
  h = t(570849),
  L = t(853439),
  N = t(303737),
  R = t(587431),
  C = t(862239),
  S = t(847004),
  g = t(981631),
  j = t(689938),
  p = t(710368);

function O(e) {
  let {
    name: s,
    imageUrl: t,
    selected: n,
    onTap: l
  } = e;
  return (0, a.jsxs)(d.Clickable, {
    onClick: l,
    className: p.templateCard,
    children: [(0, a.jsx)("img", {
      src: t,
      alt: "",
      className: p.templateCardImage
    }), (0, a.jsxs)("div", {
      className: p.templateNameRow,
      children: [(0, a.jsx)(d.Heading, {
        variant: "heading-md/normal",
        className: i()({
          [p.unselectedTemplateName]: !n
        }),
        children: s
      }), n && (0, a.jsx)(d.CircleCheckIcon, {
        size: "md",
        secondaryColor: (0, E.Lq)(g.Ilk.WHITE_500),
        color: (0, E.Lq)(g.Ilk.BRAND_500)
      })]
    })]
  })
}

function M(e) {
  let {
    loading: s,
    error: t,
    templates: n,
    selectedTemplateIndex: l,
    handleTapTemplate: i
  } = e, r = (0, c.e7)([x.Z], () => x.Z.theme);
  return s ? (0, a.jsx)(d.Spinner, {}) : null != t ? (0, a.jsx)(R.Z, {
    children: t.message
  }) : null == n || 0 === n.length ? null : (0, a.jsx)("div", {
    className: p.templateCardList,
    children: n.map((e, s) => (0, a.jsx)(O, {
      imageUrl: s === l ? e.category_image : (0, o.ap)(r) ? e.unselected_light_theme_category_image : e.unselected_dark_theme_category_image,
      name: e.category,
      selected: s === l,
      onTap: () => i(s)
    }, s))
  })
}

function v(e) {
  var s, t;
  let {
    guildId: l,
    templates: i,
    selectedTemplateIndex: r,
    priceTiers: c,
    showPriceReselection: o,
    setShowPriceReselection: d,
    handleCreateTierFromTemplate: _
  } = e, m = (0, N.g4)(l, c, null != i ? null === (t = i[r]) || void 0 === t ? void 0 : null === (s = t.listings[0]) || void 0 === s ? void 0 : s.price_tier : void 0), T = null != m && m.length > 0, E = n.useCallback(e => {
    T ? d(!0) : _(e)
  }, [_, T, d]);
  return null == i || 0 === i.length ? null : o && T ? (0, a.jsx)(S.Z, {
    selectedTemplate: i[r],
    handleSelectTemplate: _,
    newPricesToPick: m
  }) : (0, a.jsx)(C.Z, {
    selectedTemplate: i[r],
    handleSelectTemplate: E
  })
}

function A(e) {
  let {
    transitionState: s,
    onClose: t,
    guildId: l,
    addNewEditStateFromTemplate: i,
    addNewEditStateFromScratch: o,
    priceTiers: E
  } = e, x = (0, c.e7)([L.Z], () => L.Z.getTemplates(l)), [N, {
    loading: R,
    error: C
  }] = (0, _.Z)(h.u), S = n.useRef("voluntarily_exit");
  n.useEffect(() => {
    (null == x || 0 === x.length) && N(l)
  }, [N, l, x]), n.useEffect(() => {
    s === d.ModalTransitionState.EXITING && I.default.track(g.rMx.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, {
      exit_reason: S.current,
      ...(0, m.hH)(l)
    })
  }, [s, l, S]);
  let [O, A] = n.useState(0), [D, U] = n.useState(!1), P = n.useCallback(e => {
    S.current = "template_selected", (0, h.l)(e, l), i(e), t()
  }, [l, i, t]), f = n.useCallback(() => {
    D ? U(!1) : t()
  }, [D, t]), B = (0, u.yi)(l);
  return (0, T.Z)({
    type: r.ImpressionTypes.MODAL,
    name: r.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR,
    properties: {
      guild_id: l
    }
  }), (0, a.jsxs)(d.ModalRoot, {
    transitionState: s,
    size: d.ModalSize.DYNAMIC,
    className: p.modalRoot,
    children: [(0, a.jsx)(d.Clickable, {
      onClick: f,
      className: p.closeButton,
      children: (0, a.jsx)(d.CloseSmallIcon, {
        size: "xxs",
        color: "currentColor"
      })
    }), (0, a.jsxs)(d.ModalContent, {
      className: p.modalContent,
      children: [(0, a.jsxs)("div", {
        className: p.templatesContainer,
        children: [D && (0, a.jsx)(d.Clickable, {
          className: p.blackoutOverlay,
          onClick: () => {
            D && U(!1)
          },
          "aria-label": "overlay"
        }), (0, a.jsxs)(d.ScrollerThin, {
          className: p.templatesContainerBody,
          children: [(0, a.jsx)(d.Heading, {
            variant: "heading-xl/semibold",
            children: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_HEADER
          }), (0, a.jsx)(d.Text, {
            variant: "text-sm/normal",
            className: p.modalBodyText,
            children: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_BODY
          }), B && (0, a.jsx)(d.Text, {
            variant: "text-sm/normal",
            className: p.creatorPortalText,
            children: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_CREATOR_PORTAL_LINK.format({
              creatorPortalUrl: "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons"
            })
          }), (0, a.jsx)("div", {
            className: p.templatesContentContainer,
            children: (0, a.jsx)(M, {
              loading: R,
              error: C,
              templates: x,
              selectedTemplateIndex: O,
              handleTapTemplate: e => {
                A(e)
              }
            })
          })]
        }), (0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_CREATE_FROM_SCRATCH_PROMPT
        }), (0, a.jsxs)(d.Button, {
          size: d.Button.Sizes.MEDIUM,
          onClick: () => {
            S.current = "create_from_scratch", o(), t()
          },
          look: d.Button.Looks.OUTLINED,
          color: d.Button.Colors.PRIMARY,
          className: p.createFromStratchButton,
          innerClassName: p.createFromStratchButtonInner,
          children: [(0, a.jsx)(d.PencilIcon, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: p.editIcon
          }), j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_CREATE_FROM_SCRATCH_BUTTON]
        })]
      }), (0, a.jsx)(v, {
        guildId: l,
        templates: x,
        selectedTemplateIndex: O,
        priceTiers: E,
        showPriceReselection: D,
        setShowPriceReselection: U,
        handleCreateTierFromTemplate: P
      })]
    })]
  })
}