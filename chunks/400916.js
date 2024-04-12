"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
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
  f = n("613810"),
  E = n("596211"),
  _ = n("689938"),
  m = n("929802");

function T(e) {
  var t, n, a, T;
  let {
    guildId: I,
    productId: p
  } = e, h = (0, i.useStateFromStores)([c.default], () => c.default.getGuildProduct(p)), N = (null !== (T = null == h ? void 0 : null === (t = h.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== T ? T : 0) > 1, S = null == h ? void 0 : null === (a = h.attachments) || void 0 === a ? void 0 : null === (n = a[0]) || void 0 === n ? void 0 : n.id;
  return N ? (0, s.jsxs)(r.Button, {
    onClick: function() {
      f.default.open({
        guildId: I,
        productId: p
      })
    },
    innerClassName: m.textWithIcon,
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
  }) : (l()(null != S, "No attachment"), (0, s.jsxs)(E.default, {
    guildId: I,
    productId: p,
    attachmentId: S,
    innerClassName: m.textWithIcon,
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