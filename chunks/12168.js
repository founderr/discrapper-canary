t.d(n, {
    Z: function () {
        return A;
    },
    u: function () {
        return P;
    }
}),
    t(47120);
var a = t(735250),
    l = t(470079),
    i = t(120356),
    r = t.n(i),
    s = t(392711),
    o = t(180081),
    u = t(481060),
    c = t(596454),
    d = t(727637),
    _ = t(313201),
    m = t(543241),
    E = t(318766),
    T = t(907040),
    h = t(633302),
    x = t(806966),
    I = t(176354),
    N = t(823379),
    p = t(354459),
    C = t(185923),
    g = t(420212),
    v = t(894967);
let f = C.Hz.CHAT,
    M = [h.ZP.getByName('thumbsup'), h.ZP.getByName('eyes'), h.ZP.getByName('laughing'), h.ZP.getByName('watermelon'), h.ZP.getByName('fork_and_knife'), h.ZP.getByName('yum')].filter(N.lm);
function P(e) {
    let { emoji: n, isDisabled: t = !1, onClick: i, className: s } = e,
        _ = l.useRef(null),
        m = (0, d.Z)(_);
    return (0, a.jsx)('span', {
        ref: _,
        children: (0, a.jsx)(u.Button, {
            onClick: i,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.NONE,
            focusProps: { enabled: !t },
            children: (0, a.jsx)(u.Spring, {
                config: E.u,
                from: { value: 0 },
                to: { value: m ? 1 : 0 },
                children: (e) => {
                    let { value: l } = e;
                    return (0, a.jsx)(o.animated.div, {
                        style: {
                            transform: l.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                        },
                        children: (0, a.jsx)(c.Z, {
                            className: r()(v.emoji, s, { [v.emojiItemDisabled]: t }),
                            emojiId: n.id,
                            emojiName: null == n ? void 0 : n.surrogates,
                            animated: n.animated
                        })
                    });
                }
            })
        })
    });
}
function Z(e) {
    let { otherAccessories: n, isEmojiPickerExpanded: t, onSetExpanded: l, onFocus: i } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            n,
            (0, a.jsx)(u.Clickable, {
                className: v.dropDownContainer,
                onClick: () => {
                    l(!t), i();
                },
                children: (0, a.jsx)(u.ChevronSmallDownIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: r()(v.dropDown, { [v.dropDownOpen]: t })
                })
            })
        ]
    });
}
function A(e) {
    let { channel: n, title: t, closePopout: i, onFocus: o, onSelectEmoji: c, onSelectDisabledEmoji: d, onExpandedToggle: E, emojiSearchProps: h, recentlyUsedEmojis: N, analyticsOverride: A } = e,
        S = (0, _.Dt)(),
        [O, j] = l.useState(!1),
        R = (0, m.wC)(n.guild_id),
        y = (0, s.uniqBy)([...R, ...M], 'name')
            .filter(
                (e) =>
                    !I.ZP.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: n,
                        intention: f
                    })
            )
            .slice(0, p.e5);
    null != N && N.length > 0 && y.splice(y.length - 1, 1, N[0]);
    let L = (e) => {
            j(e), null == E || E(e);
        },
        w = (e, n) => {
            if (null == e && n) {
                i();
                return;
            }
            null != e && c(e);
            L(!n), n && x.kJ.setSearchPlaceholder(null);
        };
    return (0, a.jsxs)(u.Dialog, {
        'aria-labelledby': S,
        children: [
            (0, a.jsx)(u.HeadingLevel, {
                forceLevel: 2,
                children: (0, a.jsx)(u.HiddenVisually, {
                    children: (0, a.jsx)(u.H, {
                        id: S,
                        children: t
                    })
                })
            }),
            (0, a.jsxs)('div', {
                className: v.container,
                children: [
                    (0, a.jsx)(T.Z, {
                        analyticsOverride: A,
                        channel: n,
                        className: r()(v.animatedPicker, { [v.animatedPickerTall]: O }),
                        headerClassName: r()(v.emojiPickerHeader, { [v.emojiPickerHeaderExpanded]: O }),
                        closePopout: i,
                        onSelectEmoji: O ? w : () => {},
                        shouldHidePickerActions: !O,
                        wrapper: 'div',
                        pickerIntention: f,
                        searchProps: {
                            ...h,
                            accessory: (0, a.jsx)(Z, {
                                otherAccessories: null == h ? void 0 : h.accessory,
                                isEmojiPickerExpanded: O,
                                onSetExpanded: L,
                                onFocus: o
                            }),
                            onKeyDown: (e) => {
                                null != e && e.key !== g.vn.TAB && (e.key !== g.vn.ENTER || e.shiftKey ? L(!0) : L(!O));
                            }
                        }
                    }),
                    (0, a.jsx)('div', {
                        className: v.slotsContainer,
                        children: (0, a.jsx)('div', {
                            className: r()(v.slots, v.slotsWide),
                            children: y.map((e) => {
                                let t = I.ZP.isEmojiDisabled({
                                    emoji: e,
                                    channel: n,
                                    intention: C.Hz.CHAT
                                });
                                return (0, a.jsx)(
                                    'div',
                                    {
                                        className: v.slot,
                                        children: (0, a.jsx)(u.TooltipContainer, {
                                            text: e.name,
                                            position: 'top',
                                            'aria-label': e.name,
                                            tooltipClassName: v.tooltipContainer,
                                            color: u.Tooltip.Colors.BRAND,
                                            children: (0, a.jsx)(P, {
                                                emoji: e,
                                                isDisabled: t,
                                                onClick: () => {
                                                    t ? null == d || d(e) : w(e, !0);
                                                }
                                            })
                                        })
                                    },
                                    e.name
                                );
                            })
                        })
                    })
                ]
            })
        ]
    });
}
