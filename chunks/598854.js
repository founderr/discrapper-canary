"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007"), n("794252");
var r = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  a = n("506838"),
  o = n("171210"),
  u = n("65597"),
  c = n("77078"),
  d = n("54239"),
  f = n("853987"),
  h = n("426497"),
  C = n("491232"),
  v = n("743826"),
  p = n("216422"),
  E = n("468759"),
  m = n("600785"),
  g = n("956089"),
  I = n("719923"),
  L = n("845962"),
  x = n("326054"),
  M = n("49111"),
  _ = n("782340"),
  N = n("361451"),
  S = n("513002");
let O = () => 80,
  A = e => {
    let {
      children: t,
      className: n,
      isSelected: s = !1,
      ...i
    } = e;
    return (0, r.jsx)(c.Clickable, {
      className: l(N.effectGridItem, n, {
        [N.selected]: s
      }),
      ...i,
      onClick: i.onSelect,
      children: t
    })
  },
  P = e => {
    var t;
    let {
      user: n,
      profileEffect: i,
      innerRef: l,
      section: a,
      isSelected: c,
      ...d
    } = e, v = (0, u.default)([L.default], () => L.default.getProfileEffectById(i.id)), E = (0, u.default)([f.default], () => {
      let e = f.default.getProduct(i.skuId);
      return (0, C.isPremiumCollectiblesProduct)(e)
    }), M = (0, u.default)([h.default], () => h.default.isItemViewed(i)), O = s.useRef(null), {
      accessibilityLabel: P,
      thumbnailPreviewSrc: R,
      title: T
    } = null !== (t = null == v ? void 0 : v.config) && void 0 !== t ? t : {}, w = I.default.canUseCollectibles(n), j = a === x.Section.PREMIUM_PURCHASE && !w, [y, b] = s.useState(c);
    return s.useEffect(() => {
      c && b(!0)
    }, [c]), (0, r.jsxs)(A, {
      className: j && !c ? N.decorationGridItemChurned : void 0,
      innerRef: null != l ? l : O,
      isSelected: c,
      ...d,
      children: [(0, r.jsx)("img", {
        src: S,
        alt: P,
        className: N.presetEffectBackground
      }), (0, r.jsx)("img", {
        className: N.presetEffectImg,
        src: R,
        alt: T
      }), (() => {
        let e = a === x.Section.PURCHASE || a === x.Section.PREMIUM_PURCHASE && w;
        if (e) return null;
        let t = !M && !c && !y;
        return t ? (0, r.jsx)(g.PremiumBadge, {
          className: N.newBadge,
          text: (0, r.jsxs)("div", {
            className: N.newBadgeText,
            children: [(0, r.jsx)(m.default, {
              width: 12,
              height: 12
            }), _.default.Messages.NEW]
          })
        }) : (0, r.jsx)(g.IconBadge, {
          icon: E ? () => (0, r.jsx)(p.default, {
            width: 14,
            height: 14
          }) : () => (0, r.jsx)(m.default, {
            width: 12,
            height: 12
          }),
          color: o.default.BACKGROUND_ACCENT,
          className: N.lockBadge
        })
      })()]
    })
  };
var R = e => {
  let {
    user: t,
    pendingProfileEffect: n,
    selectedProfileEffectRef: s,
    onSelect: i,
    onClose: l
  } = e, o = () => {
    l(), (0, d.pushLayer)(M.Layers.COLLECTIBLES_SHOP)
  }, u = (0, x.default)(), f = null != n;
  return (0, r.jsx)("section", {
    children: (0, r.jsx)(c.MasonryList, {
      fade: !0,
      itemGutter: 12,
      sectionGutter: 16,
      paddingVertical: 0,
      paddingHorizontal: 12,
      className: N.list,
      columns: 3,
      sections: u.map(e => {
        let {
          items: t
        } = e;
        return t.length
      }),
      renderItem: (e, l, d, h) => {
        let {
          section: C,
          items: p
        } = u[e];
        return (0, a.match)(p[l]).with(x.NONE_ITEM, () => (0, r.jsxs)(A, {
          style: {
            ...d
          },
          isSelected: !f,
          onSelect: () => i(null),
          children: [(0, r.jsx)(E.default, {
            className: N.notAllowedIcon
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: _.default.Messages.NONE
          })]
        }, h)).with(x.SHOP_ITEM, () => (0, r.jsxs)(A, {
          style: d,
          onSelect: o,
          children: [(0, r.jsx)(v.default, {
            className: N.shopIcon
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: _.default.Messages.COLLECTIBLES_SHOP
          })]
        }, h)).otherwise(e => {
          let l = n === e.id;
          return (0, r.jsx)(P, {
            user: t,
            style: {
              ...d
            },
            section: C,
            profileEffect: e,
            innerRef: l ? s : void 0,
            isSelected: l,
            onSelect: () => i(e.id)
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
      getItemHeight: O,
      removeEdgeItemGutters: !0
    })
  })
}