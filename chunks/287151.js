n.d(t, {
    aO: function () {
        return es;
    },
    le: function () {
        return er;
    },
    op: function () {
        return eo;
    },
    y4: function () {
        return ea;
    }
}),
    n(47120);
var i,
    s = n(200651),
    o = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(772848),
    c = n(748780),
    d = n(866442),
    u = n(442837),
    h = n(846519),
    m = n(481060),
    p = n(596454),
    g = n(785388),
    f = n(607070),
    _ = n(446489),
    T = n(367907),
    v = n(436774),
    E = n(98474),
    b = n(339085),
    I = n(906411),
    R = n(56314),
    S = n(231053),
    C = n(944386),
    x = n(305325),
    N = n(33154),
    O = n(692147),
    Z = n(197115),
    A = n(659215),
    j = n(222677),
    M = n(995774),
    L = n(695346),
    y = n(592125),
    P = n(430824),
    U = n(542578),
    w = n(914010),
    D = n(594174),
    k = n(451478),
    B = n(626135),
    F = n(74538),
    V = n(960020),
    H = n(566006),
    G = n(886132),
    W = n(183023),
    z = n(524444),
    K = n(89729),
    Y = n(620652),
    J = n(640753),
    X = n(981631),
    q = n(474936),
    $ = n(689938),
    Q = n(507444),
    ee = n(96042),
    et = n(968661),
    en = n(564793);
function ei(e, t, n) {
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
let es = 9;
function eo(e, t, n) {
    (0, m.openModal)((e) =>
        (0, s.jsx)(g.default, {
            ...e,
            message: t,
            selectedReaction: n
        })
    );
}
function ea(e, t, n) {
    return (n === H.O.BURST && t) || (n === H.O.NORMAL && e);
}
class el extends (i = o.PureComponent) {
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
        k.Z.isFocused()
            ? (this.scale.setValue(0),
              this.opacity.setValue(0),
              c.Z.parallel([
                  c.Z.timing(this.scale, {
                      toValue: 1,
                      duration: t ? 200 : 300,
                      easing: c.Z.Easing.inOut(c.Z.Easing.back())
                  }),
                  c.Z.timing(this.opacity, {
                      toValue: 1,
                      duration: t ? 200 : 300
                  })
              ]).start(e))
            : (this.scale.setValue(1), this.opacity.setValue(1), e());
    }
    render() {
        let e, t;
        let { count: n, burst_count: i, colors: o, isBurstReaction: a, hideCount: r, emoji: u, readOnly: h, isLurking: g, isGuest: f, isPendingMember: T, className: v, useChatFontScaling: b, message: I, hideEmoji: R, animationStartPosition: S, emojiSize: C } = this.props,
            { shouldShowTooltip: x, tooltipTextAria: N, reactionRef: Z, tooltipPositionKey: A } = this.state,
            j = b ? et : ee,
            L = {
                transform: [{ scale: this.scale }],
                opacity: this.opacity
            },
            y = a ? i : n;
        if (a && null != o) {
            var P;
            let { accentColor: n, backgroundColor: i, opacity: s } = o,
                a = null !== (P = (0, d.wK)(null != i ? i : '', s)) && void 0 !== P ? P : '';
            this.isMe() && (L.borderColor = i), (L.background = a), (e = n), (t = n);
        }
        let U = null == Z ? void 0 : Z.getBoundingClientRect(),
            w = null != S && null != U,
            D = null == S;
        return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)(m.Popout, {
                shouldShow: x,
                'aria-label': null != N && N,
                renderPopout: this.renderTooltip,
                nudgeAlignIntoViewport: !0,
                position: 'top',
                align: 'center',
                positionKey: A,
                children: () =>
                    (0, s.jsx)('div', {
                        onMouseEnter: this.handleEnter,
                        onMouseLeave: this.handleLeave,
                        ref: this.handleSetReactionRef,
                        children: (0, s.jsx)(c.Z.div, {
                            className: l()(j.reaction, v, {
                                [j.reactionMe]: this.isMe(),
                                [j.reactionReadOnly]: h && !g && !T && !f,
                                [j.shakeReaction]: R && null == S
                            }),
                            style: L,
                            children: (0, s.jsx)(m.Popout, {
                                renderPopout: this.renderLurkerModeUpsellPopout,
                                position: 'top',
                                children: (n) =>
                                    (0, s.jsxs)(m.Clickable, {
                                        ...n,
                                        className: j.reactionInner,
                                        onClick: this.handleClick,
                                        'aria-disabled': h,
                                        'aria-label': (0, M.iD)(this.isMe(), y, u, a),
                                        'aria-pressed': this.isMe(),
                                        children: [
                                            (0, s.jsx)('div', {
                                                className: l()({ [j.burstGlow]: a }),
                                                style: { boxShadow: '0 0 16px '.concat(t) }
                                            }),
                                            (0, s.jsxs)('div', {
                                                children: [
                                                    a
                                                        ? (0, s.jsxs)(s.Fragment, {
                                                              children: [
                                                                  w &&
                                                                      (0, s.jsx)(E.Z, {
                                                                          messageId: I.id,
                                                                          emoji: u,
                                                                          startPosition: S,
                                                                          targetPosition: U
                                                                      }),
                                                                  D &&
                                                                      (0, s.jsx)(J.Z, {
                                                                          count: i,
                                                                          emoji: u,
                                                                          channelId: I.getChannelId(),
                                                                          messageId: I.id,
                                                                          useChatFontScaling: b,
                                                                          color: t,
                                                                          emojiSize: 'reactionLarge' === C ? Y.M.NORMAL_NEW : Y.M.NORMAL
                                                                      })
                                                              ]
                                                          })
                                                        : null,
                                                    (0, s.jsx)(p.Z, {
                                                        className: l()({ [j.hideEmoji]: R }),
                                                        emojiId: u.id,
                                                        emojiName: u.name,
                                                        size: C,
                                                        animated: u.animated
                                                    })
                                                ]
                                            }),
                                            r
                                                ? null
                                                : (0, s.jsx)(_.Z, {
                                                      className: j.reactionCount,
                                                      value: y,
                                                      color: e,
                                                      digitWidth: es
                                                  }),
                                            (0, s.jsx)(O.Z, {
                                                count: y,
                                                reactionRef: Z
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
            ei(this, 'isReactionEventActive', !1),
            ei(this, 'isKeyboardNavigation', !1),
            ei(this, 'scale', new c.Z.Value(1)),
            ei(this, 'opacity', new c.Z.Value(1)),
            ei(this, 'timeout', new h.V7()),
            ei(this, 'hideTimeout', new h.V7()),
            ei(this, 'ctaRef', o.createRef()),
            ei(this, 'type', H.O.NORMAL),
            ei(this, 'colors', {
                backgroundColor: void 0,
                borderColor: void 0,
                textColor: void 0
            }),
            ei(this, 'state', {
                shouldShowTooltip: !1,
                tooltipText: null,
                tooltipTextAria: null,
                reactionRef: null,
                tooltipPositionKey: void 0
            }),
            ei(this, 'hasShownTooltip', !1),
            ei(this, 'nonce', (0, r.Z)()),
            ei(this, 'userCanBurstReact', () => this.props.userHasPremium),
            ei(this, 'handleClick', (e) => {
                e.stopPropagation();
                let { message: t, emoji: n, readOnly: i, isBurstReaction: s, isPendingMember: o, isLurking: a, isGuest: l, isForumToolbar: r } = this.props,
                    c = y.Z.getChannel(t.getChannelId());
                if (a || l) {
                    var d, u;
                    null === (u = this.ctaRef) || void 0 === u || null === (d = u.current) || void 0 === d || d.focus();
                    return;
                }
                let h = t.getChannelId(),
                    m = r ? j.TW.FORUM_TOOLBAR : j.TW.MESSAGE_INLINE_BUTTON;
                if (s && !this.userCanBurstReact()) {
                    (0, A.openBurstReactionsUpsellModal)({
                        analytics: {
                            type: q.cd.BURST_REACTION_UPSELL,
                            page: (null == c ? void 0 : c.getGuildId()) != null ? X.ZY5.GUILD_CHANNEL : X.ZY5.DM_CHANNEL,
                            section: null != c ? (0, M.s4)(c) : void 0,
                            object: X.qAy.EMOJI_REACTION_UPSELL
                        }
                    });
                    return;
                }
                o
                    ? this.handleShowVerificationGate()
                    : !i &&
                      (this.isMe()
                          ? (0, j.WO)({
                                channelId: h,
                                messageId: t.id,
                                emoji: n,
                                location: m,
                                options: { burst: s }
                            })
                          : (0, j.rU)(h, t.id, n, m, { burst: s }));
            }),
            ei(this, 'handleEnter', (e) => {
                let { emoji: t, message: n, type: i, reduceMotion: s, animateEmoji: o, autoUnfurlReactionTooltip: a } = this.props,
                    l = i === H.O.BURST;
                l &&
                    !this.isReactionEventActive &&
                    !s &&
                    o &&
                    (0, j.T6)({
                        channelId: n.getChannelId(),
                        messageId: n.id,
                        emoji: t,
                        key: V.I.HOVER
                    }),
                    (this.isReactionEventActive = !0),
                    (this.isKeyboardNavigation = 'focus' === e.type),
                    this.timeout.start(l ? 750 : a ? 200 : 500, this.showTooltip, !1);
            }),
            ei(this, 'handleEnterTooltip', () => {
                (this.isReactionEventActive = !0), this.handleShowTooltip();
            }),
            ei(this, 'handleShowTooltip', () => {
                this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), U.Z.addChangeListener(this.updateTooltipText));
            }),
            ei(this, 'showTooltip', () => {
                !this.props.readOnly && (this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), (this.hasShownTooltip = !0));
            }),
            ei(this, 'handleLeave', () => {
                (this.isReactionEventActive = !1), (this.isKeyboardNavigation = !1), this.timeout.stop(), U.Z.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1);
            }),
            ei(this, 'hideTooltip', () => {
                this.setState({ shouldShowTooltip: !1 }), this.hasShownTooltip && B.default.track(X.rMx.CLOSE_POPOUT, { nonce: this.nonce });
            }),
            ei(this, 'isMe', () => {
                let { me: e, me_burst: t, type: n } = this.props;
                return ea(e, t, n);
            }),
            ei(this, 'updateTooltipText', () => {
                let { message: e, emoji: t, type: n } = this.props,
                    i = (0, K.g)(e, t, n),
                    s = this.isKeyboardNavigation ? i : (0, K.g)(e, t, n, X.dG4);
                this.setState({
                    tooltipText: s,
                    tooltipTextAria: i,
                    shouldShowTooltip: null != s && '' !== s
                });
            }),
            ei(this, 'renderLurkerModeUpsellPopout', (e) => {
                let { closePopout: t } = e,
                    { message: n, isLurking: i } = this.props,
                    o = y.Z.getChannel(n.getChannelId()),
                    a = P.Z.getGuild(null == o ? void 0 : o.getGuildId());
                return i && null != a
                    ? (0, s.jsx)(N.Z, {
                          ctaRef: this.ctaRef,
                          type: N.s.REACTIONS,
                          guild: a,
                          closePopout: t
                      })
                    : (0, s.jsx)(s.Fragment, {});
            }),
            ei(this, 'renderEmojiDetails', () => {
                let e = this.props.emoji;
                return (
                    null != e.id &&
                    (0, s.jsx)(ed, {
                        emojiId: e.id,
                        refreshPositionKey: this.refreshTooltipPositionKey,
                        onClose: this.handleLeave,
                        nonce: this.nonce
                    })
                );
            }),
            ei(this, 'renderTooltip', () => {
                let { emoji: e, message: t, type: n, me_burst: i, isBurstReaction: o = !1 } = this.props,
                    { tooltipText: a } = this.state,
                    r = (n) => {
                        let i = y.Z.getChannel(t.getChannelId());
                        if (null != i)
                            this.handleLeave(),
                                eo(i, t, {
                                    emoji: e,
                                    reactionType: o ? H.O.BURST : H.O.NORMAL
                                });
                    },
                    c = 'string' == typeof a ? '' === a.trim() : null == a,
                    d = () =>
                        c || null == a
                            ? null
                            : (0, s.jsx)(m.Text, {
                                  variant: 'text-sm/normal',
                                  className: en.reactionTooltipText,
                                  'aria-label': a,
                                  children: a
                              });
                return n === H.O.BURST
                    ? (0, s.jsxs)('div', {
                          className: en.reactionTooltip,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, s.jsx)(m.Clickable, {
                                  className: en.burstReactionTooltipInner,
                                  onClick: r,
                                  children: (0, s.jsxs)('div', {
                                      className: en.burstReactionTooltipMessage,
                                      children: [
                                          (0, s.jsx)(p.Z, {
                                              className: en.reactionTooltipEmoji,
                                              emojiId: e.id,
                                              emojiName: e.name,
                                              animated: e.animated,
                                              size: this.props.emojiSizeTooltip
                                          }),
                                          d()
                                      ]
                                  })
                              }),
                              (() => {
                                  let e = D.default.getCurrentUser();
                                  if (i)
                                      return (0, s.jsxs)('div', {
                                          className: l()(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer),
                                          children: [
                                              (0, F.I5)(e) &&
                                                  (0, s.jsx)(m.NitroWheelIcon, {
                                                      size: 'md',
                                                      className: en.burstReactionTooltipNitroIcon,
                                                      color: v.JX.PREMIUM_TIER_2
                                                  }),
                                              (0, s.jsx)(m.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: en.reactionTooltipText,
                                                  'aria-label': 'super reaction tooltip cta',
                                                  children: $.Z.Messages.SUPER_REACTION_TOOLTIP_CTA_REACTED
                                              })
                                          ]
                                      });
                                  if (this.userCanBurstReact())
                                      return (0, s.jsxs)('div', {
                                          className: l()(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer, en.burstReactionTooltipPromptClickable),
                                          children: [
                                              (0, s.jsx)(m.NitroWheelIcon, {
                                                  size: 'md',
                                                  className: en.burstReactionTooltipNitroIcon,
                                                  color: v.JX.PREMIUM_TIER_2
                                              }),
                                              (0, s.jsx)(m.Clickable, {
                                                  onClick: this.handleClick,
                                                  children: (0, s.jsx)(m.Text, {
                                                      variant: 'text-sm/normal',
                                                      className: en.reactionTooltipText,
                                                      'aria-label': 'super reaction tooltip cta',
                                                      children: $.Z.Messages.SUPER_REACTION_TOOLTIP_CTA
                                                  })
                                              })
                                          ]
                                      });
                                  if (!this.userCanBurstReact() && !this.isKeyboardNavigation)
                                      return (0, s.jsx)('div', {
                                          className: l()(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer),
                                          children: (0, s.jsxs)('div', {
                                              children: [
                                                  (0, s.jsx)(m.Text, {
                                                      variant: 'text-sm/normal',
                                                      'aria-label': 'super reaction tooltip upsell',
                                                      children: $.Z.Messages.SUPER_REACTION_TOOLTIP_UPSELL
                                                  }),
                                                  (0, s.jsx)(Z.Z, {
                                                      subscriptionTier: q.Si.TIER_2,
                                                      buttonText: $.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                                                      className: en.burstReactionTooltipUpsellCta,
                                                      onClick: (e) => e.stopPropagation()
                                                  })
                                              ]
                                          })
                                      });
                                  return null;
                              })(),
                              this.renderEmojiDetails()
                          ]
                      })
                    : (0, s.jsxs)('div', {
                          className: en.reactionTooltip,
                          onMouseEnter: this.handleEnterTooltip,
                          onMouseLeave: this.handleLeave,
                          children: [
                              (0, s.jsx)(m.Clickable, {
                                  onClick: r,
                                  children: (0, s.jsxs)('div', {
                                      className: en.reactionTooltipInner,
                                      children: [
                                          (0, s.jsx)(p.Z, {
                                              className: en.reactionTooltipEmoji,
                                              emojiId: e.id,
                                              emojiName: e.name,
                                              animated: e.animated,
                                              size: this.props.emojiSizeTooltip
                                          }),
                                          d()
                                      ]
                                  })
                              }),
                              this.renderEmojiDetails()
                          ]
                      });
            }),
            ei(this, 'refreshTooltipPositionKey', () => {
                this.setState({ tooltipPositionKey: String(Date.now()) });
            }),
            ei(this, 'handleShowVerificationGate', () => {
                let { message: e, isPendingMember: t } = this.props;
                if (!t) return null;
                let n = y.Z.getChannel(e.getChannelId()),
                    i = P.Z.getGuild(null == n ? void 0 : n.getGuildId());
                null != i && (0, x.hk)(i.id);
            }),
            ei(this, 'handleSetReactionRef', (e) => {
                this.setState({ reactionRef: e });
            }),
            ei(this, 'trackReactionTooltipViewed', () => {
                let { emoji: e, message: t, type: n } = this.props,
                    i = D.default.getCurrentUser(),
                    s = y.Z.getChannel(t.getChannelId()),
                    o = n === H.O.BURST,
                    a = (0, F.I5)(i),
                    l = o ? q.cd.EMOJI_IN_BURST_REACTION_HOVER : q.cd.EMOJI_IN_REACTION_HOVER;
                o && !this.userCanBurstReact() && !a && (l = q.cd.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
                    T.ZP.trackWithMetadata(X.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                        type: l,
                        expression_id: e.id,
                        expression_name: e.name,
                        is_animated: e.animated,
                        is_custom: null != e.id,
                        nonce: this.nonce
                    }),
                    o &&
                        null != s &&
                        !a &&
                        !this.userCanBurstReact() &&
                        B.default.track(X.rMx.PREMIUM_UPSELL_VIEWED, {
                            type: q.cd.BURST_REACTION_UPSELL,
                            location: {
                                page: (null == s ? void 0 : s.getGuildId()) != null ? X.ZY5.GUILD_CHANNEL : X.ZY5.DM_CHANNEL,
                                section: (0, M.s4)(s),
                                object: X.qAy.EMOJI_REACTION_TOOLTIP_UPSELL
                            }
                        });
            });
    }
}
ei(el, 'defaultProps', { emojiSizeTooltip: 'jumbo' });
let er = o.memo((e) => {
        let { type: t, burst_colors: n, message: i, emoji: o } = e,
            a = t === H.O.BURST,
            l = (0, R.v)(a && null != n ? n : []),
            r = (0, u.e7)([V.Z], () => void 0 !== V.Z.getEffectForEmojiId(i.getChannelId(), i.id, o)),
            c = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
            d = L.Yk.useSetting(),
            h = D.default.getCurrentUser(),
            m = (0, F.I5)(h),
            p = (0, u.e7)([V.Z], () => V.Z.getReactionPickerAnimation(i.id, o.name, o.id)),
            g = a && (r || null != p);
        return (0, s.jsx)(el, {
            ...e,
            colors: l,
            isBurstReaction: a,
            hideEmoji: g,
            userHasPremium: m,
            reduceMotion: c,
            animateEmoji: d,
            animationStartPosition: p
        });
    }),
    ec = (e) => {
        var t, n, i;
        let { emojiId: o, expressionSourceGuild: a, hasJoinedExpressionSourceGuild: l, onClose: r, popoutData: c, currentGuildId: d, nonce: u } = e;
        (0, C.u)({
            emojiId: o,
            currentGuildId: d,
            popoutData: c,
            emojiSourceGuildId: null == a ? void 0 : a.id,
            nonce: u
        });
        let h = null !== (n = null == a ? void 0 : a.isDiscoverable()) && void 0 !== n && n,
            p = null != a && h,
            g = (null !== (i = null == a ? void 0 : null === (t = a.emojis) || void 0 === t ? void 0 : t.length) && void 0 !== i ? i : 0) > 1;
        return (0, s.jsx)(s.Fragment, {
            children: p
                ? null == a
                    ? null
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)('div', {
                                  className: Q.reactionEmojiDetailsUnfurlGuildDetails,
                                  children: (0, s.jsx)(W.Oe, {
                                      expressionSourceGuild: a,
                                      hasJoinedExpressionSourceGuild: l,
                                      isDisplayingJoinGuildButtonInPopout: c.type === G.$.JOIN_GUILD
                                  })
                              }),
                              g &&
                                  (0, s.jsx)(W.n_, {
                                      emojiId: o,
                                      expressionSourceGuild: a,
                                      hasJoinedEmojiSourceGuild: l,
                                      onClose: r,
                                      popoutData: c,
                                      isDisplayingButtonInTopSection: !1
                                  })
                          ]
                      })
                : (0, s.jsx)(m.Text, {
                      variant: 'text-sm/normal',
                      'aria-label': c.type,
                      children: c.emojiDescription
                  })
        });
    },
    ed = (e) => {
        var t;
        let { emojiId: n, refreshPositionKey: i, onClose: a, nonce: r } = e,
            { joinedEmojiSourceGuild: c } = (0, u.cj)([b.ZP, P.Z], () => {
                let e = b.ZP.getCustomEmojiById(n);
                return { joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === I.B.GUILD ? P.Z.getGuild(null == e ? void 0 : e.guildId) : void 0 };
            }),
            [d, h] = o.useState(void 0),
            [p, g] = o.useState(void 0),
            [f, _] = o.useState(null),
            [T, v] = o.useState(!1),
            [E, R] = o.useState(!1),
            [C, x] = o.useState(!1),
            N = null != c,
            O = null !== (t = null == d ? void 0 : d.isDiscoverable()) && void 0 !== t && t,
            Z = w.Z.getGuildId(),
            A = null != Z && (Z === (null == d ? void 0 : d.id) || Z === (null == c ? void 0 : c.id)),
            j = D.default.getCurrentUser(),
            M = (0, G.a)({
                sourceType: f,
                expressionSourceApplication: null != p ? p : null,
                isPremium: F.ZP.isPremium(j),
                hasJoinedEmojiSourceGuild: N,
                isDiscoverable: O,
                emojiComesFromCurrentGuild: A,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1,
                isRoleSubscriptionEmoji: !1,
                shouldHideRoleSubscriptionCTA: !1
            });
        o.useEffect(() => {
            if (!!T && !C)
                (async () => {
                    i(), R(!0);
                    let e = null != n ? await (0, S.Fi)(n) : null;
                    if (null != e)
                        switch ((_(e.type), e.type)) {
                            case S.w6.APPLICATION:
                                g(e.application);
                                break;
                            case S.w6.GUILD:
                                h(e.guild);
                        }
                    else h(null);
                    R(!1), x(!0), i();
                })();
        }, [n, T, C, i]);
        if (N) return null;
        let L = () => {
                v(!T);
            },
            y = T && (void 0 !== d || void 0 !== p);
        return (0, s.jsxs)('div', {
            children: [
                y
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)('div', { className: Q.reactionEmojiDetailsDivider }),
                              null != M.emojiDescription &&
                                  M.type !== G.$.UNAVAILABLE &&
                                  (0, s.jsx)(m.Text, {
                                      variant: 'text-sm/normal',
                                      'aria-label': M.type,
                                      children: M.emojiDescription
                                  })
                          ]
                      })
                    : (() => {
                          let e = $.Z.Messages.INVENTORY_EMOJI_DETAILS_V2;
                          return (0, s.jsxs)(m.Clickable, {
                              onClick: L,
                              className: Q.reactionEmojiDetailsClickable,
                              children: [
                                  (0, s.jsx)(m.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'none',
                                      'aria-label': e,
                                      children: e
                                  }),
                                  (0, s.jsx)(m.ChevronSmallDownIcon, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: l()(Q.reactionEmojiDetailsArrow, { [Q.reactionEmojiDetailsArrowCollapsed]: !T })
                                  })
                              ]
                          });
                      })(),
                E
                    ? (0, s.jsx)(z.SE, { className: Q.emojiDetailsLoader })
                    : y &&
                      (0, s.jsx)(ec, {
                          emojiId: n,
                          expressionSourceGuild: d,
                          hasJoinedExpressionSourceGuild: N,
                          onClose: a,
                          popoutData: M,
                          currentGuildId: Z,
                          nonce: r
                      })
            ]
        });
    };
