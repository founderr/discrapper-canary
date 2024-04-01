"use strict";
a.r(t), a.d(t, {
  default: function() {
    return p
  }
});
var s = a("735250");
a("470079");
var n = a("512722"),
  i = a.n(n),
  l = a("468194"),
  r = a("442837"),
  u = a("477690"),
  c = a("481060"),
  o = a("809086"),
  d = a("430824"),
  m = a("682864"),
  f = a("943461"),
  h = a("240864"),
  x = a("598952"),
  g = a("596211"),
  v = a("689938"),
  j = a("450696");
let N = (0, l.cssValueToNumber)(u.default.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);

function _(e) {
  let {
    guildProductListing: t,
    guildId: a,
    onClose: n
  } = e, i = (0, r.useStateFromStores)([d.default], () => {
    var e;
    return null === (e = d.default.getGuild(a)) || void 0 === e ? void 0 : e.name
  });
  return (0, s.jsxs)(c.ModalHeader, {
    className: j.header,
    children: [(0, s.jsx)(o.default, {
      className: j.headerImage,
      listing: t,
      imageSize: N,
      alt: ""
    }), (0, s.jsx)(m.default, {
      size: 16,
      horizontal: !0
    }), (0, s.jsxs)("div", {
      className: j.headerTextColumn,
      children: [(0, s.jsx)(c.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t.name
      }), (0, s.jsx)(m.default, {
        size: 8
      }), (0, s.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: j.__invalid_description,
        children: i
      }), (0, s.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: j.__invalid_description,
        children: v.default.Messages.GUILD_PRODUCT_DOWNLOADS_COUNT.format({
          count: t.attachments_count
        })
      })]
    }), (0, s.jsx)(c.ModalCloseButton, {
      className: j.closeButton,
      onClick: n
    })]
  })
}

function I(e) {
  let {
    attachment: t,
    guildId: a,
    productId: n
  } = e;
  return (0, s.jsxs)("li", {
    className: j.attachmentRow,
    children: [(0, s.jsx)(x.default, {
      attachment: t
    }), (0, s.jsx)(g.default, {
      className: j.attachmentDownloadButton,
      guildId: a,
      productId: n,
      attachmentId: t.id,
      children: (0, s.jsx)(f.default, {})
    })]
  })
}

function p(e) {
  var t;
  let {
    guildId: a,
    productId: n,
    onClose: l,
    transitionState: u
  } = e, o = (0, r.useStateFromStores)([h.default], () => h.default.getGuildProduct(n));
  i()(null != o, "guildProductListing cannot be null");
  let d = null !== (t = o.attachments) && void 0 !== t ? t : [];
  return (0, s.jsxs)(c.ModalRoot, {
    className: j.modal,
    size: c.ModalSize.MEDIUM,
    transitionState: u,
    "aria-label": v.default.Messages.GUILD_PRODUCT_DOWNLOAD_MODAL_ARIA_LABEL,
    children: [(0, s.jsx)(_, {
      guildId: a,
      guildProductListing: o,
      onClose: l
    }), (0, s.jsx)(c.ModalContent, {
      children: (0, s.jsx)("ul", {
        className: j.__invalid_attachmentsList,
        children: d.map(e => (0, s.jsx)(I, {
          guildId: a,
          productId: o.id,
          attachment: e
        }, e.id))
      })
    })]
  })
}