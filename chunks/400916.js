"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var s = n("735250");
n("470079");
var a = n("512722"),
  l = n.n(a),
  i = n("399606"),
  r = n("481060"),
  o = n("682864"),
  u = n("671533"),
  d = n("943461"),
  c = n("240864"),
  E = n("613810"),
  f = n("596211"),
  _ = n("689938"),
  T = n("929802");

function I(e) {
  var t, n, a, I;
  let {
    guildId: m,
    productId: p
  } = e, N = (0, i.useStateFromStores)([c.default], () => c.default.getGuildProduct(p)), S = (null !== (I = null == N ? void 0 : null === (t = N.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== I ? I : 0) > 1, C = null == N ? void 0 : null === (a = N.attachments) || void 0 === a ? void 0 : null === (n = a[0]) || void 0 === n ? void 0 : n.id;
  return S ? (0, s.jsxs)(r.Button, {
    onClick: function() {
      E.default.open({
        guildId: m,
        productId: p
      })
    },
    innerClassName: T.textWithIcon,
    children: [(0, s.jsx)("div", {
      children: _.default.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_MULTIPLE_FILES
    }), (0, s.jsx)(o.default, {
      size: 8,
      horizontal: !0
    }), (0, s.jsx)(u.default, {
      width: 16,
      height: 16,
      direction: u.default.Directions.RIGHT
    })]
  }) : (l()(null != C, "No attachment"), (0, s.jsxs)(f.default, {
    guildId: m,
    productId: p,
    attachmentId: C,
    innerClassName: T.textWithIcon,
    children: [(0, s.jsx)("div", {
      children: _.default.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_SINGLE_FILE
    }), (0, s.jsx)(o.default, {
      size: 8,
      horizontal: !0
    }), (0, s.jsx)(d.default, {
      width: 16,
      height: 16
    })]
  }))
}