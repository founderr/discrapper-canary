n.d(t, {
    Z: function () {
        return ey;
    }
}),
    n(47120),
    n(653041);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(704215),
    c = n(846519),
    d = n(400354),
    u = n(652844),
    _ = n(789639),
    E = n(481060),
    h = n(355467),
    m = n(239091),
    I = n(230711),
    g = n(410575),
    p = n(941129),
    T = n(634894),
    S = n(586902),
    f = n(570928),
    C = n(676742),
    N = n(1585),
    A = n(304761),
    v = n(865427),
    L = n(571250),
    Z = n(628581),
    R = n(55311),
    O = n(575175),
    x = n(64220),
    b = n(377171),
    P = n(600164),
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
    V = n(331541),
    F = n(332473),
    Y = n(240504),
    W = n(637906),
    z = n(39370),
    K = n(19199),
    q = n(111653),
    Q = n(866483),
    X = n(14357),
    J = n(393333),
    $ = n(763296),
    ee = n(640806),
    et = n(184301),
    en = n(52538),
    ei = n(879815),
    ea = n(294629),
    es = n(314897),
    er = n(592125),
    el = n(819640),
    eo = n(131951),
    ec = n(19780),
    ed = n(885110),
    eu = n(246946),
    e_ = n(594174),
    eE = n(78839),
    eh = n(626135),
    em = n(768581),
    eI = n(572004),
    eg = n(70956),
    ep = n(74538),
    eT = n(374023),
    eS = n(51144),
    ef = n(998502),
    eC = n(870569),
    eN = n(345243),
    eA = n(115530),
    ev = n(981631),
    eL = n(215023),
    eZ = n(702512),
    eR = n(689938),
    eO = n(59923);
function ex(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let eb = ef.ZP.getEnableHardwareAcceleration() ? E.AnimatedAvatar : E.Avatar,
    eP = 30 * eg.Z.Millis.DAY;
function eM(e) {
    let { speaking: t, streaming: n, currentUser: a, status: s, handleMouseLeave: l, renderNameTag: o } = e,
        c = (0, C.Z)(null == a ? void 0 : a.avatarDecoration),
        d = (0, em.NZ)({
            avatarDecoration: c,
            size: (0, N.y9)(E.AvatarSizes.SIZE_32)
        });
    return null == a
        ? null
        : (0, i.jsx)(g.Z, {
              object: ev.qAy.AVATAR,
              children: (0, i.jsx)(E.Popout, {
                  renderPopout: (e) => {
                      let { closePopout: t, setPopoutRef: n } = e;
                      return (0, i.jsx)('div', {
                          className: eO.accountProfilePopoutWrapper,
                          children: (0, i.jsx)(V.Z, {
                              currentUser: a,
                              setPopoutRef: n,
                              onClose: () => {
                                  l(), null == t || t();
                              }
                          })
                      });
                  },
                  position: 'top',
                  align: 'left',
                  animation: E.Popout.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  preload: () =>
                      (0, et.Z)(a, void 0, {
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  children: (e) =>
                      (0, i.jsxs)(E.Clickable, {
                          ...e,
                          'aria-label': eR.Z.Messages.SET_STATUS,
                          className: eO.avatarWrapper,
                          children: [
                              (0, i.jsx)(eb, {
                                  size: E.AvatarSizes.SIZE_32,
                                  src: a.getAvatarURL(void 0, 32, !1),
                                  avatarDecoration: d,
                                  'aria-label': a.username,
                                  status: n ? ev.Skl.STREAMING : s,
                                  isSpeaking: t,
                                  className: eO.avatar
                              }),
                              (0, i.jsx)('div', {
                                  className: r()(eO.nameTag, { [eO.canCopy]: eI.wS }),
                                  children: o()
                              })
                          ]
                      })
              })
          });
}
class eD extends a.PureComponent {
    get isCopiedStreakGodlike() {
        let { copiedStreak: e } = this.state;
        return e >= 10;
    }
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, occluded: n } = e,
            { speakingWhileMuted: i, occluded: a } = this.props;
        a !== n && this.handleOccludedChanged(), i !== t && this.handleSpeakingWhileMutedChanged();
    }
    componentWillUnmount() {
        this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop();
    }
    renderCopiedSuccess() {
        let { copiedStreak: e } = this.state,
            t = [eR.Z.Messages.COPY_SUCCESS_1, eR.Z.Messages.COPY_SUCCESS_2, eR.Z.Messages.COPY_SUCCESS_3, eR.Z.Messages.COPY_SUCCESS_4, eR.Z.Messages.COPY_SUCCESS_5, eR.Z.Messages.COPY_SUCCESS_6, eR.Z.Messages.COPY_SUCCESS_7, eR.Z.Messages.COPY_SUCCESS_8, eR.Z.Messages.COPY_SUCCESS_9, eR.Z.Messages.COPY_SUCCESS_10, eR.Z.Messages.COPY_SUCCESS_11],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, i.jsx)(E.Shaker, {
            isShaking: this.isCopiedStreakGodlike,
            children: t[n]
        });
    }
    renderNameTag() {
        let e;
        let { hovered: t } = this.state,
            { customStatusActivity: n, userTag: a, currentUser: s, status: r } = this.props;
        if (null == s) return null;
        let l = eS.ZP.getName(s),
            o = null != r && r !== ev.Skl.UNKNOWN,
            c = null != n;
        return (
            (c || (o && s.isPomelo())) &&
                (e = (0, i.jsx)(f.Z, {
                    hoverText: a,
                    forceHover: t,
                    children: c
                        ? (0, i.jsx)(D.Z, {
                              activity: n,
                              emojiClassName: eO.emoji,
                              className: eO.customStatus
                          })
                        : eS.ZP.humanizeStatus(r)
                })),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        className: eO.panelTitleContainer,
                        children: (0, i.jsx)(eA.Z, { children: l })
                    }),
                    (0, i.jsx)('div', {
                        className: eO.panelSubtextContainer,
                        children: (0, i.jsx)(eN.Z, { children: null != e ? e : a })
                    })
                ]
            })
        );
    }
    renderAvatarWithPopout() {
        return (0, i.jsx)(eM, {
            ...this.props,
            handleMouseLeave: this.handleMouseLeave,
            renderNameTag: () => this.renderNameTag()
        });
    }
    renderNameZone() {
        let { currentUser: e, dismissibleContents: t } = this.props;
        return null == e
            ? null
            : (0, i.jsx)(i.Fragment, {
                  children: (0, i.jsx)(j.ZP, {
                      contentTypes: t.avatar,
                      children: (e) => {
                          let { visibleContent: t, markAsDismissed: n } = e;
                          if (t === o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)
                              return (0, i.jsx)(x.Z, {
                                  markAsDismissed: n,
                                  children: () => this.renderAvatarWithPopout()
                              });
                          return this.renderAvatarWithPopout();
                      }
                  })
              });
    }
    render() {
        let { currentUser: e, selfDeaf: t, selfMute: n, awaitingRemote: a, serverMute: s, serverDeaf: r, suppress: l, dismissibleContents: c } = this.props,
            { shouldShowSpeakingWhileMutedTooltip: d } = this.state;
        return null == e
            ? null
            : (0, i.jsxs)('div', {
                  className: eO.container,
                  onMouseEnter: this.handleMouseEnter,
                  onMouseLeave: this.handleMouseLeave,
                  children: [
                      this.renderNameZone(),
                      (0, i.jsxs)(P.Z, {
                          grow: 0,
                          className: eO.buttons,
                          children: [
                              (0, i.jsx)(eU, {
                                  selfMute: n,
                                  serverMute: s,
                                  suppress: l,
                                  awaitingRemote: a,
                                  tooltipText: d ? eR.Z.Messages.ACCOUNT_SPEAKING_WHILE_MUTED : (0, Z.Z)(n, s, l, a),
                                  tooltipColor: d ? E.TooltipColors.GREEN : void 0,
                                  tooltipForceOpen: d || void 0,
                                  onMouseEnter: this.handleMouseEnterMute,
                                  onMouseLeave: this.handleMouseLeaveMute,
                                  onClick: this.handleToggleSelfMute,
                                  onContextMenu: this.handleInputAudioContextMenu
                              }),
                              (0, i.jsx)(eG, {
                                  selfDeaf: t,
                                  serverDeaf: r,
                                  onClick: this.handleToggleSelfDeaf,
                                  onContextMenu: this.handleOutputAudioContextMenu,
                                  awaitingRemote: a
                              }),
                              (0, i.jsx)(j.ZP, {
                                  contentTypes: c.settings,
                                  children: (e) => {
                                      let { visibleContent: t, markAsDismissed: n } = e;
                                      switch (t) {
                                          case o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2:
                                              return (0, i.jsx)(E.Popout, {
                                                  position: 'top',
                                                  align: 'center',
                                                  shouldShow: !0,
                                                  renderPopout: () => (0, i.jsx)(z.Z, {}),
                                                  children: this.renderSettingsGear
                                              });
                                          case o.z.QUEST_2_ENROLLMENT_TOOLTIP:
                                              return (0, i.jsx)(E.Popout, {
                                                  position: 'top',
                                                  align: 'center',
                                                  shouldShow: !0,
                                                  renderPopout: () =>
                                                      (0, i.jsx)(k.Z, {
                                                          markAsDismissed: n,
                                                          partnerGame: eZ.X2.FORTNITE
                                                      }),
                                                  children: this.renderSettingsGear
                                              });
                                          case o.z.QUEST_2_COMPLETION_TOOLTIP:
                                              return (0, i.jsx)(E.Popout, {
                                                  position: 'top',
                                                  align: 'center',
                                                  shouldShow: !0,
                                                  renderPopout: () =>
                                                      (0, i.jsx)(B.Z, {
                                                          markAsDismissed: n,
                                                          partnerGame: eZ.X2.FORTNITE
                                                      }),
                                                  children: this.renderSettingsGear
                                              });
                                          case o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                                              return (0, i.jsx)(E.Popout, {
                                                  position: 'top',
                                                  align: 'center',
                                                  shouldShow: !0,
                                                  renderPopout: () => (0, i.jsx)(Q.Z, { markAsDismissed: n }),
                                                  children: this.renderSettingsGear
                                              });
                                          case o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                                              return (0, i.jsx)(E.Popout, {
                                                  position: 'top',
                                                  align: 'center',
                                                  shouldShow: !0,
                                                  renderPopout: () => (0, i.jsx)(X.Z, { markAsDismissed: n }),
                                                  children: this.renderSettingsGear
                                              });
                                          case o.z.SOUNDBOARD_VOLUME_EDUCATION:
                                              return (0, i.jsx)(E.Popout, {
                                                  position: 'top',
                                                  align: 'center',
                                                  shouldShow: !0,
                                                  renderPopout: () => (0, i.jsx)(ee.Z, { markAsDismissed: n }),
                                                  children: this.renderSettingsGear
                                              });
                                          case o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
                                              return (0, i.jsx)(E.Popout, {
                                                  position: 'top',
                                                  align: 'center',
                                                  shouldShow: !0,
                                                  renderPopout: () => (0, i.jsx)(J.P, { markAsDismissed: n }),
                                                  children: this.renderSettingsGear
                                              });
                                          case o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                                              return (0, i.jsx)(E.Popout, {
                                                  position: 'top',
                                                  align: 'center',
                                                  shouldShow: !0,
                                                  renderPopout: () => (0, i.jsx)(en.Z, {}),
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
        super(...e),
            ex(this, 'copiedTimeout', new c.V7()),
            ex(this, 'copiedDecayTimeout', new c.V7()),
            ex(this, 'speakingWhileMutedTooltipTimeout', new c.V7()),
            ex(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            ex(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t } = this.props;
                (0, O.Z)(e, t);
            }),
            ex(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e } = this.props;
                (0, R.Z)(e);
            }),
            ex(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            ex(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                I.Z.open(e, t, n);
            }),
            ex(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, m.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('96427'), n.e('88223'), n.e('52249'), n.e('54803'), n.e('15685'), n.e('72652'), n.e('32776'), n.e('79915'), n.e('33053'), n.e('8016'), n.e('37581'), n.e('76540'), n.e('68136'), n.e('87624'), n.e('22646'), n.e('25183'), n.e('5528'), n.e('57674'), n.e('30419'), n.e('18824'), n.e('52619'), n.e('3955'), n.e('25908')]).then(n.bind(n, 923422));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                user: t,
                                premiumSubscription: this.props.premiumSubscription,
                                webBuildOverride: this.props.webBuildOverride
                            });
                    });
            }),
            ex(this, 'handleInputAudioContextMenu', (e) => {
                (0, m.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(e, {
                            onClose: m.Zy,
                            renderInputDevices: !0,
                            renderInputModes: !0,
                            renderInputVolume: !0
                        });
                });
            }),
            ex(this, 'handleOutputAudioContextMenu', (e) => {
                (0, m.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(e, {
                            onClose: m.Zy,
                            renderOutputDevices: !0,
                            renderOutputVolume: !0
                        });
                });
            }),
            ex(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            ex(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            ex(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            ex(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            ex(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eI.JG)(
                    eS.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eh.default.track(ev.rMx.TEXT_COPIED, { type: 'User Tag' });
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                !t && (i.copiedStreak = n + 1),
                    this.setState(i, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            ex(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            ex(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: i, occluded: a } = this.props,
                    { hoveringOnMute: s } = this.state;
                i
                    ? !s &&
                      e &&
                      !t &&
                      !n &&
                      !a &&
                      this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                          this.speakingWhileMutedTooltipTimeout.start(2000, () => this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }));
                      })
                    : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }), this.speakingWhileMutedTooltipTimeout.stop());
            }),
            ex(this, 'renderSettingsGear', () =>
                (0, i.jsx)(ej, {
                    isEligibleForPomelo: this.props.isEligibleForPomelo,
                    webBuildOverride: this.props.webBuildOverride,
                    onClick: this.handleOpenAccountSettings,
                    onContextMenu: this.handleOpenSettingsContextMenu
                })
            );
    }
}
function ey() {
    var e, t;
    let n = (0, l.e7)([e_.default], () => e_.default.getCurrentUser()),
        s = (0, U._g)(eZ.X2.FORTNITE),
        r = (0, l.e7)([es.default], () => es.default.getId()),
        c = (0, M.a)(),
        { streaming: d, status: u } = (0, l.cj)([ed.Z], () => ({
            streaming: null != ed.Z.findActivity((e) => e.type === ev.IIU.STREAMING),
            status: ed.Z.getStatus()
        })),
        _ = (0, S.Z)({ userId: r }),
        m = eS.ZP.useUserTag(n, { decoration: 'never' }),
        I = (0, l.e7)([eu.Z], () => eu.Z.hidePersonalInformation),
        g = (0, l.e7)([ec.Z, er.Z], () => {
            let e = ec.Z.getChannelId();
            return null != e ? er.Z.getChannel(e) : null;
        }),
        { mute: f, selfMute: C, suppress: N } = (0, ea.Z)(g),
        { selfDeaf: L, deaf: Z } = (0, ei.Z)(g),
        R = (0, l.e7)([A.C], () => {
            var e;
            return (0, v.fD)() ? (null === (e = A.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        O = (0, l.e7)([eE.ZP], () => eE.ZP.getPremiumTypeSubscription()),
        x = (0, l.e7)([eo.Z], () => eo.Z.getEverSpeakingWhileMuted()),
        b = (0, l.e7)([el.Z], () => el.Z.hasLayers()),
        P = (0, E.useModalsStore)(E.hasAnyModalOpenSelector) || b || eT.s.isDisallowPopupsSet(),
        D = (0, F.b)(),
        j = (0, l.e7)([H.Z], () => null != H.Z.getAwaitingRemoteSessionInfo()),
        k = (0, l.e7)([G.Z], () => G.Z.isCurrentQuestCompleted),
        B = (0, l.e7)([G.Z], () => G.Z.currentDropQuestGameTitle),
        V = (0, K.D)(),
        z = (0, p.u)(),
        Q = (0, q.t)(),
        X = ep.ZP.canUsePremiumGuildMemberProfile(n),
        J = (null == n ? void 0 : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eL.rL,
        ee = 'account';
    (0, T.j)({
        location: ee + ' auto on',
        autoTrackExposure: !0
    }),
        (0, T.j)({
            location: ee + ' auto off',
            autoTrackExposure: !1
        });
    let et = (0, l.e7)([$.Z], () => $.Z.hasHadOtherUserPlaySoundInSession()),
        en = (function () {
            let e = (0, y.wE)(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, l.Wu)([Y.Z], () => [Y.Z.hasFetchedRelevance, Y.Z.profileThemesRelevanceExceeded]),
                [i, s] = (0, l.Wu)([eE.ZP], () => [eE.ZP.hasFetchedMostRecentPremiumTypeSubscription(), eE.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: r } = W.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                c = a.useMemo(() => {
                    let e = new Date().getTime();
                    return null != s && (s.status === ev.O0b.ACTIVE || e - s.currentPeriodEnd.getTime() < eP);
                }, [s]);
            return (
                a.useEffect(() => {
                    (async () => {
                        if (e || null != n || !r) return;
                        if (!i) {
                            await (0, h.ou)();
                            return;
                        }
                        if (!c) !t && (await (0, h.l0)());
                    })();
                }, [r, n, e, i, t, c]),
                !e && !!r && !c && null != n && n
            );
        })(),
        eh = {
            avatar: [],
            settings: []
        };
    return (
        !P && (en && eh.settings.push(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), s && (eh.settings.push(o.z.QUEST_2_ENROLLMENT_TOOLTIP), k && B === (null === (t = (0, w.BS)(eZ.X2.FORTNITE)) || void 0 === t ? void 0 : t.title) && eh.settings.push(o.z.QUEST_2_COMPLETION_TOOLTIP)), V && (1 === z ? eh.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : eh.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), et && eh.settings.push(o.z.SOUNDBOARD_VOLUME_EDUCATION), Q && eh.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING), X && eh.settings.push(o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), J && eh.avatar.push(o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)),
        (0, i.jsx)(eD, {
            currentUser: n,
            customStatusActivity: c,
            dismissibleContents: eh,
            userTag: m,
            hidePrivateData: I,
            occluded: P,
            premiumSubscription: O,
            selfDeaf: L,
            selfMute: C,
            serverDeaf: Z,
            serverMute: f,
            speaking: _,
            speakingWhileMuted: x,
            status: u,
            streaming: d,
            suppress: N,
            webBuildOverride: R,
            awaitingRemote: j,
            isEligibleForPomelo: D
        })
    );
}
function ej(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: a, onContextMenu: s } = e,
        r = (0, E.useRedesignIconContext)().enabled,
        l = null,
        o = E.SettingsIcon,
        c = (0, _.i)();
    return (
        r
            ? (o = null != t ? E.SettingsInfoIcon : n ? E.SettingsCircleIcon : c.Component)
            : null != t
              ? (l = (0, i.jsx)(E.CircleInformationIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 9,
                    height: 9,
                    className: eO.hasBuildOverride,
                    'aria-hidden': !0
                }))
              : n &&
                (l = (0, i.jsx)(E.CircleBadge, {
                    color: b.Z.STATUS_DANGER,
                    className: eO.hasBuildOverride,
                    'aria-hidden': !0
                })),
        (0, i.jsx)(eC.Z, {
            tooltipText: null != t ? eR.Z.Messages.USER_SETTINGS_WITH_BUILD_OVERRIDE.format({ webBuildOverride: t.id }) : eR.Z.Messages.USER_SETTINGS,
            onClick: a,
            onContextMenu: s,
            innerClassName: null != t || n ? eO.buildOverrideButton : null,
            icon: o,
            ...c.events,
            children: l
        })
    );
}
function eU(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: r, tooltipText: l, tooltipColor: o, tooltipForceOpen: c, onMouseEnter: d, onMouseLeave: _, onClick: h, onContextMenu: m } = e,
        I = t || s || n,
        { Component: g, play: p, events: T } = (0, u.O)(I ? 'unmute' : 'mute'),
        S = n || s ? E.MicrophoneDenyIcon : g;
    return (
        a.useEffect(() => () => p(), [I, p]),
        (0, i.jsx)(eC.Z, {
            tooltipText: l,
            tooltipColor: o,
            tooltipForceOpen: c,
            onMouseEnter: () => {
                d(), T.onMouseEnter();
            },
            onMouseLeave: () => {
                _(), T.onMouseLeave();
            },
            icon: (0, i.jsx)(S, {
                size: 'custom',
                width: 20,
                height: 20,
                color: I ? E.tokens.colors.STATUS_DANGER : 'currentColor'
            }),
            iconForeground: I ? eO.strikethrough : null,
            onClick: h,
            onContextMenu: m,
            role: 'switch',
            'aria-label': eR.Z.Messages.MUTE,
            'aria-checked': I,
            disabled: r
        })
    );
}
function eG(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: l, onContextMenu: o } = e,
        c = t || n,
        {
            Component: u,
            play: _,
            events: { onMouseEnter: h, onMouseLeave: m }
        } = (0, d.l)(c ? 'undeafen' : 'deafen'),
        I = n ? E.HeadphonesDenyIcon : u;
    return (
        a.useEffect(() => () => _(), [c, _]),
        (0, i.jsx)(eC.Z, {
            tooltipText: (0, L.Z)(t, n, s),
            onMouseEnter: h,
            onMouseLeave: m,
            icon: (0, i.jsx)(I, {
                size: 'custom',
                width: 20,
                height: 20,
                color: c ? E.tokens.colors.STATUS_DANGER : 'currentColor'
            }),
            onClick: l,
            onContextMenu: o,
            innerClassName: r()({ [eO.redIcon]: n }),
            iconForeground: c ? eO.strikethrough : null,
            role: 'switch',
            'aria-label': eR.Z.Messages.DEAFEN,
            'aria-checked': c,
            disabled: s
        })
    );
}
