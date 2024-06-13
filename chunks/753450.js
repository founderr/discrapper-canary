"use strict";
i.r(t), i.d(t, {
  default: function() {
    return ej
  },
  getApplicationDirectoryProfileUrl: function() {
    return eO
  },
  getYouTubeVideoIdFromUrl: function() {
    return eL
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
  f = i("468194"),
  m = i("442837"),
  _ = i("692547"),
  h = i("365433"),
  I = i("860738"),
  g = i("712695"),
  v = i("555730"),
  A = i("477690"),
  E = i("481060"),
  R = i("995648"),
  T = i("445986"),
  C = i("9807"),
  P = i("911969"),
  N = i("330726"),
  x = i("782568"),
  S = i("607070"),
  O = i("581364"),
  L = i("970321"),
  j = i("283836"),
  y = i("220082"),
  D = i("252618"),
  b = i("299206"),
  M = i("422559"),
  F = i("270144"),
  U = i("864843"),
  k = i("703656"),
  w = i("588822"),
  B = i("706454"),
  G = i("314897"),
  Y = i("451478"),
  H = i("729035"),
  V = i("86813"),
  K = i("826026"),
  W = i("808268"),
  Z = i("626135"),
  z = i("768581"),
  q = i("572004"),
  Q = i("823379"),
  J = i("900849"),
  X = i("674588"),
  $ = i("264043"),
  ee = i("303383"),
  et = i("887706"),
  ei = i("738130"),
  el = i("4461"),
  ea = i("34674"),
  en = i("576958"),
  es = i("924489"),
  er = i("125909"),
  eo = i("409425"),
  ec = i("132871"),
  ed = i("147890"),
  eu = i("491576"),
  ep = i("95650"),
  ef = i("940064"),
  em = i("626004"),
  e_ = i("939893"),
  eh = i("430913"),
  eI = i("606183"),
  eg = i("272242"),
  ev = i("981631"),
  eA = i("558921"),
  eE = i("689938"),
  eR = i("798945"),
  eT = i("902294");
let eC = d().parserFor(e_.default),
  eP = d().reactFor(d().ruleOutput(e_.default, "react")),
  eN = (0, f.cssValueToNumber)(A.default.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
  ex = "redirect_to_support_server",
  eS = "start_application_install",
  eO = e => "".concat(location.protocol, "//").concat(location.host).concat(ev.Routes.APPLICATION_DIRECTORY_PROFILE(e)),
  eL = e => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null
  };

function ej(e) {
  var t, n, r, c;
  let d, {
      match: {
        params: {
          applicationId: f,
          section: _ = eg.ApplicationDirectoryProfileSections.GENERAL
        }
      }
    } = e,
    A = (0, ec.useApplicationDirectoryHistory)(e => e.guildId),
    P = (0, et.default)(),
    S = (0, m.useStateFromStores)([ee.default], () => ee.default.getFetchState({
      applicationId: f,
      guildId: A
    }) === ee.FetchState.FETCHING),
    y = a.useRef({
      applicationId: void 0,
      guildId: void 0
    }),
    {
      similarApplications: V,
      similarLoadId: K
    } = (0, m.useStateFromStoresObject)([ee.default], () => {
      let e = {
          applicationId: f,
          guildId: A
        },
        t = ee.default.getSimilarApplications(e);
      return null == t ? t = ee.default.getSimilarApplications(y.current) : y.current = e, {
        similarApplications: null == t ? void 0 : t.applications,
        similarLoadId: null == t ? void 0 : t.loadId
      }
    }),
    e_ = a.useMemo(() => null == V ? void 0 : V.slice(0, 3), [V]),
    eL = (0, m.useStateFromStores)([$.default], () => $.default.getApplicationFetchState(f)),
    [ej, eb] = a.useState(void 0),
    eF = a.useCallback(e => {
      if (null != f) {
        if (e === eg.ApplicationDirectoryProfileSections.GENERAL) {
          (0, ed.replaceAppDirectoryURLWith)(ev.Routes.APPLICATION_DIRECTORY_PROFILE(f));
          return
        }(0, ed.replaceAppDirectoryURLWith)(ev.Routes.APPLICATION_DIRECTORY_PROFILE_SECTION(f, e))
      }
    }, [f]),
    eU = (0, m.useStateFromStores)([Y.default], () => Y.default.isFocused()),
    ek = (0, m.useStateFromStores)([B.default], () => B.default.locale),
    ew = a.useRef(f),
    eB = (0, m.useStateFromStores)([$.default], () => {
      let e = $.default.getApplication(f);
      return null == e ? e = $.default.getApplication(ew.current) : ew.current = f, e
    }),
    eG = (0, eu.default)({
      application: eB
    }),
    eY = (0, m.useStateFromStores)([G.default], () => G.default.getSessionId());
  (0, D.usePageTitle)({
    location: null == eB ? void 0 : eB.name
  });
  let eH = a.useCallback(async () => {
    try {
      var e;
      let t = null == eB ? void 0 : null === (e = eB.guild) || void 0 === e ? void 0 : e.id;
      if (null != t) {
        (null == eB ? void 0 : eB.id) != null && Z.default.track(ev.AnalyticEvents.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
          application_id: eB.id,
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
  }, [eB]);
  a.useEffect(() => {
    if (null == eB) return;
    let e = new URL(location.href);
    if (P && null != eY && "true" === e.searchParams.get(ex)) {
      e.searchParams.delete(ex);
      let t = e.pathname + e.search;
      (0, k.replaceWith)(t), eH()
    }
  }, [P, eH, eY, eB]);
  let eV = a.useCallback(() => {
      var e;
      null != (null == eB ? void 0 : null === (e = eB.guild) || void 0 === e ? void 0 : e.id) && (P ? eH() : (0, ea.redirectToLogin)({
        [ex]: "true"
      }))
    }, [eB, P, eH]),
    eK = a.useCallback(() => {
      (0, ed.replaceAppDirectoryURLWith)("".concat(ev.Routes.APPLICATION_DIRECTORY_PROFILE(f)).concat(location.search))
    }, [f]);
  a.useEffect(() => {
    _ === eg.ApplicationDirectoryProfileSections.GENERAL && eK()
  }, [eK, _]), a.useEffect(() => {
    null != f && X.getApplication(f)
  }, [f]), a.useEffect(() => {
    if ((null == eB ? void 0 : eB.directory_entry) != null) {
      let e = eB.directory_entry,
        t = null == e ? void 0 : e.popular_application_commands;
      null != t ? eb(t.map(e => (0, O.buildCommand)({
        rootCommand: e,
        command: e,
        applicationId: e.application_id
      }))) : eb(void 0)
    }
  }, [eB]);
  let eW = z.default.getApplicationIconURL({
      id: null !== (r = null == eB ? void 0 : eB.id) && void 0 !== r ? r : "-1",
      icon: null == eB ? void 0 : eB.icon,
      size: eN
    }),
    eZ = (0, b.default)({
      id: null !== (c = null == eB ? void 0 : eB.id) && void 0 !== c ? c : "",
      label: eE.default.Messages.COPY_ID_APPLICATION
    }),
    {
      canInstall: ez,
      install: eq
    } = (0, el.useInstallApplication)(eB, A),
    eQ = null === (t = (0, ec.getPreviousView)()) || void 0 === t ? void 0 : t.type;
  a.useEffect(() => {
    (null == eB ? void 0 : eB.id) != null && Z.default.track(ev.AnalyticEvents.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: "product",
      previous_page: eQ,
      application_id: eB.id,
      guild_id: A,
      shown_mutual_guilds_count: eG.length,
      profile_section: _,
      referrer: document.referrer
    })
  }, [null == eB ? void 0 : eB.id, A, eG]);
  let eJ = a.useMemo(() => {
      var e;
      let t = null == eB ? void 0 : null === (e = eB.install_params) || void 0 === e ? void 0 : e.permissions;
      if (null != t) return M.OrderedPermissions.filter(e => p.has(p.deserialize(t), e))
    }, [null == eB ? void 0 : null === (n = eB.install_params) || void 0 === n ? void 0 : n.permissions]),
    eX = a.useCallback(e => {
      eF(e), (null == eB ? void 0 : eB.id) != null && Z.default.track(ev.AnalyticEvents.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
        application_id: eB.id,
        guild_id: A,
        tab_name: e
      })
    }, [null == eB ? void 0 : eB.id, A, eF]),
    e$ = a.useMemo(() => {
      var e, t, i;
      return null !== (i = (null !== (t = null == eB ? void 0 : null === (e = eB.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== t ? t : []).map(ey).filter(Q.isNotNullish)) && void 0 !== i ? i : []
    }, [eB]),
    e0 = a.useCallback((e, t) => {
      if (e.type === ev.CarouselMediaTypes.IMG) {
        let t = e$.filter(e => e.type === ev.CarouselMediaTypes.IMG),
          a = t.findIndex(t => t === e);
        if (a < 0) return;
        let n = t.map(e => ({
          src: (0, T.transformAssetURL)(e.src),
          width: e.width,
          height: e.height
        }));
        (0, E.openModalLazy)(async () => {
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
              modalCarouselItemClassName: eR.appSlide
            })
          }
        })
      }
    }, [e$]),
    e1 = a.useCallback(e => {
      (null == eB ? void 0 : eB.id) != null && Z.default.track(ev.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
        current_page: "product",
        category: e.name,
        category_id: e.id,
        application_id: eB.id,
        guild_id: A
      }), (0, ed.goToCategory)({
        categoryId: e.id
      })
    }, [eB, A]);
  a.useEffect(() => {
    null != f && X.getSimilarApplications({
      applicationId: f,
      guildId: A
    })
  }, [f, A]);
  let e2 = a.useCallback(e => {
      let {
        application: t,
        mutualGuilds: i
      } = e;
      (null == eB ? void 0 : eB.id) != null && Z.default.track(ev.AnalyticEvents.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
        current_page: "product",
        application_id: eB.id,
        suggested_application_id: t.id,
        load_id: K,
        guild_id: A,
        shown_mutual_guilds_count: i.length
      }), (0, ed.goToApplication)({
        applicationId: t.id
      })
    }, [null == eB ? void 0 : eB.id, K, A]),
    e4 = a.useCallback(() => {
      null != eB && (0, x.default)(function(e, t) {
        let i = "https://".concat(ev.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new"),
          l = new URLSearchParams;
        return l.append("tf_12275088515223", "field_value_dc_category_report_an_app_bot"), l.append("tf_12276208289431", "field_value_dc_reported_action_app_directory"), l.append("tf_12094971213335", t.id), l.append("ticket_form_id", "12275528604823"), l.append("tf_subject", "App Directory Report ".concat(t.name, " ").concat(t.id)), "".concat(i, "?").concat(l.toString())
      }(ek, eB))
    }, [ek, eB]),
    e5 = a.useCallback(e => (0, l.jsxs)(E.Menu, {
      navId: "application-directory-profile",
      "aria-label": eE.default.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
      onClose: e,
      onSelect: void 0,
      children: [(0, l.jsx)(E.MenuGroup, {
        children: (0, l.jsx)(E.MenuItem, {
          id: "report",
          label: eE.default.Messages.REPORT_APP,
          color: "danger",
          action: e4
        })
      }), null != eZ ? (0, l.jsx)(E.MenuGroup, {
        children: eZ
      }) : null]
    }), [eZ, e4]),
    [e9, e7] = (0, N.default)(!1, 1e3),
    e3 = a.useCallback(() => {
      null != eB && (Z.default.track(ev.AnalyticEvents.APP_SHARE_BUTTON_CLICKED, {
        source: "product_page",
        application_id: eB.id,
        guild_id: A
      }), (0, q.copy)(eO(eB.id)), e7(!0))
    }, [eB, e7, A]);
  a.useEffect(() => {
    let e = new URL(location.href);
    if (P && "true" === e.searchParams.get(eS)) {
      e.searchParams.delete(eS);
      let t = e.pathname + e.search;
      (0, k.replaceWith)(t), eq("product_page")
    }
  }, [P, eq]);
  let e6 = a.useCallback(() => {
      null != eB && (P ? eq("product_page") : (Z.default.track(ev.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
        application_id: f,
        guild_id: A,
        auth_type: null != eB.custom_install_url ? "custom_url" : "in_app",
        source: "product_page",
        device_platform: u.isMobile ? "mobile_web" : "desktop_web"
      }), (0, ea.redirectToLogin)({
        [eS]: "true"
      })))
    }, [eB, P, eq, f, A]),
    {
      applicationSubscriptionListingsShown: e8
    } = (0, F.default)({
      applicationId: null == eB ? void 0 : eB.id,
      groupListingId: null == eB ? void 0 : eB.primary_sku_id,
      guildId: A
    }),
    te = (null == eB ? void 0 : eB.id) === eA.MIDJOURNEY_BOT_ID,
    [tt, ti] = a.useState(!1),
    [tl, ta] = a.useState(!1),
    [tn, ts] = a.useState(!0),
    tr = e => {
      null != e && ti(e.scrollHeight > e.clientHeight)
    },
    to = null != eJ && eJ.length > 0,
    tc = (null == eB ? void 0 : eB.flags) != null,
    td = (0, L.useAppStorefrontAvailable)(null != f ? f : "");
  a.useEffect(() => {
    td && null != f && (0, j.fetchFreshStorefrontData)(f)
  }, [td, f]);
  let tu = a.useMemo(() => {
      let e = [],
        t = !0;
      switch (_) {
        case eg.ApplicationDirectoryProfileSections.GENERAL: {
          var i, a;
          let n = null == eB ? void 0 : null === (i = eB.directory_entry) || void 0 === i ? void 0 : i.detailed_description;
          null != n && n.length > 0 ? (e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(E.Heading, {
              className: eR.sectionHeader,
              variant: "heading-md/semibold",
              children: eE.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, l.jsx)("div", {
              ref: tr,
              className: s()({
                [eR.descriptionClamp]: !tl,
                [eR.descriptionClampSafari]: !tl && "Safari" === o().name
              }),
              children: (0, l.jsx)(H.default, {
                className: eR.detailedDescription,
                parser: eC,
                output: eP,
                state: {
                  allowLinks: !0
                },
                children: n
              })
            }), (tt || tl) && (0, l.jsx)(eD, {
              isViewAll: tl,
              onToggle: () => {
                ta(e => !e)
              }
            })]
          })), t = !1) : (null == eB ? void 0 : null === (a = eB.directory_entry) || void 0 === a ? void 0 : a.short_description) !== void 0 ? e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(E.Heading, {
              className: eR.sectionHeader,
              variant: "heading-md/semibold",
              children: eE.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, l.jsx)("span", {
              children: eB.directory_entry.short_description
            })]
          })) : (null == eB ? void 0 : eB.description) != null && e.push((0, l.jsx)(w.default, {
            className: eR.description,
            userBio: eB.description
          })), null != ej && ej.length > 0 && (e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(E.Heading, {
              className: eR.sectionHeader,
              variant: "heading-md/semibold",
              children: eE.default.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
            }), (0, l.jsx)(ef.default, {
              className: eR.commandList,
              commands: ej
            })]
          })), t = !0);
          break
        }
        case eg.ApplicationDirectoryProfileSections.IMAGES: {
          if (0 === e$.length) break;
          let t = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("img", {
              className: eR.errorImage,
              src: eT,
              "aria-hidden": !0,
              alt: ""
            }), (0, l.jsx)(E.Heading, {
              variant: "heading-xl/semibold",
              children: eE.default.Messages.ERRORS_IMAGE_NOT_FOUND
            })]
          });
          e$.forEach((e, t) => {
            null != eB ? e.alt = eE.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
              index: t + 1,
              totalImages: e$.length,
              name: eB.name
            }) : e.alt = eE.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT
          }), e.push((0, l.jsx)(C.default, {
            className: eR.carousel,
            themedPagination: !0,
            items: e$,
            autoplayInterval: 8e3,
            paused: !eU,
            videoAutoPlay: !0,
            onCurrentItemClick: e0,
            errorComponent: t,
            onImageLoad: e => {
              let {
                src: t,
                loadTimeMs: i
              } = e;
              null != i && null != eB && Z.default.track(ev.AnalyticEvents.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                application_id: eB.id,
                load_time_ms: i,
                src: t
              })
            }
          }));
          break
        }
        case eg.ApplicationDirectoryProfileSections.STORE:
          td && null != f && e.push((0, l.jsx)(ep.ApplicationDirectoryStore, {
            appId: f,
            guildId: null != A ? A : void 0
          }));
          break;
        case eg.ApplicationDirectoryProfileSections.PREMIUM:
          e8 && (null == eB ? void 0 : eB.primary_sku_id) != null && e.push((0, l.jsx)(U.default, {
            applicationId: eB.id,
            applicationPrimarySkuId: null == eB ? void 0 : eB.primary_sku_id,
            analyticsLocation: ev.AnalyticsLocations.APP_DIRECTORY_PROFILE,
            forcesTransitionToGuild: !0
          }));
          break;
        case eg.ApplicationDirectoryProfileSections.PRIVACY:
          to && e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(E.Heading, {
              className: eR.sectionHeader,
              variant: "heading-md/semibold",
              children: eE.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
            }), (0, l.jsx)(R.default, {
              className: eR.commandList,
              grantedPermissions: eJ,
              grantedPermissionsHeader: eE.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
            })]
          })), tc && e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(E.Heading, {
              className: eR.sectionHeader,
              variant: "heading-md/semibold",
              children: eE.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
            }), (0, l.jsx)(em.default, {
              application: eB
            })]
          }))
      }
      return ts(t), 0 === e.length && _ !== eg.ApplicationDirectoryProfileSections.GENERAL && null != eB && eK(), e.map((e, t) => (0, l.jsx)("div", {
        className: eR.section,
        children: e
      }, t))
    }, [_, eK, eB, ej, tl, tt, e$, eU, e0, td, f, A, e8, to, tc, eJ]),
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
  return d = null == eB ? null == eL || eL === $.FetchState.FETCHING ? (0, l.jsx)(er.default, {
    loading: eL === $.FetchState.FETCHING
  }) : (0, l.jsx)("div", {
    className: eR.__invalid_page,
    children: (0, l.jsxs)("div", {
      className: eR.emptyContainer,
      children: [(0, l.jsx)("img", {
        className: eR.emptyImage,
        src: eT,
        alt: ""
      }), (0, l.jsx)(E.Heading, {
        variant: "heading-xl/semibold",
        children: eE.default.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
      })]
    })
  }) : (0, l.jsxs)(er.default, {
    loading: eL === $.FetchState.FETCHING,
    children: [(0, l.jsx)(eM, {
      app: eB,
      iconSrc: eW
    }), (0, l.jsxs)("div", {
      className: eR.__invalid_page,
      children: [(0, l.jsxs)("div", {
        className: eR.header,
        children: [(0, l.jsxs)("div", {
          className: eR.headerSidebar,
          children: [(0, l.jsx)("img", {
            className: eR.headerIcon,
            alt: "",
            "aria-hidden": !0,
            src: eW,
            width: eN,
            height: eN
          }), (0, l.jsx)(es.default, {
            application: eB,
            mutualGuilds: eG,
            mutualGuildShownMax: 3,
            compact: !0
          })]
        }), (0, l.jsxs)("div", {
          className: eR.headerContent,
          children: [(0, l.jsxs)("div", {
            className: eR.headerNameAndButtons,
            children: [(0, l.jsxs)("div", {
              className: eR.headerNameAndIcon,
              children: [(0, l.jsx)(E.Heading, {
                className: eR.name,
                variant: "heading-xxl/semibold",
                children: eB.name
              }), e8 && (0, l.jsx)(E.Tooltip, {
                tooltipClassName: eR.premiumIconTooltip,
                text: eE.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                children: e => (0, l.jsx)("img", {
                  ...e,
                  alt: eE.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                  className: eR.premiumIcon,
                  src: i("744050")
                })
              }), te && (0, l.jsx)(eo.default, {
                className: eR.partnerBadge
              })]
            }), (0, l.jsxs)("div", {
              className: eR.buttons,
              children: [(0, l.jsx)(E.Button, {
                onClick: e3,
                color: E.Button.Colors.PRIMARY,
                children: e9 ? eE.default.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : eE.default.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
              }), (0, l.jsx)(E.Button, {
                color: E.Button.Colors.BRAND,
                onClick: e6,
                disabled: !ez,
                children: eE.default.Messages.APPLICATION_ADD_BUTTON
              }), (0, l.jsx)(E.Popout, {
                renderPopout: e => {
                  let {
                    closePopout: t
                  } = e;
                  return e5(t)
                },
                position: "left",
                align: "top",
                animation: E.Popout.Animation.NONE,
                children: e => (0, l.jsx)(E.Clickable, {
                  className: eR.overflow,
                  ...e,
                  children: (0, l.jsx)(W.default, {
                    width: 20,
                    height: 20,
                    className: eR.iconInteractive
                  })
                })
              })]
            })]
          }), (0, l.jsx)(eI.default, {
            activeSection: _,
            setSection: eX,
            sections: tp
          })]
        })]
      }), (0, l.jsxs)("div", {
        className: eR.contentContainer,
        children: [(0, l.jsxs)("div", {
          className: eR.content,
          children: [tu, null != e_ && e_.length > 0 ? (0, l.jsxs)(l.Fragment, {
            children: [tn && (0, l.jsx)("div", {
              className: eR.separator
            }), (0, l.jsxs)("div", {
              className: eR.section,
              children: [(0, l.jsx)(E.Heading, {
                className: eR.relatedHeader,
                variant: "eyebrow",
                children: eE.default.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
              }), (0, l.jsx)(er.default, {
                loading: S,
                children: (0, l.jsx)(en.default, {
                  applications: e_,
                  onViewOne: e2
                })
              })]
            })]
          }) : null]
        }), (0, l.jsx)(eh.default, {
          className: eR.sidebar,
          application: eB,
          guildId: A,
          onViewCategory: e1,
          onClickGuildWidget: eV
        })]
      })]
    })]
  }), (0, l.jsx)(ei.default, {
    children: d
  })
}

function ey(e) {
  switch (e.type) {
    case P.ApplicationDirectoryEntryCarouselItemType.MEDIA_PROXY:
      var t;
      let i = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
      return {
        type: ev.CarouselMediaTypes.IMG, width: 0, height: 0, src: i
      };
    case P.ApplicationDirectoryEntryCarouselItemType.YOUTUBE:
      let l = eL(e.url);
      if (null != l) return {
        type: ev.CarouselMediaTypes.YOUTUBE_VIDEO,
        youtubeVideoId: l
      }
  }
  return console.warn("Unsupported carousel item", e), null
}
let eD = e => {
    let t, {
      onToggle: i,
      isViewAll: a
    } = e;
    return t = a ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(E.Text, {
        className: eR.showMoreButtonText,
        variant: "eyebrow",
        children: eE.default.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
      }), (0, l.jsx)(K.default, {
        className: eR.showMoreButtonIcon
      })]
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(E.Text, {
        className: eR.showMoreButtonText,
        variant: "eyebrow",
        children: eE.default.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
      }), (0, l.jsx)(V.default, {
        className: eR.showMoreButtonIcon
      })]
    }), (0, l.jsx)(eb, {
      children: (0, l.jsx)(E.Button, {
        look: E.Button.Looks.BLANK,
        color: E.Button.Colors.TRANSPARENT,
        size: E.Button.Sizes.NONE,
        className: eR.showMoreButton,
        innerClassName: eR.showMoreButtonInner,
        onClick: i,
        children: t
      })
    })
  },
  eb = e => {
    let {
      className: t,
      contentClassName: i,
      children: a
    } = e;
    return (0, l.jsxs)("div", {
      className: s()([eR.dividerContainer, t]),
      children: [(0, l.jsx)("div", {
        className: eR.divider
      }), null != a ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: s()(eR.contentDivider, i),
          children: a
        }), (0, l.jsx)("div", {
          className: eR.divider
        })]
      }) : null]
    })
  };

function eM(e) {
  let {
    app: t,
    iconSrc: i
  } = e, n = (0, y.default)(i, _.default.unsafe_rawColors.PRIMARY_800.css), {
    bot: s
  } = t, r = (0, m.useStateFromStores)([S.default], () => S.default.useReducedMotion), o = a.useMemo(() => {
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
  return (0, l.jsx)("div", {
    style: o,
    className: eR.headerBanner
  })
}