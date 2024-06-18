"use strict";
n.d(t, {
  q: function() {
    return W
  }
}), n(47120), n(653041), n(773603);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(704215),
  u = n(692547),
  _ = n(780384),
  c = n(481060),
  d = n(570140),
  E = n(457330),
  I = n(497321),
  T = n(23551),
  h = n(468026),
  S = n(410030),
  f = n(726542),
  N = n(122021),
  A = n(275759),
  m = n(231757),
  O = n(323588),
  R = n(605236),
  p = n(553795),
  g = n(430824),
  C = n(771845),
  v = n(246946),
  L = n(797717),
  D = n(346656),
  M = n(626135),
  P = n(63063),
  y = n(706454),
  U = n(349728),
  b = n(494620),
  G = n(205266),
  w = n(216153),
  k = n(981631),
  B = n(856651),
  x = n(921944),
  V = n(689938),
  Z = n(417276),
  H = n(331651);
let F = e => {
  var t, n;
  let r, {
      integration: s
    } = e,
    {
      isJoining: o,
      joinErrorMessage: l,
      showJoinErrorMessage: u
    } = (0, a.cj)([p.Z], () => ({
      isJoining: p.Z.isJoining(s.id),
      joinErrorMessage: "" === p.Z.joinErrorMessage(s.id) ? V.Z.Messages.ERROR : p.Z.joinErrorMessage(s.id),
      showJoinErrorMessage: void 0 !== p.Z.joinErrorMessage(s.id)
    }), [s.id]),
    _ = null != (0, a.e7)([g.Z], () => g.Z.getGuild(s.guild.id), [s.guild.id]);
  return !_ && (r = (0, i.jsx)(c.Button, {
    size: c.ButtonSizes.SMALL,
    onClick: function() {
      E.Z.joinServer(s.id, () => {})
    },
    disabled: o,
    children: (0, i.jsx)("span", {
      children: o ? V.Z.Messages.JOINING_GUILD : V.Z.Messages.JOIN_GUILD
    })
  })), (0, i.jsxs)("div", {
    className: Z.integrationWrapper,
    children: [(0, i.jsxs)("div", {
      className: Z.integration,
      children: [(0, i.jsx)(D.Z, {
        size: D.Z.Sizes.SMALL,
        guild: s.guild,
        className: Z.guildIcon
      }), (0, i.jsxs)("div", {
        className: Z.integrationInner,
        children: [(0, i.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: s.guild.toString()
        }), (0, i.jsx)(c.Anchor, {
          href: null === (n = f.Z.get(s.type)) || void 0 === n ? void 0 : null === (t = n.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(n, s.account),
          children: (0, i.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: s.account.name
          })
        })]
      }), r]
    }), u && (0, i.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: Z.integrationError,
      children: l
    })]
  })
};

function Y(e) {
  var t, n, s;
  let o, a, l, {
      onDisconnect: d,
      account: I,
      theme: T,
      locale: S
    } = e,
    [R, p] = r.useState(I.friendSync),
    [g, C] = r.useState(I.visibility),
    [v, D] = r.useState(I.metadataVisibility),
    [M, y] = r.useState(I.showActivity),
    [x, H] = r.useState(null),
    [Y, j] = r.useState(null),
    [W, K] = r.useState(!1),
    [z, q] = r.useState([]),
    X = (0, N.rR)(I.type),
    Q = f.Z.get(X);
  r.useEffect(() => {
    p(I.friendSync), C(I.visibility), D(I.metadataVisibility), y(I.showActivity)
  }, [I]), r.useEffect(() => {
    if (!1 !== I.verified) null != x && (C(x), E.Z.setVisibility(I.type, I.id, x), H(null)), null != Y && (D(Y), E.Z.setMetadataVisibility(I.type, I.id, Y), j(null))
  }, [I]);

  function J() {
    (0, m.Z)({
      platformType: I.type,
      location: "User Settings"
    })
  }

  function $() {
    let e = f.Z.get(I.type),
      t = V.Z.Messages.DISCONNECT_ACCOUNT_BODY;
    (0, U.Z)(I) && (t = (0, i.jsxs)(i.Fragment, {
      children: [t, (0, i.jsx)(b.Z, {
        className: Z.infoBox,
        children: V.Z.Messages.CONNECTED_ACCOUNT_IS_AUTHORIZED_APP_DISCONNECT_WARNING.format({
          platformName: e.name
        })
      })]
    })), (0, c.openModal)(n => (0, i.jsx)(h.default, {
      title: V.Z.Messages.DISCONNECT_ACCOUNT_TITLE.format({
        name: e.name
      }),
      body: t,
      confirmText: V.Z.Messages.DISCONNECT_ACCOUNT,
      cancelText: V.Z.Messages.CANCEL,
      onConfirm: d,
      ...n
    }))
  }

  function ee(e) {
    let {
      verified: t
    } = I, n = e ? 1 : 0;
    if (e && !t) {
      H(n), (0, m.Z)({
        platformType: I.type,
        location: "User Settings"
      });
      return
    }
    C(n), E.Z.setVisibility(I.type, I.id, n)
  }

  function et(e) {
    let {
      verified: t
    } = I, n = e ? 1 : 0;
    if (e && !t) {
      j(n), (0, m.Z)({
        platformType: I.type,
        location: "User Settings"
      });
      return
    }
    D(n), E.Z.setMetadataVisibility(I.type, I.id, n)
  }

  function en(e) {
    p(e), E.Z.setFriendSync(I.type, I.id, e)
  }

  function ei(e) {
    y(e), E.Z.setShowActivity(I.type, I.id, e)
  }
  return (0, i.jsxs)("div", {
    className: Z.connection,
    children: [function(e) {
      var t;
      let n = f.Z.get(e.type),
        r = f.Z.get(X),
        s = "1" === (null !== (t = e.metadata) && void 0 !== t ? t : {})[B.PC.TWITTER_VERIFIED],
        o = null;
      return n.type === k.ABu.TWITTER && s && (o = (0, i.jsx)(c.Tooltip, {
        text: V.Z.Messages.CONNECTION_VERIFIED_ON_TWITTER,
        children: e => (0, i.jsx)(L.Z, {
          ...e,
          className: Z.connectionAccountLabelVerified,
          color: u.Z.unsafe_rawColors.TWITTER.css,
          children: (0, i.jsx)(c.CheckmarkSmallIcon, {
            size: "xs",
            color: u.Z.unsafe_rawColors.WHITE_500.css
          })
        })
      })), (0, i.jsxs)("div", {
        className: Z.connectionHeader,
        children: [(0, i.jsx)("img", {
          alt: r.name,
          className: Z.connectionIcon,
          src: (0, _.wj)(T) ? r.icon.darkSVG : r.icon.lightSVG
        }), (0, i.jsxs)("div", {
          children: [(0, i.jsx)(c.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            className: Z.connectionAccountValue,
            children: (0, i.jsxs)("div", {
              className: Z.connectionAccountLabelContainer,
              children: [e.name, o]
            })
          }), (0, i.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: Z.connectionAccountLabel,
            children: r.name
          })]
        }), (0, i.jsx)(c.Clickable, {
          className: Z.connectionDelete,
          onClick: $,
          "aria-label": V.Z.Messages.SERVICE_CONNECTIONS_DISCONNECT,
          focusProps: {
            offset: {
              top: -4,
              left: -4,
              right: -4
            }
          },
          children: (0, i.jsx)(c.CloseSmallIcon, {
            size: "xs",
            color: "currentColor"
          })
        })]
      })
    }(I), (t = I).twoWayLink ? null : t.type === k.ABu.XBOX ? (0, i.jsx)("div", {
      className: Z.upsellWrapper,
      children: (0, i.jsx)(w.Y, {})
    }) : t.type === k.ABu.PLAYSTATION ? (0, i.jsx)("div", {
      className: Z.upsellWrapper,
      children: (0, i.jsx)(G.t, {})
    }) : null, function(e) {
      var t;
      let n = null !== (t = e.metadata) && void 0 !== t ? t : {},
        r = null,
        s = (0, A.FI)(n[B.PC.CREATED_AT], S);
      switch (e.type) {
        case k.ABu.REDDIT:
          r = (0, O.oP)(n, Z.metadataItem);
          break;
        case k.ABu.STEAM:
          r = (0, O.Dq)(n, Z.metadataItem);
          break;
        case k.ABu.TWITTER:
          r = (0, O.rJ)(n, Z.metadataItem);
          break;
        case k.ABu.EBAY:
          r = (0, O.ul)(n, Z.metadataItem);
          break;
        case k.ABu.PAYPAL:
          r = (0, O.li)(n, Z.metadataItem);
          break;
        case k.ABu.TIKTOK:
          r = (0, O.hf)(n, Z.metadataItem)
      }
      null !== s && (null == r && (r = []), null == r || r.push((0, i.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "interactive-active",
        className: Z.connectedAccountVanityMetadataCreatedAt,
        children: V.Z.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
          date: s
        })
      }, "member-since")));
      let o = z.includes(e.id),
        a = V.Z.Messages.REFRESH;
      if (null == r || 0 === r.length) {
        if (!0 !== f.Z.get(e.type).hasMetadata) return null;
        r = [(0, i.jsx)(c.TextBadge, {
          className: Z.connectionMetadataUpsellTag,
          text: V.Z.Messages.NEW
        }, "badge"), (0, i.jsx)(c.Text, {
          variant: "text-xs/normal",
          className: Z.connectionMetadataUpsellDescription,
          children: V.Z.Messages.CONNECTED_ACCOUNT_ADD_DETAILS_DESCRIPTION.format({
            helpdeskUrl: P.Z.getArticleURL(k.BhN.CONNECTION_DETAILS)
          })
        }, "label")], a = V.Z.Messages.CONNECTED_ACCOUNT_ADD_DETAILS
      }
      return o && (a = V.Z.Messages.DONE), r.push((0, i.jsx)(c.Button, {
        className: Z.metadataRefreshButton,
        color: o ? c.Button.Colors.GREEN : c.Button.Colors.BRAND,
        size: c.Button.Sizes.SMALL,
        submitting: W,
        disabled: o,
        onClick: o ? void 0 : () => {
          K(!0), E.Z.refresh(e.type, e.id).finally(() => {
            setTimeout(() => {
              z.push(e.id), q(z), K(!1)
            }, 2e3)
          })
        },
        children: a
      }, "refresh-button")), (0, i.jsx)("div", {
        className: Z.metadataContainer,
        children: r
      })
    }(I), (n = Q, k.BFP.has(I.type) && (o = (0, i.jsx)(c.FormSwitch, {
      className: Z.connectionOptionSwitch,
      hideBorder: !0,
      value: R,
      onChange: en,
      children: (0, i.jsx)(c.Text, {
        variant: "text-sm/semibold",
        children: V.Z.Messages.SYNC_FRIENDS
      })
    })), k.vbS.has(I.type) && (a = (0, i.jsx)(c.FormSwitch, {
      className: Z.connectionOptionSwitch,
      hideBorder: !0,
      value: M,
      onChange: ei,
      children: (0, i.jsx)(c.Text, {
        variant: "text-sm/semibold",
        children: V.Z.Messages.DISPLAY_ACTIVITY.format({
          platform: n.name
        })
      })
    })), (null === (s = f.Z.get(I.type)) || void 0 === s ? void 0 : s.hasMetadata) === !0 && (l = (0, i.jsx)(c.FormSwitch, {
      className: Z.connectionOptionSwitch,
      hideBorder: !0,
      value: 1 === v,
      onChange: et,
      disabled: 1 !== g || null == I.metadata,
      children: (0, i.jsx)(c.Text, {
        variant: "text-sm/semibold",
        children: V.Z.Messages.DISPLAY_DETAILS_ON_PROFILE
      })
    })), (0, i.jsx)("div", {
      className: Z.connectionOptionsWrapper,
      children: (0, i.jsxs)("div", {
        className: Z.connectionOptions,
        children: [(0, i.jsx)(c.FormSwitch, {
          className: Z.connectionOptionSwitch,
          hideBorder: !0,
          value: 1 === g,
          onChange: ee,
          children: (0, i.jsx)(c.Text, {
            variant: "text-sm/semibold",
            children: V.Z.Messages.DISPLAY_ON_PROFILE
          })
        }), l, a, o]
      })
    })), function() {
      if (I.revoked || I.integrations.length > 0) return (0, i.jsx)(c.FormDivider, {
        className: Z.connectedAccountSeparator
      })
    }(), I.revoked ? (0, i.jsx)(c.FormItem, {
      className: Z.integrationsWrapper,
      children: (0, i.jsx)(c.FormText, {
        className: Z.integrationRevoked,
        children: V.Z.Messages.CONNECTED_ACCOUNT_REVOKED.format({
          onReconnect: J
        })
      })
    }) : I.integrations.length > 0 ? (0, i.jsxs)(c.FormItem, {
      className: Z.integrationsWrapper,
      children: [(0, i.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H5,
        children: (0, i.jsx)(c.Text, {
          variant: "text-xs/semibold",
          children: V.Z.Messages.SUB_ENABLED_SERVERS
        })
      }), (0, i.jsx)("div", {
        children: I.integrations.map(e => (0, i.jsx)(F, {
          integration: e
        }, e.id))
      })]
    }) : void 0]
  })
}

function j() {
  return r.useEffect(() => () => {
    (0, R.EW)(l.z.NEW_CRUNCHYROLL_CONNECTION, {
      dismissAction: x.L.AUTO
    })
  }, []), (0, i.jsxs)("div", {
    className: Z.connectContainer,
    children: [(0, i.jsx)(c.Heading, {
      variant: "heading-md/bold",
      color: "interactive-active",
      className: Z.connectHeader,
      children: V.Z.Messages.CONNECTIONS_USER_SETTINGS_CONNECT_ACCOUNTS_HEADER
    }), (0, i.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "header-secondary",
      children: V.Z.Messages.CONNECTIONS_USER_SETTINGS_CONNECT_ACCOUNTS_DESCRIPTION.format({
        privacyPolicyUrl: k.EYA.PRIVACY
      })
    }), (0, i.jsx)(K, {})]
  })
}

function W(e) {
  let t = f.Z.get(e);
  (0, m.Z)({
    platformType: t.type
  }), M.default.track(k.rMx.ACCOUNT_LINK_STEP, {
    previous_step: "desktop connections",
    current_step: "desktop oauth",
    platform_type: t.type
  })
}

function K() {
  function e() {
    d.Z.dispatch({
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete: W
    })
  }
  let t = (0, N.fq)(),
    n = (0, c.useRedesignIconContext)().enabled ? 24 : 18;
  return (0, i.jsxs)("div", {
    className: Z.connectionsContainer,
    children: [t.slice(0, 10).map(e => (0, i.jsx)(T.Z, {
      type: e.type,
      className: Z.__invalid_accountButton,
      innerClassName: Z.accountButtonInner
    }, e.type)), (0, i.jsx)(c.Tooltip, {
      text: V.Z.Messages.CONNECTIONS_VIEW_MORE,
      children: t => {
        let {
          onMouseEnter: r,
          onMouseLeave: s
        } = t;
        return (0, i.jsx)("div", {
          className: o()(Z.accountAddWrapper, Z.__invalid_accountButton),
          children: (0, i.jsx)(c.FocusRing, {
            children: (0, i.jsx)("button", {
              onMouseEnter: r,
              onMouseLeave: s,
              className: o()(Z.accountAddInner, Z.accountButtonInner),
              type: "button",
              onClick: e,
              "aria-label": V.Z.Messages.ADD_NEW_CONNECTION,
              children: (0, i.jsx)(c.ChevronSmallRightIcon, {
                size: "custom",
                color: "currentColor",
                height: n,
                width: n,
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
  let t, {
    fetching: r,
    accounts: s,
    theme: o,
    locale: a
  } = e;
  return t = r ? (0, i.jsx)(c.Spinner, {
    className: H.marginTop20,
    type: c.Spinner.Type.SPINNING_CIRCLE
  }) : 0 === s.length ? (0, i.jsxs)(c.EmptyState, {
    className: H.marginTop40,
    theme: o,
    children: [(0, i.jsx)(c.EmptyStateImage, {
      darkSrc: n(703152),
      lightSrc: n(548617),
      width: 230,
      height: 220
    }), (0, i.jsx)(c.EmptyStateText, {
      note: V.Z.Messages.CONNECTED_ACCOUNTS_NONE,
      children: V.Z.Messages.CONNECTED_ACCOUNTS_NONE_TITLE
    })]
  }) : s.filter(e => f.Z.isSupported(e.type)).map((e, t) => (0, i.jsx)(Y, {
    theme: o,
    account: e,
    locale: a,
    onDisconnect: () => (function(e) {
      let {
        type: t,
        id: n
      } = e;
      E.Z.disconnect(t, n)
    })(e)
  }, t)), (0, i.jsx)(c.FormItem, {
    className: Z.connectionList,
    children: t
  })
}
t.Z = () => {
  let e = (0, a.e7)([v.Z], () => v.Z.hidePersonalInformation),
    t = (0, a.e7)([p.Z], () => p.Z.isFetching()),
    n = (0, a.e7)([p.Z], () => p.Z.getAccounts()),
    s = (0, S.ZP)();
  (0, a.e7)([C.ZP], () => C.ZP.getFlattenedGuildIds());
  let o = (0, a.e7)([y.default], () => y.default.locale);
  return (r.useEffect(() => {
    E.Z.fetch()
  }, []), e) ? (0, i.jsx)(I.Z, {}) : (0, i.jsxs)(c.FormSection, {
    className: Z.__invalid_connections,
    tag: c.FormTitleTags.H1,
    title: V.Z.Messages.CONNECTIONS,
    children: [(0, i.jsx)(j, {}), (0, i.jsx)(z, {
      fetching: t,
      accounts: n,
      theme: s,
      locale: o
    })]
  })
}