t.d(n, {
  Z: function() {
return w;
  }
}), t(47120);
var i = t(735250),
  l = t(470079),
  a = t(120356),
  o = t.n(a),
  s = t(892814),
  r = t(442837),
  d = t(481060),
  u = t(166459),
  c = t(476326),
  m = t(213459),
  h = t(581364),
  I = t(667204),
  p = t(147391),
  E = t(688465),
  C = t(978983),
  x = t(592125),
  g = t(703558),
  M = t(430824),
  f = t(626135),
  N = t(823379),
  T = t(399654),
  _ = t(844439),
  v = t(957552),
  A = t(981631),
  j = t(689938),
  O = t(89311),
  P = t(206227);
let y = ['1091213298818613408'];

function w(e) {
  let {
toggleShowMenu: n,
showMenu: t,
className: l,
channelId: a,
imageUrl: o,
mimeType: s
  } = e, u = (0, r.e7)([x.Z], () => x.Z.getChannel(a));
  return null == u ? null : (0, i.jsx)(d.Popout, {
renderPopout: e => {
  let {
    closePopout: n
  } = e;
  return (0, i.jsx)(S, {
    onClose: n,
    channel: u,
    imageUrl: o,
    mimeType: s
  });
},
position: 'right',
align: 'top',
animation: d.Popout.Animation.NONE,
onRequestClose: n,
shouldShow: t,
children: e => {
  let {
    onClick: t
  } = e;
  return (0, i.jsx)(d.Tooltip, {
    text: j.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
    children: e => (0, i.jsx)(d.Clickable, {
      ...e,
      className: l,
      focusProps: {
        offset: 2
      },
      onClick: n,
      'aria-label': j.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
      children: (0, i.jsx)(d.AppsIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 20,
        height: 20
      })
    })
  });
}
  });
}

function S(e) {
  let {
onSelect: n,
onClose: t,
channel: a,
imageUrl: o,
mimeType: x
  } = e, v = (0, r.e7)([M.Z], () => M.Z.getGuild(a.guild_id)), {
fetchState: P,
recommendationsSections: w
  } = function(e) {
let {
  channelId: n
} = e, t = s.I.CONTEXTUAL_IMAGE, i = l.useMemo(() => ({
  channelId: n,
  location: t,
  withCommands: !0
}), [
  n,
  t
]);
l.useEffect(() => {
  (0, T.a)(i);
}, [i]);
let {
  fetchState: a,
  recommendationsSections: o
} = (0, r.cj)([_.ZP], () => ({
  fetchState: _.ZP.getFetchState(i),
  recommendationsSections: _.ZP.getRecommendations(i)
}));
return {
  fetchState: a,
  recommendationsSections: o
};
  }({
channelId: a.id
  }), S = (0, m.PL)(!0, !0), L = (0, m.LD)(a.guild_id, !0), b = P === _.M.FETCHING, F = l.useMemo(() => {
let e = w.length > 0 ? w[0].items : void 0;
return void 0 === e ? [] : e.map(e => {
  let {
    application: n,
    commands: t
  } = e, i = null == t ? void 0 : t.find(e => y.includes(e.id));
  return null != i ? {
    command: (0, h.Z8)({
      rootCommand: i,
      command: i,
      applicationId: n.id
    }),
    application: n
  } : null;
}).filter(N.lm);
  }, [w]);
  l.useEffect(() => {
var e, n;
if (!b && 0 !== F.length)
  f.default.track(A.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
    guild_id: null !== (e = null == a ? void 0 : a.guild_id) && void 0 !== e ? e : '',
    channel_id: null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : '',
    application_ids: [...F.map(e => Number(e.application.id))],
    command_ids: [...F.map(e => Number(e.command.id))]
  });
  }, [
F,
a,
b
  ]);
  let Z = l.useCallback(async () => {
  let e = await fetch(o),
    n = new File([await e.arrayBuffer()], 'ContextualImageRecsUpload', {
      type: x.join('/')
    });
  u.Z.setFile({
    channelId: a.id,
    id: 'image',
    file: {
      id: 'image',
      file: n,
      platform: c.ow.WEB
    },
    draftType: g.d.SlashCommand
  });
}, [
  o,
  a.id,
  x
]),
D = l.useCallback(async e => {
  var n, t;
  let i = e.applicationId,
    l = (null === (n = S.result) || void 0 === n ? void 0 : n.sections[i]) != null,
    o = (null === (t = L.result) || void 0 === t ? void 0 : t.sections[i]) != null;
  l || o || m.ZP.queryInstallOnDemandApp(e.applicationId, a.id), await (0, p.L)({
    applicationId: i,
    userIndexState: S,
    guildIndexState: L
  }) && (await Z(), await (0, I.Z)({
    command: {
      ...e
    },
    optionValues: {
      image: [{
        text: 'free-images.jpg',
        type: 'text'
      }]
    },
    context: {
      channel: a,
      guild: v
    }
  }));
}, [
  a,
  v,
  S,
  L,
  Z
]);
  return (0, i.jsxs)(d.Menu, {
onSelect: n,
navId: 'image-context-commands-popout',
onClose: t,
'aria-label': j.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
children: [
  (0, i.jsx)(d.MenuItem, {
    id: 'menu-image-rec-header',
    render: () => (0, i.jsxs)('div', {
      className: O.flexRow,
      children: [
        (0, i.jsx)(d.Text, {
          className: O.title,
          variant: 'text-md/bold',
          color: 'header-primary',
          children: j.Z.Messages.APP_IMAGE_REC_MENU_HEADER
        }),
        (0, i.jsx)(E.Z, {})
      ]
    }),
    navigable: !1,
    disabled: !0
  }, 'menu-image-rec-header'),
  (0, i.jsx)(d.MenuSeparator, {}),
  b ? (0, i.jsx)(d.MenuItem, {
    id: 'menu-image-recs-placeholder',
    render: () => (0, i.jsx)(C.Z, {}),
    navigable: !1,
    disabled: !0
  }, 'menu-image-recs-placeholder') : (0, i.jsx)(i.Fragment, {
    children: F.map(e => (0, i.jsx)(d.MenuItem, {
      id: e.command.id,
      action: () => D(e.command),
      render: n => (0, i.jsx)(R, {
        ...e,
        isFocused: n.isFocused
      })
    }, e.command.id))
  })
]
  });
}

function R(e) {
  let {
command: n,
application: t,
isFocused: l
  } = e;
  return (0, i.jsxs)('div', {
className: o()(P.item, P.labelContainer, P.colorDefault, {
  [P.focused]: l
}),
children: [
  (0, i.jsx)('div', {
    className: o()(P.iconContainerLeft, O.appIcon),
    children: (0, i.jsx)(v.Z, {
      application: t,
      className: O.appIcon
    })
  }),
  (0, i.jsxs)('div', {
    className: P.label,
    children: [
      (0, i.jsx)('div', {
        className: o()(O.name, {
          [O.focused]: l
        }),
        children: n.name
      }),
      (0, i.jsx)('div', {
        className: o()(O.description, P.subtext),
        children: n.description
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: o()(P.iconContainer, O.icon),
    children: (0, i.jsx)(d.SendMessageIcon, {})
  })
]
  }, n.id);
}