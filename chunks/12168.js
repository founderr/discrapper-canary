n.d(t, {
    Z: function () {
        return A;
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
    o = n(212433),
    u = n(481060),
    c = n(596454),
    d = n(727637),
    h = n(313201),
    m = n(543241),
    x = n(318766),
    v = n(907040),
    E = n(633302),
    _ = n(806966),
    f = n(176354),
    p = n(823379),
    T = n(354459),
    g = n(185923),
    I = n(420212),
    C = n(264699);
let N = g.Hz.CHAT,
    P = [E.ZP.getByName('thumbsup'), E.ZP.getByName('eyes'), E.ZP.getByName('laughing'), E.ZP.getByName('watermelon'), E.ZP.getByName('fork_and_knife'), E.ZP.getByName('yum')].filter(p.lm);
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
    let { otherAccessories: t, isEmojiPickerExpanded: n, onSetExpanded: l, onFocus: i } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            t,
            (0, a.jsx)(u.Clickable, {
                className: C.dropDownContainer,
                onClick: () => {
                    l(!n), i();
                },
                children: (0, a.jsx)(u.ChevronSmallDownIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: r()(C.dropDown, { [C.dropDownOpen]: n })
                })
            })
        ]
    });
}
function A(e) {
    let { channel: t, title: n, closePopout: i, onFocus: o, onSelectEmoji: c, onSelectDisabledEmoji: d, onExpandedToggle: x, emojiSearchProps: E, recentlyUsedEmojis: p, analyticsOverride: A } = e,
        R = (0, h.Dt)(),
        [M, y] = l.useState(!1),
        O = (0, m.wC)(t.guild_id),
        j = (0, s.uniqBy)([...O, ...P], 'name')
            .filter(
                (e) =>
                    !f.ZP.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: t,
                        intention: N
                    })
            )
            .slice(0, T.e5);
    null != p && p.length > 0 && j.splice(j.length - 1, 1, p[0]);
    let w = (e) => {
            y(e), null == x || x(e);
        },
        L = (e, t) => {
            if (null == e && t) {
                i();
                return;
            }
            null != e && c(e);
            w(!t), t && _.kJ.setSearchPlaceholder(null);
        };
    return (0, a.jsxs)(u.Dialog, {
        'aria-labelledby': R,
        children: [
            (0, a.jsx)(u.HeadingLevel, {
                forceLevel: 2,
                children: (0, a.jsx)(u.HiddenVisually, {
                    children: (0, a.jsx)(u.H, {
                        id: R,
                        children: n
                    })
                })
            }),
            (0, a.jsxs)('div', {
                className: C.container,
                children: [
                    (0, a.jsx)(v.Z, {
                        analyticsOverride: A,
                        channel: t,
                        className: r()(C.animatedPicker, { [C.animatedPickerTall]: M }),
                        headerClassName: r()(C.emojiPickerHeader, { [C.emojiPickerHeaderExpanded]: M }),
                        closePopout: i,
                        onSelectEmoji: M ? L : () => {},
                        shouldHidePickerActions: !M,
                        wrapper: 'div',
                        pickerIntention: N,
                        searchProps: {
                            ...E,
                            accessory: (0, a.jsx)(S, {
                                otherAccessories: null == E ? void 0 : E.accessory,
                                isEmojiPickerExpanded: M,
                                onSetExpanded: w,
                                onFocus: o
                            }),
                            onKeyDown: (e) => {
                                null != e && e.key !== I.vn.TAB && (e.key !== I.vn.ENTER || e.shiftKey ? w(!0) : w(!M));
                            }
                        }
                    }),
                    (0, a.jsx)('div', {
                        className: C.slotsContainer,
                        children: (0, a.jsx)('div', {
                            className: r()(C.slots, C.slotsWide),
                            children: j.map((e) => {
                                let n = f.ZP.isEmojiDisabled({
                                    emoji: e,
                                    channel: t,
                                    intention: g.Hz.CHAT
                                });
                                return (0, a.jsx)(
                                    'div',
                                    {
                                        className: C.slot,
                                        children: (0, a.jsx)(u.TooltipContainer, {
                                            text: e.name,
                                            position: 'top',
                                            'aria-label': e.name,
                                            tooltipClassName: C.tooltipContainer,
                                            color: u.Tooltip.Colors.BRAND,
                                            children: (0, a.jsx)(Z, {
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
