"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
});
var s = a("735250");
a("470079");
var n = a("512722"),
  i = a.n(n),
  l = a("468194"),
  r = a("442837"),
  c = a("477690"),
  u = a("481060"),
  o = a("809086"),
  d = a("430824"),
  m = a("943461"),
  f = a("240864"),
  h = a("598952"),
  x = a("596211"),
  g = a("689938"),
  v = a("862474");
let j = (0, l.cssValueToNumber)(c.default.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);

function N(e) {
  let {
    guildProductListing: t,
    guildId: a,
    onClose: n
  } = e, i = (0, r.useStateFromStores)([d.default], () => {
    var e;
    return null === (e = d.default.getGuild(a)) || void 0 === e ? void 0 : e.name
  });
  return (0, s.jsxs)(u.ModalHeader, {
    className: v.header,
    children: [(0, s.jsx)(o.default, {
      className: v.headerImage,
      listing: t,
      imageSize: j,
      alt: ""
    }), (0, s.jsx)(u.Spacer, {
      size: 16,
      horizontal: !0
    }), (0, s.jsxs)("div", {
      className: v.headerTextColumn,
      children: [(0, s.jsx)(u.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t.name
      }), (0, s.jsx)(u.Spacer, {
        size: 8
      }), (0, s.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: v.__invalid_description,
        children: i
      }), (0, s.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: v.__invalid_description,
        children: g.default.Messages.GUILD_PRODUCT_DOWNLOADS_COUNT.format({
          count: t.attachments_count
        })
      })]
    }), (0, s.jsx)(u.ModalCloseButton, {
      className: v.closeButton,
      onClick: n
    })]
  })
}

function p(e) {
  let {
    attachment: t,
    guildId: a,
    productId: n
  } = e;
  return (0, s.jsxs)("li", {
    className: v.attachmentRow,
    children: [(0, s.jsx)(h.default, {
      attachment: t
    }), (0, s.jsx)(x.default, {
      className: v.attachmentDownloadButton,
      guildId: a,
      productId: n,
      attachmentId: t.id,
      children: (0, s.jsx)(m.default, {})
    })]
  })
}

function _(e) {
  var t;
  let {
    guildId: a,
    productId: n,
    onClose: l,
    transitionState: c
  } = e, o = (0, r.useStateFromStores)([f.default], () => f.default.getGuildProduct(n));
  i()(null != o, "guildProductListing cannot be null");
  let d = null !== (t = o.attachments) && void 0 !== t ? t : [];
  return (0, s.jsxs)(u.ModalRoot, {
    className: v.modal,
    size: u.ModalSize.MEDIUM,
    transitionState: c,
    "aria-label": g.default.Messages.GUILD_PRODUCT_DOWNLOAD_MODAL_ARIA_LABEL,
    children: [(0, s.jsx)(N, {
      guildId: a,
      guildProductListing: o,
      onClose: l
    }), (0, s.jsx)(u.ModalContent, {
      children: (0, s.jsx)("ul", {
        className: v.__invalid_attachmentsList,
        children: d.map(e => (0, s.jsx)(p, {
          guildId: a,
          productId: o.id,
          attachment: e
        }, e.id))
      })
    })]
  })
}