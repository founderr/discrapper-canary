t.d(n, {
  Z: function() {
return w;
  }
}), t(47120);
var i = t(735250),
  l = t(470079),
  o = t(120356),
  a = t.n(o),
  s = t(892814),
  r = t(442837),
  u = t(481060),
  d = t(166459),
  c = t(476326),
  m = t(827498),
  h = t(213459),
  E = t(895924),
  I = t(581364),
  p = t(667204),
  C = t(147391),
  M = t(688465),
  _ = t(978983),
  N = t(592125),
  T = t(703558),
  x = t(430824),
  f = t(626135),
  g = t(823379),
  A = t(399654),
  O = t(844439),
  v = t(957552),
  j = t(981631),
  P = t(689938),
  S = t(89311),
  y = t(206227);
let R = ['1091213298818613408'];

function w(e) {
  let {
toggleShowMenu: n,
showMenu: t,
className: l,
channelId: o,
imageUrl: a,
mimeType: s
  } = e, d = (0, r.e7)([N.Z], () => N.Z.getChannel(o));
  return null == d ? null : (0, i.jsx)(u.Popout, {
renderPopout: e => {
  let {
    closePopout: n
  } = e;
  return (0, i.jsx)(D, {
    onClose: n,
    channel: d,
    imageUrl: a,
    mimeType: s
  });
},
position: 'right',
align: 'top',
animation: u.Popout.Animation.NONE,
onRequestClose: n,
shouldShow: t,
children: e => {
  let {
    onClick: t
  } = e;
  return (0, i.jsx)(u.Tooltip, {
    text: P.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
    children: e => (0, i.jsx)(u.Clickable, {
      ...e,
      className: l,
      focusProps: {
        offset: 2
      },
      onClick: n,
      'aria-label': P.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
      children: (0, i.jsx)(u.AppsIcon, {
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

function D(e) {
  let {
onSelect: n,
onClose: t,
channel: o,
imageUrl: a,
mimeType: N
  } = e, v = (0, r.e7)([x.Z], () => x.Z.getGuild(o.guild_id)), {
fetchState: y,
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
  (0, A.a)(i);
}, [i]);
let {
  fetchState: o,
  recommendationsSections: a
} = (0, r.cj)([O.ZP], () => ({
  fetchState: O.ZP.getFetchState(i),
  recommendationsSections: O.ZP.getRecommendations(i)
}));
return {
  fetchState: o,
  recommendationsSections: a
};
  }({
channelId: o.id
  }), D = (0, h.PL)(!0, !0), b = (0, h.LD)(o.guild_id, !0), F = y === O.M.FETCHING, H = l.useMemo(() => {
let e = w.length > 0 ? w[0].items : void 0;
return void 0 === e ? [] : e.map(e => {
  let {
    application: n,
    commands: t
  } = e, i = null == t ? void 0 : t.find(e => R.includes(e.id));
  return null != i ? {
    command: (0, I.Z8)({
      rootCommand: i,
      command: i,
      applicationId: n.id
    }),
    application: n
  } : null;
}).filter(g.lm);
  }, [w]);
  l.useEffect(() => {
var e, n;
if (!F && 0 !== H.length)
  f.default.track(j.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
    guild_id: null !== (e = null == o ? void 0 : o.guild_id) && void 0 !== e ? e : '',
    channel_id: null !== (n = null == o ? void 0 : o.id) && void 0 !== n ? n : '',
    application_ids: [...H.map(e => Number(e.application.id))],
    command_ids: [...H.map(e => Number(e.command.id))]
  });
  }, [
H,
o,
F
  ]);
  let Z = l.useCallback(async () => {
  let e = await fetch(a),
    n = new File([await e.arrayBuffer()], 'ContextualImageRecsUpload', {
      type: N.join('/')
    });
  d.Z.setFile({
    channelId: o.id,
    id: 'image',
    file: {
      id: 'image',
      file: n,
      platform: c.ow.WEB
    },
    draftType: T.d.SlashCommand
  });
}, [
  a,
  o.id,
  N
]),
V = l.useCallback(async e => {
  var n, t;
  let i = e.applicationId,
    l = (null === (n = D.result) || void 0 === n ? void 0 : n.sections[i]) != null,
    a = (null === (t = b.result) || void 0 === t ? void 0 : t.sections[i]) != null;
  l || a || h.ZP.queryInstallOnDemandApp(e.applicationId, o.id), await (0, C.L)({
    applicationId: i,
    userIndexState: D,
    guildIndexState: b,
    location: E.Vh.IMAGE_RECS_MENU,
    source: m._b.TEXT
  }) && (await Z(), (0, I.qJ)({
    command: e,
    location: E.Vh.IMAGE_RECS_MENU,
    source: m._b.TEXT
  }), await (0, p.Z)({
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
      channel: o,
      guild: v
    },
    commandOrigin: E.bB.IMAGE_RECS_MENU
  }));
}, [
  o,
  v,
  D,
  b,
  Z
]);
  return (0, i.jsxs)(u.Menu, {
onSelect: n,
navId: 'image-context-commands-popout',
onClose: t,
'aria-label': P.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
children: [
  (0, i.jsx)(u.MenuItem, {
    id: 'menu-image-rec-header',
    render: () => (0, i.jsxs)('div', {
      className: S.flexRow,
      children: [
        (0, i.jsx)(u.Text, {
          className: S.title,
          variant: 'text-md/bold',
          color: 'header-primary',
          children: P.Z.Messages.APP_IMAGE_REC_MENU_HEADER
        }),
        (0, i.jsx)(M.Z, {})
      ]
    }),
    navigable: !1,
    disabled: !0
  }, 'menu-image-rec-header'),
  (0, i.jsx)(u.MenuSeparator, {}),
  F ? (0, i.jsx)(u.MenuItem, {
    id: 'menu-image-recs-placeholder',
    render: () => (0, i.jsx)(_.Z, {}),
    navigable: !1,
    disabled: !0
  }, 'menu-image-recs-placeholder') : (0, i.jsx)(i.Fragment, {
    children: H.map(e => (0, i.jsx)(u.MenuItem, {
      id: e.command.id,
      action: () => V(e.command),
      render: n => (0, i.jsx)(L, {
        ...e,
        isFocused: n.isFocused
      })
    }, e.command.id))
  })
]
  });
}

function L(e) {
  let {
command: n,
application: t,
isFocused: l
  } = e;
  return (0, i.jsxs)('div', {
className: a()(y.item, y.labelContainer, y.colorDefault, {
  [y.focused]: l
}),
children: [
  (0, i.jsx)('div', {
    className: a()(y.iconContainerLeft, S.appIcon),
    children: (0, i.jsx)(v.Z, {
      application: t,
      className: S.appIcon
    })
  }),
  (0, i.jsxs)('div', {
    className: y.label,
    children: [
      (0, i.jsx)('div', {
        className: a()(S.name, {
          [S.focused]: l
        }),
        children: n.name
      }),
      (0, i.jsx)('div', {
        className: a()(S.description, y.subtext),
        children: n.description
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: a()(y.iconContainer, S.icon),
    children: (0, i.jsx)(u.SendMessageIcon, {})
  })
]
  }, n.id);
}