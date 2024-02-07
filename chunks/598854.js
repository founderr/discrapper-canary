"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("222007"), n("794252");
var i = n("37983"),
  l = n("884691"),
  r = n("414456"),
  s = n.n(r),
  a = n("506838"),
  o = n("171210"),
  u = n("65597"),
  c = n("77078"),
  d = n("54239"),
  f = n("853987"),
  h = n("426497"),
  C = n("491232"),
  E = n("743826"),
  p = n("216422"),
  v = n("468759"),
  g = n("600785"),
  I = n("956089"),
  _ = n("719923"),
  m = n("845962"),
  N = n("326054"),
  T = n("49111"),
  S = n("782340"),
  L = n("361451"),
  A = n("513002");
let x = () => 80,
  P = e => {
    let {
      children: t,
      className: n,
      isSelected: l = !1,
      ...r
    } = e;
    return (0, i.jsx)(c.Clickable, {
      className: s(L.effectGridItem, n, {
        [L.selected]: l
      }),
      ...r,
      onClick: r.onSelect,
      children: t
    })
  },
  R = e => {
    var t;
    let {
      user: n,
      profileEffect: r,
      innerRef: s,
      section: a,
      isSelected: c,
      ...d
    } = e, E = (0, u.default)([m.default], () => m.default.getProfileEffectById(r.id)), v = (0, u.default)([f.default], () => {
      let e = f.default.getProduct(r.skuId);
      return (0, C.isPremiumCollectiblesProduct)(e)
    }), T = (0, u.default)([h.default], () => h.default.isItemViewed(r)), x = l.useRef(null), {
      accessibilityLabel: R,
      thumbnailPreviewSrc: O,
      title: M
    } = null !== (t = null == E ? void 0 : E.config) && void 0 !== t ? t : {}, F = _.default.canUseCollectibles(n), w = a === N.Section.PREMIUM_PURCHASE && !F, [j, y] = l.useState(c);
    return l.useEffect(() => {
      c && y(!0)
    }, [c]), (0, i.jsxs)(P, {
      className: w && !c ? L.decorationGridItemChurned : void 0,
      innerRef: null != s ? s : x,
      isSelected: c,
      ...d,
      children: [(0, i.jsx)("img", {
        src: A,
        alt: R,
        className: L.presetEffectBackground
      }), (0, i.jsx)("img", {
        className: L.presetEffectImg,
        src: O,
        alt: M
      }), (() => {
        let e = a === N.Section.PURCHASE || a === N.Section.PREMIUM_PURCHASE && F;
        if (e) return null;
        let t = !T && !c && !j;
        return t ? (0, i.jsx)(I.PremiumBadge, {
          className: L.newBadge,
          text: (0, i.jsxs)("div", {
            className: L.newBadgeText,
            children: [(0, i.jsx)(g.default, {
              width: 12,
              height: 12
            }), S.default.Messages.NEW]
          })
        }) : (0, i.jsx)(I.IconBadge, {
          icon: v ? () => (0, i.jsx)(p.default, {
            width: 14,
            height: 14
          }) : () => (0, i.jsx)(g.default, {
            width: 12,
            height: 12
          }),
          color: o.default.BACKGROUND_ACCENT,
          className: L.lockBadge
        })
      })()]
    })
  };
var O = e => {
  let {
    user: t,
    pendingProfileEffect: n,
    selectedProfileEffectRef: l,
    onSelect: r,
    onClose: s
  } = e, o = () => {
    s(), (0, d.pushLayer)(T.Layers.COLLECTIBLES_SHOP)
  }, u = (0, N.default)(), f = null != n;
  return (0, i.jsx)("section", {
    children: (0, i.jsx)(c.MasonryList, {
      fade: !0,
      itemGutter: 12,
      sectionGutter: 16,
      paddingVertical: 0,
      paddingHorizontal: 12,
      className: L.list,
      columns: 3,
      sections: u.map(e => {
        let {
          items: t
        } = e;
        return t.length
      }),
      renderItem: (e, s, d, h) => {
        let {
          section: C,
          items: p
        } = u[e];
        return (0, a.match)(p[s]).with(N.NONE_ITEM, () => (0, i.jsxs)(P, {
          style: {
            ...d
          },
          isSelected: !f,
          onSelect: () => r(null),
          children: [(0, i.jsx)(v.default, {
            className: L.notAllowedIcon
          }), (0, i.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: S.default.Messages.NONE
          })]
        }, h)).with(N.SHOP_ITEM, () => (0, i.jsxs)(P, {
          style: d,
          onSelect: o,
          children: [(0, i.jsx)(E.default, {
            className: L.shopIcon
          }), (0, i.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: S.default.Messages.COLLECTIBLES_SHOP
          })]
        }, h)).otherwise(e => {
          let s = n === e.id;
          return (0, i.jsx)(R, {
            user: t,
            style: {
              ...d
            },
            section: C,
            profileEffect: e,
            innerRef: s ? l : void 0,
            isSelected: s,
            onSelect: () => r(e.id)
          }, h)
        })
      },
      renderSection: e => {
        let {
          header: t
        } = u[e];
        return (0, i.jsx)("div", {
          style: {
            height: "".concat(16, "px")
          },
          children: (0, i.jsx)(c.FormTitle, {
            children: t
          })
        })
      },
      getSectionHeight: () => 16,
      getItemKey: (e, t) => {
        var n, i;
        return null !== (i = null === (n = u[e].items[t]) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : null
      },
      getItemHeight: x,
      removeEdgeItemGutters: !0
    })
  })
}