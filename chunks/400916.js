n.d(t, {
  Z: function() {
    return I
  }
});
var s = n(735250);
n(470079);
var i = n(512722),
  l = n.n(i),
  a = n(399606),
  r = n(481060),
  o = n(671533),
  c = n(240864),
  u = n(613810),
  d = n(596211),
  E = n(689938),
  _ = n(7438);

function I(e) {
  var t, n, i, I;
  let {
    guildId: T,
    productId: m
  } = e, N = (0, a.e7)([c.Z], () => c.Z.getGuildProduct(m)), h = (null !== (I = null == N ? void 0 : null === (t = N.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== I ? I : 0) > 1, C = null == N ? void 0 : null === (i = N.attachments) || void 0 === i ? void 0 : null === (n = i[0]) || void 0 === n ? void 0 : n.id;
  return h ? (0, s.jsxs)(r.Button, {
    onClick: function() {
      u.Z.open({
        guildId: T,
        productId: m
      })
    },
    innerClassName: _.textWithIcon,
    children: [(0, s.jsx)("div", {
      children: E.Z.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_MULTIPLE_FILES
    }), (0, s.jsx)(r.Spacer, {
      size: 8,
      horizontal: !0
    }), (0, s.jsx)(o.Z, {
      width: 16,
      height: 16,
      direction: o.Z.Directions.RIGHT
    })]
  }) : (l()(null != C, "No attachment"), (0, s.jsxs)(d.Z, {
    guildId: T,
    productId: m,
    attachmentId: C,
    innerClassName: _.textWithIcon,
    children: [(0, s.jsx)("div", {
      children: E.Z.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_SINGLE_FILE
    }), (0, s.jsx)(r.Spacer, {
      size: 8,
      horizontal: !0
    }), (0, s.jsx)(r.DownloadIcon, {
      size: "xs",
      color: "currentColor"
    })]
  }))
}