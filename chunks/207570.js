"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var i = n("735250");
n("470079");
var r = n("442837"),
  s = n("481060"),
  a = n("970321"),
  o = n("886491"),
  l = n("621853"),
  u = n("873572"),
  d = n("520978"),
  _ = n("659101"),
  c = n("479968");

function E(e) {
  var t;
  let {
    user: n,
    guildId: s
  } = e, o = (0, r.useStateFromStores)([l.default], () => {
    var e;
    return null === (e = l.default.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application
  }), u = (0, a.useAppStorefrontAvailable)(null !== (t = null == o ? void 0 : o.id) && void 0 !== t ? t : "");
  return null == o ? null : (0, i.jsx)(_.default, {
    children: (0, i.jsxs)("div", {
      className: c.buttonsContainer,
      children: [(0, i.jsx)(d.default, {
        application: o,
        className: c.button
      }), u && null != s && (0, i.jsx)(I, {
        application: o,
        user: n,
        guildId: s
      })]
    })
  })
}

function I(e) {
  let {
    application: t,
    user: r,
    guildId: a
  } = e;
  return (0, u.default)({
    user: r,
    guildId: a
  }), (0, i.jsx)(o.StorefrontButton, {
    onClick: () => (function(e, t) {
      (0, s.openModalLazy)(async () => {
        let {
          default: r
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("29549"), n.e("31605"), n.e("77172"), n.e("89131"), n.e("88772")]).then(n.bind(n, "7225"));
        return n => (0, i.jsx)(r, {
          transitionState: n.transitionState,
          onClose: n.onClose,
          appId: e.id,
          guildId: t
        })
      })
    })(t, a),
    className: c.button,
    size: s.ButtonSizes.SMALL
  })
}