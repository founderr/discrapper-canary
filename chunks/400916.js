"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var s = n("735250");
n("470079");
var a = n("512722"),
  r = n.n(a),
  i = n("399606"),
  l = n("481060"),
  u = n("682864"),
  o = n("671533"),
  d = n("943461"),
  c = n("240864"),
  C = n("613810"),
  E = n("596211"),
  _ = n("689938"),
  f = n("226979");

function A(e) {
  var t, n, a, A;
  let {
    guildId: p,
    productId: m
  } = e, h = (0, i.useStateFromStores)([c.default], () => c.default.getGuildProduct(m)), N = (null !== (A = null == h ? void 0 : null === (t = h.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== A ? A : 0) > 1, P = null == h ? void 0 : null === (a = h.attachments) || void 0 === a ? void 0 : null === (n = a[0]) || void 0 === n ? void 0 : n.id;
  return N ? (0, s.jsxs)(l.Button, {
    onClick: function() {
      C.default.open({
        guildId: p,
        productId: m
      })
    },
    innerClassName: f.textWithIcon,
    children: [(0, s.jsx)("div", {
      children: _.default.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_MULTIPLE_FILES
    }), (0, s.jsx)(u.default, {
      size: 8,
      horizontal: !0
    }), (0, s.jsx)(o.default, {
      width: 16,
      height: 16,
      direction: o.default.Directions.RIGHT
    })]
  }) : (r()(null != P, "No attachment"), (0, s.jsxs)(E.default, {
    guildId: p,
    productId: m,
    attachmentId: P,
    innerClassName: f.textWithIcon,
    children: [(0, s.jsx)("div", {
      children: _.default.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_SINGLE_FILE
    }), (0, s.jsx)(u.default, {
      size: 8,
      horizontal: !0
    }), (0, s.jsx)(d.default, {
      width: 16,
      height: 16
    })]
  }))
}