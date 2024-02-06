"use strict";
i.r(t), i.d(t, {
  default: function() {
    return M
  }
}), i("222007"), i("843762");
var n = i("37983"),
  s = i("884691"),
  l = i("414456"),
  r = i.n(l),
  a = i("917351"),
  o = i.n(a),
  u = i("907002"),
  c = i("974667"),
  d = i("895547"),
  f = i("769846"),
  E = i("77078"),
  m = i("150021"),
  I = i("206625"),
  p = i("302437"),
  g = i("867805"),
  _ = i("476765"),
  S = i("402671"),
  h = i("159885"),
  C = i("49111"),
  T = i("782340"),
  N = i("576643");
let v = (0, _.uid)(),
  A = d.default.convert.fromCodePoint("1f44f"),
  y = (0, h.cssValueToNumber)(f.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
  R = (0, h.cssValueToNumber)(f.default.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE),
  j = e => {
    let {
      fade: t,
      surrogate: i,
      onClick: s,
      delay: l,
      index: r
    } = e, a = (0, c.useListItem)("item-".concat(r)), o = S.default.getURL(A + i), f = (0, u.useSpring)({
      opacity: 1,
      from: {
        opacity: t ? 0 : 1
      },
      delay: l
    });
    return (0, n.jsx)(E.Clickable, {
      ...a,
      role: "option",
      "aria-selected": 0 === r,
      onClick: () => s(i),
      className: N.diversityEmojiItem,
      children: (0, n.jsx)(u.animated.div, {
        "aria-label": function(e) {
          let t = d.default.convert.toCodePoint(e);
          switch (t) {
            case "1f3fb":
              return T.default.Messages.EMOJI_MODIFIER_LIGHT_SKIN_TONE;
            case "1f3fc":
              return T.default.Messages.EMOJI_MODIFIER_MEDIUM_LIGHT_SKIN_TONE;
            case "1f3fd":
              return T.default.Messages.EMOJI_MODIFIER_MEDIUM_SKIN_TONE;
            case "1f3fe":
              return T.default.Messages.EMOJI_MODIFIER_MEDIUM_DARK_SKIN_TONE;
            case "1f3ff":
              return T.default.Messages.EMOJI_MODIFIER_DARK_SKIN_TONE;
            default:
              return T.default.Messages.EMOJI_MODIFIER_NONE
          }
        }(i),
        className: N.diversityEmojiItemImage,
        style: {
          backgroundImage: 'url("'.concat(o, '")'),
          ...f
        }
      })
    })
  },
  O = e => {
    let {
      id: t,
      selectedSurrogate: i,
      onClick: l,
      hasTabWrapper: a
    } = e, d = (0, p.default)("diversity"), f = (0, u.useSpring)({
      height: (R + 2 * y) * (g.DIVERSITY_SURROGATES.length + 1),
      from: {
        height: R
      },
      config: {
        duration: 125
      }
    });
    s.useEffect(() => {
      d.focusFirstVisibleItem()
    }, [d]);
    let E = ["", ...g.DIVERSITY_SURROGATES];
    return o.remove(E, e => e === i), E.unshift(i), (0, n.jsx)(c.ListNavigatorProvider, {
      navigator: d,
      children: (0, n.jsx)(c.ListNavigatorContainer, {
        children: e => {
          let {
            ref: i,
            ...s
          } = e;
          return (0, n.jsx)(u.animated.div, {
            ...s,
            id: t,
            ref: i,
            className: r(N.diversitySelectorOptions, {
              [N.diversitySelectorOptionsHasTabWrapper]: a
            }),
            style: f,
            role: "listbox",
            children: E.map((e, t) => (0, n.jsx)(j, {
              index: t,
              fade: 0 !== t,
              delay: 20 * t,
              surrogate: e,
              onClick: l
            }, t))
          })
        }
      })
    })
  };
var M = e => {
  let {
    searchBarRef: t,
    selectedSurrogate: i,
    className: l,
    hasTabWrapper: r
  } = e, a = S.default.getURL(A + i), [o, u] = s.useState(!1), c = (0, I.default)(null, () => u(!1)), d = s.useRef(null);
  return (0, n.jsxs)("div", {
    ref: c,
    className: l,
    children: [(0, n.jsx)(E.Clickable, {
      innerRef: d,
      className: N.diversitySelectorButton,
      onClick: () => {
        u(!0)
      },
      "aria-label": T.default.Messages.EMOJI_MODIFIER_MENU_BUTTON,
      "aria-haspopup": !0,
      "aria-expanded": o,
      "aria-controls": v,
      tabIndex: o ? -1 : 0,
      children: (0, n.jsx)("div", {
        className: N.diversityEmojiItemImage,
        style: {
          backgroundImage: 'url("'.concat(a, '")')
        }
      })
    }), o ? (0, n.jsx)("div", {
      onKeyDown: e => {
        e.keyCode === C.KeyboardKeys.ESCAPE && (e.stopPropagation(), u(!1), null != d.current && d.current.focus())
      },
      children: (0, n.jsx)(O, {
        id: v,
        hasTabWrapper: r,
        selectedSurrogate: i,
        onClick: e => {
          var i;
          (0, m.setDiversityColor)(e), u(!1), null === (i = t.current) || void 0 === i || i.focus()
        }
      })
    }) : null]
  })
}