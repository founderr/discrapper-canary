n.d(t, {
    DJ: function () {
        return w;
    },
    rp: function () {
        return P;
    }
}),
    n(411104),
    n(47120);
var r,
    i = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(392711),
    u = n.n(l),
    c = n(91192),
    d = n(481060),
    f = n(607070),
    _ = n(895924),
    p = n(237375),
    h = n(342687),
    m = n(933557),
    g = n(471445),
    E = n(511618),
    v = n(926491),
    I = n(378233),
    T = n(695346),
    b = n(430824),
    S = n(699516),
    y = n(594174),
    A = n(768581),
    N = n(51144),
    C = n(965386),
    R = n(981631),
    O = n(185923),
    D = n(388032),
    L = n(488735);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function w(e) {
    return null != e ? 'autocomplete-'.concat(e) : null;
}
function P(e) {
    return 'autocomplete-'.concat(e, '-title');
}
let M = a.createContext(null);
class k extends a.PureComponent {
    isSelectable() {
        return this.selectable;
    }
    renderContent() {
        throw Error('AutocompleteRow: renderContent must be extended');
    }
    renderClickable(e) {
        var t;
        let {
                layoutClass: n,
                props: { className: r, index: a, selected: s }
            } = this,
            l = this.isSelectable();
        return (0, i.jsx)(d.Clickable, {
            ...e,
            className: o()(L.clickable, r, n),
            id: null !== (t = w(a)) && void 0 !== t ? t : void 0,
            onClick: l ? this.handleClick : void 0,
            onMouseMove: l
                ? () => {
                      this.setState({ hovered: !0 }), this.handleMouseEnter();
                  }
                : void 0,
            onMouseLeave: l ? () => this.setState({ hovered: !1 }) : void 0,
            role: 'option',
            'aria-disabled': !l,
            'aria-selected': l && s,
            children: (0, i.jsx)('div', {
                className: L.base,
                children: this.renderContent()
            })
        });
    }
    render() {
        let { index: e } = this.props;
        return this.isSelectable()
            ? (0, i.jsx)(c.mh, {
                  id: ''.concat(e),
                  children: (e) => this.renderClickable(e)
              })
            : this.renderClickable();
    }
    constructor(e) {
        super(e),
            x(this, 'selectable', !0),
            x(this, 'layoutClass', L.autocompleteRowVertical),
            x(this, 'handleMouseEnter', () => {
                let { onHover: e, index: t, selected: n } = this.props;
                null == e || n || 'number' != typeof t || e(t);
            }),
            x(this, 'handleClick', (e) => {
                let { onClick: t, index: n } = this.props;
                null != t && 'number' == typeof n && t(n, e);
            }),
            (this.state = { hovered: !1 });
    }
}
class U extends (r = a.PureComponent) {
    render() {
        let { children: e, className: t, innerClassName: n, id: r, ...s } = this.props;
        return a.Children.count(e) > 0
            ? (0, i.jsx)(M.Provider, {
                  value: { id: null != r ? r : '' },
                  children: (0, i.jsx)('div', {
                      className: o()(L.autocomplete, t),
                      children: (0, i.jsx)('div', {
                          className: o()(L.autocompleteInner, n),
                          ...s,
                          children: e
                      })
                  })
              })
            : null;
    }
}
x(
    U,
    'Generic',
    class e extends k {
        renderContent() {
            let { text: e, description: t } = this.props;
            return (0, i.jsxs)(C.RX, {
                children: [(0, i.jsx)(C.z5, { children: (0, i.jsx)(C.BR, { children: e }) }), null != t ? (0, i.jsx)(C.dY, { children: t }) : null]
            });
        }
    }
),
    x(U, 'Loading', function (e) {
        let t = a.useMemo(() => u().random(60, 120), []);
        return (0, i.jsx)('div', {
            className: L.base,
            'aria-busy': !0,
            children: (0, i.jsx)(C.RX, {
                children: (0, i.jsx)(C.z5, {
                    children: (0, i.jsx)(C.BR, {
                        children: (0, i.jsx)('div', {
                            className: L.autocompletePlaceholder,
                            style: { width: t }
                        })
                    })
                })
            })
        });
    }),
    x(U, 'Title', function (e) {
        let { title: t, className: n, children: r } = e,
            s = a.useContext(M);
        return (0, i.jsx)('div', {
            className: L.base,
            children: (0, i.jsxs)(d.Heading, {
                id: P(s.id),
                className: o()(L.contentTitle, n),
                variant: 'heading-deprecated-12/semibold',
                children: [t, r]
            })
        });
    }),
    x(
        U,
        'Divider',
        class e extends k {
            renderContent() {
                let { className: e } = this.props;
                return (0, i.jsx)('div', { className: o()(e, L.divider) });
            }
            constructor(...e) {
                super(...e), x(this, 'layoutClass', L.dividerContainer), x(this, 'selectable', !1);
            }
        }
    ),
    x(
        U,
        'User',
        class e extends k {
            renderContent() {
                var e;
                let { user: t, nick: n, status: r, hidePersonalInformation: a, guildId: s } = this.props,
                    o = null == s ? S.Z.getNickname(t.id) : null;
                return (0, i.jsxs)(C.RX, {
                    children: [
                        (0, i.jsx)(C.Tw, {
                            children: (0, i.jsx)(d.Avatar, {
                                size: d.AvatarSizes.SIZE_24,
                                src: t.getAvatarURL(s, 24),
                                'aria-hidden': !0,
                                status: r
                            })
                        }),
                        (0, i.jsx)(C.z5, { children: (0, i.jsx)(C.BR, { children: null !== (e = null != n ? n : o) && void 0 !== e ? e : N.ZP.getName(t) }) }),
                        (0, i.jsxs)(C.dY, {
                            children: [
                                N.ZP.getUserTag(t, {
                                    mode: 'username',
                                    identifiable: a ? 'never' : 'always'
                                }),
                                a || t.isPomelo()
                                    ? null
                                    : (0, i.jsxs)('span', {
                                          className: L.descriptionDiscriminator,
                                          children: ['#', t.discriminator]
                                      })
                            ]
                        })
                    ]
                });
            }
        }
    ),
    x(
        U,
        'Role',
        class e extends k {
            renderContent() {
                let { role: e, hideDescription: t } = this.props,
                    { colorString: n } = e,
                    r = 'dot' === f.Z.roleStyle,
                    a = 'username' === f.Z.roleStyle && null != n ? { color: n } : void 0;
                return (0, i.jsxs)(C.RX, {
                    children: [
                        (0, i.jsx)(C.z5, {
                            children: (0, i.jsxs)(C.BR, {
                                children: [
                                    r &&
                                        (0, i.jsx)(d.RoleDot, {
                                            className: L.roleDot,
                                            color: n,
                                            tooltip: !1
                                        }),
                                    (0, i.jsxs)('span', {
                                        style: a,
                                        children: ['@', e.name]
                                    })
                                ]
                            })
                        }),
                        t ? null : (0, i.jsx)(C.dY, { children: D.intl.string(D.t['/91tbm']) })
                    ]
                });
            }
        }
    ),
    x(
        U,
        'Channel',
        class e extends k {
            renderContent() {
                let { channel: e, category: t } = this.props,
                    n = e.type === R.d4z.GUILD_CATEGORY ? d.FolderIcon : (0, g.KS)(e);
                return (0, i.jsxs)(C.RX, {
                    children: [null != n && (0, i.jsx)(C.Tw, { children: (0, i.jsx)(n, { className: L.icon }) }), (0, i.jsx)(C.z5, { children: (0, i.jsx)(C.BR, { children: (0, m.F6)(e, y.default, S.Z) }) }), null != t ? (0, i.jsx)(C.dY, { children: t.name }) : null]
                });
            }
        }
    ),
    x(
        U,
        'Command',
        class e extends k {
            renderContent() {
                let { command: e } = this.props;
                return (0, i.jsxs)(C.RX, {
                    children: [
                        (0, i.jsx)(C.Tw, {
                            children: (0, i.jsx)(d.SlashIcon, {
                                size: 'xs',
                                color: 'currentColor',
                                className: L.icon,
                                colorClass: L.iconForeground
                            })
                        }),
                        (0, i.jsx)(C.z5, { children: (0, i.jsx)(C.BR, { children: e.displayName }) }),
                        (0, i.jsx)(C.dY, { children: e.displayDescription })
                    ]
                });
            }
        }
    ),
    x(
        U,
        'NewCommand',
        class e extends k {
            isSelectable() {
                return this.props.command.inputType !== _.iw.PLACEHOLDER;
            }
            renderContent() {
                let { command: e, channel: t, showImage: n, section: r, selected: a } = this.props,
                    { hovered: s } = this.state,
                    o = this.isSelectable();
                return e.inputType === _.iw.PLACEHOLDER
                    ? (0, i.jsx)(h.Z, {})
                    : (0, i.jsx)(p.Z, {
                          command: e,
                          channel: t,
                          showImage: n,
                          showOptions: s || (o && a),
                          section: r,
                          isSelectable: o
                      });
            }
        }
    ),
    x(
        U,
        'Emoji',
        class e extends k {
            renderContent() {
                let { emoji: e, sentinel: t, guild: n } = this.props,
                    r = T.Yk.getSetting(),
                    a =
                        null != e.id || '' !== e.url
                            ? (0, i.jsx)('img', {
                                  alt: '',
                                  className: L.emojiImage,
                                  src:
                                      null != e.id
                                          ? A.ZP.getEmojiURL({
                                                id: e.id,
                                                animated: e.animated && r,
                                                size: O.$U
                                            })
                                          : e.url
                              })
                            : (0, i.jsx)('span', {
                                  className: L.emojiRaw,
                                  children: e.surrogates
                              }),
                    s = null != n ? (0, i.jsx)(C.dY, { children: n.name }) : null;
                return (0, i.jsxs)(C.RX, {
                    children: [
                        (0, i.jsx)(C.Tw, { children: a }),
                        (0, i.jsx)(C.z5, {
                            children: (0, i.jsxs)(C.BR, {
                                children: [t, e.name, t]
                            })
                        }),
                        s
                    ]
                });
            }
            constructor(...e) {
                super(...e), x(this, 'layoutClass', o()(L.autocompleteRowVertical, L.autocompleteRowVerticalSmall));
            }
        }
    ),
    x(
        U,
        'GIFIntegration',
        class e extends k {
            renderContent() {
                let { width: e, height: t, src: n } = this.props;
                return (0, i.jsx)('img', {
                    alt: '',
                    src: n,
                    width: e,
                    height: t
                });
            }
            constructor(...e) {
                super(...e), x(this, 'layoutClass', L.autocompleteRowHorizontal);
            }
        }
    ),
    x(
        U,
        'Sticker',
        class e extends k {
            renderContent() {
                var e, t;
                let n;
                let { queryMatch: r, renderSticker: a, selected: s, sticker: o } = this.props,
                    { hovered: l } = this.state;
                return (
                    (0, I.jl)(o) ? (n = null === (e = v.Z.getStickerPack(o.pack_id)) || void 0 === e ? void 0 : e.name) : (0, I.J8)(o) && (n = null === (t = b.Z.getGuild(o.guild_id)) || void 0 === t ? void 0 : t.name),
                    (0, i.jsxs)(C.RX, {
                        children: [
                            (0, i.jsx)(C.Tw, { children: a(o, l || !0 === s) }),
                            (0, i.jsxs)(C.z5, {
                                children: [(0, i.jsx)(C.BR, { children: o.name }), null != r && (0, i.jsx)(C.wL, { children: D.intl.format(D.t.PAutaW, { queryMatch: r }) })]
                            }),
                            null != n && (0, i.jsx)(C.dY, { children: n })
                        ]
                    })
                );
            }
            constructor(...e) {
                super(...e), x(this, 'layoutClass', o()(L.autocompleteRowVertical, L.autocompleteRowVerticalSmall));
            }
        }
    ),
    x(
        U,
        'EmojiUpsell',
        class e extends k {
            renderContent() {
                return (0, i.jsx)(E.Z, { emojis: this.props.emojis });
            }
        }
    ),
    (t.ZP = U);
