"use strict";
n.d(t, {
  Z: function() {
    return w
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
  f = n(621853),
  S = n(652853),
  N = n(421486),
  A = n(138394),
  m = n(790711),
  O = n(248345),
  p = n(337125),
  R = n(19836),
  g = n(207570),
  C = n(77097),
  v = n(538564),
  L = n(489642),
  D = n(319300),
  M = n(591600),
  P = n(579729),
  y = n(186395),
  U = n(584045),
  b = n(981631),
  G = n(841719);

function w(e) {
  var t, n, s;
  let {
    activity: w,
    customStatusActivity: x,
    user: B,
    displayProfile: k,
    guild: V,
    guildMember: Z,
    channelId: H,
    onClose: F,
    setNote: Y = !1,
    canDM: j,
    hideNote: W = !1,
    showCopiableUsername: K = !1,
    analyticsParams: z
  } = e, q = (0, a.e7)([E.Z], () => E.Z.hidePersonalInformation), X = (0, a.e7)([f.Z], () => {
    var e;
    return null === (e = f.Z.getUserProfile(B.id)) || void 0 === e ? void 0 : e.application
  }), Q = (0, a.e7)([d.Z], () => d.Z.getChannel(H)), {
    theme: J
  } = (0, S.z)(), $ = r.useRef(null), [ee, et] = r.useState(!0), en = r.useCallback(() => {
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
  let ei = (0, a.e7)([c.default], () => c.default.getId()),
    er = B.id === ei,
    es = B.bot || er,
    {
      enabled: eo
    } = (0, h.qI)({
      autoTrackExposure: !0,
      location: u.Z.PROFILE_POPOUT,
      disable: es
    });
  if ((0, _.Z)(B.id)) return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(U.Z, {
      className: G.usernameSection,
      user: B,
      nickname: T.ZP.getName(B),
      pronouns: null
    }), (0, i.jsxs)(l.HeadingLevel, {
      children: [(0, i.jsx)(A.Z, {
        className: G.divider
      }), (0, i.jsx)(l.AdvancedScroller, {
        className: o()(G.scroller, {
          [G.scrollerSeparator]: !ee
        }),
        onScroll: en,
        ref: $,
        children: (0, i.jsx)(R.Z, {
          bio: null,
          hidePersonalInformation: !1,
          userId: B.id,
          lastSection: !0
        })
      })]
    })]
  });
  if (B.isSystemUser()) return (0, i.jsx)(U.Z, {
    user: B,
    nickname: T.ZP.getName(B),
    pronouns: null,
    className: G.usernameSection,
    lastSection: !0
  });
  if (B.isNonUserBot()) return (0, i.jsx)(U.Z, {
    user: B,
    nickname: null,
    pronouns: null,
    className: G.usernameSection,
    lastSection: !0
  });
  let ea = null !== (t = I.ZP.getNickname(null == V ? void 0 : V.id, H, B)) && void 0 !== t ? t : T.ZP.getName(B),
    el = {
      location: {
        page: b.ZY5.USER_POPOUT,
        section: b.jXE.USER_PROFILE
      }
    };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(U.Z, {
      className: G.usernameSection,
      user: B,
      nickname: ea,
      pronouns: null == k ? void 0 : k.pronouns,
      usernameIcon: B.hasAvatarForGuild(null == V ? void 0 : V.id) && (0, i.jsx)(m.Z, {
        user: B,
        nickname: ea
      }),
      shouldCopyOnClick: K
    }), (0, i.jsxs)(l.HeadingLevel, {
      children: [(0, i.jsx)(v.Z, {
        className: G.customStatusSection,
        customStatusActivity: x
      }), (0, i.jsx)(A.Z, {
        className: G.divider
      }), (0, i.jsxs)(l.AdvancedScroller, {
        className: o()(G.scroller, {
          [G.scrollerSeparator]: !ee
        }),
        onScroll: en,
        ref: $,
        children: [(0, i.jsx)(g.Z, {
          user: B,
          guildId: null == V ? void 0 : V.id
        }), (0, i.jsx)(R.Z, {
          isUsingGuildBio: null !== (n = null == k ? void 0 : k.isUsingGuildMemberBio()) && void 0 !== n && n,
          bio: null == k ? void 0 : k.bio,
          guild: V,
          hidePersonalInformation: q
        }), eo && (0, i.jsx)(N.ZP, {
          className: G.profileMutuals,
          user: B,
          onClose: F
        }), (0, i.jsx)(D.Z, {
          userId: B.id,
          guildId: null == V ? void 0 : V.id
        }), (0, i.jsx)(O.Z, {
          activity: w,
          user: B,
          guild: V,
          channelId: H,
          onClose: F,
          analyticsParams: (null == z ? void 0 : z.location) != null ? z : el
        }), (null == X ? void 0 : X.popularApplicationCommandIds) != null && null != Q ? (0, i.jsx)(P.Z, {
          applicationId: X.id,
          commandIds: X.popularApplicationCommandIds,
          channel: Q,
          guildId: null == V ? void 0 : V.id,
          onClick: F
        }) : null, (0, i.jsx)(p.Z, {
          user: B,
          guildId: null == V ? void 0 : V.id
        }), (0, i.jsx)(y.Z, {
          user: B,
          guild: V,
          guildMember: Z,
          showBorder: null !== (s = null == k ? void 0 : k.canEditThemes) && void 0 !== s && s
        }), (0, i.jsx)(C.Z, {
          userId: B.id,
          channelId: H,
          guild: V,
          onClose: F,
          theme: J
        }), !q && !W && (0, i.jsx)(M.Z, {
          user: B,
          setNote: Y,
          autoFocus: !j,
          lastSection: !j
        }), !B.isNonUserBot() && j && (0, i.jsx)(L.Z, {
          user: B,
          setNote: Y,
          canDM: j,
          onClose: F
        })]
      })]
    })]
  })
}