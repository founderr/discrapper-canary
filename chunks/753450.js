"use strict";
l.r(t), l.d(t, {
  default: function() {
    return eO
  },
  getApplicationDirectoryProfileUrl: function() {
    return ej
  },
  getYouTubeVideoIdFromUrl: function() {
    return eL
  }
}), l("610138"), l("216116"), l("78328"), l("815648"), l("47120"), l("315314"), l("789020"), l("653041");
var i = l("735250"),
  a = l("470079"),
  n = l("120356"),
  s = l.n(n),
  r = l("525654"),
  o = l.n(r),
  c = l("302454"),
  d = l.n(c),
  u = l("873546"),
  p = l("149765"),
  m = l("468194"),
  f = l("442837"),
  _ = l("692547"),
  h = l("365433"),
  I = l("860738"),
  g = l("712695"),
  v = l("555730"),
  A = l("477690"),
  E = l("481060"),
  R = l("995648"),
  x = l("445986"),
  T = l("9807"),
  C = l("911969"),
  N = l("330726"),
  P = l("782568"),
  S = l("607070"),
  j = l("581364"),
  L = l("970321"),
  O = l("283836"),
  y = l("220082"),
  D = l("252618"),
  M = l("299206"),
  b = l("422559"),
  k = l("270144"),
  F = l("864843"),
  B = l("703656"),
  w = l("588822"),
  U = l("706454"),
  G = l("314897"),
  Y = l("451478"),
  H = l("729035"),
  V = l("86813"),
  W = l("826026"),
  Z = l("808268"),
  K = l("626135"),
  z = l("768581"),
  Q = l("572004"),
  q = l("823379"),
  J = l("900849"),
  X = l("674588"),
  $ = l("264043"),
  ee = l("303383"),
  et = l("887706"),
  el = l("738130"),
  ei = l("4461"),
  ea = l("34674"),
  en = l("576958"),
  es = l("924489"),
  er = l("125909"),
  eo = l("409425"),
  ec = l("132871"),
  ed = l("147890"),
  eu = l("491576"),
  ep = l("95650"),
  em = l("940064"),
  ef = l("626004"),
  e_ = l("939893"),
  eh = l("430913"),
  eI = l("606183"),
  eg = l("272242"),
  ev = l("981631"),
  eA = l("558921"),
  eE = l("689938"),
  eR = l("798945"),
  ex = l("902294");
let eT = d().parserFor(e_.default),
  eC = d().reactFor(d().ruleOutput(e_.default, "react")),
  eN = (0, m.cssValueToNumber)(A.default.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
  eP = "redirect_to_support_server",
  eS = "start_application_install",
  ej = e => "".concat(location.protocol, "//").concat(location.host).concat(ev.Routes.APPLICATION_DIRECTORY_PROFILE(e)),
  eL = e => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null
  };

function eO(e) {
  var t, n, r, c;
  let d, {
      match: {
        params: {
          applicationId: m,
          section: _ = eg.ApplicationDirectoryProfileSections.GENERAL
        }
      }
    } = e,
    A = (0, ec.useApplicationDirectoryHistory)(e => e.guildId),
    C = (0, et.default)(),
    S = (0, f.useStateFromStores)([ee.default], () => ee.default.getFetchState({
      applicationId: m,
      guildId: A
    }) === ee.FetchState.FETCHING),
    y = a.useRef({
      applicationId: void 0,
      guildId: void 0
    }),
    {
      similarApplications: V,
      similarLoadId: W
    } = (0, f.useStateFromStoresObject)([ee.default], () => {
      let e = {
          applicationId: m,
          guildId: A
        },
        t = ee.default.getSimilarApplications(e);
      return null == t ? t = ee.default.getSimilarApplications(y.current) : y.current = e, {
        similarApplications: null == t ? void 0 : t.applications,
        similarLoadId: null == t ? void 0 : t.loadId
      }
    }),
    e_ = a.useMemo(() => null == V ? void 0 : V.slice(0, 3), [V]),
    eL = (0, f.useStateFromStores)([$.default], () => $.default.getApplicationFetchState(m)),
    [eO, eM] = a.useState(void 0),
    ek = a.useCallback(e => {
      if (null != m) {
        if (e === eg.ApplicationDirectoryProfileSections.GENERAL) {
          (0, ed.replaceAppDirectoryURLWith)(ev.Routes.APPLICATION_DIRECTORY_PROFILE(m));
          return
        }(0, ed.replaceAppDirectoryURLWith)(ev.Routes.APPLICATION_DIRECTORY_PROFILE_SECTION(m, e))
      }
    }, [m]),
    eF = (0, f.useStateFromStores)([Y.default], () => Y.default.isFocused()),
    eB = (0, f.useStateFromStores)([U.default], () => U.default.locale),
    ew = a.useRef(m),
    eU = (0, f.useStateFromStores)([$.default], () => {
      let e = $.default.getApplication(m);
      return null == e ? e = $.default.getApplication(ew.current) : ew.current = m, e
    }),
    eG = (0, eu.default)({
      application: eU
    }),
    eY = (0, f.useStateFromStores)([G.default], () => G.default.getSessionId());
  (0, D.usePageTitle)({
    location: null == eU ? void 0 : eU.name
  });
  let eH = a.useCallback(async () => {
    try {
      var e;
      let t = null == eU ? void 0 : null === (e = eU.guild) || void 0 === e ? void 0 : e.id;
      if (null != t) {
        (null == eU ? void 0 : eU.id) != null && K.default.track(ev.AnalyticEvents.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
          application_id: eU.id,
          guild_id: t
        });
        let e = {
          page: ev.AnalyticsPages.APPLICATION_DIRECTORY
        };
        await (0, J.startLurking)(t, e, {
          setsHistorySnapshot: !1
        })
      }
    } catch {}
  }, [eU]);
  a.useEffect(() => {
    if (null == eU) return;
    let e = new URL(location.href);
    if (C && null != eY && "true" === e.searchParams.get(eP)) {
      e.searchParams.delete(eP);
      let t = e.pathname + e.search;
      (0, B.replaceWith)(t), eH()
    }
  }, [C, eH, eY, eU]);
  let eV = a.useCallback(() => {
      var e;
      null != (null == eU ? void 0 : null === (e = eU.guild) || void 0 === e ? void 0 : e.id) && (C ? eH() : (0, ea.redirectToLogin)({
        [eP]: "true"
      }))
    }, [eU, C, eH]),
    eW = a.useCallback(() => {
      (0, ed.replaceAppDirectoryURLWith)("".concat(ev.Routes.APPLICATION_DIRECTORY_PROFILE(m)).concat(location.search))
    }, [m]);
  a.useEffect(() => {
    _ === eg.ApplicationDirectoryProfileSections.GENERAL && eW()
  }, [eW, _]), a.useEffect(() => {
    null != m && X.getApplication(m)
  }, [m]), a.useEffect(() => {
    if ((null == eU ? void 0 : eU.directory_entry) != null) {
      let e = eU.directory_entry,
        t = null == e ? void 0 : e.popular_application_commands;
      null != t ? eM(t.map(e => (0, j.buildCommand)({
        rootCommand: e,
        command: e,
        applicationId: e.application_id
      }))) : eM(void 0)
    }
  }, [eU]);
  let eZ = z.default.getApplicationIconURL({
      id: null !== (r = null == eU ? void 0 : eU.id) && void 0 !== r ? r : "-1",
      icon: null == eU ? void 0 : eU.icon,
      size: eN
    }),
    eK = (0, M.default)({
      id: null !== (c = null == eU ? void 0 : eU.id) && void 0 !== c ? c : "",
      label: eE.default.Messages.COPY_ID_APPLICATION
    }),
    {
      canInstall: ez,
      install: eQ
    } = (0, ei.useInstallApplication)(eU, A),
    eq = null === (t = (0, ec.getPreviousView)()) || void 0 === t ? void 0 : t.type;
  a.useEffect(() => {
    (null == eU ? void 0 : eU.id) != null && K.default.track(ev.AnalyticEvents.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: "product",
      previous_page: eq,
      application_id: eU.id,
      guild_id: A,
      shown_mutual_guilds_count: eG.length,
      profile_section: _,
      referrer: document.referrer
    })
  }, [null == eU ? void 0 : eU.id, A, eG]);
  let eJ = a.useMemo(() => {
      var e;
      let t = null == eU ? void 0 : null === (e = eU.install_params) || void 0 === e ? void 0 : e.permissions;
      if (null != t) return b.OrderedPermissions.filter(e => p.has(p.deserialize(t), e))
    }, [null == eU ? void 0 : null === (n = eU.install_params) || void 0 === n ? void 0 : n.permissions]),
    eX = a.useCallback(e => {
      ek(e), (null == eU ? void 0 : eU.id) != null && K.default.track(ev.AnalyticEvents.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
        application_id: eU.id,
        guild_id: A,
        tab_name: e
      })
    }, [null == eU ? void 0 : eU.id, A, ek]),
    e$ = a.useMemo(() => {
      var e, t, l;
      return null !== (l = (null !== (t = null == eU ? void 0 : null === (e = eU.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== t ? t : []).map(ey).filter(q.isNotNullish)) && void 0 !== l ? l : []
    }, [eU]),
    e0 = a.useCallback((e, t) => {
      if (e.type === ev.CarouselMediaTypes.IMG) {
        let t = e$.filter(e => e.type === ev.CarouselMediaTypes.IMG),
          a = t.findIndex(t => t === e);
        if (a < 0) return;
        let n = t.map(e => ({
          src: (0, x.transformAssetURL)(e.src),
          width: e.width,
          height: e.height
        }));
        (0, E.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([l.e("99387"), l.e("41814")]).then(l.bind(l, "895023"));
          return t => {
            let {
              ...l
            } = t;
            return (0, i.jsx)(e, {
              ...l,
              items: n,
              startingIndex: a,
              modalCarouselItemClassName: eR.appSlide
            })
          }
        })
      }
    }, [e$]),
    e1 = a.useCallback(e => {
      (null == eU ? void 0 : eU.id) != null && K.default.track(ev.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
        current_page: "product",
        category: e.name,
        category_id: e.id,
        application_id: eU.id,
        guild_id: A
      }), (0, ed.goToCategory)({
        categoryId: e.id
      })
    }, [eU, A]);
  a.useEffect(() => {
    null != m && X.getSimilarApplications({
      applicationId: m,
      guildId: A
    })
  }, [m, A]);
  let e2 = a.useCallback(e => {
      let {
        application: t,
        mutualGuilds: l
      } = e;
      (null == eU ? void 0 : eU.id) != null && K.default.track(ev.AnalyticEvents.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
        current_page: "product",
        application_id: eU.id,
        suggested_application_id: t.id,
        load_id: W,
        guild_id: A,
        shown_mutual_guilds_count: l.length
      }), (0, ed.goToApplication)({
        applicationId: t.id
      })
    }, [null == eU ? void 0 : eU.id, W, A]),
    e4 = a.useCallback(() => {
      null != eU && (0, P.default)(function(e, t) {
        let l = "https://".concat(ev.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new"),
          i = new URLSearchParams;
        return i.append("tf_12275088515223", "field_value_dc_category_report_an_app_bot"), i.append("tf_12276208289431", "field_value_dc_reported_action_app_directory"), i.append("tf_12094971213335", t.id), i.append("ticket_form_id", "12275528604823"), i.append("tf_subject", "App Directory Report ".concat(t.name, " ").concat(t.id)), "".concat(l, "?").concat(i.toString())
      }(eB, eU))
    }, [eB, eU]),
    e5 = a.useCallback(e => (0, i.jsxs)(E.Menu, {
      navId: "application-directory-profile",
      "aria-label": eE.default.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
      onClose: e,
      onSelect: void 0,
      children: [(0, i.jsx)(E.MenuGroup, {
        children: (0, i.jsx)(E.MenuItem, {
          id: "report",
          label: eE.default.Messages.REPORT_APP,
          color: "danger",
          action: e4
        })
      }), null != eK ? (0, i.jsx)(E.MenuGroup, {
        children: eK
      }) : null]
    }), [eK, e4]),
    [e9, e3] = (0, N.default)(!1, 1e3),
    e7 = a.useCallback(() => {
      null != eU && (K.default.track(ev.AnalyticEvents.APP_SHARE_BUTTON_CLICKED, {
        source: "product_page",
        application_id: eU.id,
        guild_id: A
      }), (0, Q.copy)(ej(eU.id)), e3(!0))
    }, [eU, e3, A]);
  a.useEffect(() => {
    let e = new URL(location.href);
    if (C && "true" === e.searchParams.get(eS)) {
      e.searchParams.delete(eS);
      let t = e.pathname + e.search;
      (0, B.replaceWith)(t), eQ("product_page")
    }
  }, [C, eQ]);
  let e6 = a.useCallback(() => {
      null != eU && (C ? eQ("product_page") : (K.default.track(ev.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
        application_id: m,
        guild_id: A,
        auth_type: null != eU.custom_install_url ? "custom_url" : "in_app",
        source: "product_page",
        device_platform: u.isMobile ? "mobile_web" : "desktop_web"
      }), (0, ea.redirectToLogin)({
        [eS]: "true"
      })))
    }, [eU, C, eQ, m, A]),
    {
      applicationSubscriptionListingsShown: e8
    } = (0, k.default)({
      applicationId: null == eU ? void 0 : eU.id,
      groupListingId: null == eU ? void 0 : eU.primary_sku_id,
      guildId: A
    }),
    te = (null == eU ? void 0 : eU.id) === eA.MIDJOURNEY_BOT_ID,
    [tt, tl] = a.useState(!1),
    [ti, ta] = a.useState(!1),
    [tn, ts] = a.useState(!0),
    tr = e => {
      null != e && tl(e.scrollHeight > e.clientHeight)
    },
    to = null != eJ && eJ.length > 0,
    tc = (null == eU ? void 0 : eU.flags) != null,
    td = (0, L.useAppStorefrontAvailable)(null != m ? m : "");
  a.useEffect(() => {
    td && null != m && (0, O.fetchFreshStorefrontData)(m)
  }, [td, m]);
  let tu = a.useMemo(() => {
      let e = [],
        t = !0;
      switch (_) {
        case eg.ApplicationDirectoryProfileSections.GENERAL: {
          var l, a;
          let n = null == eU ? void 0 : null === (l = eU.directory_entry) || void 0 === l ? void 0 : l.detailed_description;
          null != n && n.length > 0 ? (e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(E.Heading, {
              className: eR.sectionHeader,
              variant: "heading-md/semibold",
              children: eE.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, i.jsx)("div", {
              ref: tr,
              className: s()({
                [eR.descriptionClamp]: !ti,
                [eR.descriptionClampSafari]: !ti && "Safari" === o().name
              }),
              children: (0, i.jsx)(H.default, {
                className: eR.detailedDescription,
                parser: eT,
                output: eC,
                state: {
                  allowLinks: !0
                },
                children: n
              })
            }), (tt || ti) && (0, i.jsx)(eD, {
              isViewAll: ti,
              onToggle: () => {
                ta(e => !e)
              }
            })]
          })), t = !1) : (null == eU ? void 0 : null === (a = eU.directory_entry) || void 0 === a ? void 0 : a.short_description) !== void 0 ? e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(E.Heading, {
              className: eR.sectionHeader,
              variant: "heading-md/semibold",
              children: eE.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, i.jsx)("span", {
              children: eU.directory_entry.short_description
            })]
          })) : (null == eU ? void 0 : eU.description) != null && e.push((0, i.jsx)(w.default, {
            className: eR.description,
            userBio: eU.description
          })), null != eO && eO.length > 0 && (e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(E.Heading, {
              className: eR.sectionHeader,
              variant: "heading-md/semibold",
              children: eE.default.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
            }), (0, i.jsx)(em.default, {
              className: eR.commandList,
              commands: eO
            })]
          })), t = !0);
          break
        }
        case eg.ApplicationDirectoryProfileSections.IMAGES: {
          if (0 === e$.length) break;
          let t = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("img", {
              className: eR.errorImage,
              src: ex,
              "aria-hidden": !0,
              alt: ""
            }), (0, i.jsx)(E.Heading, {
              variant: "heading-xl/semibold",
              children: eE.default.Messages.ERRORS_IMAGE_NOT_FOUND
            })]
          });
          e$.forEach((e, t) => {
            null != eU ? e.alt = eE.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
              index: t + 1,
              totalImages: e$.length,
              name: eU.name
            }) : e.alt = eE.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT
          }), e.push((0, i.jsx)(T.default, {
            className: eR.carousel,
            themedPagination: !0,
            items: e$,
            autoplayInterval: 8e3,
            paused: !eF,
            videoAutoPlay: !0,
            onCurrentItemClick: e0,
            errorComponent: t,
            onImageLoad: e => {
              let {
                src: t,
                loadTimeMs: l
              } = e;
              null != l && null != eU && K.default.track(ev.AnalyticEvents.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                application_id: eU.id,
                load_time_ms: l,
                src: t
              })
            }
          }));
          break
        }
        case eg.ApplicationDirectoryProfileSections.STORE:
          td && null != m && e.push((0, i.jsx)(ep.ApplicationDirectoryStore, {
            appId: m,
            guildId: null != A ? A : void 0
          }));
          break;
        case eg.ApplicationDirectoryProfileSections.PREMIUM:
          e8 && (null == eU ? void 0 : eU.primary_sku_id) != null && e.push((0, i.jsx)(F.default, {
            applicationId: eU.id,
            applicationPrimarySkuId: null == eU ? void 0 : eU.primary_sku_id,
            analyticsLocation: ev.AnalyticsLocations.APP_DIRECTORY_PROFILE,
            forcesTransitionToGuild: !0
          }));
          break;
        case eg.ApplicationDirectoryProfileSections.PRIVACY:
          to && e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(E.Heading, {
              className: eR.sectionHeader,
              variant: "heading-md/semibold",
              children: eE.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
            }), (0, i.jsx)(R.default, {
              className: eR.commandList,
              grantedPermissions: eJ,
              grantedPermissionsHeader: eE.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
            })]
          })), tc && e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(E.Heading, {
              className: eR.sectionHeader,
              variant: "heading-md/semibold",
              children: eE.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
            }), (0, i.jsx)(ef.default, {
              application: eU
            })]
          }))
      }
      return ts(t), 0 === e.length && _ !== eg.ApplicationDirectoryProfileSections.GENERAL && null != eU && eW(), e.map((e, t) => (0, i.jsx)("div", {
        className: eR.section,
        children: e
      }, t))
    }, [_, eW, eU, eO, ti, tt, e$, eF, e0, td, m, A, e8, to, tc, eJ]),
    tp = a.useMemo(() => {
      let e = [{
        name: eg.ApplicationDirectoryProfileSections.GENERAL,
        text: eE.default.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL,
        Icon: h.AppsIcon
      }];
      return e$.length > 0 && e.push({
        name: eg.ApplicationDirectoryProfileSections.IMAGES,
        text: eE.default.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES,
        Icon: I.ImagesIcon
      }), td && e.push({
        name: eg.ApplicationDirectoryProfileSections.STORE,
        text: eE.default.Messages.APP_DIRECTORY_PROFILE_TAB_STORE,
        Icon: v.ShopSparkleIcon
      }), e8 && !td && e.push({
        name: eg.ApplicationDirectoryProfileSections.PREMIUM,
        text: eE.default.Messages.APP_DIRECTORY_PROFILE_TAB_PREMIUM,
        Icon: v.ShopSparkleIcon
      }), (to || tc) && e.push({
        name: eg.ApplicationDirectoryProfileSections.PRIVACY,
        text: eE.default.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY,
        Icon: g.PrivacyAndSafetyIcon
      }), e
    }, [e$.length, e8, to, tc, td]);
  return d = null == eU ? null == eL || eL === $.FetchState.FETCHING ? (0, i.jsx)(er.default, {
    loading: eL === $.FetchState.FETCHING
  }) : (0, i.jsx)("div", {
    className: eR.__invalid_page,
    children: (0, i.jsxs)("div", {
      className: eR.emptyContainer,
      children: [(0, i.jsx)("img", {
        className: eR.emptyImage,
        src: ex,
        alt: ""
      }), (0, i.jsx)(E.Heading, {
        variant: "heading-xl/semibold",
        children: eE.default.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
      })]
    })
  }) : (0, i.jsxs)(er.default, {
    loading: eL === $.FetchState.FETCHING,
    children: [(0, i.jsx)(eb, {
      app: eU,
      iconSrc: eZ
    }), (0, i.jsxs)("div", {
      className: eR.__invalid_page,
      children: [(0, i.jsxs)("div", {
        className: eR.header,
        children: [(0, i.jsxs)("div", {
          className: eR.headerSidebar,
          children: [(0, i.jsx)("img", {
            className: eR.headerIcon,
            alt: "",
            "aria-hidden": !0,
            src: eZ,
            width: eN,
            height: eN
          }), (0, i.jsx)(es.default, {
            application: eU,
            mutualGuilds: eG,
            mutualGuildShownMax: 3,
            compact: !0
          })]
        }), (0, i.jsxs)("div", {
          className: eR.headerContent,
          children: [(0, i.jsxs)("div", {
            className: eR.headerNameAndButtons,
            children: [(0, i.jsxs)("div", {
              className: eR.headerNameAndIcon,
              children: [(0, i.jsx)(E.Heading, {
                className: eR.name,
                variant: "heading-xxl/semibold",
                children: eU.name
              }), e8 && (0, i.jsx)(E.Tooltip, {
                tooltipClassName: eR.premiumIconTooltip,
                text: eE.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                children: e => (0, i.jsx)("img", {
                  ...e,
                  alt: eE.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                  className: eR.premiumIcon,
                  src: l("744050")
                })
              }), te && (0, i.jsx)(eo.default, {
                className: eR.partnerBadge
              })]
            }), (0, i.jsxs)("div", {
              className: eR.buttons,
              children: [(0, i.jsx)(E.Button, {
                onClick: e7,
                color: E.Button.Colors.PRIMARY,
                children: e9 ? eE.default.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : eE.default.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
              }), (0, i.jsx)(E.Button, {
                color: E.Button.Colors.BRAND,
                onClick: e6,
                disabled: !ez,
                children: eE.default.Messages.APPLICATION_ADD_BUTTON
              }), (0, i.jsx)(E.Popout, {
                renderPopout: e => {
                  let {
                    closePopout: t
                  } = e;
                  return e5(t)
                },
                position: "left",
                align: "top",
                animation: E.Popout.Animation.NONE,
                children: e => (0, i.jsx)(E.Clickable, {
                  className: eR.overflow,
                  ...e,
                  children: (0, i.jsx)(Z.default, {
                    width: 20,
                    height: 20,
                    className: eR.iconInteractive
                  })
                })
              })]
            })]
          }), (0, i.jsx)(eI.default, {
            activeSection: _,
            setSection: eX,
            sections: tp
          })]
        })]
      }), (0, i.jsxs)("div", {
        className: eR.contentContainer,
        children: [(0, i.jsxs)("div", {
          className: eR.content,
          children: [tu, null != e_ && e_.length > 0 ? (0, i.jsxs)(i.Fragment, {
            children: [tn && (0, i.jsx)("div", {
              className: eR.separator
            }), (0, i.jsxs)("div", {
              className: eR.section,
              children: [(0, i.jsx)(E.Heading, {
                className: eR.relatedHeader,
                variant: "eyebrow",
                children: eE.default.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
              }), (0, i.jsx)(er.default, {
                loading: S,
                children: (0, i.jsx)(en.default, {
                  applications: e_,
                  onViewOne: e2
                })
              })]
            })]
          }) : null]
        }), (0, i.jsx)(eh.default, {
          className: eR.sidebar,
          application: eU,
          guildId: A,
          onViewCategory: e1,
          onClickGuildWidget: eV
        })]
      })]
    })]
  }), (0, i.jsx)(el.default, {
    children: d
  })
}

function ey(e) {
  switch (e.type) {
    case C.ApplicationDirectoryEntryCarouselItemType.MEDIA_PROXY:
      var t;
      let l = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
      return {
        type: ev.CarouselMediaTypes.IMG, width: 0, height: 0, src: l
      };
    case C.ApplicationDirectoryEntryCarouselItemType.YOUTUBE:
      let i = eL(e.url);
      if (null != i) return {
        type: ev.CarouselMediaTypes.YOUTUBE_VIDEO,
        youtubeVideoId: i
      }
  }
  return console.warn("Unsupported carousel item", e), null
}
let eD = e => {
    let t, {
      onToggle: l,
      isViewAll: a
    } = e;
    return t = a ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(E.Text, {
        className: eR.showMoreButtonText,
        variant: "eyebrow",
        children: eE.default.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
      }), (0, i.jsx)(W.default, {
        className: eR.showMoreButtonIcon
      })]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(E.Text, {
        className: eR.showMoreButtonText,
        variant: "eyebrow",
        children: eE.default.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
      }), (0, i.jsx)(V.default, {
        className: eR.showMoreButtonIcon
      })]
    }), (0, i.jsx)(eM, {
      children: (0, i.jsx)(E.Button, {
        look: E.Button.Looks.BLANK,
        color: E.Button.Colors.TRANSPARENT,
        size: E.Button.Sizes.NONE,
        className: eR.showMoreButton,
        innerClassName: eR.showMoreButtonInner,
        onClick: l,
        children: t
      })
    })
  },
  eM = e => {
    let {
      className: t,
      contentClassName: l,
      children: a
    } = e;
    return (0, i.jsxs)("div", {
      className: s()([eR.dividerContainer, t]),
      children: [(0, i.jsx)("div", {
        className: eR.divider
      }), null != a ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: s()(eR.contentDivider, l),
          children: a
        }), (0, i.jsx)("div", {
          className: eR.divider
        })]
      }) : null]
    })
  };

function eb(e) {
  let {
    app: t,
    iconSrc: l
  } = e, n = (0, y.default)(l, _.default.unsafe_rawColors.PRIMARY_800.css), {
    bot: s
  } = t, r = (0, f.useStateFromStores)([S.default], () => S.default.useReducedMotion), o = a.useMemo(() => {
    let e = {
      backgroundColor: n
    };
    if (null != s) {
      let t = (0, z.getUserBannerURL)({
        id: s.id,
        banner: s.banner,
        size: 1024,
        canAnimate: !1
      });
      if (null != t && (e["--custom-background-static"] = "url(".concat(t), e.height = "212px"), !r) {
        let t = (0, z.getUserBannerURL)({
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
  return (0, i.jsx)("div", {
    style: o,
    className: eR.headerBanner
  })
}