"use strict";
n.r(t), n.d(t, {
  ConnectedApplicationUserRoleAccount: function() {
    return v
  },
  ConnectedUserAccount: function() {
    return L
  },
  ConnectedUserAccounts: function() {
    return D
  }
}), n("653041");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("692547"),
  l = n("780384"),
  u = n("481060"),
  d = n("99690"),
  _ = n("726542"),
  c = n("367907"),
  E = n("132871"),
  I = n("147890"),
  T = n("122021"),
  f = n("275759"),
  S = n("323588"),
  h = n("753194"),
  A = n("598077"),
  m = n("671533"),
  N = n("880008"),
  p = n("49012"),
  O = n("981631"),
  C = n("856651"),
  R = n("689938"),
  g = n("16367");

function L(e) {
  var t, n;
  let r, s, d, {
    connectedAccount: E,
    theme: I,
    locale: A,
    userId: L,
    className: v,
    showMetadata: D,
    showInvisibleIcon: M
  } = e;
  null == D && (D = !0);
  let y = null !== (n = E.metadata) && void 0 !== n ? n : {},
    P = D ? (0, f.getCreatedAtDate)(y[C.MetadataFields.CREATED_AT], A) : null,
    U = (0, u.useToken)(o.default.unsafe_rawColors.TWITTER).hex(),
    b = R.default.Messages.CONNECTION_VERIFIED;
  if (D) switch (E.type) {
    case O.PlatformTypes.REDDIT:
      r = (0, S.generateRedditMetadataItems)(y);
      break;
    case O.PlatformTypes.STEAM:
      r = (0, S.generateSteamMetadataItems)(y);
      break;
    case O.PlatformTypes.TWITTER:
      r = (0, S.generateTwitterMetadataItems)(y), "1" === y[C.MetadataFields.TWITTER_VERIFIED] && (s = U, b = R.default.Messages.CONNECTION_VERIFIED_ON_TWITTER);
      break;
    case O.PlatformTypes.PAYPAL:
      r = (0, S.generatePaypalMetadataItems)(y);
      break;
    case O.PlatformTypes.EBAY:
      r = (0, S.generateEbayMetadataItems)(y);
      break;
    case O.PlatformTypes.TIKTOK:
      r = (0, S.generateTikTokMetadataItems)(y)
  }
  let G = _.default.get((0, T.useLegacyPlatformType)(E.type)),
    w = null == G ? void 0 : null === (t = G.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(G, E);
  null != M && M ? d = (0, i.jsx)(N.default, {
    className: a()(g.__invalid_connectedAccountOpenIconContainer, g.connectedAccountHideIcon),
    foregroundColor: "currentColor"
  }) : null != w && (d = (0, i.jsx)(u.Anchor, {
    href: w,
    onClick: e => {
      var t, n;
      t = E.type, n = L, (0, c.trackWithMetadata)(O.AnalyticEvents.CONNECTED_ACCOUNT_VIEWED, {
        platform_type: t,
        other_user_id: n
      }), (0, p.handleClick)({
        href: w,
        trusted: (null == G ? void 0 : G.type) !== O.PlatformTypes.DOMAIN
      }, e)
    },
    children: (0, i.jsx)(m.default, {
      className: g.connectedAccountOpenIcon,
      direction: m.default.Directions.RIGHT
    })
  }));
  let k = (0, u.useToken)(o.default.colors.INTERACTIVE_MUTED).hex(),
    B = (0, u.useToken)(o.default.colors.INTERACTIVE_ACTIVE).hex(),
    x = E.verified ? (0, i.jsx)(h.default, {
      className: g.connectedAccountVerifiedIcon,
      color: null != s ? s : k,
      forcedIconColor: B,
      size: 16,
      tooltipText: b
    }) : null;
  return (0, i.jsxs)("div", {
    className: a()(g.connectedAccountContainer, null != r && r.length > 0 || null != P ? g.connectedAccountContainerWithMetadata : null, v),
    children: [(0, i.jsxs)("div", {
      className: g.connectedAccount,
      children: [(0, i.jsx)(u.Tooltip, {
        text: null == G ? void 0 : G.name,
        children: e => (0, i.jsx)("img", {
          ...e,
          alt: R.default.Messages.IMG_ALT_LOGO.format({
            name: null == G ? void 0 : G.name
          }),
          className: g.connectedAccountIcon,
          src: (0, l.isThemeDark)(I) ? null == G ? void 0 : G.icon.darkSVG : null == G ? void 0 : G.icon.lightSVG
        })
      }), (0, i.jsxs)("div", {
        className: g.connectedAccountNameContainer,
        children: [(0, i.jsxs)("div", {
          className: g.connectedAccountName,
          children: [(0, i.jsxs)("div", {
            className: g.connectedAccountNameTextContainer,
            children: [(0, i.jsx)(u.Tooltip, {
              overflowOnly: !0,
              text: E.name,
              children: e => (0, i.jsx)(u.Text, {
                ...e,
                variant: "text-md/semibold",
                color: "interactive-active",
                className: g.connectedAccountNameText,
                children: E.name
              })
            }), x]
          }), d]
        }), null != P ? (0, i.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: R.default.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
            date: P
          })
        }) : null]
      })]
    }), null != r && r.length > 0 ? (0, i.jsx)("div", {
      className: g.connectedAccountChildren,
      children: r
    }) : null]
  })
}

function v(e) {
  let {
    applicationRoleConnection: t,
    className: n,
    locale: r,
    onApplicationClicked: s,
    selectedGuildId: o
  } = e, l = (0, S.generateRoleConnectionMetadataItems)(t, void 0, r), _ = () => {
    null == s || s(), (0, I.goToAppDirectory)({
      view: E.ApplicationDirectoryViews.APPLICATION,
      applicationId: t.application.id,
      guildId: o,
      entrypoint: {
        name: E.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
      }
    })
  };
  return (0, i.jsxs)("div", {
    className: a()(g.connectedAccountContainer, null != l && l.length > 0 ? g.connectedAccountContainerWithMetadata : null, n),
    children: [(0, i.jsx)("div", {
      className: g.connectedAccount,
      children: (0, i.jsxs)(u.Clickable, {
        className: a()(g.connectedAccountNameContainer, g.connectedAccountNameContainerClickable),
        onClick: _,
        children: [null != t.platform_name ? (0, i.jsx)(u.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          children: t.platform_name
        }) : null, null != t.platform_username ? (0, i.jsx)("div", {
          className: g.connectedAccountName,
          children: (0, i.jsx)("div", {
            className: g.connectedAccountNameTextContainer,
            children: (0, i.jsx)(u.Text, {
              variant: "text-md/semibold",
              color: "interactive-active",
              className: g.connectedAccountNameText,
              children: t.platform_username
            })
          })
        }) : null]
      })
    }), null != l && l.length > 0 ? (0, i.jsx)("div", {
      className: a()(g.connectedAccountChildren, g.connectedAccountChildrenNoIcon),
      children: l
    }) : null, (0, i.jsx)("div", {
      children: (0, i.jsx)(u.Clickable, {
        className: g.connectedAccountPoweredBy,
        onClick: _,
        children: (0, i.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: R.default.Messages.CONNECTIONS_PROFILE_POWERED_BY.format({
            applicationHook: () => (0, i.jsxs)("div", {
              className: g.connectedAccountPoweredByText,
              children: [null != t.application.bot ? (0, i.jsx)(d.default, {
                user: new A.default(t.application.bot),
                size: u.AvatarSizes.SIZE_16
              }) : null, (0, i.jsx)(u.Text, {
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
let D = r.forwardRef(function(e, t) {
  let {
    connectedAccounts: n,
    theme: r,
    locale: s,
    className: o,
    userId: l
  } = e;
  if (null == n || 0 === n.length) return null;
  let u = n.filter(e => _.default.isSupported(e.type)).map(e => (0, i.jsx)(L, {
      connectedAccount: e,
      theme: r,
      locale: s,
      userId: l
    }, "".concat(e.type, ":").concat(e.id))),
    d = [],
    c = [];
  for (let e = 0; e < u.length; e++) {
    let t = u[e];
    e % 2 == 0 ? d.push(t) : c.push(t)
  }
  return (0, i.jsxs)("div", {
    ref: t,
    className: a()(g.connectedAccounts, o),
    children: [(0, i.jsx)("div", {
      className: g.connectedAccountsColumn,
      children: d
    }), (0, i.jsx)("div", {
      className: g.connectedAccountsColumn,
      children: c
    })]
  })
})