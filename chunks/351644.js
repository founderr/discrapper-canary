"use strict";
l.r(t), l.d(t, {
  default: function() {
    return U
  }
}), l("653041"), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("120356"),
  i = l.n(s),
  r = l("658722"),
  o = l.n(r),
  d = l("442837"),
  u = l("780384"),
  c = l("481060"),
  f = l("37234"),
  I = l("410030"),
  m = l("726542"),
  T = l("132871"),
  E = l("147890"),
  N = l("231757"),
  _ = l("553795"),
  S = l("496675"),
  h = l("285952"),
  g = l("497309"),
  p = l("759222"),
  O = l("202597"),
  A = l("626135"),
  C = l("768581"),
  x = l("63063"),
  R = l("709054"),
  M = l("51144"),
  L = l("585835"),
  v = l("997787"),
  j = l("981631"),
  P = l("689938"),
  b = l("353117"),
  D = l("509399"),
  y = l("790904"),
  G = l("609182");

function B(e, t) {
  return t.includes(e)
}

function k(e) {
  let {
    query: t,
    setQuery: l
  } = e, s = a.useCallback(e => {
    l(e)
  }, [l]);
  return (0, n.jsx)("div", {
    className: b.searchContainer,
    children: (0, n.jsx)(c.SearchBar, {
      size: c.SearchBar.Sizes.MEDIUM,
      query: t,
      onChange: s,
      onClear: () => l(""),
      placeholder: P.default.Messages.INTEGRATIONS_SEARCH,
      "aria-label": P.default.Messages.INTEGRATIONS_SEARCH
    })
  })
}

function U(e) {
  let {
    guild: t,
    channel: l,
    applicationIntegrations: s,
    builtInIntegrations: r,
    customWebhooks: U,
    followedChannelWebhooks: H,
    isLoading: F,
    canCreateWebhook: w,
    onManageBuiltIn: W,
    onManageCustomWebhooks: V,
    onManageFollowedChannels: K,
    onManageApplication: Y
  } = e, z = (0, I.default)(), [Z, q] = a.useState(""), {
    isFetchingConnections: X,
    accounts: J
  } = (0, d.useStateFromStoresObject)([_.default], () => ({
    isFetchingConnections: _.default.isFetching(),
    accounts: _.default.getAccounts()
  }), []), {
    canManageWebhooks: Q,
    canManageGuild: $
  } = (0, d.useStateFromStoresObject)([S.default], () => ({
    canManageWebhooks: null != t && S.default.can(j.Permissions.MANAGE_WEBHOOKS, t) || null != l && S.default.can(j.Permissions.MANAGE_WEBHOOKS, l),
    canManageGuild: null != t && null == l && S.default.can(j.Permissions.MANAGE_GUILD, t)
  }), [t, l]), {
    availableTwitchIntegrations: ee,
    availableYoutubeIntegrations: et,
    guildTwitchIntegrations: el,
    guildYoutubeIntegrations: en
  } = a.useMemo(() => {
    var e, t, l, n, a, s, i, o;
    return {
      availableTwitchIntegrations: null !== (a = null === (e = r.twitch) || void 0 === e ? void 0 : e.length) && void 0 !== a ? a : 0,
      availableYoutubeIntegrations: null !== (s = null === (t = r.youtube) || void 0 === t ? void 0 : t.length) && void 0 !== s ? s : 0,
      guildTwitchIntegrations: null !== (i = null === (l = r.twitch) || void 0 === l ? void 0 : l.filter(e => e.enabled).length) && void 0 !== i ? i : 0,
      guildYoutubeIntegrations: null !== (o = null === (n = r.youtube) || void 0 === n ? void 0 : n.filter(e => e.enabled).length) && void 0 !== o ? o : 0
    }
  }, [r.twitch, r.youtube]), {
    showTwitchCard: ea,
    showYoutubeCard: es
  } = a.useMemo(() => {
    if (X || !$) return {
      showTwitchCard: !1,
      showYoutubeCard: !1
    };
    let e = null == t ? void 0 : t.hasFeature(j.GuildFeatures.COMMUNITY),
      l = J.filter(e => e.type === j.PlatformTypes.TWITCH).length > 0,
      n = J.filter(e => e.type === j.PlatformTypes.YOUTUBE).length > 0;
    return {
      showTwitchCard: ee > 0 || !l && e,
      showYoutubeCard: et > 0 || !n && e
    }
  }, [X, $, t, J, ee, et]), ei = Object.values(s).length, er = a.useMemo(() => {
    let e = ei > 100 ? B : o();
    return Object.values(s).filter(t => {
      var l, n, a;
      let {
        application: s
      } = t;
      return l = s, n = Z, a = e, !!("" === (n = n.trim().toLowerCase()) || l.id === n || a(n, l.name.toLowerCase()) || null != l.bot && a(n, l.bot.username.toLowerCase())) || !1
    })
  }, [s, ei, Z]), eo = (0, d.useStateFromStores)([v.default], () => {
    if (null != t) return er.find(e => v.default.canShowOverviewTooltip(t.id, e.integration.id))
  }, [er, t]), ed = a.useMemo(() => void 0 !== eo ? [eo, ...er.filter(e => e.integration.id !== eo.integration.id)] : er, [er, eo]), eu = (0, c.useModalsStore)(c.hasAnyModalOpenSelector), [ec, ef] = a.useState(!1), eI = a.useRef(0), em = () => {
    ef(!0), clearTimeout(eI.current), eI.current = setTimeout(() => {
      ef(!1)
    }, 200)
  };
  a.useEffect(() => (window.addEventListener("scroll", em, !0), () => window.removeEventListener("scroll", em)));
  let eT = ed.map(e => {
      let l = !eu && e.integration.id === (null == eo ? void 0 : eo.integration.id);
      return function(e, t, l, a, s) {
        var i;
        let {
          application: r,
          integration: o
        } = t, d = [];
        return null != o.user ? d.push({
          icon: g.default,
          text: P.default.Messages.INTEGRATION_ADDED_USER_DATE.format({
            timestamp: R.default.extractTimestamp(o.id),
            user: M.default.getUserTag(o.user)
          })
        }) : d.push({
          icon: g.default,
          text: P.default.Messages.INTEGRATION_ADDED_DATE.format({
            timestamp: R.default.extractTimestamp(o.id)
          })
        }), (0, n.jsx)(L.default, {
          name: r.name,
          imageSrc: null !== (i = r.getIconURL(48)) && void 0 !== i ? i : C.DEFAULT_AVATARS["0"],
          integration: t,
          buttonText: P.default.Messages.INTEGRATIONS_APPLICATION_BUTTON,
          hasNextSection: !0,
          onButtonClick: () => {
            l(r.id), A.default.track(j.AnalyticEvents.APP_MANAGE_CTA_CLICKED, {
              application_id: r.id,
              guild_id: null == e ? void 0 : e.id,
              is_admin: null != e ? S.default.can(j.Permissions.ADMINISTRATOR, e) : void 0
            })
          },
          details: d,
          guildId: null == e ? void 0 : e.id,
          isScrolling: a,
          canShowMigrationTooltip: s
        }, "integration-".concat(o.id))
      }(t, e, Y, ec, l)
    }),
    eE = (0, n.jsx)("div", {
      className: b.footerImage
    });
  0 === eT.length && $ && (eT = function(e, t, l) {
    let a = (0, u.isThemeDark)(e) ? y : G,
      s = (0, n.jsxs)(h.default, {
        direction: h.default.Direction.VERTICAL,
        align: h.default.Align.CENTER,
        className: b.emptyStateWrapper,
        children: [(0, n.jsx)("img", {
          alt: "",
          src: a,
          className: b.emptyStateSearchImage
        }), (0, n.jsx)(c.Card, {
          editable: !0,
          className: b.emptyStateCard,
          children: (0, n.jsx)(c.Text, {
            color: "text-muted",
            variant: "text-sm/normal",
            children: P.default.Messages.INTEGRATIONS_SEARCH_NO_MATCH
          })
        })]
      }),
      i = (0, n.jsx)(c.Card, {
        editable: !0,
        className: b.emptyStateCard,
        children: (0, n.jsxs)("div", {
          className: b.emptyStateText,
          children: [(0, n.jsx)("img", {
            alt: "",
            src: D,
            className: b.emptyStateImage
          }), (0, n.jsx)(c.Heading, {
            color: "header-secondary",
            variant: "heading-xl/bold",
            children: P.default.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS
          }), (0, n.jsx)(c.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: P.default.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS_APP_DIRECTORY_CTA.format({
              handleGoToAppDirectory: () => {
                (0, E.goToAppDirectory)({
                  guildId: l,
                  entrypoint: {
                    name: T.ApplicationDirectoryEntrypointNames.GUILD_INTEGRATION_SETTINGS
                  }
                }), (0, f.popLayer)()
              }
            })
          })]
        })
      });
    return t > 0 ? s : i
  }(z, ei, null == t ? void 0 : t.id), eE = null);
  let eN = x.default.getArticleURL(j.HelpdeskArticles.INTEGRATIONS),
    e_ = null != l ? P.default.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_CHANNEL : P.default.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_GUILD,
    eS = [];
  if (Q) {
    var eh, eg, ep, eO, eA;
    let e;
    if (eS.push((eh = U.length, eg = w, ep = V, e = eh > 0 ? P.default.Messages.INTEGRATIONS_WEBHOOKS_BUTTON : P.default.Messages.INTEGRATIONS_WEBHOOKS_EMPTY_BUTTON, (0, n.jsx)(L.default, {
        name: P.default.Messages.INTEGRATIONS_WEBHOOKS,
        icon: O.default,
        buttonText: e,
        buttonDisabled: !eg,
        onButtonClick: ep,
        hasNextSection: eh > 0,
        details: [{
          text: P.default.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format({
            count: eh
          })
        }]
      }, "webhooks"))), (null == l ? void 0 : l.type) !== j.ChannelTypes.GUILD_VOICE && ((null == l ? void 0 : l.type) == null || !j.ChannelTypesSets.GUILD_THREADS_ONLY.has(l.type))) {
      ;
      let e, t;
      eS.push((eO = H.length, eA = K, eO > 0 ? (e = P.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_BUTTON, t = eA) : (e = P.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY_BUTTON, t = () => open(x.default.getArticleURL(j.HelpdeskArticles.CHANNEL_FOLLOWING))), (0, n.jsx)(L.default, {
        name: P.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING,
        icon: p.default,
        buttonText: e,
        onButtonClick: t,
        hasNextSection: eO > 0,
        details: [{
          text: P.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_SUMMARY.format({
            count: eO
          })
        }]
      }, "channels-followed")))
    }
  }
  return ea && eS.push(function(e, t, l) {
    let a, s, i;
    let r = m.default.get(j.PlatformTypes.TWITCH);
    return e > 0 ? (a = P.default.Messages.INTEGRATIONS_TWITCH_BUTTON, s = P.default.Messages.INTEGRATIONS_TWITCH_SUMMARY.format({
      count: t
    }), i = () => l(j.PlatformTypes.TWITCH)) : (a = P.default.Messages.INTEGRATIONS_TWITCH_EMPTY_BUTTON, s = P.default.Messages.INTEGRATIONS_TWITCH_EMPTY_SUMMARY, i = () => (0, N.default)({
      platformType: j.PlatformTypes.TWITCH,
      location: "Integration Settings"
    })), (0, n.jsx)(L.default, {
      name: P.default.Messages.INTEGRATIONS_TWITCH,
      icon: r.icon.whiteSVG,
      iconBackgroundColor: r.color,
      iconClassName: b.platformIcon,
      buttonText: a,
      onButtonClick: i,
      hasNextSection: e > 0,
      details: [{
        text: s
      }]
    }, "integrations-twitch")
  }(ee, el, W)), es && eS.push(function(e, t, l) {
    let a, s, i;
    let r = m.default.get(j.PlatformTypes.YOUTUBE);
    return e > 0 ? (a = P.default.Messages.INTEGRATIONS_YOUTUBE_BUTTON, s = P.default.Messages.INTEGRATIONS_YOUTUBE_SUMMARY.format({
      count: t
    }), i = () => l(j.PlatformTypes.YOUTUBE)) : (a = P.default.Messages.INTEGRATIONS_YOUTUBE_EMPTY_BUTTON, s = P.default.Messages.INTEGRATIONS_YOUTUBE_EMPTY_SUMMARY, i = () => (0, N.default)({
      platformType: j.PlatformTypes.YOUTUBE,
      location: "Integration Settings"
    })), (0, n.jsx)(L.default, {
      name: P.default.Messages.INTEGRATIONS_YOUTUBE,
      icon: r.icon.whiteSVG,
      iconBackgroundColor: r.color,
      iconClassName: b.platformIcon,
      buttonText: a,
      onButtonClick: i,
      hasNextSection: e > 0,
      details: [{
        text: s
      }]
    }, "integrations-youtube")
  }(et, en, W)), (0, n.jsxs)(c.FormSection, {
    className: i()(null != eE ? b.footerPlaceholder : null),
    children: [(0, n.jsx)(c.FormText, {
      type: c.FormTextTypes.DESCRIPTION,
      children: e_.format({
        helpdeskArticle: eN
      })
    }), (0, n.jsx)(c.FormDivider, {
      className: b.divider
    }), F || X || null == t ? (0, n.jsx)(c.Spinner, {
      className: b.__invalid_spinner,
      type: c.Spinner.Type.SPINNING_CIRCLE
    }) : (0, n.jsxs)(n.Fragment, {
      children: [eS, $ ? (0, n.jsxs)(n.Fragment, {
        children: [eS.length > 0 ? (0, n.jsx)(c.FormDivider, {
          className: b.divider
        }) : null, (0, n.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          className: b.sectionHeader,
          children: P.default.Messages.INTEGRATIONS_APPLICATION_SECTION
        }), ei > 4 ? (0, n.jsx)(k, {
          query: Z,
          setQuery: q
        }) : null, eT]
      }) : null, eE]
    })]
  })
}