n.d(t, {
    Z: function () {
        return M;
    },
    u: function () {
        return Z;
    }
}),
    n(47120);
var l = n(735250),
    a = n(470079),
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
    v = n(907040),
    E = n(633302),
    _ = n(806966),
    p = n(176354),
    T = n(823379),
    f = n(354459),
    g = n(185923),
    I = n(420212),
    C = n(264699);
let N = g.Hz.CHAT,
    P = [E.ZP.getByName('thumbsup'), E.ZP.getByName('eyes'), E.ZP.getByName('laughing'), E.ZP.getByName('watermelon'), E.ZP.getByName('fork_and_knife'), E.ZP.getByName('yum')].filter(T.lm);
function Z(e) {
    let { emoji: t, isDisabled: n = !1, onClick: i, className: s } = e,
        h = a.useRef(null),
        m = (0, d.Z)(h);
    return (0, l.jsx)('span', {
        ref: h,
        children: (0, l.jsx)(u.Button, {
            onClick: i,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.NONE,
            focusProps: { enabled: !n },
            children: (0, l.jsx)(u.Spring, {
                config: x.u,
                from: { value: 0 },
                to: { value: m ? 1 : 0 },
                children: (e) => {
                    let { value: a } = e;
                    return (0, l.jsx)(o.animated.div, {
                        style: {
                            transform: a.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                        },
                        children: (0, l.jsx)(c.Z, {
                            className: r()(C.emoji, s, { [C.emojiItemDisabled]: n }),
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
function S(e) {
    let { otherAccessories: t, isEmojiPickerExpanded: n, onSetExpanded: a, onFocus: i } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            t,
            (0, l.jsx)(u.Clickable, {
                className: C.dropDownContainer,
                onClick: () => {
                    a(!n), i();
                },
                children: (0, l.jsx)(u.ChevronSmallDownIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: r()(C.dropDown, { [C.dropDownOpen]: n })
                })
            })
        ]
    });
}
function M(e) {
    let { channel: t, title: n, closePopout: i, onFocus: o, onSelectEmoji: c, onSelectDisabledEmoji: d, onExpandedToggle: x, emojiSearchProps: E, recentlyUsedEmojis: T, analyticsOverride: M } = e,
        y = (0, h.Dt)(),
        [A, R] = a.useState(!1),
        O = (0, m.wC)(t.guild_id),
        j = (0, s.uniqBy)([...O, ...P], 'name')
            .filter(
                (e) =>
                    !p.ZP.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: t,
                        intention: N
                    })
            )
            .slice(0, f.e5);
    null != T && T.length > 0 && j.splice(j.length - 1, 1, T[0]);
    let w = (e) => {
            R(e), null == x || x(e);
        },
        L = (e, t) => {
            if (null == e && t) {
                i();
                return;
            }
            null != e && c(e);
            w(!t), t && _.kJ.setSearchPlaceholder(null);
        };
    return (0, l.jsxs)(u.Dialog, {
        'aria-labelledby': y,
        children: [
            (0, l.jsx)(u.HeadingLevel, {
                forceLevel: 2,
                children: (0, l.jsx)(u.HiddenVisually, {
                    children: (0, l.jsx)(u.H, {
                        id: y,
                        children: n
                    })
                })
            }),
            (0, l.jsxs)('div', {
                className: C.container,
                children: [
                    (0, l.jsx)(v.Z, {
                        analyticsOverride: M,
                        channel: t,
                        className: r()(C.animatedPicker, { [C.animatedPickerTall]: A }),
                        headerClassName: r()(C.emojiPickerHeader, { [C.emojiPickerHeaderExpanded]: A }),
                        closePopout: i,
                        onSelectEmoji: A ? L : () => {},
                        shouldHidePickerActions: !A,
                        wrapper: 'div',
                        pickerIntention: N,
                        searchProps: {
                            ...E,
                            accessory: (0, l.jsx)(S, {
                                otherAccessories: null == E ? void 0 : E.accessory,
                                isEmojiPickerExpanded: A,
                                onSetExpanded: w,
                                onFocus: o
                            }),
                            onKeyDown: (e) => {
                                null != e && e.key !== I.vn.TAB && (e.key !== I.vn.ENTER || e.shiftKey ? w(!0) : w(!A));
                            }
                        }
                    }),
                    (0, l.jsx)('div', {
                        className: C.slotsContainer,
                        children: (0, l.jsx)('div', {
                            className: r()(C.slots, C.slotsWide),
                            children: j.map((e) => {
                                let n = p.ZP.isEmojiDisabled({
                                    emoji: e,
                                    channel: t,
                                    intention: g.Hz.CHAT
                                });
                                return (0, l.jsx)(
                                    'div',
                                    {
                                        className: C.slot,
                                        children: (0, l.jsx)(u.TooltipContainer, {
                                            text: e.name,
                                            position: 'top',
                                            'aria-label': e.name,
                                            tooltipClassName: C.tooltipContainer,
                                            color: u.Tooltip.Colors.BRAND,
                                            children: (0, l.jsx)(Z, {
                                                emoji: e,
                                                isDisabled: n,
                                                onClick: () => {
                                                    n ? null == d || d(e) : L(e, !0);
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
