"use strict";
l.r(t), l.d(t, {
  ConnectedUserAccount: function() {
    return C
  },
  ConnectedApplicationUserRoleAccount: function() {
    return y
  },
  ConnectedUserAccounts: function() {
    return M
  }
}), l("424973");
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  i = l.n(s),
  r = l("669491"),
  o = l("819855"),
  u = l("77078"),
  d = l("308289"),
  c = l("376556"),
  f = l("716241"),
  m = l("572943"),
  p = l("535013"),
  h = l("816499"),
  T = l("526190"),
  E = l("766274"),
  S = l("246053"),
  _ = l("867544"),
  g = l("128259"),
  A = l("49111"),
  I = l("214509"),
  v = l("782340"),
  N = l("825507");

function C(e) {
  var t, l;
  let a, s, d, {
    connectedAccount: E,
    theme: C,
    locale: y,
    userId: M,
    className: x,
    showMetadata: O,
    showInvisibleIcon: R
  } = e;
  null == O && (O = !0);
  let L = null !== (l = E.metadata) && void 0 !== l ? l : {},
    P = O ? (0, p.getCreatedAtDate)(L[I.MetadataFields.CREATED_AT], y) : null,
    j = (0, u.useToken)(r.default.unsafe_rawColors.TWITTER).hex(),
    b = v.default.Messages.CONNECTION_VERIFIED;
  if (O) switch (E.type) {
    case A.PlatformTypes.REDDIT:
      a = (0, h.generateRedditMetadataItems)(L);
      break;
    case A.PlatformTypes.STEAM:
      a = (0, h.generateSteamMetadataItems)(L);
      break;
    case A.PlatformTypes.TWITTER: {
      a = (0, h.generateTwitterMetadataItems)(L);
      let e = "1" === L[I.MetadataFields.TWITTER_VERIFIED];
      e && (s = j, b = v.default.Messages.CONNECTION_VERIFIED_ON_TWITTER);
      break
    }
    case A.PlatformTypes.PAYPAL:
      a = (0, h.generatePaypalMetadataItems)(L);
      break;
    case A.PlatformTypes.EBAY:
      a = (0, h.generateEbayMetadataItems)(L);
      break;
    case A.PlatformTypes.TIKTOK:
      a = (0, h.generateTikTokMetadataItems)(L)
  }
  let D = c.default.get((0, m.useLegacyPlatformType)(E.type)),
    U = null == D ? void 0 : null === (t = D.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(D, E);
  null != R && R ? d = (0, n.jsx)(_.default, {
    className: i(N.connectedAccountOpenIconContainer, N.connectedAccountHideIcon),
    foregroundColor: "currentColor"
  }) : null != U && (d = (0, n.jsx)(u.Anchor, {
    href: U,
    onClick: e => {
      var t, l;
      t = E.type, l = M, (0, f.trackWithMetadata)(A.AnalyticEvents.CONNECTED_ACCOUNT_VIEWED, {
        platform_type: t,
        other_user_id: l
      }), (0, g.handleClick)({
        href: U,
        trusted: (null == D ? void 0 : D.type) !== A.PlatformTypes.DOMAIN
      }, e)
    },
    children: (0, n.jsx)(S.default, {
      className: N.connectedAccountOpenIcon,
      direction: S.default.Directions.RIGHT
    })
  }));
  let w = (0, u.useToken)(r.default.colors.INTERACTIVE_MUTED).hex(),
    F = (0, u.useToken)(r.default.colors.INTERACTIVE_ACTIVE).hex(),
    G = E.verified ? (0, n.jsx)(T.default, {
      className: N.connectedAccountVerifiedIcon,
      color: null != s ? s : w,
      forcedIconColor: F,
      size: 16,
      tooltipText: b
    }) : null;
  return (0, n.jsxs)("div", {
    className: i(N.connectedAccountContainer, null != a && a.length > 0 || null != P ? N.connectedAccountContainerWithMetadata : null, x),
    children: [(0, n.jsxs)("div", {
      className: N.connectedAccount,
      children: [(0, n.jsx)(u.Tooltip, {
        text: null == D ? void 0 : D.name,
        children: e => (0, n.jsx)("img", {
          ...e,
          alt: v.default.Messages.IMG_ALT_LOGO.format({
            name: null == D ? void 0 : D.name
          }),
          className: N.connectedAccountIcon,
          src: (0, o.isThemeDark)(C) ? null == D ? void 0 : D.icon.darkSVG : null == D ? void 0 : D.icon.lightSVG
        })
      }), (0, n.jsxs)("div", {
        className: N.connectedAccountNameContainer,
        children: [(0, n.jsxs)("div", {
          className: N.connectedAccountName,
          children: [(0, n.jsxs)("div", {
            className: N.connectedAccountNameTextContainer,
            children: [(0, n.jsx)(u.Tooltip, {
              overflowOnly: !0,
              text: E.name,
              children: e => (0, n.jsx)(u.Text, {
                ...e,
                variant: "text-md/semibold",
                color: "interactive-active",
                className: N.connectedAccountNameText,
                children: E.name
              })
            }), G]
          }), d]
        }), null != P ? (0, n.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: v.default.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
            date: P
          })
        }) : null]
      })]
    }), null != a && a.length > 0 ? (0, n.jsx)("div", {
      className: N.connectedAccountChildren,
      children: a
    }) : null]
  })
}

function y(e) {
  let {
    applicationRoleConnection: t,
    className: l,
    locale: a
  } = e, s = (0, h.generateRoleConnectionMetadataItems)(t, void 0, a);
  return (0, n.jsxs)("div", {
    className: i(N.connectedAccountContainer, null != s && s.length > 0 ? N.connectedAccountContainerWithMetadata : null, l),
    children: [(0, n.jsx)("div", {
      className: N.connectedAccount,
      children: (0, n.jsxs)("div", {
        className: N.connectedAccountNameContainer,
        children: [null != t.platform_name ? (0, n.jsx)(u.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          children: t.platform_name
        }) : null, null != t.platform_username ? (0, n.jsx)("div", {
          className: N.connectedAccountName,
          children: (0, n.jsx)("div", {
            className: N.connectedAccountNameTextContainer,
            children: (0, n.jsx)(u.Text, {
              variant: "text-md/semibold",
              color: "interactive-active",
              className: N.connectedAccountNameText,
              children: t.platform_username
            })
          })
        }) : null]
      })
    }), null != s && s.length > 0 ? (0, n.jsx)("div", {
      className: i(N.connectedAccountChildren, N.connectedAccountChildrenNoIcon),
      children: s
    }) : null, (0, n.jsx)("div", {
      children: (0, n.jsx)("div", {
        className: N.connectedAccountPoweredBy,
        children: (0, n.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: v.default.Messages.CONNECTIONS_PROFILE_POWERED_BY.format({
            applicationHook: () => (0, n.jsxs)("div", {
              className: N.connectedAccountPoweredByText,
              children: [null != t.application.bot ? (0, n.jsx)(d.default, {
                user: new E.default(t.application.bot),
                size: u.AvatarSizes.SIZE_16
              }) : null, (0, n.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: "text-normal",
                children: t.application.name
              })]
            })
          })
        })
      })
    })]
  })
}
let M = a.forwardRef(function(e, t) {
  let {
    connectedAccounts: l,
    theme: a,
    locale: s,
    className: r,
    userId: o
  } = e;
  if (null == l || 0 === l.length) return null;
  let u = l.filter(e => c.default.isSupported(e.type)).map(e => (0, n.jsx)(C, {
      connectedAccount: e,
      theme: a,
      locale: s,
      userId: o
    }, "".concat(e.type, ":").concat(e.id))),
    d = [],
    f = [];
  for (let e = 0; e < u.length; e++) {
    let t = u[e];
    e % 2 == 0 ? d.push(t) : f.push(t)
  }
  return (0, n.jsxs)("div", {
    ref: t,
    className: i(N.connectedAccounts, r),
    children: [(0, n.jsx)("div", {
      className: N.connectedAccountsColumn,
      children: d
    }), (0, n.jsx)("div", {
      className: N.connectedAccountsColumn,
      children: f
    })]
  })
})