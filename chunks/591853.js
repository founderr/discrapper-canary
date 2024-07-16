n.d(t, {
  Ll: function() {
return em;
  },
  St: function() {
return er;
  },
  WT: function() {
return eo;
  },
  jL: function() {
return ep;
  },
  wG: function() {
return eh;
  },
  yR: function() {
return ea;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
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
  b = n(359110),
  R = n(171368),
  j = n(12168),
  L = n(592125),
  P = n(430824),
  O = n(496675),
  y = n(699516),
  D = n(9156),
  k = n(979651),
  U = n(938475),
  w = n(409216),
  B = n(368666),
  H = n(626135),
  G = n(768581),
  V = n(5192),
  F = n(792125),
  W = n(26033),
  z = n(192918),
  Y = n(22211),
  K = n(571243),
  q = n(69259),
  X = n(206295),
  Q = n(111386),
  J = n(43205),
  $ = n(469153),
  ee = n(206583),
  et = n(981631),
  en = n(689938),
  ei = n(331679);

function ea(e) {
  let {
children: t
  } = e, n = a.useRef(null);
  return (0, h.useFocusLock)(n), (0, i.jsx)('div', {
className: ei.popout,
ref: n,
children: t
  });
}

function el(e) {
  let {
children: t,
backgroundImgSrc: n,
className: a,
style: l = {}
  } = e, {
primaryColor: r,
secondaryColor: o
  } = (0, X.Z)(n);
  return (0, i.jsx)('div', {
'data-disable-adaptive-theme': !0,
className: s()(ei.hero, (0, F.Q)(et.BRd.DARK), a),
style: {
  background: 'linear-gradient(45deg, '.concat(r, ', ').concat(o, ')'),
  ...l
},
children: t
  });
}
let es = a.createContext(null);

function er(e) {
  let {
children: t
  } = e, n = a.useRef(null);
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)('div', {
    className: ei.interactionsContainerHeader,
    ref: e => n.current = e
  }),
  (0, i.jsx)('div', {
    className: ei.interactionsContainer,
    children: (0, i.jsx)(es.Provider, {
      value: n.current,
      children: t
    })
  })
]
  });
}

function eo(e) {
  let {
channel: t,
user: n,
generateReactionImage: l,
reactionImageAltText: s,
closePopout: r,
entry: _,
requestId: f,
buttons: E = [],
header: x
  } = e, [T, N] = a.useState(!1), [v, S] = a.useState(null), Z = (0, c.e7)([O.Z], () => O.Z.can(et.Plq.SEND_MESSAGES, t)), A = (0, K.a)({
location: 'PopoutReactor'
  }), [R, j] = a.useState(!1), [B, G] = a.useState(!1), {
voiceBar: F,
joinVoiceButton: W
  } = function(e) {
let {
  channel: t,
  entry: n,
  requestId: l
} = e, {
  streamPreviewUrl: s,
  channel: r
} = (0, Y.Z)(n), o = (0, c.e7)([P.Z], () => null != r ? P.Z.getGuild(r.guild_id) : void 0), d = (0, c.Wu)([U.ZP], () => null != r ? U.ZP.getVoiceStatesForChannel(r) : [], [r]), p = (0, c.e7)([k.Z], () => k.Z.isInChannel(null == r ? void 0 : r.id)), _ = a.useMemo(() => {
  for (let e of d) {
    let t = L.Z.getDMFromUserId(e.user.id),
      n = null != t && D.ZP.isChannelMuted(null, t),
      i = y.Z.isBlocked(e.user.id);
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
let f = null != s,
  E = () => {
    m.Z.updateChatOpen(r.id, !0), (0, b.Kh)(r.id), (0, q.L)(ee.xP.VOICE_CHANNEL_PREVIEWED, {
      entry: n,
      channelId: t.id,
      guildId: t.guild_id,
      requestId: l,
      destinationChannelId: r.id,
      destinationGuildId: r.guild_id
    });
  },
  C = _ ? en.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING : en.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
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
            className: ei.popoutBlockedWarningIcon
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
        className: ei.voiceChannelPopoutReactorHeader,
        children: [
          (0, i.jsx)(g, {
            children: e => (0, i.jsxs)(h.Clickable, {
              ...e,
              'aria-label': en.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
              onClick: E,
              className: ei.voiceChannelPopoutReactorChannel,
              children: [
                (0, i.jsx)(M.Z, {
                  guild: o,
                  size: M.Z.Sizes.SMOL,
                  className: ei.voiceChannelGuildIcon,
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
                  className: ei.voiceChannelName,
                  children: r.name
                })
              ]
            })
          }),
          (0, i.jsx)(w.Z, {
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
              className: ei.voiceChannelAdditionalParticipants,
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
        className: ei.primaryActionPopoutDivider
      })
    ]
  });
return {
  voiceBar: I,
  joinVoiceButton: p ? null : (0, i.jsx)(g, {
    children: e => (0, i.jsx)(em, {
      ...e,
      color: h.Button.Colors.GREEN,
      onClick: E,
      IconComponent: f ? h.ScreenIcon : h.VoiceNormalIcon,
      children: en.Z.Messages.PREVIEW
    })
  })
};
  }({
channel: t,
entry: _,
requestId: f
  }), z = null != W && 0 === E.length ? [W] : E, X = z.length > 0, J = z.length >= 2, [ea, el] = a.useState(!X), es = '#'.concat(t.name), er = V.ZP.getName(t.guild_id, t.id, n), eo = T ? en.Z.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : en.Z.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL, ed = async e => {
if (null != e) {
  if (H.default.track(et.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
      surface_type: ee.Kd.GUILD_MEMBER_LIST,
      channel_id: t.id,
      guild_id: t.guild_id
    }), A) {
    let a;
    if ((0, I.EW)(d.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), j(!0), G(!1), T)
      a = t;
    else {
      var i;
      let e = await p.Z.getOrEnsurePrivateChannel(n.id);
      a = null !== (i = L.Z.getChannel(e)) && void 0 !== i ? i : null;
    }
    return o()(null != a, 'Send channel must be defined'), eh({
      reply: ':'.concat(e.name, ':'),
      sendToChannel: a,
      onComplete: () => {
        G(!0), setTimeout(() => {
          j(!1), r();
        }, 600);
      },
      interactionType: ee.xP.REACTION_EMOJI_REACT_SENT
    });
  }
  el(!0), null != v && (v.insertEmoji(e, !1, !1), v.focus());
}
  }, eu = async e => {
let i;
if (A && (0, I.EW)(d.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), T)
  i = t;
else {
  let e = await p.Z.openPrivateChannel(n.id, !1, !1),
    t = L.Z.getChannel(e);
  o()(null != t, 'DM channel must be defined'), i = t;
}
let a = i.type === et.d4z.DM ? ee.xP.DM_REACTION_MESSAGE_SENT : ee.xP.CHANNEL_REACTION_MESSAGE_SENT;
return eh({
  reply: e,
  sendToChannel: i,
  onComplete: r,
  interactionType: a
});
  }, eh = async e => {
var n;
let {
  reply: i,
  sendToChannel: a,
  onComplete: r,
  interactionType: c
} = e;
let d = await (n = l, async function() {
  for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  try {
    return await n(...t);
  } catch (e) {
    throw e;
  }
})(a.id);
o()(null != d, 'Reaction image must be defined'), await (0, g.B)({
  file: d,
  channel: a,
  altText: s,
  reply: i
}), (0, q.L)(c, {
  entry: _,
  channelId: t.id,
  guildId: t.guild_id,
  requestId: f,
  destinationChannelId: a.id,
  destinationGuildId: a.guild_id
}), null == r || r();
  }, ep = null != x ? x : null != F ? F : void 0;
  return (0, i.jsxs)('div', {
style: {
  pointerEvents: R ? 'none' : 'all'
},
children: [
  (0, i.jsx)($.Z, {
    sent: B,
    shown: R,
    className: ei.toastContainer
  }),
  null != ep ? ep : A ? (0, i.jsx)(Q.Z, {
    children: (0, i.jsxs)('div', {
      className: ei.emojiHotrailShareToChannel,
      children: [
        (0, i.jsx)(ec, {
          channel: t,
          onClickSuggestion: ed
        }),
        (0, i.jsx)(C.dE, {
          onSelectEmoji: ed
        })
      ]
    })
  }) : (0, i.jsx)('div', {
    className: ei.emojiHotrailShareToChannel,
    children: (0, i.jsx)(ec, {
      channel: t,
      onClickSuggestion: ed
    })
  }),
  (0, i.jsxs)('div', {
    className: ea ? ei.inputContainerShareToChannel : ei.hiddenButRenderedInputField,
    children: [
      (0, i.jsx)(C.A7, {
        placeholder: en.Z.Messages.TEXTAREA_PLACEHOLDER.format({
          channel: T ? es : '@'.concat(er)
        }),
        onEnter: eu,
        setEditorRef: e => S(e),
        channel: T ? t : void 0,
        showEmojiButton: null != ep,
        renderAttachButton: Z ? () => (0, i.jsx)(h.Tooltip, {
          text: eo,
          children: e => (0, i.jsx)(h.Clickable, {
            ...e,
            className: ei.shareToChannelButton,
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
      X && (0, i.jsx)(h.Clickable, {
        onClick: () => el(!1),
        className: ei.primaryActionPopoutMessageCloseIcon,
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
    className: ei.primaryActionPopoutActionButtons,
    children: [
      (0, i.jsxs)(h.Button, {
        className: ei.secondaryButton,
        color: h.Button.Colors.CUSTOM,
        onClick: () => el(!0),
        innerClassName: ei.iconButton,
        size: J ? h.Button.Sizes.MIN : h.Button.Sizes.LARGE,
        children: [
          (0, i.jsx)(h.ChatIcon, {
            size: 'custom',
            width: 20,
            height: 20,
            colorClass: ei.secondaryText
          }),
          !J && (0, i.jsx)(h.Text, {
            variant: 'text-md/semibold',
            className: ei.secondaryText,
            children: en.Z.Messages.USER_POPOUT_MESSAGE
          })
        ]
      }, 'toggleMessageMode'),
      z
    ]
  })
]
  });
}
let ec = e => {
  let {
channel: t,
onClickSuggestion: n
  } = e, [l, s] = a.useState(!1);
  a.useEffect(() => {
s(!0);
  }, []);
  let r = !!E.Z.keyboardModeEnabled && !l,
o = (0, x.wC)(t.guild_id).slice(0, 5).map(e => null == e.id ? {
  emoji: e,
  url: e.url
} : {
  emoji: e,
  url: (0, G.gT)({
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
      text: en.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
        emojiName: t.name
      }),
      position: 'top',
      'aria-label': en.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
        emojiName: t.name
      }),
      color: h.Tooltip.Colors.PRIMARY,
      shouldShow: !r && void 0,
      children: (0, i.jsx)(j.u, {
        emoji: t,
        isDisabled: !l,
        onClick: () => n(t),
        className: ei.emoji
      })
    })
  }, t.name) : null;
})
  });
};

function ed(e) {
  let {
channel: t,
userDescription: n,
headerIcons: a,
entry: l
  } = e, r = t.guild_id, {
displayParticipants: o,
participant1: c,
participant2: d,
numOtherParticipants: u
  } = (0, z.Z)(l, 3), p = [
c,
d
  ];
  return (0, i.jsxs)('div', {
className: ei.popoutContentHeader,
children: [
  (0, i.jsxs)('div', {
    className: ei.popoutUserContainer,
    children: [
      (0, i.jsx)(T.Z, {
        maxUsers: 3,
        users: o,
        size: h.AvatarSizes.SIZE_24,
        avatarClassName: ei.popoutStackedAvatar,
        hideOverflowCount: !0,
        disableUsernameTooltip: !0
      }),
      (0, i.jsx)(h.Spacer, {
        size: 8,
        horizontal: !0
      }),
      (0, i.jsx)(h.Heading, {
        variant: 'heading-sm/normal',
        className: ei.popoutTextSecondary,
        children: n.format({
          user1: V.ZP.getName(r, t.id, p[0]),
          user2: V.ZP.getName(r, t.id, p[1]),
          countOthers: u,
          nameHook: (e, t) => (0, i.jsx)(h.Clickable, {
            tag: 'span',
            onClick: () => (0, R.openUserProfileModal)({
              userId: p[parseInt(t)].id
            }),
            className: ei.maybeClickable,
            children: (0, i.jsx)(h.Text, {
              variant: 'text-sm/medium',
              className: s()(ei.popoutUsername, ei.popoutTextPrimary),
              children: e
            }, t)
          })
        })
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: ei.popoutHeaderIcons,
    children: a
  })
]
  });
}

function eu(e) {
  let {
children: t,
onClick: n
  } = e;
  return null == n ? (0, i.jsx)(i.Fragment, {
children: t
  }) : (0, i.jsx)(h.Clickable, {
className: ei.maybeClickable,
onClick: n,
children: t
  });
}

function eh(e) {
  var t;
  let {
thumbnailSrc: n,
thumbnailFallbackSrc: a,
thumbnailTitle: l,
title: s,
subtitle: r,
badges: o,
children: c,
onClickThumbnail: d,
onClickTitle: u,
onClickSubtitle: p,
...m
  } = e, {
entry: _
  } = m, f = (0, W.d)(_), E = (0, S.Z)({
location: 'ContentPopout',
applicationId: f ? null === (t = _.extra) || void 0 === t ? void 0 : t.application_id : void 0,
source: v.m1.ActivityCard,
trackEntryPointImpression: !0,
sourceUserId: _.author_id
  }), C = f ? E : void 0;
  return (0, i.jsxs)(el, {
backgroundImgSrc: n,
children: [
  (0, i.jsx)(ed, {
    ...m
  }),
  (0, i.jsxs)('div', {
    className: ei.popoutContentBody,
    children: [
      (0, i.jsx)('div', {
        className: ei.popoutThumbnailContainer,
        children: (0, i.jsx)(eu, {
          onClick: null != d ? d : C,
          children: (0, i.jsx)(J.f, {
            size: 72,
            constrain: 'width',
            alt: l,
            src: n,
            fallbackSrc: a,
            className: ei.contentImage
          })
        })
      }),
      (0, i.jsx)(h.Spacer, {
        size: 16,
        horizontal: !0
      }),
      (0, i.jsxs)('div', {
        children: [
          (0, i.jsx)(eu, {
            onClick: null != u ? u : C,
            children: (0, i.jsx)(h.Heading, {
              variant: 'heading-md/medium',
              className: ei.popoutTextPrimary,
              lineClamp: 3,
              children: s
            })
          }),
          null != r ? (0, i.jsx)(eu, {
            onClick: null != p ? p : C,
            children: (0, i.jsx)(h.Text, {
              variant: 'text-sm/normal',
              className: ei.popoutTextSecondary,
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

function ep(e) {
  let {
title: t,
badges: n,
stream: l,
...s
  } = e, r = (0, c.e7)([L.Z], () => L.Z.getChannel(null == l ? void 0 : l.channelId)), [o] = a.useMemo(() => (0, Z.p9)(r, k.Z, P.Z, O.Z, N.Z), [r]);
  return null == l ? null : (0, i.jsxs)(el, {
className: ei.streamingPopoutHero,
children: [
  (0, i.jsx)(ed, {
    ...s,
    headerIcons: (0, i.jsx)(B.ZP, {
      size: B.ZP.Sizes.SMALL
    })
  }),
  (0, i.jsx)(h.Spacer, {
    size: 16
  }),
  (0, i.jsx)(eu, {
    onClick: o ? () => {
      _.default.selectVoiceChannel(l.channelId), (0, f.iV)(l);
    } : void 0,
    children: (0, i.jsxs)('div', {
      style: {
        position: 'relative'
      },
      children: [
        (0, i.jsx)(A.Z, {
          className: ei.streamingPopoutHero,
          stream: l
        }),
        o && (0, i.jsx)('div', {
          className: ei.streamCTA,
          children: (0, i.jsx)(h.Text, {
            variant: 'text-md/normal',
            children: en.Z.Messages.WATCH_STREAM
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
    className: ei.popoutTextPrimary,
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

function em(e) {
  let {
IconComponent: t,
children: n,
className: a,
...l
  } = e;
  return (0, i.jsxs)(h.Button, {
...l,
className: s()(a, ei.primaryButton),
innerClassName: null != t ? ei.iconButton : void 0,
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