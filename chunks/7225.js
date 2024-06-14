"use strict";
s.r(e), s.d(e, {
  default: function() {
    return O
  }
}), s("47120");
var o, a, i = s("735250"),
  l = s("470079"),
  n = s("632140"),
  r = s("442837"),
  c = s("481060"),
  d = s("728345"),
  u = s("812206"),
  p = s("886176"),
  h = s("270144"),
  f = s("572004"),
  S = s("504211"),
  C = s("283836"),
  N = s("507608"),
  E = s("981631"),
  T = s("272242"),
  R = s("689938"),
  m = s("135143");

function O(t) {
  let {
    onClose: e,
    transitionState: s,
    appId: o,
    guildId: a
  } = t, O = (0, r.useStateFromStores)([u.default], () => u.default.getApplication(o), [o]), [I, L] = l.useState(() => u.default.isFetchingApplication(o) ? {
    status: 1
  } : {
    status: 0
  }), g = l.useRef(null), [k, A] = l.useState(!0), j = () => {
    var t;
    (null === (t = g.current) || void 0 === t ? void 0 : t.isScrolledToBottom()) === !0 ? A(!1) : A(!0)
  };
  l.useEffect(() => {
    0 === I.status && (L({
      status: 1
    }), d.default.fetchApplication(o).then(() => {
      L({
        status: 2
      })
    }).catch(t => {
      L({
        status: 3,
        error: t.message
      })
    }))
  }, [o, I.status]);
  let {
    subs: x,
    otps: v,
    subscriptionGroupListing: M
  } = (0, C.useRefreshedStorefrontProducts)(o, a);
  if ((0, h.useFetchListingsForApplication)(o, null == O ? void 0 : O.primarySkuId, {
      refetchOnMount: !0
    }), null == O) return null;
  let P = R.default.Messages.STOREFRONT_TITLE.format({
    appName: O.name
  });
  return (0, i.jsxs)(c.ModalRoot, {
    transitionState: s,
    "aria-label": P,
    size: c.ModalSize.DYNAMIC,
    className: m.modal,
    children: [(0, i.jsxs)(c.ModalHeader, {
      className: m.modalHeader,
      children: [(0, i.jsxs)("div", {
        className: m.modalTitle,
        children: [(0, i.jsx)(p.default, {}), (0, i.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: P
        })]
      }), (0, i.jsxs)("div", {
        className: m.modalHeaderLinks,
        children: [f.SUPPORTS_COPY && (0, i.jsx)(c.Button, {
          look: c.ButtonLooks.BLANK,
          size: c.ButtonSizes.ICON,
          color: c.ButtonColors.TRANSPARENT,
          "aria-label": R.default.Messages.COPY_LINK,
          onClick: () => {
            let t = "".concat(location.protocol, "//").concat(location.host).concat(E.Routes.APPLICATION_DIRECTORY_PROFILE_SECTION(o, T.ApplicationDirectoryProfileSections.STORE));
            (0, f.copy)(t), (0, c.showToast)((0, c.createToast)(R.default.Messages.COPIED_LINK, c.ToastType.SUCCESS)), (0, S.trackStorefrontLinkCopiedEvent)(o, S.StorefrontLinkCopiedArea.STORE_MODAL)
          },
          children: (0, i.jsx)(n.LinkIcon, {
            width: 20,
            height: 20,
            color: "var(--white)"
          })
        }), (0, i.jsx)(c.ModalCloseButton, {
          onClick: e,
          className: m.modalCloseBtn
        })]
      })]
    }), (0, i.jsx)(c.ModalContent, {
      scrollerRef: t => {
        null != t && (g.current = t, j())
      },
      onScroll: j,
      children: (0, i.jsx)(N.AppStorefront, {
        app: O,
        subscriptionGroupListing: M,
        guildId: a,
        subscriptionListings: x,
        otpListings: v
      })
    }), (0, i.jsx)("div", {
      className: m.containerScrollGradient,
      "data-shown": k
    })]
  })
}(a = o || (o = {}))[a.NONE = 0] = "NONE", a[a.FETCHING = 1] = "FETCHING", a[a.FETCHED = 2] = "FETCHED", a[a.ERROR = 3] = "ERROR"