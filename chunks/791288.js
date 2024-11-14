n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(512722),
    a = n.n(r),
    l = n(442837),
    o = n(481060),
    c = n(493683),
    d = n(13245),
    u = n(99690),
    h = n(835473),
    p = n(194082),
    f = n(442550),
    m = n(297781),
    g = n(371991),
    v = n(656709),
    _ = n(561308),
    E = n(593481),
    x = n(703656),
    Z = n(199902),
    S = n(592125),
    C = n(158776),
    I = n(594174),
    y = n(5192),
    N = n(312839),
    T = n(981631),
    b = n(701488),
    O = n(987650),
    j = n(388032),
    A = n(810489);
function M(e) {
    let { game: t } = e,
        n = (0, h.q)(t.id);
    if (null == n) return null;
    let s = n.getIconURL(b.Si.LARGE);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: A.header,
            children: [
                (0, i.jsx)(f.f, {
                    src: s,
                    size: 32
                }),
                (0, i.jsx)(o.Text, {
                    className: A.gameInfo,
                    variant: 'text-md/semibold',
                    color: 'header-primary',
                    children: n.name
                })
            ]
        })
    });
}
function P(e) {
    let { entry: t, idx: n } = e,
        r = (0, l.e7)([I.default], () => I.default.getUser(t.author_id)),
        h = (0, _.kr)(t),
        f = h ? o.tokens.colors.TEXT_POSITIVE : o.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
        [E, N] = s.useState('unsent'),
        [b, O] = s.useState(!1),
        M = (0, l.e7)([Z.Z], () => (null != r ? Z.Z.getAnyStreamForUser(r.id) : null), [r]),
        { isMobileOnline: P, status: L } = (0, l.cj)(
            [C.Z],
            () =>
                null == r
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: C.Z.isMobileOnline(r.id),
                          status: C.Z.getStatus(r.id)
                      },
            [r]
        );
    s.useEffect(() => {
        if ('sent' === E) {
            let e = setTimeout(() => O(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [E]);
    let R = async (e) => {
            if (null != r && 'unsent' === E) {
                e.stopPropagation();
                try {
                    var i;
                    N('sending');
                    let e = await c.Z.getOrEnsurePrivateChannel(r.id),
                        s = null !== (i = S.Z.getChannel(e)) && void 0 !== i ? i : null;
                    a()(null != s, 'Send channel must be defined'),
                        (0, x.uL)(T.Z5c.CHANNEL(s.guild_id, s.id)),
                        await (0, v.p)({
                            channel: s,
                            content: j.intl.string(j.t.DwAcMz),
                            entry: t,
                            whenReady: !0
                        }),
                        d.Z.track(T.rMx.OVERLAY_GAME_INVITE_SENT, {
                            target_user_id: r.id,
                            target_content_entry_id: t.id,
                            target_index: n
                        }),
                        N('sent');
                } catch (e) {
                    N('unsent');
                }
            }
        },
        w = async () => {
            var e;
            if (null == r) return;
            let t = await c.Z.getOrEnsurePrivateChannel(r.id),
                n = null !== (e = S.Z.getChannel(t)) && void 0 !== e ? e : null;
            a()(null != n, 'Send channel must be defined'), (0, x.uL)(T.Z5c.CHANNEL(n.guild_id, n.id));
        };
    return null == r
        ? null
        : (0, i.jsxs)('div', {
              className: A.userRow,
              children: [
                  (0, i.jsx)(u.Z, {
                      className: A.avatarContainer,
                      user: r,
                      isMobile: P,
                      status: L
                  }),
                  (0, i.jsxs)('div', {
                      className: A.userInfo,
                      children: [
                          (0, i.jsxs)('div', {
                              className: A.usernameWrapper,
                              children: [
                                  (0, i.jsx)(o.Text, {
                                      className: A.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: y.ZP.getName(void 0, void 0, r)
                                  }),
                                  null != M && (0, i.jsx)(p.ZP, {})
                              ]
                          }),
                          (0, i.jsxs)(m.m7, {
                              children: [
                                  (0, i.jsx)(o.GameControllerIcon, {
                                      size: 'xxs',
                                      color: f
                                  }),
                                  (0, i.jsx)(g.ZP, {
                                      entry: t,
                                      textColor: h ? 'text-positive' : 'content-inventory-overlay-text-secondary',
                                      bold: !0
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      className: A.inviteButtonWrapper,
                      children: (0, i.jsx)(o.Button, {
                          submitting: 'sending' === E,
                          onClick: b ? w : R,
                          className: A.inviteButton,
                          color: o.ButtonColors.PRIMARY,
                          look: 'sent' === E ? o.ButtonLooks.OUTLINED : o.ButtonLooks.FILLED,
                          size: o.ButtonSizes.MAX,
                          children:
                              'sent' === E
                                  ? b
                                      ? (0, i.jsx)(o.ChatIcon, { size: 'sm' })
                                      : (0, i.jsx)(o.CheckmarkSmallBoldIcon, {
                                            size: 'sm',
                                            color: o.tokens.colors.WHITE
                                        })
                                  : (0, i.jsx)(o.SendMessageIcon, { size: 'sm' })
                      })
                  })
              ]
          });
}
function L(e) {
    let { entries: t } = e,
        n = t.slice(0, 5);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(E.iz, {}),
            (0, i.jsxs)(o.Text, {
                className: A.helpText,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: [(0, i.jsx)(o.ChatPlusIcon, { size: 'xxs' }), j.intl.string(j.t.y9eo7e)]
            }),
            n.map((e, t) =>
                (0, i.jsx)(
                    P,
                    {
                        idx: t,
                        entry: e
                    },
                    t
                )
            )
        ]
    });
}
function R(e, t) {
    let { trackView: n, trackClick: s } = (0, N.R)(O.n0.SendGameInvitesNotification, { notif_type: O.n0.SendGameInvitesNotification });
    return (
        a()(t.length > 0, 'Some entries must be present'),
        {
            icon: null,
            title: (0, i.jsx)(M, { game: e }),
            body: (0, i.jsx)(L, { entries: t }),
            onNotificationShow: () => {
                n(),
                    d.Z.track(T.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
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
