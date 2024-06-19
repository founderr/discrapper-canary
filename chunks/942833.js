n.d(e, {
  C: function() {
    return l
  },
  k: function() {
    return c
  }
});
var r = n(470079),
  u = n(937615),
  i = n(689938);

function l(t) {
  return r.useMemo(() => {
    if (null == t) return;
    let e = null != t.role_id,
      n = t.attachments_count > 0;
    if (e && n) return i.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE;
    if (e) return i.Z.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE;
    if (n) return i.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE
  }, [t])
}

function c(t) {
  return r.useMemo(() => {
    if ((null == t ? void 0 : t.price) == null) return;
    let {
      amount: e,
      currency: n
    } = t.price;
    return (0, u.T4)(e, n)
  }, [t])
}