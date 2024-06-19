s(627341);
var n = s(735250),
  t = s(470079),
  r = s(120356),
  i = s.n(r),
  a = s(278074),
  o = s(831209),
  c = s(399606),
  u = s(481060),
  d = s(37234),
  m = s(597688),
  E = s(884697),
  h = s(447452),
  f = s(74538),
  p = s(731896),
  g = s(528439),
  I = s(981631),
  C = s(689938),
  x = s(329066),
  _ = s(223223),
  v = s(97045);
let P = () => 80,
  N = e => {
    let {
      children: l,
      className: s,
      isSelected: t = !1,
      ...r
    } = e;
    return (0, n.jsx)(u.Clickable, {
      className: i()(x.effectGridItem, s, {
        [x.selected]: t
      }),
      ...r,
      onClick: r.onSelect,
      children: l
    })
  },
  R = e => {
    var l;
    let {
      user: s,
      profileEffect: r,
      innerRef: i,
      section: a,
      isSelected: d,
      ...I
    } = e, P = (0, p.V)(r.id), R = (0, c.e7)([m.Z], () => {
      let e = m.Z.getProduct(r.skuId);
      return (0, E.G1)(e)
    }), S = (0, E.Yq)(r.skuId), A = t.useRef(null), {
      accessibilityLabel: Z,
      thumbnailPreviewSrc: j,
      title: M
    } = null !== (l = null == P ? void 0 : P.config) && void 0 !== l ? l : {}, {
      updatedOnAllSurfaces: T
    } = (0, h.t)({
      location: "ProfileEffectPresetItem"
    }), O = f.ZP.canUseCollectibles(s), U = a === g.$0.PREMIUM_PURCHASE && !O;
    return (0, n.jsxs)(N, {
      className: U && !d ? x.decorationGridItemChurned : void 0,
      innerRef: null != i ? i : A,
      isSelected: d,
      ...I,
      children: [(0, n.jsx)("img", {
        src: T ? v : _,
        alt: Z,
        className: x.presetEffectBackground
      }), (0, n.jsx)("img", {
        className: x.presetEffectImg,
        src: j,
        alt: M
      }), a === g.$0.PURCHASE || a === g.$0.PREMIUM_PURCHASE && O ? null : S ? (0, n.jsx)(u.PremiumBadge, {
        className: x.newBadge,
        text: (0, n.jsxs)("div", {
          className: x.newBadgeText,
          children: [(0, n.jsx)(u.LockIcon, {
            size: "xxs",
            color: "currentColor"
          }), C.Z.Messages.NEW]
        })
      }) : (0, n.jsx)(u.IconBadge, {
        icon: R ? () => (0, n.jsx)(u.NitroWheelIcon, {
          size: "custom",
          color: "currentColor",
          width: 14,
          height: 14
        }) : () => (0, n.jsx)(u.LockIcon, {
          size: "xxs",
          color: "currentColor"
        }),
        color: o.Z.BACKGROUND_ACCENT,
        className: x.lockBadge
      })]
    })
  };
l.Z = e => {
  let {
    user: l,
    guild: s,
    pendingProfileEffect: t,
    selectedProfileEffectRef: r,
    onSelect: i,
    onClose: o
  } = e, c = () => {
    o(), (0, d.jN)(I.S9g.COLLECTIBLES_SHOP)
  }, m = (0, g.ZP)(), E = null != t;
  return (0, n.jsx)("section", {
    className: x.section,
    children: (0, n.jsx)(u.MasonryList, {
      fade: !0,
      itemGutter: 12,
      sectionGutter: 16,
      paddingVertical: 0,
      paddingHorizontal: 12,
      className: x.list,
      columns: 3,
      sections: m.map(e => {
        let {
          items: l
        } = e;
        return l.length
      }),
      renderItem: (e, o, d, h) => {
        let {
          section: f,
          items: p
        } = m[e];
        return (0, a.EQ)(p[o]).with(g.Tm, () => (0, n.jsxs)(N, {
          style: {
            ...d
          },
          isSelected: !E,
          onSelect: () => i(null),
          children: [(0, n.jsx)(u.DenyIcon, {
            size: "md",
            color: "currentColor",
            className: x.notAllowedIcon
          }), (0, n.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: null != s ? C.Z.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : C.Z.Messages.NONE
          })]
        }, h)).with(g.oT, () => (0, n.jsxs)(N, {
          style: d,
          onSelect: c,
          children: [(0, n.jsx)(u.ShopIcon, {
            size: "custom",
            width: 23,
            height: 23,
            color: "currentColor",
            className: x.shopIcon
          }), (0, n.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: C.Z.Messages.COLLECTIBLES_SHOP
          })]
        }, h)).otherwise(e => {
          let s = t === e.id;
          return (0, n.jsx)(R, {
            user: l,
            style: {
              ...d
            },
            section: f,
            profileEffect: e,
            innerRef: s ? r : void 0,
            isSelected: s,
            onSelect: () => i(e.id)
          }, h)
        })
      },
      renderSection: (e, l) => {
        let {
          header: s
        } = m[e];
        return (0, n.jsx)("div", {
          style: {
            ...l,
            height: "".concat(16, "px"),
            position: "absolute"
          },
          children: (0, n.jsx)(u.FormTitle, {
            children: s
          })
        })
      },
      getSectionHeight: () => 16,
      getItemKey: (e, l) => {
        var s, n;
        return null !== (n = null === (s = m[e].items[l]) || void 0 === s ? void 0 : s.id) && void 0 !== n ? n : null
      },
      getItemHeight: P,
      removeEdgeItemGutters: !0
    })
  })
}