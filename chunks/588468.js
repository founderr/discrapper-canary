n.d(t, {
    DJ: function () {
        return P;
    },
    rp: function () {
        return M;
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
    v = n(887120),
    I = n(926491),
    T = n(378233),
    b = n(695346),
    S = n(430824),
    y = n(699516),
    A = n(594174),
    N = n(768581),
    C = n(51144),
    R = n(965386),
    O = n(981631),
    D = n(185923),
    L = n(388032),
    x = n(488735);
function w(e, t, n) {
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
function P(e) {
    return null != e ? 'autocomplete-'.concat(e) : null;
}
function M(e) {
    return 'autocomplete-'.concat(e, '-title');
}
let k = a.createContext(null);
class U extends a.PureComponent {
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
            className: o()(x.clickable, r, n),
            id: null !== (t = P(a)) && void 0 !== t ? t : void 0,
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
                className: x.base,
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
            w(this, 'selectable', !0),
            w(this, 'layoutClass', x.autocompleteRowVertical),
            w(this, 'handleMouseEnter', () => {
                let { onHover: e, index: t, selected: n } = this.props;
                null == e || n || 'number' != typeof t || e(t);
            }),
            w(this, 'handleClick', (e) => {
                let { onClick: t, index: n } = this.props;
                null != t && 'number' == typeof n && t(n, e);
            }),
            (this.state = { hovered: !1 });
    }
}
class B extends (r = a.PureComponent) {
    render() {
        let { children: e, className: t, innerClassName: n, id: r, ...s } = this.props;
        return a.Children.count(e) > 0
            ? (0, i.jsx)(k.Provider, {
                  value: { id: null != r ? r : '' },
                  children: (0, i.jsx)('div', {
                      className: o()(x.autocomplete, t),
                      children: (0, i.jsx)('div', {
                          className: o()(x.autocompleteInner, n),
                          ...s,
                          children: e
                      })
                  })
              })
            : null;
    }
}
w(
    B,
    'Generic',
    class e extends U {
        renderContent() {
            let { text: e, description: t } = this.props;
            return (0, i.jsxs)(R.RX, {
                children: [(0, i.jsx)(R.z5, { children: (0, i.jsx)(R.BR, { children: e }) }), null != t ? (0, i.jsx)(R.dY, { children: t }) : null]
            });
        }
    }
),
    w(B, 'Loading', function (e) {
        let t = a.useMemo(() => u().random(60, 120), []);
        return (0, i.jsx)('div', {
            className: x.base,
            'aria-busy': !0,
            children: (0, i.jsx)(R.RX, {
                children: (0, i.jsx)(R.z5, {
                    children: (0, i.jsx)(R.BR, {
                        children: (0, i.jsx)('div', {
                            className: x.autocompletePlaceholder,
                            style: { width: t }
                        })
                    })
                })
            })
        });
    }),
    w(B, 'Title', function (e) {
        let { title: t, className: n, children: r } = e,
            s = a.useContext(k);
        return (0, i.jsx)('div', {
            className: x.base,
            children: (0, i.jsxs)(d.Heading, {
                id: M(s.id),
                className: o()(x.contentTitle, n),
                variant: 'heading-deprecated-12/semibold',
                children: [t, r]
            })
        });
    }),
    w(
        B,
        'Divider',
        class e extends U {
            renderContent() {
                let { className: e } = this.props;
                return (0, i.jsx)('div', { className: o()(e, x.divider) });
            }
            constructor(...e) {
                super(...e), w(this, 'layoutClass', x.dividerContainer), w(this, 'selectable', !1);
            }
        }
    ),
    w(
        B,
        'User',
        class e extends U {
            renderContent() {
                var e;
                let { user: t, nick: n, status: r, hidePersonalInformation: a, guildId: s } = this.props,
                    o = null == s ? y.Z.getNickname(t.id) : null;
                return (0, i.jsxs)(R.RX, {
                    children: [
                        (0, i.jsx)(R.Tw, {
                            children: (0, i.jsx)(d.Avatar, {
                                size: d.AvatarSizes.SIZE_24,
                                src: t.getAvatarURL(s, 24),
                                'aria-hidden': !0,
                                status: r
                            })
                        }),
                        (0, i.jsx)(R.z5, { children: (0, i.jsx)(R.BR, { children: null !== (e = null != n ? n : o) && void 0 !== e ? e : C.ZP.getName(t) }) }),
                        (0, i.jsxs)(R.dY, {
                            children: [
                                C.ZP.getUserTag(t, {
                                    mode: 'username',
                                    identifiable: a ? 'never' : 'always'
                                }),
                                a || t.isPomelo()
                                    ? null
                                    : (0, i.jsxs)('span', {
                                          className: x.descriptionDiscriminator,
                                          children: ['#', t.discriminator]
                                      })
                            ]
                        })
                    ]
                });
            }
        }
    ),
    w(
        B,
        'Role',
        class e extends U {
            renderContent() {
                let { role: e, hideDescription: t } = this.props,
                    { colorString: n } = e,
                    r = 'dot' === f.Z.roleStyle,
                    a = 'username' === f.Z.roleStyle && null != n ? { color: n } : void 0;
                return (0, i.jsxs)(R.RX, {
                    children: [
                        (0, i.jsx)(R.z5, {
                            children: (0, i.jsxs)(R.BR, {
                                children: [
                                    r &&
                                        (0, i.jsx)(d.RoleDot, {
                                            className: x.roleDot,
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
                        t ? null : (0, i.jsx)(R.dY, { children: L.intl.string(L.t['/91tbm']) })
                    ]
                });
            }
        }
    ),
    w(
        B,
        'Channel',
        class e extends U {
            renderContent() {
                let { channel: e, category: t } = this.props,
                    n = e.type === O.d4z.GUILD_CATEGORY ? d.FolderIcon : (0, g.KS)(e);
                return (0, i.jsxs)(R.RX, {
                    children: [null != n && (0, i.jsx)(R.Tw, { children: (0, i.jsx)(n, { className: x.icon }) }), (0, i.jsx)(R.z5, { children: (0, i.jsx)(R.BR, { children: (0, m.F6)(e, A.default, y.Z) }) }), null != t ? (0, i.jsx)(R.dY, { children: t.name }) : null]
                });
            }
        }
    ),
    w(
        B,
        'Command',
        class e extends U {
            renderContent() {
                let { command: e } = this.props;
                return (0, i.jsxs)(R.RX, {
                    children: [
                        (0, i.jsx)(R.Tw, {
                            children: (0, i.jsx)(d.SlashIcon, {
                                size: 'xs',
                                color: 'currentColor',
                                className: x.icon,
                                colorClass: x.iconForeground
                            })
                        }),
                        (0, i.jsx)(R.z5, { children: (0, i.jsx)(R.BR, { children: e.displayName }) }),
                        (0, i.jsx)(R.dY, { children: e.displayDescription })
                    ]
                });
            }
        }
    ),
    w(
        B,
        'NewCommand',
        class e extends U {
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
    w(
        B,
        'Emoji',
        class e extends U {
            renderContent() {
                let { emoji: e, sentinel: t, guild: n } = this.props,
                    r = b.Yk.getSetting(),
                    a =
                        null != e.id || '' !== e.url
                            ? (0, i.jsx)('img', {
                                  alt: '',
                                  className: x.emojiImage,
                                  src:
                                      null != e.id
                                          ? N.ZP.getEmojiURL({
                                                id: e.id,
                                                animated: e.animated && r,
                                                size: D.$U
                                            })
                                          : e.url
                              })
                            : (0, i.jsx)('span', {
                                  className: x.emojiRaw,
                                  children: e.surrogates
                              }),
                    s = null != n ? (0, i.jsx)(R.dY, { children: n.name }) : null;
                return (0, i.jsxs)(R.RX, {
                    children: [
                        (0, i.jsx)(R.Tw, { children: a }),
                        (0, i.jsx)(R.z5, {
                            children: (0, i.jsxs)(R.BR, {
                                children: [t, e.name, t]
                            })
                        }),
                        s
                    ]
                });
            }
            constructor(...e) {
                super(...e), w(this, 'layoutClass', o()(x.autocompleteRowVertical, x.autocompleteRowVerticalSmall));
            }
        }
    ),
    w(
        B,
        'GIFIntegration',
        class e extends U {
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
                super(...e), w(this, 'layoutClass', x.autocompleteRowHorizontal);
            }
        }
    ),
    w(
        B,
        'Sticker',
        class e extends U {
            renderContent() {
                var e, t;
                let n;
                let { queryMatch: r, renderSticker: a, selected: s, sticker: o } = this.props,
                    { hovered: l } = this.state;
                return (
                    (0, T.jl)(o) ? (n = null === (e = I.Z.getStickerPack(o.pack_id)) || void 0 === e ? void 0 : e.name) : (0, T.J8)(o) && (n = null === (t = S.Z.getGuild(o.guild_id)) || void 0 === t ? void 0 : t.name),
                    (0, i.jsxs)(R.RX, {
                        children: [
                            (0, i.jsx)(R.Tw, { children: a(o, l || !0 === s) }),
                            (0, i.jsxs)(R.z5, {
                                children: [(0, i.jsx)(R.BR, { children: o.name }), null != r && (0, i.jsx)(R.wL, { children: L.intl.format(L.t.PAutaW, { queryMatch: r }) })]
                            }),
                            null != n && (0, i.jsx)(R.dY, { children: n })
                        ]
                    })
                );
            }
            constructor(...e) {
                super(...e), w(this, 'layoutClass', o()(x.autocompleteRowVertical, x.autocompleteRowVerticalSmall));
            }
        }
    ),
    w(
        B,
        'EmojiUpsell',
        class e extends U {
            renderContent() {
                return (0, i.jsx)(E.Z, { emojis: this.props.emojis });
            }
        }
    ),
    w(
        B,
        'Soundmoji',
        class e extends U {
            renderContent() {
                return (0, i.jsx)(v.Z, { ...this.props });
            }
        }
    ),
    (t.ZP = B);
