a.r(s), a.d(s, {
  default: function() {
    return u
  }
}), a(47120);
var t = a(735250);
a(470079);
var n = a(512722),
  i = a.n(n),
  r = a(481060),
  l = a(584825),
  o = a(353254),
  c = a(866104),
  d = a(689938),
  _ = a(457867);

function u(e) {
  let {
    onClose: s,
    guildId: a,
    transitionState: n
  } = e, u = (0, l.YB)(a);
  i()(null != u, "subscriptionsSettings cannot be null");
  let m = u.cover_image_asset,
    [h] = (0, o.Z)(null != m ? m : void 0);
  return (0, t.jsxs)(r.ModalRoot, {
    className: _.modal,
    size: r.ModalSize.MEDIUM,
    transitionState: n,
    "aria-label": d.Z.Messages.GUILD_STORE_HERO_DESCRIPTION_MODAL_ARIA,
    children: [(0, t.jsx)("div", {
      ref: h,
      className: _.coverImageContainer,
      children: null != m && (0, t.jsx)(c.Z, {
        coverImageAsset: m
      })
    }), (0, t.jsx)(r.Heading, {
      variant: "text-lg/medium",
      color: "header-primary",
      className: _.header,
      children: d.Z.Messages.GUILD_STORE_HERO_DESCRIPTION_MODAL_HEADER
    }), (0, t.jsx)(r.ModalContent, {
      className: _.content,
      children: (0, t.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        className: _.description,
        children: u.description
      })
    }), (0, t.jsx)(r.ModalFooter, {
      className: _.__invalid_footer,
      children: (0, t.jsx)(r.Button, {
        onClick: s,
        children: d.Z.Messages.GUILD_STORE_HERO_DESCRIPTION_MODAL_CTA
      })
    })]
  })
}