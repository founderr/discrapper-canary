"use strict";
n(627341);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(278074),
  l = n(831209),
  u = n(399606),
  _ = n(481060),
  c = n(727637),
  d = n(597688),
  E = n(884697),
  I = n(74538),
  T = n(864106),
  h = n(439959),
  f = n(125988),
  S = n(689938),
  A = n(642250);
let N = () => 80,
  m = e => {
    let {
      children: t,
      className: n,
      onSelect: r,
      isSelected: s = !1,
      ...a
    } = e;
    return (0, i.jsx)(_.Clickable, {
      className: o()(A.decorationGridItem, s ? A.selected : void 0, n),
      ...a,
      onClick: r,
      children: t
    })
  },
  O = e => {
    let {
      user: t,
      avatarDecoration: n,
      innerRef: s,
      section: o,
      isSelected: a = !1,
      ...T
    } = e, N = (0, u.e7)([d.Z], () => {
      let e = d.Z.getProduct(n.skuId);
      return (0, E.G1)(e)
    }), O = (0, E.Yq)(n.skuId), R = I.ZP.canUseCollectibles(t), p = o === h.$0.PREMIUM_PURCHASE && !R, g = r.useRef(null), C = (0, c.Z)(null != s ? s : g), {
      avatarDecorationSrc: v
    } = (0, f.Z)({
      user: t,
      avatarDecorationOverride: n,
      size: 80,
      onlyAnimateOnHover: !C
    });
    return (0, i.jsxs)(m, {
      className: p ? A.decorationGridItemChurned : void 0,
      innerRef: null != s ? s : g,
      isSelected: a,
      ...T,
      children: [(0, i.jsx)("img", {
        className: A.presetDecorationImg,
        src: v,
        alt: n.label
      }), o === h.$0.PURCHASE || o === h.$0.PREMIUM_PURCHASE && R ? null : O ? (0, i.jsx)(_.PremiumBadge, {
        className: A.newBadge,
        text: (0, i.jsxs)("div", {
          className: A.newBadgeText,
          children: [(0, i.jsx)(_.LockIcon, {
            size: "xxs",
            color: "currentColor"
          }), S.Z.Messages.NEW]
        })
      }) : (0, i.jsx)(_.IconBadge, {
        icon: N ? () => (0, i.jsx)(_.NitroWheelIcon, {
          size: "custom",
          color: "currentColor",
          width: 14,
          height: 14
        }) : () => (0, i.jsx)(_.LockIcon, {
          size: "xxs",
          color: "currentColor"
        }),
        color: l.Z.BACKGROUND_ACCENT,
        className: A.iconBadge
      })]
    })
  };
t.Z = e => {
  let {
    user: t,
    guild: n,
    pendingAvatarDecoration: s,
    selectedAvatarDecorationRef: o,
    onSelect: l,
    onOpenShop: u
  } = e, c = (0, h.ZP)(), d = r.useCallback(() => {
    u(void 0)
  }, [u]);
  return (0, i.jsx)(_.MasonryList, {
    fade: !0,
    className: A.list,
    columns: 3,
    sections: c.map(e => {
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
        section: I,
        items: f
      } = c[e];
      return (0, a.EQ)(f[r]).with(h.Tm, () => (0, i.jsxs)(m, {
        style: {
          ...u
        },
        isSelected: null === s,
        onSelect: () => l(null),
        children: [(0, i.jsx)(_.DenyIcon, {
          size: "md",
          color: "currentColor",
          className: A.notAllowedIcon
        }), (0, i.jsx)(_.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: (0, T.ad)(t, n) ? S.Z.Messages.USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION : S.Z.Messages.NONE
        })]
      }, E)).with(h.oT, () => (0, i.jsxs)(m, {
        style: u,
        onSelect: d,
        children: [(0, i.jsx)(_.ShopIcon, {
          size: "custom",
          width: 23,
          height: 23,
          color: "currentColor",
          className: A.shopIcon
        }), (0, i.jsx)(_.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: S.Z.Messages.COLLECTIBLES_SHOP
        })]
      }, E)).otherwise(e => {
        let n = (null == s ? void 0 : s.id) === e.id;
        return (0, i.jsx)(O, {
          style: {
            ...u
          },
          user: t,
          avatarDecoration: e,
          section: I,
          innerRef: n ? o : void 0,
          isSelected: n,
          onSelect: () => l(e)
        }, E)
      })
    },
    renderSection: (e, t) => {
      let {
        header: n
      } = c[e];
      return (0, i.jsx)("div", {
        className: A.headings,
        style: {
          ...t,
          position: "absolute"
        },
        children: (0, i.jsx)(_.HeadingLevel, {
          forceLevel: 5,
          children: (0, i.jsx)(_.Heading, {
            variant: "eyebrow",
            color: "header-secondary",
            children: n
          })
        })
      })
    },
    getSectionHeight: e => c[e].height,
    getItemKey: (e, t) => c[e].items[t].id,
    getItemHeight: N
  })
}