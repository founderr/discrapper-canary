s(627341);
var l = s(735250),
  t = s(470079),
  i = s(120356),
  r = s.n(i),
  a = s(278074),
  o = s(831209),
  c = s(399606),
  u = s(481060),
  d = s(37234),
  E = s(597688),
  m = s(884697),
  f = s(74538),
  h = s(731896),
  p = s(528439),
  v = s(981631),
  I = s(689938),
  g = s(329066),
  C = s(223223);
let _ = () => 80,
  Z = e => {
    let {
      children: n,
      className: s,
      isSelected: t = !1,
      ...i
    } = e;
    return (0, l.jsx)(u.Clickable, {
      className: r()(g.effectGridItem, s, {
        [g.selected]: t
      }),
      ...i,
      onClick: i.onSelect,
      children: n
    })
  },
  P = e => {
    var n;
    let {
      user: s,
      profileEffect: i,
      innerRef: r,
      section: a,
      isSelected: d,
      ...v
    } = e, _ = (0, h.V)(i.id), P = (0, c.e7)([E.Z], () => {
      let e = E.Z.getProduct(i.skuId);
      return (0, m.G1)(e)
    }), x = (0, m.Yq)(i.skuId), A = t.useRef(null), {
      accessibilityLabel: T,
      thumbnailPreviewSrc: S,
      title: N
    } = null !== (n = null == _ ? void 0 : _.config) && void 0 !== n ? n : {}, j = f.ZP.canUseCollectibles(s), R = a === p.$0.PREMIUM_PURCHASE && !j;
    return (0, l.jsxs)(Z, {
      className: R && !d ? g.decorationGridItemChurned : void 0,
      innerRef: null != r ? r : A,
      isSelected: d,
      ...v,
      children: [(0, l.jsx)("img", {
        src: C,
        alt: T,
        className: g.presetEffectBackground
      }), (0, l.jsx)("img", {
        className: g.presetEffectImg,
        src: S,
        alt: N
      }), a === p.$0.PURCHASE || a === p.$0.PREMIUM_PURCHASE && j ? null : x ? (0, l.jsx)(u.PremiumBadge, {
        className: g.newBadge,
        text: (0, l.jsxs)("div", {
          className: g.newBadgeText,
          children: [(0, l.jsx)(u.LockIcon, {
            size: "xxs",
            color: "currentColor"
          }), I.Z.Messages.NEW]
        })
      }) : (0, l.jsx)(u.IconBadge, {
        icon: P ? () => (0, l.jsx)(u.NitroWheelIcon, {
          size: "custom",
          color: "currentColor",
          width: 14,
          height: 14
        }) : () => (0, l.jsx)(u.LockIcon, {
          size: "xxs",
          color: "currentColor"
        }),
        color: o.Z.BACKGROUND_ACCENT,
        className: g.lockBadge
      })]
    })
  };
n.Z = e => {
  let {
    user: n,
    guild: s,
    pendingProfileEffect: t,
    selectedProfileEffectRef: i,
    onSelect: r,
    onClose: o
  } = e, c = () => {
    o(), (0, d.jN)(v.S9g.COLLECTIBLES_SHOP)
  }, E = (0, p.ZP)(), m = null != t;
  return (0, l.jsx)("section", {
    className: g.section,
    children: (0, l.jsx)(u.MasonryList, {
      fade: !0,
      itemGutter: 12,
      sectionGutter: 16,
      paddingVertical: 0,
      paddingHorizontal: 12,
      className: g.list,
      columns: 3,
      sections: E.map(e => {
        let {
          items: n
        } = e;
        return n.length
      }),
      renderItem: (e, o, d, f) => {
        let {
          section: h,
          items: v
        } = E[e];
        return (0, a.EQ)(v[o]).with(p.Tm, () => (0, l.jsxs)(Z, {
          style: {
            ...d
          },
          isSelected: !m,
          onSelect: () => r(null),
          children: [(0, l.jsx)(u.DenyIcon, {
            size: "md",
            color: "currentColor",
            className: g.notAllowedIcon
          }), (0, l.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: null != s ? I.Z.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : I.Z.Messages.NONE
          })]
        }, f)).with(p.oT, () => (0, l.jsxs)(Z, {
          style: d,
          onSelect: c,
          children: [(0, l.jsx)(u.ShopIcon, {
            size: "custom",
            width: 23,
            height: 23,
            color: "currentColor",
            className: g.shopIcon
          }), (0, l.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: I.Z.Messages.COLLECTIBLES_SHOP
          })]
        }, f)).otherwise(e => {
          let s = t === e.id;
          return (0, l.jsx)(P, {
            user: n,
            style: {
              ...d
            },
            section: h,
            profileEffect: e,
            innerRef: s ? i : void 0,
            isSelected: s,
            onSelect: () => r(e.id)
          }, f)
        })
      },
      renderSection: (e, n) => {
        let {
          header: s
        } = E[e];
        return (0, l.jsx)("div", {
          style: {
            ...n,
            height: "".concat(16, "px"),
            position: "absolute"
          },
          children: (0, l.jsx)(u.FormTitle, {
            children: s
          })
        })
      },
      getSectionHeight: () => 16,
      getItemKey: (e, n) => {
        var s, l;
        return null !== (l = null === (s = E[e].items[n]) || void 0 === s ? void 0 : s.id) && void 0 !== l ? l : null
      },
      getItemHeight: _,
      removeEdgeItemGutters: !0
    })
  })
}