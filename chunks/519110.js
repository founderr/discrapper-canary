n.d(t, {
  Z: function() {
    return b
  }
}), n(757143);
var i = n(735250),
  a = n(470079),
  u = n(442837),
  l = n(481060),
  r = n(80932),
  o = n(2052),
  s = n(543241),
  c = n(339085),
  d = n(633302),
  E = n(691251),
  I = n(268350),
  M = n(217590),
  f = n(453070),
  S = n(926491),
  g = n(378233),
  T = n(981631),
  p = n(689938);

function Z(e) {
  return d.ZP.getByName(e.replace(/(^:|:$)/g, ""))
}

function b(e) {
  let {
    type: t,
    id: n,
    name: b,
    isInExpressionPicker: m = !1
  } = e, {
    location: v
  } = (0, o.O)(), A = a.useMemo(() => ({
    ...v,
    section: m ? T.jXE.EXPRESSION_PICKER : T.jXE.CONTEXT_MENU
  }), [v, m]), C = (0, f.Go)(), O = (0, u.e7)([S.Z], () => t === E.S.STICKER && null != n ? S.Z.getStickerById(n) : null), _ = null != O && C.includes(O.id), j = (0, u.e7)([c.Z], () => {
    if (t === E.S.EMOJI) {
      if (null != n) return c.Z.getDisambiguatedEmojiContext().getById(n);
      if (null != b) {
        var e;
        return null !== (e = Z(b)) && void 0 !== e ? e : Z(d.ZP.convertSurrogateToName(b))
      }
    }
  }), N = (0, s.C1)(null, j);
  if (null != O && t === E.S.STICKER) return (0, g.J8)(O) && !(0, g.V9)(O) ? null : _ ? (0, i.jsx)(l.MenuItem, {
    id: "unfavorite",
    action: () => (0, I.hW)(O.id),
    label: p.Z.Messages.UNFAVORITE_ITEM
  }) : (0, i.jsx)(l.MenuItem, {
    id: "favorite",
    action: () => {
      (0, M.cQ)({
        sticker: O,
        location: {
          ...A,
          object: T.qAy.STICKER
        }
      }), (0, I.SA)(null == O ? void 0 : O.id)
    },
    label: p.Z.Messages.FAVORITE_ITEM
  });
  if (null != j && t === E.S.EMOJI) return N ? (0, i.jsx)(l.MenuItem, {
    id: "unfavorite",
    action: () => (0, r.Xe)(j),
    label: p.Z.Messages.UNFAVORITE_ITEM
  }) : (0, i.jsx)(l.MenuItem, {
    id: "favorite",
    action: () => {
      (0, s.J1)({
        emoji: j,
        location: {
          ...A,
          object: T.qAy.EMOJI
        }
      }), (0, r.$K)(j)
    },
    label: p.Z.Messages.FAVORITE_ITEM
  })
}