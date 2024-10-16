n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(512722),
    o = n.n(a),
    r = n(442837),
    l = n(481060),
    c = n(493683),
    d = n(13245),
    u = n(99690),
    h = n(835473),
    p = n(194082),
    f = n(442550),
    _ = n(297781),
    E = n(371991),
    g = n(656709),
    m = n(561308),
    I = n(593481),
    Z = n(703656),
    v = n(199902),
    S = n(592125),
    C = n(158776),
    x = n(594174),
    N = n(5192),
    T = n(312839),
    O = n(981631),
    A = n(701488),
    y = n(987650),
    R = n(689938),
    M = n(810489);
function L(e) {
    let { game: t } = e,
        n = (0, h.q)(t.id);
    if (null == n) return null;
    let s = n.getIconURL(A.Si.LARGE);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: M.header,
            children: [
                (0, i.jsx)(f.f, {
                    src: s,
                    size: 32
                }),
                (0, i.jsx)(l.Text, {
                    className: M.gameInfo,
                    variant: 'text-md/semibold',
                    color: 'header-primary',
                    children: n.name
                })
            ]
        })
    });
}
function b(e) {
    let { entry: t, key: n, onTrackEvent: a } = e,
        d = (0, r.e7)([x.default], () => x.default.getUser(t.author_id)),
        h = (0, m.kr)(t),
        f = h ? l.tokens.colors.TEXT_POSITIVE : l.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
        [I, T] = s.useState('unsent'),
        [A, y] = s.useState(!1),
        L = (0, r.e7)([v.Z], () => (null != d ? v.Z.getAnyStreamForUser(d.id) : null), [d]),
        { isMobileOnline: b, status: P } = (0, r.cj)(
            [C.Z],
            () =>
                null == d
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: C.Z.isMobileOnline(d.id),
                          status: C.Z.getStatus(d.id)
                      },
            [d]
        );
    s.useEffect(() => {
        if ('sent' === I) {
            let e = setTimeout(() => y(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [I]);
    let D = async (e) => {
            if (null != d && 'unsent' === I) {
                e.stopPropagation();
                try {
                    var i;
                    T('sending');
                    let e = await c.Z.getOrEnsurePrivateChannel(d.id),
                        s = null !== (i = S.Z.getChannel(e)) && void 0 !== i ? i : null;
                    o()(null != s, 'Send channel must be defined'),
                        (0, Z.uL)(O.Z5c.CHANNEL(s.guild_id, s.id)),
                        await (0, g.p)({
                            channel: s,
                            content: R.Z.Messages.CONTENT_INVENTORY_OVERLAY_INVITE_MESSAGE,
                            entry: t,
                            whenReady: !0
                        }),
                        a(O.rMx.OVERLAY_GAME_INVITE_SENT, {
                            target_user_id: d.id,
                            target_content_entry_id: t.id,
                            target_index: n
                        }),
                        T('sent');
                } catch (e) {
                    T('unsent');
                }
            }
        },
        j = async () => {
            var e;
            if (null == d) return;
            let t = await c.Z.getOrEnsurePrivateChannel(d.id),
                n = null !== (e = S.Z.getChannel(t)) && void 0 !== e ? e : null;
            o()(null != n, 'Send channel must be defined'), (0, Z.uL)(O.Z5c.CHANNEL(n.guild_id, n.id));
        };
    return null == d
        ? null
        : (0, i.jsxs)('div', {
              className: M.userRow,
              children: [
                  (0, i.jsx)(u.Z, {
                      user: d,
                      isMobile: b,
                      status: P
                  }),
                  (0, i.jsxs)('div', {
                      className: M.userInfo,
                      children: [
                          (0, i.jsxs)('div', {
                              className: M.username,
                              children: [
                                  (0, i.jsx)(l.Text, {
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: N.ZP.getName(void 0, void 0, d)
                                  }),
                                  null != L && (0, i.jsx)(p.ZP, {})
                              ]
                          }),
                          (0, i.jsxs)(_.m7, {
                              children: [
                                  (0, i.jsx)(l.GameControllerIcon, {
                                      size: 'xxs',
                                      color: f
                                  }),
                                  (0, i.jsx)(E.ZP, {
                                      entry: t,
                                      textColor: h ? 'text-positive' : 'content-inventory-overlay-text-secondary',
                                      bold: !0
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      className: M.inviteButtonWrapper,
                      children: (0, i.jsx)(l.Button, {
                          submitting: 'sending' === I,
                          onClick: A ? j : D,
                          className: M.inviteButton,
                          color: l.ButtonColors.PRIMARY,
                          look: 'sent' === I ? l.ButtonLooks.OUTLINED : l.ButtonLooks.FILLED,
                          size: l.ButtonSizes.MAX,
                          children:
                              'sent' === I
                                  ? A
                                      ? (0, i.jsx)(l.ChatIcon, { size: 'sm' })
                                      : (0, i.jsx)(l.CheckmarkSmallBoldIcon, {
                                            size: 'sm',
                                            color: l.tokens.colors.WHITE
                                        })
                                  : (0, i.jsx)(l.SendMessageIcon, { size: 'sm' })
                      })
                  })
              ]
          });
}
function P(e) {
    let { entries: t, onTrackEvent: n } = e,
        s = t.slice(0, 5);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(I.iz, {}),
            (0, i.jsxs)(l.Text, {
                className: M.helpText,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: [(0, i.jsx)(l.ChatPlusIcon, { size: 'xxs' }), R.Z.Messages.CONTENT_INVENTORY_OVERLAY_INVITES_HELP]
            }),
            s.map((e, t) =>
                (0, i.jsx)(
                    b,
                    {
                        entry: e,
                        onTrackEvent: n
                    },
                    t
                )
            )
        ]
    });
}
function D(e, t) {
    let { trackView: n, trackClick: s, trackEvent: a } = (0, T.R)(y.n0.SendGameInvitesNotification, { notif_type: y.n0.SendGameInvitesNotification });
    return (
        o()(t.length > 0, 'Some entries must be present'),
        {
            colorScheme: I.IC.PRIMARY,
            icon: null,
            title: (0, i.jsx)(L, { game: e }),
            body: (0, i.jsx)(P, {
                entries: t,
                onTrackEvent: a
            }),
            onNotificationShow: () => {
                n(),
                    a(O.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: t.map((e) => e.author_id),
                        entry_ids: t.map((e) => e.id)
                    });
            },
            onNotificationClick: (e, t) => {
                s('unlock'), d.Z.setInstanceLocked(!1);
            },
            onDismissClick: () => {
                s('dismiss');
            }
        }
    );
}
