"use strict";
l.r(t), l.d(t, {
  default: function() {
    return eP
  },
  getApplicationDirectoryProfileUrl: function() {
    return eN
  },
  getYouTubeVideoIdFromUrl: function() {
    return eT
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
  _ = l("468194"),
  m = l("442837"),
  f = l("692547"),
  h = l("477690"),
  I = l("481060"),
  g = l("995648"),
  v = l("445986"),
  A = l("9807"),
  E = l("911969"),
  C = l("330726"),
  R = l("782568"),
  x = l("607070"),
  N = l("581364"),
  T = l("395661"),
  P = l("970321"),
  S = l("220082"),
  j = l("252618"),
  L = l("299206"),
  O = l("422559"),
  y = l("270144"),
  D = l("864843"),
  M = l("703656"),
  b = l("588822"),
  F = l("706454"),
  B = l("314897"),
  w = l("451478"),
  U = l("729035"),
  k = l("86813"),
  G = l("826026"),
  H = l("808268"),
  Y = l("626135"),
  V = l("768581"),
  W = l("572004"),
  Z = l("823379"),
  z = l("900849"),
  K = l("674588"),
  J = l("264043"),
  Q = l("303383"),
  X = l("887706"),
  q = l("738130"),
  $ = l("4461"),
  ee = l("34674"),
  et = l("576958"),
  el = l("924489"),
  ei = l("125909"),
  ea = l("409425"),
  en = l("132871"),
  es = l("147890"),
  er = l("491576"),
  eo = l("95650"),
  ec = l("940064"),
  ed = l("626004"),
  eu = l("939893"),
  ep = l("430913"),
  e_ = l("606183"),
  em = l("272242"),
  ef = l("981631"),
  eh = l("558921"),
  eI = l("689938"),
  eg = l("798945"),
  ev = l("902294");
let eA = d().parserFor(eu.default),
  eE = d().reactFor(d().ruleOutput(eu.default, "react")),
  eC = (0, _.cssValueToNumber)(h.default.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
  eR = "redirect_to_support_server",
  ex = "start_application_install",
  eN = e => "".concat(location.protocol, "//").concat(location.host).concat(ef.Routes.APPLICATION_DIRECTORY_PROFILE(e)),
  eT = e => {
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
    x = (0, X.default)(),
    S = (0, m.useStateFromStores)([Q.default], () => Q.default.getFetchState({
      applicationId: f,
      guildId: E
    }) === Q.FetchState.FETCHING),
    k = a.useRef({
      applicationId: void 0,
      guildId: void 0
    }),
    {
      similarApplications: G,
      similarLoadId: eu
    } = (0, m.useStateFromStoresObject)([Q.default], () => {
      let e = {
          applicationId: f,
          guildId: E
        },
        t = Q.default.getSimilarApplications(e);
      return null == t ? t = Q.default.getSimilarApplications(k.current) : k.current = e, {
        similarApplications: null == t ? void 0 : t.applications,
        similarLoadId: null == t ? void 0 : t.loadId
      }
    }),
    eT = a.useMemo(() => null == G ? void 0 : G.slice(0, 3), [G]),
    eP = (0, m.useStateFromStores)([J.default], () => J.default.getApplicationFetchState(f)),
    [eL, ey] = a.useState(void 0),
    eD = a.useCallback(e => {
      if (null != f) {
        if (e === em.ApplicationDirectoryProfileSections.GENERAL) {
          (0, es.replaceAppDirectoryURLWith)(ef.Routes.APPLICATION_DIRECTORY_PROFILE(f));
          return
        }(0, es.replaceAppDirectoryURLWith)(ef.Routes.APPLICATION_DIRECTORY_PROFILE_SECTION(f, e))
      }
    }, [f]),
    eM = (0, m.useStateFromStores)([w.default], () => w.default.isFocused()),
    eb = (0, m.useStateFromStores)([F.default], () => F.default.locale),
    eF = a.useRef(f),
    eB = (0, m.useStateFromStores)([J.default], () => {
      let e = J.default.getApplication(f);
      return null == e ? e = J.default.getApplication(eF.current) : eF.current = f, e
    }),
    ew = (0, er.default)({
      application: eB
    }),
    eU = (0, m.useStateFromStores)([B.default], () => B.default.getSessionId());
  (0, j.usePageTitle)({
    location: null == eB ? void 0 : eB.name
  });
  let ek = a.useCallback(async () => {
    try {
      var e;
      let t = null == eB ? void 0 : null === (e = eB.guild) || void 0 === e ? void 0 : e.id;
      if (null != t) {
        (null == eB ? void 0 : eB.id) != null && Y.default.track(ef.AnalyticEvents.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
          application_id: eB.id,
          guild_id: t
        });
        let e = {
          page: ef.AnalyticsPages.APPLICATION_DIRECTORY
        };
        await (0, z.startLurking)(t, e, {
          setsHistorySnapshot: !1
        })
      }
    } catch {}
  }, [eB]);
  a.useEffect(() => {
    if (null == eB) return;
    let e = new URL(location.href);
    if (x && null != eU && "true" === e.searchParams.get(eR)) {
      e.searchParams.delete(eR);
      let t = e.pathname + e.search;
      (0, M.replaceWith)(t), ek()
    }
  }, [x, ek, eU, eB]);
  let eG = a.useCallback(() => {
      var e;
      null != (null == eB ? void 0 : null === (e = eB.guild) || void 0 === e ? void 0 : e.id) && (x ? ek() : (0, ee.redirectToLogin)({
        [eR]: "true"
      }))
    }, [eB, x, ek]),
    eH = a.useCallback(() => {
      (0, es.replaceAppDirectoryURLWith)("".concat(ef.Routes.APPLICATION_DIRECTORY_PROFILE(f)).concat(location.search))
    }, [f]);
  a.useEffect(() => {
    h === em.ApplicationDirectoryProfileSections.GENERAL && eH()
  }, [eH, h]), a.useEffect(() => {
    null != f && K.getApplication(f)
  }, [f]), a.useEffect(() => {
    if ((null == eB ? void 0 : eB.directory_entry) != null) {
      let e = eB.directory_entry,
        t = null == e ? void 0 : e.popular_application_commands;
      null != t ? ey(t.map(e => (0, N.buildCommand)({
        rootCommand: e,
        command: e,
        applicationId: e.application_id
      }))) : ey(void 0)
    }
  }, [eB]);
  let eY = V.default.getApplicationIconURL({
      id: null !== (r = null == eB ? void 0 : eB.id) && void 0 !== r ? r : "-1",
      icon: null == eB ? void 0 : eB.icon,
      size: eC
    }),
    eV = (0, L.default)({
      id: null !== (c = null == eB ? void 0 : eB.id) && void 0 !== c ? c : "",
      label: eI.default.Messages.COPY_ID_APPLICATION
    }),
    {
      canInstall: eW,
      install: eZ
    } = (0, $.useInstallApplication)(eB, E),
    ez = null === (t = (0, en.getPreviousView)()) || void 0 === t ? void 0 : t.type;
  a.useEffect(() => {
    (null == eB ? void 0 : eB.id) != null && Y.default.track(ef.AnalyticEvents.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: "product",
      previous_page: ez,
      application_id: eB.id,
      guild_id: E,
      shown_mutual_guilds_count: ew.length
    })
  }, [null == eB ? void 0 : eB.id, E, ew]);
  let eK = a.useMemo(() => {
      var e;
      let t = null == eB ? void 0 : null === (e = eB.install_params) || void 0 === e ? void 0 : e.permissions;
      if (null != t) return O.OrderedPermissions.filter(e => p.has(p.deserialize(t), e))
    }, [null == eB ? void 0 : null === (n = eB.install_params) || void 0 === n ? void 0 : n.permissions]),
    eJ = a.useCallback(e => {
      eD(e), (null == eB ? void 0 : eB.id) != null && Y.default.track(ef.AnalyticEvents.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
        application_id: eB.id,
        guild_id: E,
        tab_name: e
      })
    }, [null == eB ? void 0 : eB.id, E, eD]),
    eQ = a.useMemo(() => {
      var e, t, l;
      return null !== (l = (null !== (t = null == eB ? void 0 : null === (e = eB.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== t ? t : []).map(eS).filter(Z.isNotNullish)) && void 0 !== l ? l : []
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
          } = await Promise.all([l.e("99387"), l.e("41814")]).then(l.bind(l, "895023"));
          return t => {
            let {
              ...l
            } = t;
            return (0, i.jsx)(e, {
              ...l,
              items: n,
              startingIndex: a,
              modalCarouselItemClassName: eg.appSlide
            })
          }
        })
      }
    }, [eQ]),
    eq = a.useCallback(e => {
      (null == eB ? void 0 : eB.id) != null && Y.default.track(ef.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
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
    null != f && K.getSimilarApplications({
      applicationId: f,
      guildId: E
    })
  }, [f, E]);
  let e$ = a.useCallback(e => {
      let {
        application: t,
        mutualGuilds: l
      } = e;
      (null == eB ? void 0 : eB.id) != null && Y.default.track(ef.AnalyticEvents.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
        current_page: "product",
        application_id: eB.id,
        suggested_application_id: t.id,
        load_id: eu,
        guild_id: E,
        shown_mutual_guilds_count: l.length
      }), (0, es.goToApplication)({
        applicationId: t.id
      })
    }, [null == eB ? void 0 : eB.id, eu, E]),
    e0 = a.useCallback(() => {
      null != eB && (0, R.default)(function(e, t) {
        let l = "https://".concat(ef.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new"),
          i = new URLSearchParams;
        return i.append("tf_12275088515223", "field_value_dc_category_report_an_app_bot"), i.append("tf_12276208289431", "field_value_dc_reported_action_app_directory"), i.append("tf_12094971213335", t.id), i.append("ticket_form_id", "12275528604823"), i.append("tf_subject", "App Directory Report ".concat(t.name, " ").concat(t.id)), "".concat(l, "?").concat(i.toString())
      }(eb, eB))
    }, [eb, eB]),
    e1 = a.useCallback(e => (0, i.jsxs)(I.Menu, {
      navId: "application-directory-profile",
      "aria-label": eI.default.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
      onClose: e,
      onSelect: void 0,
      children: [(0, i.jsx)(I.MenuGroup, {
        children: (0, i.jsx)(I.MenuItem, {
          id: "report",
          label: eI.default.Messages.REPORT_APP,
          color: "danger",
          action: e0
        })
      }), null != eV ? (0, i.jsx)(I.MenuGroup, {
        children: eV
      }) : null]
    }), [eV, e0]),
    [e2, e4] = (0, C.default)(!1, 1e3),
    e5 = a.useCallback(() => {
      null != eB && (Y.default.track(ef.AnalyticEvents.APP_SHARE_BUTTON_CLICKED, {
        source: "product_page",
        application_id: eB.id,
        guild_id: E
      }), (0, W.copy)(eN(eB.id)), e4(!0))
    }, [eB, e4, E]);
  a.useEffect(() => {
    let e = new URL(location.href);
    if (x && "true" === e.searchParams.get(ex)) {
      e.searchParams.delete(ex);
      let t = e.pathname + e.search;
      (0, M.replaceWith)(t), eZ("product_page")
    }
  }, [x, eZ]);
  let e3 = a.useCallback(() => {
      null != eB && (x ? eZ("product_page") : (Y.default.track(ef.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
        application_id: f,
        guild_id: E,
        auth_type: null != eB.custom_install_url ? "custom_url" : "in_app",
        source: "product_page",
        device_platform: u.isMobile ? "mobile_web" : "desktop_web"
      }), (0, ee.redirectToLogin)({
        [ex]: "true"
      })))
    }, [eB, x, eZ, f, E]),
    {
      applicationSubscriptionListingsShown: e6
    } = (0, y.default)({
      applicationId: null == eB ? void 0 : eB.id,
      groupListingId: null == eB ? void 0 : eB.primary_sku_id,
      guildId: E
    }),
    e7 = (null == eB ? void 0 : eB.id) === eh.MIDJOURNEY_BOT_ID,
    [e9, e8] = a.useState(!1),
    [te, tt] = a.useState(!1),
    [tl, ti] = a.useState(!0),
    ta = e => {
      null != e && e8(e.scrollHeight > e.clientHeight)
    },
    tn = null != eK && eK.length > 0,
    ts = (null == eB ? void 0 : eB.flags) != null,
    {
      enabled: tr
    } = T.appStorefrontExperiment.useExperiment({
      location: "ApplicationDirectoryProfile"
    }),
    to = (0, P.useAppStorefrontAvailable)(null !== (d = null == eB ? void 0 : eB.id) && void 0 !== d ? d : ""),
    tc = tr && to,
    td = a.useMemo(() => {
      let e = [],
        t = !0;
      switch (h) {
        case em.ApplicationDirectoryProfileSections.GENERAL: {
          var l, a;
          let n = null == eB ? void 0 : null === (l = eB.directory_entry) || void 0 === l ? void 0 : l.detailed_description;
          null != n && n.length > 0 ? (e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(I.Heading, {
              className: eg.sectionHeader,
              variant: "heading-md/semibold",
              children: eI.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, i.jsx)("div", {
              ref: ta,
              className: s()({
                [eg.descriptionClamp]: !te,
                [eg.descriptionClampSafari]: !te && "Safari" === o().name
              }),
              children: (0, i.jsx)(U.default, {
                className: eg.detailedDescription,
                parser: eA,
                output: eE,
                state: {
                  allowLinks: !0
                },
                children: n
              })
            }), (e9 || te) && (0, i.jsx)(ej, {
              isViewAll: te,
              onToggle: () => {
                tt(e => !e)
              }
            })]
          })), t = !1) : (null == eB ? void 0 : null === (a = eB.directory_entry) || void 0 === a ? void 0 : a.short_description) !== void 0 ? e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(I.Heading, {
              className: eg.sectionHeader,
              variant: "heading-md/semibold",
              children: eI.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, i.jsx)("span", {
              children: eB.directory_entry.short_description
            })]
          })) : (null == eB ? void 0 : eB.description) != null && e.push((0, i.jsx)(b.default, {
            className: eg.description,
            userBio: eB.description
          })), null != eL && eL.length > 0 && (e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(I.Heading, {
              className: eg.sectionHeader,
              variant: "heading-md/semibold",
              children: eI.default.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
            }), (0, i.jsx)(ec.default, {
              className: eg.commandList,
              commands: eL
            })]
          })), t = !0);
          break
        }
        case em.ApplicationDirectoryProfileSections.IMAGES: {
          if (0 === eQ.length) break;
          let t = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("img", {
              className: eg.errorImage,
              src: ev,
              "aria-hidden": !0,
              alt: ""
            }), (0, i.jsx)(I.Heading, {
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
          }), e.push((0, i.jsx)(A.default, {
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
                loadTimeMs: l
              } = e;
              null != l && null != eB && Y.default.track(ef.AnalyticEvents.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                application_id: eB.id,
                load_time_ms: l,
                src: t
              })
            }
          }));
          break
        }
        case em.ApplicationDirectoryProfileSections.PREMIUM:
          e6 && (null == eB ? void 0 : eB.primary_sku_id) != null && e.push((0, i.jsx)(D.default, {
            applicationId: eB.id,
            applicationPrimarySkuId: null == eB ? void 0 : eB.primary_sku_id,
            analyticsLocation: ef.AnalyticsLocations.APP_DIRECTORY_PROFILE,
            forcesTransitionToGuild: !0
          }));
          break;
        case em.ApplicationDirectoryProfileSections.PRIVACY:
          tn && e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(I.Heading, {
              className: eg.sectionHeader,
              variant: "heading-md/semibold",
              children: eI.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
            }), (0, i.jsx)(g.default, {
              className: eg.commandList,
              grantedPermissions: eK,
              grantedPermissionsHeader: eI.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
            })]
          })), ts && e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(I.Heading, {
              className: eg.sectionHeader,
              variant: "heading-md/semibold",
              children: eI.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
            }), (0, i.jsx)(ed.default, {
              application: eB
            })]
          }))
      }
      return ti(t), 0 === e.length && h !== em.ApplicationDirectoryProfileSections.GENERAL && null != eB && eH(), e.map((e, t) => (0, i.jsx)("div", {
        className: eg.section,
        children: e
      }, t))
    }, [h, eH, eB, eL, te, e9, eQ, eM, eX, e6, tn, ts, eK]),
    tu = a.useMemo(() => {
      let e = [{
        sectionName: em.ApplicationDirectoryProfileSections.GENERAL,
        sectionText: eI.default.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL
      }];
      return eQ.length > 0 && e.push({
        sectionName: em.ApplicationDirectoryProfileSections.IMAGES,
        sectionText: eI.default.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES
      }), e6 && !tc && e.push({
        sectionName: em.ApplicationDirectoryProfileSections.PREMIUM,
        sectionText: eI.default.Messages.APP_DIRECTORY_PROFILE_TAB_PREMIUM
      }), (tn || ts) && e.push({
        sectionName: em.ApplicationDirectoryProfileSections.PRIVACY,
        sectionText: eI.default.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY
      }), e
    }, [eQ.length, e6, tn, ts, tc]);
  return _ = null == eB ? null == eP || eP === J.FetchState.FETCHING ? (0, i.jsx)(ei.default, {
    loading: eP === J.FetchState.FETCHING
  }) : (0, i.jsx)("div", {
    className: eg.__invalid_page,
    children: (0, i.jsxs)("div", {
      className: eg.emptyContainer,
      children: [(0, i.jsx)("img", {
        className: eg.emptyImage,
        src: ev,
        alt: ""
      }), (0, i.jsx)(I.Heading, {
        variant: "heading-xl/semibold",
        children: eI.default.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
      })]
    })
  }) : (0, i.jsxs)(ei.default, {
    loading: eP === J.FetchState.FETCHING,
    children: [(0, i.jsx)(eO, {
      app: eB,
      iconSrc: eY
    }), (0, i.jsxs)("div", {
      className: eg.__invalid_page,
      children: [(0, i.jsxs)("div", {
        className: eg.header,
        children: [(0, i.jsxs)("div", {
          className: eg.headerSidebar,
          children: [(0, i.jsx)("img", {
            className: eg.headerIcon,
            alt: "",
            "aria-hidden": !0,
            src: eY,
            width: eC,
            height: eC
          }), (0, i.jsx)(el.default, {
            application: eB,
            mutualGuilds: ew,
            mutualGuildShownMax: 3,
            compact: !0
          })]
        }), (0, i.jsxs)("div", {
          className: eg.headerContent,
          children: [(0, i.jsxs)("div", {
            className: eg.headerNameAndButtons,
            children: [(0, i.jsxs)("div", {
              className: eg.headerNameAndIcon,
              children: [(0, i.jsx)(I.Heading, {
                className: eg.name,
                variant: "heading-xxl/semibold",
                children: eB.name
              }), e6 && (0, i.jsx)(I.Tooltip, {
                tooltipClassName: eg.premiumIconTooltip,
                text: eI.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                children: e => (0, i.jsx)("img", {
                  ...e,
                  alt: eI.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                  className: eg.premiumIcon,
                  src: l("744050")
                })
              }), e7 && (0, i.jsx)(ea.default, {
                className: eg.partnerBadge
              })]
            }), (0, i.jsxs)("div", {
              className: eg.buttons,
              children: [tc && (0, i.jsx)(eo.ApplicationDirectoryStoreBtn, {
                appId: eB.id,
                guildId: null != E ? E : void 0
              }), (0, i.jsx)(I.Button, {
                onClick: e5,
                color: I.Button.Colors.PRIMARY,
                children: e2 ? eI.default.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : eI.default.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
              }), (0, i.jsx)(I.Button, {
                color: I.Button.Colors.BRAND,
                onClick: e3,
                disabled: !eW,
                children: eI.default.Messages.APPLICATION_ADD_BUTTON
              }), (0, i.jsx)(I.Popout, {
                renderPopout: e => {
                  let {
                    closePopout: t
                  } = e;
                  return e1(t)
                },
                position: "left",
                align: "top",
                animation: I.Popout.Animation.NONE,
                children: e => (0, i.jsx)(I.Clickable, {
                  className: eg.overflow,
                  ...e,
                  children: (0, i.jsx)(H.default, {
                    width: 20,
                    height: 20,
                    className: eg.iconInteractive
                  })
                })
              })]
            })]
          }), (0, i.jsx)(e_.default, {
            activeSection: h,
            setSection: eJ,
            shownSections: tu
          })]
        })]
      }), (0, i.jsxs)("div", {
        className: eg.contentContainer,
        children: [(0, i.jsxs)("div", {
          className: eg.content,
          children: [td, null != eT && eT.length > 0 ? (0, i.jsxs)(i.Fragment, {
            children: [tl && (0, i.jsx)("div", {
              className: eg.separator
            }), (0, i.jsxs)("div", {
              className: eg.section,
              children: [(0, i.jsx)(I.Heading, {
                className: eg.relatedHeader,
                variant: "eyebrow",
                children: eI.default.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
              }), (0, i.jsx)(ei.default, {
                loading: S,
                children: (0, i.jsx)(et.default, {
                  applications: eT,
                  onViewOne: e$
                })
              })]
            })]
          }) : null]
        }), (0, i.jsx)(ep.default, {
          className: eg.sidebar,
          application: eB,
          guildId: E,
          onViewCategory: eq,
          onClickGuildWidget: eG
        })]
      })]
    })]
  }), (0, i.jsx)(q.default, {
    children: _
  })
}

function eS(e) {
  switch (e.type) {
    case E.ApplicationDirectoryEntryCarouselItemType.MEDIA_PROXY:
      var t;
      let l = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
      return {
        type: ef.CarouselMediaTypes.IMG, width: 0, height: 0, src: l
      };
    case E.ApplicationDirectoryEntryCarouselItemType.YOUTUBE:
      let i = eT(e.url);
      if (null != i) return {
        type: ef.CarouselMediaTypes.YOUTUBE_VIDEO,
        youtubeVideoId: i
      }
  }
  return console.warn("Unsupported carousel item", e), null
}
let ej = e => {
    let t, {
      onToggle: l,
      isViewAll: a
    } = e;
    return t = a ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(I.Text, {
        className: eg.showMoreButtonText,
        variant: "eyebrow",
        children: eI.default.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
      }), (0, i.jsx)(G.default, {
        className: eg.showMoreButtonIcon
      })]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(I.Text, {
        className: eg.showMoreButtonText,
        variant: "eyebrow",
        children: eI.default.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
      }), (0, i.jsx)(k.default, {
        className: eg.showMoreButtonIcon
      })]
    }), (0, i.jsx)(eL, {
      children: (0, i.jsx)(I.Button, {
        look: I.Button.Looks.BLANK,
        color: I.Button.Colors.TRANSPARENT,
        size: I.Button.Sizes.NONE,
        className: eg.showMoreButton,
        innerClassName: eg.showMoreButtonInner,
        onClick: l,
        children: t
      })
    })
  },
  eL = e => {
    let {
      className: t,
      contentClassName: l,
      children: a
    } = e;
    return (0, i.jsxs)("div", {
      className: s()([eg.dividerContainer, t]),
      children: [(0, i.jsx)("div", {
        className: eg.divider
      }), null != a ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: s()(eg.contentDivider, l),
          children: a
        }), (0, i.jsx)("div", {
          className: eg.divider
        })]
      }) : null]
    })
  };

function eO(e) {
  let {
    app: t,
    iconSrc: l
  } = e, n = (0, S.default)(l, f.default.unsafe_rawColors.PRIMARY_800.css), {
    bot: s
  } = t, r = (0, m.useStateFromStores)([x.default], () => x.default.useReducedMotion), o = a.useMemo(() => {
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
  return (0, i.jsx)("div", {
    style: o,
    className: eg.headerBanner
  })
}