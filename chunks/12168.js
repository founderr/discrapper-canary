n.d(t, {
    Z: function () {
        return S;
    },
    u: function () {
        return T;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    o = n(392711),
    s = n(100621),
    u = n(481060),
    c = n(596454),
    d = n(727637),
    h = n(313201),
    m = n(543241),
    x = n(318766),
    v = n(907040),
    f = n(633302),
    p = n(806966),
    g = n(176354),
    C = n(823379),
    I = n(354459),
    P = n(185923),
    Z = n(420212),
    y = n(264699);
let j = P.Hz.CHAT,
    w = [f.ZP.getByName('thumbsup'), f.ZP.getByName('eyes'), f.ZP.getByName('laughing'), f.ZP.getByName('watermelon'), f.ZP.getByName('fork_and_knife'), f.ZP.getByName('yum')].filter(C.lm);
function T(e) {
    let { emoji: t, isDisabled: n = !1, onClick: a, className: o } = e,
        h = l.useRef(null),
        m = (0, d.Z)(h);
    return (0, i.jsx)('span', {
        ref: h,
        children: (0, i.jsx)(u.Button, {
            onClick: a,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.NONE,
            focusProps: { enabled: !n },
            children: (0, i.jsx)(u.Spring, {
                config: x.u,
                from: { value: 0 },
                to: { value: m ? 1 : 0 },
                children: (e) => {
                    let { value: l } = e;
                    return (0, i.jsx)(s.animated.div, {
                        style: {
                            transform: l.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                        },
                        children: (0, i.jsx)(c.Z, {
                            className: r()(y.emoji, o, { [y.emojiItemDisabled]: n }),
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
function L(e) {
    let { otherAccessories: t, isEmojiPickerExpanded: n, onSetExpanded: l, onFocus: a } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t,
            (0, i.jsx)(u.Clickable, {
                className: y.dropDownContainer,
                onClick: () => {
                    l(!n), a();
                },
                children: (0, i.jsx)(u.ChevronSmallDownIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: r()(y.dropDown, { [y.dropDownOpen]: n })
                })
            })
        ]
    });
}
function S(e) {
    let { channel: t, title: n, closePopout: a, onFocus: s, onSelectEmoji: c, onSelectDisabledEmoji: d, onExpandedToggle: x, emojiSearchProps: f, recentlyUsedEmojis: C, analyticsOverride: S } = e,
        N = (0, h.Dt)(),
        [E, _] = l.useState(!1),
        A = (0, m.wC)(t.guild_id),
        R = (0, o.uniqBy)([...A, ...w], 'name')
            .filter(
                (e) =>
                    !g.ZP.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: t,
                        intention: j
                    })
            )
            .slice(0, I.e5);
    null != C && C.length > 0 && R.splice(R.length - 1, 1, C[0]);
    let b = (e) => {
            _(e), null == x || x(e);
        },
        M = (e, t) => {
            if (null == e && t) {
                a();
                return;
            }
            null != e && c(e);
            b(!t), t && p.kJ.setSearchPlaceholder(null);
        };
    return (0, i.jsxs)(u.Dialog, {
        'aria-labelledby': N,
        children: [
            (0, i.jsx)(u.HeadingLevel, {
                forceLevel: 2,
                children: (0, i.jsx)(u.HiddenVisually, {
                    children: (0, i.jsx)(u.H, {
                        id: N,
                        children: n
                    })
                })
            }),
            (0, i.jsxs)('div', {
                className: y.container,
                children: [
                    (0, i.jsx)(v.Z, {
                        analyticsOverride: S,
                        channel: t,
                        className: r()(y.animatedPicker, { [y.animatedPickerTall]: E }),
                        headerClassName: r()(y.emojiPickerHeader, { [y.emojiPickerHeaderExpanded]: E }),
                        closePopout: a,
                        onSelectEmoji: E ? M : () => {},
                        shouldHidePickerActions: !E,
                        wrapper: 'div',
                        pickerIntention: j,
                        searchProps: {
                            ...f,
                            accessory: (0, i.jsx)(L, {
                                otherAccessories: null == f ? void 0 : f.accessory,
                                isEmojiPickerExpanded: E,
                                onSetExpanded: b,
                                onFocus: s
                            }),
                            onKeyDown: (e) => {
                                null != e && e.key !== Z.vn.TAB && (e.key !== Z.vn.ENTER || e.shiftKey ? b(!0) : b(!E));
                            }
                        }
                    }),
                    (0, i.jsx)('div', {
                        className: y.slotsContainer,
                        children: (0, i.jsx)('div', {
                            className: r()(y.slots, y.slotsWide),
                            children: R.map((e) => {
                                let n = g.ZP.isEmojiDisabled({
                                    emoji: e,
                                    channel: t,
                                    intention: P.Hz.CHAT
                                });
                                return (0, i.jsx)(
                                    'div',
                                    {
                                        className: y.slot,
                                        children: (0, i.jsx)(u.TooltipContainer, {
                                            text: e.name,
                                            position: 'top',
                                            'aria-label': e.name,
                                            tooltipClassName: y.tooltipContainer,
                                            color: u.Tooltip.Colors.BRAND,
                                            children: (0, i.jsx)(T, {
                                                emoji: e,
                                                isDisabled: n,
                                                onClick: () => {
                                                    n ? null == d || d(e) : M(e, !0);
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
