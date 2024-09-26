n.d(t, {
    aO: function () {
        return ei;
    },
    le: function () {
        return e_;
    },
    op: function () {
        return eu;
    },
    y4: function () {
        return ec;
    }
});
var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(772848),
    c = n(748780),
    d = n(866442),
    _ = n(442837),
    E = n(846519),
    f = n(481060),
    h = n(596454),
    p = n(785388),
    m = n(607070),
    I = n(446489),
    T = n(367907),
    g = n(436774),
    S = n(98474),
    A = n(339085),
    v = n(906411),
    N = n(56314),
    O = n(231053),
    R = n(944386),
    C = n(305325),
    y = n(33154),
    L = n(692147),
    b = n(197115),
    D = n(659215),
    M = n(222677),
    P = n(995774),
    U = n(695346),
    w = n(592125),
    x = n(430824),
    G = n(542578),
    k = n(914010),
    B = n(594174),
    F = n(451478),
    Z = n(626135),
    V = n(74538),
    H = n(960020),
    Y = n(566006),
    j = n(886132),
    W = n(183023),
    K = n(524444),
    z = n(89729),
    q = n(640753),
    Q = n(981631),
    X = n(474936),
    $ = n(689938),
    J = n(507444),
    ee = n(96042),
    et = n(968661),
    en = n(564793);
function er(e, t, n) {
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
let ei = 9,
    ea = 200,
    eo = 300,
    es = 500,
    el = 750;
function eu(e, t, n) {
    (0, f.openModal)((e) =>
        (0, a.jsx)(p.default, {
            ...e,
            message: t,
            selectedReaction: n
        })
    );
}
function ec(e, t, n) {
    return (n === Y.O.BURST && t) || (n === Y.O.NORMAL && e);
}
class ed extends (r = o.PureComponent) {
    componentWillAppear(e) {
        this.animateIn(e);
    }
    componentWillEnter(e) {
        this.animateIn(e);
    }
    componentWillUnmount() {
        this.hideTooltip();
    }
    animateIn(e) {
        let { autoUnfurlReactionTooltip: t } = this.props;
        F.Z.isFocused()
            ? (this.scale.setValue(0),
              this.opacity.setValue(0),
              c.Z.parallel([
                  c.Z.timing(this.scale, {
                      toValue: 1,
                      duration: t ? ea : eo,
                      easing: c.Z.Easing.inOut(c.Z.Easing.back())
                  }),
                  c.Z.timing(this.opacity, {
                      toValue: 1,
                      duration: t ? ea : eo
                  })
              ]).start(e))
            : (this.scale.setValue(1), this.opacity.setValue(1), e());
    }
    render() {
        let e, t;
        let { count: n, burst_count: r, colors: i, isBurstReaction: o, hideCount: s, emoji: u, readOnly: _, isLurking: E, isGuest: p, isPendingMember: m, className: T, useChatFontScaling: g, message: A, hideEmoji: v, animationStartPosition: N } = this.props,
            { shouldShowTooltip: O, tooltipTextAria: R, reactionRef: C, tooltipPositionKey: y } = this.state,
            b = g ? et : ee,
            D = {
                transform: [{ scale: this.scale }],
                opacity: this.opacity
            },
            M = o ? r : n;
        if (o && null != i) {
            var U;
            let { accentColor: n, backgroundColor: r, opacity: a } = i,
                o = null !== (U = (0, d.wK)(null != r ? r : '', a)) && void 0 !== U ? U : '';
            this.isMe() && (D.borderColor = r), (D.background = o), (e = n), (t = n);
        }
        let w = null == C ? void 0 : C.getBoundingClientRect(),
            x = null != N && null != w,
            G = null == N;
        return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(f.Popout, {
                shouldShow: O,
                'aria-label': null != R && R,
                renderPopout: this.renderTooltip,
                nudgeAlignIntoViewport: !0,
                position: 'top',
                align: 'center',
                positionKey: y,
                children: () =>
                    (0, a.jsx)('div', {
                        onMouseEnter: this.handleEnter,
                        onMouseLeave: this.handleLeave,
                        ref: this.handleSetReactionRef,
                        children: (0, a.jsx)(c.Z.div, {
                            className: l()(b.reaction, T, {
                                [b.reactionMe]: this.isMe(),
                                [b.reactionReadOnly]: _ && !E && !m && !p,
                                [b.shakeReaction]: v && null == N
                            }),
                            style: D,
                            children: (0, a.jsx)(f.Popout, {
                                renderPopout: this.renderLurkerModeUpsellPopout,
                                position: 'top',
                                children: (n) =>
                                    (0, a.jsxs)(f.Clickable, {
                                        ...n,
                                        className: b.reactionInner,
                                        onClick: this.handleClick,
                                        'aria-disabled': _,
                                        'aria-label': (0, P.iD)(this.isMe(), M, u, o),
                                        'aria-pressed': this.isMe(),
                                        children: [
                                            (0, a.jsx)('div', {
                                                className: l()({ [b.burstGlow]: o }),
                                                style: { boxShadow: '0 0 16px '.concat(t) }
                                            }),
                                            (0, a.jsxs)('div', {
                                                children: [
                                                    o
                                                        ? (0, a.jsxs)(a.Fragment, {
                                                              children: [
                                                                  x &&
                                                                      (0, a.jsx)(S.Z, {
                                                                          messageId: A.id,
                                                                          emoji: u,
                                                                          startPosition: N,
                                                                          targetPosition: w
                                                                      }),
                                                                  G &&
                                                                      (0, a.jsx)(q.Z, {
                                                                          count: r,
                                                                          emoji: u,
                                                                          channelId: A.getChannelId(),
                                                                          messageId: A.id,
                                                                          useChatFontScaling: g,
                                                                          color: t
                                                                      })
                                                              ]
                                                          })
                                                        : null,
                                                    (0, a.jsx)(h.Z, {
                                                        className: l()({ [b.hideEmoji]: v }),
                                                        emojiId: u.id,
                                                        emojiName: u.name,
                                                        size: 'reaction',
                                                        animated: u.animated
                                                    })
                                                ]
                                            }),
                                            s
                                                ? null
                                                : (0, a.jsx)(I.Z, {
                                                      className: b.reactionCount,
                                                      value: M,
                                                      color: e,
                                                      digitWidth: ei
                                                  }),
                                            (0, a.jsx)(L.Z, {
                                                count: M,
                                                reactionRef: C
                                            })
                                        ]
                                    })
                            })
                        })
                    })
            })
        });
    }
    constructor(...e) {
        super(...e),
            er(this, 'isReactionEventActive', !1),
            er(this, 'isKeyboardNavigation', !1),
            er(this, 'scale', new c.Z.Value(1)),
            er(this, 'opacity', new c.Z.Value(1)),
            er(this, 'timeout', new E.V7()),
            er(this, 'hideTimeout', new E.V7()),
            er(this, 'ctaRef', o.createRef()),
            er(this, 'type', Y.O.NORMAL),
            er(this, 'colors', {
                backgroundColor: void 0,
                borderColor: void 0,
                textColor: void 0
            }),
            er(this, 'state', {
                shouldShowTooltip: !1,
                tooltipText: null,
                tooltipTextAria: null,
                reactionRef: null,
                tooltipPositionKey: void 0
            }),
            er(this, 'hasShownTooltip', !1),
            er(this, 'nonce', (0, u.Z)()),
            er(this, 'userCanBurstReact', () => this.props.userHasPremium),
            er(this, 'handleClick', (e) => {
                e.stopPropagation();
                let { message: t, emoji: n, readOnly: r, isBurstReaction: i, isPendingMember: a, isLurking: o, isGuest: s, isForumToolbar: l } = this.props,
                    u = w.Z.getChannel(t.getChannelId());
                if (o || s) {
                    var c, d;
                    null === (d = this.ctaRef) || void 0 === d || null === (c = d.current) || void 0 === c || c.focus();
                    return;
                }
                let _ = t.getChannelId(),
                    E = l ? M.TW.FORUM_TOOLBAR : M.TW.MESSAGE_INLINE_BUTTON;
                if (i && !this.userCanBurstReact()) {
                    (0, D.openBurstReactionsUpsellModal)({
                        analytics: {
                            type: X.cd.BURST_REACTION_UPSELL,
                            page: (null == u ? void 0 : u.getGuildId()) != null ? Q.ZY5.GUILD_CHANNEL : Q.ZY5.DM_CHANNEL,
                            section: null != u ? (0, P.s4)(u) : void 0,
                            object: Q.qAy.EMOJI_REACTION_UPSELL
                        }
                    });
                    return;
                }
                a
                    ? this.handleShowVerificationGate()
                    : !r &&
                      (this.isMe()
                          ? (0, M.WO)({
                                channelId: _,
                                messageId: t.id,
                                emoji: n,
                                location: E,
                                options: { burst: i }
                            })
                          : (0, M.rU)(_, t.id, n, E, { burst: i }));
            }),
            er(this, 'handleEnter', (e) => {
                let { emoji: t, message: n, type: r, reduceMotion: i, animateEmoji: a, autoUnfurlReactionTooltip: o } = this.props,
                    s = r === Y.O.BURST;
                s &&
                    !this.isReactionEventActive &&
                    !i &&
                    a &&
                    (0, M.T6)({
                        channelId: n.getChannelId(),
                        messageId: n.id,
                        emoji: t,
                        key: H.I.HOVER
                    }),
                    (this.isReactionEventActive = !0),
                    (this.isKeyboardNavigation = 'focus' === e.type),
                    this.timeout.start(s ? el : o ? ea : es, this.showTooltip, !1);
            }),
            er(this, 'handleEnterTooltip', () => {
                (this.isReactionEventActive = !0), this.handleShowTooltip();
            }),
            er(this, 'handleShowTooltip', () => {
                this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), G.Z.addChangeListener(this.updateTooltipText));
            }),
            er(this, 'showTooltip', () => {
                this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), (this.hasShownTooltip = !0);
            }),
            er(this, 'handleLeave', () => {
                (this.isReactionEventActive = !1), (this.isKeyboardNavigation = !1), this.timeout.stop(), G.Z.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1);
            }),
            er(this, 'hideTooltip', () => {
                this.setState({ shouldShowTooltip: !1 }), this.hasShownTooltip && Z.default.track(Q.rMx.CLOSE_POPOUT, { nonce: this.nonce });
            }),
            er(this, 'isMe', () => {
                let { me: e, me_burst: t, type: n } = this.props;
                return ec(e, t, n);
            }),
            er(this, 'updateTooltipText', () => {
                let { message: e, emoji: t, type: n } = this.props,
                    r = (0, z.g)(e, t, n),
                    i = this.isKeyboardNavigation ? r : (0, z.g)(e, t, n, Q.dG4);
                this.setState({
                    tooltipText: i,
                    tooltipTextAria: r,
                    shouldShowTooltip: null != i && '' !== i
                });
            }),
            er(this, 'renderLurkerModeUpsellPopout', (e) => {
                let { closePopout: t } = e,
                    { message: n, isLurking: r } = this.props,
                    i = w.Z.getChannel(n.getChannelId()),
                    o = x.Z.getGuild(null == i ? void 0 : i.getGuildId());
                return r && null != o
                    ? (0, a.jsx)(y.Z, {
                          ctaRef: this.ctaRef,
                          type: y.s.REACTIONS,
                          guild: o,
                          closePopout: t
                      })
                    : (0, a.jsx)(a.Fragment, {});
            }),
            er(this, 'renderEmojiDetails', () => {
                let e = this.props.emoji;
                return (
                    null != e.id &&
                    (0, a.jsx)(ef, {
                        emojiId: e.id,
                        refreshPositionKey: this.refreshTooltipPositionKey,
                        onClose: this.handleLeave,
                        nonce: this.nonce
                    })
                );
            }),
            er(this, 'renderTooltip', () => {
                let { emoji: e, message: t, type: n, me_burst: r, isBurstReaction: i = !1 } = this.props,
                    { tooltipText: o } = this.state,
                    s = (n) => {
                        let r = w.Z.getChannel(t.getChannelId());
                        if (null != r)
                            this.handleLeave(),
                                eu(r, t, {
                                    emoji: e,
                                    reactionType: i ? Y.O.BURST : Y.O.NORMAL
                                });
                    },
                    u = 'string' == typeof o ? '' === o.trim() : null == o,
                    c = () =>
                        u || null == o
                            ? null
                            : (0, a.jsx)(f.Text, {
                                  variant: 'text-sm/normal',
                                  className: en.reactionTooltipText,
                                  'aria-label': o,
                                  children: o
                              }),
                    d = () => {
                        let e = B.default.getCurrentUser();
                        if (r)
                            return (0, a.jsxs)('div', {
                                className: l()(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer),
                                children: [
                                    (0, V.I5)(e) &&
                                        (0, a.jsx)(f.NitroWheelIcon, {
                                            size: 'md',
                                            className: en.burstReactionTooltipNitroIcon,
                                            color: g.JX.PREMIUM_TIER_2
                                        }),
                                    (0, a.jsx)(f.Text, {
                                        variant: 'text-sm/normal',
                                        className: en.reactionTooltipText,
                                        'aria-label': 'super reaction tooltip cta',
                                        children: $.Z.Messages.SUPER_REACTION_TOOLTIP_CTA_REACTED
                                    })
                                ]
                            });
                        if (this.userCanBurstReact())
                            return (0, a.jsxs)('div', {
                                className: l()(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer, en.burstReactionTooltipPromptClickable),
                                children: [
                                    (0, a.jsx)(f.NitroWheelIcon, {
                                        size: 'md',
                                        className: en.burstReactionTooltipNitroIcon,
                                        color: g.JX.PREMIUM_TIER_2
                                    }),
                                    (0, a.jsx)(f.Clickable, {
                                        onClick: this.handleClick,
                                        children: (0, a.jsx)(f.Text, {
                                            variant: 'text-sm/normal',
                                            className: en.reactionTooltipText,
                                            'aria-label': 'super reaction tooltip cta',
                                            children: $.Z.Messages.SUPER_REACTION_TOOLTIP_CTA
                                        })
                                    })
                                ]
                            });
                        if (!this.userCanBurstReact() && !this.isKeyboardNavigation)
                            return (0, a.jsx)('div', {
                                className: l()(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer),
                                children: (0, a.jsxs)('div', {
                                    children: [
                                        (0, a.jsx)(f.Text, {
                                            variant: 'text-sm/normal',
                                            'aria-label': 'super reaction tooltip upsell',
                                            children: $.Z.Messages.SUPER_REACTION_TOOLTIP_UPSELL
                                        }),
                                        (0, a.jsx)(b.Z, {
                                            subscriptionTier: X.Si.TIER_2,
                                            buttonText: $.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                                            className: en.burstReactionTooltipUpsellCta,
                                            onClick: (e) => e.stopPropagation()
                                        })
                                    ]
                                })
                            });
                        return null;
                    };
                return n === Y.O.BURST
                    ? (0, a.jsxs)('div', {
                          className: en.reactionTooltip,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, a.jsx)(f.Clickable, {
                                  className: en.burstReactionTooltipInner,
                                  onClick: s,
                                  children: (0, a.jsxs)('div', {
                                      className: en.burstReactionTooltipMessage,
                                      children: [
                                          (0, a.jsx)(h.Z, {
                                              className: en.reactionTooltipEmoji,
                                              emojiId: e.id,
                                              emojiName: e.name,
                                              animated: e.animated,
                                              size: this.props.emojiSize
                                          }),
                                          c()
                                      ]
                                  })
                              }),
                              d(),
                              this.renderEmojiDetails()
                          ]
                      })
                    : (0, a.jsxs)('div', {
                          className: en.reactionTooltip,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, a.jsx)(f.Clickable, {
                                  onClick: s,
                                  children: (0, a.jsxs)('div', {
                                      className: en.reactionTooltipInner,
                                      children: [
                                          (0, a.jsx)(h.Z, {
                                              className: en.reactionTooltipEmoji,
                                              emojiId: e.id,
                                              emojiName: e.name,
                                              animated: e.animated,
                                              size: this.props.emojiSize
                                          }),
                                          c()
                                      ]
                                  })
                              }),
                              this.renderEmojiDetails()
                          ]
                      });
            }),
            er(this, 'refreshTooltipPositionKey', () => {
                this.setState({ tooltipPositionKey: String(Date.now()) });
            }),
            er(this, 'handleShowVerificationGate', () => {
                let { message: e, isPendingMember: t } = this.props;
                if (!t) return null;
                let n = w.Z.getChannel(e.getChannelId()),
                    r = x.Z.getGuild(null == n ? void 0 : n.getGuildId());
                null != r && (0, C.hk)(r.id);
            }),
            er(this, 'handleSetReactionRef', (e) => {
                this.setState({ reactionRef: e });
            }),
            er(this, 'trackReactionTooltipViewed', () => {
                let { emoji: e, message: t, type: n } = this.props,
                    r = B.default.getCurrentUser(),
                    i = w.Z.getChannel(t.getChannelId()),
                    a = n === Y.O.BURST,
                    o = (0, V.I5)(r),
                    s = a ? X.cd.EMOJI_IN_BURST_REACTION_HOVER : X.cd.EMOJI_IN_REACTION_HOVER;
                a && !this.userCanBurstReact() && !o && (s = X.cd.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
                    T.ZP.trackWithMetadata(Q.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                        type: s,
                        expression_id: e.id,
                        expression_name: e.name,
                        is_animated: e.animated,
                        is_custom: null != e.id,
                        nonce: this.nonce
                    }),
                    a &&
                        null != i &&
                        !o &&
                        !this.userCanBurstReact() &&
                        Z.default.track(Q.rMx.PREMIUM_UPSELL_VIEWED, {
                            type: X.cd.BURST_REACTION_UPSELL,
                            location: {
                                page: (null == i ? void 0 : i.getGuildId()) != null ? Q.ZY5.GUILD_CHANNEL : Q.ZY5.DM_CHANNEL,
                                section: (0, P.s4)(i),
                                object: Q.qAy.EMOJI_REACTION_TOOLTIP_UPSELL
                            }
                        });
            });
    }
}
er(ed, 'defaultProps', { emojiSize: 'jumbo' });
let e_ = o.memo((e) => {
        let { type: t, burst_colors: n, message: r, emoji: i } = e,
            o = t === Y.O.BURST,
            s = (0, N.v)(o && null != n ? n : []),
            l = (0, _.e7)([H.Z], () => void 0 !== H.Z.getEffectForEmojiId(r.getChannelId(), r.id, i)),
            u = (0, _.e7)([m.Z], () => m.Z.useReducedMotion),
            c = U.Yk.useSetting(),
            d = B.default.getCurrentUser(),
            E = (0, V.I5)(d),
            f = (0, _.e7)([H.Z], () => H.Z.getReactionPickerAnimation(r.id, i.name, i.id)),
            h = o && (l || null != f);
        return (0, a.jsx)(ed, {
            ...e,
            colors: s,
            isBurstReaction: o,
            hideEmoji: h,
            userHasPremium: E,
            reduceMotion: u,
            animateEmoji: c,
            animationStartPosition: f
        });
    }),
    eE = (e) => {
        var t, n, r;
        let { emojiId: i, expressionSourceGuild: o, hasJoinedExpressionSourceGuild: s, onClose: l, popoutData: u, currentGuildId: c, nonce: d } = e;
        (0, R.u)({
            emojiId: i,
            currentGuildId: c,
            popoutData: u,
            emojiSourceGuildId: null == o ? void 0 : o.id,
            nonce: d
        });
        let _ = null !== (n = null == o ? void 0 : o.isDiscoverable()) && void 0 !== n && n,
            E = null != o && _,
            h = (null !== (r = null == o ? void 0 : null === (t = o.emojis) || void 0 === t ? void 0 : t.length) && void 0 !== r ? r : 0) > 1,
            p = () =>
                null == o
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)('div', {
                                  className: J.reactionEmojiDetailsUnfurlGuildDetails,
                                  children: (0, a.jsx)(W.Oe, {
                                      expressionSourceGuild: o,
                                      hasJoinedExpressionSourceGuild: s,
                                      isDisplayingJoinGuildButtonInPopout: u.type === j.$.JOIN_GUILD
                                  })
                              }),
                              h &&
                                  (0, a.jsx)(W.n_, {
                                      emojiId: i,
                                      expressionSourceGuild: o,
                                      hasJoinedEmojiSourceGuild: s,
                                      onClose: l,
                                      popoutData: u,
                                      isDisplayingButtonInTopSection: !1
                                  })
                          ]
                      });
        return (0, a.jsx)(a.Fragment, {
            children: E
                ? p()
                : (0, a.jsx)(f.Text, {
                      variant: 'text-sm/normal',
                      'aria-label': u.type,
                      children: u.emojiDescription
                  })
        });
    },
    ef = (e) => {
        var t;
        let { emojiId: n, refreshPositionKey: r, onClose: i, nonce: s } = e,
            { joinedEmojiSourceGuild: u } = (0, _.cj)([A.ZP, x.Z], () => {
                let e = A.ZP.getCustomEmojiById(n);
                return { joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === v.B.GUILD ? x.Z.getGuild(null == e ? void 0 : e.guildId) : void 0 };
            }),
            [c, d] = o.useState(void 0),
            [E, h] = o.useState(void 0),
            [p, m] = o.useState(null),
            [I, T] = o.useState(!1),
            [g, S] = o.useState(!1),
            [N, R] = o.useState(!1),
            C = null != u,
            y = null !== (t = null == c ? void 0 : c.isDiscoverable()) && void 0 !== t && t,
            L = k.Z.getGuildId(),
            b = null != L && (L === (null == c ? void 0 : c.id) || L === (null == u ? void 0 : u.id)),
            D = B.default.getCurrentUser(),
            M = (0, j.a)({
                sourceType: p,
                expressionSourceApplication: null != E ? E : null,
                isPremium: V.ZP.isPremium(D),
                hasJoinedEmojiSourceGuild: C,
                isDiscoverable: y,
                emojiComesFromCurrentGuild: b,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1,
                isRoleSubscriptionEmoji: !1,
                shouldHideRoleSubscriptionCTA: !1
            });
        if (
            (o.useEffect(() => {
                if (!!I && !N)
                    (async () => {
                        r(), S(!0);
                        let e = null != n ? await (0, O.Fi)(n) : null;
                        if (null != e)
                            switch ((m(e.type), e.type)) {
                                case O.w6.APPLICATION:
                                    h(e.application);
                                    break;
                                case O.w6.GUILD:
                                    d(e.guild);
                            }
                        else d(null);
                        S(!1), R(!0), r();
                    })();
            }, [n, I, N, r]),
            C)
        )
            return null;
        let P = () => {
                T(!I);
            },
            U = () => {
                let e = $.Z.Messages.INVENTORY_EMOJI_DETAILS_V2;
                return (0, a.jsxs)(f.Clickable, {
                    onClick: P,
                    className: J.reactionEmojiDetailsClickable,
                    children: [
                        (0, a.jsx)(f.Text, {
                            variant: 'text-sm/normal',
                            color: 'none',
                            'aria-label': e,
                            children: e
                        }),
                        (0, a.jsx)(f.ChevronSmallDownIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: l()(J.reactionEmojiDetailsArrow, { [J.reactionEmojiDetailsArrowCollapsed]: !I })
                        })
                    ]
                });
            },
            w = I && (void 0 !== c || void 0 !== E),
            G = () =>
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)('div', { className: J.reactionEmojiDetailsDivider }),
                        null != M.emojiDescription &&
                            M.type !== j.$.UNAVAILABLE &&
                            (0, a.jsx)(f.Text, {
                                variant: 'text-sm/normal',
                                'aria-label': M.type,
                                children: M.emojiDescription
                            })
                    ]
                });
        return (0, a.jsxs)('div', {
            children: [
                w ? G() : U(),
                g
                    ? (0, a.jsx)(K.SE, { className: J.emojiDetailsLoader })
                    : w &&
                      (0, a.jsx)(eE, {
                          emojiId: n,
                          expressionSourceGuild: c,
                          hasJoinedExpressionSourceGuild: C,
                          onClose: i,
                          popoutData: M,
                          currentGuildId: L,
                          nonce: s
                      })
            ]
        });
    };
