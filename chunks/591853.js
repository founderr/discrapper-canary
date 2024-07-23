n.d(t, {
  Ll: function() {
return ex;
  },
  St: function() {
return em;
  },
  WT: function() {
return e_;
  },
  jL: function() {
return eI;
  },
  wG: function() {
return eg;
  },
  yR: function() {
return eu;
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
  I = n(557135),
  x = n(605236),
  T = n(543241),
  N = n(318374),
  v = n(258609),
  S = n(810568),
  Z = n(168524),
  A = n(382182),
  M = n(871118),
  b = n(565138),
  R = n(66999),
  j = n(790642),
  L = n(359110),
  P = n(171368),
  O = n(12168),
  y = n(592125),
  D = n(430824),
  k = n(496675),
  U = n(699516),
  w = n(9156),
  B = n(594174),
  H = n(979651),
  G = n(938475),
  V = n(409216),
  F = n(368666),
  W = n(626135),
  z = n(768581),
  Y = n(5192),
  K = n(792125),
  q = n(26033),
  X = n(656709),
  Q = n(192918),
  J = n(22211),
  $ = n(571243),
  ee = n(69259),
  et = n(206295),
  en = n(111386),
  ei = n(797342),
  ea = n(43205),
  es = n(896449),
  el = n(469153),
  er = n(206583),
  eo = n(981631),
  ec = n(689938),
  ed = n(164384);

function eu(e) {
  let {
children: t
  } = e, n = a.useRef(null);
  return (0, h.useFocusLock)(n), (0, i.jsx)('div', {
className: ed.popout,
ref: n,
children: t
  });
}

function eh(e) {
  let {
children: t,
backgroundImgSrc: n,
className: a,
style: s = {}
  } = e, {
primaryColor: r,
secondaryColor: o
  } = (0, et.Z)(n);
  return null != n && (s.background = 'linear-gradient(45deg, '.concat(r, ', ').concat(o, ')')), (0, i.jsx)('div', {
'data-disable-adaptive-theme': !0,
className: l()(ed.hero, (0, K.Q)(eo.BRd.DARK), a),
style: s,
children: t
  });
}
let ep = a.createContext(null);

function em(e) {
  let {
children: t
  } = e, n = a.useRef(null);
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)('div', {
    className: ed.interactionsContainerHeader,
    ref: e => n.current = e
  }),
  (0, i.jsx)('div', {
    className: ed.interactionsContainer,
    children: (0, i.jsx)(ep.Provider, {
      value: n.current,
      children: t
    })
  })
]
  });
}

function e_(e) {
  let {
channel: t,
user: n,
generateReactionImage: s,
reactionImageAltText: l,
closePopout: r,
entry: _,
requestId: f,
buttons: E = [],
header: T
  } = e, [N, v] = a.useState(!1), [S, Z] = a.useState(null), A = (0, c.e7)([k.Z], () => k.Z.can(eo.Plq.SEND_MESSAGES, t)), M = (0, $.a)({
location: 'PopoutReactor'
  }), [P, O] = a.useState(!1), [B, F] = a.useState(!1), {
voiceBar: z,
joinVoiceButton: K
  } = function(e) {
let {
  channel: t,
  entry: n,
  requestId: s
} = e, {
  streamPreviewUrl: l,
  channel: r
} = (0, J.Z)(n), {
  isRich: o,
  appName: d
} = (0, ei.n)(n), {
  needSubscriptionToAccess: p
} = (0, R.Z)(t.id), _ = (0, c.e7)([D.Z], () => null != r ? D.Z.getGuild(r.guild_id) : void 0), f = (0, c.Wu)([G.ZP], () => null != r ? G.ZP.getVoiceStatesForChannel(r) : [], [r]), E = (0, c.e7)([H.Z], () => H.Z.isInChannel(null == r ? void 0 : r.id)), C = a.useMemo(() => {
  for (let e of f) {
    let t = y.Z.getDMFromUserId(e.user.id),
      n = null != t && w.ZP.isChannelMuted(null, t),
      i = U.Z.isBlocked(e.user.id);
    if (n || i)
      return !0;
  }
  return !1;
}, [f]);
if (null == r || null == _)
  return {
    voiceBar: void 0,
    joinVoiceButton: void 0
  };
let g = null != l,
  x = () => {
    m.Z.updateChatOpen(r.id, !0), (0, L.Kh)(r.id), (0, ee.L)(er.xP.VOICE_CHANNEL_PREVIEWED, {
      entry: n,
      channelId: t.id,
      guildId: t.guild_id,
      requestId: s,
      destinationChannelId: r.id,
      destinationGuildId: r.guild_id,
      richPresenceName: o ? d : void 0
    });
  },
  T = () => {
    I.Z.handleVoiceConnect({
      channel: r,
      connected: E,
      needSubscriptionToAccess: p,
      routeDirectlyToChannel: !0
    });
  },
  N = e => {
    let {
      children: t,
      text: n,
      hasBlockedOrMutedVCParticipant: a
    } = e, s = a ? (0, i.jsxs)(i.Fragment, {
      children: [
        a && (0, i.jsx)(h.WarningIcon, {
          size: 'custom',
          width: 13,
          height: 13,
          className: ed.popoutBlockedWarningIcon
        }),
        ec.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING
      ]
    }) : n;
    return (0, i.jsx)(h.Tooltip, {
      'aria-label': a ? ec.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING : null != n && n,
      text: s,
      shouldShow: !0,
      children: t
    }, 'voice-preview');
  },
  v = (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsxs)('div', {
        className: ed.voiceChannelPopoutReactorHeader,
        children: [
          (0, i.jsx)(N, {
            text: ec.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
            hasBlockedOrMutedVCParticipant: C,
            children: e => (0, i.jsxs)(h.Clickable, {
              ...e,
              'aria-label': ec.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
              onClick: x,
              className: ed.voiceChannelPopoutReactorChannel,
              children: [
                (0, i.jsx)(b.Z, {
                  guild: _,
                  size: b.Z.Sizes.SMOL,
                  className: ed.voiceChannelGuildIcon,
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
                  className: ed.voiceChannelName,
                  children: r.name
                })
              ]
            })
          }),
          (0, i.jsx)(V.Z, {
            guildId: _.id,
            users: f,
            max: 3,
            renderUser: (e, t) => (0, i.jsx)(h.Avatar, {
              src: e.user.getAvatarURL(_.id, 16),
              size: h.AvatarSizes.SIZE_16,
              'aria-label': 'avatar',
              className: t
            }),
            renderMoreUsers: e => (0, i.jsx)('div', {
              className: ed.voiceChannelAdditionalParticipants,
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
        className: ed.primaryActionPopoutDivider
      })
    ]
  });
return {
  voiceBar: v,
  joinVoiceButton: E ? null : (0, i.jsx)(N, {
    hasBlockedOrMutedVCParticipant: C,
    children: e => (0, i.jsx)(ex, {
      ...e,
      color: h.Button.Colors.GREEN,
      onClick: T,
      IconComponent: g ? h.ScreenIcon : h.VoiceNormalIcon,
      children: g ? ec.Z.Messages.WATCH : ec.Z.Messages.JOIN
    })
  })
};
  }({
channel: t,
entry: _,
requestId: f
  }), q = null != K && 0 === E.length ? [K] : E, Q = q.length > 0, et = q.length >= 2, [ea, es] = a.useState(!Q), eu = '#'.concat(t.name), eh = Y.ZP.getName(t.guild_id, t.id, n), ep = N ? ec.Z.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : ec.Z.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL, em = async e => {
if (null != e) {
  if (W.default.track(eo.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
      surface_type: er.Kd.GUILD_MEMBER_LIST,
      channel_id: t.id,
      guild_id: t.guild_id
    }), M) {
    let a;
    if ((0, x.EW)(d.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), O(!0), F(!1), N)
      a = t;
    else {
      var i;
      let e = await p.Z.getOrEnsurePrivateChannel(n.id);
      a = null !== (i = y.Z.getChannel(e)) && void 0 !== i ? i : null;
    }
    return o()(null != a, 'Send channel must be defined'), eE({
      reply: ':'.concat(e.name, ':'),
      sendToChannel: a,
      onComplete: () => {
        F(!0), setTimeout(() => {
          O(!1), r();
        }, 600);
      },
      interactionType: er.xP.REACTION_EMOJI_REACT_SENT
    });
  }
  es(!0), null != S && (S.insertEmoji(e, !1, !1), S.focus());
}
  }, e_ = async e => {
let i;
if (M && (0, x.EW)(d.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), N)
  i = t;
else {
  let e = await p.Z.openPrivateChannel(n.id, !1, !1),
    t = y.Z.getChannel(e);
  o()(null != t, 'DM channel must be defined'), i = t;
}
let a = i.type === eo.d4z.DM ? er.xP.DM_REACTION_MESSAGE_SENT : er.xP.CHANNEL_REACTION_MESSAGE_SENT;
return eE({
  reply: e,
  sendToChannel: i,
  onComplete: r,
  interactionType: a
});
  }, eE = async e => {
let {
  reply: n,
  sendToChannel: i,
  onComplete: a,
  interactionType: r
} = e;
if ((0, j.Io)('ContentPopout Reactor'))
  await (0, X.p)({
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
(0, ee.L)(r, {
  entry: _,
  channelId: t.id,
  guildId: t.guild_id,
  requestId: f,
  destinationChannelId: i.id,
  destinationGuildId: i.guild_id
}), null == a || a();
  }, eC = null != T ? T : null != z ? z : void 0;
  return (0, i.jsxs)('div', {
style: {
  pointerEvents: P ? 'none' : 'all'
},
children: [
  (0, i.jsx)(el.Z, {
    sent: B,
    shown: P,
    className: ed.toastContainer
  }),
  null != eC ? eC : M ? (0, i.jsx)(en.Z, {
    children: (0, i.jsxs)('div', {
      className: ed.emojiHotrailShareToChannel,
      children: [
        (0, i.jsx)(ef, {
          channel: t,
          onClickSuggestion: em
        }),
        (0, i.jsx)(C.dE, {
          onSelectEmoji: em
        })
      ]
    })
  }) : (0, i.jsx)('div', {
    className: ed.emojiHotrailShareToChannel,
    children: (0, i.jsx)(ef, {
      channel: t,
      onClickSuggestion: em
    })
  }),
  (0, i.jsxs)('div', {
    className: ea ? ed.inputContainerShareToChannel : ed.hiddenButRenderedInputField,
    children: [
      (0, i.jsx)(C.A7, {
        placeholder: ec.Z.Messages.TEXTAREA_PLACEHOLDER.format({
          channel: N ? eu : '@'.concat(eh)
        }),
        onEnter: e_,
        setEditorRef: e => Z(e),
        channel: N ? t : void 0,
        showEmojiButton: null != eC,
        renderAttachButton: A ? () => (0, i.jsx)(h.Tooltip, {
          text: ep,
          children: e => (0, i.jsx)(h.Clickable, {
            ...e,
            className: ed.shareToChannelButton,
            onClick: () => v(e => !e),
            children: N ? (0, i.jsx)(h.TextIcon, {
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
      Q && (0, i.jsx)(h.Clickable, {
        onClick: () => es(!1),
        className: ed.primaryActionPopoutMessageCloseIcon,
        children: (0, i.jsx)(h.CloseSmallIcon, {
          size: 'custom',
          width: 20,
          height: 20,
          color: u.Z.colors.ICON_PRIMARY
        })
      })
    ]
  }),
  !1 === ea && (0, i.jsxs)('div', {
    className: ed.primaryActionPopoutActionButtons,
    children: [
      (0, i.jsxs)(h.Button, {
        className: ed.secondaryButton,
        color: h.Button.Colors.CUSTOM,
        onClick: () => es(!0),
        innerClassName: ed.iconButton,
        size: et ? h.Button.Sizes.MIN : h.Button.Sizes.LARGE,
        children: [
          (0, i.jsx)(h.ChatIcon, {
            size: 'custom',
            width: 20,
            height: 20,
            colorClass: ed.secondaryText
          }),
          !et && (0, i.jsx)(h.Text, {
            variant: 'text-md/semibold',
            className: ed.secondaryText,
            children: ec.Z.Messages.USER_POPOUT_MESSAGE
          })
        ]
      }, 'toggleMessageMode'),
      q
    ]
  })
]
  });
}
let ef = e => {
  let {
channel: t,
onClickSuggestion: n
  } = e, [s, l] = a.useState(!1);
  a.useEffect(() => {
l(!0);
  }, []);
  let r = !!E.Z.keyboardModeEnabled && !s,
o = (0, T.wC)(t.guild_id).slice(0, 5).map(e => null == e.id ? {
  emoji: e,
  url: e.url
} : {
  emoji: e,
  url: (0, z.gT)({
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
      text: ec.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
        emojiName: t.name
      }),
      position: 'top',
      'aria-label': ec.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
        emojiName: t.name
      }),
      color: h.Tooltip.Colors.PRIMARY,
      shouldShow: !r && void 0,
      children: (0, i.jsx)(O.u, {
        emoji: t,
        isDisabled: !s,
        onClick: () => n(t),
        className: ed.emoji
      })
    })
  }, t.name) : null;
})
  });
};

function eE(e) {
  let {
channel: t,
userDescription: n,
entry: a
  } = e, s = t.guild_id, {
displayParticipants: r,
participant1: o,
participant2: d,
numOtherParticipants: u
  } = (0, Q.Z)(a, 3), p = (0, c.e7)([B.default], () => B.default.getUser(a.author_id)), {
streamPreviewUrl: m
  } = (0, J.Z)(a), _ = [
o,
d
  ];
  return (0, i.jsxs)('div', {
className: ed.popoutContentHeader,
children: [
  (0, i.jsxs)('div', {
    className: ed.popoutUserContainer,
    children: [
      (0, i.jsx)(N.Z, {
        maxUsers: 3,
        users: r,
        size: h.AvatarSizes.SIZE_24,
        avatarClassName: ed.popoutStackedAvatar,
        hideOverflowCount: !0,
        disableUsernameTooltip: !0
      }),
      (0, i.jsx)(h.Spacer, {
        size: 8,
        horizontal: !0
      }),
      (0, i.jsx)(h.Heading, {
        variant: 'heading-sm/normal',
        className: ed.popoutTextSecondary,
        children: n.format({
          user1: Y.ZP.getName(s, t.id, _[0]),
          user2: Y.ZP.getName(s, t.id, _[1]),
          countOthers: u,
          nameHook: (e, t) => (0, i.jsx)(h.Clickable, {
            tag: 'span',
            onClick: () => (0, P.openUserProfileModal)({
              userId: _[parseInt(t)].id
            }),
            className: ed.maybeClickable,
            children: (0, i.jsx)(h.Text, {
              variant: 'text-sm/medium',
              className: l()(ed.popoutUsername, ed.popoutTextPrimary),
              children: e
            }, t)
          })
        })
      })
    ]
  }),
  null != m && (0, i.jsx)(F.ZP, {
    size: F.ZP.Sizes.SMALL
  }),
  null != p && (0, i.jsx)(es.Z, {
    user: p,
    channel: t,
    guildId: s,
    entry: a
  })
]
  });
}

function eC(e) {
  let {
children: t,
onClick: n
  } = e;
  return null == n ? (0, i.jsx)(i.Fragment, {
children: t
  }) : (0, i.jsx)(h.Clickable, {
className: ed.maybeClickable,
onClick: n,
children: t
  });
}

function eg(e) {
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
  } = f, C = (0, q.dX)(E), g = (0, Z.Z)({
location: 'ContentPopout',
applicationId: C ? null === (t = E.extra) || void 0 === t ? void 0 : t.application_id : void 0,
source: S.m1.ActivityCard,
trackEntryPointImpression: !0,
sourceUserId: E.author_id
  }), I = C ? g : void 0;
  return (0, i.jsxs)('div', {
className: ed.popoutContentWrapper,
children: [
  (0, i.jsx)(eE, {
    ...f
  }),
  (0, i.jsxs)(eh, {
    backgroundImgSrc: n,
    children: [
      (0, i.jsxs)('div', {
        className: ed.popoutHeroInner,
        children: [
          (0, i.jsx)('div', {
            className: ed.popoutThumbnailContainer,
            children: (0, i.jsx)(eC, {
              onClick: null != u ? u : I,
              children: (0, i.jsx)(ea.f, {
                size: 72,
                constrain: 'width',
                alt: s,
                src: n,
                fallbackSrc: a,
                className: ed.contentImage
              })
            })
          }),
          (0, i.jsxs)('div', {
            className: ed.popoutHeroBody,
            children: [
              (0, i.jsx)(eC, {
                onClick: null != p ? p : I,
                children: (0, i.jsx)(h.Heading, {
                  variant: 'heading-md/medium',
                  className: l()(ed.popoutHeroTextPrimary, {
                    [ed.popoutHeroTextPrimaryShort]: null != _
                  }),
                  lineClamp: 3,
                  children: r
                })
              }),
              null != o ? (0, i.jsx)(eC, {
                onClick: null != m ? m : I,
                children: (0, i.jsx)(h.Text, {
                  variant: 'text-sm/normal',
                  className: ed.popoutHeroTextSecondary,
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
            className: ed.popoutHeaderIcons,
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

function eI(e) {
  var t;
  let {
title: n,
subtitle: s,
badges: l,
stream: r,
thumbnailSrc: o,
thumbnailFallbackSrc: d,
thumbnailTitle: u,
onClickThumbnail: p,
onClickTitle: m,
onClickSubtitle: E,
...C
  } = e, g = (0, c.e7)([y.Z], () => y.Z.getChannel(null == r ? void 0 : r.channelId)), [I] = a.useMemo(() => (0, A.p9)(g, H.Z, D.Z, k.Z, v.Z), [g]), {
entry: x
  } = C, T = (0, q.dX)(x), N = (0, Z.Z)({
location: 'ContentPopout',
applicationId: T ? null === (t = x.extra) || void 0 === t ? void 0 : t.application_id : void 0,
source: S.m1.ActivityCard,
trackEntryPointImpression: !0,
sourceUserId: x.author_id
  }), b = T ? N : void 0;
  return null == r ? null : (0, i.jsxs)('div', {
className: ed.popoutContentWrapper,
children: [
  (0, i.jsx)(eE, {
    ...C
  }),
  (0, i.jsxs)('div', {
    className: ed.streamingPopoutHero,
    children: [
      (0, i.jsxs)('div', {
        className: ed.streamingPopoutHeader,
        children: [
          null != o && (0, i.jsx)('div', {
            className: ed.popoutThumbnailContainer,
            children: (0, i.jsx)(eC, {
              onClick: null != p ? p : b,
              children: (0, i.jsx)(ea.f, {
                size: 72,
                constrain: 'width',
                alt: u,
                src: o,
                fallbackSrc: d,
                className: ed.contentImage
              })
            })
          }),
          (0, i.jsxs)('div', {
            className: ed.streamingPopoutHeaderText,
            children: [
              (0, i.jsx)(eC, {
                onClick: null != m ? m : b,
                children: (0, i.jsx)(h.Heading, {
                  variant: 'heading-md/semibold',
                  className: ed.popoutTextPrimary,
                  lineClamp: 3,
                  children: n
                })
              }),
              null != s ? (0, i.jsx)(eC, {
                onClick: null != E ? E : b,
                children: (0, i.jsx)(h.Text, {
                  variant: 'text-sm/normal',
                  className: ed.popoutHeroTextSecondary,
                  children: s
                })
              }) : null,
              (0, i.jsx)(h.Spacer, {
                size: 8
              }),
              l
            ]
          })
        ]
      }),
      (0, i.jsx)(eC, {
        onClick: I ? () => {
          _.default.selectVoiceChannel(r.channelId), (0, f.iV)(r);
        } : void 0,
        children: (0, i.jsxs)('div', {
          style: {
            position: 'relative'
          },
          children: [
            (0, i.jsx)(M.Z, {
              className: ed.streamingPopoutImg,
              stream: r
            }),
            I && (0, i.jsx)('div', {
              className: ed.streamCTA,
              children: (0, i.jsx)(h.Text, {
                variant: 'text-md/normal',
                children: ec.Z.Messages.WATCH_STREAM
              })
            })
          ]
        })
      })
    ]
  })
]
  });
}

function ex(e) {
  let {
IconComponent: t,
children: n,
className: a,
...s
  } = e;
  return (0, i.jsxs)(h.Button, {
...s,
className: l()(a, ed.primaryButton),
innerClassName: null != t ? ed.iconButton : void 0,
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