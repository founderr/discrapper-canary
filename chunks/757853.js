t.d(n, {
    F: function () {
        return F;
    },
    G: function () {
        return l;
    }
}),
    t(47120);
var l,
    s,
    a = t(735250),
    r = t(470079),
    i = t(120356),
    o = t.n(i),
    u = t(913527),
    c = t.n(u),
    d = t(91192),
    h = t(442837),
    f = t(481060),
    m = t(700582),
    g = t(560361),
    _ = t(724757),
    E = t(212819),
    S = t(933557),
    M = t(266076),
    v = t(810123),
    p = t(448486),
    x = t(987509),
    N = t(592125),
    C = t(430824),
    Z = t(158776),
    A = t(306680),
    b = t(699516),
    L = t(594174),
    R = t(626135),
    I = t(55935),
    w = t(823379),
    y = t(51144),
    T = t(784384),
    P = t(981631),
    j = t(490897),
    D = t(689938),
    O = t(463061);
function k(e) {
    let { message: n, destination: t, rowMode: l, icon: s, label: i, subLabel: u, selected: c, disabled: h, onPressDestination: m, 'aria-setsize': _, 'aria-posinset': E } = e,
        S = (0, d.JA)(t.id),
        [M, v] = r.useState(!1),
        p = r.useRef(!1),
        x = r.useCallback(() => {
            if ('send' === l) {
                v(!0), (p.current = !0);
                return;
            }
            null == m || m(t);
        }, [l, m, t]),
        N = r.useCallback(() => {
            R.default.track(P.rMx.FORWARD_ONE_TAP_VIEW, {
                channel_id: n.channel_id,
                message_id: n.id
            }),
                (p.current = !1),
                null == m ||
                    m(t, {
                        transitionToDestination: !0,
                        closeAfterSend: !0
                    });
        }, [n.channel_id, n.id, m, t]),
        C = r.useCallback(() => {
            v(!1),
                (p.current = !1),
                R.default.track(P.rMx.FORWARD_ONE_TAP_UNDO, {
                    channel_id: n.channel_id,
                    message_id: n.id
                });
        }, [n]);
    return (
        (0, g.Z)(() => {
            p.current &&
                ((p.current = !1),
                null == m ||
                    m(t, {
                        transitionToDestination: !1,
                        closeAfterSend: !1
                    }));
        }),
        (0, a.jsxs)(f.Clickable, {
            className: o()(O.destinationRow, { [O.disabled]: h }),
            onClick: h || M ? void 0 : x,
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
                                (0, a.jsx)(f.Text, {
                                    tag: 'strong',
                                    className: O.label,
                                    variant: 'text-md/semibold',
                                    lineClamp: 1,
                                    children: i
                                }),
                                (0, a.jsx)(f.Text, {
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
                    (0, a.jsx)(f.Checkbox, {
                        type: f.Checkbox.Types.INVERTED,
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
                                ? (0, a.jsx)(f.Button, {
                                      size: f.Button.Sizes.SMALL,
                                      color: f.Button.Colors.PRIMARY,
                                      look: f.Button.Looks.LINK,
                                      onClick: N,
                                      children: D.Z.Messages.VIEW
                                  })
                                : (0, a.jsx)('div', {
                                      className: o()(
                                          (0, f.getButtonStyle)({
                                              size: f.Button.Sizes.SMALL,
                                              color: f.Button.Colors.BRAND
                                          }),
                                          O.fauxButton
                                      ),
                                      children: D.Z.Messages.SEND
                                  }),
                            M &&
                                (0, a.jsx)(f.Button, {
                                    size: f.Button.Sizes.SMALL,
                                    color: f.Button.Colors.BRAND,
                                    look: f.Button.Looks.OUTLINED,
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
    let { user: n, subLabel: t, ...l } = e,
        s = y.ZP.useName(n),
        r = y.ZP.useUserTag(n, { decoration: 'never' }),
        i = (0, h.e7)([b.Z], () => b.Z.getNickname(n.id)),
        o = (0, h.e7)([Z.Z], () => Z.Z.getStatus(n.id));
    return (0, a.jsx)(k, {
        ...l,
        icon: (0, a.jsx)(m.Z, {
            'aria-hidden': !0,
            size: f.AvatarSizes.SIZE_32,
            user: n,
            status: o
        }),
        label: null != i ? i : s,
        subLabel: null != t ? t : r
    });
}
function G(e) {
    let { channel: n, subLabel: t, ...l } = e,
        s = (0, S.ZP)(n),
        r = (0, p._)(n);
    return (0, a.jsx)(k, {
        ...l,
        icon: (0, a.jsx)(M.Z, {
            'aria-hidden': !0,
            size: f.AvatarSizes.SIZE_32,
            channel: n,
            experimentLocation: 'forward-modal'
        }),
        label: s,
        subLabel: null != t ? t : r
    });
}
function U(e) {
    let { channel: n, subLabel: t, ...l } = e,
        s = (0, h.e7)([C.Z], () => C.Z.getGuild(null == n ? void 0 : n.guild_id)),
        r = (0, S.ZP)(n),
        i = (0, h.e7)([N.Z, L.default, b.Z], () => {
            let e = N.Z.getChannel(n.parent_id);
            return null == e ? null : (0, S.F6)(e, L.default, b.Z, !1);
        }),
        o = (0, h.e7)([A.ZP], () => A.ZP.lastMessageTimestamp(n.id, j.W.CHANNEL)),
        u = null == s ? void 0 : s.name;
    if (n.isThread() || n.isForumPost()) {
        let e = n.isForumPost() ? f.ForumIcon : f.TextIcon;
        u = (0, a.jsxs)('div', {
            className: O.threadSubLabel,
            children: [
                (0, a.jsx)(e, {
                    color: f.tokens.colors.TEXT_SECONDARY,
                    className: O.subLabelIcon
                }),
                (0, a.jsx)(f.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    lineClamp: 1,
                    children: i
                }),
                null != o
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(f.Text, {
                                  className: O.subLabelSeparator,
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: '\u2022'
                              }),
                              (0, a.jsx)(f.Text, {
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
            channel: n
        }),
        label: r,
        subLabel: null != t ? t : u
    });
}
function F(e) {
    let { rowData: n, rowMode: t, message: l, originChannel: s, selectedDestinations: i, handleToggleDestination: o, disableSelection: u, ...c } = e,
        h = r.useMemo(() => [n.length], [n.length]),
        m = r.useCallback(() => 48, []),
        g = r.useMemo(() => {
            var e;
            return null !== (e = null == i ? void 0 : i.map(x.hC)) && void 0 !== e ? e : [];
        }, [i]),
        S = r.useCallback(
            (e) => {
                let { section: r, row: i } = e;
                if (r > 0) return;
                let { type: c, record: d } = n[i];
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
                    f = (0, x.hC)(h),
                    m = (0, T.HY)(l, s, d),
                    _ = g.includes(f),
                    S = {
                        key: f,
                        message: l,
                        destination: h,
                        rowMode: t,
                        subLabel: null != m ? m.label : void 0,
                        disabled: (u && !_) || null != m,
                        selected: _,
                        onPressDestination: o,
                        'aria-posinset': i + 1,
                        'aria-setsize': n.length
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
            [u, o, l, s, n, t, g]
        ),
        M = r.useRef(null),
        v = (0, _.Z)('forward-modal', M);
    return (0, a.jsx)(d.bG, {
        navigator: v,
        children: (0, a.jsx)(d.SJ, {
            children: (e) => {
                let { ref: n, ...t } = e;
                return (0, a.jsx)(f.ModalListContent, {
                    scrollerRef: (e) => {
                        var t;
                        (M.current = e), (n.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                    },
                    ...t,
                    ...c,
                    sections: h,
                    sectionHeight: 0,
                    renderRow: S,
                    rowHeight: m
                });
            }
        })
    });
}
((s = l || (l = {})).TOGGLE = 'toggle'), (s.SEND = 'send');
