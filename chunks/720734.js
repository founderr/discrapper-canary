n.d(t, {
    Z: function () {
        return eU;
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
    f = n(586902),
    S = n(570928),
    C = n(100527),
    N = n(906732),
    A = n(676742),
    v = n(1585),
    L = n(304761),
    Z = n(865427),
    R = n(571250),
    O = n(628581),
    x = n(55311),
    b = n(575175),
    P = n(64220),
    M = n(377171),
    D = n(600164),
    y = n(676035),
    j = n(427217),
    U = n(605236),
    G = n(243778),
    k = n(730417),
    w = n(524347),
    B = n(853197),
    H = n(810280),
    V = n(60762),
    F = n(258609),
    Y = n(331541),
    z = n(332473),
    W = n(240504),
    K = n(637906),
    q = n(39370),
    Q = n(19199),
    X = n(111653),
    J = n(866483),
    $ = n(14357),
    ee = n(393333),
    et = n(763296),
    en = n(640806),
    ei = n(184301),
    ea = n(52538),
    es = n(879815),
    er = n(294629),
    el = n(314897),
    eo = n(592125),
    ec = n(819640),
    ed = n(131951),
    eu = n(19780),
    e_ = n(885110),
    eE = n(246946),
    eh = n(594174),
    em = n(78839),
    eI = n(626135),
    eg = n(768581),
    ep = n(572004),
    eT = n(70956),
    ef = n(74538),
    eS = n(374023),
    eC = n(51144),
    eN = n(998502),
    eA = n(870569),
    ev = n(345243),
    eL = n(115530),
    eZ = n(981631),
    eR = n(215023),
    eO = n(702512),
    ex = n(689938),
    eb = n(59923);
function eP(e, t, n) {
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
let eM = eN.ZP.getEnableHardwareAcceleration() ? E.AnimatedAvatar : E.Avatar,
    eD = 30 * eT.Z.Millis.DAY;
function ey(e) {
    let { speaking: t, streaming: n, currentUser: a, status: s, handleMouseLeave: l, renderNameTag: o } = e,
        c = (0, A.Z)(null == a ? void 0 : a.avatarDecoration),
        d = (0, eg.NZ)({
            avatarDecoration: c,
            size: (0, v.y9)(E.AvatarSizes.SIZE_32)
        });
    return null == a
        ? null
        : (0, i.jsx)(g.Z, {
              object: eZ.qAy.AVATAR,
              children: (0, i.jsx)(E.Popout, {
                  renderPopout: (e) => {
                      let { closePopout: t, setPopoutRef: n } = e;
                      return (0, i.jsx)('div', {
                          className: eb.accountProfilePopoutWrapper,
                          children: (0, i.jsx)(Y.Z, {
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
                      (0, ei.Z)(a, void 0, {
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  children: (e) =>
                      (0, i.jsxs)(E.Clickable, {
                          ...e,
                          'aria-label': ex.Z.Messages.SET_STATUS,
                          className: eb.avatarWrapper,
                          children: [
                              (0, i.jsx)(eM, {
                                  size: E.AvatarSizes.SIZE_32,
                                  src: a.getAvatarURL(void 0, 32, !1),
                                  avatarDecoration: d,
                                  'aria-label': a.username,
                                  status: n ? eZ.Skl.STREAMING : s,
                                  isSpeaking: t,
                                  className: eb.avatar
                              }),
                              (0, i.jsx)('div', {
                                  className: r()(eb.nameTag, { [eb.canCopy]: ep.wS }),
                                  children: o()
                              })
                          ]
                      })
              })
          });
}
class ej extends a.PureComponent {
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
            t = [ex.Z.Messages.COPY_SUCCESS_1, ex.Z.Messages.COPY_SUCCESS_2, ex.Z.Messages.COPY_SUCCESS_3, ex.Z.Messages.COPY_SUCCESS_4, ex.Z.Messages.COPY_SUCCESS_5, ex.Z.Messages.COPY_SUCCESS_6, ex.Z.Messages.COPY_SUCCESS_7, ex.Z.Messages.COPY_SUCCESS_8, ex.Z.Messages.COPY_SUCCESS_9, ex.Z.Messages.COPY_SUCCESS_10, ex.Z.Messages.COPY_SUCCESS_11],
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
        let l = eC.ZP.getName(s),
            o = null != r && r !== eZ.Skl.UNKNOWN,
            c = null != n;
        return (
            (c || (o && s.isPomelo())) &&
                (e = (0, i.jsx)(S.Z, {
                    hoverText: a,
                    forceHover: t,
                    children: c
                        ? (0, i.jsx)(j.Z, {
                              activity: n,
                              emojiClassName: eb.emoji,
                              className: eb.customStatus
                          })
                        : eC.ZP.humanizeStatus(r)
                })),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        className: eb.panelTitleContainer,
                        children: (0, i.jsx)(eL.Z, { children: l })
                    }),
                    (0, i.jsx)('div', {
                        className: eb.panelSubtextContainer,
                        children: (0, i.jsx)(ev.Z, { children: null != e ? e : a })
                    })
                ]
            })
        );
    }
    renderAvatarWithPopout() {
        return (0, i.jsx)(ey, {
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
                  children: (0, i.jsx)(G.ZP, {
                      contentTypes: t.avatar,
                      children: (e) => {
                          let { visibleContent: t, markAsDismissed: n } = e;
                          if (t === o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)
                              return (0, i.jsx)(P.Z, {
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
                  className: eb.container,
                  onMouseEnter: this.handleMouseEnter,
                  onMouseLeave: this.handleMouseLeave,
                  children: [
                      this.renderNameZone(),
                      (0, i.jsxs)(D.Z, {
                          grow: 0,
                          className: eb.buttons,
                          children: [
                              (0, i.jsx)(ek, {
                                  selfMute: n,
                                  serverMute: s,
                                  suppress: l,
                                  awaitingRemote: a,
                                  tooltipText: d ? ex.Z.Messages.ACCOUNT_SPEAKING_WHILE_MUTED : (0, O.Z)(n, s, l, a),
                                  tooltipColor: d ? E.TooltipColors.GREEN : void 0,
                                  tooltipForceOpen: d || void 0,
                                  onMouseEnter: this.handleMouseEnterMute,
                                  onMouseLeave: this.handleMouseLeaveMute,
                                  onClick: this.handleToggleSelfMute,
                                  onContextMenu: this.handleInputAudioContextMenu
                              }),
                              (0, i.jsx)(ew, {
                                  selfDeaf: t,
                                  serverDeaf: r,
                                  onClick: this.handleToggleSelfDeaf,
                                  onContextMenu: this.handleOutputAudioContextMenu,
                                  awaitingRemote: a
                              }),
                              (0, i.jsx)(G.ZP, {
                                  contentTypes: c.settings,
                                  children: (e) => {
                                      let { visibleContent: t, markAsDismissed: n } = e;
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
                                                  renderPopout: () =>
                                                      (0, i.jsx)(H.Z, {
                                                          markAsDismissed: n,
                                                          partnerGame: eO.X2.FORTNITE
                                                      }),
                                                  children: this.renderSettingsGear
                                              });
                                          case o.z.QUEST_2_COMPLETION_TOOLTIP:
                                              return (0, i.jsx)(E.Popout, {
                                                  position: 'top',
                                                  align: 'center',
                                                  shouldShow: !0,
                                                  renderPopout: () =>
                                                      (0, i.jsx)(V.Z, {
                                                          markAsDismissed: n,
                                                          partnerGame: eO.X2.FORTNITE
                                                      }),
                                                  children: this.renderSettingsGear
                                              });
                                          case o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                                              return (0, i.jsx)(E.Popout, {
                                                  position: 'top',
                                                  align: 'center',
                                                  shouldShow: !0,
                                                  renderPopout: () => (0, i.jsx)(J.Z, { markAsDismissed: n }),
                                                  children: this.renderSettingsGear
                                              });
                                          case o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                                              return (0, i.jsx)(E.Popout, {
                                                  position: 'top',
                                                  align: 'center',
                                                  shouldShow: !0,
                                                  renderPopout: () => (0, i.jsx)($.Z, { markAsDismissed: n }),
                                                  children: this.renderSettingsGear
                                              });
                                          case o.z.SOUNDBOARD_VOLUME_EDUCATION:
                                              return (0, i.jsx)(E.Popout, {
                                                  position: 'top',
                                                  align: 'center',
                                                  shouldShow: !0,
                                                  renderPopout: () => (0, i.jsx)(en.Z, { markAsDismissed: n }),
                                                  children: this.renderSettingsGear
                                              });
                                          case o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
                                              return (0, i.jsx)(E.Popout, {
                                                  position: 'top',
                                                  align: 'center',
                                                  shouldShow: !0,
                                                  renderPopout: () => (0, i.jsx)(ee.P, { markAsDismissed: n }),
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
            eP(this, 'copiedTimeout', new c.V7()),
            eP(this, 'copiedDecayTimeout', new c.V7()),
            eP(this, 'speakingWhileMutedTooltipTimeout', new c.V7()),
            eP(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            eP(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t } = this.props;
                (0, b.Z)(e, t, eZ.jXE.ACCOUNT_PANEL);
            }),
            eP(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e } = this.props;
                (0, x.Z)(e);
            }),
            eP(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            eP(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                I.Z.open(e, t, n);
            }),
            eP(this, 'handleOpenSettingsContextMenu', (e) => {
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
            eP(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, m.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(N.Gt, {
                            value: t,
                            children: (0, i.jsx)(e, {
                                onClose: m.Zy,
                                renderInputDevices: !0,
                                renderInputModes: !0,
                                renderInputVolume: !0
                            })
                        });
                });
            }),
            eP(this, 'handleOutputAudioContextMenu', (e, t) => {
                (0, m.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(N.Gt, {
                            value: t,
                            children: (0, i.jsx)(e, {
                                onClose: m.Zy,
                                renderOutputDevices: !0,
                                renderOutputVolume: !0
                            })
                        });
                });
            }),
            eP(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            eP(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            eP(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            eP(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            eP(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, ep.JG)(
                    eC.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eI.default.track(eZ.rMx.TEXT_COPIED, { type: 'User Tag' });
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                !t && (i.copiedStreak = n + 1),
                    this.setState(i, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            eP(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            eP(this, 'handleSpeakingWhileMutedChanged', () => {
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
            eP(this, 'renderSettingsGear', () =>
                (0, i.jsx)(eG, {
                    isEligibleForPomelo: this.props.isEligibleForPomelo,
                    webBuildOverride: this.props.webBuildOverride,
                    onClick: this.handleOpenAccountSettings,
                    onContextMenu: this.handleOpenSettingsContextMenu
                })
            );
    }
}
function eU() {
    var e, t;
    let n = (0, l.e7)([eh.default], () => eh.default.getCurrentUser()),
        s = (0, k._g)(eO.X2.FORTNITE),
        r = (0, l.e7)([el.default], () => el.default.getId()),
        c = (0, y.a)(),
        { streaming: d, status: u } = (0, l.cj)([e_.Z], () => ({
            streaming: null != e_.Z.findActivity((e) => e.type === eZ.IIU.STREAMING),
            status: e_.Z.getStatus()
        })),
        _ = (0, f.Z)({ userId: r }),
        m = eC.ZP.useUserTag(n, { decoration: 'never' }),
        I = (0, l.e7)([eE.Z], () => eE.Z.hidePersonalInformation),
        g = (0, l.e7)([eu.Z, eo.Z], () => {
            let e = eu.Z.getChannelId();
            return null != e ? eo.Z.getChannel(e) : null;
        }),
        { mute: S, selfMute: A, suppress: v } = (0, er.Z)(g),
        { selfDeaf: R, deaf: O } = (0, es.Z)(g),
        x = (0, l.e7)([L.C], () => {
            var e;
            return (0, Z.fD)() ? (null === (e = L.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        b = (0, l.e7)([em.ZP], () => em.ZP.getPremiumTypeSubscription()),
        P = (0, l.e7)([ed.Z], () => ed.Z.getEverSpeakingWhileMuted()),
        M = (0, l.e7)([ec.Z], () => ec.Z.hasLayers()),
        D = (0, E.useModalsStore)(E.hasAnyModalOpenSelector) || M || eS.s.isDisallowPopupsSet(),
        j = (0, z.b)(),
        G = (0, l.e7)([F.Z], () => null != F.Z.getAwaitingRemoteSessionInfo()),
        H = (0, l.e7)([w.Z], () => w.Z.isCurrentQuestCompleted),
        V = (0, l.e7)([w.Z], () => w.Z.currentDropQuestGameTitle),
        Y = (0, Q.D)(),
        q = (0, p.u)(),
        J = (0, X.t)(),
        $ = ef.ZP.canUsePremiumGuildMemberProfile(n),
        ee = (null == n ? void 0 : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eR.rL,
        en = 'account';
    (0, T.j)({
        location: en + ' auto on',
        autoTrackExposure: !0
    }),
        (0, T.j)({
            location: en + ' auto off',
            autoTrackExposure: !1
        });
    let ei = (0, l.e7)([et.Z], () => et.Z.hasHadOtherUserPlaySoundInSession()),
        ea = (function () {
            let e = (0, U.wE)(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, l.Wu)([W.Z], () => [W.Z.hasFetchedRelevance, W.Z.profileThemesRelevanceExceeded]),
                [i, s] = (0, l.Wu)([em.ZP], () => [em.ZP.hasFetchedMostRecentPremiumTypeSubscription(), em.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: r } = K.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                c = a.useMemo(() => {
                    let e = new Date().getTime();
                    return null != s && (s.status === eZ.O0b.ACTIVE || e - s.currentPeriodEnd.getTime() < eD);
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
        { analyticsLocations: eI } = (0, N.ZP)(C.Z.ACCOUNT),
        eg = {
            avatar: [],
            settings: []
        };
    return (
        !D && (ea && eg.settings.push(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), s && (eg.settings.push(o.z.QUEST_2_ENROLLMENT_TOOLTIP), H && V === (null === (t = (0, B.BS)(eO.X2.FORTNITE)) || void 0 === t ? void 0 : t.title) && eg.settings.push(o.z.QUEST_2_COMPLETION_TOOLTIP)), Y && (1 === q ? eg.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : eg.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), ei && eg.settings.push(o.z.SOUNDBOARD_VOLUME_EDUCATION), J && eg.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING), $ && eg.settings.push(o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), ee && eg.avatar.push(o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)),
        (0, i.jsx)(N.Gt, {
            value: eI,
            children: (0, i.jsx)(ej, {
                currentUser: n,
                customStatusActivity: c,
                dismissibleContents: eg,
                userTag: m,
                hidePrivateData: I,
                occluded: D,
                premiumSubscription: b,
                selfDeaf: R,
                selfMute: A,
                serverDeaf: O,
                serverMute: S,
                speaking: _,
                speakingWhileMuted: P,
                status: u,
                streaming: d,
                suppress: v,
                webBuildOverride: x,
                awaitingRemote: G,
                isEligibleForPomelo: j
            })
        })
    );
}
function eG(e) {
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
                    className: eb.hasBuildOverride,
                    'aria-hidden': !0
                }))
              : n &&
                (l = (0, i.jsx)(E.CircleBadge, {
                    color: M.Z.STATUS_DANGER,
                    className: eb.hasBuildOverride,
                    'aria-hidden': !0
                })),
        (0, i.jsx)(eA.Z, {
            tooltipText: null != t ? ex.Z.Messages.USER_SETTINGS_WITH_BUILD_OVERRIDE.format({ webBuildOverride: t.id }) : ex.Z.Messages.USER_SETTINGS,
            onClick: a,
            onContextMenu: s,
            innerClassName: null != t || n ? eb.buildOverrideButton : null,
            icon: o,
            ...c.events,
            children: l
        })
    );
}
function ek(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: r, tooltipText: l, tooltipColor: o, tooltipForceOpen: c, onMouseEnter: d, onMouseLeave: _, onClick: h, onContextMenu: m } = e,
        I = t || s || n,
        { Component: g, play: p, events: T } = (0, u.O)(I ? 'unmute' : 'mute'),
        f = n || s ? E.MicrophoneDenyIcon : g,
        { analyticsLocations: S } = (0, N.ZP)(C.Z.AUDIO_INPUT_BUTTON);
    a.useEffect(() => () => p(), [I, p]);
    let A = a.useCallback(
        (e) => {
            m(e, S);
        },
        [m, S]
    );
    return (0, i.jsx)(N.Gt, {
        value: S,
        children: (0, i.jsx)(eA.Z, {
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
                color: I ? E.tokens.colors.STATUS_DANGER : 'currentColor'
            }),
            iconForeground: I ? eb.strikethrough : null,
            onClick: h,
            onContextMenu: A,
            role: 'switch',
            'aria-label': ex.Z.Messages.MUTE,
            'aria-checked': I,
            disabled: r
        })
    });
}
function ew(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: l, onContextMenu: o } = e,
        c = t || n,
        {
            Component: u,
            play: _,
            events: { onMouseEnter: h, onMouseLeave: m }
        } = (0, d.l)(c ? 'undeafen' : 'deafen'),
        I = n ? E.HeadphonesDenyIcon : u,
        { analyticsLocations: g } = (0, N.ZP)(C.Z.AUDIO_OUTPUT_BUTTON);
    a.useEffect(() => () => _(), [c, _]);
    let p = a.useCallback(
        (e) => {
            o(e, g);
        },
        [o, g]
    );
    return (0, i.jsx)(N.Gt, {
        value: g,
        children: (0, i.jsx)(eA.Z, {
            tooltipText: (0, R.Z)(t, n, s),
            onMouseEnter: h,
            onMouseLeave: m,
            icon: (0, i.jsx)(I, {
                size: 'custom',
                width: 20,
                height: 20,
                color: c ? E.tokens.colors.STATUS_DANGER : 'currentColor'
            }),
            onClick: l,
            onContextMenu: p,
            innerClassName: r()({ [eb.redIcon]: n }),
            iconForeground: c ? eb.strikethrough : null,
            role: 'switch',
            'aria-label': ex.Z.Messages.DEAFEN,
            'aria-checked': c,
            disabled: s
        })
    });
}
