"use strict";
i.r(t), i.d(t, {
  default: function() {
    return eP
  },
  getApplicationDirectoryProfileUrl: function() {
    return eC
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
  m = i("468194"),
  f = i("442837"),
  _ = i("692547"),
  h = i("477690"),
  g = i("481060"),
  I = i("995648"),
  v = i("445986"),
  A = i("9807"),
  E = i("911969"),
  R = i("330726"),
  x = i("782568"),
  T = i("607070"),
  C = i("581364"),
  N = i("970321"),
  P = i("283836"),
  S = i("220082"),
  j = i("252618"),
  L = i("299206"),
  O = i("422559"),
  y = i("270144"),
  D = i("864843"),
  M = i("703656"),
  b = i("588822"),
  k = i("706454"),
  F = i("314897"),
  B = i("451478"),
  U = i("729035"),
  G = i("86813"),
  w = i("826026"),
  Y = i("808268"),
  H = i("626135"),
  V = i("768581"),
  W = i("572004"),
  K = i("823379"),
  z = i("900849"),
  Z = i("674588"),
  Q = i("264043"),
  q = i("303383"),
  J = i("887706"),
  X = i("738130"),
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
  em = i("606183"),
  ef = i("272242"),
  e_ = i("981631"),
  eh = i("558921"),
  eg = i("689938"),
  eI = i("798945"),
  ev = i("902294");
let eA = d().parserFor(eu.default),
  eE = d().reactFor(d().ruleOutput(eu.default, "react")),
  eR = (0, m.cssValueToNumber)(h.default.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
  ex = "redirect_to_support_server",
  eT = "start_application_install",
  eC = e => "".concat(location.protocol, "//").concat(location.host).concat(e_.Routes.APPLICATION_DIRECTORY_PROFILE(e)),
  eN = e => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null
  };

function eP(e) {
  var t, n, r, c;
  let d, {
      match: {
        params: {
          applicationId: m,
          section: _ = ef.ApplicationDirectoryProfileSections.GENERAL
        }
      }
    } = e,
    h = (0, en.useApplicationDirectoryHistory)(e => e.guildId),
    E = (0, J.default)(),
    T = (0, f.useStateFromStores)([q.default], () => q.default.getFetchState({
      applicationId: m,
      guildId: h
    }) === q.FetchState.FETCHING),
    S = a.useRef({
      applicationId: void 0,
      guildId: void 0
    }),
    {
      similarApplications: G,
      similarLoadId: w
    } = (0, f.useStateFromStoresObject)([q.default], () => {
      let e = {
          applicationId: m,
          guildId: h
        },
        t = q.default.getSimilarApplications(e);
      return null == t ? t = q.default.getSimilarApplications(S.current) : S.current = e, {
        similarApplications: null == t ? void 0 : t.applications,
        similarLoadId: null == t ? void 0 : t.loadId
      }
    }),
    eu = a.useMemo(() => null == G ? void 0 : G.slice(0, 3), [G]),
    eN = (0, f.useStateFromStores)([Q.default], () => Q.default.getApplicationFetchState(m)),
    [eP, eL] = a.useState(void 0),
    ey = a.useCallback(e => {
      if (null != m) {
        if (e === ef.ApplicationDirectoryProfileSections.GENERAL) {
          (0, es.replaceAppDirectoryURLWith)(e_.Routes.APPLICATION_DIRECTORY_PROFILE(m));
          return
        }(0, es.replaceAppDirectoryURLWith)(e_.Routes.APPLICATION_DIRECTORY_PROFILE_SECTION(m, e))
      }
    }, [m]),
    eD = (0, f.useStateFromStores)([B.default], () => B.default.isFocused()),
    eM = (0, f.useStateFromStores)([k.default], () => k.default.locale),
    eb = a.useRef(m),
    ek = (0, f.useStateFromStores)([Q.default], () => {
      let e = Q.default.getApplication(m);
      return null == e ? e = Q.default.getApplication(eb.current) : eb.current = m, e
    }),
    eF = (0, er.default)({
      application: ek
    }),
    eB = (0, f.useStateFromStores)([F.default], () => F.default.getSessionId());
  (0, j.usePageTitle)({
    location: null == ek ? void 0 : ek.name
  });
  let eU = a.useCallback(async () => {
    try {
      var e;
      let t = null == ek ? void 0 : null === (e = ek.guild) || void 0 === e ? void 0 : e.id;
      if (null != t) {
        (null == ek ? void 0 : ek.id) != null && H.default.track(e_.AnalyticEvents.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
          application_id: ek.id,
          guild_id: t
        });
        let e = {
          page: e_.AnalyticsPages.APPLICATION_DIRECTORY
        };
        await (0, z.startLurking)(t, e, {
          setsHistorySnapshot: !1
        })
      }
    } catch {}
  }, [ek]);
  a.useEffect(() => {
    if (null == ek) return;
    let e = new URL(location.href);
    if (E && null != eB && "true" === e.searchParams.get(ex)) {
      e.searchParams.delete(ex);
      let t = e.pathname + e.search;
      (0, M.replaceWith)(t), eU()
    }
  }, [E, eU, eB, ek]);
  let eG = a.useCallback(() => {
      var e;
      null != (null == ek ? void 0 : null === (e = ek.guild) || void 0 === e ? void 0 : e.id) && (E ? eU() : (0, ee.redirectToLogin)({
        [ex]: "true"
      }))
    }, [ek, E, eU]),
    ew = a.useCallback(() => {
      (0, es.replaceAppDirectoryURLWith)("".concat(e_.Routes.APPLICATION_DIRECTORY_PROFILE(m)).concat(location.search))
    }, [m]);
  a.useEffect(() => {
    _ === ef.ApplicationDirectoryProfileSections.GENERAL && ew()
  }, [ew, _]), a.useEffect(() => {
    null != m && Z.getApplication(m)
  }, [m]), a.useEffect(() => {
    if ((null == ek ? void 0 : ek.directory_entry) != null) {
      let e = ek.directory_entry,
        t = null == e ? void 0 : e.popular_application_commands;
      null != t ? eL(t.map(e => (0, C.buildCommand)({
        rootCommand: e,
        command: e,
        applicationId: e.application_id
      }))) : eL(void 0)
    }
  }, [ek]);
  let eY = V.default.getApplicationIconURL({
      id: null !== (r = null == ek ? void 0 : ek.id) && void 0 !== r ? r : "-1",
      icon: null == ek ? void 0 : ek.icon,
      size: eR
    }),
    eH = (0, L.default)({
      id: null !== (c = null == ek ? void 0 : ek.id) && void 0 !== c ? c : "",
      label: eg.default.Messages.COPY_ID_APPLICATION
    }),
    {
      canInstall: eV,
      install: eW
    } = (0, $.useInstallApplication)(ek, h),
    eK = null === (t = (0, en.getPreviousView)()) || void 0 === t ? void 0 : t.type;
  a.useEffect(() => {
    (null == ek ? void 0 : ek.id) != null && H.default.track(e_.AnalyticEvents.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: "product",
      previous_page: eK,
      application_id: ek.id,
      guild_id: h,
      shown_mutual_guilds_count: eF.length,
      profile_section: _,
      referrer: document.referrer
    })
  }, [null == ek ? void 0 : ek.id, h, eF]);
  let ez = a.useMemo(() => {
      var e;
      let t = null == ek ? void 0 : null === (e = ek.install_params) || void 0 === e ? void 0 : e.permissions;
      if (null != t) return O.OrderedPermissions.filter(e => p.has(p.deserialize(t), e))
    }, [null == ek ? void 0 : null === (n = ek.install_params) || void 0 === n ? void 0 : n.permissions]),
    eZ = a.useCallback(e => {
      ey(e), (null == ek ? void 0 : ek.id) != null && H.default.track(e_.AnalyticEvents.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
        application_id: ek.id,
        guild_id: h,
        tab_name: e
      })
    }, [null == ek ? void 0 : ek.id, h, ey]),
    eQ = a.useMemo(() => {
      var e, t, i;
      return null !== (i = (null !== (t = null == ek ? void 0 : null === (e = ek.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== t ? t : []).map(eS).filter(K.isNotNullish)) && void 0 !== i ? i : []
    }, [ek]),
    eq = a.useCallback((e, t) => {
      if (e.type === e_.CarouselMediaTypes.IMG) {
        let t = eQ.filter(e => e.type === e_.CarouselMediaTypes.IMG),
          a = t.findIndex(t => t === e);
        if (a < 0) return;
        let n = t.map(e => ({
          src: (0, v.transformAssetURL)(e.src),
          width: e.width,
          height: e.height
        }));
        (0, g.openModalLazy)(async () => {
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
              modalCarouselItemClassName: eI.appSlide
            })
          }
        })
      }
    }, [eQ]),
    eJ = a.useCallback(e => {
      (null == ek ? void 0 : ek.id) != null && H.default.track(e_.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
        current_page: "product",
        category: e.name,
        category_id: e.id,
        application_id: ek.id,
        guild_id: h
      }), (0, es.goToCategory)({
        categoryId: e.id
      })
    }, [ek, h]);
  a.useEffect(() => {
    null != m && Z.getSimilarApplications({
      applicationId: m,
      guildId: h
    })
  }, [m, h]);
  let eX = a.useCallback(e => {
      let {
        application: t,
        mutualGuilds: i
      } = e;
      (null == ek ? void 0 : ek.id) != null && H.default.track(e_.AnalyticEvents.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
        current_page: "product",
        application_id: ek.id,
        suggested_application_id: t.id,
        load_id: w,
        guild_id: h,
        shown_mutual_guilds_count: i.length
      }), (0, es.goToApplication)({
        applicationId: t.id
      })
    }, [null == ek ? void 0 : ek.id, w, h]),
    e$ = a.useCallback(() => {
      null != ek && (0, x.default)(function(e, t) {
        let i = "https://".concat(e_.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new"),
          l = new URLSearchParams;
        return l.append("tf_12275088515223", "field_value_dc_category_report_an_app_bot"), l.append("tf_12276208289431", "field_value_dc_reported_action_app_directory"), l.append("tf_12094971213335", t.id), l.append("ticket_form_id", "12275528604823"), l.append("tf_subject", "App Directory Report ".concat(t.name, " ").concat(t.id)), "".concat(i, "?").concat(l.toString())
      }(eM, ek))
    }, [eM, ek]),
    e0 = a.useCallback(e => (0, l.jsxs)(g.Menu, {
      navId: "application-directory-profile",
      "aria-label": eg.default.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
      onClose: e,
      onSelect: void 0,
      children: [(0, l.jsx)(g.MenuGroup, {
        children: (0, l.jsx)(g.MenuItem, {
          id: "report",
          label: eg.default.Messages.REPORT_APP,
          color: "danger",
          action: e$
        })
      }), null != eH ? (0, l.jsx)(g.MenuGroup, {
        children: eH
      }) : null]
    }), [eH, e$]),
    [e1, e2] = (0, R.default)(!1, 1e3),
    e4 = a.useCallback(() => {
      null != ek && (H.default.track(e_.AnalyticEvents.APP_SHARE_BUTTON_CLICKED, {
        source: "product_page",
        application_id: ek.id,
        guild_id: h
      }), (0, W.copy)(eC(ek.id)), e2(!0))
    }, [ek, e2, h]);
  a.useEffect(() => {
    let e = new URL(location.href);
    if (E && "true" === e.searchParams.get(eT)) {
      e.searchParams.delete(eT);
      let t = e.pathname + e.search;
      (0, M.replaceWith)(t), eW("product_page")
    }
  }, [E, eW]);
  let e5 = a.useCallback(() => {
      null != ek && (E ? eW("product_page") : (H.default.track(e_.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
        application_id: m,
        guild_id: h,
        auth_type: null != ek.custom_install_url ? "custom_url" : "in_app",
        source: "product_page",
        device_platform: u.isMobile ? "mobile_web" : "desktop_web"
      }), (0, ee.redirectToLogin)({
        [eT]: "true"
      })))
    }, [ek, E, eW, m, h]),
    {
      applicationSubscriptionListingsShown: e7
    } = (0, y.default)({
      applicationId: null == ek ? void 0 : ek.id,
      groupListingId: null == ek ? void 0 : ek.primary_sku_id,
      guildId: h
    }),
    e6 = (null == ek ? void 0 : ek.id) === eh.MIDJOURNEY_BOT_ID,
    [e9, e8] = a.useState(!1),
    [e3, te] = a.useState(!1),
    [tt, ti] = a.useState(!0),
    tl = e => {
      null != e && e8(e.scrollHeight > e.clientHeight)
    },
    ta = null != ez && ez.length > 0,
    tn = (null == ek ? void 0 : ek.flags) != null,
    ts = (0, N.useAppStorefrontAvailable)(null != m ? m : "");
  a.useEffect(() => {
    ts && null != m && (0, P.fetchFreshStorefrontData)(m)
  }, [ts, m]);
  let tr = a.useMemo(() => {
      let e = [],
        t = !0;
      switch (_) {
        case ef.ApplicationDirectoryProfileSections.GENERAL: {
          var i, a;
          let n = null == ek ? void 0 : null === (i = ek.directory_entry) || void 0 === i ? void 0 : i.detailed_description;
          null != n && n.length > 0 ? (e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(g.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: eg.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, l.jsx)("div", {
              ref: tl,
              className: s()({
                [eI.descriptionClamp]: !e3,
                [eI.descriptionClampSafari]: !e3 && "Safari" === o().name
              }),
              children: (0, l.jsx)(U.default, {
                className: eI.detailedDescription,
                parser: eA,
                output: eE,
                state: {
                  allowLinks: !0
                },
                children: n
              })
            }), (e9 || e3) && (0, l.jsx)(ej, {
              isViewAll: e3,
              onToggle: () => {
                te(e => !e)
              }
            })]
          })), t = !1) : (null == ek ? void 0 : null === (a = ek.directory_entry) || void 0 === a ? void 0 : a.short_description) !== void 0 ? e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(g.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: eg.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, l.jsx)("span", {
              children: ek.directory_entry.short_description
            })]
          })) : (null == ek ? void 0 : ek.description) != null && e.push((0, l.jsx)(b.default, {
            className: eI.description,
            userBio: ek.description
          })), null != eP && eP.length > 0 && (e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(g.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: eg.default.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
            }), (0, l.jsx)(ec.default, {
              className: eI.commandList,
              commands: eP
            })]
          })), t = !0);
          break
        }
        case ef.ApplicationDirectoryProfileSections.IMAGES: {
          if (0 === eQ.length) break;
          let t = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("img", {
              className: eI.errorImage,
              src: ev,
              "aria-hidden": !0,
              alt: ""
            }), (0, l.jsx)(g.Heading, {
              variant: "heading-xl/semibold",
              children: eg.default.Messages.ERRORS_IMAGE_NOT_FOUND
            })]
          });
          eQ.forEach((e, t) => {
            null != ek ? e.alt = eg.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
              index: t + 1,
              totalImages: eQ.length,
              name: ek.name
            }) : e.alt = eg.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT
          }), e.push((0, l.jsx)(A.default, {
            className: eI.carousel,
            themedPagination: !0,
            items: eQ,
            autoplayInterval: 8e3,
            paused: !eD,
            videoAutoPlay: !0,
            onCurrentItemClick: eq,
            errorComponent: t,
            onImageLoad: e => {
              let {
                src: t,
                loadTimeMs: i
              } = e;
              null != i && null != ek && H.default.track(e_.AnalyticEvents.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                application_id: ek.id,
                load_time_ms: i,
                src: t
              })
            }
          }));
          break
        }
        case ef.ApplicationDirectoryProfileSections.STORE:
          ts && null != m && e.push((0, l.jsx)(eo.ApplicationDirectoryStore, {
            appId: m,
            guildId: null != h ? h : void 0
          }));
          break;
        case ef.ApplicationDirectoryProfileSections.PREMIUM:
          e7 && (null == ek ? void 0 : ek.primary_sku_id) != null && e.push((0, l.jsx)(D.default, {
            applicationId: ek.id,
            applicationPrimarySkuId: null == ek ? void 0 : ek.primary_sku_id,
            analyticsLocation: e_.AnalyticsLocations.APP_DIRECTORY_PROFILE,
            forcesTransitionToGuild: !0
          }));
          break;
        case ef.ApplicationDirectoryProfileSections.PRIVACY:
          ta && e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(g.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: eg.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
            }), (0, l.jsx)(I.default, {
              className: eI.commandList,
              grantedPermissions: ez,
              grantedPermissionsHeader: eg.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
            })]
          })), tn && e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(g.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: eg.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
            }), (0, l.jsx)(ed.default, {
              application: ek
            })]
          }))
      }
      return ti(t), 0 === e.length && _ !== ef.ApplicationDirectoryProfileSections.GENERAL && null != ek && ew(), e.map((e, t) => (0, l.jsx)("div", {
        className: eI.section,
        children: e
      }, t))
    }, [_, ew, ek, eP, e3, e9, eQ, eD, eq, ts, m, h, e7, ta, tn, ez]),
    to = a.useMemo(() => {
      let e = [{
        sectionName: ef.ApplicationDirectoryProfileSections.GENERAL,
        sectionText: eg.default.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL
      }];
      return eQ.length > 0 && e.push({
        sectionName: ef.ApplicationDirectoryProfileSections.IMAGES,
        sectionText: eg.default.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES
      }), ts && e.push({
        sectionName: ef.ApplicationDirectoryProfileSections.STORE,
        sectionText: eg.default.Messages.APP_DIRECTORY_PROFILE_TAB_STORE
      }), e7 && !ts && e.push({
        sectionName: ef.ApplicationDirectoryProfileSections.PREMIUM,
        sectionText: eg.default.Messages.APP_DIRECTORY_PROFILE_TAB_PREMIUM
      }), (ta || tn) && e.push({
        sectionName: ef.ApplicationDirectoryProfileSections.PRIVACY,
        sectionText: eg.default.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY
      }), e
    }, [eQ.length, e7, ta, tn, ts]);
  return d = null == ek ? null == eN || eN === Q.FetchState.FETCHING ? (0, l.jsx)(el.default, {
    loading: eN === Q.FetchState.FETCHING
  }) : (0, l.jsx)("div", {
    className: eI.__invalid_page,
    children: (0, l.jsxs)("div", {
      className: eI.emptyContainer,
      children: [(0, l.jsx)("img", {
        className: eI.emptyImage,
        src: ev,
        alt: ""
      }), (0, l.jsx)(g.Heading, {
        variant: "heading-xl/semibold",
        children: eg.default.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
      })]
    })
  }) : (0, l.jsxs)(el.default, {
    loading: eN === Q.FetchState.FETCHING,
    children: [(0, l.jsx)(eO, {
      app: ek,
      iconSrc: eY
    }), (0, l.jsxs)("div", {
      className: eI.__invalid_page,
      children: [(0, l.jsxs)("div", {
        className: eI.header,
        children: [(0, l.jsxs)("div", {
          className: eI.headerSidebar,
          children: [(0, l.jsx)("img", {
            className: eI.headerIcon,
            alt: "",
            "aria-hidden": !0,
            src: eY,
            width: eR,
            height: eR
          }), (0, l.jsx)(ei.default, {
            application: ek,
            mutualGuilds: eF,
            mutualGuildShownMax: 3,
            compact: !0
          })]
        }), (0, l.jsxs)("div", {
          className: eI.headerContent,
          children: [(0, l.jsxs)("div", {
            className: eI.headerNameAndButtons,
            children: [(0, l.jsxs)("div", {
              className: eI.headerNameAndIcon,
              children: [(0, l.jsx)(g.Heading, {
                className: eI.name,
                variant: "heading-xxl/semibold",
                children: ek.name
              }), e7 && (0, l.jsx)(g.Tooltip, {
                tooltipClassName: eI.premiumIconTooltip,
                text: eg.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                children: e => (0, l.jsx)("img", {
                  ...e,
                  alt: eg.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                  className: eI.premiumIcon,
                  src: i("744050")
                })
              }), e6 && (0, l.jsx)(ea.default, {
                className: eI.partnerBadge
              })]
            }), (0, l.jsxs)("div", {
              className: eI.buttons,
              children: [(0, l.jsx)(g.Button, {
                onClick: e4,
                color: g.Button.Colors.PRIMARY,
                children: e1 ? eg.default.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : eg.default.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
              }), (0, l.jsx)(g.Button, {
                color: g.Button.Colors.BRAND,
                onClick: e5,
                disabled: !eV,
                children: eg.default.Messages.APPLICATION_ADD_BUTTON
              }), (0, l.jsx)(g.Popout, {
                renderPopout: e => {
                  let {
                    closePopout: t
                  } = e;
                  return e0(t)
                },
                position: "left",
                align: "top",
                animation: g.Popout.Animation.NONE,
                children: e => (0, l.jsx)(g.Clickable, {
                  className: eI.overflow,
                  ...e,
                  children: (0, l.jsx)(Y.default, {
                    width: 20,
                    height: 20,
                    className: eI.iconInteractive
                  })
                })
              })]
            })]
          }), (0, l.jsx)(em.default, {
            activeSection: _,
            setSection: eZ,
            shownSections: to
          })]
        })]
      }), (0, l.jsxs)("div", {
        className: eI.contentContainer,
        children: [(0, l.jsxs)("div", {
          className: eI.content,
          children: [tr, null != eu && eu.length > 0 ? (0, l.jsxs)(l.Fragment, {
            children: [tt && (0, l.jsx)("div", {
              className: eI.separator
            }), (0, l.jsxs)("div", {
              className: eI.section,
              children: [(0, l.jsx)(g.Heading, {
                className: eI.relatedHeader,
                variant: "eyebrow",
                children: eg.default.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
              }), (0, l.jsx)(el.default, {
                loading: T,
                children: (0, l.jsx)(et.default, {
                  applications: eu,
                  onViewOne: eX
                })
              })]
            })]
          }) : null]
        }), (0, l.jsx)(ep.default, {
          className: eI.sidebar,
          application: ek,
          guildId: h,
          onViewCategory: eJ,
          onClickGuildWidget: eG
        })]
      })]
    })]
  }), (0, l.jsx)(X.default, {
    children: d
  })
}

function eS(e) {
  switch (e.type) {
    case E.ApplicationDirectoryEntryCarouselItemType.MEDIA_PROXY:
      var t;
      let i = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
      return {
        type: e_.CarouselMediaTypes.IMG, width: 0, height: 0, src: i
      };
    case E.ApplicationDirectoryEntryCarouselItemType.YOUTUBE:
      let l = eN(e.url);
      if (null != l) return {
        type: e_.CarouselMediaTypes.YOUTUBE_VIDEO,
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
      children: [(0, l.jsx)(g.Text, {
        className: eI.showMoreButtonText,
        variant: "eyebrow",
        children: eg.default.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
      }), (0, l.jsx)(w.default, {
        className: eI.showMoreButtonIcon
      })]
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(g.Text, {
        className: eI.showMoreButtonText,
        variant: "eyebrow",
        children: eg.default.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
      }), (0, l.jsx)(G.default, {
        className: eI.showMoreButtonIcon
      })]
    }), (0, l.jsx)(eL, {
      children: (0, l.jsx)(g.Button, {
        look: g.Button.Looks.BLANK,
        color: g.Button.Colors.TRANSPARENT,
        size: g.Button.Sizes.NONE,
        className: eI.showMoreButton,
        innerClassName: eI.showMoreButtonInner,
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
      className: s()([eI.dividerContainer, t]),
      children: [(0, l.jsx)("div", {
        className: eI.divider
      }), null != a ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: s()(eI.contentDivider, i),
          children: a
        }), (0, l.jsx)("div", {
          className: eI.divider
        })]
      }) : null]
    })
  };

function eO(e) {
  let {
    app: t,
    iconSrc: i
  } = e, n = (0, S.default)(i, _.default.unsafe_rawColors.PRIMARY_800.css), {
    bot: s
  } = t, r = (0, f.useStateFromStores)([T.default], () => T.default.useReducedMotion), o = a.useMemo(() => {
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
    className: eI.headerBanner
  })
}