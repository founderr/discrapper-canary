"use strict";
l.r(t), l.d(t, {
  default: function() {
    return ex
  }
}), l("610138"), l("216116"), l("78328"), l("815648"), l("47120"), l("315314"), l("789020"), l("653041");
var i = l("735250"),
  a = l("470079"),
  n = l("803997"),
  s = l.n(n),
  r = l("525654"),
  c = l.n(r),
  o = l("302454"),
  d = l.n(o),
  u = l("873546"),
  _ = l("149765"),
  m = l("468194"),
  p = l("442837"),
  f = l("692547"),
  h = l("477690"),
  C = l("481060"),
  g = l("995648"),
  I = l("445986"),
  A = l("9807"),
  E = l("911969"),
  v = l("330726"),
  x = l("782568"),
  R = l("607070"),
  T = l("581364"),
  N = l("220082"),
  P = l("252618"),
  y = l("299206"),
  j = l("422559"),
  O = l("270144"),
  S = l("864843"),
  L = l("703656"),
  D = l("588822"),
  M = l("706454"),
  b = l("314897"),
  Y = l("451478"),
  k = l("729035"),
  H = l("86813"),
  G = l("826026"),
  F = l("808268"),
  w = l("626135"),
  U = l("768581"),
  B = l("572004"),
  V = l("823379"),
  W = l("900849"),
  K = l("674588"),
  z = l("264043"),
  Z = l("303383"),
  q = l("887706"),
  X = l("738130"),
  J = l("4461"),
  Q = l("34674"),
  $ = l("576958"),
  ee = l("924489"),
  et = l("125909"),
  el = l("409425"),
  ei = l("132871"),
  ea = l("147890"),
  en = l("491576"),
  es = l("940064"),
  er = l("626004"),
  ec = l("939893"),
  eo = l("430913"),
  ed = l("606183"),
  eu = l("272242"),
  e_ = l("981631"),
  em = l("689938"),
  ep = l("74869"),
  ef = l("902294");
let eh = d().parserFor(ec.default),
  eC = d().reactFor(d().ruleOutput(ec.default, "react")),
  eg = (0, m.cssValueToNumber)(h.default.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
  eI = "redirect_to_support_server",
  eA = "start_application_install",
  eE = e => "".concat(location.protocol, "//").concat(location.host).concat(e_.Routes.APPLICATION_DIRECTORY_PROFILE(e)),
  ev = e => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null
  };

function ex(e) {
  var t, n, r, o;
  let d, {
      applicationId: m,
      initialSection: f
    } = e,
    h = (0, ei.useApplicationDirectoryHistory)(e => e.guildId),
    E = (0, q.default)(),
    R = a.useRef(m),
    N = a.useRef(!1),
    H = (0, p.useStateFromStores)([Z.default], () => Z.default.getFetchState({
      applicationId: m,
      guildId: h
    }) === Z.FetchState.FETCHING),
    G = a.useRef({
      applicationId: void 0,
      guildId: void 0
    }),
    {
      similarApplications: ec,
      similarLoadId: ev
    } = (0, p.useStateFromStoresObject)([Z.default], () => {
      let e = {
          applicationId: m,
          guildId: h
        },
        t = Z.default.getSimilarApplications(e);
      return null == t ? t = Z.default.getSimilarApplications(G.current) : G.current = e, {
        similarApplications: null == t ? void 0 : t.applications,
        similarLoadId: null == t ? void 0 : t.loadId
      }
    }),
    ex = a.useMemo(() => null == ec ? void 0 : ec.slice(0, 3), [ec]),
    eN = (0, p.useStateFromStores)([z.default], () => z.default.getApplicationFetchState(m)),
    [ey, ej] = a.useState(void 0),
    [eO, eS] = a.useState(null != f ? f : eu.ApplicationDirectoryProfileSections.GENERAL),
    eL = (0, p.useStateFromStores)([Y.default], () => Y.default.isFocused()),
    eD = (0, p.useStateFromStores)([M.default], () => M.default.locale),
    eM = a.useRef(m),
    eb = (0, p.useStateFromStores)([z.default], () => {
      let e = z.default.getApplication(m);
      return null == e ? e = z.default.getApplication(eM.current) : eM.current = m, e
    }),
    eY = (0, en.default)({
      application: eb
    }),
    ek = (0, p.useStateFromStores)([b.default], () => b.default.getSessionId());
  (0, P.usePageTitle)({
    location: null == eb ? void 0 : eb.name
  });
  let eH = a.useCallback(async () => {
    try {
      var e;
      let t = null == eb ? void 0 : null === (e = eb.guild) || void 0 === e ? void 0 : e.id;
      if (null != t) {
        (null == eb ? void 0 : eb.id) != null && w.default.track(e_.AnalyticEvents.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
          application_id: eb.id,
          guild_id: t
        });
        let e = {
          page: e_.AnalyticsPages.APPLICATION_DIRECTORY
        };
        await (0, W.startLurking)(t, e, {
          setsHistorySnapshot: !1
        })
      }
    } catch {}
  }, [eb]);
  a.useEffect(() => {
    if (null == eb) return;
    let e = new URL(location.href);
    if (E && null != ek && "true" === e.searchParams.get(eI)) {
      e.searchParams.delete(eI);
      let t = e.pathname + e.search;
      (0, L.replaceWith)(t), eH()
    }
  }, [E, eH, ek, eb]);
  let eG = a.useCallback(() => {
    var e;
    null != (null == eb ? void 0 : null === (e = eb.guild) || void 0 === e ? void 0 : e.id) && (E ? eH() : (0, Q.redirectToLogin)({
      [eI]: "true"
    }))
  }, [eb, E, eH]);
  a.useEffect(() => {
    null != m && (eO === eu.ApplicationDirectoryProfileSections.GENERAL ? (0, ea.replaceAppDirectoryURLWith)("".concat(e_.Routes.APPLICATION_DIRECTORY_PROFILE(m)).concat(location.search)) : (0, ea.replaceAppDirectoryURLWith)("".concat(e_.Routes.APPLICATION_DIRECTORY_PROFILE(m, eO.toLowerCase())).concat(location.search)))
  }, [m, eO]), a.useEffect(() => {
    null != m && K.getApplication(m)
  }, [m]), a.useEffect(() => {
    if ((null == eb ? void 0 : eb.directory_entry) != null) {
      let e = eb.directory_entry,
        t = null == e ? void 0 : e.popular_application_commands;
      null != t ? ej(t.map(e => (0, T.buildCommand)({
        rootCommand: e,
        command: e,
        applicationId: e.application_id
      }))) : ej(void 0)
    }
  }, [eb]), a.useEffect(() => {
    null != m && R.current !== m && (eS(eu.ApplicationDirectoryProfileSections.GENERAL), R.current = void 0)
  }, [m]);
  let eF = U.default.getApplicationIconURL({
      id: null !== (r = null == eb ? void 0 : eb.id) && void 0 !== r ? r : "-1",
      icon: null == eb ? void 0 : eb.icon,
      size: eg
    }),
    ew = (0, y.default)({
      id: null !== (o = null == eb ? void 0 : eb.id) && void 0 !== o ? o : "",
      label: em.default.Messages.COPY_ID_APPLICATION
    }),
    {
      canInstall: eU,
      install: eB
    } = (0, J.useInstallApplication)(eb, h),
    eV = null === (t = (0, ei.getPreviousView)()) || void 0 === t ? void 0 : t.type;
  a.useEffect(() => {
    (null == eb ? void 0 : eb.id) != null && w.default.track(e_.AnalyticEvents.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: "product",
      previous_page: eV,
      application_id: eb.id,
      guild_id: h,
      shown_mutual_guilds_count: eY.length
    })
  }, [null == eb ? void 0 : eb.id, h, eY]);
  let eW = a.useMemo(() => {
      var e;
      let t = null == eb ? void 0 : null === (e = eb.install_params) || void 0 === e ? void 0 : e.permissions;
      if (null != t) return j.OrderedPermissions.filter(e => _.has(_.deserialize(t), e))
    }, [null == eb ? void 0 : null === (n = eb.install_params) || void 0 === n ? void 0 : n.permissions]),
    eK = a.useCallback(e => {
      eS(e), N.current = !0, (null == eb ? void 0 : eb.id) != null && w.default.track(e_.AnalyticEvents.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
        application_id: eb.id,
        guild_id: h,
        tab_name: e
      })
    }, [null == eb ? void 0 : eb.id, h]),
    ez = a.useMemo(() => {
      var e, t, l;
      return null !== (l = (null !== (t = null == eb ? void 0 : null === (e = eb.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== t ? t : []).map(eR).filter(V.isNotNullish)) && void 0 !== l ? l : []
    }, [eb]),
    eZ = a.useCallback((e, t) => {
      if (e.type === e_.CarouselMediaTypes.IMG) {
        let t = ez.filter(e => e.type === e_.CarouselMediaTypes.IMG),
          a = t.findIndex(t => t === e);
        if (a < 0) return;
        let n = t.map(e => ({
          src: (0, I.transformAssetURL)(e.src),
          width: e.width,
          height: e.height
        }));
        (0, C.openModalLazy)(async () => {
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
              modalCarouselItemClassName: ep.appSlide
            })
          }
        })
      }
    }, [ez]),
    eq = a.useCallback(e => {
      (null == eb ? void 0 : eb.id) != null && w.default.track(e_.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
        current_page: "product",
        category: e.name,
        category_id: e.id,
        application_id: eb.id,
        guild_id: h
      }), (0, ea.goToCategory)({
        categoryId: e.id
      })
    }, [eb, h]);
  a.useEffect(() => {
    null != m && K.getSimilarApplications({
      applicationId: m,
      guildId: h
    })
  }, [m, h]);
  let eX = a.useCallback(e => {
      let {
        application: t,
        mutualGuilds: l
      } = e;
      (null == eb ? void 0 : eb.id) != null && w.default.track(e_.AnalyticEvents.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
        current_page: "product",
        application_id: eb.id,
        suggested_application_id: t.id,
        load_id: ev,
        guild_id: h,
        shown_mutual_guilds_count: l.length
      }), (0, ea.goToApplication)({
        applicationId: t.id
      })
    }, [null == eb ? void 0 : eb.id, ev, h]),
    eJ = a.useCallback(() => {
      null != eb && (0, x.default)(function(e, t) {
        let l = "https://".concat(e_.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new"),
          i = new URLSearchParams;
        return i.append("tf_12275088515223", "field_value_dc_category_report_an_app_bot"), i.append("tf_12276208289431", "field_value_dc_reported_action_app_directory"), i.append("tf_12094971213335", t.id), i.append("ticket_form_id", "12275528604823"), i.append("tf_subject", "App Directory Report ".concat(t.name, " ").concat(t.id)), "".concat(l, "?").concat(i.toString())
      }(eD, eb))
    }, [eD, eb]),
    eQ = a.useCallback(e => (0, i.jsxs)(C.Menu, {
      navId: "application-directory-profile",
      "aria-label": em.default.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
      onClose: e,
      onSelect: void 0,
      children: [(0, i.jsx)(C.MenuGroup, {
        children: (0, i.jsx)(C.MenuItem, {
          id: "report",
          label: em.default.Messages.REPORT_APP,
          color: "danger",
          action: eJ
        })
      }), null != ew ? (0, i.jsx)(C.MenuGroup, {
        children: ew
      }) : null]
    }), [ew, eJ]),
    [e$, e0] = (0, v.default)(!1, 1e3),
    e1 = a.useCallback(() => {
      null != eb && (w.default.track(e_.AnalyticEvents.APP_SHARE_BUTTON_CLICKED, {
        source: "product_page",
        application_id: eb.id,
        guild_id: h
      }), (0, B.copy)(eE(eb.id)), e0(!0))
    }, [eb, e0, h]);
  a.useEffect(() => {
    let e = new URL(location.href);
    if (E && "true" === e.searchParams.get(eA)) {
      e.searchParams.delete(eA);
      let t = e.pathname + e.search;
      (0, L.replaceWith)(t), eB("product_page")
    }
  }, [E, eB]);
  let e7 = a.useCallback(() => {
      null != eb && (E ? eB("product_page") : (w.default.track(e_.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
        application_id: m,
        guild_id: h,
        auth_type: null != eb.custom_install_url ? "custom_url" : "in_app",
        source: "product_page",
        device_platform: u.isMobile ? "mobile_web" : "desktop_web"
      }), (0, Q.redirectToLogin)({
        [eA]: "true"
      })))
    }, [eb, E, eB, m, h]),
    {
      applicationSubscriptionListingsShown: e4
    } = (0, O.default)({
      applicationId: null == eb ? void 0 : eb.id,
      groupListingId: null == eb ? void 0 : eb.primary_sku_id,
      guildId: h
    }),
    e8 = (null == eb ? void 0 : eb.id) === "936929561302675456",
    [e3, e9] = a.useState(!1),
    [e6, e5] = a.useState(!1),
    [e2, te] = a.useState(!0),
    tt = e => {
      null != e && e9(e.scrollHeight > e.clientHeight)
    },
    tl = null != eW && eW.length > 0,
    ti = (null == eb ? void 0 : eb.flags) != null,
    ta = a.useMemo(() => {
      let e = [],
        t = !0;
      switch (eO) {
        case eu.ApplicationDirectoryProfileSections.GENERAL: {
          var l, a;
          let n = null == eb ? void 0 : null === (l = eb.directory_entry) || void 0 === l ? void 0 : l.detailed_description;
          null != n && n.length > 0 ? (e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: ep.sectionHeader,
              variant: "heading-md/semibold",
              children: em.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, i.jsx)("div", {
              ref: tt,
              className: s()({
                [ep.descriptionClamp]: !e6,
                [ep.descriptionClampSafari]: !e6 && "Safari" === c().name
              }),
              children: (0, i.jsx)(k.default, {
                className: ep.detailedDescription,
                parser: eh,
                output: eC,
                state: {
                  allowLinks: !0
                },
                children: n
              })
            }), (e3 || e6) && (0, i.jsx)(eT, {
              isViewAll: e6,
              onToggle: () => {
                e5(e => !e)
              }
            })]
          })), t = !1) : (null == eb ? void 0 : null === (a = eb.directory_entry) || void 0 === a ? void 0 : a.short_description) !== void 0 ? e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: ep.sectionHeader,
              variant: "heading-md/semibold",
              children: em.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, i.jsx)("span", {
              children: eb.directory_entry.short_description
            })]
          })) : (null == eb ? void 0 : eb.description) != null && e.push((0, i.jsx)(D.default, {
            className: ep.description,
            userBio: eb.description
          })), null != ey && ey.length > 0 && (e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: ep.sectionHeader,
              variant: "heading-md/semibold",
              children: em.default.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
            }), (0, i.jsx)(es.default, {
              className: ep.commandList,
              commands: ey
            })]
          })), t = !0);
          break
        }
        case eu.ApplicationDirectoryProfileSections.IMAGES: {
          let t = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("img", {
              className: ep.errorImage,
              src: ef,
              "aria-hidden": !0,
              alt: ""
            }), (0, i.jsx)(C.Heading, {
              variant: "heading-xl/semibold",
              children: em.default.Messages.ERRORS_IMAGE_NOT_FOUND
            })]
          });
          ez.forEach((e, t) => {
            null != eb ? e.alt = em.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
              index: t + 1,
              totalImages: ez.length,
              name: eb.name
            }) : e.alt = em.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT
          }), e.push((0, i.jsx)(A.default, {
            className: ep.carousel,
            themedPagination: !0,
            items: ez,
            autoplayInterval: 8e3,
            paused: !eL,
            videoAutoPlay: !0,
            onCurrentItemClick: eZ,
            errorComponent: t,
            onImageLoad: e => {
              let {
                src: t,
                loadTimeMs: l
              } = e;
              null != l && null != eb && w.default.track(e_.AnalyticEvents.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                application_id: eb.id,
                load_time_ms: l,
                src: t
              })
            }
          }));
          break
        }
        case eu.ApplicationDirectoryProfileSections.PREMIUM:
          e4 && (null == eb ? void 0 : eb.primary_sku_id) != null && e.push((0, i.jsx)(S.default, {
            applicationId: eb.id,
            applicationPrimarySkuId: null == eb ? void 0 : eb.primary_sku_id,
            analyticsLocation: e_.AnalyticsLocations.APP_DIRECTORY_PROFILE,
            forcesTransitionToGuild: !0
          }));
          break;
        case eu.ApplicationDirectoryProfileSections.PRIVACY:
          tl && e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: ep.sectionHeader,
              variant: "heading-md/semibold",
              children: em.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
            }), (0, i.jsx)(g.default, {
              className: ep.commandList,
              grantedPermissions: eW,
              grantedPermissionsHeader: em.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
            })]
          })), ti && e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: ep.sectionHeader,
              variant: "heading-md/semibold",
              children: em.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
            }), (0, i.jsx)(er.default, {
              application: eb
            })]
          }))
      }
      return te(t), e.map((e, t) => (0, i.jsx)("div", {
        className: ep.section,
        children: e
      }, t))
    }, [eb, e4, ez, ey, eW, eZ, eL, eO, e6, e3, tl, ti]),
    tn = a.useMemo(() => {
      let e = R.current === m && !N.current,
        t = [{
          sectionName: eu.ApplicationDirectoryProfileSections.GENERAL,
          sectionText: em.default.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL
        }];
      return ez.length > 0 && (t.push({
        sectionName: eu.ApplicationDirectoryProfileSections.IMAGES,
        sectionText: em.default.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES
      }), e && f === eu.ApplicationDirectoryProfileSections.IMAGES && eS(f)), e4 && (t.push({
        sectionName: eu.ApplicationDirectoryProfileSections.PREMIUM,
        sectionText: em.default.Messages.APP_DIRECTORY_PROFILE_TAB_PREMIUM
      }), e && f === eu.ApplicationDirectoryProfileSections.PREMIUM && eS(f)), (tl || ti) && (t.push({
        sectionName: eu.ApplicationDirectoryProfileSections.PRIVACY,
        sectionText: em.default.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY
      }), e && f === eu.ApplicationDirectoryProfileSections.PRIVACY && eS(f)), t
    }, [ez.length, e4, tl, ti, f, m]);
  return d = null == eb ? null == eN || eN === z.FetchState.FETCHING ? (0, i.jsx)(et.default, {
    loading: eN === z.FetchState.FETCHING
  }) : (0, i.jsx)("div", {
    className: ep.__invalid_page,
    children: (0, i.jsxs)("div", {
      className: ep.emptyContainer,
      children: [(0, i.jsx)("img", {
        className: ep.emptyImage,
        src: ef,
        alt: ""
      }), (0, i.jsx)(C.Heading, {
        variant: "heading-xl/semibold",
        children: em.default.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
      })]
    })
  }) : (0, i.jsxs)(et.default, {
    loading: eN === z.FetchState.FETCHING,
    children: [(0, i.jsx)(eP, {
      app: eb,
      iconSrc: eF
    }), (0, i.jsxs)("div", {
      className: ep.__invalid_page,
      children: [(0, i.jsxs)("div", {
        className: ep.header,
        children: [(0, i.jsxs)("div", {
          className: ep.headerSidebar,
          children: [(0, i.jsx)("img", {
            className: ep.headerIcon,
            alt: "",
            "aria-hidden": !0,
            src: eF,
            width: eg,
            height: eg
          }), (0, i.jsx)(ee.default, {
            application: eb,
            mutualGuilds: eY,
            mutualGuildShownMax: 3,
            compact: !0
          })]
        }), (0, i.jsxs)("div", {
          className: ep.headerContent,
          children: [(0, i.jsxs)("div", {
            className: ep.headerNameAndButtons,
            children: [(0, i.jsxs)("div", {
              className: ep.headerNameAndIcon,
              children: [(0, i.jsx)(C.Heading, {
                className: ep.name,
                variant: "heading-xxl/semibold",
                children: eb.name
              }), e4 && (0, i.jsx)(C.Tooltip, {
                tooltipClassName: ep.premiumIconTooltip,
                text: em.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                children: e => (0, i.jsx)("img", {
                  ...e,
                  alt: em.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                  className: ep.premiumIcon,
                  src: l("744050")
                })
              }), e8 && (0, i.jsx)(el.default, {
                className: ep.partnerBadge
              })]
            }), (0, i.jsxs)("div", {
              className: s()(ep.buttons),
              children: [(0, i.jsx)(C.Button, {
                onClick: e1,
                color: C.Button.Colors.PRIMARY,
                children: e$ ? em.default.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : em.default.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
              }), (0, i.jsx)(C.Button, {
                color: C.Button.Colors.BRAND,
                onClick: e7,
                disabled: !eU,
                children: em.default.Messages.APP_DIRECTORY_PROFILE_ADD_BUTTON
              }), (0, i.jsx)(C.Popout, {
                renderPopout: e => {
                  let {
                    closePopout: t
                  } = e;
                  return eQ(t)
                },
                position: "left",
                align: "top",
                animation: C.Popout.Animation.NONE,
                children: e => (0, i.jsx)(C.Clickable, {
                  className: ep.overflow,
                  ...e,
                  children: (0, i.jsx)(F.default, {
                    width: 20,
                    height: 20,
                    className: ep.iconInteractive
                  })
                })
              })]
            })]
          }), (0, i.jsx)(ed.default, {
            activeSection: eO,
            setSection: eK,
            shownSections: tn
          })]
        })]
      }), (0, i.jsxs)("div", {
        className: ep.contentContainer,
        children: [(0, i.jsxs)("div", {
          className: ep.content,
          children: [ta, null != ex && ex.length > 0 ? (0, i.jsxs)(i.Fragment, {
            children: [e2 && (0, i.jsx)("div", {
              className: ep.separator
            }), (0, i.jsxs)("div", {
              className: ep.section,
              children: [(0, i.jsx)(C.Heading, {
                className: ep.relatedHeader,
                variant: "eyebrow",
                children: em.default.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
              }), (0, i.jsx)(et.default, {
                loading: H,
                children: (0, i.jsx)($.default, {
                  applications: ex,
                  onViewOne: eX
                })
              })]
            })]
          }) : null]
        }), (0, i.jsx)(eo.default, {
          className: ep.sidebar,
          application: eb,
          guildId: h,
          onViewCategory: eq,
          onClickGuildWidget: eG
        })]
      })]
    })]
  }), (0, i.jsx)(X.default, {
    children: d
  })
}

function eR(e) {
  switch (e.type) {
    case E.ApplicationDirectoryEntryCarouselItemType.MEDIA_PROXY:
      var t;
      let l = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
      return {
        type: e_.CarouselMediaTypes.IMG, width: 0, height: 0, src: l
      };
    case E.ApplicationDirectoryEntryCarouselItemType.YOUTUBE:
      let i = ev(e.url);
      if (null != i) return {
        type: e_.CarouselMediaTypes.YOUTUBE_VIDEO,
        youtubeVideoId: i
      }
  }
  return console.warn("Unsupported carousel item", e), null
}
let eT = e => {
    let t, {
      onToggle: l,
      isViewAll: a
    } = e;
    return t = a ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(C.Text, {
        className: ep.showMoreButtonText,
        variant: "eyebrow",
        children: em.default.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
      }), (0, i.jsx)(G.default, {
        className: ep.showMoreButtonIcon
      })]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(C.Text, {
        className: ep.showMoreButtonText,
        variant: "eyebrow",
        children: em.default.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
      }), (0, i.jsx)(H.default, {
        className: ep.showMoreButtonIcon
      })]
    }), (0, i.jsx)(eN, {
      children: (0, i.jsx)(C.Button, {
        look: C.Button.Looks.BLANK,
        color: C.Button.Colors.TRANSPARENT,
        size: C.Button.Sizes.NONE,
        className: ep.showMoreButton,
        innerClassName: ep.showMoreButtonInner,
        onClick: l,
        children: t
      })
    })
  },
  eN = e => {
    let {
      className: t,
      contentClassName: l,
      children: a
    } = e;
    return (0, i.jsxs)("div", {
      className: s()([ep.dividerContainer, t]),
      children: [(0, i.jsx)("div", {
        className: ep.divider
      }), null != a ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: s()(ep.contentDivider, l),
          children: a
        }), (0, i.jsx)("div", {
          className: ep.divider
        })]
      }) : null]
    })
  };

function eP(e) {
  let {
    app: t,
    iconSrc: l
  } = e, n = (0, N.default)(l, f.default.unsafe_rawColors.PRIMARY_800.css), {
    bot: s
  } = t, r = (0, p.useStateFromStores)([R.default], () => R.default.useReducedMotion), c = a.useMemo(() => {
    let e = {
      backgroundColor: n
    };
    if (null != s) {
      let t = (0, U.getUserBannerURL)({
        id: s.id,
        banner: s.banner,
        size: 1024,
        canAnimate: !1
      });
      if (null != t && (e["--custom-background-static"] = "url(".concat(t), e.height = "212px"), !r) {
        let t = (0, U.getUserBannerURL)({
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
    style: c,
    className: ep.headerBanner
  })
}