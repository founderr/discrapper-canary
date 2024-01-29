"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("222007"), n("794252");
var r = n("37983"),
  l = n("884691"),
  i = n("414456"),
  s = n.n(i),
  a = n("506838"),
  o = n("171210"),
  u = n("65597"),
  c = n("77078"),
  d = n("54239"),
  f = n("853987"),
  C = n("426497"),
  E = n("491232"),
  h = n("743826"),
  p = n("216422"),
  I = n("468759"),
  L = n("600785"),
  v = n("956089"),
  _ = n("719923"),
  S = n("845962"),
  g = n("326054"),
  T = n("49111"),
  m = n("782340"),
  A = n("361451"),
  O = n("513002");
let N = () => 80,
  P = e => {
    let {
      children: t,
      className: n,
      isSelected: l = !1,
      ...i
    } = e;
    return (0, r.jsx)(c.Clickable, {
      className: s(A.effectGridItem, n, {
        [A.selected]: l
      }),
      ...i,
      onClick: i.onSelect,
      children: t
    })
  },
  R = e => {
    var t;
    let {
      user: n,
      profileEffect: i,
      innerRef: s,
      section: a,
      isSelected: c,
      ...d
    } = e, h = (0, u.default)([S.default], () => S.default.getProfileEffectById(i.id)), I = (0, u.default)([f.default], () => {
      let e = f.default.getProduct(i.skuId);
      return (0, E.isPremiumCollectiblesProduct)(e)
    }), T = (0, u.default)([C.default], () => C.default.isItemViewed(i)), N = l.useRef(null), {
      accessibilityLabel: R,
      thumbnailPreviewSrc: y,
      title: x
    } = null !== (t = null == h ? void 0 : h.config) && void 0 !== t ? t : {}, F = _.default.canUseCollectibles(n), w = a === g.Section.PREMIUM_PURCHASE && !F, [M, b] = l.useState(c);
    return l.useEffect(() => {
      c && b(!0)
    }, [c]), (0, r.jsxs)(P, {
      className: w && !c ? A.decorationGridItemChurned : void 0,
      innerRef: null != s ? s : N,
      isSelected: c,
      ...d,
      children: [(0, r.jsx)("img", {
        src: O,
        alt: R,
        className: A.presetEffectBackground
      }), (0, r.jsx)("img", {
        className: A.presetEffectImg,
        src: y,
        alt: x
      }), (() => {
        let e = a === g.Section.PURCHASE || a === g.Section.PREMIUM_PURCHASE && F;
        if (e) return null;
        let t = !T && !c && !M;
        return t ? (0, r.jsx)(v.PremiumBadge, {
          className: A.newBadge,
          text: (0, r.jsxs)("div", {
            className: A.newBadgeText,
            children: [(0, r.jsx)(L.default, {
              width: 12,
              height: 12
            }), m.default.Messages.NEW]
          })
        }) : (0, r.jsx)(v.IconBadge, {
          icon: I ? () => (0, r.jsx)(p.default, {
            width: 14,
            height: 14
          }) : () => (0, r.jsx)(L.default, {
            width: 12,
            height: 12
          }),
          color: o.default.BACKGROUND_ACCENT,
          className: A.lockBadge
        })
      })()]
    })
  };
var y = e => {
  let {
    user: t,
    pendingProfileEffect: n,
    selectedProfileEffectRef: l,
    onSelect: i,
    onClose: s
  } = e, o = () => {
    s(), (0, d.pushLayer)(T.Layers.COLLECTIBLES_SHOP)
  }, u = (0, g.default)(), f = null != n;
  return (0, r.jsx)("section", {
    children: (0, r.jsx)(c.MasonryList, {
      fade: !0,
      itemGutter: 12,
      sectionGutter: 16,
      paddingVertical: 0,
      paddingHorizontal: 12,
      className: A.list,
      columns: 3,
      sections: u.map(e => {
        let {
          items: t
        } = e;
        return t.length
      }),
      renderItem: (e, s, d, C) => {
        let {
          section: E,
          items: p
        } = u[e];
        return (0, a.match)(p[s]).with(g.NONE_ITEM, () => (0, r.jsxs)(P, {
          style: {
            ...d
          },
          isSelected: !f,
          onSelect: () => i(null),
          children: [(0, r.jsx)(I.default, {
            className: A.notAllowedIcon
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: m.default.Messages.NONE
          })]
        }, C)).with(g.SHOP_ITEM, () => (0, r.jsxs)(P, {
          style: d,
          onSelect: o,
          children: [(0, r.jsx)(h.default, {
            className: A.shopIcon
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: m.default.Messages.COLLECTIBLES_SHOP
          })]
        }, C)).otherwise(e => {
          let s = n === e.id;
          return (0, r.jsx)(R, {
            user: t,
            style: {
              ...d
            },
            section: E,
            profileEffect: e,
            innerRef: s ? l : void 0,
            isSelected: s,
            onSelect: () => i(e.id)
          }, C)
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
      getItemHeight: N,
      removeEdgeItemGutters: !0
    })
  })
}