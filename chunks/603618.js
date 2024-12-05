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
    c = n(988298),
    d = n(493683),
    h = n(13245),
    f = n(99690),
    p = n(620662),
    m = n(835473),
    v = n(194082),
    g = n(297781),
    E = n(656709),
    C = n(567409),
    x = n(703656),
    Z = n(409057),
    _ = n(199902),
    S = n(592125),
    I = n(293273),
    N = n(158776),
    b = n(594174),
    O = n(630388),
    y = n(5192),
    j = n(358085),
    T = n(998502),
    k = n(388627),
    w = n(981631),
    L = n(388032),
    A = n(13663);
function R(e) {
    let { entry: t, currentUserActivity: n, idx: o } = e,
        c = (0, s.e7)([b.default], () => b.default.getUser(t.author_id)),
        [f, m] = l.useState('unsent'),
        [v, g] = l.useState(!1);
    l.useEffect(() => {
        if ('sent' === f) {
            let e = setTimeout(() => g(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [f]);
    let C = null != n && (0, p.Z)(n, w.xjy.JOIN),
        Z = async (e) => {
            if (null != c && 'unsent' === f) {
                e.stopPropagation();
                try {
                    if ((m('sending'), C))
                        await u.Z.sendActivityInviteUser({
                            type: w.mFx.JOIN,
                            userId: c.id,
                            activity: n,
                            location: w.Sbl.UNLOCKED_OVERLAY
                        });
                    else {
                        var i;
                        let e = await d.Z.getOrEnsurePrivateChannel(c.id),
                            n = null !== (i = S.Z.getChannel(e)) && void 0 !== i ? i : null;
                        r()(null != n, 'Send channel must be defined'),
                            (0, x.uL)(w.Z5c.CHANNEL(n.guild_id, n.id)),
                            await (0, E.p)({
                                channel: n,
                                content: L.intl.string(L.t.DwAcMz),
                                entry: t,
                                whenReady: !0
                            });
                    }
                    h.Z.track(w.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: c.id,
                        target_content_entry_id: t.id,
                        target_index: o
                    }),
                        m('sent');
                } catch (e) {
                    m('unsent');
                }
            }
        },
        _ = async () => {
            var e;
            if (null == c) return;
            let t = await d.Z.getOrEnsurePrivateChannel(c.id),
                n = null !== (e = S.Z.getChannel(t)) && void 0 !== e ? e : null;
            r()(null != n, 'Send channel must be defined'), (0, x.uL)(w.Z5c.CHANNEL(n.guild_id, n.id)), j.isPlatformEmbedded && T.ZP.focus();
        },
        I = C ? L.intl.string(L.t['3fRyS0']) : L.intl.string(L.t.y9eo7e),
        N = C
            ? (0, i.jsx)(a.GroupPlusIcon, {
                  color: 'currentColor',
                  size: 'sm'
              })
            : (0, i.jsx)(a.SendMessageIcon, {
                  color: 'currentColor',
                  size: 'sm'
              });
    return (0, i.jsx)(a.Tooltip, {
        text: I,
        'aria-label': I,
        children: (e) =>
            (0, i.jsx)(a.Button, {
                ...e,
                submitting: 'sending' === f,
                onClick: v ? _ : Z,
                className: A.inviteButton,
                wrapperClassName: A.inviteButtonWrapper,
                innerClassName: A.inviteButtonInner,
                color: a.ButtonColors.TRANSPARENT,
                look: a.ButtonLooks.FILLED,
                size: a.ButtonSizes.ICON,
                grow: !1,
                children:
                    'sent' === f
                        ? v
                            ? (0, i.jsx)(a.ChatIcon, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                            : (0, i.jsx)(a.CheckmarkSmallBoldIcon, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                        : N
            })
    });
}
function M(e) {
    var t;
    let { entry: n, currentUserActivity: o } = e,
        r = (0, s.e7)([b.default], () => b.default.getUser(n.author_id)),
        c = null !== (t = null == o ? void 0 : o.application_id) && void 0 !== t ? t : n.extra.application_id,
        d = (0, s.e7)([N.Z], () => (null != r ? N.Z.getApplicationActivity(r.id, c) : null), [c, r]),
        [h, f] = l.useState('unsent');
    if (!(null != d && (0, p.Z)(d, w.xjy.JOIN))) return null;
    let m = async (e) => {
            if (null != r && 'unsent' === h) {
                e.stopPropagation();
                try {
                    f('sending'),
                        await u.Z.sendActivityInviteUser({
                            type: w.mFx.JOIN_REQUEST,
                            userId: r.id,
                            activity: d,
                            location: w.Sbl.UNLOCKED_OVERLAY
                        }),
                        f('sent');
                } catch (e) {
                    f('unsent');
                }
            }
        },
        v = L.intl.string(L.t.OKsSCQ);
    return (0, i.jsx)(a.Tooltip, {
        text: v,
        'aria-label': v,
        children: (e) =>
            (0, i.jsx)(a.Button, {
                ...e,
                submitting: 'sending' === h,
                onClick: m,
                className: A.inviteButton,
                wrapperClassName: A.inviteButtonWrapper,
                innerClassName: A.inviteButtonInner,
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
        o = (0, s.e7)([b.default], () => b.default.getUser(t.author_id)),
        r = (0, s.e7)([_.Z], () => (null != o ? _.Z.getAnyStreamForUser(o.id) : null), [o]),
        { isMobileOnline: u, status: c } = (0, s.cj)(
            [N.Z],
            () =>
                null == o
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: N.Z.isMobileOnline(o.id),
                          status: N.Z.getStatus(o.id)
                      },
            [o]
        );
    return null == o
        ? null
        : (0, i.jsxs)('div', {
              className: A.row,
              children: [
                  (0, i.jsx)(f.Z, {
                      className: A.avatar,
                      user: o,
                      isMobile: u,
                      status: c
                  }),
                  (0, i.jsxs)('div', {
                      className: A.details,
                      children: [
                          (0, i.jsxs)('div', {
                              className: A.usernameWrapper,
                              children: [
                                  (0, i.jsx)(a.Text, {
                                      className: A.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: y.ZP.getName(void 0, void 0, o)
                                  }),
                                  null != r && (0, i.jsx)(v.ZP, { className: A.liveIndicator })
                              ]
                          }),
                          (0, i.jsx)(g.Gk, {
                              location: g.Gt.OVERLAY,
                              className: A.badgesContainer,
                              children: [g.OV, g.wO, g.f, g.v1, g.pQ].map((e, n) => (0, i.jsx)(e, { entry: t }, 'entry-'.concat(n)))
                          })
                      ]
                  }),
                  (0, i.jsx)(M, {
                      entry: t,
                      currentUserActivity: n,
                      idx: l
                  }),
                  (0, i.jsx)(R, {
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
    let e = (0, k.II)(),
        t = null == e ? void 0 : e.id,
        n = null == e ? void 0 : e.altId,
        l = (0, C.Ns)(t),
        o = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        r = (0, s.e7)([I.Z], () => (null != n ? I.Z.getApplicationActivity(n) : null != t ? I.Z.getApplicationActivity(t) : null)),
        u = null != r && (0, p.Z)(r, w.xjy.JOIN),
        d = (0, m.q)(null == r ? void 0 : r.application_id),
        h = null != d && (0, O.yE)(d.flags, w.udG.EMBEDDED);
    return 0 === l.length && null == r
        ? null
        : (0, i.jsxs)('div', {
              className: A.container,
              children: [
                  null != r && null != o
                      ? (0, i.jsx)(Z.Z, {
                            className: A.activityCard,
                            activity: r,
                            user: o,
                            currentUser: o
                        })
                      : null,
                  u && !h
                      ? (0, i.jsx)(a.Button, {
                            className: A.inviteFriendsButton,
                            onClick: () => (0, c.h7)(r, !1, w.IlC.POPOUT),
                            size: a.ButtonSizes.SMALL,
                            color: a.ButtonColors.PRIMARY,
                            children: L.intl.string(L.t['6Qgren'])
                        })
                      : null,
                  (0, i.jsx)(D, {
                      entries: l,
                      currentUserActivity: r
                  })
              ]
          });
}
