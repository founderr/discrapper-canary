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
  D = s("797717"),
  x = s("346656"),
  L = s("465670"),
  P = s("692437"),
  b = s("507957"),
  v = s("626135"),
  U = s("63063"),
  j = s("706454"),
  G = s("349728"),
  F = s("494620"),
  B = s("205266"),
  y = s("216153"),
  V = s("981631"),
  H = s("856651"),
  Y = s("921944"),
  k = s("689938"),
  w = s("220301"),
  W = s("611273");
let K = e => {
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
      joinErrorMessage: "" === h.default.joinErrorMessage(i.id) ? k.default.Messages.ERROR : h.default.joinErrorMessage(i.id),
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
      children: l ? k.default.Messages.JOINING_GUILD : k.default.Messages.JOIN_GUILD
    })
  })), (0, a.jsxs)("div", {
    className: w.integrationWrapper,
    children: [(0, a.jsxs)("div", {
      className: w.integration,
      children: [(0, a.jsx)(x.default, {
        size: x.default.Sizes.SMALL,
        guild: i.guild,
        className: w.guildIcon
      }), (0, a.jsxs)("div", {
        className: w.integrationInner,
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
      className: w.integrationError,
      children: o
    })]
  })
};

function Q(e) {
  var t, s, i;
  let l, r, o, {
      onDisconnect: S,
      account: T,
      theme: _,
      locale: N
    } = e,
    [O, h] = n.useState(T.friendSync),
    [R, p] = n.useState(T.visibility),
    [M, x] = n.useState(T.metadataVisibility),
    [P, v] = n.useState(T.showActivity),
    [j, Y] = n.useState(null),
    [W, Q] = n.useState(null),
    [z, X] = n.useState(!1),
    [q, Z] = n.useState([]),
    J = (0, f.useLegacyPlatformType)(T.type),
    $ = g.default.get(J);
  n.useEffect(() => {
    h(T.friendSync), p(T.visibility), x(T.metadataVisibility), v(T.showActivity)
  }, [T]), n.useEffect(() => {
    !1 !== T.verified && (null != j && (p(j), E.default.setVisibility(T.type, T.id, j), Y(null)), null != W && (x(W), E.default.setMetadataVisibility(T.type, T.id, W), Q(null)))
  }, [T]);

  function ee() {
    (0, A.default)({
      platformType: T.type,
      location: "User Settings"
    })
  }

  function et() {
    let e = g.default.get(T.type),
      t = k.default.Messages.DISCONNECT_ACCOUNT_BODY;
    (0, G.default)(T) && (t = (0, a.jsxs)(a.Fragment, {
      children: [t, (0, a.jsx)(F.default, {
        className: w.infoBox,
        children: k.default.Messages.CONNECTED_ACCOUNT_IS_AUTHORIZED_APP_DISCONNECT_WARNING.format({
          platformName: e.name
        })
      })]
    })), (0, c.openModal)(s => (0, a.jsx)(I.default, {
      title: k.default.Messages.DISCONNECT_ACCOUNT_TITLE.format({
        name: e.name
      }),
      body: t,
      confirmText: k.default.Messages.DISCONNECT_ACCOUNT,
      cancelText: k.default.Messages.CANCEL,
      onConfirm: S,
      ...s
    }))
  }

  function es(e) {
    let {
      verified: t
    } = T, s = e ? 1 : 0;
    if (e && !t) {
      Y(s), (0, A.default)({
        platformType: T.type,
        location: "User Settings"
      });
      return
    }
    p(s), E.default.setVisibility(T.type, T.id, s)
  }

  function ea(e) {
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
    x(s), E.default.setMetadataVisibility(T.type, T.id, s)
  }

  function en(e) {
    h(e), E.default.setFriendSync(T.type, T.id, e)
  }

  function ei(e) {
    v(e), E.default.setShowActivity(T.type, T.id, e)
  }
  return (0, a.jsxs)("div", {
    className: w.connection,
    children: [function(e) {
      var t;
      let s = g.default.get(e.type),
        n = g.default.get(J),
        i = "1" === (null !== (t = e.metadata) && void 0 !== t ? t : {})[H.MetadataFields.TWITTER_VERIFIED],
        l = null;
      return s.type === V.PlatformTypes.TWITTER && i && (l = (0, a.jsx)(c.Tooltip, {
        text: k.default.Messages.CONNECTION_VERIFIED_ON_TWITTER,
        children: e => (0, a.jsx)(D.default, {
          ...e,
          className: w.connectionAccountLabelVerified,
          color: d.default.unsafe_rawColors.TWITTER.css,
          children: (0, a.jsx)(b.default, {
            color: d.default.unsafe_rawColors.WHITE_500.css
          })
        })
      })), (0, a.jsxs)("div", {
        className: w.connectionHeader,
        children: [(0, a.jsx)("img", {
          alt: n.name,
          className: w.connectionIcon,
          src: (0, u.isThemeDark)(_) ? n.icon.darkSVG : n.icon.lightSVG
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsx)(c.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            className: w.connectionAccountValue,
            children: (0, a.jsxs)("div", {
              className: w.connectionAccountLabelContainer,
              children: [e.name, l]
            })
          }), (0, a.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: w.connectionAccountLabel,
            children: n.name
          })]
        }), (0, a.jsx)(c.Clickable, {
          className: w.connectionDelete,
          onClick: et,
          "aria-label": k.default.Messages.SERVICE_CONNECTIONS_DISCONNECT,
          focusProps: {
            offset: {
              top: -4,
              left: -4,
              right: -4
            }
          },
          children: (0, a.jsx)(L.default, {
            width: 16,
            height: 16
          })
        })]
      })
    }(T), (t = T).twoWayLink ? null : t.type === V.PlatformTypes.XBOX ? (0, a.jsx)("div", {
      className: w.upsellWrapper,
      children: (0, a.jsx)(y.XboxTwoWayLinkUpsell, {})
    }) : t.type === V.PlatformTypes.PLAYSTATION ? (0, a.jsx)("div", {
      className: w.upsellWrapper,
      children: (0, a.jsx)(B.PlayStationTwoWayLinkUpsell, {})
    }) : null, function(e) {
      var t;
      let s = null !== (t = e.metadata) && void 0 !== t ? t : {},
        n = null,
        i = (0, m.getCreatedAtDate)(s[H.MetadataFields.CREATED_AT], N);
      switch (e.type) {
        case V.PlatformTypes.REDDIT:
          n = (0, C.generateRedditMetadataItems)(s, w.metadataItem);
          break;
        case V.PlatformTypes.STEAM:
          n = (0, C.generateSteamMetadataItems)(s, w.metadataItem);
          break;
        case V.PlatformTypes.TWITTER:
          n = (0, C.generateTwitterMetadataItems)(s, w.metadataItem);
          break;
        case V.PlatformTypes.EBAY:
          n = (0, C.generateEbayMetadataItems)(s, w.metadataItem);
          break;
        case V.PlatformTypes.PAYPAL:
          n = (0, C.generatePaypalMetadataItems)(s, w.metadataItem);
          break;
        case V.PlatformTypes.TIKTOK:
          n = (0, C.generateTikTokMetadataItems)(s, w.metadataItem)
      }
      null !== i && (null == n && (n = []), null == n || n.push((0, a.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "interactive-active",
        className: w.connectedAccountVanityMetadataCreatedAt,
        children: k.default.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
          date: i
        })
      }, "member-since")));
      let l = q.includes(e.id),
        r = k.default.Messages.REFRESH;
      if (null == n || 0 === n.length) {
        if (!0 !== g.default.get(e.type).hasMetadata) return null;
        n = [(0, a.jsx)(c.TextBadge, {
          className: w.connectionMetadataUpsellTag,
          text: k.default.Messages.NEW
        }, "badge"), (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          className: w.connectionMetadataUpsellDescription,
          children: k.default.Messages.CONNECTED_ACCOUNT_ADD_DETAILS_DESCRIPTION.format({
            helpdeskUrl: U.default.getArticleURL(V.HelpdeskArticles.CONNECTION_DETAILS)
          })
        }, "label")], r = k.default.Messages.CONNECTED_ACCOUNT_ADD_DETAILS
      }
      return l && (r = k.default.Messages.DONE), n.push((0, a.jsx)(c.Button, {
        className: w.metadataRefreshButton,
        color: l ? c.Button.Colors.GREEN : c.Button.Colors.BRAND,
        size: c.Button.Sizes.SMALL,
        submitting: z,
        disabled: l,
        onClick: l ? void 0 : () => {
          X(!0), E.default.refresh(e.type, e.id).finally(() => {
            setTimeout(() => {
              q.push(e.id), Z(q), X(!1)
            }, 2e3)
          })
        },
        children: r
      }, "refresh-button")), (0, a.jsx)("div", {
        className: w.metadataContainer,
        children: n
      })
    }(T), (s = $, V.FRIEND_SYNC_PLATFORM_TYPES.has(T.type) && (l = (0, a.jsx)(c.FormSwitch, {
      className: w.connectionOptionSwitch,
      hideBorder: !0,
      value: O,
      onChange: en,
      children: (0, a.jsx)(c.Text, {
        variant: "text-sm/semibold",
        children: k.default.Messages.SYNC_FRIENDS
      })
    })), V.ACTIVITY_PLATFORM_TYPES.has(T.type) && (r = (0, a.jsx)(c.FormSwitch, {
      className: w.connectionOptionSwitch,
      hideBorder: !0,
      value: P,
      onChange: ei,
      children: (0, a.jsx)(c.Text, {
        variant: "text-sm/semibold",
        children: k.default.Messages.DISPLAY_ACTIVITY.format({
          platform: s.name
        })
      })
    })), (null === (i = g.default.get(T.type)) || void 0 === i ? void 0 : i.hasMetadata) === !0 && (o = (0, a.jsx)(c.FormSwitch, {
      className: w.connectionOptionSwitch,
      hideBorder: !0,
      value: 1 === M,
      onChange: ea,
      disabled: 1 !== R || null == T.metadata,
      children: (0, a.jsx)(c.Text, {
        variant: "text-sm/semibold",
        children: k.default.Messages.DISPLAY_DETAILS_ON_PROFILE
      })
    })), (0, a.jsx)("div", {
      className: w.connectionOptionsWrapper,
      children: (0, a.jsxs)("div", {
        className: w.connectionOptions,
        children: [(0, a.jsx)(c.FormSwitch, {
          className: w.connectionOptionSwitch,
          hideBorder: !0,
          value: 1 === R,
          onChange: es,
          children: (0, a.jsx)(c.Text, {
            variant: "text-sm/semibold",
            children: k.default.Messages.DISPLAY_ON_PROFILE
          })
        }), o, r, l]
      })
    })), function() {
      if (T.revoked || T.integrations.length > 0) return (0, a.jsx)(c.FormDivider, {
        className: w.connectedAccountSeparator
      })
    }(), T.revoked ? (0, a.jsx)(c.FormItem, {
      className: w.integrationsWrapper,
      children: (0, a.jsx)(c.FormText, {
        className: w.integrationRevoked,
        children: k.default.Messages.CONNECTED_ACCOUNT_REVOKED.format({
          onReconnect: ee
        })
      })
    }) : T.integrations.length > 0 ? (0, a.jsxs)(c.FormItem, {
      className: w.integrationsWrapper,
      children: [(0, a.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H5,
        children: (0, a.jsx)(c.Text, {
          variant: "text-xs/semibold",
          children: k.default.Messages.SUB_ENABLED_SERVERS
        })
      }), (0, a.jsx)("div", {
        children: T.integrations.map(e => (0, a.jsx)(K, {
          integration: e
        }, e.id))
      })]
    }) : void 0]
  })
}

function z() {
  return n.useEffect(() => () => {
    (0, O.markDismissibleContentAsDismissed)(o.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION, {
      dismissAction: Y.ContentDismissActionType.AUTO
    })
  }, []), (0, a.jsxs)("div", {
    className: w.connectContainer,
    children: [(0, a.jsx)(c.Heading, {
      variant: "heading-md/bold",
      color: "interactive-active",
      className: w.connectHeader,
      children: k.default.Messages.CONNECTIONS_USER_SETTINGS_CONNECT_ACCOUNTS_HEADER
    }), (0, a.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "header-secondary",
      children: k.default.Messages.CONNECTIONS_USER_SETTINGS_CONNECT_ACCOUNTS_DESCRIPTION.format({
        privacyPolicyUrl: V.MarketingURLs.PRIVACY
      })
    }), (0, a.jsx)(X, {})]
  })
}

function X() {
  function e(e) {
    let t = g.default.get(e);
    (0, A.default)({
      platformType: t.type
    }), v.default.track(V.AnalyticEvents.ACCOUNT_LINK_STEP, {
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
    className: w.connectionsContainer,
    children: [s.slice(0, 10).map(e => (0, a.jsx)(_.default, {
      type: e.type,
      className: w.__invalid_accountButton,
      innerClassName: w.accountButtonInner
    }, e.type)), (0, a.jsx)(c.Tooltip, {
      text: k.default.Messages.CONNECTIONS_VIEW_MORE,
      children: e => {
        let {
          onMouseEnter: s,
          onMouseLeave: i
        } = e;
        return (0, a.jsx)("div", {
          className: l()(w.accountAddWrapper, w.__invalid_accountButton),
          children: (0, a.jsx)(c.FocusRing, {
            children: (0, a.jsx)("button", {
              onMouseEnter: s,
              onMouseLeave: i,
              className: l()(w.accountAddInner, w.accountButtonInner),
              type: "button",
              onClick: t,
              "aria-label": k.default.Messages.ADD_NEW_CONNECTION,
              children: (0, a.jsx)(P.default, {
                height: n,
                width: n,
                "aria-label": k.default.Messages.CONNECTIONS_VIEW_MORE
              })
            })
          })
        })
      }
    })]
  })
}

function q(e) {
  let t, {
    fetching: n,
    accounts: i,
    theme: l,
    locale: r
  } = e;
  return t = n ? (0, a.jsx)(c.Spinner, {
    className: W.marginTop20,
    type: c.Spinner.Type.SPINNING_CIRCLE
  }) : 0 === i.length ? (0, a.jsxs)(c.EmptyState, {
    className: W.marginTop40,
    theme: l,
    children: [(0, a.jsx)(c.EmptyStateImage, {
      darkSrc: s("703152"),
      lightSrc: s("548617"),
      width: 230,
      height: 220
    }), (0, a.jsx)(c.EmptyStateText, {
      note: k.default.Messages.CONNECTED_ACCOUNTS_NONE,
      children: k.default.Messages.CONNECTED_ACCOUNTS_NONE_TITLE
    })]
  }) : i.filter(e => g.default.isSupported(e.type)).map((e, t) => (0, a.jsx)(Q, {
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
    className: w.connectionList,
    children: t
  })
}
t.default = () => {
  let e = (0, r.useStateFromStores)([M.default], () => M.default.hidePersonalInformation),
    t = (0, r.useStateFromStores)([h.default], () => h.default.isFetching()),
    s = (0, r.useStateFromStores)([h.default], () => h.default.getAccounts()),
    i = (0, N.default)();
  (0, r.useStateFromStores)([p.default], () => p.default.getFlattenedGuildIds());
  let l = (0, r.useStateFromStores)([j.default], () => j.default.locale);
  return (n.useEffect(() => {
    E.default.fetch()
  }, []), e) ? (0, a.jsx)(T.default, {}) : (0, a.jsxs)(c.FormSection, {
    className: w.__invalid_connections,
    tag: c.FormTitleTags.H1,
    title: k.default.Messages.CONNECTIONS,
    children: [(0, a.jsx)(z, {}), (0, a.jsx)(q, {
      fetching: t,
      accounts: s,
      theme: i,
      locale: l
    })]
  })
}