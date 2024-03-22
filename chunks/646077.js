"use strict";
a.r(t), a.d(t, {
  default: function() {
    return y
  }
}), a("222007");
var n = a("37983"),
  l = a("884691"),
  o = a("414456"),
  s = a.n(o),
  i = a("77078"),
  c = a("812204"),
  r = a("685665"),
  u = a("873622"),
  d = a("476765"),
  f = a("599110"),
  p = a("652914"),
  h = a("254398"),
  A = a("49111"),
  _ = a("782340"),
  g = a("699111");

function y(e) {
  let {
    transitionState: t,
    onClose: o,
    onComplete: y,
    uploadType: m,
    showUpsellHeader: E,
    analyticsPage: w
  } = e, [R, x] = l.useState(!1), I = (0, i.useModalContext)(), L = (0, d.useUID)(), {
    AnalyticsLocationProvider: N
  } = (0, r.default)(c.default.GIF_PICKER);
  async function S(e) {
    let {
      gifSrc: t
    } = e;
    if (null == t || R) return;
    x(!0);
    let l = (0, h.makeTenorProxyURL)(t),
      s = await fetch(l),
      c = await s.blob();
    o(), (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await a.el("57015").then(a.bind(a, "57015"));
      return t => (0, n.jsx)(e, {
        imgURI: l,
        file: new File([c], "tenor.gif", {
          type: "image/gif"
        }),
        onCrop: y,
        uploadType: m,
        showUpsellHeader: E,
        ...t
      })
    }, {
      contextKey: I
    })
  }
  return l.useEffect(() => {
    f.default.track(A.AnalyticEvents.OPEN_MODAL, {
      type: A.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
      location: {
        page: w
      }
    })
  }, [w]), (0, n.jsx)(N, {
    children: (0, n.jsxs)(i.ModalRoot, {
      className: g.gifPickerCroppingModal,
      "aria-labelledby": L,
      transitionState: t,
      size: i.ModalSize.SMALL,
      children: [E ? (0, n.jsx)(p.default, {
        type: m,
        analyticsPage: w,
        analyticsSection: A.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
        isGIF: !0
      }) : null, (0, n.jsxs)(i.ModalHeader, {
        className: g.modalHeader,
        separator: !1,
        children: [(0, n.jsx)(i.FormTitle, {
          className: g.titleCase,
          tag: i.FormTitleTags.H1,
          children: _.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF
        }), (0, n.jsx)(i.ModalCloseButton, {
          onClick: o,
          className: g.modalCloseButton
        })]
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsx)(u.default, {
          className: s(g.gifPicker, {
            [g.loadingOverlay]: R
          }),
          onSelectGIF: S,
          hideFavorites: !0
        }), R && (0, n.jsx)(i.Spinner, {
          className: g.spinner
        })]
      })]
    })
  })
}