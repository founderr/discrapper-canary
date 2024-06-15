"use strict";
n.r(e), n.d(e, {
  CardDetailsModal: function() {
    return h
  }
});
var i = n("735250");
n("470079");
var r = n("442837"),
  l = n("117447"),
  a = n("481060"),
  s = n("264043"),
  o = n("812206"),
  u = n("572004"),
  d = n("601911"),
  c = n("504211"),
  f = n("981631"),
  S = n("689938"),
  p = n("135143"),
  m = n("224389");

function h(t) {
  let {
    appId: e,
    skuId: n,
    transitionState: h,
    onClose: T,
    onHeaderTitleClick: _,
    children: I,
    footer: v
  } = t, E = (0, r.useStateFromStores)([o.default, s.default], () => {
    var t;
    return null !== (t = o.default.getApplication(e)) && void 0 !== t ? t : s.default.getApplicationRecord(e)
  }, [e]);
  if (null == E) return null;
  let g = (0, d.findAppIconSrc)(E, 25),
    {
      termsOfServiceUrl: x,
      privacyPolicyUrl: C
    } = E;
  return (0, i.jsxs)(a.ModalRoot, {
    transitionState: h,
    size: a.ModalSize.DYNAMIC,
    className: m.modal,
    children: [(0, i.jsxs)(a.ModalHeader, {
      className: p.modalHeader,
      children: [(0, i.jsxs)(a.Clickable, {
        className: p.modalTitle,
        onClick: _,
        children: [null != g && (0, i.jsx)("img", {
          src: g.href,
          alt: "",
          className: m.appIcon
        }), (0, i.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          children: E.name
        })]
      }), (0, i.jsx)(a.ModalCloseButton, {
        onClick: T,
        className: p.modalCloseBtn
      })]
    }), I, (0, i.jsxs)(a.ModalFooter, {
      className: m.footer,
      children: [null != x && null != C ? (0, i.jsx)(a.Text, {
        color: "header-primary",
        variant: "text-sm/normal",
        children: S.default.Messages.STOREFRONT_DETAILS_TOS_AND_PRIVACY.format({
          tosUrl: x,
          ppUrl: C
        })
      }) : (0, i.jsx)(a.Text, {
        color: "header-primary",
        variant: "text-xs/normal",
        children: S.default.Messages.STOREFRONT_NO_TOS_PP
      }), (0, i.jsxs)("div", {
        className: m.footerButtons,
        children: [u.SUPPORTS_COPY && (0, i.jsx)(a.Button, {
          look: a.ButtonLooks.FILLED,
          size: a.ButtonSizes.ICON,
          color: a.ButtonColors.CUSTOM,
          "aria-label": S.default.Messages.COPY_LINK,
          className: m.linkButton,
          onClick: () => {
            let t = "".concat(location.protocol, "//").concat(location.host).concat(f.Routes.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, n));
            (0, u.copy)(t), (0, a.showToast)((0, a.createToast)(S.default.Messages.COPIED_LINK, a.ToastType.SUCCESS)), (0, c.trackStorefrontLinkCopiedEvent)(e, c.StorefrontLinkCopiedArea.DETAILS_MODAL, n)
          },
          children: (0, i.jsx)(l.LinkIcon, {
            width: 16,
            height: 16,
            color: "currentColor"
          })
        }), v]
      })]
    })]
  })
}