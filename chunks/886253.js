"use strict";
n.r(e), n.d(e, {
  CardDetailsModal: function() {
    return m
  }
});
var i = n("735250");
n("470079");
var r = n("442837"),
  l = n("117447"),
  a = n("481060"),
  s = n("812206"),
  o = n("572004"),
  u = n("601911"),
  d = n("504211"),
  c = n("981631"),
  f = n("689938"),
  S = n("135143"),
  p = n("224389");

function m(t) {
  let {
    appId: e,
    skuId: n,
    transitionState: m,
    onClose: h,
    onHeaderTitleClick: T,
    children: _,
    footer: I
  } = t, v = (0, r.useStateFromStores)([s.default], () => s.default.getApplication(e), [e]);
  if (null == v) return null;
  let E = (0, u.findAppIconSrc)(v, 25),
    {
      termsOfServiceUrl: g,
      privacyPolicyUrl: x
    } = v;
  return (0, i.jsxs)(a.ModalRoot, {
    transitionState: m,
    size: a.ModalSize.DYNAMIC,
    className: p.modal,
    children: [(0, i.jsxs)(a.ModalHeader, {
      className: S.modalHeader,
      children: [(0, i.jsxs)(a.Clickable, {
        className: S.modalTitle,
        onClick: T,
        children: [null != E && (0, i.jsx)("img", {
          src: E.href,
          alt: "",
          className: p.appIcon
        }), (0, i.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          children: v.name
        })]
      }), (0, i.jsx)(a.ModalCloseButton, {
        onClick: h,
        className: S.modalCloseBtn
      })]
    }), _, (0, i.jsxs)(a.ModalFooter, {
      className: p.footer,
      children: [null != g && null != x ? (0, i.jsx)(a.Text, {
        color: "header-primary",
        variant: "text-sm/normal",
        children: f.default.Messages.STOREFRONT_DETAILS_TOS_AND_PRIVACY.format({
          tosUrl: g,
          ppUrl: x
        })
      }) : (0, i.jsx)(a.Text, {
        color: "header-primary",
        variant: "text-xs/normal",
        children: f.default.Messages.STOREFRONT_NO_TOS_PP
      }), (0, i.jsxs)("div", {
        className: p.footerButtons,
        children: [o.SUPPORTS_COPY && (0, i.jsx)(a.Button, {
          look: a.ButtonLooks.FILLED,
          size: a.ButtonSizes.ICON,
          color: a.ButtonColors.CUSTOM,
          "aria-label": f.default.Messages.COPY_LINK,
          className: p.linkButton,
          onClick: () => {
            let t = "".concat(location.protocol, "//").concat(location.host).concat(c.Routes.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, n));
            (0, o.copy)(t), (0, a.showToast)((0, a.createToast)(f.default.Messages.COPIED_LINK, a.ToastType.SUCCESS)), (0, d.trackStorefrontLinkCopiedEvent)(e, d.StorefrontLinkCopiedArea.DETAILS_MODAL, n)
          },
          children: (0, i.jsx)(l.LinkIcon, {
            width: 16,
            height: 16,
            color: "currentColor"
          })
        }), I]
      })]
    })]
  })
}