t.d(s, {
  Dh: function() {
    return h
  },
  Gd: function() {
    return p
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(442837),
  l = t(481060),
  c = t(100527);
t(502762), t(659101);
var d = t(594174),
  _ = t(931240),
  E = t(905362),
  u = t(353093),
  T = t(891728),
  S = t(438365),
  I = t(114487),
  N = t(219039),
  C = t(979264),
  m = t(308083),
  A = t(981631),
  O = t(689938),
  g = t(879678);

function h(e) {
  let {
    className: s,
    clanTag: t,
    clanBadge: i,
    onTagClick: o,
    guildId: c,
    guildName: d,
    guildIcon: _,
    guildIconSize: E,
    memberCount: u
  } = e, T = a.useRef(null), [S, A] = a.useState(!1);
  return a.useEffect(() => {
    let e = T.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && A(e.offsetWidth < e.scrollWidth)
  }, []), (0, n.jsxs)("div", {
    className: r()(g.container, s),
    children: [(0, n.jsxs)("div", {
      className: g.guildPrefixContainer,
      children: [(0, n.jsx)(I.b, {
        guildId: c,
        guildName: d,
        guildIcon: _,
        iconSize: E,
        className: g.guildPrefixIcon,
        animate: !1
      }), (0, n.jsxs)("div", {
        className: g.details,
        children: [(0, n.jsx)(l.Tooltip, {
          text: d,
          color: l.Tooltip.Colors.PRIMARY,
          shouldShow: S,
          children: e => (0, n.jsx)("span", {
            ref: T,
            ...e,
            className: g.guildName,
            children: d
          })
        }), null != u && (0, n.jsx)(N.Z, {
          count: u
        })]
      })]
    }), (0, n.jsx)("div", {
      className: g.tagContainer,
      children: (0, n.jsx)(C.aG, {
        guildId: c,
        className: g.tag,
        clanTag: t,
        clanBadge: i,
        onClick: o,
        badgeSize: m.NC.SIZE_16,
        textColor: "interactive-normal",
        textVariant: "text-sm/semibold",
        badgeClassName: g.badge
      })
    })]
  })
}

function R(e) {
  let {
    userClanTag: s,
    userClanBadge: t,
    guildId: i,
    guildName: r,
    guildIcon: S,
    clan: I,
    userId: N
  } = e, C = (0, T.C)(), m = (0, o.e7)([d.default], () => {
    var e;
    return (0, u.vh)(null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan).guildId
  }), R = a.useMemo(() => {
    if (i !== m) {
      if (C.has(i)) return () => {
        (0, l.openModal)(e => (0, n.jsx)(l.ConfirmModal, {
          ...e,
          header: O.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_CTA,
          confirmText: O.Z.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA,
          confirmButtonColor: l.Button.Colors.BRAND,
          cancelText: O.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_CANCEL,
          onConfirm: async () => {
            await (0, _.nE)(i, !0, c.Z.PROFILE_POPOUT)
          },
          children: (0, n.jsx)(l.Text, {
            variant: "text-sm/normal",
            children: O.Z.Messages.CLAN_USER_PROFILE_USE_CLAN_TAG.format({
              guildName: r
            })
          })
        }))
      };
      if (null != I) return () => {
        (0, E.q)(i, I, {
          source: A.jXE.USER_PROFILE,
          location: c.Z.CLAN_TAG,
          tagUserId: N
        })
      }
    }
  }, [C, I, m, i, r, N]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(l.Heading, {
      className: g.header,
      variant: "eyebrow",
      children: O.Z.Messages.CLAN_USER_PROFILE_PRIMARY_CLAN
    }), (0, n.jsx)(h, {
      className: g.profileContainer,
      clanTag: s,
      clanBadge: t,
      onTagClick: R,
      guildName: r,
      guildId: i,
      guildIcon: S,
      guildIconSize: 40,
      memberCount: null == I ? void 0 : I.memberCount
    })]
  })
}

function p(e) {
  let {
    userId: s,
    wrapChildren: t
  } = e, {
    userClanTag: a,
    userClanBadge: i,
    guildId: r,
    guildName: o,
    guildIcon: l,
    clan: c
  } = (0, S.r)({
    userId: s
  });
  if (null == a || null == r || null == o) return null;
  let d = (0, n.jsx)(R, {
    userClanTag: a,
    userClanBadge: i,
    guildId: r,
    guildName: o,
    guildIcon: l,
    clan: c,
    userId: s
  });
  return null != t ? (0, n.jsx)(n.Fragment, {
    children: t(d)
  }) : d
}