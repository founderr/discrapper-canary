n.d(t, {
  Z: function() {
return v;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  o = n(442837),
  l = n(481060),
  c = n(166459),
  d = n(911969),
  r = n(476326),
  m = n(827498),
  s = n(555573),
  u = n(213459),
  p = n(998698),
  _ = n(895924),
  E = n(581364),
  g = n(667204),
  C = n(147391),
  M = n(978983),
  x = n(592125),
  A = n(703558),
  I = n(430824),
  h = n(626135),
  f = n(585483),
  N = n(162609),
  b = n(619895),
  P = n(844439),
  R = n(981631),
  T = n(689938),
  O = n(834033);

function v(e) {
  let {
toggleShowMenu: t,
showMenu: n,
className: a,
channelId: c,
imageUrl: d,
mimeType: r
  } = e, m = (0, o.e7)([x.Z], () => x.Z.getChannel(c));
  return null == m ? null : (0, i.jsx)(l.Popout, {
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, i.jsx)(y, {
    onClose: t,
    channel: m,
    imageUrl: d,
    mimeType: r
  });
},
position: 'right',
align: 'top',
animation: l.Popout.Animation.NONE,
onRequestClose: t,
shouldShow: n,
children: e => {
  let {
    onClick: n
  } = e;
  return (0, i.jsx)(l.Tooltip, {
    text: T.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
    children: e => (0, i.jsx)(l.Clickable, {
      ...e,
      className: a,
      focusProps: {
        offset: 2
      },
      onClick: t,
      'aria-label': T.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
      children: (0, i.jsx)(l.AppsIcon, {
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

function y(e) {
  let {
onSelect: t,
onClose: n,
channel: x,
imageUrl: v,
mimeType: y
  } = e, S = (0, o.e7)([I.Z], () => I.Z.getGuild(x.guild_id)), {
fetchState: U,
imageRecCommandContexts: Z
  } = (0, b.hR)({
channelId: x.id
  }), F = U === P.M.FETCHING, L = (0, u.PL)(!0, !0), w = (0, u.LD)(x.guild_id, !0), D = N.P.useExperiment({
location: 'ContextualImageRecsMenu'
  }).optionsEnabled;
  a.useEffect(() => {
(U === P.M.ERROR || U === P.M.FETCHED && 0 === Z.length) && n();
  }, [
U,
Z.length,
n
  ]), a.useEffect(() => {
var e, t;
if (!F && 0 !== Z.length)
  h.default.track(R.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
    guild_id: null !== (e = null == x ? void 0 : x.guild_id) && void 0 !== e ? e : '',
    channel_id: null !== (t = null == x ? void 0 : x.id) && void 0 !== t ? t : '',
    application_ids: [...Z.map(e => Number(e.application.id))],
    command_ids: [...Z.map(e => Number(e.command.id))]
  });
  }, [
Z,
x,
F
  ]);
  let j = a.useCallback(async e => {
  let t = await fetch(v),
    n = await t.arrayBuffer(),
    i = y.join('/'),
    a = new File([n], 'ContextualImageRecsUpload'.concat((0, b.Qm)({
      contentType: i
    })), {
      type: i
    });
  c.Z.setFile({
    channelId: x.id,
    id: e,
    file: {
      id: e,
      file: a,
      platform: r.ow.WEB
    },
    draftType: A.d.SlashCommand
  });
}, [
  v,
  x.id,
  y
]),
k = a.useCallback(async (e, t, n) => {
  var i, a;
  let o = b.Id[e.id];
  await j(o.imageOption), null != p.Z.getActiveCommand(x.id) && s.Po({
    channelId: x.id,
    command: null,
    section: null
  });
  let l = {
    type: _.Qi.APPLICATION,
    id: t.id,
    icon: t.icon,
    name: null !== (a = null == t ? void 0 : null === (i = t.bot) || void 0 === i ? void 0 : i.username) && void 0 !== a ? a : t.name,
    application: t
  };
  s.Po({
    channelId: x.id,
    command: e,
    section: l,
    location: n,
    source: m._b.TEXT,
    initialValues: {
      [o.imageOption]: {
        type: d.jw.ATTACHMENT,
        name: o.imageOption,
        value: 'image'
      }
    },
    commandOrigin: _.bB.APPLICATION_LAUNCHER
  }), f.S.dispatch(R.CkL.FOCUS_CHANNEL_TEXT_AREA, {
    channelId: x.id
  });
}, [
  x.id,
  j
]),
H = a.useCallback(async (e, t) => {
  var n, i;
  let a = e.applicationId,
    o = (null === (n = L.result) || void 0 === n ? void 0 : n.sections[a]) != null,
    l = (null === (i = w.result) || void 0 === i ? void 0 : i.sections[a]) != null;
  o || l || u.ZP.queryInstallOnDemandApp(e.applicationId, x.id);
  let c = await (0, C.L)({
    applicationId: a,
    userIndexState: L,
    guildIndexState: w,
    location: t,
    source: m._b.TEXT
  });
  if ((0, E.qJ)({
      command: e,
      location: t,
      source: m._b.TEXT
    }), c) {
    let t = b.Id[e.id],
      n = t.additionalOptions;
    await j(t.imageOption), await (0, g.Z)({
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
        channel: x,
        guild: S
      },
      commandOrigin: _.bB.IMAGE_RECS_MENU
    });
  }
}, [
  x,
  S,
  L,
  w,
  j
]);
  return (0, i.jsxs)(l.Menu, {
onSelect: t,
navId: 'image-context-commands-popout',
onClose: n,
'aria-label': T.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
children: [
  (0, i.jsx)(l.MenuItem, {
    id: 'menu-image-rec-header',
    render: () => (0, i.jsx)(l.Text, {
      className: O.title,
      variant: 'text-md/bold',
      color: 'header-primary',
      children: T.Z.Messages.APP_IMAGE_REC_MENU_HEADER
    }),
    navigable: !1,
    disabled: !0
  }, 'menu-image-rec-header'),
  (0, i.jsx)(l.MenuSeparator, {}),
  F ? (0, i.jsx)(l.MenuItem, {
    id: 'menu-image-recs-placeholder',
    render: () => (0, i.jsx)(M.Z, {}),
    navigable: !1,
    disabled: !0
  }, 'menu-image-recs-placeholder') : (0, i.jsx)(i.Fragment, {
    children: Z.map(e => {
      var t;
      let n = D && null != b.Id[e.command.id].additionalOptions;
      return (0, i.jsx)(l.MenuItem, {
        id: e.command.id,
        action: () => H(e.command, _.Vh.IMAGE_RECS_MENU),
        label: null !== (t = b.Id[e.command.id].overrideCommandName) && void 0 !== t ? t : e.command.name,
        subtext: e.command.description,
        subtextLineClamp: 1,
        icon: n ? void 0 : l.SendMessageIcon,
        imageUrl: e.applicationImageURL,
        imageClassName: O.appIcon,
        showImageFirst: !0,
        children: n ? (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(l.MenuItem, {
              id: ''.concat(e.command.id, '-send'),
              label: T.Z.Messages.APP_IMAGE_REC_MENU_SEND_LABEL,
              subtext: T.Z.Messages.APP_IMAGE_REC_MENU_SEND_SUBTEXT,
              action: () => H(e.command, _.Vh.IMAGE_RECS_SUBMENU),
              icon: l.SendMessageIcon
            }, ''.concat(e.command.id, '-send')),
            (0, i.jsx)(l.MenuItem, {
              id: ''.concat(e.command.id, '-edit'),
              label: T.Z.Messages.APP_IMAGE_REC_MENU_CUSTOMIZE_LABEL,
              subtext: T.Z.Messages.APP_IMAGE_REC_MENU_CUSTOMIZE_SUBTEXT,
              action: () => k(e.command, e.application, _.Vh.IMAGE_RECS_SUBMENU),
              icon: l.PencilIcon
            }, ''.concat(e.command.id, '-edit'))
          ]
        }) : null
      }, e.command.id);
    })
  })
]
  });
}