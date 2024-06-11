"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var a = s("735250");
s("470079");
var n = s("512722"),
  r = s.n(n),
  l = s("399606"),
  u = s("481060"),
  i = s("671533"),
  o = s("943461"),
  c = s("240864"),
  d = s("613810"),
  C = s("596211"),
  _ = s("689938"),
  E = s("226979");

function A(e) {
  var t, s, n, A;
  let {
    guildId: f,
    productId: I
  } = e, N = (0, l.useStateFromStores)([c.default], () => c.default.getGuildProduct(I)), P = (null !== (A = null == N ? void 0 : null === (t = N.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== A ? A : 0) > 1, R = null == N ? void 0 : null === (n = N.attachments) || void 0 === n ? void 0 : null === (s = n[0]) || void 0 === s ? void 0 : s.id;
  return P ? (0, a.jsxs)(u.Button, {
    onClick: function() {
      d.default.open({
        guildId: f,
        productId: I
      })
    },
    innerClassName: E.textWithIcon,
    children: [(0, a.jsx)("div", {
      children: _.default.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_MULTIPLE_FILES
    }), (0, a.jsx)(u.Spacer, {
      size: 8,
      horizontal: !0
    }), (0, a.jsx)(i.default, {
      width: 16,
      height: 16,
      direction: i.default.Directions.RIGHT
    })]
  }) : (r()(null != R, "No attachment"), (0, a.jsxs)(C.default, {
    guildId: f,
    productId: I,
    attachmentId: R,
    innerClassName: E.textWithIcon,
    children: [(0, a.jsx)("div", {
      children: _.default.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_SINGLE_FILE
    }), (0, a.jsx)(u.Spacer, {
      size: 8,
      horizontal: !0
    }), (0, a.jsx)(o.default, {
      width: 16,
      height: 16
    })]
  }))
}