n.d(t, {
    Z: function () {
        return P;
    },
    i: function () {
        return D;
    }
}),
    n(47120),
    n(789020);
var i = n(200651),
    l = n(192379),
    o = n(512722),
    r = n.n(o),
    s = n(442837),
    a = n(481060),
    u = n(278323),
    d = n(988298),
    c = n(493683),
    h = n(13245),
    f = n(99690),
    p = n(620662),
    m = n(835473),
    g = n(194082),
    v = n(297781),
    E = n(656709),
    Z = n(567409),
    C = n(703656),
    x = n(409057),
    S = n(199902),
    I = n(592125),
    _ = n(293273),
    O = n(158776),
    N = n(594174),
    y = n(630388),
    T = n(5192),
    j = n(358085),
    b = n(998502),
    L = n(388627),
    R = n(981631),
    w = n(388032),
    k = n(250145);
function A(e) {
    let { entry: t, currentUserActivity: n, idx: o } = e,
        d = (0, s.e7)([N.default], () => N.default.getUser(t.author_id)),
        [f, m] = l.useState('unsent'),
        [g, v] = l.useState(!1);
    l.useEffect(() => {
        if ('sent' === f) {
            let e = setTimeout(() => v(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [f]);
    let Z = null != n && (0, p.Z)(n, R.xjy.JOIN),
        x = async (e) => {
            if (null != d && 'unsent' === f) {
                e.stopPropagation();
                try {
                    if ((m('sending'), Z))
                        await u.Z.sendActivityInviteUser({
                            type: R.mFx.JOIN,
                            userId: d.id,
                            activity: n,
                            location: R.Sbl.UNLOCKED_OVERLAY
                        });
                    else {
                        var i;
                        let e = await c.Z.getOrEnsurePrivateChannel(d.id),
                            n = null !== (i = I.Z.getChannel(e)) && void 0 !== i ? i : null;
                        r()(null != n, 'Send channel must be defined'),
                            (0, C.uL)(R.Z5c.CHANNEL(n.guild_id, n.id)),
                            await (0, E.p)({
                                channel: n,
                                content: w.intl.string(w.t.DwAcMz),
                                entry: t,
                                whenReady: !0
                            });
                    }
                    h.Z.track(R.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: d.id,
                        target_content_entry_id: t.id,
                        target_index: o
                    }),
                        m('sent');
                } catch (e) {
                    m('unsent');
                }
            }
        },
        S = async () => {
            var e;
            if (null == d) return;
            let t = await c.Z.getOrEnsurePrivateChannel(d.id),
                n = null !== (e = I.Z.getChannel(t)) && void 0 !== e ? e : null;
            r()(null != n, 'Send channel must be defined'), (0, C.uL)(R.Z5c.CHANNEL(n.guild_id, n.id)), j.isPlatformEmbedded && b.ZP.focus();
        },
        _ = Z ? w.intl.string(w.t['3fRyS0']) : w.intl.string(w.t.y9eo7e),
        O = Z
            ? (0, i.jsx)(a.GroupPlusIcon, {
                  color: 'currentColor',
                  size: 'sm'
              })
            : (0, i.jsx)(a.SendMessageIcon, {
                  color: 'currentColor',
                  size: 'sm'
              });
    return (0, i.jsx)(a.Tooltip, {
        text: _,
        'aria-label': _,
        children: (e) =>
            (0, i.jsx)(a.Button, {
                ...e,
                submitting: 'sending' === f,
                onClick: g ? S : x,
                className: k.inviteButton,
                wrapperClassName: k.inviteButtonWrapper,
                innerClassName: k.inviteButtonInner,
                color: a.ButtonColors.TRANSPARENT,
                look: a.ButtonLooks.FILLED,
                size: a.ButtonSizes.ICON,
                grow: !1,
                children:
                    'sent' === f
                        ? g
                            ? (0, i.jsx)(a.ChatIcon, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                            : (0, i.jsx)(a.CheckmarkSmallBoldIcon, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                        : O
            })
    });
}
function M(e) {
    var t;
    let { entry: n, currentUserActivity: o } = e,
        r = (0, s.e7)([N.default], () => N.default.getUser(n.author_id)),
        d = null !== (t = null == o ? void 0 : o.application_id) && void 0 !== t ? t : n.extra.application_id,
        c = (0, s.e7)([O.Z], () => (null != r ? O.Z.getApplicationActivity(r.id, d) : null), [d, r]),
        [h, f] = l.useState('unsent');
    if (!(null != c && (0, p.Z)(c, R.xjy.JOIN))) return null;
    let m = async (e) => {
            if (null != r && 'unsent' === h) {
                e.stopPropagation();
                try {
                    f('sending'),
                        await u.Z.sendActivityInviteUser({
                            type: R.mFx.JOIN_REQUEST,
                            userId: r.id,
                            activity: c,
                            location: R.Sbl.UNLOCKED_OVERLAY
                        }),
                        f('sent');
                } catch (e) {
                    f('unsent');
                }
            }
        },
        g = w.intl.string(w.t.OKsSCQ);
    return (0, i.jsx)(a.Tooltip, {
        text: g,
        'aria-label': g,
        children: (e) =>
            (0, i.jsx)(a.Button, {
                ...e,
                submitting: 'sending' === h,
                onClick: m,
                className: k.inviteButton,
                wrapperClassName: k.inviteButtonWrapper,
                innerClassName: k.inviteButtonInner,
                color: a.ButtonColors.TRANSPARENT,
                look: a.ButtonLooks.FILLED,
                size: a.ButtonSizes.ICON,
                grow: !1,
                children:
                    'sent' === h
                        ? (0, i.jsx)(a.CheckmarkSmallBoldIcon, {
                              color: 'currentColor',
                              size: 'sm'
                          })
                        : (0, i.jsx)(a.HandRequestSpeakIcon, {
                              color: 'currentColor',
                              size: 'sm'
                          })
            })
    });
}
function z(e) {
    let { entry: t, currentUserActivity: n, idx: l } = e,
        o = (0, s.e7)([N.default], () => N.default.getUser(t.author_id)),
        r = (0, s.e7)([S.Z], () => (null != o ? S.Z.getAnyStreamForUser(o.id) : null), [o]),
        { isMobileOnline: u, status: d } = (0, s.cj)(
            [O.Z],
            () =>
                null == o
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: O.Z.isMobileOnline(o.id),
                          status: O.Z.getStatus(o.id)
                      },
            [o]
        );
    return null == o
        ? null
        : (0, i.jsxs)('div', {
              className: k.row,
              children: [
                  (0, i.jsx)(f.Z, {
                      className: k.avatar,
                      user: o,
                      isMobile: u,
                      status: d
                  }),
                  (0, i.jsxs)('div', {
                      className: k.details,
                      children: [
                          (0, i.jsxs)('div', {
                              className: k.usernameWrapper,
                              children: [
                                  (0, i.jsx)(a.Text, {
                                      className: k.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: T.ZP.getName(void 0, void 0, o)
                                  }),
                                  null != r && (0, i.jsx)(g.ZP, { className: k.liveIndicator })
                              ]
                          }),
                          (0, i.jsx)(v.Gk, {
                              location: v.Gt.OVERLAY,
                              className: k.badgesContainer,
                              children: [v.OV, v.wO, v.f, v.v1, v.pQ].map((e, n) => (0, i.jsx)(e, { entry: t }, 'entry-'.concat(n)))
                          })
                      ]
                  }),
                  (0, i.jsx)(M, {
                      entry: t,
                      currentUserActivity: n,
                      idx: l
                  }),
                  (0, i.jsx)(A, {
                      entry: t,
                      currentUserActivity: n,
                      idx: l
                  })
              ]
          });
}
function D(e) {
    let { entries: t, currentUserActivity: n } = e,
        l = t.slice(0, 5);
    return (0, i.jsx)(i.Fragment, {
        children: l.map((e, t) =>
            (0, i.jsx)(
                z,
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
function P() {
    let e = (0, L.II)(),
        t = null == e ? void 0 : e.id,
        n = null == e ? void 0 : e.altId,
        l = (0, Z.Ns)(t),
        o = (0, s.e7)([N.default], () => N.default.getCurrentUser()),
        r = (0, s.e7)([_.Z], () => (null != n ? _.Z.getApplicationActivity(n) : null != t ? _.Z.getApplicationActivity(t) : null)),
        u = null != r && (0, p.Z)(r, R.xjy.JOIN),
        c = (0, m.q)(null == r ? void 0 : r.application_id),
        h = null != c && (0, y.yE)(c.flags, R.udG.EMBEDDED);
    return 0 === l.length && null == r
        ? null
        : (0, i.jsxs)('div', {
              className: k.container,
              children: [
                  null != r && null != o
                      ? (0, i.jsx)(x.Z, {
                            className: k.activityCard,
                            activity: r,
                            user: o,
                            currentUser: o
                        })
                      : null,
                  u && !h
                      ? (0, i.jsx)(a.Button, {
                            className: k.inviteFriendsButton,
                            onClick: () => (0, d.h7)(r, !1, R.IlC.POPOUT),
                            size: a.ButtonSizes.SMALL,
                            color: a.ButtonColors.PRIMARY,
                            children: w.intl.string(w.t['6Qgren'])
                        })
                      : null,
                  (0, i.jsx)(D, {
                      entries: l,
                      currentUserActivity: r
                  })
              ]
          });
}
