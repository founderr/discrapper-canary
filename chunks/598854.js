"use strict";
r.r(t), r.d(t, {
  default: function() {
    return y
  }
}), r("222007"), r("794252");
var n = r("37983"),
  l = r("884691"),
  i = r("414456"),
  s = r.n(i),
  a = r("506838"),
  u = r("171210"),
  o = r("65597"),
  c = r("77078"),
  d = r("54239"),
  f = r("853987"),
  C = r("426497"),
  E = r("491232"),
  h = r("743826"),
  p = r("216422"),
  I = r("468759"),
  v = r("600785"),
  L = r("956089"),
  _ = r("719923"),
  S = r("845962"),
  g = r("326054"),
  T = r("49111"),
  m = r("782340"),
  A = r("361451"),
  O = r("513002");
let N = () => 80,
  P = e => {
    let {
      children: t,
      className: r,
      isSelected: l = !1,
      ...i
    } = e;
    return (0, n.jsx)(c.Clickable, {
      className: s(A.effectGridItem, r, {
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
      user: r,
      profileEffect: i,
      innerRef: s,
      section: a,
      isSelected: c,
      ...d
    } = e, h = (0, o.default)([S.default], () => S.default.getProfileEffectById(i.id)), I = (0, o.default)([f.default], () => {
      let e = f.default.getProduct(i.skuId);
      return (0, E.isPremiumCollectiblesProduct)(e)
    }), T = (0, o.default)([C.default], () => C.default.isItemViewed(i)), N = l.useRef(null), {
      accessibilityLabel: R,
      thumbnailPreviewSrc: y,
      title: x
    } = null !== (t = null == h ? void 0 : h.config) && void 0 !== t ? t : {}, F = _.default.canUseCollectibles(r), w = a === g.Section.PREMIUM_PURCHASE && !F, [M, b] = l.useState(c);
    return l.useEffect(() => {
      c && b(!0)
    }, [c]), (0, n.jsxs)(P, {
      className: w && !c ? A.decorationGridItemChurned : void 0,
      innerRef: null != s ? s : N,
      isSelected: c,
      ...d,
      children: [(0, n.jsx)("img", {
        src: O,
        alt: R,
        className: A.presetEffectBackground
      }), (0, n.jsx)("img", {
        className: A.presetEffectImg,
        src: y,
        alt: x
      }), (() => {
        let e = a === g.Section.PURCHASE || a === g.Section.PREMIUM_PURCHASE && F;
        if (e) return null;
        let t = !T && !c && !M;
        return t ? (0, n.jsx)(L.PremiumBadge, {
          className: A.newBadge,
          text: (0, n.jsxs)("div", {
            className: A.newBadgeText,
            children: [(0, n.jsx)(v.default, {
              width: 12,
              height: 12
            }), m.default.Messages.NEW]
          })
        }) : (0, n.jsx)(L.IconBadge, {
          icon: I ? () => (0, n.jsx)(p.default, {
            width: 14,
            height: 14
          }) : () => (0, n.jsx)(v.default, {
            width: 12,
            height: 12
          }),
          color: u.default.BACKGROUND_ACCENT,
          className: A.lockBadge
        })
      })()]
    })
  };
var y = e => {
  let {
    user: t,
    pendingProfileEffect: r,
    selectedProfileEffectRef: l,
    onSelect: i,
    onClose: s
  } = e, u = () => {
    s(), (0, d.pushLayer)(T.Layers.COLLECTIBLES_SHOP)
  }, o = (0, g.default)(), f = null != r;
  return (0, n.jsx)("section", {
    children: (0, n.jsx)(c.MasonryList, {
      fade: !0,
      itemGutter: 12,
      sectionGutter: 16,
      paddingVertical: 0,
      paddingHorizontal: 12,
      className: A.list,
      columns: 3,
      sections: o.map(e => {
        let {
          items: t
        } = e;
        return t.length
      }),
      renderItem: (e, s, d, C) => {
        let {
          section: E,
          items: p
        } = o[e];
        return (0, a.match)(p[s]).with(g.NONE_ITEM, () => (0, n.jsxs)(P, {
          style: {
            ...d
          },
          isSelected: !f,
          onSelect: () => i(null),
          children: [(0, n.jsx)(I.default, {
            className: A.notAllowedIcon
          }), (0, n.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: m.default.Messages.NONE
          })]
        }, C)).with(g.SHOP_ITEM, () => (0, n.jsxs)(P, {
          style: d,
          onSelect: u,
          children: [(0, n.jsx)(h.default, {
            className: A.shopIcon
          }), (0, n.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: m.default.Messages.COLLECTIBLES_SHOP
          })]
        }, C)).otherwise(e => {
          let s = r === e.id;
          return (0, n.jsx)(R, {
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
        } = o[e];
        return (0, n.jsx)("div", {
          style: {
            height: "".concat(16, "px")
          },
          children: (0, n.jsx)(c.FormTitle, {
            children: t
          })
        })
      },
      getSectionHeight: () => 16,
      getItemKey: (e, t) => {
        var r, n;
        return null !== (n = null === (r = o[e].items[t]) || void 0 === r ? void 0 : r.id) && void 0 !== n ? n : null
      },
      getItemHeight: N,
      removeEdgeItemGutters: !0
    })
  })
}