"use strict";
l.r(t), l("47120"), l("627341");
var s = l("735250"),
  a = l("470079"),
  r = l("803997"),
  n = l.n(r),
  i = l("278074"),
  o = l("831209"),
  u = l("399606"),
  c = l("481060"),
  d = l("37234"),
  f = l("597688"),
  h = l("574709"),
  m = l("884697"),
  g = l("126900"),
  C = l("466111"),
  E = l("783014"),
  p = l("242411"),
  v = l("26290"),
  S = l("74538"),
  P = l("25251"),
  I = l("996678"),
  x = l("528439"),
  A = l("981631"),
  _ = l("689938"),
  N = l("657258"),
  T = l("223223");
let R = () => 80,
  M = e => {
    let {
      children: t,
      className: l,
      isSelected: a = !1,
      ...r
    } = e;
    return (0, s.jsx)(c.Clickable, {
      className: n()(N.effectGridItem, l, {
        [N.selected]: a
      }),
      ...r,
      onClick: r.onSelect,
      children: t
    })
  },
  F = e => {
    var t;
    let {
      user: l,
      profileEffect: r,
      innerRef: n,
      section: i,
      isSelected: c,
      ...d
    } = e, g = (0, u.useStateFromStores)([P.default], () => P.default.getProfileEffectById(r.id)), E = null != g;
    a.useEffect(() => {
      !E && (0, I.getOrFetchProfileEffects)(!0)
    }, [E]);
    let A = (0, u.useStateFromStores)([f.default], () => {
        let e = f.default.getProduct(r.skuId);
        return (0, m.isPremiumCollectiblesProduct)(e)
      }),
      R = (0, u.useStateFromStores)([h.default], () => h.default.isItemViewed(r)),
      F = a.useRef(null),
      {
        accessibilityLabel: b,
        thumbnailPreviewSrc: j,
        title: y
      } = null !== (t = null == g ? void 0 : g.config) && void 0 !== t ? t : {},
      O = S.default.canUseCollectibles(l),
      L = i === x.Section.PREMIUM_PURCHASE && !O,
      [w, U] = a.useState(c);
    return a.useEffect(() => {
      c && U(!0)
    }, [c]), (0, s.jsxs)(M, {
      className: L && !c ? N.decorationGridItemChurned : void 0,
      innerRef: null != n ? n : F,
      isSelected: c,
      ...d,
      children: [(0, s.jsx)("img", {
        src: T,
        alt: b,
        className: N.presetEffectBackground
      }), (0, s.jsx)("img", {
        className: N.presetEffectImg,
        src: j,
        alt: y
      }), i === x.Section.PURCHASE || i === x.Section.PREMIUM_PURCHASE && O ? null : R || c || w ? (0, s.jsx)(v.IconBadge, {
        icon: A ? () => (0, s.jsx)(C.default, {
          width: 14,
          height: 14
        }) : () => (0, s.jsx)(p.default, {
          width: 12,
          height: 12
        }),
        color: o.default.BACKGROUND_ACCENT,
        className: N.lockBadge
      }) : (0, s.jsx)(v.PremiumBadge, {
        className: N.newBadge,
        text: (0, s.jsxs)("div", {
          className: N.newBadgeText,
          children: [(0, s.jsx)(p.default, {
            width: 12,
            height: 12
          }), _.default.Messages.NEW]
        })
      })]
    })
  };
t.default = e => {
  let {
    user: t,
    guild: l,
    pendingProfileEffect: a,
    selectedProfileEffectRef: r,
    onSelect: n,
    onClose: o
  } = e, u = () => {
    o(), (0, d.pushLayer)(A.Layers.COLLECTIBLES_SHOP)
  }, f = (0, x.default)(), h = null != a;
  return (0, s.jsx)("section", {
    children: (0, s.jsx)(c.MasonryList, {
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
      renderItem: (e, o, d, m) => {
        let {
          section: C,
          items: p
        } = f[e];
        return (0, i.match)(p[o]).with(x.NONE_ITEM, () => (0, s.jsxs)(M, {
          style: {
            ...d
          },
          isSelected: !h,
          onSelect: () => n(null),
          children: [(0, s.jsx)(E.default, {
            className: N.notAllowedIcon
          }), (0, s.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: null != l ? _.default.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : _.default.Messages.NONE
          })]
        }, m)).with(x.SHOP_ITEM, () => (0, s.jsxs)(M, {
          style: d,
          onSelect: u,
          children: [(0, s.jsx)(g.default, {
            className: N.shopIcon
          }), (0, s.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: _.default.Messages.COLLECTIBLES_SHOP
          })]
        }, m)).otherwise(e => {
          let l = a === e.id;
          return (0, s.jsx)(F, {
            user: t,
            style: {
              ...d
            },
            section: C,
            profileEffect: e,
            innerRef: l ? r : void 0,
            isSelected: l,
            onSelect: () => n(e.id)
          }, m)
        })
      },
      renderSection: e => {
        let {
          header: t
        } = f[e];
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
        var l, s;
        return null !== (s = null === (l = f[e].items[t]) || void 0 === l ? void 0 : l.id) && void 0 !== s ? s : null
      },
      getItemHeight: R,
      removeEdgeItemGutters: !0
    })
  })
}