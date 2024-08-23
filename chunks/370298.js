n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120);
var i = n(735250),
    o = n(470079),
    a = n(442837),
    l = n(481060),
    r = n(166459),
    d = n(911969),
    c = n(476326),
    m = n(827498),
    u = n(555573),
    s = n(213459),
    p = n(998698),
    _ = n(895924),
    E = n(581364),
    g = n(667204),
    x = n(873387),
    M = n(809090),
    A = n(147391),
    C = n(978983),
    I = n(592125),
    h = n(703558),
    f = n(430824),
    N = n(626135),
    y = n(585483),
    P = n(619895),
    v = n(844439),
    b = n(981631),
    T = n(689938),
    O = n(834033);
function R(e) {
    let { toggleShowMenu: t, showMenu: n, className: o, channelId: r, imageUrl: d, mimeType: c } = e,
        m = (0, a.e7)([I.Z], () => I.Z.getChannel(r));
    return null == m
        ? null
        : (0, i.jsx)(l.Popout, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(S, {
                      onClose: t,
                      channel: m,
                      imageUrl: d,
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
                      text: T.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                      children: (e) =>
                          (0, i.jsx)(l.Clickable, {
                              ...e,
                              className: o,
                              focusProps: { offset: 2 },
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
function S(e) {
    let { onSelect: t, onClose: n, channel: I, imageUrl: R, mimeType: S } = e,
        U = (0, a.e7)([f.Z], () => f.Z.getGuild(I.guild_id)),
        { fetchState: Z, imageRecCommandContexts: F } = (0, P.hR)({ channelId: I.id }),
        w = Z === v.M.FETCHING,
        j = (0, x.g)(I),
        D = (0, s.PL)(!0, !0),
        k = (0, s.LD)(I.guild_id, !0);
    o.useEffect(() => {
        (Z === v.M.ERROR || (Z === v.M.FETCHED && 0 === F.length)) && n();
    }, [Z, F.length, n]),
        o.useEffect(() => {
            var e, t;
            if (!w && 0 !== F.length)
                N.default.track(b.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
                    guild_id: null !== (e = null == I ? void 0 : I.guild_id) && void 0 !== e ? e : '',
                    channel_id: null !== (t = null == I ? void 0 : I.id) && void 0 !== t ? t : '',
                    application_ids: [...F.map((e) => Number(e.command.applicationId))],
                    command_ids: [...F.map((e) => Number(e.command.id))]
                });
        }, [F, I, w]);
    let L = o.useCallback(
            async (e) => {
                let t = await fetch(R),
                    n = await t.arrayBuffer(),
                    i = S.join('/'),
                    o = new File([n], 'image'.concat((0, P.Qm)({ contentType: i })), { type: i });
                r.Z.setFile({
                    channelId: I.id,
                    id: e,
                    file: {
                        id: e,
                        file: o,
                        platform: c.ow.WEB
                    },
                    draftType: h.d.SlashCommand
                });
            },
            [R, I.id, S]
        ),
        H = o.useCallback(
            async (e, t, n) => {
                var i, o;
                if (!j) return;
                let a = P.Id[e.id],
                    l = e.applicationId,
                    r = (null === (i = D.result) || void 0 === i ? void 0 : i.sections[l]) != null,
                    c = (null === (o = k.result) || void 0 === o ? void 0 : o.sections[l]) != null;
                await L(a.imageOption),
                    null != p.Z.getActiveCommand(I.id) &&
                        u.Po({
                            channelId: I.id,
                            command: null,
                            section: null
                        }),
                    r || c || s.ZP.queryInstallOnDemandApp(e.applicationId, I.id),
                    u.Po({
                        channelId: I.id,
                        command: e,
                        section: t,
                        location: n,
                        source: m._b.TEXT,
                        initialValues: {
                            [a.imageOption]: {
                                type: d.jw.ATTACHMENT,
                                name: a.imageOption,
                                value: 'image'
                            }
                        },
                        commandOrigin: _.bB.IMAGE_RECS_MENU
                    }),
                    y.S.dispatch(b.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: I.id });
            },
            [I.id, L, j, D, k]
        ),
        G = o.useCallback(
            async (e, t) => {
                var n, i;
                let o = e.applicationId,
                    a = (null === (n = D.result) || void 0 === n ? void 0 : n.sections[o]) != null,
                    l = (null === (i = k.result) || void 0 === i ? void 0 : i.sections[o]) != null;
                a || l || s.ZP.queryInstallOnDemandApp(e.applicationId, I.id);
                let r = await (0, A.L)({
                    applicationId: o,
                    userIndexState: D,
                    guildIndexState: k,
                    location: t,
                    source: m._b.TEXT
                });
                if (
                    ((0, E.qJ)({
                        command: e,
                        location: t,
                        source: m._b.TEXT
                    }),
                    r)
                ) {
                    let t = P.Id[e.id],
                        n = t.additionalOptions;
                    await L(t.imageOption),
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
                                channel: I,
                                guild: U
                            },
                            commandOrigin: _.bB.IMAGE_RECS_MENU
                        });
                }
            },
            [I, U, D, k, L]
        );
    return (0, i.jsxs)(l.Menu, {
        onSelect: t,
        navId: 'image-context-commands-popout',
        onClose: n,
        'aria-label': T.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
        children: [
            (0, i.jsx)(
                l.MenuItem,
                {
                    id: 'menu-image-rec-header',
                    render: () =>
                        (0, i.jsx)(l.Text, {
                            className: O.title,
                            variant: 'text-md/bold',
                            color: 'header-primary',
                            children: T.Z.Messages.APP_IMAGE_REC_MENU_HEADER
                        }),
                    navigable: !1,
                    disabled: !0
                },
                'menu-image-rec-header'
            ),
            (0, i.jsx)(l.MenuSeparator, {}),
            w
                ? (0, i.jsx)(
                      l.MenuItem,
                      {
                          id: 'menu-image-recs-placeholder',
                          render: () => (0, i.jsx)(C.Z, {}),
                          navigable: !1,
                          disabled: !0
                      },
                      'menu-image-recs-placeholder'
                  )
                : (0, i.jsx)(i.Fragment, {
                      children: F.map((e) => {
                          var t;
                          let n = null != P.Id[e.command.id].additionalOptions,
                              o = P.Id[e.command.id].onlyAllowEdit;
                          return (0, i.jsx)(
                              l.MenuItem,
                              {
                                  id: e.command.id,
                                  action: () => {
                                      o ? H(e.command, e.section, _.Vh.IMAGE_RECS_MENU) : G(e.command, _.Vh.IMAGE_RECS_MENU);
                                  },
                                  label: null !== (t = P.Id[e.command.id].overrideCommandName) && void 0 !== t ? t : e.command.name,
                                  subtext: e.command.description,
                                  subtextLineClamp: 1,
                                  icon: o ? l.PencilIcon : n ? void 0 : l.SendMessageIcon,
                                  iconLeft: () =>
                                      (0, i.jsx)(M.Z, {
                                          channel: I,
                                          section: e.section,
                                          width: 32,
                                          height: 32,
                                          isSquircle: !0,
                                          selectable: !1
                                      }),
                                  iconLeftSize: 'lg',
                                  showImageFirst: !0,
                                  disabled: !j && o,
                                  children:
                                      n && !o
                                          ? (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(
                                                        l.MenuItem,
                                                        {
                                                            id: ''.concat(e.command.id, '-send'),
                                                            label: T.Z.Messages.APP_IMAGE_REC_MENU_SEND_LABEL,
                                                            subtext: T.Z.Messages.APP_IMAGE_REC_MENU_SEND_SUBTEXT,
                                                            action: () => G(e.command, _.Vh.IMAGE_RECS_SUBMENU),
                                                            icon: l.SendMessageIcon
                                                        },
                                                        ''.concat(e.command.id, '-send')
                                                    ),
                                                    (0, i.jsx)(
                                                        l.MenuItem,
                                                        {
                                                            id: ''.concat(e.command.id, '-edit'),
                                                            label: T.Z.Messages.APP_IMAGE_REC_MENU_CUSTOMIZE_LABEL,
                                                            subtext: T.Z.Messages.APP_IMAGE_REC_MENU_CUSTOMIZE_SUBTEXT,
                                                            action: () => H(e.command, e.section, _.Vh.IMAGE_RECS_SUBMENU),
                                                            icon: l.PencilIcon,
                                                            disabled: !j
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
