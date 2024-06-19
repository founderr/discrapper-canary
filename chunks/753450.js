i.r(n), i.d(n, {
  default: function() {
    return eT
  },
  getApplicationDirectoryProfileUrl: function() {
    return eP
  },
  getYouTubeVideoIdFromUrl: function() {
    return eC
  }
}), i(610138), i(216116), i(78328), i(815648), i(47120), i(315314), i(789020), i(653041);
var t = i(735250),
  l = i(470079),
  a = i(120356),
  s = i.n(a),
  r = i(525654),
  o = i.n(r),
  c = i(302454),
  d = i.n(c),
  u = i(873546),
  p = i(149765),
  _ = i(468194),
  m = i(442837),
  I = i(692547),
  h = i(477690),
  g = i(481060),
  E = i(995648),
  v = i(445986),
  A = i(9807),
  R = i(911969),
  P = i(330726),
  C = i(782568),
  T = i(607070),
  x = i(581364),
  N = i(970321),
  f = i(283836),
  S = i(220082),
  O = i(252618),
  L = i(299206),
  j = i(422559),
  Z = i(270144),
  D = i(864843),
  y = i(703656),
  M = i(588822),
  b = i(706454),
  k = i(314897),
  F = i(451478),
  U = i(729035),
  G = i(626135),
  B = i(768581),
  Y = i(572004),
  w = i(823379),
  H = i(900849),
  V = i(674588),
  W = i(264043),
  K = i(303383),
  z = i(887706),
  q = i(738130),
  Q = i(4461),
  J = i(34674),
  X = i(576958),
  $ = i(924489),
  ee = i(125909),
  en = i(409425),
  ei = i(132871),
  et = i(147890),
  el = i(491576),
  ea = i(95650),
  es = i(940064),
  er = i(626004),
  eo = i(939893),
  ec = i(430913),
  ed = i(606183),
  eu = i(272242),
  ep = i(981631),
  e_ = i(558921),
  em = i(689938),
  eI = i(79329),
  eh = i(902294);
let eg = d().parserFor(eo.Z),
  eE = d().reactFor(d().ruleOutput(eo.Z, "react")),
  ev = (0, _.Mg)(h.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
  eA = "redirect_to_support_server",
  eR = "start_application_install",
  eP = e => "".concat(location.protocol, "//").concat(location.host).concat(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(e)),
  eC = e => {
    if (null == e) return null;
    let n = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != n ? n[1] : null
  };

function eT(e) {
  var n, a, r, c;
  let d, {
      match: {
        params: {
          applicationId: _,
          section: I = eu.ApplicationDirectoryProfileSections.GENERAL
        }
      }
    } = e,
    h = (0, ei.useApplicationDirectoryHistory)(e => e.guildId),
    R = (0, z.Z)(),
    T = (0, m.e7)([K.Z], () => K.Z.getFetchState({
      applicationId: _,
      guildId: h
    }) === K.M.FETCHING),
    S = l.useRef({
      applicationId: void 0,
      guildId: void 0
    }),
    {
      similarApplications: eo,
      similarLoadId: eC
    } = (0, m.cj)([K.Z], () => {
      let e = {
          applicationId: _,
          guildId: h
        },
        n = K.Z.getSimilarApplications(e);
      return null == n ? n = K.Z.getSimilarApplications(S.current) : S.current = e, {
        similarApplications: null == n ? void 0 : n.applications,
        similarLoadId: null == n ? void 0 : n.loadId
      }
    }),
    eT = l.useMemo(() => null == eo ? void 0 : eo.slice(0, 3), [eo]),
    ef = (0, m.e7)([W.Z], () => W.Z.getApplicationFetchState(_)),
    [eO, eL] = l.useState(void 0),
    ej = l.useCallback(e => {
      if (null != _) {
        if (e === eu.ApplicationDirectoryProfileSections.GENERAL) {
          (0, et.replaceAppDirectoryURLWith)(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(_));
          return
        }(0, et.replaceAppDirectoryURLWith)(ep.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(_, e))
      }
    }, [_]),
    eZ = (0, m.e7)([F.Z], () => F.Z.isFocused()),
    eD = (0, m.e7)([b.default], () => b.default.locale),
    ey = l.useRef(_),
    eM = (0, m.e7)([W.Z], () => {
      let e = W.Z.getApplication(_);
      return null == e ? e = W.Z.getApplication(ey.current) : ey.current = _, e
    }),
    eb = (0, el.Z)({
      application: eM
    }),
    ek = (0, m.e7)([k.default], () => k.default.getSessionId());
  (0, O.Tt)({
    location: null == eM ? void 0 : eM.name
  });
  let eF = l.useCallback(async () => {
    try {
      var e;
      let n = null == eM ? void 0 : null === (e = eM.guild) || void 0 === e ? void 0 : e.id;
      if (null != n) {
        (null == eM ? void 0 : eM.id) != null && G.default.track(ep.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
          application_id: eM.id,
          guild_id: n
        });
        let e = {
          page: ep.ZY5.APPLICATION_DIRECTORY
        };
        await (0, H.Ub)(n, e, {
          setsHistorySnapshot: !1
        })
      }
    } catch {}
  }, [eM]);
  l.useEffect(() => {
    if (null == eM) return;
    let e = new URL(location.href);
    if (R && null != ek && "true" === e.searchParams.get(eA)) {
      e.searchParams.delete(eA);
      let n = e.pathname + e.search;
      (0, y.dL)(n), eF()
    }
  }, [R, eF, ek, eM]);
  let eU = l.useCallback(() => {
      var e;
      null != (null == eM ? void 0 : null === (e = eM.guild) || void 0 === e ? void 0 : e.id) && (R ? eF() : (0, J.rf)({
        [eA]: "true"
      }))
    }, [eM, R, eF]),
    eG = l.useCallback(() => {
      (0, et.replaceAppDirectoryURLWith)("".concat(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(_)).concat(location.search))
    }, [_]);
  l.useEffect(() => {
    I === eu.ApplicationDirectoryProfileSections.GENERAL && eG()
  }, [eG, I]), l.useEffect(() => {
    null != _ && V.i6(_)
  }, [_]), l.useEffect(() => {
    if ((null == eM ? void 0 : eM.directory_entry) != null) {
      let e = eM.directory_entry,
        n = null == e ? void 0 : e.popular_application_commands;
      null != n ? eL(n.map(e => (0, x.Z8)({
        rootCommand: e,
        command: e,
        applicationId: e.application_id
      }))) : eL(void 0)
    }
  }, [eM]);
  let eB = B.ZP.getApplicationIconURL({
      id: null !== (r = null == eM ? void 0 : eM.id) && void 0 !== r ? r : "-1",
      icon: null == eM ? void 0 : eM.icon,
      size: ev
    }),
    eY = (0, L.Z)({
      id: null !== (c = null == eM ? void 0 : eM.id) && void 0 !== c ? c : "",
      label: em.Z.Messages.COPY_ID_APPLICATION
    }),
    {
      canInstall: ew,
      install: eH
    } = (0, Q.P)(eM, h),
    eV = null === (n = (0, ei.getPreviousView)()) || void 0 === n ? void 0 : n.type;
  l.useEffect(() => {
    (null == eM ? void 0 : eM.id) != null && G.default.track(ep.rMx.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: "product",
      previous_page: eV,
      application_id: eM.id,
      guild_id: h,
      shown_mutual_guilds_count: eb.length,
      profile_section: I,
      referrer: document.referrer
    })
  }, [null == eM ? void 0 : eM.id, h, eb]);
  let eW = l.useMemo(() => {
      var e;
      let n = null == eM ? void 0 : null === (e = eM.install_params) || void 0 === e ? void 0 : e.permissions;
      if (null != n) return j.VY.filter(e => p.e$(p.vB(n), e))
    }, [null == eM ? void 0 : null === (a = eM.install_params) || void 0 === a ? void 0 : a.permissions]),
    eK = l.useCallback(e => {
      ej(e), (null == eM ? void 0 : eM.id) != null && G.default.track(ep.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
        application_id: eM.id,
        guild_id: h,
        tab_name: e
      })
    }, [null == eM ? void 0 : eM.id, h, ej]),
    ez = l.useMemo(() => {
      var e, n, i;
      return null !== (i = (null !== (n = null == eM ? void 0 : null === (e = eM.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== n ? n : []).map(ex).filter(w.lm)) && void 0 !== i ? i : []
    }, [eM]),
    eq = l.useCallback((e, n) => {
      if (e.type === ep.s9s.IMG) {
        let n = ez.filter(e => e.type === ep.s9s.IMG),
          l = n.findIndex(n => n === e);
        if (l < 0) return;
        let a = n.map(e => ({
          src: (0, v.Q)(e.src),
          width: e.width,
          height: e.height
        }));
        (0, g.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([i.e("99387"), i.e("41814")]).then(i.bind(i, 895023));
          return n => {
            let {
              ...i
            } = n;
            return (0, t.jsx)(e, {
              ...i,
              items: a,
              startingIndex: l,
              modalCarouselItemClassName: eI.appSlide
            })
          }
        })
      }
    }, [ez]),
    eQ = l.useCallback(e => {
      (null == eM ? void 0 : eM.id) != null && G.default.track(ep.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
        current_page: "product",
        category: e.name,
        category_id: e.id,
        application_id: eM.id,
        guild_id: h
      }), (0, et.goToCategory)({
        categoryId: e.id
      })
    }, [eM, h]);
  l.useEffect(() => {
    if (null != _) V.T4({
      applicationId: _,
      guildId: h
    })
  }, [_, h]);
  let eJ = l.useCallback(e => {
      let {
        application: n,
        mutualGuilds: i
      } = e;
      (null == eM ? void 0 : eM.id) != null && G.default.track(ep.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
        current_page: "product",
        application_id: eM.id,
        suggested_application_id: n.id,
        load_id: eC,
        guild_id: h,
        shown_mutual_guilds_count: i.length
      }), (0, et.goToApplication)({
        applicationId: n.id
      })
    }, [null == eM ? void 0 : eM.id, eC, h]),
    eX = l.useCallback(() => {
      null != eM && (0, C.Z)(function(e, n) {
        let i = "https://".concat(ep.xr4, "/hc/").concat(e.toLowerCase(), "/requests/new"),
          t = new URLSearchParams;
        return t.append("tf_12275088515223", "field_value_dc_category_report_an_app_bot"), t.append("tf_12276208289431", "field_value_dc_reported_action_app_directory"), t.append("tf_12094971213335", n.id), t.append("ticket_form_id", "12275528604823"), t.append("tf_subject", "App Directory Report ".concat(n.name, " ").concat(n.id)), "".concat(i, "?").concat(t.toString())
      }(eD, eM))
    }, [eD, eM]),
    e$ = l.useCallback(e => (0, t.jsxs)(g.Menu, {
      navId: "application-directory-profile",
      "aria-label": em.Z.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
      onClose: e,
      onSelect: void 0,
      children: [(0, t.jsx)(g.MenuGroup, {
        children: (0, t.jsx)(g.MenuItem, {
          id: "report",
          label: em.Z.Messages.REPORT_APP,
          color: "danger",
          action: eX
        })
      }), null != eY ? (0, t.jsx)(g.MenuGroup, {
        children: eY
      }) : null]
    }), [eY, eX]),
    [e0, e4] = (0, P.Z)(!1, 1e3),
    e1 = l.useCallback(() => {
      if (null != eM) G.default.track(ep.rMx.APP_SHARE_BUTTON_CLICKED, {
        source: "product_page",
        application_id: eM.id,
        guild_id: h
      }), (0, Y.JG)(eP(eM.id)), e4(!0)
    }, [eM, e4, h]);
  l.useEffect(() => {
    let e = new URL(location.href);
    if (R && "true" === e.searchParams.get(eR)) {
      e.searchParams.delete(eR);
      let n = e.pathname + e.search;
      (0, y.dL)(n), eH("product_page")
    }
  }, [R, eH]);
  let e7 = l.useCallback(() => {
      null != eM && (R ? eH("product_page") : (G.default.track(ep.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
        application_id: _,
        guild_id: h,
        auth_type: null != eM.custom_install_url ? "custom_url" : "in_app",
        source: "product_page",
        device_platform: u.tq ? "mobile_web" : "desktop_web"
      }), (0, J.rf)({
        [eR]: "true"
      })))
    }, [eM, R, eH, _, h]),
    {
      applicationSubscriptionListingsShown: e5
    } = (0, Z.ZP)({
      applicationId: null == eM ? void 0 : eM.id,
      groupListingId: null == eM ? void 0 : eM.primary_sku_id,
      guildId: h
    }),
    e6 = (null == eM ? void 0 : eM.id) === e_.g,
    [e9, e2] = l.useState(!1),
    [e3, e8] = l.useState(!1),
    [ne, nn] = l.useState(!0),
    ni = e => {
      null != e && e2(e.scrollHeight > e.clientHeight)
    },
    nt = null != eW && eW.length > 0,
    nl = (null == eM ? void 0 : eM.flags) != null,
    na = (0, N.R)(null != _ ? _ : "");
  l.useEffect(() => {
    na && null != _ && (0, f.Z)(_)
  }, [na, _]);
  let ns = l.useMemo(() => {
      let e = [],
        n = !0;
      switch (I) {
        case eu.ApplicationDirectoryProfileSections.GENERAL: {
          var i, l;
          let a = null == eM ? void 0 : null === (i = eM.directory_entry) || void 0 === i ? void 0 : i.detailed_description;
          null != a && a.length > 0 ? (e.push((0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(g.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: em.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, t.jsx)("div", {
              ref: ni,
              className: s()({
                [eI.descriptionClamp]: !e3,
                [eI.descriptionClampSafari]: !e3 && "Safari" === o().name
              }),
              children: (0, t.jsx)(U.Z, {
                className: eI.detailedDescription,
                parser: eg,
                output: eE,
                state: {
                  allowLinks: !0
                },
                children: a
              })
            }), (e9 || e3) && (0, t.jsx)(eN, {
              isViewAll: e3,
              onToggle: () => {
                e8(e => !e)
              }
            })]
          })), n = !1) : (null == eM ? void 0 : null === (l = eM.directory_entry) || void 0 === l ? void 0 : l.short_description) !== void 0 ? e.push((0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(g.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: em.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, t.jsx)("span", {
              children: eM.directory_entry.short_description
            })]
          })) : (null == eM ? void 0 : eM.description) != null && e.push((0, t.jsx)(M.Z, {
            className: eI.description,
            userBio: eM.description
          })), null != eO && eO.length > 0 && (e.push((0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(g.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: em.Z.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
            }), (0, t.jsx)(es.Z, {
              className: eI.commandList,
              commands: eO
            })]
          })), n = !0);
          break
        }
        case eu.ApplicationDirectoryProfileSections.IMAGES: {
          if (0 === ez.length) break;
          let n = (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("img", {
              className: eI.errorImage,
              src: eh,
              "aria-hidden": !0,
              alt: ""
            }), (0, t.jsx)(g.Heading, {
              variant: "heading-xl/semibold",
              children: em.Z.Messages.ERRORS_IMAGE_NOT_FOUND
            })]
          });
          ez.forEach((e, n) => {
            null != eM ? e.alt = em.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
              index: n + 1,
              totalImages: ez.length,
              name: eM.name
            }) : e.alt = em.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT
          }), e.push((0, t.jsx)(A.Z, {
            className: eI.carousel,
            themedPagination: !0,
            items: ez,
            autoplayInterval: 8e3,
            paused: !eZ,
            videoAutoPlay: !0,
            onCurrentItemClick: eq,
            errorComponent: n,
            onImageLoad: e => {
              let {
                src: n,
                loadTimeMs: i
              } = e;
              null != i && null != eM && G.default.track(ep.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                application_id: eM.id,
                load_time_ms: i,
                src: n
              })
            }
          }));
          break
        }
        case eu.ApplicationDirectoryProfileSections.STORE:
          na && null != _ && e.push((0, t.jsx)(ea.U, {
            appId: _,
            guildId: null != h ? h : void 0
          }));
          break;
        case eu.ApplicationDirectoryProfileSections.PREMIUM:
          e5 && (null == eM ? void 0 : eM.primary_sku_id) != null && e.push((0, t.jsx)(D.Z, {
            applicationId: eM.id,
            applicationPrimarySkuId: null == eM ? void 0 : eM.primary_sku_id,
            analyticsLocation: ep.Sbl.APP_DIRECTORY_PROFILE,
            forcesTransitionToGuild: !0
          }));
          break;
        case eu.ApplicationDirectoryProfileSections.PRIVACY:
          nt && e.push((0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(g.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: em.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
            }), (0, t.jsx)(E.Z, {
              className: eI.commandList,
              grantedPermissions: eW,
              grantedPermissionsHeader: em.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
            })]
          })), nl && e.push((0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(g.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: em.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
            }), (0, t.jsx)(er.Z, {
              application: eM
            })]
          }))
      }
      return nn(n), 0 === e.length && I !== eu.ApplicationDirectoryProfileSections.GENERAL && null != eM && eG(), e.map((e, n) => (0, t.jsx)("div", {
        className: eI.section,
        children: e
      }, n))
    }, [I, eG, eM, eO, e3, e9, ez, eZ, eq, na, _, h, e5, nt, nl, eW]),
    nr = l.useMemo(() => {
      let e = [{
        name: eu.ApplicationDirectoryProfileSections.GENERAL,
        text: em.Z.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL,
        Icon: g.AppsIcon
      }];
      return ez.length > 0 && e.push({
        name: eu.ApplicationDirectoryProfileSections.IMAGES,
        text: em.Z.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES,
        Icon: g.ImagesIcon
      }), na && e.push({
        name: eu.ApplicationDirectoryProfileSections.STORE,
        text: em.Z.Messages.APP_DIRECTORY_PROFILE_TAB_STORE,
        Icon: g.ShopSparkleIcon
      }), e5 && !na && e.push({
        name: eu.ApplicationDirectoryProfileSections.PREMIUM,
        text: em.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PREMIUM,
        Icon: g.ShopSparkleIcon
      }), (nt || nl) && e.push({
        name: eu.ApplicationDirectoryProfileSections.PRIVACY,
        text: em.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY,
        Icon: g.PrivacyAndSafetyIcon
      }), e
    }, [ez.length, e5, nt, nl, na]);
  return d = null == eM ? null == ef || ef === W.M.FETCHING ? (0, t.jsx)(ee.Z, {
    loading: ef === W.M.FETCHING
  }) : (0, t.jsx)("div", {
    className: eI.__invalid_page,
    children: (0, t.jsxs)("div", {
      className: eI.emptyContainer,
      children: [(0, t.jsx)("img", {
        className: eI.emptyImage,
        src: eh,
        alt: ""
      }), (0, t.jsx)(g.Heading, {
        variant: "heading-xl/semibold",
        children: em.Z.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
      })]
    })
  }) : (0, t.jsxs)(ee.Z, {
    loading: ef === W.M.FETCHING,
    children: [(0, t.jsx)(eS, {
      app: eM,
      iconSrc: eB
    }), (0, t.jsxs)("div", {
      className: eI.__invalid_page,
      children: [(0, t.jsxs)("div", {
        className: eI.header,
        children: [(0, t.jsxs)("div", {
          className: eI.headerSidebar,
          children: [(0, t.jsx)("img", {
            className: eI.headerIcon,
            alt: "",
            "aria-hidden": !0,
            src: eB,
            width: ev,
            height: ev
          }), (0, t.jsx)($.Z, {
            application: eM,
            mutualGuilds: eb,
            mutualGuildShownMax: 3,
            compact: !0
          })]
        }), (0, t.jsxs)("div", {
          className: eI.headerContent,
          children: [(0, t.jsxs)("div", {
            className: eI.headerNameAndButtons,
            children: [(0, t.jsxs)("div", {
              className: eI.headerNameAndIcon,
              children: [(0, t.jsx)(g.Heading, {
                className: eI.name,
                variant: "heading-xxl/semibold",
                children: eM.name
              }), e5 && (0, t.jsx)(g.Tooltip, {
                tooltipClassName: eI.premiumIconTooltip,
                text: em.Z.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                children: e => (0, t.jsx)("img", {
                  ...e,
                  alt: em.Z.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                  className: eI.premiumIcon,
                  src: i(744050)
                })
              }), e6 && (0, t.jsx)(en.Z, {
                className: eI.partnerBadge
              })]
            }), (0, t.jsxs)("div", {
              className: eI.buttons,
              children: [(0, t.jsx)(g.Button, {
                onClick: e1,
                color: g.Button.Colors.PRIMARY,
                children: e0 ? em.Z.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : em.Z.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
              }), (0, t.jsx)(g.Button, {
                color: g.Button.Colors.BRAND,
                onClick: e7,
                disabled: !ew,
                children: em.Z.Messages.APPLICATION_ADD_BUTTON
              }), (0, t.jsx)(g.Popout, {
                renderPopout: e => {
                  let {
                    closePopout: n
                  } = e;
                  return e$(n)
                },
                position: "left",
                align: "top",
                animation: g.Popout.Animation.NONE,
                children: e => (0, t.jsx)(g.Clickable, {
                  className: eI.overflow,
                  ...e,
                  children: (0, t.jsx)(g.MoreHorizontalIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 20,
                    height: 20,
                    className: eI.iconInteractive
                  })
                })
              })]
            })]
          }), (0, t.jsx)(ed.Z, {
            activeSection: I,
            setSection: eK,
            sections: nr
          })]
        })]
      }), (0, t.jsxs)("div", {
        className: eI.contentContainer,
        children: [(0, t.jsxs)("div", {
          className: eI.content,
          children: [ns, null != eT && eT.length > 0 ? (0, t.jsxs)(t.Fragment, {
            children: [ne && (0, t.jsx)("div", {
              className: eI.separator
            }), (0, t.jsxs)("div", {
              className: eI.section,
              children: [(0, t.jsx)(g.Heading, {
                className: eI.relatedHeader,
                variant: "eyebrow",
                children: em.Z.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
              }), (0, t.jsx)(ee.Z, {
                loading: T,
                children: (0, t.jsx)(X.Z, {
                  applications: eT,
                  onViewOne: eJ
                })
              })]
            })]
          }) : null]
        }), (0, t.jsx)(ec.Z, {
          className: eI.sidebar,
          application: eM,
          guildId: h,
          onViewCategory: eQ,
          onClickGuildWidget: eU
        })]
      })]
    })]
  }), (0, t.jsx)(q.Z, {
    children: d
  })
}

function ex(e) {
  switch (e.type) {
    case R.ee.MEDIA_PROXY:
      var n;
      let i = null !== (n = e.proxy_url) && void 0 !== n ? n : e.url;
      return {
        type: ep.s9s.IMG, width: 0, height: 0, src: i
      };
    case R.ee.YOUTUBE:
      let t = eC(e.url);
      if (null != t) return {
        type: ep.s9s.YOUTUBE_VIDEO,
        youtubeVideoId: t
      }
  }
  return console.warn("Unsupported carousel item", e), null
}
let eN = e => {
    let n, {
      onToggle: i,
      isViewAll: l
    } = e;
    return n = l ? (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(g.Text, {
        className: eI.showMoreButtonText,
        variant: "eyebrow",
        children: em.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
      }), (0, t.jsx)(g.ChevronSmallUpIcon, {
        size: "md",
        color: "currentColor",
        className: eI.showMoreButtonIcon
      })]
    }) : (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(g.Text, {
        className: eI.showMoreButtonText,
        variant: "eyebrow",
        children: em.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
      }), (0, t.jsx)(g.ChevronSmallDownIcon, {
        size: "md",
        color: "currentColor",
        className: eI.showMoreButtonIcon
      })]
    }), (0, t.jsx)(ef, {
      children: (0, t.jsx)(g.Button, {
        look: g.Button.Looks.BLANK,
        color: g.Button.Colors.TRANSPARENT,
        size: g.Button.Sizes.NONE,
        className: eI.showMoreButton,
        innerClassName: eI.showMoreButtonInner,
        onClick: i,
        children: n
      })
    })
  },
  ef = e => {
    let {
      className: n,
      contentClassName: i,
      children: l
    } = e;
    return (0, t.jsxs)("div", {
      className: s()([eI.dividerContainer, n]),
      children: [(0, t.jsx)("div", {
        className: eI.divider
      }), null != l ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)("div", {
          className: s()(eI.contentDivider, i),
          children: l
        }), (0, t.jsx)("div", {
          className: eI.divider
        })]
      }) : null]
    })
  };

function eS(e) {
  let {
    app: n,
    iconSrc: i
  } = e, a = (0, S.ZP)(i, I.Z.unsafe_rawColors.PRIMARY_800.css), {
    bot: s
  } = n, r = (0, m.e7)([T.Z], () => T.Z.useReducedMotion), o = l.useMemo(() => {
    let e = {
      backgroundColor: a
    };
    if (null != s) {
      let n = (0, B.aN)({
        id: s.id,
        banner: s.banner,
        size: 1024,
        canAnimate: !1
      });
      if (null != n && (e["--custom-background-static"] = "url(".concat(n), e.height = "212px"), !r) {
        let n = (0, B.aN)({
          id: s.id,
          banner: s.banner,
          size: 1024,
          canAnimate: !0
        });
        null != n && (e["--custom-background-animated"] = "url(".concat(n))
      }
    }
    return e
  }, [a, s, r]);
  return (0, t.jsx)("div", {
    style: o,
    className: eI.headerBanner
  })
}