n.d(t, {
    $p: function () {
        return e9;
    },
    BB: function () {
        return e2;
    },
    ZP: function () {
        return e3;
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
    d = n(377108),
    u = n(902704),
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
    v = n(222709),
    N = n(446411),
    T = n(960904),
    S = n(161314),
    A = n(247206),
    b = n(25610),
    j = n(703751),
    Z = n(761538),
    R = n(674611),
    P = n(346610),
    L = n(868643),
    y = n(294734),
    O = n(426275),
    M = n(947849),
    k = n(715903),
    D = n(71619),
    B = n(637618),
    U = n(225890),
    w = n(364097),
    F = n(495129),
    G = n(939170),
    V = n(187506),
    H = n(954654),
    z = n(41776),
    W = n(628238),
    K = n(454585),
    Y = n(768494),
    X = n(124347),
    Q = n(976853),
    q = n(346013),
    J = n(94396),
    $ = n(977683),
    ee = n(128435),
    et = n(98278),
    en = n(614825),
    ei = n(265299),
    er = n(699833),
    el = n(344997),
    ea = n(378233),
    eo = n(374425),
    es = n(665906),
    ec = n(432147),
    ed = n(695346),
    eu = n(314897),
    em = n(271383),
    eh = n(607744),
    ef = n(496675),
    ep = n(594174),
    e_ = n(52824),
    eg = n(626135),
    eE = n(70956),
    eC = n(408433),
    eI = n(630388),
    ex = n(709054),
    ev = n(591759),
    eN = n(169525),
    eT = n(786761),
    eS = n(161010),
    eA = n(461157),
    eb = n(901461),
    ej = n(432376),
    eZ = n(384203),
    eR = n(633957),
    eP = n(530472),
    eL = n(29909),
    ey = n(782658),
    eO = n(219797),
    eM = n(453687),
    ek = n(128854),
    eD = n(101578),
    eB = n(524444),
    eU = n(319323),
    ew = n(884182),
    eF = n(546432),
    eG = n(920888),
    eV = n(817384),
    eH = n(981631),
    ez = n(474936),
    eW = n(388032),
    eK = n(916315),
    eY = n(287847),
    eX = n(680674);
function eQ(e, t, n) {
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
function eq() {
    return (0, r.jsxs)('div', {
        className: eY.nitroFileSizeUpsell,
        children: [
            (0, r.jsx)('img', {
                src: eX,
                className: eY.nitroBadgeSvg,
                alt: ''
            }),
            (0, r.jsx)(m.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: eW.intl.format(eW.t['G/H+s7'], { onClick: () => (0, et.z)() })
            })
        ]
    });
}
let eJ = 15 * eE.Z.Millis.MINUTE,
    e$ = new Set(['discord-developers', 'discord-testers', 'discord-townhall', 'discordgameslab']),
    e0 = (e, t, n) => () => {
        let i = null != t ? t : n;
        if (null == i) return null;
        let { url: l, proxyURL: a, width: o, height: s } = i;
        return (0, r.jsx)(eL.Z, {
            width: o,
            height: s,
            src: null != a && '' !== a ? a : l,
            url: null != e && '' !== e ? e : null != a && '' !== a ? a : l,
            format: null != n ? d.EO.VIDEO : d.EO.IMAGE,
            className: eY.gifFavoriteButton
        });
    },
    e1 = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: l, srcIsAnimated: a } = e;
        return null != i && null != l && (X.uo.test(n) || (a && X.YG.test(n)))
            ? (0, r.jsx)(eL.Z, {
                  width: i,
                  height: l,
                  src: n,
                  url: t,
                  format: d.EO.IMAGE,
                  className: eY.gifFavoriteButton
              })
            : null;
    };
class e2 extends (i = l.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e$.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let { channel: r, message: l, poll: a } = this.props,
            { channel: o, message: s, poll: c } = e;
        return (
            !(0, u.Z)(this.state, t) ||
            !(0, u.Z)(this.props, e, ['message', 'channel']) ||
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
                  className: eY.ctaButtonContainer,
                  children: (0, r.jsx)(R.Z, {
                      messageId: e.id,
                      channelId: t.id
                  })
              })
            : null;
    }
    renderSocialProofingFileSizeNitroUpsell(e) {
        let t = e.attachments.some((e) => e.size > ez.Lw);
        return (0, eS.M)('attachment') && t ? (0, r.jsx)(eq, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: i } = t;
                  if (n === T.g.INVITE)
                      return this.shouldRenderInvite(i)
                          ? (0, r.jsx)(
                                ey.Z,
                                {
                                    code: i,
                                    author: e.author,
                                    getAcceptInviteContext: this.getAcceptInviteContext
                                },
                                i
                            )
                          : null;
                  if (n === T.g.TEMPLATE) return (0, r.jsx)(w.Z, { code: i }, i);
                  if (n === T.g.EVENT) return (0, r.jsx)(U.Z, { code: i }, i);
                  else if (n === T.g.CHANNEL_LINK)
                      return (0, r.jsx)(
                          eZ.Z,
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
                  else if (n === T.g.GUILD_PRODUCT) return (0, r.jsx)(B.Z, { code: i }, i);
                  else if (n === T.g.SERVER_SHOP) return (0, r.jsx)(S.Z, { guildId: i }, i);
                  else if (n === T.g.QUESTS_EMBED) return (0, r.jsx)(ei.Z, { questId: i }, i);
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
                  } else if (n === T.g.APP_OAUTH2_LINK) {
                      let { enabled: e } = I.I.getCurrentConfig({ location: 'MessageAccessories' }, { autoTrackExposure: !1 });
                      return e ? (0, r.jsx)(x.Z, { applicationId: i }, i) : null;
                  } else throw Error('Unknown coded link type: '.concat(n));
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: i, type: l, content: a, giftInfo: o } = e,
            s = ep.default.getCurrentUser();
        return null != s && t.length > 0
            ? t.map((e) =>
                  (0, r.jsx)(
                      'div',
                      {
                          className: eY.giftCodeContainer,
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
                      className: eY.referralContainer,
                      children: (0, r.jsx)(en.Z, {
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
            : (0, r.jsx)(eG.Z, {
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
            { attachments: d, flags: u } = e;
        if (0 === d.length || e.isPoll() || e.isUIKitComponents()) return null;
        let m = d.filter((e) => null == e.flags || !(0, eI.yE)(e.flags, eH.J0y.IS_THUMBNAIL));
        if (0 === m.length) return null;
        let h = m
                .map((t) => {
                    var n;
                    return {
                        ...(0, Y.JD)(t, e),
                        original: t.url,
                        srcIsAnimated: (0, eI.yE)(null !== (n = t.flags) && void 0 !== n ? n : 0, eH.J0y.IS_ANIMATED)
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
                    ? (0, J._)(
                          h,
                          {
                              shouldRedactExplicitContent: s,
                              shouldHideMediaOptions: c
                          },
                          f
                      )
                    : {},
            _ = (0, eI.yE)(u, eH.iLy.IS_VOICE_MESSAGE);
        function g(e, t) {
            return (0, eN.dn)(e.originalItem, t);
        }
        let E = m.map((n) => {
                let r = (0, Y.VY)(n),
                    s = {
                        message: e,
                        item: (0, eF.O)(n, a),
                        autoPlayGif: i,
                        canRemoveItem: l && (m.length > 1 || '' !== e.content),
                        onRemoveItem: this.handleRemoveAttachment,
                        className: eY.embedWrapper,
                        getObscureReason: g,
                        onContextMenu:
                            null != o
                                ? (e) => {
                                      e.stopPropagation(), e.preventDefault(), o(e, r);
                                  }
                                : void 0,
                        renderAudioComponent: _ ? eO.jY : eO.q7,
                        renderImageComponent: eO.dS,
                        renderVideoComponent: eO.vZ,
                        renderPlaintextFilePreview: eO.d4,
                        renderGenericFileComponent: eO.ZK,
                        renderMosaicItemFooter: eO.L9,
                        onPlay: (e, i, r) => {
                            eg.default.track(eH.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                                guild_id: t.guild_id,
                                channel_id: t.id,
                                channel_type: t.type,
                                type: n.content_type,
                                flags: n.flags,
                                size: n.size,
                                duration: r
                            });
                        },
                        gifFavoriteButton: e1(r),
                        isSearchResult: this.props.isSearchResult
                    },
                    c = (0, e_.q)({
                        proxyURL: n.proxy_url,
                        url: n.url
                    });
                return c in p && (s.onClick = p[c]), s;
            }),
            C = n
                ? (0, r.jsx)(O.Z, {
                      className: eK.hideIfMessageNotFocused,
                      messageId: e.id,
                      channelId: t.id,
                      targetKind: 'media'
                  })
                : void 0;
        return (0, r.jsx)(ew.Z, {
            items: E,
            inlineForwardButton: C
        });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t } = this.props;
        return 0 !== e.embeds.length && t
            ? e.embeds.map((t, n) => {
                  if (eV.b.has(t.type) || (0, eC.l3)(t) || ((0, G.b)(t) && !(0, V.M)(e))) return null;
                  let i = {
                      renderImageComponent: eB.Yi,
                      renderVideoComponent: eB.lV,
                      renderLinkComponent: eB.iT
                  };
                  if (t.type === eH.hBH.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && 'Discord' === t.provider.name) {
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
        return (0, r.jsx)(ek.F, {
            gifAutoPlay: t,
            getGifFavButton: e1,
            getOnMediaItemContextMenu:
                null == l
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), null == l || l(t, e);
                      },
            shouldHideMediaOptions: i,
            shouldRedactExplicitContent: n,
            children: (0, r.jsx)(H.ZP, { message: e })
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, r.jsx)(eD.Z, {
            channel: t,
            message: e,
            hideParty: !1
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eH.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, r.jsx)(v.Z, {
                  channelId: e.channel_id,
                  messageId: e.id
              });
    }
    renderEphemeralAccessories(e) {
        return (0, eT.Pv)(e)
            ? (0, r.jsx)(eP.Z, {
                  message: e,
                  onDeleteMessage: () => {
                      h.Z.dismissAutomatedMessage(e);
                  }
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, ea.cv)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) =>
                  (0, r.jsx)(
                      eo.Z,
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
        if (e.hasFlag(eH.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, r.jsx)(ec.Z, {
                message: e,
                compact: this.props.compact
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (!!e.hasFlag(eH.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
            if (!(Date.now() - ex.default.extractTimestamp(e.id) >= eJ))
                return (0, r.jsx)('div', {
                    className: eY.threadRoleMentionFailure,
                    children: eW.intl.string(eW.t.ma8Rs7)
                });
        }
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, r.jsxs)(m.DeclarativeConfirmModal, {
            dismissable: !0,
            header: eW.intl.string(eW.t.VL1KOj),
            confirmText: eW.intl.string(eW.t.YEHppK),
            cancelText: eW.intl.string(eW.t['ETE/oK']),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                h.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, r.jsx)(m.Text, {
                    variant: 'text-md/normal',
                    color: 'text-normal',
                    className: eY.confirmText,
                    children: eW.intl.string(eW.t['vXZ+Fh'])
                }),
                (0, r.jsx)(m.Text, {
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: eW.intl.string(eW.t['5j2by8'])
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
            header: eW.intl.string(eW.t.CbTIEh),
            confirmText: eW.intl.string(eW.t.kFwAsb),
            cancelText: eW.intl.string(eW.t['ETE/oK']),
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
                className: eY.confirmText,
                children: eW.intl.string(eW.t.faHmOz)
            })
        });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== s.u.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, r.jsx)(eU.Z, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, r.jsx)(eR.Z, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eH.hBH.POST_PREVIEW || null == t.url
                ? []
                : (0, r.jsx)(
                      q.Z,
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
        return 1 === e.embeds.length && e.embeds[0].type === eH.hBH.SAFETY_POLICY_NOTICE ? (0, r.jsx)(er.i, { message: e }) : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eH.hBH.SAFETY_SYSTEM_NOTIFICATION ? (0, r.jsx)(el.g, { embed: e.embeds[0] }) : null;
    }
    renderVoiceChannelInvite(e, t) {
        if (1 === e.embeds.length && e.embeds[0].type === eH.hBH.VOICE_CHANNEL)
            return (0, r.jsx)(F.H, {
                message: e,
                channel: t
            });
    }
    renderMediaObscureNotice(e) {
        if (0 === e.attachments.length && 0 === e.embeds.length) return null;
        let { obscuredAttachments: t, obscuredEmbeds: n } = (0, A.Tw)(e);
        return 0 === t.length && 0 === n.length ? null : (0, r.jsx)(Z.Z, { message: e });
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, r.jsx)(ee.Z, {
                message: e,
                poll: t,
                className: eY.pollContainer
            });
    }
    renderForwardedMessage(e) {
        return 0 === e.messageSnapshots.length ? null : (0, r.jsx)(y.Z, { message: e });
    }
    render() {
        let { className: e, message: t, channel: n, poll: i } = this.props,
            { showSuppressModal: l, showRemoveAttachmentModal: a } = this.state,
            s = this.renderCodedLinks(t),
            c = this.renderGiftCodes(t),
            d = this.renderReferralTrial(t),
            u = this.renderAttachments(t),
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
            v = this.renderThreadRoleMentionWarning(t),
            N = this.renderEmbeddedApplicationInstanceEmbed(t),
            T = this.renderInteractionPremiumUpsell(t),
            S = this.renderMediaPostEmbeds(t),
            A = this.renderSafetyPolicyNotice(t),
            b = this.renderSafetySystemNotification(t),
            j = this.renderVoiceChannelInvite(t, n),
            Z = this.renderMediaObscureNotice(t),
            R = this.renderPoll(t, i),
            P = this.renderForwardedMessage(t);
        return null == s && null == u && null == f && null == p && null == _ && null == c && null == d && null == g && null == E && null == C && null == I && null == x && null == N && null == v && null == S && null == A && null != T && null == R && null == j && null == P
            ? null
            : (0, r.jsxs)('div', {
                  id: (0, eM.bX)(t),
                  className: o()(e, eY.container),
                  children: [P, v, R, s, c, d, S, u, m, f, Z, p, C, x, N, T, h, _, g, E, l && this.renderSuppressConfirmModal(), a && this.renderRemoveAttachmentConfirmModal(), I, A, b, j]
              });
    }
    constructor(...e) {
        super(...e),
            eQ(this, 'state', {
                showSuppressModal: !1,
                showRemoveAttachmentModal: !1,
                attachmentToDelete: null
            }),
            eQ(this, 'getAcceptInviteContext', (e) => {
                let { channel: t, message: n } = this.props;
                return {
                    location: e,
                    location_guild_id: t.getGuildId(),
                    location_channel_id: t.id,
                    location_channel_type: t.type,
                    location_message_id: n.id
                };
            }),
            eQ(this, 'renderEmbed', (e, t, n, i) => {
                let { gifAutoPlay: l, inlineEmbedMedia: a, canSuppressEmbeds: o, hasSpoilerEmbeds: s, shouldRedactExplicitContent: c, hasInlineForwardButton: d, isSearchResult: u } = this.props,
                    m = i.channel_id,
                    h = i.id,
                    f = (0, eN.BP)(e, m, h, s, c);
                if (e.type === eH.hBH.GIFT) return null;
                let p = (0, r.jsx)(
                    M.h.Provider,
                    {
                        value: e0(e.url, e.image, e.video),
                        children: (0, r.jsx)(N.ZP, {
                            className: eY.embedWrapper,
                            embed: e,
                            obscureReason: null != f ? f : void 0,
                            autoPlayGif: l,
                            hideMedia: !a,
                            onSuppressEmbed: o ? this.handleEmbedSuppressed : void 0,
                            renderTitle: this.renderEmbedTitle,
                            renderDescription: this.renderEmbedDescription,
                            message: i,
                            showImageRecs: !1,
                            isSearchResult: u,
                            embedIndex: t,
                            ...n
                        })
                    },
                    e.id
                );
                return d
                    ? (0, r.jsxs)('div', {
                          className: eY.embedContainer,
                          children: [
                              p,
                              (0, r.jsx)(O.Z, {
                                  className: eK.hideIfMessageNotFocused,
                                  messageId: h,
                                  channelId: m,
                                  targetKind: 'embed',
                                  embedIndex: t
                              })
                          ]
                      })
                    : p;
            }),
            eQ(this, 'renderEmbedTitle', (e, t) => (e.type === eH.hBH.RICH ? K.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t)),
            eQ(this, 'renderEmbedDescription', (e, t, n) =>
                e.type === eH.hBH.RICH
                    ? K.Z.parse(t, !0, {
                          channelId: this.props.channel.id,
                          allowLinks: !0,
                          allowEmojiLinks: !0,
                          allowList: this.props.showListsAndHeaders,
                          allowHeading: !n && this.props.showListsAndHeaders,
                          previewLinkTarget: this.props.showMaskedLinks
                      })
                    : t
            ),
            eQ(this, 'handleEmbedSuppressed', (e) => {
                let { channel: t, message: n } = this.props;
                e.shiftKey ? h.Z.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
            }),
            eQ(this, 'handleRemoveAttachment', (e) => {
                let t = e.originalItem;
                this.setState({
                    showRemoveAttachmentModal: !0,
                    attachmentToDelete: t
                });
            });
    }
}
function e3(e) {
    var t;
    let { channel: n, message: i, renderSuppressEmbeds: l, isMessageSnapshot: a } = e,
        o = (0, c.e7)([eu.default], () => eu.default.getId()),
        s = ed.x4.useSetting(),
        d = ed.RS.useSetting(),
        u = ed.NA.useSetting() && !(0, eb.Z)(e.message),
        m = ed.nc.useSetting(),
        h = ed.QK.useSetting(),
        f = (0, c.e7)([eh.Z], () => null == n.guild_id || eh.Z.canChatInGuild(n.guild_id), [n]),
        p = (0, c.e7)([z.Z], () => null != n.guild_id && z.Z.isLurking(n.guild_id), [n]),
        _ = (0, c.e7)([em.ZP], () => em.ZP.isCurrentUserGuest(n.guild_id), [n]),
        g = (0, c.e7)([em.ZP, ep.default], () => {
            var e, t;
            let i = ep.default.getCurrentUser();
            return null !== (t = null != n.guild_id && null != i ? (null === (e = em.ZP.getMember(n.guild_id, i.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        { canAddNewReactions: E, canManageMessages: C } = (0, c.cj)(
            [ef.Z],
            () => ({
                canAddNewReactions: f && ef.Z.can(eH.Plq.ADD_REACTIONS, n),
                canManageMessages: ef.Z.can(eH.Plq.MANAGE_MESSAGES, n)
            }),
            [f, n]
        ),
        I = (0, k.ux)(n.guild_id),
        [, x] = (0, D.AB)(n.guild_id),
        v = (0, es.$R)(n),
        N = (o === i.author.id || C) && i.author.id !== eH.LAt && !1 !== l && !(0, eI.yE)(i.flags, eH.iLy.EPHEMERAL) && v && 1 === (0, eA.Z)(i),
        T = o === i.author.id && v && !a,
        S = i.author.id === o,
        A = i.isFirstMessageInForumPost(n),
        Z = (0, ej.Z)({
            channel: n,
            canChat: f,
            renderReactions: m,
            canAddNewReactions: E,
            isLurking: p,
            isGuest: _,
            communicationDisabled: x,
            isActiveChannelOrUnarchivableThread: v,
            isAutomodQuarantined: I
        }),
        R = (0, W.A)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()),
        y = (0, Q.Z)(null == n ? void 0 : n.id),
        O = (0, $.Z)(i),
        M = (0, b.V)(n.id, i.author.id),
        B = (0, j.r)(i.id),
        { hasInlineForwardButton: U } = (0, P.yk)({ location: 'MessageAccessories' }),
        w = (0, L.a)(i) && U;
    return (0, r.jsx)(e2, {
        canSuppressEmbeds: N,
        canDeleteAttachments: T,
        ...Z,
        disableReactionReads: !!A || Z.disableReactionReads,
        ...e,
        isLurking: p && f,
        isGuest: _ && f,
        isPendingMember: g && f,
        isCurrentUser: S,
        inlineAttachmentMedia: s,
        inlineEmbedMedia: d,
        renderEmbeds: u,
        gifAutoPlay: h,
        canRenderReferralEmbed: n.isDM(),
        poll: O,
        showListsAndHeaders: R,
        showMaskedLinks: R,
        shouldHideMediaOptions: y,
        shouldRedactExplicitContent: M,
        shouldRenderCtaButton: B,
        hasInlineForwardButton: w
    });
}
eQ(e2, 'defaultProps', {
    renderEmbeds: !0,
    compact: !1
});
let e9 = (e) => {
    var t;
    let { message: n, channel: i, disableReactionReads: l = !1, renderComponentAccessory: a = !1, renderThreadAccessory: o = !1, disableReactionCreates: s = !0, disableReactionUpdates: c = !0, isSearchResult: d = !1, ...u } = e,
        m = ed.x4.useSetting(),
        h = ed.RS.useSetting(),
        f = ed.NA.useSetting(),
        p = ed.QK.useSetting(),
        _ = (0, W.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        g = (0, Q.Z)(null == i ? void 0 : i.id),
        E = (0, b.V)(i.id, n.author.id),
        C = (0, j.r)(n.id),
        I = (0, $.Z)(n);
    return (0, r.jsx)(e2, {
        ...u,
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
        isSearchResult: d
    });
};
