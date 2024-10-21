n.d(t, {
    Z: function () {
        return L;
    },
    u: function () {
        return P;
    }
}),
    n(47120);
var l = n(200651),
    a = n(192379),
    i = n(120356),
    r = n.n(i),
    s = n(392711),
    o = n(100621),
    u = n(481060),
    c = n(596454),
    d = n(727637),
    h = n(313201),
    m = n(543241),
    x = n(318766),
    E = n(907040),
    _ = n(633302),
    v = n(806966),
    C = n(176354),
    p = n(823379),
    f = n(354459),
    T = n(185923),
    g = n(420212),
    I = n(264699);
let N = T.Hz.CHAT,
    Z = [_.ZP.getByName('thumbsup'), _.ZP.getByName('eyes'), _.ZP.getByName('laughing'), _.ZP.getByName('watermelon'), _.ZP.getByName('fork_and_knife'), _.ZP.getByName('yum')].filter(p.lm);
function P(e) {
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
                            className: r()(I.emoji, s, { [I.emojiItemDisabled]: n }),
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
function M(e) {
    let { otherAccessories: t, isEmojiPickerExpanded: n, onSetExpanded: a, onFocus: i } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            t,
            (0, l.jsx)(u.Clickable, {
                className: I.dropDownContainer,
                onClick: () => {
                    a(!n), i();
                },
                children: (0, l.jsx)(u.ChevronSmallDownIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: r()(I.dropDown, { [I.dropDownOpen]: n })
                })
            })
        ]
    });
}
function L(e) {
    let { channel: t, title: n, closePopout: i, onFocus: o, onSelectEmoji: c, onSelectDisabledEmoji: d, onExpandedToggle: x, emojiSearchProps: _, recentlyUsedEmojis: p, analyticsOverride: L } = e,
        S = (0, h.Dt)(),
        [A, R] = a.useState(!1),
        y = (0, m.wC)(t.guild_id),
        O = (0, s.uniqBy)([...y, ...Z], 'name')
            .filter(
                (e) =>
                    !C.ZP.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: t,
                        intention: N
                    })
            )
            .slice(0, f.e5);
    null != p && p.length > 0 && O.splice(O.length - 1, 1, p[0]);
    let j = (e) => {
            R(e), null == x || x(e);
        },
        w = (e, t) => {
            if (null == e && t) {
                i();
                return;
            }
            null != e && c(e);
            j(!t), t && v.kJ.setSearchPlaceholder(null);
        };
    return (0, l.jsxs)(u.Dialog, {
        'aria-labelledby': S,
        children: [
            (0, l.jsx)(u.HeadingLevel, {
                forceLevel: 2,
                children: (0, l.jsx)(u.HiddenVisually, {
                    children: (0, l.jsx)(u.H, {
                        id: S,
                        children: n
                    })
                })
            }),
            (0, l.jsxs)('div', {
                className: I.container,
                children: [
                    (0, l.jsx)(E.Z, {
                        analyticsOverride: L,
                        channel: t,
                        className: r()(I.animatedPicker, { [I.animatedPickerTall]: A }),
                        headerClassName: r()(I.emojiPickerHeader, { [I.emojiPickerHeaderExpanded]: A }),
                        closePopout: i,
                        onSelectEmoji: A ? w : () => {},
                        shouldHidePickerActions: !A,
                        wrapper: 'div',
                        pickerIntention: N,
                        searchProps: {
                            ..._,
                            accessory: (0, l.jsx)(M, {
                                otherAccessories: null == _ ? void 0 : _.accessory,
                                isEmojiPickerExpanded: A,
                                onSetExpanded: j,
                                onFocus: o
                            }),
                            onKeyDown: (e) => {
                                null != e && e.key !== g.vn.TAB && (e.key !== g.vn.ENTER || e.shiftKey ? j(!0) : j(!A));
                            }
                        }
                    }),
                    (0, l.jsx)('div', {
                        className: I.slotsContainer,
                        children: (0, l.jsx)('div', {
                            className: r()(I.slots, I.slotsWide),
                            children: O.map((e) => {
                                let n = C.ZP.isEmojiDisabled({
                                    emoji: e,
                                    channel: t,
                                    intention: T.Hz.CHAT
                                });
                                return (0, l.jsx)(
                                    'div',
                                    {
                                        className: I.slot,
                                        children: (0, l.jsx)(u.TooltipContainer, {
                                            text: e.name,
                                            position: 'top',
                                            'aria-label': e.name,
                                            tooltipClassName: I.tooltipContainer,
                                            color: u.Tooltip.Colors.BRAND,
                                            children: (0, l.jsx)(P, {
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
