"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("446674"),
  o = n("77078"),
  u = n("373469"),
  d = n("42203"),
  c = n("824563"),
  f = n("102985"),
  m = n("387111"),
  p = n("158998"),
  h = n("713135"),
  E = n("765698"),
  g = n("906889"),
  S = n("10532"),
  C = n("648149"),
  T = n("915712"),
  v = n("261523"),
  I = n("369869"),
  _ = n("545590"),
  N = n("316095"),
  A = n("802279"),
  y = n("577172"),
  x = n("465215"),
  O = n("301998"),
  R = n("379657"),
  M = n("853780"),
  L = n("574191"),
  P = n("491250"),
  b = n("453649"),
  j = n("49111"),
  U = n("838133"),
  D = n("787678");

function k(e) {
  var t, n, a;
  let {
    activity: k,
    customStatusActivity: w,
    user: F,
    displayProfile: B,
    guild: G,
    guildMember: H,
    channelId: V,
    onClose: K,
    setNote: W = !1,
    canDM: Y,
    hideNote: z = !1,
    showCopiableUsername: Z = !1,
    analyticsParams: J
  } = e, q = (0, r.useStateFromStores)([f.default], () => f.default.hidePersonalInformation), X = (0, r.useStateFromStores)([h.default], () => {
    var e;
    return null === (e = h.default.getUserProfile(F.id)) || void 0 === e ? void 0 : e.application
  }), Q = (0, r.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(F.id)), $ = (0, r.useStateFromStores)([c.default], () => c.default.findActivity(F.id, e => e.type === j.ActivityTypes.HANG_STATUS)), ee = (0, b.useGetVoiceChannelInfoForVoiceActivitySection)(F.id, null == G ? void 0 : G.id), et = !Q && null != ee && null == $, {
    showVoiceActivityInProfile: en
  } = E.VoiceActivityProfileExperiment.useExperiment({
    location: "user popout"
  }, {
    autoTrackExposure: et
  }), el = (0, r.useStateFromStores)([d.default], () => d.default.getChannel(V)), {
    profileTheme: ei
  } = (0, g.default)(F, B), ea = i.useRef(null), [es, er] = i.useState(!0), eo = i.useCallback(() => {
    let {
      current: e
    } = ea;
    null != e && er(0 === e.getScrollerState().scrollTop)
  }, []);
  if (i.useLayoutEffect(() => {
      var e;
      let {
        current: t
      } = ea;
      null != t && (null === (e = t.getScrollerNode()) || void 0 === e || e.scrollTo({
        top: 0
      }))
    }, []), F.isSystemUser()) return null;
  if (F.isNonUserBot()) return (0, l.jsx)(P.default, {
    user: F,
    nickname: null,
    pronouns: null,
    className: U.usernameSection,
    lastSection: !0
  });
  let eu = null !== (t = m.default.getNickname(null == G ? void 0 : G.id, V, F)) && void 0 !== t ? t : p.default.getName(F),
    ed = {
      location: {
        page: j.AnalyticsPages.USER_POPOUT,
        section: j.AnalyticsSections.USER_PROFILE
      }
    };
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(P.default, {
      className: U.usernameSection,
      user: F,
      nickname: eu,
      pronouns: null == B ? void 0 : B.pronouns,
      usernameIcon: F.hasAvatarForGuild(null == G ? void 0 : G.id) && (0, l.jsx)(C.default, {
        user: F,
        nickname: eu
      }),
      shouldCopyOnClick: Z
    }), (0, l.jsxs)(o.HeadingLevel, {
      children: [(0, l.jsx)(A.default, {
        className: U.customStatusSection,
        customStatusActivity: w
      }), (0, l.jsx)(S.default, {
        className: U.divider
      }), (0, l.jsxs)(o.AdvancedScroller, {
        className: s(U.scroller, {
          [U.scrollerSeparator]: !es
        }),
        onScroll: eo,
        ref: ea,
        children: [(0, l.jsx)(_.default, {
          user: F,
          guildId: null == G ? void 0 : G.id
        }), (0, l.jsx)(I.default, {
          isUsingGuildBio: null !== (n = null == B ? void 0 : B.isUsingGuildMemberBio()) && void 0 !== n && n,
          bio: null == B ? void 0 : B.bio,
          guild: G,
          hidePersonalInformation: q
        }), (0, l.jsx)(x.default, {
          userId: F.id,
          guild: G,
          guildMember: H
        }), en && et && (0, l.jsx)(b.default, {
          voiceChannel: ee.voiceChannel,
          voiceGuild: ee.voiceGuild,
          onClose: K,
          color: D.buttonColor
        }), (0, l.jsx)(T.default, {
          activity: k,
          user: F,
          guild: G,
          channelId: V,
          onClose: K,
          analyticsParams: (null == J ? void 0 : J.location) != null ? J : ed
        }), (null == X ? void 0 : X.popularApplicationCommandIds) != null && null != el ? (0, l.jsx)(R.default, {
          applicationId: X.id,
          commandIds: X.popularApplicationCommandIds,
          channel: el,
          guildId: null == G ? void 0 : G.id,
          onClick: K
        }) : null, (0, l.jsx)(v.default, {
          user: F,
          guildId: null == G ? void 0 : G.id
        }), (0, l.jsx)(L.default, {
          user: F,
          guild: G,
          guildMember: H,
          showBorder: null !== (a = null == B ? void 0 : B.canEditThemes) && void 0 !== a && a
        }), (0, l.jsx)(N.default, {
          userId: F.id,
          channelId: V,
          guild: G,
          onClose: K,
          theme: ei
        }), null != X && void 0 !== V && (0, l.jsx)(M.default, {
          channelId: V,
          applicationId: X.id
        }), (0, l.jsx)(O.default, {
          user: F,
          setNote: W,
          autoFocus: !Y,
          lastSection: !Y,
          hideNote: q || z
        }), (0, l.jsx)(y.default, {
          user: F,
          setNote: W,
          canDM: Y,
          onClose: K
        })]
      })]
    })]
  })
}