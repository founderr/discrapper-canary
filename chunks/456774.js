"use strict";
n.d(t, {
  Z: function() {
    return y
  }
}), n(653041), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(367907),
  l = n(372900),
  u = n(666188),
  _ = n(549817),
  c = n(819553),
  d = n(17181),
  E = n(303737),
  I = n(965638),
  T = n(434404),
  h = n(962086),
  f = n(160404),
  S = n(703656),
  N = n(814443),
  A = n(592125),
  m = n(940627),
  O = n(705600),
  p = n(626135),
  R = n(912787),
  g = n(272709),
  C = n(718582),
  v = n(126134),
  L = n(981631),
  D = n(689938),
  M = n(426423);

function P(e) {
  let {
    guild: t
  } = e, n = -1, s = (0, C.V1)(t), o = r.useMemo(() => s.map(e => {
    {
      let r = null;
      return e.category === v.L.EMBEDDED_ACTIVITY ? r = e.embeddedActivities[0].channelId : e.category === v.L.HANGOUT || e.category === v.L.GAMING ? r = e.channelId : e.category === v.L.EVENT && (r = e.event.channel_id), n++, (0, i.jsx)(g.Z, {
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
        h = (0, C.bA)(s, t.id),
        f = e.length;
      e.push(a.category), i.push(h.length), r.push(h.length > 0 ? h[0].id : "0"), o.push(h.length > 0 && null !== (I = null === (c = N.Z.getUserAffinity(h[0].id)) || void 0 === c ? void 0 : c.affinity) && void 0 !== I ? I : 0), n.push(Math.min(h.length, 6)), l.push(s), u.push(null !== (T = null === (d = A.Z.getChannel(s)) || void 0 === d ? void 0 : d.type) && void 0 !== T ? T : L.d4z.UNKNOWN), _["position_".concat(f + 1, "_affinity_user_ids")] = h.slice(0, 6).map(e => e.id), _["position_".concat(f + 1, "_user_affinity_scores")] = h.slice(0, 6).map(e => {
        var t, n;
        return null !== (n = null === (t = N.Z.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
      })
    }
    0 !== e.length && (_.card_types = e, _.affinity_users_counts = n, _.total_users_counts = i, _.max_affinity_user_ids = r, _.max_affinity_user_scores = o, _.channel_ids = l, _.channel_types = u, _.guild_id = t.id, p.default.track(L.rMx.GUILD_TOOLTIP_SHOWN, {
      ..._,
      ...(0, a.hH)(t.id)
    }))
  }, []), 0 === s.length) ? null : (0, i.jsx)("div", {
    className: M.cards,
    children: o
  })
}

function y(e) {
  var t;
  let {
    guild: n,
    closePopout: a,
    nudge: N
  } = e, A = r.useRef(null), p = (0, u.Z)(n), R = (0, I.Ij)(n), {
    isViewingRoles: g,
    backNavigationSection: C
  } = (0, s.cj)([f.Z], () => ({
    isViewingRoles: f.Z.isViewingRoles(n.id),
    backNavigationSection: f.Z.getBackNavigationSection(n.id)
  })), v = () => {
    f.Z.isFullServerPreview(n.id) && (0, S.uL)(L.Z5c.CHANNEL(n.id)), c.ZP.shouldShowOnboarding(n.id) && (_.Z.finishOnboarding(n.id), (0, d.discardOnboardingPromise)(n.id)), (0, h.mL)(n.id), T.Z.open(n.id, C), C === L.pNK.ROLE_SUBSCRIPTIONS && (0, E.GN)(n.id)
  }, y = null === (t = A.current) || void 0 === t ? void 0 : t.clientHeight, U = N + 14;
  return (0, i.jsx)(l.Z.Provider, {
    value: n.id,
    children: (0, i.jsxs)("div", {
      className: M.container,
      ref: A,
      children: [(0, i.jsx)("div", {
        className: M.tooltipPointer,
        style: {
          top: Math.min(U, null != y ? y - 22 : U)
        }
      }), (0, i.jsxs)("div", {
        className: M.header,
        children: [p ? (0, i.jsx)(O.Z, {
          guild: n,
          size: 16,
          className: M.rowIconV2,
          tooltipColor: o.Tooltip.Colors.PRIMARY
        }) : (0, i.jsx)(m.Z, {
          guild: n,
          size: 20,
          className: M.rowIcon
        }), (0, i.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: n.name
        })]
      }), (0, i.jsx)(P, {
        guild: n
      }), R ? (0, i.jsxs)("div", {
        className: M.footer,
        children: [(0, i.jsx)(o.CircleInformationIcon, {
          size: "custom",
          color: "currentColor",
          width: 12,
          height: 12,
          className: M.infoIcon
        }), (0, i.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-xs/medium",
          children: D.Z.Messages.GUILD_POPOUT_INVITES_PAUSED.format({
            onClick: () => {
              a(), T.Z.open(n.id, L.pNK.INSTANT_INVITES)
            }
          })
        })]
      }) : null, g ? (0, i.jsxs)("div", {
        className: M.footer,
        children: [(0, i.jsx)(o.CircleInformationIcon, {
          size: "custom",
          color: "currentColor",
          width: 12,
          height: 12,
          className: M.infoIcon
        }), (0, i.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-xs/medium",
          children: D.Z.Messages.GUILD_POPOUT_VIEWING_AS_ROLES.format({
            onClick: () => {
              a(), v()
            }
          })
        })]
      }) : null]
    })
  })
}