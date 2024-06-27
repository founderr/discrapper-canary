"use strict";
n.d(t, {
  Y: function() {
    return N
  },
  c: function() {
    return A
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(772848),
  l = n(481060),
  u = n(596454),
  _ = n(367907),
  c = n(130402),
  d = n(626135),
  E = n(183023),
  I = n(524444),
  T = n(981631),
  h = n(185923),
  f = n(474936),
  S = n(950110);
let A = e => {
    var t;
    let {
      node: n,
      tooltipPosition: s = I.b_.position,
      enableClick: a = !0
    } = e, _ = null === (t = n.originalMatch) || void 0 === t ? void 0 : t[0], c = null != _ ? _ : n.name, [d, T] = r.useState(!1), h = e => (0, i.jsx)(u.Z, {
      ...e,
      emojiName: n.name,
      size: n.jumboable ? "jumbo" : "default",
      src: n.src,
      alt: _,
      animated: !1
    }), f = e => (0, i.jsx)(l.Tooltip, {
      text: (0, I.Y)(n.name, a),
      "aria-label": c,
      ...I.b_,
      position: s,
      shouldShow: !d,
      onTooltipShow: () => {
        a && m({
          emojiNode: n,
          isCustomEmoji: !1
        })
      },
      children: t => (0, i.jsx)(l.Clickable, {
        ...e,
        tag: "span",
        onClick: t => {
          var n;
          T(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t)
        },
        className: o()(S.emojiContainer, {
          [S.emojiContainerClickable]: a
        }),
        children: h(t)
      })
    });
    return a ? (0, i.jsx)(l.Popout, {
      animation: l.Popout.Animation.TRANSLATE,
      align: "center",
      autoInvert: !0,
      nudgeAlignIntoViewport: !0,
      position: "right",
      onRequestClose: () => {
        T(!1)
      },
      renderPopout: e => (0, i.jsx)(E.Az, {
        ...e,
        node: n
      }),
      children: f
    }) : f()
  },
  N = e => {
    let {
      node: t,
      isInteracting: n,
      tooltipPosition: s = I.b_.position,
      enableClick: _ = !0
    } = e, [f, A] = r.useState(String(Date.now())), [N, O] = r.useState(!1), [R, p] = r.useState(!1), g = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return (0, i.jsx)(u.Z, {
        ...e,
        emojiName: t.name,
        size: t.jumboable ? "jumbo" : "default",
        emojiId: t.emojiId,
        animated: t.animated,
        isInteracting: n
      })
    }, C = (0, a.Z)(), v = e => (0, i.jsx)(l.Tooltip, {
      text: (0, I.Y)(t.name, _),
      "aria-label": t.name,
      ...I.b_,
      position: s,
      shouldShow: !R,
      onTooltipShow: () => {
        O(!0), _ && (m({
          emojiNode: t,
          isCustomEmoji: !0,
          nonce: C
        }), (0, c.x)(h.qR.CustomEmojiTooltipShown))
      },
      children: t => (0, i.jsx)(l.Clickable, {
        ...e,
        onMouseEnter: () => {
          var t;
          null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
        },
        onClick: t => {
          var n;
          O(!1), p(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t)
        },
        onMouseLeave: () => {
          N && (d.default.track(T.rMx.CLOSE_POPOUT, {
            nonce: C
          }), O(!1))
        },
        tag: "span",
        className: o()(S.emojiContainer, {
          [S.emojiContainerClickable]: _
        }),
        children: g(t)
      })
    });
    return _ ? (0, i.jsx)(l.Popout, {
      animation: l.Popout.Animation.FADE,
      align: "center",
      onRequestClose: () => {
        d.default.track(T.rMx.CLOSE_POPOUT, {
          nonce: C
        }), O(!1), p(!1)
      },
      autoInvert: !0,
      nudgeAlignIntoViewport: !0,
      position: "right",
      renderPopout: e => (0, i.jsx)(E.vk, {
        ...e,
        node: t,
        refreshPositionKey: () => A(String(Date.now())),
        nonce: C
      }),
      positionKey: f,
      children: v
    }) : v()
  },
  m = e => {
    let {
      emojiNode: t,
      isCustomEmoji: n,
      nonce: i
    } = e;
    _.ZP.trackWithMetadata(T.rMx.EXPRESSION_TOOLTIP_VIEWED, {
      type: f.cd.EMOJI_IN_MESSAGE_HOVER,
      expression_id: t.emojiId,
      expression_name: t.name,
      is_animated: t.animated,
      is_custom: n,
      nonce: i
    })
  }