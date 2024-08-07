n.d(t, {
  Z: function() {
return P;
  }
}), n(47120);
var i = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  s = n(442837),
  r = n(481060),
  d = n(166459),
  u = n(476326),
  c = n(827498),
  m = n(213459),
  p = n(895924),
  h = n(581364),
  x = n(667204),
  g = n(147391),
  I = n(688465),
  E = n(978983),
  _ = n(592125),
  C = n(703558),
  f = n(430824),
  M = n(626135),
  N = n(619895),
  T = n(844439),
  y = n(957552),
  v = n(981631),
  A = n(689938),
  O = n(89311),
  j = n(206227);

function P(e) {
  let {
toggleShowMenu: t,
showMenu: n,
className: o,
channelId: a,
imageUrl: l,
mimeType: d
  } = e, u = (0, s.e7)([_.Z], () => _.Z.getChannel(a));
  return null == u ? null : (0, i.jsx)(r.Popout, {
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, i.jsx)(b, {
    onClose: t,
    channel: u,
    imageUrl: l,
    mimeType: d
  });
},
position: 'right',
align: 'top',
animation: r.Popout.Animation.NONE,
onRequestClose: t,
shouldShow: n,
children: e => {
  let {
    onClick: n
  } = e;
  return (0, i.jsx)(r.Tooltip, {
    text: A.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
    children: e => (0, i.jsx)(r.Clickable, {
      ...e,
      className: o,
      focusProps: {
        offset: 2
      },
      onClick: t,
      'aria-label': A.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
      children: (0, i.jsx)(r.AppsIcon, {
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

function b(e) {
  let {
onSelect: t,
onClose: n,
channel: a,
imageUrl: l,
mimeType: _
  } = e, y = (0, s.e7)([f.Z], () => f.Z.getGuild(a.guild_id)), {
fetchState: j,
imageRecCommandContexts: P
  } = (0, N.hR)({
channelId: a.id
  }), b = (0, m.PL)(!0, !0), S = (0, m.LD)(a.guild_id, !0), R = j === T.M.FETCHING;
  o.useEffect(() => {
var e, t;
if (!R && 0 !== P.length)
  M.default.track(v.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
    guild_id: null !== (e = null == a ? void 0 : a.guild_id) && void 0 !== e ? e : '',
    channel_id: null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : '',
    application_ids: [...P.map(e => Number(e.application.id))],
    command_ids: [...P.map(e => Number(e.command.id))]
  });
  }, [
P,
a,
R
  ]);
  let F = o.useCallback(async e => {
  let t = await fetch(l),
    n = await t.arrayBuffer(),
    i = _.join('/'),
    o = new File([n], 'ContextualImageRecsUpload'.concat((0, N.Qm)({
      contentType: i
    })), {
      type: i
    });
  d.Z.setFile({
    channelId: a.id,
    id: e,
    file: {
      id: e,
      file: o,
      platform: u.ow.WEB
    },
    draftType: C.d.SlashCommand
  });
}, [
  l,
  a.id,
  _
]),
L = o.useCallback(async e => {
  var t, n;
  let i = e.applicationId,
    o = (null === (t = b.result) || void 0 === t ? void 0 : t.sections[i]) != null,
    l = (null === (n = S.result) || void 0 === n ? void 0 : n.sections[i]) != null;
  if (o || l || m.ZP.queryInstallOnDemandApp(e.applicationId, a.id), await (0, g.L)({
      applicationId: i,
      userIndexState: b,
      guildIndexState: S,
      location: p.Vh.IMAGE_RECS_MENU,
      source: c._b.TEXT
    })) {
    let t = N.Id[e.id],
      n = t.additionalOptions;
    await F(t.imageOption), (0, h.qJ)({
      command: e,
      location: p.Vh.IMAGE_RECS_MENU,
      source: c._b.TEXT
    }), await (0, x.Z)({
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
        guild: y
      },
      commandOrigin: p.bB.IMAGE_RECS_MENU
    });
  }
}, [
  a,
  y,
  b,
  S,
  F
]);
  return (0, i.jsxs)(r.Menu, {
onSelect: t,
navId: 'image-context-commands-popout',
onClose: n,
'aria-label': A.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
children: [
  (0, i.jsx)(r.MenuItem, {
    id: 'menu-image-rec-header',
    render: () => (0, i.jsxs)('div', {
      className: O.flexRow,
      children: [
        (0, i.jsx)(r.Text, {
          className: O.title,
          variant: 'text-md/bold',
          color: 'header-primary',
          children: A.Z.Messages.APP_IMAGE_REC_MENU_HEADER
        }),
        (0, i.jsx)(I.Z, {})
      ]
    }),
    navigable: !1,
    disabled: !0
  }, 'menu-image-rec-header'),
  (0, i.jsx)(r.MenuSeparator, {}),
  R ? (0, i.jsx)(r.MenuItem, {
    id: 'menu-image-recs-placeholder',
    render: () => (0, i.jsx)(E.Z, {}),
    navigable: !1,
    disabled: !0
  }, 'menu-image-recs-placeholder') : (0, i.jsx)(i.Fragment, {
    children: P.map(e => (0, i.jsx)(r.MenuItem, {
      id: e.command.id,
      action: () => L(e.command),
      render: t => (0, i.jsx)(w, {
        ...e,
        isFocused: t.isFocused
      })
    }, e.command.id))
  })
]
  });
}

function w(e) {
  var t;
  let {
command: n,
application: o,
isFocused: a
  } = e;
  return (0, i.jsxs)('div', {
className: l()(j.item, j.labelContainer, j.colorDefault, {
  [j.focused]: a
}),
children: [
  (0, i.jsx)('div', {
    className: l()(j.iconContainerLeft, O.appIcon),
    children: (0, i.jsx)(y.Z, {
      application: o,
      className: O.appIcon
    })
  }),
  (0, i.jsxs)('div', {
    className: j.label,
    children: [
      (0, i.jsx)('div', {
        className: l()(O.name, {
          [O.focused]: a
        }),
        children: null !== (t = N.Id[n.id].overrideCommandName) && void 0 !== t ? t : n.name
      }),
      (0, i.jsx)('div', {
        className: l()(O.description, j.subtext),
        children: n.description
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: l()(j.iconContainer, O.icon),
    children: (0, i.jsx)(r.SendMessageIcon, {})
  })
]
  }, n.id);
}