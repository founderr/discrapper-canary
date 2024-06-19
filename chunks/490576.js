e.r(n), e.d(n, {
  default: function() {
    return N
  }
});
var a = e(735250);
e(470079);
var i = e(512722),
  r = e.n(i),
  s = e(468194),
  l = e(442837),
  o = e(477690),
  c = e(481060),
  u = e(809086),
  d = e(430824),
  m = e(240864),
  x = e(598952),
  h = e(596211),
  f = e(689938),
  g = e(243841);
let _ = (0, s.Mg)(o.Z.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);

function v(t) {
  let {
    guildProductListing: n,
    guildId: e,
    onClose: i
  } = t, r = (0, l.e7)([d.Z], () => {
    var t;
    return null === (t = d.Z.getGuild(e)) || void 0 === t ? void 0 : t.name
  });
  return (0, a.jsxs)(c.ModalHeader, {
    className: g.header,
    children: [(0, a.jsx)(u.Z, {
      className: g.headerImage,
      listing: n,
      imageSize: _,
      alt: ""
    }), (0, a.jsx)(c.Spacer, {
      size: 16,
      horizontal: !0
    }), (0, a.jsxs)("div", {
      className: g.headerTextColumn,
      children: [(0, a.jsx)(c.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: n.name
      }), (0, a.jsx)(c.Spacer, {
        size: 8
      }), (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: g.__invalid_description,
        children: r
      }), (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: g.__invalid_description,
        children: f.Z.Messages.GUILD_PRODUCT_DOWNLOADS_COUNT.format({
          count: n.attachments_count
        })
      })]
    }), (0, a.jsx)(c.ModalCloseButton, {
      className: g.closeButton,
      onClick: i
    })]
  })
}

function j(t) {
  let {
    attachment: n,
    guildId: e,
    productId: i
  } = t;
  return (0, a.jsxs)("li", {
    className: g.attachmentRow,
    children: [(0, a.jsx)(x.Z, {
      attachment: n
    }), (0, a.jsx)(h.Z, {
      className: g.attachmentDownloadButton,
      guildId: e,
      productId: i,
      attachmentId: n.id,
      children: (0, a.jsx)(c.DownloadIcon, {
        size: "md",
        color: "currentColor"
      })
    })]
  })
}

function N(t) {
  var n;
  let {
    guildId: e,
    productId: i,
    onClose: s,
    transitionState: o
  } = t, u = (0, l.e7)([m.Z], () => m.Z.getGuildProduct(i));
  r()(null != u, "guildProductListing cannot be null");
  let d = null !== (n = u.attachments) && void 0 !== n ? n : [];
  return (0, a.jsxs)(c.ModalRoot, {
    className: g.modal,
    size: c.ModalSize.MEDIUM,
    transitionState: o,
    "aria-label": f.Z.Messages.GUILD_PRODUCT_DOWNLOAD_MODAL_ARIA_LABEL,
    children: [(0, a.jsx)(v, {
      guildId: e,
      guildProductListing: u,
      onClose: s
    }), (0, a.jsx)(c.ModalContent, {
      children: (0, a.jsx)("ul", {
        className: g.__invalid_attachmentsList,
        children: d.map(t => (0, a.jsx)(j, {
          guildId: e,
          productId: u.id,
          attachment: t
        }, t.id))
      })
    })]
  })
}