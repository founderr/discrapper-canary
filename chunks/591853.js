n.d(t, {
  Ll: function() {
return eE;
  },
  St: function() {
return ed;
  },
  WT: function() {
return eu;
  },
  jL: function() {
return ef;
  },
  wG: function() {
return e_;
  },
  yR: function() {
return er;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(512722),
  o = n.n(r);
n(699581);
var c = n(442837),
  d = n(704215),
  u = n(692547),
  h = n(481060),
  p = n(493683),
  m = n(475179),
  _ = n(287734),
  f = n(872810),
  E = n(607070),
  C = n(220779),
  g = n(201133),
  I = n(605236),
  x = n(543241),
  T = n(318374),
  v = n(258609),
  N = n(810568),
  S = n(168524),
  Z = n(382182),
  A = n(871118),
  M = n(565138),
  b = n(790642),
  R = n(359110),
  j = n(171368),
  L = n(12168),
  P = n(592125),
  O = n(430824),
  y = n(496675),
  D = n(699516),
  k = n(9156),
  U = n(979651),
  w = n(938475),
  B = n(409216),
  H = n(368666),
  G = n(626135),
  V = n(768581),
  F = n(5192),
  W = n(792125),
  z = n(26033),
  Y = n(656709),
  K = n(192918),
  q = n(22211),
  X = n(571243),
  Q = n(69259),
  J = n(206295),
  $ = n(111386),
  ee = n(797342),
  et = n(43205),
  en = n(469153),
  ei = n(206583),
  ea = n(981631),
  es = n(689938),
  el = n(331679);

function er(e) {
  let {
children: t
  } = e, n = a.useRef(null);
  return (0, h.useFocusLock)(n), (0, i.jsx)('div', {
className: el.popout,
ref: n,
children: t
  });
}

function eo(e) {
  let {
children: t,
backgroundImgSrc: n,
className: a,
style: s = {}
  } = e, {
primaryColor: r,
secondaryColor: o
  } = (0, J.Z)(n);
  return null != n && (s.background = 'linear-gradient(45deg, '.concat(r, ', ').concat(o, ')')), (0, i.jsx)('div', {
'data-disable-adaptive-theme': !0,
className: l()(el.hero, (0, W.Q)(ea.BRd.DARK), a),
style: s,
children: t
  });
}
let ec = a.createContext(null);

function ed(e) {
  let {
children: t
  } = e, n = a.useRef(null);
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)('div', {
    className: el.interactionsContainerHeader,
    ref: e => n.current = e
  }),
  (0, i.jsx)('div', {
    className: el.interactionsContainer,
    children: (0, i.jsx)(ec.Provider, {
      value: n.current,
      children: t
    })
  })
]
  });
}

function eu(e) {
  let {
channel: t,
user: n,
generateReactionImage: s,
reactionImageAltText: l,
closePopout: r,
entry: _,
requestId: f,
buttons: E = [],
header: x
  } = e, [T, v] = a.useState(!1), [N, S] = a.useState(null), Z = (0, c.e7)([y.Z], () => y.Z.can(ea.Plq.SEND_MESSAGES, t)), A = (0, X.a)({
location: 'PopoutReactor'
  }), [j, L] = a.useState(!1), [H, V] = a.useState(!1), {
voiceBar: W,
joinVoiceButton: z
  } = function(e) {
let {
  channel: t,
  entry: n,
  requestId: s
} = e, {
  streamPreviewUrl: l,
  channel: r
} = (0, q.Z)(n), {
  isRich: o,
  appName: d
} = (0, ee.n)(n), p = (0, c.e7)([O.Z], () => null != r ? O.Z.getGuild(r.guild_id) : void 0), _ = (0, c.Wu)([w.ZP], () => null != r ? w.ZP.getVoiceStatesForChannel(r) : [], [r]), f = (0, c.e7)([U.Z], () => U.Z.isInChannel(null == r ? void 0 : r.id)), E = a.useMemo(() => {
  for (let e of _) {
    let t = P.Z.getDMFromUserId(e.user.id),
      n = null != t && k.ZP.isChannelMuted(null, t),
      i = D.Z.isBlocked(e.user.id);
    if (n || i)
      return !0;
  }
  return !1;
}, [_]);
if (null == r || null == p)
  return {
    voiceBar: void 0,
    joinVoiceButton: void 0
  };
let C = null != l,
  g = () => {
    m.Z.updateChatOpen(r.id, !0), (0, R.Kh)(r.id), (0, Q.L)(ei.xP.VOICE_CHANNEL_PREVIEWED, {
      entry: n,
      channelId: t.id,
      guildId: t.guild_id,
      requestId: s,
      destinationChannelId: r.id,
      destinationGuildId: r.guild_id,
      richPresenceName: o ? d : void 0
    });
  },
  I = E ? es.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING : es.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
  x = e => {
    let {
      children: t
    } = e;
    return (0, i.jsx)(h.Tooltip, {
      'aria-label': I,
      text: (0, i.jsxs)(i.Fragment, {
        children: [
          E && (0, i.jsx)(h.WarningIcon, {
            size: 'custom',
            width: 13,
            height: 13,
            className: el.popoutBlockedWarningIcon
          }),
          I
        ]
      }),
      shouldShow: !0,
      children: t
    }, 'voice-preview');
  },
  T = (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsxs)('div', {
        className: el.voiceChannelPopoutReactorHeader,
        children: [
          (0, i.jsx)(x, {
            children: e => (0, i.jsxs)(h.Clickable, {
              ...e,
              'aria-label': es.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
              onClick: g,
              className: el.voiceChannelPopoutReactorChannel,
              children: [
                (0, i.jsx)(M.Z, {
                  guild: p,
                  size: M.Z.Sizes.SMOL,
                  className: el.voiceChannelGuildIcon,
                  active: !0
                }),
                (0, i.jsx)(h.ChevronSmallRightIcon, {
                  size: 'xxs',
                  color: u.Z.colors.INTERACTIVE_NORMAL
                }),
                (0, i.jsx)(h.VoiceNormalIcon, {
                  size: 'xs',
                  color: u.Z.colors.TEXT_NORMAL
                }),
                (0, i.jsx)(h.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-normal',
                  className: el.voiceChannelName,
                  children: r.name
                })
              ]
            })
          }),
          (0, i.jsx)(B.Z, {
            guildId: p.id,
            users: _,
            max: 3,
            renderUser: (e, t) => (0, i.jsx)(h.Avatar, {
              src: e.user.getAvatarURL(p.id, 16),
              size: h.AvatarSizes.SIZE_16,
              'aria-label': 'avatar',
              className: t
            }),
            renderMoreUsers: e => (0, i.jsx)('div', {
              className: el.voiceChannelAdditionalParticipants,
              children: (0, i.jsx)(h.Text, {
                variant: 'text-xxs/semibold',
                color: 'text-normal',
                children: e
              })
            })
          })
        ]
      }),
      (0, i.jsx)('div', {
        className: el.primaryActionPopoutDivider
      })
    ]
  });
return {
  voiceBar: T,
  joinVoiceButton: f ? null : (0, i.jsx)(x, {
    children: e => (0, i.jsx)(eE, {
      ...e,
      color: h.Button.Colors.GREEN,
      onClick: g,
      IconComponent: C ? h.ScreenIcon : h.VoiceNormalIcon,
      children: es.Z.Messages.PREVIEW
    })
  })
};
  }({
channel: t,
entry: _,
requestId: f
  }), K = null != z && 0 === E.length ? [z] : E, J = K.length > 0, et = K.length >= 2, [er, eo] = a.useState(!J), ec = '#'.concat(t.name), ed = F.ZP.getName(t.guild_id, t.id, n), eu = T ? es.Z.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : es.Z.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL, ep = async e => {
if (null != e) {
  if (G.default.track(ea.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
      surface_type: ei.Kd.GUILD_MEMBER_LIST,
      channel_id: t.id,
      guild_id: t.guild_id
    }), A) {
    let a;
    if ((0, I.EW)(d.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), L(!0), V(!1), T)
      a = t;
    else {
      var i;
      let e = await p.Z.getOrEnsurePrivateChannel(n.id);
      a = null !== (i = P.Z.getChannel(e)) && void 0 !== i ? i : null;
    }
    return o()(null != a, 'Send channel must be defined'), e_({
      reply: ':'.concat(e.name, ':'),
      sendToChannel: a,
      onComplete: () => {
        V(!0), setTimeout(() => {
          L(!1), r();
        }, 600);
      },
      interactionType: ei.xP.REACTION_EMOJI_REACT_SENT
    });
  }
  eo(!0), null != N && (N.insertEmoji(e, !1, !1), N.focus());
}
  }, em = async e => {
let i;
if (A && (0, I.EW)(d.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), T)
  i = t;
else {
  let e = await p.Z.openPrivateChannel(n.id, !1, !1),
    t = P.Z.getChannel(e);
  o()(null != t, 'DM channel must be defined'), i = t;
}
let a = i.type === ea.d4z.DM ? ei.xP.DM_REACTION_MESSAGE_SENT : ei.xP.CHANNEL_REACTION_MESSAGE_SENT;
return e_({
  reply: e,
  sendToChannel: i,
  onComplete: r,
  interactionType: a
});
  }, e_ = async e => {
let {
  reply: n,
  sendToChannel: i,
  onComplete: a,
  interactionType: r
} = e;
if ((0, b.Io)('ContentPopout Reactor'))
  await (0, Y.p)({
    channel: i,
    content: n,
    entry: _
  });
else {
  var c;
  let e = await (c = s, async function() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    try {
      return await c(...t);
    } catch (e) {
      throw e;
    }
  })(i.id);
  o()(null != e, 'Reaction image must be defined'), await (0, g.B)({
    file: e,
    channel: i,
    altText: l,
    reply: n
  });
}
(0, Q.L)(r, {
  entry: _,
  channelId: t.id,
  guildId: t.guild_id,
  requestId: f,
  destinationChannelId: i.id,
  destinationGuildId: i.guild_id
}), null == a || a();
  }, ef = null != x ? x : null != W ? W : void 0;
  return (0, i.jsxs)('div', {
style: {
  pointerEvents: j ? 'none' : 'all'
},
children: [
  (0, i.jsx)(en.Z, {
    sent: H,
    shown: j,
    className: el.toastContainer
  }),
  null != ef ? ef : A ? (0, i.jsx)($.Z, {
    children: (0, i.jsxs)('div', {
      className: el.emojiHotrailShareToChannel,
      children: [
        (0, i.jsx)(eh, {
          channel: t,
          onClickSuggestion: ep
        }),
        (0, i.jsx)(C.dE, {
          onSelectEmoji: ep
        })
      ]
    })
  }) : (0, i.jsx)('div', {
    className: el.emojiHotrailShareToChannel,
    children: (0, i.jsx)(eh, {
      channel: t,
      onClickSuggestion: ep
    })
  }),
  (0, i.jsxs)('div', {
    className: er ? el.inputContainerShareToChannel : el.hiddenButRenderedInputField,
    children: [
      (0, i.jsx)(C.A7, {
        placeholder: es.Z.Messages.TEXTAREA_PLACEHOLDER.format({
          channel: T ? ec : '@'.concat(ed)
        }),
        onEnter: em,
        setEditorRef: e => S(e),
        channel: T ? t : void 0,
        showEmojiButton: null != ef,
        renderAttachButton: Z ? () => (0, i.jsx)(h.Tooltip, {
          text: eu,
          children: e => (0, i.jsx)(h.Clickable, {
            ...e,
            className: el.shareToChannelButton,
            onClick: () => v(e => !e),
            children: T ? (0, i.jsx)(h.TextIcon, {
              size: 'custom',
              width: 20,
              height: 20
            }) : (0, i.jsx)(h.AtIcon, {
              size: 'custom',
              width: 20,
              height: 20
            })
          })
        }) : void 0
      }),
      J && (0, i.jsx)(h.Clickable, {
        onClick: () => eo(!1),
        className: el.primaryActionPopoutMessageCloseIcon,
        children: (0, i.jsx)(h.CloseSmallIcon, {
          size: 'custom',
          width: 20,
          height: 20,
          color: u.Z.colors.ICON_PRIMARY
        })
      })
    ]
  }),
  !1 === er && (0, i.jsxs)('div', {
    className: el.primaryActionPopoutActionButtons,
    children: [
      (0, i.jsxs)(h.Button, {
        className: el.secondaryButton,
        color: h.Button.Colors.CUSTOM,
        onClick: () => eo(!0),
        innerClassName: el.iconButton,
        size: et ? h.Button.Sizes.MIN : h.Button.Sizes.LARGE,
        children: [
          (0, i.jsx)(h.ChatIcon, {
            size: 'custom',
            width: 20,
            height: 20,
            colorClass: el.secondaryText
          }),
          !et && (0, i.jsx)(h.Text, {
            variant: 'text-md/semibold',
            className: el.secondaryText,
            children: es.Z.Messages.USER_POPOUT_MESSAGE
          })
        ]
      }, 'toggleMessageMode'),
      K
    ]
  })
]
  });
}
let eh = e => {
  let {
channel: t,
onClickSuggestion: n
  } = e, [s, l] = a.useState(!1);
  a.useEffect(() => {
l(!0);
  }, []);
  let r = !!E.Z.keyboardModeEnabled && !s,
o = (0, x.wC)(t.guild_id).slice(0, 5).map(e => null == e.id ? {
  emoji: e,
  url: e.url
} : {
  emoji: e,
  url: (0, V.gT)({
    id: e.id,
    animated: e.animated,
    size: 58
  })
});
  return (0, i.jsx)(i.Fragment, {
children: o.map(e => {
  let {
    emoji: t,
    url: a
  } = e;
  return null != a ? (0, i.jsx)('div', {
    children: (0, i.jsx)(h.TooltipContainer, {
      text: es.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
        emojiName: t.name
      }),
      position: 'top',
      'aria-label': es.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
        emojiName: t.name
      }),
      color: h.Tooltip.Colors.PRIMARY,
      shouldShow: !r && void 0,
      children: (0, i.jsx)(L.u, {
        emoji: t,
        isDisabled: !s,
        onClick: () => n(t),
        className: el.emoji
      })
    })
  }, t.name) : null;
})
  });
};

function ep(e) {
  let {
channel: t,
userDescription: n,
entry: a
  } = e, s = t.guild_id, {
displayParticipants: r,
participant1: o,
participant2: c,
numOtherParticipants: d
  } = (0, K.Z)(a, 3), u = [
o,
c
  ];
  return (0, i.jsx)('div', {
className: el.popoutContentHeader,
children: (0, i.jsxs)('div', {
  className: el.popoutUserContainer,
  children: [
    (0, i.jsx)(T.Z, {
      maxUsers: 3,
      users: r,
      size: h.AvatarSizes.SIZE_24,
      avatarClassName: el.popoutStackedAvatar,
      hideOverflowCount: !0,
      disableUsernameTooltip: !0
    }),
    (0, i.jsx)(h.Spacer, {
      size: 8,
      horizontal: !0
    }),
    (0, i.jsx)(h.Heading, {
      variant: 'heading-sm/normal',
      className: el.popoutTextSecondary,
      children: n.format({
        user1: F.ZP.getName(s, t.id, u[0]),
        user2: F.ZP.getName(s, t.id, u[1]),
        countOthers: d,
        nameHook: (e, t) => (0, i.jsx)(h.Clickable, {
          tag: 'span',
          onClick: () => (0, j.openUserProfileModal)({
            userId: u[parseInt(t)].id
          }),
          className: el.maybeClickable,
          children: (0, i.jsx)(h.Text, {
            variant: 'text-sm/medium',
            className: l()(el.popoutUsername, el.popoutTextPrimary),
            children: e
          }, t)
        })
      })
    })
  ]
})
  });
}

function em(e) {
  let {
children: t,
onClick: n
  } = e;
  return null == n ? (0, i.jsx)(i.Fragment, {
children: t
  }) : (0, i.jsx)(h.Clickable, {
className: el.maybeClickable,
onClick: n,
children: t
  });
}

function e_(e) {
  var t;
  let {
thumbnailSrc: n,
thumbnailFallbackSrc: a,
thumbnailTitle: s,
title: r,
subtitle: o,
badges: c,
children: d,
onClickThumbnail: u,
onClickTitle: p,
onClickSubtitle: m,
headerIcons: _,
...f
  } = e, {
entry: E
  } = f, C = (0, z.d)(E), g = (0, S.Z)({
location: 'ContentPopout',
applicationId: C ? null === (t = E.extra) || void 0 === t ? void 0 : t.application_id : void 0,
source: N.m1.ActivityCard,
trackEntryPointImpression: !0,
sourceUserId: E.author_id
  }), I = C ? g : void 0;
  return (0, i.jsxs)('div', {
className: el.popoutContentWrapper,
children: [
  (0, i.jsx)(ep, {
    ...f
  }),
  (0, i.jsxs)(eo, {
    backgroundImgSrc: n,
    children: [
      (0, i.jsxs)('div', {
        className: el.popoutHeroInner,
        children: [
          (0, i.jsx)('div', {
            className: el.popoutThumbnailContainer,
            children: (0, i.jsx)(em, {
              onClick: null != u ? u : I,
              children: (0, i.jsx)(et.f, {
                size: 72,
                constrain: 'width',
                alt: s,
                src: n,
                fallbackSrc: a,
                className: el.contentImage
              })
            })
          }),
          (0, i.jsxs)('div', {
            className: el.popoutHeroBody,
            children: [
              (0, i.jsx)(em, {
                onClick: null != p ? p : I,
                children: (0, i.jsx)(h.Heading, {
                  variant: 'heading-md/medium',
                  className: l()(el.popoutHeroTextPrimary, {
                    [el.popoutHeroTextPrimaryShort]: null != _
                  }),
                  lineClamp: 3,
                  children: r
                })
              }),
              null != o ? (0, i.jsx)(em, {
                onClick: null != m ? m : I,
                children: (0, i.jsx)(h.Text, {
                  variant: 'text-sm/normal',
                  className: el.popoutHeroTextSecondary,
                  children: o
                })
              }) : null,
              (0, i.jsx)(h.Spacer, {
                size: 8
              }),
              c
            ]
          }),
          (0, i.jsx)('div', {
            className: el.popoutHeaderIcons,
            children: _
          })
        ]
      }),
      d
    ]
  })
]
  });
}

function ef(e) {
  let {
title: t,
badges: n,
stream: s,
...l
  } = e, r = (0, c.e7)([P.Z], () => P.Z.getChannel(null == s ? void 0 : s.channelId)), [o] = a.useMemo(() => (0, Z.p9)(r, U.Z, O.Z, y.Z, v.Z), [r]);
  return null == s ? null : (0, i.jsxs)('div', {
className: el.popoutContentWrapper,
children: [
  (0, i.jsx)(ep, {
    ...l
  }),
  (0, i.jsxs)('div', {
    className: el.streamingPopoutHero,
    children: [
      (0, i.jsxs)('div', {
        className: el.streamingPopoutHeader,
        children: [
          (0, i.jsx)(h.Heading, {
            variant: 'heading-md/semibold',
            className: el.popoutTextPrimary,
            lineClamp: 3,
            children: t
          }),
          (0, i.jsx)(h.Spacer, {
            size: 8
          }),
          n
        ]
      }),
      (0, i.jsx)(em, {
        onClick: o ? () => {
          _.default.selectVoiceChannel(s.channelId), (0, f.iV)(s);
        } : void 0,
        children: (0, i.jsxs)('div', {
          style: {
            position: 'relative'
          },
          children: [
            (0, i.jsx)(A.Z, {
              className: el.streamingPopoutImg,
              stream: s
            }),
            o && (0, i.jsx)('div', {
              className: el.streamCTA,
              children: (0, i.jsx)(h.Text, {
                variant: 'text-md/normal',
                children: es.Z.Messages.WATCH_STREAM
              })
            }),
            (0, i.jsx)(H.ZP, {
              className: el.liveIndicator,
              size: H.ZP.Sizes.SMALL
            })
          ]
        })
      })
    ]
  })
]
  });
}

function eE(e) {
  let {
IconComponent: t,
children: n,
className: a,
...s
  } = e;
  return (0, i.jsxs)(h.Button, {
...s,
className: l()(a, el.primaryButton),
innerClassName: null != t ? el.iconButton : void 0,
size: h.Button.Sizes.LARGE,
children: [
  null != t ? (0, i.jsx)(t, {
    size: 'custom',
    width: 20,
    height: 20,
    color: u.Z.colors.WHITE
  }) : null,
  (0, i.jsx)(h.Text, {
    variant: 'text-md/semibold',
    color: 'always-white',
    children: n
  })
]
  });
}