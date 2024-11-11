n.d(t, {
    Z: function () {
        return j;
    },
    i: function () {
        return w;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(512722),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    u = n(278323),
    c = n(988298),
    d = n(493683),
    h = n(13245),
    f = n(99690),
    p = n(620662),
    m = n(194082),
    E = n(297781),
    v = n(656709),
    g = n(567409),
    _ = n(703656),
    C = n(409057),
    S = n(199902),
    I = n(592125),
    Z = n(293273),
    N = n(158776),
    x = n(594174),
    O = n(5192),
    T = n(358085),
    A = n(998502),
    y = n(388627),
    b = n(981631),
    R = n(388032),
    L = n(250145);
function k(e) {
    let { entry: t, currentUserActivity: n, idx: l } = e,
        c = (0, a.e7)([x.default], () => x.default.getUser(t.author_id)),
        [f, m] = r.useState('unsent'),
        [E, g] = r.useState(!1);
    r.useEffect(() => {
        if ('sent' === f) {
            let e = setTimeout(() => g(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [f]);
    let C = null != n && (0, p.Z)(n, b.xjy.JOIN),
        S = async (e) => {
            if (null != c && 'unsent' === f) {
                e.stopPropagation();
                try {
                    if ((m('sending'), C))
                        await u.Z.sendActivityInviteUser({
                            type: b.mFx.JOIN,
                            userId: c.id,
                            activity: n,
                            location: b.Sbl.UNLOCKED_OVERLAY
                        });
                    else {
                        var i;
                        let e = await d.Z.getOrEnsurePrivateChannel(c.id),
                            n = null !== (i = I.Z.getChannel(e)) && void 0 !== i ? i : null;
                        o()(null != n, 'Send channel must be defined'),
                            (0, _.uL)(b.Z5c.CHANNEL(n.guild_id, n.id)),
                            await (0, v.p)({
                                channel: n,
                                content: R.intl.string(R.t.DwAcMz),
                                entry: t,
                                whenReady: !0
                            });
                    }
                    h.Z.track(b.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: c.id,
                        target_content_entry_id: t.id,
                        target_index: l
                    }),
                        m('sent');
                } catch (e) {
                    m('unsent');
                }
            }
        },
        Z = async () => {
            var e;
            if (null == c) return;
            let t = await d.Z.getOrEnsurePrivateChannel(c.id),
                n = null !== (e = I.Z.getChannel(t)) && void 0 !== e ? e : null;
            o()(null != n, 'Send channel must be defined'), (0, _.uL)(b.Z5c.CHANNEL(n.guild_id, n.id)), T.isPlatformEmbedded && A.ZP.focus();
        },
        N = C ? R.intl.string(R.t['3fRyS0']) : R.intl.string(R.t.y9eo7e),
        O = C
            ? (0, i.jsx)(s.GroupPlusIcon, {
                  color: 'currentColor',
                  size: 'sm'
              })
            : (0, i.jsx)(s.SendMessageIcon, {
                  color: 'currentColor',
                  size: 'sm'
              });
    return (0, i.jsx)(s.Tooltip, {
        text: N,
        'aria-label': N,
        children: (e) =>
            (0, i.jsx)(s.Button, {
                ...e,
                submitting: 'sending' === f,
                onClick: E ? Z : S,
                className: L.inviteButton,
                wrapperClassName: L.inviteButtonWrapper,
                innerClassName: L.inviteButtonInner,
                color: s.ButtonColors.TRANSPARENT,
                look: s.ButtonLooks.FILLED,
                size: s.ButtonSizes.ICON,
                grow: !1,
                children:
                    'sent' === f
                        ? E
                            ? (0, i.jsx)(s.ChatIcon, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                            : (0, i.jsx)(s.CheckmarkSmallBoldIcon, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                        : O
            })
    });
}
function M(e) {
    var t;
    let { entry: n, currentUserActivity: l } = e,
        o = (0, a.e7)([x.default], () => x.default.getUser(n.author_id)),
        c = null !== (t = null == l ? void 0 : l.application_id) && void 0 !== t ? t : n.extra.application_id,
        d = (0, a.e7)([N.Z], () => (null != o ? N.Z.getApplicationActivity(o.id, c) : null), [c, o]),
        [h, f] = r.useState('unsent');
    if (!(null != d && (0, p.Z)(d, b.xjy.JOIN))) return null;
    let m = async (e) => {
            if (null != o && 'unsent' === h) {
                e.stopPropagation();
                try {
                    f('sending'),
                        await u.Z.sendActivityInviteUser({
                            type: b.mFx.JOIN_REQUEST,
                            userId: o.id,
                            activity: d,
                            location: b.Sbl.UNLOCKED_OVERLAY
                        }),
                        f('sent');
                } catch (e) {
                    f('unsent');
                }
            }
        },
        E = R.intl.string(R.t.OKsSCQ);
    return (0, i.jsx)(s.Tooltip, {
        text: E,
        'aria-label': E,
        children: (e) =>
            (0, i.jsx)(s.Button, {
                ...e,
                submitting: 'sending' === h,
                onClick: m,
                className: L.inviteButton,
                wrapperClassName: L.inviteButtonWrapper,
                innerClassName: L.inviteButtonInner,
                color: s.ButtonColors.TRANSPARENT,
                look: s.ButtonLooks.FILLED,
                size: s.ButtonSizes.ICON,
                grow: !1,
                children:
                    'sent' === h
                        ? (0, i.jsx)(s.CheckmarkSmallBoldIcon, {
                              color: 'currentColor',
                              size: 'sm'
                          })
                        : (0, i.jsx)(s.HandRequestSpeakIcon, {
                              color: 'currentColor',
                              size: 'sm'
                          })
            })
    });
}
function P(e) {
    let { entry: t, currentUserActivity: n, idx: r } = e,
        l = (0, a.e7)([x.default], () => x.default.getUser(t.author_id)),
        o = (0, a.e7)([S.Z], () => (null != l ? S.Z.getAnyStreamForUser(l.id) : null), [l]),
        { isMobileOnline: u, status: c } = (0, a.cj)(
            [N.Z],
            () =>
                null == l
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: N.Z.isMobileOnline(l.id),
                          status: N.Z.getStatus(l.id)
                      },
            [l]
        );
    return null == l
        ? null
        : (0, i.jsxs)('div', {
              className: L.row,
              children: [
                  (0, i.jsx)(f.Z, {
                      className: L.avatar,
                      user: l,
                      isMobile: u,
                      status: c
                  }),
                  (0, i.jsxs)('div', {
                      className: L.details,
                      children: [
                          (0, i.jsxs)('div', {
                              className: L.usernameWrapper,
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      className: L.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: O.ZP.getName(void 0, void 0, l)
                                  }),
                                  null != o && (0, i.jsx)(m.ZP, { className: L.liveIndicator })
                              ]
                          }),
                          (0, i.jsx)(E.Gk, {
                              location: E.Gt.OVERLAY,
                              className: L.badgesContainer,
                              children: [E.OV, E.wO, E.f, E.v1, E.pQ].map((e, n) => (0, i.jsx)(e, { entry: t }, 'entry-'.concat(n)))
                          })
                      ]
                  }),
                  (0, i.jsx)(M, {
                      entry: t,
                      currentUserActivity: n,
                      idx: r
                  }),
                  (0, i.jsx)(k, {
                      entry: t,
                      currentUserActivity: n,
                      idx: r
                  })
              ]
          });
}
function w(e) {
    let { entries: t, currentUserActivity: n } = e,
        r = t.slice(0, 5);
    return (0, i.jsx)(i.Fragment, {
        children: r.map((e, t) =>
            (0, i.jsx)(
                P,
                {
                    idx: t,
                    entry: e,
                    currentUserActivity: n
                },
                t
            )
        )
    });
}
function j() {
    let e = (0, y.II)(),
        t = null == e ? void 0 : e.id,
        n = null == e ? void 0 : e.altId,
        r = (0, g.Ns)(t),
        l = (0, a.e7)([x.default], () => x.default.getCurrentUser()),
        o = (0, a.e7)([Z.Z], () => (null != n ? Z.Z.getApplicationActivity(n) : null != t ? Z.Z.getApplicationActivity(t) : null)),
        u = null != o && (0, p.Z)(o, b.xjy.JOIN);
    return 0 === r.length && null == o
        ? null
        : (0, i.jsxs)('div', {
              className: L.container,
              children: [
                  null != o && null != l
                      ? (0, i.jsx)(C.Z, {
                            className: L.activityCard,
                            activity: o,
                            user: l,
                            currentUser: l
                        })
                      : null,
                  u
                      ? (0, i.jsx)(s.Button, {
                            className: L.inviteFriendsButton,
                            onClick: () => (0, c.h7)(o, !1, b.IlC.POPOUT),
                            size: s.ButtonSizes.SMALL,
                            color: s.ButtonColors.PRIMARY,
                            children: R.intl.string(R.t['6Qgren'])
                        })
                      : null,
                  (0, i.jsx)(w, {
                      entries: r,
                      currentUserActivity: o
                  })
              ]
          });
}
