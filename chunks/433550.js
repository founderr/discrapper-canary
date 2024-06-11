"use strict";
r.r(t), r.d(t, {
  StickerPackViewAllModalFooter: function() {
    return B
  },
  default: function() {
    return K
  }
}), r("653041"), r("47120");
var n = r("735250"),
  l = r("470079"),
  s = r("120356"),
  i = r.n(s),
  a = r("954955"),
  o = r.n(a),
  c = r("442837"),
  u = r("477690"),
  d = r("481060"),
  S = r("691251"),
  E = r("598"),
  m = r("409813"),
  f = r("185139"),
  p = r("466111"),
  N = r("624138"),
  P = r("790954"),
  C = r("453070"),
  _ = r("926491"),
  I = r("378233"),
  A = r("515005"),
  h = r("282896"),
  T = r("929204"),
  k = r("981631"),
  x = r("689938"),
  R = r("405810");
let v = (0, N.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS),
  j = (0, N.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING),
  g = (0, N.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN),
  M = v + 2 * j,
  b = o()(P.resetInspectedStickerPosition, 250),
  y = () => {
    b.cancel()
  },
  D = e => {
    let {
      visibleRowIndex: t,
      columnIndex: r
    } = e;
    b.cancel(), (0, P.setInspectedStickerPosition)(r, t, S.InspectedExpressionChangeSource.MOUSE_EVENT)
  },
  O = e => {
    let {
      stickerPack: t,
      width: r,
      hasHeaderImage: s,
      isScrolling: a,
      onInspect: o
    } = e, c = l.useMemo(() => [(0, I.createStickerPackCategory)(t)], [t]), u = (0, P.useStickerViewAllStore)(e => e.inspectedStickerPosition), {
      rowCountBySection: d,
      stickersGrid: S,
      gutterWidth: E
    } = (0, C.useStickersGrid)({
      stickersCategories: c,
      stickerNodeMargin: g,
      stickerNodeWidth: M,
      listWidth: r
    });
    return (0, n.jsxs)("div", {
      className: i()(R.container, {
        [R.containerWithHeader]: s
      }),
      children: [(0, n.jsx)(h.default, {
        className: R.header,
        stickerPack: t,
        withDescription: !0
      }, t.id), (0, n.jsx)("div", {
        onFocus: y,
        onBlur: b,
        onMouseOver: y,
        onMouseOut: b,
        children: (() => {
          if (0 === d.length) return null;
          let e = [];
          for (let t = 0; t < d[0]; t++) e.push((0, n.jsx)(A.default, {
            enlargeOnInteraction: !0,
            preferAnimation: !0,
            gutterWidth: E,
            inspectedStickerPosition: u,
            isScrolling: a,
            onInspect: o,
            rowIndex: t,
            stickerDescriptors: S[t],
            stickerPadding: j,
            stickerSize: v,
            isDisplayingIndividualStickers: !0,
            checkSendability: !1
          }, t));
          return e
        })()
      })]
    })
  },
  B = e => {
    let {
      onClose: t,
      stickerPack: r
    } = e;
    (0, C.useFetchStickerPacks)();
    let l = (0, c.useStateFromStores)([_.default], () => _.default.isPremiumPack(r.id));
    return (0, n.jsxs)(d.ModalFooter, {
      className: R.footer,
      children: [(0, n.jsx)(d.Anchor, {
        onClick: t,
        className: R.skuPreviewFooterCloseButton,
        children: x.default.Messages.CLOSE
      }), l && (0, n.jsxs)(d.ShinyButton, {
        color: d.Button.Colors.GREEN,
        type: "submit",
        innerClassName: R.premiumButtonInner,
        onClick: () => {
          t(), (0, T.default)({
            section: k.AnalyticsSections.STICKER_PACK_VIEW_ALL
          })
        },
        children: [(0, n.jsx)(p.default, {
          className: R.premiumButtonNitroWheel
        }), x.default.Messages.STICKER_PACK_AVAILABLE_WITH_PREMIUM]
      })]
    })
  },
  L = e => {
    let {
      stickerPack: t,
      onClose: r
    } = e, l = (0, I.getStickerPackBannerAssetUrl)(t, 1024);
    return null == l ? null : (0, n.jsxs)(d.ModalHeader, {
      className: R.headerWithImage,
      children: [(0, n.jsx)("div", {
        role: "image",
        style: {
          backgroundImage: "url(".concat(l, ")")
        },
        className: R.backgroundImage
      }), (0, n.jsx)(d.ModalCloseButton, {
        className: R.closeButton,
        onClick: r
      })]
    })
  };

function K(e) {
  let {
    onClose: t,
    stickerPack: r,
    ...s
  } = e, [i, a] = l.useState(null), o = l.useCallback(e => {
    null !== e && a(e.offsetWidth)
  }, []);
  return l.useLayoutEffect(() => {
    (0, P.resetInspectedStickerPosition)()
  }, []), (0, n.jsx)(E.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, n.jsx)(d.ModalRoot, {
      ...s,
      "aria-labelledby": "sticker-pack-sku-preview-modal",
      children: (0, n.jsx)(f.default, {
        hideBreadcrumbs: !0,
        body: (0, n.jsx)("div", {
          ref: o,
          children: null != i && (0, n.jsx)(O, {
            stickerPack: r,
            hasHeaderImage: !0,
            onInspect: D,
            width: i
          })
        }),
        footer: (0, n.jsx)(B, {
          onClose: t,
          stickerPack: r
        }),
        header: (0, n.jsx)(L, {
          onClose: t,
          stickerPack: r
        }),
        onScroll: b,
        steps: [m.Step.SKU_PREVIEW],
        currentStep: m.Step.SKU_PREVIEW
      })
    })
  })
}