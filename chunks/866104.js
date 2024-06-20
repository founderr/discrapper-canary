n.d(t, {
  C: function() {
    return x
  },
  Z: function() {
    return M
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(512722),
  a = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(131388),
  u = n(357352),
  d = n(353254),
  E = n(695346),
  _ = n(271383),
  I = n(594174),
  T = n(346656),
  N = n(671533),
  m = n(810090),
  h = n(51144),
  C = n(506071),
  S = n(696014),
  A = n(847033),
  p = n(544978),
  g = n(893182),
  f = n(689938),
  O = n(828406);

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
      children: f.Z.Messages.GUILD_STORE_HERO_SHOW_MORE_DESCRIPTION_LABEL
    }), (0, s.jsx)(o.Spacer, {
      size: 4,
      horizontal: !0
    }), (0, s.jsx)(N.Z, {
      direction: N.Z.Directions.RIGHT,
      className: O.showMoreArrow
    })]
  })
}

function M(e) {
  let {
    coverImageAsset: t,
    isPreview: n = !1
  } = e, i = E.QK.useSetting(), l = (0, C.n)() && i, [a, r] = (0, d.Z)(t, l), o = l ? (0, s.jsx)(m.Z, {
    autoPlay: !0,
    loop: !0,
    className: O.coverImage,
    width: 655,
    poster: (0, u.b)("server_products/storefront/default-header.png"),
    src: (0, u.b)("server_products/storefront/default-header.mov")
  }) : (0, s.jsx)("img", {
    src: (0, u.b)("server_products/storefront/default-header.png"),
    alt: "",
    className: O.coverImage
  });
  return (0, s.jsx)("div", {
    ref: a,
    className: O.coverImageContainer,
    children: null == r || n ? o : (0, s.jsx)("img", {
      src: r,
      alt: "",
      className: O.coverImage
    })
  })
}

function x(e) {
  var t, n, l;
  let {
    guild: d,
    subscriptionsSettings: E
  } = e, N = d.id;
  let {
    nickname: m,
    nickcolor: C
  } = (l = N, (0, r.cj)([_.ZP, I.default], () => {
    var e, t;
    let n = I.default.getCurrentUser();
    a()(null != n, "user cannot be null");
    let s = _.ZP.getMember(l, n.id);
    return {
      nickname: null !== (e = null == s ? void 0 : s.nick) && void 0 !== e ? e : h.ZP.getName(n),
      nickcolor: null !== (t = null == s ? void 0 : s.colorString) && void 0 !== t ? t : void 0
    }
  }, [l])), {
    isTruncated: x,
    ExpandableTextContainer: v
  } = (0, S.s)(), L = (null !== (n = null == E ? void 0 : null === (t = E.description) || void 0 === t ? void 0 : t.trim().length) && void 0 !== n ? n : 0) > 0, [Z, P] = i.useState(1), D = (0, c.Z)("(max-width: 1439px)"), {
    selectedTab: j,
    isPhantomPreview: U
  } = (0, A.m)(), y = j === p.y.GUILD_PRODUCTS_PREVIEW ? f.Z.Messages.GUILD_STORE_HERO_PREVIEW_TAB_DESCRIPTION : f.Z.Messages.GUILD_STORE_HERO_PREVIEW_PAGE_DESCRIPTION, b = L ? (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(v, {
      lineClamp: D || 2 === Z ? 2 : 3,
      children: (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        children: null == E ? void 0 : E.description
      })
    }), x && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(o.Spacer, {
        size: 4
      }), (0, s.jsx)(R, {
        onClick: () => (0, g.Z)({
          guildId: N
        })
      })]
    })]
  }) : (0, s.jsx)(o.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: U ? y : f.Z.Messages.GUILD_STORE_HERO_DEFAULT_DESCRIPTION
  });
  return (0, s.jsxs)("div", {
    className: O.container,
    children: [(0, s.jsxs)("div", {
      className: O.infoContainer,
      children: [(0, s.jsx)("div", {
        children: (0, s.jsx)(T.Z, {
          guild: d,
          size: T.Z.Sizes.LARGER,
          iconSrc: null == d.icon || U ? (0, u.b)("server_products/storefront/default-guild-icon.jpg") : void 0
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
            children: U ? f.Z.Messages.GUILD_STORE_HERO_PREVIEW_TITLE : f.Z.Messages.GUILD_STORE_HERO_TITLE.format({
              guildName: d.name
            })
          })
        }), (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(o.Spacer, {
            size: 8
          }), (0, s.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-normal",
            children: f.Z.Messages.GUILD_STORE_HERO_DESCRIPTION_GREETING.format({
              username: m,
              usernameHook: function(e, t) {
                return (0, s.jsx)("span", {
                  style: {
                    color: C
                  },
                  children: e
                }, t)
              }
            })
          }), (0, s.jsx)(o.Spacer, {
            size: 9
          }), b]
        })]
      })]
    }), (0, s.jsx)(M, {
      coverImageAsset: null == E ? void 0 : E.cover_image_asset,
      isPreview: U
    })]
  })
}