t(47120), t(653041);
var i = t(735250),
  s = t(470079),
  l = t(392711),
  a = t.n(l),
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
  O = t(919196),
  g = t(731072),
  A = t(494118),
  C = t(351644),
  S = t(720764),
  x = t(981631),
  p = t(689938),
  R = t(619381);

function Z(e, n) {
  switch (e) {
    case x.b4C.APPLICATION:
      var t;
      return null !== (t = null == n ? void 0 : n.application.name) && void 0 !== t ? t : "";
    case x.b4C.OVERVIEW:
      return p.Z.Messages.INTEGRATIONS_OVERVIEW;
    case x.b4C.CHANNEL_FOLLOWING:
      return p.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING;
    case x.b4C.TWITCH:
      return p.Z.Messages.INTEGRATIONS_TWITCH;
    case x.b4C.WEBHOOKS:
      return p.Z.Messages.INTEGRATIONS_WEBHOOKS;
    case x.b4C.YOUTUBE:
      return p.Z.Messages.INTEGRATIONS_YOUTUBE;
    default:
      return ""
  }
}
n.Z = s.memo(function(e) {
  let {
    section: n,
    sectionId: t,
    guild: l,
    channel: f,
    integrations: M,
    editedIntegration: L,
    webhooks: v,
    editedWebhook: j,
    isFetching: b,
    refToScroller: D,
    errors: P,
    hasChanges: B
  } = e, G = (0, r.e7)([E.ZP], () => null != l ? E.ZP.getDefaultChannel(l.id) : null), y = (0, r.cj)([E.ZP], () => E.ZP.getChannels(null == l ? void 0 : l.id)), k = (0, r.cj)([T.Z], () => a().keyBy(y.SELECTABLE.map(e => e.channel).filter(e => T.Z.can(x.Plq.MANAGE_WEBHOOKS, e)), "id")), U = (0, r.cj)([T.Z], () => a().keyBy(y.VOCAL.map(e => e.channel).filter(e => e.isGuildVocal() && T.Z.can(x.Plq.MANAGE_WEBHOOKS, e)), "id")), H = null != f ? f : G, W = n === x.b4C.APPLICATION ? t : null, [w, F] = s.useState(d.$x), V = s.useCallback(() => B() ? (_.S.dispatch(x.CkL.SHAKE_APP, {
    duration: 300,
    intensity: w
  }), F(Math.min(w + d.d7, d.w6)), _.S.dispatch(x.CkL.EMPHASIZE_NOTICE), !1) : (F(d.$x), !0), [B, w]), K = s.useCallback(e => !!V() && (c.Z.setSection(e), !0), [V]), {
    applicationIntegrations: Y,
    applicationBotIds: z,
    builtInIntegrations: q,
    customWebhooks: J,
    followedChannelWebhooks: X
  } = s.useMemo(() => {
    let e = {},
      n = {},
      t = {},
      i = [],
      s = [];
    if (null != M)
      for (let i of M)
        if ("discord" === i.type) {
          if (null != i.application) {
            var l;
            e[i.application.id] = {
              application: i.application,
              integration: i,
              webhooks: []
            }, (null === (l = i.application.bot) || void 0 === l ? void 0 : l.id) !== void 0 && (n[i.application.bot.id] = i.application.id)
          }
        } else !(i.type in t) && (t[i.type] = []), t[i.type].push(i);
    for (let n of v) {
      if (n.channel_id in k || n.channel_id in U) null != n.application_id && n.application_id in e ? e[n.application_id].webhooks.push(n) : n.type === x.ylB.CHANNEL_FOLLOWER ? s.push(n) : i.push(n)
    }
    return {
      applicationIntegrations: e,
      applicationBotIds: n,
      builtInIntegrations: t,
      customWebhooks: i,
      followedChannelWebhooks: s
    }
  }, [M, k, U, v]);
  s.useEffect(() => {
    if (!b) switch (n) {
      case x.b4C.TWITCH:
        null == q[x.ABu.TWITCH] && c.Z.setSection(x.b4C.OVERVIEW);
        break;
      case x.b4C.YOUTUBE:
        null == q[x.ABu.YOUTUBE] && c.Z.setSection(x.b4C.OVERVIEW);
        break;
      case x.b4C.APPLICATION:
        (null == W || !(W in z || W in Y)) && c.Z.setSection(x.b4C.OVERVIEW)
    }
  }, [Y, z, q, W, n, b]), s.useEffect(() => {
    if ((null == l ? void 0 : l.id) != null) N.Z.getEntitlementsForGuildFetchState(l.id) === N.M.NOT_FETCHED && I.i1(l.id)
  }, [null == l ? void 0 : l.id]);
  let Q = null;
  switch (n) {
    case x.b4C.TWITCH:
      null != q[x.ABu.TWITCH] && (Q = (0, i.jsx)(g.Z, {
        guild: l,
        integrations: q[x.ABu.TWITCH],
        editedIntegration: L,
        labelText: p.Z.Messages.INTEGRATIONS_TWITCH,
        platformType: x.ABu.TWITCH,
        descriptionText: p.Z.Messages.INTEGRATIONS_TWITCH_DESCRIPTION,
        helpText: p.Z.Messages.INTEGRATIONS_TWITCH_HELP.format({
          connectAction: () => (0, u.Z)({
            platformType: x.ABu.TWITCH,
            location: "Integration Settings"
          }),
          helpdeskArticle: h.Z.getArticleURL(x.BhN.TWITCH_INTEGRATION)
        }),
        canNavigate: V
      }));
      break;
    case x.b4C.YOUTUBE:
      null != q[x.ABu.YOUTUBE] && (Q = (0, i.jsx)(g.Z, {
        guild: l,
        integrations: q[x.ABu.YOUTUBE],
        editedIntegration: L,
        labelText: p.Z.Messages.INTEGRATIONS_YOUTUBE,
        platformType: x.ABu.YOUTUBE,
        descriptionText: p.Z.Messages.INTEGRATIONS_YOUTUBE_DESCRIPTION,
        helpText: p.Z.Messages.INTEGRATIONS_YOUTUBE_HELP.format({
          connectAction: () => (0, u.Z)({
            platformType: x.ABu.YOUTUBE
          }),
          helpdeskArticle: h.Z.getArticleURL(x.BhN.YOUTUBE_INTEGRATION)
        }),
        canNavigate: V
      }));
      break;
    case x.b4C.APPLICATION:
      var $;
      let ee = null != W ? null !== ($ = Y[z[W]]) && void 0 !== $ ? $ : Y[W] : null;
      null != ee && (Q = (0, i.jsx)(O.Z, {
        guild: l,
        applicationIntegration: ee,
        editedWebhook: j,
        selectableWebhookChannels: k,
        errors: P,
        canNavigate: V
      }));
      break;
    case x.b4C.CHANNEL_FOLLOWING:
      Q = (0, i.jsx)(A.Z, {
        followedChannelWebhooks: X,
        editedWebhook: j,
        selectableWebhookChannels: k,
        canNavigate: V,
        errors: P
      });
      break;
    case x.b4C.WEBHOOKS:
      Q = (0, i.jsx)(S.Z, {
        guild: l,
        channel: f,
        customWebhooks: J,
        editedWebhook: j,
        selectableWebhookChannels: {
          ...k,
          ...U
        },
        canNavigate: V,
        refToScroller: D,
        errors: P
      });
      break;
    default:
      Q = (0, i.jsx)(C.Z, {
        guild: l,
        channel: f,
        applicationIntegrations: Y,
        builtInIntegrations: q,
        customWebhooks: J,
        followedChannelWebhooks: X,
        isLoading: b || null == l,
        canCreateWebhook: null != H,
        onManageCustomWebhooks: () => {
          c.Z.setSection(x.b4C.WEBHOOKS)
        },
        onManageFollowedChannels: () => {
          c.Z.setSection(x.b4C.CHANNEL_FOLLOWING)
        },
        onManageApplication: e => {
          c.Z.setSection(x.b4C.APPLICATION, e)
        },
        onManageBuiltIn: e => {
          switch (e) {
            case x.ABu.TWITCH:
              c.Z.setSection(x.b4C.TWITCH);
              break;
            case x.ABu.YOUTUBE:
              c.Z.setSection(x.b4C.YOUTUBE)
          }
        }
      })
  }
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(m.Z, {
      align: m.Z.Align.CENTER,
      className: R.breadcrumbs,
      children: n === x.b4C.OVERVIEW ? (0, i.jsx)(o.FormTitle, {
        tag: "h1",
        children: Z(x.b4C.OVERVIEW)
      }) : (0, i.jsx)(o.Breadcrumbs, {
        activeId: n.toString(),
        breadcrumbs: [x.b4C.OVERVIEW, n].map(e => ({
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