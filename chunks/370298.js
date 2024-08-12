n.d(t, {
  Z: function() {
return j;
  }
}), n(47120);
var i = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  c = n(442837),
  d = n(481060),
  r = n(166459),
  s = n(911969),
  m = n(476326),
  u = n(827498),
  p = n(555573),
  _ = n(213459),
  E = n(998698),
  g = n(895924),
  x = n(581364),
  C = n(667204),
  h = n(147391),
  f = n(978983),
  I = n(592125),
  M = n(703558),
  A = n(430824),
  N = n(626135),
  b = n(585483),
  O = n(162609),
  P = n(619895),
  T = n(844439),
  v = n(957552),
  R = n(981631),
  y = n(689938),
  S = n(89311),
  F = n(206227);

function j(e) {
  let {
toggleShowMenu: t,
showMenu: n,
className: o,
channelId: a,
imageUrl: l,
mimeType: r
  } = e, s = (0, c.e7)([I.Z], () => I.Z.getChannel(a));
  return null == s ? null : (0, i.jsx)(d.Popout, {
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, i.jsx)(Z, {
    onClose: t,
    channel: s,
    imageUrl: l,
    mimeType: r
  });
},
position: 'right',
align: 'top',
animation: d.Popout.Animation.NONE,
onRequestClose: t,
shouldShow: n,
children: e => {
  let {
    onClick: n
  } = e;
  return (0, i.jsx)(d.Tooltip, {
    text: y.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
    children: e => (0, i.jsx)(d.Clickable, {
      ...e,
      className: o,
      focusProps: {
        offset: 2
      },
      onClick: t,
      'aria-label': y.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
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

function Z(e) {
  let {
onSelect: t,
onClose: n,
channel: a,
imageUrl: l,
mimeType: I
  } = e, v = (0, c.e7)([A.Z], () => A.Z.getGuild(a.guild_id)), {
fetchState: F,
imageRecCommandContexts: j
  } = (0, P.hR)({
channelId: a.id
  }), Z = F === T.M.FETCHING, w = (0, _.PL)(!0, !0), k = (0, _.LD)(a.guild_id, !0), D = O.P.useExperiment({
location: 'ContextualImageRecsMenu'
  }).optionsEnabled;
  o.useEffect(() => {
(F === T.M.ERROR || F === T.M.FETCHED && 0 === j.length) && n();
  }, [
F,
j.length,
n
  ]), o.useEffect(() => {
var e, t;
if (!Z && 0 !== j.length)
  N.default.track(R.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
    guild_id: null !== (e = null == a ? void 0 : a.guild_id) && void 0 !== e ? e : '',
    channel_id: null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : '',
    application_ids: [...j.map(e => Number(e.application.id))],
    command_ids: [...j.map(e => Number(e.command.id))]
  });
  }, [
j,
a,
Z
  ]);
  let L = o.useCallback(async e => {
  let t = await fetch(l),
    n = await t.arrayBuffer(),
    i = I.join('/'),
    o = new File([n], 'ContextualImageRecsUpload'.concat((0, P.Qm)({
      contentType: i
    })), {
      type: i
    });
  r.Z.setFile({
    channelId: a.id,
    id: e,
    file: {
      id: e,
      file: o,
      platform: m.ow.WEB
    },
    draftType: M.d.SlashCommand
  });
}, [
  l,
  a.id,
  I
]),
H = o.useCallback(async (e, t) => {
  var n, i;
  let o = P.Id[e.id];
  await L(o.imageOption), null != E.Z.getActiveCommand(a.id) && p.Po({
    channelId: a.id,
    command: null,
    section: null
  });
  let l = {
    type: g.Qi.APPLICATION,
    id: t.id,
    icon: t.icon,
    name: null !== (i = null == t ? void 0 : null === (n = t.bot) || void 0 === n ? void 0 : n.username) && void 0 !== i ? i : t.name,
    application: t
  };
  p.Po({
    channelId: a.id,
    command: e,
    section: l,
    location: g.Vh.IMAGE_RECS_MENU,
    source: u._b.TEXT,
    initialValues: {
      [o.imageOption]: {
        type: s.jw.ATTACHMENT,
        name: o.imageOption,
        value: 'image'
      }
    },
    commandOrigin: g.bB.APPLICATION_LAUNCHER
  }), b.S.dispatch(R.CkL.FOCUS_CHANNEL_TEXT_AREA, {
    channelId: a.id
  });
}, [
  a.id,
  L
]),
G = o.useCallback(async e => {
  var t, n;
  let i = e.applicationId,
    o = (null === (t = w.result) || void 0 === t ? void 0 : t.sections[i]) != null,
    l = (null === (n = k.result) || void 0 === n ? void 0 : n.sections[i]) != null;
  o || l || _.ZP.queryInstallOnDemandApp(e.applicationId, a.id);
  let c = await (0, h.L)({
    applicationId: i,
    userIndexState: w,
    guildIndexState: k,
    location: g.Vh.IMAGE_RECS_MENU,
    source: u._b.TEXT
  });
  if ((0, x.qJ)({
      command: e,
      location: g.Vh.IMAGE_RECS_MENU,
      source: u._b.TEXT
    }), c) {
    let t = P.Id[e.id],
      n = t.additionalOptions;
    await L(t.imageOption), await (0, C.Z)({
      command: {
        ...e
      },
      optionValues: {
        [t.imageOption]: [{
          text: 'image',
          type: 'text'
        }],
        ...null == n ? {} : n[Math.floor(Math.random() * n.length)]
      },
      context: {
        channel: a,
        guild: v
      },
      commandOrigin: g.bB.IMAGE_RECS_MENU
    });
  }
}, [
  a,
  v,
  w,
  k,
  L
]);
  return (0, i.jsxs)(d.Menu, {
onSelect: t,
navId: 'image-context-commands-popout',
onClose: n,
'aria-label': y.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
children: [
  (0, i.jsx)(d.MenuItem, {
    id: 'menu-image-rec-header',
    render: () => (0, i.jsx)(d.Text, {
      className: S.title,
      variant: 'text-md/bold',
      color: 'header-primary',
      children: y.Z.Messages.APP_IMAGE_REC_MENU_HEADER
    }),
    navigable: !1,
    disabled: !0
  }, 'menu-image-rec-header'),
  (0, i.jsx)(d.MenuSeparator, {}),
  Z ? (0, i.jsx)(d.MenuItem, {
    id: 'menu-image-recs-placeholder',
    render: () => (0, i.jsx)(f.Z, {}),
    navigable: !1,
    disabled: !0
  }, 'menu-image-recs-placeholder') : (0, i.jsx)(i.Fragment, {
    children: j.map(e => {
      let t = D && null != P.Id[e.command.id].additionalOptions;
      return (0, i.jsx)(d.MenuItem, {
        id: e.command.id,
        action: () => t ? H(e.command, e.application) : G(e.command),
        render: n => (0, i.jsx)(U, {
          ...e,
          isFocused: n.isFocused,
          canEditOptions: t
        })
      }, e.command.id);
    })
  })
]
  });
}

function U(e) {
  var t;
  let {
command: n,
application: o,
isFocused: a,
canEditOptions: c
  } = e;
  return (0, i.jsxs)('div', {
className: l()(F.item, F.labelContainer, F.colorDefault, {
  [F.focused]: a
}),
children: [
  (0, i.jsx)('div', {
    className: l()(F.iconContainerLeft, S.appIcon),
    children: (0, i.jsx)(v.Z, {
      application: o,
      className: S.appIcon
    })
  }),
  (0, i.jsxs)('div', {
    className: F.label,
    children: [
      (0, i.jsx)('div', {
        className: l()(S.name, {
          [S.focused]: a
        }),
        children: null !== (t = P.Id[n.id].overrideCommandName) && void 0 !== t ? t : n.name
      }),
      (0, i.jsx)('div', {
        className: l()(S.description, F.subtext),
        children: n.description
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: l()(F.iconContainer, S.icon),
    children: c ? (0, i.jsx)(d.PencilIcon, {}) : (0, i.jsx)(d.SendMessageIcon, {})
  })
]
  }, n.id);
}