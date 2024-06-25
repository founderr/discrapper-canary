n.d(t, {
  l: function() {
    return N
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(866442),
  o = n(596454),
  c = n(434650),
  u = n(56314),
  d = n(18732),
  E = n(566006),
  _ = n(287151),
  I = n(704963),
  T = n(667671);
let m = i.memo(function(e) {
    let t, n, {
        useChatFontScaling: i,
        hideEmoji: l,
        emoji: c,
        className: m,
        count: N,
        me: h,
        me_burst: C,
        burst_count: S,
        burst_colors: A,
        readOnly: g,
        isLurking: p,
        isGuest: f,
        isPendingMember: R,
        type: O
      } = e,
      M = O === E.O.BURST,
      x = (0, _.y4)(h, C, O),
      v = (0, u.v)(M && null != A ? A : []),
      L = i ? T : I,
      Z = M ? S : N,
      P = (0, d.y)(Z, _.aO),
      D = {};
    if (M && null != v) {
      var j;
      let {
        accentColor: e,
        backgroundColor: s,
        opacity: i
      } = v, l = null !== (j = (0, r.wK)(null != s ? s : "", i)) && void 0 !== j ? j : "";
      x && (D.borderColor = s), D.background = l, t = e, n = e
    }
    let U = {
      minWidth: P,
      color: t,
      borderColor: n
    };
    return (0, s.jsxs)("div", {
      className: a()(L.reaction, L.reactionInner, m, {
        [L.reactionMe]: x,
        [L.reactionReadOnly]: g && !p && !R && !f
      }),
      style: D,
      children: [(0, s.jsx)(o.Z, {
        className: a()({
          [L.hideEmoji]: l
        }),
        emojiId: c.id,
        emojiName: c.name,
        size: "reaction",
        animated: M && c.animated
      }), (0, s.jsx)("div", {
        className: L.reactionCount,
        style: U,
        children: Z
      })]
    })
  }),
  N = i.memo(function(e) {
    let {
      showImmediate: t,
      reactions: n,
      ...l
    } = e, [a, r] = i.useState(!1), [o, u] = i.useTransition(), d = i.useCallback(e => {
      e && !a && !o && u(() => {
        r(!0)
      })
    }, [a, o]), I = (0, c.O)(d), T = a && !o || t ? _.le : m;
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("div", {
        ref: I
      }), n.map(e => {
        var t, n;
        return (0, s.jsx)(T, {
          ...l,
          ...e
        }, (t = e, "".concat(t.type === E.O.BURST ? "burst:" : "").concat(null !== (n = t.emoji.id) && void 0 !== n ? n : 0, ":").concat(t.emoji.name)))
      })]
    })
  })