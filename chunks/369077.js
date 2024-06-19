t.d(s, {
  Dh: function() {
    return g
  },
  Gd: function() {
    return M
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(442837),
  o = t(481060),
  c = t(100527);
t(502762), t(659101);
var E = t(594174),
  d = t(931240),
  _ = t(905362),
  T = t(353093),
  S = t(891728),
  u = t(438365),
  I = t(114487),
  N = t(219039),
  A = t(979264),
  C = t(308083),
  O = t(981631),
  m = t(689938),
  h = t(879678);

function g(e) {
  let {
    className: s,
    clanTag: t,
    clanBadge: a,
    onTagClick: r,
    guildId: c,
    guildName: E,
    guildIcon: d,
    guildIconSize: _,
    memberCount: T
  } = e, S = i.useRef(null), [u, O] = i.useState(!1);
  return i.useEffect(() => {
    let e = S.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && O(e.offsetWidth < e.scrollWidth)
  }, []), (0, n.jsxs)("div", {
    className: l()(h.container, s),
    children: [(0, n.jsxs)("div", {
      className: h.guildPrefixContainer,
      children: [(0, n.jsx)(I.b, {
        guildId: c,
        guildName: E,
        guildIcon: d,
        iconSize: _,
        className: h.guildPrefixIcon,
        animate: !1
      }), (0, n.jsxs)("div", {
        className: h.details,
        children: [(0, n.jsx)(o.Tooltip, {
          text: E,
          color: o.Tooltip.Colors.PRIMARY,
          shouldShow: u,
          children: e => (0, n.jsx)("span", {
            ref: S,
            ...e,
            className: h.guildName,
            children: E
          })
        }), null != T && (0, n.jsx)(N.Z, {
          count: T
        })]
      })]
    }), (0, n.jsx)("div", {
      className: h.tagContainer,
      children: (0, n.jsx)(A.aG, {
        guildId: c,
        className: h.tag,
        clanTag: t,
        clanBadge: a,
        onClick: r,
        badgeSize: C.NC.SIZE_16,
        textColor: "interactive-normal",
        textVariant: "text-sm/semibold",
        badgeClassName: h.badge
      })
    })]
  })
}

function R(e) {
  let {
    userClanTag: s,
    userClanBadge: t,
    guildId: a,
    guildName: l,
    guildIcon: u,
    clan: I,
    userId: N
  } = e, A = (0, S.C)(), C = (0, r.e7)([E.default], () => {
    var e;
    return (0, T.vh)(null === (e = E.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan).guildId
  }), R = i.useMemo(() => {
    if (a !== C) {
      if (A.has(a)) return () => {
        (0, o.openModal)(e => (0, n.jsx)(o.ConfirmModal, {
          ...e,
          header: m.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_CTA,
          confirmText: m.Z.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA,
          confirmButtonColor: o.Button.Colors.BRAND,
          cancelText: m.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_CANCEL,
          onConfirm: async () => {
            await (0, d.nE)(a, !0, c.Z.PROFILE_POPOUT)
          },
          children: (0, n.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: m.Z.Messages.CLAN_USER_PROFILE_USE_CLAN_TAG.format({
              guildName: l
            })
          })
        }))
      };
      if (null != I) return () => {
        (0, _.q)(a, I, {
          source: O.jXE.USER_PROFILE,
          location: c.Z.CLAN_TAG,
          tagUserId: N
        })
      }
    }
  }, [A, I, C, a, l, N]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o.Heading, {
      className: h.header,
      variant: "eyebrow",
      children: m.Z.Messages.CLAN_USER_PROFILE_PRIMARY_CLAN
    }), (0, n.jsx)(g, {
      className: h.profileContainer,
      clanTag: s,
      clanBadge: t,
      onTagClick: R,
      guildName: l,
      guildId: a,
      guildIcon: u,
      guildIconSize: 40,
      memberCount: null == I ? void 0 : I.memberCount
    })]
  })
}

function M(e) {
  let {
    userId: s,
    wrapChildren: t
  } = e, {
    userClanTag: i,
    userClanBadge: a,
    guildId: l,
    guildName: r,
    guildIcon: o,
    clan: c
  } = (0, u.r)({
    userId: s
  });
  if (null == i || null == l || null == r) return null;
  let E = (0, n.jsx)(R, {
    userClanTag: i,
    userClanBadge: a,
    guildId: l,
    guildName: r,
    guildIcon: o,
    clan: c,
    userId: s
  });
  return null != t ? (0, n.jsx)(n.Fragment, {
    children: t(E)
  }) : E
}