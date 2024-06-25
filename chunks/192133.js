"use strict";
n.d(t, {
  Z: function() {
    return B
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(100527),
  _ = n(580552),
  c = n(314897),
  d = n(592125),
  E = n(246946),
  I = n(5192),
  T = n(51144),
  h = n(342656),
  S = n(621853),
  f = n(652853),
  N = n(421486),
  A = n(138394),
  m = n(790711),
  O = n(248345),
  R = n(337125),
  p = n(19836),
  g = n(207570),
  C = n(77097),
  v = n(538564),
  L = n(489642),
  D = n(319300),
  M = n(591600),
  P = n(579729),
  y = n(302316),
  U = n(186395),
  b = n(584045),
  G = n(981631),
  w = n(841719);

function B(e) {
  var t, n, s;
  let {
    activity: B,
    customStatusActivity: x,
    user: k,
    displayProfile: V,
    guild: Z,
    guildMember: H,
    channelId: F,
    onClose: Y,
    setNote: j = !1,
    canDM: W,
    hideNote: K = !1,
    showCopiableUsername: z = !1,
    analyticsParams: q
  } = e, X = (0, a.e7)([E.Z], () => E.Z.hidePersonalInformation), Q = (0, a.e7)([S.Z], () => {
    var e;
    return null === (e = S.Z.getUserProfile(k.id)) || void 0 === e ? void 0 : e.application
  }), J = (0, a.e7)([d.Z], () => d.Z.getChannel(F)), {
    theme: $
  } = (0, f.z)(), ee = r.useRef(null), [et, en] = r.useState(!0), ei = r.useCallback(() => {
    let {
      current: e
    } = ee;
    null != e && en(0 === e.getScrollerState().scrollTop)
  }, []);
  r.useLayoutEffect(() => {
    var e;
    let {
      current: t
    } = ee;
    null != t && (null === (e = t.getScrollerNode()) || void 0 === e || e.scrollTo({
      top: 0
    }))
  }, []);
  let er = (0, a.e7)([c.default], () => c.default.getId()),
    es = k.id === er,
    eo = k.bot || es,
    {
      enabled: ea
    } = (0, h.qI)({
      autoTrackExposure: !0,
      location: u.Z.PROFILE_POPOUT,
      disable: eo
    });
  if ((0, _.Z)(k.id)) return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(b.Z, {
      className: w.usernameSection,
      user: k,
      nickname: T.ZP.getName(k),
      pronouns: null
    }), (0, i.jsxs)(l.HeadingLevel, {
      children: [(0, i.jsx)(A.Z, {
        className: w.divider
      }), (0, i.jsx)(l.AdvancedScroller, {
        className: o()(w.scroller, {
          [w.scrollerSeparator]: !et
        }),
        onScroll: ei,
        ref: ee,
        children: (0, i.jsx)(p.Z, {
          bio: null,
          hidePersonalInformation: !1,
          userId: k.id,
          lastSection: !0
        })
      })]
    })]
  });
  if (k.isSystemUser()) return (0, i.jsx)(b.Z, {
    user: k,
    nickname: T.ZP.getName(k),
    pronouns: null,
    className: w.usernameSection,
    lastSection: !0
  });
  if (k.isNonUserBot()) return (0, i.jsx)(b.Z, {
    user: k,
    nickname: null,
    pronouns: null,
    className: w.usernameSection,
    lastSection: !0
  });
  let el = null !== (t = I.ZP.getNickname(null == Z ? void 0 : Z.id, F, k)) && void 0 !== t ? t : T.ZP.getName(k),
    eu = {
      location: {
        page: G.ZY5.USER_POPOUT,
        section: G.jXE.USER_PROFILE
      }
    };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(b.Z, {
      className: w.usernameSection,
      user: k,
      nickname: el,
      pronouns: null == V ? void 0 : V.pronouns,
      usernameIcon: k.hasAvatarForGuild(null == Z ? void 0 : Z.id) && (0, i.jsx)(m.Z, {
        user: k,
        nickname: el
      }),
      shouldCopyOnClick: z
    }), (0, i.jsxs)(l.HeadingLevel, {
      children: [(0, i.jsx)(v.Z, {
        className: w.customStatusSection,
        customStatusActivity: x
      }), (0, i.jsx)(A.Z, {
        className: w.divider
      }), (0, i.jsxs)(l.AdvancedScroller, {
        className: o()(w.scroller, {
          [w.scrollerSeparator]: !et
        }),
        onScroll: ei,
        ref: ee,
        children: [(0, i.jsx)(g.Z, {
          user: k,
          guildId: null == Z ? void 0 : Z.id
        }), (0, i.jsx)(p.Z, {
          isUsingGuildBio: null !== (n = null == V ? void 0 : V.isUsingGuildMemberBio()) && void 0 !== n && n,
          bio: null == V ? void 0 : V.bio,
          guild: Z,
          hidePersonalInformation: X
        }), ea && (0, i.jsx)(N.ZP, {
          className: w.profileMutuals,
          user: k,
          onClose: Y
        }), (0, i.jsx)(D.Z, {
          userId: k.id,
          guildId: null == Z ? void 0 : Z.id
        }), (0, i.jsx)(O.Z, {
          activity: B,
          user: k,
          guild: Z,
          channelId: F,
          onClose: Y,
          analyticsParams: (null == q ? void 0 : q.location) != null ? q : eu
        }), (null == Q ? void 0 : Q.popularApplicationCommandIds) != null && null != J ? (0, i.jsx)(P.Z, {
          applicationId: Q.id,
          commandIds: Q.popularApplicationCommandIds,
          channel: J,
          guildId: null == Z ? void 0 : Z.id,
          onClick: Y
        }) : null, (0, i.jsx)(R.Z, {
          user: k,
          guildId: null == Z ? void 0 : Z.id
        }), (0, i.jsx)(U.Z, {
          user: k,
          guild: Z,
          guildMember: H,
          showBorder: null !== (s = null == V ? void 0 : V.canEditThemes) && void 0 !== s && s
        }), (0, i.jsx)(C.Z, {
          userId: k.id,
          channelId: F,
          guild: Z,
          onClose: Y,
          theme: $
        }), null != Q && void 0 !== F && (0, i.jsx)(y.Z, {
          channelId: F,
          applicationId: Q.id
        }), !X && !K && (0, i.jsx)(M.Z, {
          user: k,
          setNote: j,
          autoFocus: !W,
          lastSection: !W
        }), !k.isNonUserBot() && W && (0, i.jsx)(L.Z, {
          user: k,
          setNote: j,
          canDM: W,
          onClose: Y
        })]
      })]
    })]
  })
}