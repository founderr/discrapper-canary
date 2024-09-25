n.d(t, {
    F: function () {
        return F;
    },
    G: function () {
        return l;
    }
}),
    n(47120);
var l,
    s,
    a = n(735250),
    r = n(470079),
    i = n(120356),
    o = n.n(i),
    u = n(913527),
    c = n.n(u),
    d = n(91192),
    h = n(442837),
    m = n(481060),
    f = n(700582),
    g = n(560361),
    _ = n(724757),
    E = n(212819),
    S = n(933557),
    M = n(266076),
    v = n(810123),
    x = n(448486),
    p = n(987509),
    N = n(592125),
    C = n(430824),
    Z = n(158776),
    A = n(306680),
    b = n(699516),
    L = n(594174),
    R = n(626135),
    I = n(55935),
    w = n(823379),
    y = n(51144),
    T = n(784384),
    j = n(981631),
    P = n(490897),
    D = n(689938),
    O = n(463061);
function k(e) {
    let { message: t, destination: n, rowMode: l, icon: s, label: i, subLabel: u, selected: c, disabled: h, onPressDestination: f, 'aria-setsize': _, 'aria-posinset': E } = e,
        S = (0, d.JA)(n.id),
        [M, v] = r.useState(!1),
        x = r.useRef(!1),
        p = r.useCallback(() => {
            if ('send' === l) {
                v(!0), (x.current = !0);
                return;
            }
            null == f || f(n);
        }, [l, f, n]),
        N = r.useCallback(() => {
            R.default.track(j.rMx.FORWARD_ONE_TAP_VIEW, {
                channel_id: t.channel_id,
                message_id: t.id
            }),
                (x.current = !1),
                null == f ||
                    f(n, {
                        transitionToDestination: !0,
                        closeAfterSend: !0
                    });
        }, [t.channel_id, t.id, f, n]),
        C = r.useCallback(() => {
            v(!1),
                (x.current = !1),
                R.default.track(j.rMx.FORWARD_ONE_TAP_UNDO, {
                    channel_id: t.channel_id,
                    message_id: t.id
                });
        }, [t]);
    return (
        (0, g.Z)(() => {
            x.current &&
                ((x.current = !1),
                null == f ||
                    f(n, {
                        transitionToDestination: !1,
                        closeAfterSend: !1
                    }));
        }),
        (0, a.jsxs)(m.Clickable, {
            className: o()(O.destinationRow, { [O.disabled]: h }),
            onClick: h || M ? void 0 : p,
            'aria-selected': c,
            'aria-setsize': _,
            'aria-posinset': E,
            ...S,
            children: [
                (0, a.jsxs)('div', {
                    className: O.identity,
                    children: [
                        (0, a.jsx)('div', {
                            className: O.iconWrapper,
                            children: s
                        }),
                        (0, a.jsxs)('div', {
                            className: O.labels,
                            children: [
                                (0, a.jsx)(m.Text, {
                                    tag: 'strong',
                                    className: O.label,
                                    variant: 'text-md/semibold',
                                    lineClamp: 1,
                                    children: i
                                }),
                                (0, a.jsx)(m.Text, {
                                    className: O.subLabel,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: u
                                })
                            ]
                        })
                    ]
                }),
                'toggle' === l &&
                    !h &&
                    (0, a.jsx)(m.Checkbox, {
                        type: m.Checkbox.Types.INVERTED,
                        displayOnly: !0,
                        size: 24,
                        value: c,
                        className: O.checkbox
                    }),
                'send' === l &&
                    !h &&
                    (0, a.jsxs)('div', {
                        className: O.actions,
                        children: [
                            M
                                ? (0, a.jsx)(m.Button, {
                                      size: m.Button.Sizes.SMALL,
                                      color: m.Button.Colors.PRIMARY,
                                      look: m.Button.Looks.LINK,
                                      onClick: N,
                                      children: D.Z.Messages.VIEW
                                  })
                                : (0, a.jsx)('div', {
                                      className: o()(
                                          (0, m.getButtonStyle)({
                                              size: m.Button.Sizes.SMALL,
                                              color: m.Button.Colors.BRAND
                                          }),
                                          O.fauxButton
                                      ),
                                      children: D.Z.Messages.SEND
                                  }),
                            M &&
                                (0, a.jsx)(m.Button, {
                                    size: m.Button.Sizes.SMALL,
                                    color: m.Button.Colors.BRAND,
                                    look: m.Button.Looks.OUTLINED,
                                    onClick: C,
                                    children: D.Z.Messages.UNDO
                                })
                        ]
                    })
            ]
        })
    );
}
function W(e) {
    let { user: t, subLabel: n, ...l } = e,
        s = y.ZP.useName(t),
        r = y.ZP.useUserTag(t, { decoration: 'never' }),
        i = (0, h.e7)([b.Z], () => b.Z.getNickname(t.id)),
        o = (0, h.e7)([Z.Z], () => Z.Z.getStatus(t.id));
    return (0, a.jsx)(k, {
        ...l,
        icon: (0, a.jsx)(f.Z, {
            'aria-hidden': !0,
            size: m.AvatarSizes.SIZE_32,
            user: t,
            status: o
        }),
        label: null != i ? i : s,
        subLabel: null != n ? n : r
    });
}
function G(e) {
    let { channel: t, subLabel: n, ...l } = e,
        s = (0, S.ZP)(t),
        r = (0, x._)(t);
    return (0, a.jsx)(k, {
        ...l,
        icon: (0, a.jsx)(M.Z, {
            'aria-hidden': !0,
            size: m.AvatarSizes.SIZE_32,
            channel: t,
            experimentLocation: 'forward-modal'
        }),
        label: s,
        subLabel: null != n ? n : r
    });
}
function U(e) {
    let { channel: t, subLabel: n, ...l } = e,
        s = (0, h.e7)([C.Z], () => C.Z.getGuild(null == t ? void 0 : t.guild_id)),
        r = (0, S.ZP)(t),
        i = (0, h.e7)([N.Z, L.default, b.Z], () => {
            let e = N.Z.getChannel(t.parent_id);
            return null == e ? null : (0, S.F6)(e, L.default, b.Z, !1);
        }),
        o = (0, h.e7)([A.ZP], () => A.ZP.lastMessageTimestamp(t.id, P.W.CHANNEL)),
        u = null == s ? void 0 : s.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? m.ForumIcon : m.TextIcon;
        u = (0, a.jsxs)('div', {
            className: O.threadSubLabel,
            children: [
                (0, a.jsx)(e, {
                    color: m.tokens.colors.TEXT_SECONDARY,
                    className: O.subLabelIcon
                }),
                (0, a.jsx)(m.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    lineClamp: 1,
                    children: i
                }),
                null != o
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(m.Text, {
                                  className: O.subLabelSeparator,
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: '\u2022'
                              }),
                              (0, a.jsx)(m.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: (0, I.Xf)(c()(o))
                              })
                          ]
                      })
                    : null
            ]
        });
    }
    return (0, a.jsx)(k, {
        ...l,
        icon: (0, a.jsx)(v.Z, {
            size: v.E.SMALL_32,
            guild: s,
            channel: t
        }),
        label: r,
        subLabel: null != n ? n : u
    });
}
function F(e) {
    let { rowData: t, rowMode: n, message: l, originChannel: s, selectedDestinations: i, handleToggleDestination: o, disableSelection: u, ...c } = e,
        h = r.useMemo(() => [t.length], [t.length]),
        f = r.useCallback(() => 48, []),
        g = r.useMemo(() => {
            var e;
            return null !== (e = null == i ? void 0 : i.map(p.hC)) && void 0 !== e ? e : [];
        }, [i]),
        S = r.useCallback(
            (e) => {
                let { section: r, row: i } = e;
                if (r > 0) return;
                let { type: c, record: d } = t[i];
                if (c === E.h8.HEADER) return;
                let h =
                        c === E.h8.USER
                            ? {
                                  type: 'user',
                                  id: d.id
                              }
                            : {
                                  type: 'channel',
                                  id: d.id
                              },
                    m = (0, p.hC)(h),
                    f = (0, T.H)(l, s, d),
                    _ = g.includes(m),
                    S = {
                        key: m,
                        message: l,
                        destination: h,
                        rowMode: n,
                        subLabel: null != f ? f.label : void 0,
                        disabled: (u && !_) || null != f,
                        selected: _,
                        onPressDestination: o,
                        'aria-posinset': i + 1,
                        'aria-setsize': t.length
                    };
                if (c === E.h8.USER)
                    return (0, a.jsx)(W, {
                        user: d,
                        ...S
                    });
                if (c === E.h8.GROUP_DM)
                    return (0, a.jsx)(G, {
                        channel: d,
                        ...S
                    });
                if (c === E.h8.TEXT_CHANNEL || c === E.h8.VOICE_CHANNEL)
                    return (0, a.jsx)(U, {
                        channel: d,
                        ...S
                    });
                else (0, w.vE)(c);
            },
            [u, o, l, s, t, n, g]
        ),
        M = r.useRef(null),
        v = (0, _.Z)('forward-modal', M);
    return (0, a.jsx)(d.bG, {
        navigator: v,
        children: (0, a.jsx)(d.SJ, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, a.jsx)(m.ModalListContent, {
                    scrollerRef: (e) => {
                        var n;
                        (M.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                    },
                    ...n,
                    ...c,
                    sections: h,
                    sectionHeight: 0,
                    renderRow: S,
                    rowHeight: f
                });
            }
        })
    });
}
((s = l || (l = {})).TOGGLE = 'toggle'), (s.SEND = 'send');
