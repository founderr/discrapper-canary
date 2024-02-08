"use strict";
n.r(t), n.d(t, {
  default: function() {
    return q
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("446674"),
  o = n("77078"),
  u = n("335189"),
  d = n("618017"),
  c = n("980215"),
  f = n("235767"),
  p = n("190045"),
  m = n("419806"),
  h = n("373469"),
  E = n("42203"),
  S = n("26989"),
  g = n("957255"),
  C = n("102985"),
  T = n("987772"),
  v = n("164424"),
  I = n("387111"),
  _ = n("158998"),
  y = n("713135"),
  A = n("765698"),
  N = n("906889"),
  x = n("10532"),
  O = n("648149"),
  R = n("915712"),
  M = n("261523"),
  L = n("369869"),
  P = n("545590"),
  b = n("972595"),
  j = n("316095"),
  U = n("802279"),
  D = n("577172"),
  k = n("465215"),
  w = n("301998"),
  F = n("379657"),
  G = n("853780"),
  B = n("574191"),
  H = n("491250"),
  V = n("453649"),
  K = n("49111"),
  W = n("782340"),
  Y = n("956330"),
  z = n("477691"),
  J = n("398664");

function q(e) {
  var t, n, a;
  let {
    activity: q,
    customStatusActivity: Z,
    user: Q,
    displayProfile: X,
    guild: $,
    guildMember: ee,
    channelId: et,
    onClose: en,
    setNote: el = !1,
    canDM: ei,
    hideNote: ea = !1,
    showCopiableUsername: es = !1
  } = e, er = (0, r.useStateFromStores)([C.default], () => C.default.hidePersonalInformation), eo = (0, r.useStateFromStores)([y.default], () => {
    var e;
    return null === (e = y.default.getUserProfile(Q.id)) || void 0 === e ? void 0 : e.application
  }), eu = (0, r.useStateFromStores)([h.default], () => null != h.default.getAnyStreamForUser(Q.id)), ed = (0, V.useGetVoiceChannelInfoForVoiceActivitySection)(Q.id, null == $ ? void 0 : $.id), ec = !eu && null != ed, {
    showVoiceActivityInProfile: ef
  } = A.VoiceActivityProfileExperiment.useExperiment({
    location: "user popout"
  }, {
    autoTrackExposure: ec
  }), [ep, em] = i.useState(!1), [eh, eE] = i.useState(!1), eS = (0, r.useStateFromStores)([E.default], () => E.default.getChannel(et)), eg = (0, r.useStateFromStores)([g.default], () => g.default.can(K.Permissions.USE_CLYDE_AI, eS)), {
    profileTheme: eC
  } = (0, N.default)(Q, X), eT = i.useRef(null), [ev, eI] = i.useState(!0), e_ = i.useCallback(() => {
    let {
      current: e
    } = eT;
    null != e && eI(0 === e.getScrollerState().scrollTop)
  }, []), ey = (0, d.canEditClydeAIProfile)($), eA = (0, c.canUseCustomClydeProfiles)($), eN = (0, r.useStateFromStores)([S.default], () => S.default.isMember(null == $ ? void 0 : $.id, Q.id));
  if (i.useLayoutEffect(() => {
      var e;
      let {
        current: t
      } = eT;
      null != t && (null === (e = t.getScrollerNode()) || void 0 === e || e.scrollTo({
        top: 0
      }))
    }, []), Q.isSystemUser()) return null;
  if (Q.isNonUserBot() && !Q.isClyde()) return (0, l.jsx)(H.default, {
    user: Q,
    nickname: null,
    pronouns: null,
    className: Y.usernameSection,
    lastSection: !0
  });
  let ex = null !== (t = I.default.getNickname(null == $ ? void 0 : $.id, et, Q)) && void 0 !== t ? t : _.default.getName(Q);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(H.default, {
      className: Y.usernameSection,
      user: Q,
      nickname: ex,
      pronouns: null == X ? void 0 : X.pronouns,
      usernameIcon: Q.hasAvatarForGuild(null == $ ? void 0 : $.id) && (0, l.jsx)(O.default, {
        user: Q,
        nickname: ex
      }),
      shouldCopyOnClick: es
    }), Q.isClyde() ? (0, l.jsx)("div", {
      className: Y.lastEditedByContainer,
      children: (0, l.jsx)(f.default, {
        className: Y.lastEditedByTag,
        guildId: null == $ ? void 0 : $.id
      })
    }) : null, (0, l.jsxs)(o.HeadingLevel, {
      children: [(0, l.jsx)(U.default, {
        className: Y.customStatusSection,
        customStatusActivity: Z
      }), (0, l.jsx)(x.default, {
        className: Y.divider
      }), Q.isClyde() && ey && null != $ ? !eN && eA ? eg && !eh ? (0, l.jsx)(o.Button, {
        className: Y.editClydeButton,
        innerClassName: Y.editClydeButtonInner,
        submitting: ep,
        onClick: async () => {
          em(!0);
          try {
            await (0, u.addClydeGuildMember)($.id), em(!1)
          } catch (e) {
            em(!1), eE(!0)
          }
        },
        children: W.default.Messages.CLYDE_ADD_CLYDE
      }) : (0, l.jsxs)(o.Text, {
        className: Y.clydeErrorText,
        variant: "text-sm/normal",
        color: "text-danger",
        children: [(0, l.jsx)("img", {
          className: Y.sadClyde,
          src: J,
          alt: W.default.Messages.SAD_CLYDE_ALT_TEXT
        }), " ", W.default.Messages.CANNOT_ADD_CLYDE]
      }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)(o.Button, {
          className: Y.editClydeButton,
          innerClassName: Y.editClydeButtonInner,
          onClick: () => {
            null == en || en(), (0, p.default)($.id)
          },
          children: [(0, l.jsx)(T.default, {
            className: Y.pencilIcon
          }), " ", W.default.Messages.EDIT_CLYDE]
        }), eA ? (0, l.jsxs)(o.Button, {
          className: Y.editClydeButton,
          innerClassName: Y.editClydeButtonInner,
          color: o.ButtonColors.WHITE,
          onClick: () => {
            null == en || en(), (0, m.default)($.id)
          },
          children: [(0, l.jsx)(v.default, {
            className: Y.pencilIcon
          }), " ", W.default.Messages.SHARE]
        }) : null]
      }) : null, (0, l.jsxs)(o.AdvancedScroller, {
        className: s(Y.scroller, {
          [Y.scrollerSeparator]: !ev
        }),
        onScroll: e_,
        ref: eT,
        children: [(0, l.jsx)(P.default, {
          user: Q,
          guildId: null == $ ? void 0 : $.id
        }), (0, l.jsx)(L.default, {
          isUsingGuildBio: null !== (n = null == X ? void 0 : X.isUsingGuildMemberBio()) && void 0 !== n && n,
          bio: null == X ? void 0 : X.bio,
          guild: $,
          hidePersonalInformation: er
        }), Q.isClyde() ? (0, l.jsx)(b.default, {}) : (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(k.default, {
            userId: Q.id,
            guild: $,
            guildMember: ee
          }), ef && ec && (0, l.jsx)(V.default, {
            voiceChannel: ed.voiceChannel,
            voiceGuild: ed.voiceGuild,
            onClose: en,
            color: z.buttonColor
          }), (0, l.jsx)(R.default, {
            activity: q,
            user: Q,
            guild: $,
            channelId: et,
            onClose: en
          }), (null == eo ? void 0 : eo.popularApplicationCommandIds) != null && null != eS ? (0, l.jsx)(F.default, {
            applicationId: eo.id,
            commandIds: eo.popularApplicationCommandIds,
            channel: eS,
            guildId: null == $ ? void 0 : $.id,
            onClick: en
          }) : null, (0, l.jsx)(M.default, {
            user: Q,
            guildId: null == $ ? void 0 : $.id
          }), (0, l.jsx)(B.default, {
            user: Q,
            guild: $,
            guildMember: ee,
            showBorder: null !== (a = null == X ? void 0 : X.canEditThemes) && void 0 !== a && a
          }), (0, l.jsx)(j.default, {
            userId: Q.id,
            channelId: et,
            guild: $,
            onClose: en,
            theme: eC
          }), null != eo && void 0 !== et && (0, l.jsx)(G.default, {
            channelId: et,
            applicationId: eo.id
          }), (0, l.jsx)(w.default, {
            user: Q,
            setNote: el,
            autoFocus: !ei,
            lastSection: !ei,
            hideNote: er || ea
          })]
        }), (0, l.jsx)(D.default, {
          user: Q,
          setNote: el,
          canDM: ei,
          onClose: en,
          inClydeProfilesExperiment: eA
        })]
      })]
    })]
  })
}