"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007"), n("794252");
var r = n("37983"),
  i = n("884691"),
  s = n("414456"),
  l = n.n(s),
  a = n("506838"),
  o = n("171210"),
  u = n("65597"),
  c = n("77078"),
  d = n("54239"),
  f = n("853987"),
  h = n("426497"),
  E = n("491232"),
  C = n("743826"),
  p = n("216422"),
  v = n("468759"),
  m = n("600785"),
  _ = n("956089"),
  S = n("719923"),
  g = n("845962"),
  I = n("326054"),
  A = n("49111"),
  N = n("782340"),
  T = n("971864"),
  P = n("513002");
let R = () => 80,
  L = e => {
    let {
      children: t,
      className: n,
      isSelected: i = !1,
      ...s
    } = e;
    return (0, r.jsx)(c.Clickable, {
      className: l(T.effectGridItem, n, {
        [T.selected]: i
      }),
      ...s,
      onClick: s.onSelect,
      children: t
    })
  },
  x = e => {
    var t;
    let {
      user: n,
      profileEffect: s,
      innerRef: l,
      section: a,
      isSelected: c,
      ...d
    } = e, C = (0, u.default)([g.default], () => g.default.getProfileEffectById(s.id)), v = (0, u.default)([f.default], () => {
      let e = f.default.getProduct(s.skuId);
      return (0, E.isPremiumCollectiblesProduct)(e)
    }), A = (0, u.default)([h.default], () => h.default.isItemViewed(s)), R = i.useRef(null), {
      accessibilityLabel: x,
      thumbnailPreviewSrc: M,
      title: O
    } = null !== (t = null == C ? void 0 : C.config) && void 0 !== t ? t : {}, w = S.default.canUseCollectibles(n), y = a === I.Section.PREMIUM_PURCHASE && !w, [b, F] = i.useState(c);
    return i.useEffect(() => {
      c && F(!0)
    }, [c]), (0, r.jsxs)(L, {
      className: y && !c ? T.decorationGridItemChurned : void 0,
      innerRef: null != l ? l : R,
      isSelected: c,
      ...d,
      children: [(0, r.jsx)("img", {
        src: P,
        alt: x,
        className: T.presetEffectBackground
      }), (0, r.jsx)("img", {
        className: T.presetEffectImg,
        src: M,
        alt: O
      }), (() => {
        let e = a === I.Section.PURCHASE || a === I.Section.PREMIUM_PURCHASE && w;
        if (e) return null;
        let t = !A && !c && !b;
        return t ? (0, r.jsx)(_.PremiumBadge, {
          className: T.newBadge,
          text: (0, r.jsxs)("div", {
            className: T.newBadgeText,
            children: [(0, r.jsx)(m.default, {
              width: 12,
              height: 12
            }), N.default.Messages.NEW]
          })
        }) : (0, r.jsx)(_.IconBadge, {
          icon: v ? () => (0, r.jsx)(p.default, {
            width: 14,
            height: 14
          }) : () => (0, r.jsx)(m.default, {
            width: 12,
            height: 12
          }),
          color: o.default.BACKGROUND_ACCENT,
          className: T.lockBadge
        })
      })()]
    })
  };
var M = e => {
  let {
    user: t,
    pendingProfileEffect: n,
    selectedProfileEffectRef: i,
    onSelect: s,
    onClose: l
  } = e, o = () => {
    l(), (0, d.pushLayer)(A.Layers.COLLECTIBLES_SHOP)
  }, u = (0, I.default)(), f = null != n;
  return (0, r.jsx)("section", {
    children: (0, r.jsx)(c.MasonryList, {
      fade: !0,
      itemGutter: 12,
      sectionGutter: 16,
      paddingVertical: 0,
      paddingHorizontal: 12,
      className: T.list,
      columns: 3,
      sections: u.map(e => {
        let {
          items: t
        } = e;
        return t.length
      }),
      renderItem: (e, l, d, h) => {
        let {
          section: E,
          items: p
        } = u[e];
        return (0, a.match)(p[l]).with(I.NONE_ITEM, () => (0, r.jsxs)(L, {
          style: {
            ...d
          },
          isSelected: !f,
          onSelect: () => s(null),
          children: [(0, r.jsx)(v.default, {
            className: T.notAllowedIcon
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: N.default.Messages.NONE
          })]
        }, h)).with(I.SHOP_ITEM, () => (0, r.jsxs)(L, {
          style: d,
          onSelect: o,
          children: [(0, r.jsx)(C.default, {
            className: T.shopIcon
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: N.default.Messages.COLLECTIBLES_SHOP
          })]
        }, h)).otherwise(e => {
          let l = n === e.id;
          return (0, r.jsx)(x, {
            user: t,
            style: {
              ...d
            },
            section: E,
            profileEffect: e,
            innerRef: l ? i : void 0,
            isSelected: l,
            onSelect: () => s(e.id)
          }, h)
        })
      },
      renderSection: e => {
        let {
          header: t
        } = u[e];
        return (0, r.jsx)("div", {
          style: {
            height: "".concat(16, "px")
          },
          children: (0, r.jsx)(c.FormTitle, {
            children: t
          })
        })
      },
      getSectionHeight: () => 16,
      getItemKey: (e, t) => {
        var n, r;
        return null !== (r = null === (n = u[e].items[t]) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : null
      },
      getItemHeight: R,
      removeEdgeItemGutters: !0
    })
  })
}