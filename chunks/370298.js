n.d(t, {
  Z: function() {
return j;
  }
}), n(47120);
var i = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  r = n(442837),
  s = n(481060),
  u = n(166459),
  d = n(476326),
  c = n(827498),
  m = n(213459),
  p = n(895924),
  h = n(581364),
  x = n(667204),
  g = n(147391),
  I = n(978983),
  E = n(592125),
  _ = n(703558),
  C = n(430824),
  f = n(626135),
  M = n(619895),
  N = n(844439),
  T = n(957552),
  y = n(981631),
  v = n(689938),
  A = n(89311),
  O = n(206227);

function j(e) {
  let {
toggleShowMenu: t,
showMenu: n,
className: o,
channelId: a,
imageUrl: l,
mimeType: u
  } = e, d = (0, r.e7)([E.Z], () => E.Z.getChannel(a));
  return null == d ? null : (0, i.jsx)(s.Popout, {
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, i.jsx)(P, {
    onClose: t,
    channel: d,
    imageUrl: l,
    mimeType: u
  });
},
position: 'right',
align: 'top',
animation: s.Popout.Animation.NONE,
onRequestClose: t,
shouldShow: n,
children: e => {
  let {
    onClick: n
  } = e;
  return (0, i.jsx)(s.Tooltip, {
    text: v.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
    children: e => (0, i.jsx)(s.Clickable, {
      ...e,
      className: o,
      focusProps: {
        offset: 2
      },
      onClick: t,
      'aria-label': v.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
      children: (0, i.jsx)(s.AppsIcon, {
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

function P(e) {
  let {
onSelect: t,
onClose: n,
channel: a,
imageUrl: l,
mimeType: E
  } = e, T = (0, r.e7)([C.Z], () => C.Z.getGuild(a.guild_id)), {
fetchState: O,
imageRecCommandContexts: j
  } = (0, M.hR)({
channelId: a.id
  }), P = (0, m.PL)(!0, !0), w = (0, m.LD)(a.guild_id, !0), S = O === N.M.FETCHING;
  o.useEffect(() => {
(O === N.M.ERROR || O === N.M.FETCHED && 0 === j.length) && n();
  }, [
O,
j.length,
n
  ]), o.useEffect(() => {
var e, t;
if (!S && 0 !== j.length)
  f.default.track(y.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
    guild_id: null !== (e = null == a ? void 0 : a.guild_id) && void 0 !== e ? e : '',
    channel_id: null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : '',
    application_ids: [...j.map(e => Number(e.application.id))],
    command_ids: [...j.map(e => Number(e.command.id))]
  });
  }, [
j,
a,
S
  ]);
  let R = o.useCallback(async e => {
  let t = await fetch(l),
    n = await t.arrayBuffer(),
    i = E.join('/'),
    o = new File([n], 'ContextualImageRecsUpload'.concat((0, M.Qm)({
      contentType: i
    })), {
      type: i
    });
  u.Z.setFile({
    channelId: a.id,
    id: e,
    file: {
      id: e,
      file: o,
      platform: d.ow.WEB
    },
    draftType: _.d.SlashCommand
  });
}, [
  l,
  a.id,
  E
]),
F = o.useCallback(async e => {
  var t, n;
  let i = e.applicationId,
    o = (null === (t = P.result) || void 0 === t ? void 0 : t.sections[i]) != null,
    l = (null === (n = w.result) || void 0 === n ? void 0 : n.sections[i]) != null;
  if (o || l || m.ZP.queryInstallOnDemandApp(e.applicationId, a.id), await (0, g.L)({
      applicationId: i,
      userIndexState: P,
      guildIndexState: w,
      location: p.Vh.IMAGE_RECS_MENU,
      source: c._b.TEXT
    })) {
    let t = M.Id[e.id],
      n = t.additionalOptions;
    await R(t.imageOption), (0, h.qJ)({
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
        guild: T
      },
      commandOrigin: p.bB.IMAGE_RECS_MENU
    });
  }
}, [
  a,
  T,
  P,
  w,
  R
]);
  return (0, i.jsxs)(s.Menu, {
onSelect: t,
navId: 'image-context-commands-popout',
onClose: n,
'aria-label': v.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
children: [
  (0, i.jsx)(s.MenuItem, {
    id: 'menu-image-rec-header',
    render: () => (0, i.jsx)(s.Text, {
      className: A.title,
      variant: 'text-md/bold',
      color: 'header-primary',
      children: v.Z.Messages.APP_IMAGE_REC_MENU_HEADER
    }),
    navigable: !1,
    disabled: !0
  }, 'menu-image-rec-header'),
  (0, i.jsx)(s.MenuSeparator, {}),
  S ? (0, i.jsx)(s.MenuItem, {
    id: 'menu-image-recs-placeholder',
    render: () => (0, i.jsx)(I.Z, {}),
    navigable: !1,
    disabled: !0
  }, 'menu-image-recs-placeholder') : (0, i.jsx)(i.Fragment, {
    children: j.map(e => (0, i.jsx)(s.MenuItem, {
      id: e.command.id,
      action: () => F(e.command),
      render: t => (0, i.jsx)(b, {
        ...e,
        isFocused: t.isFocused
      })
    }, e.command.id))
  })
]
  });
}

function b(e) {
  var t;
  let {
command: n,
application: o,
isFocused: a
  } = e;
  return (0, i.jsxs)('div', {
className: l()(O.item, O.labelContainer, O.colorDefault, {
  [O.focused]: a
}),
children: [
  (0, i.jsx)('div', {
    className: l()(O.iconContainerLeft, A.appIcon),
    children: (0, i.jsx)(T.Z, {
      application: o,
      className: A.appIcon
    })
  }),
  (0, i.jsxs)('div', {
    className: O.label,
    children: [
      (0, i.jsx)('div', {
        className: l()(A.name, {
          [A.focused]: a
        }),
        children: null !== (t = M.Id[n.id].overrideCommandName) && void 0 !== t ? t : n.name
      }),
      (0, i.jsx)('div', {
        className: l()(A.description, O.subtext),
        children: n.description
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: l()(O.iconContainer, A.icon),
    children: (0, i.jsx)(s.SendMessageIcon, {})
  })
]
  }, n.id);
}