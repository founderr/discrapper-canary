n.d(t, {
    $p: function () {
        return e6;
    },
    BB: function () {
        return e3;
    },
    ZP: function () {
        return e9;
    }
}),
    n(47120),
    n(789020),
    n(411104),
    n(390547);
var i,
    r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(275726),
    c = n(442837),
    u = n(377108),
    d = n(902704),
    m = n(481060),
    h = n(904245),
    f = n(637374),
    p = n(626799),
    _ = n(624367),
    g = n(433074),
    E = n(421474),
    C = n(603270),
    I = n(171364),
    x = n(162297),
    N = n(222709),
    v = n(446411),
    T = n(960904),
    S = n(161314),
    A = n(119392),
    b = n(247206),
    j = n(25610),
    Z = n(703751),
    R = n(761538),
    L = n(674611),
    P = n(346610),
    y = n(868643),
    O = n(294734),
    M = n(426275),
    k = n(947849),
    D = n(715903),
    B = n(71619),
    U = n(637618),
    w = n(225890),
    F = n(364097),
    G = n(495129),
    V = n(939170),
    H = n(187506),
    z = n(954654),
    W = n(41776),
    K = n(628238),
    Y = n(454585),
    X = n(768494),
    Q = n(124347),
    q = n(976853),
    J = n(346013),
    $ = n(94396),
    ee = n(977683),
    et = n(128435),
    en = n(98278),
    ei = n(614825),
    er = n(265299),
    el = n(699833),
    ea = n(344997),
    eo = n(378233),
    es = n(374425),
    ec = n(665906),
    eu = n(432147),
    ed = n(695346),
    em = n(314897),
    eh = n(271383),
    ef = n(607744),
    ep = n(496675),
    e_ = n(594174),
    eg = n(52824),
    eE = n(626135),
    eC = n(70956),
    eI = n(408433),
    ex = n(630388),
    eN = n(709054),
    ev = n(591759),
    eT = n(169525),
    eS = n(786761),
    eA = n(161010),
    eb = n(461157),
    ej = n(901461),
    eZ = n(432376),
    eR = n(384203),
    eL = n(633957),
    eP = n(530472),
    ey = n(29909),
    eO = n(782658),
    eM = n(219797),
    ek = n(453687),
    eD = n(128854),
    eB = n(101578),
    eU = n(524444),
    ew = n(319323),
    eF = n(884182),
    eG = n(546432),
    eV = n(920888),
    eH = n(817384),
    ez = n(981631),
    eW = n(474936),
    eK = n(388032),
    eY = n(596756),
    eX = n(329290),
    eQ = n(680674);
function eq(e, t, n) {
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
function eJ() {
    return (0, r.jsxs)('div', {
        className: eX.nitroFileSizeUpsell,
        children: [
            (0, r.jsx)('img', {
                src: eQ,
                className: eX.nitroBadgeSvg,
                alt: ''
            }),
            (0, r.jsx)(m.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: eK.intl.format(eK.t['G/H+s7'], { onClick: () => (0, en.z)() })
            })
        ]
    });
}
let e$ = 15 * eC.Z.Millis.MINUTE,
    e0 = new Set(['discord-developers', 'discord-testers', 'discord-townhall', 'discordgameslab']),
    e1 = (e, t, n) => () => {
        let i = null != t ? t : n;
        if (null == i) return null;
        let { url: l, proxyURL: a, width: o, height: s } = i;
        return (0, r.jsx)(ey.Z, {
            width: o,
            height: s,
            src: null != a && '' !== a ? a : l,
            url: null != e && '' !== e ? e : null != a && '' !== a ? a : l,
            format: null != n ? u.EO.VIDEO : u.EO.IMAGE,
            className: eX.gifFavoriteButton
        });
    },
    e2 = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: l, srcIsAnimated: a } = e;
        return null != i && null != l && (Q.uo.test(n) || (a && Q.YG.test(n)))
            ? (0, r.jsx)(ey.Z, {
                  width: i,
                  height: l,
                  src: n,
                  url: t,
                  format: u.EO.IMAGE,
                  className: eX.gifFavoriteButton
              })
            : null;
    };
class e3 extends (i = l.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e0.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let { channel: r, message: l, poll: a } = this.props,
            { channel: o, message: s, poll: c } = e;
        return (
            !(0, d.Z)(this.state, t) ||
            !(0, d.Z)(this.props, e, ['message', 'channel']) ||
            r.type !== o.type ||
            c !== a ||
            s.codedLinks !== l.codedLinks ||
            s.flags !== l.flags ||
            s.giftCodes !== l.giftCodes ||
            s.attachments !== l.attachments ||
            s.embeds !== l.embeds ||
            s.components !== l.components ||
            s.activity !== l.activity ||
            ((n = s.reactions),
            n !== (i = l.reactions) &&
                (n.length !== i.length ||
                    !!n.some((e, t) => {
                        let { emoji: n, count: r, burst_count: l } = e,
                            { emoji: a, count: o, burst_count: s } = i[t];
                        return l !== s || r !== o || n.id !== a.id || n.name !== a.name;
                    })))
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, shouldRenderCtaButton: n } = this.props;
        return n
            ? (0, r.jsx)('div', {
                  className: eX.ctaButtonContainer,
                  children: (0, r.jsx)(L.Z, {
                      messageId: e.id,
                      channelId: t.id
                  })
              })
            : null;
    }
    renderSocialProofingFileSizeNitroUpsell(e) {
        let t = e.attachments.some((e) => e.size > eW.Lw);
        return (0, eA.M)('attachment') && t ? (0, r.jsx)(eJ, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: i } = t;
                  if (n === T.g.INVITE)
                      return this.shouldRenderInvite(i)
                          ? (0, r.jsx)(
                                eO.Z,
                                {
                                    code: i,
                                    author: e.author,
                                    getAcceptInviteContext: this.getAcceptInviteContext
                                },
                                i
                            )
                          : null;
                  if (n === T.g.TEMPLATE) return (0, r.jsx)(F.Z, { code: i }, i);
                  if (n === T.g.EVENT) return (0, r.jsx)(w.Z, { code: i }, i);
                  else if (n === T.g.CHANNEL_LINK)
                      return (0, r.jsx)(
                          eR.Z,
                          {
                              code: i,
                              messageData: e
                          },
                          i
                      );
                  else if (n === T.g.APP_DIRECTORY_PROFILE)
                      return (0, r.jsx)(
                          g.Z,
                          {
                              code: i,
                              message: e
                          },
                          i
                      );
                  else if (n === T.g.ACTIVITY_BOOKMARK)
                      return (0, r.jsx)(
                          _.Z,
                          {
                              applicationId: i,
                              message: e
                          },
                          i
                      );
                  else if (n === T.g.GUILD_PRODUCT) return (0, r.jsx)(U.Z, { code: i }, i);
                  else if (n === T.g.SERVER_SHOP) return (0, r.jsx)(S.Z, { guildId: i }, i);
                  else if (n === T.g.QUESTS_EMBED) return (0, r.jsx)(er.Z, { questId: i }, i);
                  else if (n === T.g.APP_DIRECTORY_STOREFRONT)
                      return (0, r.jsx)(
                          C.P,
                          {
                              appId: i,
                              message: e
                          },
                          i
                      );
                  else if (n === T.g.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, E.Q)(i);
                      return null == t
                          ? null
                          : (0, r.jsx)(
                                C.F,
                                {
                                    skuId: t.skuId,
                                    message: e
                                },
                                i
                            );
                  } else if (n === T.g.DISCOVERY_GAME) return (0, r.jsx)(A.Z, { gameId: i }, i);
                  else if (n === T.g.APP_OAUTH2_LINK) {
                      let { enabled: e } = I.I.getCurrentConfig({ location: 'MessageAccessories' }, { autoTrackExposure: !1 });
                      return e ? (0, r.jsx)(x.Z, { applicationId: i }, i) : null;
                  } else throw Error('Unknown coded link type: '.concat(n));
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: i, type: l, content: a, giftInfo: o } = e,
            s = e_.default.getCurrentUser();
        return null != s && t.length > 0
            ? t.map((e) =>
                  (0, r.jsx)(
                      'div',
                      {
                          className: eX.giftCodeContainer,
                          children: (0, r.jsx)(f.Z, {
                              code: e,
                              author: n,
                              channelId: i,
                              currentUser: s,
                              type: l,
                              content: a,
                              giftInfo: o
                          })
                      },
                      e
                  )
              )
            : null;
    }
    renderReferralTrial(e) {
        let { referralTrialOfferId: t, type: n } = e,
            { canRenderReferralEmbed: i } = this.props;
        return n !== s.u.PREMIUM_REFERRAL || null == t
            ? null
            : (0, r.jsx)(
                  'div',
                  {
                      className: eX.referralContainer,
                      children: (0, r.jsx)(ei.Z, {
                          userTrialOfferId: t,
                          canRenderReferralEmbed: null != i && i
                      })
                  },
                  t
              );
    }
    renderReactions(e) {
        let { disableReactionCreates: t, disableReactionReads: n, disableReactionUpdates: i, isLurking: l, isGuest: a, isPendingMember: o, channel: s, forceAddReactions: c } = this.props;
        return n
            ? null
            : (0, r.jsx)(eV.Z, {
                  message: e,
                  channel: s,
                  disableReactionCreates: t,
                  disableReactionUpdates: i,
                  isLurking: l,
                  isGuest: a,
                  isPendingMember: o,
                  forceAddReactions: c,
                  useChatFontScaling: !0
              });
    }
    renderAttachments(e) {
        let { channel: t, hasInlineForwardButton: n, gifAutoPlay: i, canDeleteAttachments: l, inlineAttachmentMedia: a, onMediaItemContextMenu: o, shouldRedactExplicitContent: s, shouldHideMediaOptions: c } = this.props,
            { attachments: u, flags: d } = e;
        if (0 === u.length || e.isPoll() || e.isUIKitComponents()) return null;
        let m = u.filter((e) => null == e.flags || !(0, ex.yE)(e.flags, ez.J0y.IS_THUMBNAIL));
        if (0 === m.length) return null;
        let h = m
                .map((t) => {
                    var n;
                    return {
                        ...(0, X.JD)(t, e),
                        original: t.url,
                        srcIsAnimated: (0, ex.yE)(null !== (n = t.flags) && void 0 !== n ? n : 0, ez.J0y.IS_ANIMATED)
                    };
                })
                .filter((e) => 'INVALID' !== e.type),
            f = {
                source: 'Media Mosaic',
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type
            },
            p =
                h.length > 1
                    ? (0, $._)(
                          h,
                          {
                              shouldRedactExplicitContent: s,
                              shouldHideMediaOptions: c
                          },
                          f
                      )
                    : {},
            _ = (0, ex.yE)(d, ez.iLy.IS_VOICE_MESSAGE);
        function g(e, t) {
            return (0, eT.dn)(e.originalItem, t);
        }
        let E = m.map((n) => {
                let r = (0, X.VY)(n),
                    s = {
                        message: e,
                        item: (0, eG.O)(n, a),
                        autoPlayGif: i,
                        canRemoveItem: l && (m.length > 1 || '' !== e.content),
                        onRemoveItem: this.handleRemoveAttachment,
                        className: eX.embedWrapper,
                        getObscureReason: g,
                        onContextMenu:
                            null != o
                                ? (e) => {
                                      e.stopPropagation(), e.preventDefault(), o(e, r);
                                  }
                                : void 0,
                        renderAudioComponent: _ ? eM.jY : eM.q7,
                        renderImageComponent: eM.dS,
                        renderVideoComponent: eM.vZ,
                        renderPlaintextFilePreview: eM.d4,
                        renderGenericFileComponent: eM.ZK,
                        renderMosaicItemFooter: eM.L9,
                        onPlay: (e, i, r) => {
                            eE.default.track(ez.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                                guild_id: t.guild_id,
                                channel_id: t.id,
                                channel_type: t.type,
                                type: n.content_type,
                                flags: n.flags,
                                size: n.size,
                                duration: r
                            });
                        },
                        gifFavoriteButton: e2(r),
                        isSearchResult: this.props.isSearchResult
                    },
                    c = (0, eg.q)({
                        proxyURL: n.proxy_url,
                        url: n.url
                    });
                return c in p && (s.onClick = p[c]), s;
            }),
            C = n
                ? (0, r.jsx)(M.Z, {
                      className: eY.hideIfMessageNotFocused,
                      messageId: e.id,
                      channelId: t.id,
                      targetKind: 'media'
                  })
                : void 0;
        return (0, r.jsx)(eF.Z, {
            items: E,
            inlineForwardButton: C
        });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t } = this.props;
        return 0 !== e.embeds.length && t
            ? e.embeds.map((t, n) => {
                  if (eH.b.has(t.type) || (0, eI.l3)(t) || ((0, V.b)(t) && !(0, H.M)(e))) return null;
                  let i = {
                      renderImageComponent: eU.Yi,
                      renderVideoComponent: eU.lV,
                      renderLinkComponent: eU.iT
                  };
                  if (t.type === ez.hBH.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && 'Discord' === t.provider.name) {
                      let l = ev.Z.safeParseWithQuery(t.url);
                      if (null != l && null != l.pathname) {
                          let a = l.pathname.split('/')[3];
                          if (null != a)
                              return (0, r.jsx)(
                                  p.Z,
                                  {
                                      skuId: a,
                                      renderFallback: () => this.renderEmbed(t, n, i, e)
                                  },
                                  t.id
                              );
                      }
                  }
                  return this.renderEmbed(t, n, i, e);
              })
            : null;
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length || !1 === this.props.renderComponentAccessory) return null;
        let { gifAutoPlay: t, shouldRedactExplicitContent: n, shouldHideMediaOptions: i, onMediaItemContextMenu: l } = this.props;
        return (0, r.jsx)(eD.F, {
            gifAutoPlay: t,
            getGifFavButton: e2,
            getOnMediaItemContextMenu:
                null == l
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), null == l || l(t, e);
                      },
            shouldHideMediaOptions: i,
            shouldRedactExplicitContent: n,
            children: (0, r.jsx)(z.ZP, { message: e })
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, r.jsx)(eB.Z, {
            channel: t,
            message: e,
            hideParty: !1
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== ez.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, r.jsx)(N.Z, {
                  channelId: e.channel_id,
                  messageId: e.id
              });
    }
    renderEphemeralAccessories(e) {
        return (0, eS.Pv)(e)
            ? (0, r.jsx)(eP.Z, {
                  message: e,
                  onDeleteMessage: () => {
                      h.Z.dismissAutomatedMessage(e);
                  }
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, eo.cv)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) =>
                  (0, r.jsx)(
                      es.Z,
                      {
                          channel: n,
                          isInteracting: i,
                          renderableSticker: e
                      },
                      e.id
                  )
              );
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(ez.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, r.jsx)(eu.Z, {
                message: e,
                compact: this.props.compact
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (!!e.hasFlag(ez.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
            if (!(Date.now() - eN.default.extractTimestamp(e.id) >= e$))
                return (0, r.jsx)('div', {
                    className: eX.threadRoleMentionFailure,
                    children: eK.intl.string(eK.t.ma8Rs7)
                });
        }
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, r.jsxs)(m.DeclarativeConfirmModal, {
            dismissable: !0,
            header: eK.intl.string(eK.t.VL1KOj),
            confirmText: eK.intl.string(eK.t.YEHppK),
            cancelText: eK.intl.string(eK.t['ETE/oK']),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                h.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, r.jsx)(m.Text, {
                    variant: 'text-md/normal',
                    color: 'text-normal',
                    className: eX.confirmText,
                    children: eK.intl.string(eK.t['vXZ+Fh'])
                }),
                (0, r.jsx)(m.Text, {
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: eK.intl.string(eK.t['5j2by8'])
                })
            ]
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        if (null == n) {
            this.setState({ showRemoveAttachmentModal: !1 });
            return;
        }
        return (0, r.jsx)(m.DeclarativeConfirmModal, {
            dismissable: !0,
            header: eK.intl.string(eK.t.CbTIEh),
            confirmText: eK.intl.string(eK.t.kFwAsb),
            cancelText: eK.intl.string(eK.t['ETE/oK']),
            onCancel: () =>
                this.setState({
                    showRemoveAttachmentModal: !1,
                    attachmentToDelete: null
                }),
            onConfirm: () => {
                let i = t.attachments.filter((e) => e.id !== n.id);
                h.Z.patchMessageAttachments(e.id, t.id, i),
                    this.setState({
                        showRemoveAttachmentModal: !1,
                        attachmentToDelete: null
                    });
            },
            children: (0, r.jsx)(m.Text, {
                variant: 'text-md/normal',
                color: 'text-normal',
                className: eX.confirmText,
                children: eK.intl.string(eK.t.faHmOz)
            })
        });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== s.u.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, r.jsx)(ew.Z, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, r.jsx)(eL.Z, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== ez.hBH.POST_PREVIEW || null == t.url
                ? []
                : (0, r.jsx)(
                      J.Z,
                      {
                          embedUrl: t.url,
                          message: e,
                          channel: this.props.channel
                      },
                      t.id
                  )
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === ez.hBH.SAFETY_POLICY_NOTICE ? (0, r.jsx)(el.i, { message: e }) : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === ez.hBH.SAFETY_SYSTEM_NOTIFICATION ? (0, r.jsx)(ea.g, { embed: e.embeds[0] }) : null;
    }
    renderVoiceChannelInvite(e, t) {
        if (1 === e.embeds.length && e.embeds[0].type === ez.hBH.VOICE_CHANNEL)
            return (0, r.jsx)(G.H, {
                message: e,
                channel: t
            });
    }
    renderMediaObscureNotice(e) {
        if (0 === e.attachments.length && 0 === e.embeds.length) return null;
        let { obscuredAttachments: t, obscuredEmbeds: n } = (0, b.Tw)(e);
        return 0 === t.length && 0 === n.length ? null : (0, r.jsx)(R.Z, { message: e });
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, r.jsx)(et.Z, {
                message: e,
                poll: t,
                className: eX.pollContainer
            });
    }
    renderForwardedMessage(e) {
        return 0 === e.messageSnapshots.length ? null : (0, r.jsx)(O.Z, { message: e });
    }
    render() {
        let { className: e, message: t, channel: n, poll: i } = this.props,
            { showSuppressModal: l, showRemoveAttachmentModal: a } = this.state,
            s = this.renderCodedLinks(t),
            c = this.renderGiftCodes(t),
            u = this.renderReferralTrial(t),
            d = this.renderAttachments(t),
            m = this.renderCtaButton(),
            h = this.renderSocialProofingFileSizeNitroUpsell(t),
            f = this.renderEmbeds(t),
            p = this.renderActivityInvite(t),
            _ = this.renderReactions(t),
            g = this.renderPublishBump(t),
            E = this.renderEphemeralAccessories(t),
            C = this.renderStickersAccessories(t),
            I = this.renderThreadAccessories(t),
            x = this.renderComponentAccessories(t),
            N = this.renderThreadRoleMentionWarning(t),
            v = this.renderEmbeddedApplicationInstanceEmbed(t),
            T = this.renderInteractionPremiumUpsell(t),
            S = this.renderMediaPostEmbeds(t),
            A = this.renderSafetyPolicyNotice(t),
            b = this.renderSafetySystemNotification(t),
            j = this.renderVoiceChannelInvite(t, n),
            Z = this.renderMediaObscureNotice(t),
            R = this.renderPoll(t, i),
            L = this.renderForwardedMessage(t);
        return null == s && null == d && null == f && null == p && null == _ && null == c && null == u && null == g && null == E && null == C && null == I && null == x && null == v && null == N && null == S && null == A && null != T && null == R && null == j && null == L
            ? null
            : (0, r.jsxs)('div', {
                  id: (0, ek.bX)(t),
                  className: o()(e, eX.container),
                  children: [L, N, R, s, c, u, S, d, m, f, Z, p, C, x, v, T, h, _, g, E, l && this.renderSuppressConfirmModal(), a && this.renderRemoveAttachmentConfirmModal(), I, A, b, j]
              });
    }
    constructor(...e) {
        super(...e),
            eq(this, 'state', {
                showSuppressModal: !1,
                showRemoveAttachmentModal: !1,
                attachmentToDelete: null
            }),
            eq(this, 'getAcceptInviteContext', (e) => {
                let { channel: t, message: n } = this.props;
                return {
                    location: e,
                    location_guild_id: t.getGuildId(),
                    location_channel_id: t.id,
                    location_channel_type: t.type,
                    location_message_id: n.id
                };
            }),
            eq(this, 'renderEmbed', (e, t, n, i) => {
                let { gifAutoPlay: l, inlineEmbedMedia: a, canSuppressEmbeds: o, hasSpoilerEmbeds: s, shouldRedactExplicitContent: c, hasInlineForwardButton: u, isSearchResult: d } = this.props,
                    m = i.channel_id,
                    h = i.id,
                    f = (0, eT.BP)(e, m, h, s, c);
                if (e.type === ez.hBH.GIFT) return null;
                let p = (0, r.jsx)(
                    k.h.Provider,
                    {
                        value: e1(e.url, e.image, e.video),
                        children: (0, r.jsx)(v.ZP, {
                            className: eX.embedWrapper,
                            embed: e,
                            obscureReason: null != f ? f : void 0,
                            autoPlayGif: l,
                            hideMedia: !a,
                            onSuppressEmbed: o ? this.handleEmbedSuppressed : void 0,
                            renderTitle: this.renderEmbedTitle,
                            renderDescription: this.renderEmbedDescription,
                            message: i,
                            showImageRecs: !1,
                            isSearchResult: d,
                            embedIndex: t,
                            ...n
                        })
                    },
                    e.id
                );
                return u
                    ? (0, r.jsxs)('div', {
                          className: eX.embedContainer,
                          children: [
                              p,
                              (0, r.jsx)(M.Z, {
                                  className: eY.hideIfMessageNotFocused,
                                  messageId: h,
                                  channelId: m,
                                  targetKind: 'embed',
                                  embedIndex: t
                              })
                          ]
                      })
                    : p;
            }),
            eq(this, 'renderEmbedTitle', (e, t) => (e.type === ez.hBH.RICH ? Y.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t)),
            eq(this, 'renderEmbedDescription', (e, t, n) =>
                e.type === ez.hBH.RICH
                    ? Y.Z.parse(t, !0, {
                          channelId: this.props.channel.id,
                          allowLinks: !0,
                          allowEmojiLinks: !0,
                          allowList: this.props.showListsAndHeaders,
                          allowHeading: !n && this.props.showListsAndHeaders,
                          previewLinkTarget: this.props.showMaskedLinks
                      })
                    : t
            ),
            eq(this, 'handleEmbedSuppressed', (e) => {
                let { channel: t, message: n } = this.props;
                e.shiftKey ? h.Z.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
            }),
            eq(this, 'handleRemoveAttachment', (e) => {
                let t = e.originalItem;
                this.setState({
                    showRemoveAttachmentModal: !0,
                    attachmentToDelete: t
                });
            });
    }
}
function e9(e) {
    var t;
    let { channel: n, message: i, renderSuppressEmbeds: l, isMessageSnapshot: a } = e,
        o = (0, c.e7)([em.default], () => em.default.getId()),
        s = ed.x4.useSetting(),
        u = ed.RS.useSetting(),
        d = ed.NA.useSetting() && !(0, ej.Z)(e.message),
        m = ed.nc.useSetting(),
        h = ed.QK.useSetting(),
        f = (0, c.e7)([ef.Z], () => null == n.guild_id || ef.Z.canChatInGuild(n.guild_id), [n]),
        p = (0, c.e7)([W.Z], () => null != n.guild_id && W.Z.isLurking(n.guild_id), [n]),
        _ = (0, c.e7)([eh.ZP], () => eh.ZP.isCurrentUserGuest(n.guild_id), [n]),
        g = (0, c.e7)([eh.ZP, e_.default], () => {
            var e, t;
            let i = e_.default.getCurrentUser();
            return null !== (t = null != n.guild_id && null != i ? (null === (e = eh.ZP.getMember(n.guild_id, i.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        { canAddNewReactions: E, canManageMessages: C } = (0, c.cj)(
            [ep.Z],
            () => ({
                canAddNewReactions: f && ep.Z.can(ez.Plq.ADD_REACTIONS, n),
                canManageMessages: ep.Z.can(ez.Plq.MANAGE_MESSAGES, n)
            }),
            [f, n]
        ),
        I = (0, D.ux)(n.guild_id),
        [, x] = (0, B.AB)(n.guild_id),
        N = (0, ec.$R)(n),
        v = (o === i.author.id || C) && i.author.id !== ez.LAt && !1 !== l && !(0, ex.yE)(i.flags, ez.iLy.EPHEMERAL) && N && 1 === (0, eb.Z)(i),
        T = o === i.author.id && N && !a,
        S = i.author.id === o,
        A = i.isFirstMessageInForumPost(n),
        b = (0, eZ.Z)({
            channel: n,
            canChat: f,
            renderReactions: m,
            canAddNewReactions: E,
            isLurking: p,
            isGuest: _,
            communicationDisabled: x,
            isActiveChannelOrUnarchivableThread: N,
            isAutomodQuarantined: I
        }),
        R = (0, K.A)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()),
        L = (0, q.Z)(null == n ? void 0 : n.id),
        O = (0, ee.Z)(i),
        M = (0, j.V)(n.id, i.author.id),
        k = (0, Z.r)(i.id),
        { hasInlineForwardButton: U } = (0, P.yk)({ location: 'MessageAccessories' }),
        w = (0, y.a)(i) && U;
    return (0, r.jsx)(e3, {
        canSuppressEmbeds: v,
        canDeleteAttachments: T,
        ...b,
        disableReactionReads: !!A || b.disableReactionReads,
        ...e,
        isLurking: p && f,
        isGuest: _ && f,
        isPendingMember: g && f,
        isCurrentUser: S,
        inlineAttachmentMedia: s,
        inlineEmbedMedia: u,
        renderEmbeds: d,
        gifAutoPlay: h,
        canRenderReferralEmbed: n.isDM(),
        poll: O,
        showListsAndHeaders: R,
        showMaskedLinks: R,
        shouldHideMediaOptions: L,
        shouldRedactExplicitContent: M,
        shouldRenderCtaButton: k,
        hasInlineForwardButton: w
    });
}
eq(e3, 'defaultProps', {
    renderEmbeds: !0,
    compact: !1
});
let e6 = (e) => {
    var t;
    let { message: n, channel: i, disableReactionReads: l = !1, renderComponentAccessory: a = !1, renderThreadAccessory: o = !1, disableReactionCreates: s = !0, disableReactionUpdates: c = !0, isSearchResult: u = !1, ...d } = e,
        m = ed.x4.useSetting(),
        h = ed.RS.useSetting(),
        f = ed.NA.useSetting(),
        p = ed.QK.useSetting(),
        _ = (0, K.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        g = (0, q.Z)(null == i ? void 0 : i.id),
        E = (0, j.V)(i.id, n.author.id),
        C = (0, Z.r)(n.id),
        I = (0, ee.Z)(n);
    return (0, r.jsx)(e3, {
        ...d,
        message: n,
        channel: i,
        disableReactionReads: l,
        disableReactionCreates: s,
        disableReactionUpdates: c,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderComponentAccessory: a,
        renderThreadAccessory: o,
        inlineAttachmentMedia: m,
        inlineEmbedMedia: h,
        renderEmbeds: f,
        gifAutoPlay: p,
        poll: I,
        showListsAndHeaders: _,
        showMaskedLinks: _,
        shouldHideMediaOptions: g,
        shouldRedactExplicitContent: E,
        shouldRenderCtaButton: C,
        hasInlineForwardButton: !1,
        isSearchResult: u
    });
};
