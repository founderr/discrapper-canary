"use strict";
l.r(t), l("627341");
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
  h = l("884697"),
  m = l("295177"),
  g = l("126900"),
  C = l("466111"),
  p = l("783014"),
  E = l("242411"),
  v = l("26290"),
  P = l("74538"),
  S = l("731896"),
  I = l("528439"),
  x = l("981631"),
  A = l("689938"),
  _ = l("657258"),
  T = l("223223");
let N = () => 80,
  R = e => {
    let {
      children: t,
      className: l,
      isSelected: a = !1,
      ...r
    } = e;
    return (0, s.jsx)(c.Clickable, {
      className: n()(_.effectGridItem, l, {
        [_.selected]: a
      }),
      ...r,
      onClick: r.onSelect,
      children: t
    })
  },
  b = e => {
    var t;
    let {
      user: l,
      profileEffect: r,
      innerRef: n,
      section: i,
      isSelected: c,
      ...d
    } = e, g = (0, S.useProfileEffectPreset)(r.id), p = (0, u.useStateFromStores)([f.default], () => {
      let e = f.default.getProduct(r.skuId);
      return (0, h.isPremiumCollectiblesProduct)(e)
    }), x = (0, m.default)(r, c), N = a.useRef(null), {
      accessibilityLabel: b,
      thumbnailPreviewSrc: M,
      title: F
    } = null !== (t = null == g ? void 0 : g.config) && void 0 !== t ? t : {}, j = P.default.canUseCollectibles(l), y = i === I.Section.PREMIUM_PURCHASE && !j;
    return (0, s.jsxs)(R, {
      className: y && !c ? _.decorationGridItemChurned : void 0,
      innerRef: null != n ? n : N,
      isSelected: c,
      ...d,
      children: [(0, s.jsx)("img", {
        src: T,
        alt: b,
        className: _.presetEffectBackground
      }), (0, s.jsx)("img", {
        className: _.presetEffectImg,
        src: M,
        alt: F
      }), i === I.Section.PURCHASE || i === I.Section.PREMIUM_PURCHASE && j ? null : x ? (0, s.jsx)(v.PremiumBadge, {
        className: _.newBadge,
        text: (0, s.jsxs)("div", {
          className: _.newBadgeText,
          children: [(0, s.jsx)(E.default, {
            width: 12,
            height: 12
          }), A.default.Messages.NEW]
        })
      }) : (0, s.jsx)(v.IconBadge, {
        icon: p ? () => (0, s.jsx)(C.default, {
          width: 14,
          height: 14
        }) : () => (0, s.jsx)(E.default, {
          width: 12,
          height: 12
        }),
        color: o.default.BACKGROUND_ACCENT,
        className: _.lockBadge
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
    o(), (0, d.pushLayer)(x.Layers.COLLECTIBLES_SHOP)
  }, f = (0, I.default)(), h = null != a;
  return (0, s.jsx)("section", {
    children: (0, s.jsx)(c.MasonryList, {
      fade: !0,
      itemGutter: 12,
      sectionGutter: 16,
      paddingVertical: 0,
      paddingHorizontal: 12,
      className: _.list,
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
          items: E
        } = f[e];
        return (0, i.match)(E[o]).with(I.NONE_ITEM, () => (0, s.jsxs)(R, {
          style: {
            ...d
          },
          isSelected: !h,
          onSelect: () => n(null),
          children: [(0, s.jsx)(p.default, {
            className: _.notAllowedIcon
          }), (0, s.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: null != l ? A.default.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : A.default.Messages.NONE
          })]
        }, m)).with(I.SHOP_ITEM, () => (0, s.jsxs)(R, {
          style: d,
          onSelect: u,
          children: [(0, s.jsx)(g.default, {
            className: _.shopIcon
          }), (0, s.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: A.default.Messages.COLLECTIBLES_SHOP
          })]
        }, m)).otherwise(e => {
          let l = a === e.id;
          return (0, s.jsx)(b, {
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
      getItemHeight: N,
      removeEdgeItemGutters: !0
    })
  })
}