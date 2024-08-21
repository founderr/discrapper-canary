t.d(n, {
    Z: function () {
        return S;
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
    o = t(338545),
    c = t(481060),
    u = t(596454),
    d = t(727637),
    m = t(313201),
    _ = t(543241),
    E = t(318766),
    T = t(907040),
    h = t(633302),
    x = t(806966),
    N = t(176354),
    I = t(823379),
    C = t(354459),
    p = t(185923),
    g = t(420212),
    f = t(894967);
let v = p.Hz.CHAT,
    M = [h.ZP.getByName('thumbsup'), h.ZP.getByName('eyes'), h.ZP.getByName('laughing'), h.ZP.getByName('watermelon'), h.ZP.getByName('fork_and_knife'), h.ZP.getByName('yum')].filter(I.lm);
function P(e) {
    let { emoji: n, isDisabled: t = !1, onClick: i, className: s } = e,
        m = l.useRef(null),
        _ = (0, d.Z)(m);
    return (0, a.jsx)('span', {
        ref: m,
        children: (0, a.jsx)(c.Button, {
            onClick: i,
            look: c.Button.Looks.BLANK,
            size: c.Button.Sizes.NONE,
            focusProps: { enabled: !t },
            children: (0, a.jsx)(c.Spring, {
                config: E.u,
                from: { value: 0 },
                to: { value: _ ? 1 : 0 },
                children: (e) => {
                    let { value: l } = e;
                    return (0, a.jsx)(o.animated.div, {
                        style: {
                            transform: l.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                        },
                        children: (0, a.jsx)(u.Z, {
                            className: r()(f.emoji, s, { [f.emojiItemDisabled]: t }),
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
            (0, a.jsx)(c.Clickable, {
                className: f.dropDownContainer,
                onClick: () => {
                    l(!t), i();
                },
                children: (0, a.jsx)(c.ChevronSmallDownIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: r()(f.dropDown, { [f.dropDownOpen]: t })
                })
            })
        ]
    });
}
function S(e) {
    let { channel: n, title: t, closePopout: i, onFocus: o, onSelectEmoji: u, onSelectDisabledEmoji: d, onExpandedToggle: E, emojiSearchProps: h, recentlyUsedEmojis: I, analyticsOverride: S } = e,
        A = (0, m.Dt)(),
        [O, j] = l.useState(!1),
        R = (0, _.wC)(n.guild_id),
        y = (0, s.uniqBy)([...R, ...M], 'name')
            .filter(
                (e) =>
                    !N.ZP.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: n,
                        intention: v
                    })
            )
            .slice(0, C.e5);
    null != I && I.length > 0 && y.splice(y.length - 1, 1, I[0]);
    let L = (e) => {
            j(e), null == E || E(e);
        },
        w = (e, n) => {
            if (null == e && n) {
                i();
                return;
            }
            null != e && u(e);
            L(!n), n && x.kJ.setSearchPlaceholder(null);
        };
    return (0, a.jsxs)(c.Dialog, {
        'aria-labelledby': A,
        children: [
            (0, a.jsx)(c.HeadingLevel, {
                forceLevel: 2,
                children: (0, a.jsx)(c.HiddenVisually, {
                    children: (0, a.jsx)(c.H, {
                        id: A,
                        children: t
                    })
                })
            }),
            (0, a.jsxs)('div', {
                className: f.container,
                children: [
                    (0, a.jsx)(T.Z, {
                        analyticsOverride: S,
                        channel: n,
                        className: r()(f.animatedPicker, { [f.animatedPickerTall]: O }),
                        headerClassName: r()(f.emojiPickerHeader, { [f.emojiPickerHeaderExpanded]: O }),
                        closePopout: i,
                        onSelectEmoji: O ? w : () => {},
                        shouldHidePickerActions: !O,
                        wrapper: 'div',
                        pickerIntention: v,
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
                        className: f.slotsContainer,
                        children: (0, a.jsx)('div', {
                            className: r()(f.slots, f.slotsWide),
                            children: y.map((e) => {
                                let t = N.ZP.isEmojiDisabled({
                                    emoji: e,
                                    channel: n,
                                    intention: p.Hz.CHAT
                                });
                                return (0, a.jsx)(
                                    'div',
                                    {
                                        className: f.slot,
                                        children: (0, a.jsx)(c.TooltipContainer, {
                                            text: e.name,
                                            position: 'top',
                                            'aria-label': e.name,
                                            tooltipClassName: f.tooltipContainer,
                                            color: c.Tooltip.Colors.BRAND,
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
