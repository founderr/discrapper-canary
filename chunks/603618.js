n.d(t, {
    Z: function () {
        return j;
    },
    i: function () {
        return P;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(512722),
    o = n.n(r),
    a = n(442837),
    s = n(481060),
    u = n(278323),
    c = n(988298),
    d = n(493683),
    h = n(13245),
    f = n(99690),
    p = n(620662),
    m = n(194082),
    v = n(297781),
    g = n(656709),
    E = n(567409),
    _ = n(703656),
    C = n(409057),
    S = n(199902),
    Z = n(592125),
    I = n(293273),
    x = n(158776),
    N = n(594174),
    O = n(5192),
    T = n(358085),
    y = n(998502),
    b = n(388627),
    A = n(981631),
    L = n(388032),
    R = n(918532);
function k(e) {
    let { entry: t, currentUserActivity: n, idx: r } = e,
        c = (0, a.e7)([N.default], () => N.default.getUser(t.author_id)),
        [f, m] = l.useState('unsent'),
        [v, E] = l.useState(!1);
    l.useEffect(() => {
        if ('sent' === f) {
            let e = setTimeout(() => E(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [f]);
    let C = null != n && (0, p.Z)(n, A.xjy.JOIN),
        S = async (e) => {
            if (null != c && 'unsent' === f) {
                e.stopPropagation();
                try {
                    if ((m('sending'), C))
                        await u.Z.sendActivityInviteUser({
                            type: A.mFx.JOIN,
                            userId: c.id,
                            activity: n,
                            location: A.Sbl.UNLOCKED_OVERLAY
                        });
                    else {
                        var i;
                        let e = await d.Z.getOrEnsurePrivateChannel(c.id),
                            n = null !== (i = Z.Z.getChannel(e)) && void 0 !== i ? i : null;
                        o()(null != n, 'Send channel must be defined'),
                            (0, _.uL)(A.Z5c.CHANNEL(n.guild_id, n.id)),
                            await (0, g.p)({
                                channel: n,
                                content: L.intl.string(L.t.DwAcMz),
                                entry: t,
                                whenReady: !0
                            });
                    }
                    h.Z.track(A.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: c.id,
                        target_content_entry_id: t.id,
                        target_index: r
                    }),
                        m('sent');
                } catch (e) {
                    m('unsent');
                }
            }
        },
        I = async () => {
            var e;
            if (null == c) return;
            let t = await d.Z.getOrEnsurePrivateChannel(c.id),
                n = null !== (e = Z.Z.getChannel(t)) && void 0 !== e ? e : null;
            o()(null != n, 'Send channel must be defined'), (0, _.uL)(A.Z5c.CHANNEL(n.guild_id, n.id)), T.isPlatformEmbedded && y.ZP.focus();
        },
        x = C ? L.intl.string(L.t['3fRyS0']) : L.intl.string(L.t.y9eo7e),
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
        text: x,
        'aria-label': x,
        children: (e) =>
            (0, i.jsx)(s.Button, {
                ...e,
                submitting: 'sending' === f,
                onClick: v ? I : S,
                className: R.inviteButton,
                wrapperClassName: R.inviteButtonWrapper,
                innerClassName: R.inviteButtonInner,
                color: s.ButtonColors.TRANSPARENT,
                look: s.ButtonLooks.FILLED,
                size: s.ButtonSizes.ICON,
                grow: !1,
                children:
                    'sent' === f
                        ? v
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
    let { entry: n, currentUserActivity: r } = e,
        o = (0, a.e7)([N.default], () => N.default.getUser(n.author_id)),
        c = null !== (t = null == r ? void 0 : r.application_id) && void 0 !== t ? t : n.extra.application_id,
        d = (0, a.e7)([x.Z], () => (null != o ? x.Z.getApplicationActivity(o.id, c) : null), [c, o]),
        [h, f] = l.useState('unsent');
    if (!(null != d && (0, p.Z)(d, A.xjy.JOIN))) return null;
    let m = async (e) => {
            if (null != o && 'unsent' === h) {
                e.stopPropagation();
                try {
                    f('sending'),
                        await u.Z.sendActivityInviteUser({
                            type: A.mFx.JOIN_REQUEST,
                            userId: o.id,
                            activity: d,
                            location: A.Sbl.UNLOCKED_OVERLAY
                        }),
                        f('sent');
                } catch (e) {
                    f('unsent');
                }
            }
        },
        v = L.intl.string(L.t.OKsSCQ);
    return (0, i.jsx)(s.Tooltip, {
        text: v,
        'aria-label': v,
        children: (e) =>
            (0, i.jsx)(s.Button, {
                ...e,
                submitting: 'sending' === h,
                onClick: m,
                className: R.inviteButton,
                wrapperClassName: R.inviteButtonWrapper,
                innerClassName: R.inviteButtonInner,
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
function w(e) {
    let { entry: t, currentUserActivity: n, idx: l } = e,
        r = (0, a.e7)([N.default], () => N.default.getUser(t.author_id)),
        o = (0, a.e7)([S.Z], () => (null != r ? S.Z.getAnyStreamForUser(r.id) : null), [r]),
        { isMobileOnline: u, status: c } = (0, a.cj)(
            [x.Z],
            () =>
                null == r
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: x.Z.isMobileOnline(r.id),
                          status: x.Z.getStatus(r.id)
                      },
            [r]
        );
    return null == r
        ? null
        : (0, i.jsxs)('div', {
              className: R.row,
              children: [
                  (0, i.jsx)(f.Z, {
                      className: R.avatar,
                      user: r,
                      isMobile: u,
                      status: c
                  }),
                  (0, i.jsxs)('div', {
                      className: R.details,
                      children: [
                          (0, i.jsxs)('div', {
                              className: R.usernameWrapper,
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      className: R.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: O.ZP.getName(void 0, void 0, r)
                                  }),
                                  null != o && (0, i.jsx)(m.ZP, { className: R.liveIndicator })
                              ]
                          }),
                          (0, i.jsx)(v.Gk, {
                              location: v.Gt.OVERLAY,
                              className: R.badgesContainer,
                              children: [v.OV, v.wO, v.f, v.v1, v.pQ].map((e, n) => (0, i.jsx)(e, { entry: t }, 'entry-'.concat(n)))
                          })
                      ]
                  }),
                  (0, i.jsx)(M, {
                      entry: t,
                      currentUserActivity: n,
                      idx: l
                  }),
                  (0, i.jsx)(k, {
                      entry: t,
                      currentUserActivity: n,
                      idx: l
                  })
              ]
          });
}
function P(e) {
    let { entries: t, currentUserActivity: n } = e,
        l = t.slice(0, 5);
    return (0, i.jsx)(i.Fragment, {
        children: l.map((e, t) =>
            (0, i.jsx)(
                w,
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
    let e = (0, b.II)(),
        t = null == e ? void 0 : e.id,
        n = null == e ? void 0 : e.altId,
        l = (0, E.Ns)(t),
        r = (0, a.e7)([N.default], () => N.default.getCurrentUser()),
        o = (0, a.e7)([I.Z], () => (null != n ? I.Z.getApplicationActivity(n) : null != t ? I.Z.getApplicationActivity(t) : null)),
        u = null != o && (0, p.Z)(o, A.xjy.JOIN);
    return 0 === l.length && null == o
        ? null
        : (0, i.jsxs)('div', {
              className: R.container,
              children: [
                  null != o && null != r
                      ? (0, i.jsx)(C.Z, {
                            className: R.activityCard,
                            activity: o,
                            user: r,
                            currentUser: r
                        })
                      : null,
                  u
                      ? (0, i.jsx)(s.Button, {
                            className: R.inviteFriendsButton,
                            onClick: () => (0, c.h7)(o, !1, A.IlC.POPOUT),
                            size: s.ButtonSizes.SMALL,
                            color: s.ButtonColors.PRIMARY,
                            children: L.intl.string(L.t['6Qgren'])
                        })
                      : null,
                  (0, i.jsx)(P, {
                      entries: l,
                      currentUserActivity: o
                  })
              ]
          });
}
