n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    l = n(481060),
    d = n(166459),
    r = n(911969),
    c = n(476326),
    m = n(827498),
    u = n(555573),
    s = n(213459),
    p = n(998698),
    _ = n(895924),
    E = n(581364),
    g = n(667204),
    M = n(873387),
    A = n(147391),
    I = n(978983),
    C = n(592125),
    x = n(703558),
    h = n(430824),
    f = n(626135),
    N = n(585483),
    P = n(619895),
    v = n(844439),
    T = n(981631),
    O = n(689938),
    b = n(834033);
function R(e) {
    let { toggleShowMenu: t, showMenu: n, className: a, channelId: d, imageUrl: r, mimeType: c } = e,
        m = (0, o.e7)([C.Z], () => C.Z.getChannel(d));
    return null == m
        ? null
        : (0, i.jsx)(l.Popout, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(y, {
                      onClose: t,
                      channel: m,
                      imageUrl: r,
                      mimeType: c
                  });
              },
              position: 'right',
              align: 'top',
              animation: l.Popout.Animation.NONE,
              onRequestClose: t,
              shouldShow: n,
              children: (e) => {
                  let { onClick: n } = e;
                  return (0, i.jsx)(l.Tooltip, {
                      text: O.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                      children: (e) =>
                          (0, i.jsx)(l.Clickable, {
                              ...e,
                              className: a,
                              focusProps: { offset: 2 },
                              onClick: t,
                              'aria-label': O.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
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
    let { onSelect: t, onClose: n, channel: C, imageUrl: R, mimeType: y } = e,
        S = (0, o.e7)([h.Z], () => h.Z.getGuild(C.guild_id)),
        { fetchState: U, imageRecCommandContexts: Z } = (0, P.hR)({ channelId: C.id }),
        F = U === v.M.FETCHING,
        D = (0, M.g)(C),
        L = (0, s.PL)(!0, !0),
        w = (0, s.LD)(C.guild_id, !0);
    a.useEffect(() => {
        (U === v.M.ERROR || (U === v.M.FETCHED && 0 === Z.length)) && n();
    }, [U, Z.length, n]),
        a.useEffect(() => {
            var e, t;
            if (!F && 0 !== Z.length)
                f.default.track(T.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
                    guild_id: null !== (e = null == C ? void 0 : C.guild_id) && void 0 !== e ? e : '',
                    channel_id: null !== (t = null == C ? void 0 : C.id) && void 0 !== t ? t : '',
                    application_ids: [...Z.map((e) => Number(e.application.id))],
                    command_ids: [...Z.map((e) => Number(e.command.id))]
                });
        }, [Z, C, F]);
    let j = a.useCallback(
            async (e) => {
                let t = await fetch(R),
                    n = await t.arrayBuffer(),
                    i = y.join('/'),
                    a = new File([n], 'image'.concat((0, P.Qm)({ contentType: i })), { type: i });
                d.Z.setFile({
                    channelId: C.id,
                    id: e,
                    file: {
                        id: e,
                        file: a,
                        platform: c.ow.WEB
                    },
                    draftType: x.d.SlashCommand
                });
            },
            [R, C.id, y]
        ),
        H = a.useCallback(
            async (e, t, n) => {
                var i, a, o, l;
                if (!D) return;
                let d = P.Id[e.id],
                    c = e.applicationId,
                    E = (null === (i = L.result) || void 0 === i ? void 0 : i.sections[c]) != null,
                    g = (null === (a = w.result) || void 0 === a ? void 0 : a.sections[c]) != null;
                await j(d.imageOption),
                    null != p.Z.getActiveCommand(C.id) &&
                        u.Po({
                            channelId: C.id,
                            command: null,
                            section: null
                        });
                let M = {
                    type: _.Qi.APPLICATION,
                    id: t.id,
                    icon: t.icon,
                    name: null !== (l = null == t ? void 0 : null === (o = t.bot) || void 0 === o ? void 0 : o.username) && void 0 !== l ? l : t.name,
                    application: t
                };
                E || g || s.ZP.queryInstallOnDemandApp(e.applicationId, C.id),
                    u.Po({
                        channelId: C.id,
                        command: e,
                        section: M,
                        location: n,
                        source: m._b.TEXT,
                        initialValues: {
                            [d.imageOption]: {
                                type: r.jw.ATTACHMENT,
                                name: d.imageOption,
                                value: 'image'
                            }
                        },
                        commandOrigin: _.bB.APPLICATION_LAUNCHER
                    }),
                    N.S.dispatch(T.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: C.id });
            },
            [C.id, j, D, L, w]
        ),
        k = a.useCallback(
            async (e, t) => {
                var n, i;
                let a = e.applicationId,
                    o = (null === (n = L.result) || void 0 === n ? void 0 : n.sections[a]) != null,
                    l = (null === (i = w.result) || void 0 === i ? void 0 : i.sections[a]) != null;
                o || l || s.ZP.queryInstallOnDemandApp(e.applicationId, C.id);
                let d = await (0, A.L)({
                    applicationId: a,
                    userIndexState: L,
                    guildIndexState: w,
                    location: t,
                    source: m._b.TEXT
                });
                if (
                    ((0, E.qJ)({
                        command: e,
                        location: t,
                        source: m._b.TEXT
                    }),
                    d)
                ) {
                    let t = P.Id[e.id],
                        n = t.additionalOptions;
                    await j(t.imageOption),
                        await (0, g.Z)({
                            command: { ...e },
                            optionValues: {
                                [t.imageOption]: [
                                    {
                                        text: 'image',
                                        type: 'text'
                                    }
                                ],
                                ...(null == n ? {} : n[Math.floor(Math.random() * n.length)])
                            },
                            context: {
                                channel: C,
                                guild: S
                            },
                            commandOrigin: _.bB.IMAGE_RECS_MENU
                        });
                }
            },
            [C, S, L, w, j]
        );
    return (0, i.jsxs)(l.Menu, {
        onSelect: t,
        navId: 'image-context-commands-popout',
        onClose: n,
        'aria-label': O.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
        children: [
            (0, i.jsx)(
                l.MenuItem,
                {
                    id: 'menu-image-rec-header',
                    render: () =>
                        (0, i.jsx)(l.Text, {
                            className: b.title,
                            variant: 'text-md/bold',
                            color: 'header-primary',
                            children: O.Z.Messages.APP_IMAGE_REC_MENU_HEADER
                        }),
                    navigable: !1,
                    disabled: !0
                },
                'menu-image-rec-header'
            ),
            (0, i.jsx)(l.MenuSeparator, {}),
            F
                ? (0, i.jsx)(
                      l.MenuItem,
                      {
                          id: 'menu-image-recs-placeholder',
                          render: () => (0, i.jsx)(I.Z, {}),
                          navigable: !1,
                          disabled: !0
                      },
                      'menu-image-recs-placeholder'
                  )
                : (0, i.jsx)(i.Fragment, {
                      children: Z.map((e) => {
                          var t;
                          let n = null != P.Id[e.command.id].additionalOptions,
                              a = P.Id[e.command.id].onlyAllowEdit;
                          return (0, i.jsx)(
                              l.MenuItem,
                              {
                                  id: e.command.id,
                                  action: () => {
                                      a ? H(e.command, e.application, _.Vh.IMAGE_RECS_MENU) : k(e.command, _.Vh.IMAGE_RECS_MENU);
                                  },
                                  label: null !== (t = P.Id[e.command.id].overrideCommandName) && void 0 !== t ? t : e.command.name,
                                  subtext: e.command.description,
                                  subtextLineClamp: 1,
                                  icon: a ? l.PencilIcon : n ? void 0 : l.SendMessageIcon,
                                  imageUrl: e.applicationImageURL,
                                  imageClassName: b.appIcon,
                                  showImageFirst: !0,
                                  disabled: !D && a,
                                  children:
                                      n && !a
                                          ? (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(
                                                        l.MenuItem,
                                                        {
                                                            id: ''.concat(e.command.id, '-send'),
                                                            label: O.Z.Messages.APP_IMAGE_REC_MENU_SEND_LABEL,
                                                            subtext: O.Z.Messages.APP_IMAGE_REC_MENU_SEND_SUBTEXT,
                                                            action: () => k(e.command, _.Vh.IMAGE_RECS_SUBMENU),
                                                            icon: l.SendMessageIcon
                                                        },
                                                        ''.concat(e.command.id, '-send')
                                                    ),
                                                    (0, i.jsx)(
                                                        l.MenuItem,
                                                        {
                                                            id: ''.concat(e.command.id, '-edit'),
                                                            label: O.Z.Messages.APP_IMAGE_REC_MENU_CUSTOMIZE_LABEL,
                                                            subtext: O.Z.Messages.APP_IMAGE_REC_MENU_CUSTOMIZE_SUBTEXT,
                                                            action: () => H(e.command, e.application, _.Vh.IMAGE_RECS_SUBMENU),
                                                            icon: l.PencilIcon,
                                                            disabled: !D
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
