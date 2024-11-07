n.d(t, {
    F: function () {
        return W;
    },
    G: function () {
        return l;
    }
}),
    n(47120);
var l,
    i,
    a = n(200651),
    r = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(913527),
    u = n.n(c),
    d = n(91192),
    h = n(442837),
    f = n(481060),
    _ = n(700582),
    g = n(560361),
    m = n(724757),
    p = n(212819),
    E = n(933557),
    I = n(266076),
    S = n(810123),
    A = n(448486),
    C = n(987509),
    v = n(592125),
    b = n(430824),
    L = n(158776),
    N = n(306680),
    x = n(699516),
    T = n(594174),
    P = n(626135),
    y = n(55935),
    Z = n(823379),
    w = n(51144),
    R = n(784384),
    O = n(981631),
    D = n(490897),
    j = n(388032),
    M = n(276496);
function k(e) {
    let { message: t, destination: n, rowMode: l, icon: i, label: s, subLabel: c, selected: u, disabled: h, onPressDestination: _, 'aria-setsize': m, 'aria-posinset': p } = e,
        E = (0, d.JA)(n.id),
        [I, S] = r.useState(!1),
        A = r.useRef(!1),
        C = r.useCallback(() => {
            if ('send' === l) {
                S(!0), (A.current = !0);
                return;
            }
            null == _ || _(n);
        }, [l, _, n]),
        v = r.useCallback(() => {
            P.default.track(O.rMx.FORWARD_ONE_TAP_VIEW, {
                channel_id: t.channel_id,
                message_id: t.id
            }),
                (A.current = !1),
                null == _ ||
                    _(n, {
                        transitionToDestination: !0,
                        closeAfterSend: !0
                    });
        }, [t.channel_id, t.id, _, n]),
        b = r.useCallback(() => {
            S(!1),
                (A.current = !1),
                P.default.track(O.rMx.FORWARD_ONE_TAP_UNDO, {
                    channel_id: t.channel_id,
                    message_id: t.id
                });
        }, [t]);
    return (
        (0, g.Z)(() => {
            A.current &&
                ((A.current = !1),
                null == _ ||
                    _(n, {
                        transitionToDestination: !1,
                        closeAfterSend: !1
                    }));
        }),
        (0, a.jsxs)(f.Clickable, {
            className: o()(M.destinationRow, { [M.disabled]: h }),
            onClick: h || I ? void 0 : C,
            'aria-selected': u,
            'aria-setsize': m,
            'aria-posinset': p,
            ...E,
            children: [
                (0, a.jsxs)('div', {
                    className: M.identity,
                    children: [
                        (0, a.jsx)('div', {
                            className: M.iconWrapper,
                            children: i
                        }),
                        (0, a.jsxs)('div', {
                            className: M.labels,
                            children: [
                                (0, a.jsx)(f.Text, {
                                    tag: 'strong',
                                    className: M.label,
                                    variant: 'text-md/semibold',
                                    lineClamp: 1,
                                    children: s
                                }),
                                (0, a.jsx)(f.Text, {
                                    className: M.subLabel,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: c
                                })
                            ]
                        })
                    ]
                }),
                'toggle' === l &&
                    !h &&
                    (0, a.jsx)(f.Checkbox, {
                        type: f.Checkbox.Types.INVERTED,
                        displayOnly: !0,
                        size: 24,
                        value: u,
                        className: M.checkbox
                    }),
                'send' === l &&
                    !h &&
                    (0, a.jsxs)('div', {
                        className: M.actions,
                        children: [
                            I
                                ? (0, a.jsx)(f.Button, {
                                      size: f.Button.Sizes.SMALL,
                                      color: f.Button.Colors.PRIMARY,
                                      look: f.Button.Looks.LINK,
                                      onClick: v,
                                      children: j.intl.string(j.t['HO/oXl'])
                                  })
                                : (0, a.jsx)('div', {
                                      className: o()(
                                          (0, f.getButtonStyle)({
                                              size: f.Button.Sizes.SMALL,
                                              color: f.Button.Colors.BRAND
                                          }),
                                          M.fauxButton
                                      ),
                                      children: j.intl.string(j.t.TXNS7e)
                                  }),
                            I &&
                                (0, a.jsx)(f.Button, {
                                    size: f.Button.Sizes.SMALL,
                                    color: f.Button.Colors.BRAND,
                                    look: f.Button.Looks.OUTLINED,
                                    onClick: b,
                                    children: j.intl.string(j.t.KyUKhY)
                                })
                        ]
                    })
            ]
        })
    );
}
function F(e) {
    let { user: t, subLabel: n, ...l } = e,
        i = w.ZP.useName(t),
        r = w.ZP.useUserTag(t, { decoration: 'never' }),
        s = (0, h.e7)([x.Z], () => x.Z.getNickname(t.id)),
        o = (0, h.e7)([L.Z], () => L.Z.getStatus(t.id));
    return (0, a.jsx)(k, {
        ...l,
        icon: (0, a.jsx)(_.Z, {
            'aria-hidden': !0,
            size: f.AvatarSizes.SIZE_32,
            user: t,
            status: o
        }),
        label: null != s ? s : i,
        subLabel: null != n ? n : r
    });
}
function G(e) {
    let { channel: t, subLabel: n, ...l } = e,
        i = (0, E.ZP)(t),
        r = (0, A._)(t);
    return (0, a.jsx)(k, {
        ...l,
        icon: (0, a.jsx)(I.Z, {
            'aria-hidden': !0,
            size: f.AvatarSizes.SIZE_32,
            channel: t,
            experimentLocation: 'forward-modal'
        }),
        label: i,
        subLabel: null != n ? n : r
    });
}
function U(e) {
    let { channel: t, subLabel: n, ...l } = e,
        i = (0, h.e7)([b.Z], () => b.Z.getGuild(null == t ? void 0 : t.guild_id)),
        r = (0, E.ZP)(t),
        s = (0, h.e7)([v.Z, T.default, x.Z], () => {
            let e = v.Z.getChannel(t.parent_id);
            return null == e ? null : (0, E.F6)(e, T.default, x.Z, !1);
        }),
        o = (0, h.e7)([N.ZP], () => N.ZP.lastMessageTimestamp(t.id, D.W.CHANNEL)),
        c = null == i ? void 0 : i.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? f.ForumIcon : f.TextIcon;
        c = (0, a.jsxs)('div', {
            className: M.threadSubLabel,
            children: [
                (0, a.jsx)(e, {
                    color: f.tokens.colors.TEXT_SECONDARY,
                    className: M.subLabelIcon
                }),
                (0, a.jsx)(f.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    lineClamp: 1,
                    children: s
                }),
                null != o
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(f.Text, {
                                  className: M.subLabelSeparator,
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: '\u2022'
                              }),
                              (0, a.jsx)(f.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: (0, y.Xf)(u()(o))
                              })
                          ]
                      })
                    : null
            ]
        });
    }
    return (0, a.jsx)(k, {
        ...l,
        icon: (0, a.jsx)(S.Z, {
            size: S.E.SMALL_32,
            guild: i,
            channel: t
        }),
        label: r,
        subLabel: null != n ? n : c
    });
}
function W(e) {
    let { rowData: t, rowMode: n, message: l, originChannel: i, selectedDestinations: s, handleToggleDestination: o, disableSelection: c, ...u } = e,
        h = r.useMemo(() => [t.length], [t.length]),
        _ = r.useCallback(() => 48, []),
        g = r.useMemo(() => {
            var e;
            return null !== (e = null == s ? void 0 : s.map(C.hC)) && void 0 !== e ? e : [];
        }, [s]),
        E = r.useCallback(
            (e) => {
                let { section: r, row: s } = e;
                if (r > 0) return;
                let { type: u, record: d } = t[s];
                if (u === p.h8.HEADER) return;
                let h =
                        u === p.h8.USER
                            ? {
                                  type: 'user',
                                  id: d.id
                              }
                            : {
                                  type: 'channel',
                                  id: d.id
                              },
                    f = (0, C.hC)(h),
                    _ = (0, R.HY)(l, i, d),
                    m = g.includes(f),
                    E = {
                        key: f,
                        message: l,
                        destination: h,
                        rowMode: n,
                        subLabel: null != _ ? _.label : void 0,
                        disabled: (c && !m) || null != _,
                        selected: m,
                        onPressDestination: o,
                        'aria-posinset': s + 1,
                        'aria-setsize': t.length
                    };
                if (u === p.h8.USER)
                    return (0, a.jsx)(F, {
                        user: d,
                        ...E
                    });
                if (u === p.h8.GROUP_DM)
                    return (0, a.jsx)(G, {
                        channel: d,
                        ...E
                    });
                if (u === p.h8.TEXT_CHANNEL || u === p.h8.VOICE_CHANNEL)
                    return (0, a.jsx)(U, {
                        channel: d,
                        ...E
                    });
                else (0, Z.vE)(u);
            },
            [c, o, l, i, t, n, g]
        ),
        I = r.useRef(null),
        S = (0, m.Z)('forward-modal', I);
    return (0, a.jsx)(d.bG, {
        navigator: S,
        children: (0, a.jsx)(d.SJ, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, a.jsx)(f.ModalListContent, {
                    scrollerRef: (e) => {
                        var n;
                        (I.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                    },
                    ...n,
                    ...u,
                    sections: h,
                    sectionHeight: 0,
                    renderRow: E,
                    rowHeight: _
                });
            }
        })
    });
}
((i = l || (l = {})).TOGGLE = 'toggle'), (i.SEND = 'send');
