"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
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
  S = n("592125"),
  h = n("800599"),
  A = n("940627"),
  m = n("705600"),
  N = n("507893"),
  p = n("626135"),
  O = n("59688"),
  C = n("912787"),
  R = n("272709"),
  g = n("718582"),
  L = n("126134"),
  v = n("981631"),
  D = n("689938"),
  M = n("303820");

function y(e) {
  let {
    guild: t
  } = e, n = -1, s = (0, g.useGuildPopoutCards)(t), a = r.useMemo(() => s.map(e => {
    {
      let r = null;
      return e.category === L.CardCategory.EMBEDDED_ACTIVITY ? r = e.embeddedActivities[0].channelId : e.category === L.CardCategory.HANGOUT || e.category === L.CardCategory.GAMING ? r = e.channelId : e.category === L.CardCategory.EVENT && (r = e.event.channel_id), n++, (0, i.jsx)(R.default, {
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
      o = [],
      l = [],
      u = {};
    for (let T of s) {
      var d, _, c, E, I;
      if (3 === e.length) break;
      let s = null !== (c = (0, C.getChannelIdFromCardData)(T)) && void 0 !== c ? c : "",
        f = (0, g.getVoiceChannelUsers)(s, t.id),
        A = e.length;
      e.push(T.category), i.push(f.length), r.push(f.length > 0 ? f[0].id : "0"), a.push(f.length > 0 && null !== (E = null === (d = h.default.getUserAffinity(f[0].id)) || void 0 === d ? void 0 : d.affinity) && void 0 !== E ? E : 0), n.push(Math.min(f.length, 6)), o.push(s), l.push(null !== (I = null === (_ = S.default.getChannel(s)) || void 0 === _ ? void 0 : _.type) && void 0 !== I ? I : v.ChannelTypes.UNKNOWN), u["position_".concat(A + 1, "_affinity_user_ids")] = f.slice(0, 6).map(e => e.id), u["position_".concat(A + 1, "_user_affinity_scores")] = f.slice(0, 6).map(e => {
        var t, n;
        return null !== (n = null === (t = h.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
      })
    }
    0 !== e.length && (u.card_types = e, u.affinity_users_counts = n, u.total_users_counts = i, u.max_affinity_user_ids = r, u.max_affinity_user_scores = a, u.channel_ids = o, u.channel_types = l, u.guild_id = t.id, p.default.track(v.AnalyticEvents.GUILD_TOOLTIP_SHOWN, {
      ...u,
      guild_id: t.id
    }))
  }, []), 0 === s.length) ? null : (O.default.trackExposure({
    location: "guild_tooltip"
  }), (0, i.jsx)("div", {
    className: M.cards,
    children: a
  }))
}

function P(e) {
  var t;
  let {
    guild: n,
    closePopout: S,
    nudge: h
  } = e, p = r.useRef(null), O = (0, o.default)(n), C = (0, c.useShouldShowInvitesDisabledNotif)(n), {
    isViewingRoles: R,
    backNavigationSection: g
  } = (0, s.useStateFromStoresObject)([T.default], () => ({
    isViewingRoles: T.default.isViewingRoles(n.id),
    backNavigationSection: T.default.getBackNavigationSection(n.id)
  })), L = () => {
    T.default.isFullServerPreview(n.id) && (0, f.transitionTo)(v.Routes.CHANNEL(n.id)), u.default.shouldShowOnboarding(n.id) && (l.default.finishOnboarding(n.id), (0, d.discardOnboardingPromise)(n.id)), (0, I.stopImpersonating)(n.id), E.default.open(n.id, g), g === v.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, _.announceDeleteTemplateChannels)(n.id)
  }, P = null === (t = p.current) || void 0 === t ? void 0 : t.clientHeight, U = h + 14;
  return (0, i.jsxs)("div", {
    className: M.container,
    ref: p,
    children: [(0, i.jsx)("div", {
      className: M.tooltipPointer,
      style: {
        top: Math.min(U, null != P ? P - 22 : U)
      }
    }), (0, i.jsxs)("div", {
      className: M.header,
      children: [O ? (0, i.jsx)(m.default, {
        guild: n,
        size: 16,
        className: M.rowIconV2,
        tooltipColor: a.Tooltip.Colors.PRIMARY
      }) : (0, i.jsx)(A.default, {
        guild: n,
        size: 20,
        className: M.rowIcon
      }), (0, i.jsx)(a.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: n.name
      })]
    }), (0, i.jsx)(y, {
      guild: n
    }), C ? (0, i.jsxs)("div", {
      className: M.footer,
      children: [(0, i.jsx)(N.default, {
        width: 12,
        height: 12,
        className: M.infoIcon
      }), (0, i.jsx)(a.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: D.default.Messages.GUILD_POPOUT_INVITES_PAUSED.format({
          onClick: () => {
            S(), E.default.open(n.id, v.GuildSettingsSections.INSTANT_INVITES)
          }
        })
      })]
    }) : null, R ? (0, i.jsxs)("div", {
      className: M.footer,
      children: [(0, i.jsx)(N.default, {
        width: 12,
        height: 12,
        className: M.infoIcon
      }), (0, i.jsx)(a.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: D.default.Messages.GUILD_POPOUT_VIEWING_AS_ROLES.format({
          onClick: () => {
            S(), L()
          }
        })
      })]
    }) : null]
  })
}