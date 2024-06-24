n.d(t, {
  Z: function() {
    return M
  },
  u: function() {
    return v
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(392711),
  o = n(920906),
  c = n(481060),
  u = n(596454),
  d = n(727637),
  h = n(543241),
  m = n(907040),
  p = n(633302),
  E = n(806966),
  g = n(401227),
  f = n(153124),
  C = n(176354),
  _ = n(823379),
  I = n(354459),
  x = n(185923),
  T = n(420212),
  N = n(61798);
let Z = x.Hz.CHAT,
  S = [p.ZP.getByName("thumbsup"), p.ZP.getByName("eyes"), p.ZP.getByName("laughing"), p.ZP.getByName("watermelon"), p.ZP.getByName("fork_and_knife"), p.ZP.getByName("yum")].filter(_.lm);

function v(e) {
  let {
    emoji: t,
    isDisabled: n = !1,
    onClick: s,
    className: r
  } = e, h = i.useRef(null), m = (0, d.Z)(h);
  return (0, l.jsx)("span", {
    ref: h,
    children: (0, l.jsx)(c.Button, {
      onClick: s,
      look: c.Button.Looks.BLANK,
      size: c.Button.Sizes.NONE,
      focusProps: {
        enabled: !n
      },
      children: (0, l.jsx)(o.Spring, {
        config: g.u,
        from: {
          value: 0
        },
        to: {
          value: m ? 1 : 0
        },
        children: e => {
          let {
            value: i
          } = e;
          return (0, l.jsx)(o.animated.div, {
            style: {
              transform: i.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
            },
            children: (0, l.jsx)(u.Z, {
              className: a()(N.emoji, r, {
                [N.emojiItemDisabled]: n
              }),
              emojiId: t.id,
              emojiName: null == t ? void 0 : t.surrogates,
              animated: t.animated
            })
          })
        }
      })
    })
  })
}

function A(e) {
  let {
    otherAccessories: t,
    isEmojiPickerExpanded: n,
    onSetExpanded: i,
    onFocus: s
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [t, (0, l.jsx)(c.Clickable, {
      className: N.dropDownContainer,
      onClick: () => {
        i(!n), s()
      },
      children: (0, l.jsx)(c.ChevronSmallDownIcon, {
        size: "md",
        color: "currentColor",
        className: a()(N.dropDown, {
          [N.dropDownOpen]: n
        })
      })
    })]
  })
}

function M(e) {
  let {
    channel: t,
    title: n,
    closePopout: s,
    onFocus: o,
    onSelectEmoji: u,
    onSelectDisabledEmoji: d,
    onExpandedToggle: p,
    emojiSearchProps: g,
    recentlyUsedEmojis: _,
    analyticsOverride: M
  } = e, R = (0, f.Dt)(), [j, L] = i.useState(!1), O = (0, h.wC)(t.guild_id), P = (0, r.uniqBy)([...O, ...S], "name").filter(e => !C.ZP.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: Z
  })).slice(0, I.e5);
  null != _ && _.length > 0 && P.splice(P.length - 1, 1, _[0]);
  let y = e => {
      L(e), null == p || p(e)
    },
    b = (e, t) => {
      if (null == e && t) {
        s();
        return
      }
      null != e && u(e);
      y(!t), t && E.kJ.setSearchPlaceholder(null)
    };
  return (0, l.jsxs)(c.Dialog, {
    "aria-labelledby": R,
    children: [(0, l.jsx)(c.HeadingLevel, {
      forceLevel: 2,
      children: (0, l.jsx)(c.HiddenVisually, {
        children: (0, l.jsx)(c.H, {
          id: R,
          children: n
        })
      })
    }), (0, l.jsxs)("div", {
      className: N.container,
      children: [(0, l.jsx)(m.Z, {
        analyticsOverride: M,
        channel: t,
        className: a()(N.animatedPicker, {
          [N.animatedPickerTall]: j
        }),
        headerClassName: a()(N.emojiPickerHeader, {
          [N.emojiPickerHeaderExpanded]: j
        }),
        closePopout: s,
        onSelectEmoji: j ? b : () => {},
        shouldHidePickerActions: !j,
        wrapper: "div",
        pickerIntention: Z,
        searchProps: {
          ...g,
          accessory: (0, l.jsx)(A, {
            otherAccessories: null == g ? void 0 : g.accessory,
            isEmojiPickerExpanded: j,
            onSetExpanded: y,
            onFocus: o
          }),
          onKeyDown: e => {
            null != e && e.key !== T.vn.TAB && (e.key !== T.vn.ENTER || e.shiftKey ? y(!0) : y(!j))
          }
        }
      }), (0, l.jsx)("div", {
        className: N.slotsContainer,
        children: (0, l.jsx)("div", {
          className: a()(N.slots, N.slotsWide),
          children: P.map(e => {
            let n = C.ZP.isEmojiDisabled({
              emoji: e,
              channel: t,
              intention: x.Hz.CHAT
            });
            return (0, l.jsx)("div", {
              className: N.slot,
              children: (0, l.jsx)(c.TooltipContainer, {
                text: e.name,
                position: "top",
                "aria-label": e.name,
                tooltipClassName: N.tooltipContainer,
                color: c.Tooltip.Colors.BRAND,
                children: (0, l.jsx)(v, {
                  emoji: e,
                  isDisabled: n,
                  onClick: () => {
                    n ? null == d || d(e) : b(e, !0)
                  }
                })
              })
            }, e.name)
          })
        })
      })]
    })]
  })
}