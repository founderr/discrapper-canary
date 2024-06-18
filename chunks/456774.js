"use strict";
n.d(t, {
  Z: function() {
    return P
  }
}), n(653041), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(367907),
  l = n(666188),
  u = n(549817),
  _ = n(819553),
  c = n(17181),
  d = n(303737),
  E = n(965638),
  I = n(434404),
  T = n(962086),
  h = n(160404),
  S = n(703656),
  f = n(814443),
  N = n(592125),
  A = n(940627),
  m = n(705600),
  O = n(626135),
  R = n(912787),
  p = n(272709),
  g = n(718582),
  C = n(126134),
  v = n(981631),
  L = n(689938),
  D = n(426423);

function M(e) {
  let {
    guild: t
  } = e, n = -1, s = (0, g.V1)(t), o = r.useMemo(() => s.map(e => {
    {
      let r = null;
      return e.category === C.L.EMBEDDED_ACTIVITY ? r = e.embeddedActivities[0].channelId : e.category === C.L.HANGOUT || e.category === C.L.GAMING ? r = e.channelId : e.category === C.L.EVENT && (r = e.event.channel_id), n++, (0, i.jsx)(p.Z, {
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
      o = [],
      l = [],
      u = [],
      _ = {};
    for (let a of s) {
      var c, d, E, I, T;
      if (3 === e.length) break;
      let s = null !== (E = (0, R.i)(a)) && void 0 !== E ? E : "",
        h = (0, g.bA)(s, t.id),
        S = e.length;
      e.push(a.category), i.push(h.length), r.push(h.length > 0 ? h[0].id : "0"), o.push(h.length > 0 && null !== (I = null === (c = f.Z.getUserAffinity(h[0].id)) || void 0 === c ? void 0 : c.affinity) && void 0 !== I ? I : 0), n.push(Math.min(h.length, 6)), l.push(s), u.push(null !== (T = null === (d = N.Z.getChannel(s)) || void 0 === d ? void 0 : d.type) && void 0 !== T ? T : v.d4z.UNKNOWN), _["position_".concat(S + 1, "_affinity_user_ids")] = h.slice(0, 6).map(e => e.id), _["position_".concat(S + 1, "_user_affinity_scores")] = h.slice(0, 6).map(e => {
        var t, n;
        return null !== (n = null === (t = f.Z.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
      })
    }
    0 !== e.length && (_.card_types = e, _.affinity_users_counts = n, _.total_users_counts = i, _.max_affinity_user_ids = r, _.max_affinity_user_scores = o, _.channel_ids = l, _.channel_types = u, _.guild_id = t.id, O.default.track(v.rMx.GUILD_TOOLTIP_SHOWN, {
      ..._,
      ...(0, a.hH)(t.id)
    }))
  }, []), 0 === s.length) ? null : (0, i.jsx)("div", {
    className: D.cards,
    children: o
  })
}

function P(e) {
  var t;
  let {
    guild: n,
    closePopout: a,
    nudge: f
  } = e, N = r.useRef(null), O = (0, l.Z)(n), R = (0, E.Ij)(n), {
    isViewingRoles: p,
    backNavigationSection: g
  } = (0, s.cj)([h.Z], () => ({
    isViewingRoles: h.Z.isViewingRoles(n.id),
    backNavigationSection: h.Z.getBackNavigationSection(n.id)
  })), C = () => {
    h.Z.isFullServerPreview(n.id) && (0, S.uL)(v.Z5c.CHANNEL(n.id)), _.ZP.shouldShowOnboarding(n.id) && (u.Z.finishOnboarding(n.id), (0, c.discardOnboardingPromise)(n.id)), (0, T.mL)(n.id), I.Z.open(n.id, g), g === v.pNK.ROLE_SUBSCRIPTIONS && (0, d.GN)(n.id)
  }, P = null === (t = N.current) || void 0 === t ? void 0 : t.clientHeight, y = f + 14;
  return (0, i.jsxs)("div", {
    className: D.container,
    ref: N,
    children: [(0, i.jsx)("div", {
      className: D.tooltipPointer,
      style: {
        top: Math.min(y, null != P ? P - 22 : y)
      }
    }), (0, i.jsxs)("div", {
      className: D.header,
      children: [O ? (0, i.jsx)(m.Z, {
        guild: n,
        size: 16,
        className: D.rowIconV2,
        tooltipColor: o.Tooltip.Colors.PRIMARY
      }) : (0, i.jsx)(A.Z, {
        guild: n,
        size: 20,
        className: D.rowIcon
      }), (0, i.jsx)(o.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: n.name
      })]
    }), (0, i.jsx)(M, {
      guild: n
    }), R ? (0, i.jsxs)("div", {
      className: D.footer,
      children: [(0, i.jsx)(o.CircleInformationIcon, {
        size: "custom",
        color: "currentColor",
        width: 12,
        height: 12,
        className: D.infoIcon
      }), (0, i.jsx)(o.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: L.Z.Messages.GUILD_POPOUT_INVITES_PAUSED.format({
          onClick: () => {
            a(), I.Z.open(n.id, v.pNK.INSTANT_INVITES)
          }
        })
      })]
    }) : null, p ? (0, i.jsxs)("div", {
      className: D.footer,
      children: [(0, i.jsx)(o.CircleInformationIcon, {
        size: "custom",
        color: "currentColor",
        width: 12,
        height: 12,
        className: D.infoIcon
      }), (0, i.jsx)(o.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: L.Z.Messages.GUILD_POPOUT_VIEWING_AS_ROLES.format({
          onClick: () => {
            a(), C()
          }
        })
      })]
    }) : null]
  })
}