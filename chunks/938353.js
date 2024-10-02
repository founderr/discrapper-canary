n.d(t, {
    $p: function () {
        return te;
    },
    BB: function () {
        return e8;
    },
    ZP: function () {
        return e9;
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
    N = n(162297),
    O = n(222709),
    R = n(446411),
    C = n(960904),
    y = n(161314),
    L = n(163268),
    b = n(25610),
    D = n(703751),
    M = n(761538),
    P = n(674611),
    U = n(346610),
    w = n(868643),
    x = n(394779),
    G = n(294734),
    k = n(426275),
    B = n(947849),
    F = n(715903),
    Z = n(71619),
    V = n(637618),
    H = n(225890),
    Y = n(364097),
    j = n(495129),
    W = n(939170),
    K = n(505104),
    z = n(954654),
    q = n(41776),
    Q = n(628238),
    X = n(454585),
    $ = n(768494),
    J = n(124347),
    ee = n(976853),
    et = n(346013),
    en = n(780088),
    er = n(977683),
    ei = n(128435),
    ea = n(98278),
    eo = n(614825),
    es = n(265299),
    el = n(699833),
    eu = n(344997),
    ec = n(378233),
    ed = n(374425),
    e_ = n(665906),
    eE = n(432147),
    ef = n(695346),
    eh = n(314897),
    ep = n(271383),
    em = n(607744),
    eI = n(496675),
    eT = n(594174),
    eg = n(52824),
    eS = n(626135),
    eA = n(70956),
    ev = n(408433),
    eN = n(630388),
    eO = n(823379),
    eR = n(709054),
    eC = n(591759),
    ey = n(169525),
    eL = n(786761),
    eb = n(161010),
    eD = n(461157),
    eM = n(901461),
    eP = n(432376),
    eU = n(384203),
    ew = n(633957),
    ex = n(530472),
    eG = n(29909),
    ek = n(782658),
    eB = n(219797),
    eF = n(453687),
    eZ = n(128854),
    eV = n(101578),
    eH = n(524444),
    eY = n(319323),
    ej = n(884182),
    eW = n(546432),
    eK = n(920888),
    ez = n(817384),
    eq = n(981631),
    eQ = n(474936),
    eX = n(689938),
    e$ = n(916315),
    eJ = n(287847),
    e0 = n(680674);
function e1(e, t, n) {
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
function e2() {
    return (0, l.jsxs)('div', {
        className: eJ.nitroFileSizeUpsell,
        children: [
            (0, l.jsx)('img', {
                src: e0,
                className: eJ.nitroBadgeSvg,
                alt: ''
            }),
            (0, l.jsx)(p.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: eX.Z.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({ onClick: () => (0, ea.z)() })
            })
        ]
    });
}
let e3 = 15 * eA.Z.Millis.MINUTE,
    e4 = new Set(['discord-developers', 'discord-testers', 'discord-townhall', 'discordgameslab']),
    e5 = (e, t, n) => () => {
        let r = null != t ? t : n;
        if (null == r) return null;
        let { url: i, proxyURL: a, width: o, height: s } = r;
        return (0, l.jsx)(eG.Z, {
            width: o,
            height: s,
            src: null != a && '' !== a ? a : i,
            url: null != e && '' !== e ? e : null != a && '' !== a ? a : i,
            format: null != n ? f.EO.VIDEO : f.EO.IMAGE,
            className: eJ.gifFavoriteButton
        });
    },
    e6 = (e) => () => {
        let { url: t, proxyUrl: n, width: r, height: i } = e;
        return null != r && null != i && J.uo.test(n)
            ? (0, l.jsx)(eG.Z, {
                  width: r,
                  height: i,
                  src: n,
                  url: t,
                  format: f.EO.IMAGE,
                  className: eJ.gifFavoriteButton
              })
            : null;
    };
function e7(e, t) {
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
class e8 extends (r = u.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e4.has(e));
    }
    shouldComponentUpdate(e, t) {
        let { channel: n, message: r, poll: i } = this.props,
            { channel: a, message: o, poll: s } = e;
        return !(0, h.Z)(this.state, t) || !(0, h.Z)(this.props, e, ['message', 'channel']) || n.type !== a.type || s !== i || o.codedLinks !== r.codedLinks || o.flags !== r.flags || o.giftCodes !== r.giftCodes || o.attachments !== r.attachments || o.embeds !== r.embeds || o.components !== r.components || o.activity !== r.activity || !e7(o.reactions, r.reactions);
    }
    renderCtaButton() {
        let { message: e, channel: t, shouldRenderCtaButton: n } = this.props;
        return n
            ? (0, l.jsx)('div', {
                  className: eJ.ctaButtonContainer,
                  children: (0, l.jsx)(P.Z, {
                      messageId: e.id,
                      channelId: t.id
                  })
              })
            : null;
    }
    renderSocialProofingFileSizeNitroUpsell(e) {
        let t = e.attachments.some((e) => e.size > eQ.Lw);
        return (0, eb.M)('attachment') && t ? (0, l.jsx)(e2, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: r } = t;
                  if (n === C.g.INVITE)
                      return this.shouldRenderInvite(r)
                          ? (0, l.jsx)(
                                ek.Z,
                                {
                                    code: r,
                                    author: e.author,
                                    getAcceptInviteContext: this.getAcceptInviteContext
                                },
                                r
                            )
                          : null;
                  if (n === C.g.TEMPLATE) return (0, l.jsx)(Y.Z, { code: r }, r);
                  if (n === C.g.EVENT) return (0, l.jsx)(H.Z, { code: r }, r);
                  else if (n === C.g.CHANNEL_LINK)
                      return (0, l.jsx)(
                          eU.Z,
                          {
                              code: r,
                              messageData: e
                          },
                          r
                      );
                  else if (n === C.g.APP_DIRECTORY_PROFILE)
                      return (0, l.jsx)(
                          S.Z,
                          {
                              code: r,
                              message: e
                          },
                          r
                      );
                  else if (n === C.g.ACTIVITY_BOOKMARK)
                      return (0, l.jsx)(
                          g.Z,
                          {
                              applicationId: r,
                              message: e
                          },
                          r
                      );
                  else if (n === C.g.GUILD_PRODUCT) return (0, l.jsx)(V.Z, { code: r }, r);
                  else if (n === C.g.SERVER_SHOP) return (0, l.jsx)(y.Z, { guildId: r }, r);
                  else if (n === C.g.QUESTS_EMBED) return (0, l.jsx)(es.Z, { questId: r }, r);
                  else if (n === C.g.APP_DIRECTORY_STOREFRONT)
                      return (0, l.jsx)(
                          v.P,
                          {
                              appId: r,
                              message: e
                          },
                          r
                      );
                  else if (n === C.g.APP_DIRECTORY_STOREFRONT_SKU) {
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
                  } else if (n === C.g.DISCOVERY_GAME) return null;
                  else if (n === C.g.APP_OAUTH2_LINK) return (0, l.jsx)(N.Z, { applicationId: r }, r);
                  else throw Error('Unknown coded link type: '.concat(n));
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: r, type: i, content: a, giftInfo: o } = e,
            s = eT.default.getCurrentUser();
        return null != s && t.length > 0
            ? t.map((e) =>
                  (0, l.jsx)(
                      'div',
                      {
                          className: eJ.giftCodeContainer,
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
                      className: eJ.referralContainer,
                      children: (0, l.jsx)(eo.Z, {
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
            : (0, l.jsx)(eK.Z, {
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
        let o = t.filter((e) => null == e.flags || !(0, eN.yE)(e.flags, eq.J0y.IS_THUMBNAIL));
        if (0 === o.length) return null;
        let { gifAutoPlay: s, canDeleteAttachments: u, inlineAttachmentMedia: c, onMediaItemContextMenu: d, shouldHideMediaOptions: _ } = this.props,
            E = o
                .map((t) =>
                    (0, en.j9)(
                        t,
                        (0, x.s)(e, {
                            type: 'attachment',
                            attachmentId: t.id
                        }),
                        _,
                        i
                    )
                )
                .filter(eO.lm),
            f = {
                source: 'Media Mosaic',
                guild_id: r.guild_id,
                channel_id: r.id,
                channel_type: r.type
            },
            h = E.length > 1 ? (0, en.Cx)(E, f) : {},
            p = (0, eN.yE)(n, eq.iLy.IS_VOICE_MESSAGE);
        function m(e, t) {
            return (0, ey.dn)(e.originalItem, t);
        }
        let I = o.map((t) => {
                let n = (e, n, i) => {
                        eS.default.track(eq.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: r.guild_id,
                            channel_id: r.id,
                            channel_type: r.type,
                            type: t.content_type,
                            flags: t.flags,
                            size: t.size,
                            duration: i
                        });
                    },
                    i = (0, $.VY)(t),
                    a = {
                        message: e,
                        item: (0, eW.O)(t, c),
                        autoPlayGif: s,
                        canRemoveItem: u && (o.length > 1 || '' !== e.content),
                        onRemoveItem: this.handleRemoveAttachment,
                        className: eJ.embedWrapper,
                        getObscureReason: m,
                        onContextMenu:
                            null != d
                                ? (e) => {
                                      e.stopPropagation(), e.preventDefault(), d(e, i);
                                  }
                                : void 0,
                        renderAudioComponent: p ? eB.jY : eB.q7,
                        renderImageComponent: eB.dS,
                        renderVideoComponent: eB.vZ,
                        renderPlaintextFilePreview: eB.d4,
                        renderGenericFileComponent: eB.ZK,
                        renderMosaicItemFooter: eB.L9,
                        onPlay: n,
                        gifFavoriteButton: e6(i),
                        isSearchResult: this.props.isSearchResult
                    },
                    l = (0, eg.q)({
                        proxyURL: t.proxy_url,
                        url: t.url
                    });
                return l in h && (a.onClick = h[l]), a;
            }),
            T = a
                ? (0, l.jsx)(k.Z, {
                      className: e$.hideIfMessageNotFocused,
                      messageId: e.id,
                      channelId: r.id,
                      targetKind: 'media'
                  })
                : void 0;
        return (0, l.jsx)(ej.Z, {
            items: I,
            inlineForwardButton: T
        });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t } = this.props;
        return 0 !== e.embeds.length && t
            ? e.embeds.map((t, n) => {
                  if (ez.b.has(t.type) || (0, ev.l3)(t) || ((0, W.b)(t) && !(0, K.M)(e))) return null;
                  let r = {
                      renderImageComponent: eH.Yi,
                      renderVideoComponent: eH.lV,
                      renderLinkComponent: eH.iT,
                      renderForwardComponent: (0, x.s)(e, {
                          type: 'embed',
                          embedIndex: n
                      })
                  };
                  if (t.type === eq.hBH.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && 'Discord' === t.provider.name) {
                      let i = eC.Z.safeParseWithQuery(t.url);
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
        return (0, l.jsx)(eZ.F, {
            gifAutoPlay: t,
            getGifFavButton: e6,
            getOnMediaItemContextMenu:
                null == i
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), null == i || i(t, e);
                      },
            shouldHideMediaOptions: r,
            shouldRedactExplicitContent: n,
            children: (0, l.jsx)(z.ZP, { message: e })
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, l.jsx)(eV.Z, {
            channel: t,
            message: e,
            hideParty: !1
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eq.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, l.jsx)(O.Z, {
                  channelId: e.channel_id,
                  messageId: e.id
              });
    }
    renderEphemeralAccessories(e) {
        return (0, eL.Pv)(e)
            ? (0, l.jsx)(ex.Z, {
                  message: e,
                  onDeleteMessage: () => {
                      m.Z.dismissAutomatedMessage(e);
                  }
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, ec.cv)(e),
            { channel: n, isInteracting: r } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) =>
                  (0, l.jsx)(
                      ed.Z,
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
        if (e.hasFlag(eq.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, l.jsx)(eE.Z, {
                message: e,
                compact: this.props.compact
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (!!e.hasFlag(eq.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
            if (!(Date.now() - eR.default.extractTimestamp(e.id) >= e3))
                return (0, l.jsx)('div', {
                    className: eJ.threadRoleMentionFailure,
                    children: eX.Z.Messages.THREAD_ROLE_MENTION_FAILURE
                });
        }
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, l.jsxs)(p.DeclarativeConfirmModal, {
            dismissable: !0,
            header: eX.Z.Messages.SUPPRESS_EMBED_TITLE,
            confirmText: eX.Z.Messages.SUPPRESS_EMBED_CONFIRM,
            cancelText: eX.Z.Messages.CANCEL,
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                m.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, l.jsx)(p.Text, {
                    variant: 'text-md/normal',
                    color: 'text-normal',
                    className: eJ.confirmText,
                    children: eX.Z.Messages.SUPPRESS_EMBED_BODY
                }),
                (0, l.jsx)(p.Text, {
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: eX.Z.Messages.SUPPRESS_EMBED_TIP
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
            header: eX.Z.Messages.REMOVE_ATTACHMENT_TITLE,
            confirmText: eX.Z.Messages.REMOVE_ATTACHMENT_CONFIRM,
            cancelText: eX.Z.Messages.CANCEL,
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
                className: eJ.confirmText,
                children: eX.Z.Messages.REMOVE_ATTACHMENT_BODY
            })
        });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== _.u.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, l.jsx)(eY.Z, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, l.jsx)(ew.Z, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eq.hBH.POST_PREVIEW || null == t.url
                ? []
                : (0, l.jsx)(
                      et.Z,
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
        return 1 === e.embeds.length && e.embeds[0].type === eq.hBH.SAFETY_POLICY_NOTICE ? (0, l.jsx)(el.i, { message: e }) : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eq.hBH.SAFETY_SYSTEM_NOTIFICATION ? (0, l.jsx)(eu.g, { embed: e.embeds[0] }) : null;
    }
    renderVoiceChannelInvite(e, t) {
        if (1 === e.embeds.length && e.embeds[0].type === eq.hBH.VOICE_CHANNEL)
            return (0, l.jsx)(j.H, {
                message: e,
                channel: t
            });
    }
    renderMediaObscureNotice(e) {
        if (0 === e.attachments.length && 0 === e.embeds.length) return null;
        let { obscuredAttachments: t, obscuredEmbeds: n } = (0, L.Tw)(e);
        return 0 === t.length && 0 === n.length ? null : (0, l.jsx)(M.Z, { message: e });
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, l.jsx)(ei.Z, {
                message: e,
                poll: t,
                className: eJ.pollContainer
            });
    }
    renderForwardedMessage(e) {
        return 0 === e.messageSnapshots.length ? null : (0, l.jsx)(G.Z, { message: e });
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
            L = this.renderMediaObscureNotice(t),
            b = this.renderPoll(t, r),
            D = this.renderForwardedMessage(t);
        return null == o && null == c && null == f && null == h && null == p && null == s && null == u && null == m && null == I && null == T && null == g && null == S && null == v && null == A && null == O && null == R && null != N && null == b && null == y && null == D
            ? null
            : (0, l.jsxs)('div', {
                  id: (0, eF.bX)(t),
                  className: d()(e, eJ.container),
                  children: [D, A, b, o, s, u, O, c, _, f, L, h, T, S, v, N, E, p, m, I, i && this.renderSuppressConfirmModal(), a && this.renderRemoveAttachmentConfirmModal(), g, R, C, y]
              });
    }
    constructor(...e) {
        super(...e),
            e1(this, 'state', {
                showSuppressModal: !1,
                showRemoveAttachmentModal: !1,
                attachmentToDelete: null
            }),
            e1(this, 'getAcceptInviteContext', (e) => {
                let { channel: t, message: n } = this.props;
                return {
                    location: e,
                    location_guild_id: t.getGuildId(),
                    location_channel_id: t.id,
                    location_channel_type: t.type,
                    location_message_id: n.id
                };
            }),
            e1(this, 'renderEmbed', (e, t, n, r, i) => {
                let { gifAutoPlay: a, inlineEmbedMedia: o, canSuppressEmbeds: s, hasSpoilerEmbeds: u, shouldRedactExplicitContent: c, hasInlineForwardButton: d, isSearchResult: _ } = this.props,
                    E = (0, ey.BP)(e, i, r, u, c);
                if (e.type === eq.hBH.GIFT) return null;
                let f = (0, l.jsx)(
                    B.h.Provider,
                    {
                        value: e5(e.url, e.image, e.video),
                        children: (0, l.jsx)(R.ZP, {
                            className: eJ.embedWrapper,
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
                          className: eJ.embedContainer,
                          children: [
                              f,
                              (0, l.jsx)(k.Z, {
                                  className: e$.hideIfMessageNotFocused,
                                  messageId: r,
                                  channelId: i,
                                  targetKind: 'embed',
                                  embedIndex: t
                              })
                          ]
                      })
                    : f;
            }),
            e1(this, 'renderEmbedTitle', (e, t) => (e.type === eq.hBH.RICH ? X.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t)),
            e1(this, 'renderEmbedDescription', (e, t, n) =>
                e.type === eq.hBH.RICH
                    ? X.Z.parse(t, !0, {
                          channelId: this.props.channel.id,
                          allowLinks: !0,
                          allowEmojiLinks: !0,
                          allowList: this.props.showListsAndHeaders,
                          allowHeading: !n && this.props.showListsAndHeaders,
                          previewLinkTarget: this.props.showMaskedLinks
                      })
                    : t
            ),
            e1(this, 'handleEmbedSuppressed', (e) => {
                let { channel: t, message: n } = this.props;
                e.shiftKey ? m.Z.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
            }),
            e1(this, 'handleRemoveAttachment', (e) => {
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
    let { channel: n, message: r, renderSuppressEmbeds: i, isMessageSnapshot: a } = e,
        o = (0, E.e7)([eh.default], () => eh.default.getId()),
        s = ef.x4.useSetting(),
        u = ef.RS.useSetting(),
        c = ef.NA.useSetting() && !(0, eM.Z)(e.message),
        d = ef.nc.useSetting(),
        _ = ef.QK.useSetting(),
        f = (0, E.e7)([em.Z], () => null == n.guild_id || em.Z.canChatInGuild(n.guild_id), [n]),
        h = (0, E.e7)([q.Z], () => null != n.guild_id && q.Z.isLurking(n.guild_id), [n]),
        p = (0, E.e7)([ep.ZP], () => ep.ZP.isCurrentUserGuest(n.guild_id), [n]),
        m = (0, E.e7)([ep.ZP, eT.default], () => {
            var e, t;
            let r = eT.default.getCurrentUser();
            return null !== (t = null != n.guild_id && null != r ? (null === (e = ep.ZP.getMember(n.guild_id, r.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        { canAddNewReactions: I, canManageMessages: T } = (0, E.cj)(
            [eI.Z],
            () => ({
                canAddNewReactions: f && eI.Z.can(eq.Plq.ADD_REACTIONS, n),
                canManageMessages: eI.Z.can(eq.Plq.MANAGE_MESSAGES, n)
            }),
            [f, n]
        ),
        g = (0, F.ux)(n.guild_id),
        [, S] = (0, Z.AB)(n.guild_id),
        A = (0, e_.$R)(n),
        v = (o === r.author.id || T) && r.author.id !== eq.LAt && !1 !== i && !(0, eN.yE)(r.flags, eq.iLy.EPHEMERAL) && A && 1 === (0, eD.Z)(r),
        N = o === r.author.id && A && !a,
        O = r.author.id === o,
        R = r.isFirstMessageInForumPost(n),
        C = (0, eP.Z)({
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
        y = (0, Q.A)((null !== (t = r.editedTimestamp) && void 0 !== t ? t : r.timestamp).valueOf()),
        L = (0, ee.Z)(null == n ? void 0 : n.id),
        M = (0, er.Z)(r),
        P = (0, b.V)(n.id, r.author.id),
        x = (0, D.r)(r.id),
        { hasInlineForwardButton: G } = (0, U.yk)({ location: 'MessageAccessories' }),
        k = (0, w.a)(r) && G;
    return (0, l.jsx)(e8, {
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
        shouldHideMediaOptions: L,
        shouldRedactExplicitContent: P,
        shouldRenderCtaButton: x,
        hasInlineForwardButton: k
    });
}
e1(e8, 'defaultProps', {
    renderEmbeds: !0,
    compact: !1
});
let te = (e) => {
    var t;
    let { message: n, channel: r, disableReactionReads: i = !1, renderComponentAccessory: a = !1, renderThreadAccessory: o = !1, disableReactionCreates: s = !0, disableReactionUpdates: u = !0, isSearchResult: c = !1, ...d } = e,
        _ = ef.x4.useSetting(),
        E = ef.RS.useSetting(),
        f = ef.NA.useSetting(),
        h = ef.QK.useSetting(),
        p = (0, Q.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        m = (0, ee.Z)(null == r ? void 0 : r.id),
        I = (0, b.V)(r.id, n.author.id),
        T = (0, D.r)(n.id),
        g = (0, er.Z)(n);
    return (0, l.jsx)(e8, {
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
