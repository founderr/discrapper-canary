"use strict";
r.r(t), r.d(t, {
  default: function() {
    return M
  }
}), r("222007"), r("794252");
var n = r("37983"),
  a = r("884691"),
  i = r("414456"),
  s = r.n(i),
  u = r("506838"),
  o = r("171210"),
  l = r("65597"),
  c = r("77078"),
  d = r("252744"),
  f = r("853987"),
  E = r("426497"),
  _ = r("491232"),
  A = r("743826"),
  p = r("216422"),
  m = r("468759"),
  I = r("600785"),
  C = r("956089"),
  T = r("719923"),
  S = r("643070"),
  g = r("688318"),
  h = r("782340"),
  N = r("654353");
let R = () => 80,
  v = e => {
    let {
      children: t,
      className: r,
      onSelect: a,
      isSelected: i = !1,
      ...u
    } = e;
    return (0, n.jsx)(c.Clickable, {
      className: s(N.decorationGridItem, i ? N.selected : void 0, r),
      ...u,
      onClick: a,
      children: t
    })
  },
  O = e => {
    let {
      user: t,
      avatarDecoration: r,
      innerRef: i,
      section: s,
      isSelected: u = !1,
      ...c
    } = e, A = (0, l.default)([f.default], () => {
      let e = f.default.getProduct(r.skuId);
      return (0, _.isPremiumCollectiblesProduct)(e)
    }), m = (0, l.default)([E.default], () => E.default.isItemViewed(r)), R = T.default.canUseCollectibles(t), O = s === S.Section.PREMIUM_PURCHASE && !R, [M, x] = a.useState(u);
    a.useEffect(() => {
      u && x(!0)
    }, [u]);
    let D = a.useRef(null),
      P = (0, d.default)(null != i ? i : D),
      {
        avatarDecorationSrc: H
      } = (0, g.default)({
        user: t,
        avatarDecorationOverride: r,
        size: 80,
        animateOnHover: !P
      });
    return (0, n.jsxs)(v, {
      className: O ? N.decorationGridItemChurned : void 0,
      innerRef: null != i ? i : D,
      isSelected: u,
      ...c,
      children: [(0, n.jsx)("img", {
        className: N.presetDecorationImg,
        src: H,
        alt: r.label
      }), (() => {
        let e = s === S.Section.PURCHASE || s === S.Section.PREMIUM_PURCHASE && R;
        if (e) return null;
        let t = !m && !u && !M;
        return t ? (0, n.jsx)(C.PremiumBadge, {
          className: N.newBadge,
          text: (0, n.jsxs)("div", {
            className: N.newBadgeText,
            children: [(0, n.jsx)(I.default, {
              width: 12,
              height: 12
            }), h.default.Messages.NEW]
          })
        }) : (0, n.jsx)(C.IconBadge, {
          icon: A ? () => (0, n.jsx)(p.default, {
            width: 14,
            height: 14
          }) : () => (0, n.jsx)(I.default, {
            width: 12,
            height: 12
          }),
          color: o.default.BACKGROUND_ACCENT,
          className: N.iconBadge
        })
      })()]
    })
  };
var M = e => {
  let {
    user: t,
    pendingAvatarDecoration: r,
    selectedAvatarDecorationRef: a,
    onSelect: i,
    onOpenShop: s
  } = e, o = (0, S.default)();
  return (0, n.jsx)(c.MasonryList, {
    fade: !0,
    className: N.list,
    columns: 3,
    sections: o.map(e => {
      let {
        items: t
      } = e;
      return t.length
    }),
    sectionGutter: 16,
    itemGutter: 12,
    paddingHorizontal: 12,
    paddingVertical: 0,
    removeEdgeItemGutters: !0,
    renderItem: (e, l, d, f) => {
      let {
        section: E,
        items: _
      } = o[e];
      return (0, u.match)(_[l]).with(S.NONE_ITEM, () => (0, n.jsxs)(v, {
        style: {
          ...d
        },
        isSelected: null === r,
        onSelect: () => i(null),
        children: [(0, n.jsx)(m.default, {
          className: N.notAllowedIcon
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: h.default.Messages.NONE
        })]
      }, f)).with(S.SHOP_ITEM, () => (0, n.jsxs)(v, {
        style: d,
        onSelect: s,
        children: [(0, n.jsx)(A.default, {
          className: N.shopIcon
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: h.default.Messages.COLLECTIBLES_SHOP
        })]
      }, f)).otherwise(e => {
        let s = (null == r ? void 0 : r.id) === e.id;
        return (0, n.jsx)(O, {
          style: {
            ...d
          },
          user: t,
          avatarDecoration: e,
          section: E,
          innerRef: s ? a : void 0,
          isSelected: s,
          onSelect: () => i(e)
        }, f)
      })
    },
    renderSection: e => {
      let {
        header: t
      } = o[e];
      return (0, n.jsx)("div", {
        className: N.headings,
        children: (0, n.jsx)(c.HeadingLevel, {
          forceLevel: 5,
          children: (0, n.jsx)(c.Heading, {
            variant: "eyebrow",
            color: "header-secondary",
            children: t
          })
        })
      })
    },
    getSectionHeight: e => o[e].height,
    getItemKey: (e, t) => o[e].items[t].id,
    getItemHeight: R
  })
}