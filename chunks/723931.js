"use strict";
n.r(t), n.d(t, {
  MessageAccessories: function() {
    return ek
  },
  default: function() {
    return eF
  },
  SimpleMessageAccessories: function() {
    return ew
  }
}), n("222007"), n("702976"), n("70102"), n("881410");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("637612"),
  o = n("446674"),
  u = n("713349"),
  d = n("233736"),
  c = n("77078"),
  E = n("819689"),
  f = n("710306"),
  _ = n("501076"),
  T = n("798609"),
  I = n("627697"),
  m = n("527088"),
  N = n("193865"),
  p = n("222650"),
  S = n("139514"),
  A = n("810044"),
  C = n("447435"),
  h = n("963119"),
  g = n("45476"),
  M = n("925685"),
  O = n("84849"),
  R = n("406043"),
  L = n("294519"),
  v = n("477558"),
  P = n("812224"),
  D = n("249393"),
  x = n("383247"),
  y = n("267567"),
  U = n("367376"),
  j = n("467475"),
  b = n("801177"),
  G = n("985883"),
  B = n("311830"),
  k = n("626301"),
  F = n("428786"),
  w = n("993735"),
  H = n("705423"),
  V = n("315021"),
  Y = n("24373"),
  W = n("943508"),
  K = n("300322"),
  z = n("415829"),
  Q = n("845579"),
  Z = n("271938"),
  J = n("26989"),
  X = n("88093"),
  q = n("957255"),
  $ = n("697218"),
  ee = n("560176"),
  et = n("952368"),
  en = n("328620"),
  es = n("688622"),
  el = n("124297"),
  ea = n("377502"),
  ei = n("323273"),
  er = n("599110"),
  eo = n("718517"),
  eu = n("240873"),
  ed = n("568734"),
  ec = n("449008"),
  eE = n("299039"),
  ef = n("253981"),
  e_ = n("605160"),
  eT = n("865446"),
  eI = n("913491"),
  em = n("583022"),
  eN = n("125247"),
  ep = n("885968"),
  eS = n("476714"),
  eA = n("808440"),
  eC = n("865343"),
  eh = n("5982"),
  eg = n("933629"),
  eM = n("600536"),
  eO = n("592707"),
  eR = n("49111"),
  eL = n("646718"),
  ev = n("782340"),
  eP = n("278603"),
  eD = n("872364");

function ex() {
  return (0, s.jsxs)("div", {
    className: eP.nitroFileSizeUpsell,
    children: [(0, s.jsx)("img", {
      src: eD,
      className: eP.nitroBadgeSvg,
      alt: ""
    }), (0, s.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: eP.nitroFileSizeUpsellText,
      children: ev.default.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({
        onClick: () => (0, k.navigateToPremiumMarketingPage)()
      })
    })]
  })
}
let ey = new Set([eR.MessageEmbedTypes.AUTO_MODERATION_MESSAGE, eR.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION, eR.MessageEmbedTypes.APPLICATION_NEWS, eR.MessageEmbedTypes.POST_PREVIEW, eR.MessageEmbedTypes.SAFETY_POLICY_NOTICE, eR.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION, eR.MessageEmbedTypes.VOICE_CHANNEL]),
  eU = 15 * eo.default.Millis.MINUTE,
  ej = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
  eb = "web_chat",
  eG = (e, t, n) => () => {
    let l = null != t ? t : n;
    if (null == l) return null;
    let {
      url: a,
      proxyURL: i,
      width: r,
      height: o
    } = l;
    return (0, s.jsx)(eS.default, {
      width: r,
      height: o,
      src: null != i && "" !== i ? i : a,
      url: null != e && "" !== e ? e : null != i && "" !== i ? i : a,
      format: null != n ? u.GIFType.VIDEO : u.GIFType.IMAGE,
      className: eP.gifFavoriteButton
    })
  },
  eB = e => () => {
    let {
      proxy_url: t,
      width: n,
      height: l
    } = e;
    return et.IMAGE_GIF_RE.test(e.filename) && null != n && null != l ? (0, s.jsx)(eS.default, {
      width: n,
      height: l,
      src: t,
      url: t,
      format: u.GIFType.IMAGE,
      className: eP.gifFavoriteButton
    }) : null
  };
class ek extends l.Component {
  shouldRenderInvite(e) {
    let {
      channel: t
    } = this.props;
    return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && ej.has(e))
  }
  shouldComponentUpdate(e, t) {
    var n, s;
    let {
      channel: l,
      message: a,
      poll: i
    } = this.props, {
      channel: r,
      message: o,
      poll: u
    } = e;
    return !(0, d.default)(this.state, t) || !(0, d.default)(this.props, e, ["message", "channel"]) || l.type !== r.type || u !== i || o.codedLinks !== a.codedLinks || o.flags !== a.flags || o.giftCodes !== a.giftCodes || o.attachments !== a.attachments || o.embeds !== a.embeds || o.components !== a.components || o.activity !== a.activity || (n = o.reactions, n !== (s = a.reactions) && (n.length !== s.length || !!n.some((e, t) => {
      let {
        emoji: n,
        count: l,
        burst_count: a
      } = e, {
        emoji: i,
        count: r,
        burst_count: o
      } = s[t];
      return a !== o || l !== r || n.id !== i.id || n.name !== i.name
    })))
  }
  renderCtaButton() {
    let {
      message: e,
      channel: t,
      shouldRenderCtaButton: n
    } = this.props;
    return n ? (0, s.jsx)("div", {
      className: eP.ctaButtonContainer,
      children: (0, s.jsx)(O.default, {
        messageId: e.id,
        channelId: t.id
      })
    }) : null
  }
  renderSocialProofingFileSizeNitroUpsell(e) {
    let t = e.attachments.some(e => e.size > eL.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE);
    return (0, eT.shouldShowNitroUpsell)("attachment") && t ? (0, s.jsx)(ex, {}) : null
  }
  renderCodedLinks(e) {
    return 0 === e.codedLinks.length ? null : e.codedLinks.map(t => {
      let {
        type: n,
        code: l
      } = t;
      if (n === S.CodedLinkType.INVITE) return this.shouldRenderInvite(l) ? (0, s.jsx)(eA.default, {
        code: l,
        author: e.author,
        getAcceptInviteContext: this.getAcceptInviteContext
      }, l) : null;
      if (n === S.CodedLinkType.TEMPLATE) return (0, s.jsx)(P.default, {
        code: l
      }, l);
      if (n === S.CodedLinkType.EVENT) return (0, s.jsx)(v.default, {
        code: l
      }, l);
      else if (n === S.CodedLinkType.CHANNEL_LINK) return (0, s.jsx)(eN.default, {
        code: l,
        messageData: e
      }, l);
      else if (n === S.CodedLinkType.APP_DIRECTORY_PROFILE) return (0, s.jsx)(m.default, {
        code: l,
        message: e
      }, l);
      else if (n === S.CodedLinkType.CLYDE_PROFILE) return;
      else if (n === S.CodedLinkType.ACTIVITY_BOOKMARK) return (0, s.jsx)(I.default, {
        applicationId: l,
        message: e
      }, l);
      else if (n === S.CodedLinkType.GUILD_PRODUCT) return (0, s.jsx)(L.default, {
        code: l
      }, l);
      else if (n === S.CodedLinkType.SERVER_SHOP) return (0, s.jsx)(A.default, {
        guildId: l
      }, l);
      else if (n === S.CodedLinkType.QUESTS_EMBED) return (0, s.jsx)(w.default, {
        questId: l
      }, l);
      else throw Error("Unknown coded link type: ".concat(n))
    })
  }
  renderGiftCodes(e) {
    let {
      giftCodes: t,
      author: n,
      channel_id: l,
      type: a,
      content: i,
      giftInfo: r
    } = e, o = $.default.getCurrentUser();
    return null != o && t.length > 0 ? t.map(e => (0, s.jsx)("div", {
      className: eP.giftCodeContainer,
      children: (0, s.jsx)(f.default, {
        code: e,
        author: n,
        channelId: l,
        currentUser: o,
        type: a,
        content: i,
        giftInfo: r
      })
    }, e)) : null
  }
  renderReferralTrial(e) {
    let {
      referralTrialOfferId: t,
      type: n
    } = e, {
      canRenderReferralEmbed: l
    } = this.props;
    return n !== r.MessageTypes.PREMIUM_REFERRAL || null == t ? null : (0, s.jsx)("div", {
      className: eP.referralContainer,
      children: (0, s.jsx)(F.default, {
        userTrialOfferId: t,
        canRenderReferralEmbed: null != l && l
      })
    }, t)
  }
  renderReactions(e) {
    let {
      disableReactionCreates: t,
      disableReactionReads: n,
      disableReactionUpdates: l,
      isLurking: a,
      isGuest: i,
      isPendingMember: r,
      channel: o,
      forceAddReactions: u
    } = this.props;
    return n ? null : (0, s.jsx)(eO.default, {
      message: e,
      channel: o,
      disableReactionCreates: t,
      disableReactionUpdates: l,
      isLurking: a,
      isGuest: i,
      isPendingMember: r,
      forceAddReactions: u,
      useChatFontScaling: !0
    })
  }
  renderAttachments(e) {
    let {
      attachments: t,
      flags: n
    } = e, {
      channel: l,
      shouldRedactExplicitContent: a
    } = this.props;
    if (0 === t.length || e.isPoll()) return null;
    let i = t.filter(e => null == e.flags || !(0, ed.hasFlag)(e.flags, eR.MessageAttachmentFlags.IS_THUMBNAIL));
    if (0 === i.length) return null;
    let {
      gifAutoPlay: r,
      canDeleteAttachments: o,
      inlineAttachmentMedia: u,
      onAttachmentContextMenu: d,
      shouldHideMediaOptions: c
    } = this.props, E = i.map(e => (0, ei.carouselAssetFromAttachment)(e, c, a)).filter(ec.isNotNullish), f = {
      source: "Media Mosaic",
      guild_id: l.guild_id,
      channel_id: l.id,
      channel_type: l.type
    }, _ = E.length > 1 ? (0, ei.createMediaOnClickOverrides)(E, f) : {}, T = (0, ed.hasFlag)(n, eR.MessageFlags.IS_VOICE_MESSAGE), I = i.map(t => {
      let n = {
          message: e,
          attachment: t,
          autoPlayGif: r,
          canRemoveAttachment: o && (i.length > 1 || "" !== e.content),
          className: eP.embedWrapper,
          inlineMedia: u,
          onContextMenu: null != d ? e => {
            e.stopPropagation(), e.preventDefault(), d(e, t)
          } : void 0,
          onRemoveAttachment: this.handleRemoveAttachment,
          renderAudioComponent: T ? eg.renderVoiceMessageAudioComponent : eg.renderAudioComponent,
          renderImageComponent: eg.renderImageComponent,
          renderPlaintextFilePreview: eg.renderPlaintextFilePreview,
          renderVideoComponent: eg.renderVideoComponent,
          onPlay: (e, n, s) => {
            er.default.track(eR.AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
              guild_id: l.guild_id,
              channel_id: l.id,
              channel_type: l.type,
              type: t.content_type,
              flags: t.flags,
              size: t.size,
              duration: s
            })
          },
          gifFavoriteButton: eB(t)
        },
        s = (0, es.getBestEffortSrcUrl)({
          proxyURL: t.proxy_url,
          url: t.url
        });
      return s in _ && (n.onClick = _[s]), n
    });
    return (0, s.jsx)(ea.default, {
      attachments: I
    })
  }
  renderEmbeds(e) {
    let {
      renderEmbeds: t
    } = this.props;
    return 0 !== e.embeds.length && t ? e.embeds.map(t => {
      if (ey.has(t.type) || (0, eu.isServerShopArticleEmbed)(t)) return null;
      let n = {
        renderImageComponent: eg.renderImageComponent,
        renderVideoComponent: eg.renderVideoComponent,
        renderLinkComponent: eg.renderMaskedLinkComponent
      };
      if (t.type === eR.MessageEmbedTypes.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && "Discord" === t.provider.name) {
        let l = ef.default.safeParseWithQuery(t.url);
        if (null != l && null != l.pathname) {
          let a = l.pathname.split("/")[3];
          if (null != a) return (0, s.jsx)(_.default, {
            skuId: a,
            renderFallback: () => this.renderEmbed(t, n, e.id, e.channel_id)
          }, t.id)
        }
      }
      return this.renderEmbed(t, n, e.id, e.channel_id)
    }) : null
  }
  renderComponentAccessories(e) {
    return null == e.components || 0 === e.components.length || !1 === this.props.renderComponentAccessory ? null : (0, s.jsx)(x.default, {
      message: e
    })
  }
  renderActivityInvite(e) {
    if (null == e.activity) return null;
    let {
      channel: t
    } = this.props;
    return (0, s.jsx)(eh.default, {
      channel: t,
      message: e,
      hideParty: !1
    })
  }
  renderPublishBump(e) {
    let {
      channel: t
    } = this.props;
    return t.type !== eR.ChannelTypes.GUILD_ANNOUNCEMENT || (0, ed.hasFlag)(e.flags, eR.MessageFlags.EPHEMERAL) ? null : (0, s.jsx)(p.default, {
      channelId: e.channel_id,
      messageId: e.id
    })
  }
  renderEphemeralAccessories(e) {
    return (0, ed.hasFlag)(e.flags, eR.MessageFlags.EPHEMERAL) ? (0, s.jsx)(el.default, {
      message: e,
      onDeleteMessage: () => {
        E.default.dismissAutomatedMessage(e)
      }
    }) : null
  }
  renderStickersAccessories(e) {
    let t = (0, Y.getMessageStickers)(e),
      {
        channel: n,
        isInteracting: l
      } = this.props;
    return 0 === t.length ? null : t.map(e => (0, s.jsx)(W.default, {
      channel: n,
      isInteracting: l,
      renderableSticker: e
    }, e.id))
  }
  renderThreadAccessories(e) {
    if (e.hasFlag(eR.MessageFlags.HAS_THREAD) && !1 !== this.props.renderThreadAccessory) return (0, s.jsx)(z.default, {
      message: e,
      compact: this.props.compact
    })
  }
  renderThreadRoleMentionWarning(e) {
    if (!e.hasFlag(eR.MessageFlags.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) || !this.props.isCurrentUser) return;
    let t = Date.now() - eE.default.extractTimestamp(e.id);
    if (!(t >= eU)) return (0, s.jsx)("div", {
      className: eP.threadRoleMentionFailure,
      children: ev.default.Messages.THREAD_ROLE_MENTION_FAILURE
    })
  }
  renderSuppressConfirmModal() {
    let {
      channel: e,
      message: t
    } = this.props;
    return (0, s.jsxs)(c.DeclarativeConfirmModal, {
      dismissable: !0,
      header: ev.default.Messages.SUPPRESS_EMBED_TITLE,
      confirmText: ev.default.Messages.SUPPRESS_EMBED_CONFIRM,
      cancelText: ev.default.Messages.CANCEL,
      onCancel: () => this.setState({
        showSuppressModal: !1
      }),
      onConfirm: () => {
        E.default.suppressEmbeds(e.id, t.id), this.setState({
          showSuppressModal: !1
        })
      },
      children: [(0, s.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        className: eP.confirmText,
        children: ev.default.Messages.SUPPRESS_EMBED_BODY
      }), (0, s.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: ev.default.Messages.SUPPRESS_EMBED_TIP
      })]
    })
  }
  renderRemoveAttachmentConfirmModal() {
    let {
      channel: e,
      message: t
    } = this.props, {
      attachmentToDelete: n
    } = this.state;
    if (null == n) {
      this.setState({
        showRemoveAttachmentModal: !1
      });
      return
    }
    return (0, s.jsx)(c.DeclarativeConfirmModal, {
      dismissable: !0,
      header: ev.default.Messages.REMOVE_ATTACHMENT_TITLE,
      confirmText: ev.default.Messages.REMOVE_ATTACHMENT_CONFIRM,
      cancelText: ev.default.Messages.CANCEL,
      onCancel: () => this.setState({
        showRemoveAttachmentModal: !1,
        attachmentToDelete: null
      }),
      onConfirm: () => {
        let s = t.attachments.filter(e => e.id !== n.id);
        E.default.patchMessageAttachments(e.id, t.id, s), this.setState({
          showRemoveAttachmentModal: !1,
          attachmentToDelete: null
        })
      },
      children: (0, s.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        className: eP.confirmText,
        children: ev.default.Messages.REMOVE_ATTACHMENT_BODY
      })
    })
  }
  renderInteractionPremiumUpsell(e) {
    let t = e.applicationId;
    return e.type !== r.MessageTypes.INTERACTION_PREMIUM_UPSELL || null == t ? null : (0, s.jsx)(eM.default, {
      applicationId: t,
      guildId: this.props.channel.guild_id
    })
  }
  renderEmbeddedApplicationInstanceEmbed(e) {
    let {
      application: t,
      activityInstance: n,
      interaction: l
    } = e;
    return null == t || null == n || (null == l ? void 0 : l.type) !== T.InteractionTypes.APPLICATION_COMMAND ? null : (0, s.jsx)(ep.default, {
      application: t,
      activityInstance: n,
      channelId: this.props.channel.id,
      guildId: this.props.channel.guild_id
    })
  }
  renderMediaPostEmbeds(e) {
    return e.embeds.flatMap(t => t.type !== eR.MessageEmbedTypes.POST_PREVIEW || null == t.url ? [] : (0, s.jsx)(b.default, {
      embedUrl: t.url,
      message: e,
      channel: this.props.channel
    }, t.id))
  }
  renderSafetyPolicyNotice(e) {
    return 1 === e.embeds.length && e.embeds[0].type === eR.MessageEmbedTypes.SAFETY_POLICY_NOTICE ? (0, s.jsx)(H.SafetyPolicyNotice, {
      message: e
    }) : null
  }
  renderSafetySystemNotification(e) {
    return 1 === e.embeds.length && e.embeds[0].type === eR.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION ? (0, s.jsx)(V.SafetySystemNotification, {
      embed: e.embeds[0]
    }) : null
  }
  renderVoiceChannelInvite(e, t) {
    if (1 === e.embeds.length && e.embeds[0].type === eR.MessageEmbedTypes.VOICE_CHANNEL) return (0, s.jsx)(D.VoiceChannelInviteEmbed, {
      message: e,
      channel: t
    })
  }
  renderMediaObscureNotice(e) {
    if (0 === e.attachments.length && 0 === e.embeds.length) return null;
    let {
      obscuredAttachments: t,
      obscuredEmbeds: n
    } = (0, C.getObscuredMediaForMessage)(e);
    return 0 === t.length && 0 === n.length ? null : (0, s.jsx)(M.default, {
      message: e
    })
  }
  renderPoll(e, t) {
    if (null != t) return (0, s.jsx)(B.default, {
      message: e,
      poll: t,
      className: eP.pollContainer
    })
  }
  render() {
    let {
      className: e,
      message: t,
      channel: n,
      poll: l
    } = this.props, {
      showSuppressModal: a,
      showRemoveAttachmentModal: r
    } = this.state, o = this.renderCodedLinks(t), u = this.renderGiftCodes(t), d = this.renderReferralTrial(t), c = this.renderAttachments(t), E = this.renderCtaButton(), f = this.renderSocialProofingFileSizeNitroUpsell(t), _ = this.renderEmbeds(t), T = this.renderActivityInvite(t), I = this.renderReactions(t), m = this.renderPublishBump(t), N = this.renderEphemeralAccessories(t), p = this.renderStickersAccessories(t), S = this.renderThreadAccessories(t), A = this.renderComponentAccessories(t), C = this.renderThreadRoleMentionWarning(t), h = this.renderEmbeddedApplicationInstanceEmbed(t), g = this.renderInteractionPremiumUpsell(t), M = this.renderMediaPostEmbeds(t), O = this.renderSafetyPolicyNotice(t), R = this.renderSafetySystemNotification(t), L = this.renderVoiceChannelInvite(t, n), v = this.renderMediaObscureNotice(t), P = this.renderPoll(t, l);
    return null == o && null == c && null == _ && null == T && null == I && null == u && null == d && null == m && null == N && null == p && null == S && null == A && null == h && null == C && null == M && null == O && null != g && null == P && null == L ? null : (0, s.jsxs)("div", {
      id: (0, eC.getMessageAccessoriesId)(t),
      className: i(e, eP.container),
      children: [C, P, o, u, d, M, c, E, _, v, T, p, A, h, g, f, I, m, N, a && this.renderSuppressConfirmModal(), r && this.renderRemoveAttachmentConfirmModal(), S, O, R, L]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      showSuppressModal: !1,
      showRemoveAttachmentModal: !1,
      attachmentToDelete: null
    }, this.getAcceptInviteContext = e => {
      let {
        channel: t,
        message: n
      } = this.props;
      return {
        location: e,
        location_guild_id: t.getGuildId(),
        location_channel_id: t.id,
        location_channel_type: t.type,
        location_message_id: n.id
      }
    }, this.renderEmbed = (e, t, n, l) => {
      let {
        gifAutoPlay: a,
        inlineEmbedMedia: i,
        canSuppressEmbeds: r,
        hasSpoilerEmbeds: o,
        shouldRedactExplicitContent: u
      } = this.props, d = (0, e_.getObscureReasonForEmbed)(e, l, n, o, u);
      return e.type === eR.MessageEmbedTypes.GIFT ? null : (0, s.jsx)(en.GIFAccessoryContext.Provider, {
        value: eG(e.url, e.image, e.video),
        children: (0, s.jsx)(ee.default, {
          className: eP.embedWrapper,
          embed: e,
          obscureReason: null != d ? d : void 0,
          autoPlayGif: a,
          hideMedia: !i,
          onSuppressEmbed: r ? this.handleEmbedSuppressed : void 0,
          renderTitle: this.renderEmbedTitle,
          renderDescription: this.renderEmbedDescription,
          messageId: n,
          channelId: l,
          ...t
        })
      }, e.id)
    }, this.renderEmbedTitle = (e, t) => e.type === eR.MessageEmbedTypes.RICH ? U.default.parseEmbedTitle(t, !0, {
      channelId: this.props.channel.id
    }) : t, this.renderEmbedDescription = (e, t, n) => e.type === eR.MessageEmbedTypes.RICH ? U.default.parse(t, !0, {
      channelId: this.props.channel.id,
      allowLinks: !0,
      allowEmojiLinks: !0,
      allowList: this.props.showListsAndHeaders,
      allowHeading: !n && this.props.showListsAndHeaders,
      previewLinkTarget: this.props.showMaskedLinks
    }) : t, this.handleEmbedSuppressed = e => {
      let {
        channel: t,
        message: n
      } = this.props;
      e.shiftKey ? E.default.suppressEmbeds(t.id, n.id) : this.setState({
        showSuppressModal: !0
      })
    }, this.handleRemoveAttachment = e => {
      this.setState({
        showRemoveAttachmentModal: !0,
        attachmentToDelete: e
      })
    }
  }
}

function eF(e) {
  var t, n, l;
  let {
    channel: a,
    message: i,
    renderSuppressEmbeds: r
  } = e, u = (0, o.useStateFromStores)([Z.default], () => Z.default.getId()), d = Q.InlineAttachmentMedia.useSetting(), c = Q.InlineEmbedMedia.useSetting(), E = Q.RenderEmbeds.useSetting(), f = E && !(0, eI.default)(e.message), _ = Q.RenderReactions.useSetting(), T = Q.GifAutoPlay.useSetting(), I = (0, o.useStateFromStores)([X.default], () => null == a.guild_id || X.default.canChatInGuild(a.guild_id), [a]), m = (0, o.useStateFromStores)([y.default], () => null != a.guild_id && y.default.isLurking(a.guild_id), [a]), p = (0, o.useStateFromStores)([J.default], () => J.default.isCurrentUserGuest(a.guild_id), [a]), S = (0, o.useStateFromStores)([J.default, $.default], () => {
    var e, t;
    let n = $.default.getCurrentUser();
    return null !== (t = null != a.guild_id && null != n ? null === (e = J.default.getMember(a.guild_id, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
  }), {
    canAddNewReactions: A,
    canManageMessages: C
  } = (0, o.useStateFromStoresObject)([q.default], () => ({
    canAddNewReactions: I && q.default.can(eR.Permissions.ADD_REACTIONS, a),
    canManageMessages: q.default.can(eR.Permissions.MANAGE_MESSAGES, a)
  }), [I, a]), [, M] = (0, R.useCurrentUserCommunicationDisabled)(a.guild_id), O = (0, K.useIsActiveChannelOrUnarchivableThread)(a), L = (u === i.author.id || C) && i.author.id !== eR.LOCAL_BOT_ID && !1 !== r && !(0, ed.hasFlag)(i.flags, eR.MessageFlags.EPHEMERAL) && O, v = u === i.author.id && O, P = i.author.id === u, D = i.isFirstMessageInForumPost(a), x = (0, em.default)({
    channel: a,
    canChat: I,
    renderReactions: _,
    canAddNewReactions: A,
    isLurking: m,
    isGuest: p,
    communicationDisabled: M,
    isActiveChannelOrUnarchivableThread: O
  }), U = (0, N.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()), b = (0, N.useShowImprovedMarkdownGuildExperimentConfig)(null !== (n = a.guild_id) && void 0 !== n ? n : "", (null !== (l = i.editedTimestamp) && void 0 !== l ? l : i.timestamp).valueOf()), B = (0, j.default)(null == a ? void 0 : a.id), k = (0, G.default)(i), F = (0, h.useShouldRedactExplicitContent)(a.id, i.author.id), w = (0, g.useShouldRenderReportFalsePositiveButton)(i.id, eb);
  return (0, s.jsx)(ek, {
    canSuppressEmbeds: L,
    canDeleteAttachments: v,
    ...x,
    disableReactionReads: !!D || x.disableReactionReads,
    ...e,
    isLurking: m && I,
    isGuest: p && I,
    isPendingMember: S && I,
    isCurrentUser: P,
    inlineAttachmentMedia: d,
    inlineEmbedMedia: c,
    renderEmbeds: f,
    gifAutoPlay: T,
    canRenderReferralEmbed: a.isDM(),
    poll: k,
    showListsAndHeaders: U.showListsAndHeaders || b.showListsAndHeaders,
    showMaskedLinks: U.showMaskedLinks || b.showMaskedLinks,
    shouldHideMediaOptions: B,
    shouldRedactExplicitContent: F,
    shouldRenderCtaButton: w
  })
}
ek.defaultProps = {
  renderEmbeds: !0,
  compact: !1
};
let ew = e => {
  var t, n, l;
  let {
    message: a,
    channel: i,
    disableReactionReads: r = !1,
    renderComponentAccessory: o = !1,
    renderThreadAccessory: u = !1,
    disableReactionCreates: d = !0,
    disableReactionUpdates: c = !0,
    ...E
  } = e, f = Q.InlineAttachmentMedia.useSetting(), _ = Q.InlineEmbedMedia.useSetting(), T = Q.RenderEmbeds.useSetting(), I = Q.GifAutoPlay.useSetting(), m = (0, N.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = a.editedTimestamp) && void 0 !== t ? t : a.timestamp).valueOf()), p = (0, N.useShowImprovedMarkdownGuildExperimentConfig)(null !== (n = i.guild_id) && void 0 !== n ? n : "", (null !== (l = a.editedTimestamp) && void 0 !== l ? l : a.timestamp).valueOf()), S = (0, j.default)(null == i ? void 0 : i.id), A = (0, h.useShouldRedactExplicitContent)(i.id, a.author.id), C = (0, g.useShouldRenderReportFalsePositiveButton)(a.id, eb), M = (0, G.default)(a);
  return (0, s.jsx)(ek, {
    ...E,
    message: a,
    channel: i,
    disableReactionReads: r,
    disableReactionCreates: d,
    disableReactionUpdates: c,
    canSuppressEmbeds: !1,
    canDeleteAttachments: !1,
    renderComponentAccessory: o,
    renderThreadAccessory: u,
    inlineAttachmentMedia: f,
    inlineEmbedMedia: _,
    renderEmbeds: T,
    gifAutoPlay: I,
    poll: M,
    showListsAndHeaders: m.showListsAndHeaders || p.showListsAndHeaders,
    showMaskedLinks: m.showMaskedLinks || p.showMaskedLinks,
    shouldHideMediaOptions: S,
    shouldRedactExplicitContent: A,
    shouldRenderCtaButton: C
  })
}