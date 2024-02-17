"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  o = n("907002"),
  u = n("77078"),
  d = n("430568"),
  c = n("252744"),
  f = n("788506"),
  h = n("86678"),
  m = n("867805"),
  p = n("986632"),
  E = n("882641"),
  g = n("476765"),
  S = n("837899"),
  C = n("402671"),
  _ = n("449008"),
  I = n("99795"),
  T = n("958706"),
  v = n("894282"),
  x = n("448765");
let N = T.EmojiIntention.CHAT,
  A = [m.default.getByName("thumbsup"), m.default.getByName("eyes"), m.default.getByName("laughing"), m.default.getByName("watermelon"), m.default.getByName("fork_and_knife"), m.default.getByName("yum")].filter(_.isNotNullish);

function M(e) {
  let {
    emoji: t,
    isDisabled: n = !1,
    onClick: s
  } = e, r = a.useRef(null), f = (0, c.default)(r);
  return (0, l.jsx)("span", {
    ref: r,
    children: (0, l.jsx)(u.Button, {
      onClick: s,
      look: u.Button.Looks.BLANK,
      size: u.Button.Sizes.NONE,
      children: (0, l.jsx)(o.Spring, {
        config: E.EMOJI_BUTTON_SPRING_CONFIG,
        from: {
          value: 0
        },
        to: {
          value: f ? 1 : 0
        },
        children: e => {
          let {
            value: a
          } = e;
          return (0, l.jsx)(o.animated.div, {
            style: {
              transform: a.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
            },
            children: (0, l.jsx)(d.default, {
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
    onSetExpanded: a,
    onFocus: s
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [t, (0, l.jsx)(u.Clickable, {
      className: x.dropDownContainer,
      onClick: () => {
        a(!n), s()
      },
      children: (0, l.jsx)(S.default, {
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
    onExpandedToggle: m,
    emojiSearchProps: E,
    recentlyUsedEmojis: S,
    analyticsOverride: _
  } = e, j = (0, g.useUID)(), [L, y] = a.useState(!1), O = (0, f.useFrequentlyUsedEmojis)(t.guild_id), P = (0, r.uniqBy)([...O, ...A], "name").filter(e => !C.default.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: N
  })).slice(0, I.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT);
  null != S && S.length > 0 && P.splice(P.length - 1, 1, S[0]);
  let b = e => {
      y(e), null == m || m(e)
    },
    D = (e, t) => {
      if (null == e && t) {
        s();
        return
      }
      null != e && d(e);
      b(!t), t && p.EmojiPickerStore.setSearchPlaceholder(null)
    };
  return (0, l.jsxs)(u.Dialog, {
    "aria-labelledby": j,
    children: [(0, l.jsx)(u.HeadingLevel, {
      forceLevel: 2,
      children: (0, l.jsx)(u.HiddenVisually, {
        children: (0, l.jsx)(u.H, {
          id: j,
          children: n
        })
      })
    }), (0, l.jsxs)("div", {
      className: x.container,
      children: [(0, l.jsx)(h.default, {
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
          accessory: (0, l.jsx)(R, {
            otherAccessories: null == E ? void 0 : E.accessory,
            isEmojiPickerExpanded: L,
            onSetExpanded: b,
            onFocus: o
          }),
          onKeyDown: e => {
            null != e && e.key !== v.KeyboardKeysUpdated.TAB && (e.key !== v.KeyboardKeysUpdated.ENTER || e.shiftKey ? b(!0) : b(!L))
          }
        }
      }), (0, l.jsx)("div", {
        className: x.slotsContainer,
        children: (0, l.jsx)("div", {
          className: i(x.slots, x.slotsWide),
          children: P.map(e => {
            let n = C.default.isEmojiDisabled({
              emoji: e,
              channel: t,
              intention: T.EmojiIntention.CHAT
            });
            return (0, l.jsx)("div", {
              className: x.slot,
              children: (0, l.jsx)(u.TooltipContainer, {
                text: e.name,
                position: "top",
                "aria-label": e.name,
                tooltipClassName: x.tooltipContainer,
                color: u.Tooltip.Colors.BRAND,
                children: (0, l.jsx)(M, {
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