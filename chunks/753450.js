"use strict";
i.r(t), i.d(t, {
  default: function() {
    return eP
  },
  getApplicationDirectoryProfileUrl: function() {
    return eT
  },
  getYouTubeVideoIdFromUrl: function() {
    return eN
  }
}), i("610138"), i("216116"), i("78328"), i("815648"), i("47120"), i("315314"), i("789020"), i("653041");
var l = i("735250"),
  a = i("470079"),
  n = i("120356"),
  s = i.n(n),
  r = i("525654"),
  o = i.n(r),
  c = i("302454"),
  d = i.n(c),
  u = i("873546"),
  p = i("149765"),
  _ = i("468194"),
  m = i("442837"),
  f = i("692547"),
  h = i("477690"),
  I = i("481060"),
  g = i("995648"),
  v = i("445986"),
  A = i("9807"),
  E = i("911969"),
  R = i("330726"),
  x = i("782568"),
  C = i("607070"),
  T = i("581364"),
  N = i("395661"),
  P = i("970321"),
  S = i("220082"),
  j = i("252618"),
  L = i("299206"),
  O = i("422559"),
  D = i("270144"),
  y = i("864843"),
  M = i("703656"),
  b = i("588822"),
  F = i("706454"),
  B = i("314897"),
  U = i("451478"),
  k = i("729035"),
  G = i("86813"),
  w = i("826026"),
  Y = i("808268"),
  H = i("626135"),
  V = i("768581"),
  W = i("572004"),
  z = i("823379"),
  K = i("900849"),
  Z = i("674588"),
  J = i("264043"),
  Q = i("303383"),
  X = i("887706"),
  q = i("738130"),
  $ = i("4461"),
  ee = i("34674"),
  et = i("576958"),
  ei = i("924489"),
  el = i("125909"),
  ea = i("409425"),
  en = i("132871"),
  es = i("147890"),
  er = i("491576"),
  eo = i("95650"),
  ec = i("940064"),
  ed = i("626004"),
  eu = i("939893"),
  ep = i("430913"),
  e_ = i("606183"),
  em = i("272242"),
  ef = i("981631"),
  eh = i("558921"),
  eI = i("689938"),
  eg = i("798945"),
  ev = i("902294");
let eA = d().parserFor(eu.default),
  eE = d().reactFor(d().ruleOutput(eu.default, "react")),
  eR = (0, _.cssValueToNumber)(h.default.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
  ex = "redirect_to_support_server",
  eC = "start_application_install",
  eT = e => "".concat(location.protocol, "//").concat(location.host).concat(ef.Routes.APPLICATION_DIRECTORY_PROFILE(e)),
  eN = e => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null
  };

function eP(e) {
  var t, n, r, c, d;
  let _, {
      match: {
        params: {
          applicationId: f,
          section: h = em.ApplicationDirectoryProfileSections.GENERAL
        }
      }
    } = e,
    E = (0, en.useApplicationDirectoryHistory)(e => e.guildId),
    C = (0, X.default)(),
    S = (0, m.useStateFromStores)([Q.default], () => Q.default.getFetchState({
      applicationId: f,
      guildId: E
    }) === Q.FetchState.FETCHING),
    G = a.useRef({
      applicationId: void 0,
      guildId: void 0
    }),
    {
      similarApplications: w,
      similarLoadId: eu
    } = (0, m.useStateFromStoresObject)([Q.default], () => {
      let e = {
          applicationId: f,
          guildId: E
        },
        t = Q.default.getSimilarApplications(e);
      return null == t ? t = Q.default.getSimilarApplications(G.current) : G.current = e, {
        similarApplications: null == t ? void 0 : t.applications,
        similarLoadId: null == t ? void 0 : t.loadId
      }
    }),
    eN = a.useMemo(() => null == w ? void 0 : w.slice(0, 3), [w]),
    eP = (0, m.useStateFromStores)([J.default], () => J.default.getApplicationFetchState(f)),
    [eL, eD] = a.useState(void 0),
    ey = a.useCallback(e => {
      if (null != f) {
        if (e === em.ApplicationDirectoryProfileSections.GENERAL) {
          (0, es.replaceAppDirectoryURLWith)(ef.Routes.APPLICATION_DIRECTORY_PROFILE(f));
          return
        }(0, es.replaceAppDirectoryURLWith)(ef.Routes.APPLICATION_DIRECTORY_PROFILE_SECTION(f, e))
      }
    }, [f]),
    eM = (0, m.useStateFromStores)([U.default], () => U.default.isFocused()),
    eb = (0, m.useStateFromStores)([F.default], () => F.default.locale),
    eF = a.useRef(f),
    eB = (0, m.useStateFromStores)([J.default], () => {
      let e = J.default.getApplication(f);
      return null == e ? e = J.default.getApplication(eF.current) : eF.current = f, e
    }),
    eU = (0, er.default)({
      application: eB
    }),
    ek = (0, m.useStateFromStores)([B.default], () => B.default.getSessionId());
  (0, j.usePageTitle)({
    location: null == eB ? void 0 : eB.name
  });
  let eG = a.useCallback(async () => {
    try {
      var e;
      let t = null == eB ? void 0 : null === (e = eB.guild) || void 0 === e ? void 0 : e.id;
      if (null != t) {
        (null == eB ? void 0 : eB.id) != null && H.default.track(ef.AnalyticEvents.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
          application_id: eB.id,
          guild_id: t
        });
        let e = {
          page: ef.AnalyticsPages.APPLICATION_DIRECTORY
        };
        await (0, K.startLurking)(t, e, {
          setsHistorySnapshot: !1
        })
      }
    } catch {}
  }, [eB]);
  a.useEffect(() => {
    if (null == eB) return;
    let e = new URL(location.href);
    if (C && null != ek && "true" === e.searchParams.get(ex)) {
      e.searchParams.delete(ex);
      let t = e.pathname + e.search;
      (0, M.replaceWith)(t), eG()
    }
  }, [C, eG, ek, eB]);
  let ew = a.useCallback(() => {
      var e;
      null != (null == eB ? void 0 : null === (e = eB.guild) || void 0 === e ? void 0 : e.id) && (C ? eG() : (0, ee.redirectToLogin)({
        [ex]: "true"
      }))
    }, [eB, C, eG]),
    eY = a.useCallback(() => {
      (0, es.replaceAppDirectoryURLWith)("".concat(ef.Routes.APPLICATION_DIRECTORY_PROFILE(f)).concat(location.search))
    }, [f]);
  a.useEffect(() => {
    h === em.ApplicationDirectoryProfileSections.GENERAL && eY()
  }, [eY, h]), a.useEffect(() => {
    null != f && Z.getApplication(f)
  }, [f]), a.useEffect(() => {
    if ((null == eB ? void 0 : eB.directory_entry) != null) {
      let e = eB.directory_entry,
        t = null == e ? void 0 : e.popular_application_commands;
      null != t ? eD(t.map(e => (0, T.buildCommand)({
        rootCommand: e,
        command: e,
        applicationId: e.application_id
      }))) : eD(void 0)
    }
  }, [eB]);
  let eH = V.default.getApplicationIconURL({
      id: null !== (r = null == eB ? void 0 : eB.id) && void 0 !== r ? r : "-1",
      icon: null == eB ? void 0 : eB.icon,
      size: eR
    }),
    eV = (0, L.default)({
      id: null !== (c = null == eB ? void 0 : eB.id) && void 0 !== c ? c : "",
      label: eI.default.Messages.COPY_ID_APPLICATION
    }),
    {
      canInstall: eW,
      install: ez
    } = (0, $.useInstallApplication)(eB, E),
    eK = null === (t = (0, en.getPreviousView)()) || void 0 === t ? void 0 : t.type;
  a.useEffect(() => {
    (null == eB ? void 0 : eB.id) != null && H.default.track(ef.AnalyticEvents.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: "product",
      previous_page: eK,
      application_id: eB.id,
      guild_id: E,
      shown_mutual_guilds_count: eU.length
    })
  }, [null == eB ? void 0 : eB.id, E, eU]);
  let eZ = a.useMemo(() => {
      var e;
      let t = null == eB ? void 0 : null === (e = eB.install_params) || void 0 === e ? void 0 : e.permissions;
      if (null != t) return O.OrderedPermissions.filter(e => p.has(p.deserialize(t), e))
    }, [null == eB ? void 0 : null === (n = eB.install_params) || void 0 === n ? void 0 : n.permissions]),
    eJ = a.useCallback(e => {
      ey(e), (null == eB ? void 0 : eB.id) != null && H.default.track(ef.AnalyticEvents.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
        application_id: eB.id,
        guild_id: E,
        tab_name: e
      })
    }, [null == eB ? void 0 : eB.id, E, ey]),
    eQ = a.useMemo(() => {
      var e, t, i;
      return null !== (i = (null !== (t = null == eB ? void 0 : null === (e = eB.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== t ? t : []).map(eS).filter(z.isNotNullish)) && void 0 !== i ? i : []
    }, [eB]),
    eX = a.useCallback((e, t) => {
      if (e.type === ef.CarouselMediaTypes.IMG) {
        let t = eQ.filter(e => e.type === ef.CarouselMediaTypes.IMG),
          a = t.findIndex(t => t === e);
        if (a < 0) return;
        let n = t.map(e => ({
          src: (0, v.transformAssetURL)(e.src),
          width: e.width,
          height: e.height
        }));
        (0, I.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([i.e("99387"), i.e("41814")]).then(i.bind(i, "895023"));
          return t => {
            let {
              ...i
            } = t;
            return (0, l.jsx)(e, {
              ...i,
              items: n,
              startingIndex: a,
              modalCarouselItemClassName: eg.appSlide
            })
          }
        })
      }
    }, [eQ]),
    eq = a.useCallback(e => {
      (null == eB ? void 0 : eB.id) != null && H.default.track(ef.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
        current_page: "product",
        category: e.name,
        category_id: e.id,
        application_id: eB.id,
        guild_id: E
      }), (0, es.goToCategory)({
        categoryId: e.id
      })
    }, [eB, E]);
  a.useEffect(() => {
    null != f && Z.getSimilarApplications({
      applicationId: f,
      guildId: E
    })
  }, [f, E]);
  let e$ = a.useCallback(e => {
      let {
        application: t,
        mutualGuilds: i
      } = e;
      (null == eB ? void 0 : eB.id) != null && H.default.track(ef.AnalyticEvents.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
        current_page: "product",
        application_id: eB.id,
        suggested_application_id: t.id,
        load_id: eu,
        guild_id: E,
        shown_mutual_guilds_count: i.length
      }), (0, es.goToApplication)({
        applicationId: t.id
      })
    }, [null == eB ? void 0 : eB.id, eu, E]),
    e0 = a.useCallback(() => {
      null != eB && (0, x.default)(function(e, t) {
        let i = "https://".concat(ef.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new"),
          l = new URLSearchParams;
        return l.append("tf_12275088515223", "field_value_dc_category_report_an_app_bot"), l.append("tf_12276208289431", "field_value_dc_reported_action_app_directory"), l.append("tf_12094971213335", t.id), l.append("ticket_form_id", "12275528604823"), l.append("tf_subject", "App Directory Report ".concat(t.name, " ").concat(t.id)), "".concat(i, "?").concat(l.toString())
      }(eb, eB))
    }, [eb, eB]),
    e1 = a.useCallback(e => (0, l.jsxs)(I.Menu, {
      navId: "application-directory-profile",
      "aria-label": eI.default.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
      onClose: e,
      onSelect: void 0,
      children: [(0, l.jsx)(I.MenuGroup, {
        children: (0, l.jsx)(I.MenuItem, {
          id: "report",
          label: eI.default.Messages.REPORT_APP,
          color: "danger",
          action: e0
        })
      }), null != eV ? (0, l.jsx)(I.MenuGroup, {
        children: eV
      }) : null]
    }), [eV, e0]),
    [e2, e4] = (0, R.default)(!1, 1e3),
    e5 = a.useCallback(() => {
      null != eB && (H.default.track(ef.AnalyticEvents.APP_SHARE_BUTTON_CLICKED, {
        source: "product_page",
        application_id: eB.id,
        guild_id: E
      }), (0, W.copy)(eT(eB.id)), e4(!0))
    }, [eB, e4, E]);
  a.useEffect(() => {
    let e = new URL(location.href);
    if (C && "true" === e.searchParams.get(eC)) {
      e.searchParams.delete(eC);
      let t = e.pathname + e.search;
      (0, M.replaceWith)(t), ez("product_page")
    }
  }, [C, ez]);
  let e7 = a.useCallback(() => {
      null != eB && (C ? ez("product_page") : (H.default.track(ef.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
        application_id: f,
        guild_id: E,
        auth_type: null != eB.custom_install_url ? "custom_url" : "in_app",
        source: "product_page",
        device_platform: u.isMobile ? "mobile_web" : "desktop_web"
      }), (0, ee.redirectToLogin)({
        [eC]: "true"
      })))
    }, [eB, C, ez, f, E]),
    {
      applicationSubscriptionListingsShown: e9
    } = (0, D.default)({
      applicationId: null == eB ? void 0 : eB.id,
      groupListingId: null == eB ? void 0 : eB.primary_sku_id,
      guildId: E
    }),
    e6 = (null == eB ? void 0 : eB.id) === eh.MIDJOURNEY_BOT_ID,
    [e8, e3] = a.useState(!1),
    [te, tt] = a.useState(!1),
    [ti, tl] = a.useState(!0),
    ta = e => {
      null != e && e3(e.scrollHeight > e.clientHeight)
    },
    tn = null != eZ && eZ.length > 0,
    ts = (null == eB ? void 0 : eB.flags) != null,
    {
      enabled: tr
    } = N.appStorefrontExperiment.useExperiment({
      location: "ApplicationDirectoryProfile"
    }),
    to = (0, P.useAppStorefrontAvailable)(null !== (d = null == eB ? void 0 : eB.id) && void 0 !== d ? d : ""),
    tc = tr && to,
    td = a.useMemo(() => {
      let e = [],
        t = !0;
      switch (h) {
        case em.ApplicationDirectoryProfileSections.GENERAL: {
          var i, a;
          let n = null == eB ? void 0 : null === (i = eB.directory_entry) || void 0 === i ? void 0 : i.detailed_description;
          null != n && n.length > 0 ? (e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(I.Heading, {
              className: eg.sectionHeader,
              variant: "heading-md/semibold",
              children: eI.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, l.jsx)("div", {
              ref: ta,
              className: s()({
                [eg.descriptionClamp]: !te,
                [eg.descriptionClampSafari]: !te && "Safari" === o().name
              }),
              children: (0, l.jsx)(k.default, {
                className: eg.detailedDescription,
                parser: eA,
                output: eE,
                state: {
                  allowLinks: !0
                },
                children: n
              })
            }), (e8 || te) && (0, l.jsx)(ej, {
              isViewAll: te,
              onToggle: () => {
                tt(e => !e)
              }
            })]
          })), t = !1) : (null == eB ? void 0 : null === (a = eB.directory_entry) || void 0 === a ? void 0 : a.short_description) !== void 0 ? e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(I.Heading, {
              className: eg.sectionHeader,
              variant: "heading-md/semibold",
              children: eI.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, l.jsx)("span", {
              children: eB.directory_entry.short_description
            })]
          })) : (null == eB ? void 0 : eB.description) != null && e.push((0, l.jsx)(b.default, {
            className: eg.description,
            userBio: eB.description
          })), null != eL && eL.length > 0 && (e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(I.Heading, {
              className: eg.sectionHeader,
              variant: "heading-md/semibold",
              children: eI.default.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
            }), (0, l.jsx)(ec.default, {
              className: eg.commandList,
              commands: eL
            })]
          })), t = !0);
          break
        }
        case em.ApplicationDirectoryProfileSections.IMAGES: {
          if (0 === eQ.length) break;
          let t = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("img", {
              className: eg.errorImage,
              src: ev,
              "aria-hidden": !0,
              alt: ""
            }), (0, l.jsx)(I.Heading, {
              variant: "heading-xl/semibold",
              children: eI.default.Messages.ERRORS_IMAGE_NOT_FOUND
            })]
          });
          eQ.forEach((e, t) => {
            null != eB ? e.alt = eI.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
              index: t + 1,
              totalImages: eQ.length,
              name: eB.name
            }) : e.alt = eI.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT
          }), e.push((0, l.jsx)(A.default, {
            className: eg.carousel,
            themedPagination: !0,
            items: eQ,
            autoplayInterval: 8e3,
            paused: !eM,
            videoAutoPlay: !0,
            onCurrentItemClick: eX,
            errorComponent: t,
            onImageLoad: e => {
              let {
                src: t,
                loadTimeMs: i
              } = e;
              null != i && null != eB && H.default.track(ef.AnalyticEvents.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                application_id: eB.id,
                load_time_ms: i,
                src: t
              })
            }
          }));
          break
        }
        case em.ApplicationDirectoryProfileSections.PREMIUM:
          e9 && (null == eB ? void 0 : eB.primary_sku_id) != null && e.push((0, l.jsx)(y.default, {
            applicationId: eB.id,
            applicationPrimarySkuId: null == eB ? void 0 : eB.primary_sku_id,
            analyticsLocation: ef.AnalyticsLocations.APP_DIRECTORY_PROFILE,
            forcesTransitionToGuild: !0
          }));
          break;
        case em.ApplicationDirectoryProfileSections.PRIVACY:
          tn && e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(I.Heading, {
              className: eg.sectionHeader,
              variant: "heading-md/semibold",
              children: eI.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
            }), (0, l.jsx)(g.default, {
              className: eg.commandList,
              grantedPermissions: eZ,
              grantedPermissionsHeader: eI.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
            })]
          })), ts && e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(I.Heading, {
              className: eg.sectionHeader,
              variant: "heading-md/semibold",
              children: eI.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
            }), (0, l.jsx)(ed.default, {
              application: eB
            })]
          }))
      }
      return tl(t), 0 === e.length && h !== em.ApplicationDirectoryProfileSections.GENERAL && null != eB && eY(), e.map((e, t) => (0, l.jsx)("div", {
        className: eg.section,
        children: e
      }, t))
    }, [h, eY, eB, eL, te, e8, eQ, eM, eX, e9, tn, ts, eZ]),
    tu = a.useMemo(() => {
      let e = [{
        sectionName: em.ApplicationDirectoryProfileSections.GENERAL,
        sectionText: eI.default.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL
      }];
      return eQ.length > 0 && e.push({
        sectionName: em.ApplicationDirectoryProfileSections.IMAGES,
        sectionText: eI.default.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES
      }), e9 && !tc && e.push({
        sectionName: em.ApplicationDirectoryProfileSections.PREMIUM,
        sectionText: eI.default.Messages.APP_DIRECTORY_PROFILE_TAB_PREMIUM
      }), (tn || ts) && e.push({
        sectionName: em.ApplicationDirectoryProfileSections.PRIVACY,
        sectionText: eI.default.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY
      }), e
    }, [eQ.length, e9, tn, ts, tc]);
  return _ = null == eB ? null == eP || eP === J.FetchState.FETCHING ? (0, l.jsx)(el.default, {
    loading: eP === J.FetchState.FETCHING
  }) : (0, l.jsx)("div", {
    className: eg.__invalid_page,
    children: (0, l.jsxs)("div", {
      className: eg.emptyContainer,
      children: [(0, l.jsx)("img", {
        className: eg.emptyImage,
        src: ev,
        alt: ""
      }), (0, l.jsx)(I.Heading, {
        variant: "heading-xl/semibold",
        children: eI.default.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
      })]
    })
  }) : (0, l.jsxs)(el.default, {
    loading: eP === J.FetchState.FETCHING,
    children: [(0, l.jsx)(eO, {
      app: eB,
      iconSrc: eH
    }), (0, l.jsxs)("div", {
      className: eg.__invalid_page,
      children: [(0, l.jsxs)("div", {
        className: eg.header,
        children: [(0, l.jsxs)("div", {
          className: eg.headerSidebar,
          children: [(0, l.jsx)("img", {
            className: eg.headerIcon,
            alt: "",
            "aria-hidden": !0,
            src: eH,
            width: eR,
            height: eR
          }), (0, l.jsx)(ei.default, {
            application: eB,
            mutualGuilds: eU,
            mutualGuildShownMax: 3,
            compact: !0
          })]
        }), (0, l.jsxs)("div", {
          className: eg.headerContent,
          children: [(0, l.jsxs)("div", {
            className: eg.headerNameAndButtons,
            children: [(0, l.jsxs)("div", {
              className: eg.headerNameAndIcon,
              children: [(0, l.jsx)(I.Heading, {
                className: eg.name,
                variant: "heading-xxl/semibold",
                children: eB.name
              }), e9 && (0, l.jsx)(I.Tooltip, {
                tooltipClassName: eg.premiumIconTooltip,
                text: eI.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                children: e => (0, l.jsx)("img", {
                  ...e,
                  alt: eI.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                  className: eg.premiumIcon,
                  src: i("744050")
                })
              }), e6 && (0, l.jsx)(ea.default, {
                className: eg.partnerBadge
              })]
            }), (0, l.jsxs)("div", {
              className: eg.buttons,
              children: [tc && (0, l.jsx)(eo.ApplicationDirectoryStoreBtn, {
                appId: eB.id,
                guildId: null != E ? E : void 0
              }), (0, l.jsx)(I.Button, {
                onClick: e5,
                color: I.Button.Colors.PRIMARY,
                children: e2 ? eI.default.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : eI.default.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
              }), (0, l.jsx)(I.Button, {
                color: I.Button.Colors.BRAND,
                onClick: e7,
                disabled: !eW,
                children: eI.default.Messages.APPLICATION_ADD_BUTTON
              }), (0, l.jsx)(I.Popout, {
                renderPopout: e => {
                  let {
                    closePopout: t
                  } = e;
                  return e1(t)
                },
                position: "left",
                align: "top",
                animation: I.Popout.Animation.NONE,
                children: e => (0, l.jsx)(I.Clickable, {
                  className: eg.overflow,
                  ...e,
                  children: (0, l.jsx)(Y.default, {
                    width: 20,
                    height: 20,
                    className: eg.iconInteractive
                  })
                })
              })]
            })]
          }), (0, l.jsx)(e_.default, {
            activeSection: h,
            setSection: eJ,
            shownSections: tu
          })]
        })]
      }), (0, l.jsxs)("div", {
        className: eg.contentContainer,
        children: [(0, l.jsxs)("div", {
          className: eg.content,
          children: [td, null != eN && eN.length > 0 ? (0, l.jsxs)(l.Fragment, {
            children: [ti && (0, l.jsx)("div", {
              className: eg.separator
            }), (0, l.jsxs)("div", {
              className: eg.section,
              children: [(0, l.jsx)(I.Heading, {
                className: eg.relatedHeader,
                variant: "eyebrow",
                children: eI.default.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
              }), (0, l.jsx)(el.default, {
                loading: S,
                children: (0, l.jsx)(et.default, {
                  applications: eN,
                  onViewOne: e$
                })
              })]
            })]
          }) : null]
        }), (0, l.jsx)(ep.default, {
          className: eg.sidebar,
          application: eB,
          guildId: E,
          onViewCategory: eq,
          onClickGuildWidget: ew
        })]
      })]
    })]
  }), (0, l.jsx)(q.default, {
    children: _
  })
}

function eS(e) {
  switch (e.type) {
    case E.ApplicationDirectoryEntryCarouselItemType.MEDIA_PROXY:
      var t;
      let i = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
      return {
        type: ef.CarouselMediaTypes.IMG, width: 0, height: 0, src: i
      };
    case E.ApplicationDirectoryEntryCarouselItemType.YOUTUBE:
      let l = eN(e.url);
      if (null != l) return {
        type: ef.CarouselMediaTypes.YOUTUBE_VIDEO,
        youtubeVideoId: l
      }
  }
  return console.warn("Unsupported carousel item", e), null
}
let ej = e => {
    let t, {
      onToggle: i,
      isViewAll: a
    } = e;
    return t = a ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(I.Text, {
        className: eg.showMoreButtonText,
        variant: "eyebrow",
        children: eI.default.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
      }), (0, l.jsx)(w.default, {
        className: eg.showMoreButtonIcon
      })]
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(I.Text, {
        className: eg.showMoreButtonText,
        variant: "eyebrow",
        children: eI.default.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
      }), (0, l.jsx)(G.default, {
        className: eg.showMoreButtonIcon
      })]
    }), (0, l.jsx)(eL, {
      children: (0, l.jsx)(I.Button, {
        look: I.Button.Looks.BLANK,
        color: I.Button.Colors.TRANSPARENT,
        size: I.Button.Sizes.NONE,
        className: eg.showMoreButton,
        innerClassName: eg.showMoreButtonInner,
        onClick: i,
        children: t
      })
    })
  },
  eL = e => {
    let {
      className: t,
      contentClassName: i,
      children: a
    } = e;
    return (0, l.jsxs)("div", {
      className: s()([eg.dividerContainer, t]),
      children: [(0, l.jsx)("div", {
        className: eg.divider
      }), null != a ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: s()(eg.contentDivider, i),
          children: a
        }), (0, l.jsx)("div", {
          className: eg.divider
        })]
      }) : null]
    })
  };

function eO(e) {
  let {
    app: t,
    iconSrc: i
  } = e, n = (0, S.default)(i, f.default.unsafe_rawColors.PRIMARY_800.css), {
    bot: s
  } = t, r = (0, m.useStateFromStores)([C.default], () => C.default.useReducedMotion), o = a.useMemo(() => {
    let e = {
      backgroundColor: n
    };
    if (null != s) {
      let t = (0, V.getUserBannerURL)({
        id: s.id,
        banner: s.banner,
        size: 1024,
        canAnimate: !1
      });
      if (null != t && (e["--custom-background-static"] = "url(".concat(t), e.height = "212px"), !r) {
        let t = (0, V.getUserBannerURL)({
          id: s.id,
          banner: s.banner,
          size: 1024,
          canAnimate: !0
        });
        null != t && (e["--custom-background-animated"] = "url(".concat(t))
      }
    }
    return e
  }, [n, s, r]);
  return (0, l.jsx)("div", {
    style: o,
    className: eg.headerBanner
  })
}