S.d(e, {
  Z: function() {
    return N
  }
});
var _ = S(735250);
S(470079);
var t = S(120356),
  n = S.n(t),
  i = S(596454),
  l = S(377171),
  I = S(403910),
  r = S(549631),
  s = S(934241);

function N(E) {
  var e;
  let {
    guildId: S,
    emojiId: t,
    emojiName: N,
    className: o
  } = E, A = (0, I.Z)(S, t);
  return null != A || null != N ? (0, _.jsx)(i.Z, {
    emojiId: null == A ? void 0 : A.id,
    emojiName: null != N ? N : null == A ? void 0 : A.name,
    animated: null !== (e = null == A ? void 0 : A.animated) && void 0 !== e && e,
    className: n()(s.emojiIcon, o)
  }) : (0, _.jsx)(r.Z, {
    className: n()(s.emojiIcon, o),
    color: l.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
  })
}