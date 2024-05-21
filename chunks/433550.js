"use strict";
r.r(t), r.d(t, {
  StickerPackViewAllModalFooter: function() {
    return L
  },
  default: function() {
    return K
  }
}), r("653041"), r("47120");
var l = r("735250"),
  n = r("470079"),
  s = r("120356"),
  i = r.n(s),
  a = r("954955"),
  o = r.n(a),
  c = r("442837"),
  u = r("477690"),
  d = r("481060"),
  S = r("691251"),
  m = r("598"),
  p = r("409813"),
  f = r("185139"),
  E = r("976644"),
  N = r("466111"),
  C = r("624138"),
  P = r("790954"),
  h = r("453070"),
  _ = r("926491"),
  I = r("378233"),
  A = r("515005"),
  x = r("282896"),
  T = r("929204"),
  k = r("981631"),
  v = r("689938"),
  R = r("405810");
let b = (0, C.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS),
  j = (0, C.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING),
  g = (0, C.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN),
  M = b + 2 * j,
  y = o()(P.resetInspectedStickerPosition, 250),
  D = () => {
    y.cancel()
  },
  O = e => {
    let {
      visibleRowIndex: t,
      columnIndex: r
    } = e;
    y.cancel(), (0, P.setInspectedStickerPosition)(r, t, S.InspectedExpressionChangeSource.MOUSE_EVENT)
  },
  B = e => {
    let {
      stickerPack: t,
      width: r,
      hasHeaderImage: s,
      isScrolling: a,
      onInspect: o
    } = e, c = n.useMemo(() => [(0, I.createStickerPackCategory)(t)], [t]), u = (0, P.useStickerViewAllStore)(e => e.inspectedStickerPosition), {
      rowCountBySection: d,
      stickersGrid: S,
      gutterWidth: m
    } = (0, h.useStickersGrid)({
      stickersCategories: c,
      stickerNodeMargin: g,
      stickerNodeWidth: M,
      listWidth: r
    });
    return (0, l.jsxs)("div", {
      className: i()(R.container, {
        [R.containerWithHeader]: s
      }),
      children: [(0, l.jsx)(x.default, {
        className: R.header,
        stickerPack: t,
        withDescription: !0
      }, t.id), (0, l.jsx)("div", {
        onFocus: D,
        onBlur: y,
        onMouseOver: D,
        onMouseOut: y,
        children: (() => {
          if (0 === d.length) return null;
          let e = [];
          for (let t = 0; t < d[0]; t++) e.push((0, l.jsx)(A.default, {
            enlargeOnInteraction: !0,
            preferAnimation: !0,
            gutterWidth: m,
            inspectedStickerPosition: u,
            isScrolling: a,
            onInspect: o,
            rowIndex: t,
            stickerDescriptors: S[t],
            stickerPadding: j,
            stickerSize: b,
            isDisplayingIndividualStickers: !0,
            checkSendability: !1
          }, t));
          return e
        })()
      })]
    })
  },
  L = e => {
    let {
      onClose: t,
      stickerPack: r
    } = e;
    (0, h.useFetchStickerPacks)();
    let n = (0, c.useStateFromStores)([_.default], () => _.default.isPremiumPack(r.id));
    return (0, l.jsxs)(d.ModalFooter, {
      className: R.footer,
      children: [(0, l.jsx)(d.Anchor, {
        onClick: t,
        className: R.skuPreviewFooterCloseButton,
        children: v.default.Messages.CLOSE
      }), n && (0, l.jsxs)(E.default, {
        color: d.Button.Colors.GREEN,
        type: "submit",
        innerClassName: R.premiumButtonInner,
        onClick: () => {
          t(), (0, T.default)({
            section: k.AnalyticsSections.STICKER_PACK_VIEW_ALL
          })
        },
        children: [(0, l.jsx)(N.default, {
          className: R.premiumButtonNitroWheel
        }), v.default.Messages.STICKER_PACK_AVAILABLE_WITH_PREMIUM]
      })]
    })
  },
  W = e => {
    let {
      stickerPack: t,
      onClose: r
    } = e, n = (0, I.getStickerPackBannerAssetUrl)(t, 1024);
    return null == n ? null : (0, l.jsxs)(d.ModalHeader, {
      className: R.headerWithImage,
      children: [(0, l.jsx)("div", {
        role: "image",
        style: {
          backgroundImage: "url(".concat(n, ")")
        },
        className: R.backgroundImage
      }), (0, l.jsx)(d.ModalCloseButton, {
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
  } = e, [i, a] = n.useState(null), o = n.useCallback(e => {
    null !== e && a(e.offsetWidth)
  }, []);
  return n.useLayoutEffect(() => {
    (0, P.resetInspectedStickerPosition)()
  }, []), (0, l.jsx)(m.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, l.jsx)(d.ModalRoot, {
      ...s,
      "aria-labelledby": "sticker-pack-sku-preview-modal",
      children: (0, l.jsx)(f.default, {
        hideBreadcrumbs: !0,
        body: (0, l.jsx)("div", {
          ref: o,
          children: null != i && (0, l.jsx)(B, {
            stickerPack: r,
            hasHeaderImage: !0,
            onInspect: O,
            width: i
          })
        }),
        footer: (0, l.jsx)(L, {
          onClose: t,
          stickerPack: r
        }),
        header: (0, l.jsx)(W, {
          onClose: t,
          stickerPack: r
        }),
        onScroll: y,
        steps: [p.Step.SKU_PREVIEW],
        currentStep: p.Step.SKU_PREVIEW
      })
    })
  })
}