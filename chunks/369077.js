"use strict";
s.r(t), s.d(t, {
  UserProfileClanContainer: function() {
    return p
  },
  UserProfileClanRow: function() {
    return O
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
  f = s("114487"),
  m = s("219039"),
  I = s("979264"),
  g = s("308083"),
  N = s("981631"),
  h = s("689938"),
  C = s("407020");

function O(e) {
  let {
    className: t,
    clanTag: s,
    clanBadge: l,
    onTagClick: r,
    guildId: d,
    guildName: u,
    guildIcon: c,
    guildIconSize: S,
    memberCount: T
  } = e, _ = n.useRef(null), [N, h] = n.useState(!1);
  n.useEffect(() => {
    let e = _.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && h(e.offsetWidth < e.scrollWidth)
  }, []);
  let O = (0, E.getClanBadgeUrl)(d, l, g.ClanTagBadgeSize.SIZE_16);
  return (0, a.jsxs)("div", {
    className: i()(C.container, t),
    children: [(0, a.jsxs)("div", {
      className: C.guildPrefixContainer,
      children: [(0, a.jsx)(f.ClanGuildIconSimple, {
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
          shouldShow: N,
          children: e => (0, a.jsx)("span", {
            ref: _,
            ...e,
            className: C.guildName,
            children: u
          })
        }), null != T && (0, a.jsx)(m.default, {
          count: T
        })]
      })]
    }), (0, a.jsx)("div", {
      className: C.tagContainer,
      children: (0, a.jsx)(I.BaseClanTagChiplet, {
        className: C.tag,
        clanTag: s,
        clanBadge: O,
        onClick: r,
        badgeSize: g.ClanTagBadgeSize.SIZE_16,
        textColor: "interactive-normal",
        textVariant: "text-sm/medium",
        badgeClassName: C.badge
      })
    })]
  })
}

function A(e) {
  let {
    userClanTag: t,
    userClanBadge: s,
    guildId: l,
    guildName: i,
    guildIcon: _,
    clan: f,
    userId: m
  } = e, I = (0, T.useCurrentUserAvailableClanIds)(), g = (0, r.useStateFromStores)([u.default], () => {
    var e;
    return (0, E.getUserClanData)(null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan).guildId
  }), A = n.useMemo(() => {
    if (l !== g) {
      if (I.has(l)) return () => {
        (0, o.openModal)(e => (0, a.jsx)(o.ConfirmModal, {
          ...e,
          header: h.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CTA,
          confirmText: h.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA,
          confirmButtonColor: o.Button.Colors.BRAND,
          cancelText: h.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CANCEL,
          onConfirm: async () => {
            await (0, c.adoptClanIdentity)(l, !0, d.default.PROFILE_POPOUT)
          },
          children: (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: h.default.Messages.CLAN_USER_PROFILE_USE_CLAN_TAG.format({
              guildName: i
            })
          })
        }))
      };
      if (null != f) return () => {
        (0, S.openClanApplyFlow)(l, f, {
          source: N.AnalyticsSections.USER_PROFILE,
          location: d.default.CLAN_TAG,
          tagUserId: m
        })
      }
    }
  }, [I, f, g, l, i, m]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Heading, {
      className: C.header,
      variant: "eyebrow",
      children: h.default.Messages.CLAN_USER_PROFILE_PRIMARY_CLAN
    }), (0, a.jsx)(O, {
      className: C.profileContainer,
      clanTag: t,
      clanBadge: s,
      onTagClick: A,
      guildName: i,
      guildId: l,
      guildIcon: _,
      guildIconSize: 40,
      memberCount: null == f ? void 0 : f.memberCount
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
  let u = (0, a.jsx)(A, {
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