"use strict";
a.r(e), a.d(e, {
  default: function() {
    return I
  }
});
var n = a("735250");
a("470079");
var s = a("512722"),
  i = a.n(s),
  l = a("468194"),
  r = a("442837"),
  u = a("477690"),
  o = a("481060"),
  c = a("809086"),
  d = a("430824"),
  f = a("943461"),
  m = a("240864"),
  h = a("598952"),
  x = a("596211"),
  g = a("689938"),
  v = a("862474");
let j = (0, l.cssValueToNumber)(u.default.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);

function _(t) {
  let {
    guildProductListing: e,
    guildId: a,
    onClose: s
  } = t, i = (0, r.useStateFromStores)([d.default], () => {
    var t;
    return null === (t = d.default.getGuild(a)) || void 0 === t ? void 0 : t.name
  });
  return (0, n.jsxs)(o.ModalHeader, {
    className: v.header,
    children: [(0, n.jsx)(c.default, {
      className: v.headerImage,
      listing: e,
      imageSize: j,
      alt: ""
    }), (0, n.jsx)(o.Spacer, {
      size: 16,
      horizontal: !0
    }), (0, n.jsxs)("div", {
      className: v.headerTextColumn,
      children: [(0, n.jsx)(o.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: e.name
      }), (0, n.jsx)(o.Spacer, {
        size: 8
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: v.__invalid_description,
        children: i
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: v.__invalid_description,
        children: g.default.Messages.GUILD_PRODUCT_DOWNLOADS_COUNT.format({
          count: e.attachments_count
        })
      })]
    }), (0, n.jsx)(o.ModalCloseButton, {
      className: v.closeButton,
      onClick: s
    })]
  })
}

function N(t) {
  let {
    attachment: e,
    guildId: a,
    productId: s
  } = t;
  return (0, n.jsxs)("li", {
    className: v.attachmentRow,
    children: [(0, n.jsx)(h.default, {
      attachment: e
    }), (0, n.jsx)(x.default, {
      className: v.attachmentDownloadButton,
      guildId: a,
      productId: s,
      attachmentId: e.id,
      children: (0, n.jsx)(f.default, {})
    })]
  })
}

function I(t) {
  var e;
  let {
    guildId: a,
    productId: s,
    onClose: l,
    transitionState: u
  } = t, c = (0, r.useStateFromStores)([m.default], () => m.default.getGuildProduct(s));
  i()(null != c, "guildProductListing cannot be null");
  let d = null !== (e = c.attachments) && void 0 !== e ? e : [];
  return (0, n.jsxs)(o.ModalRoot, {
    className: v.modal,
    size: o.ModalSize.MEDIUM,
    transitionState: u,
    "aria-label": g.default.Messages.GUILD_PRODUCT_DOWNLOAD_MODAL_ARIA_LABEL,
    children: [(0, n.jsx)(_, {
      guildId: a,
      guildProductListing: c,
      onClose: l
    }), (0, n.jsx)(o.ModalContent, {
      children: (0, n.jsx)("ul", {
        className: v.__invalid_attachmentsList,
        children: d.map(t => (0, n.jsx)(N, {
          guildId: a,
          productId: c.id,
          attachment: t
        }, t.id))
      })
    })]
  })
}