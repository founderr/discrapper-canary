t.d(n, {
    Z: function () {
        return U;
    }
}),
    t(47120),
    t(653041);
var i = t(200651),
    l = t(192379),
    a = t(442837),
    o = t(749280),
    r = t(481060),
    c = t(166459),
    d = t(911969),
    u = t(476326),
    s = t(827498),
    m = t(555573),
    E = t(213459),
    p = t(998698),
    g = t(895924),
    C = t(581364),
    _ = t(667204),
    f = t(873387),
    v = t(809090),
    M = t(147391),
    h = t(583027),
    I = t(978983),
    S = t(592125),
    A = t(703558),
    N = t(430824),
    O = t(626135),
    P = t(585483),
    T = t(619895),
    b = t(844439),
    R = t(981631),
    x = t(388032),
    y = t(973335);
function U(e) {
    let { toggleShowMenu: n, showMenu: t, className: c, channelId: d, imageUrl: u, mimeType: s } = e,
        m = (0, a.e7)([S.Z], () => S.Z.getChannel(d)),
        { Component: E, events: p, play: g } = (0, o.w)(),
        [C, _] = l.useState(!1);
    return null == m
        ? null
        : (!C && g(),
          (0, i.jsx)(r.Popout, {
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, i.jsx)(w, {
                      onClose: n,
                      channel: m,
                      imageUrl: u,
                      mimeType: s
                  });
              },
              position: 'right',
              align: 'top',
              animation: r.Popout.Animation.NONE,
              onRequestClose: n,
              shouldShow: t,
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, i.jsx)(r.Tooltip, {
                      text: x.intl.string(x.t.emnnEB),
                      children: (e) =>
                          (0, i.jsx)(r.Clickable, {
                              ...e,
                              className: c,
                              focusProps: { offset: 2 },
                              onClick: n,
                              onMouseEnter: () => {
                                  _(!0), p.onMouseEnter();
                              },
                              onMouseLeave: p.onMouseLeave,
                              'aria-label': x.intl.string(x.t.emnnEB),
                              children: (0, i.jsx)(E, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: 'currentColor'
                              })
                          })
                  });
              }
          }));
}
function w(e) {
    let { onSelect: n, onClose: t, channel: o, imageUrl: S, mimeType: U } = e,
        w = (0, a.e7)([N.Z], () => N.Z.getGuild(o.guild_id)),
        { fetchState: Z, imageRecCommandContexts: j } = (0, T.hR)({ channelId: o.id }),
        D = Z === b.M.FETCHING,
        F = (0, f.g)(o),
        L = (0, E.PL)(!0, !0),
        H = (0, E.LD)(o.guild_id, !0);
    l.useEffect(() => {
        (Z === b.M.ERROR || (Z === b.M.FETCHED && 0 === j.length)) && t();
    }, [Z, j.length, t]),
        l.useEffect(() => {
            var e, n;
            if (D || 0 === j.length) return;
            let t = [];
            j.forEach((e) => {
                t.push(Number(e.command.id)), null != e.overrideSendCommand && t.push(Number(e.overrideSendCommand.id));
            }),
                O.default.track(R.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
                    guild_id: null !== (e = null == o ? void 0 : o.guild_id) && void 0 !== e ? e : '',
                    channel_id: null !== (n = null == o ? void 0 : o.id) && void 0 !== n ? n : '',
                    application_ids: [...j.map((e) => Number(e.command.applicationId))],
                    command_ids: t
                });
        }, [j, o, D]);
    let k = l.useCallback(
            async (e) => {
                let n = await fetch(S),
                    t = await n.arrayBuffer(),
                    i = U.join('/'),
                    l = new File([t], 'image'.concat((0, T.Qm)({ contentType: i })), { type: i });
                c.Z.setFile({
                    channelId: o.id,
                    id: e,
                    file: {
                        id: e,
                        file: l,
                        platform: u.ow.WEB
                    },
                    draftType: A.d.SlashCommand
                });
            },
            [S, o.id, U]
        ),
        G = l.useCallback(
            async (e, n, t, i) => {
                var l, a;
                if (!F) return;
                let r = e.applicationId,
                    c = (null === (l = L.result) || void 0 === l ? void 0 : l.sections[r]) != null,
                    u = (null === (a = H.result) || void 0 === a ? void 0 : a.sections[r]) != null;
                await k(i),
                    null != p.Z.getActiveCommand(o.id) &&
                        m.Po({
                            channelId: o.id,
                            command: null,
                            section: null
                        }),
                    c || u || E.ZP.queryInstallOnDemandApp(e.applicationId, o.id),
                    m.Po({
                        channelId: o.id,
                        command: e,
                        section: n,
                        location: t,
                        source: s._b.TEXT,
                        initialValues: {
                            [i]: {
                                type: d.jw.ATTACHMENT,
                                name: i,
                                value: 'image'
                            }
                        },
                        commandOrigin: t === g.Vh.IMAGE_RECS_SUBMENU ? g.bB.IMAGE_RECS_SUBMENU : g.bB.IMAGE_RECS_MENU
                    }),
                    (0, h.Mo)({
                        command: e,
                        location: t,
                        sectionName: n.name
                    }),
                    P.S.dispatch(R.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: o.id });
            },
            [o.id, k, F, L, H]
        ),
        B = l.useCallback(
            async (e, n, t) => {
                var i, l;
                let a = e.applicationId,
                    r = (null === (i = L.result) || void 0 === i ? void 0 : i.sections[a]) != null,
                    c = (null === (l = H.result) || void 0 === l ? void 0 : l.sections[a]) != null;
                r || c || E.ZP.queryInstallOnDemandApp(e.applicationId, o.id);
                let d = await (0, M.L)({
                    applicationId: a,
                    userIndexState: L,
                    guildIndexState: H,
                    location: n,
                    source: s._b.TEXT
                });
                (0, C.qJ)({
                    command: e,
                    location: n,
                    source: s._b.TEXT
                }),
                    d &&
                        (await k(t),
                        await (0, _.Z)({
                            command: { ...e },
                            optionValues: {
                                [t]: [
                                    {
                                        text: 'image',
                                        type: 'text'
                                    }
                                ]
                            },
                            context: {
                                channel: o,
                                guild: w
                            },
                            commandOrigin: n === g.Vh.IMAGE_RECS_SUBMENU ? g.bB.IMAGE_RECS_SUBMENU : g.bB.IMAGE_RECS_MENU
                        }));
            },
            [o, w, L, H, k]
        );
    return (0, i.jsxs)(r.Menu, {
        onSelect: n,
        navId: 'image-context-commands-popout',
        onClose: t,
        'aria-label': x.intl.string(x.t.P3ShV1),
        children: [
            (0, i.jsx)(
                r.MenuItem,
                {
                    id: 'menu-image-rec-header',
                    render: () =>
                        (0, i.jsx)(r.Text, {
                            className: y.title,
                            variant: 'text-md/bold',
                            color: 'header-primary',
                            children: x.intl.string(x.t.emnnEB)
                        }),
                    navigable: !1,
                    disabled: !0
                },
                'menu-image-rec-header'
            ),
            (0, i.jsx)(r.MenuSeparator, {}),
            D
                ? (0, i.jsx)(
                      r.MenuItem,
                      {
                          id: 'menu-image-recs-placeholder',
                          render: () => (0, i.jsx)(I.Z, {}),
                          navigable: !1,
                          disabled: !0
                      },
                      'menu-image-recs-placeholder'
                  )
                : (0, i.jsx)(i.Fragment, {
                      children: j.map((e) => {
                          let n = T.yJ[e.command.id],
                              t = e.overrideSendCommand,
                              l = n.overrideSendCommandInfo,
                              a = null != t && null != l,
                              c = n.onlyAllowEdit || (null != l && null == t);
                          return (0, i.jsx)(
                              r.MenuItem,
                              {
                                  id: e.command.id,
                                  action: () => {
                                      c ? G(e.command, e.section, g.Vh.IMAGE_RECS_MENU, n.imageOption) : B(a ? t : e.command, g.Vh.IMAGE_RECS_MENU, a ? l.imageOption : n.imageOption);
                                  },
                                  label: e.command.displayName,
                                  subtext: e.command.displayDescription,
                                  subtextLineClamp: 1,
                                  icon: c ? r.PencilIcon : a ? void 0 : r.SendMessageIcon,
                                  iconLeft: () =>
                                      (0, i.jsx)(v.Z, {
                                          channel: o,
                                          section: e.section,
                                          width: 32,
                                          height: 32,
                                          isSquircle: !0,
                                          selectable: !1
                                      }),
                                  iconLeftSize: 'lg',
                                  showImageFirst: !0,
                                  disabled: !F && c,
                                  children: a
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(
                                                    r.MenuItem,
                                                    {
                                                        id: ''.concat(e.command.id, '-send'),
                                                        label: x.intl.string(x.t['M+BhUV']),
                                                        subtext: x.intl.string(x.t.zXFjJS),
                                                        action: () => B(t, g.Vh.IMAGE_RECS_SUBMENU, l.imageOption),
                                                        icon: r.SendMessageIcon
                                                    },
                                                    ''.concat(e.command.id, '-send')
                                                ),
                                                (0, i.jsx)(
                                                    r.MenuItem,
                                                    {
                                                        id: ''.concat(e.command.id, '-edit'),
                                                        label: x.intl.string(x.t['wTaN+P']),
                                                        subtext: x.intl.string(x.t.bIB3bm),
                                                        action: () => G(e.command, e.section, g.Vh.IMAGE_RECS_SUBMENU, n.imageOption),
                                                        icon: r.PencilIcon,
                                                        disabled: !F
                                                    },
                                                    ''.concat(e.command.id, '-edit')
                                                )
                                            ]
                                        })
                                      : null
                              },
                              e.command.id
                          );
                      })
                  })
        ]
    });
}
