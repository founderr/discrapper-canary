"use strict";
l.r(t), l("627341");
var s = l("735250"),
  a = l("470079"),
  n = l("120356"),
  r = l.n(n),
  i = l("278074"),
  u = l("831209"),
  o = l("399606"),
  c = l("481060"),
  d = l("37234"),
  f = l("597688"),
  m = l("884697"),
  h = l("447452"),
  E = l("126900"),
  p = l("466111"),
  g = l("783014"),
  C = l("242411"),
  I = l("74538"),
  P = l("731896"),
  S = l("528439"),
  x = l("981631"),
  _ = l("689938"),
  v = l("20070"),
  A = l("223223"),
  N = l("97045");
let R = () => 80,
  M = e => {
    let {
      children: t,
      className: l,
      isSelected: a = !1,
      ...n
    } = e;
    return (0, s.jsx)(c.Clickable, {
      className: r()(v.effectGridItem, l, {
        [v.selected]: a
      }),
      ...n,
      onClick: n.onSelect,
      children: t
    })
  },
  T = e => {
    var t;
    let {
      user: l,
      profileEffect: n,
      innerRef: r,
      section: i,
      isSelected: d,
      ...E
    } = e, g = (0, P.useProfileEffectPreset)(n.id), x = (0, o.useStateFromStores)([f.default], () => {
      let e = f.default.getProduct(n.skuId);
      return (0, m.isPremiumCollectiblesProduct)(e)
    }), R = (0, m.isProductNew)(n.skuId), T = a.useRef(null), {
      accessibilityLabel: j,
      thumbnailPreviewSrc: O,
      title: U
    } = null !== (t = null == g ? void 0 : g.config) && void 0 !== t ? t : {}, {
      updatedOnAllSurfaces: L
    } = (0, h.useSimplifiedProfileExperiment)({
      location: "ProfileEffectPresetItem"
    }), b = I.default.canUseCollectibles(l), F = i === S.Section.PREMIUM_PURCHASE && !b;
    return (0, s.jsxs)(M, {
      className: F && !d ? v.decorationGridItemChurned : void 0,
      innerRef: null != r ? r : T,
      isSelected: d,
      ...E,
      children: [(0, s.jsx)("img", {
        src: L ? N : A,
        alt: j,
        className: v.presetEffectBackground
      }), (0, s.jsx)("img", {
        className: v.presetEffectImg,
        src: O,
        alt: U
      }), i === S.Section.PURCHASE || i === S.Section.PREMIUM_PURCHASE && b ? null : R ? (0, s.jsx)(c.PremiumBadge, {
        className: v.newBadge,
        text: (0, s.jsxs)("div", {
          className: v.newBadgeText,
          children: [(0, s.jsx)(C.default, {
            width: 12,
            height: 12
          }), _.default.Messages.NEW]
        })
      }) : (0, s.jsx)(c.IconBadge, {
        icon: x ? () => (0, s.jsx)(p.default, {
          width: 14,
          height: 14
        }) : () => (0, s.jsx)(C.default, {
          width: 12,
          height: 12
        }),
        color: u.default.BACKGROUND_ACCENT,
        className: v.lockBadge
      })]
    })
  };
t.default = e => {
  let {
    user: t,
    guild: l,
    pendingProfileEffect: a,
    selectedProfileEffectRef: n,
    onSelect: r,
    onClose: u
  } = e, o = () => {
    u(), (0, d.pushLayer)(x.Layers.COLLECTIBLES_SHOP)
  }, f = (0, S.default)(), m = null != a;
  return (0, s.jsx)("section", {
    className: v.section,
    children: (0, s.jsx)(c.MasonryList, {
      fade: !0,
      itemGutter: 12,
      sectionGutter: 16,
      paddingVertical: 0,
      paddingHorizontal: 12,
      className: v.list,
      columns: 3,
      sections: f.map(e => {
        let {
          items: t
        } = e;
        return t.length
      }),
      renderItem: (e, u, d, h) => {
        let {
          section: p,
          items: C
        } = f[e];
        return (0, i.match)(C[u]).with(S.NONE_ITEM, () => (0, s.jsxs)(M, {
          style: {
            ...d
          },
          isSelected: !m,
          onSelect: () => r(null),
          children: [(0, s.jsx)(g.default, {
            className: v.notAllowedIcon
          }), (0, s.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: null != l ? _.default.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : _.default.Messages.NONE
          })]
        }, h)).with(S.SHOP_ITEM, () => (0, s.jsxs)(M, {
          style: d,
          onSelect: o,
          children: [(0, s.jsx)(E.default, {
            className: v.shopIcon
          }), (0, s.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: _.default.Messages.COLLECTIBLES_SHOP
          })]
        }, h)).otherwise(e => {
          let l = a === e.id;
          return (0, s.jsx)(T, {
            user: t,
            style: {
              ...d
            },
            section: p,
            profileEffect: e,
            innerRef: l ? n : void 0,
            isSelected: l,
            onSelect: () => r(e.id)
          }, h)
        })
      },
      renderSection: (e, t) => {
        let {
          header: l
        } = f[e];
        return (0, s.jsx)("div", {
          style: {
            ...t,
            height: "".concat(16, "px"),
            position: "absolute"
          },
          children: (0, s.jsx)(c.FormTitle, {
            children: l
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