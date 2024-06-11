"use strict";
l.r(t), l.d(t, {
  default: function() {
    return C
  }
}), l("47120");
var a = l("735250"),
  n = l("470079"),
  o = l("120356"),
  r = l.n(o),
  i = l("920906"),
  s = l("399606"),
  u = l("692547"),
  d = l("780384"),
  c = l("481060"),
  m = l("596454"),
  f = l("410030"),
  h = l("339085"),
  v = l("14263"),
  g = l("283027"),
  x = l("689938"),
  p = l("46576");

function C(e) {
  let {
    guildId: t,
    option: l,
    selected: o,
    onSelect: C,
    hideMemberCount: N,
    canBeNew: j
  } = e, _ = (0, d.isThemeDark)((0, f.default)()), [O, T] = n.useState(!1), S = O && !N, M = n.useRef(null), {
    reducedMotion: A
  } = n.useContext(c.AccessibilityPreferencesContext), I = (0, s.useStateFromStores)([h.default], () => {
    var e, t, a, n;
    return (null === (e = l.emoji) || void 0 === e ? void 0 : e.id) != null && null !== (n = null === (t = h.default.getCustomEmojiById(null === (a = l.emoji) || void 0 === a ? void 0 : a.id)) || void 0 === t ? void 0 : t.animated) && void 0 !== n && n
  }), E = (0, v.default)(t, 1e3), b = null == E || null == l.roleIds ? 0 : Math.max(...l.roleIds.map(e => E[e])), D = j && !o && l.isUnseen, L = (0, i.useSpring)({
    transform: o || A.enabled ? "scale(1)" : "scale(0.7)",
    opacity: o ? 1 : 0,
    config: {
      duration: 150
    }
  }), k = (0, c.useToken)(u.default.colors.BACKGROUND_MODIFIER_ACCENT), y = (0, c.useToken)(u.default.unsafe_rawColors.BRAND_500), R = (0, i.useSpring)({
    from: {
      color: y.spring()
    },
    color: k.spring({
      opacity: _ ? .5 : .25
    }),
    config: {
      duration: 300
    },
    delay: 500
  }), w = (0, i.useTransition)(S, {
    from: {
      transform: A.enabled ? "translateX(0)" : "translateX(8px)",
      opacity: 0
    },
    enter: {
      transform: "translateX(0)",
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    trail: 400,
    config: {
      duration: 150
    }
  }), [B, P] = n.useState(!1);
  n.useEffect(() => {
    if (S) return M.current = setTimeout(() => {
      T(!1), M.current = null
    }, 3e3), () => {
      null != M.current && clearTimeout(M.current)
    }
  }, [S]);
  let U = r()(p.optionButtonWrapper, {
      [p.selected]: o,
      [p.pressed]: B
    }),
    H = D ? {
      borderColor: R.color
    } : {};
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsx)(i.animated.div, {
      style: H,
      className: U,
      children: (0, a.jsxs)(c.Clickable, {
        className: r()(p.optionButton),
        onClick: () => {
          T(!o), C(!o)
        },
        onMouseDown: () => P(!0),
        onMouseUp: () => P(!1),
        children: [null != l.emoji && (null != l.emoji.id || null != l.emoji.name) ? (0, a.jsx)(m.default, {
          animated: l.emoji.animated || I,
          className: p.buttonEmoji,
          emojiId: l.emoji.id,
          emojiName: l.emoji.name
        }) : null, (0, a.jsxs)("div", {
          className: p.buttonText,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: l.title
          }), l.description.length > 0 ? (0, a.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: l.description
          }) : null]
        }), (0, a.jsx)(i.animated.div, {
          className: p.checkIcon,
          style: L,
          children: (0, a.jsx)(g.default, {
            width: 10,
            height: 10,
            color: u.default.unsafe_rawColors.WHITE_500.css
          })
        }), w((e, t) => b > 0 && t && (0, a.jsx)(i.animated.div, {
          className: p.memberCount,
          style: e,
          children: (0, a.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: x.default.Messages.ONBOARDING_OPTION_ROLE_COUNTS.format({
              memberCount: b
            })
          })
        })), D && (0, a.jsx)(c.TextBadge, {
          color: u.default.unsafe_rawColors.BRAND_260.css,
          text: x.default.Messages.NEW,
          className: p.newBadge
        })]
      })
    })
  })
}