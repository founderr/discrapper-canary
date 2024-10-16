n.d(t, {
    $p: function () {
        return e4;
    },
    BB: function () {
        return e3;
    },
    ZP: function () {
        return e2;
    }
}),
    n(47120),
    n(789020),
    n(411104),
    n(390547);
var i,
    a = n(735250),
    s = n(470079),
    r = n(120356),
    l = n.n(r),
    o = n(275726),
    c = n(442837),
    u = n(377108),
    d = n(902704),
    _ = n(481060),
    E = n(904245),
    I = n(637374),
    m = n(626799),
    T = n(624367),
    h = n(433074),
    N = n(421474),
    f = n(603270),
    C = n(171364),
    p = n(162297),
    g = n(222709),
    A = n(446411),
    S = n(960904),
    R = n(161314),
    x = n(119392),
    O = n(163268),
    M = n(25610),
    v = n(703751),
    L = n(761538),
    Z = n(674611),
    P = n(346610),
    b = n(868643),
    D = n(294734),
    j = n(426275),
    U = n(947849),
    y = n(715903),
    B = n(71619),
    k = n(637618),
    G = n(225890),
    F = n(364097),
    w = n(495129),
    V = n(939170),
    H = n(505104),
    Y = n(954654),
    W = n(41776),
    K = n(628238),
    z = n(454585),
    X = n(768494),
    Q = n(124347),
    J = n(976853),
    q = n(346013),
    $ = n(94396),
    ee = n(977683),
    et = n(128435),
    en = n(98278),
    ei = n(614825),
    ea = n(265299),
    es = n(699833),
    er = n(344997),
    el = n(378233),
    eo = n(374425),
    ec = n(665906),
    eu = n(432147),
    ed = n(695346),
    e_ = n(314897),
    eE = n(271383),
    eI = n(607744),
    em = n(496675),
    eT = n(594174),
    eh = n(52824),
    eN = n(626135),
    ef = n(70956),
    eC = n(408433),
    ep = n(630388),
    eg = n(709054),
    eA = n(591759),
    eS = n(169525),
    eR = n(786761),
    ex = n(161010),
    eO = n(461157),
    eM = n(901461),
    ev = n(432376),
    eL = n(384203),
    eZ = n(633957),
    eP = n(530472),
    eb = n(29909),
    eD = n(782658),
    ej = n(219797),
    eU = n(453687),
    ey = n(128854),
    eB = n(101578),
    ek = n(524444),
    eG = n(319323),
    eF = n(884182),
    ew = n(546432),
    eV = n(920888),
    eH = n(817384),
    eY = n(981631),
    eW = n(474936),
    eK = n(689938),
    ez = n(916315),
    eX = n(287847),
    eQ = n(680674);
function eJ(e, t, n) {
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
    return (0, a.jsxs)('div', {
        className: eX.nitroFileSizeUpsell,
        children: [
            (0, a.jsx)('img', {
                src: eQ,
                className: eX.nitroBadgeSvg,
                alt: ''
            }),
            (0, a.jsx)(_.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: eK.Z.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({ onClick: () => (0, en.z)() })
            })
        ]
    });
}
let e$ = 15 * ef.Z.Millis.MINUTE,
    e0 = new Set(['discord-developers', 'discord-testers', 'discord-townhall', 'discordgameslab']),
    e1 = (e, t, n) => () => {
        let i = null != t ? t : n;
        if (null == i) return null;
        let { url: s, proxyURL: r, width: l, height: o } = i;
        return (0, a.jsx)(eb.Z, {
            width: l,
            height: o,
            src: null != r && '' !== r ? r : s,
            url: null != e && '' !== e ? e : null != r && '' !== r ? r : s,
            format: null != n ? u.EO.VIDEO : u.EO.IMAGE,
            className: eX.gifFavoriteButton
        });
    },
    e7 = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: s } = e;
        return null != i && null != s && Q.uo.test(n)
            ? (0, a.jsx)(eb.Z, {
                  width: i,
                  height: s,
                  src: n,
                  url: t,
                  format: u.EO.IMAGE,
                  className: eX.gifFavoriteButton
              })
            : null;
    };
class e3 extends (i = s.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e0.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let { channel: a, message: s, poll: r } = this.props,
            { channel: l, message: o, poll: c } = e;
        return (
            !(0, d.Z)(this.state, t) ||
            !(0, d.Z)(this.props, e, ['message', 'channel']) ||
            a.type !== l.type ||
            c !== r ||
            o.codedLinks !== s.codedLinks ||
            o.flags !== s.flags ||
            o.giftCodes !== s.giftCodes ||
            o.attachments !== s.attachments ||
            o.embeds !== s.embeds ||
            o.components !== s.components ||
            o.activity !== s.activity ||
            ((n = o.reactions),
            n !== (i = s.reactions) &&
                (n.length !== i.length ||
                    !!n.some((e, t) => {
                        let { emoji: n, count: a, burst_count: s } = e,
                            { emoji: r, count: l, burst_count: o } = i[t];
                        return s !== o || a !== l || n.id !== r.id || n.name !== r.name;
                    })))
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, shouldRenderCtaButton: n } = this.props;
        return n
            ? (0, a.jsx)('div', {
                  className: eX.ctaButtonContainer,
                  children: (0, a.jsx)(Z.Z, {
                      messageId: e.id,
                      channelId: t.id
                  })
              })
            : null;
    }
    renderSocialProofingFileSizeNitroUpsell(e) {
        let t = e.attachments.some((e) => e.size > eW.Lw);
        return (0, ex.M)('attachment') && t ? (0, a.jsx)(eq, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: i } = t;
                  if (n === S.g.INVITE)
                      return this.shouldRenderInvite(i)
                          ? (0, a.jsx)(
                                eD.Z,
                                {
                                    code: i,
                                    author: e.author,
                                    getAcceptInviteContext: this.getAcceptInviteContext
                                },
                                i
                            )
                          : null;
                  if (n === S.g.TEMPLATE) return (0, a.jsx)(F.Z, { code: i }, i);
                  if (n === S.g.EVENT) return (0, a.jsx)(G.Z, { code: i }, i);
                  else if (n === S.g.CHANNEL_LINK)
                      return (0, a.jsx)(
                          eL.Z,
                          {
                              code: i,
                              messageData: e
                          },
                          i
                      );
                  else if (n === S.g.APP_DIRECTORY_PROFILE)
                      return (0, a.jsx)(
                          h.Z,
                          {
                              code: i,
                              message: e
                          },
                          i
                      );
                  else if (n === S.g.ACTIVITY_BOOKMARK)
                      return (0, a.jsx)(
                          T.Z,
                          {
                              applicationId: i,
                              message: e
                          },
                          i
                      );
                  else if (n === S.g.GUILD_PRODUCT) return (0, a.jsx)(k.Z, { code: i }, i);
                  else if (n === S.g.SERVER_SHOP) return (0, a.jsx)(R.Z, { guildId: i }, i);
                  else if (n === S.g.QUESTS_EMBED) return (0, a.jsx)(ea.Z, { questId: i }, i);
                  else if (n === S.g.APP_DIRECTORY_STOREFRONT)
                      return (0, a.jsx)(
                          f.P,
                          {
                              appId: i,
                              message: e
                          },
                          i
                      );
                  else if (n === S.g.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, N.Q)(i);
                      return null == t
                          ? null
                          : (0, a.jsx)(
                                f.F,
                                {
                                    skuId: t.skuId,
                                    message: e
                                },
                                i
                            );
                  } else if (n === S.g.DISCOVERY_GAME) return (0, a.jsx)(x.Z, { gameId: i }, i);
                  else if (n === S.g.APP_OAUTH2_LINK) {
                      let { enabled: e } = C.I.getCurrentConfig({ location: 'MessageAccessories' }, { autoTrackExposure: !1 });
                      return e ? (0, a.jsx)(p.Z, { applicationId: i }, i) : null;
                  } else throw Error('Unknown coded link type: '.concat(n));
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: i, type: s, content: r, giftInfo: l } = e,
            o = eT.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, a.jsx)(
                      'div',
                      {
                          className: eX.giftCodeContainer,
                          children: (0, a.jsx)(I.Z, {
                              code: e,
                              author: n,
                              channelId: i,
                              currentUser: o,
                              type: s,
                              content: r,
                              giftInfo: l
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
        return n !== o.u.PREMIUM_REFERRAL || null == t
            ? null
            : (0, a.jsx)(
                  'div',
                  {
                      className: eX.referralContainer,
                      children: (0, a.jsx)(ei.Z, {
                          userTrialOfferId: t,
                          canRenderReferralEmbed: null != i && i
                      })
                  },
                  t
              );
    }
    renderReactions(e) {
        let { disableReactionCreates: t, disableReactionReads: n, disableReactionUpdates: i, isLurking: s, isGuest: r, isPendingMember: l, channel: o, forceAddReactions: c } = this.props;
        return n
            ? null
            : (0, a.jsx)(eV.Z, {
                  message: e,
                  channel: o,
                  disableReactionCreates: t,
                  disableReactionUpdates: i,
                  isLurking: s,
                  isGuest: r,
                  isPendingMember: l,
                  forceAddReactions: c,
                  useChatFontScaling: !0
              });
    }
    renderAttachments(e) {
        let { channel: t, hasInlineForwardButton: n, gifAutoPlay: i, canDeleteAttachments: s, inlineAttachmentMedia: r, onMediaItemContextMenu: l, shouldRedactExplicitContent: o, shouldHideMediaOptions: c } = this.props,
            { attachments: u, flags: d } = e;
        if (0 === u.length || e.isPoll() || e.isUIKitComponents()) return null;
        let _ = u.filter((e) => null == e.flags || !(0, ep.yE)(e.flags, eY.J0y.IS_THUMBNAIL));
        if (0 === _.length) return null;
        let E = _.map((t) => {
                var n;
                return {
                    ...(0, X.JD)(t, e),
                    original: t.url,
                    srcIsAnimated: (0, ep.yE)(null !== (n = t.flags) && void 0 !== n ? n : 0, eY.J0y.IS_ANIMATED)
                };
            }).filter((e) => 'INVALID' !== e.type),
            I = {
                source: 'Media Mosaic',
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type
            },
            m =
                E.length > 1
                    ? (0, $._)(
                          E,
                          {
                              shouldRedactExplicitContent: o,
                              shouldHideMediaOptions: c
                          },
                          I
                      )
                    : {},
            T = (0, ep.yE)(d, eY.iLy.IS_VOICE_MESSAGE);
        function h(e, t) {
            return (0, eS.dn)(e.originalItem, t);
        }
        let N = _.map((n) => {
                let a = (0, X.VY)(n),
                    o = {
                        message: e,
                        item: (0, ew.O)(n, r),
                        autoPlayGif: i,
                        canRemoveItem: s && (_.length > 1 || '' !== e.content),
                        onRemoveItem: this.handleRemoveAttachment,
                        className: eX.embedWrapper,
                        getObscureReason: h,
                        onContextMenu:
                            null != l
                                ? (e) => {
                                      e.stopPropagation(), e.preventDefault(), l(e, a);
                                  }
                                : void 0,
                        renderAudioComponent: T ? ej.jY : ej.q7,
                        renderImageComponent: ej.dS,
                        renderVideoComponent: ej.vZ,
                        renderPlaintextFilePreview: ej.d4,
                        renderGenericFileComponent: ej.ZK,
                        renderMosaicItemFooter: ej.L9,
                        onPlay: (e, i, a) => {
                            eN.default.track(eY.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                                guild_id: t.guild_id,
                                channel_id: t.id,
                                channel_type: t.type,
                                type: n.content_type,
                                flags: n.flags,
                                size: n.size,
                                duration: a
                            });
                        },
                        gifFavoriteButton: e7(a),
                        isSearchResult: this.props.isSearchResult
                    },
                    c = (0, eh.q)({
                        proxyURL: n.proxy_url,
                        url: n.url
                    });
                return c in m && (o.onClick = m[c]), o;
            }),
            f = n
                ? (0, a.jsx)(j.Z, {
                      className: ez.hideIfMessageNotFocused,
                      messageId: e.id,
                      channelId: t.id,
                      targetKind: 'media'
                  })
                : void 0;
        return (0, a.jsx)(eF.Z, {
            items: N,
            inlineForwardButton: f
        });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t } = this.props;
        return 0 !== e.embeds.length && t
            ? e.embeds.map((t, n) => {
                  if (eH.b.has(t.type) || (0, eC.l3)(t) || ((0, V.b)(t) && !(0, H.M)(e))) return null;
                  let i = {
                      renderImageComponent: ek.Yi,
                      renderVideoComponent: ek.lV,
                      renderLinkComponent: ek.iT
                  };
                  if (t.type === eY.hBH.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && 'Discord' === t.provider.name) {
                      let s = eA.Z.safeParseWithQuery(t.url);
                      if (null != s && null != s.pathname) {
                          let r = s.pathname.split('/')[3];
                          if (null != r)
                              return (0, a.jsx)(
                                  m.Z,
                                  {
                                      skuId: r,
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
        let { gifAutoPlay: t, shouldRedactExplicitContent: n, shouldHideMediaOptions: i, onMediaItemContextMenu: s } = this.props;
        return (0, a.jsx)(ey.F, {
            gifAutoPlay: t,
            getGifFavButton: e7,
            getOnMediaItemContextMenu:
                null == s
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), null == s || s(t, e);
                      },
            shouldHideMediaOptions: i,
            shouldRedactExplicitContent: n,
            children: (0, a.jsx)(Y.ZP, { message: e })
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, a.jsx)(eB.Z, {
            channel: t,
            message: e,
            hideParty: !1
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eY.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, a.jsx)(g.Z, {
                  channelId: e.channel_id,
                  messageId: e.id
              });
    }
    renderEphemeralAccessories(e) {
        return (0, eR.Pv)(e)
            ? (0, a.jsx)(eP.Z, {
                  message: e,
                  onDeleteMessage: () => {
                      E.Z.dismissAutomatedMessage(e);
                  }
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, el.cv)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) =>
                  (0, a.jsx)(
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
        if (e.hasFlag(eY.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, a.jsx)(eu.Z, {
                message: e,
                compact: this.props.compact
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (!!e.hasFlag(eY.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
            if (!(Date.now() - eg.default.extractTimestamp(e.id) >= e$))
                return (0, a.jsx)('div', {
                    className: eX.threadRoleMentionFailure,
                    children: eK.Z.Messages.THREAD_ROLE_MENTION_FAILURE
                });
        }
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, a.jsxs)(_.DeclarativeConfirmModal, {
            dismissable: !0,
            header: eK.Z.Messages.SUPPRESS_EMBED_TITLE,
            confirmText: eK.Z.Messages.SUPPRESS_EMBED_CONFIRM,
            cancelText: eK.Z.Messages.CANCEL,
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                E.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, a.jsx)(_.Text, {
                    variant: 'text-md/normal',
                    color: 'text-normal',
                    className: eX.confirmText,
                    children: eK.Z.Messages.SUPPRESS_EMBED_BODY
                }),
                (0, a.jsx)(_.Text, {
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: eK.Z.Messages.SUPPRESS_EMBED_TIP
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
        return (0, a.jsx)(_.DeclarativeConfirmModal, {
            dismissable: !0,
            header: eK.Z.Messages.REMOVE_ATTACHMENT_TITLE,
            confirmText: eK.Z.Messages.REMOVE_ATTACHMENT_CONFIRM,
            cancelText: eK.Z.Messages.CANCEL,
            onCancel: () =>
                this.setState({
                    showRemoveAttachmentModal: !1,
                    attachmentToDelete: null
                }),
            onConfirm: () => {
                let i = t.attachments.filter((e) => e.id !== n.id);
                E.Z.patchMessageAttachments(e.id, t.id, i),
                    this.setState({
                        showRemoveAttachmentModal: !1,
                        attachmentToDelete: null
                    });
            },
            children: (0, a.jsx)(_.Text, {
                variant: 'text-md/normal',
                color: 'text-normal',
                className: eX.confirmText,
                children: eK.Z.Messages.REMOVE_ATTACHMENT_BODY
            })
        });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== o.u.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, a.jsx)(eG.Z, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, a.jsx)(eZ.Z, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eY.hBH.POST_PREVIEW || null == t.url
                ? []
                : (0, a.jsx)(
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
        return 1 === e.embeds.length && e.embeds[0].type === eY.hBH.SAFETY_POLICY_NOTICE ? (0, a.jsx)(es.i, { message: e }) : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eY.hBH.SAFETY_SYSTEM_NOTIFICATION ? (0, a.jsx)(er.g, { embed: e.embeds[0] }) : null;
    }
    renderVoiceChannelInvite(e, t) {
        if (1 === e.embeds.length && e.embeds[0].type === eY.hBH.VOICE_CHANNEL)
            return (0, a.jsx)(w.H, {
                message: e,
                channel: t
            });
    }
    renderMediaObscureNotice(e) {
        if (0 === e.attachments.length && 0 === e.embeds.length) return null;
        let { obscuredAttachments: t, obscuredEmbeds: n } = (0, O.Tw)(e);
        return 0 === t.length && 0 === n.length ? null : (0, a.jsx)(L.Z, { message: e });
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, a.jsx)(et.Z, {
                message: e,
                poll: t,
                className: eX.pollContainer
            });
    }
    renderForwardedMessage(e) {
        return 0 === e.messageSnapshots.length ? null : (0, a.jsx)(D.Z, { message: e });
    }
    render() {
        let { className: e, message: t, channel: n, poll: i } = this.props,
            { showSuppressModal: s, showRemoveAttachmentModal: r } = this.state,
            o = this.renderCodedLinks(t),
            c = this.renderGiftCodes(t),
            u = this.renderReferralTrial(t),
            d = this.renderAttachments(t),
            _ = this.renderCtaButton(),
            E = this.renderSocialProofingFileSizeNitroUpsell(t),
            I = this.renderEmbeds(t),
            m = this.renderActivityInvite(t),
            T = this.renderReactions(t),
            h = this.renderPublishBump(t),
            N = this.renderEphemeralAccessories(t),
            f = this.renderStickersAccessories(t),
            C = this.renderThreadAccessories(t),
            p = this.renderComponentAccessories(t),
            g = this.renderThreadRoleMentionWarning(t),
            A = this.renderEmbeddedApplicationInstanceEmbed(t),
            S = this.renderInteractionPremiumUpsell(t),
            R = this.renderMediaPostEmbeds(t),
            x = this.renderSafetyPolicyNotice(t),
            O = this.renderSafetySystemNotification(t),
            M = this.renderVoiceChannelInvite(t, n),
            v = this.renderMediaObscureNotice(t),
            L = this.renderPoll(t, i),
            Z = this.renderForwardedMessage(t);
        return null == o && null == d && null == I && null == m && null == T && null == c && null == u && null == h && null == N && null == f && null == C && null == p && null == A && null == g && null == R && null == x && null != S && null == L && null == M && null == Z
            ? null
            : (0, a.jsxs)('div', {
                  id: (0, eU.bX)(t),
                  className: l()(e, eX.container),
                  children: [Z, g, L, o, c, u, R, d, _, I, v, m, f, p, A, S, E, T, h, N, s && this.renderSuppressConfirmModal(), r && this.renderRemoveAttachmentConfirmModal(), C, x, O, M]
              });
    }
    constructor(...e) {
        super(...e),
            eJ(this, 'state', {
                showSuppressModal: !1,
                showRemoveAttachmentModal: !1,
                attachmentToDelete: null
            }),
            eJ(this, 'getAcceptInviteContext', (e) => {
                let { channel: t, message: n } = this.props;
                return {
                    location: e,
                    location_guild_id: t.getGuildId(),
                    location_channel_id: t.id,
                    location_channel_type: t.type,
                    location_message_id: n.id
                };
            }),
            eJ(this, 'renderEmbed', (e, t, n, i) => {
                let { gifAutoPlay: s, inlineEmbedMedia: r, canSuppressEmbeds: l, hasSpoilerEmbeds: o, shouldRedactExplicitContent: c, hasInlineForwardButton: u, isSearchResult: d } = this.props,
                    _ = i.channel_id,
                    E = i.id,
                    I = (0, eS.BP)(e, _, E, o, c);
                if (e.type === eY.hBH.GIFT) return null;
                let m = (0, a.jsx)(
                    U.h.Provider,
                    {
                        value: e1(e.url, e.image, e.video),
                        children: (0, a.jsx)(A.ZP, {
                            className: eX.embedWrapper,
                            embed: e,
                            obscureReason: null != I ? I : void 0,
                            autoPlayGif: s,
                            hideMedia: !r,
                            onSuppressEmbed: l ? this.handleEmbedSuppressed : void 0,
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
                    ? (0, a.jsxs)('div', {
                          className: eX.embedContainer,
                          children: [
                              m,
                              (0, a.jsx)(j.Z, {
                                  className: ez.hideIfMessageNotFocused,
                                  messageId: E,
                                  channelId: _,
                                  targetKind: 'embed',
                                  embedIndex: t
                              })
                          ]
                      })
                    : m;
            }),
            eJ(this, 'renderEmbedTitle', (e, t) => (e.type === eY.hBH.RICH ? z.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t)),
            eJ(this, 'renderEmbedDescription', (e, t, n) =>
                e.type === eY.hBH.RICH
                    ? z.Z.parse(t, !0, {
                          channelId: this.props.channel.id,
                          allowLinks: !0,
                          allowEmojiLinks: !0,
                          allowList: this.props.showListsAndHeaders,
                          allowHeading: !n && this.props.showListsAndHeaders,
                          previewLinkTarget: this.props.showMaskedLinks
                      })
                    : t
            ),
            eJ(this, 'handleEmbedSuppressed', (e) => {
                let { channel: t, message: n } = this.props;
                e.shiftKey ? E.Z.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
            }),
            eJ(this, 'handleRemoveAttachment', (e) => {
                let t = e.originalItem;
                this.setState({
                    showRemoveAttachmentModal: !0,
                    attachmentToDelete: t
                });
            });
    }
}
function e2(e) {
    var t;
    let { channel: n, message: i, renderSuppressEmbeds: s, isMessageSnapshot: r } = e,
        l = (0, c.e7)([e_.default], () => e_.default.getId()),
        o = ed.x4.useSetting(),
        u = ed.RS.useSetting(),
        d = ed.NA.useSetting() && !(0, eM.Z)(e.message),
        _ = ed.nc.useSetting(),
        E = ed.QK.useSetting(),
        I = (0, c.e7)([eI.Z], () => null == n.guild_id || eI.Z.canChatInGuild(n.guild_id), [n]),
        m = (0, c.e7)([W.Z], () => null != n.guild_id && W.Z.isLurking(n.guild_id), [n]),
        T = (0, c.e7)([eE.ZP], () => eE.ZP.isCurrentUserGuest(n.guild_id), [n]),
        h = (0, c.e7)([eE.ZP, eT.default], () => {
            var e, t;
            let i = eT.default.getCurrentUser();
            return null !== (t = null != n.guild_id && null != i ? (null === (e = eE.ZP.getMember(n.guild_id, i.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        { canAddNewReactions: N, canManageMessages: f } = (0, c.cj)(
            [em.Z],
            () => ({
                canAddNewReactions: I && em.Z.can(eY.Plq.ADD_REACTIONS, n),
                canManageMessages: em.Z.can(eY.Plq.MANAGE_MESSAGES, n)
            }),
            [I, n]
        ),
        C = (0, y.ux)(n.guild_id),
        [, p] = (0, B.AB)(n.guild_id),
        g = (0, ec.$R)(n),
        A = (l === i.author.id || f) && i.author.id !== eY.LAt && !1 !== s && !(0, ep.yE)(i.flags, eY.iLy.EPHEMERAL) && g && 1 === (0, eO.Z)(i),
        S = l === i.author.id && g && !r,
        R = i.author.id === l,
        x = i.isFirstMessageInForumPost(n),
        O = (0, ev.Z)({
            channel: n,
            canChat: I,
            renderReactions: _,
            canAddNewReactions: N,
            isLurking: m,
            isGuest: T,
            communicationDisabled: p,
            isActiveChannelOrUnarchivableThread: g,
            isAutomodQuarantined: C
        }),
        L = (0, K.A)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()),
        Z = (0, J.Z)(null == n ? void 0 : n.id),
        D = (0, ee.Z)(i),
        j = (0, M.V)(n.id, i.author.id),
        U = (0, v.r)(i.id),
        { hasInlineForwardButton: k } = (0, P.yk)({ location: 'MessageAccessories' }),
        G = (0, b.a)(i) && k;
    return (0, a.jsx)(e3, {
        canSuppressEmbeds: A,
        canDeleteAttachments: S,
        ...O,
        disableReactionReads: !!x || O.disableReactionReads,
        ...e,
        isLurking: m && I,
        isGuest: T && I,
        isPendingMember: h && I,
        isCurrentUser: R,
        inlineAttachmentMedia: o,
        inlineEmbedMedia: u,
        renderEmbeds: d,
        gifAutoPlay: E,
        canRenderReferralEmbed: n.isDM(),
        poll: D,
        showListsAndHeaders: L,
        showMaskedLinks: L,
        shouldHideMediaOptions: Z,
        shouldRedactExplicitContent: j,
        shouldRenderCtaButton: U,
        hasInlineForwardButton: G
    });
}
eJ(e3, 'defaultProps', {
    renderEmbeds: !0,
    compact: !1
});
let e4 = (e) => {
    var t;
    let { message: n, channel: i, disableReactionReads: s = !1, renderComponentAccessory: r = !1, renderThreadAccessory: l = !1, disableReactionCreates: o = !0, disableReactionUpdates: c = !0, isSearchResult: u = !1, ...d } = e,
        _ = ed.x4.useSetting(),
        E = ed.RS.useSetting(),
        I = ed.NA.useSetting(),
        m = ed.QK.useSetting(),
        T = (0, K.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        h = (0, J.Z)(null == i ? void 0 : i.id),
        N = (0, M.V)(i.id, n.author.id),
        f = (0, v.r)(n.id),
        C = (0, ee.Z)(n);
    return (0, a.jsx)(e3, {
        ...d,
        message: n,
        channel: i,
        disableReactionReads: s,
        disableReactionCreates: o,
        disableReactionUpdates: c,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderComponentAccessory: r,
        renderThreadAccessory: l,
        inlineAttachmentMedia: _,
        inlineEmbedMedia: E,
        renderEmbeds: I,
        gifAutoPlay: m,
        poll: C,
        showListsAndHeaders: T,
        showMaskedLinks: T,
        shouldHideMediaOptions: h,
        shouldRedactExplicitContent: N,
        shouldRenderCtaButton: f,
        hasInlineForwardButton: !1,
        isSearchResult: u
    });
};
