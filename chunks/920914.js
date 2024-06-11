"use strict";
s.r(t), s("47120"), s("653041"), s("773603");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("442837"),
  o = s("704215"),
  d = s("692547"),
  u = s("780384"),
  c = s("481060"),
  S = s("570140"),
  E = s("457330"),
  T = s("497321"),
  _ = s("23551"),
  I = s("468026"),
  N = s("410030"),
  g = s("726542"),
  f = s("122021"),
  m = s("275759"),
  A = s("231757"),
  C = s("323588"),
  O = s("605236"),
  h = s("553795"),
  R = s("430824"),
  p = s("771845"),
  M = s("246946"),
  D = s("186095"),
  x = s("797717"),
  L = s("346656"),
  P = s("465670"),
  b = s("692437"),
  v = s("507957"),
  U = s("26290"),
  j = s("626135"),
  G = s("63063"),
  F = s("706454"),
  B = s("349728"),
  y = s("494620"),
  V = s("205266"),
  H = s("216153"),
  Y = s("981631"),
  k = s("856651"),
  w = s("921944"),
  W = s("689938"),
  K = s("220301"),
  Q = s("611273");
let z = e => {
  var t, s;
  let n, {
      integration: i
    } = e,
    {
      isJoining: l,
      joinErrorMessage: o,
      showJoinErrorMessage: d
    } = (0, r.useStateFromStoresObject)([h.default], () => ({
      isJoining: h.default.isJoining(i.id),
      joinErrorMessage: "" === h.default.joinErrorMessage(i.id) ? W.default.Messages.ERROR : h.default.joinErrorMessage(i.id),
      showJoinErrorMessage: void 0 !== h.default.joinErrorMessage(i.id)
    }), [i.id]),
    u = null != (0, r.useStateFromStores)([R.default], () => R.default.getGuild(i.guild.id), [i.guild.id]);
  return !u && (n = (0, a.jsx)(c.Button, {
    size: c.ButtonSizes.SMALL,
    onClick: function() {
      E.default.joinServer(i.id, () => {})
    },
    disabled: l,
    children: (0, a.jsx)("span", {
      children: l ? W.default.Messages.JOINING_GUILD : W.default.Messages.JOIN_GUILD
    })
  })), (0, a.jsxs)("div", {
    className: K.integrationWrapper,
    children: [(0, a.jsxs)("div", {
      className: K.integration,
      children: [(0, a.jsx)(L.default, {
        size: L.default.Sizes.SMALL,
        guild: i.guild,
        className: K.guildIcon
      }), (0, a.jsxs)("div", {
        className: K.integrationInner,
        children: [(0, a.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: i.guild.toString()
        }), (0, a.jsx)(c.Anchor, {
          href: null === (s = g.default.get(i.type)) || void 0 === s ? void 0 : null === (t = s.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(s, i.account),
          children: (0, a.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: i.account.name
          })
        })]
      }), n]
    }), d && (0, a.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: K.integrationError,
      children: o
    })]
  })
};

function X(e) {
  var t, s, i;
  let l, r, o, {
      onDisconnect: S,
      account: T,
      theme: _,
      locale: N
    } = e,
    [O, h] = n.useState(T.friendSync),
    [R, p] = n.useState(T.visibility),
    [M, D] = n.useState(T.metadataVisibility),
    [L, b] = n.useState(T.showActivity),
    [j, F] = n.useState(null),
    [w, Q] = n.useState(null),
    [X, q] = n.useState(!1),
    [Z, J] = n.useState([]),
    $ = (0, f.useLegacyPlatformType)(T.type),
    ee = g.default.get($);
  n.useEffect(() => {
    h(T.friendSync), p(T.visibility), D(T.metadataVisibility), b(T.showActivity)
  }, [T]), n.useEffect(() => {
    !1 !== T.verified && (null != j && (p(j), E.default.setVisibility(T.type, T.id, j), F(null)), null != w && (D(w), E.default.setMetadataVisibility(T.type, T.id, w), Q(null)))
  }, [T]);

  function et() {
    (0, A.default)({
      platformType: T.type,
      location: "User Settings"
    })
  }

  function es() {
    let e = g.default.get(T.type),
      t = W.default.Messages.DISCONNECT_ACCOUNT_BODY;
    (0, B.default)(T) && (t = (0, a.jsxs)(a.Fragment, {
      children: [t, (0, a.jsx)(y.default, {
        className: K.infoBox,
        children: W.default.Messages.CONNECTED_ACCOUNT_IS_AUTHORIZED_APP_DISCONNECT_WARNING.format({
          platformName: e.name
        })
      })]
    })), (0, c.openModal)(s => (0, a.jsx)(I.default, {
      title: W.default.Messages.DISCONNECT_ACCOUNT_TITLE.format({
        name: e.name
      }),
      body: t,
      confirmText: W.default.Messages.DISCONNECT_ACCOUNT,
      cancelText: W.default.Messages.CANCEL,
      onConfirm: S,
      ...s
    }))
  }

  function ea(e) {
    let {
      verified: t
    } = T, s = e ? 1 : 0;
    if (e && !t) {
      F(s), (0, A.default)({
        platformType: T.type,
        location: "User Settings"
      });
      return
    }
    p(s), E.default.setVisibility(T.type, T.id, s)
  }

  function en(e) {
    let {
      verified: t
    } = T, s = e ? 1 : 0;
    if (e && !t) {
      Q(s), (0, A.default)({
        platformType: T.type,
        location: "User Settings"
      });
      return
    }
    D(s), E.default.setMetadataVisibility(T.type, T.id, s)
  }

  function ei(e) {
    h(e), E.default.setFriendSync(T.type, T.id, e)
  }

  function el(e) {
    b(e), E.default.setShowActivity(T.type, T.id, e)
  }
  return (0, a.jsxs)("div", {
    className: K.connection,
    children: [function(e) {
      var t;
      let s = g.default.get(e.type),
        n = g.default.get($),
        i = "1" === (null !== (t = e.metadata) && void 0 !== t ? t : {})[k.MetadataFields.TWITTER_VERIFIED],
        l = null;
      return s.type === Y.PlatformTypes.TWITTER && i && (l = (0, a.jsx)(c.Tooltip, {
        text: W.default.Messages.CONNECTION_VERIFIED_ON_TWITTER,
        children: e => (0, a.jsx)(x.default, {
          ...e,
          className: K.connectionAccountLabelVerified,
          color: d.default.unsafe_rawColors.TWITTER.css,
          children: (0, a.jsx)(v.default, {
            color: d.default.unsafe_rawColors.WHITE_500.css
          })
        })
      })), (0, a.jsxs)("div", {
        className: K.connectionHeader,
        children: [(0, a.jsx)("img", {
          alt: n.name,
          className: K.connectionIcon,
          src: (0, u.isThemeDark)(_) ? n.icon.darkSVG : n.icon.lightSVG
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsx)(c.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            className: K.connectionAccountValue,
            children: (0, a.jsxs)("div", {
              className: K.connectionAccountLabelContainer,
              children: [e.name, l]
            })
          }), (0, a.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: K.connectionAccountLabel,
            children: n.name
          })]
        }), (0, a.jsx)(c.Clickable, {
          className: K.connectionDelete,
          onClick: es,
          "aria-label": W.default.Messages.SERVICE_CONNECTIONS_DISCONNECT,
          focusProps: {
            offset: {
              top: -4,
              left: -4,
              right: -4
            }
          },
          children: (0, a.jsx)(P.default, {
            width: 16,
            height: 16
          })
        })]
      })
    }(T), (t = T).twoWayLink ? null : t.type === Y.PlatformTypes.XBOX ? (0, a.jsx)("div", {
      className: K.upsellWrapper,
      children: (0, a.jsx)(H.XboxTwoWayLinkUpsell, {})
    }) : t.type === Y.PlatformTypes.PLAYSTATION ? (0, a.jsx)("div", {
      className: K.upsellWrapper,
      children: (0, a.jsx)(V.PlayStationTwoWayLinkUpsell, {})
    }) : null, function(e) {
      var t;
      let s = null !== (t = e.metadata) && void 0 !== t ? t : {},
        n = null,
        i = (0, m.getCreatedAtDate)(s[k.MetadataFields.CREATED_AT], N);
      switch (e.type) {
        case Y.PlatformTypes.REDDIT:
          n = (0, C.generateRedditMetadataItems)(s, K.metadataItem);
          break;
        case Y.PlatformTypes.STEAM:
          n = (0, C.generateSteamMetadataItems)(s, K.metadataItem);
          break;
        case Y.PlatformTypes.TWITTER:
          n = (0, C.generateTwitterMetadataItems)(s, K.metadataItem);
          break;
        case Y.PlatformTypes.EBAY:
          n = (0, C.generateEbayMetadataItems)(s, K.metadataItem);
          break;
        case Y.PlatformTypes.PAYPAL:
          n = (0, C.generatePaypalMetadataItems)(s, K.metadataItem);
          break;
        case Y.PlatformTypes.TIKTOK:
          n = (0, C.generateTikTokMetadataItems)(s, K.metadataItem)
      }
      null !== i && (null == n && (n = []), null == n || n.push((0, a.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "interactive-active",
        className: K.connectedAccountVanityMetadataCreatedAt,
        children: W.default.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
          date: i
        })
      }, "member-since")));
      let l = Z.includes(e.id),
        r = W.default.Messages.REFRESH;
      if (null == n || 0 === n.length) {
        if (!0 !== g.default.get(e.type).hasMetadata) return null;
        n = [(0, a.jsx)(U.TextBadge, {
          className: K.connectionMetadataUpsellTag,
          text: W.default.Messages.NEW
        }, "badge"), (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          className: K.connectionMetadataUpsellDescription,
          children: W.default.Messages.CONNECTED_ACCOUNT_ADD_DETAILS_DESCRIPTION.format({
            helpdeskUrl: G.default.getArticleURL(Y.HelpdeskArticles.CONNECTION_DETAILS)
          })
        }, "label")], r = W.default.Messages.CONNECTED_ACCOUNT_ADD_DETAILS
      }
      return l && (r = W.default.Messages.DONE), n.push((0, a.jsx)(c.Button, {
        className: K.metadataRefreshButton,
        color: l ? c.Button.Colors.GREEN : c.Button.Colors.BRAND,
        size: c.Button.Sizes.SMALL,
        submitting: X,
        disabled: l,
        onClick: l ? void 0 : () => {
          q(!0), E.default.refresh(e.type, e.id).finally(() => {
            setTimeout(() => {
              Z.push(e.id), J(Z), q(!1)
            }, 2e3)
          })
        },
        children: r
      }, "refresh-button")), (0, a.jsx)("div", {
        className: K.metadataContainer,
        children: n
      })
    }(T), (s = ee, Y.FRIEND_SYNC_PLATFORM_TYPES.has(T.type) && (l = (0, a.jsx)(c.FormSwitch, {
      className: K.connectionOptionSwitch,
      hideBorder: !0,
      value: O,
      onChange: ei,
      children: (0, a.jsx)(c.Text, {
        variant: "text-sm/semibold",
        children: W.default.Messages.SYNC_FRIENDS
      })
    })), Y.ACTIVITY_PLATFORM_TYPES.has(T.type) && (r = (0, a.jsx)(c.FormSwitch, {
      className: K.connectionOptionSwitch,
      hideBorder: !0,
      value: L,
      onChange: el,
      children: (0, a.jsx)(c.Text, {
        variant: "text-sm/semibold",
        children: W.default.Messages.DISPLAY_ACTIVITY.format({
          platform: s.name
        })
      })
    })), (null === (i = g.default.get(T.type)) || void 0 === i ? void 0 : i.hasMetadata) === !0 && (o = (0, a.jsx)(c.FormSwitch, {
      className: K.connectionOptionSwitch,
      hideBorder: !0,
      value: 1 === M,
      onChange: en,
      disabled: 1 !== R || null == T.metadata,
      children: (0, a.jsx)(c.Text, {
        variant: "text-sm/semibold",
        children: W.default.Messages.DISPLAY_DETAILS_ON_PROFILE
      })
    })), (0, a.jsx)("div", {
      className: K.connectionOptionsWrapper,
      children: (0, a.jsxs)("div", {
        className: K.connectionOptions,
        children: [(0, a.jsx)(c.FormSwitch, {
          className: K.connectionOptionSwitch,
          hideBorder: !0,
          value: 1 === R,
          onChange: ea,
          children: (0, a.jsx)(c.Text, {
            variant: "text-sm/semibold",
            children: W.default.Messages.DISPLAY_ON_PROFILE
          })
        }), o, r, l]
      })
    })), function() {
      if (T.revoked || T.integrations.length > 0) return (0, a.jsx)(c.FormDivider, {
        className: K.connectedAccountSeparator
      })
    }(), T.revoked ? (0, a.jsx)(c.FormItem, {
      className: K.integrationsWrapper,
      children: (0, a.jsx)(c.FormText, {
        className: K.integrationRevoked,
        children: W.default.Messages.CONNECTED_ACCOUNT_REVOKED.format({
          onReconnect: et
        })
      })
    }) : T.integrations.length > 0 ? (0, a.jsxs)(c.FormItem, {
      className: K.integrationsWrapper,
      children: [(0, a.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H5,
        children: (0, a.jsx)(c.Text, {
          variant: "text-xs/semibold",
          children: W.default.Messages.SUB_ENABLED_SERVERS
        })
      }), (0, a.jsx)("div", {
        children: T.integrations.map(e => (0, a.jsx)(z, {
          integration: e
        }, e.id))
      })]
    }) : void 0]
  })
}

function q() {
  return n.useEffect(() => () => {
    (0, O.markDismissibleContentAsDismissed)(o.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION, {
      dismissAction: w.ContentDismissActionType.AUTO
    })
  }, []), (0, a.jsxs)("div", {
    className: K.connectContainer,
    children: [(0, a.jsx)(c.Heading, {
      variant: "heading-md/bold",
      color: "interactive-active",
      className: K.connectHeader,
      children: W.default.Messages.CONNECTIONS_USER_SETTINGS_CONNECT_ACCOUNTS_HEADER
    }), (0, a.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "header-secondary",
      children: W.default.Messages.CONNECTIONS_USER_SETTINGS_CONNECT_ACCOUNTS_DESCRIPTION.format({
        privacyPolicyUrl: Y.MarketingURLs.PRIVACY
      })
    }), (0, a.jsx)(Z, {})]
  })
}

function Z() {
  function e(e) {
    let t = g.default.get(e);
    (0, A.default)({
      platformType: t.type
    }), j.default.track(Y.AnalyticEvents.ACCOUNT_LINK_STEP, {
      previous_step: "desktop connections",
      current_step: "desktop oauth",
      platform_type: t.type
    })
  }

  function t() {
    S.default.dispatch({
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete: e
    })
  }
  let s = (0, f.usePlatforms)(),
    n = (0, c.useRedesignIconContext)().enabled ? 24 : 18;
  return (0, a.jsxs)("div", {
    className: K.connectionsContainer,
    children: [s.slice(0, 10).map(e => (0, a.jsx)(_.default, {
      type: e.type,
      className: K.__invalid_accountButton,
      innerClassName: K.accountButtonInner
    }, e.type)), (0, a.jsx)(c.Tooltip, {
      text: W.default.Messages.CONNECTIONS_VIEW_MORE,
      children: e => {
        let {
          onMouseEnter: s,
          onMouseLeave: i
        } = e;
        return (0, a.jsx)("div", {
          className: l()(K.accountAddWrapper, K.__invalid_accountButton),
          children: (0, a.jsx)(c.FocusRing, {
            children: (0, a.jsx)("button", {
              onMouseEnter: s,
              onMouseLeave: i,
              className: l()(K.accountAddInner, K.accountButtonInner),
              type: "button",
              onClick: t,
              "aria-label": W.default.Messages.ADD_NEW_CONNECTION,
              children: (0, a.jsx)(b.default, {
                height: n,
                width: n,
                "aria-label": W.default.Messages.CONNECTIONS_VIEW_MORE
              })
            })
          })
        })
      }
    })]
  })
}

function J(e) {
  let t, {
    fetching: n,
    accounts: i,
    theme: l,
    locale: r
  } = e;
  return t = n ? (0, a.jsx)(c.Spinner, {
    className: Q.marginTop20,
    type: c.Spinner.Type.SPINNING_CIRCLE
  }) : 0 === i.length ? (0, a.jsxs)(D.default, {
    className: Q.marginTop40,
    theme: l,
    children: [(0, a.jsx)(D.EmptyStateImage, {
      darkSrc: s("703152"),
      lightSrc: s("548617"),
      width: 230,
      height: 220
    }), (0, a.jsx)(D.EmptyStateText, {
      note: W.default.Messages.CONNECTED_ACCOUNTS_NONE,
      children: W.default.Messages.CONNECTED_ACCOUNTS_NONE_TITLE
    })]
  }) : i.filter(e => g.default.isSupported(e.type)).map((e, t) => (0, a.jsx)(X, {
    theme: l,
    account: e,
    locale: r,
    onDisconnect: () => (function(e) {
      let {
        type: t,
        id: s
      } = e;
      E.default.disconnect(t, s)
    })(e)
  }, t)), (0, a.jsx)(c.FormItem, {
    className: K.connectionList,
    children: t
  })
}
t.default = () => {
  let e = (0, r.useStateFromStores)([M.default], () => M.default.hidePersonalInformation),
    t = (0, r.useStateFromStores)([h.default], () => h.default.isFetching()),
    s = (0, r.useStateFromStores)([h.default], () => h.default.getAccounts()),
    i = (0, N.default)();
  (0, r.useStateFromStores)([p.default], () => p.default.getFlattenedGuildIds());
  let l = (0, r.useStateFromStores)([F.default], () => F.default.locale);
  return (n.useEffect(() => {
    E.default.fetch()
  }, []), e) ? (0, a.jsx)(T.default, {}) : (0, a.jsxs)(c.FormSection, {
    className: K.__invalid_connections,
    tag: c.FormTitleTags.H1,
    title: W.default.Messages.CONNECTIONS,
    children: [(0, a.jsx)(q, {}), (0, a.jsx)(J, {
      fetching: t,
      accounts: s,
      theme: i,
      locale: l
    })]
  })
}