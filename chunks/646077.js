"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
}), n("222007");
var r = n("37983"),
  a = n("884691"),
  i = n("414456"),
  o = n.n(i),
  l = n("77078"),
  s = n("812204"),
  c = n("685665"),
  u = n("873622"),
  d = n("476765"),
  f = n("599110"),
  h = n("652914"),
  m = n("254398"),
  p = n("49111"),
  g = n("782340"),
  v = n("369522");

function w(e) {
  let {
    transitionState: t,
    onClose: i,
    onComplete: w,
    uploadType: y,
    showUpsellHeader: b,
    analyticsPage: E
  } = e, [S, A] = a.useState(!1), R = (0, l.useModalContext)(), _ = (0, d.useUID)(), {
    AnalyticsLocationProvider: O
  } = (0, c.default)(s.default.GIF_PICKER);
  async function x(e) {
    let {
      gifSrc: t
    } = e;
    if (null == t || S) return;
    A(!0);
    let a = (0, m.makeTenorProxyURL)(t),
      o = await fetch(a),
      s = await o.blob();
    i(), (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("57015").then(n.bind(n, "57015"));
      return t => (0, r.jsx)(e, {
        imgURI: a,
        file: new File([s], "tenor.gif", {
          type: "image/gif"
        }),
        onCrop: w,
        uploadType: y,
        showUpsellHeader: b,
        ...t
      })
    }, {
      contextKey: R
    })
  }
  return a.useEffect(() => {
    f.default.track(p.AnalyticEvents.OPEN_MODAL, {
      type: p.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
      location: {
        page: E
      }
    })
  }, [E]), (0, r.jsx)(O, {
    children: (0, r.jsxs)(l.ModalRoot, {
      className: v.gifPickerCroppingModal,
      "aria-labelledby": _,
      transitionState: t,
      size: l.ModalSize.SMALL,
      children: [b ? (0, r.jsx)(h.default, {
        type: y,
        analyticsPage: E,
        analyticsSection: p.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
        isGIF: !0
      }) : null, (0, r.jsxs)(l.ModalHeader, {
        className: v.modalHeader,
        separator: !1,
        children: [(0, r.jsx)(l.FormTitle, {
          className: v.titleCase,
          tag: l.FormTitleTags.H1,
          children: g.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF
        }), (0, r.jsx)(l.ModalCloseButton, {
          onClick: i,
          className: v.modalCloseButton
        })]
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(u.default, {
          className: o(v.gifPicker, {
            [v.loadingOverlay]: S
          }),
          onSelectGIF: x,
          hideFavorites: !0
        }), S && (0, r.jsx)(l.Spinner, {
          className: v.spinner
        })]
      })]
    })
  })
}