"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("653041"), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("442837"),
  a = n("481060"),
  o = n("666188"),
  l = n("549817"),
  u = n("819553"),
  d = n("17181"),
  _ = n("303737"),
  c = n("965638"),
  E = n("434404"),
  I = n("962086"),
  T = n("160404"),
  f = n("703656"),
  S = n("800599"),
  h = n("940627"),
  A = n("705600"),
  m = n("507893"),
  N = n("626135"),
  p = n("59688"),
  O = n("912787"),
  C = n("272709"),
  R = n("718582"),
  g = n("126134"),
  L = n("981631"),
  v = n("689938"),
  D = n("303820");

function M(e) {
  let {
    guild: t
  } = e, n = -1, s = (0, R.useGuildPopoutCards)(t), a = r.useMemo(() => s.map(e => {
    {
      let r = null;
      return e.category === g.CardCategory.EMBEDDED_ACTIVITY ? r = e.embeddedActivities[0].channelId : e.category === g.CardCategory.HANGOUT || e.category === g.CardCategory.GAMING ? r = e.channelId : e.category === g.CardCategory.EVENT && (r = e.event.channel_id), n++, (0, i.jsx)(C.default, {
        cardData: e,
        guildId: t.id,
        cardIndex: n
      }, "".concat(e.category, "-").concat(r))
    }
  }), [s, t.id, n, !0]);
  return (r.useEffect(() => {
    let e = [],
      n = [],
      i = [],
      r = [],
      a = {};
    for (let l of s) {
      var o;
      if (3 === e.length) break;
      let s = null !== (o = (0, O.getChannelIdFromCardData)(l)) && void 0 !== o ? o : "",
        u = (0, R.getVoiceChannelUsers)(s, t.id),
        d = e.length;
      e.push(l.category), i.push(u.length), r.push(u.length > 0 ? u[0].id : "0"), n.push(Math.min(u.length, 6)), a["position_".concat(d + 1, "_affinity_user_ids")] = u.slice(0, 6).map(e => e.id), a["position_".concat(d + 1, "_user_affinity_scores")] = u.slice(0, 6).map(e => {
        var t, n;
        return null !== (n = null === (t = S.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
      })
    }
    0 !== e.length && (a.card_types = e, a.affinity_users_counts = n, a.total_users_counts = i, a.max_affinity_user_ids = r, N.default.track(L.AnalyticEvents.GUILD_TOOLTIP_SHOWN, {
      ...a,
      guild_id: t.id
    }))
  }, []), 0 === s.length) ? null : (p.default.trackExposure({
    location: "guild_tooltip"
  }), (0, i.jsx)("div", {
    className: D.cards,
    children: a
  }))
}

function y(e) {
  var t;
  let {
    guild: n,
    closePopout: S,
    nudge: N
  } = e, p = r.useRef(null), O = (0, o.default)(n), C = (0, c.useShouldShowInvitesDisabledNotif)(n), {
    isViewingRoles: R,
    backNavigationSection: g
  } = (0, s.useStateFromStoresObject)([T.default], () => ({
    isViewingRoles: T.default.isViewingRoles(n.id),
    backNavigationSection: T.default.getBackNavigationSection(n.id)
  })), y = () => {
    T.default.isFullServerPreview(n.id) && (0, f.transitionTo)(L.Routes.CHANNEL(n.id)), u.default.shouldShowOnboarding(n.id) && (l.default.finishOnboarding(n.id), (0, d.discardOnboardingPromise)(n.id)), (0, I.stopImpersonating)(n.id), E.default.open(n.id, g), g === L.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, _.announceDeleteTemplateChannels)(n.id)
  }, P = null === (t = p.current) || void 0 === t ? void 0 : t.clientHeight, U = N + 14;
  return (0, i.jsxs)("div", {
    className: D.container,
    ref: p,
    children: [(0, i.jsx)("div", {
      className: D.tooltipPointer,
      style: {
        top: Math.min(U, null != P ? P - 22 : U)
      }
    }), (0, i.jsxs)("div", {
      className: D.header,
      children: [O ? (0, i.jsx)(A.default, {
        guild: n,
        size: 16,
        className: D.rowIconV2,
        tooltipColor: a.Tooltip.Colors.PRIMARY
      }) : (0, i.jsx)(h.default, {
        guild: n,
        size: 20,
        className: D.rowIcon
      }), (0, i.jsx)(a.Text, {
        variant: "text-md/bold",
        color: "header-primary",
        children: n.name
      })]
    }), (0, i.jsx)(M, {
      guild: n
    }), C ? (0, i.jsxs)("div", {
      className: D.footer,
      children: [(0, i.jsx)(m.default, {
        width: 12,
        height: 12,
        className: D.infoIcon
      }), (0, i.jsx)(a.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: v.default.Messages.GUILD_POPOUT_INVITES_PAUSED.format({
          onClick: () => {
            S(), E.default.open(n.id, L.GuildSettingsSections.INSTANT_INVITES)
          }
        })
      })]
    }) : null, R ? (0, i.jsxs)("div", {
      className: D.footer,
      children: [(0, i.jsx)(m.default, {
        width: 12,
        height: 12,
        className: D.infoIcon
      }), (0, i.jsx)(a.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: v.default.Messages.GUILD_POPOUT_VIEWING_AS_ROLES.format({
          onClick: () => {
            S(), y()
          }
        })
      })]
    }) : null]
  })
}