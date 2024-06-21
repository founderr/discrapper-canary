"use strict";
n.d(t, {
  Z: function() {
    return k
  }
}), n(536091), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(512722),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(692547),
  c = n(780384),
  d = n(481060),
  E = n(749210),
  I = n(99690),
  T = n(410030),
  h = n(726542),
  S = n(367907),
  f = n(906732),
  N = n(171368),
  A = n(598077),
  m = n(271383),
  O = n(467679),
  R = n(626135),
  p = n(275759),
  g = n(107484),
  C = n(977392),
  v = n(134433),
  L = n(753194),
  D = n(458034),
  M = n(856651),
  P = n(981631),
  y = n(228168),
  U = n(689938),
  b = n(761228);

function G(e) {
  let t, {
    connectionType: n,
    connectionMetadataField: r,
    operator: s,
    value: o,
    description: a
  } = e;
  if (null != a) switch (s) {
    case M.iO.LESS_THAN:
      t = U.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
        description: a,
        count: Math.max(0, Number(o) - 1)
      });
      break;
    case M.iO.GREATER_THAN:
      t = U.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
        description: a,
        count: Math.max(0, Number(o) + 1)
      });
      break;
    default:
      t = a
  } else t = (0, p.n_)({
    connectionType: n,
    connectionMetadataField: r,
    operator: s,
    value: o
  });
  return null == t ? null : (0, i.jsxs)("div", {
    className: b.popoutCheck,
    children: [(0, i.jsx)(d.CheckmarkLargeIcon, {
      size: "md",
      color: "currentColor",
      className: b.popoutCheckIcon
    }), (0, i.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "header-primary",
      children: t
    })]
  })
}

function w(e) {
  let {
    eligibilityStates: t
  } = e, n = (0, T.ZP)(), r = (0, d.useToken)(_.Z.unsafe_rawColors.GREEN_330).hex(), s = l().groupBy(t, e => "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : ""));
  return (0, i.jsx)(i.Fragment, {
    children: Object.keys(s).map(e => {
      var t, a;
      let l;
      let u = s[e],
        _ = u.filter(e => null != e.operator),
        E = u.find(e => null != e.application),
        T = h.Z.get(e),
        S = null == E ? void 0 : E.application,
        f = (null == S ? void 0 : S.bot) != null ? new A.Z(S.bot) : null;
      return p.SJ.includes(null !== (t = null == S ? void 0 : S.id) && void 0 !== t ? t : "") ? l = (0, i.jsx)(L.Z, {
        className: b.botTag,
        color: r,
        size: 16
      }) : null != f && (l = (0, i.jsx)(O.Z, {
        className: b.botTag,
        verified: f.isVerifiedBot()
      })), (0, i.jsxs)("div", {
        className: b.popoutChecksGroup,
        children: [(0, i.jsxs)("div", {
          className: b.popoutCheckGroupName,
          children: [null != T ? (0, i.jsx)("img", {
            src: (0, c.wj)(n) ? T.icon.darkSVG : T.icon.lightSVG,
            alt: "",
            className: b.popoutCheckGroupPlatformIcon
          }) : null, null != f ? (0, i.jsx)(I.Z, {
            user: f,
            size: d.AvatarSizes.SIZE_20,
            className: b.popoutCheckGroupPlatformIcon
          }) : null, (0, i.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "interactive-active",
            children: null !== (a = null == T ? void 0 : T.name) && void 0 !== a ? a : null == S ? void 0 : S.name
          }), l]
        }), _.map(e => {
          let {
            connection_type: t,
            connection_metadata_field: n,
            operator: r,
            value: s,
            description: a
          } = e;
          return o()(null != n, "connectionMetadataField is null"), o()(null != r, "operator is null"), o()(null != s, "value is null"), (0, i.jsx)(G, {
            connectionType: t,
            connectionMetadataField: n,
            operator: r,
            value: s,
            description: a
          }, "".concat(t, ":").concat(n, ":").concat(r, ":").concat(s))
        })]
      }, e)
    })
  })
}

function B(e) {
  let t, {
    onGetRolesClicked: n,
    onOpenProfile: s,
    eligibilityStates: o,
    userId: a,
    roleId: l,
    channelId: _,
    guildId: c
  } = e;
  r.useEffect(() => {
    R.default.track(P.rMx.PASSPORT_ROLE_POPOUT_VIEWED, {
      other_user_id: a,
      role_id: l,
      ...(0, S.JS)(_),
      ...(0, S.hH)(c)
    })
  }, [a, l, _, c]);
  let E = (0, u.e7)([m.ZP], () => {
    var e, t;
    return null !== (t = null === (e = m.ZP.getSelfMember(c)) || void 0 === e ? void 0 : e.roles.includes(l)) && void 0 !== t && t
  }, [c, l]);
  return t = 1 === o.length && 1 === o[0].length ? U.Z.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ONE : 1 === o.length ? U.Z.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ALL.format() : U.Z.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_OR.format(), (0, i.jsxs)("div", {
    className: b.popout,
    children: [(0, i.jsx)("div", {
      className: b.popoutHeaderContainer,
      children: (0, i.jsx)(d.Text, {
        variant: "text-xs/normal",
        color: "text-normal",
        className: b.popoutHeaderText,
        children: t
      })
    }), (0, i.jsx)("div", {
      className: b.popoutChecks,
      children: (0, i.jsx)(w, {
        eligibilityStates: o.flat()
      })
    }), (0, i.jsxs)("div", {
      className: b.buttonContainer,
      children: [E ? null : (0, i.jsx)(d.Button, {
        className: b.getRolesButton,
        onClick: n,
        children: U.Z.Messages.CONNECTIONS_ROLE_POPOUT_GET_ROLES
      }), (0, i.jsx)(d.Button, {
        className: b.viewConnectionsButton,
        color: d.Button.Colors.PRIMARY,
        onClick: s,
        children: U.Z.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_CONNECTIONS
      })]
    })]
  })
}

function k(e) {
  let {
    userId: t,
    messageId: n,
    guild: s,
    channel: a
  } = e, {
    analyticsLocations: l
  } = (0, f.ZP)(), _ = (0, C.Z)(s, t, a.id, !0), c = (0, u.e7)([g.Z], () => g.Z.getGuildRoleConnectionEligibility(null == _ ? void 0 : _.id)), [I, T] = r.useState(null == c);
  if (null == _) return null;
  async function h() {
    if (o()(null != _, "visibleConnectionsRole is null"), !!I && null == c) await E.Z.fetchGuildRoleConnectionsEligibility(s.id, _.id), T(!1)
  }
  return (0, i.jsx)(d.LazyPopout, {
    onRequestOpen: h,
    renderPopout: function() {
      return Promise.resolve(e => {
        let {
          closePopout: r
        } = e;
        return null == c ? (0, i.jsx)(i.Fragment, {}) : (o()(null != _, "visibleConnectionsRole is null"), (0, i.jsx)(B, {
          eligibilityStates: c,
          userId: t,
          roleId: _.id,
          channelId: a.id,
          guildId: s.id,
          onGetRolesClicked: () => {
            (0, D.Am)(s.id)
          },
          onOpenProfile: () => {
            (0, N.openUserProfileModal)({
              userId: t,
              messageId: n,
              guildId: s.id,
              channelId: a.id,
              roleId: _.id,
              section: y.oh.USER_INFO_CONNECTIONS,
              sourceAnalyticsLocations: l,
              analyticsLocation: {
                section: P.jXE.CHANNEL
              }
            }), r()
          }
        }))
      })
    },
    align: "top",
    nudgeAlignIntoViewport: !0,
    children: e => (0, i.jsx)(d.Tooltip, {
      text: U.Z.Messages.CONNECTIONS_ROLE_POPOUT_CLICK_TO_VIEW,
      children: t => (0, i.jsxs)("div", {
        className: b.badge,
        ...t,
        ...e,
        children: [(0, i.jsx)(v.Z, {
          className: b.badgeVerifiedIcon,
          size: 16,
          color: _.colorString
        }), (0, i.jsx)(d.Text, {
          variant: "text-xs/bold",
          color: "header-primary",
          className: b.roleName,
          children: _.name
        })]
      })
    })
  })
}