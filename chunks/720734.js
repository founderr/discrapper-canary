n.d(t, {
  Z: function() {
return eG;
  }
}), n(47120), n(653041);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(442837),
  o = n(704215),
  c = n(846519),
  d = n(400354),
  u = n(652844),
  _ = n(789639),
  E = n(481060),
  h = n(355467),
  I = n(239091),
  m = n(230711),
  g = n(410575),
  p = n(941129),
  T = n(83200),
  f = n(634894),
  S = n(586902),
  C = n(570928),
  N = n(515550),
  A = n(1585),
  v = n(304761),
  Z = n(865427),
  L = n(571250),
  O = n(628581),
  R = n(55311),
  x = n(575175),
  b = n(64220),
  P = n(377171),
  M = n(676035),
  D = n(427217),
  y = n(605236),
  j = n(243778),
  U = n(730417),
  G = n(524347),
  w = n(853197),
  k = n(810280),
  B = n(60762),
  H = n(258609),
  V = n(278464),
  F = n(331541),
  Y = n(332473),
  W = n(240504),
  z = n(804545),
  K = n(637906),
  q = n(39370),
  Q = n(19199),
  X = n(111653),
  J = n(866483),
  $ = n(14357),
  ee = n(393333),
  et = n(763296),
  en = n(640806),
  ei = n(484459),
  es = n(584427),
  ea = n(52538),
  er = n(331187),
  el = n(879815),
  eo = n(294629),
  ec = n(314897),
  ed = n(592125),
  eu = n(819640),
  e_ = n(131951),
  eE = n(19780),
  eh = n(885110),
  eI = n(246946),
  em = n(594174),
  eg = n(78839),
  ep = n(285952),
  eT = n(976401),
  ef = n(333454),
  eS = n(864441),
  eC = n(626135),
  eN = n(768581),
  eA = n(572004),
  ev = n(70956),
  eZ = n(374023),
  eL = n(51144),
  eO = n(998502),
  eR = n(981631),
  ex = n(215023),
  eb = n(288836),
  eP = n(689938),
  eM = n(108079);

function eD(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let ey = eO.ZP.getEnableHardwareAcceleration() ? E.AnimatedAvatar : E.Avatar,
  ej = 30 * ev.Z.Millis.DAY;
class eU extends s.PureComponent {
  get isCopiedStreakGodlike() {
let {
  copiedStreak: e
} = this.state;
return e >= 10;
  }
  componentDidUpdate(e) {
let {
  speakingWhileMuted: t,
  occluded: n
} = e, {
  speakingWhileMuted: i,
  occluded: s
} = this.props;
s !== n && this.handleOccludedChanged(), i !== t && this.handleSpeakingWhileMutedChanged();
  }
  componentWillUnmount() {
this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop();
  }
  renderCopiedSuccess() {
let {
  copiedStreak: e
} = this.state, t = [
  eP.Z.Messages.COPY_SUCCESS_1,
  eP.Z.Messages.COPY_SUCCESS_2,
  eP.Z.Messages.COPY_SUCCESS_3,
  eP.Z.Messages.COPY_SUCCESS_4,
  eP.Z.Messages.COPY_SUCCESS_5,
  eP.Z.Messages.COPY_SUCCESS_6,
  eP.Z.Messages.COPY_SUCCESS_7,
  eP.Z.Messages.COPY_SUCCESS_8,
  eP.Z.Messages.COPY_SUCCESS_9,
  eP.Z.Messages.COPY_SUCCESS_10,
  eP.Z.Messages.COPY_SUCCESS_11
], n = Math.min(Math.max(0, e - 1), t.length - 1);
return (0, i.jsx)(E.Shaker, {
  isShaking: this.isCopiedStreakGodlike,
  children: t[n]
});
  }
  renderNameTag() {
let e;
let {
  hovered: t
} = this.state, {
  customStatusActivity: n,
  userTag: s,
  currentUser: a,
  status: r
} = this.props;
if (null == a)
  return null;
let l = eL.ZP.getName(a),
  o = null != r && r !== eR.Skl.UNKNOWN,
  c = null != n;
return (c || o && a.isPomelo()) && (e = (0, i.jsx)(C.Z, {
  hoverText: s,
  forceHover: t,
  children: c ? (0, i.jsx)(D.Z, {
    activity: n,
    emojiClassName: eM.emoji,
    className: eM.customStatus
  }) : eL.ZP.humanizeStatus(r)
})), (0, i.jsxs)(i.Fragment, {
  children: [
    (0, i.jsx)('div', {
      className: eM.panelTitleContainer,
      children: (0, i.jsx)(eS.Z, {
        children: l
      })
    }),
    (0, i.jsx)('div', {
      className: eM.panelSubtextContainer,
      children: (0, i.jsx)(ef.Z, {
        children: null != e ? e : s
      })
    })
  ]
});
  }
  renderAvatarWithPopout() {
let {
  speaking: e,
  streaming: t,
  currentUser: n,
  status: s
} = this.props;
if (null == n)
  return null;
let a = (0, eN.NZ)({
  avatarDecoration: n.avatarDecoration,
  size: (0, A.y9)(E.AvatarSizes.SIZE_32)
});
return (0, i.jsx)(g.Z, {
  object: eR.qAy.AVATAR,
  children: (0, i.jsx)(E.Popout, {
    renderPopout: e => {
      let {
        closePopout: t,
        setPopoutRef: s
      } = e;
      return (0, i.jsx)('div', {
        className: eM.accountProfilePopoutWrapper,
        children: (0, i.jsx)(F.Z, {
          currentUser: n,
          setPopoutRef: s,
          onClose: () => {
            this.handleMouseLeave(), null == t || t();
          }
        })
      });
    },
    position: 'top',
    align: 'left',
    animation: E.Popout.Animation.FADE,
    spacing: 14,
    fixed: !0,
    preload: () => (0, ei.Z)(n.id, null == n ? void 0 : n.getAvatarURL(null, 80)),
    children: l => (0, i.jsxs)(E.Clickable, {
      ...l,
      'aria-label': eP.Z.Messages.SET_STATUS,
      className: eM.avatarWrapper,
      children: [
        (0, i.jsx)(ey, {
          size: E.AvatarSizes.SIZE_32,
          src: n.getAvatarURL(void 0, 32, !1),
          avatarDecoration: a,
          'aria-label': n.username,
          status: t ? eR.Skl.STREAMING : s,
          isSpeaking: e,
          className: eM.avatar
        }),
        (0, i.jsx)('div', {
          className: r()(eM.nameTag, {
            [eM.canCopy]: eA.wS
          }),
          children: this.renderNameTag()
        })
      ]
    })
  })
});
  }
  renderNameZone() {
let {
  currentUser: e,
  dismissibleContents: t
} = this.props;
return null == e ? null : (0, i.jsx)(i.Fragment, {
  children: (0, i.jsx)(j.Z, {
    contentTypes: t.avatar,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: n
      } = e;
      if (t === o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)
        return (0, i.jsx)(b.Z, {
          markAsDismissed: n,
          children: () => this.renderAvatarWithPopout()
        });
      return this.renderAvatarWithPopout();
    }
  })
});
  }
  render() {
let {
  currentUser: e,
  selfDeaf: t,
  selfMute: n,
  awaitingRemote: s,
  serverMute: a,
  serverDeaf: r,
  suppress: l,
  dismissibleContents: c
} = this.props, {
  shouldShowSpeakingWhileMutedTooltip: d
} = this.state;
return null == e ? null : (0, i.jsxs)('div', {
  className: eM.container,
  onMouseEnter: this.handleMouseEnter,
  onMouseLeave: this.handleMouseLeave,
  children: [
    this.renderNameZone(),
    (0, i.jsxs)(ep.Z, {
      grow: 0,
      children: [
        (0, i.jsx)(ek, {
          selfMute: n,
          serverMute: a,
          suppress: l,
          awaitingRemote: s,
          tooltipText: d ? eP.Z.Messages.ACCOUNT_SPEAKING_WHILE_MUTED : (0, O.Z)(n, a, l, s),
          tooltipColor: d ? E.TooltipColors.GREEN : void 0,
          tooltipForceOpen: d || void 0,
          onMouseEnter: this.handleMouseEnterMute,
          onMouseLeave: this.handleMouseLeaveMute,
          onClick: this.handleToggleSelfMute,
          onContextMenu: this.handleInputAudioContextMenu
        }),
        (0, i.jsx)(eB, {
          selfDeaf: t,
          serverDeaf: r,
          onClick: this.handleToggleSelfDeaf,
          onContextMenu: this.handleOutputAudioContextMenu,
          awaitingRemote: s
        }),
        (0, i.jsx)(j.Z, {
          contentTypes: c.settings,
          children: e => {
            let {
              visibleContent: t,
              markAsDismissed: n
            } = e;
            switch (t) {
              case o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2:
                return (0, i.jsx)(E.Popout, {
                  position: 'top',
                  align: 'center',
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(q.Z, {}),
                  children: this.renderSettingsGear
                });
              case o.z.QUEST_2_ENROLLMENT_TOOLTIP:
                return (0, i.jsx)(E.Popout, {
                  position: 'top',
                  align: 'center',
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(k.Z, {
                    markAsDismissed: n,
                    partnerGame: eb.X2.FORTNITE
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.QUEST_2_COMPLETION_TOOLTIP:
                return (0, i.jsx)(E.Popout, {
                  position: 'top',
                  align: 'center',
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(B.Z, {
                    markAsDismissed: n,
                    partnerGame: eb.X2.FORTNITE
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.USER_SAFETY_SAFE_DIRECT_MESSAGING:
                return (0, i.jsx)(E.Popout, {
                  position: 'top',
                  align: 'center',
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(er.Z, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                return (0, i.jsx)(E.Popout, {
                  position: 'top',
                  align: 'center',
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(J.Z, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                return (0, i.jsx)(E.Popout, {
                  position: 'top',
                  align: 'center',
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)($.Z, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.SOUNDBOARD_VOLUME_EDUCATION:
                return (0, i.jsx)(E.Popout, {
                  position: 'top',
                  align: 'center',
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(en.Z, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
                return (0, i.jsx)(E.Popout, {
                  position: 'top',
                  align: 'center',
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(ee.P, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                return (0, i.jsx)(E.Popout, {
                  position: 'top',
                  align: 'center',
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(ea.Z, {}),
                  children: this.renderSettingsGear
                });
              case o.z.PRIDE_ICONS_COACHMARK:
                return (0, i.jsx)(E.Popout, {
                  position: 'top',
                  align: 'center',
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(N.Z, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              default:
                return this.renderSettingsGear();
            }
          }
        })
      ]
    })
  ]
});
  }
  constructor(...e) {
super(...e), eD(this, 'copiedTimeout', new c.V7()), eD(this, 'copiedDecayTimeout', new c.V7()), eD(this, 'speakingWhileMutedTooltipTimeout', new c.V7()), eD(this, 'state', {
  hovered: !1,
  copiedStreak: 0,
  shouldShowNametagTooltip: !1,
  shouldShowCopiedFeedback: !1,
  shouldShowSpeakingWhileMutedTooltip: !1,
  hoveringOnMute: !1
}), eD(this, 'handleToggleSelfMute', () => {
  let {
    serverMute: e,
    suppress: t
  } = this.props;
  (0, x.Z)(e, t);
}), eD(this, 'handleToggleSelfDeaf', () => {
  let {
    serverDeaf: e
  } = this.props;
  (0, R.Z)(e);
}), eD(this, 'handleOpenAccountSettings', () => {
  this.handleOpenSettings();
}), eD(this, 'handleOpenSettings', function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.oAB.ACCOUNT,
    t = arguments.length > 1 ? arguments[1] : void 0,
    n = arguments.length > 2 ? arguments[2] : void 0;
  m.Z.open(e, t, n);
}), eD(this, 'handleOpenSettingsContextMenu', e => {
  let {
    currentUser: t
  } = this.props;
  null != t && (0, I.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('96427'),
      n.e('1337'),
      n.e('15972'),
      n.e('13682'),
      n.e('15685'),
      n.e('47006'),
      n.e('32776'),
      n.e('18209'),
      n.e('33053'),
      n.e('8016'),
      n.e('50654'),
      n.e('76540'),
      n.e('68136'),
      n.e('87624'),
      n.e('22646'),
      n.e('5528'),
      n.e('43331'),
      n.e('30419'),
      n.e('18824'),
      n.e('52619'),
      n.e('66436'),
      n.e('26025')
    ]).then(n.bind(n, 923422));
    return n => (0, i.jsx)(e, {
      ...n,
      user: t,
      premiumSubscription: this.props.premiumSubscription,
      webBuildOverride: this.props.webBuildOverride
    });
  });
}), eD(this, 'handleInputAudioContextMenu', e => {
  (0, I.jW)(e, async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 659580));
    return () => (0, i.jsx)(e, {
      onClose: I.Zy,
      renderInputDevices: !0,
      renderInputModes: !0,
      renderInputVolume: !0
    });
  });
}), eD(this, 'handleOutputAudioContextMenu', e => {
  (0, I.jW)(e, async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 659580));
    return () => (0, i.jsx)(e, {
      onClose: I.Zy,
      renderOutputDevices: !0,
      renderOutputVolume: !0
    });
  });
}), eD(this, 'handleMouseEnter', () => {
  this.setState({
    hovered: !0
  });
}), eD(this, 'handleMouseLeave', () => {
  this.setState({
    hovered: !1
  });
}), eD(this, 'handleMouseEnterMute', () => {
  this.setState({
    hoveringOnMute: !0,
    shouldShowSpeakingWhileMutedTooltip: !1
  }), this.speakingWhileMutedTooltipTimeout.stop();
}), eD(this, 'handleMouseLeaveMute', () => {
  this.setState({
    hoveringOnMute: !1
  });
}), eD(this, 'handleCopyTag', () => {
  let {
    currentUser: e
  } = this.props, {
    shouldShowNametagTooltip: t,
    copiedStreak: n
  } = this.state;
  if (null == e)
    return;
  (0, eA.JG)(eL.ZP.getUserTag(e, {
    decoration: 'never',
    identifiable: 'always'
  })), eC.default.track(eR.rMx.TEXT_COPIED, {
    type: 'User Tag'
  });
  let i = {
    shouldShowCopiedFeedback: !0,
    shouldShowNametagTooltip: !0
  };
  !t && (i.copiedStreak = n + 1), this.setState(i, () => {
    this.copiedTimeout.start(1000, () => this.setState({
      shouldShowNametagTooltip: !1
    })), this.copiedDecayTimeout.start(2000, () => this.setState({
      copiedStreak: 0
    }));
  });
}), eD(this, 'handleOccludedChanged', () => {
  let {
    occluded: e
  } = this.props;
  e && this.setState({
    shouldShowNametagTooltip: !1,
    shouldShowSpeakingWhileMutedTooltip: !1
  });
}), eD(this, 'handleSpeakingWhileMutedChanged', () => {
  let {
    selfMute: e,
    serverMute: t,
    suppress: n,
    speakingWhileMuted: i,
    occluded: s
  } = this.props, {
    hoveringOnMute: a
  } = this.state;
  i ? !a && e && !t && !n && !s && this.setState({
    shouldShowSpeakingWhileMutedTooltip: !0
  }, () => {
    this.speakingWhileMutedTooltipTimeout.start(2000, () => this.setState({
      shouldShowSpeakingWhileMutedTooltip: !1
    }));
  }) : (this.setState({
    shouldShowSpeakingWhileMutedTooltip: !1
  }), this.speakingWhileMutedTooltipTimeout.stop());
}), eD(this, 'renderSettingsGear', () => (0, i.jsx)(ew, {
  isEligibleForPomelo: this.props.isEligibleForPomelo,
  webBuildOverride: this.props.webBuildOverride,
  onClick: this.handleOpenAccountSettings,
  onContextMenu: this.handleOpenSettingsContextMenu
}));
  }
}

function eG() {
  var e, t;
  let n = (0, l.e7)([em.default], () => em.default.getCurrentUser()),
a = (0, U._g)(eb.X2.FORTNITE),
r = (0, l.e7)([ec.default], () => ec.default.getId()),
c = (0, M.a)(),
{
  streaming: d,
  status: u
} = (0, l.cj)([eh.Z], () => ({
  streaming: null != eh.Z.findActivity(e => e.type === eR.IIU.STREAMING),
  status: eh.Z.getStatus()
})),
_ = (0, S.Z)({
  userId: r
}),
I = eL.ZP.useUserTag(n, {
  decoration: 'never'
}),
m = (0, l.e7)([eI.Z], () => eI.Z.hidePersonalInformation),
g = (0, l.e7)([
  eE.Z,
  ed.Z
], () => {
  let e = eE.Z.getChannelId();
  return null != e ? ed.Z.getChannel(e) : null;
}),
{
  mute: C,
  selfMute: N,
  suppress: A
} = (0, eo.Z)(g),
{
  selfDeaf: L,
  deaf: O
} = (0, el.Z)(g),
R = (0, l.e7)([v.C], () => {
  var e;
  return (0, Z.fD)() ? null === (e = v.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null;
}),
x = (0, l.e7)([eg.ZP], () => eg.ZP.getPremiumTypeSubscription()),
b = (0, l.e7)([e_.Z], () => e_.Z.getEverSpeakingWhileMuted()),
P = (0, l.e7)([eu.Z], () => eu.Z.hasLayers()),
D = (0, E.useModalsStore)(E.hasAnyModalOpenSelector) || P || eZ.s.isDisallowPopupsSet(),
j = (0, Y.b)(),
k = (0, l.e7)([H.Z], () => null != H.Z.getAwaitingRemoteSessionInfo()),
B = (0, l.e7)([G.Z], () => G.Z.isCurrentQuestCompleted),
F = (0, l.e7)([G.Z], () => G.Z.currentDropQuestGameTitle),
q = (0, V.n)(),
J = (0, T.O)(),
$ = (0, Q.D)(),
ee = (0, p.u)(),
en = (0, X.t)(),
ei = (0, es.Z)(n),
ea = (null == n ? void 0 : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === ex.rL,
er = 'account';
  (0, f.j)({
location: er + ' auto on',
autoTrackExposure: !0
  }), (0, f.j)({
location: er + ' auto off',
autoTrackExposure: !1
  }), (0, Q.o)();
  let ep = (0, l.e7)([et.Z], () => et.Z.hasHadOtherUserPlaySoundInSession()),
eT = function() {
  let e = (0, y.wE)(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
    [t, n] = (0, l.Wu)([W.Z], () => [
      W.Z.hasFetchedRelevance,
      W.Z.profileThemesRelevanceExceeded
    ]),
    [i, a] = (0, l.Wu)([eg.ZP], () => [
      eg.ZP.hasFetchedMostRecentPremiumTypeSubscription(),
      eg.ZP.getMostRecentPremiumTypeSubscription()
    ]),
    {
      enabled: r
    } = K.Z.useExperiment({
      location: '08bd40_1'
    }, {
      autoTrackExposure: !0
    }),
    c = s.useMemo(() => {
      let e = new Date().getTime();
      return null != a && (a.status === eR.O0b.ACTIVE || e - a.currentPeriodEnd.getTime() < ej);
    }, [a]);
  return s.useEffect(() => {
    (async () => {
      if (e || null != n || !r)
        return;
      if (!i) {
        await (0, h.ou)();
        return;
      }
      if (!c)
        !t && await (0, h.l0)();
    })();
  }, [
    r,
    n,
    e,
    i,
    t,
    c
  ]), !e && !!r && !c && null != n && n;
}(),
{
  enabled: ef
} = (0, z._)({
  location: 'AccountConnected'
}),
eS = {
  avatar: [],
  settings: []
};
  return !D && (eT && eS.settings.push(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), a && (eS.settings.push(o.z.QUEST_2_ENROLLMENT_TOOLTIP), B && F === (null === (t = (0, w.BS)(eb.X2.FORTNITE)) || void 0 === t ? void 0 : t.title) && eS.settings.push(o.z.QUEST_2_COMPLETION_TOOLTIP)), q && J && eS.settings.push(o.z.USER_SAFETY_SAFE_DIRECT_MESSAGING), $ && (1 === ee ? eS.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : eS.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), ep && eS.settings.push(o.z.SOUNDBOARD_VOLUME_EDUCATION), en && eS.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING), ei && eS.settings.push(o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), ef && eS.settings.push(o.z.PRIDE_ICONS_COACHMARK), ea && eS.avatar.push(o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)), (0, i.jsx)(eU, {
currentUser: n,
customStatusActivity: c,
dismissibleContents: eS,
userTag: I,
hidePrivateData: m,
occluded: D,
premiumSubscription: x,
selfDeaf: L,
selfMute: N,
serverDeaf: O,
serverMute: C,
speaking: _,
speakingWhileMuted: b,
status: u,
streaming: d,
suppress: A,
webBuildOverride: R,
awaitingRemote: k,
isEligibleForPomelo: j
  });
}

function ew(e) {
  let {
webBuildOverride: t,
isEligibleForPomelo: n,
onClick: s,
onContextMenu: a
  } = e, r = (0, E.useRedesignIconContext)().enabled, l = null, o = E.SettingsIcon, c = (0, _.i)();
  return r ? o = null != t ? E.SettingsInfoIcon : n ? E.SettingsCircleIcon : c.Component : null != t ? l = (0, i.jsx)(E.CircleInformationIcon, {
size: 'custom',
color: 'currentColor',
width: 9,
height: 9,
className: eM.hasBuildOverride,
'aria-hidden': !0
  }) : n && (l = (0, i.jsx)(E.CircleBadge, {
color: P.Z.STATUS_DANGER,
className: eM.hasBuildOverride,
'aria-hidden': !0
  })), (0, i.jsx)(eT.Z, {
tooltipText: null != t ? eP.Z.Messages.USER_SETTINGS_WITH_BUILD_OVERRIDE.format({
  webBuildOverride: t.id
}) : eP.Z.Messages.USER_SETTINGS,
onClick: s,
onContextMenu: a,
innerClassName: null != t || n ? eM.buildOverrideButton : null,
icon: o,
...c.events,
children: l
  });
}

function ek(e) {
  let {
selfMute: t,
serverMute: n,
suppress: a,
awaitingRemote: r,
tooltipText: l,
tooltipColor: o,
tooltipForceOpen: c,
onMouseEnter: d,
onMouseLeave: _,
onClick: h,
onContextMenu: I
  } = e, m = t || a || n, {
Component: g,
play: p,
events: T
  } = (0, u.O)(m ? 'unmute' : 'mute'), f = n || a ? E.MicrophoneDenyIcon : g;
  return s.useEffect(() => () => p(), [
m,
p
  ]), (0, i.jsx)(eT.Z, {
tooltipText: l,
tooltipColor: o,
tooltipForceOpen: c,
onMouseEnter: () => {
  d(), T.onMouseEnter();
},
onMouseLeave: () => {
  _(), T.onMouseLeave();
},
icon: (0, i.jsx)(f, {
  size: 'custom',
  width: 20,
  height: 20,
  color: m ? E.tokens.colors.STATUS_DANGER : 'currentColor'
}),
iconForeground: m ? eM.strikethrough : null,
onClick: h,
onContextMenu: I,
role: 'switch',
'aria-label': eP.Z.Messages.MUTE,
'aria-checked': m,
disabled: r
  });
}

function eB(e) {
  let {
selfDeaf: t,
serverDeaf: n,
awaitingRemote: a,
onClick: l,
onContextMenu: o
  } = e, c = t || n, {
Component: u,
play: _,
events: {
  onMouseEnter: h,
  onMouseLeave: I
}
  } = (0, d.l)(c ? 'undeafen' : 'deafen'), m = n ? E.HeadphonesDenyIcon : u;
  return s.useEffect(() => () => _(), [
c,
_
  ]), (0, i.jsx)(eT.Z, {
tooltipText: (0, L.Z)(t, n, a),
onMouseEnter: h,
onMouseLeave: I,
icon: (0, i.jsx)(m, {
  size: 'custom',
  width: 20,
  height: 20,
  color: c ? E.tokens.colors.STATUS_DANGER : 'currentColor'
}),
onClick: l,
onContextMenu: o,
innerClassName: r()({
  [eM.redIcon]: n
}),
iconForeground: c ? eM.strikethrough : null,
role: 'switch',
'aria-label': eP.Z.Messages.DEAFEN,
'aria-checked': c,
disabled: a
  });
}