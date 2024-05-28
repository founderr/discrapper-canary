"use strict";
i.r(t), i.d(t, {
  default: function() {
    return eT
  },
  getApplicationDirectoryProfileUrl: function() {
    return eN
  },
  getYouTubeVideoIdFromUrl: function() {
    return ex
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
  I = i("481060"),
  g = i("995648"),
  v = i("445986"),
  A = i("9807"),
  E = i("911969"),
  R = i("330726"),
  C = i("782568"),
  N = i("607070"),
  x = i("581364"),
  T = i("970321"),
  P = i("220082"),
  S = i("252618"),
  j = i("299206"),
  L = i("422559"),
  O = i("270144"),
  y = i("864843"),
  D = i("703656"),
  b = i("588822"),
  M = i("706454"),
  F = i("314897"),
  k = i("451478"),
  B = i("729035"),
  U = i("86813"),
  w = i("826026"),
  G = i("808268"),
  Y = i("626135"),
  H = i("768581"),
  V = i("572004"),
  W = i("823379"),
  K = i("900849"),
  z = i("674588"),
  Z = i("264043"),
  q = i("303383"),
  Q = i("887706"),
  J = i("738130"),
  X = i("4461"),
  $ = i("34674"),
  ee = i("576958"),
  et = i("924489"),
  ei = i("125909"),
  el = i("409425"),
  ea = i("132871"),
  en = i("147890"),
  es = i("491576"),
  er = i("95650"),
  eo = i("940064"),
  ec = i("626004"),
  ed = i("939893"),
  eu = i("430913"),
  ep = i("606183"),
  em = i("272242"),
  ef = i("981631"),
  e_ = i("558921"),
  eh = i("689938"),
  eI = i("798945"),
  eg = i("902294");
let ev = d().parserFor(ed.default),
  eA = d().reactFor(d().ruleOutput(ed.default, "react")),
  eE = (0, m.cssValueToNumber)(h.default.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
  eR = "redirect_to_support_server",
  eC = "start_application_install",
  eN = e => "".concat(location.protocol, "//").concat(location.host).concat(ef.Routes.APPLICATION_DIRECTORY_PROFILE(e)),
  ex = e => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null
  };

function eT(e) {
  var t, n, r, c, d;
  let m, {
      match: {
        params: {
          applicationId: _,
          section: h = em.ApplicationDirectoryProfileSections.GENERAL
        }
      }
    } = e,
    E = (0, ea.useApplicationDirectoryHistory)(e => e.guildId),
    N = (0, Q.default)(),
    P = (0, f.useStateFromStores)([q.default], () => q.default.getFetchState({
      applicationId: _,
      guildId: E
    }) === q.FetchState.FETCHING),
    U = a.useRef({
      applicationId: void 0,
      guildId: void 0
    }),
    {
      similarApplications: w,
      similarLoadId: ed
    } = (0, f.useStateFromStoresObject)([q.default], () => {
      let e = {
          applicationId: _,
          guildId: E
        },
        t = q.default.getSimilarApplications(e);
      return null == t ? t = q.default.getSimilarApplications(U.current) : U.current = e, {
        similarApplications: null == t ? void 0 : t.applications,
        similarLoadId: null == t ? void 0 : t.loadId
      }
    }),
    ex = a.useMemo(() => null == w ? void 0 : w.slice(0, 3), [w]),
    eT = (0, f.useStateFromStores)([Z.default], () => Z.default.getApplicationFetchState(_)),
    [ej, eO] = a.useState(void 0),
    ey = a.useCallback(e => {
      if (null != _) {
        if (e === em.ApplicationDirectoryProfileSections.GENERAL) {
          (0, en.replaceAppDirectoryURLWith)(ef.Routes.APPLICATION_DIRECTORY_PROFILE(_));
          return
        }(0, en.replaceAppDirectoryURLWith)(ef.Routes.APPLICATION_DIRECTORY_PROFILE_SECTION(_, e))
      }
    }, [_]),
    eD = (0, f.useStateFromStores)([k.default], () => k.default.isFocused()),
    eb = (0, f.useStateFromStores)([M.default], () => M.default.locale),
    eM = a.useRef(_),
    eF = (0, f.useStateFromStores)([Z.default], () => {
      let e = Z.default.getApplication(_);
      return null == e ? e = Z.default.getApplication(eM.current) : eM.current = _, e
    }),
    ek = (0, es.default)({
      application: eF
    }),
    eB = (0, f.useStateFromStores)([F.default], () => F.default.getSessionId());
  (0, S.usePageTitle)({
    location: null == eF ? void 0 : eF.name
  });
  let eU = a.useCallback(async () => {
    try {
      var e;
      let t = null == eF ? void 0 : null === (e = eF.guild) || void 0 === e ? void 0 : e.id;
      if (null != t) {
        (null == eF ? void 0 : eF.id) != null && Y.default.track(ef.AnalyticEvents.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
          application_id: eF.id,
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
  }, [eF]);
  a.useEffect(() => {
    if (null == eF) return;
    let e = new URL(location.href);
    if (N && null != eB && "true" === e.searchParams.get(eR)) {
      e.searchParams.delete(eR);
      let t = e.pathname + e.search;
      (0, D.replaceWith)(t), eU()
    }
  }, [N, eU, eB, eF]);
  let ew = a.useCallback(() => {
      var e;
      null != (null == eF ? void 0 : null === (e = eF.guild) || void 0 === e ? void 0 : e.id) && (N ? eU() : (0, $.redirectToLogin)({
        [eR]: "true"
      }))
    }, [eF, N, eU]),
    eG = a.useCallback(() => {
      (0, en.replaceAppDirectoryURLWith)("".concat(ef.Routes.APPLICATION_DIRECTORY_PROFILE(_)).concat(location.search))
    }, [_]);
  a.useEffect(() => {
    h === em.ApplicationDirectoryProfileSections.GENERAL && eG()
  }, [eG, h]), a.useEffect(() => {
    null != _ && z.getApplication(_)
  }, [_]), a.useEffect(() => {
    if ((null == eF ? void 0 : eF.directory_entry) != null) {
      let e = eF.directory_entry,
        t = null == e ? void 0 : e.popular_application_commands;
      null != t ? eO(t.map(e => (0, x.buildCommand)({
        rootCommand: e,
        command: e,
        applicationId: e.application_id
      }))) : eO(void 0)
    }
  }, [eF]);
  let eY = H.default.getApplicationIconURL({
      id: null !== (r = null == eF ? void 0 : eF.id) && void 0 !== r ? r : "-1",
      icon: null == eF ? void 0 : eF.icon,
      size: eE
    }),
    eH = (0, j.default)({
      id: null !== (c = null == eF ? void 0 : eF.id) && void 0 !== c ? c : "",
      label: eh.default.Messages.COPY_ID_APPLICATION
    }),
    {
      canInstall: eV,
      install: eW
    } = (0, X.useInstallApplication)(eF, E),
    eK = null === (t = (0, ea.getPreviousView)()) || void 0 === t ? void 0 : t.type;
  a.useEffect(() => {
    (null == eF ? void 0 : eF.id) != null && Y.default.track(ef.AnalyticEvents.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: "product",
      previous_page: eK,
      application_id: eF.id,
      guild_id: E,
      shown_mutual_guilds_count: ek.length
    })
  }, [null == eF ? void 0 : eF.id, E, ek]);
  let ez = a.useMemo(() => {
      var e;
      let t = null == eF ? void 0 : null === (e = eF.install_params) || void 0 === e ? void 0 : e.permissions;
      if (null != t) return L.OrderedPermissions.filter(e => p.has(p.deserialize(t), e))
    }, [null == eF ? void 0 : null === (n = eF.install_params) || void 0 === n ? void 0 : n.permissions]),
    eZ = a.useCallback(e => {
      ey(e), (null == eF ? void 0 : eF.id) != null && Y.default.track(ef.AnalyticEvents.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
        application_id: eF.id,
        guild_id: E,
        tab_name: e
      })
    }, [null == eF ? void 0 : eF.id, E, ey]),
    eq = a.useMemo(() => {
      var e, t, i;
      return null !== (i = (null !== (t = null == eF ? void 0 : null === (e = eF.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== t ? t : []).map(eP).filter(W.isNotNullish)) && void 0 !== i ? i : []
    }, [eF]),
    eQ = a.useCallback((e, t) => {
      if (e.type === ef.CarouselMediaTypes.IMG) {
        let t = eq.filter(e => e.type === ef.CarouselMediaTypes.IMG),
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
              modalCarouselItemClassName: eI.appSlide
            })
          }
        })
      }
    }, [eq]),
    eJ = a.useCallback(e => {
      (null == eF ? void 0 : eF.id) != null && Y.default.track(ef.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
        current_page: "product",
        category: e.name,
        category_id: e.id,
        application_id: eF.id,
        guild_id: E
      }), (0, en.goToCategory)({
        categoryId: e.id
      })
    }, [eF, E]);
  a.useEffect(() => {
    null != _ && z.getSimilarApplications({
      applicationId: _,
      guildId: E
    })
  }, [_, E]);
  let eX = a.useCallback(e => {
      let {
        application: t,
        mutualGuilds: i
      } = e;
      (null == eF ? void 0 : eF.id) != null && Y.default.track(ef.AnalyticEvents.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
        current_page: "product",
        application_id: eF.id,
        suggested_application_id: t.id,
        load_id: ed,
        guild_id: E,
        shown_mutual_guilds_count: i.length
      }), (0, en.goToApplication)({
        applicationId: t.id
      })
    }, [null == eF ? void 0 : eF.id, ed, E]),
    e$ = a.useCallback(() => {
      null != eF && (0, C.default)(function(e, t) {
        let i = "https://".concat(ef.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new"),
          l = new URLSearchParams;
        return l.append("tf_12275088515223", "field_value_dc_category_report_an_app_bot"), l.append("tf_12276208289431", "field_value_dc_reported_action_app_directory"), l.append("tf_12094971213335", t.id), l.append("ticket_form_id", "12275528604823"), l.append("tf_subject", "App Directory Report ".concat(t.name, " ").concat(t.id)), "".concat(i, "?").concat(l.toString())
      }(eb, eF))
    }, [eb, eF]),
    e0 = a.useCallback(e => (0, l.jsxs)(I.Menu, {
      navId: "application-directory-profile",
      "aria-label": eh.default.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
      onClose: e,
      onSelect: void 0,
      children: [(0, l.jsx)(I.MenuGroup, {
        children: (0, l.jsx)(I.MenuItem, {
          id: "report",
          label: eh.default.Messages.REPORT_APP,
          color: "danger",
          action: e$
        })
      }), null != eH ? (0, l.jsx)(I.MenuGroup, {
        children: eH
      }) : null]
    }), [eH, e$]),
    [e1, e2] = (0, R.default)(!1, 1e3),
    e4 = a.useCallback(() => {
      null != eF && (Y.default.track(ef.AnalyticEvents.APP_SHARE_BUTTON_CLICKED, {
        source: "product_page",
        application_id: eF.id,
        guild_id: E
      }), (0, V.copy)(eN(eF.id)), e2(!0))
    }, [eF, e2, E]);
  a.useEffect(() => {
    let e = new URL(location.href);
    if (N && "true" === e.searchParams.get(eC)) {
      e.searchParams.delete(eC);
      let t = e.pathname + e.search;
      (0, D.replaceWith)(t), eW("product_page")
    }
  }, [N, eW]);
  let e5 = a.useCallback(() => {
      null != eF && (N ? eW("product_page") : (Y.default.track(ef.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
        application_id: _,
        guild_id: E,
        auth_type: null != eF.custom_install_url ? "custom_url" : "in_app",
        source: "product_page",
        device_platform: u.isMobile ? "mobile_web" : "desktop_web"
      }), (0, $.redirectToLogin)({
        [eC]: "true"
      })))
    }, [eF, N, eW, _, E]),
    {
      applicationSubscriptionListingsShown: e7
    } = (0, O.default)({
      applicationId: null == eF ? void 0 : eF.id,
      groupListingId: null == eF ? void 0 : eF.primary_sku_id,
      guildId: E
    }),
    e9 = (null == eF ? void 0 : eF.id) === e_.MIDJOURNEY_BOT_ID,
    [e6, e8] = a.useState(!1),
    [e3, te] = a.useState(!1),
    [tt, ti] = a.useState(!0),
    tl = e => {
      null != e && e8(e.scrollHeight > e.clientHeight)
    },
    ta = null != ez && ez.length > 0,
    tn = (null == eF ? void 0 : eF.flags) != null,
    ts = (0, T.useAppStorefrontAvailable)(null !== (d = null == eF ? void 0 : eF.id) && void 0 !== d ? d : ""),
    tr = a.useMemo(() => {
      let e = [],
        t = !0;
      switch (h) {
        case em.ApplicationDirectoryProfileSections.GENERAL: {
          var i, a;
          let n = null == eF ? void 0 : null === (i = eF.directory_entry) || void 0 === i ? void 0 : i.detailed_description;
          null != n && n.length > 0 ? (e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(I.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: eh.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, l.jsx)("div", {
              ref: tl,
              className: s()({
                [eI.descriptionClamp]: !e3,
                [eI.descriptionClampSafari]: !e3 && "Safari" === o().name
              }),
              children: (0, l.jsx)(B.default, {
                className: eI.detailedDescription,
                parser: ev,
                output: eA,
                state: {
                  allowLinks: !0
                },
                children: n
              })
            }), (e6 || e3) && (0, l.jsx)(eS, {
              isViewAll: e3,
              onToggle: () => {
                te(e => !e)
              }
            })]
          })), t = !1) : (null == eF ? void 0 : null === (a = eF.directory_entry) || void 0 === a ? void 0 : a.short_description) !== void 0 ? e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(I.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: eh.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, l.jsx)("span", {
              children: eF.directory_entry.short_description
            })]
          })) : (null == eF ? void 0 : eF.description) != null && e.push((0, l.jsx)(b.default, {
            className: eI.description,
            userBio: eF.description
          })), null != ej && ej.length > 0 && (e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(I.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: eh.default.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
            }), (0, l.jsx)(eo.default, {
              className: eI.commandList,
              commands: ej
            })]
          })), t = !0);
          break
        }
        case em.ApplicationDirectoryProfileSections.IMAGES: {
          if (0 === eq.length) break;
          let t = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("img", {
              className: eI.errorImage,
              src: eg,
              "aria-hidden": !0,
              alt: ""
            }), (0, l.jsx)(I.Heading, {
              variant: "heading-xl/semibold",
              children: eh.default.Messages.ERRORS_IMAGE_NOT_FOUND
            })]
          });
          eq.forEach((e, t) => {
            null != eF ? e.alt = eh.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
              index: t + 1,
              totalImages: eq.length,
              name: eF.name
            }) : e.alt = eh.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT
          }), e.push((0, l.jsx)(A.default, {
            className: eI.carousel,
            themedPagination: !0,
            items: eq,
            autoplayInterval: 8e3,
            paused: !eD,
            videoAutoPlay: !0,
            onCurrentItemClick: eQ,
            errorComponent: t,
            onImageLoad: e => {
              let {
                src: t,
                loadTimeMs: i
              } = e;
              null != i && null != eF && Y.default.track(ef.AnalyticEvents.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                application_id: eF.id,
                load_time_ms: i,
                src: t
              })
            }
          }));
          break
        }
        case em.ApplicationDirectoryProfileSections.PREMIUM:
          e7 && (null == eF ? void 0 : eF.primary_sku_id) != null && e.push((0, l.jsx)(y.default, {
            applicationId: eF.id,
            applicationPrimarySkuId: null == eF ? void 0 : eF.primary_sku_id,
            analyticsLocation: ef.AnalyticsLocations.APP_DIRECTORY_PROFILE,
            forcesTransitionToGuild: !0
          }));
          break;
        case em.ApplicationDirectoryProfileSections.PRIVACY:
          ta && e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(I.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: eh.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
            }), (0, l.jsx)(g.default, {
              className: eI.commandList,
              grantedPermissions: ez,
              grantedPermissionsHeader: eh.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
            })]
          })), tn && e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(I.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: eh.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
            }), (0, l.jsx)(ec.default, {
              application: eF
            })]
          }))
      }
      return ti(t), 0 === e.length && h !== em.ApplicationDirectoryProfileSections.GENERAL && null != eF && eG(), e.map((e, t) => (0, l.jsx)("div", {
        className: eI.section,
        children: e
      }, t))
    }, [h, eG, eF, ej, e3, e6, eq, eD, eQ, e7, ta, tn, ez]),
    to = a.useMemo(() => {
      let e = [{
        sectionName: em.ApplicationDirectoryProfileSections.GENERAL,
        sectionText: eh.default.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL
      }];
      return eq.length > 0 && e.push({
        sectionName: em.ApplicationDirectoryProfileSections.IMAGES,
        sectionText: eh.default.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES
      }), e7 && !ts && e.push({
        sectionName: em.ApplicationDirectoryProfileSections.PREMIUM,
        sectionText: eh.default.Messages.APP_DIRECTORY_PROFILE_TAB_PREMIUM
      }), (ta || tn) && e.push({
        sectionName: em.ApplicationDirectoryProfileSections.PRIVACY,
        sectionText: eh.default.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY
      }), e
    }, [eq.length, e7, ta, tn, ts]);
  return m = null == eF ? null == eT || eT === Z.FetchState.FETCHING ? (0, l.jsx)(ei.default, {
    loading: eT === Z.FetchState.FETCHING
  }) : (0, l.jsx)("div", {
    className: eI.__invalid_page,
    children: (0, l.jsxs)("div", {
      className: eI.emptyContainer,
      children: [(0, l.jsx)("img", {
        className: eI.emptyImage,
        src: eg,
        alt: ""
      }), (0, l.jsx)(I.Heading, {
        variant: "heading-xl/semibold",
        children: eh.default.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
      })]
    })
  }) : (0, l.jsxs)(ei.default, {
    loading: eT === Z.FetchState.FETCHING,
    children: [(0, l.jsx)(eL, {
      app: eF,
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
            width: eE,
            height: eE
          }), (0, l.jsx)(et.default, {
            application: eF,
            mutualGuilds: ek,
            mutualGuildShownMax: 3,
            compact: !0
          })]
        }), (0, l.jsxs)("div", {
          className: eI.headerContent,
          children: [(0, l.jsxs)("div", {
            className: eI.headerNameAndButtons,
            children: [(0, l.jsxs)("div", {
              className: eI.headerNameAndIcon,
              children: [(0, l.jsx)(I.Heading, {
                className: eI.name,
                variant: "heading-xxl/semibold",
                children: eF.name
              }), e7 && (0, l.jsx)(I.Tooltip, {
                tooltipClassName: eI.premiumIconTooltip,
                text: eh.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                children: e => (0, l.jsx)("img", {
                  ...e,
                  alt: eh.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                  className: eI.premiumIcon,
                  src: i("744050")
                })
              }), e9 && (0, l.jsx)(el.default, {
                className: eI.partnerBadge
              })]
            }), (0, l.jsxs)("div", {
              className: eI.buttons,
              children: [ts && (0, l.jsx)(er.ApplicationDirectoryStoreBtn, {
                appId: eF.id,
                guildId: null != E ? E : void 0
              }), (0, l.jsx)(I.Button, {
                onClick: e4,
                color: I.Button.Colors.PRIMARY,
                children: e1 ? eh.default.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : eh.default.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
              }), (0, l.jsx)(I.Button, {
                color: I.Button.Colors.BRAND,
                onClick: e5,
                disabled: !eV,
                children: eh.default.Messages.APPLICATION_ADD_BUTTON
              }), (0, l.jsx)(I.Popout, {
                renderPopout: e => {
                  let {
                    closePopout: t
                  } = e;
                  return e0(t)
                },
                position: "left",
                align: "top",
                animation: I.Popout.Animation.NONE,
                children: e => (0, l.jsx)(I.Clickable, {
                  className: eI.overflow,
                  ...e,
                  children: (0, l.jsx)(G.default, {
                    width: 20,
                    height: 20,
                    className: eI.iconInteractive
                  })
                })
              })]
            })]
          }), (0, l.jsx)(ep.default, {
            activeSection: h,
            setSection: eZ,
            shownSections: to
          })]
        })]
      }), (0, l.jsxs)("div", {
        className: eI.contentContainer,
        children: [(0, l.jsxs)("div", {
          className: eI.content,
          children: [tr, null != ex && ex.length > 0 ? (0, l.jsxs)(l.Fragment, {
            children: [tt && (0, l.jsx)("div", {
              className: eI.separator
            }), (0, l.jsxs)("div", {
              className: eI.section,
              children: [(0, l.jsx)(I.Heading, {
                className: eI.relatedHeader,
                variant: "eyebrow",
                children: eh.default.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
              }), (0, l.jsx)(ei.default, {
                loading: P,
                children: (0, l.jsx)(ee.default, {
                  applications: ex,
                  onViewOne: eX
                })
              })]
            })]
          }) : null]
        }), (0, l.jsx)(eu.default, {
          className: eI.sidebar,
          application: eF,
          guildId: E,
          onViewCategory: eJ,
          onClickGuildWidget: ew
        })]
      })]
    })]
  }), (0, l.jsx)(J.default, {
    children: m
  })
}

function eP(e) {
  switch (e.type) {
    case E.ApplicationDirectoryEntryCarouselItemType.MEDIA_PROXY:
      var t;
      let i = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
      return {
        type: ef.CarouselMediaTypes.IMG, width: 0, height: 0, src: i
      };
    case E.ApplicationDirectoryEntryCarouselItemType.YOUTUBE:
      let l = ex(e.url);
      if (null != l) return {
        type: ef.CarouselMediaTypes.YOUTUBE_VIDEO,
        youtubeVideoId: l
      }
  }
  return console.warn("Unsupported carousel item", e), null
}
let eS = e => {
    let t, {
      onToggle: i,
      isViewAll: a
    } = e;
    return t = a ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(I.Text, {
        className: eI.showMoreButtonText,
        variant: "eyebrow",
        children: eh.default.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
      }), (0, l.jsx)(w.default, {
        className: eI.showMoreButtonIcon
      })]
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(I.Text, {
        className: eI.showMoreButtonText,
        variant: "eyebrow",
        children: eh.default.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
      }), (0, l.jsx)(U.default, {
        className: eI.showMoreButtonIcon
      })]
    }), (0, l.jsx)(ej, {
      children: (0, l.jsx)(I.Button, {
        look: I.Button.Looks.BLANK,
        color: I.Button.Colors.TRANSPARENT,
        size: I.Button.Sizes.NONE,
        className: eI.showMoreButton,
        innerClassName: eI.showMoreButtonInner,
        onClick: i,
        children: t
      })
    })
  },
  ej = e => {
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

function eL(e) {
  let {
    app: t,
    iconSrc: i
  } = e, n = (0, P.default)(i, _.default.unsafe_rawColors.PRIMARY_800.css), {
    bot: s
  } = t, r = (0, f.useStateFromStores)([N.default], () => N.default.useReducedMotion), o = a.useMemo(() => {
    let e = {
      backgroundColor: n
    };
    if (null != s) {
      let t = (0, H.getUserBannerURL)({
        id: s.id,
        banner: s.banner,
        size: 1024,
        canAnimate: !1
      });
      if (null != t && (e["--custom-background-static"] = "url(".concat(t), e.height = "212px"), !r) {
        let t = (0, H.getUserBannerURL)({
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