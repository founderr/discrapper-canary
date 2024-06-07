"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("653041"), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("442837"),
  a = n("481060"),
  o = n("367907"),
  l = n("666188"),
  u = n("549817"),
  d = n("819553"),
  _ = n("17181"),
  c = n("303737"),
  E = n("965638"),
  I = n("434404"),
  T = n("962086"),
  f = n("160404"),
  S = n("703656"),
  h = n("592125"),
  A = n("800599"),
  m = n("940627"),
  N = n("705600"),
  p = n("507893"),
  O = n("626135"),
  C = n("59688"),
  R = n("912787"),
  g = n("272709"),
  L = n("718582"),
  v = n("126134"),
  D = n("981631"),
  M = n("689938"),
  y = n("303820");

function P(e) {
  let {
    guild: t
  } = e, n = -1, s = (0, L.useGuildPopoutCards)(t), a = r.useMemo(() => s.map(e => {
    {
      let r = null;
      return e.category === v.CardCategory.EMBEDDED_ACTIVITY ? r = e.embeddedActivities[0].channelId : e.category === v.CardCategory.HANGOUT || e.category === v.CardCategory.GAMING ? r = e.channelId : e.category === v.CardCategory.EVENT && (r = e.event.channel_id), n++, (0, i.jsx)(g.default, {
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
      a = [],
      l = [],
      u = [],
      d = {};
    for (let o of s) {
      var _, c, E, I, T;
      if (3 === e.length) break;
      let s = null !== (E = (0, R.getChannelIdFromCardData)(o)) && void 0 !== E ? E : "",
        f = (0, L.getVoiceChannelUsers)(s, t.id),
        S = e.length;
      e.push(o.category), i.push(f.length), r.push(f.length > 0 ? f[0].id : "0"), a.push(f.length > 0 && null !== (I = null === (_ = A.default.getUserAffinity(f[0].id)) || void 0 === _ ? void 0 : _.affinity) && void 0 !== I ? I : 0), n.push(Math.min(f.length, 6)), l.push(s), u.push(null !== (T = null === (c = h.default.getChannel(s)) || void 0 === c ? void 0 : c.type) && void 0 !== T ? T : D.ChannelTypes.UNKNOWN), d["position_".concat(S + 1, "_affinity_user_ids")] = f.slice(0, 6).map(e => e.id), d["position_".concat(S + 1, "_user_affinity_scores")] = f.slice(0, 6).map(e => {
        var t, n;
        return null !== (n = null === (t = A.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
      })
    }
    0 !== e.length && (d.card_types = e, d.affinity_users_counts = n, d.total_users_counts = i, d.max_affinity_user_ids = r, d.max_affinity_user_scores = a, d.channel_ids = l, d.channel_types = u, d.guild_id = t.id, O.default.track(D.AnalyticEvents.GUILD_TOOLTIP_SHOWN, {
      ...d,
      ...(0, o.collectGuildAnalyticsMetadata)(t.id)
    }))
  }, []), 0 === s.length) ? null : (C.default.trackExposure({
    location: "guild_tooltip"
  }), (0, i.jsx)("div", {
    className: y.cards,
    children: a
  }))
}

function U(e) {
  var t;
  let {
    guild: n,
    closePopout: o,
    nudge: h
  } = e, A = r.useRef(null), O = (0, l.default)(n), C = (0, E.useShouldShowInvitesDisabledNotif)(n), {
    isViewingRoles: R,
    backNavigationSection: g
  } = (0, s.useStateFromStoresObject)([f.default], () => ({
    isViewingRoles: f.default.isViewingRoles(n.id),
    backNavigationSection: f.default.getBackNavigationSection(n.id)
  })), L = () => {
    f.default.isFullServerPreview(n.id) && (0, S.transitionTo)(D.Routes.CHANNEL(n.id)), d.default.shouldShowOnboarding(n.id) && (u.default.finishOnboarding(n.id), (0, _.discardOnboardingPromise)(n.id)), (0, T.stopImpersonating)(n.id), I.default.open(n.id, g), g === D.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, c.announceDeleteTemplateChannels)(n.id)
  }, v = null === (t = A.current) || void 0 === t ? void 0 : t.clientHeight, U = h + 14;
  return (0, i.jsxs)("div", {
    className: y.container,
    ref: A,
    children: [(0, i.jsx)("div", {
      className: y.tooltipPointer,
      style: {
        top: Math.min(U, null != v ? v - 22 : U)
      }
    }), (0, i.jsxs)("div", {
      className: y.header,
      children: [O ? (0, i.jsx)(N.default, {
        guild: n,
        size: 16,
        className: y.rowIconV2,
        tooltipColor: a.Tooltip.Colors.PRIMARY
      }) : (0, i.jsx)(m.default, {
        guild: n,
        size: 20,
        className: y.rowIcon
      }), (0, i.jsx)(a.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: n.name
      })]
    }), (0, i.jsx)(P, {
      guild: n
    }), C ? (0, i.jsxs)("div", {
      className: y.footer,
      children: [(0, i.jsx)(p.default, {
        width: 12,
        height: 12,
        className: y.infoIcon
      }), (0, i.jsx)(a.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: M.default.Messages.GUILD_POPOUT_INVITES_PAUSED.format({
          onClick: () => {
            o(), I.default.open(n.id, D.GuildSettingsSections.INSTANT_INVITES)
          }
        })
      })]
    }) : null, R ? (0, i.jsxs)("div", {
      className: y.footer,
      children: [(0, i.jsx)(p.default, {
        width: 12,
        height: 12,
        className: y.infoIcon
      }), (0, i.jsx)(a.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: M.default.Messages.GUILD_POPOUT_VIEWING_AS_ROLES.format({
          onClick: () => {
            o(), L()
          }
        })
      })]
    }) : null]
  })
}