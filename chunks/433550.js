r.r(n), r.d(n, {
  StickerPackViewAllModalFooter: function() {
    return O
  },
  default: function() {
    return L
  }
}), r(653041), r(47120);
var l = r(735250),
  t = r(470079),
  s = r(120356),
  i = r.n(s),
  o = r(954955),
  a = r.n(o),
  c = r(442837),
  d = r(477690),
  u = r(481060),
  m = r(691251),
  E = r(598),
  N = r(409813),
  S = r(185139),
  h = r(624138),
  C = r(790954),
  p = r(453070),
  _ = r(926491),
  I = r(378233),
  f = r(515005),
  P = r(282896),
  x = r(929204),
  A = r(981631),
  T = r(689938),
  v = r(451178);
let R = (0, h.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS),
  j = (0, h.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING),
  M = (0, h.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN),
  k = R + 2 * j,
  g = a()(C.pF, 250),
  y = () => {
    g.cancel()
  },
  b = e => {
    let {
      visibleRowIndex: n,
      columnIndex: r
    } = e;
    g.cancel(), (0, C.Mf)(r, n, m.u.MOUSE_EVENT)
  },
  D = e => {
    let {
      stickerPack: n,
      width: r,
      hasHeaderImage: s,
      isScrolling: o,
      onInspect: a
    } = e, c = t.useMemo(() => [(0, I.z)(n)], [n]), d = (0, C.Y6)(e => e.inspectedStickerPosition), {
      rowCountBySection: u,
      stickersGrid: m,
      gutterWidth: E
    } = (0, p.el)({
      stickersCategories: c,
      stickerNodeMargin: M,
      stickerNodeWidth: k,
      listWidth: r
    });
    return (0, l.jsxs)("div", {
      className: i()(v.container, {
        [v.containerWithHeader]: s
      }),
      children: [(0, l.jsx)(P.Z, {
        className: v.header,
        stickerPack: n,
        withDescription: !0
      }, n.id), (0, l.jsx)("div", {
        onFocus: y,
        onBlur: g,
        onMouseOver: y,
        onMouseOut: g,
        children: (() => {
          if (0 === u.length) return null;
          let e = [];
          for (let n = 0; n < u[0]; n++) e.push((0, l.jsx)(f.Z, {
            enlargeOnInteraction: !0,
            preferAnimation: !0,
            gutterWidth: E,
            inspectedStickerPosition: d,
            isScrolling: o,
            onInspect: a,
            rowIndex: n,
            stickerDescriptors: m[n],
            stickerPadding: j,
            stickerSize: R,
            isDisplayingIndividualStickers: !0,
            checkSendability: !1
          }, n));
          return e
        })()
      })]
    })
  },
  O = e => {
    let {
      onClose: n,
      stickerPack: r
    } = e;
    (0, p.fP)();
    let t = (0, c.e7)([_.Z], () => _.Z.isPremiumPack(r.id));
    return (0, l.jsxs)(u.ModalFooter, {
      className: v.footer,
      children: [(0, l.jsx)(u.Anchor, {
        onClick: n,
        className: v.skuPreviewFooterCloseButton,
        children: T.Z.Messages.CLOSE
      }), t && (0, l.jsxs)(u.ShinyButton, {
        color: u.Button.Colors.GREEN,
        type: "submit",
        innerClassName: v.premiumButtonInner,
        onClick: () => {
          n(), (0, x.Z)({
            section: A.jXE.STICKER_PACK_VIEW_ALL
          })
        },
        children: [(0, l.jsx)(u.NitroWheelIcon, {
          size: "md",
          color: "currentColor",
          className: v.premiumButtonNitroWheel
        }), T.Z.Messages.STICKER_PACK_AVAILABLE_WITH_PREMIUM]
      })]
    })
  },
  Z = e => {
    let {
      stickerPack: n,
      onClose: r
    } = e, t = (0, I.sM)(n, 1024);
    return null == t ? null : (0, l.jsxs)(u.ModalHeader, {
      className: v.headerWithImage,
      children: [(0, l.jsx)("div", {
        role: "image",
        style: {
          backgroundImage: "url(".concat(t, ")")
        },
        className: v.backgroundImage
      }), (0, l.jsx)(u.ModalCloseButton, {
        className: v.closeButton,
        onClick: r
      })]
    })
  };

function L(e) {
  let {
    onClose: n,
    stickerPack: r,
    ...s
  } = e, [i, o] = t.useState(null), a = t.useCallback(e => {
    null !== e && o(e.offsetWidth)
  }, []);
  return t.useLayoutEffect(() => {
    (0, C.pF)()
  }, []), (0, l.jsx)(E.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, l.jsx)(u.ModalRoot, {
      ...s,
      "aria-labelledby": "sticker-pack-sku-preview-modal",
      children: (0, l.jsx)(S.Z, {
        hideBreadcrumbs: !0,
        body: (0, l.jsx)("div", {
          ref: a,
          children: null != i && (0, l.jsx)(D, {
            stickerPack: r,
            hasHeaderImage: !0,
            onInspect: b,
            width: i
          })
        }),
        footer: (0, l.jsx)(O, {
          onClose: n,
          stickerPack: r
        }),
        header: (0, l.jsx)(Z, {
          onClose: n,
          stickerPack: r
        }),
        onScroll: g,
        steps: [N.h8.SKU_PREVIEW],
        currentStep: N.h8.SKU_PREVIEW
      })
    })
  })
}