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
    o = n(192379),
    l = n(512722),
    r = n.n(l),
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
    x = n(567409),
    C = n(703656),
    Z = n(409057),
    _ = n(199902),
    I = n(592125),
    S = n(293273),
    b = n(158776),
    N = n(594174),
    O = n(630388),
    y = n(5192),
    j = n(358085),
    T = n(998502),
    k = n(388627),
    L = n(981631),
    w = n(388032),
    A = n(13663);
function R(e) {
    let { entry: t, currentUserActivity: n, idx: l } = e,
        c = (0, s.e7)([N.default], () => N.default.getUser(t.author_id)),
        [f, m] = o.useState('unsent'),
        [v, g] = o.useState(!1);
    o.useEffect(() => {
        if ('sent' === f) {
            let e = setTimeout(() => g(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [f]);
    let x = null != n && (0, p.Z)(n, L.xjy.JOIN),
        Z = async (e) => {
            if (null != c && 'unsent' === f) {
                e.stopPropagation();
                try {
                    if ((m('sending'), x))
                        await u.Z.sendActivityInviteUser({
                            type: L.mFx.JOIN,
                            userId: c.id,
                            activity: n,
                            location: L.Sbl.UNLOCKED_OVERLAY
                        });
                    else {
                        var i;
                        let e = await d.Z.getOrEnsurePrivateChannel(c.id),
                            n = null !== (i = I.Z.getChannel(e)) && void 0 !== i ? i : null;
                        r()(null != n, 'Send channel must be defined'),
                            (0, C.uL)(L.Z5c.CHANNEL(n.guild_id, n.id)),
                            await (0, E.p)({
                                channel: n,
                                content: w.intl.string(w.t.DwAcMz),
                                entry: t,
                                whenReady: !0
                            });
                    }
                    h.Z.track(L.rMx.OVERLAY_GAME_INVITE_SENT, {
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
        _ = async () => {
            var e;
            if (null == c) return;
            let t = await d.Z.getOrEnsurePrivateChannel(c.id),
                n = null !== (e = I.Z.getChannel(t)) && void 0 !== e ? e : null;
            r()(null != n, 'Send channel must be defined'), (0, C.uL)(L.Z5c.CHANNEL(n.guild_id, n.id)), j.isPlatformEmbedded && T.ZP.focus();
        },
        S = x ? w.intl.string(w.t['3fRyS0']) : w.intl.string(w.t.y9eo7e),
        b = x
            ? (0, i.jsx)(a.GroupPlusIcon, {
                  color: 'currentColor',
                  size: 'sm'
              })
            : (0, i.jsx)(a.SendMessageIcon, {
                  color: 'currentColor',
                  size: 'sm'
              });
    return (0, i.jsx)(a.Tooltip, {
        text: S,
        'aria-label': S,
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
                        : b
            })
    });
}
function M(e) {
    var t;
    let { entry: n, currentUserActivity: l } = e,
        r = (0, s.e7)([N.default], () => N.default.getUser(n.author_id)),
        c = null !== (t = null == l ? void 0 : l.application_id) && void 0 !== t ? t : n.extra.application_id,
        d = (0, s.e7)([b.Z], () => (null != r ? b.Z.getApplicationActivity(r.id, c) : null), [c, r]),
        [h, f] = o.useState('unsent');
    if (!(null != d && (0, p.Z)(d, L.xjy.JOIN))) return null;
    let m = async (e) => {
            if (null != r && 'unsent' === h) {
                e.stopPropagation();
                try {
                    f('sending'),
                        await u.Z.sendActivityInviteUser({
                            type: L.mFx.JOIN_REQUEST,
                            userId: r.id,
                            activity: d,
                            location: L.Sbl.UNLOCKED_OVERLAY
                        }),
                        f('sent');
                } catch (e) {
                    f('unsent');
                }
            }
        },
        v = w.intl.string(w.t.OKsSCQ);
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
    let { entry: t, currentUserActivity: n, idx: o } = e,
        l = (0, s.e7)([N.default], () => N.default.getUser(t.author_id)),
        r = (0, s.e7)([_.Z], () => (null != l ? _.Z.getAnyStreamForUser(l.id) : null), [l]),
        { isMobileOnline: u, status: c } = (0, s.cj)(
            [b.Z],
            () =>
                null == l
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: b.Z.isMobileOnline(l.id),
                          status: b.Z.getStatus(l.id)
                      },
            [l]
        );
    return null == l
        ? null
        : (0, i.jsxs)('div', {
              className: A.row,
              children: [
                  (0, i.jsx)(f.Z, {
                      className: A.avatar,
                      user: l,
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
                                      children: y.ZP.getName(void 0, void 0, l)
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
                      idx: o
                  }),
                  (0, i.jsx)(R, {
                      entry: t,
                      currentUserActivity: n,
                      idx: o
                  })
              ]
          });
}
function D(e) {
    let { entries: t, currentUserActivity: n } = e,
        o = t.slice(0, 5);
    return (0, i.jsx)(i.Fragment, {
        children: o.map((e, t) =>
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
        o = (0, x.Ns)(t),
        l = (0, s.e7)([N.default], () => N.default.getCurrentUser()),
        r = (0, s.e7)([S.Z], () => (null != n ? S.Z.getApplicationActivity(n) : null != t ? S.Z.getApplicationActivity(t) : null)),
        u = null != r && (0, p.Z)(r, L.xjy.JOIN),
        d = (0, m.q)(null == r ? void 0 : r.application_id),
        h = null != d && (0, O.yE)(d.flags, L.udG.EMBEDDED);
    return 0 === o.length && null == r
        ? null
        : (0, i.jsxs)('div', {
              className: A.container,
              children: [
                  null != r && null != l
                      ? (0, i.jsx)(Z.Z, {
                            className: A.activityCard,
                            activity: r,
                            user: l,
                            currentUser: l
                        })
                      : null,
                  u && !h
                      ? (0, i.jsx)(a.Button, {
                            className: A.inviteFriendsButton,
                            onClick: () => (0, c.h7)(r, !1, L.IlC.POPOUT),
                            size: a.ButtonSizes.SMALL,
                            color: a.ButtonColors.PRIMARY,
                            children: w.intl.string(w.t['6Qgren'])
                        })
                      : null,
                  (0, i.jsx)(D, {
                      entries: o,
                      currentUserActivity: r
                  })
              ]
          });
}
