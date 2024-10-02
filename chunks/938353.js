n.d(t, {
    $p: function () {
        return tt;
    },
    BB: function () {
        return e9;
    },
    ZP: function () {
        return te;
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
    N = n(547682),
    O = n(162297),
    R = n(222709),
    C = n(446411),
    y = n(960904),
    L = n(161314),
    b = n(163268),
    D = n(25610),
    M = n(703751),
    P = n(761538),
    U = n(674611),
    w = n(346610),
    x = n(868643),
    G = n(394779),
    k = n(294734),
    B = n(426275),
    F = n(947849),
    Z = n(715903),
    V = n(71619),
    H = n(637618),
    Y = n(225890),
    j = n(364097),
    W = n(495129),
    K = n(939170),
    z = n(505104),
    q = n(954654),
    Q = n(41776),
    X = n(628238),
    $ = n(454585),
    J = n(768494),
    ee = n(124347),
    et = n(976853),
    en = n(346013),
    er = n(780088),
    ei = n(977683),
    ea = n(128435),
    eo = n(98278),
    es = n(614825),
    el = n(265299),
    eu = n(699833),
    ec = n(344997),
    ed = n(378233),
    e_ = n(374425),
    eE = n(665906),
    ef = n(432147),
    eh = n(695346),
    ep = n(314897),
    em = n(271383),
    eI = n(607744),
    eT = n(496675),
    eg = n(594174),
    eS = n(52824),
    eA = n(626135),
    ev = n(70956),
    eN = n(408433),
    eO = n(630388),
    eR = n(823379),
    eC = n(709054),
    ey = n(591759),
    eL = n(169525),
    eb = n(786761),
    eD = n(161010),
    eM = n(461157),
    eP = n(901461),
    eU = n(432376),
    ew = n(384203),
    ex = n(633957),
    eG = n(530472),
    ek = n(29909),
    eB = n(782658),
    eF = n(219797),
    eZ = n(453687),
    eV = n(128854),
    eH = n(101578),
    eY = n(524444),
    ej = n(319323),
    eW = n(884182),
    eK = n(546432),
    ez = n(920888),
    eq = n(817384),
    eQ = n(981631),
    eX = n(474936),
    e$ = n(689938),
    eJ = n(916315),
    e0 = n(287847),
    e1 = n(680674);
function e2(e, t, n) {
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
function e3() {
    return (0, l.jsxs)('div', {
        className: e0.nitroFileSizeUpsell,
        children: [
            (0, l.jsx)('img', {
                src: e1,
                className: e0.nitroBadgeSvg,
                alt: ''
            }),
            (0, l.jsx)(p.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: e$.Z.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({ onClick: () => (0, eo.z)() })
            })
        ]
    });
}
let e4 = 15 * ev.Z.Millis.MINUTE,
    e5 = new Set(['discord-developers', 'discord-testers', 'discord-townhall', 'discordgameslab']),
    e6 = (e, t, n) => () => {
        let r = null != t ? t : n;
        if (null == r) return null;
        let { url: i, proxyURL: a, width: o, height: s } = r;
        return (0, l.jsx)(ek.Z, {
            width: o,
            height: s,
            src: null != a && '' !== a ? a : i,
            url: null != e && '' !== e ? e : null != a && '' !== a ? a : i,
            format: null != n ? f.EO.VIDEO : f.EO.IMAGE,
            className: e0.gifFavoriteButton
        });
    },
    e7 = (e) => () => {
        let { url: t, proxyUrl: n, width: r, height: i } = e;
        return null != r && null != i && ee.uo.test(n)
            ? (0, l.jsx)(ek.Z, {
                  width: r,
                  height: i,
                  src: n,
                  url: t,
                  format: f.EO.IMAGE,
                  className: e0.gifFavoriteButton
              })
            : null;
    };
function e8(e, t) {
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
class e9 extends (r = u.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e5.has(e));
    }
    shouldComponentUpdate(e, t) {
        let { channel: n, message: r, poll: i } = this.props,
            { channel: a, message: o, poll: s } = e;
        return !(0, h.Z)(this.state, t) || !(0, h.Z)(this.props, e, ['message', 'channel']) || n.type !== a.type || s !== i || o.codedLinks !== r.codedLinks || o.flags !== r.flags || o.giftCodes !== r.giftCodes || o.attachments !== r.attachments || o.embeds !== r.embeds || o.components !== r.components || o.activity !== r.activity || !e8(o.reactions, r.reactions);
    }
    renderCtaButton() {
        let { message: e, channel: t, shouldRenderCtaButton: n } = this.props;
        return n
            ? (0, l.jsx)('div', {
                  className: e0.ctaButtonContainer,
                  children: (0, l.jsx)(U.Z, {
                      messageId: e.id,
                      channelId: t.id
                  })
              })
            : null;
    }
    renderSocialProofingFileSizeNitroUpsell(e) {
        let t = e.attachments.some((e) => e.size > eX.Lw);
        return (0, eD.M)('attachment') && t ? (0, l.jsx)(e3, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: r } = t;
                  if (n === y.g.INVITE)
                      return this.shouldRenderInvite(r)
                          ? (0, l.jsx)(
                                eB.Z,
                                {
                                    code: r,
                                    author: e.author,
                                    getAcceptInviteContext: this.getAcceptInviteContext
                                },
                                r
                            )
                          : null;
                  if (n === y.g.TEMPLATE) return (0, l.jsx)(j.Z, { code: r }, r);
                  if (n === y.g.EVENT) return (0, l.jsx)(Y.Z, { code: r }, r);
                  else if (n === y.g.CHANNEL_LINK)
                      return (0, l.jsx)(
                          ew.Z,
                          {
                              code: r,
                              messageData: e
                          },
                          r
                      );
                  else if (n === y.g.APP_DIRECTORY_PROFILE)
                      return (0, l.jsx)(
                          S.Z,
                          {
                              code: r,
                              message: e
                          },
                          r
                      );
                  else if (n === y.g.ACTIVITY_BOOKMARK)
                      return (0, l.jsx)(
                          g.Z,
                          {
                              applicationId: r,
                              message: e
                          },
                          r
                      );
                  else if (n === y.g.GUILD_PRODUCT) return (0, l.jsx)(H.Z, { code: r }, r);
                  else if (n === y.g.SERVER_SHOP) return (0, l.jsx)(L.Z, { guildId: r }, r);
                  else if (n === y.g.QUESTS_EMBED) return (0, l.jsx)(el.Z, { questId: r }, r);
                  else if (n === y.g.APP_DIRECTORY_STOREFRONT)
                      return (0, l.jsx)(
                          v.P,
                          {
                              appId: r,
                              message: e
                          },
                          r
                      );
                  else if (n === y.g.APP_DIRECTORY_STOREFRONT_SKU) {
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
                  } else if (n === y.g.DISCOVERY_GAME) return null;
                  else if (n === y.g.APP_OAUTH2_LINK) {
                      let { enabled: e } = N.I.getCurrentConfig({ location: 'MessageAccessories' }, { autoTrackExposure: !1 });
                      return e ? (0, l.jsx)(O.Z, { applicationId: r }, r) : null;
                  } else throw Error('Unknown coded link type: '.concat(n));
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: r, type: i, content: a, giftInfo: o } = e,
            s = eg.default.getCurrentUser();
        return null != s && t.length > 0
            ? t.map((e) =>
                  (0, l.jsx)(
                      'div',
                      {
                          className: e0.giftCodeContainer,
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
                      className: e0.referralContainer,
                      children: (0, l.jsx)(es.Z, {
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
            : (0, l.jsx)(ez.Z, {
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
        let o = t.filter((e) => null == e.flags || !(0, eO.yE)(e.flags, eQ.J0y.IS_THUMBNAIL));
        if (0 === o.length) return null;
        let { gifAutoPlay: s, canDeleteAttachments: u, inlineAttachmentMedia: c, onMediaItemContextMenu: d, shouldHideMediaOptions: _ } = this.props,
            E = o
                .map((t) =>
                    (0, er.j9)(
                        t,
                        (0, G.s)(e, {
                            type: 'attachment',
                            attachmentId: t.id
                        }),
                        _,
                        i
                    )
                )
                .filter(eR.lm),
            f = {
                source: 'Media Mosaic',
                guild_id: r.guild_id,
                channel_id: r.id,
                channel_type: r.type
            },
            h = E.length > 1 ? (0, er.Cx)(E, f) : {},
            p = (0, eO.yE)(n, eQ.iLy.IS_VOICE_MESSAGE);
        function m(e, t) {
            return (0, eL.dn)(e.originalItem, t);
        }
        let I = o.map((t) => {
                let n = (e, n, i) => {
                        eA.default.track(eQ.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: r.guild_id,
                            channel_id: r.id,
                            channel_type: r.type,
                            type: t.content_type,
                            flags: t.flags,
                            size: t.size,
                            duration: i
                        });
                    },
                    i = (0, J.VY)(t),
                    a = {
                        message: e,
                        item: (0, eK.O)(t, c),
                        autoPlayGif: s,
                        canRemoveItem: u && (o.length > 1 || '' !== e.content),
                        onRemoveItem: this.handleRemoveAttachment,
                        className: e0.embedWrapper,
                        getObscureReason: m,
                        onContextMenu:
                            null != d
                                ? (e) => {
                                      e.stopPropagation(), e.preventDefault(), d(e, i);
                                  }
                                : void 0,
                        renderAudioComponent: p ? eF.jY : eF.q7,
                        renderImageComponent: eF.dS,
                        renderVideoComponent: eF.vZ,
                        renderPlaintextFilePreview: eF.d4,
                        renderGenericFileComponent: eF.ZK,
                        renderMosaicItemFooter: eF.L9,
                        onPlay: n,
                        gifFavoriteButton: e7(i),
                        isSearchResult: this.props.isSearchResult
                    },
                    l = (0, eS.q)({
                        proxyURL: t.proxy_url,
                        url: t.url
                    });
                return l in h && (a.onClick = h[l]), a;
            }),
            T = a
                ? (0, l.jsx)(B.Z, {
                      className: eJ.hideIfMessageNotFocused,
                      messageId: e.id,
                      channelId: r.id,
                      targetKind: 'media'
                  })
                : void 0;
        return (0, l.jsx)(eW.Z, {
            items: I,
            inlineForwardButton: T
        });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t } = this.props;
        return 0 !== e.embeds.length && t
            ? e.embeds.map((t, n) => {
                  if (eq.b.has(t.type) || (0, eN.l3)(t) || ((0, K.b)(t) && !(0, z.M)(e))) return null;
                  let r = {
                      renderImageComponent: eY.Yi,
                      renderVideoComponent: eY.lV,
                      renderLinkComponent: eY.iT,
                      renderForwardComponent: (0, G.s)(e, {
                          type: 'embed',
                          embedIndex: n
                      })
                  };
                  if (t.type === eQ.hBH.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && 'Discord' === t.provider.name) {
                      let i = ey.Z.safeParseWithQuery(t.url);
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
        return (0, l.jsx)(eV.F, {
            gifAutoPlay: t,
            getGifFavButton: e7,
            getOnMediaItemContextMenu:
                null == i
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), null == i || i(t, e);
                      },
            shouldHideMediaOptions: r,
            shouldRedactExplicitContent: n,
            children: (0, l.jsx)(q.ZP, { message: e })
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, l.jsx)(eH.Z, {
            channel: t,
            message: e,
            hideParty: !1
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eQ.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, l.jsx)(R.Z, {
                  channelId: e.channel_id,
                  messageId: e.id
              });
    }
    renderEphemeralAccessories(e) {
        return (0, eb.Pv)(e)
            ? (0, l.jsx)(eG.Z, {
                  message: e,
                  onDeleteMessage: () => {
                      m.Z.dismissAutomatedMessage(e);
                  }
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, ed.cv)(e),
            { channel: n, isInteracting: r } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) =>
                  (0, l.jsx)(
                      e_.Z,
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
        if (e.hasFlag(eQ.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, l.jsx)(ef.Z, {
                message: e,
                compact: this.props.compact
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (!!e.hasFlag(eQ.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
            if (!(Date.now() - eC.default.extractTimestamp(e.id) >= e4))
                return (0, l.jsx)('div', {
                    className: e0.threadRoleMentionFailure,
                    children: e$.Z.Messages.THREAD_ROLE_MENTION_FAILURE
                });
        }
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, l.jsxs)(p.DeclarativeConfirmModal, {
            dismissable: !0,
            header: e$.Z.Messages.SUPPRESS_EMBED_TITLE,
            confirmText: e$.Z.Messages.SUPPRESS_EMBED_CONFIRM,
            cancelText: e$.Z.Messages.CANCEL,
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                m.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, l.jsx)(p.Text, {
                    variant: 'text-md/normal',
                    color: 'text-normal',
                    className: e0.confirmText,
                    children: e$.Z.Messages.SUPPRESS_EMBED_BODY
                }),
                (0, l.jsx)(p.Text, {
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: e$.Z.Messages.SUPPRESS_EMBED_TIP
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
            header: e$.Z.Messages.REMOVE_ATTACHMENT_TITLE,
            confirmText: e$.Z.Messages.REMOVE_ATTACHMENT_CONFIRM,
            cancelText: e$.Z.Messages.CANCEL,
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
                className: e0.confirmText,
                children: e$.Z.Messages.REMOVE_ATTACHMENT_BODY
            })
        });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== _.u.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, l.jsx)(ej.Z, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, l.jsx)(ex.Z, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eQ.hBH.POST_PREVIEW || null == t.url
                ? []
                : (0, l.jsx)(
                      en.Z,
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
        return 1 === e.embeds.length && e.embeds[0].type === eQ.hBH.SAFETY_POLICY_NOTICE ? (0, l.jsx)(eu.i, { message: e }) : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eQ.hBH.SAFETY_SYSTEM_NOTIFICATION ? (0, l.jsx)(ec.g, { embed: e.embeds[0] }) : null;
    }
    renderVoiceChannelInvite(e, t) {
        if (1 === e.embeds.length && e.embeds[0].type === eQ.hBH.VOICE_CHANNEL)
            return (0, l.jsx)(W.H, {
                message: e,
                channel: t
            });
    }
    renderMediaObscureNotice(e) {
        if (0 === e.attachments.length && 0 === e.embeds.length) return null;
        let { obscuredAttachments: t, obscuredEmbeds: n } = (0, b.Tw)(e);
        return 0 === t.length && 0 === n.length ? null : (0, l.jsx)(P.Z, { message: e });
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, l.jsx)(ea.Z, {
                message: e,
                poll: t,
                className: e0.pollContainer
            });
    }
    renderForwardedMessage(e) {
        return 0 === e.messageSnapshots.length ? null : (0, l.jsx)(k.Z, { message: e });
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
                  id: (0, eZ.bX)(t),
                  className: d()(e, e0.container),
                  children: [D, A, b, o, s, u, O, c, _, f, L, h, T, S, v, N, E, p, m, I, i && this.renderSuppressConfirmModal(), a && this.renderRemoveAttachmentConfirmModal(), g, R, C, y]
              });
    }
    constructor(...e) {
        super(...e),
            e2(this, 'state', {
                showSuppressModal: !1,
                showRemoveAttachmentModal: !1,
                attachmentToDelete: null
            }),
            e2(this, 'getAcceptInviteContext', (e) => {
                let { channel: t, message: n } = this.props;
                return {
                    location: e,
                    location_guild_id: t.getGuildId(),
                    location_channel_id: t.id,
                    location_channel_type: t.type,
                    location_message_id: n.id
                };
            }),
            e2(this, 'renderEmbed', (e, t, n, r, i) => {
                let { gifAutoPlay: a, inlineEmbedMedia: o, canSuppressEmbeds: s, hasSpoilerEmbeds: u, shouldRedactExplicitContent: c, hasInlineForwardButton: d, isSearchResult: _ } = this.props,
                    E = (0, eL.BP)(e, i, r, u, c);
                if (e.type === eQ.hBH.GIFT) return null;
                let f = (0, l.jsx)(
                    F.h.Provider,
                    {
                        value: e6(e.url, e.image, e.video),
                        children: (0, l.jsx)(C.ZP, {
                            className: e0.embedWrapper,
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
                          className: e0.embedContainer,
                          children: [
                              f,
                              (0, l.jsx)(B.Z, {
                                  className: eJ.hideIfMessageNotFocused,
                                  messageId: r,
                                  channelId: i,
                                  targetKind: 'embed',
                                  embedIndex: t
                              })
                          ]
                      })
                    : f;
            }),
            e2(this, 'renderEmbedTitle', (e, t) => (e.type === eQ.hBH.RICH ? $.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t)),
            e2(this, 'renderEmbedDescription', (e, t, n) =>
                e.type === eQ.hBH.RICH
                    ? $.Z.parse(t, !0, {
                          channelId: this.props.channel.id,
                          allowLinks: !0,
                          allowEmojiLinks: !0,
                          allowList: this.props.showListsAndHeaders,
                          allowHeading: !n && this.props.showListsAndHeaders,
                          previewLinkTarget: this.props.showMaskedLinks
                      })
                    : t
            ),
            e2(this, 'handleEmbedSuppressed', (e) => {
                let { channel: t, message: n } = this.props;
                e.shiftKey ? m.Z.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
            }),
            e2(this, 'handleRemoveAttachment', (e) => {
                let t = e.originalItem;
                this.setState({
                    showRemoveAttachmentModal: !0,
                    attachmentToDelete: t
                });
            });
    }
}
function te(e) {
    var t;
    let { channel: n, message: r, renderSuppressEmbeds: i, isMessageSnapshot: a } = e,
        o = (0, E.e7)([ep.default], () => ep.default.getId()),
        s = eh.x4.useSetting(),
        u = eh.RS.useSetting(),
        c = eh.NA.useSetting() && !(0, eP.Z)(e.message),
        d = eh.nc.useSetting(),
        _ = eh.QK.useSetting(),
        f = (0, E.e7)([eI.Z], () => null == n.guild_id || eI.Z.canChatInGuild(n.guild_id), [n]),
        h = (0, E.e7)([Q.Z], () => null != n.guild_id && Q.Z.isLurking(n.guild_id), [n]),
        p = (0, E.e7)([em.ZP], () => em.ZP.isCurrentUserGuest(n.guild_id), [n]),
        m = (0, E.e7)([em.ZP, eg.default], () => {
            var e, t;
            let r = eg.default.getCurrentUser();
            return null !== (t = null != n.guild_id && null != r ? (null === (e = em.ZP.getMember(n.guild_id, r.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        { canAddNewReactions: I, canManageMessages: T } = (0, E.cj)(
            [eT.Z],
            () => ({
                canAddNewReactions: f && eT.Z.can(eQ.Plq.ADD_REACTIONS, n),
                canManageMessages: eT.Z.can(eQ.Plq.MANAGE_MESSAGES, n)
            }),
            [f, n]
        ),
        g = (0, Z.ux)(n.guild_id),
        [, S] = (0, V.AB)(n.guild_id),
        A = (0, eE.$R)(n),
        v = (o === r.author.id || T) && r.author.id !== eQ.LAt && !1 !== i && !(0, eO.yE)(r.flags, eQ.iLy.EPHEMERAL) && A && 1 === (0, eM.Z)(r),
        N = o === r.author.id && A && !a,
        O = r.author.id === o,
        R = r.isFirstMessageInForumPost(n),
        C = (0, eU.Z)({
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
        y = (0, X.A)((null !== (t = r.editedTimestamp) && void 0 !== t ? t : r.timestamp).valueOf()),
        L = (0, et.Z)(null == n ? void 0 : n.id),
        b = (0, ei.Z)(r),
        P = (0, D.V)(n.id, r.author.id),
        U = (0, M.r)(r.id),
        { hasInlineForwardButton: G } = (0, w.yk)({ location: 'MessageAccessories' }),
        k = (0, x.a)(r) && G;
    return (0, l.jsx)(e9, {
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
        poll: b,
        showListsAndHeaders: y,
        showMaskedLinks: y,
        shouldHideMediaOptions: L,
        shouldRedactExplicitContent: P,
        shouldRenderCtaButton: U,
        hasInlineForwardButton: k
    });
}
e2(e9, 'defaultProps', {
    renderEmbeds: !0,
    compact: !1
});
let tt = (e) => {
    var t;
    let { message: n, channel: r, disableReactionReads: i = !1, renderComponentAccessory: a = !1, renderThreadAccessory: o = !1, disableReactionCreates: s = !0, disableReactionUpdates: u = !0, isSearchResult: c = !1, ...d } = e,
        _ = eh.x4.useSetting(),
        E = eh.RS.useSetting(),
        f = eh.NA.useSetting(),
        h = eh.QK.useSetting(),
        p = (0, X.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        m = (0, et.Z)(null == r ? void 0 : r.id),
        I = (0, D.V)(r.id, n.author.id),
        T = (0, M.r)(n.id),
        g = (0, ei.Z)(n);
    return (0, l.jsx)(e9, {
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
