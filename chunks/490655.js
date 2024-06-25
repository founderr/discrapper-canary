t(47120), t(653041);
var i = t(735250),
  l = t(470079),
  s = t(392711),
  a = t.n(s),
  r = t(442837),
  o = t(481060),
  c = t(139387),
  d = t(503089),
  u = t(231757),
  I = t(106976),
  N = t(488915),
  E = t(984933),
  T = t(496675),
  m = t(285952),
  _ = t(585483),
  h = t(63063),
  g = t(919196),
  O = t(731072),
  A = t(494118),
  x = t(351644),
  C = t(720764),
  S = t(981631),
  p = t(689938),
  R = t(619381);

function Z(e, n) {
  switch (e) {
    case S.b4C.APPLICATION:
      var t;
      return null !== (t = null == n ? void 0 : n.application.name) && void 0 !== t ? t : "";
    case S.b4C.OVERVIEW:
      return p.Z.Messages.INTEGRATIONS_OVERVIEW;
    case S.b4C.CHANNEL_FOLLOWING:
      return p.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING;
    case S.b4C.TWITCH:
      return p.Z.Messages.INTEGRATIONS_TWITCH;
    case S.b4C.WEBHOOKS:
      return p.Z.Messages.INTEGRATIONS_WEBHOOKS;
    case S.b4C.YOUTUBE:
      return p.Z.Messages.INTEGRATIONS_YOUTUBE;
    default:
      return ""
  }
}
n.Z = l.memo(function(e) {
  let {
    section: n,
    sectionId: t,
    guild: s,
    channel: f,
    integrations: M,
    editedIntegration: L,
    webhooks: v,
    editedWebhook: j,
    isFetching: b,
    refToScroller: P,
    errors: D,
    hasChanges: B
  } = e, G = (0, r.e7)([E.ZP], () => null != s ? E.ZP.getDefaultChannel(s.id) : null), y = (0, r.cj)([E.ZP], () => E.ZP.getChannels(null == s ? void 0 : s.id)), k = (0, r.cj)([T.Z], () => a().keyBy(y.SELECTABLE.map(e => e.channel).filter(e => T.Z.can(S.Plq.MANAGE_WEBHOOKS, e)), "id")), U = (0, r.cj)([T.Z], () => a().keyBy(y.VOCAL.map(e => e.channel).filter(e => e.isGuildVocal() && T.Z.can(S.Plq.MANAGE_WEBHOOKS, e)), "id")), H = null != f ? f : G, W = n === S.b4C.APPLICATION ? t : null, [w, F] = l.useState(d.$x), V = l.useCallback(() => B() ? (_.S.dispatch(S.CkL.SHAKE_APP, {
    duration: 300,
    intensity: w
  }), F(Math.min(w + d.d7, d.w6)), _.S.dispatch(S.CkL.EMPHASIZE_NOTICE), !1) : (F(d.$x), !0), [B, w]), K = l.useCallback(e => !!V() && (c.Z.setSection(e), !0), [V]), {
    applicationIntegrations: Y,
    applicationBotIds: z,
    builtInIntegrations: q,
    customWebhooks: J,
    followedChannelWebhooks: X
  } = l.useMemo(() => {
    let e = {},
      n = {},
      t = {},
      i = [],
      l = [];
    if (null != M)
      for (let i of M)
        if ("discord" === i.type) {
          if (null != i.application) {
            var s;
            e[i.application.id] = {
              application: i.application,
              integration: i,
              webhooks: []
            }, (null === (s = i.application.bot) || void 0 === s ? void 0 : s.id) !== void 0 && (n[i.application.bot.id] = i.application.id)
          }
        } else !(i.type in t) && (t[i.type] = []), t[i.type].push(i);
    for (let n of v) {
      if (n.channel_id in k || n.channel_id in U) null != n.application_id && n.application_id in e ? e[n.application_id].webhooks.push(n) : n.type === S.ylB.CHANNEL_FOLLOWER ? l.push(n) : i.push(n)
    }
    return {
      applicationIntegrations: e,
      applicationBotIds: n,
      builtInIntegrations: t,
      customWebhooks: i,
      followedChannelWebhooks: l
    }
  }, [M, k, U, v]);
  l.useEffect(() => {
    if (!b) switch (n) {
      case S.b4C.TWITCH:
        null == q[S.ABu.TWITCH] && c.Z.setSection(S.b4C.OVERVIEW);
        break;
      case S.b4C.YOUTUBE:
        null == q[S.ABu.YOUTUBE] && c.Z.setSection(S.b4C.OVERVIEW);
        break;
      case S.b4C.APPLICATION:
        (null == W || !(W in z || W in Y)) && c.Z.setSection(S.b4C.OVERVIEW)
    }
  }, [Y, z, q, W, n, b]), l.useEffect(() => {
    if ((null == s ? void 0 : s.id) != null) N.Z.getEntitlementsForGuildFetchState(s.id) === N.M.NOT_FETCHED && I.i1(s.id)
  }, [null == s ? void 0 : s.id]);
  let Q = null;
  switch (n) {
    case S.b4C.TWITCH:
      null != q[S.ABu.TWITCH] && (Q = (0, i.jsx)(O.Z, {
        guild: s,
        integrations: q[S.ABu.TWITCH],
        editedIntegration: L,
        labelText: p.Z.Messages.INTEGRATIONS_TWITCH,
        platformType: S.ABu.TWITCH,
        descriptionText: p.Z.Messages.INTEGRATIONS_TWITCH_DESCRIPTION,
        helpText: p.Z.Messages.INTEGRATIONS_TWITCH_HELP.format({
          connectAction: () => (0, u.Z)({
            platformType: S.ABu.TWITCH,
            location: "Integration Settings"
          }),
          helpdeskArticle: h.Z.getArticleURL(S.BhN.TWITCH_INTEGRATION)
        }),
        canNavigate: V
      }));
      break;
    case S.b4C.YOUTUBE:
      null != q[S.ABu.YOUTUBE] && (Q = (0, i.jsx)(O.Z, {
        guild: s,
        integrations: q[S.ABu.YOUTUBE],
        editedIntegration: L,
        labelText: p.Z.Messages.INTEGRATIONS_YOUTUBE,
        platformType: S.ABu.YOUTUBE,
        descriptionText: p.Z.Messages.INTEGRATIONS_YOUTUBE_DESCRIPTION,
        helpText: p.Z.Messages.INTEGRATIONS_YOUTUBE_HELP.format({
          connectAction: () => (0, u.Z)({
            platformType: S.ABu.YOUTUBE
          }),
          helpdeskArticle: h.Z.getArticleURL(S.BhN.YOUTUBE_INTEGRATION)
        }),
        canNavigate: V
      }));
      break;
    case S.b4C.APPLICATION:
      var $;
      let ee = null != W ? null !== ($ = Y[z[W]]) && void 0 !== $ ? $ : Y[W] : null;
      null != ee && (Q = (0, i.jsx)(g.Z, {
        guild: s,
        applicationIntegration: ee,
        editedWebhook: j,
        selectableWebhookChannels: k,
        errors: D,
        canNavigate: V
      }));
      break;
    case S.b4C.CHANNEL_FOLLOWING:
      Q = (0, i.jsx)(A.Z, {
        followedChannelWebhooks: X,
        editedWebhook: j,
        selectableWebhookChannels: k,
        canNavigate: V,
        errors: D
      });
      break;
    case S.b4C.WEBHOOKS:
      Q = (0, i.jsx)(C.Z, {
        guild: s,
        channel: f,
        customWebhooks: J,
        editedWebhook: j,
        selectableWebhookChannels: {
          ...k,
          ...U
        },
        canNavigate: V,
        refToScroller: P,
        errors: D
      });
      break;
    default:
      Q = (0, i.jsx)(x.Z, {
        guild: s,
        channel: f,
        applicationIntegrations: Y,
        builtInIntegrations: q,
        customWebhooks: J,
        followedChannelWebhooks: X,
        isLoading: b || null == s,
        canCreateWebhook: null != H,
        onManageCustomWebhooks: () => {
          c.Z.setSection(S.b4C.WEBHOOKS)
        },
        onManageFollowedChannels: () => {
          c.Z.setSection(S.b4C.CHANNEL_FOLLOWING)
        },
        onManageApplication: e => {
          c.Z.setSection(S.b4C.APPLICATION, e)
        },
        onManageBuiltIn: e => {
          switch (e) {
            case S.ABu.TWITCH:
              c.Z.setSection(S.b4C.TWITCH);
              break;
            case S.ABu.YOUTUBE:
              c.Z.setSection(S.b4C.YOUTUBE)
          }
        }
      })
  }
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(m.Z, {
      align: m.Z.Align.CENTER,
      className: R.breadcrumbs,
      children: n === S.b4C.OVERVIEW ? (0, i.jsx)(o.FormTitle, {
        tag: "h1",
        children: Z(S.b4C.OVERVIEW)
      }) : (0, i.jsx)(o.Breadcrumbs, {
        activeId: n.toString(),
        breadcrumbs: [S.b4C.OVERVIEW, n].map(e => ({
          id: e.toString(),
          label: Z(e, Y[W])
        })),
        onBreadcrumbClick: e => {
          if (n !== parseInt(e.id)) K(parseInt(e.id))
        },
        renderCustomBreadcrumb: (e, n) => (0, i.jsx)(o.FormTitle, {
          tag: "h1",
          className: n ? R.breadcrumbActive : R.breadcrumbInactive,
          children: e.label
        })
      })
    }), Q]
  })
})