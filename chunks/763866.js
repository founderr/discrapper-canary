"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
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
  c = n("102985"),
  f = n("387111"),
  p = n("158998"),
  m = n("713135"),
  h = n("765698"),
  E = n("906889"),
  g = n("10532"),
  S = n("648149"),
  C = n("915712"),
  T = n("261523"),
  v = n("369869"),
  I = n("545590"),
  _ = n("316095"),
  y = n("802279"),
  A = n("577172"),
  N = n("465215"),
  x = n("301998"),
  O = n("379657"),
  R = n("853780"),
  M = n("574191"),
  L = n("491250"),
  P = n("453649"),
  b = n("956330"),
  j = n("477691");

function U(e) {
  var t, n, a;
  let {
    activity: U,
    customStatusActivity: D,
    user: k,
    displayProfile: w,
    guild: F,
    guildMember: G,
    channelId: B,
    onClose: H,
    setNote: V = !1,
    canDM: K,
    hideNote: W = !1,
    showCopiableUsername: Y = !1
  } = e, z = (0, r.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), J = (0, r.useStateFromStores)([m.default], () => {
    var e;
    return null === (e = m.default.getUserProfile(k.id)) || void 0 === e ? void 0 : e.application
  }), q = (0, r.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(k.id)), Z = (0, P.useGetVoiceChannelInfoForVoiceActivitySection)(k.id, null == F ? void 0 : F.id), Q = !q && null != Z, {
    showVoiceActivityInProfile: X
  } = h.VoiceActivityProfileExperiment.useExperiment({
    location: "user popout"
  }, {
    autoTrackExposure: Q
  }), $ = (0, r.useStateFromStores)([d.default], () => d.default.getChannel(B)), {
    profileTheme: ee
  } = (0, E.default)(k, w), et = i.useRef(null), [en, el] = i.useState(!0), ei = i.useCallback(() => {
    let {
      current: e
    } = et;
    null != e && el(0 === e.getScrollerState().scrollTop)
  }, []);
  if (i.useLayoutEffect(() => {
      var e;
      let {
        current: t
      } = et;
      null != t && (null === (e = t.getScrollerNode()) || void 0 === e || e.scrollTo({
        top: 0
      }))
    }, []), k.isSystemUser()) return null;
  if (k.isNonUserBot()) return (0, l.jsx)(L.default, {
    user: k,
    nickname: null,
    pronouns: null,
    className: b.usernameSection,
    lastSection: !0
  });
  let ea = null !== (t = f.default.getNickname(null == F ? void 0 : F.id, B, k)) && void 0 !== t ? t : p.default.getName(k);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(L.default, {
      className: b.usernameSection,
      user: k,
      nickname: ea,
      pronouns: null == w ? void 0 : w.pronouns,
      usernameIcon: k.hasAvatarForGuild(null == F ? void 0 : F.id) && (0, l.jsx)(S.default, {
        user: k,
        nickname: ea
      }),
      shouldCopyOnClick: Y
    }), (0, l.jsxs)(o.HeadingLevel, {
      children: [(0, l.jsx)(y.default, {
        className: b.customStatusSection,
        customStatusActivity: D
      }), (0, l.jsx)(g.default, {
        className: b.divider
      }), (0, l.jsxs)(o.AdvancedScroller, {
        className: s(b.scroller, {
          [b.scrollerSeparator]: !en
        }),
        onScroll: ei,
        ref: et,
        children: [(0, l.jsx)(I.default, {
          user: k,
          guildId: null == F ? void 0 : F.id
        }), (0, l.jsx)(v.default, {
          isUsingGuildBio: null !== (n = null == w ? void 0 : w.isUsingGuildMemberBio()) && void 0 !== n && n,
          bio: null == w ? void 0 : w.bio,
          guild: F,
          hidePersonalInformation: z
        }), (0, l.jsx)(N.default, {
          userId: k.id,
          guild: F,
          guildMember: G
        }), X && Q && (0, l.jsx)(P.default, {
          voiceChannel: Z.voiceChannel,
          voiceGuild: Z.voiceGuild,
          onClose: H,
          color: j.buttonColor
        }), (0, l.jsx)(C.default, {
          activity: U,
          user: k,
          guild: F,
          channelId: B,
          onClose: H
        }), (null == J ? void 0 : J.popularApplicationCommandIds) != null && null != $ ? (0, l.jsx)(O.default, {
          applicationId: J.id,
          commandIds: J.popularApplicationCommandIds,
          channel: $,
          guildId: null == F ? void 0 : F.id,
          onClick: H
        }) : null, (0, l.jsx)(T.default, {
          user: k,
          guildId: null == F ? void 0 : F.id
        }), (0, l.jsx)(M.default, {
          user: k,
          guild: F,
          guildMember: G,
          showBorder: null !== (a = null == w ? void 0 : w.canEditThemes) && void 0 !== a && a
        }), (0, l.jsx)(_.default, {
          userId: k.id,
          channelId: B,
          guild: F,
          onClose: H,
          theme: ee
        }), null != J && void 0 !== B && (0, l.jsx)(R.default, {
          channelId: B,
          applicationId: J.id
        }), (0, l.jsx)(x.default, {
          user: k,
          setNote: V,
          autoFocus: !K,
          lastSection: !K,
          hideNote: z || W
        }), (0, l.jsx)(A.default, {
          user: k,
          setNote: V,
          canDM: K,
          onClose: H
        })]
      })]
    })]
  })
}