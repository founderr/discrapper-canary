"use strict";
n.r(t), n.d(t, {
  MessageReactionsGroupWrapper: function() {
    return I
  }
}), n("47120");
var s = n("735250"),
  l = n("470079"),
  a = n("120356"),
  i = n.n(a),
  r = n("866442"),
  o = n("596454"),
  u = n("434650"),
  d = n("56314"),
  c = n("18732"),
  f = n("566006"),
  E = n("287151"),
  _ = n("903380"),
  m = n("317363");
let T = l.memo(function(e) {
    let t, n, {
        useChatFontScaling: l,
        hideEmoji: a,
        emoji: u,
        className: T,
        count: I,
        me: p,
        me_burst: h,
        burst_count: N,
        burst_colors: S,
        readOnly: C,
        isLurking: A,
        isGuest: g,
        isPendingMember: M,
        type: R
      } = e,
      v = R === f.ReactionTypes.BURST,
      O = (0, E.isMeReaction)(p, h, R),
      x = (0, d.useEmojiColorPalette)(v && null != S ? S : []),
      L = l ? m : _,
      D = v ? N : I,
      P = (0, c.getMinCounterWidth)(D, E.REACTION_MIN_WIDTH_DIGITS),
      y = {};
    if (v && null != x) {
      var U;
      let {
        accentColor: e,
        backgroundColor: s,
        opacity: l
      } = x, a = null !== (U = (0, r.hex2rgb)(null != s ? s : "", l)) && void 0 !== U ? U : "";
      O && (y.borderColor = s), y.background = a, t = e, n = e
    }
    let j = {
      minWidth: P,
      color: t,
      borderColor: n
    };
    return (0, s.jsxs)("div", {
      className: i()(L.reaction, L.reactionInner, T, {
        [L.reactionMe]: O,
        [L.reactionReadOnly]: C && !A && !M && !g
      }),
      style: y,
      children: [(0, s.jsx)(o.default, {
        className: i()({
          [L.hideEmoji]: a
        }),
        emojiId: u.id,
        emojiName: u.name,
        size: "reaction",
        animated: v && u.animated
      }), (0, s.jsx)("div", {
        className: L.reactionCount,
        style: j,
        children: D
      })]
    })
  }),
  I = l.memo(function(e) {
    let {
      showImmediate: t,
      reactions: n,
      ...a
    } = e, [i, r] = l.useState(!1), [o, d] = l.useTransition(), c = l.useCallback(e => {
      e && !i && !o && d(() => {
        r(!0)
      })
    }, [i, o]), _ = (0, u.useIsVisible)(c), m = i && !o || t ? E.Reaction : T;
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("div", {
        ref: _
      }), n.map(e => {
        var t, n;
        return (0, s.jsx)(m, {
          ...a,
          ...e
        }, (t = e, "".concat(t.type === f.ReactionTypes.BURST ? "burst:" : "").concat(null !== (n = t.emoji.id) && void 0 !== n ? n : 0, ":").concat(t.emoji.name)))
      })]
    })
  })