"use strict";
u.r(e), u.d(e, {
  usePrice: function() {
    return o
  },
  useProductType: function() {
    return l
  }
});
var r = u("470079"),
  n = u("937615"),
  i = u("689938");

function l(t) {
  return r.useMemo(() => {
    if (null == t) return;
    let e = null != t.role_id,
      u = t.attachments_count > 0;
    if (e && u) return i.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE;
    if (e) return i.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE;
    if (u) return i.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE
  }, [t])
}

function o(t) {
  return r.useMemo(() => {
    if ((null == t ? void 0 : t.price) == null) return;
    let {
      amount: e,
      currency: u
    } = t.price;
    return (0, n.formatPrice)(e, u)
  }, [t])
}