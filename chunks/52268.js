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
  I = l("26290"),
  P = l("74538"),
  S = l("731896"),
  x = l("528439"),
  _ = l("981631"),
  v = l("689938"),
  A = l("20070"),
  N = l("223223"),
  R = l("97045");
let M = () => 80,
  T = e => {
    let {
      children: t,
      className: l,
      isSelected: a = !1,
      ...n
    } = e;
    return (0, s.jsx)(c.Clickable, {
      className: r()(A.effectGridItem, l, {
        [A.selected]: a
      }),
      ...n,
      onClick: n.onSelect,
      children: t
    })
  },
  j = e => {
    var t;
    let {
      user: l,
      profileEffect: n,
      innerRef: r,
      section: i,
      isSelected: c,
      ...d
    } = e, E = (0, S.useProfileEffectPreset)(n.id), g = (0, o.useStateFromStores)([f.default], () => {
      let e = f.default.getProduct(n.skuId);
      return (0, m.isPremiumCollectiblesProduct)(e)
    }), _ = (0, m.isProductNew)(n.skuId), M = a.useRef(null), {
      accessibilityLabel: j,
      thumbnailPreviewSrc: O,
      title: U
    } = null !== (t = null == E ? void 0 : E.config) && void 0 !== t ? t : {}, {
      updatedOnAllSurfaces: L
    } = (0, h.useSimplifiedProfileExperiment)({
      location: "ProfileEffectPresetItem"
    }), F = P.default.canUseCollectibles(l), b = i === x.Section.PREMIUM_PURCHASE && !F;
    return (0, s.jsxs)(T, {
      className: b && !c ? A.decorationGridItemChurned : void 0,
      innerRef: null != r ? r : M,
      isSelected: c,
      ...d,
      children: [(0, s.jsx)("img", {
        src: L ? R : N,
        alt: j,
        className: A.presetEffectBackground
      }), (0, s.jsx)("img", {
        className: A.presetEffectImg,
        src: O,
        alt: U
      }), i === x.Section.PURCHASE || i === x.Section.PREMIUM_PURCHASE && F ? null : _ ? (0, s.jsx)(I.PremiumBadge, {
        className: A.newBadge,
        text: (0, s.jsxs)("div", {
          className: A.newBadgeText,
          children: [(0, s.jsx)(C.default, {
            width: 12,
            height: 12
          }), v.default.Messages.NEW]
        })
      }) : (0, s.jsx)(I.IconBadge, {
        icon: g ? () => (0, s.jsx)(p.default, {
          width: 14,
          height: 14
        }) : () => (0, s.jsx)(C.default, {
          width: 12,
          height: 12
        }),
        color: u.default.BACKGROUND_ACCENT,
        className: A.lockBadge
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
    u(), (0, d.pushLayer)(_.Layers.COLLECTIBLES_SHOP)
  }, f = (0, x.default)(), m = null != a;
  return (0, s.jsx)("section", {
    children: (0, s.jsx)(c.MasonryList, {
      fade: !0,
      itemGutter: 12,
      sectionGutter: 16,
      paddingVertical: 0,
      paddingHorizontal: 12,
      className: A.list,
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
        return (0, i.match)(C[u]).with(x.NONE_ITEM, () => (0, s.jsxs)(T, {
          style: {
            ...d
          },
          isSelected: !m,
          onSelect: () => r(null),
          children: [(0, s.jsx)(g.default, {
            className: A.notAllowedIcon
          }), (0, s.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: null != l ? v.default.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : v.default.Messages.NONE
          })]
        }, h)).with(x.SHOP_ITEM, () => (0, s.jsxs)(T, {
          style: d,
          onSelect: o,
          children: [(0, s.jsx)(E.default, {
            className: A.shopIcon
          }), (0, s.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: v.default.Messages.COLLECTIBLES_SHOP
          })]
        }, h)).otherwise(e => {
          let l = a === e.id;
          return (0, s.jsx)(j, {
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
      getItemHeight: M,
      removeEdgeItemGutters: !0
    })
  })
}