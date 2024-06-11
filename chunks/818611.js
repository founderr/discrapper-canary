"use strict";
n.r(t), n("627341");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("278074"),
  l = n("831209"),
  u = n("399606"),
  d = n("481060"),
  _ = n("727637"),
  c = n("597688"),
  E = n("884697"),
  I = n("126900"),
  T = n("466111"),
  f = n("783014"),
  S = n("242411"),
  h = n("74538"),
  A = n("864106"),
  m = n("439959"),
  N = n("125988"),
  p = n("689938"),
  O = n("166253");
let C = () => 80,
  R = e => {
    let {
      children: t,
      className: n,
      onSelect: r,
      isSelected: s = !1,
      ...o
    } = e;
    return (0, i.jsx)(d.Clickable, {
      className: a()(O.decorationGridItem, s ? O.selected : void 0, n),
      ...o,
      onClick: r,
      children: t
    })
  },
  g = e => {
    let {
      user: t,
      avatarDecoration: n,
      innerRef: s,
      section: a,
      isSelected: o = !1,
      ...I
    } = e, f = (0, u.useStateFromStores)([c.default], () => {
      let e = c.default.getProduct(n.skuId);
      return (0, E.isPremiumCollectiblesProduct)(e)
    }), A = (0, E.isProductNew)(n.skuId), C = h.default.canUseCollectibles(t), g = a === m.Section.PREMIUM_PURCHASE && !C, L = r.useRef(null), v = (0, _.default)(null != s ? s : L), {
      avatarDecorationSrc: D
    } = (0, N.default)({
      user: t,
      avatarDecorationOverride: n,
      size: 80,
      animateOnHover: !v
    });
    return (0, i.jsxs)(R, {
      className: g ? O.decorationGridItemChurned : void 0,
      innerRef: null != s ? s : L,
      isSelected: o,
      ...I,
      children: [(0, i.jsx)("img", {
        className: O.presetDecorationImg,
        src: D,
        alt: n.label
      }), a === m.Section.PURCHASE || a === m.Section.PREMIUM_PURCHASE && C ? null : A ? (0, i.jsx)(d.PremiumBadge, {
        className: O.newBadge,
        text: (0, i.jsxs)("div", {
          className: O.newBadgeText,
          children: [(0, i.jsx)(S.default, {
            width: 12,
            height: 12
          }), p.default.Messages.NEW]
        })
      }) : (0, i.jsx)(d.IconBadge, {
        icon: f ? () => (0, i.jsx)(T.default, {
          width: 14,
          height: 14
        }) : () => (0, i.jsx)(S.default, {
          width: 12,
          height: 12
        }),
        color: l.default.BACKGROUND_ACCENT,
        className: O.iconBadge
      })]
    })
  };
t.default = e => {
  let {
    user: t,
    guild: n,
    pendingAvatarDecoration: s,
    selectedAvatarDecorationRef: a,
    onSelect: l,
    onOpenShop: u
  } = e, _ = (0, m.default)(), c = r.useCallback(() => {
    u(void 0)
  }, [u]);
  return (0, i.jsx)(d.MasonryList, {
    fade: !0,
    className: O.list,
    columns: 3,
    sections: _.map(e => {
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
    renderItem: (e, r, u, E) => {
      let {
        section: T,
        items: S
      } = _[e];
      return (0, o.match)(S[r]).with(m.NONE_ITEM, () => (0, i.jsxs)(R, {
        style: {
          ...u
        },
        isSelected: null === s,
        onSelect: () => l(null),
        children: [(0, i.jsx)(f.default, {
          className: O.notAllowedIcon
        }), (0, i.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: (0, A.hasGlobalDefaultAvatarDecoration)(t, n) ? p.default.Messages.USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION : p.default.Messages.NONE
        })]
      }, E)).with(m.SHOP_ITEM, () => (0, i.jsxs)(R, {
        style: u,
        onSelect: c,
        children: [(0, i.jsx)(I.default, {
          className: O.shopIcon
        }), (0, i.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: p.default.Messages.COLLECTIBLES_SHOP
        })]
      }, E)).otherwise(e => {
        let n = (null == s ? void 0 : s.id) === e.id;
        return (0, i.jsx)(g, {
          style: {
            ...u
          },
          user: t,
          avatarDecoration: e,
          section: T,
          innerRef: n ? a : void 0,
          isSelected: n,
          onSelect: () => l(e)
        }, E)
      })
    },
    renderSection: e => {
      let {
        header: t
      } = _[e];
      return (0, i.jsx)("div", {
        className: O.headings,
        children: (0, i.jsx)(d.HeadingLevel, {
          forceLevel: 5,
          children: (0, i.jsx)(d.Heading, {
            variant: "eyebrow",
            color: "header-secondary",
            children: t
          })
        })
      })
    },
    getSectionHeight: e => _[e].height,
    getItemKey: (e, t) => _[e].items[t].id,
    getItemHeight: C
  })
}