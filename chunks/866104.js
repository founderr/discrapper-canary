"use strict";
n.r(t), n.d(t, {
  HeroImage: function() {
    return O
  },
  default: function() {
    return x
  }
}), n("47120");
var s = n("735250"),
  l = n("470079"),
  a = n("512722"),
  i = n.n(a),
  r = n("442837"),
  o = n("481060"),
  u = n("131388"),
  d = n("357352"),
  c = n("353254"),
  f = n("695346"),
  E = n("271383"),
  _ = n("594174"),
  m = n("346656"),
  T = n("682864"),
  I = n("671533"),
  p = n("810090"),
  h = n("51144"),
  N = n("506071"),
  S = n("696014"),
  C = n("847033"),
  A = n("544978"),
  g = n("893182"),
  M = n("689938"),
  R = n("871142");

function v(e) {
  let {
    onClick: t
  } = e;
  return (0, s.jsxs)(o.Clickable, {
    onClick: t,
    className: R.showMoreButton,
    children: [(0, s.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "header-primary",
      children: M.default.Messages.GUILD_STORE_HERO_SHOW_MORE_DESCRIPTION_LABEL
    }), (0, s.jsx)(T.default, {
      size: 4,
      horizontal: !0
    }), (0, s.jsx)(I.default, {
      direction: I.default.Directions.RIGHT,
      className: R.showMoreArrow
    })]
  })
}

function O(e) {
  let {
    coverImageAsset: t,
    isPreview: n = !1
  } = e, l = f.GifAutoPlay.useSetting(), a = (0, N.useIsWindowFocused)() && l, [i, r] = (0, c.default)(t, a), o = a ? (0, s.jsx)(p.default, {
    autoPlay: !0,
    loop: !0,
    className: R.coverImage,
    width: 655,
    poster: (0, d.getAssetCDNUrl)("server_products/storefront/default-header.png"),
    src: (0, d.getAssetCDNUrl)("server_products/storefront/default-header.mov")
  }) : (0, s.jsx)("img", {
    src: (0, d.getAssetCDNUrl)("server_products/storefront/default-header.png"),
    alt: "",
    className: R.coverImage
  });
  return (0, s.jsx)("div", {
    ref: i,
    className: R.coverImageContainer,
    children: null == r || n ? o : (0, s.jsx)("img", {
      src: r,
      alt: "",
      className: R.coverImage
    })
  })
}

function x(e) {
  var t, n, a;
  let {
    guild: c,
    subscriptionsSettings: f
  } = e, I = c.id;
  let {
    nickname: p,
    nickcolor: N
  } = (a = I, (0, r.useStateFromStoresObject)([E.default, _.default], () => {
    var e, t;
    let n = _.default.getCurrentUser();
    i()(null != n, "user cannot be null");
    let s = E.default.getMember(a, n.id);
    return {
      nickname: null !== (e = null == s ? void 0 : s.nick) && void 0 !== e ? e : h.default.getName(n),
      nickcolor: null !== (t = null == s ? void 0 : s.colorString) && void 0 !== t ? t : void 0
    }
  }, [a])), {
    isTruncated: x,
    ExpandableTextContainer: L
  } = (0, S.useExpandableTextContainer)(), D = (null !== (n = null == f ? void 0 : null === (t = f.description) || void 0 === t ? void 0 : t.trim().length) && void 0 !== n ? n : 0) > 0, [P, y] = l.useState(1), U = (0, u.default)("(max-width: ".concat(R.twoColumnWidth, ")")), {
    selectedTab: j,
    isPhantomPreview: b
  } = (0, C.useGuildShopDisplayContext)(), B = j === A.GuildShopTab.GUILD_PRODUCTS_PREVIEW ? M.default.Messages.GUILD_STORE_HERO_PREVIEW_TAB_DESCRIPTION : M.default.Messages.GUILD_STORE_HERO_PREVIEW_PAGE_DESCRIPTION, G = D ? (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(L, {
      lineClamp: U || 2 === P ? 2 : 3,
      children: (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        children: null == f ? void 0 : f.description
      })
    }), x && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(T.default, {
        size: 4
      }), (0, s.jsx)(v, {
        onClick: () => (0, g.default)({
          guildId: I
        })
      })]
    })]
  }) : (0, s.jsx)(o.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: b ? B : M.default.Messages.GUILD_STORE_HERO_DEFAULT_DESCRIPTION
  });
  return (0, s.jsxs)("div", {
    className: R.container,
    children: [(0, s.jsxs)("div", {
      className: R.infoContainer,
      children: [(0, s.jsx)("div", {
        children: (0, s.jsx)(m.default, {
          guild: c,
          size: m.default.Sizes.LARGER,
          iconSrc: null == c.icon || b ? (0, d.getAssetCDNUrl)("server_products/storefront/default-guild-icon.jpg") : void 0
        })
      }), (0, s.jsx)(T.default, {
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
          children: [(0, s.jsx)(T.default, {
            size: 8
          }), (0, s.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-normal",
            children: M.default.Messages.GUILD_STORE_HERO_DESCRIPTION_GREETING.format({
              username: p,
              usernameHook: function(e, t) {
                return (0, s.jsx)("span", {
                  style: {
                    color: N
                  },
                  children: e
                }, t)
              }
            })
          }), (0, s.jsx)(T.default, {
            size: 9
          }), G]
        })]
      })]
    }), (0, s.jsx)(O, {
      coverImageAsset: null == f ? void 0 : f.cover_image_asset,
      isPreview: b
    })]
  })
}