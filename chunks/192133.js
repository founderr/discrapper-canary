"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("442837"),
  l = n("481060"),
  u = n("100527"),
  d = n("314897"),
  _ = n("592125"),
  c = n("246946"),
  E = n("5192"),
  I = n("51144"),
  T = n("342656"),
  f = n("621853"),
  S = n("652853"),
  h = n("421486"),
  A = n("138394"),
  m = n("790711"),
  N = n("248345"),
  p = n("337125"),
  O = n("19836"),
  C = n("207570"),
  R = n("77097"),
  g = n("538564"),
  L = n("489642"),
  v = n("319300"),
  D = n("591600"),
  M = n("579729"),
  y = n("302316"),
  P = n("186395"),
  U = n("584045"),
  b = n("981631"),
  G = n("383630");

function w(e) {
  var t, n, s;
  let {
    activity: w,
    customStatusActivity: k,
    user: B,
    displayProfile: V,
    guild: x,
    guildMember: F,
    channelId: H,
    onClose: Y,
    setNote: j = !1,
    canDM: W,
    hideNote: K = !1,
    showCopiableUsername: z = !1,
    analyticsParams: Z
  } = e, X = (0, o.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), Q = (0, o.useStateFromStores)([f.default], () => {
    var e;
    return null === (e = f.default.getUserProfile(B.id)) || void 0 === e ? void 0 : e.application
  }), q = (0, o.useStateFromStores)([_.default], () => _.default.getChannel(H)), {
    theme: J
  } = (0, S.useUserProfileThemeContext)(), $ = r.useRef(null), [ee, et] = r.useState(!0), en = r.useCallback(() => {
    let {
      current: e
    } = $;
    null != e && et(0 === e.getScrollerState().scrollTop)
  }, []);
  r.useLayoutEffect(() => {
    var e;
    let {
      current: t
    } = $;
    null != t && (null === (e = t.getScrollerNode()) || void 0 === e || e.scrollTo({
      top: 0
    }))
  }, []);
  let ei = (0, o.useStateFromStores)([d.default], () => d.default.getId()),
    er = B.id === ei,
    es = B.bot || er,
    {
      enabled: ea
    } = (0, T.useProfileMutualsExperiment)({
      autoTrackExposure: !0,
      location: u.default.PROFILE_POPOUT,
      disable: es
    });
  if (B.isSystemUser()) return null;
  if (B.isNonUserBot()) return (0, i.jsx)(U.default, {
    user: B,
    nickname: null,
    pronouns: null,
    className: G.usernameSection,
    lastSection: !0
  });
  let eo = null !== (t = E.default.getNickname(null == x ? void 0 : x.id, H, B)) && void 0 !== t ? t : I.default.getName(B),
    el = {
      location: {
        page: b.AnalyticsPages.USER_POPOUT,
        section: b.AnalyticsSections.USER_PROFILE
      }
    };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(U.default, {
      className: G.usernameSection,
      user: B,
      nickname: eo,
      pronouns: null == V ? void 0 : V.pronouns,
      usernameIcon: B.hasAvatarForGuild(null == x ? void 0 : x.id) && (0, i.jsx)(m.default, {
        user: B,
        nickname: eo
      }),
      shouldCopyOnClick: z
    }), (0, i.jsxs)(l.HeadingLevel, {
      children: [(0, i.jsx)(g.default, {
        className: G.customStatusSection,
        customStatusActivity: k
      }), (0, i.jsx)(A.default, {
        className: G.divider
      }), (0, i.jsxs)(l.AdvancedScroller, {
        className: a()(G.scroller, {
          [G.scrollerSeparator]: !ee
        }),
        onScroll: en,
        ref: $,
        children: [(0, i.jsx)(C.default, {
          user: B,
          guildId: null == x ? void 0 : x.id
        }), (0, i.jsx)(O.default, {
          isUsingGuildBio: null !== (n = null == V ? void 0 : V.isUsingGuildMemberBio()) && void 0 !== n && n,
          bio: null == V ? void 0 : V.bio,
          guild: x,
          hidePersonalInformation: X
        }), ea && (0, i.jsx)(h.default, {
          className: G.profileMutuals,
          user: B,
          onClose: Y
        }), (0, i.jsx)(v.default, {
          userId: B.id,
          guildId: null == x ? void 0 : x.id
        }), (0, i.jsx)(N.default, {
          activity: w,
          user: B,
          guild: x,
          channelId: H,
          onClose: Y,
          analyticsParams: (null == Z ? void 0 : Z.location) != null ? Z : el
        }), (null == Q ? void 0 : Q.popularApplicationCommandIds) != null && null != q ? (0, i.jsx)(M.default, {
          applicationId: Q.id,
          commandIds: Q.popularApplicationCommandIds,
          channel: q,
          guildId: null == x ? void 0 : x.id,
          onClick: Y
        }) : null, (0, i.jsx)(p.default, {
          user: B,
          guildId: null == x ? void 0 : x.id
        }), (0, i.jsx)(P.default, {
          user: B,
          guild: x,
          guildMember: F,
          showBorder: null !== (s = null == V ? void 0 : V.canEditThemes) && void 0 !== s && s
        }), (0, i.jsx)(R.default, {
          userId: B.id,
          channelId: H,
          guild: x,
          onClose: Y,
          theme: J
        }), null != Q && void 0 !== H && (0, i.jsx)(y.default, {
          channelId: H,
          applicationId: Q.id
        }), !X && !K && (0, i.jsx)(D.default, {
          user: B,
          setNote: j,
          autoFocus: !W,
          lastSection: !W
        }), !B.isNonUserBot() && W && (0, i.jsx)(L.default, {
          user: B,
          setNote: j,
          canDM: W,
          onClose: Y
        })]
      })]
    })]
  })
}