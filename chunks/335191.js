"use strict";
n.d(t, {
  E3: function() {
    return C
  },
  OA: function() {
    return L
  },
  tH: function() {
    return v
  }
}), n(653041);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(692547),
  l = n(780384),
  u = n(481060),
  _ = n(99690),
  c = n(726542),
  d = n(367907),
  E = n(132871),
  I = n(147890),
  T = n(122021),
  h = n(275759),
  S = n(323588),
  f = n(753194),
  N = n(598077),
  A = n(671533),
  m = n(49012),
  O = n(981631),
  R = n(856651),
  p = n(689938),
  g = n(389914);

function C(e) {
  var t, n;
  let r, s, _, {
    connectedAccount: E,
    theme: I,
    locale: N,
    userId: C,
    className: v,
    showMetadata: L,
    showInvisibleIcon: D
  } = e;
  null == L && (L = !0);
  let M = null !== (n = E.metadata) && void 0 !== n ? n : {},
    P = L ? (0, h.FI)(M[R.PC.CREATED_AT], N) : null,
    y = (0, u.useToken)(a.Z.unsafe_rawColors.TWITTER).hex(),
    U = p.Z.Messages.CONNECTION_VERIFIED;
  if (L) switch (E.type) {
    case O.ABu.REDDIT:
      r = (0, S.oP)(M);
      break;
    case O.ABu.STEAM:
      r = (0, S.Dq)(M);
      break;
    case O.ABu.TWITTER:
      r = (0, S.rJ)(M), "1" === M[R.PC.TWITTER_VERIFIED] && (s = y, U = p.Z.Messages.CONNECTION_VERIFIED_ON_TWITTER);
      break;
    case O.ABu.PAYPAL:
      r = (0, S.li)(M);
      break;
    case O.ABu.EBAY:
      r = (0, S.ul)(M);
      break;
    case O.ABu.TIKTOK:
      r = (0, S.hf)(M)
  }
  let b = c.Z.get((0, T.rR)(E.type)),
    G = null == b ? void 0 : null === (t = b.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(b, E);
  null != D && D ? _ = (0, i.jsx)(u.EyeSlashIcon, {
    size: "md",
    color: "currentColor",
    className: o()(g.__invalid_connectedAccountOpenIconContainer, g.connectedAccountHideIcon)
  }) : null != G && (_ = (0, i.jsx)(u.Anchor, {
    href: G,
    onClick: e => {
      var t, n;
      t = E.type, n = C, (0, d.yw)(O.rMx.CONNECTED_ACCOUNT_VIEWED, {
        platform_type: t,
        other_user_id: n
      }), (0, m.q)({
        href: G,
        trusted: (null == b ? void 0 : b.type) !== O.ABu.DOMAIN
      }, e)
    },
    children: (0, i.jsx)(A.Z, {
      className: g.connectedAccountOpenIcon,
      direction: A.Z.Directions.RIGHT
    })
  }));
  let w = (0, u.useToken)(a.Z.colors.INTERACTIVE_MUTED).hex(),
    B = (0, u.useToken)(a.Z.colors.INTERACTIVE_ACTIVE).hex(),
    x = E.verified ? (0, i.jsx)(f.Z, {
      className: g.connectedAccountVerifiedIcon,
      color: null != s ? s : w,
      forcedIconColor: B,
      size: 16,
      tooltipText: U
    }) : null;
  return (0, i.jsxs)("div", {
    className: o()(g.connectedAccountContainer, null != r && r.length > 0 || null != P ? g.connectedAccountContainerWithMetadata : null, v),
    children: [(0, i.jsxs)("div", {
      className: g.connectedAccount,
      children: [(0, i.jsx)(u.Tooltip, {
        text: null == b ? void 0 : b.name,
        children: e => (0, i.jsx)("img", {
          ...e,
          alt: p.Z.Messages.IMG_ALT_LOGO.format({
            name: null == b ? void 0 : b.name
          }),
          className: g.connectedAccountIcon,
          src: (0, l.wj)(I) ? null == b ? void 0 : b.icon.darkSVG : null == b ? void 0 : b.icon.lightSVG
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
          }), _]
        }), null != P ? (0, i.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: p.Z.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
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
    selectedGuildId: a
  } = e, l = (0, S.rm)(t, void 0, r), c = () => {
    null == s || s(), (0, I.goToAppDirectory)({
      view: E.ApplicationDirectoryViews.APPLICATION,
      applicationId: t.application.id,
      guildId: a,
      entrypoint: {
        name: E.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
      }
    })
  };
  return (0, i.jsxs)("div", {
    className: o()(g.connectedAccountContainer, null != l && l.length > 0 ? g.connectedAccountContainerWithMetadata : null, n),
    children: [(0, i.jsx)("div", {
      className: g.connectedAccount,
      children: (0, i.jsxs)(u.Clickable, {
        className: o()(g.connectedAccountNameContainer, g.connectedAccountNameContainerClickable),
        onClick: c,
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
      className: o()(g.connectedAccountChildren, g.connectedAccountChildrenNoIcon),
      children: l
    }) : null, (0, i.jsx)("div", {
      children: (0, i.jsx)(u.Clickable, {
        className: g.connectedAccountPoweredBy,
        onClick: c,
        children: (0, i.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: p.Z.Messages.CONNECTIONS_PROFILE_POWERED_BY.format({
            applicationHook: () => (0, i.jsxs)("div", {
              className: g.connectedAccountPoweredByText,
              children: [null != t.application.bot ? (0, i.jsx)(_.Z, {
                user: new N.Z(t.application.bot),
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
let L = 12633 == n.j ? r.forwardRef(function(e, t) {
  let {
    connectedAccounts: n,
    theme: r,
    locale: s,
    className: a,
    userId: l
  } = e;
  if (null == n || 0 === n.length) return null;
  let u = n.filter(e => c.Z.isSupported(e.type)).map(e => (0, i.jsx)(C, {
      connectedAccount: e,
      theme: r,
      locale: s,
      userId: l
    }, "".concat(e.type, ":").concat(e.id))),
    _ = [],
    d = [];
  for (let e = 0; e < u.length; e++) {
    let t = u[e];
    e % 2 == 0 ? _.push(t) : d.push(t)
  }
  return (0, i.jsxs)("div", {
    ref: t,
    className: o()(g.connectedAccounts, a),
    children: [(0, i.jsx)("div", {
      className: g.connectedAccountsColumn,
      children: _
    }), (0, i.jsx)("div", {
      className: g.connectedAccountsColumn,
      children: d
    })]
  })
}) : null