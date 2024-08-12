n.d(t, {
  Z: function() {
return y;
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
  I = n(592125),
  x = n(703558),
  A = n(430824),
  h = n(626135),
  f = n(585483),
  P = n(162609),
  b = n(619895),
  N = n(844439),
  T = n(981631),
  O = n(689938),
  R = n(89311);

function y(e) {
  let {
toggleShowMenu: t,
showMenu: n,
className: a,
channelId: c,
imageUrl: d,
mimeType: r
  } = e, m = (0, o.e7)([I.Z], () => I.Z.getChannel(c));
  return null == m ? null : (0, i.jsx)(l.Popout, {
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, i.jsx)(v, {
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
    text: O.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
    children: e => (0, i.jsx)(l.Clickable, {
      ...e,
      className: a,
      focusProps: {
        offset: 2
      },
      onClick: t,
      'aria-label': O.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
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

function v(e) {
  let {
onSelect: t,
onClose: n,
channel: I,
imageUrl: y,
mimeType: v
  } = e, S = (0, o.e7)([A.Z], () => A.Z.getGuild(I.guild_id)), {
fetchState: U,
imageRecCommandContexts: Z
  } = (0, b.hR)({
channelId: I.id
  }), F = U === N.M.FETCHING, L = (0, u.PL)(!0, !0), w = (0, u.LD)(I.guild_id, !0), j = P.P.useExperiment({
location: 'ContextualImageRecsMenu'
  }).optionsEnabled;
  a.useEffect(() => {
(U === N.M.ERROR || U === N.M.FETCHED && 0 === Z.length) && n();
  }, [
U,
Z.length,
n
  ]), a.useEffect(() => {
var e, t;
if (!F && 0 !== Z.length)
  h.default.track(T.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
    guild_id: null !== (e = null == I ? void 0 : I.guild_id) && void 0 !== e ? e : '',
    channel_id: null !== (t = null == I ? void 0 : I.id) && void 0 !== t ? t : '',
    application_ids: [...Z.map(e => Number(e.application.id))],
    command_ids: [...Z.map(e => Number(e.command.id))]
  });
  }, [
Z,
I,
F
  ]);
  let D = a.useCallback(async e => {
  let t = await fetch(y),
    n = await t.arrayBuffer(),
    i = v.join('/'),
    a = new File([n], 'ContextualImageRecsUpload'.concat((0, b.Qm)({
      contentType: i
    })), {
      type: i
    });
  c.Z.setFile({
    channelId: I.id,
    id: e,
    file: {
      id: e,
      file: a,
      platform: r.ow.WEB
    },
    draftType: x.d.SlashCommand
  });
}, [
  y,
  I.id,
  v
]),
k = a.useCallback(async (e, t) => {
  var n, i;
  let a = b.Id[e.id];
  await D(a.imageOption), null != p.Z.getActiveCommand(I.id) && s.Po({
    channelId: I.id,
    command: null,
    section: null
  });
  let o = {
    type: _.Qi.APPLICATION,
    id: t.id,
    icon: t.icon,
    name: null !== (i = null == t ? void 0 : null === (n = t.bot) || void 0 === n ? void 0 : n.username) && void 0 !== i ? i : t.name,
    application: t
  };
  s.Po({
    channelId: I.id,
    command: e,
    section: o,
    location: _.Vh.IMAGE_RECS_MENU,
    source: m._b.TEXT,
    initialValues: {
      [a.imageOption]: {
        type: d.jw.ATTACHMENT,
        name: a.imageOption,
        value: 'image'
      }
    },
    commandOrigin: _.bB.APPLICATION_LAUNCHER
  }), f.S.dispatch(T.CkL.FOCUS_CHANNEL_TEXT_AREA, {
    channelId: I.id
  });
}, [
  I.id,
  D
]),
H = a.useCallback(async e => {
  var t, n;
  let i = e.applicationId,
    a = (null === (t = L.result) || void 0 === t ? void 0 : t.sections[i]) != null,
    o = (null === (n = w.result) || void 0 === n ? void 0 : n.sections[i]) != null;
  a || o || u.ZP.queryInstallOnDemandApp(e.applicationId, I.id);
  let l = await (0, C.L)({
    applicationId: i,
    userIndexState: L,
    guildIndexState: w,
    location: _.Vh.IMAGE_RECS_MENU,
    source: m._b.TEXT
  });
  if ((0, E.qJ)({
      command: e,
      location: _.Vh.IMAGE_RECS_MENU,
      source: m._b.TEXT
    }), l) {
    let t = b.Id[e.id],
      n = t.additionalOptions;
    await D(t.imageOption), await (0, g.Z)({
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
        channel: I,
        guild: S
      },
      commandOrigin: _.bB.IMAGE_RECS_MENU
    });
  }
}, [
  I,
  S,
  L,
  w,
  D
]);
  return (0, i.jsxs)(l.Menu, {
onSelect: t,
navId: 'image-context-commands-popout',
onClose: n,
'aria-label': O.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
children: [
  (0, i.jsx)(l.MenuItem, {
    id: 'menu-image-rec-header',
    render: () => (0, i.jsx)(l.Text, {
      className: R.title,
      variant: 'text-md/bold',
      color: 'header-primary',
      children: O.Z.Messages.APP_IMAGE_REC_MENU_HEADER
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
      let n = j && null != b.Id[e.command.id].additionalOptions;
      return (0, i.jsx)(l.MenuItem, {
        id: e.command.id,
        action: () => H(e.command),
        label: null !== (t = b.Id[e.command.id].overrideCommandName) && void 0 !== t ? t : e.command.name,
        subtext: e.command.description,
        subtextLineClamp: 1,
        icon: n ? void 0 : l.SendMessageIcon,
        imageUrl: e.applicationImageURL,
        imageClassName: R.appIcon,
        showImageFirst: !0,
        children: n ? (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(l.MenuItem, {
              id: ''.concat(e.command.id, '-send'),
              label: O.Z.Messages.APP_IMAGE_REC_MENU_SEND_LABEL,
              subtext: O.Z.Messages.APP_IMAGE_REC_MENU_SEND_SUBTEXT,
              action: () => H(e.command),
              icon: l.SendMessageIcon
            }, ''.concat(e.command.id, '-send')),
            (0, i.jsx)(l.MenuItem, {
              id: ''.concat(e.command.id, '-edit'),
              label: O.Z.Messages.APP_IMAGE_REC_MENU_CUSTOMIZE_LABEL,
              subtext: O.Z.Messages.APP_IMAGE_REC_MENU_CUSTOMIZE_SUBTEXT,
              action: () => k(e.command, e.application),
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