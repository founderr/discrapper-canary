"use strict";
n.r(t), n.d(t, {
  MessageStandardEmoji: function() {
    return C
  },
  MessageCustomEmoji: function() {
    return T
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("748820"),
  o = n("77078"),
  u = n("430568"),
  d = n("716241"),
  c = n("558986"),
  f = n("599110"),
  m = n("459698"),
  p = n("933629"),
  h = n("49111"),
  E = n("958706"),
  g = n("646718"),
  S = n("903985");
let C = e => {
    var t;
    let {
      node: n,
      tooltipPosition: i = p.EXPRESSION_TOOLTIP_PROPS.position,
      enableClick: a = !0
    } = e, r = null === (t = n.originalMatch) || void 0 === t ? void 0 : t[0], d = null != r ? r : n.name, c = e => (0, l.jsx)(u.default, {
      ...e,
      emojiName: n.name,
      size: n.jumboable ? "jumbo" : "default",
      src: n.src,
      alt: r,
      animated: !1
    }), f = e => (0, l.jsx)(o.Tooltip, {
      text: (0, p.renderClickableTooltipNode)(n.name, a),
      "aria-label": d,
      ...p.EXPRESSION_TOOLTIP_PROPS,
      position: i,
      onTooltipShow: () => {
        a && v({
          emojiNode: n,
          isCustomEmoji: !1
        })
      },
      children: t => (0, l.jsx)(o.Clickable, {
        ...e,
        tag: "span",
        className: s(S.emojiContainer, {
          [S.emojiContainerClickable]: a
        }),
        children: c(t)
      })
    });
    return a ? (0, l.jsx)(o.Popout, {
      animation: o.Popout.Animation.TRANSLATE,
      align: "center",
      autoInvert: !0,
      nudgeAlignIntoViewport: !0,
      position: "right",
      renderPopout: e => (0, l.jsx)(m.MessageStandardEmojiPopout, {
        ...e,
        node: n
      }),
      children: f
    }) : f()
  },
  T = e => {
    let {
      node: t,
      isInteracting: n,
      tooltipPosition: a = p.EXPRESSION_TOOLTIP_PROPS.position,
      enableClick: d = !0
    } = e, [g, C] = i.useState(String(Date.now())), [T, I] = i.useState(!1), _ = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return (0, l.jsx)(u.default, {
        ...e,
        emojiName: t.name,
        size: t.jumboable ? "jumbo" : "default",
        emojiId: t.emojiId,
        animated: t.animated,
        isInteracting: n
      })
    }, N = (0, r.v4)(), A = e => (0, l.jsx)(o.Tooltip, {
      text: (0, p.renderClickableTooltipNode)(t.name, d),
      "aria-label": t.name,
      ...p.EXPRESSION_TOOLTIP_PROPS,
      position: a,
      onTooltipShow: () => {
        I(!0), d && (v({
          emojiNode: t,
          isCustomEmoji: !0,
          nonce: N
        }), (0, c.initiateEmojiInteraction)(E.EmojiInteractionPoint.CustomEmojiTooltipShown))
      },
      children: t => (0, l.jsx)(o.Clickable, {
        ...e,
        onMouseEnter: () => {
          var t;
          null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
        },
        onClick: t => {
          var n;
          I(!1), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t)
        },
        onMouseLeave: () => {
          T && (f.default.track(h.AnalyticEvents.CLOSE_POPOUT, {
            nonce: N
          }), I(!1))
        },
        tag: "span",
        className: s(S.emojiContainer, {
          [S.emojiContainerClickable]: d
        }),
        children: _(t)
      })
    });
    return d ? (0, l.jsx)(o.Popout, {
      animation: o.Popout.Animation.FADE,
      align: "center",
      onRequestClose: () => {
        f.default.track(h.AnalyticEvents.CLOSE_POPOUT, {
          nonce: N
        }), I(!1)
      },
      autoInvert: !0,
      nudgeAlignIntoViewport: !0,
      position: "right",
      renderPopout: e => (0, l.jsx)(m.MessageCustomEmojiPopout, {
        ...e,
        node: t,
        refreshPositionKey: () => C(String(Date.now())),
        nonce: N
      }),
      positionKey: g,
      children: A
    }) : A()
  },
  v = e => {
    let {
      emojiNode: t,
      isCustomEmoji: n,
      nonce: l
    } = e;
    d.default.trackWithMetadata(h.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
      type: g.PremiumUpsellTypes.EMOJI_IN_MESSAGE_HOVER,
      expression_id: t.emojiId,
      expression_name: t.name,
      is_animated: t.animated,
      is_custom: n,
      nonce: l
    })
  }