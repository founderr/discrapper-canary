n.d(t, {
    $p: function () {
        return e9;
    },
    BB: function () {
        return e4;
    },
    ZP: function () {
        return e5;
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
    D = n(394779),
    j = n(294734),
    U = n(426275),
    y = n(947849),
    B = n(715903),
    k = n(71619),
    G = n(637618),
    F = n(225890),
    w = n(364097),
    V = n(495129),
    H = n(939170),
    Y = n(505104),
    W = n(954654),
    K = n(41776),
    z = n(628238),
    X = n(454585),
    Q = n(768494),
    J = n(124347),
    q = n(976853),
    $ = n(346013),
    ee = n(780088),
    et = n(977683),
    en = n(128435),
    ei = n(98278),
    ea = n(614825),
    es = n(265299),
    er = n(699833),
    el = n(344997),
    eo = n(378233),
    ec = n(374425),
    eu = n(665906),
    ed = n(432147),
    e_ = n(695346),
    eE = n(314897),
    eI = n(271383),
    em = n(607744),
    eT = n(496675),
    eh = n(594174),
    eN = n(52824),
    ef = n(626135),
    eC = n(70956),
    ep = n(408433),
    eg = n(630388),
    eA = n(823379),
    eS = n(709054),
    eR = n(591759),
    ex = n(169525),
    eO = n(786761),
    eM = n(161010),
    ev = n(461157),
    eL = n(901461),
    eZ = n(432376),
    eP = n(384203),
    eb = n(633957),
    eD = n(530472),
    ej = n(29909),
    eU = n(782658),
    ey = n(219797),
    eB = n(453687),
    ek = n(128854),
    eG = n(101578),
    eF = n(524444),
    ew = n(319323),
    eV = n(884182),
    eH = n(546432),
    eY = n(920888),
    eW = n(817384),
    eK = n(981631),
    ez = n(474936),
    eX = n(689938),
    eQ = n(916315),
    eJ = n(287847),
    eq = n(680674);
function e$(e, t, n) {
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
    return (0, a.jsxs)('div', {
        className: eJ.nitroFileSizeUpsell,
        children: [
            (0, a.jsx)('img', {
                src: eq,
                className: eJ.nitroBadgeSvg,
                alt: ''
            }),
            (0, a.jsx)(_.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: eX.Z.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({ onClick: () => (0, ei.z)() })
            })
        ]
    });
}
let e1 = 15 * eC.Z.Millis.MINUTE,
    e7 = new Set(['discord-developers', 'discord-testers', 'discord-townhall', 'discordgameslab']),
    e3 = (e, t, n) => () => {
        let i = null != t ? t : n;
        if (null == i) return null;
        let { url: s, proxyURL: r, width: l, height: o } = i;
        return (0, a.jsx)(ej.Z, {
            width: l,
            height: o,
            src: null != r && '' !== r ? r : s,
            url: null != e && '' !== e ? e : null != r && '' !== r ? r : s,
            format: null != n ? u.EO.VIDEO : u.EO.IMAGE,
            className: eJ.gifFavoriteButton
        });
    },
    e2 = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: s } = e;
        return null != i && null != s && J.uo.test(n)
            ? (0, a.jsx)(ej.Z, {
                  width: i,
                  height: s,
                  src: n,
                  url: t,
                  format: u.EO.IMAGE,
                  className: eJ.gifFavoriteButton
              })
            : null;
    };
class e4 extends (i = s.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e7.has(e));
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
                  className: eJ.ctaButtonContainer,
                  children: (0, a.jsx)(Z.Z, {
                      messageId: e.id,
                      channelId: t.id
                  })
              })
            : null;
    }
    renderSocialProofingFileSizeNitroUpsell(e) {
        let t = e.attachments.some((e) => e.size > ez.Lw);
        return (0, eM.M)('attachment') && t ? (0, a.jsx)(e0, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: i } = t;
                  if (n === S.g.INVITE)
                      return this.shouldRenderInvite(i)
                          ? (0, a.jsx)(
                                eU.Z,
                                {
                                    code: i,
                                    author: e.author,
                                    getAcceptInviteContext: this.getAcceptInviteContext
                                },
                                i
                            )
                          : null;
                  if (n === S.g.TEMPLATE) return (0, a.jsx)(w.Z, { code: i }, i);
                  if (n === S.g.EVENT) return (0, a.jsx)(F.Z, { code: i }, i);
                  else if (n === S.g.CHANNEL_LINK)
                      return (0, a.jsx)(
                          eP.Z,
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
                  else if (n === S.g.GUILD_PRODUCT) return (0, a.jsx)(G.Z, { code: i }, i);
                  else if (n === S.g.SERVER_SHOP) return (0, a.jsx)(R.Z, { guildId: i }, i);
                  else if (n === S.g.QUESTS_EMBED) return (0, a.jsx)(es.Z, { questId: i }, i);
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
            o = eh.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, a.jsx)(
                      'div',
                      {
                          className: eJ.giftCodeContainer,
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
                      className: eJ.referralContainer,
                      children: (0, a.jsx)(ea.Z, {
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
            : (0, a.jsx)(eY.Z, {
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
        let { attachments: t, flags: n } = e,
            { channel: i, shouldRedactExplicitContent: s, hasInlineForwardButton: r } = this.props;
        if (0 === t.length || e.isPoll() || e.isUIKitComponents()) return null;
        let l = t.filter((e) => null == e.flags || !(0, eg.yE)(e.flags, eK.J0y.IS_THUMBNAIL));
        if (0 === l.length) return null;
        let { gifAutoPlay: o, canDeleteAttachments: c, inlineAttachmentMedia: u, onMediaItemContextMenu: d, shouldHideMediaOptions: _ } = this.props,
            E = l
                .map((t) =>
                    (0, ee.j9)(
                        t,
                        (0, D.s)(e, {
                            type: 'attachment',
                            attachmentId: t.id
                        }),
                        _,
                        s
                    )
                )
                .filter(eA.lm),
            I = {
                source: 'Media Mosaic',
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            },
            m = E.length > 1 ? (0, ee.Cx)(E, I) : {},
            T = (0, eg.yE)(n, eK.iLy.IS_VOICE_MESSAGE);
        function h(e, t) {
            return (0, ex.dn)(e.originalItem, t);
        }
        let N = l.map((t) => {
                let n = (0, Q.VY)(t),
                    a = {
                        message: e,
                        item: (0, eH.O)(t, u),
                        autoPlayGif: o,
                        canRemoveItem: c && (l.length > 1 || '' !== e.content),
                        onRemoveItem: this.handleRemoveAttachment,
                        className: eJ.embedWrapper,
                        getObscureReason: h,
                        onContextMenu:
                            null != d
                                ? (e) => {
                                      e.stopPropagation(), e.preventDefault(), d(e, n);
                                  }
                                : void 0,
                        renderAudioComponent: T ? ey.jY : ey.q7,
                        renderImageComponent: ey.dS,
                        renderVideoComponent: ey.vZ,
                        renderPlaintextFilePreview: ey.d4,
                        renderGenericFileComponent: ey.ZK,
                        renderMosaicItemFooter: ey.L9,
                        onPlay: (e, n, a) => {
                            ef.default.track(eK.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                                guild_id: i.guild_id,
                                channel_id: i.id,
                                channel_type: i.type,
                                type: t.content_type,
                                flags: t.flags,
                                size: t.size,
                                duration: a
                            });
                        },
                        gifFavoriteButton: e2(n),
                        isSearchResult: this.props.isSearchResult
                    },
                    s = (0, eN.q)({
                        proxyURL: t.proxy_url,
                        url: t.url
                    });
                return s in m && (a.onClick = m[s]), a;
            }),
            f = r
                ? (0, a.jsx)(U.Z, {
                      className: eQ.hideIfMessageNotFocused,
                      messageId: e.id,
                      channelId: i.id,
                      targetKind: 'media'
                  })
                : void 0;
        return (0, a.jsx)(eV.Z, {
            items: N,
            inlineForwardButton: f
        });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t } = this.props;
        return 0 !== e.embeds.length && t
            ? e.embeds.map((t, n) => {
                  if (eW.b.has(t.type) || (0, ep.l3)(t) || ((0, H.b)(t) && !(0, Y.M)(e))) return null;
                  let i = {
                      renderImageComponent: eF.Yi,
                      renderVideoComponent: eF.lV,
                      renderLinkComponent: eF.iT,
                      renderForwardComponent: (0, D.s)(e, {
                          type: 'embed',
                          embedIndex: n
                      })
                  };
                  if (t.type === eK.hBH.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && 'Discord' === t.provider.name) {
                      let s = eR.Z.safeParseWithQuery(t.url);
                      if (null != s && null != s.pathname) {
                          let r = s.pathname.split('/')[3];
                          if (null != r)
                              return (0, a.jsx)(
                                  m.Z,
                                  {
                                      skuId: r,
                                      renderFallback: () => this.renderEmbed(t, n, i, e.id, e.channel_id)
                                  },
                                  t.id
                              );
                      }
                  }
                  return this.renderEmbed(t, n, i, e.id, e.channel_id);
              })
            : null;
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length || !1 === this.props.renderComponentAccessory) return null;
        let { gifAutoPlay: t, shouldRedactExplicitContent: n, shouldHideMediaOptions: i, onMediaItemContextMenu: s } = this.props;
        return (0, a.jsx)(ek.F, {
            gifAutoPlay: t,
            getGifFavButton: e2,
            getOnMediaItemContextMenu:
                null == s
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), null == s || s(t, e);
                      },
            shouldHideMediaOptions: i,
            shouldRedactExplicitContent: n,
            children: (0, a.jsx)(W.ZP, { message: e })
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, a.jsx)(eG.Z, {
            channel: t,
            message: e,
            hideParty: !1
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eK.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, a.jsx)(g.Z, {
                  channelId: e.channel_id,
                  messageId: e.id
              });
    }
    renderEphemeralAccessories(e) {
        return (0, eO.Pv)(e)
            ? (0, a.jsx)(eD.Z, {
                  message: e,
                  onDeleteMessage: () => {
                      E.Z.dismissAutomatedMessage(e);
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
                  (0, a.jsx)(
                      ec.Z,
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
        if (e.hasFlag(eK.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, a.jsx)(ed.Z, {
                message: e,
                compact: this.props.compact
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (!!e.hasFlag(eK.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
            if (!(Date.now() - eS.default.extractTimestamp(e.id) >= e1))
                return (0, a.jsx)('div', {
                    className: eJ.threadRoleMentionFailure,
                    children: eX.Z.Messages.THREAD_ROLE_MENTION_FAILURE
                });
        }
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, a.jsxs)(_.DeclarativeConfirmModal, {
            dismissable: !0,
            header: eX.Z.Messages.SUPPRESS_EMBED_TITLE,
            confirmText: eX.Z.Messages.SUPPRESS_EMBED_CONFIRM,
            cancelText: eX.Z.Messages.CANCEL,
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                E.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, a.jsx)(_.Text, {
                    variant: 'text-md/normal',
                    color: 'text-normal',
                    className: eJ.confirmText,
                    children: eX.Z.Messages.SUPPRESS_EMBED_BODY
                }),
                (0, a.jsx)(_.Text, {
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
        return (0, a.jsx)(_.DeclarativeConfirmModal, {
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
                className: eJ.confirmText,
                children: eX.Z.Messages.REMOVE_ATTACHMENT_BODY
            })
        });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== o.u.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, a.jsx)(ew.Z, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, a.jsx)(eb.Z, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eK.hBH.POST_PREVIEW || null == t.url
                ? []
                : (0, a.jsx)(
                      $.Z,
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
        return 1 === e.embeds.length && e.embeds[0].type === eK.hBH.SAFETY_POLICY_NOTICE ? (0, a.jsx)(er.i, { message: e }) : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eK.hBH.SAFETY_SYSTEM_NOTIFICATION ? (0, a.jsx)(el.g, { embed: e.embeds[0] }) : null;
    }
    renderVoiceChannelInvite(e, t) {
        if (1 === e.embeds.length && e.embeds[0].type === eK.hBH.VOICE_CHANNEL)
            return (0, a.jsx)(V.H, {
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
            return (0, a.jsx)(en.Z, {
                message: e,
                poll: t,
                className: eJ.pollContainer
            });
    }
    renderForwardedMessage(e) {
        return 0 === e.messageSnapshots.length ? null : (0, a.jsx)(j.Z, { message: e });
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
                  id: (0, eB.bX)(t),
                  className: l()(e, eJ.container),
                  children: [Z, g, L, o, c, u, R, d, _, I, v, m, f, p, A, S, E, T, h, N, s && this.renderSuppressConfirmModal(), r && this.renderRemoveAttachmentConfirmModal(), C, x, O, M]
              });
    }
    constructor(...e) {
        super(...e),
            e$(this, 'state', {
                showSuppressModal: !1,
                showRemoveAttachmentModal: !1,
                attachmentToDelete: null
            }),
            e$(this, 'getAcceptInviteContext', (e) => {
                let { channel: t, message: n } = this.props;
                return {
                    location: e,
                    location_guild_id: t.getGuildId(),
                    location_channel_id: t.id,
                    location_channel_type: t.type,
                    location_message_id: n.id
                };
            }),
            e$(this, 'renderEmbed', (e, t, n, i, s) => {
                let { gifAutoPlay: r, inlineEmbedMedia: l, canSuppressEmbeds: o, hasSpoilerEmbeds: c, shouldRedactExplicitContent: u, hasInlineForwardButton: d, isSearchResult: _ } = this.props,
                    E = (0, ex.BP)(e, s, i, c, u);
                if (e.type === eK.hBH.GIFT) return null;
                let I = (0, a.jsx)(
                    y.h.Provider,
                    {
                        value: e3(e.url, e.image, e.video),
                        children: (0, a.jsx)(A.ZP, {
                            className: eJ.embedWrapper,
                            embed: e,
                            obscureReason: null != E ? E : void 0,
                            autoPlayGif: r,
                            hideMedia: !l,
                            onSuppressEmbed: o ? this.handleEmbedSuppressed : void 0,
                            renderTitle: this.renderEmbedTitle,
                            renderDescription: this.renderEmbedDescription,
                            messageId: i,
                            channelId: s,
                            showImageRecs: !1,
                            isSearchResult: _,
                            ...n
                        })
                    },
                    e.id
                );
                return d
                    ? (0, a.jsxs)('div', {
                          className: eJ.embedContainer,
                          children: [
                              I,
                              (0, a.jsx)(U.Z, {
                                  className: eQ.hideIfMessageNotFocused,
                                  messageId: i,
                                  channelId: s,
                                  targetKind: 'embed',
                                  embedIndex: t
                              })
                          ]
                      })
                    : I;
            }),
            e$(this, 'renderEmbedTitle', (e, t) => (e.type === eK.hBH.RICH ? X.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t)),
            e$(this, 'renderEmbedDescription', (e, t, n) =>
                e.type === eK.hBH.RICH
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
            e$(this, 'handleEmbedSuppressed', (e) => {
                let { channel: t, message: n } = this.props;
                e.shiftKey ? E.Z.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
            }),
            e$(this, 'handleRemoveAttachment', (e) => {
                let t = e.originalItem;
                this.setState({
                    showRemoveAttachmentModal: !0,
                    attachmentToDelete: t
                });
            });
    }
}
function e5(e) {
    var t;
    let { channel: n, message: i, renderSuppressEmbeds: s, isMessageSnapshot: r } = e,
        l = (0, c.e7)([eE.default], () => eE.default.getId()),
        o = e_.x4.useSetting(),
        u = e_.RS.useSetting(),
        d = e_.NA.useSetting() && !(0, eL.Z)(e.message),
        _ = e_.nc.useSetting(),
        E = e_.QK.useSetting(),
        I = (0, c.e7)([em.Z], () => null == n.guild_id || em.Z.canChatInGuild(n.guild_id), [n]),
        m = (0, c.e7)([K.Z], () => null != n.guild_id && K.Z.isLurking(n.guild_id), [n]),
        T = (0, c.e7)([eI.ZP], () => eI.ZP.isCurrentUserGuest(n.guild_id), [n]),
        h = (0, c.e7)([eI.ZP, eh.default], () => {
            var e, t;
            let i = eh.default.getCurrentUser();
            return null !== (t = null != n.guild_id && null != i ? (null === (e = eI.ZP.getMember(n.guild_id, i.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        { canAddNewReactions: N, canManageMessages: f } = (0, c.cj)(
            [eT.Z],
            () => ({
                canAddNewReactions: I && eT.Z.can(eK.Plq.ADD_REACTIONS, n),
                canManageMessages: eT.Z.can(eK.Plq.MANAGE_MESSAGES, n)
            }),
            [I, n]
        ),
        C = (0, B.ux)(n.guild_id),
        [, p] = (0, k.AB)(n.guild_id),
        g = (0, eu.$R)(n),
        A = (l === i.author.id || f) && i.author.id !== eK.LAt && !1 !== s && !(0, eg.yE)(i.flags, eK.iLy.EPHEMERAL) && g && 1 === (0, ev.Z)(i),
        S = l === i.author.id && g && !r,
        R = i.author.id === l,
        x = i.isFirstMessageInForumPost(n),
        O = (0, eZ.Z)({
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
        L = (0, z.A)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()),
        Z = (0, q.Z)(null == n ? void 0 : n.id),
        D = (0, et.Z)(i),
        j = (0, M.V)(n.id, i.author.id),
        U = (0, v.r)(i.id),
        { hasInlineForwardButton: y } = (0, P.yk)({ location: 'MessageAccessories' }),
        G = (0, b.a)(i) && y;
    return (0, a.jsx)(e4, {
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
e$(e4, 'defaultProps', {
    renderEmbeds: !0,
    compact: !1
});
let e9 = (e) => {
    var t;
    let { message: n, channel: i, disableReactionReads: s = !1, renderComponentAccessory: r = !1, renderThreadAccessory: l = !1, disableReactionCreates: o = !0, disableReactionUpdates: c = !0, isSearchResult: u = !1, ...d } = e,
        _ = e_.x4.useSetting(),
        E = e_.RS.useSetting(),
        I = e_.NA.useSetting(),
        m = e_.QK.useSetting(),
        T = (0, z.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        h = (0, q.Z)(null == i ? void 0 : i.id),
        N = (0, M.V)(i.id, n.author.id),
        f = (0, v.r)(n.id),
        C = (0, et.Z)(n);
    return (0, a.jsx)(e4, {
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
