t.r(n), t.d(n, {
  default: function() {
    return J
  }
}), t(47120), t(536091);
var l, o, a = t(735250),
  s = t(470079),
  i = t(120356),
  c = t.n(i),
  r = t(512722),
  d = t.n(r),
  u = t(392711),
  C = t.n(u),
  N = t(442837),
  _ = t(692547),
  O = t(780384),
  T = t(481060),
  E = t(457330),
  h = t(749210),
  S = t(230711),
  m = t(99690),
  x = t(410030),
  A = t(726542),
  p = t(367907),
  I = t(277800),
  M = t(471445),
  v = t(335191),
  f = t(706454),
  j = t(598077),
  g = t(314897),
  L = t(592125),
  y = t(553795),
  Z = t(271383),
  R = t(496675),
  U = t(467679),
  D = t(259580),
  k = t(626135),
  P = t(228643),
  b = t(275759),
  G = t(231757),
  B = t(753194),
  w = t(225104),
  F = t(458034),
  H = t(856651),
  V = t(981631),
  Y = t(689938),
  z = t(935527);

function K(e) {
  let {
    platformType: n,
    className: t
  } = e, l = (0, x.ZP)(), o = A.Z.get(n);
  return (0, a.jsx)("img", {
    src: (0, O.ap)(l) ? o.icon.lightSVG : o.icon.darkSVG,
    alt: "",
    className: c()(z.platformIcon, t)
  })
}

function Q(e) {
  let {
    channel: n,
    className: t
  } = e, l = (0, M.KS)(n);
  return (0, a.jsxs)("div", {
    className: c()(z.channelName, t),
    children: [null != l ? (0, a.jsx)(l, {
      className: z.channelNameIcon
    }) : null, (0, a.jsx)(T.Heading, {
      variant: "heading-lg/semibold",
      color: "text-normal",
      className: z.channelNameText,
      children: n.name
    })]
  })
}

function q(e) {
  let n, {
      connectionType: t,
      connectionMetadataField: l,
      operator: o,
      value: s,
      result: i,
      description: c
    } = e,
    r = null;
  if (null != c) switch (o) {
    case H.iO.LESS_THAN:
      r = Y.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
        description: c,
        count: Math.max(0, Number(s) - 1)
      });
      break;
    case H.iO.GREATER_THAN:
      r = Y.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
        description: c,
        count: Math.max(0, Number(s) + 1)
      });
      break;
    default:
      r = c
  } else {
    let e;
    switch (o) {
      case H.iO.EQUAL:
        e = Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_BE, t === V.ABu.PAYPAL && l === H.PC.PAYPAL_VERIFIED && (e = Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_A);
        break;
      case H.iO.NOT_EQUAL:
        e = Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_NOT_BE;
        break;
      case H.iO.LESS_THAN:
        e = Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_AT_MOST;
        break;
      case H.iO.GREATER_THAN:
        e = Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_AT_LEAST;
        break;
      case void 0:
      case null:
        return null
    }
    if (null == (r = (0, b.n_)({
        connectionType: t,
        connectionMetadataField: l,
        operator: o,
        operatorText: e,
        value: s
      }))) return null
  }
  return n = i ? "header-secondary" : "text-danger", (0, a.jsx)(T.Text, {
    variant: "text-xs/normal",
    color: n,
    className: z.connectionsCheck,
    children: r
  })
}

function W(e) {
  let {
    eligibilityStatesGroups: n,
    onPlatformConnect: t,
    onPlatformConnected: l
  } = e, [o, i] = s.useState({}), [r, u] = s.useState(0), [N, O] = s.useState(null), [E, h] = s.useState(null), S = s.useMemo(() => C().flatten(n), [n]), x = s.useMemo(() => C().groupBy(S, e => "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : "")), [S]);
  s.useEffect(() => u(Date.now()), [S]), s.useEffect(() => {
    if (null == N) return;
    let e = x["".concat(N).concat(null != E ? ":".concat(E.id) : "")];
    if (null != e) e.every(e => e.result) && l(N, E)
  }, [x, N, E, l]);
  let p = (0, T.useToken)(_.Z.unsafe_rawColors.GREEN_330).hex();
  return (0, a.jsx)(a.Fragment, {
    children: Object.keys(x).sort((e, n) => {
      let t = x[e].every(e => e.result),
        l = x[n].every(e => e.result);
      return !0 === t && !1 === l ? 1 : !1 === t && !0 === l ? -1 : 0
    }).map(e => {
      var n, l, s;
      let u, C, N;
      let _ = x[e],
        E = _.find(e => null == e.operator),
        S = _.filter(e => null != e.operator),
        I = (null == E || E.result) && S.every(e => e.result),
        M = _.find(e => null != e.application),
        v = A.Z.get(e),
        f = null == M ? void 0 : M.application,
        g = (null == f ? void 0 : f.bot) != null ? new j.Z(f.bot) : null;
      b.SJ.includes(null !== (n = null == f ? void 0 : f.id) && void 0 !== n ? n : "") ? u = (0, a.jsx)(B.Z, {
        className: z.botTag,
        color: p,
        size: 16
      }) : null != g && (u = (0, a.jsx)(U.Z, {
        className: z.botTag,
        verified: g.isVerifiedBot()
      }));
      let L = o[null !== (l = null == v ? void 0 : v.type) && void 0 !== l ? l : H.Kt],
        y = !I && null != L && L <= r;
      return C = I ? (0, a.jsx)(T.CheckmarkLargeIcon, {
        size: "md",
        color: "currentColor",
        className: z.connectionsChecksGroupCheckmark
      }) : y ? (0, a.jsx)(T.Button, {
        size: T.Button.Sizes.TINY,
        look: T.Button.Looks.LINK,
        color: T.Button.Colors.LINK,
        className: z.connectionsChecksGroupRetryButton,
        children: Y.Z.Messages.RETRY
      }) : (0, a.jsx)(D.Z, {
        direction: D.Z.Directions.RIGHT,
        className: z.connectionsChecksGroupCaret
      }), (null == v ? void 0 : v.type) === V.ABu.STEAM && (N = Y.Z.Messages.CONNECTIONS_STEAM_TOOLTIP), (0, a.jsxs)(T.Clickable, {
        className: c()(z.connectionsChecksGroup, I ? z.connectionsChecksGroupPassed : null),
        onClick: I ? void 0 : () => {
          var e, n, l;
          return n = null !== (e = null == v ? void 0 : v.type) && void 0 !== e ? e : H.Kt, l = f, void((0, G.Z)({
            platformType: n,
            location: "Verified Roles Connect Accounts Modal",
            overrideUrl: null == l ? void 0 : l.role_connections_verification_url
          }), i({
            ...o,
            [n]: Date.now()
          }), O(n), h(null != l ? l : null), t())
        },
        children: [!I && y ? (0, a.jsx)("div", {
          className: z.connectionsChecksGroupRequirementsNotMet,
          children: (0, a.jsx)(T.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_REQUIREMENTS_NOT_MET
          })
        }) : null, null != v ? (0, a.jsx)(K, {
          platformType: v.type
        }) : null, null != g ? (0, a.jsx)(m.Z, {
          user: g
        }) : null, (0, a.jsxs)("div", {
          className: z.connectionsChecksGroupTextContainer,
          children: [(0, a.jsxs)("div", {
            className: z.connectionsChecksGroupTextNameContainer,
            children: [(0, a.jsx)(T.Text, {
              variant: "text-md/medium",
              color: "header-primary",
              children: null !== (s = null == v ? void 0 : v.name) && void 0 !== s ? s : null == f ? void 0 : f.name
            }), u, null != N ? (0, a.jsx)(T.Tooltip, {
              text: N,
              children: e => (0, a.jsx)(T.CircleInformationIcon, {
                size: "xs",
                color: "currentColor",
                ...e,
                className: z.connectionsChecksGroupTextNameInfoIcon
              })
            }) : null]
          }), S.map(e => {
            let {
              connection_type: n,
              connection_metadata_field: t,
              operator: l,
              value: o,
              result: s,
              description: i
            } = e;
            return d()(null != t, "connectionMetadataField is null"), d()(null != l, "operator is null"), d()(null != o, "value is null"), (0, a.jsx)(q, {
              connectionType: n,
              connectionMetadataField: t,
              operator: l,
              value: o,
              result: s,
              description: i
            }, t)
          })]
        }), C]
      }, e)
    })
  })
}

function X(e) {
  let n, t, l, {
      account: o,
      setShowPreviewInvisibleIcon: i,
      setShowPreviewMetadata: c
    } = e,
    [r, d] = s.useState(o.friendSync),
    [u, C] = s.useState(o.showActivity),
    [N, _] = s.useState(1 === o.metadataVisibility),
    [O, h] = s.useState(1 === o.visibility);
  s.useEffect(() => {
    i(!O), c(N)
  }, []);
  let S = A.Z.get(o.type);
  return V.BFP.has(o.type) && (n = (0, a.jsx)(T.FormSwitch, {
    className: z.accountConnectedPrivacyOptionsSwitchItem,
    hideBorder: !0,
    value: r,
    onChange: e => {
      d(e), E.Z.setFriendSync(o.type, o.id, e)
    },
    children: (0, a.jsx)(T.Text, {
      variant: "text-sm/semibold",
      children: Y.Z.Messages.SYNC_FRIENDS
    })
  })), V.vbS.has(o.type) && (t = (0, a.jsx)(T.FormSwitch, {
    className: z.accountConnectedPrivacyOptionsSwitchItem,
    hideBorder: !0,
    value: u,
    onChange: e => {
      C(e), E.Z.setShowActivity(o.type, o.id, e)
    },
    children: (0, a.jsx)(T.Text, {
      variant: "text-sm/semibold",
      children: Y.Z.Messages.DISPLAY_ACTIVITY.format({
        platform: S.name
      })
    })
  })), !0 === S.hasMetadata && (l = (0, a.jsx)(T.FormSwitch, {
    className: z.accountConnectedPrivacyOptionsSwitchItem,
    hideBorder: !0,
    value: N,
    disabled: !O,
    onChange: e => {
      c(e), _(e), E.Z.setMetadataVisibility(o.type, o.id, e ? 1 : 0)
    },
    children: (0, a.jsx)(T.Text, {
      variant: "text-sm/semibold",
      children: Y.Z.Messages.DISPLAY_DETAILS_ON_PROFILE
    })
  })), (0, a.jsxs)("div", {
    className: z.accountConnectedPrivacyOptionsContainer,
    children: [(0, a.jsx)(T.FormSwitch, {
      className: z.accountConnectedPrivacyOptionsSwitchItem,
      hideBorder: !0,
      value: O,
      onChange: e => {
        i(!e), h(e), E.Z.setVisibility(o.type, o.id, e ? 1 : 0)
      },
      children: (0, a.jsx)(T.Text, {
        variant: "text-sm/semibold",
        children: Y.Z.Messages.DISPLAY_ON_PROFILE
      })
    }), l, t, n]
  })
}

function J(e) {
  let {
    transitionState: n,
    onClose: t,
    guildId: l,
    role: o
  } = e, [i, c] = s.useState(0), [r, u] = s.useState(null), [C, _] = s.useState(!1), [O, E] = s.useState(!0), [m, M] = s.useState(!1), [j, U] = s.useState(!0), [D, b] = s.useState(!1), G = (0, N.e7)([y.Z], () => y.Z.getAccounts()), B = (0, N.e7)([g.default], () => g.default.getId()), [H, K] = s.useState(null), [q, J] = s.useState(null), [$, ee] = s.useState(null), en = (0, x.ZP)(), et = (0, N.e7)([f.default], () => f.default.locale), el = (0, N.e7)([Z.ZP], () => Z.ZP.getMember(l, B)), eo = Object.values((0, N.e7)([L.Z], () => L.Z.getMutableGuildChannelsForGuild(l))).filter(e => R.Z.can(V.Plq.VIEW_CHANNEL, e) && R.Z.can(V.Plq.SEND_MESSAGES, e) && (0, I.Z)(e).includes(o));

  function ea() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    null == t || t(), e && (0, T.closeModal)(F.s$, T.DEFAULT_MODAL_CONTEXT)
  }

  function es() {
    ea(!0), S.Z.open(V.oAB.AUTHORIZED_APPS)
  }

  function ei() {
    ea(!0), S.Z.open(V.oAB.CONNECTIONS)
  }
  async function ec() {
    M(!0), await h.Z.assignGuildRoleConnection(l, o.id)
  }

  function er() {
    k.default.track(V.rMx.PASSPORT_CHALLENGE_STARTED, {
      role_id: o.id,
      ...(0, p.hH)(l)
    })
  }

  function ed(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    K(e), J(n), c(1), null != n && (0, P.nj)().then(e => {
      ee(e)
    }).catch(() => {})
  }
  return s.useEffect(() => {
    h.Z.fetchGuildRoleConnectionsEligibility(l, o.id).then(e => {
      u(e), _(e.some(e => e.every(e => e.result))), E(!1)
    })
  }, [l, o.id, G]), s.useEffect(() => {
    k.default.track(V.rMx.PASSPORT_CHALLENGE_VIEWED, {
      role_id: o.id,
      ...(0, p.hH)(l)
    })
  }, [l, o.id]), s.useEffect(() => {
    if (!!m && null != el && !!el.roles.includes(o.id)) M(!1), eo.length > 0 ? c(2) : null == t || t(), k.default.track(V.rMx.PASSPORT_CHALLENGE_FINISHED, {
      role_id: o.id,
      ...(0, p.hH)(l)
    })
  }, [m, eo.length, el, l, o.id, t]), (0, a.jsxs)(T.ModalRoot, {
    size: T.ModalSize.MEDIUM,
    transitionState: n,
    "aria-label": Y.Z.Messages.CONNECT_ACCOUNT_TITLE,
    className: z.modalRoot,
    children: [function() {
      switch (i) {
        case 0:
          return (0, a.jsxs)(T.ModalHeader, {
            className: z.header,
            separator: !1,
            children: [(0, a.jsx)("div", {
              className: z.headerText,
              children: (0, a.jsx)(T.Heading, {
                variant: "heading-xl/extrabold",
                children: Y.Z.Messages.CONNECT_ACCOUNT_TITLE
              })
            }), (0, a.jsx)(T.ModalCloseButton, {
              onClick: () => ea()
            })]
          });
        case 1: {
          var e, n;
          d()(null != H, "lastPlatformConnected is null");
          let t = null !== (n = null == q ? void 0 : q.name) && void 0 !== n ? n : null === (e = A.Z.get(H)) || void 0 === e ? void 0 : e.name;
          return (0, a.jsxs)(T.ModalHeader, {
            className: z.header,
            separator: !1,
            children: [(0, a.jsx)(T.Heading, {
              variant: "heading-xl/extrabold",
              className: z.headerText,
              children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED.format({
                platformName: t
              })
            }), (0, a.jsx)(T.ModalCloseButton, {
              onClick: () => ea()
            })]
          })
        }
        case 2:
          return (0, a.jsxs)(T.ModalHeader, {
            className: z.header,
            separator: !1,
            children: [(0, a.jsx)(T.Heading, {
              variant: "heading-xl/extrabold",
              className: z.headerText,
              children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ROLE_GRANTED
            }), (0, a.jsx)(T.ModalCloseButton, {
              onClick: () => ea(!0)
            })]
          });
        default:
          return null
      }
    }(), (0, a.jsx)(T.Sequencer, {
      step: i,
      steps: [0, 1, 2],
      children: function() {
        switch (i) {
          case 0: {
            let e = null != r && r.length > 1;
            return (0, a.jsx)(T.ModalContent, {
              children: O || null == r ? (0, a.jsx)(T.Spinner, {
                className: z.connectionsChecksGroups
              }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(T.Text, {
                  variant: "text-md/medium",
                  color: "header-secondary",
                  children: e ? Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_HEADER_TEXT_ANY.format() : Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_HEADER_TEXT_ALL.format()
                }), (0, a.jsx)(T.ScrollerThin, {
                  className: z.connectionsChecksGroups,
                  children: (0, a.jsx)(W, {
                    eligibilityStatesGroups: r,
                    onPlatformConnect: er,
                    onPlatformConnected: ed
                  })
                }), (0, a.jsx)(T.Text, {
                  variant: "text-xs/normal",
                  className: z.footerText,
                  color: "header-secondary",
                  children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_USAGE_SETTINGS.format({
                    privacyPolicyUrl: V.EYA.PRIVACY,
                    onAuthorizedApplicationsClick: () => es(),
                    onConnectionsClick: () => ei()
                  })
                })]
              })
            })
          }
          case 1: {
            d()(null != H, "lastPlatformConnected is null");
            let e = G.find(e => {
                let {
                  type: n
                } = e;
                return H === n
              }),
              n = null == $ ? void 0 : $.find(e => {
                let {
                  application: n
                } = e;
                return n.id === (null == q ? void 0 : q.id)
              });
            return (0, a.jsxs)(T.ModalContent, {
              children: [(0, a.jsx)(T.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_USAGE_SETTINGS.format({
                  privacyPolicyUrl: V.EYA.PRIVACY,
                  onAuthorizedApplicationsClick: () => es(),
                  onConnectionsClick: () => ei()
                })
              }), (0, a.jsx)("div", {
                className: z.accountConnectedContainer,
                children: null == e && null == n ? (0, a.jsx)(T.Spinner, {
                  className: z.accountConnectedLoading
                }) : (0, a.jsxs)(a.Fragment, {
                  children: [null != e ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                      className: z.accountConnectedContainerChild,
                      children: [(0, a.jsx)(T.Text, {
                        variant: "eyebrow",
                        color: "header-secondary",
                        children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PREVIEW
                      }), (0, a.jsx)(v.E3, {
                        connectedAccount: e,
                        userId: B,
                        theme: en,
                        locale: et,
                        className: z.accountConnectedPreviewConnectedUserAccount,
                        showMetadata: j,
                        showInvisibleIcon: D
                      })]
                    }), (0, a.jsxs)("div", {
                      className: z.accountConnectedContainerChild,
                      children: [(0, a.jsx)(T.Text, {
                        variant: "eyebrow",
                        color: "header-secondary",
                        children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PRIVACY
                      }), (0, a.jsx)(X, {
                        account: e,
                        setShowPreviewInvisibleIcon: b,
                        setShowPreviewMetadata: U
                      })]
                    })]
                  }) : null, null != n ? (0, a.jsxs)("div", {
                    className: z.accountConnectedContainerChild,
                    children: [(0, a.jsxs)("div", {
                      className: z.accountConnectedHeader,
                      children: [(0, a.jsx)(T.Text, {
                        variant: "eyebrow",
                        color: "header-secondary",
                        children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PREVIEW
                      }), (0, a.jsx)(T.Tooltip, {
                        text: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_TOOLTIP,
                        children: e => (0, a.jsx)(T.CircleInformationIcon, {
                          size: "xs",
                          color: "currentColor",
                          ...e
                        })
                      })]
                    }), (0, a.jsx)(v.tH, {
                      applicationRoleConnection: n,
                      className: z.accountConnectedPreviewConnectedUserAccount,
                      locale: et
                    })]
                  }) : null]
                })
              })]
            })
          }
          case 2:
            return (0, a.jsxs)(T.ModalContent, {
              children: [(0, a.jsxs)("div", {
                className: z.roleGranted,
                children: [(0, a.jsx)(w.Z, {
                  guildId: l,
                  className: z.verifiedIcon,
                  role: o,
                  size: 24
                }), (0, a.jsx)(T.Text, {
                  variant: "text-lg/semibold",
                  color: "header-primary",
                  className: z.roleGrantedName,
                  children: o.name
                })]
              }), (0, a.jsx)(T.ScrollerThin, {
                className: z.channelsGranted,
                children: eo.map(e => (0, a.jsx)(Q, {
                  channel: e
                }, e.id))
              })]
            });
          default:
            return null
        }
      }()
    }), function() {
      var e;
      let n = null !== (e = null == r ? void 0 : r.flat().some(e => null == e.application_id)) && void 0 !== e && e;
      switch (i) {
        case 0:
          return (0, a.jsxs)(T.ModalFooter, {
            children: [(0, a.jsx)(T.Button, {
              color: T.ButtonColors.BRAND,
              onClick: () => ec(),
              disabled: O || !C || m,
              children: Y.Z.Messages.FINISH
            }), n ? (0, a.jsx)("div", {
              className: z.manageConnectionsFooterButton,
              children: (0, a.jsx)(T.Button, {
                look: T.ButtonLooks.LINK,
                color: T.ButtonColors.LINK,
                onClick: ei,
                children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MANAGE_CONNECTIONS
              })
            }) : null]
          });
        case 1:
          return (0, a.jsx)(T.ModalFooter, {
            children: (0, a.jsx)(T.Button, {
              color: T.ButtonColors.BRAND,
              onClick: () => c(0),
              children: Y.Z.Messages.DONE
            })
          });
        default:
          return (0, a.jsxs)(T.ModalFooter, {
            children: [(0, a.jsx)(T.Button, {
              color: T.ButtonColors.BRAND,
              onClick: () => ea(!0),
              children: Y.Z.Messages.CLOSE
            }), n ? (0, a.jsx)("div", {
              className: z.manageConnectionsFooterButton,
              children: (0, a.jsx)(T.Button, {
                look: T.ButtonLooks.LINK,
                color: T.ButtonColors.LINK,
                onClick: ei,
                children: Y.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MANAGE_CONNECTIONS
              })
            }) : null]
          })
      }
    }()]
  })
}(o = l || (l = {}))[o.CHECKS_REQUIRED = 0] = "CHECKS_REQUIRED", o[o.ACCOUNT_CONNECTED = 1] = "ACCOUNT_CONNECTED", o[o.ROLE_GRANTED = 2] = "ROLE_GRANTED"