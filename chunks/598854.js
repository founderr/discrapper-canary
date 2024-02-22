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
  T = n("782340"),
  N = n("971864"),
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
      className: l(N.effectGridItem, n, {
        [N.selected]: i
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
      className: y && !c ? N.decorationGridItemChurned : void 0,
      innerRef: null != l ? l : R,
      isSelected: c,
      ...d,
      children: [(0, r.jsx)("img", {
        src: P,
        alt: x,
        className: N.presetEffectBackground
      }), (0, r.jsx)("img", {
        className: N.presetEffectImg,
        src: M,
        alt: O
      }), (() => {
        let e = a === I.Section.PURCHASE || a === I.Section.PREMIUM_PURCHASE && w;
        if (e) return null;
        let t = !A && !c && !b;
        return t ? (0, r.jsx)(_.PremiumBadge, {
          className: N.newBadge,
          text: (0, r.jsxs)("div", {
            className: N.newBadgeText,
            children: [(0, r.jsx)(m.default, {
              width: 12,
              height: 12
            }), T.default.Messages.NEW]
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
          className: N.lockBadge
        })
      })()]
    })
  };
var M = e => {
  let {
    user: t,
    guild: n,
    pendingProfileEffect: i,
    selectedProfileEffectRef: s,
    onSelect: l,
    onClose: o
  } = e, u = () => {
    o(), (0, d.pushLayer)(A.Layers.COLLECTIBLES_SHOP)
  }, f = (0, I.default)(), h = null != i;
  return (0, r.jsx)("section", {
    children: (0, r.jsx)(c.MasonryList, {
      fade: !0,
      itemGutter: 12,
      sectionGutter: 16,
      paddingVertical: 0,
      paddingHorizontal: 12,
      className: N.list,
      columns: 3,
      sections: f.map(e => {
        let {
          items: t
        } = e;
        return t.length
      }),
      renderItem: (e, o, d, E) => {
        let {
          section: p,
          items: m
        } = f[e];
        return (0, a.match)(m[o]).with(I.NONE_ITEM, () => (0, r.jsxs)(L, {
          style: {
            ...d
          },
          isSelected: !h,
          onSelect: () => l(null),
          children: [(0, r.jsx)(v.default, {
            className: N.notAllowedIcon
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: null != n ? T.default.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : T.default.Messages.NONE
          })]
        }, E)).with(I.SHOP_ITEM, () => (0, r.jsxs)(L, {
          style: d,
          onSelect: u,
          children: [(0, r.jsx)(C.default, {
            className: N.shopIcon
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: T.default.Messages.COLLECTIBLES_SHOP
          })]
        }, E)).otherwise(e => {
          let n = i === e.id;
          return (0, r.jsx)(x, {
            user: t,
            style: {
              ...d
            },
            section: p,
            profileEffect: e,
            innerRef: n ? s : void 0,
            isSelected: n,
            onSelect: () => l(e.id)
          }, E)
        })
      },
      renderSection: e => {
        let {
          header: t
        } = f[e];
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
        return null !== (r = null === (n = f[e].items[t]) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : null
      },
      getItemHeight: R,
      removeEdgeItemGutters: !0
    })
  })
}