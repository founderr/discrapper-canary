n.d(t, {
    Z: function () {
        return ej;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(704215),
    c = n(846519),
    d = n(400354),
    u = n(652844),
    h = n(789639),
    m = n(481060),
    p = n(355467),
    g = n(239091),
    f = n(230711),
    _ = n(410575),
    E = n(941129),
    I = n(634894),
    C = n(586902),
    v = n(570928),
    N = n(100527),
    S = n(906732),
    T = n(676742),
    b = n(1585),
    x = n(304761),
    A = n(865427),
    Z = n(571250),
    L = n(628581),
    y = n(55311),
    P = n(575175),
    O = n(64220),
    R = n(377171),
    j = n(600164),
    D = n(676035),
    M = n(427217),
    w = n(540059),
    k = n(605236),
    U = n(243778),
    G = n(258609),
    B = n(427347),
    H = n(443669),
    V = n(332473),
    F = n(240504),
    z = n(637906),
    W = n(39370),
    Y = n(19199),
    K = n(111653),
    q = n(866483),
    X = n(14357),
    Q = n(393333),
    J = n(763296),
    $ = n(640806),
    ee = n(184301),
    et = n(52538),
    en = n(879815),
    ei = n(294629),
    er = n(314897),
    el = n(592125),
    ea = n(819640),
    es = n(131951),
    eo = n(19780),
    ec = n(885110),
    ed = n(246946),
    eu = n(594174),
    eh = n(78839),
    em = n(626135),
    ep = n(768581),
    eg = n(572004),
    ef = n(70956),
    e_ = n(74538),
    eE = n(374023),
    eI = n(51144),
    eC = n(998502),
    ev = n(870569),
    eN = n(345243),
    eS = n(115530),
    eT = n(981631),
    eb = n(215023),
    ex = n(388032),
    eA = n(628005);
function eZ(e, t, n) {
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
let eL = eC.ZP.getEnableHardwareAcceleration() ? m.AnimatedAvatar : m.Avatar,
    ey = 2 * ef.Z.Millis.MINUTE,
    eP = 30 * ef.Z.Millis.DAY;
function eO(e) {
    let { speaking: t, streaming: n, currentUser: r, status: l, handleMouseLeave: s, renderNameTag: o } = e,
        c = (0, w.Q)('RTC Avatar'),
        d = (0, T.Z)(null == r ? void 0 : r.avatarDecoration),
        u = (0, ep.NZ)({
            avatarDecoration: d,
            size: (0, b.y9)(m.AvatarSizes.SIZE_32)
        });
    return null == r
        ? null
        : (0, i.jsx)(_.Z, {
              object: eT.qAy.AVATAR,
              children: (0, i.jsx)(m.Popout, {
                  renderPopout: (e) => {
                      let { closePopout: t, setPopoutRef: n } = e;
                      return (0, i.jsx)('div', {
                          className: eA.accountProfilePopoutWrapper,
                          children: (0, i.jsx)(H.Z, {
                              currentUser: r,
                              setPopoutRef: n,
                              onClose: () => {
                                  s(), null == t || t();
                              }
                          })
                      });
                  },
                  position: 'top',
                  align: 'left',
                  animation: m.Popout.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  preload: () =>
                      (0, ee.Z)(r, void 0, {
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  children: (e) =>
                      (0, i.jsxs)(m.Clickable, {
                          ...e,
                          'aria-label': ex.intl.string(ex.t['3Uj+2t']),
                          className: eA.avatarWrapper,
                          children: [
                              (0, i.jsx)(eL, {
                                  size: c ? m.AvatarSizes.SIZE_44 : m.AvatarSizes.SIZE_32,
                                  src: r.getAvatarURL(void 0, c ? 44 : 32, !1),
                                  avatarDecoration: u,
                                  'aria-label': r.username,
                                  status: n ? eT.Skl.STREAMING : l,
                                  isSpeaking: t,
                                  className: eA.avatar
                              }),
                              (0, i.jsx)('div', {
                                  className: a()(eA.nameTag, { [eA.canCopy]: eg.wS }),
                                  children: o()
                              })
                          ]
                      })
              })
          });
}
class eR extends r.PureComponent {
    get isCopiedStreakGodlike() {
        let { copiedStreak: e } = this.state;
        return e >= 10;
    }
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, occluded: n } = e,
            { speakingWhileMuted: i, occluded: r } = this.props;
        r !== n && this.handleOccludedChanged(), i !== t && this.handleSpeakingWhileMutedChanged();
    }
    componentWillUnmount() {
        this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop();
    }
    renderCopiedSuccess() {
        let { copiedStreak: e } = this.state,
            t = [ex.intl.string(ex.t.MSaeTU), ex.intl.string(ex.t.UmrCw8), ex.intl.string(ex.t.gKE0Ji), ex.intl.string(ex.t['4DSKbm']), ex.intl.string(ex.t['+8ENdX']), ex.intl.string(ex.t.GlWHv7), ex.intl.string(ex.t.hIzxU1), ex.intl.string(ex.t['26uMPD']), ex.intl.string(ex.t.uFs7R0), ex.intl.string(ex.t.bLXdcX), ex.intl.string(ex.t.gPg9fX)],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, i.jsx)(m.Shaker, {
            isShaking: this.isCopiedStreakGodlike,
            children: t[n]
        });
    }
    renderNameTag() {
        let e;
        let { hovered: t } = this.state,
            { customStatusActivity: n, userTag: r, currentUser: l, status: a } = this.props;
        if (null == l) return null;
        let s = eI.ZP.getName(l),
            o = null != a && a !== eT.Skl.UNKNOWN,
            c = null != n;
        return (
            (c || (o && l.isPomelo())) &&
                (e = (0, i.jsx)(v.Z, {
                    hoverText: r,
                    forceHover: t,
                    children: c
                        ? (0, i.jsx)(M.Z, {
                              activity: n,
                              emojiClassName: eA.emoji,
                              className: eA.customStatus
                          })
                        : eI.ZP.humanizeStatus(a)
                })),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        className: eA.panelTitleContainer,
                        children: (0, i.jsx)(eS.Z, { children: s })
                    }),
                    (0, i.jsx)('div', {
                        className: eA.panelSubtextContainer,
                        children: (0, i.jsx)(eN.Z, { children: null != e ? e : r })
                    })
                ]
            })
        );
    }
    renderAvatarWithPopout() {
        return (0, i.jsx)(eO, {
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
                  children: (0, i.jsx)(U.ZP, {
                      contentTypes: t.avatar,
                      children: (e) => {
                          let { visibleContent: t, markAsDismissed: n } = e;
                          if (t === o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)
                              return (0, i.jsx)(O.Z, {
                                  markAsDismissed: n,
                                  children: () => this.renderAvatarWithPopout()
                              });
                          return this.renderAvatarWithPopout();
                      }
                  })
              });
    }
    render() {
        let { currentUser: e, selfDeaf: t, selfMute: n, awaitingRemote: r, serverMute: l, serverDeaf: a, suppress: s, dismissibleContents: c } = this.props,
            { shouldShowSpeakingWhileMutedTooltip: d } = this.state;
        return null == e
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)('div', {
                          className: eA.container,
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              this.renderNameZone(),
                              (0, i.jsxs)(j.Z, {
                                  grow: 0,
                                  className: eA.buttons,
                                  children: [
                                      (0, i.jsx)(eM, {
                                          selfMute: n,
                                          serverMute: l,
                                          suppress: s,
                                          awaitingRemote: r,
                                          tooltipText: d ? ex.intl.string(ex.t['29gnR0']) : (0, L.Z)(n, l, s, r),
                                          tooltipColor: d ? m.TooltipColors.GREEN : void 0,
                                          tooltipForceOpen: d || void 0,
                                          onMouseEnter: this.handleMouseEnterMute,
                                          onMouseLeave: this.handleMouseLeaveMute,
                                          onClick: this.handleToggleSelfMute,
                                          onContextMenu: this.handleInputAudioContextMenu
                                      }),
                                      (0, i.jsx)(ew, {
                                          selfDeaf: t,
                                          serverDeaf: a,
                                          onClick: this.handleToggleSelfDeaf,
                                          onContextMenu: this.handleOutputAudioContextMenu,
                                          awaitingRemote: r
                                      }),
                                      (0, i.jsx)(U.ZP, {
                                          contentTypes: c.settings,
                                          children: (e) => {
                                              let { visibleContent: t, markAsDismissed: n } = e;
                                              switch (t) {
                                                  case o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(W.Z, {}),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(q.Z, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(X.Z, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case o.z.SOUNDBOARD_VOLUME_EDUCATION:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)($.Z, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(Q.P, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(et.Z, {}),
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
                      }),
                      (0, i.jsx)(B.Z, {})
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            eZ(this, 'copiedTimeout', new c.V7()),
            eZ(this, 'copiedDecayTimeout', new c.V7()),
            eZ(this, 'speakingWhileMutedTooltipTimeout', new c.V7()),
            eZ(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            eZ(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            eZ(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t } = this.props;
                (0, P.Z)(e, t, eT.jXE.ACCOUNT_PANEL);
            }),
            eZ(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e } = this.props;
                (0, y.Z)(e, eT.jXE.ACCOUNT_PANEL);
            }),
            eZ(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            eZ(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                f.Z.open(e, t, n);
            }),
            eZ(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, g.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('23217'), n.e('33053'), n.e('8016'), n.e('76540'), n.e('15669'), n.e('17938'), n.e('22646'), n.e('34842'), n.e('30419'), n.e('48923'), n.e('8821'), n.e('18824'), n.e('89985'), n.e('62804')]).then(n.bind(n, 923422));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                user: t,
                                premiumSubscription: this.props.premiumSubscription,
                                webBuildOverride: this.props.webBuildOverride
                            });
                    });
            }),
            eZ(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, g.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(S.Gt, {
                            value: t,
                            children: (0, i.jsx)(e, {
                                onClose: g.Zy,
                                renderInputDevices: !0,
                                renderInputModes: !0,
                                renderInputVolume: !0
                            })
                        });
                });
            }),
            eZ(this, 'handleOutputAudioContextMenu', (e, t) => {
                (0, g.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(S.Gt, {
                            value: t,
                            children: (0, i.jsx)(e, {
                                onClose: g.Zy,
                                renderOutputDevices: !0,
                                renderOutputVolume: !0
                            })
                        });
                });
            }),
            eZ(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            eZ(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            eZ(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            eZ(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            eZ(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eg.JG)(
                    eI.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    em.default.track(eT.rMx.TEXT_COPIED, { type: 'User Tag' });
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                !t && (i.copiedStreak = n + 1),
                    this.setState(i, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            eZ(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            eZ(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: i, occluded: r } = this.props,
                    { hoveringOnMute: l } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > ey;
                i
                    ? !l &&
                      e &&
                      !t &&
                      !n &&
                      !r &&
                      a &&
                      this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                          (this.lastSpeakingWhileMutedNotificationTime = Date.now()), this.speakingWhileMutedTooltipTimeout.start(2000, () => this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }));
                      })
                    : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }), this.speakingWhileMutedTooltipTimeout.stop());
            }),
            eZ(this, 'renderSettingsGear', () =>
                (0, i.jsx)(eD, {
                    isEligibleForPomelo: this.props.isEligibleForPomelo,
                    webBuildOverride: this.props.webBuildOverride,
                    onClick: this.handleOpenAccountSettings,
                    onContextMenu: this.handleOpenSettingsContextMenu
                })
            );
    }
}
function ej() {
    var e;
    let t = (0, s.e7)([eu.default], () => eu.default.getCurrentUser()),
        n = (0, s.e7)([er.default], () => er.default.getId()),
        l = (0, D.a)(),
        { streaming: a, status: c } = (0, s.cj)([ec.Z], () => ({
            streaming: null != ec.Z.findActivity((e) => e.type === eT.IIU.STREAMING),
            status: ec.Z.getStatus()
        })),
        d = (0, C.Z)({ userId: n }),
        u = eI.ZP.useUserTag(t, { decoration: 'never' }),
        h = (0, s.e7)([ed.Z], () => ed.Z.hidePersonalInformation),
        g = (0, s.e7)([eo.Z, el.Z], () => {
            let e = eo.Z.getChannelId();
            return null != e ? el.Z.getChannel(e) : null;
        }),
        { mute: f, selfMute: _, suppress: v } = (0, ei.Z)(g),
        { selfDeaf: T, deaf: b } = (0, en.Z)(g),
        Z = (0, s.e7)([x.C], () => {
            var e;
            return (0, A.fD)() ? (null === (e = x.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        L = (0, s.e7)([eh.ZP], () => eh.ZP.getPremiumTypeSubscription()),
        y = (0, s.e7)([es.Z], () => es.Z.getSpeakingWhileMuted()),
        P = (0, s.e7)([ea.Z], () => ea.Z.hasLayers()),
        O = (0, m.useModalsStore)(m.hasAnyModalOpenSelector) || P || eE.s.isDisallowPopupsSet(),
        R = (0, V.b)(),
        j = (0, s.e7)([G.Z], () => null != G.Z.getAwaitingRemoteSessionInfo()),
        M = (0, Y.D)(),
        w = (0, E.u)(),
        U = (0, K.t)(),
        B = e_.ZP.canUsePremiumGuildMemberProfile(t),
        H = (null == t ? void 0 : null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eb.rL,
        W = 'account';
    (0, I.j)({
        location: W + ' auto on',
        autoTrackExposure: !0
    }),
        (0, I.j)({
            location: W + ' auto off',
            autoTrackExposure: !1
        });
    let q = (0, s.e7)([J.Z], () => J.Z.hasHadOtherUserPlaySoundInSession()),
        X = (function () {
            let e = (0, k.wE)(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, s.Wu)([F.Z], () => [F.Z.hasFetchedRelevance, F.Z.profileThemesRelevanceExceeded]),
                [i, l] = (0, s.Wu)([eh.ZP], () => [eh.ZP.hasFetchedMostRecentPremiumTypeSubscription(), eh.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: a } = z.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                c = r.useMemo(() => {
                    let e = new Date().getTime();
                    return null != l && (l.status === eT.O0b.ACTIVE || e - l.currentPeriodEnd.getTime() < eP);
                }, [l]);
            return (
                r.useEffect(() => {
                    (async () => {
                        if (e || null != n || !a) return;
                        if (!i) {
                            await (0, p.ou)();
                            return;
                        }
                        if (!c) !t && (await (0, p.l0)());
                    })();
                }, [a, n, e, i, t, c]),
                !e && !!a && !c && null != n && n
            );
        })(),
        { analyticsLocations: Q } = (0, S.ZP)(N.Z.ACCOUNT),
        $ = {
            avatar: [],
            settings: []
        };
    return (
        !O && (X && $.settings.push(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), M && (1 === w ? $.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : $.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), q && $.settings.push(o.z.SOUNDBOARD_VOLUME_EDUCATION), U && $.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING), B && $.settings.push(o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), H && $.avatar.push(o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)),
        (0, i.jsx)(S.Gt, {
            value: Q,
            children: (0, i.jsx)(eR, {
                currentUser: t,
                customStatusActivity: l,
                dismissibleContents: $,
                userTag: u,
                hidePrivateData: h,
                occluded: O,
                premiumSubscription: L,
                selfDeaf: T,
                selfMute: _,
                serverDeaf: b,
                serverMute: f,
                speaking: d,
                speakingWhileMuted: y,
                status: c,
                streaming: a,
                suppress: v,
                webBuildOverride: Z,
                awaitingRemote: j,
                isEligibleForPomelo: R
            })
        })
    );
}
function eD(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: r, onContextMenu: l } = e,
        a = (0, m.useRedesignIconContext)().enabled,
        s = null,
        o = m.SettingsIcon,
        c = (0, h.i)();
    return (
        a
            ? (o = null != t ? m.SettingsInfoIcon : n ? m.SettingsCircleIcon : c.Component)
            : null != t
              ? (s = (0, i.jsx)(m.CircleInformationIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 9,
                    height: 9,
                    className: eA.hasBuildOverride,
                    'aria-hidden': !0
                }))
              : n &&
                (s = (0, i.jsx)(m.CircleBadge, {
                    color: R.Z.STATUS_DANGER,
                    className: eA.hasBuildOverride,
                    'aria-hidden': !0
                })),
        (0, i.jsx)(ev.Z, {
            tooltipText: null != t ? ex.intl.formatToPlainString(ex.t.Gzh6ZG, { webBuildOverride: t.id }) : ex.intl.string(ex.t.cduTBA),
            onClick: r,
            onContextMenu: l,
            innerClassName: null != t || n ? eA.buildOverrideButton : null,
            icon: o,
            ...c.events,
            children: s
        })
    );
}
function eM(e) {
    let { selfMute: t, serverMute: n, suppress: l, awaitingRemote: a, tooltipText: s, tooltipColor: o, tooltipForceOpen: c, onMouseEnter: d, onMouseLeave: h, onClick: p, onContextMenu: g } = e,
        f = t || l || n,
        { Component: _, play: E, events: I } = (0, u.O)(f ? 'unmute' : 'mute'),
        C = n || l ? m.MicrophoneDenyIcon : _,
        { analyticsLocations: v } = (0, S.ZP)(N.Z.AUDIO_INPUT_BUTTON);
    r.useEffect(() => () => E(), [f, E]);
    let T = r.useCallback(
        (e) => {
            g(e, v);
        },
        [g, v]
    );
    return (0, i.jsx)(S.Gt, {
        value: v,
        children: (0, i.jsx)(ev.Z, {
            tooltipText: s,
            tooltipColor: o,
            tooltipForceOpen: c,
            onMouseEnter: () => {
                d(), I.onMouseEnter();
            },
            onMouseLeave: () => {
                h(), I.onMouseLeave();
            },
            icon: (0, i.jsx)(C, {
                size: 'custom',
                width: 20,
                height: 20,
                color: f ? m.tokens.colors.STATUS_DANGER : 'currentColor'
            }),
            iconForeground: f ? eA.strikethrough : null,
            onClick: p,
            onContextMenu: T,
            role: 'switch',
            'aria-label': ex.intl.string(ex.t['w4m94+']),
            'aria-checked': f,
            disabled: a
        })
    });
}
function ew(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: l, onClick: s, onContextMenu: o } = e,
        c = t || n,
        {
            Component: u,
            play: h,
            events: { onMouseEnter: p, onMouseLeave: g }
        } = (0, d.l)(c ? 'undeafen' : 'deafen'),
        f = n ? m.HeadphonesDenyIcon : u,
        { analyticsLocations: _ } = (0, S.ZP)(N.Z.AUDIO_OUTPUT_BUTTON);
    r.useEffect(() => () => h(), [c, h]);
    let E = r.useCallback(
        (e) => {
            o(e, _);
        },
        [o, _]
    );
    return (0, i.jsx)(S.Gt, {
        value: _,
        children: (0, i.jsx)(ev.Z, {
            tooltipText: (0, Z.Z)(t, n, l),
            onMouseEnter: p,
            onMouseLeave: g,
            icon: (0, i.jsx)(f, {
                size: 'custom',
                width: 20,
                height: 20,
                color: c ? m.tokens.colors.STATUS_DANGER : 'currentColor'
            }),
            onClick: s,
            onContextMenu: E,
            innerClassName: a()({ [eA.redIcon]: n }),
            iconForeground: c ? eA.strikethrough : null,
            role: 'switch',
            'aria-label': ex.intl.string(ex.t.wjcRFR),
            'aria-checked': c,
            disabled: l
        })
    });
}
