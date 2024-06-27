t(47120), t(653041), t(773603);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(442837),
  l = t(704215),
  c = t(692547),
  d = t(780384),
  _ = t(481060),
  E = t(570140),
  u = t(457330),
  T = t(497321),
  S = t(23551),
  I = t(468026),
  N = t(410030),
  C = t(726542),
  m = t(122021),
  A = t(275759),
  g = t(231757),
  O = t(323588),
  h = t(605236),
  p = t(553795),
  R = t(430824),
  x = t(771845),
  M = t(246946),
  D = t(797717),
  f = t(346656),
  L = t(626135),
  P = t(63063),
  Z = t(706454),
  v = t(349728),
  b = t(494620),
  j = t(205266),
  B = t(216153),
  U = t(981631),
  G = t(856651),
  F = t(921944),
  V = t(689938),
  y = t(417276),
  Y = t(331651);
let H = e => {
  var s, t;
  let a, {
      integration: i
    } = e,
    {
      isJoining: r,
      joinErrorMessage: l,
      showJoinErrorMessage: c
    } = (0, o.cj)([p.Z], () => ({
      isJoining: p.Z.isJoining(i.id),
      joinErrorMessage: "" === p.Z.joinErrorMessage(i.id) ? V.Z.Messages.ERROR : p.Z.joinErrorMessage(i.id),
      showJoinErrorMessage: void 0 !== p.Z.joinErrorMessage(i.id)
    }), [i.id]),
    d = null != (0, o.e7)([R.Z], () => R.Z.getGuild(i.guild.id), [i.guild.id]);
  return !d && (a = (0, n.jsx)(_.Button, {
    size: _.ButtonSizes.SMALL,
    onClick: function() {
      u.Z.joinServer(i.id, () => {})
    },
    disabled: r,
    children: (0, n.jsx)("span", {
      children: r ? V.Z.Messages.JOINING_GUILD : V.Z.Messages.JOIN_GUILD
    })
  })), (0, n.jsxs)("div", {
    className: y.integrationWrapper,
    children: [(0, n.jsxs)("div", {
      className: y.integration,
      children: [(0, n.jsx)(f.Z, {
        size: f.Z.Sizes.SMALL,
        guild: i.guild,
        className: y.guildIcon
      }), (0, n.jsxs)("div", {
        className: y.integrationInner,
        children: [(0, n.jsx)(_.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: i.guild.toString()
        }), (0, n.jsx)(_.Anchor, {
          href: null === (t = C.Z.get(i.type)) || void 0 === t ? void 0 : null === (s = t.getPlatformUserUrl) || void 0 === s ? void 0 : s.call(t, i.account),
          children: (0, n.jsx)(_.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: i.account.name
          })
        })]
      }), a]
    }), c && (0, n.jsx)(_.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: y.integrationError,
      children: l
    })]
  })
};

function k(e) {
  var s, t, i;
  let r, o, l, {
      onDisconnect: E,
      account: T,
      theme: S,
      locale: N
    } = e,
    [h, p] = a.useState(T.friendSync),
    [R, x] = a.useState(T.visibility),
    [M, f] = a.useState(T.metadataVisibility),
    [L, Z] = a.useState(T.showActivity),
    [F, Y] = a.useState(null),
    [k, w] = a.useState(null),
    [W, K] = a.useState(!1),
    [z, Q] = a.useState([]),
    X = (0, m.rR)(T.type),
    q = C.Z.get(X);
  a.useEffect(() => {
    p(T.friendSync), x(T.visibility), f(T.metadataVisibility), Z(T.showActivity)
  }, [T]), a.useEffect(() => {
    if (!1 !== T.verified) null != F && (x(F), u.Z.setVisibility(T.type, T.id, F), Y(null)), null != k && (f(k), u.Z.setMetadataVisibility(T.type, T.id, k), w(null))
  }, [T]);

  function J() {
    (0, g.Z)({
      platformType: T.type,
      location: "User Settings"
    })
  }

  function $() {
    let e = C.Z.get(T.type),
      s = V.Z.Messages.DISCONNECT_ACCOUNT_BODY;
    (0, v.Z)(T) && (s = (0, n.jsxs)(n.Fragment, {
      children: [s, (0, n.jsx)(b.Z, {
        className: y.infoBox,
        children: V.Z.Messages.CONNECTED_ACCOUNT_IS_AUTHORIZED_APP_DISCONNECT_WARNING.format({
          platformName: e.name
        })
      })]
    })), (0, _.openModal)(t => (0, n.jsx)(I.default, {
      title: V.Z.Messages.DISCONNECT_ACCOUNT_TITLE.format({
        name: e.name
      }),
      body: s,
      confirmText: V.Z.Messages.DISCONNECT_ACCOUNT,
      cancelText: V.Z.Messages.CANCEL,
      onConfirm: E,
      ...t
    }))
  }

  function ee(e) {
    let {
      verified: s
    } = T, t = e ? 1 : 0;
    if (e && !s) {
      Y(t), (0, g.Z)({
        platformType: T.type,
        location: "User Settings"
      });
      return
    }
    x(t), u.Z.setVisibility(T.type, T.id, t)
  }

  function es(e) {
    let {
      verified: s
    } = T, t = e ? 1 : 0;
    if (e && !s) {
      w(t), (0, g.Z)({
        platformType: T.type,
        location: "User Settings"
      });
      return
    }
    f(t), u.Z.setMetadataVisibility(T.type, T.id, t)
  }

  function et(e) {
    p(e), u.Z.setFriendSync(T.type, T.id, e)
  }

  function en(e) {
    Z(e), u.Z.setShowActivity(T.type, T.id, e)
  }
  return (0, n.jsxs)("div", {
    className: y.connection,
    children: [function(e) {
      var s;
      let t = C.Z.get(e.type),
        a = C.Z.get(X),
        i = "1" === (null !== (s = e.metadata) && void 0 !== s ? s : {})[G.PC.TWITTER_VERIFIED],
        r = null;
      return t.type === U.ABu.TWITTER && i && (r = (0, n.jsx)(_.Tooltip, {
        text: V.Z.Messages.CONNECTION_VERIFIED_ON_TWITTER,
        children: e => (0, n.jsx)(D.Z, {
          ...e,
          className: y.connectionAccountLabelVerified,
          color: c.Z.unsafe_rawColors.TWITTER.css,
          children: (0, n.jsx)(_.CheckmarkSmallIcon, {
            size: "xs",
            color: c.Z.unsafe_rawColors.WHITE_500.css
          })
        })
      })), (0, n.jsxs)("div", {
        className: y.connectionHeader,
        children: [(0, n.jsx)("img", {
          alt: a.name,
          className: y.connectionIcon,
          src: (0, d.wj)(S) ? a.icon.darkSVG : a.icon.lightSVG
        }), (0, n.jsxs)("div", {
          children: [(0, n.jsx)(_.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            className: y.connectionAccountValue,
            children: (0, n.jsxs)("div", {
              className: y.connectionAccountLabelContainer,
              children: [e.name, r]
            })
          }), (0, n.jsx)(_.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: y.connectionAccountLabel,
            children: a.name
          })]
        }), (0, n.jsx)(_.Clickable, {
          className: y.connectionDelete,
          onClick: $,
          "aria-label": V.Z.Messages.SERVICE_CONNECTIONS_DISCONNECT,
          focusProps: {
            offset: {
              top: -4,
              left: -4,
              right: -4
            }
          },
          children: (0, n.jsx)(_.CloseSmallIcon, {
            size: "xs",
            color: "currentColor"
          })
        })]
      })
    }(T), (s = T).twoWayLink ? null : s.type === U.ABu.XBOX ? (0, n.jsx)("div", {
      className: y.upsellWrapper,
      children: (0, n.jsx)(B.Y, {})
    }) : s.type === U.ABu.PLAYSTATION ? (0, n.jsx)("div", {
      className: y.upsellWrapper,
      children: (0, n.jsx)(j.t, {})
    }) : null, function(e) {
      var s;
      let t = null !== (s = e.metadata) && void 0 !== s ? s : {},
        a = null,
        i = (0, A.FI)(t[G.PC.CREATED_AT], N);
      switch (e.type) {
        case U.ABu.REDDIT:
          a = (0, O.oP)(t, y.metadataItem);
          break;
        case U.ABu.STEAM:
          a = (0, O.Dq)(t, y.metadataItem);
          break;
        case U.ABu.TWITTER:
          a = (0, O.rJ)(t, y.metadataItem);
          break;
        case U.ABu.EBAY:
          a = (0, O.ul)(t, y.metadataItem);
          break;
        case U.ABu.PAYPAL:
          a = (0, O.li)(t, y.metadataItem);
          break;
        case U.ABu.TIKTOK:
          a = (0, O.hf)(t, y.metadataItem)
      }
      null !== i && (null == a && (a = []), null == a || a.push((0, n.jsx)(_.Text, {
        variant: "text-xs/normal",
        color: "interactive-active",
        className: y.connectedAccountVanityMetadataCreatedAt,
        children: V.Z.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
          date: i
        })
      }, "member-since")));
      let r = z.includes(e.id),
        o = V.Z.Messages.REFRESH;
      if (null == a || 0 === a.length) {
        if (!0 !== C.Z.get(e.type).hasMetadata) return null;
        a = [(0, n.jsx)(_.TextBadge, {
          className: y.connectionMetadataUpsellTag,
          text: V.Z.Messages.NEW
        }, "badge"), (0, n.jsx)(_.Text, {
          variant: "text-xs/normal",
          className: y.connectionMetadataUpsellDescription,
          children: V.Z.Messages.CONNECTED_ACCOUNT_ADD_DETAILS_DESCRIPTION.format({
            helpdeskUrl: P.Z.getArticleURL(U.BhN.CONNECTION_DETAILS)
          })
        }, "label")], o = V.Z.Messages.CONNECTED_ACCOUNT_ADD_DETAILS
      }
      return r && (o = V.Z.Messages.DONE), a.push((0, n.jsx)(_.Button, {
        className: y.metadataRefreshButton,
        color: r ? _.Button.Colors.GREEN : _.Button.Colors.BRAND,
        size: _.Button.Sizes.SMALL,
        submitting: W,
        disabled: r,
        onClick: r ? void 0 : () => {
          K(!0), u.Z.refresh(e.type, e.id).finally(() => {
            setTimeout(() => {
              z.push(e.id), Q(z), K(!1)
            }, 2e3)
          })
        },
        children: o
      }, "refresh-button")), (0, n.jsx)("div", {
        className: y.metadataContainer,
        children: a
      })
    }(T), (t = q, U.BFP.has(T.type) && (r = (0, n.jsx)(_.FormSwitch, {
      className: y.connectionOptionSwitch,
      hideBorder: !0,
      value: h,
      onChange: et,
      children: (0, n.jsx)(_.Text, {
        variant: "text-sm/semibold",
        children: V.Z.Messages.SYNC_FRIENDS
      })
    })), U.vbS.has(T.type) && (o = (0, n.jsx)(_.FormSwitch, {
      className: y.connectionOptionSwitch,
      hideBorder: !0,
      value: L,
      onChange: en,
      children: (0, n.jsx)(_.Text, {
        variant: "text-sm/semibold",
        children: V.Z.Messages.DISPLAY_ACTIVITY.format({
          platform: t.name
        })
      })
    })), (null === (i = C.Z.get(T.type)) || void 0 === i ? void 0 : i.hasMetadata) === !0 && (l = (0, n.jsx)(_.FormSwitch, {
      className: y.connectionOptionSwitch,
      hideBorder: !0,
      value: 1 === M,
      onChange: es,
      disabled: 1 !== R || null == T.metadata,
      children: (0, n.jsx)(_.Text, {
        variant: "text-sm/semibold",
        children: V.Z.Messages.DISPLAY_DETAILS_ON_PROFILE
      })
    })), (0, n.jsx)("div", {
      className: y.connectionOptionsWrapper,
      children: (0, n.jsxs)("div", {
        className: y.connectionOptions,
        children: [(0, n.jsx)(_.FormSwitch, {
          className: y.connectionOptionSwitch,
          hideBorder: !0,
          value: 1 === R,
          onChange: ee,
          children: (0, n.jsx)(_.Text, {
            variant: "text-sm/semibold",
            children: V.Z.Messages.DISPLAY_ON_PROFILE
          })
        }), l, o, r]
      })
    })), function() {
      if (T.revoked || T.integrations.length > 0) return (0, n.jsx)(_.FormDivider, {
        className: y.connectedAccountSeparator
      })
    }(), T.revoked ? (0, n.jsx)(_.FormItem, {
      className: y.integrationsWrapper,
      children: (0, n.jsx)(_.FormText, {
        className: y.integrationRevoked,
        children: V.Z.Messages.CONNECTED_ACCOUNT_REVOKED.format({
          onReconnect: J
        })
      })
    }) : T.integrations.length > 0 ? (0, n.jsxs)(_.FormItem, {
      className: y.integrationsWrapper,
      children: [(0, n.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H5,
        children: (0, n.jsx)(_.Text, {
          variant: "text-xs/semibold",
          children: V.Z.Messages.SUB_ENABLED_SERVERS
        })
      }), (0, n.jsx)("div", {
        children: T.integrations.map(e => (0, n.jsx)(H, {
          integration: e
        }, e.id))
      })]
    }) : void 0]
  })
}

function w() {
  return a.useEffect(() => () => {
    (0, h.EW)(l.z.NEW_CRUNCHYROLL_CONNECTION, {
      dismissAction: F.L.AUTO
    })
  }, []), (0, n.jsxs)("div", {
    className: y.connectContainer,
    children: [(0, n.jsx)(_.Heading, {
      variant: "heading-md/bold",
      color: "interactive-active",
      className: y.connectHeader,
      children: V.Z.Messages.CONNECTIONS_USER_SETTINGS_CONNECT_ACCOUNTS_HEADER
    }), (0, n.jsx)(_.Text, {
      variant: "text-xs/normal",
      color: "header-secondary",
      children: V.Z.Messages.CONNECTIONS_USER_SETTINGS_CONNECT_ACCOUNTS_DESCRIPTION.format({
        privacyPolicyUrl: U.EYA.PRIVACY
      })
    }), (0, n.jsx)(K, {})]
  })
}

function W(e) {
  let s = C.Z.get(e);
  (0, g.Z)({
    platformType: s.type
  }), L.default.track(U.rMx.ACCOUNT_LINK_STEP, {
    previous_step: "desktop connections",
    current_step: "desktop oauth",
    platform_type: s.type
  })
}

function K() {
  function e() {
    E.Z.dispatch({
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete: W
    })
  }
  let s = (0, m.fq)(),
    t = (0, _.useRedesignIconContext)().enabled ? 24 : 18;
  return (0, n.jsxs)("div", {
    className: y.connectionsContainer,
    children: [s.slice(0, 10).map(e => (0, n.jsx)(S.Z, {
      type: e.type,
      className: y.__invalid_accountButton,
      innerClassName: y.accountButtonInner
    }, e.type)), (0, n.jsx)(_.Tooltip, {
      text: V.Z.Messages.CONNECTIONS_VIEW_MORE,
      children: s => {
        let {
          onMouseEnter: a,
          onMouseLeave: i
        } = s;
        return (0, n.jsx)("div", {
          className: r()(y.accountAddWrapper, y.__invalid_accountButton),
          children: (0, n.jsx)(_.FocusRing, {
            children: (0, n.jsx)("button", {
              onMouseEnter: a,
              onMouseLeave: i,
              className: r()(y.accountAddInner, y.accountButtonInner),
              type: "button",
              onClick: e,
              "aria-label": V.Z.Messages.ADD_NEW_CONNECTION,
              children: (0, n.jsx)(_.ChevronSmallRightIcon, {
                size: "custom",
                color: "currentColor",
                height: t,
                width: t,
                "aria-label": V.Z.Messages.CONNECTIONS_VIEW_MORE
              })
            })
          })
        })
      }
    })]
  })
}

function z(e) {
  let s, {
    fetching: a,
    accounts: i,
    theme: r,
    locale: o
  } = e;
  return s = a ? (0, n.jsx)(_.Spinner, {
    className: Y.marginTop20,
    type: _.Spinner.Type.SPINNING_CIRCLE
  }) : 0 === i.length ? (0, n.jsxs)(_.EmptyState, {
    className: Y.marginTop40,
    theme: r,
    children: [(0, n.jsx)(_.EmptyStateImage, {
      darkSrc: t(703152),
      lightSrc: t(548617),
      width: 230,
      height: 220
    }), (0, n.jsx)(_.EmptyStateText, {
      note: V.Z.Messages.CONNECTED_ACCOUNTS_NONE,
      children: V.Z.Messages.CONNECTED_ACCOUNTS_NONE_TITLE
    })]
  }) : i.filter(e => C.Z.isSupported(e.type)).map((e, s) => (0, n.jsx)(k, {
    theme: r,
    account: e,
    locale: o,
    onDisconnect: () => (function(e) {
      let {
        type: s,
        id: t
      } = e;
      u.Z.disconnect(s, t)
    })(e)
  }, s)), (0, n.jsx)(_.FormItem, {
    className: y.connectionList,
    children: s
  })
}
s.Z = () => {
  let e = (0, o.e7)([M.Z], () => M.Z.hidePersonalInformation),
    s = (0, o.e7)([p.Z], () => p.Z.isFetching()),
    t = (0, o.e7)([p.Z], () => p.Z.getAccounts()),
    i = (0, N.ZP)();
  (0, o.e7)([x.ZP], () => x.ZP.getFlattenedGuildIds());
  let r = (0, o.e7)([Z.default], () => Z.default.locale);
  return (a.useEffect(() => {
    u.Z.fetch()
  }, []), e) ? (0, n.jsx)(T.Z, {}) : (0, n.jsxs)(_.FormSection, {
    className: y.__invalid_connections,
    tag: _.FormTitleTags.H1,
    title: V.Z.Messages.CONNECTIONS,
    children: [(0, n.jsx)(w, {}), (0, n.jsx)(z, {
      fetching: s,
      accounts: t,
      theme: i,
      locale: r
    })]
  })
}