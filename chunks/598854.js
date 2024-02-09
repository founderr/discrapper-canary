"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("222007"), n("794252");
var s = n("37983"),
  l = n("884691"),
  i = n("414456"),
  r = n.n(i),
  o = n("506838"),
  a = n("171210"),
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
  _ = n("49111"),
  N = n("782340"),
  S = n("361451"),
  M = n("513002");
let A = () => 80,
  R = e => {
    let {
      children: t,
      className: n,
      isSelected: l = !1,
      ...i
    } = e;
    return (0, s.jsx)(c.Clickable, {
      className: r(S.effectGridItem, n, {
        [S.selected]: l
      }),
      ...i,
      onClick: i.onSelect,
      children: t
    })
  },
  T = e => {
    var t;
    let {
      user: n,
      profileEffect: i,
      innerRef: r,
      section: o,
      isSelected: c,
      ...d
    } = e, v = (0, u.default)([L.default], () => L.default.getProfileEffectById(i.id)), E = (0, u.default)([f.default], () => {
      let e = f.default.getProduct(i.skuId);
      return (0, C.isPremiumCollectiblesProduct)(e)
    }), _ = (0, u.default)([h.default], () => h.default.isItemViewed(i)), A = l.useRef(null), {
      accessibilityLabel: T,
      thumbnailPreviewSrc: O,
      title: P
    } = null !== (t = null == v ? void 0 : v.config) && void 0 !== t ? t : {}, w = I.default.canUseCollectibles(n), j = o === x.Section.PREMIUM_PURCHASE && !w, [y, b] = l.useState(c);
    return l.useEffect(() => {
      c && b(!0)
    }, [c]), (0, s.jsxs)(R, {
      className: j && !c ? S.decorationGridItemChurned : void 0,
      innerRef: null != r ? r : A,
      isSelected: c,
      ...d,
      children: [(0, s.jsx)("img", {
        src: M,
        alt: T,
        className: S.presetEffectBackground
      }), (0, s.jsx)("img", {
        className: S.presetEffectImg,
        src: O,
        alt: P
      }), (() => {
        let e = o === x.Section.PURCHASE || o === x.Section.PREMIUM_PURCHASE && w;
        if (e) return null;
        let t = !_ && !c && !y;
        return t ? (0, s.jsx)(g.PremiumBadge, {
          className: S.newBadge,
          text: (0, s.jsxs)("div", {
            className: S.newBadgeText,
            children: [(0, s.jsx)(m.default, {
              width: 12,
              height: 12
            }), N.default.Messages.NEW]
          })
        }) : (0, s.jsx)(g.IconBadge, {
          icon: E ? () => (0, s.jsx)(p.default, {
            width: 14,
            height: 14
          }) : () => (0, s.jsx)(m.default, {
            width: 12,
            height: 12
          }),
          color: a.default.BACKGROUND_ACCENT,
          className: S.lockBadge
        })
      })()]
    })
  };
var O = e => {
  let {
    user: t,
    pendingProfileEffect: n,
    selectedProfileEffectRef: l,
    onSelect: i,
    onClose: r
  } = e, a = () => {
    r(), (0, d.pushLayer)(_.Layers.COLLECTIBLES_SHOP)
  }, u = (0, x.default)(), f = null != n;
  return (0, s.jsx)("section", {
    children: (0, s.jsx)(c.MasonryList, {
      fade: !0,
      itemGutter: 12,
      sectionGutter: 16,
      paddingVertical: 0,
      paddingHorizontal: 12,
      className: S.list,
      columns: 3,
      sections: u.map(e => {
        let {
          items: t
        } = e;
        return t.length
      }),
      renderItem: (e, r, d, h) => {
        let {
          section: C,
          items: p
        } = u[e];
        return (0, o.match)(p[r]).with(x.NONE_ITEM, () => (0, s.jsxs)(R, {
          style: {
            ...d
          },
          isSelected: !f,
          onSelect: () => i(null),
          children: [(0, s.jsx)(E.default, {
            className: S.notAllowedIcon
          }), (0, s.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: N.default.Messages.NONE
          })]
        }, h)).with(x.SHOP_ITEM, () => (0, s.jsxs)(R, {
          style: d,
          onSelect: a,
          children: [(0, s.jsx)(v.default, {
            className: S.shopIcon
          }), (0, s.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: N.default.Messages.COLLECTIBLES_SHOP
          })]
        }, h)).otherwise(e => {
          let r = n === e.id;
          return (0, s.jsx)(T, {
            user: t,
            style: {
              ...d
            },
            section: C,
            profileEffect: e,
            innerRef: r ? l : void 0,
            isSelected: r,
            onSelect: () => i(e.id)
          }, h)
        })
      },
      renderSection: e => {
        let {
          header: t
        } = u[e];
        return (0, s.jsx)("div", {
          style: {
            height: "".concat(16, "px")
          },
          children: (0, s.jsx)(c.FormTitle, {
            children: t
          })
        })
      },
      getSectionHeight: () => 16,
      getItemKey: (e, t) => {
        var n, s;
        return null !== (s = null === (n = u[e].items[t]) || void 0 === n ? void 0 : n.id) && void 0 !== s ? s : null
      },
      getItemHeight: A,
      removeEdgeItemGutters: !0
    })
  })
}