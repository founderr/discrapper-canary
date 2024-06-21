n.d(t, {
  Ll: function() {
    return eh
  },
  St: function() {
    return es
  },
  WT: function() {
    return ea
  },
  jL: function() {
    return ed
  },
  wG: function() {
    return eu
  },
  yR: function() {
    return en
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(512722),
  o = n.n(r);
n(699581);
var c = n(442837),
  u = n(704215),
  d = n(692547),
  h = n(481060),
  m = n(493683),
  p = n(475179),
  E = n(287734),
  g = n(872810),
  f = n(607070),
  C = n(220779),
  _ = n(201133),
  I = n(605236),
  x = n(543241),
  T = n(318374),
  N = n(258609),
  Z = n(774073),
  S = n(382182),
  v = n(871118),
  A = n(359110),
  M = n(171368),
  R = n(12168),
  j = n(592125),
  L = n(430824),
  O = n(496675),
  P = n(699516),
  y = n(9156),
  b = n(979651),
  D = n(938475),
  U = n(346656),
  k = n(409216),
  w = n(368666),
  H = n(626135),
  B = n(768581),
  G = n(5192),
  V = n(26033),
  F = n(192918),
  z = n(22211),
  W = n(571243),
  Y = n(69259),
  K = n(206295),
  q = n(111386),
  X = n(43205),
  Q = n(469153),
  J = n(206583),
  $ = n(981631),
  ee = n(689938),
  et = n(208899);

function en(e) {
  let {
    children: t
  } = e, n = i.useRef(null);
  return (0, h.useFocusLock)(n), (0, l.jsx)("div", {
    className: et.popout,
    ref: n,
    children: t
  })
}

function el(e) {
  let {
    children: t,
    backgroundImgSrc: n,
    className: i,
    style: s = {}
  } = e, {
    primaryColor: r,
    secondaryColor: o
  } = (0, K.Z)(n);
  return (0, l.jsx)("div", {
    "data-disable-adaptive-theme": !0,
    className: a()(et.hero, "theme-".concat($.BRd.DARK), i),
    style: {
      background: "linear-gradient(45deg, ".concat(r, ", ").concat(o, ")"),
      ...s
    },
    children: t
  })
}
let ei = i.createContext(null);

function es(e) {
  let {
    children: t
  } = e, n = i.useRef(null);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: et.interactionsContainerHeader,
      ref: e => n.current = e
    }), (0, l.jsx)("div", {
      className: et.interactionsContainer,
      children: (0, l.jsx)(ei.Provider, {
        value: n.current,
        children: t
      })
    })]
  })
}

function ea(e) {
  let {
    channel: t,
    user: n,
    generateReactionImage: s,
    reactionImageAltText: a,
    closePopout: r,
    entry: E,
    requestId: g,
    buttons: f = [],
    header: x
  } = e, [T, N] = i.useState(!1), [Z, S] = i.useState(null), v = (0, c.e7)([O.Z], () => O.Z.can($.Plq.SEND_MESSAGES, t)), M = (0, W.a)({
    location: "PopoutReactor"
  }), [R, b] = i.useState(!1), [w, B] = i.useState(!1), {
    voiceBar: V,
    joinVoiceButton: F
  } = function(e) {
    let {
      channel: t,
      entry: n,
      requestId: s
    } = e, {
      streamPreviewUrl: a,
      channel: r
    } = (0, z.Z)(n), o = (0, c.e7)([L.Z], () => null != r ? L.Z.getGuild(r.guild_id) : void 0), u = (0, c.Wu)([D.ZP], () => null != r ? D.ZP.getVoiceStatesForChannel(r) : [], [r]), m = i.useMemo(() => {
      for (let e of u) {
        let t = j.Z.getDMFromUserId(e.user.id),
          n = null != t && y.ZP.isChannelMuted(null, t),
          l = P.Z.isBlocked(e.user.id);
        if (n || l) return !0
      }
      return !1
    }, [u]);
    if (null == r || null == o) return {
      voiceBar: void 0,
      joinVoiceButton: void 0
    };
    let E = null != a,
      g = () => {
        p.Z.updateChatOpen(r.id, !0), (0, A.Kh)(r.id), (0, Y.L)(J.xP.VOICE_CHANNEL_PREVIEWED, {
          entry: n,
          channelId: t.id,
          guildId: t.guild_id,
          requestId: s,
          destinationChannelId: r.id,
          destinationGuildId: r.guild_id
        })
      },
      f = m ? ee.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING : ee.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
      C = e => {
        let {
          children: t
        } = e;
        return (0, l.jsx)(h.Tooltip, {
          "aria-label": f,
          text: (0, l.jsxs)(l.Fragment, {
            children: [m && (0, l.jsx)(h.WarningIcon, {
              size: "custom",
              width: 13,
              height: 13,
              className: et.popoutBlockedWarningIcon
            }), f]
          }),
          shouldShow: !0,
          children: t
        }, "voice-preview")
      },
      _ = (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)("div", {
          className: et.voiceChannelPopoutReactorHeader,
          children: [(0, l.jsx)(C, {
            children: e => (0, l.jsxs)(h.Clickable, {
              ...e,
              "aria-label": ee.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
              onClick: g,
              className: et.voiceChannelPopoutReactorChannel,
              children: [(0, l.jsx)(U.Z, {
                guild: o,
                size: U.Z.Sizes.SMOL,
                className: et.voiceChannelGuildIcon,
                active: !0
              }), (0, l.jsx)(h.ChevronSmallRightIcon, {
                size: "xxs",
                color: d.Z.colors.INTERACTIVE_NORMAL
              }), (0, l.jsx)(h.VoiceNormalIcon, {
                size: "xs",
                color: d.Z.colors.TEXT_NORMAL
              }), (0, l.jsx)(h.Text, {
                variant: "text-sm/medium",
                color: "text-normal",
                className: et.voiceChannelName,
                children: r.name
              })]
            })
          }), (0, l.jsx)(k.Z, {
            guildId: o.id,
            users: u,
            max: 3,
            renderUser: (e, t) => (0, l.jsx)(h.Avatar, {
              src: e.user.getAvatarURL(o.id, 16),
              size: h.AvatarSizes.SIZE_16,
              "aria-label": "avatar",
              className: t
            }),
            renderMoreUsers: e => (0, l.jsx)("div", {
              className: et.voiceChannelAdditionalParticipants,
              children: (0, l.jsx)(h.Text, {
                variant: "text-xxs/semibold",
                color: "text-normal",
                children: e
              })
            })
          })]
        }), (0, l.jsx)("div", {
          className: et.primaryActionPopoutDivider
        })]
      });
    return {
      voiceBar: _,
      joinVoiceButton: (0, l.jsx)(C, {
        children: e => (0, l.jsx)(eh, {
          ...e,
          color: h.Button.Colors.GREEN,
          onClick: g,
          IconComponent: E ? h.ScreenIcon : h.VoiceNormalIcon,
          children: ee.Z.Messages.PREVIEW
        })
      })
    }
  }({
    channel: t,
    entry: E,
    requestId: g
  }), K = null != F && 0 === f.length ? [F] : f, X = K.length > 0, en = K.length >= 2, [el, ei] = i.useState(!X), es = "#".concat(t.name), ea = G.ZP.getName(t.guild_id, t.id, n), eo = T ? ee.Z.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : ee.Z.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL, ec = async e => {
    if (null != e) {
      if (H.default.track($.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
          surface_type: J.Kd.GUILD_MEMBER_LIST,
          channel_id: t.id,
          guild_id: t.guild_id
        }), M) {
        let i;
        if ((0, I.EW)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), b(!0), B(!1), T) i = t;
        else {
          var l;
          let e = await m.Z.getOrEnsurePrivateChannel(n.id);
          i = null !== (l = j.Z.getChannel(e)) && void 0 !== l ? l : null
        }
        return o()(null != i, "Send channel must be defined"), ed({
          reply: ":".concat(e.name, ":"),
          sendToChannel: i,
          onComplete: () => {
            B(!0), setTimeout(() => {
              b(!1), r()
            }, 600)
          },
          interactionType: J.xP.REACTION_EMOJI_REACT_SENT
        })
      }
      ei(!0), null != Z && (Z.insertEmoji(e, !1, !1), Z.focus())
    }
  }, eu = async e => {
    let l;
    if (M && (0, I.EW)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), T) l = t;
    else {
      let e = await m.Z.openPrivateChannel(n.id, !1, !1),
        t = j.Z.getChannel(e);
      o()(null != t, "DM channel must be defined"), l = t
    }
    let i = l.type === $.d4z.DM ? J.xP.DM_REACTION_MESSAGE_SENT : J.xP.CHANNEL_REACTION_MESSAGE_SENT;
    return ed({
      reply: e,
      sendToChannel: l,
      onComplete: r,
      interactionType: i
    })
  }, ed = async e => {
    var n;
    let {
      reply: l,
      sendToChannel: i,
      onComplete: r,
      interactionType: c
    } = e;
    let u = await (n = s, async function() {
      for (var e = arguments.length, t = Array(e), l = 0; l < e; l++) t[l] = arguments[l];
      try {
        return await n(...t)
      } catch (e) {
        throw e
      }
    })(i.id);
    o()(null != u, "Reaction image must be defined"), await (0, _.B)({
      file: u,
      channel: i,
      altText: a,
      reply: l
    }), (0, Y.L)(c, {
      entry: E,
      channelId: t.id,
      guildId: t.guild_id,
      requestId: g,
      destinationChannelId: i.id,
      destinationGuildId: i.guild_id
    }), null == r || r()
  }, em = null != x ? x : null != V ? V : void 0;
  return (0, l.jsxs)("div", {
    style: {
      pointerEvents: R ? "none" : "all"
    },
    children: [(0, l.jsx)(Q.Z, {
      sent: w,
      shown: R,
      className: et.toastContainer
    }), null != em ? em : M ? (0, l.jsx)(q.Z, {
      children: (0, l.jsxs)("div", {
        className: et.emojiHotrailShareToChannel,
        children: [(0, l.jsx)(er, {
          channel: t,
          onClickSuggestion: ec
        }), (0, l.jsx)(C.dE, {
          onSelectEmoji: ec
        })]
      })
    }) : (0, l.jsx)("div", {
      className: et.emojiHotrailShareToChannel,
      children: (0, l.jsx)(er, {
        channel: t,
        onClickSuggestion: ec
      })
    }), (0, l.jsxs)("div", {
      className: el ? et.inputContainerShareToChannel : et.hiddenButRenderedInputField,
      children: [X && (0, l.jsx)(h.Clickable, {
        onClick: () => ei(!1),
        className: et.primaryActionPopoutMessageCloseIcon,
        children: (0, l.jsx)(h.CloseSmallIcon, {
          size: "custom",
          width: 20,
          height: 20,
          color: d.Z.colors.ICON_PRIMARY
        })
      }), (0, l.jsx)("div", {
        className: et.replyInputWrapper,
        children: (0, l.jsx)(C.A7, {
          placeholder: ee.Z.Messages.TEXTAREA_PLACEHOLDER.format({
            channel: T ? es : "@".concat(ea)
          }),
          onEnter: eu,
          setEditorRef: e => S(e),
          channel: T ? t : void 0,
          showEmojiButton: null != em,
          renderAttachButton: v ? () => (0, l.jsx)(h.Tooltip, {
            text: eo,
            children: e => (0, l.jsx)(h.Clickable, {
              ...e,
              className: et.shareToChannelButton,
              onClick: () => N(e => !e),
              children: T ? (0, l.jsx)(h.TextIcon, {
                size: "custom",
                width: 20,
                height: 20
              }) : (0, l.jsx)(h.AtIcon, {
                size: "custom",
                width: 20,
                height: 20
              })
            })
          }) : void 0
        })
      })]
    }), !1 === el && (0, l.jsxs)("div", {
      className: et.primaryActionPopoutActionButtons,
      children: [(0, l.jsxs)(h.Button, {
        className: et.secondaryButton,
        color: h.Button.Colors.CUSTOM,
        onClick: () => ei(!0),
        innerClassName: et.iconButton,
        size: en ? h.Button.Sizes.MIN : h.Button.Sizes.LARGE,
        children: [(0, l.jsx)(h.ChatIcon, {
          size: "custom",
          width: 20,
          height: 20,
          colorClass: et.secondaryText
        }), !en && (0, l.jsx)(h.Text, {
          variant: "text-md/semibold",
          className: et.secondaryText,
          children: ee.Z.Messages.USER_POPOUT_MESSAGE
        })]
      }, "toggleMessageMode"), K]
    })]
  })
}
let er = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, [s, a] = i.useState(!1);
  i.useEffect(() => {
    a(!0)
  }, []);
  let r = !!f.Z.keyboardModeEnabled && !s,
    o = (0, x.wC)(t.guild_id).slice(0, 5).map(e => null == e.id ? {
      emoji: e,
      url: e.url
    } : {
      emoji: e,
      url: (0, B.gT)({
        id: e.id,
        animated: e.animated,
        size: 58
      })
    });
  return (0, l.jsx)(l.Fragment, {
    children: o.map(e => {
      let {
        emoji: t,
        url: i
      } = e;
      return null != i ? (0, l.jsx)("div", {
        children: (0, l.jsx)(h.TooltipContainer, {
          text: ee.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          position: "top",
          "aria-label": ee.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          color: h.Tooltip.Colors.PRIMARY,
          shouldShow: !r && void 0,
          children: (0, l.jsx)(R.u, {
            emoji: t,
            isDisabled: !s,
            onClick: () => n(t),
            className: et.emoji
          })
        })
      }, t.name) : null
    })
  })
};

function eo(e) {
  let {
    channel: t,
    userDescription: n,
    headerIcons: i,
    entry: s
  } = e, r = t.guild_id, {
    displayParticipants: o,
    participant1: c,
    participant2: u,
    numOtherParticipants: d
  } = (0, F.Z)(s, 3), m = [c, u];
  return (0, l.jsxs)("div", {
    className: et.popoutContentHeader,
    children: [(0, l.jsxs)("div", {
      className: et.popoutUserContainer,
      children: [(0, l.jsx)(T.Z, {
        maxUsers: 3,
        users: o,
        size: h.AvatarSizes.SIZE_24,
        avatarClassName: et.popoutStackedAvatar,
        hideOverflowCount: !0,
        disableUsernameTooltip: !0
      }), (0, l.jsx)(h.Spacer, {
        size: 8,
        horizontal: !0
      }), (0, l.jsx)(h.Heading, {
        variant: "heading-sm/normal",
        className: et.popoutTextSecondary,
        children: n.format({
          user1: G.ZP.getName(r, t.id, m[0]),
          user2: G.ZP.getName(r, t.id, m[1]),
          countOthers: d,
          nameHook: (e, t) => (0, l.jsx)(h.Clickable, {
            tag: "span",
            onClick: () => (0, M.openUserProfileModal)({
              userId: m[parseInt(t)].id
            }),
            className: et.maybeClickable,
            children: (0, l.jsx)(h.Text, {
              variant: "text-sm/medium",
              className: a()(et.popoutUsername, et.popoutTextPrimary),
              children: e
            }, t)
          })
        })
      })]
    }), (0, l.jsx)("div", {
      className: et.popoutHeaderIcons,
      children: i
    })]
  })
}

function ec(e) {
  let {
    children: t,
    onClick: n
  } = e;
  return null == n ? (0, l.jsx)(l.Fragment, {
    children: t
  }) : (0, l.jsx)(h.Clickable, {
    className: et.maybeClickable,
    onClick: n,
    children: t
  })
}

function eu(e) {
  var t;
  let {
    thumbnailSrc: i,
    thumbnailFallbackSrc: s,
    thumbnailTitle: a,
    title: r,
    subtitle: o,
    badges: c,
    children: u,
    onClickTitle: d,
    onClickSubtitle: m,
    ...p
  } = e, {
    entry: E,
    channel: g
  } = p, f = (0, V.d)(E), C = (0, Z.Z)({
    location: "ContentPopout",
    applicationId: f ? null === (t = E.extra) || void 0 === t ? void 0 : t.application_id : void 0
  }) && f ? () => {
    (0, h.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("7613")]).then(n.bind(n, 644941));
      return t => (0, l.jsx)(e, {
        applicationId: E.extra.application_id,
        channel: g,
        ...t
      })
    })
  } : void 0;
  return (0, l.jsxs)(el, {
    backgroundImgSrc: i,
    children: [(0, l.jsx)(eo, {
      ...p
    }), (0, l.jsxs)("div", {
      className: et.popoutContentBody,
      children: [(0, l.jsx)("div", {
        className: et.popoutThumbnailContainer,
        children: (0, l.jsx)(ec, {
          onClick: C,
          children: (0, l.jsx)(X.f, {
            size: 72,
            alt: a,
            src: i,
            fallbackSrc: s,
            className: et.contentImage
          })
        })
      }), (0, l.jsx)(h.Spacer, {
        size: 16,
        horizontal: !0
      }), (0, l.jsxs)("div", {
        children: [(0, l.jsx)(ec, {
          onClick: null != d ? d : C,
          children: (0, l.jsx)(h.Heading, {
            variant: "heading-md/medium",
            className: et.popoutTextPrimary,
            lineClamp: 3,
            children: r
          })
        }), null != o ? (0, l.jsx)(ec, {
          onClick: null != m ? m : C,
          children: (0, l.jsx)(h.Text, {
            variant: "text-md/normal",
            className: et.popoutTextSecondary,
            children: o
          })
        }) : null, (0, l.jsx)(h.Spacer, {
          size: 8
        }), c]
      })]
    }), u]
  })
}

function ed(e) {
  let {
    title: t,
    badges: n,
    stream: s,
    ...a
  } = e, r = (0, c.e7)([j.Z], () => j.Z.getChannel(null == s ? void 0 : s.channelId)), [o] = i.useMemo(() => (0, S.p9)(r, b.Z, L.Z, O.Z, N.Z), [r]);
  return null == s ? null : (0, l.jsxs)(el, {
    className: et.streamingPopoutHero,
    children: [(0, l.jsx)(eo, {
      ...a,
      headerIcons: (0, l.jsx)(w.ZP, {
        size: w.ZP.Sizes.SMALL
      })
    }), (0, l.jsx)(h.Spacer, {
      size: 16
    }), (0, l.jsx)(ec, {
      onClick: o ? () => {
        E.default.selectVoiceChannel(s.channelId), (0, g.iV)(s)
      } : void 0,
      children: (0, l.jsxs)("div", {
        style: {
          position: "relative"
        },
        children: [(0, l.jsx)(v.Z, {
          className: et.streamingPopoutHero,
          stream: s
        }), o && (0, l.jsx)("div", {
          className: et.streamCTA,
          children: (0, l.jsx)(h.Text, {
            variant: "text-md/normal",
            children: ee.Z.Messages.WATCH_STREAM
          })
        })]
      })
    }), (0, l.jsx)(h.Spacer, {
      size: 16
    }), (0, l.jsx)(h.Heading, {
      variant: "heading-md/semibold",
      className: et.popoutTextPrimary,
      lineClamp: 3,
      children: t
    }), (0, l.jsx)(h.Spacer, {
      size: 8
    }), n]
  })
}

function eh(e) {
  let {
    IconComponent: t,
    children: n,
    className: i,
    ...s
  } = e;
  return (0, l.jsxs)(h.Button, {
    ...s,
    className: a()(i, et.primaryButton),
    innerClassName: null != t ? et.iconButton : void 0,
    size: h.Button.Sizes.LARGE,
    children: [null != t ? (0, l.jsx)(t, {
      size: "custom",
      width: 20,
      height: 20,
      color: d.Z.colors.WHITE
    }) : null, (0, l.jsx)(h.Text, {
      variant: "text-md/semibold",
      color: "always-white",
      children: n
    })]
  })
}