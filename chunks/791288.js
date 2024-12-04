n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(512722),
    a = n.n(s),
    o = n(442837),
    l = n(481060),
    c = n(493683),
    d = n(13245),
    u = n(99690),
    h = n(835473),
    p = n(194082),
    f = n(442550),
    g = n(297781),
    m = n(371991),
    v = n(656709),
    _ = n(561308),
    E = n(593481),
    x = n(703656),
    Z = n(199902),
    S = n(592125),
    I = n(158776),
    C = n(594174),
    y = n(5192),
    T = n(312839),
    N = n(981631),
    b = n(701488),
    O = n(987650),
    A = n(388032),
    L = n(522634);
function P(e) {
    let { game: t } = e,
        n = (0, h.q)(t.id);
    if (null == n) return null;
    let r = n.getIconURL(b.Si.LARGE);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: L.header,
            children: [
                (0, i.jsx)(f.f, {
                    src: r,
                    size: 32
                }),
                (0, i.jsx)(l.Text, {
                    className: L.gameInfo,
                    variant: 'text-md/semibold',
                    color: 'header-primary',
                    children: n.name
                })
            ]
        })
    });
}
function R(e) {
    let { entry: t, idx: n } = e,
        s = (0, o.e7)([C.default], () => C.default.getUser(t.author_id)),
        h = (0, _.kr)(t),
        f = h ? l.tokens.colors.TEXT_POSITIVE : l.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
        [E, T] = r.useState('unsent'),
        [b, O] = r.useState(!1),
        P = (0, o.e7)([Z.Z], () => (null != s ? Z.Z.getAnyStreamForUser(s.id) : null), [s]),
        { isMobileOnline: R, status: j } = (0, o.cj)(
            [I.Z],
            () =>
                null == s
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: I.Z.isMobileOnline(s.id),
                          status: I.Z.getStatus(s.id)
                      },
            [s]
        );
    r.useEffect(() => {
        if ('sent' === E) {
            let e = setTimeout(() => O(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [E]);
    let w = async (e) => {
            if (null != s && 'unsent' === E) {
                e.stopPropagation();
                try {
                    var i;
                    T('sending');
                    let e = await c.Z.getOrEnsurePrivateChannel(s.id),
                        r = null !== (i = S.Z.getChannel(e)) && void 0 !== i ? i : null;
                    a()(null != r, 'Send channel must be defined'),
                        (0, x.uL)(N.Z5c.CHANNEL(r.guild_id, r.id)),
                        await (0, v.p)({
                            channel: r,
                            content: A.intl.string(A.t.DwAcMz),
                            entry: t,
                            whenReady: !0
                        }),
                        d.Z.track(N.rMx.OVERLAY_GAME_INVITE_SENT, {
                            target_user_id: s.id,
                            target_content_entry_id: t.id,
                            target_index: n
                        }),
                        T('sent');
                } catch (e) {
                    T('unsent');
                }
            }
        },
        D = async () => {
            var e;
            if (null == s) return;
            let t = await c.Z.getOrEnsurePrivateChannel(s.id),
                n = null !== (e = S.Z.getChannel(t)) && void 0 !== e ? e : null;
            a()(null != n, 'Send channel must be defined'), (0, x.uL)(N.Z5c.CHANNEL(n.guild_id, n.id));
        };
    return null == s
        ? null
        : (0, i.jsxs)('div', {
              className: L.userRow,
              children: [
                  (0, i.jsx)(u.Z, {
                      className: L.avatarContainer,
                      user: s,
                      isMobile: R,
                      status: j
                  }),
                  (0, i.jsxs)('div', {
                      className: L.userInfo,
                      children: [
                          (0, i.jsxs)('div', {
                              className: L.usernameWrapper,
                              children: [
                                  (0, i.jsx)(l.Text, {
                                      className: L.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: y.ZP.getName(void 0, void 0, s)
                                  }),
                                  null != P && (0, i.jsx)(p.ZP, {})
                              ]
                          }),
                          (0, i.jsxs)(g.m7, {
                              children: [
                                  (0, i.jsx)(l.GameControllerIcon, {
                                      size: 'xxs',
                                      color: f
                                  }),
                                  (0, i.jsx)(m.ZP, {
                                      entry: t,
                                      textColor: h ? 'text-positive' : 'content-inventory-overlay-text-secondary',
                                      bold: !0
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      className: L.inviteButtonWrapper,
                      children: (0, i.jsx)(l.Button, {
                          submitting: 'sending' === E,
                          onClick: b ? D : w,
                          className: L.inviteButton,
                          color: l.ButtonColors.PRIMARY,
                          look: 'sent' === E ? l.ButtonLooks.OUTLINED : l.ButtonLooks.FILLED,
                          size: l.ButtonSizes.MAX,
                          children:
                              'sent' === E
                                  ? b
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
function j(e) {
    let { entries: t } = e,
        n = t.slice(0, 5);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(E.iz, {}),
            (0, i.jsxs)(l.Text, {
                className: L.helpText,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: [(0, i.jsx)(l.ChatPlusIcon, { size: 'xxs' }), A.intl.string(A.t.y9eo7e)]
            }),
            n.map((e, t) =>
                (0, i.jsx)(
                    R,
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
function w(e, t) {
    let { trackView: n, trackClick: r } = (0, T.R)(O.n0.SendGameInvitesNotification, { notif_type: O.n0.SendGameInvitesNotification });
    return (
        a()(t.length > 0, 'Some entries must be present'),
        {
            icon: null,
            title: (0, i.jsx)(P, { game: e }),
            body: (0, i.jsx)(j, { entries: t }),
            onNotificationShow: () => {
                n(),
                    d.Z.track(N.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: t.map((e) => e.author_id),
                        entry_ids: t.map((e) => e.id)
                    });
            },
            onNotificationClick: (e, t) => {
                r('unlock'), d.Z.setInstanceLocked(!1);
            },
            onDismissClick: () => {
                r('dismiss');
            }
        }
    );
}
