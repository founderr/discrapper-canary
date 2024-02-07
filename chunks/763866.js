"use strict";
l.r(t), l.d(t, {
  default: function() {
    return X
  }
}), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  i = l.n(s),
  r = l("446674"),
  o = l("77078"),
  u = l("335189"),
  d = l("618017"),
  c = l("980215"),
  f = l("235767"),
  m = l("190045"),
  p = l("419806"),
  h = l("373469"),
  T = l("42203"),
  E = l("26989"),
  S = l("957255"),
  _ = l("102985"),
  g = l("987772"),
  A = l("164424"),
  I = l("387111"),
  v = l("158998"),
  N = l("713135"),
  C = l("765698"),
  y = l("906889"),
  M = l("10532"),
  x = l("648149"),
  O = l("915712"),
  R = l("261523"),
  L = l("369869"),
  P = l("545590"),
  j = l("972595"),
  b = l("316095"),
  D = l("802279"),
  U = l("577172"),
  w = l("465215"),
  F = l("301998"),
  G = l("379657"),
  Y = l("853780"),
  k = l("574191"),
  V = l("491250"),
  B = l("453649"),
  H = l("49111"),
  W = l("782340"),
  z = l("956330"),
  K = l("477691"),
  Z = l("398664");

function X(e) {
  var t, l, s;
  let {
    activity: X,
    customStatusActivity: J,
    user: Q,
    displayProfile: q,
    guild: $,
    guildMember: ee,
    channelId: et,
    onClose: el,
    setNote: en = !1,
    canDM: ea,
    hideNote: es = !1,
    showCopiableUsername: ei = !1
  } = e, er = (0, r.useStateFromStores)([_.default], () => _.default.hidePersonalInformation), eo = (0, r.useStateFromStores)([N.default], () => {
    var e;
    return null === (e = N.default.getUserProfile(Q.id)) || void 0 === e ? void 0 : e.application
  }), eu = (0, r.useStateFromStores)([h.default], () => null != h.default.getAnyStreamForUser(Q.id)), ed = (0, B.useGetVoiceChannelInfoForVoiceActivitySection)(Q.id, null == $ ? void 0 : $.id), ec = !eu && null != ed, {
    showVoiceActivityInProfile: ef
  } = C.VoiceActivityProfileExperiment.useExperiment({
    location: "user popout"
  }, {
    autoTrackExposure: ec
  }), [em, ep] = a.useState(!1), [eh, eT] = a.useState(!1), eE = (0, r.useStateFromStores)([T.default], () => T.default.getChannel(et)), eS = (0, r.useStateFromStores)([S.default], () => S.default.can(H.Permissions.USE_CLYDE_AI, eE)), {
    profileTheme: e_
  } = (0, y.default)(Q, q), eg = a.useRef(null), [eA, eI] = a.useState(!0), ev = a.useCallback(() => {
    let {
      current: e
    } = eg;
    null != e && eI(0 === e.getScrollerState().scrollTop)
  }, []), eN = (0, d.canEditClydeAIProfile)($), eC = (0, c.canUseCustomClydeProfiles)($), ey = (0, r.useStateFromStores)([E.default], () => E.default.isMember(null == $ ? void 0 : $.id, Q.id));
  if (a.useLayoutEffect(() => {
      var e;
      let {
        current: t
      } = eg;
      null != t && (null === (e = t.getScrollerNode()) || void 0 === e || e.scrollTo({
        top: 0
      }))
    }, []), Q.isSystemUser()) return null;
  if (Q.isNonUserBot() && !Q.isClyde()) return (0, n.jsx)(V.default, {
    user: Q,
    nickname: null,
    pronouns: null,
    className: z.usernameSection,
    lastSection: !0
  });
  let eM = null !== (t = I.default.getNickname(null == $ ? void 0 : $.id, et, Q)) && void 0 !== t ? t : v.default.getName(Q);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(V.default, {
      className: z.usernameSection,
      user: Q,
      nickname: eM,
      pronouns: null == q ? void 0 : q.pronouns,
      usernameIcon: Q.hasAvatarForGuild(null == $ ? void 0 : $.id) && (0, n.jsx)(x.default, {
        user: Q,
        nickname: eM
      }),
      shouldCopyOnClick: ei
    }), Q.isClyde() ? (0, n.jsx)("div", {
      className: z.lastEditedByContainer,
      children: (0, n.jsx)(f.default, {
        className: z.lastEditedByTag,
        guildId: null == $ ? void 0 : $.id
      })
    }) : null, (0, n.jsxs)(o.HeadingLevel, {
      children: [(0, n.jsx)(D.default, {
        className: z.customStatusSection,
        customStatusActivity: J
      }), (0, n.jsx)(M.default, {
        className: z.divider
      }), Q.isClyde() && eN && null != $ ? !ey && eC ? eS && !eh ? (0, n.jsx)(o.Button, {
        className: z.editClydeButton,
        innerClassName: z.editClydeButtonInner,
        submitting: em,
        onClick: async () => {
          ep(!0);
          try {
            await (0, u.addClydeGuildMember)($.id), ep(!1)
          } catch (e) {
            ep(!1), eT(!0)
          }
        },
        children: W.default.Messages.CLYDE_ADD_CLYDE
      }) : (0, n.jsxs)(o.Text, {
        className: z.clydeErrorText,
        variant: "text-sm/normal",
        color: "text-danger",
        children: [(0, n.jsx)("img", {
          className: z.sadClyde,
          src: Z,
          alt: W.default.Messages.SAD_CLYDE_ALT_TEXT
        }), " ", W.default.Messages.CANNOT_ADD_CLYDE]
      }) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)(o.Button, {
          className: z.editClydeButton,
          innerClassName: z.editClydeButtonInner,
          onClick: () => {
            null == el || el(), (0, m.default)($.id)
          },
          children: [(0, n.jsx)(g.default, {
            className: z.pencilIcon
          }), " ", W.default.Messages.EDIT_CLYDE]
        }), eC ? (0, n.jsxs)(o.Button, {
          className: z.editClydeButton,
          innerClassName: z.editClydeButtonInner,
          color: o.ButtonColors.WHITE,
          onClick: () => {
            null == el || el(), (0, p.default)($.id)
          },
          children: [(0, n.jsx)(A.default, {
            className: z.pencilIcon
          }), " ", W.default.Messages.SHARE]
        }) : null]
      }) : null, (0, n.jsxs)(o.AdvancedScroller, {
        className: i(z.scroller, {
          [z.scrollerSeparator]: !eA
        }),
        onScroll: ev,
        ref: eg,
        children: [(0, n.jsx)(P.default, {
          user: Q,
          guildId: null == $ ? void 0 : $.id
        }), (0, n.jsx)(L.default, {
          isUsingGuildBio: null !== (l = null == q ? void 0 : q.isUsingGuildMemberBio()) && void 0 !== l && l,
          bio: null == q ? void 0 : q.bio,
          guild: $,
          hidePersonalInformation: er
        }), Q.isClyde() ? (0, n.jsx)(j.default, {}) : (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(w.default, {
            userId: Q.id,
            guild: $,
            guildMember: ee
          }), ef && ec && (0, n.jsx)(B.default, {
            voiceChannel: ed.voiceChannel,
            voiceGuild: ed.voiceGuild,
            onClose: el,
            color: K.buttonColor
          }), (0, n.jsx)(O.default, {
            activity: X,
            user: Q,
            guild: $,
            channelId: et,
            onClose: el
          }), (null == eo ? void 0 : eo.popularApplicationCommandIds) != null && null != eE ? (0, n.jsx)(G.default, {
            applicationId: eo.id,
            commandIds: eo.popularApplicationCommandIds,
            channel: eE,
            guildId: null == $ ? void 0 : $.id,
            onClick: el
          }) : null, (0, n.jsx)(R.default, {
            user: Q,
            guildId: null == $ ? void 0 : $.id
          }), (0, n.jsx)(k.default, {
            user: Q,
            guild: $,
            guildMember: ee,
            showBorder: null !== (s = null == q ? void 0 : q.canEditThemes) && void 0 !== s && s
          }), (0, n.jsx)(b.default, {
            userId: Q.id,
            channelId: et,
            guild: $,
            onClose: el,
            theme: e_
          }), null != eo && void 0 !== et && (0, n.jsx)(Y.default, {
            channelId: et,
            applicationId: eo.id
          }), (0, n.jsx)(F.default, {
            user: Q,
            setNote: en,
            autoFocus: !ea,
            lastSection: !ea,
            hideNote: er || es
          })]
        }), (0, n.jsx)(U.default, {
          user: Q,
          setNote: en,
          canDM: ea,
          onClose: el,
          inClydeProfilesExperiment: eC
        })]
      })]
    })]
  })
}