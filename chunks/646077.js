"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var a = n("37983"),
  r = n("884691"),
  l = n("414456"),
  i = n.n(l),
  o = n("77078"),
  s = n("812204"),
  c = n("685665"),
  u = n("873622"),
  d = n("476765"),
  f = n("599110"),
  h = n("652914"),
  m = n("254398"),
  p = n("49111"),
  A = n("782340"),
  _ = n("699111");

function E(e) {
  let {
    transitionState: t,
    onClose: l,
    onComplete: E,
    uploadType: R,
    showUpsellHeader: g,
    analyticsPage: L
  } = e, [S, w] = r.useState(!1), y = (0, o.useModalContext)(), v = (0, d.useUID)(), {
    AnalyticsLocationProvider: x
  } = (0, c.default)(s.default.GIF_PICKER);
  async function N(e) {
    let {
      gifSrc: t
    } = e;
    if (null == t || S) return;
    w(!0);
    let r = (0, m.makeTenorProxyURL)(t),
      i = await fetch(r),
      s = await i.blob();
    l(), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("57015").then(n.bind(n, "57015"));
      return t => (0, a.jsx)(e, {
        imgURI: r,
        file: new File([s], "tenor.gif", {
          type: "image/gif"
        }),
        onCrop: E,
        uploadType: R,
        showUpsellHeader: g,
        ...t
      })
    }, {
      contextKey: y
    })
  }
  return r.useEffect(() => {
    f.default.track(p.AnalyticEvents.OPEN_MODAL, {
      type: p.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
      location: {
        page: L
      }
    })
  }, [L]), (0, a.jsx)(x, {
    children: (0, a.jsxs)(o.ModalRoot, {
      className: _.gifPickerCroppingModal,
      "aria-labelledby": v,
      transitionState: t,
      size: o.ModalSize.SMALL,
      children: [g ? (0, a.jsx)(h.default, {
        type: R,
        analyticsPage: L,
        analyticsSection: p.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
        isGIF: !0
      }) : null, (0, a.jsxs)(o.ModalHeader, {
        className: _.modalHeader,
        separator: !1,
        children: [(0, a.jsx)(o.FormTitle, {
          className: _.titleCase,
          tag: o.FormTitleTags.H1,
          children: A.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF
        }), (0, a.jsx)(o.ModalCloseButton, {
          onClick: l,
          className: _.modalCloseButton
        })]
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(u.default, {
          className: i(_.gifPicker, {
            [_.loadingOverlay]: S
          }),
          onSelectGIF: N,
          hideFavorites: !0
        }), S && (0, a.jsx)(o.Spinner, {
          className: _.spinner
        })]
      })]
    })
  })
}