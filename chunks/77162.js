"use strict";
i.r(t), i.d(t, {
  default: function() {
    return C
  }
});
var r = i("37983"),
  n = i("884691"),
  s = i("414456"),
  l = i.n(s),
  a = i("917351"),
  u = i("617258"),
  c = i("77078"),
  o = i("272030"),
  d = i("997289"),
  f = i("246511"),
  S = i("151185"),
  m = i("599110"),
  h = i("866353"),
  k = i("161585"),
  p = i("24373"),
  E = i("41170"),
  I = i("591522"),
  g = i("49111"),
  v = i("782340"),
  y = i("267005");
let R = (0, u.cssValueToNumber)(y.stickerPickerPreviewDimensions),
  _ = (0, u.cssValueToNumber)(y.stickerPickerPreviewPadding),
  T = n.memo(function(e) {
    let {
      isDisplayingIndividualStickers: t = !1,
      preferAnimation: s = !0,
      getStickerItemProps: u,
      getStickerRowProps: T,
      gutterWidth: C,
      inspectedStickerPosition: x,
      isScrolling: L,
      isUsingKeyboardNavigation: M,
      onInspect: N,
      onSelect: U,
      rowIndex: A,
      stickerClassName: F,
      stickerDescriptors: P,
      stickerPadding: b = _,
      stickerSize: O = R,
      ownedStickerPacks: j,
      enlargeOnInteraction: K = !1,
      channel: w,
      currentUser: G,
      checkSendability: D = !0
    } = e, {
      location: H
    } = (0, d.useAnalyticsContext)(), V = O + 2 * b, z = n.useMemo(() => ({
      gridColumnGap: C,
      gridTemplateColumns: "repeat(auto-fill, ".concat(V, "px)"),
      height: V,
      paddingRight: t ? void 0 : V
    }), [t, C, V]), B = n.useMemo(() => ({
      width: O,
      height: O,
      padding: b
    }), [b, O]);
    return (0, r.jsx)("div", {
      className: y.row,
      style: z,
      ...null == T ? void 0 : T(A),
      children: P.map(e => {
        var d;
        let R = e.visibleRowIndex === (null == x ? void 0 : x.rowIndex) && e.columnIndex === (null == x ? void 0 : x.columnIndex),
          _ = e.type === k.StickerGridItemTypes.STICKER && K && R,
          T = (0, a.throttle)(() => {
            (null == L ? void 0 : L.current) !== !0 && (null == M ? void 0 : M.current) !== !0 && !R && (null == N || N(e))
          }, 250),
          {
            ref: C,
            tabIndex: P,
            onFocus: b,
            ...V
          } = null !== (d = null == u ? void 0 : u(e.columnIndex, A)) && void 0 !== d ? d : {};
        switch (e.type) {
          case k.StickerGridItemTypes.CREATE_STICKER:
            return (0, r.jsx)("div", {
              ...V,
              children: (0, r.jsxs)(c.Clickable, {
                "aria-label": e.name,
                className: l(y.createSticker, F, {
                  [y.createInspected]: R
                }),
                innerRef: C,
                tabIndex: P,
                onFocus: null != b ? b : T,
                onMouseMove: T,
                onClick: () => {
                  e.type === k.StickerGridItemTypes.CREATE_STICKER && (m.default.track(g.AnalyticEvents.OPEN_MODAL, {
                    type: g.AnalyticsSections.CREATE_STICKER_MODAL,
                    location: H
                  }), (0, c.openModalLazy)(async () => {
                    let {
                      default: t
                    } = await i.el("54666").then(i.bind(i, "54666"));
                    return i => (0, r.jsx)(t, {
                      guildId: e.guild_id,
                      ...i
                    })
                  }))
                },
                style: B,
                children: [!K && (0, r.jsx)("div", {
                  className: y.inspectedIndicator
                }), (0, r.jsx)("div", {
                  className: y.iconWrapper,
                  children: (0, r.jsx)(S.default, {
                    className: y.icon
                  })
                }), (0, r.jsx)(c.Text, {
                  color: "interactive-active",
                  variant: "text-xs/normal",
                  children: v.default.Messages.STICKER_PICKER_CREATE_STICKER
                })]
              })
            }, e.guild_id);
          case k.StickerGridItemTypes.STICKER: {
            let a = t && null != j && (0, p.isStandardSticker)(e.sticker) && !j.has(e.sticker.pack_id);
            return (0, n.createElement)("div", {
              ...V,
              key: e.sticker.id
            }, (0, r.jsxs)(c.Clickable, {
              className: l(y.sticker, F, {
                [y.stickerInspected]: R
              }),
              innerRef: C,
              tabIndex: P,
              onFocus: null != b ? b : T,
              onMouseMove: T,
              onClick: t => {
                (null == L ? void 0 : L.current) !== !0 && (null == M ? void 0 : M.current) !== !0 && (null == U || U(e, t))
              },
              onContextMenu: e => {
                (0, o.openContextMenuLazy)(e, async () => {
                  let {
                    default: e
                  } = await i.el("367343").then(i.bind(i, "367343"));
                  return t => (0, r.jsx)(e, {
                    ...t
                  })
                })
              },
              style: B,
              "data-type": f.PickerContextMenuDataTypes.STICKER,
              "data-id": e.sticker.id,
              children: [(0, r.jsx)(c.HiddenVisually, {
                children: (0, E.getStickerAltText)(e.sticker)
              }), (0, r.jsxs)("div", {
                "aria-hidden": !0,
                children: [!K && (0, r.jsx)("div", {
                  className: y.inspectedIndicator
                }), (0, r.jsx)(E.default, {
                  className: l(y.stickerNode, {
                    [y.stickerNodeDimmed]: K && !R && null != x && -1 !== x.rowIndex && -1 !== x.columnIndex,
                    [y.stickerNodeHidden]: _,
                    [y.stickerUnsendable]: D && !(0, h.isSendableSticker)(e.sticker, G, w)
                  }),
                  disableAnimation: !R && !s,
                  enlargeOnInteraction: K,
                  isInteracting: R,
                  maskAsset: R,
                  sticker: e.sticker,
                  size: O
                }), a ? (0, r.jsx)(I.default, {
                  size: 20
                }) : null]
              })]
            }))
          }
        }
      })
    })
  });
var C = T