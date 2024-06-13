"use strict";
n.r(t), n.d(t, {
  HeroImage: function() {
    return v
  },
  default: function() {
    return O
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
  f = n("695346"),
  E = n("271383"),
  _ = n("594174"),
  m = n("346656"),
  T = n("671533"),
  I = n("810090"),
  p = n("51144"),
  h = n("506071"),
  N = n("696014"),
  S = n("847033"),
  C = n("544978"),
  g = n("893182"),
  A = n("689938"),
  M = n("22657");

function R(e) {
  let {
    onClick: t
  } = e;
  return (0, s.jsxs)(o.Clickable, {
    onClick: t,
    className: M.showMoreButton,
    children: [(0, s.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "header-primary",
      children: A.default.Messages.GUILD_STORE_HERO_SHOW_MORE_DESCRIPTION_LABEL
    }), (0, s.jsx)(o.Spacer, {
      size: 4,
      horizontal: !0
    }), (0, s.jsx)(T.default, {
      direction: T.default.Directions.RIGHT,
      className: M.showMoreArrow
    })]
  })
}

function v(e) {
  let {
    coverImageAsset: t,
    isPreview: n = !1
  } = e, a = f.GifAutoPlay.useSetting(), l = (0, h.useIsWindowFocused)() && a, [i, r] = (0, c.default)(t, l), o = l ? (0, s.jsx)(I.default, {
    autoPlay: !0,
    loop: !0,
    className: M.coverImage,
    width: 655,
    poster: (0, d.getAssetCDNUrl)("server_products/storefront/default-header.png"),
    src: (0, d.getAssetCDNUrl)("server_products/storefront/default-header.mov")
  }) : (0, s.jsx)("img", {
    src: (0, d.getAssetCDNUrl)("server_products/storefront/default-header.png"),
    alt: "",
    className: M.coverImage
  });
  return (0, s.jsx)("div", {
    ref: i,
    className: M.coverImageContainer,
    children: null == r || n ? o : (0, s.jsx)("img", {
      src: r,
      alt: "",
      className: M.coverImage
    })
  })
}

function O(e) {
  var t, n, l;
  let {
    guild: c,
    subscriptionsSettings: f
  } = e, T = c.id;
  let {
    nickname: I,
    nickcolor: h
  } = (l = T, (0, r.useStateFromStoresObject)([E.default, _.default], () => {
    var e, t;
    let n = _.default.getCurrentUser();
    i()(null != n, "user cannot be null");
    let s = E.default.getMember(l, n.id);
    return {
      nickname: null !== (e = null == s ? void 0 : s.nick) && void 0 !== e ? e : p.default.getName(n),
      nickcolor: null !== (t = null == s ? void 0 : s.colorString) && void 0 !== t ? t : void 0
    }
  }, [l])), {
    isTruncated: O,
    ExpandableTextContainer: x
  } = (0, N.useExpandableTextContainer)(), L = (null !== (n = null == f ? void 0 : null === (t = f.description) || void 0 === t ? void 0 : t.trim().length) && void 0 !== n ? n : 0) > 0, [D, P] = a.useState(1), y = (0, u.default)("(max-width: 1439px)"), {
    selectedTab: U,
    isPhantomPreview: j
  } = (0, S.useGuildShopDisplayContext)(), b = U === C.GuildShopTab.GUILD_PRODUCTS_PREVIEW ? A.default.Messages.GUILD_STORE_HERO_PREVIEW_TAB_DESCRIPTION : A.default.Messages.GUILD_STORE_HERO_PREVIEW_PAGE_DESCRIPTION, F = L ? (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(x, {
      lineClamp: y || 2 === D ? 2 : 3,
      children: (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        children: null == f ? void 0 : f.description
      })
    }), O && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(o.Spacer, {
        size: 4
      }), (0, s.jsx)(R, {
        onClick: () => (0, g.default)({
          guildId: T
        })
      })]
    })]
  }) : (0, s.jsx)(o.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: j ? b : A.default.Messages.GUILD_STORE_HERO_DEFAULT_DESCRIPTION
  });
  return (0, s.jsxs)("div", {
    className: M.container,
    children: [(0, s.jsxs)("div", {
      className: M.infoContainer,
      children: [(0, s.jsx)("div", {
        children: (0, s.jsx)(m.default, {
          guild: c,
          size: m.default.Sizes.LARGER,
          iconSrc: null == c.icon || j ? (0, d.getAssetCDNUrl)("server_products/storefront/default-guild-icon.jpg") : void 0
        })
      }), (0, s.jsx)(o.Spacer, {
        size: 16,
        horizontal: !0
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)("div", {
          ref: e => {
            null != e && e.clientHeight > 30 && P(2)
          },
          children: (0, s.jsx)(o.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            lineClamp: 2,
            children: j ? A.default.Messages.GUILD_STORE_HERO_PREVIEW_TITLE : A.default.Messages.GUILD_STORE_HERO_TITLE.format({
              guildName: c.name
            })
          })
        }), (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(o.Spacer, {
            size: 8
          }), (0, s.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-normal",
            children: A.default.Messages.GUILD_STORE_HERO_DESCRIPTION_GREETING.format({
              username: I,
              usernameHook: function(e, t) {
                return (0, s.jsx)("span", {
                  style: {
                    color: h
                  },
                  children: e
                }, t)
              }
            })
          }), (0, s.jsx)(o.Spacer, {
            size: 9
          }), F]
        })]
      })]
    }), (0, s.jsx)(v, {
      coverImageAsset: null == f ? void 0 : f.cover_image_asset,
      isPreview: j
    })]
  })
}