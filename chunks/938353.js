n.d(t, {
  $p: function() {
    return e7
  },
  BB: function() {
    return e0
  },
  ZP: function() {
    return e1
  }
}), n(47120), n(789020), n(411104), n(390547);
var s, i = n(735250),
  l = n(470079),
  a = n(120356),
  r = n.n(a),
  o = n(275726),
  c = n(442837),
  u = n(377108),
  d = n(902704),
  E = n(481060),
  _ = n(904245),
  I = n(637374),
  T = n(626799),
  m = n(911969),
  N = n(624367),
  h = n(433074),
  C = n(421474),
  S = n(603270),
  A = n(222709),
  g = n(960904),
  p = n(161314),
  f = n(163268),
  R = n(25610),
  O = n(703751),
  M = n(761538),
  x = n(674611),
  v = n(346610),
  L = n(868643),
  Z = n(394779),
  P = n(294734),
  D = n(426275),
  j = n(715903),
  U = n(71619),
  b = n(637618),
  y = n(225890),
  B = n(364097),
  k = n(495129),
  G = n(954654),
  F = n(41776),
  V = n(628238),
  w = n(454585),
  H = n(768494),
  Y = n(976853),
  W = n(346013),
  K = n(977683),
  z = n(128435),
  Q = n(98278),
  X = n(614825),
  q = n(265299),
  J = n(699833),
  $ = n(344997),
  ee = n(378233),
  et = n(374425),
  en = n(665906),
  es = n(432147),
  ei = n(695346),
  el = n(314897),
  ea = n(271383),
  er = n(607744),
  eo = n(496675),
  ec = n(594174),
  eu = n(529815),
  ed = n(261922),
  eE = n(941797),
  e_ = n(52824),
  eI = n(727779),
  eT = n(310043),
  em = n(69750),
  eN = n(592256),
  eh = n(626135),
  eC = n(70956),
  eS = n(408433),
  eA = n(630388),
  eg = n(823379),
  ep = n(709054),
  ef = n(591759),
  eR = n(169525),
  eO = n(161010),
  eM = n(461157),
  ex = n(901461),
  ev = n(432376),
  eL = n(384203),
  eZ = n(633957),
  eP = n(29909),
  eD = n(782658),
  ej = n(219797),
  eU = n(453687),
  eb = n(128854),
  ey = n(101578),
  eB = n(524444),
  ek = n(319323),
  eG = n(920888),
  eF = n(817384),
  eV = n(981631),
  ew = n(474936),
  eH = n(689938),
  eY = n(105461),
  eW = n(928959),
  eK = n(680674);

function ez(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function eQ() {
  return (0, i.jsxs)("div", {
    className: eW.nitroFileSizeUpsell,
    children: [(0, i.jsx)("img", {
      src: eK,
      className: eW.nitroBadgeSvg,
      alt: ""
    }), (0, i.jsx)(E.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: eH.Z.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({
        onClick: () => (0, Q.z)()
      })
    })]
  })
}
let eX = 15 * eC.Z.Millis.MINUTE,
  eq = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
  eJ = (e, t, n) => () => {
    let s = null != t ? t : n;
    if (null == s) return null;
    let {
      url: l,
      proxyURL: a,
      width: r,
      height: o
    } = s;
    return (0, i.jsx)(eP.Z, {
      width: r,
      height: o,
      src: null != a && "" !== a ? a : l,
      url: null != e && "" !== e ? e : null != a && "" !== a ? a : l,
      format: null != n ? u.EO.VIDEO : u.EO.IMAGE,
      className: eW.gifFavoriteButton
    })
  },
  e$ = e => () => {
    let {
      url: t,
      proxyUrl: n,
      width: s,
      height: l
    } = e;
    return null != s && null != l && ed.u.test(n) ? (0, i.jsx)(eP.Z, {
      width: s,
      height: l,
      src: n,
      url: t,
      format: u.EO.IMAGE,
      className: eW.gifFavoriteButton
    }) : null
  };
class e0 extends(s = l.Component) {
  shouldRenderInvite(e) {
    let {
      channel: t
    } = this.props;
    return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && eq.has(e))
  }
  shouldComponentUpdate(e, t) {
    var n, s;
    let {
      channel: i,
      message: l,
      poll: a
    } = this.props, {
      channel: r,
      message: o,
      poll: c
    } = e;
    return !(0, d.Z)(this.state, t) || !(0, d.Z)(this.props, e, ["message", "channel"]) || i.type !== r.type || c !== a || o.codedLinks !== l.codedLinks || o.flags !== l.flags || o.giftCodes !== l.giftCodes || o.attachments !== l.attachments || o.embeds !== l.embeds || o.components !== l.components || o.activity !== l.activity || (n = o.reactions, n !== (s = l.reactions) && (n.length !== s.length || !!n.some((e, t) => {
      let {
        emoji: n,
        count: i,
        burst_count: l
      } = e, {
        emoji: a,
        count: r,
        burst_count: o
      } = s[t];
      return l !== o || i !== r || n.id !== a.id || n.name !== a.name
    })))
  }
  renderCtaButton() {
    let {
      message: e,
      channel: t,
      shouldRenderCtaButton: n
    } = this.props;
    return n ? (0, i.jsx)("div", {
      className: eW.ctaButtonContainer,
      children: (0, i.jsx)(x.Z, {
        messageId: e.id,
        channelId: t.id
      })
    }) : null
  }
  renderSocialProofingFileSizeNitroUpsell(e) {
    let t = e.attachments.some(e => e.size > ew.Lw);
    return (0, eO.M)("attachment") && t ? (0, i.jsx)(eQ, {}) : null
  }
  renderCodedLinks(e) {
    return 0 === e.codedLinks.length ? null : e.codedLinks.map(t => {
      let {
        type: n,
        code: s
      } = t;
      if (n === g.g.INVITE) return this.shouldRenderInvite(s) ? (0, i.jsx)(eD.Z, {
        code: s,
        author: e.author,
        getAcceptInviteContext: this.getAcceptInviteContext
      }, s) : null;
      if (n === g.g.TEMPLATE) return (0, i.jsx)(B.Z, {
        code: s
      }, s);
      if (n === g.g.EVENT) return (0, i.jsx)(y.Z, {
        code: s
      }, s);
      else if (n === g.g.CHANNEL_LINK) return (0, i.jsx)(eL.Z, {
        code: s,
        messageData: e
      }, s);
      else if (n === g.g.APP_DIRECTORY_PROFILE) return (0, i.jsx)(h.Z, {
        code: s,
        message: e
      }, s);
      else if (n === g.g.ACTIVITY_BOOKMARK) return (0, i.jsx)(N.Z, {
        applicationId: s,
        message: e
      }, s);
      else if (n === g.g.GUILD_PRODUCT) return (0, i.jsx)(b.Z, {
        code: s
      }, s);
      else if (n === g.g.SERVER_SHOP) return (0, i.jsx)(p.Z, {
        guildId: s
      }, s);
      else if (n === g.g.QUESTS_EMBED) return (0, i.jsx)(q.Z, {
        questId: s
      }, s);
      else if (n === g.g.APP_DIRECTORY_STOREFRONT) return (0, i.jsx)(S.P, {
        appId: s,
        message: e
      }, s);
      else if (n === g.g.APP_DIRECTORY_STOREFRONT_SKU) {
        let t = (0, C.Q)(s);
        return null == t ? null : (0, i.jsx)(S.F, {
          skuId: t.skuId,
          message: e
        }, s)
      } else throw Error("Unknown coded link type: ".concat(n))
    })
  }
  renderGiftCodes(e) {
    let {
      giftCodes: t,
      author: n,
      channel_id: s,
      type: l,
      content: a,
      giftInfo: r
    } = e, o = ec.default.getCurrentUser();
    return null != o && t.length > 0 ? t.map(e => (0, i.jsx)("div", {
      className: eW.giftCodeContainer,
      children: (0, i.jsx)(I.Z, {
        code: e,
        author: n,
        channelId: s,
        currentUser: o,
        type: l,
        content: a,
        giftInfo: r
      })
    }, e)) : null
  }
  renderReferralTrial(e) {
    let {
      referralTrialOfferId: t,
      type: n
    } = e, {
      canRenderReferralEmbed: s
    } = this.props;
    return n !== o.u.PREMIUM_REFERRAL || null == t ? null : (0, i.jsx)("div", {
      className: eW.referralContainer,
      children: (0, i.jsx)(X.Z, {
        userTrialOfferId: t,
        canRenderReferralEmbed: null != s && s
      })
    }, t)
  }
  renderReactions(e) {
    let {
      disableReactionCreates: t,
      disableReactionReads: n,
      disableReactionUpdates: s,
      isLurking: l,
      isGuest: a,
      isPendingMember: r,
      channel: o,
      forceAddReactions: c
    } = this.props;
    return n ? null : (0, i.jsx)(eG.Z, {
      message: e,
      channel: o,
      disableReactionCreates: t,
      disableReactionUpdates: s,
      isLurking: l,
      isGuest: a,
      isPendingMember: r,
      forceAddReactions: c,
      useChatFontScaling: !0
    })
  }
  renderAttachments(e) {
    let {
      attachments: t,
      flags: n
    } = e, {
      channel: s,
      shouldRedactExplicitContent: l,
      hasInlineForwardButton: a
    } = this.props;
    if (0 === t.length || e.isPoll() || e.isUIKitComponents()) return null;
    let r = t.filter(e => null == e.flags || !(0, eA.yE)(e.flags, eV.J0y.IS_THUMBNAIL));
    if (0 === r.length) return null;
    let {
      gifAutoPlay: o,
      canDeleteAttachments: c,
      inlineAttachmentMedia: u,
      onMediaItemContextMenu: d,
      shouldHideMediaOptions: E
    } = this.props, _ = r.map(t => (0, eN.j9)(t, (0, Z.s)(e, {
      type: "attachment",
      attachmentId: t.id
    }), E, l)).filter(eg.lm), I = {
      source: "Media Mosaic",
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    }, T = _.length > 1 ? (0, eN.Cx)(_, I) : {}, m = (0, eA.yE)(n, eV.iLy.IS_VOICE_MESSAGE);

    function N(e, t) {
      return (0, eR.dn)(e.originalItem, t)
    }
    let h = r.map(t => {
        let n = (0, H.VY)(t),
          i = {
            message: e,
            item: (0, em.OB)(t, u),
            autoPlayGif: o,
            canRemoveItem: c && (r.length > 1 || "" !== e.content),
            onRemoveItem: this.handleRemoveAttachment,
            className: eW.embedWrapper,
            getObscureReason: N,
            onContextMenu: null != d ? e => {
              e.stopPropagation(), e.preventDefault(), d(e, n)
            } : void 0,
            renderAudioComponent: m ? ej.jY : ej.q7,
            renderImageComponent: ej.dS,
            renderVideoComponent: ej.vZ,
            renderPlaintextFilePreview: ej.d4,
            renderGenericFileComponent: ej.ZK,
            renderMosaicItemFooter: ej.L9,
            onPlay: (e, n, i) => {
              eh.default.track(eV.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                guild_id: s.guild_id,
                channel_id: s.id,
                channel_type: s.type,
                type: t.content_type,
                flags: t.flags,
                size: t.size,
                duration: i
              })
            },
            gifFavoriteButton: e$(n)
          },
          l = (0, e_.q)({
            proxyURL: t.proxy_url,
            url: t.url
          });
        return l in T && (i.onClick = T[l]), i
      }),
      C = a ? (0, i.jsx)(D.Z, {
        className: eY.hideIfMessageNotFocused,
        messageId: e.id,
        channelId: s.id,
        targetKind: "media"
      }) : void 0;
    return (0, i.jsx)(eT.Z, {
      items: h,
      inlineForwardButton: C
    })
  }
  renderEmbeds(e) {
    let {
      renderEmbeds: t
    } = this.props;
    return 0 !== e.embeds.length && t ? e.embeds.map((t, n) => {
      if (eF.b.has(t.type) || (0, eS.l3)(t)) return null;
      let s = {
        renderImageComponent: eB.Yi,
        renderVideoComponent: eB.lV,
        renderLinkComponent: eB.iT,
        renderForwardComponent: (0, Z.s)(e, {
          type: "embed",
          embedIndex: n
        })
      };
      if (t.type === eV.hBH.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && "Discord" === t.provider.name) {
        let l = ef.Z.safeParseWithQuery(t.url);
        if (null != l && null != l.pathname) {
          let a = l.pathname.split("/")[3];
          if (null != a) return (0, i.jsx)(T.Z, {
            skuId: a,
            renderFallback: () => this.renderEmbed(t, n, s, e.id, e.channel_id)
          }, t.id)
        }
      }
      return this.renderEmbed(t, n, s, e.id, e.channel_id)
    }) : null
  }
  renderComponentAccessories(e) {
    if (0 === e.components.length || !1 === this.props.renderComponentAccessory) return null;
    let {
      gifAutoPlay: t,
      shouldRedactExplicitContent: n,
      shouldHideMediaOptions: s,
      onMediaItemContextMenu: l
    } = this.props;
    return (0, i.jsx)(eb.F, {
      gifAutoPlay: t,
      getGifFavButton: e$,
      getOnMediaItemContextMenu: null == l ? void 0 : e => t => {
        t.stopPropagation(), t.preventDefault(), null == l || l(t, e)
      },
      shouldHideMediaOptions: s,
      shouldRedactExplicitContent: n,
      children: (0, i.jsx)(G.ZP, {
        message: e
      })
    })
  }
  renderActivityInvite(e) {
    if (null == e.activity) return null;
    let {
      channel: t
    } = this.props;
    return (0, i.jsx)(ey.Z, {
      channel: t,
      message: e,
      hideParty: !1
    })
  }
  renderPublishBump(e) {
    return this.props.channel.type !== eV.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot ? null : (0, i.jsx)(A.Z, {
      channelId: e.channel_id,
      messageId: e.id
    })
  }
  renderEphemeralAccessories(e) {
    return (0, eA.yE)(e.flags, eV.iLy.EPHEMERAL) ? (0, i.jsx)(eI.Z, {
      message: e,
      onDeleteMessage: () => {
        _.Z.dismissAutomatedMessage(e)
      }
    }) : null
  }
  renderStickersAccessories(e) {
    let t = (0, ee.cv)(e),
      {
        channel: n,
        isInteracting: s
      } = this.props;
    return 0 === t.length ? null : t.map(e => (0, i.jsx)(et.Z, {
      channel: n,
      isInteracting: s,
      renderableSticker: e
    }, e.id))
  }
  renderThreadAccessories(e) {
    if (e.hasFlag(eV.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory) return (0, i.jsx)(es.Z, {
      message: e,
      compact: this.props.compact
    })
  }
  renderThreadRoleMentionWarning(e) {
    if (!!e.hasFlag(eV.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
      if (!(Date.now() - ep.default.extractTimestamp(e.id) >= eX)) return (0, i.jsx)("div", {
        className: eW.threadRoleMentionFailure,
        children: eH.Z.Messages.THREAD_ROLE_MENTION_FAILURE
      })
    }
  }
  renderSuppressConfirmModal() {
    let {
      channel: e,
      message: t
    } = this.props;
    return (0, i.jsxs)(E.DeclarativeConfirmModal, {
      dismissable: !0,
      header: eH.Z.Messages.SUPPRESS_EMBED_TITLE,
      confirmText: eH.Z.Messages.SUPPRESS_EMBED_CONFIRM,
      cancelText: eH.Z.Messages.CANCEL,
      onCancel: () => this.setState({
        showSuppressModal: !1
      }),
      onConfirm: () => {
        _.Z.suppressEmbeds(e.id, t.id), this.setState({
          showSuppressModal: !1
        })
      },
      children: [(0, i.jsx)(E.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        className: eW.confirmText,
        children: eH.Z.Messages.SUPPRESS_EMBED_BODY
      }), (0, i.jsx)(E.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: eH.Z.Messages.SUPPRESS_EMBED_TIP
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
    return (0, i.jsx)(E.DeclarativeConfirmModal, {
      dismissable: !0,
      header: eH.Z.Messages.REMOVE_ATTACHMENT_TITLE,
      confirmText: eH.Z.Messages.REMOVE_ATTACHMENT_CONFIRM,
      cancelText: eH.Z.Messages.CANCEL,
      onCancel: () => this.setState({
        showRemoveAttachmentModal: !1,
        attachmentToDelete: null
      }),
      onConfirm: () => {
        let s = t.attachments.filter(e => e.id !== n.id);
        _.Z.patchMessageAttachments(e.id, t.id, s), this.setState({
          showRemoveAttachmentModal: !1,
          attachmentToDelete: null
        })
      },
      children: (0, i.jsx)(E.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        className: eW.confirmText,
        children: eH.Z.Messages.REMOVE_ATTACHMENT_BODY
      })
    })
  }
  renderInteractionPremiumUpsell(e) {
    let t = e.applicationId;
    return e.type !== o.u.INTERACTION_PREMIUM_UPSELL || null == t ? null : (0, i.jsx)(ek.Z, {
      applicationId: t,
      guildId: this.props.channel.guild_id
    })
  }
  renderEmbeddedApplicationInstanceEmbed(e) {
    let {
      application: t,
      activityInstance: n,
      interaction: s
    } = e;
    return null == t || null == n || (null == s ? void 0 : s.type) !== m.B8.APPLICATION_COMMAND ? null : (0, i.jsx)(eZ.Z, {
      application: t,
      channelId: this.props.channel.id,
      guildId: this.props.channel.guild_id
    })
  }
  renderMediaPostEmbeds(e) {
    return e.embeds.flatMap(t => t.type !== eV.hBH.POST_PREVIEW || null == t.url ? [] : (0, i.jsx)(W.Z, {
      embedUrl: t.url,
      message: e,
      channel: this.props.channel
    }, t.id))
  }
  renderSafetyPolicyNotice(e) {
    return 1 === e.embeds.length && e.embeds[0].type === eV.hBH.SAFETY_POLICY_NOTICE ? (0, i.jsx)(J.i, {
      message: e
    }) : null
  }
  renderSafetySystemNotification(e) {
    return 1 === e.embeds.length && e.embeds[0].type === eV.hBH.SAFETY_SYSTEM_NOTIFICATION ? (0, i.jsx)($.g, {
      embed: e.embeds[0]
    }) : null
  }
  renderVoiceChannelInvite(e, t) {
    if (1 === e.embeds.length && e.embeds[0].type === eV.hBH.VOICE_CHANNEL) return (0, i.jsx)(k.H, {
      message: e,
      channel: t
    })
  }
  renderMediaObscureNotice(e) {
    if (0 === e.attachments.length && 0 === e.embeds.length) return null;
    let {
      obscuredAttachments: t,
      obscuredEmbeds: n
    } = (0, f.Tw)(e);
    return 0 === t.length && 0 === n.length ? null : (0, i.jsx)(M.Z, {
      message: e
    })
  }
  renderPoll(e, t) {
    if (null != t) return (0, i.jsx)(z.Z, {
      message: e,
      poll: t,
      className: eW.pollContainer
    })
  }
  renderForwardedMessage(e) {
    return 0 === e.messageSnapshots.length ? null : (0, i.jsx)(P.Z, {
      message: e
    })
  }
  render() {
    let {
      className: e,
      message: t,
      channel: n,
      poll: s
    } = this.props, {
      showSuppressModal: l,
      showRemoveAttachmentModal: a
    } = this.state, o = this.renderCodedLinks(t), c = this.renderGiftCodes(t), u = this.renderReferralTrial(t), d = this.renderAttachments(t), E = this.renderCtaButton(), _ = this.renderSocialProofingFileSizeNitroUpsell(t), I = this.renderEmbeds(t), T = this.renderActivityInvite(t), m = this.renderReactions(t), N = this.renderPublishBump(t), h = this.renderEphemeralAccessories(t), C = this.renderStickersAccessories(t), S = this.renderThreadAccessories(t), A = this.renderComponentAccessories(t), g = this.renderThreadRoleMentionWarning(t), p = this.renderEmbeddedApplicationInstanceEmbed(t), f = this.renderInteractionPremiumUpsell(t), R = this.renderMediaPostEmbeds(t), O = this.renderSafetyPolicyNotice(t), M = this.renderSafetySystemNotification(t), x = this.renderVoiceChannelInvite(t, n), v = this.renderMediaObscureNotice(t), L = this.renderPoll(t, s), Z = this.renderForwardedMessage(t);
    return null == o && null == d && null == I && null == T && null == m && null == c && null == u && null == N && null == h && null == C && null == S && null == A && null == p && null == g && null == R && null == O && null != f && null == L && null == x && null == Z ? null : (0, i.jsxs)("div", {
      id: (0, eU.bX)(t),
      className: r()(e, eW.container),
      children: [Z, g, L, o, c, u, R, d, E, I, v, T, C, A, p, f, _, m, N, h, l && this.renderSuppressConfirmModal(), a && this.renderRemoveAttachmentConfirmModal(), S, O, M, x]
    })
  }
  constructor(...e) {
    super(...e), ez(this, "state", {
      showSuppressModal: !1,
      showRemoveAttachmentModal: !1,
      attachmentToDelete: null
    }), ez(this, "getAcceptInviteContext", e => {
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
    }), ez(this, "renderEmbed", (e, t, n, s, l) => {
      let {
        gifAutoPlay: a,
        inlineEmbedMedia: r,
        canSuppressEmbeds: o,
        hasSpoilerEmbeds: c,
        shouldRedactExplicitContent: u,
        hasInlineForwardButton: d
      } = this.props, E = (0, eR.BP)(e, l, s, c, u);
      if (e.type === eV.hBH.GIFT) return null;
      let _ = (0, i.jsx)(eE.h.Provider, {
        value: eJ(e.url, e.image, e.video),
        children: (0, i.jsx)(eu.ZP, {
          className: eW.embedWrapper,
          embed: e,
          obscureReason: null != E ? E : void 0,
          autoPlayGif: a,
          hideMedia: !r,
          onSuppressEmbed: o ? this.handleEmbedSuppressed : void 0,
          renderTitle: this.renderEmbedTitle,
          renderDescription: this.renderEmbedDescription,
          messageId: s,
          channelId: l,
          ...n
        })
      }, e.id);
      return d ? (0, i.jsxs)("div", {
        className: eW.embedContainer,
        children: [_, (0, i.jsx)(D.Z, {
          className: eY.hideIfMessageNotFocused,
          messageId: s,
          channelId: l,
          targetKind: "embed",
          embedIndex: t
        })]
      }) : _
    }), ez(this, "renderEmbedTitle", (e, t) => e.type === eV.hBH.RICH ? w.Z.parseEmbedTitle(t, !0, {
      channelId: this.props.channel.id
    }) : t), ez(this, "renderEmbedDescription", (e, t, n) => e.type === eV.hBH.RICH ? w.Z.parse(t, !0, {
      channelId: this.props.channel.id,
      allowLinks: !0,
      allowEmojiLinks: !0,
      allowList: this.props.showListsAndHeaders,
      allowHeading: !n && this.props.showListsAndHeaders,
      previewLinkTarget: this.props.showMaskedLinks
    }) : t), ez(this, "handleEmbedSuppressed", e => {
      let {
        channel: t,
        message: n
      } = this.props;
      e.shiftKey ? _.Z.suppressEmbeds(t.id, n.id) : this.setState({
        showSuppressModal: !0
      })
    }), ez(this, "handleRemoveAttachment", e => {
      let t = e.originalItem;
      this.setState({
        showRemoveAttachmentModal: !0,
        attachmentToDelete: t
      })
    })
  }
}

function e1(e) {
  var t;
  let {
    channel: n,
    message: s,
    renderSuppressEmbeds: l,
    isMessageSnapshot: a
  } = e, r = (0, c.e7)([el.default], () => el.default.getId()), o = ei.x4.useSetting(), u = ei.RS.useSetting(), d = ei.NA.useSetting() && !(0, ex.Z)(e.message), E = ei.nc.useSetting(), _ = ei.QK.useSetting(), I = (0, c.e7)([er.Z], () => null == n.guild_id || er.Z.canChatInGuild(n.guild_id), [n]), T = (0, c.e7)([F.Z], () => null != n.guild_id && F.Z.isLurking(n.guild_id), [n]), m = (0, c.e7)([ea.ZP], () => ea.ZP.isCurrentUserGuest(n.guild_id), [n]), N = (0, c.e7)([ea.ZP, ec.default], () => {
    var e, t;
    let s = ec.default.getCurrentUser();
    return null !== (t = null != n.guild_id && null != s ? null === (e = ea.ZP.getMember(n.guild_id, s.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
  }), {
    canAddNewReactions: h,
    canManageMessages: C
  } = (0, c.cj)([eo.Z], () => ({
    canAddNewReactions: I && eo.Z.can(eV.Plq.ADD_REACTIONS, n),
    canManageMessages: eo.Z.can(eV.Plq.MANAGE_MESSAGES, n)
  }), [I, n]), S = (0, j.ux)(n.guild_id), [, A] = (0, U.AB)(n.guild_id), g = (0, en.$R)(n), p = (r === s.author.id || C) && s.author.id !== eV.LAt && !1 !== l && !(0, eA.yE)(s.flags, eV.iLy.EPHEMERAL) && g && 1 === (0, eM.Z)(s), f = r === s.author.id && g && !a, M = s.author.id === r, x = s.isFirstMessageInForumPost(n), Z = (0, ev.Z)({
    channel: n,
    canChat: I,
    renderReactions: E,
    canAddNewReactions: h,
    isLurking: T,
    isGuest: m,
    communicationDisabled: A,
    isActiveChannelOrUnarchivableThread: g,
    isAutomodQuarantined: S
  }), P = (0, V.A)((null !== (t = s.editedTimestamp) && void 0 !== t ? t : s.timestamp).valueOf()), D = (0, Y.Z)(null == n ? void 0 : n.id), b = (0, K.Z)(s), y = (0, R.V)(n.id, s.author.id), B = (0, O.r)(s.id), {
    hasInlineForwardButton: k
  } = v.w.useExperiment({
    location: "MessageAccessories"
  }), G = (0, L.a)(s) && k;
  return (0, i.jsx)(e0, {
    canSuppressEmbeds: p,
    canDeleteAttachments: f,
    ...Z,
    disableReactionReads: !!x || Z.disableReactionReads,
    ...e,
    isLurking: T && I,
    isGuest: m && I,
    isPendingMember: N && I,
    isCurrentUser: M,
    inlineAttachmentMedia: o,
    inlineEmbedMedia: u,
    renderEmbeds: d,
    gifAutoPlay: _,
    canRenderReferralEmbed: n.isDM(),
    poll: b,
    showListsAndHeaders: P,
    showMaskedLinks: P,
    shouldHideMediaOptions: D,
    shouldRedactExplicitContent: y,
    shouldRenderCtaButton: B,
    hasInlineForwardButton: G
  })
}
ez(e0, "defaultProps", {
  renderEmbeds: !0,
  compact: !1
});
let e7 = e => {
  var t;
  let {
    message: n,
    channel: s,
    disableReactionReads: l = !1,
    renderComponentAccessory: a = !1,
    renderThreadAccessory: r = !1,
    disableReactionCreates: o = !0,
    disableReactionUpdates: c = !0,
    ...u
  } = e, d = ei.x4.useSetting(), E = ei.RS.useSetting(), _ = ei.NA.useSetting(), I = ei.QK.useSetting(), T = (0, V.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), m = (0, Y.Z)(null == s ? void 0 : s.id), N = (0, R.V)(s.id, n.author.id), h = (0, O.r)(n.id), C = (0, K.Z)(n);
  return (0, i.jsx)(e0, {
    ...u,
    message: n,
    channel: s,
    disableReactionReads: l,
    disableReactionCreates: o,
    disableReactionUpdates: c,
    canSuppressEmbeds: !1,
    canDeleteAttachments: !1,
    renderComponentAccessory: a,
    renderThreadAccessory: r,
    inlineAttachmentMedia: d,
    inlineEmbedMedia: E,
    renderEmbeds: _,
    gifAutoPlay: I,
    poll: C,
    showListsAndHeaders: T,
    showMaskedLinks: T,
    shouldHideMediaOptions: m,
    shouldRedactExplicitContent: N,
    shouldRenderCtaButton: h,
    hasInlineForwardButton: !1
  })
}