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
  A = n(421486),
  N = n(138394),
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
  y = n(186395),
  U = n(584045),
  b = n(981631),
  G = n(841719);

function w(e) {
  var t, n, s;
  let {
    activity: w,
    customStatusActivity: B,
    user: x,
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
    return null === (e = f.Z.getUserProfile(x.id)) || void 0 === e ? void 0 : e.application
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
    er = x.id === ei,
    es = x.bot || er,
    {
      enabled: eo
    } = (0, h.qI)({
      autoTrackExposure: !0,
      location: u.Z.PROFILE_POPOUT,
      disable: es
    });
  if ((0, _.Z)(x.id)) return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(U.Z, {
      className: G.usernameSection,
      user: x,
      nickname: T.ZP.getName(x),
      pronouns: null
    }), (0, i.jsxs)(l.HeadingLevel, {
      children: [(0, i.jsx)(N.Z, {
        className: G.divider
      }), (0, i.jsx)(l.AdvancedScroller, {
        className: o()(G.scroller, {
          [G.scrollerSeparator]: !ee
        }),
        onScroll: en,
        ref: $,
        children: (0, i.jsx)(p.Z, {
          bio: null,
          hidePersonalInformation: !1,
          userId: x.id,
          lastSection: !0
        })
      })]
    })]
  });
  if (x.isSystemUser()) return (0, i.jsx)(U.Z, {
    user: x,
    nickname: T.ZP.getName(x),
    pronouns: null,
    className: G.usernameSection,
    lastSection: !0
  });
  if (x.isNonUserBot()) return (0, i.jsx)(U.Z, {
    user: x,
    nickname: null,
    pronouns: null,
    className: G.usernameSection,
    lastSection: !0
  });
  let ea = null !== (t = I.ZP.getNickname(null == V ? void 0 : V.id, H, x)) && void 0 !== t ? t : T.ZP.getName(x),
    el = {
      location: {
        page: b.ZY5.USER_POPOUT,
        section: b.jXE.USER_PROFILE
      }
    };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(U.Z, {
      className: G.usernameSection,
      user: x,
      nickname: ea,
      pronouns: null == k ? void 0 : k.pronouns,
      usernameIcon: x.hasAvatarForGuild(null == V ? void 0 : V.id) && (0, i.jsx)(m.Z, {
        user: x,
        nickname: ea
      }),
      shouldCopyOnClick: K
    }), (0, i.jsxs)(l.HeadingLevel, {
      children: [(0, i.jsx)(v.Z, {
        className: G.customStatusSection,
        customStatusActivity: B
      }), (0, i.jsx)(N.Z, {
        className: G.divider
      }), (0, i.jsxs)(l.AdvancedScroller, {
        className: o()(G.scroller, {
          [G.scrollerSeparator]: !ee
        }),
        onScroll: en,
        ref: $,
        children: [(0, i.jsx)(g.Z, {
          user: x,
          guildId: null == V ? void 0 : V.id
        }), (0, i.jsx)(p.Z, {
          isUsingGuildBio: null !== (n = null == k ? void 0 : k.isUsingGuildMemberBio()) && void 0 !== n && n,
          bio: null == k ? void 0 : k.bio,
          guild: V,
          hidePersonalInformation: q
        }), eo && (0, i.jsx)(A.ZP, {
          className: G.profileMutuals,
          user: x,
          onClose: F
        }), (0, i.jsx)(D.Z, {
          userId: x.id,
          guildId: null == V ? void 0 : V.id
        }), (0, i.jsx)(O.Z, {
          activity: w,
          user: x,
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
        }) : null, (0, i.jsx)(R.Z, {
          user: x,
          guildId: null == V ? void 0 : V.id
        }), (0, i.jsx)(y.Z, {
          user: x,
          guild: V,
          guildMember: Z,
          showBorder: null !== (s = null == k ? void 0 : k.canEditThemes) && void 0 !== s && s
        }), (0, i.jsx)(C.Z, {
          userId: x.id,
          channelId: H,
          guild: V,
          onClose: F,
          theme: J
        }), !q && !W && (0, i.jsx)(M.Z, {
          user: x,
          setNote: Y,
          autoFocus: !j,
          lastSection: !j
        }), !x.isNonUserBot() && j && (0, i.jsx)(L.Z, {
          user: x,
          setNote: Y,
          canDM: j,
          onClose: F
        })]
      })]
    })]
  })
}