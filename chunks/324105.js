"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("819855"),
  o = s("77078"),
  d = s("841098"),
  u = s("407063"),
  c = s("580357"),
  E = s("587974"),
  _ = s("315102"),
  I = s("159885"),
  T = s("782340"),
  f = s("534045"),
  S = s("68422"),
  m = s("578817");
let N = [16, 16, 14, 14, 12, 10, 8];
var g = function(e) {
  var t, s;
  let {
    guild: n,
    disabled: g,
    small: h,
    loading: C = !1,
    description: R,
    memberCount: x,
    presenceCount: L,
    className: O
  } = e, p = (0, d.default)(), [A, M] = l.useState(!1);
  if (null == n || C) return (0, a.jsx)("div", {
    className: i(O, f.card, f.cardPlaceholder, {
      [f.cardSmall]: h,
      [f.cardDisabled]: g
    })
  });
  let {
    name: D
  } = n, v = null != n.discoverySplash && /^data:/.test(n.discoverySplash) ? n.discoverySplash : _.default.getGuildDiscoverySplashURL({
    id: n.id,
    splash: n.discoverySplash,
    size: 240 * (0, u.getDevicePixelRatio)()
  }), j = (0, r.isThemeDark)(p) ? S : m, G = null !== (t = _.default.getGuildIconURL({
    id: n.id,
    icon: n.icon,
    size: 40
  })) && void 0 !== t ? t : void 0, U = null != n.description ? n.description : R, P = null != x ? x : null == n ? void 0 : n.memberCount, b = null != L ? L : null == n ? void 0 : n.presenceCount, B = null;
  if (null != G) B = (0, a.jsx)("img", {
    src: G,
    alt: "",
    className: f.avatar
  });
  else {
    let e = (0, I.getAcronym)(n.name);
    B = (0, a.jsx)("div", {
      className: f.defaultIcon,
      children: (0, a.jsx)(o.Text, {
        className: f.acronym,
        style: {
          fontSize: null !== (s = N[e.length]) && void 0 !== s ? s : N[N.length - 1]
        },
        variant: "text-sm/normal",
        children: e
      })
    })
  }
  return (0, a.jsxs)("div", {
    className: i(O, f.card, {
      [f.cardSmall]: h,
      [f.cardDisabled]: g,
      [f.splashLoaded]: A
    }),
    children: [(0, a.jsxs)("div", {
      className: f.cardHeader,
      children: [(0, a.jsx)("div", {
        className: f.splash,
        children: (0, a.jsx)("img", {
          src: null != v ? v : j,
          alt: "",
          className: f.splashImage,
          onLoad: () => M(!0)
        })
      }), (0, a.jsx)("div", {
        className: f.guildIcon,
        children: (0, a.jsx)(E.default, {
          mask: E.default.Masks.SQUIRCLE,
          width: 48,
          height: 48,
          children: (0, a.jsx)("div", {
            className: f.iconMask,
            children: (0, a.jsx)(E.default, {
              mask: E.default.Masks.SQUIRCLE,
              width: 40,
              height: 40,
              children: null != B ? B : null
            })
          })
        })
      })]
    }), (0, a.jsxs)("div", {
      className: f.guildInfo,
      children: [(0, a.jsxs)("div", {
        className: f.title,
        children: [(0, a.jsx)(c.default, {
          className: f.verifiedIcon,
          guild: n,
          tooltipColor: o.Tooltip.Colors.PRIMARY
        }), (0, a.jsx)(o.Text, {
          className: f.guildName,
          variant: "text-md/normal",
          children: (0, a.jsx)("span", {
            children: D
          })
        })]
      }), (0, a.jsx)(o.Text, {
        className: f.description,
        variant: "text-sm/normal",
        children: (0, a.jsx)("span", {
          children: U
        })
      }), (0, a.jsxs)("div", {
        className: f.memberInfo,
        children: [null != b && (0, a.jsxs)("div", {
          className: f.memberCount,
          children: [(0, a.jsx)("div", {
            className: f.dotOnline
          }), (0, a.jsx)(o.Text, {
            variant: "text-xs/normal",
            children: h ? T.default.Messages.NUMBERS_ONLY.format({
              count: b
            }) : T.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
              membersOnline: b
            })
          })]
        }), null != P && (0, a.jsxs)("div", {
          className: f.memberCount,
          children: [(0, a.jsx)("div", {
            className: f.dotOffline
          }), (0, a.jsx)(o.Text, {
            variant: "text-xs/normal",
            children: h ? T.default.Messages.NUMBERS_ONLY.format({
              count: P
            }) : T.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
              count: P
            })
          })]
        })]
      })]
    })]
  })
}