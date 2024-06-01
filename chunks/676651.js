"use strict";
n.r(t), n.d(t, {
  openModal: function() {
    return l
  }
});
var i = n("735250");
n("470079");
var r = n("481060"),
  s = n("302463");

function l(e, t) {
  (0, r.openModalLazy)(async () => {
    let {
      default: r
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("70716"), n.e("47055")]).then(n.bind(n, "458961"));
    return n => (0, i.jsx)(r, {
      guildId: e,
      productId: t,
      ...n
    })
  }, {
    modalKey: s.GUILD_PRODUCT_EDIT_MODAL_KEY
  })
}