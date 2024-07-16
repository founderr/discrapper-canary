n.d(t, {
  Ll: function() {
return ef;
  },
  St: function() {
return ec;
  },
  WT: function() {
return ed;
  },
  jL: function() {
return e_;
  },
  wG: function() {
return em;
  },
  yR: function() {
return el;
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
  N = n(258609),
  v = n(810568),
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
  ee = n(43205),
  et = n(469153),
  en = n(206583),
  ei = n(981631),
  ea = n(689938),
  es = n(331679);

function el(e) {
  let {
children: t
  } = e, n = a.useRef(null);
  return (0, h.useFocusLock)(n), (0, i.jsx)('div', {
className: es.popout,
ref: n,
children: t
  });
}

function er(e) {
  let {
children: t,
backgroundImgSrc: n,
className: a,
style: s = {}
  } = e, {
primaryColor: r,
secondaryColor: o
  } = (0, J.Z)(n);
  return (0, i.jsx)('div', {
'data-disable-adaptive-theme': !0,
className: l()(es.hero, (0, W.Q)(ei.BRd.DARK), a),
style: {
  background: 'linear-gradient(45deg, '.concat(r, ', ').concat(o, ')'),
  ...s
},
children: t
  });
}
let eo = a.createContext(null);

function ec(e) {
  let {
children: t
  } = e, n = a.useRef(null);
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)('div', {
    className: es.interactionsContainerHeader,
    ref: e => n.current = e
  }),
  (0, i.jsx)('div', {
    className: es.interactionsContainer,
    children: (0, i.jsx)(eo.Provider, {
      value: n.current,
      children: t
    })
  })
]
  });
}

function ed(e) {
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
  } = e, [T, N] = a.useState(!1), [v, S] = a.useState(null), Z = (0, c.e7)([y.Z], () => y.Z.can(ei.Plq.SEND_MESSAGES, t)), A = (0, X.a)({
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
} = (0, q.Z)(n), o = (0, c.e7)([O.Z], () => null != r ? O.Z.getGuild(r.guild_id) : void 0), d = (0, c.Wu)([w.ZP], () => null != r ? w.ZP.getVoiceStatesForChannel(r) : [], [r]), p = (0, c.e7)([U.Z], () => U.Z.isInChannel(null == r ? void 0 : r.id)), _ = a.useMemo(() => {
  for (let e of d) {
    let t = P.Z.getDMFromUserId(e.user.id),
      n = null != t && k.ZP.isChannelMuted(null, t),
      i = D.Z.isBlocked(e.user.id);
    if (n || i)
      return !0;
  }
  return !1;
}, [d]);
if (null == r || null == o)
  return {
    voiceBar: void 0,
    joinVoiceButton: void 0
  };
let f = null != l,
  E = () => {
    m.Z.updateChatOpen(r.id, !0), (0, R.Kh)(r.id), (0, Q.L)(en.xP.VOICE_CHANNEL_PREVIEWED, {
      entry: n,
      channelId: t.id,
      guildId: t.guild_id,
      requestId: s,
      destinationChannelId: r.id,
      destinationGuildId: r.guild_id
    });
  },
  C = _ ? ea.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING : ea.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
  g = e => {
    let {
      children: t
    } = e;
    return (0, i.jsx)(h.Tooltip, {
      'aria-label': C,
      text: (0, i.jsxs)(i.Fragment, {
        children: [
          _ && (0, i.jsx)(h.WarningIcon, {
            size: 'custom',
            width: 13,
            height: 13,
            className: es.popoutBlockedWarningIcon
          }),
          C
        ]
      }),
      shouldShow: !0,
      children: t
    }, 'voice-preview');
  },
  I = (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsxs)('div', {
        className: es.voiceChannelPopoutReactorHeader,
        children: [
          (0, i.jsx)(g, {
            children: e => (0, i.jsxs)(h.Clickable, {
              ...e,
              'aria-label': ea.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
              onClick: E,
              className: es.voiceChannelPopoutReactorChannel,
              children: [
                (0, i.jsx)(M.Z, {
                  guild: o,
                  size: M.Z.Sizes.SMOL,
                  className: es.voiceChannelGuildIcon,
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
                  className: es.voiceChannelName,
                  children: r.name
                })
              ]
            })
          }),
          (0, i.jsx)(B.Z, {
            guildId: o.id,
            users: d,
            max: 3,
            renderUser: (e, t) => (0, i.jsx)(h.Avatar, {
              src: e.user.getAvatarURL(o.id, 16),
              size: h.AvatarSizes.SIZE_16,
              'aria-label': 'avatar',
              className: t
            }),
            renderMoreUsers: e => (0, i.jsx)('div', {
              className: es.voiceChannelAdditionalParticipants,
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
        className: es.primaryActionPopoutDivider
      })
    ]
  });
return {
  voiceBar: I,
  joinVoiceButton: p ? null : (0, i.jsx)(g, {
    children: e => (0, i.jsx)(ef, {
      ...e,
      color: h.Button.Colors.GREEN,
      onClick: E,
      IconComponent: f ? h.ScreenIcon : h.VoiceNormalIcon,
      children: ea.Z.Messages.PREVIEW
    })
  })
};
  }({
channel: t,
entry: _,
requestId: f
  }), K = null != z && 0 === E.length ? [z] : E, J = K.length > 0, ee = K.length >= 2, [el, er] = a.useState(!J), eo = '#'.concat(t.name), ec = F.ZP.getName(t.guild_id, t.id, n), ed = T ? ea.Z.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : ea.Z.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL, eh = async e => {
if (null != e) {
  if (G.default.track(ei.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
      surface_type: en.Kd.GUILD_MEMBER_LIST,
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
    return o()(null != a, 'Send channel must be defined'), em({
      reply: ':'.concat(e.name, ':'),
      sendToChannel: a,
      onComplete: () => {
        V(!0), setTimeout(() => {
          L(!1), r();
        }, 600);
      },
      interactionType: en.xP.REACTION_EMOJI_REACT_SENT
    });
  }
  er(!0), null != v && (v.insertEmoji(e, !1, !1), v.focus());
}
  }, ep = async e => {
let i;
if (A && (0, I.EW)(d.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), T)
  i = t;
else {
  let e = await p.Z.openPrivateChannel(n.id, !1, !1),
    t = P.Z.getChannel(e);
  o()(null != t, 'DM channel must be defined'), i = t;
}
let a = i.type === ei.d4z.DM ? en.xP.DM_REACTION_MESSAGE_SENT : en.xP.CHANNEL_REACTION_MESSAGE_SENT;
return em({
  reply: e,
  sendToChannel: i,
  onComplete: r,
  interactionType: a
});
  }, em = async e => {
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
  }, e_ = null != x ? x : null != W ? W : void 0;
  return (0, i.jsxs)('div', {
style: {
  pointerEvents: j ? 'none' : 'all'
},
children: [
  (0, i.jsx)(et.Z, {
    sent: H,
    shown: j,
    className: es.toastContainer
  }),
  null != e_ ? e_ : A ? (0, i.jsx)($.Z, {
    children: (0, i.jsxs)('div', {
      className: es.emojiHotrailShareToChannel,
      children: [
        (0, i.jsx)(eu, {
          channel: t,
          onClickSuggestion: eh
        }),
        (0, i.jsx)(C.dE, {
          onSelectEmoji: eh
        })
      ]
    })
  }) : (0, i.jsx)('div', {
    className: es.emojiHotrailShareToChannel,
    children: (0, i.jsx)(eu, {
      channel: t,
      onClickSuggestion: eh
    })
  }),
  (0, i.jsxs)('div', {
    className: el ? es.inputContainerShareToChannel : es.hiddenButRenderedInputField,
    children: [
      (0, i.jsx)(C.A7, {
        placeholder: ea.Z.Messages.TEXTAREA_PLACEHOLDER.format({
          channel: T ? eo : '@'.concat(ec)
        }),
        onEnter: ep,
        setEditorRef: e => S(e),
        channel: T ? t : void 0,
        showEmojiButton: null != e_,
        renderAttachButton: Z ? () => (0, i.jsx)(h.Tooltip, {
          text: ed,
          children: e => (0, i.jsx)(h.Clickable, {
            ...e,
            className: es.shareToChannelButton,
            onClick: () => N(e => !e),
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
        onClick: () => er(!1),
        className: es.primaryActionPopoutMessageCloseIcon,
        children: (0, i.jsx)(h.CloseSmallIcon, {
          size: 'custom',
          width: 20,
          height: 20,
          color: u.Z.colors.ICON_PRIMARY
        })
      })
    ]
  }),
  !1 === el && (0, i.jsxs)('div', {
    className: es.primaryActionPopoutActionButtons,
    children: [
      (0, i.jsxs)(h.Button, {
        className: es.secondaryButton,
        color: h.Button.Colors.CUSTOM,
        onClick: () => er(!0),
        innerClassName: es.iconButton,
        size: ee ? h.Button.Sizes.MIN : h.Button.Sizes.LARGE,
        children: [
          (0, i.jsx)(h.ChatIcon, {
            size: 'custom',
            width: 20,
            height: 20,
            colorClass: es.secondaryText
          }),
          !ee && (0, i.jsx)(h.Text, {
            variant: 'text-md/semibold',
            className: es.secondaryText,
            children: ea.Z.Messages.USER_POPOUT_MESSAGE
          })
        ]
      }, 'toggleMessageMode'),
      K
    ]
  })
]
  });
}
let eu = e => {
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
      text: ea.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
        emojiName: t.name
      }),
      position: 'top',
      'aria-label': ea.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
        emojiName: t.name
      }),
      color: h.Tooltip.Colors.PRIMARY,
      shouldShow: !r && void 0,
      children: (0, i.jsx)(L.u, {
        emoji: t,
        isDisabled: !s,
        onClick: () => n(t),
        className: es.emoji
      })
    })
  }, t.name) : null;
})
  });
};

function eh(e) {
  let {
channel: t,
userDescription: n,
headerIcons: a,
entry: s
  } = e, r = t.guild_id, {
displayParticipants: o,
participant1: c,
participant2: d,
numOtherParticipants: u
  } = (0, K.Z)(s, 3), p = [
c,
d
  ];
  return (0, i.jsxs)('div', {
className: es.popoutContentHeader,
children: [
  (0, i.jsxs)('div', {
    className: es.popoutUserContainer,
    children: [
      (0, i.jsx)(T.Z, {
        maxUsers: 3,
        users: o,
        size: h.AvatarSizes.SIZE_24,
        avatarClassName: es.popoutStackedAvatar,
        hideOverflowCount: !0,
        disableUsernameTooltip: !0
      }),
      (0, i.jsx)(h.Spacer, {
        size: 8,
        horizontal: !0
      }),
      (0, i.jsx)(h.Heading, {
        variant: 'heading-sm/normal',
        className: es.popoutTextSecondary,
        children: n.format({
          user1: F.ZP.getName(r, t.id, p[0]),
          user2: F.ZP.getName(r, t.id, p[1]),
          countOthers: u,
          nameHook: (e, t) => (0, i.jsx)(h.Clickable, {
            tag: 'span',
            onClick: () => (0, j.openUserProfileModal)({
              userId: p[parseInt(t)].id
            }),
            className: es.maybeClickable,
            children: (0, i.jsx)(h.Text, {
              variant: 'text-sm/medium',
              className: l()(es.popoutUsername, es.popoutTextPrimary),
              children: e
            }, t)
          })
        })
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: es.popoutHeaderIcons,
    children: a
  })
]
  });
}

function ep(e) {
  let {
children: t,
onClick: n
  } = e;
  return null == n ? (0, i.jsx)(i.Fragment, {
children: t
  }) : (0, i.jsx)(h.Clickable, {
className: es.maybeClickable,
onClick: n,
children: t
  });
}

function em(e) {
  var t;
  let {
thumbnailSrc: n,
thumbnailFallbackSrc: a,
thumbnailTitle: s,
title: l,
subtitle: r,
badges: o,
children: c,
onClickThumbnail: d,
onClickTitle: u,
onClickSubtitle: p,
...m
  } = e, {
entry: _
  } = m, f = (0, z.d)(_), E = (0, S.Z)({
location: 'ContentPopout',
applicationId: f ? null === (t = _.extra) || void 0 === t ? void 0 : t.application_id : void 0,
source: v.m1.ActivityCard,
trackEntryPointImpression: !0,
sourceUserId: _.author_id
  }), C = f ? E : void 0;
  return (0, i.jsxs)(er, {
backgroundImgSrc: n,
children: [
  (0, i.jsx)(eh, {
    ...m
  }),
  (0, i.jsxs)('div', {
    className: es.popoutContentBody,
    children: [
      (0, i.jsx)('div', {
        className: es.popoutThumbnailContainer,
        children: (0, i.jsx)(ep, {
          onClick: null != d ? d : C,
          children: (0, i.jsx)(ee.f, {
            size: 72,
            constrain: 'width',
            alt: s,
            src: n,
            fallbackSrc: a,
            className: es.contentImage
          })
        })
      }),
      (0, i.jsx)(h.Spacer, {
        size: 16,
        horizontal: !0
      }),
      (0, i.jsxs)('div', {
        children: [
          (0, i.jsx)(ep, {
            onClick: null != u ? u : C,
            children: (0, i.jsx)(h.Heading, {
              variant: 'heading-md/medium',
              className: es.popoutTextPrimary,
              lineClamp: 3,
              children: l
            })
          }),
          null != r ? (0, i.jsx)(ep, {
            onClick: null != p ? p : C,
            children: (0, i.jsx)(h.Text, {
              variant: 'text-sm/normal',
              className: es.popoutTextSecondary,
              children: r
            })
          }) : null,
          (0, i.jsx)(h.Spacer, {
            size: 8
          }),
          o
        ]
      })
    ]
  }),
  c
]
  });
}

function e_(e) {
  let {
title: t,
badges: n,
stream: s,
...l
  } = e, r = (0, c.e7)([P.Z], () => P.Z.getChannel(null == s ? void 0 : s.channelId)), [o] = a.useMemo(() => (0, Z.p9)(r, U.Z, O.Z, y.Z, N.Z), [r]);
  return null == s ? null : (0, i.jsxs)(er, {
className: es.streamingPopoutHero,
children: [
  (0, i.jsx)(eh, {
    ...l,
    headerIcons: (0, i.jsx)(H.ZP, {
      size: H.ZP.Sizes.SMALL
    })
  }),
  (0, i.jsx)(h.Spacer, {
    size: 16
  }),
  (0, i.jsx)(ep, {
    onClick: o ? () => {
      _.default.selectVoiceChannel(s.channelId), (0, f.iV)(s);
    } : void 0,
    children: (0, i.jsxs)('div', {
      style: {
        position: 'relative'
      },
      children: [
        (0, i.jsx)(A.Z, {
          className: es.streamingPopoutHero,
          stream: s
        }),
        o && (0, i.jsx)('div', {
          className: es.streamCTA,
          children: (0, i.jsx)(h.Text, {
            variant: 'text-md/normal',
            children: ea.Z.Messages.WATCH_STREAM
          })
        })
      ]
    })
  }),
  (0, i.jsx)(h.Spacer, {
    size: 16
  }),
  (0, i.jsx)(h.Heading, {
    variant: 'heading-md/semibold',
    className: es.popoutTextPrimary,
    lineClamp: 3,
    children: t
  }),
  (0, i.jsx)(h.Spacer, {
    size: 8
  }),
  n
]
  });
}

function ef(e) {
  let {
IconComponent: t,
children: n,
className: a,
...s
  } = e;
  return (0, i.jsxs)(h.Button, {
...s,
className: l()(a, es.primaryButton),
innerClassName: null != t ? es.iconButton : void 0,
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