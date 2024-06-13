"use strict";
s.r(t), s.d(t, {
  UserProfileClanContainer: function() {
    return R
  },
  UserProfileClanRow: function() {
    return O
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("442837"),
  o = s("481060"),
  d = s("100527");
s("502762"), s("659101");
var u = s("594174"),
  c = s("931240"),
  S = s("905362"),
  E = s("353093"),
  T = s("891728"),
  _ = s("438365"),
  I = s("114487"),
  N = s("219039"),
  g = s("979264"),
  f = s("308083"),
  m = s("981631"),
  A = s("689938"),
  C = s("407020");

function O(e) {
  let {
    className: t,
    clanTag: s,
    clanBadge: i,
    onTagClick: r,
    guildId: d,
    guildName: u,
    guildIcon: c,
    guildIconSize: S,
    memberCount: E
  } = e, T = n.useRef(null), [_, m] = n.useState(!1);
  return n.useEffect(() => {
    let e = T.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && m(e.offsetWidth < e.scrollWidth)
  }, []), (0, a.jsxs)("div", {
    className: l()(C.container, t),
    children: [(0, a.jsxs)("div", {
      className: C.guildPrefixContainer,
      children: [(0, a.jsx)(I.ClanGuildIconSimple, {
        guildId: d,
        guildName: u,
        guildIcon: c,
        iconSize: S,
        className: C.guildPrefixIcon,
        animate: !1
      }), (0, a.jsxs)("div", {
        className: C.details,
        children: [(0, a.jsx)(o.Tooltip, {
          text: u,
          color: o.Tooltip.Colors.PRIMARY,
          shouldShow: _,
          children: e => (0, a.jsx)("span", {
            ref: T,
            ...e,
            className: C.guildName,
            children: u
          })
        }), null != E && (0, a.jsx)(N.default, {
          count: E
        })]
      })]
    }), (0, a.jsx)("div", {
      className: C.tagContainer,
      children: (0, a.jsx)(g.BaseClanTagChiplet, {
        guildId: d,
        className: C.tag,
        clanTag: s,
        clanBadge: i,
        onClick: r,
        badgeSize: f.ClanTagBadgeSize.SIZE_16,
        textColor: "interactive-normal",
        textVariant: "text-sm/semibold",
        badgeClassName: C.badge
      })
    })]
  })
}

function h(e) {
  let {
    userClanTag: t,
    userClanBadge: s,
    guildId: i,
    guildName: l,
    guildIcon: _,
    clan: I,
    userId: N
  } = e, g = (0, T.useCurrentUserAvailableClanIds)(), f = (0, r.useStateFromStores)([u.default], () => {
    var e;
    return (0, E.getUserClanData)(null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan).guildId
  }), h = n.useMemo(() => {
    if (i !== f) {
      if (g.has(i)) return () => {
        (0, o.openModal)(e => (0, a.jsx)(o.ConfirmModal, {
          ...e,
          header: A.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CTA,
          confirmText: A.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA,
          confirmButtonColor: o.Button.Colors.BRAND,
          cancelText: A.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CANCEL,
          onConfirm: async () => {
            await (0, c.adoptClanIdentity)(i, !0, d.default.PROFILE_POPOUT)
          },
          children: (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: A.default.Messages.CLAN_USER_PROFILE_USE_CLAN_TAG.format({
              guildName: l
            })
          })
        }))
      };
      if (null != I) return () => {
        (0, S.openClanApplyFlow)(i, I, {
          source: m.AnalyticsSections.USER_PROFILE,
          location: d.default.CLAN_TAG,
          tagUserId: N
        })
      }
    }
  }, [g, I, f, i, l, N]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Heading, {
      className: C.header,
      variant: "eyebrow",
      children: A.default.Messages.CLAN_USER_PROFILE_PRIMARY_CLAN
    }), (0, a.jsx)(O, {
      className: C.profileContainer,
      clanTag: t,
      clanBadge: s,
      onTagClick: h,
      guildName: l,
      guildId: i,
      guildIcon: _,
      guildIconSize: 40,
      memberCount: null == I ? void 0 : I.memberCount
    })]
  })
}

function R(e) {
  let {
    userId: t,
    wrapChildren: s
  } = e, {
    userClanTag: n,
    userClanBadge: i,
    guildId: l,
    guildName: r,
    guildIcon: o,
    clan: d
  } = (0, _.useUserSelectedClan)({
    userId: t
  });
  if (null == n || null == l || null == r) return null;
  let u = (0, a.jsx)(h, {
    userClanTag: n,
    userClanBadge: i,
    guildId: l,
    guildName: r,
    guildIcon: o,
    clan: d,
    userId: t
  });
  return null != s ? (0, a.jsx)(a.Fragment, {
    children: s(u)
  }) : u
}