n.d(t, {
  Z: function() {
    return I
  }
});
var s = n(735250);
n(470079);
var r = n(512722),
  a = n.n(r),
  i = n(399606),
  l = n(481060),
  o = n(671533),
  _ = n(240864),
  E = n(613810),
  C = n(596211),
  c = n(689938),
  A = n(7438);

function I(e) {
  var t, n, r, I;
  let {
    guildId: u,
    productId: N
  } = e, R = (0, i.e7)([_.Z], () => _.Z.getGuildProduct(N)), O = (null !== (I = null == R ? void 0 : null === (t = R.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== I ? I : 0) > 1, L = null == R ? void 0 : null === (r = R.attachments) || void 0 === r ? void 0 : null === (n = r[0]) || void 0 === n ? void 0 : n.id;
  return O ? (0, s.jsxs)(l.Button, {
    onClick: function() {
      E.Z.open({
        guildId: u,
        productId: N
      })
    },
    innerClassName: A.textWithIcon,
    children: [(0, s.jsx)("div", {
      children: c.Z.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_MULTIPLE_FILES
    }), (0, s.jsx)(l.Spacer, {
      size: 8,
      horizontal: !0
    }), (0, s.jsx)(o.Z, {
      width: 16,
      height: 16,
      direction: o.Z.Directions.RIGHT
    })]
  }) : (a()(null != L, "No attachment"), (0, s.jsxs)(C.Z, {
    guildId: u,
    productId: N,
    attachmentId: L,
    innerClassName: A.textWithIcon,
    children: [(0, s.jsx)("div", {
      children: c.Z.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_SINGLE_FILE
    }), (0, s.jsx)(l.Spacer, {
      size: 8,
      horizontal: !0
    }), (0, s.jsx)(l.DownloadIcon, {
      size: "xs",
      color: "currentColor"
    })]
  }))
}