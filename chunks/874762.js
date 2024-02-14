    "use strict";
    t.r(a), t.d(a, {
      Overlay: function() {
        return K
      },
      default: function() {
        return $
      }
    }), t("222007");
    var s = t("37983"),
      d = t("884691"),
      n = t("522632"),
      i = t("803182"),
      c = t("90915"),
      r = t("759843"),
      o = t("817792"),
      l = t("815157"),
      f = t("391679"),
      u = t("446674"),
      p = t("95410"),
      b = t("795137"),
      h = t("837319"),
      j = t("73749"),
      m = t("269936"),
      _ = t("231032"),
      E = t("724349"),
      g = t("883897"),
      I = t("338027"),
      T = t("271938"),
      O = t("599110"),
      S = t("98013"),
      R = t("924822"),
      A = t("773336"),
      v = t("50885"),
      w = t("49111"),
      N = t("492397"),
      C = t("53452");
    t("292687"), t("263901"), t("278163");
    let D = (0, m.makeLazy)({
        createPromise: () => t.el("545169").then(t.bind(t, "545169")),
        webpackId: "545169",
        name: "UnsupportedBrowser"
      }),
      L = (0, m.makeLazy)({
        createPromise: () => t.el("649486").then(t.bind(t, "649486")),
        webpackId: "649486",
        name: "DownloadApps"
      }),
      P = (0, m.makeLazy)({
        createPromise: () => t.el("254936").then(t.bind(t, "254936")),
        webpackId: "254936",
        name: "InviteProxy"
      }),
      y = (0, m.makeLazy)({
        createPromise: () => t.el("456320").then(t.bind(t, "456320")),
        webpackId: "456320",
        name: "VerifyConnectedAccount"
      }),
      M = (0, m.makeLazy)({
        createPromise: () => t.el("176384").then(t.bind(t, "176384")),
        webpackId: "176384",
        name: "LinkConnectedAccount"
      }),
      x = (0, m.makeLazy)({
        createPromise: () => t.el("324202").then(t.bind(t, "324202")),
        webpackId: "324202",
        name: "LinkAuthorize"
      }),
      k = (0, m.makeLazy)({
        createPromise: () => t.el("965179").then(t.bind(t, "965179")),
        webpackId: "965179",
        name: "ActivateDevice"
      }),
      U = (0, m.makeLazy)({
        createPromise: () => t.el("779020").then(t.bind(t, "779020")),
        webpackId: "779020",
        name: "ViewsWithMainInterface",
        memo: !0,
        id: "779020"
      }),
      G = (0, m.makeLazy)({
        createPromise: () => t.el("994509").then(t.bind(t, "994509")),
        webpackId: "994509",
        name: "XboxEdu"
      }),
      V = (0, m.makeLazy)({
        createPromise: () => t.el("225936").then(t.bind(t, "225936")),
        webpackId: "225936",
        name: "XboxPin"
      }),
      H = (0, m.makeLazy)({
        createPromise: () => t.el("549869").then(t.bind(t, "549869")),
        webpackId: "549869",
        name: "ViewsWithAuth"
      }),
      F = (0, m.makeLazy)({
        createPromise: () => t.el("337863").then(t.bind(t, "337863")),
        webpackId: "337863",
        name: "ViewsWithOAuth2"
      }),
      B = (0, m.makeLazy)({
        createPromise: () => t.el("765105").then(t.bind(t, "765105")),
        webpackId: "765105",
        name: "ViewsWithUnauthenticatedApplicationDirectory"
      }),
      W = (0, m.makeLazy)({
        createPromise: () => t.el("143416").then(t.bind(t, "143416")),
        webpackId: "143416",
        name: "BrowserHandoff"
      }),
      z = (0, m.makeLazy)({
        createPromise: () => t.el("767413").then(t.bind(t, "767413")),
        webpackId: "767413",
        name: "MobileWebHandoffFallback"
      }),
      K = (0, m.makeLazy)({
        createPromise: () => t.el("476427").then(t.bind(t, "476427")),
        webpackId: "476427",
        name: "Overlay"
      }),
      Z = (0, m.makeLazy)({
        createPromise: () => t.el("854908").then(t.bind(t, "854908")),
        webpackId: "854908",
        name: "SuspendedUserSafetyHubPage"
      }),
      Y = (0, m.makeLazy)({
        createPromise: () => t.el("816306").then(t.bind(t, "816306")),
        webpackId: "816306",
        name: "QuestsLandingPage"
      }),
      X = () => (0, s.jsx)(U, {}),
      q = new Set([w.Routes.LOGIN, w.Routes.LOGIN_HANDOFF, w.Routes.INVITE_LOGIN(":inviteCode"), w.Routes.GIFT_CODE_LOGIN(":giftCode"), w.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")]);

    function Q(e, a) {
      return a ? e.filter(e => !q.has(e)) : e
    }
    class J extends d.Component {
      componentDidMount() {
        v.default.cleanupDisplaySleep(), I.default.initialize()
      }
      componentWillUnmount() {
        I.default.terminate()
      }
      render() {
        let e;
        let {
          isAuthenticated: a,
          migrationStatus: t,
          skipsSettingDefaultPageTitle: d
        } = this.props;
        return e = t === E.MigrationStatus.IN_PROGRESS ? null : C.IS_APP_COMPATIBLE_BROWSER ? A.isPlatformEmbedded ? (0, s.jsxs)(c.Switch, {
          children: [(0, s.jsx)(c.Route, {
            exact: !0,
            path: w.Routes.INDEX,
            render: () => (0, s.jsx)(b.default, {})
          }), (0, s.jsx)(j.default, {
            exact: !0,
            path: w.Routes.APPS,
            component: L
          }), (0, s.jsx)(c.Route, {
            path: Q([w.Routes.LOGIN, w.Routes.REGISTER, w.Routes.INVITE(":inviteCode"), w.Routes.INVITE_LOGIN(":inviteCode"), w.Routes.GIFT_CODE(":giftCode"), w.Routes.GIFT_CODE_LOGIN(":giftCode"), w.Routes.RESET], N.CONFERENCE_MODE_ENABLED),
            component: H
          }), (0, s.jsx)(j.default, {
            path: w.Routes.INVITE_PROXY(":channelId"),
            component: P
          }), (0, s.jsx)(c.Redirect, {
            from: w.Routes.INVITE(""),
            to: w.Routes.LOGIN
          }), (0, s.jsx)(c.Redirect, {
            from: w.Routes.GIFT_CODE(""),
            to: w.Routes.LOGIN
          }), (0, s.jsx)(c.Route, {
            render: X
          })]
        }) : (0, s.jsxs)(c.Switch, {
          children: [(0, s.jsx)(j.default, {
            exact: !0,
            path: w.Routes.INDEX,
            render: () => (0, s.jsx)(b.default, {})
          }), (0, s.jsx)(c.Route, {
            path: Q([w.Routes.LOGIN, w.Routes.LOGIN_HANDOFF, w.Routes.REGISTER, w.Routes.BILLING_PREFIX, w.Routes.BILLING_PROMOTION_REDEMPTION(":code"), w.Routes.INVITE(":inviteCode"), w.Routes.INVITE_LOGIN(":inviteCode"), w.Routes.GIFT_CODE(":giftCode"), w.Routes.GIFT_CODE_LOGIN(":giftCode"), w.Routes.GUILD_TEMPLATE(":guildTemplateCode"), w.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"), w.Routes.DISABLE_EMAIL_NOTIFICATIONS, w.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, w.Routes.RESET, w.Routes.REPORT, w.Routes.REPORT_SECOND_LOOK], N.CONFERENCE_MODE_ENABLED),
            component: H
          }), a ? null : (0, s.jsx)(c.Route, {
            path: w.Routes.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
            component: H
          }), a ? null : (0, s.jsx)(c.Route, {
            path: w.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
            component: H
          }), (0, s.jsx)(c.Redirect, {
            from: w.Routes.INVITE(""),
            to: w.Routes.LOGIN
          }), (0, s.jsx)(j.default, {
            path: w.Routes.INVITE_PROXY(":channelId"),
            component: P
          }), (0, s.jsx)(c.Redirect, {
            from: w.Routes.GIFT_CODE(""),
            to: w.Routes.LOGIN
          }), (0, s.jsx)(j.default, {
            path: w.Routes.QUESTS(":questId"),
            component: Y,
            impressionName: r.ImpressionNames.QUESTS_LANDING_PAGE,
            impressionProperties: e => {
              let {
                computedMatch: a
              } = e;
              return {
                quest_id: a.params.questId
              }
            }
          }), (0, s.jsx)(j.default, {
            path: w.Routes.HANDOFF,
            component: W
          }), (0, s.jsx)(j.default, {
            path: w.Routes.MOBILE_WEB_HANDOFF,
            component: z
          }), (0, s.jsx)(j.default, {
            path: w.Routes.XBOX_EDU,
            component: G
          }), (0, s.jsx)(j.default, {
            path: w.Routes.XBOX_PIN,
            component: V
          }), (0, s.jsx)(j.default, {
            path: w.Routes.CONNECTION_LINK(":type"),
            component: M
          }), (0, s.jsx)(j.default, {
            path: w.Routes.CONNECTION_LINK_AUTHORIZE(":type"),
            component: x
          }), (0, s.jsx)(j.default, {
            path: w.Routes.ACTIVATE,
            component: k
          }), (0, s.jsx)(j.default, {
            path: w.Routes.CONNECTIONS(":type"),
            component: y
          }), (0, s.jsx)(j.default, {
            path: w.Routes.DOWNLOAD_QR_CODE_REDIRECT,
            render: () => {
              var e, a, t;
              let s = null === (e = O.default.getSuperProperties()) || void 0 === e ? void 0 : e.os,
                d = (0, n.parse)((null !== (t = window.location.search) && void 0 !== t ? t : "").substr(1)),
                i = null === (a = d.referring_location) || void 0 === a ? void 0 : a.toString();
              return ("iOS" === s || "Android" === s) && O.default.track(w.AnalyticEvents.DOWNLOAD_APP, {
                platform: s,
                ptb: !1,
                released: !0,
                has_e_mail: "true" === d.has_e_mail,
                referring_location: i,
                qr_code: !0
              }), window.location.href = (0, S.getMobileDownloadLink)(null != i && "" !== i ? i : "qr_code", s), null
            }
          }), (0, s.jsx)(j.default, {
            path: w.Routes.OPEN_APP_FROM_EMAIL,
            render: () => {
              var e, a;
              let t = null === (e = O.default.getSuperProperties()) || void 0 === e ? void 0 : e.os,
                d = (0, R.getOpenAppFromEmailDestinations)(null !== (a = window.location.search) && void 0 !== a ? a : "");
              if ("iOS" !== t && "Android" !== t) return (0, s.jsx)(c.Redirect, {
                to: null != d.desktop ? "".concat(d.desktop.pathname).concat(d.desktop.search) : w.Routes.APP
              });
              {
                let e = (0, S.getMobileDownloadLink)("app_open_from_email", t, d.mobile),
                  a = (0, l.parseDynamicLink)(e);
                null != a && O.default.track(w.AnalyticEvents.DEEP_LINK_CLICKED, {
                  fingerprint: (0, f.maybeExtractId)(a.fingerprint),
                  attempt_id: a.attemptId,
                  source: a.utmSource,
                  destination: null != d.mobile ? d.mobile.toString() : null
                }), window.location.href = e
              }
            }
          }), (0, s.jsx)(c.Redirect, {
            from: w.Routes.CONNECT_AUTHORIZE,
            to: {
              ...location,
              pathname: w.Routes.OAUTH2_AUTHORIZE
            }
          }), (0, s.jsx)(c.Route, {
            path: [w.Routes.OAUTH2_AUTHORIZED, w.Routes.OAUTH2_AUTHORIZE, w.Routes.OAUTH2_ERROR, w.Routes.OAUTH2_WHITELIST_ACCEPT],
            component: F
          }), a ? null : (0, s.jsx)(c.Route, {
            path: [w.Routes.ACCOUNT_STANDING],
            component: Z
          }), a ? null : (0, s.jsx)(c.Route, {
            path: w.Routes.APPLICATION_STORE,
            component: h.default
          }), a ? null : (0, s.jsx)(c.Route, {
            path: [w.Routes.APPLICATION_DIRECTORY_SEARCH, w.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section?"), w.Routes.APPLICATION_DIRECTORY],
            component: B
          }), (0, s.jsx)(c.Route, {
            render: X
          })]
        }) : (0, s.jsx)(c.Switch, {
          children: (0, s.jsx)(j.default, {
            component: D
          })
        }), (0, s.jsxs)(_.default, {
          skipsSettingDefaultPageTitle: d,
          children: [e, A.isPlatformEmbedded && (t === E.MigrationStatus.NOT_STARTED || t === E.MigrationStatus.IN_PROGRESS) && !0 !== p.default.get(o.DOMAIN_MIGRATION_SUCCESS_KEY) ? (0, s.jsx)(g.default, {}) : null]
        })
      }
    }
    var $ = u.default.connectStores([T.default, E.default], () => ({
      isAuthenticated: T.default.isAuthenticated(),
      migrationStatus: E.default.getMigrationStatus()
    }), {
      forwardRef: !0
    })(function(e) {
      let a = function() {
        let {
          pathname: e
        } = (0, c.useLocation)(), a = (0, i.matchPath)(e, {
          path: w.Routes.APPLICATION_DIRECTORY
        });
        return null != a
      }();
      return (0, s.jsx)(J, {
        ...e,
        skipsSettingDefaultPageTitle: a
      })
    })