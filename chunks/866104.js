"use strict";
n.r(t), n.d(t, {
  HeroImage: function() {
    return L
  },
  default: function() {
    return v
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("512722"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("131388"),
  d = n("357352"),
  c = n("353254"),
  E = n("695346"),
  f = n("271383"),
  _ = n("594174"),
  T = n("346656"),
  I = n("682864"),
  m = n("671533"),
  N = n("810090"),
  p = n("51144"),
  S = n("506071"),
  C = n("696014"),
  A = n("847033"),
  h = n("544978"),
  g = n("893182"),
  M = n("689938"),
  O = n("871142");

function R(e) {
  let {
    onClick: t
  } = e;
  return (0, s.jsxs)(o.Clickable, {
    onClick: t,
    className: O.showMoreButton,
    children: [(0, s.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "header-primary",
      children: M.default.Messages.GUILD_STORE_HERO_SHOW_MORE_DESCRIPTION_LABEL
    }), (0, s.jsx)(I.default, {
      size: 4,
      horizontal: !0
    }), (0, s.jsx)(m.default, {
      direction: m.default.Directions.RIGHT,
      className: O.showMoreArrow
    })]
  })
}

function L(e) {
  let {
    coverImageAsset: t,
    isPreview: n = !1
  } = e, a = E.GifAutoPlay.useSetting(), l = (0, S.useIsWindowFocused)() && a, [i, r] = (0, c.default)(t, l), o = l ? (0, s.jsx)(N.default, {
    autoPlay: !0,
    loop: !0,
    className: O.coverImage,
    width: 655,
    poster: (0, d.getAssetCDNUrl)("server_products/storefront/default-header.png"),
    src: (0, d.getAssetCDNUrl)("server_products/storefront/default-header.mov")
  }) : (0, s.jsx)("img", {
    src: (0, d.getAssetCDNUrl)("server_products/storefront/default-header.png"),
    alt: "",
    className: O.coverImage
  });
  return (0, s.jsx)("div", {
    ref: i,
    className: O.coverImageContainer,
    children: null == r || n ? o : (0, s.jsx)("img", {
      src: r,
      alt: "",
      className: O.coverImage
    })
  })
}

function v(e) {
  var t, n, l;
  let {
    guild: c,
    subscriptionsSettings: E
  } = e, m = c.id;
  let {
    nickname: N,
    nickcolor: S
  } = (l = m, (0, r.useStateFromStoresObject)([f.default, _.default], () => {
    var e, t;
    let n = _.default.getCurrentUser();
    i()(null != n, "user cannot be null");
    let s = f.default.getMember(l, n.id);
    return {
      nickname: null !== (e = null == s ? void 0 : s.nick) && void 0 !== e ? e : p.default.getName(n),
      nickcolor: null !== (t = null == s ? void 0 : s.colorString) && void 0 !== t ? t : void 0
    }
  }, [l])), {
    isTruncated: v,
    ExpandableTextContainer: P
  } = (0, C.useExpandableTextContainer)(), D = (null !== (n = null == E ? void 0 : null === (t = E.description) || void 0 === t ? void 0 : t.trim().length) && void 0 !== n ? n : 0) > 0, [x, y] = a.useState(1), U = (0, u.default)("(max-width: ".concat(O.twoColumnWidth, ")")), {
    selectedTab: j,
    isPhantomPreview: b
  } = (0, A.useGuildShopDisplayContext)(), G = j === h.GuildShopTab.GUILD_PRODUCTS_PREVIEW ? M.default.Messages.GUILD_STORE_HERO_PREVIEW_TAB_DESCRIPTION : M.default.Messages.GUILD_STORE_HERO_PREVIEW_PAGE_DESCRIPTION, B = D ? (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(P, {
      lineClamp: U || 2 === x ? 2 : 3,
      children: (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        children: null == E ? void 0 : E.description
      })
    }), v && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(I.default, {
        size: 4
      }), (0, s.jsx)(R, {
        onClick: () => (0, g.default)({
          guildId: m
        })
      })]
    })]
  }) : (0, s.jsx)(o.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: b ? G : M.default.Messages.GUILD_STORE_HERO_DEFAULT_DESCRIPTION
  });
  return (0, s.jsxs)("div", {
    className: O.container,
    children: [(0, s.jsxs)("div", {
      className: O.infoContainer,
      children: [(0, s.jsx)("div", {
        children: (0, s.jsx)(T.default, {
          guild: c,
          size: T.default.Sizes.LARGER,
          iconSrc: null == c.icon || b ? (0, d.getAssetCDNUrl)("server_products/storefront/default-guild-icon.jpg") : void 0
        })
      }), (0, s.jsx)(I.default, {
        size: 16,
        horizontal: !0
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)("div", {
          ref: e => {
            null != e && e.clientHeight > 30 && y(2)
          },
          children: (0, s.jsx)(o.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            lineClamp: 2,
            children: b ? M.default.Messages.GUILD_STORE_HERO_PREVIEW_TITLE : M.default.Messages.GUILD_STORE_HERO_TITLE.format({
              guildName: c.name
            })
          })
        }), (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(I.default, {
            size: 8
          }), (0, s.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-normal",
            children: M.default.Messages.GUILD_STORE_HERO_DESCRIPTION_GREETING.format({
              username: N,
              usernameHook: function(e, t) {
                return (0, s.jsx)("span", {
                  style: {
                    color: S
                  },
                  children: e
                }, t)
              }
            })
          }), (0, s.jsx)(I.default, {
            size: 9
          }), B]
        })]
      })]
    }), (0, s.jsx)(L, {
      coverImageAsset: null == E ? void 0 : E.cover_image_asset,
      isPreview: b
    })]
  })
}