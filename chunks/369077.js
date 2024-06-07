"use strict";
s.r(t), s.d(t, {
  UserProfileClanContainer: function() {
    return p
  },
  UserProfileClanRow: function() {
    return h
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
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
  C = s("689938"),
  A = s("407020");

function h(e) {
  let {
    className: t,
    clanTag: s,
    clanBadge: l,
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
    className: i()(A.container, t),
    children: [(0, a.jsxs)("div", {
      className: A.guildPrefixContainer,
      children: [(0, a.jsx)(I.ClanGuildIconSimple, {
        guildId: d,
        guildName: u,
        guildIcon: c,
        iconSize: S,
        className: A.guildPrefixIcon,
        animate: !1
      }), (0, a.jsxs)("div", {
        className: A.details,
        children: [(0, a.jsx)(o.Tooltip, {
          text: u,
          color: o.Tooltip.Colors.PRIMARY,
          shouldShow: _,
          children: e => (0, a.jsx)("span", {
            ref: T,
            ...e,
            className: A.guildName,
            children: u
          })
        }), null != E && (0, a.jsx)(N.default, {
          count: E
        })]
      })]
    }), (0, a.jsx)("div", {
      className: A.tagContainer,
      children: (0, a.jsx)(g.BaseClanTagChiplet, {
        guildId: d,
        className: A.tag,
        clanTag: s,
        clanBadge: l,
        onClick: r,
        badgeSize: f.ClanTagBadgeSize.SIZE_16,
        textColor: "interactive-normal",
        textVariant: "text-sm/medium",
        badgeClassName: A.badge
      })
    })]
  })
}

function O(e) {
  let {
    userClanTag: t,
    userClanBadge: s,
    guildId: l,
    guildName: i,
    guildIcon: _,
    clan: I,
    userId: N
  } = e, g = (0, T.useCurrentUserAvailableClanIds)(), f = (0, r.useStateFromStores)([u.default], () => {
    var e;
    return (0, E.getUserClanData)(null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan).guildId
  }), O = n.useMemo(() => {
    if (l !== f) {
      if (g.has(l)) return () => {
        (0, o.openModal)(e => (0, a.jsx)(o.ConfirmModal, {
          ...e,
          header: C.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CTA,
          confirmText: C.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA,
          confirmButtonColor: o.Button.Colors.BRAND,
          cancelText: C.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CANCEL,
          onConfirm: async () => {
            await (0, c.adoptClanIdentity)(l, !0, d.default.PROFILE_POPOUT)
          },
          children: (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: C.default.Messages.CLAN_USER_PROFILE_USE_CLAN_TAG.format({
              guildName: i
            })
          })
        }))
      };
      if (null != I) return () => {
        (0, S.openClanApplyFlow)(l, I, {
          source: m.AnalyticsSections.USER_PROFILE,
          location: d.default.CLAN_TAG,
          tagUserId: N
        })
      }
    }
  }, [g, I, f, l, i, N]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Heading, {
      className: A.header,
      variant: "eyebrow",
      children: C.default.Messages.CLAN_USER_PROFILE_PRIMARY_CLAN
    }), (0, a.jsx)(h, {
      className: A.profileContainer,
      clanTag: t,
      clanBadge: s,
      onTagClick: O,
      guildName: i,
      guildId: l,
      guildIcon: _,
      guildIconSize: 40,
      memberCount: null == I ? void 0 : I.memberCount
    })]
  })
}

function p(e) {
  let {
    userId: t,
    wrapChildren: s
  } = e, {
    userClanTag: n,
    userClanBadge: l,
    guildId: i,
    guildName: r,
    guildIcon: o,
    clan: d
  } = (0, _.useUserSelectedClan)({
    userId: t
  });
  if (null == n || null == i || null == r) return null;
  let u = (0, a.jsx)(O, {
    userClanTag: n,
    userClanBadge: l,
    guildId: i,
    guildName: r,
    guildIcon: o,
    clan: d,
    userId: t
  });
  return null != s ? (0, a.jsx)(a.Fragment, {
    children: s(u)
  }) : u
}