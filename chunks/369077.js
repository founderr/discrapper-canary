"use strict";
t.r(a), t.d(a, {
  UserProfileClanContainer: function() {
    return U
  },
  UserProfileClanRow: function() {
    return x
  },
  UserProfileClanSection: function() {
    return N
  }
}), t("47120");
var l = t("735250"),
  n = t("470079"),
  i = t("120356"),
  r = t.n(i),
  s = t("442837"),
  o = t("481060");
t("502762");
var u = t("659101"),
  d = t("594174"),
  c = t("768581"),
  f = t("931240"),
  m = t("353093"),
  v = t("891728"),
  g = t("438365"),
  h = t("114487"),
  S = t("219039"),
  C = t("979264"),
  p = t("308083"),
  I = t("689938"),
  A = t("407020");

function x(e) {
  let {
    className: a,
    userClanTag: t,
    userClanBadge: i,
    onTagClick: s,
    guildId: u,
    guildName: d,
    guildIcon: f,
    guildIconSize: v,
    memberCount: g
  } = e, I = n.useMemo(() => c.default.getGuildIconURL({
    id: u,
    icon: f,
    size: v,
    canAnimate: !0
  }), [u, f, v]), x = n.useRef(null), [T, U] = n.useState(!1);
  n.useEffect(() => {
    let e = x.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && U(e.offsetWidth < e.scrollWidth)
  }, []);
  let N = (0, m.getClanBadgeUrl)(u, i, p.ClanTagBadgeSize.SIZE_16);
  return (0, l.jsxs)("div", {
    className: r()(A.container, a),
    children: [(0, l.jsx)(h.ClanGuildIconSimple, {
      className: A.icon,
      guildName: d,
      guildIconURL: I,
      iconSize: v
    }), (0, l.jsxs)("div", {
      className: A.details,
      children: [(0, l.jsx)(o.Tooltip, {
        text: d,
        color: o.Tooltip.Colors.PRIMARY,
        shouldShow: T,
        children: e => (0, l.jsx)("span", {
          ref: x,
          ...e,
          className: A.guildName,
          children: d
        })
      }), null != g && (0, l.jsx)(S.default, {
        count: g
      })]
    }), (0, l.jsx)("div", {
      className: A.tagContainer,
      children: (0, l.jsx)(C.BaseClanTagChiplet, {
        className: A.tag,
        clanTag: t,
        clanBadge: N,
        onClick: s,
        badgeSize: p.ClanTagBadgeSize.SIZE_16,
        textColor: "interactive-normal",
        textVariant: "text-sm/medium"
      })
    })]
  })
}

function T(e) {
  let {
    userClanTag: a,
    userClanBadge: i,
    guildId: r,
    guildName: u,
    guildIcon: c,
    clan: g
  } = e, h = (0, v.useCurrentUserAvailableClanIds)(), S = (0, s.useStateFromStores)([d.default], () => {
    var e;
    return (0, m.getUserClanData)(null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan).guildId
  }), C = n.useMemo(() => {
    if (r !== S) {
      if (h.has(r)) return () => {
        (0, o.openModal)(e => (0, l.jsx)(o.ConfirmModal, {
          ...e,
          header: I.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CTA,
          confirmText: I.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA,
          confirmButtonColor: o.Button.Colors.BRAND,
          cancelText: I.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CANCEL,
          onConfirm: async () => {
            await (0, f.adoptClanIdentity)(r, !0)
          },
          children: (0, l.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: I.default.Messages.CLAN_USER_PROFILE_USE_CLAN_TAG.format({
              guildName: u
            })
          })
        }))
      };
      if (null != g) return () => (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("80026"), t.e("18482")]).then(t.bind(t, "767593"));
        return a => (0, l.jsx)(e, {
          ...a,
          clan: g
        })
      })
    }
  }, [h, g, S, r, u]);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.Heading, {
      className: A.header,
      variant: "eyebrow",
      children: I.default.Messages.CLAN_USER_PROFILE_PRIMARY_CLAN
    }), (0, l.jsx)(x, {
      className: A.profileContainer,
      userClanTag: a,
      userClanBadge: i,
      onTagClick: C,
      guildName: u,
      guildId: r,
      guildIcon: c,
      guildIconSize: 40,
      memberCount: null == g ? void 0 : g.memberCount
    })]
  })
}

function U(e) {
  let {
    userId: a,
    wrapChildren: t
  } = e, {
    userClanTag: n,
    userClanBadge: i,
    guildId: r,
    guildName: s,
    guildIcon: o,
    clan: u
  } = (0, g.useUserSelectedClan)({
    userId: a
  });
  if (null == n || null == r || null == s) return null;
  let d = (0, l.jsx)(T, {
    userClanTag: n,
    userClanBadge: i,
    guildId: r,
    guildName: s,
    guildIcon: o,
    clan: u
  });
  return null != t ? (0, l.jsx)(l.Fragment, {
    children: t(d)
  }) : d
}

function N(e) {
  let {
    userId: a
  } = e, t = n.useCallback(e => (0, l.jsx)(u.default, {
    children: e
  }), []);
  return (0, l.jsx)(U, {
    userId: a,
    wrapChildren: t
  })
}