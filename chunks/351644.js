t.d(n, {
  Z: function() {
    return B
  }
}), t(653041), t(47120);
var i = t(735250),
  s = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(658722),
  o = t.n(r),
  c = t(442837),
  d = t(780384),
  u = t(481060),
  I = t(37234),
  N = t(410030),
  E = t(726542),
  T = t(132871),
  m = t(147890),
  _ = t(231757),
  h = t(553795),
  O = t(496675),
  g = t(285952),
  A = t(626135),
  C = t(768581),
  S = t(63063),
  x = t(709054),
  p = t(51144),
  R = t(585835),
  Z = t(997787),
  f = t(981631),
  M = t(689938),
  L = t(753927),
  v = t(509399),
  j = t(790904),
  b = t(609182);

function D(e, n) {
  return n.includes(e)
}

function P(e) {
  let {
    query: n,
    setQuery: t
  } = e, l = s.useCallback(e => {
    t(e)
  }, [t]);
  return (0, i.jsx)("div", {
    className: L.searchContainer,
    children: (0, i.jsx)(u.SearchBar, {
      size: u.SearchBar.Sizes.MEDIUM,
      query: n,
      onChange: l,
      onClear: () => t(""),
      placeholder: M.Z.Messages.INTEGRATIONS_SEARCH,
      "aria-label": M.Z.Messages.INTEGRATIONS_SEARCH
    })
  })
}

function B(e) {
  let {
    guild: n,
    channel: t,
    applicationIntegrations: l,
    builtInIntegrations: r,
    customWebhooks: B,
    followedChannelWebhooks: G,
    isLoading: y,
    canCreateWebhook: k,
    onManageBuiltIn: U,
    onManageCustomWebhooks: H,
    onManageFollowedChannels: W,
    onManageApplication: w
  } = e, F = (0, N.ZP)(), [V, K] = s.useState(""), {
    isFetchingConnections: Y,
    accounts: z
  } = (0, c.cj)([h.Z], () => ({
    isFetchingConnections: h.Z.isFetching(),
    accounts: h.Z.getAccounts()
  }), []), {
    canManageWebhooks: q,
    canManageGuild: J
  } = (0, c.cj)([O.Z], () => ({
    canManageWebhooks: null != n && O.Z.can(f.Plq.MANAGE_WEBHOOKS, n) || null != t && O.Z.can(f.Plq.MANAGE_WEBHOOKS, t),
    canManageGuild: null != n && null == t && O.Z.can(f.Plq.MANAGE_GUILD, n)
  }), [n, t]), {
    availableTwitchIntegrations: X,
    availableYoutubeIntegrations: Q,
    guildTwitchIntegrations: $,
    guildYoutubeIntegrations: ee
  } = s.useMemo(() => {
    var e, n, t, i, s, l, a, o;
    return {
      availableTwitchIntegrations: null !== (s = null === (e = r.twitch) || void 0 === e ? void 0 : e.length) && void 0 !== s ? s : 0,
      availableYoutubeIntegrations: null !== (l = null === (n = r.youtube) || void 0 === n ? void 0 : n.length) && void 0 !== l ? l : 0,
      guildTwitchIntegrations: null !== (a = null === (t = r.twitch) || void 0 === t ? void 0 : t.filter(e => e.enabled).length) && void 0 !== a ? a : 0,
      guildYoutubeIntegrations: null !== (o = null === (i = r.youtube) || void 0 === i ? void 0 : i.filter(e => e.enabled).length) && void 0 !== o ? o : 0
    }
  }, [r.twitch, r.youtube]), {
    showTwitchCard: en,
    showYoutubeCard: et
  } = s.useMemo(() => {
    if (Y || !J) return {
      showTwitchCard: !1,
      showYoutubeCard: !1
    };
    let e = null == n ? void 0 : n.hasFeature(f.oNc.COMMUNITY),
      t = z.filter(e => e.type === f.ABu.TWITCH).length > 0,
      i = z.filter(e => e.type === f.ABu.YOUTUBE).length > 0;
    return {
      showTwitchCard: X > 0 || !t && e,
      showYoutubeCard: Q > 0 || !i && e
    }
  }, [Y, J, n, z, X, Q]), ei = Object.values(l).length, es = s.useMemo(() => {
    let e = ei > 100 ? D : o();
    return Object.values(l).filter(n => {
      var t, i, s;
      let {
        application: l
      } = n;
      return t = l, i = V, s = e, !!("" === (i = i.trim().toLowerCase()) || t.id === i || s(i, t.name.toLowerCase()) || null != t.bot && s(i, t.bot.username.toLowerCase())) || !1
    })
  }, [l, ei, V]), el = (0, c.e7)([Z.Z], () => {
    if (null != n) return es.find(e => Z.Z.canShowOverviewTooltip(n.id, e.integration.id))
  }, [es, n]), ea = s.useMemo(() => void 0 !== el ? [el, ...es.filter(e => e.integration.id !== el.integration.id)] : es, [es, el]), er = (0, u.useModalsStore)(u.hasAnyModalOpenSelector), [eo, ec] = s.useState(!1), ed = s.useRef(0), eu = () => {
    ec(!0), clearTimeout(ed.current), ed.current = setTimeout(() => {
      ec(!1)
    }, 200)
  };
  s.useEffect(() => (window.addEventListener("scroll", eu, !0), () => window.removeEventListener("scroll", eu)));
  let eI = ea.map(e => {
      let t = !er && e.integration.id === (null == el ? void 0 : el.integration.id);
      return function(e, n, t, s, l) {
        var a;
        let {
          application: r,
          integration: o
        } = n, c = [];
        return null != o.user ? c.push({
          icon: u.ClockIcon,
          text: M.Z.Messages.INTEGRATION_ADDED_USER_DATE.format({
            timestamp: x.default.extractTimestamp(o.id),
            user: p.ZP.getUserTag(o.user)
          })
        }) : c.push({
          icon: u.ClockIcon,
          text: M.Z.Messages.INTEGRATION_ADDED_DATE.format({
            timestamp: x.default.extractTimestamp(o.id)
          })
        }), (0, i.jsx)(R.Z, {
          name: r.name,
          imageSrc: null !== (a = r.getIconURL(48)) && void 0 !== a ? a : C.pK["0"],
          integration: n,
          buttonText: M.Z.Messages.INTEGRATIONS_APPLICATION_BUTTON,
          hasNextSection: !0,
          onButtonClick: () => {
            t(r.id), A.default.track(f.rMx.APP_MANAGE_CTA_CLICKED, {
              application_id: r.id,
              guild_id: null == e ? void 0 : e.id,
              is_admin: null != e ? O.Z.can(f.Plq.ADMINISTRATOR, e) : void 0
            })
          },
          details: c,
          guildId: null == e ? void 0 : e.id,
          isScrolling: s,
          canShowMigrationTooltip: l
        }, "integration-".concat(o.id))
      }(n, e, w, eo, t)
    }),
    eN = (0, i.jsx)("div", {
      className: L.footerImage
    });
  0 === eI.length && J && (eI = function(e, n, t) {
    let s = (0, d.wj)(e) ? j : b,
      l = (0, i.jsxs)(g.Z, {
        direction: g.Z.Direction.VERTICAL,
        align: g.Z.Align.CENTER,
        className: L.emptyStateWrapper,
        children: [(0, i.jsx)("img", {
          alt: "",
          src: s,
          className: L.emptyStateSearchImage
        }), (0, i.jsx)(u.Card, {
          editable: !0,
          className: L.emptyStateCard,
          children: (0, i.jsx)(u.Text, {
            color: "text-muted",
            variant: "text-sm/normal",
            children: M.Z.Messages.INTEGRATIONS_SEARCH_NO_MATCH
          })
        })]
      }),
      a = (0, i.jsx)(u.Card, {
        editable: !0,
        className: L.emptyStateCard,
        children: (0, i.jsxs)("div", {
          className: L.emptyStateText,
          children: [(0, i.jsx)("img", {
            alt: "",
            src: v,
            className: L.emptyStateImage
          }), (0, i.jsx)(u.Heading, {
            color: "header-secondary",
            variant: "heading-xl/bold",
            children: M.Z.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS
          }), (0, i.jsx)(u.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: M.Z.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS_APP_DIRECTORY_CTA.format({
              handleGoToAppDirectory: () => {
                (0, m.goToAppDirectory)({
                  guildId: t,
                  entrypoint: {
                    name: T.ApplicationDirectoryEntrypointNames.GUILD_INTEGRATION_SETTINGS
                  }
                }), (0, I.xf)()
              }
            })
          })]
        })
      });
    return n > 0 ? l : a
  }(F, ei, null == n ? void 0 : n.id), eN = null);
  let eE = S.Z.getArticleURL(f.BhN.INTEGRATIONS),
    eT = null != t ? M.Z.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_CHANNEL : M.Z.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_GUILD,
    em = [];
  if (q) {
    var e_, eh, eO, eg, eA;
    let e;
    if (em.push((e_ = B.length, eh = k, eO = H, e = e_ > 0 ? M.Z.Messages.INTEGRATIONS_WEBHOOKS_BUTTON : M.Z.Messages.INTEGRATIONS_WEBHOOKS_EMPTY_BUTTON, (0, i.jsx)(R.Z, {
        name: M.Z.Messages.INTEGRATIONS_WEBHOOKS,
        icon: u.WebhookIcon,
        buttonText: e,
        buttonDisabled: !eh,
        onButtonClick: eO,
        hasNextSection: e_ > 0,
        details: [{
          text: M.Z.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format({
            count: e_
          })
        }]
      }, "webhooks"))), (null == t ? void 0 : t.type) !== f.d4z.GUILD_VOICE && ((null == t ? void 0 : t.type) == null || !f.TPd.GUILD_THREADS_ONLY.has(t.type))) {
      ;
      let e, n;
      em.push((eg = G.length, eA = W, eg > 0 ? (e = M.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_BUTTON, n = eA) : (e = M.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY_BUTTON, n = () => open(S.Z.getArticleURL(f.BhN.CHANNEL_FOLLOWING))), (0, i.jsx)(R.Z, {
        name: M.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING,
        icon: u.ChannelsFollowedIcon,
        buttonText: e,
        onButtonClick: n,
        hasNextSection: eg > 0,
        details: [{
          text: M.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_SUMMARY.format({
            count: eg
          })
        }]
      }, "channels-followed")))
    }
  }
  return en && em.push(function(e, n, t) {
    let s, l, a;
    let r = E.Z.get(f.ABu.TWITCH);
    return e > 0 ? (s = M.Z.Messages.INTEGRATIONS_TWITCH_BUTTON, l = M.Z.Messages.INTEGRATIONS_TWITCH_SUMMARY.format({
      count: n
    }), a = () => t(f.ABu.TWITCH)) : (s = M.Z.Messages.INTEGRATIONS_TWITCH_EMPTY_BUTTON, l = M.Z.Messages.INTEGRATIONS_TWITCH_EMPTY_SUMMARY, a = () => (0, _.Z)({
      platformType: f.ABu.TWITCH,
      location: "Integration Settings"
    })), (0, i.jsx)(R.Z, {
      name: M.Z.Messages.INTEGRATIONS_TWITCH,
      icon: r.icon.whiteSVG,
      iconBackgroundColor: r.color,
      iconClassName: L.platformIcon,
      buttonText: s,
      onButtonClick: a,
      hasNextSection: e > 0,
      details: [{
        text: l
      }]
    }, "integrations-twitch")
  }(X, $, U)), et && em.push(function(e, n, t) {
    let s, l, a;
    let r = E.Z.get(f.ABu.YOUTUBE);
    return e > 0 ? (s = M.Z.Messages.INTEGRATIONS_YOUTUBE_BUTTON, l = M.Z.Messages.INTEGRATIONS_YOUTUBE_SUMMARY.format({
      count: n
    }), a = () => t(f.ABu.YOUTUBE)) : (s = M.Z.Messages.INTEGRATIONS_YOUTUBE_EMPTY_BUTTON, l = M.Z.Messages.INTEGRATIONS_YOUTUBE_EMPTY_SUMMARY, a = () => (0, _.Z)({
      platformType: f.ABu.YOUTUBE,
      location: "Integration Settings"
    })), (0, i.jsx)(R.Z, {
      name: M.Z.Messages.INTEGRATIONS_YOUTUBE,
      icon: r.icon.whiteSVG,
      iconBackgroundColor: r.color,
      iconClassName: L.platformIcon,
      buttonText: s,
      onButtonClick: a,
      hasNextSection: e > 0,
      details: [{
        text: l
      }]
    }, "integrations-youtube")
  }(Q, ee, U)), (0, i.jsxs)(u.FormSection, {
    className: a()(null != eN ? L.footerPlaceholder : null),
    children: [(0, i.jsx)(u.FormText, {
      type: u.FormTextTypes.DESCRIPTION,
      children: eT.format({
        helpdeskArticle: eE
      })
    }), (0, i.jsx)(u.FormDivider, {
      className: L.divider
    }), y || Y || null == n ? (0, i.jsx)(u.Spinner, {
      className: L.__invalid_spinner,
      type: u.Spinner.Type.SPINNING_CIRCLE
    }) : (0, i.jsxs)(i.Fragment, {
      children: [em, J ? (0, i.jsxs)(i.Fragment, {
        children: [em.length > 0 ? (0, i.jsx)(u.FormDivider, {
          className: L.divider
        }) : null, (0, i.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          className: L.sectionHeader,
          children: M.Z.Messages.INTEGRATIONS_APPLICATION_SECTION
        }), ei > 4 ? (0, i.jsx)(P, {
          query: V,
          setQuery: K
        }) : null, eI]
      }) : null, eN]
    })]
  })
}