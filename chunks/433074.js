n.d(t, {
  Z: function() {
return S;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(873546),
  r = n(399606),
  l = n(481060),
  o = n(434650),
  c = n(955415),
  u = n(706454),
  d = n(973616),
  _ = n(914010),
  E = n(594174),
  I = n(626135),
  m = n(135431),
  T = n(674588),
  h = n(264043),
  N = n(132871),
  f = n(147890),
  C = n(981631),
  p = n(689938),
  g = n(916718);

function S(e) {
  var t, n;
  let {
code: S,
message: A
  } = e, [M, R, O] = (0, r.Wu)([h.Z], () => [
h.Z.getApplication(S),
h.Z.isInvalidApplication(S),
h.Z.getApplicationFetchState(S)
  ], [S]), x = (0, r.e7)([u.default], () => u.default.locale), v = (0, r.e7)([_.Z], () => {
var e;
return null !== (e = _.Z.getGuildId()) && void 0 !== e ? e : void 0;
  }), Z = (0, r.e7)([E.default], () => E.default.getCurrentUser()), [L, P] = s.useState(!1), D = s.useCallback(e => {
e && P(!0);
  }, []), b = (0, o.O)(D);
  s.useEffect(() => {
(0, T.gZ)(S);
  }, [S]), s.useEffect(() => {
L && O === h.M.FETCHED && I.default.track(C.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
  application_id: S,
  device_platform: a.tq ? 'mobile_web' : 'desktop_web',
  sender_user_id: A.author.id,
  guild_id: v,
  channel_id: A.channel_id
});
  }, [
L,
S,
null == Z ? void 0 : Z.id,
A.channel_id,
v,
A.author.id,
O
  ]), s.useEffect(() => {
L && R && I.default.track(C.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
  device_platform: a.tq ? 'mobile_web' : 'desktop_web',
  sender_user_id: A.author.id,
  guild_id: v,
  channel_id: A.channel_id
});
  }, [
L,
v,
R,
A.author.id,
A.channel_id
  ]);
  let j = e => {
I.default.track(C.rMx.APP_DIRECTORY_PROFILE_EMBED_APP_INFO_CLICKED, {
  application_id: S,
  device_platform: a.tq ? 'mobile_web' : 'desktop_web',
  clicked_section: e,
  guild_id: v,
  channel_id: A.channel_id
}), (0, f.goToAppDirectory)({
  view: N.ApplicationDirectoryViews.APPLICATION,
  guildId: v,
  applicationId: S,
  entrypoint: {
    name: N.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_PROFILE_EMBED
  }
});
  };
  if (R)
return (0, i.jsxs)(c.Z, {
  containerRef: b,
  children: [
    (0, i.jsx)(c.Z.Header, {
      text: p.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_HEADER
    }),
    (0, i.jsx)(c.Z.Body, {
      children: (0, i.jsxs)('div', {
        className: g.invalidBody,
        children: [
          (0, i.jsx)(c.Z.Icon, {
            expired: !0
          }),
          (0, i.jsx)(c.Z.Info, {
            expired: !0,
            title: p.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_INFO_TITLE,
            children: p.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_INFO_BODY
          })
        ]
      })
    })
  ]
});
  if (null == M || O === h.M.FETCHING)
return (0, i.jsxs)(c.Z, {
  containerRef: b,
  children: [
    (0, i.jsx)(c.Z.Header, {
      text: p.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_RESOLVING_HEADER
    }),
    (0, i.jsx)(c.Z.Body, {
      resolving: !0
    })
  ]
});
  let U = new Intl.NumberFormat(x, {
notation: 'compact',
compactDisplay: 'short'
  }).format(null !== (n = null === (t = M.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0);
  return (0, i.jsxs)(c.Z, {
containerRef: b,
children: [
  (0, i.jsx)(c.Z.Header, {
    text: p.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_HEADER
  }),
  (0, i.jsxs)(c.Z.Body, {
    children: [
      (0, i.jsxs)('div', {
        className: g.applicationInfoContainer,
        children: [
          (0, i.jsx)(c.Z.Icon, {
            application: d.Z.createFromServer(M),
            className: g.applicationIcon,
            onClick: () => j('application_icon')
          }),
          (0, i.jsx)(c.Z.Info, {
            title: (0, i.jsx)(l.Clickable, {
              onClick: () => j('application_name'),
              children: M.name
            }),
            children: (0, i.jsxs)(l.Clickable, {
              className: g.guildCountContainer,
              onClick: () => j('application_guild_count'),
              children: [
                (0, i.jsx)(l.CompassIcon, {
                  size: 'custom',
                  color: 'currentColor',
                  width: 16,
                  height: 16,
                  className: g.guildCountIcon
                }),
                p.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_GUILD_COUNT.format({
                  guildCount: U
                })
              ]
            })
          })
        ]
      }),
      (0, i.jsx)(c.Z.Button, {
        onClick: () => {
          if (null != M)
            (0, m.L)({
              applicationId: S,
              customInstallUrl: M.custom_install_url,
              installParams: M.install_params,
              integrationTypesConfig: M.integration_types_config,
              guildId: v,
              source: 'app_directory_profile_embed'
            });
        },
        color: c.Z.Button.Colors.GREEN,
        children: p.Z.Messages.APPLICATION_ADD_BUTTON
      })
    ]
  })
]
  });
}