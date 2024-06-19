e.r(s), e.d(s, {
  default: function() {
    return O
  }
}), e(47120);
var o, a, i = e(735250),
  l = e(470079),
  n = e(442837),
  c = e(481060),
  r = e(728345),
  d = e(812206),
  u = e(886176),
  p = e(270144),
  h = e(572004),
  N = e(504211),
  E = e(283836),
  C = e(507608),
  T = e(981631),
  m = e(272242),
  S = e(689938),
  R = e(435601);

function O(t) {
  let {
    onClose: s,
    transitionState: e,
    appId: o,
    guildId: a
  } = t, O = (0, n.e7)([d.Z], () => d.Z.getApplication(o), [o]), [I, f] = l.useState(() => d.Z.isFetchingApplication(o) ? {
    status: 1
  } : {
    status: 0
  }), g = l.useRef(null), [L, j] = l.useState(!0), x = () => {
    var t;
    (null === (t = g.current) || void 0 === t ? void 0 : t.isScrolledToBottom()) === !0 ? j(!1) : j(!0)
  };
  l.useEffect(() => {
    0 === I.status && (f({
      status: 1
    }), r.Z.fetchApplication(o).then(() => {
      f({
        status: 2
      })
    }).catch(t => {
      f({
        status: 3,
        error: t.message
      })
    }))
  }, [o, I.status]);
  let {
    subs: A,
    otps: k,
    subscriptionGroupListing: M
  } = (0, E.q)(o, a);
  if ((0, p.FE)(o, null == O ? void 0 : O.primarySkuId, {
      refetchOnMount: !0
    }), null == O) return null;
  let v = S.Z.Messages.STOREFRONT_TITLE.format({
    appName: O.name
  });
  return (0, i.jsxs)(c.ModalRoot, {
    transitionState: e,
    "aria-label": v,
    size: c.ModalSize.DYNAMIC,
    className: R.modal,
    children: [(0, i.jsxs)(c.ModalHeader, {
      className: R.modalHeader,
      children: [(0, i.jsxs)("div", {
        className: R.modalTitle,
        children: [(0, i.jsx)(u.Z, {}), (0, i.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: v
        })]
      }), (0, i.jsxs)("div", {
        className: R.modalHeaderLinks,
        children: [h.wS && (0, i.jsx)(c.Button, {
          look: c.ButtonLooks.BLANK,
          size: c.ButtonSizes.ICON,
          color: c.ButtonColors.TRANSPARENT,
          "aria-label": S.Z.Messages.COPY_LINK,
          onClick: () => {
            let t = "".concat(location.protocol, "//").concat(location.host).concat(T.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(o, m.ApplicationDirectoryProfileSections.STORE));
            (0, h.JG)(t), (0, c.showToast)((0, c.createToast)(S.Z.Messages.COPIED_LINK, c.ToastType.SUCCESS)), (0, N.X)(o, N.B.STORE_MODAL)
          },
          children: (0, i.jsx)(c.LinkIcon, {
            size: "custom",
            width: 20,
            height: 20,
            color: "var(--white)"
          })
        }), (0, i.jsx)(c.ModalCloseButton, {
          onClick: s,
          className: R.modalCloseBtn
        })]
      })]
    }), (0, i.jsx)(c.ModalContent, {
      scrollerRef: t => {
        null != t && (g.current = t, x())
      },
      onScroll: x,
      children: (0, i.jsx)(C.AF, {
        app: O,
        subscriptionGroupListing: M,
        guildId: a,
        subscriptionListings: A,
        otpListings: k
      })
    }), (0, i.jsx)("div", {
      className: R.containerScrollGradient,
      "data-shown": L
    })]
  })
}(a = o || (o = {}))[a.NONE = 0] = "NONE", a[a.FETCHING = 1] = "FETCHING", a[a.FETCHED = 2] = "FETCHED", a[a.ERROR = 3] = "ERROR"