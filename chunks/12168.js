n.d(t, {
    Z: function () {
        return S;
    },
    u: function () {
        return Z;
    }
}),
    n(47120);
var a = n(735250),
    l = n(470079),
    i = n(120356),
    r = n.n(i),
    s = n(392711),
    o = n(526629),
    u = n(481060),
    c = n(596454),
    d = n(727637),
    h = n(313201),
    m = n(543241),
    x = n(318766),
    E = n(907040),
    v = n(633302),
    _ = n(806966),
    f = n(176354),
    T = n(823379),
    p = n(354459),
    g = n(185923),
    I = n(420212),
    N = n(264699);
let C = g.Hz.CHAT,
    A = [v.ZP.getByName('thumbsup'), v.ZP.getByName('eyes'), v.ZP.getByName('laughing'), v.ZP.getByName('watermelon'), v.ZP.getByName('fork_and_knife'), v.ZP.getByName('yum')].filter(T.lm);
function Z(e) {
    let { emoji: t, isDisabled: n = !1, onClick: i, className: s } = e,
        h = l.useRef(null),
        m = (0, d.Z)(h);
    return (0, a.jsx)('span', {
        ref: h,
        children: (0, a.jsx)(u.Button, {
            onClick: i,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.NONE,
            focusProps: { enabled: !n },
            children: (0, a.jsx)(u.Spring, {
                config: x.u,
                from: { value: 0 },
                to: { value: m ? 1 : 0 },
                children: (e) => {
                    let { value: l } = e;
                    return (0, a.jsx)(o.animated.div, {
                        style: {
                            transform: l.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                        },
                        children: (0, a.jsx)(c.Z, {
                            className: r()(N.emoji, s, { [N.emojiItemDisabled]: n }),
                            emojiId: t.id,
                            emojiName: null == t ? void 0 : t.surrogates,
                            animated: t.animated
                        })
                    });
                }
            })
        })
    });
}
function P(e) {
    let { otherAccessories: t, isEmojiPickerExpanded: n, onSetExpanded: l, onFocus: i } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            t,
            (0, a.jsx)(u.Clickable, {
                className: N.dropDownContainer,
                onClick: () => {
                    l(!n), i();
                },
                children: (0, a.jsx)(u.ChevronSmallDownIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: r()(N.dropDown, { [N.dropDownOpen]: n })
                })
            })
        ]
    });
}
function S(e) {
    let { channel: t, title: n, closePopout: i, onFocus: o, onSelectEmoji: c, onSelectDisabledEmoji: d, onExpandedToggle: x, emojiSearchProps: v, recentlyUsedEmojis: T, analyticsOverride: S } = e,
        M = (0, h.Dt)(),
        [O, R] = l.useState(!1),
        j = (0, m.wC)(t.guild_id),
        y = (0, s.uniqBy)([...j, ...A], 'name')
            .filter(
                (e) =>
                    !f.ZP.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: t,
                        intention: C
                    })
            )
            .slice(0, p.e5);
    null != T && T.length > 0 && y.splice(y.length - 1, 1, T[0]);
    let L = (e) => {
            R(e), null == x || x(e);
        },
        w = (e, t) => {
            if (null == e && t) {
                i();
                return;
            }
            null != e && c(e);
            L(!t), t && _.kJ.setSearchPlaceholder(null);
        };
    return (0, a.jsxs)(u.Dialog, {
        'aria-labelledby': M,
        children: [
            (0, a.jsx)(u.HeadingLevel, {
                forceLevel: 2,
                children: (0, a.jsx)(u.HiddenVisually, {
                    children: (0, a.jsx)(u.H, {
                        id: M,
                        children: n
                    })
                })
            }),
            (0, a.jsxs)('div', {
                className: N.container,
                children: [
                    (0, a.jsx)(E.Z, {
                        analyticsOverride: S,
                        channel: t,
                        className: r()(N.animatedPicker, { [N.animatedPickerTall]: O }),
                        headerClassName: r()(N.emojiPickerHeader, { [N.emojiPickerHeaderExpanded]: O }),
                        closePopout: i,
                        onSelectEmoji: O ? w : () => {},
                        shouldHidePickerActions: !O,
                        wrapper: 'div',
                        pickerIntention: C,
                        searchProps: {
                            ...v,
                            accessory: (0, a.jsx)(P, {
                                otherAccessories: null == v ? void 0 : v.accessory,
                                isEmojiPickerExpanded: O,
                                onSetExpanded: L,
                                onFocus: o
                            }),
                            onKeyDown: (e) => {
                                null != e && e.key !== I.vn.TAB && (e.key !== I.vn.ENTER || e.shiftKey ? L(!0) : L(!O));
                            }
                        }
                    }),
                    (0, a.jsx)('div', {
                        className: N.slotsContainer,
                        children: (0, a.jsx)('div', {
                            className: r()(N.slots, N.slotsWide),
                            children: y.map((e) => {
                                let n = f.ZP.isEmojiDisabled({
                                    emoji: e,
                                    channel: t,
                                    intention: g.Hz.CHAT
                                });
                                return (0, a.jsx)(
                                    'div',
                                    {
                                        className: N.slot,
                                        children: (0, a.jsx)(u.TooltipContainer, {
                                            text: e.name,
                                            position: 'top',
                                            'aria-label': e.name,
                                            tooltipClassName: N.tooltipContainer,
                                            color: u.Tooltip.Colors.BRAND,
                                            children: (0, a.jsx)(Z, {
                                                emoji: e,
                                                isDisabled: n,
                                                onClick: () => {
                                                    n ? null == d || d(e) : w(e, !0);
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
