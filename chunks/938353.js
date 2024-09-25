n.d(t, {
    $p: function () {
        return e8;
    },
    BB: function () {
        return e6;
    },
    ZP: function () {
        return e7;
    }
});
var r,
    i = n(47120);
var a = n(789020);
var o = n(411104);
var s = n(390547);
var l = n(735250),
    u = n(470079),
    c = n(120356),
    d = n.n(c),
    _ = n(275726),
    E = n(442837),
    f = n(377108),
    h = n(902704),
    p = n(481060),
    m = n(904245),
    I = n(637374),
    T = n(626799),
    g = n(624367),
    S = n(433074),
    A = n(421474),
    v = n(603270),
    N = n(222709),
    O = n(446411),
    R = n(960904),
    C = n(161314),
    y = n(163268),
    b = n(25610),
    L = n(703751),
    D = n(761538),
    M = n(674611),
    P = n(346610),
    U = n(868643),
    w = n(394779),
    x = n(294734),
    G = n(426275),
    k = n(947849),
    B = n(715903),
    F = n(71619),
    Z = n(637618),
    V = n(225890),
    H = n(364097),
    Y = n(495129),
    j = n(939170),
    W = n(505104),
    K = n(954654),
    z = n(41776),
    q = n(628238),
    Q = n(454585),
    X = n(768494),
    $ = n(124347),
    J = n(976853),
    ee = n(346013),
    et = n(780088),
    en = n(977683),
    er = n(128435),
    ei = n(98278),
    ea = n(614825),
    eo = n(265299),
    es = n(699833),
    el = n(344997),
    eu = n(378233),
    ec = n(374425),
    ed = n(665906),
    e_ = n(432147),
    eE = n(695346),
    ef = n(314897),
    eh = n(271383),
    ep = n(607744),
    em = n(496675),
    eI = n(594174),
    eT = n(52824),
    eg = n(626135),
    eS = n(70956),
    eA = n(408433),
    ev = n(630388),
    eN = n(823379),
    eO = n(709054),
    eR = n(591759),
    eC = n(169525),
    ey = n(161010),
    eb = n(461157),
    eL = n(901461),
    eD = n(432376),
    eM = n(384203),
    eP = n(633957),
    eU = n(530472),
    ew = n(29909),
    ex = n(782658),
    eG = n(219797),
    ek = n(453687),
    eB = n(128854),
    eF = n(101578),
    eZ = n(524444),
    eV = n(319323),
    eH = n(884182),
    eY = n(546432),
    ej = n(920888),
    eW = n(817384),
    eK = n(981631),
    ez = n(474936),
    eq = n(689938),
    eQ = n(916315),
    eX = n(287847),
    e$ = n(680674);
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
function e0() {
    return (0, l.jsxs)('div', {
        className: eX.nitroFileSizeUpsell,
        children: [
            (0, l.jsx)('img', {
                src: e$,
                className: eX.nitroBadgeSvg,
                alt: ''
            }),
            (0, l.jsx)(p.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: eq.Z.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({ onClick: () => (0, ei.z)() })
            })
        ]
    });
}
let e1 = 15 * eS.Z.Millis.MINUTE,
    e2 = new Set(['discord-developers', 'discord-testers', 'discord-townhall', 'discordgameslab']),
    e3 = (e, t, n) => () => {
        let r = null != t ? t : n;
        if (null == r) return null;
        let { url: i, proxyURL: a, width: o, height: s } = r;
        return (0, l.jsx)(ew.Z, {
            width: o,
            height: s,
            src: null != a && '' !== a ? a : i,
            url: null != e && '' !== e ? e : null != a && '' !== a ? a : i,
            format: null != n ? f.EO.VIDEO : f.EO.IMAGE,
            className: eX.gifFavoriteButton
        });
    },
    e4 = (e) => () => {
        let { url: t, proxyUrl: n, width: r, height: i } = e;
        return null != r && null != i && $.W.test(n)
            ? (0, l.jsx)(ew.Z, {
                  width: r,
                  height: i,
                  src: n,
                  url: t,
                  format: f.EO.IMAGE,
                  className: eX.gifFavoriteButton
              })
            : null;
    };
function e5(e, t) {
    return (
        e === t ||
        (e.length === t.length &&
            !e.some((e, n) => {
                let { emoji: r, count: i, burst_count: a } = e,
                    { emoji: o, count: s, burst_count: l } = t[n];
                return a !== l || i !== s || r.id !== o.id || r.name !== o.name;
            }))
    );
}
class e6 extends (r = u.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e2.has(e));
    }
    shouldComponentUpdate(e, t) {
        let { channel: n, message: r, poll: i } = this.props,
            { channel: a, message: o, poll: s } = e;
        return !(0, h.Z)(this.state, t) || !(0, h.Z)(this.props, e, ['message', 'channel']) || n.type !== a.type || s !== i || o.codedLinks !== r.codedLinks || o.flags !== r.flags || o.giftCodes !== r.giftCodes || o.attachments !== r.attachments || o.embeds !== r.embeds || o.components !== r.components || o.activity !== r.activity || !e5(o.reactions, r.reactions);
    }
    renderCtaButton() {
        let { message: e, channel: t, shouldRenderCtaButton: n } = this.props;
        return n
            ? (0, l.jsx)('div', {
                  className: eX.ctaButtonContainer,
                  children: (0, l.jsx)(M.Z, {
                      messageId: e.id,
                      channelId: t.id
                  })
              })
            : null;
    }
    renderSocialProofingFileSizeNitroUpsell(e) {
        let t = e.attachments.some((e) => e.size > ez.Lw);
        return (0, ey.M)('attachment') && t ? (0, l.jsx)(e0, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: r } = t;
                  if (n === R.g.INVITE)
                      return this.shouldRenderInvite(r)
                          ? (0, l.jsx)(
                                ex.Z,
                                {
                                    code: r,
                                    author: e.author,
                                    getAcceptInviteContext: this.getAcceptInviteContext
                                },
                                r
                            )
                          : null;
                  if (n === R.g.TEMPLATE) return (0, l.jsx)(H.Z, { code: r }, r);
                  if (n === R.g.EVENT) return (0, l.jsx)(V.Z, { code: r }, r);
                  else if (n === R.g.CHANNEL_LINK)
                      return (0, l.jsx)(
                          eM.Z,
                          {
                              code: r,
                              messageData: e
                          },
                          r
                      );
                  else if (n === R.g.APP_DIRECTORY_PROFILE)
                      return (0, l.jsx)(
                          S.Z,
                          {
                              code: r,
                              message: e
                          },
                          r
                      );
                  else if (n === R.g.ACTIVITY_BOOKMARK)
                      return (0, l.jsx)(
                          g.Z,
                          {
                              applicationId: r,
                              message: e
                          },
                          r
                      );
                  else if (n === R.g.GUILD_PRODUCT) return (0, l.jsx)(Z.Z, { code: r }, r);
                  else if (n === R.g.SERVER_SHOP) return (0, l.jsx)(C.Z, { guildId: r }, r);
                  else if (n === R.g.QUESTS_EMBED) return (0, l.jsx)(eo.Z, { questId: r }, r);
                  else if (n === R.g.APP_DIRECTORY_STOREFRONT)
                      return (0, l.jsx)(
                          v.P,
                          {
                              appId: r,
                              message: e
                          },
                          r
                      );
                  else if (n === R.g.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, A.Q)(r);
                      return null == t
                          ? null
                          : (0, l.jsx)(
                                v.F,
                                {
                                    skuId: t.skuId,
                                    message: e
                                },
                                r
                            );
                  } else throw Error('Unknown coded link type: '.concat(n));
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: r, type: i, content: a, giftInfo: o } = e,
            s = eI.default.getCurrentUser();
        return null != s && t.length > 0
            ? t.map((e) =>
                  (0, l.jsx)(
                      'div',
                      {
                          className: eX.giftCodeContainer,
                          children: (0, l.jsx)(I.Z, {
                              code: e,
                              author: n,
                              channelId: r,
                              currentUser: s,
                              type: i,
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
            { canRenderReferralEmbed: r } = this.props;
        return n !== _.u.PREMIUM_REFERRAL || null == t
            ? null
            : (0, l.jsx)(
                  'div',
                  {
                      className: eX.referralContainer,
                      children: (0, l.jsx)(ea.Z, {
                          userTrialOfferId: t,
                          canRenderReferralEmbed: null != r && r
                      })
                  },
                  t
              );
    }
    renderReactions(e) {
        let { disableReactionCreates: t, disableReactionReads: n, disableReactionUpdates: r, isLurking: i, isGuest: a, isPendingMember: o, channel: s, forceAddReactions: u } = this.props;
        return n
            ? null
            : (0, l.jsx)(ej.Z, {
                  message: e,
                  channel: s,
                  disableReactionCreates: t,
                  disableReactionUpdates: r,
                  isLurking: i,
                  isGuest: a,
                  isPendingMember: o,
                  forceAddReactions: u,
                  useChatFontScaling: !0
              });
    }
    renderAttachments(e) {
        let { attachments: t, flags: n } = e,
            { channel: r, shouldRedactExplicitContent: i, hasInlineForwardButton: a } = this.props;
        if (0 === t.length || e.isPoll() || e.isUIKitComponents()) return null;
        let o = t.filter((e) => null == e.flags || !(0, ev.yE)(e.flags, eK.J0y.IS_THUMBNAIL));
        if (0 === o.length) return null;
        let { gifAutoPlay: s, canDeleteAttachments: u, inlineAttachmentMedia: c, onMediaItemContextMenu: d, shouldHideMediaOptions: _ } = this.props,
            E = o
                .map((t) =>
                    (0, et.j9)(
                        t,
                        (0, w.s)(e, {
                            type: 'attachment',
                            attachmentId: t.id
                        }),
                        _,
                        i
                    )
                )
                .filter(eN.lm),
            f = {
                source: 'Media Mosaic',
                guild_id: r.guild_id,
                channel_id: r.id,
                channel_type: r.type
            },
            h = E.length > 1 ? (0, et.Cx)(E, f) : {},
            p = (0, ev.yE)(n, eK.iLy.IS_VOICE_MESSAGE);
        function m(e, t) {
            return (0, eC.dn)(e.originalItem, t);
        }
        let I = o.map((t) => {
                let n = (e, n, i) => {
                        eg.default.track(eK.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: r.guild_id,
                            channel_id: r.id,
                            channel_type: r.type,
                            type: t.content_type,
                            flags: t.flags,
                            size: t.size,
                            duration: i
                        });
                    },
                    i = (0, X.VY)(t),
                    a = {
                        message: e,
                        item: (0, eY.O)(t, c),
                        autoPlayGif: s,
                        canRemoveItem: u && (o.length > 1 || '' !== e.content),
                        onRemoveItem: this.handleRemoveAttachment,
                        className: eX.embedWrapper,
                        getObscureReason: m,
                        onContextMenu:
                            null != d
                                ? (e) => {
                                      e.stopPropagation(), e.preventDefault(), d(e, i);
                                  }
                                : void 0,
                        renderAudioComponent: p ? eG.jY : eG.q7,
                        renderImageComponent: eG.dS,
                        renderVideoComponent: eG.vZ,
                        renderPlaintextFilePreview: eG.d4,
                        renderGenericFileComponent: eG.ZK,
                        renderMosaicItemFooter: eG.L9,
                        onPlay: n,
                        gifFavoriteButton: e4(i),
                        isSearchResult: this.props.isSearchResult
                    },
                    l = (0, eT.q)({
                        proxyURL: t.proxy_url,
                        url: t.url
                    });
                return l in h && (a.onClick = h[l]), a;
            }),
            T = a
                ? (0, l.jsx)(G.Z, {
                      className: eQ.hideIfMessageNotFocused,
                      messageId: e.id,
                      channelId: r.id,
                      targetKind: 'media'
                  })
                : void 0;
        return (0, l.jsx)(eH.Z, {
            items: I,
            inlineForwardButton: T
        });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t } = this.props;
        return 0 !== e.embeds.length && t
            ? e.embeds.map((t, n) => {
                  if (eW.b.has(t.type) || (0, eA.l3)(t) || ((0, j.b)(t) && !(0, W.M)(e))) return null;
                  let r = {
                      renderImageComponent: eZ.Yi,
                      renderVideoComponent: eZ.lV,
                      renderLinkComponent: eZ.iT,
                      renderForwardComponent: (0, w.s)(e, {
                          type: 'embed',
                          embedIndex: n
                      })
                  };
                  if (t.type === eK.hBH.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && 'Discord' === t.provider.name) {
                      let i = eR.Z.safeParseWithQuery(t.url);
                      if (null != i && null != i.pathname) {
                          let a = i.pathname.split('/')[3];
                          if (null != a)
                              return (0, l.jsx)(
                                  T.Z,
                                  {
                                      skuId: a,
                                      renderFallback: () => this.renderEmbed(t, n, r, e.id, e.channel_id)
                                  },
                                  t.id
                              );
                      }
                  }
                  return this.renderEmbed(t, n, r, e.id, e.channel_id);
              })
            : null;
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length || !1 === this.props.renderComponentAccessory) return null;
        let { gifAutoPlay: t, shouldRedactExplicitContent: n, shouldHideMediaOptions: r, onMediaItemContextMenu: i } = this.props;
        return (0, l.jsx)(eB.F, {
            gifAutoPlay: t,
            getGifFavButton: e4,
            getOnMediaItemContextMenu:
                null == i
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), null == i || i(t, e);
                      },
            shouldHideMediaOptions: r,
            shouldRedactExplicitContent: n,
            children: (0, l.jsx)(K.ZP, { message: e })
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, l.jsx)(eF.Z, {
            channel: t,
            message: e,
            hideParty: !1
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eK.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, l.jsx)(N.Z, {
                  channelId: e.channel_id,
                  messageId: e.id
              });
    }
    renderEphemeralAccessories(e) {
        return (0, ev.yE)(e.flags, eK.iLy.EPHEMERAL)
            ? (0, l.jsx)(eU.Z, {
                  message: e,
                  onDeleteMessage: () => {
                      m.Z.dismissAutomatedMessage(e);
                  }
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, eu.cv)(e),
            { channel: n, isInteracting: r } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) =>
                  (0, l.jsx)(
                      ec.Z,
                      {
                          channel: n,
                          isInteracting: r,
                          renderableSticker: e
                      },
                      e.id
                  )
              );
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(eK.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, l.jsx)(e_.Z, {
                message: e,
                compact: this.props.compact
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (!!e.hasFlag(eK.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
            if (!(Date.now() - eO.default.extractTimestamp(e.id) >= e1))
                return (0, l.jsx)('div', {
                    className: eX.threadRoleMentionFailure,
                    children: eq.Z.Messages.THREAD_ROLE_MENTION_FAILURE
                });
        }
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, l.jsxs)(p.DeclarativeConfirmModal, {
            dismissable: !0,
            header: eq.Z.Messages.SUPPRESS_EMBED_TITLE,
            confirmText: eq.Z.Messages.SUPPRESS_EMBED_CONFIRM,
            cancelText: eq.Z.Messages.CANCEL,
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                m.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, l.jsx)(p.Text, {
                    variant: 'text-md/normal',
                    color: 'text-normal',
                    className: eX.confirmText,
                    children: eq.Z.Messages.SUPPRESS_EMBED_BODY
                }),
                (0, l.jsx)(p.Text, {
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: eq.Z.Messages.SUPPRESS_EMBED_TIP
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
        return (0, l.jsx)(p.DeclarativeConfirmModal, {
            dismissable: !0,
            header: eq.Z.Messages.REMOVE_ATTACHMENT_TITLE,
            confirmText: eq.Z.Messages.REMOVE_ATTACHMENT_CONFIRM,
            cancelText: eq.Z.Messages.CANCEL,
            onCancel: () =>
                this.setState({
                    showRemoveAttachmentModal: !1,
                    attachmentToDelete: null
                }),
            onConfirm: () => {
                let r = t.attachments.filter((e) => e.id !== n.id);
                m.Z.patchMessageAttachments(e.id, t.id, r),
                    this.setState({
                        showRemoveAttachmentModal: !1,
                        attachmentToDelete: null
                    });
            },
            children: (0, l.jsx)(p.Text, {
                variant: 'text-md/normal',
                color: 'text-normal',
                className: eX.confirmText,
                children: eq.Z.Messages.REMOVE_ATTACHMENT_BODY
            })
        });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== _.u.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, l.jsx)(eV.Z, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, l.jsx)(eP.Z, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eK.hBH.POST_PREVIEW || null == t.url
                ? []
                : (0, l.jsx)(
                      ee.Z,
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
        return 1 === e.embeds.length && e.embeds[0].type === eK.hBH.SAFETY_POLICY_NOTICE ? (0, l.jsx)(es.i, { message: e }) : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eK.hBH.SAFETY_SYSTEM_NOTIFICATION ? (0, l.jsx)(el.g, { embed: e.embeds[0] }) : null;
    }
    renderVoiceChannelInvite(e, t) {
        if (1 === e.embeds.length && e.embeds[0].type === eK.hBH.VOICE_CHANNEL)
            return (0, l.jsx)(Y.H, {
                message: e,
                channel: t
            });
    }
    renderMediaObscureNotice(e) {
        if (0 === e.attachments.length && 0 === e.embeds.length) return null;
        let { obscuredAttachments: t, obscuredEmbeds: n } = (0, y.Tw)(e);
        return 0 === t.length && 0 === n.length ? null : (0, l.jsx)(D.Z, { message: e });
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, l.jsx)(er.Z, {
                message: e,
                poll: t,
                className: eX.pollContainer
            });
    }
    renderForwardedMessage(e) {
        return 0 === e.messageSnapshots.length ? null : (0, l.jsx)(x.Z, { message: e });
    }
    render() {
        let { className: e, message: t, channel: n, poll: r } = this.props,
            { showSuppressModal: i, showRemoveAttachmentModal: a } = this.state,
            o = this.renderCodedLinks(t),
            s = this.renderGiftCodes(t),
            u = this.renderReferralTrial(t),
            c = this.renderAttachments(t),
            _ = this.renderCtaButton(),
            E = this.renderSocialProofingFileSizeNitroUpsell(t),
            f = this.renderEmbeds(t),
            h = this.renderActivityInvite(t),
            p = this.renderReactions(t),
            m = this.renderPublishBump(t),
            I = this.renderEphemeralAccessories(t),
            T = this.renderStickersAccessories(t),
            g = this.renderThreadAccessories(t),
            S = this.renderComponentAccessories(t),
            A = this.renderThreadRoleMentionWarning(t),
            v = this.renderEmbeddedApplicationInstanceEmbed(t),
            N = this.renderInteractionPremiumUpsell(t),
            O = this.renderMediaPostEmbeds(t),
            R = this.renderSafetyPolicyNotice(t),
            C = this.renderSafetySystemNotification(t),
            y = this.renderVoiceChannelInvite(t, n),
            b = this.renderMediaObscureNotice(t),
            L = this.renderPoll(t, r),
            D = this.renderForwardedMessage(t);
        return null == o && null == c && null == f && null == h && null == p && null == s && null == u && null == m && null == I && null == T && null == g && null == S && null == v && null == A && null == O && null == R && null != N && null == L && null == y && null == D
            ? null
            : (0, l.jsxs)('div', {
                  id: (0, ek.bX)(t),
                  className: d()(e, eX.container),
                  children: [D, A, L, o, s, u, O, c, _, f, b, h, T, S, v, N, E, p, m, I, i && this.renderSuppressConfirmModal(), a && this.renderRemoveAttachmentConfirmModal(), g, R, C, y]
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
            eJ(this, 'renderEmbed', (e, t, n, r, i) => {
                let { gifAutoPlay: a, inlineEmbedMedia: o, canSuppressEmbeds: s, hasSpoilerEmbeds: u, shouldRedactExplicitContent: c, hasInlineForwardButton: d, isSearchResult: _ } = this.props,
                    E = (0, eC.BP)(e, i, r, u, c);
                if (e.type === eK.hBH.GIFT) return null;
                let f = (0, l.jsx)(
                    k.h.Provider,
                    {
                        value: e3(e.url, e.image, e.video),
                        children: (0, l.jsx)(O.ZP, {
                            className: eX.embedWrapper,
                            embed: e,
                            obscureReason: null != E ? E : void 0,
                            autoPlayGif: a,
                            hideMedia: !o,
                            onSuppressEmbed: s ? this.handleEmbedSuppressed : void 0,
                            renderTitle: this.renderEmbedTitle,
                            renderDescription: this.renderEmbedDescription,
                            messageId: r,
                            channelId: i,
                            showImageRecs: !1,
                            isSearchResult: _,
                            ...n
                        })
                    },
                    e.id
                );
                return d
                    ? (0, l.jsxs)('div', {
                          className: eX.embedContainer,
                          children: [
                              f,
                              (0, l.jsx)(G.Z, {
                                  className: eQ.hideIfMessageNotFocused,
                                  messageId: r,
                                  channelId: i,
                                  targetKind: 'embed',
                                  embedIndex: t
                              })
                          ]
                      })
                    : f;
            }),
            eJ(this, 'renderEmbedTitle', (e, t) => (e.type === eK.hBH.RICH ? Q.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t)),
            eJ(this, 'renderEmbedDescription', (e, t, n) =>
                e.type === eK.hBH.RICH
                    ? Q.Z.parse(t, !0, {
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
                e.shiftKey ? m.Z.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
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
function e7(e) {
    var t;
    let { channel: n, message: r, renderSuppressEmbeds: i, isMessageSnapshot: a } = e,
        o = (0, E.e7)([ef.default], () => ef.default.getId()),
        s = eE.x4.useSetting(),
        u = eE.RS.useSetting(),
        c = eE.NA.useSetting() && !(0, eL.Z)(e.message),
        d = eE.nc.useSetting(),
        _ = eE.QK.useSetting(),
        f = (0, E.e7)([ep.Z], () => null == n.guild_id || ep.Z.canChatInGuild(n.guild_id), [n]),
        h = (0, E.e7)([z.Z], () => null != n.guild_id && z.Z.isLurking(n.guild_id), [n]),
        p = (0, E.e7)([eh.ZP], () => eh.ZP.isCurrentUserGuest(n.guild_id), [n]),
        m = (0, E.e7)([eh.ZP, eI.default], () => {
            var e, t;
            let r = eI.default.getCurrentUser();
            return null !== (t = null != n.guild_id && null != r ? (null === (e = eh.ZP.getMember(n.guild_id, r.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        { canAddNewReactions: I, canManageMessages: T } = (0, E.cj)(
            [em.Z],
            () => ({
                canAddNewReactions: f && em.Z.can(eK.Plq.ADD_REACTIONS, n),
                canManageMessages: em.Z.can(eK.Plq.MANAGE_MESSAGES, n)
            }),
            [f, n]
        ),
        g = (0, B.ux)(n.guild_id),
        [, S] = (0, F.AB)(n.guild_id),
        A = (0, ed.$R)(n),
        v = (o === r.author.id || T) && r.author.id !== eK.LAt && !1 !== i && !(0, ev.yE)(r.flags, eK.iLy.EPHEMERAL) && A && 1 === (0, eb.Z)(r),
        N = o === r.author.id && A && !a,
        O = r.author.id === o,
        R = r.isFirstMessageInForumPost(n),
        C = (0, eD.Z)({
            channel: n,
            canChat: f,
            renderReactions: d,
            canAddNewReactions: I,
            isLurking: h,
            isGuest: p,
            communicationDisabled: S,
            isActiveChannelOrUnarchivableThread: A,
            isAutomodQuarantined: g
        }),
        y = (0, q.A)((null !== (t = r.editedTimestamp) && void 0 !== t ? t : r.timestamp).valueOf()),
        D = (0, J.Z)(null == n ? void 0 : n.id),
        M = (0, en.Z)(r),
        w = (0, b.V)(n.id, r.author.id),
        x = (0, L.r)(r.id),
        { hasInlineForwardButton: G } = (0, P.yk)({ location: 'MessageAccessories' }),
        k = (0, U.a)(r) && G;
    return (0, l.jsx)(e6, {
        canSuppressEmbeds: v,
        canDeleteAttachments: N,
        ...C,
        disableReactionReads: !!R || C.disableReactionReads,
        ...e,
        isLurking: h && f,
        isGuest: p && f,
        isPendingMember: m && f,
        isCurrentUser: O,
        inlineAttachmentMedia: s,
        inlineEmbedMedia: u,
        renderEmbeds: c,
        gifAutoPlay: _,
        canRenderReferralEmbed: n.isDM(),
        poll: M,
        showListsAndHeaders: y,
        showMaskedLinks: y,
        shouldHideMediaOptions: D,
        shouldRedactExplicitContent: w,
        shouldRenderCtaButton: x,
        hasInlineForwardButton: k
    });
}
eJ(e6, 'defaultProps', {
    renderEmbeds: !0,
    compact: !1
});
let e8 = (e) => {
    var t;
    let { message: n, channel: r, disableReactionReads: i = !1, renderComponentAccessory: a = !1, renderThreadAccessory: o = !1, disableReactionCreates: s = !0, disableReactionUpdates: u = !0, isSearchResult: c = !1, ...d } = e,
        _ = eE.x4.useSetting(),
        E = eE.RS.useSetting(),
        f = eE.NA.useSetting(),
        h = eE.QK.useSetting(),
        p = (0, q.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        m = (0, J.Z)(null == r ? void 0 : r.id),
        I = (0, b.V)(r.id, n.author.id),
        T = (0, L.r)(n.id),
        g = (0, en.Z)(n);
    return (0, l.jsx)(e6, {
        ...d,
        message: n,
        channel: r,
        disableReactionReads: i,
        disableReactionCreates: s,
        disableReactionUpdates: u,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderComponentAccessory: a,
        renderThreadAccessory: o,
        inlineAttachmentMedia: _,
        inlineEmbedMedia: E,
        renderEmbeds: f,
        gifAutoPlay: h,
        poll: g,
        showListsAndHeaders: p,
        showMaskedLinks: p,
        shouldHideMediaOptions: m,
        shouldRedactExplicitContent: I,
        shouldRenderCtaButton: T,
        hasInlineForwardButton: !1,
        isSearchResult: c
    });
};
