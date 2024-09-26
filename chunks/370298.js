n.d(t, {
    Z: function () {
        return w;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(735250),
    o = n(470079),
    s = n(442837),
    l = n(749280),
    u = n(481060),
    c = n(166459),
    d = n(911969),
    _ = n(476326),
    E = n(827498),
    f = n(555573),
    h = n(213459),
    p = n(998698),
    m = n(895924),
    I = n(581364),
    T = n(667204),
    g = n(873387),
    S = n(809090),
    A = n(147391),
    v = n(583027),
    N = n(978983),
    O = n(592125),
    R = n(703558),
    C = n(430824),
    y = n(626135),
    L = n(585483),
    b = n(619895),
    D = n(844439),
    M = n(981631),
    P = n(689938),
    U = n(973335);
function w(e) {
    let { toggleShowMenu: t, showMenu: n, className: r, channelId: i, imageUrl: c, mimeType: d } = e,
        _ = (0, s.e7)([O.Z], () => O.Z.getChannel(i)),
        { Component: E, events: f, play: h } = (0, l.w)(),
        [p, m] = o.useState(!1);
    return null == _
        ? null
        : (!p && h(),
          (0, a.jsx)(u.Popout, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(x, {
                      onClose: t,
                      channel: _,
                      imageUrl: c,
                      mimeType: d
                  });
              },
              position: 'right',
              align: 'top',
              animation: u.Popout.Animation.NONE,
              onRequestClose: t,
              shouldShow: n,
              children: (e) => {
                  let { onClick: n } = e;
                  return (0, a.jsx)(u.Tooltip, {
                      text: P.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                      children: (e) =>
                          (0, a.jsx)(u.Clickable, {
                              ...e,
                              className: r,
                              focusProps: { offset: 2 },
                              onClick: t,
                              onMouseEnter: () => {
                                  m(!0), f.onMouseEnter();
                              },
                              onMouseLeave: f.onMouseLeave,
                              'aria-label': P.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                              children: (0, a.jsx)(E, {
                                  size: 'sm',
                                  color: 'currentColor',
                                  className: U.buttonIcon
                              })
                          })
                  });
              }
          }));
}
function x(e) {
    let { onSelect: t, onClose: n, channel: r, imageUrl: i, mimeType: l } = e,
        O = (0, s.e7)([C.Z], () => C.Z.getGuild(r.guild_id)),
        { fetchState: w, imageRecCommandContexts: x } = (0, b.hR)({ channelId: r.id }),
        G = w === D.M.FETCHING,
        k = (0, g.g)(r),
        B = (0, h.PL)(!0, !0),
        F = (0, h.LD)(r.guild_id, !0);
    o.useEffect(() => {
        (w === D.M.ERROR || (w === D.M.FETCHED && 0 === x.length)) && n();
    }, [w, x.length, n]),
        o.useEffect(() => {
            var e, t;
            if (G || 0 === x.length) return;
            let n = [];
            x.forEach((e) => {
                n.push(Number(e.command.id)), null != e.overrideSendCommand && n.push(Number(e.overrideSendCommand.id));
            }),
                y.default.track(M.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
                    guild_id: null !== (e = null == r ? void 0 : r.guild_id) && void 0 !== e ? e : '',
                    channel_id: null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : '',
                    application_ids: [...x.map((e) => Number(e.command.applicationId))],
                    command_ids: n
                });
        }, [x, r, G]);
    let Z = o.useCallback(
            async (e) => {
                let t = await fetch(i),
                    n = await t.arrayBuffer(),
                    a = l.join('/'),
                    o = new File([n], 'image'.concat((0, b.Qm)({ contentType: a })), { type: a });
                c.Z.setFile({
                    channelId: r.id,
                    id: e,
                    file: {
                        id: e,
                        file: o,
                        platform: _.ow.WEB
                    },
                    draftType: R.d.SlashCommand
                });
            },
            [i, r.id, l]
        ),
        V = o.useCallback(
            async (e, t, n, i) => {
                var a, o;
                if (!k) return;
                let s = e.applicationId,
                    l = (null === (a = B.result) || void 0 === a ? void 0 : a.sections[s]) != null,
                    u = (null === (o = F.result) || void 0 === o ? void 0 : o.sections[s]) != null;
                await Z(i),
                    null != p.Z.getActiveCommand(r.id) &&
                        f.Po({
                            channelId: r.id,
                            command: null,
                            section: null
                        }),
                    l || u || h.ZP.queryInstallOnDemandApp(e.applicationId, r.id),
                    f.Po({
                        channelId: r.id,
                        command: e,
                        section: t,
                        location: n,
                        source: E._b.TEXT,
                        initialValues: {
                            [i]: {
                                type: d.jw.ATTACHMENT,
                                name: i,
                                value: 'image'
                            }
                        },
                        commandOrigin: n === m.Vh.IMAGE_RECS_SUBMENU ? m.bB.IMAGE_RECS_SUBMENU : m.bB.IMAGE_RECS_MENU
                    }),
                    (0, v.Mo)({
                        command: e,
                        location: n,
                        sectionName: t.name
                    }),
                    L.S.dispatch(M.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: r.id });
            },
            [r.id, Z, k, B, F]
        ),
        H = o.useCallback(
            async (e, t, n) => {
                var i, a;
                let o = e.applicationId,
                    s = (null === (i = B.result) || void 0 === i ? void 0 : i.sections[o]) != null,
                    l = (null === (a = F.result) || void 0 === a ? void 0 : a.sections[o]) != null;
                s || l || h.ZP.queryInstallOnDemandApp(e.applicationId, r.id);
                let u = await (0, A.L)({
                    applicationId: o,
                    userIndexState: B,
                    guildIndexState: F,
                    location: t,
                    source: E._b.TEXT
                });
                (0, I.qJ)({
                    command: e,
                    location: t,
                    source: E._b.TEXT
                }),
                    u &&
                        (await Z(n),
                        await (0, T.Z)({
                            command: { ...e },
                            optionValues: {
                                [n]: [
                                    {
                                        text: 'image',
                                        type: 'text'
                                    }
                                ]
                            },
                            context: {
                                channel: r,
                                guild: O
                            },
                            commandOrigin: t === m.Vh.IMAGE_RECS_SUBMENU ? m.bB.IMAGE_RECS_SUBMENU : m.bB.IMAGE_RECS_MENU
                        }));
            },
            [r, O, B, F, Z]
        );
    return (0, a.jsxs)(u.Menu, {
        onSelect: t,
        navId: 'image-context-commands-popout',
        onClose: n,
        'aria-label': P.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
        children: [
            (0, a.jsx)(
                u.MenuItem,
                {
                    id: 'menu-image-rec-header',
                    render: () =>
                        (0, a.jsx)(u.Text, {
                            className: U.title,
                            variant: 'text-md/bold',
                            color: 'header-primary',
                            children: P.Z.Messages.APP_IMAGE_REC_MENU_HEADER
                        }),
                    navigable: !1,
                    disabled: !0
                },
                'menu-image-rec-header'
            ),
            (0, a.jsx)(u.MenuSeparator, {}),
            G
                ? (0, a.jsx)(
                      u.MenuItem,
                      {
                          id: 'menu-image-recs-placeholder',
                          render: () => (0, a.jsx)(N.Z, {}),
                          navigable: !1,
                          disabled: !0
                      },
                      'menu-image-recs-placeholder'
                  )
                : (0, a.jsx)(a.Fragment, {
                      children: x.map((e) => {
                          let t = b.yJ[e.command.id],
                              n = e.overrideSendCommand,
                              i = t.overrideSendCommandInfo,
                              o = null != n && null != i,
                              s = t.onlyAllowEdit || (null != i && null == n);
                          return (0, a.jsx)(
                              u.MenuItem,
                              {
                                  id: e.command.id,
                                  action: () => {
                                      s ? V(e.command, e.section, m.Vh.IMAGE_RECS_MENU, t.imageOption) : H(o ? n : e.command, m.Vh.IMAGE_RECS_MENU, o ? i.imageOption : t.imageOption);
                                  },
                                  label: e.command.displayName,
                                  subtext: e.command.displayDescription,
                                  subtextLineClamp: 1,
                                  icon: s ? u.PencilIcon : o ? void 0 : u.SendMessageIcon,
                                  iconLeft: () =>
                                      (0, a.jsx)(S.Z, {
                                          channel: r,
                                          section: e.section,
                                          width: 32,
                                          height: 32,
                                          isSquircle: !0,
                                          selectable: !1
                                      }),
                                  iconLeftSize: 'lg',
                                  showImageFirst: !0,
                                  disabled: !k && s,
                                  children: o
                                      ? (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(
                                                    u.MenuItem,
                                                    {
                                                        id: ''.concat(e.command.id, '-send'),
                                                        label: P.Z.Messages.APP_IMAGE_REC_MENU_SEND_LABEL,
                                                        subtext: P.Z.Messages.APP_IMAGE_REC_MENU_SEND_SUBTEXT,
                                                        action: () => H(n, m.Vh.IMAGE_RECS_SUBMENU, i.imageOption),
                                                        icon: u.SendMessageIcon
                                                    },
                                                    ''.concat(e.command.id, '-send')
                                                ),
                                                (0, a.jsx)(
                                                    u.MenuItem,
                                                    {
                                                        id: ''.concat(e.command.id, '-edit'),
                                                        label: P.Z.Messages.APP_IMAGE_REC_MENU_CUSTOMIZE_LABEL,
                                                        subtext: P.Z.Messages.APP_IMAGE_REC_MENU_CUSTOMIZE_SUBTEXT,
                                                        action: () => V(e.command, e.section, m.Vh.IMAGE_RECS_SUBMENU, t.imageOption),
                                                        icon: u.PencilIcon,
                                                        disabled: !k
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
