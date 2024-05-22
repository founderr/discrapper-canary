"use strict";
s.r(t), s.d(t, {
  UserProfileClanContainer: function() {
    return x
  },
  UserProfileClanRow: function() {
    return A
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
  c = s("768581"),
  S = s("931240"),
  E = s("905362"),
  T = s("353093"),
  _ = s("891728"),
  f = s("438365"),
  m = s("114487"),
  g = s("219039"),
  I = s("979264"),
  N = s("308083"),
  h = s("981631"),
  C = s("689938"),
  p = s("407020");

function A(e) {
  let {
    className: t,
    clanTag: s,
    clanBadge: l,
    onTagClick: r,
    guildId: d,
    guildName: u,
    guildIcon: S,
    guildIconSize: E,
    memberCount: _
  } = e, f = n.useMemo(() => c.default.getGuildIconURL({
    id: d,
    icon: S,
    size: E,
    canAnimate: !0
  }), [d, S, E]), h = n.useRef(null), [C, A] = n.useState(!1);
  n.useEffect(() => {
    let e = h.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && A(e.offsetWidth < e.scrollWidth)
  }, []);
  let O = (0, T.getClanBadgeUrl)(d, l, N.ClanTagBadgeSize.SIZE_16);
  return (0, a.jsxs)("div", {
    className: i()(p.container, t),
    children: [(0, a.jsxs)("div", {
      className: p.guildPrefixContainer,
      children: [(0, a.jsx)(m.ClanGuildIconSimple, {
        guildName: u,
        guildIconURL: f,
        iconSize: E,
        className: p.guildPrefixIcon
      }), (0, a.jsxs)("div", {
        className: p.details,
        children: [(0, a.jsx)(o.Tooltip, {
          text: u,
          color: o.Tooltip.Colors.PRIMARY,
          shouldShow: C,
          children: e => (0, a.jsx)("span", {
            ref: h,
            ...e,
            className: p.guildName,
            children: u
          })
        }), null != _ && (0, a.jsx)(g.default, {
          count: _
        })]
      })]
    }), (0, a.jsx)("div", {
      className: p.tagContainer,
      children: (0, a.jsx)(I.BaseClanTagChiplet, {
        className: p.tag,
        clanTag: s,
        clanBadge: O,
        onClick: r,
        badgeSize: N.ClanTagBadgeSize.SIZE_16,
        textColor: "interactive-normal",
        textVariant: "text-sm/medium",
        badgeClassName: p.badge
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
    guildIcon: c,
    clan: f,
    userId: m
  } = e, g = (0, _.useCurrentUserAvailableClanIds)(), I = (0, r.useStateFromStores)([u.default], () => {
    var e;
    return (0, T.getUserClanData)(null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan).guildId
  }), N = n.useMemo(() => {
    if (l !== I) {
      if (g.has(l)) return () => {
        (0, o.openModal)(e => (0, a.jsx)(o.ConfirmModal, {
          ...e,
          header: C.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CTA,
          confirmText: C.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA,
          confirmButtonColor: o.Button.Colors.BRAND,
          cancelText: C.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CANCEL,
          onConfirm: async () => {
            await (0, S.adoptClanIdentity)(l, !0, d.default.PROFILE_POPOUT)
          },
          children: (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: C.default.Messages.CLAN_USER_PROFILE_USE_CLAN_TAG.format({
              guildName: i
            })
          })
        }))
      };
      if (null != f) return () => {
        (0, E.openClanApplyFlow)(l, f, {
          source: h.AnalyticsSections.USER_PROFILE,
          location: d.default.CLAN_TAG,
          tagUserId: m
        })
      }
    }
  }, [g, f, I, l, i, m]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Heading, {
      className: p.header,
      variant: "eyebrow",
      children: C.default.Messages.CLAN_USER_PROFILE_PRIMARY_CLAN
    }), (0, a.jsx)(A, {
      className: p.profileContainer,
      clanTag: t,
      clanBadge: s,
      onTagClick: N,
      guildName: i,
      guildId: l,
      guildIcon: c,
      guildIconSize: 40,
      memberCount: null == f ? void 0 : f.memberCount
    })]
  })
}

function x(e) {
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
  } = (0, f.useUserSelectedClan)({
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