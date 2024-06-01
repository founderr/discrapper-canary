"use strict";
n.r(t), n.d(t, {
  MessageReactionsGroupWrapper: function() {
    return I
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("866442"),
  o = n("596454"),
  u = n("434650"),
  d = n("56314"),
  c = n("18732"),
  E = n("566006"),
  f = n("287151"),
  _ = n("858313"),
  T = n("601064");
let m = a.memo(function(e) {
    let t, n, {
        useChatFontScaling: a,
        hideEmoji: l,
        emoji: u,
        className: m,
        count: I,
        me: N,
        me_burst: p,
        burst_count: S,
        burst_colors: C,
        readOnly: A,
        isLurking: h,
        isGuest: g,
        isPendingMember: M,
        type: O
      } = e,
      R = O === E.ReactionTypes.BURST,
      v = (0, f.isMeReaction)(N, p, O),
      L = (0, d.useEmojiColorPalette)(R && null != C ? C : []),
      x = a ? T : _,
      P = R ? S : I,
      D = (0, c.getMinCounterWidth)(P, f.REACTION_MIN_WIDTH_DIGITS),
      y = {};
    if (R && null != L) {
      var U;
      let {
        accentColor: e,
        backgroundColor: s,
        opacity: a
      } = L, l = null !== (U = (0, r.hex2rgb)(null != s ? s : "", a)) && void 0 !== U ? U : "";
      v && (y.borderColor = s), y.background = l, t = e, n = e
    }
    let j = {
      minWidth: D,
      color: t,
      borderColor: n
    };
    return (0, s.jsxs)("div", {
      className: i()(x.reaction, x.reactionInner, m, {
        [x.reactionMe]: v,
        [x.reactionReadOnly]: A && !h && !M && !g
      }),
      style: y,
      children: [(0, s.jsx)(o.default, {
        className: i()({
          [x.hideEmoji]: l
        }),
        emojiId: u.id,
        emojiName: u.name,
        size: "reaction",
        animated: R && u.animated
      }), (0, s.jsx)("div", {
        className: x.reactionCount,
        style: j,
        children: P
      })]
    })
  }),
  I = a.memo(function(e) {
    let {
      showImmediate: t,
      reactions: n,
      ...l
    } = e, [i, r] = a.useState(!1), [o, d] = a.useTransition(), c = a.useCallback(e => {
      e && !i && !o && d(() => {
        r(!0)
      })
    }, [i, o]), _ = (0, u.useIsVisible)(c), T = i && !o || t ? f.Reaction : m;
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("div", {
        ref: _
      }), n.map(e => {
        var t, n;
        return (0, s.jsx)(T, {
          ...l,
          ...e
        }, (t = e, "".concat(t.type === E.ReactionTypes.BURST ? "burst:" : "").concat(null !== (n = t.emoji.id) && void 0 !== n ? n : 0, ":").concat(t.emoji.name)))
      })]
    })
  })