"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n(468194),
  u = n(481060),
  _ = n(239091),
  c = n(2052),
  d = n(691251),
  E = n(626135),
  I = n(285651),
  T = n(373228),
  h = n(378233),
  f = n(419922),
  S = n(490095),
  A = n(981631),
  N = n(689938),
  m = n(613892);
let O = (0, l.Mg)(m.__invalid_stickerPickerPreviewDimensions),
  p = (0, l.Mg)(m.__invalid_stickerPickerPreviewPadding),
  R = r.memo(function(e) {
    let {
      isDisplayingIndividualStickers: t = !1,
      preferAnimation: s = !0,
      getStickerItemProps: l,
      getStickerRowProps: R,
      gutterWidth: g,
      inspectedStickerPosition: C,
      isScrolling: v,
      isUsingKeyboardNavigation: L,
      onInspect: D,
      onSelect: M,
      rowIndex: P,
      stickerClassName: y,
      stickerDescriptors: U,
      stickerPadding: b = p,
      stickerSize: G = O,
      ownedStickerPacks: w,
      enlargeOnInteraction: x = !1,
      channel: B,
      currentUser: k,
      checkSendability: V = !0
    } = e, {
      location: Z
    } = (0, c.O)(), H = G + 2 * b, F = r.useMemo(() => ({
      gridColumnGap: g,
      gridTemplateColumns: "repeat(auto-fill, ".concat(H, "px)"),
      height: H,
      paddingRight: t ? void 0 : H
    }), [t, g, H]), Y = r.useMemo(() => ({
      width: G,
      height: G,
      padding: b
    }), [b, G]);
    return (0, i.jsx)("div", {
      className: m.row,
      style: F,
      ...null == R ? void 0 : R(P),
      children: U.map(e => {
        var c;
        let O = e.visibleRowIndex === (null == C ? void 0 : C.rowIndex) && e.columnIndex === (null == C ? void 0 : C.columnIndex),
          p = e.type === T.al.STICKER && x && O,
          R = (0, a.throttle)(() => {
            (null == v ? void 0 : v.current) !== !0 && (null == L ? void 0 : L.current) !== !0 && !O && (null == D || D(e))
          }, 250),
          {
            ref: g,
            tabIndex: U,
            onFocus: b,
            ...H
          } = null !== (c = null == l ? void 0 : l(e.columnIndex, P)) && void 0 !== c ? c : {};
        switch (e.type) {
          case T.al.CREATE_STICKER:
            return (0, i.jsx)("div", {
              ...H,
              children: (0, i.jsxs)(u.Clickable, {
                "aria-label": e.name,
                className: o()(m.createSticker, y, {
                  [m.createInspected]: O
                }),
                innerRef: g,
                tabIndex: U,
                onFocus: null != b ? b : R,
                onMouseMove: R,
                onClick: () => {
                  e.type === T.al.CREATE_STICKER && (E.default.track(A.rMx.OPEN_MODAL, {
                    type: A.jXE.CREATE_STICKER_MODAL,
                    location: Z
                  }), (0, u.openModalLazy)(async () => {
                    let {
                      default: t
                    } = await Promise.all([n.e("93626"), n.e("47406")]).then(n.bind(n, 136735));
                    return n => (0, i.jsx)(t, {
                      guildId: e.guild_id,
                      ...n
                    })
                  }))
                },
                style: Y,
                children: [!x && (0, i.jsx)("div", {
                  className: m.inspectedIndicator
                }), (0, i.jsx)("div", {
                  className: m.iconWrapper,
                  children: (0, i.jsx)(u.PlusSmallIcon, {
                    size: "md",
                    color: "currentColor",
                    className: m.icon
                  })
                }), (0, i.jsx)(u.Text, {
                  color: "interactive-active",
                  variant: "text-xs/normal",
                  children: N.Z.Messages.STICKER_PICKER_CREATE_STICKER
                })]
              })
            }, e.guild_id);
          case T.al.STICKER: {
            let a = t && null != w && (0, h.jl)(e.sticker) && !w.has(e.sticker.pack_id);
            return (0, r.createElement)("div", {
              ...H,
              key: e.sticker.id
            }, (0, i.jsxs)(u.Clickable, {
              className: o()(m.sticker, y, {
                [m.stickerInspected]: O
              }),
              innerRef: g,
              tabIndex: U,
              onFocus: null != b ? b : R,
              onMouseMove: R,
              onClick: t => {
                (null == v ? void 0 : v.current) !== !0 && (null == L ? void 0 : L.current) !== !0 && (null == M || M(e, t))
              },
              onContextMenu: e => {
                (0, _.jW)(e, async () => {
                  let {
                    default: e
                  } = await n.e("39010").then(n.bind(n, 269254));
                  return t => (0, i.jsx)(e, {
                    ...t
                  })
                })
              },
              style: Y,
              "data-type": d.S.STICKER,
              "data-id": e.sticker.id,
              children: [(0, i.jsx)(u.HiddenVisually, {
                children: (0, f.Co)(e.sticker)
              }), (0, i.jsxs)("div", {
                "aria-hidden": !0,
                children: [!x && (0, i.jsx)("div", {
                  className: m.inspectedIndicator
                }), (0, i.jsx)(f.ZP, {
                  className: o()(m.stickerNode, {
                    [m.stickerNodeDimmed]: x && !O && null != C && -1 !== C.rowIndex && -1 !== C.columnIndex,
                    [m.stickerNodeHidden]: p,
                    [m.stickerUnsendable]: V && !(0, I.kl)(e.sticker, k, B)
                  }),
                  disableAnimation: !O && !s,
                  enlargeOnInteraction: x,
                  isInteracting: O,
                  maskAsset: O,
                  sticker: e.sticker,
                  size: G
                }), a ? (0, i.jsx)(S.Z, {
                  size: 20
                }) : null]
              })]
            }))
          }
        }
      })
    })
  });
t.Z = R