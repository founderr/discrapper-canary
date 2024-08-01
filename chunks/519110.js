n.d(t, {
  Z: function() {
return p;
  }
}), n(757143);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(481060),
  l = n(80932),
  o = n(2052),
  c = n(543241),
  u = n(339085),
  d = n(633302),
  _ = n(691251),
  E = n(268350),
  I = n(217590),
  m = n(453070),
  T = n(926491),
  h = n(378233),
  N = n(981631),
  f = n(689938);

function C(e) {
  return d.ZP.getByName(e.replace(/(^:|:$)/g, ''));
}

function p(e) {
  let {
type: t,
id: n,
name: p,
isInExpressionPicker: g = !1
  } = e, {
location: S
  } = (0, o.O)(), A = a.useMemo(() => ({
...S,
section: g ? N.jXE.EXPRESSION_PICKER : N.jXE.CONTEXT_MENU
  }), [
S,
g
  ]), M = (0, m.Go)(), R = (0, s.e7)([T.Z], () => t === _.S.STICKER && null != n ? T.Z.getStickerById(n) : null), O = null != R && M.includes(R.id), x = (0, s.e7)([u.Z], () => {
if (t === _.S.EMOJI) {
  if (null != n)
    return u.Z.getDisambiguatedEmojiContext().getById(n);
  if (null != p) {
    var e;
    return null !== (e = C(p)) && void 0 !== e ? e : C(d.ZP.convertSurrogateToName(p));
  }
}
  }), v = (0, c.C1)(null, x);
  if (null != R && t === _.S.STICKER)
return (0, h.J8)(R) && !(0, h.V9)(R) ? null : O ? (0, i.jsx)(r.MenuItem, {
  id: 'unfavorite',
  action: () => (0, E.hW)(R.id),
  label: f.Z.Messages.UNFAVORITE_ITEM
}) : (0, i.jsx)(r.MenuItem, {
  id: 'favorite',
  action: () => {
    (0, I.cQ)({
      sticker: R,
      location: {
        ...A,
        object: N.qAy.STICKER
      }
    }), (0, E.SA)(null == R ? void 0 : R.id);
  },
  label: f.Z.Messages.FAVORITE_ITEM
});
  if (null != x && t === _.S.EMOJI)
return v ? (0, i.jsx)(r.MenuItem, {
  id: 'unfavorite',
  action: () => (0, l.Xe)(x),
  label: f.Z.Messages.UNFAVORITE_ITEM
}) : (0, i.jsx)(r.MenuItem, {
  id: 'favorite',
  action: () => {
    (0, c.J1)({
      emoji: x,
      location: {
        ...A,
        object: N.qAy.EMOJI
      }
    }), (0, l.$K)(x);
  },
  label: f.Z.Messages.FAVORITE_ITEM
});
}