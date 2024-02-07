"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  o = n("907002"),
  u = n("77078"),
  d = n("430568"),
  c = n("252744"),
  f = n("788506"),
  h = n("86678"),
  p = n("867805"),
  m = n("986632"),
  E = n("882641"),
  C = n("476765"),
  S = n("837899"),
  g = n("402671"),
  _ = n("449008"),
  I = n("99795"),
  T = n("958706"),
  v = n("894282"),
  x = n("321353");
let N = T.EmojiIntention.CHAT,
  A = [p.default.getByName("thumbsup"), p.default.getByName("eyes"), p.default.getByName("laughing"), p.default.getByName("watermelon"), p.default.getByName("fork_and_knife"), p.default.getByName("yum")].filter(_.isNotNullish);

function M(e) {
  let {
    emoji: t,
    isDisabled: n = !1,
    onClick: s
  } = e, r = l.useRef(null), f = (0, c.default)(r);
  return (0, a.jsx)("span", {
    ref: r,
    children: (0, a.jsx)(u.Button, {
      onClick: s,
      look: u.Button.Looks.BLANK,
      size: u.Button.Sizes.NONE,
      children: (0, a.jsx)(o.Spring, {
        config: E.EMOJI_BUTTON_SPRING_CONFIG,
        from: {
          value: 0
        },
        to: {
          value: f ? 1 : 0
        },
        children: e => {
          let {
            value: l
          } = e;
          return (0, a.jsx)(o.animated.div, {
            style: {
              transform: l.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
            },
            children: (0, a.jsx)(d.default, {
              className: i(x.emoji, {
                [x.emojiItemDisabled]: n
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

function R(e) {
  let {
    otherAccessories: t,
    isEmojiPickerExpanded: n,
    onSetExpanded: l,
    onFocus: s
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [t, (0, a.jsx)(u.Clickable, {
      className: x.dropDownContainer,
      onClick: () => {
        l(!n), s()
      },
      children: (0, a.jsx)(S.default, {
        className: i(x.dropDown, {
          [x.dropDownOpen]: n
        })
      })
    })]
  })
}

function j(e) {
  let {
    channel: t,
    title: n,
    closePopout: s,
    onFocus: o,
    onSelectEmoji: d,
    onSelectDisabledEmoji: c,
    onExpandedToggle: p,
    emojiSearchProps: E,
    recentlyUsedEmojis: S,
    analyticsOverride: _
  } = e, j = (0, C.useUID)(), [L, O] = l.useState(!1), y = (0, f.useFrequentlyUsedEmojis)(t.guild_id), b = (0, r.uniqBy)([...y, ...A], "name").filter(e => !g.default.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: N
  })).slice(0, I.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT);
  null != S && S.length > 0 && b.splice(b.length - 1, 1, S[0]);
  let P = e => {
      O(e), null == p || p(e)
    },
    D = (e, t) => {
      if (null == e && t) {
        s();
        return
      }
      null != e && d(e);
      P(!t), t && m.EmojiPickerStore.setSearchPlaceholder(null)
    };
  return (0, a.jsxs)(u.Dialog, {
    "aria-labelledby": j,
    children: [(0, a.jsx)(u.HeadingLevel, {
      forceLevel: 2,
      children: (0, a.jsx)(u.HiddenVisually, {
        children: (0, a.jsx)(u.H, {
          id: j,
          children: n
        })
      })
    }), (0, a.jsxs)("div", {
      className: x.container,
      children: [(0, a.jsx)(h.default, {
        analyticsOverride: _,
        channel: t,
        className: i(x.animatedPicker, {
          [x.animatedPickerTall]: L
        }),
        headerClassName: i(x.emojiPickerHeader, {
          [x.emojiPickerHeaderExpanded]: L
        }),
        closePopout: s,
        onSelectEmoji: L ? D : () => {},
        shouldHidePickerActions: !L,
        wrapper: "div",
        pickerIntention: N,
        searchProps: {
          ...E,
          accessory: (0, a.jsx)(R, {
            otherAccessories: null == E ? void 0 : E.accessory,
            isEmojiPickerExpanded: L,
            onSetExpanded: P,
            onFocus: o
          }),
          onKeyDown: e => {
            null != e && e.key !== v.KeyboardKeysUpdated.TAB && (e.key !== v.KeyboardKeysUpdated.ENTER || e.shiftKey ? P(!0) : P(!L))
          }
        }
      }), (0, a.jsx)("div", {
        className: x.slotsContainer,
        children: (0, a.jsx)("div", {
          className: i(x.slots, x.slotsWide),
          children: b.map(e => {
            let n = g.default.isEmojiDisabled({
              emoji: e,
              channel: t,
              intention: T.EmojiIntention.CHAT
            });
            return (0, a.jsx)("div", {
              className: x.slot,
              children: (0, a.jsx)(u.TooltipContainer, {
                text: e.name,
                position: "top",
                "aria-label": e.name,
                tooltipClassName: x.tooltipContainer,
                color: u.Tooltip.Colors.BRAND,
                children: (0, a.jsx)(M, {
                  emoji: e,
                  isDisabled: n,
                  onClick: () => {
                    n ? null == c || c(e) : D(e, !0)
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