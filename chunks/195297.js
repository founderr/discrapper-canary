n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n(47120);
var o = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  l = n(481060),
  r = n(100527),
  c = n(906732),
  u = n(455708),
  d = n(153124),
  E = n(626135),
  _ = n(488499),
  N = n(58384),
  I = n(981631),
  g = n(689938),
  R = n(85618);

function f(e) {
  let {
    transitionState: t,
    onClose: s,
    onComplete: f,
    uploadType: p,
    showUpsellHeader: m,
    analyticsPage: T
  } = e, [h, A] = i.useState(!1), x = (0, l.useModalContext)(), M = (0, d.Dt)(), {
    analyticsLocations: j
  } = (0, c.ZP)(r.Z.GIF_PICKER);
  async function C(e) {
    let {
      gifSrc: t
    } = e;
    if (null == t || h) return;
    A(!0);
    let i = (0, N.Q)(t),
      a = await fetch(i),
      r = await a.blob();
    s(), (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("60618")]).then(n.bind(n, 850085));
      return t => (0, o.jsx)(e, {
        imgURI: i,
        file: new File([r], "tenor.gif", {
          type: "image/gif"
        }),
        onCrop: f,
        uploadType: p,
        showUpsellHeader: m,
        ...t
      })
    }, {
      contextKey: x
    })
  }
  return i.useEffect(() => {
    E.default.track(I.rMx.OPEN_MODAL, {
      type: I.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
      location: {
        page: T
      }
    })
  }, [T]), (0, o.jsx)(c.Gt, {
    value: j,
    children: (0, o.jsxs)(l.ModalRoot, {
      className: R.__invalid_gifPickerCroppingModal,
      "aria-labelledby": M,
      transitionState: t,
      size: l.ModalSize.SMALL,
      children: [m ? (0, o.jsx)(_.Z, {
        type: p,
        analyticsPage: T,
        analyticsSection: I.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
        isGIF: !0
      }) : null, (0, o.jsxs)(l.ModalHeader, {
        className: R.modalHeader,
        separator: !1,
        children: [(0, o.jsx)(l.FormTitle, {
          className: R.titleCase,
          tag: l.FormTitleTags.H1,
          children: g.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF
        }), (0, o.jsx)(l.ModalCloseButton, {
          onClick: s,
          className: R.modalCloseButton
        })]
      }), (0, o.jsxs)("div", {
        children: [(0, o.jsx)(u.Z, {
          className: a()(R.gifPicker, {
            [R.loadingOverlay]: h
          }),
          onSelectGIF: C,
          hideFavorites: !0
        }), h && (0, o.jsx)(l.Spinner, {
          className: R.spinner
        })]
      })]
    })
  })
}