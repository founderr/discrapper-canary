n.d(t, {
    Z: function () {
        return U;
    }
}),
    n(47120);
var o = n(735250),
    a = n(470079),
    i = n(442837),
    l = n(749280),
    r = n(481060),
    c = n(166459),
    d = n(911969),
    u = n(476326),
    m = n(827498),
    s = n(555573),
    p = n(213459),
    _ = n(998698),
    E = n(895924),
    g = n(581364),
    M = n(667204),
    x = n(873387),
    C = n(809090),
    A = n(147391),
    I = n(583027),
    f = n(978983),
    h = n(592125),
    y = n(703558),
    N = n(430824),
    v = n(626135),
    b = n(585483),
    P = n(619895),
    S = n(844439),
    R = n(981631),
    T = n(689938),
    O = n(973335);
function U(e) {
    let { toggleShowMenu: t, showMenu: n, className: c, channelId: d, imageUrl: u, mimeType: m } = e,
        s = (0, i.e7)([h.Z], () => h.Z.getChannel(d)),
        { Component: p, events: _, play: E } = (0, l.w)(),
        [g, M] = a.useState(!1);
    return null == s
        ? null
        : (!g && E(),
          (0, o.jsx)(r.Popout, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, o.jsx)(Z, {
                      onClose: t,
                      channel: s,
                      imageUrl: u,
                      mimeType: m
                  });
              },
              position: 'right',
              align: 'top',
              animation: r.Popout.Animation.NONE,
              onRequestClose: t,
              shouldShow: n,
              children: (e) => {
                  let { onClick: n } = e;
                  return (0, o.jsx)(r.Tooltip, {
                      text: T.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                      children: (e) =>
                          (0, o.jsx)(r.Clickable, {
                              ...e,
                              className: c,
                              focusProps: { offset: 2 },
                              onClick: t,
                              onMouseEnter: () => {
                                  M(!0), _.onMouseEnter();
                              },
                              onMouseLeave: _.onMouseLeave,
                              'aria-label': T.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                              children: (0, o.jsx)(p, {
                                  size: 'sm',
                                  color: 'currentColor',
                                  className: O.buttonIcon
                              })
                          })
                  });
              }
          }));
}
function Z(e) {
    let { onSelect: t, onClose: n, channel: l, imageUrl: h, mimeType: U } = e,
        Z = (0, i.e7)([N.Z], () => N.Z.getGuild(l.guild_id)),
        { fetchState: F, imageRecCommandContexts: k } = (0, P.hR)({ channelId: l.id }),
        w = F === S.M.FETCHING,
        j = (0, x.g)(l),
        D = (0, p.PL)(!0, !0),
        L = (0, p.LD)(l.guild_id, !0);
    a.useEffect(() => {
        (F === S.M.ERROR || (F === S.M.FETCHED && 0 === k.length)) && n();
    }, [F, k.length, n]),
        a.useEffect(() => {
            var e, t;
            if (!w && 0 !== k.length)
                v.default.track(R.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
                    guild_id: null !== (e = null == l ? void 0 : l.guild_id) && void 0 !== e ? e : '',
                    channel_id: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : '',
                    application_ids: [...k.map((e) => Number(e.command.applicationId))],
                    command_ids: [...k.map((e) => Number(e.command.id))]
                });
        }, [k, l, w]);
    let G = a.useCallback(
            async (e) => {
                let t = await fetch(h),
                    n = await t.arrayBuffer(),
                    o = U.join('/'),
                    a = new File([n], 'image'.concat((0, P.Qm)({ contentType: o })), { type: o });
                c.Z.setFile({
                    channelId: l.id,
                    id: e,
                    file: {
                        id: e,
                        file: a,
                        platform: u.ow.WEB
                    },
                    draftType: y.d.SlashCommand
                });
            },
            [h, l.id, U]
        ),
        H = a.useCallback(
            async (e, t, n) => {
                var o, a;
                if (!j) return;
                let i = P.Id[e.id],
                    r = e.applicationId,
                    c = (null === (o = D.result) || void 0 === o ? void 0 : o.sections[r]) != null,
                    u = (null === (a = L.result) || void 0 === a ? void 0 : a.sections[r]) != null;
                await G(i.imageOption),
                    null != _.Z.getActiveCommand(l.id) &&
                        s.Po({
                            channelId: l.id,
                            command: null,
                            section: null
                        }),
                    c || u || p.ZP.queryInstallOnDemandApp(e.applicationId, l.id),
                    s.Po({
                        channelId: l.id,
                        command: e,
                        section: t,
                        location: n,
                        source: m._b.TEXT,
                        initialValues: {
                            [i.imageOption]: {
                                type: d.jw.ATTACHMENT,
                                name: i.imageOption,
                                value: 'image'
                            }
                        },
                        commandOrigin: n === E.Vh.IMAGE_RECS_SUBMENU ? E.bB.IMAGE_RECS_SUBMENU : E.bB.IMAGE_RECS_MENU
                    }),
                    (0, I.Mo)({
                        command: e,
                        location: n,
                        sectionName: t.name
                    }),
                    b.S.dispatch(R.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: l.id });
            },
            [l.id, G, j, D, L]
        ),
        B = a.useCallback(
            async (e, t) => {
                var n, o;
                let a = e.applicationId,
                    i = (null === (n = D.result) || void 0 === n ? void 0 : n.sections[a]) != null,
                    r = (null === (o = L.result) || void 0 === o ? void 0 : o.sections[a]) != null;
                i || r || p.ZP.queryInstallOnDemandApp(e.applicationId, l.id);
                let c = await (0, A.L)({
                    applicationId: a,
                    userIndexState: D,
                    guildIndexState: L,
                    location: t,
                    source: m._b.TEXT
                });
                if (
                    ((0, g.qJ)({
                        command: e,
                        location: t,
                        source: m._b.TEXT
                    }),
                    c)
                ) {
                    let n = P.Id[e.id],
                        o = n.additionalOptions;
                    await G(n.imageOption),
                        await (0, M.Z)({
                            command: { ...e },
                            optionValues: {
                                [n.imageOption]: [
                                    {
                                        text: 'image',
                                        type: 'text'
                                    }
                                ],
                                ...(null == o ? {} : o[Math.floor(Math.random() * o.length)])
                            },
                            context: {
                                channel: l,
                                guild: Z
                            },
                            commandOrigin: t === E.Vh.IMAGE_RECS_SUBMENU ? E.bB.IMAGE_RECS_SUBMENU : E.bB.IMAGE_RECS_MENU
                        });
                }
            },
            [l, Z, D, L, G]
        );
    return (0, o.jsxs)(r.Menu, {
        onSelect: t,
        navId: 'image-context-commands-popout',
        onClose: n,
        'aria-label': T.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
        children: [
            (0, o.jsx)(
                r.MenuItem,
                {
                    id: 'menu-image-rec-header',
                    render: () =>
                        (0, o.jsx)(r.Text, {
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
            (0, o.jsx)(r.MenuSeparator, {}),
            w
                ? (0, o.jsx)(
                      r.MenuItem,
                      {
                          id: 'menu-image-recs-placeholder',
                          render: () => (0, o.jsx)(f.Z, {}),
                          navigable: !1,
                          disabled: !0
                      },
                      'menu-image-recs-placeholder'
                  )
                : (0, o.jsx)(o.Fragment, {
                      children: k.map((e) => {
                          var t;
                          let n = null != P.Id[e.command.id].additionalOptions,
                              a = P.Id[e.command.id].onlyAllowEdit;
                          return (0, o.jsx)(
                              r.MenuItem,
                              {
                                  id: e.command.id,
                                  action: () => {
                                      a ? H(e.command, e.section, E.Vh.IMAGE_RECS_MENU) : B(e.command, E.Vh.IMAGE_RECS_MENU);
                                  },
                                  label: null !== (t = P.Id[e.command.id].overrideCommandName) && void 0 !== t ? t : e.command.displayName,
                                  subtext: e.command.displayDescription,
                                  subtextLineClamp: 1,
                                  icon: a ? r.PencilIcon : n ? void 0 : r.SendMessageIcon,
                                  iconLeft: () =>
                                      (0, o.jsx)(C.Z, {
                                          channel: l,
                                          section: e.section,
                                          width: 32,
                                          height: 32,
                                          isSquircle: !0,
                                          selectable: !1
                                      }),
                                  iconLeftSize: 'lg',
                                  showImageFirst: !0,
                                  disabled: !j && a,
                                  children:
                                      n && !a
                                          ? (0, o.jsxs)(o.Fragment, {
                                                children: [
                                                    (0, o.jsx)(
                                                        r.MenuItem,
                                                        {
                                                            id: ''.concat(e.command.id, '-send'),
                                                            label: T.Z.Messages.APP_IMAGE_REC_MENU_SEND_LABEL,
                                                            subtext: T.Z.Messages.APP_IMAGE_REC_MENU_SEND_SUBTEXT,
                                                            action: () => B(e.command, E.Vh.IMAGE_RECS_SUBMENU),
                                                            icon: r.SendMessageIcon
                                                        },
                                                        ''.concat(e.command.id, '-send')
                                                    ),
                                                    (0, o.jsx)(
                                                        r.MenuItem,
                                                        {
                                                            id: ''.concat(e.command.id, '-edit'),
                                                            label: T.Z.Messages.APP_IMAGE_REC_MENU_CUSTOMIZE_LABEL,
                                                            subtext: T.Z.Messages.APP_IMAGE_REC_MENU_CUSTOMIZE_SUBTEXT,
                                                            action: () => H(e.command, e.section, E.Vh.IMAGE_RECS_SUBMENU),
                                                            icon: r.PencilIcon,
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
