t.r(n), t.d(n, {
  default: function() {
    return eA
  },
  getApplicationDirectoryProfileUrl: function() {
    return ex
  },
  getYouTubeVideoIdFromUrl: function() {
    return eb
  }
}), t(610138), t(216116), t(78328), t(815648), t(47120), t(315314), t(789020), t(653041);
var i = t(735250),
  a = t(470079),
  r = t(120356),
  o = t.n(r),
  l = t(525654),
  s = t.n(l),
  c = t(302454),
  d = t.n(c),
  u = t(873546),
  _ = t(149765),
  p = t(468194),
  m = t(442837),
  I = t(692547),
  f = t(477690),
  g = t(481060),
  h = t(995648),
  C = t(445986),
  v = t(9807),
  E = t(911969),
  x = t(330726),
  b = t(782568),
  A = t(607070),
  P = t(581364),
  T = t(970321),
  R = t(283836),
  N = t(220082),
  S = t(252618),
  L = t(299206),
  O = t(422559),
  j = t(270144),
  y = t(864843),
  D = t(703656),
  Z = t(588822),
  M = t(706454),
  B = t(314897),
  k = t(451478),
  w = t(729035),
  G = t(626135),
  H = t(768581),
  U = t(572004),
  F = t(823379),
  Y = t(900849),
  W = t(674588),
  V = t(264043),
  z = t(303383),
  K = t(887706),
  q = t(738130),
  J = t(4461),
  Q = t(34674),
  X = t(576958),
  $ = t(924489),
  ee = t(125909),
  en = t(409425),
  et = t(132871),
  ei = t(147890),
  ea = t(491576),
  er = t(95650),
  eo = t(940064),
  el = t(626004),
  es = t(939893),
  ec = t(430913),
  ed = t(606183),
  eu = t(272242),
  e_ = t(981631),
  ep = t(558921),
  em = t(689938),
  eI = t(79329),
  ef = t(902294);
let eg = d().parserFor(es.Z),
  eh = d().reactFor(d().ruleOutput(es.Z, "react")),
  eC = (0, p.Mg)(f.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
  ev = "redirect_to_support_server",
  eE = "start_application_install",
  ex = e => "".concat(location.protocol, "//").concat(location.host).concat(e_.Z5c.APPLICATION_DIRECTORY_PROFILE(e)),
  eb = e => {
    if (null == e) return null;
    let n = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != n ? n[1] : null
  };

function eA(e) {
  var n, r, l, c;
  let d, {
      match: {
        params: {
          applicationId: p,
          section: I = eu.ApplicationDirectoryProfileSections.GENERAL
        }
      }
    } = e,
    f = (0, et.useApplicationDirectoryHistory)(e => e.guildId),
    E = (0, K.Z)(),
    A = (0, m.e7)([z.Z], () => z.Z.getFetchState({
      applicationId: p,
      guildId: f
    }) === z.M.FETCHING),
    N = a.useRef({
      applicationId: void 0,
      guildId: void 0
    }),
    {
      similarApplications: es,
      similarLoadId: eb
    } = (0, m.cj)([z.Z], () => {
      let e = {
          applicationId: p,
          guildId: f
        },
        n = z.Z.getSimilarApplications(e);
      return null == n ? n = z.Z.getSimilarApplications(N.current) : N.current = e, {
        similarApplications: null == n ? void 0 : n.applications,
        similarLoadId: null == n ? void 0 : n.loadId
      }
    }),
    eA = a.useMemo(() => null == es ? void 0 : es.slice(0, 3), [es]),
    eR = (0, m.e7)([V.Z], () => V.Z.getApplicationFetchState(p)),
    [eS, eL] = a.useState(void 0),
    eO = a.useCallback(e => {
      if (null != p) {
        if (e === eu.ApplicationDirectoryProfileSections.GENERAL) {
          (0, ei.replaceAppDirectoryURLWith)(e_.Z5c.APPLICATION_DIRECTORY_PROFILE(p));
          return
        }(0, ei.replaceAppDirectoryURLWith)(e_.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(p, e))
      }
    }, [p]),
    ej = (0, m.e7)([k.Z], () => k.Z.isFocused()),
    ey = (0, m.e7)([M.default], () => M.default.locale),
    eD = a.useRef(p),
    eZ = (0, m.e7)([V.Z], () => {
      let e = V.Z.getApplication(p);
      return null == e ? e = V.Z.getApplication(eD.current) : eD.current = p, e
    }),
    eM = (0, ea.Z)({
      application: eZ
    }),
    eB = (0, m.e7)([B.default], () => B.default.getSessionId());
  (0, S.Tt)({
    location: null == eZ ? void 0 : eZ.name
  });
  let ek = a.useCallback(async () => {
    try {
      var e;
      let n = null == eZ ? void 0 : null === (e = eZ.guild) || void 0 === e ? void 0 : e.id;
      if (null != n) {
        (null == eZ ? void 0 : eZ.id) != null && G.default.track(e_.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
          application_id: eZ.id,
          guild_id: n
        });
        let e = {
          page: e_.ZY5.APPLICATION_DIRECTORY
        };
        await (0, Y.Ub)(n, e, {
          setsHistorySnapshot: !1
        })
      }
    } catch {}
  }, [eZ]);
  a.useEffect(() => {
    if (null == eZ) return;
    let e = new URL(location.href);
    if (E && null != eB && "true" === e.searchParams.get(ev)) {
      e.searchParams.delete(ev);
      let n = e.pathname + e.search;
      (0, D.dL)(n), ek()
    }
  }, [E, ek, eB, eZ]);
  let ew = a.useCallback(() => {
      var e;
      null != (null == eZ ? void 0 : null === (e = eZ.guild) || void 0 === e ? void 0 : e.id) && (E ? ek() : (0, Q.rf)({
        [ev]: "true"
      }))
    }, [eZ, E, ek]),
    eG = a.useCallback(() => {
      (0, ei.replaceAppDirectoryURLWith)("".concat(e_.Z5c.APPLICATION_DIRECTORY_PROFILE(p)).concat(location.search))
    }, [p]);
  a.useEffect(() => {
    I === eu.ApplicationDirectoryProfileSections.GENERAL && eG()
  }, [eG, I]), a.useEffect(() => {
    null != p && W.i6(p)
  }, [p]), a.useEffect(() => {
    if ((null == eZ ? void 0 : eZ.directory_entry) != null) {
      let e = eZ.directory_entry,
        n = null == e ? void 0 : e.popular_application_commands;
      null != n ? eL(n.map(e => (0, P.Z8)({
        rootCommand: e,
        command: e,
        applicationId: e.application_id
      }))) : eL(void 0)
    }
  }, [eZ]);
  let eH = H.ZP.getApplicationIconURL({
      id: null !== (l = null == eZ ? void 0 : eZ.id) && void 0 !== l ? l : "-1",
      icon: null == eZ ? void 0 : eZ.icon,
      size: eC
    }),
    eU = (0, L.Z)({
      id: null !== (c = null == eZ ? void 0 : eZ.id) && void 0 !== c ? c : "",
      label: em.Z.Messages.COPY_ID_APPLICATION
    }),
    {
      canInstall: eF,
      install: eY
    } = (0, J.P)(eZ, f),
    eW = null === (n = (0, et.getPreviousView)()) || void 0 === n ? void 0 : n.type;
  a.useEffect(() => {
    (null == eZ ? void 0 : eZ.id) != null && G.default.track(e_.rMx.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: "product",
      previous_page: eW,
      application_id: eZ.id,
      guild_id: f,
      shown_mutual_guilds_count: eM.length,
      profile_section: I,
      referrer: document.referrer
    })
  }, [null == eZ ? void 0 : eZ.id, f, eM]);
  let eV = a.useMemo(() => {
      var e;
      let n = null == eZ ? void 0 : null === (e = eZ.install_params) || void 0 === e ? void 0 : e.permissions;
      if (null != n) return O.VY.filter(e => _.e$(_.vB(n), e))
    }, [null == eZ ? void 0 : null === (r = eZ.install_params) || void 0 === r ? void 0 : r.permissions]),
    ez = a.useCallback(e => {
      eO(e), (null == eZ ? void 0 : eZ.id) != null && G.default.track(e_.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
        application_id: eZ.id,
        guild_id: f,
        tab_name: e
      })
    }, [null == eZ ? void 0 : eZ.id, f, eO]),
    eK = a.useMemo(() => {
      var e, n, t;
      return null !== (t = (null !== (n = null == eZ ? void 0 : null === (e = eZ.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== n ? n : []).map(eP).filter(F.lm)) && void 0 !== t ? t : []
    }, [eZ]),
    eq = a.useCallback((e, n) => {
      if (e.type === e_.s9s.IMG) {
        let n = eK.filter(e => e.type === e_.s9s.IMG),
          a = n.findIndex(n => n === e);
        if (a < 0) return;
        let r = n.map(e => ({
          src: (0, C.Q)(e.src),
          width: e.width,
          height: e.height
        }));
        (0, g.openModalLazy)(async () => {
          let {
            default: e
          } = await t.e("41814").then(t.bind(t, 895023));
          return n => {
            let {
              ...t
            } = n;
            return (0, i.jsx)(e, {
              ...t,
              items: r,
              startingIndex: a,
              modalCarouselItemClassName: eI.appSlide
            })
          }
        })
      }
    }, [eK]),
    eJ = a.useCallback(e => {
      (null == eZ ? void 0 : eZ.id) != null && G.default.track(e_.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
        current_page: "product",
        category: e.name,
        category_id: e.id,
        application_id: eZ.id,
        guild_id: f
      }), (0, ei.goToCategory)({
        categoryId: e.id
      })
    }, [eZ, f]);
  a.useEffect(() => {
    if (null != p) W.T4({
      applicationId: p,
      guildId: f
    })
  }, [p, f]);
  let eQ = a.useCallback(e => {
      let {
        application: n,
        mutualGuilds: t
      } = e;
      (null == eZ ? void 0 : eZ.id) != null && G.default.track(e_.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
        current_page: "product",
        application_id: eZ.id,
        suggested_application_id: n.id,
        load_id: eb,
        guild_id: f,
        shown_mutual_guilds_count: t.length
      }), (0, ei.goToApplication)({
        applicationId: n.id
      })
    }, [null == eZ ? void 0 : eZ.id, eb, f]),
    eX = a.useCallback(() => {
      null != eZ && (0, b.Z)(function(e, n) {
        let t = "https://".concat(e_.xr4, "/hc/").concat(e.toLowerCase(), "/requests/new"),
          i = new URLSearchParams;
        return i.append("tf_12275088515223", "field_value_dc_category_report_an_app_bot"), i.append("tf_12276208289431", "field_value_dc_reported_action_app_directory"), i.append("tf_12094971213335", n.id), i.append("ticket_form_id", "12275528604823"), i.append("tf_subject", "App Directory Report ".concat(n.name, " ").concat(n.id)), "".concat(t, "?").concat(i.toString())
      }(ey, eZ))
    }, [ey, eZ]),
    e$ = a.useCallback(e => (0, i.jsxs)(g.Menu, {
      navId: "application-directory-profile",
      "aria-label": em.Z.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
      onClose: e,
      onSelect: void 0,
      children: [(0, i.jsx)(g.MenuGroup, {
        children: (0, i.jsx)(g.MenuItem, {
          id: "report",
          label: em.Z.Messages.REPORT_APP,
          color: "danger",
          action: eX
        })
      }), null != eU ? (0, i.jsx)(g.MenuGroup, {
        children: eU
      }) : null]
    }), [eU, eX]),
    [e0, e6] = (0, x.Z)(!1, 1e3),
    e1 = a.useCallback(() => {
      if (null != eZ) G.default.track(e_.rMx.APP_SHARE_BUTTON_CLICKED, {
        source: "product_page",
        application_id: eZ.id,
        guild_id: f
      }), (0, U.JG)(ex(eZ.id)), e6(!0)
    }, [eZ, e6, f]);
  a.useEffect(() => {
    let e = new URL(location.href);
    if (E && "true" === e.searchParams.get(eE)) {
      e.searchParams.delete(eE);
      let n = e.pathname + e.search;
      (0, D.dL)(n), eY("product_page")
    }
  }, [E, eY]);
  let e5 = a.useCallback(() => {
      null != eZ && (E ? eY("product_page") : (G.default.track(e_.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
        application_id: p,
        guild_id: f,
        auth_type: null != eZ.custom_install_url ? "custom_url" : "in_app",
        source: "product_page",
        device_platform: u.tq ? "mobile_web" : "desktop_web"
      }), (0, Q.rf)({
        [eE]: "true"
      })))
    }, [eZ, E, eY, p, f]),
    {
      applicationSubscriptionListingsShown: e8
    } = (0, j.ZP)({
      applicationId: null == eZ ? void 0 : eZ.id,
      groupListingId: null == eZ ? void 0 : eZ.primary_sku_id,
      guildId: f
    }),
    e9 = (null == eZ ? void 0 : eZ.id) === ep.g,
    [e4, e2] = a.useState(!1),
    [e3, e7] = a.useState(!1),
    [ne, nn] = a.useState(!0),
    nt = e => {
      null != e && e2(e.scrollHeight > e.clientHeight)
    },
    ni = null != eV && eV.length > 0,
    na = (null == eZ ? void 0 : eZ.flags) != null,
    nr = (0, T.R)(null != p ? p : "");
  a.useEffect(() => {
    nr && null != p && (0, R.Z)(p)
  }, [nr, p]);
  let no = a.useMemo(() => {
      let e = [],
        n = !0;
      switch (I) {
        case eu.ApplicationDirectoryProfileSections.GENERAL: {
          var t, a;
          let r = null == eZ ? void 0 : null === (t = eZ.directory_entry) || void 0 === t ? void 0 : t.detailed_description;
          null != r && r.length > 0 ? (e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(g.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: em.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, i.jsx)("div", {
              ref: nt,
              className: o()({
                [eI.descriptionClamp]: !e3,
                [eI.descriptionClampSafari]: !e3 && "Safari" === s().name
              }),
              children: (0, i.jsx)(w.Z, {
                className: eI.detailedDescription,
                parser: eg,
                output: eh,
                state: {
                  allowLinks: !0
                },
                children: r
              })
            }), (e4 || e3) && (0, i.jsx)(eT, {
              isViewAll: e3,
              onToggle: () => {
                e7(e => !e)
              }
            })]
          })), n = !1) : (null == eZ ? void 0 : null === (a = eZ.directory_entry) || void 0 === a ? void 0 : a.short_description) !== void 0 ? e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(g.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: em.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, i.jsx)("span", {
              children: eZ.directory_entry.short_description
            })]
          })) : (null == eZ ? void 0 : eZ.description) != null && e.push((0, i.jsx)(Z.Z, {
            className: eI.description,
            userBio: eZ.description
          })), null != eS && eS.length > 0 && (e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(g.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: em.Z.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
            }), (0, i.jsx)(eo.Z, {
              className: eI.commandList,
              commands: eS
            })]
          })), n = !0);
          break
        }
        case eu.ApplicationDirectoryProfileSections.IMAGES: {
          if (0 === eK.length) break;
          let n = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("img", {
              className: eI.errorImage,
              src: ef,
              "aria-hidden": !0,
              alt: ""
            }), (0, i.jsx)(g.Heading, {
              variant: "heading-xl/semibold",
              children: em.Z.Messages.ERRORS_IMAGE_NOT_FOUND
            })]
          });
          eK.forEach((e, n) => {
            null != eZ ? e.alt = em.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
              index: n + 1,
              totalImages: eK.length,
              name: eZ.name
            }) : e.alt = em.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT
          }), e.push((0, i.jsx)(v.Z, {
            className: eI.carousel,
            themedPagination: !0,
            items: eK,
            autoplayInterval: 8e3,
            paused: !ej,
            videoAutoPlay: !0,
            onCurrentItemClick: eq,
            errorComponent: n,
            onImageLoad: e => {
              let {
                src: n,
                loadTimeMs: t
              } = e;
              null != t && null != eZ && G.default.track(e_.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                application_id: eZ.id,
                load_time_ms: t,
                src: n
              })
            }
          }));
          break
        }
        case eu.ApplicationDirectoryProfileSections.STORE:
          nr && null != p && e.push((0, i.jsx)(er.U, {
            appId: p,
            guildId: null != f ? f : void 0
          }));
          break;
        case eu.ApplicationDirectoryProfileSections.PREMIUM:
          e8 && (null == eZ ? void 0 : eZ.primary_sku_id) != null && e.push((0, i.jsx)(y.Z, {
            applicationId: eZ.id,
            applicationPrimarySkuId: null == eZ ? void 0 : eZ.primary_sku_id,
            analyticsLocation: e_.Sbl.APP_DIRECTORY_PROFILE,
            forcesTransitionToGuild: !0
          }));
          break;
        case eu.ApplicationDirectoryProfileSections.PRIVACY:
          ni && e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(g.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: em.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
            }), (0, i.jsx)(h.Z, {
              className: eI.commandList,
              grantedPermissions: eV,
              grantedPermissionsHeader: em.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
            })]
          })), na && e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(g.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: em.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
            }), (0, i.jsx)(el.Z, {
              application: eZ
            })]
          }))
      }
      return nn(n), 0 === e.length && I !== eu.ApplicationDirectoryProfileSections.GENERAL && null != eZ && eG(), e.map((e, n) => (0, i.jsx)("div", {
        className: eI.section,
        children: e
      }, n))
    }, [I, eG, eZ, eS, e3, e4, eK, ej, eq, nr, p, f, e8, ni, na, eV]),
    nl = a.useMemo(() => {
      let e = [{
        name: eu.ApplicationDirectoryProfileSections.GENERAL,
        text: em.Z.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL,
        Icon: g.AppsIcon
      }];
      return eK.length > 0 && e.push({
        name: eu.ApplicationDirectoryProfileSections.IMAGES,
        text: em.Z.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES,
        Icon: g.ImagesIcon
      }), nr && e.push({
        name: eu.ApplicationDirectoryProfileSections.STORE,
        text: em.Z.Messages.APP_DIRECTORY_PROFILE_TAB_STORE,
        Icon: g.ShopSparkleIcon
      }), e8 && !nr && e.push({
        name: eu.ApplicationDirectoryProfileSections.PREMIUM,
        text: em.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PREMIUM,
        Icon: g.ShopSparkleIcon
      }), (ni || na) && e.push({
        name: eu.ApplicationDirectoryProfileSections.PRIVACY,
        text: em.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY,
        Icon: g.PrivacyAndSafetyIcon
      }), e
    }, [eK.length, e8, ni, na, nr]);
  return d = null == eZ ? null == eR || eR === V.M.FETCHING ? (0, i.jsx)(ee.Z, {
    loading: eR === V.M.FETCHING
  }) : (0, i.jsx)("div", {
    className: eI.__invalid_page,
    children: (0, i.jsxs)("div", {
      className: eI.emptyContainer,
      children: [(0, i.jsx)("img", {
        className: eI.emptyImage,
        src: ef,
        alt: ""
      }), (0, i.jsx)(g.Heading, {
        variant: "heading-xl/semibold",
        children: em.Z.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
      })]
    })
  }) : (0, i.jsxs)(ee.Z, {
    loading: eR === V.M.FETCHING,
    children: [(0, i.jsx)(eN, {
      app: eZ,
      iconSrc: eH
    }), (0, i.jsxs)("div", {
      className: eI.__invalid_page,
      children: [(0, i.jsxs)("div", {
        className: eI.header,
        children: [(0, i.jsxs)("div", {
          className: eI.headerSidebar,
          children: [(0, i.jsx)("img", {
            className: eI.headerIcon,
            alt: "",
            "aria-hidden": !0,
            src: eH,
            width: eC,
            height: eC
          }), (0, i.jsx)($.Z, {
            application: eZ,
            mutualGuilds: eM,
            mutualGuildShownMax: 3,
            compact: !0
          })]
        }), (0, i.jsxs)("div", {
          className: eI.headerContent,
          children: [(0, i.jsxs)("div", {
            className: eI.headerNameAndButtons,
            children: [(0, i.jsxs)("div", {
              className: eI.headerNameAndIcon,
              children: [(0, i.jsx)(g.Heading, {
                className: eI.name,
                variant: "heading-xxl/semibold",
                children: eZ.name
              }), e8 && (0, i.jsx)(g.Tooltip, {
                tooltipClassName: eI.premiumIconTooltip,
                text: em.Z.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                children: e => (0, i.jsx)("img", {
                  ...e,
                  alt: em.Z.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                  className: eI.premiumIcon,
                  src: t(744050)
                })
              }), e9 && (0, i.jsx)(en.Z, {
                className: eI.partnerBadge
              })]
            }), (0, i.jsxs)("div", {
              className: eI.buttons,
              children: [(0, i.jsx)(g.Button, {
                onClick: e1,
                color: g.Button.Colors.PRIMARY,
                children: e0 ? em.Z.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : em.Z.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
              }), (0, i.jsx)(g.Button, {
                color: g.Button.Colors.BRAND,
                onClick: e5,
                disabled: !eF,
                children: em.Z.Messages.APPLICATION_ADD_BUTTON
              }), (0, i.jsx)(g.Popout, {
                renderPopout: e => {
                  let {
                    closePopout: n
                  } = e;
                  return e$(n)
                },
                position: "left",
                align: "top",
                animation: g.Popout.Animation.NONE,
                children: e => (0, i.jsx)(g.Clickable, {
                  className: eI.overflow,
                  ...e,
                  children: (0, i.jsx)(g.MoreHorizontalIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 20,
                    height: 20,
                    className: eI.iconInteractive
                  })
                })
              })]
            })]
          }), (0, i.jsx)(ed.Z, {
            activeSection: I,
            setSection: ez,
            sections: nl
          })]
        })]
      }), (0, i.jsxs)("div", {
        className: eI.contentContainer,
        children: [(0, i.jsxs)("div", {
          className: eI.content,
          children: [no, null != eA && eA.length > 0 ? (0, i.jsxs)(i.Fragment, {
            children: [ne && (0, i.jsx)("div", {
              className: eI.separator
            }), (0, i.jsxs)("div", {
              className: eI.section,
              children: [(0, i.jsx)(g.Heading, {
                className: eI.relatedHeader,
                variant: "eyebrow",
                children: em.Z.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
              }), (0, i.jsx)(ee.Z, {
                loading: A,
                children: (0, i.jsx)(X.Z, {
                  applications: eA,
                  onViewOne: eQ
                })
              })]
            })]
          }) : null]
        }), (0, i.jsx)(ec.Z, {
          className: eI.sidebar,
          application: eZ,
          guildId: f,
          onViewCategory: eJ,
          onClickGuildWidget: ew
        })]
      })]
    })]
  }), (0, i.jsx)(q.Z, {
    children: d
  })
}

function eP(e) {
  switch (e.type) {
    case E.ee.MEDIA_PROXY:
      var n;
      let t = null !== (n = e.proxy_url) && void 0 !== n ? n : e.url;
      return {
        type: e_.s9s.IMG, width: 0, height: 0, src: t
      };
    case E.ee.YOUTUBE:
      let i = eb(e.url);
      if (null != i) return {
        type: e_.s9s.YOUTUBE_VIDEO,
        youtubeVideoId: i
      }
  }
  return console.warn("Unsupported carousel item", e), null
}
let eT = e => {
    let n, {
      onToggle: t,
      isViewAll: a
    } = e;
    return n = a ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(g.Text, {
        className: eI.showMoreButtonText,
        variant: "eyebrow",
        children: em.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
      }), (0, i.jsx)(g.ChevronSmallUpIcon, {
        size: "md",
        color: "currentColor",
        className: eI.showMoreButtonIcon
      })]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(g.Text, {
        className: eI.showMoreButtonText,
        variant: "eyebrow",
        children: em.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
      }), (0, i.jsx)(g.ChevronSmallDownIcon, {
        size: "md",
        color: "currentColor",
        className: eI.showMoreButtonIcon
      })]
    }), (0, i.jsx)(eR, {
      children: (0, i.jsx)(g.Button, {
        look: g.Button.Looks.BLANK,
        color: g.Button.Colors.TRANSPARENT,
        size: g.Button.Sizes.NONE,
        className: eI.showMoreButton,
        innerClassName: eI.showMoreButtonInner,
        onClick: t,
        children: n
      })
    })
  },
  eR = e => {
    let {
      className: n,
      contentClassName: t,
      children: a
    } = e;
    return (0, i.jsxs)("div", {
      className: o()([eI.dividerContainer, n]),
      children: [(0, i.jsx)("div", {
        className: eI.divider
      }), null != a ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: o()(eI.contentDivider, t),
          children: a
        }), (0, i.jsx)("div", {
          className: eI.divider
        })]
      }) : null]
    })
  };

function eN(e) {
  let {
    app: n,
    iconSrc: t
  } = e, r = (0, N.ZP)(t, I.Z.unsafe_rawColors.PRIMARY_800.css), {
    bot: o
  } = n, l = (0, m.e7)([A.Z], () => A.Z.useReducedMotion), s = a.useMemo(() => {
    let e = {
      backgroundColor: r
    };
    if (null != o) {
      let n = (0, H.aN)({
        id: o.id,
        banner: o.banner,
        size: 1024,
        canAnimate: !1
      });
      if (null != n && (e["--custom-background-static"] = "url(".concat(n), e.height = "212px"), !l) {
        let n = (0, H.aN)({
          id: o.id,
          banner: o.banner,
          size: 1024,
          canAnimate: !0
        });
        null != n && (e["--custom-background-animated"] = "url(".concat(n))
      }
    }
    return e
  }, [r, o, l]);
  return (0, i.jsx)("div", {
    style: s,
    className: eI.headerBanner
  })
}