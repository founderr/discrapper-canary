n.d(t, {
    DJ: function () {
        return w;
    },
    rp: function () {
        return x;
    }
});
var r,
    i = n(411104);
var a = n(47120);
var o = n(735250),
    s = n(470079),
    l = n(120356),
    u = n.n(l),
    c = n(392711),
    d = n.n(c),
    _ = n(91192),
    E = n(481060),
    f = n(607070),
    h = n(895924),
    p = n(237375),
    m = n(342687),
    I = n(933557),
    T = n(471445),
    g = n(511618),
    S = n(926491),
    A = n(378233),
    v = n(695346),
    N = n(430824),
    O = n(699516),
    R = n(594174),
    C = n(768581),
    y = n(51144),
    b = n(965386),
    L = n(981631),
    D = n(185923),
    M = n(689938),
    P = n(980213);
function U(e, t, n) {
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
function x(e) {
    return 'autocomplete-'.concat(e, '-title');
}
let G = s.createContext(null);
class k extends s.PureComponent {
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
                props: { className: r, index: i, selected: a }
            } = this,
            s = this.isSelectable();
        return (0, o.jsx)(E.Clickable, {
            ...e,
            className: u()(P.clickable, r, n),
            id: null !== (t = w(i)) && void 0 !== t ? t : void 0,
            onClick: s ? this.handleClick : void 0,
            onMouseMove: s
                ? () => {
                      this.setState({ hovered: !0 }), this.handleMouseEnter();
                  }
                : void 0,
            onMouseLeave: s ? () => this.setState({ hovered: !1 }) : void 0,
            role: 'option',
            'aria-disabled': !s,
            'aria-selected': s && a,
            children: (0, o.jsx)('div', {
                className: P.base,
                children: this.renderContent()
            })
        });
    }
    render() {
        let { index: e } = this.props;
        return this.isSelectable()
            ? (0, o.jsx)(_.mh, {
                  id: ''.concat(e),
                  children: (e) => this.renderClickable(e)
              })
            : this.renderClickable();
    }
    constructor(e) {
        super(e),
            U(this, 'selectable', !0),
            U(this, 'layoutClass', P.autocompleteRowVertical),
            U(this, 'handleMouseEnter', () => {
                let { onHover: e, index: t, selected: n } = this.props;
                null == e || n || 'number' != typeof t || e(t);
            }),
            U(this, 'handleClick', (e) => {
                let { onClick: t, index: n } = this.props;
                null != t && 'number' == typeof n && t(n, e);
            }),
            (this.state = { hovered: !1 });
    }
}
class B extends k {
    renderContent() {
        let { text: e, description: t } = this.props;
        return (0, o.jsxs)(b.RX, {
            children: [(0, o.jsx)(b.z5, { children: (0, o.jsx)(b.BR, { children: e }) }), null != t ? (0, o.jsx)(b.dY, { children: t }) : null]
        });
    }
}
function F(e) {
    let t = s.useMemo(() => d().random(60, 120), []);
    return (0, o.jsx)('div', {
        className: P.base,
        'aria-busy': !0,
        children: (0, o.jsx)(b.RX, {
            children: (0, o.jsx)(b.z5, {
                children: (0, o.jsx)(b.BR, {
                    children: (0, o.jsx)('div', {
                        className: P.autocompletePlaceholder,
                        style: { width: t }
                    })
                })
            })
        })
    });
}
function Z(e) {
    let { title: t, className: n, children: r } = e,
        i = s.useContext(G);
    return (0, o.jsx)('div', {
        className: P.base,
        children: (0, o.jsxs)(E.Heading, {
            id: x(i.id),
            className: u()(P.contentTitle, n),
            variant: 'heading-deprecated-12/semibold',
            children: [t, r]
        })
    });
}
class V extends k {
    renderContent() {
        let { className: e } = this.props;
        return (0, o.jsx)('div', { className: u()(e, P.divider) });
    }
    constructor(...e) {
        super(...e), U(this, 'layoutClass', P.dividerContainer), U(this, 'selectable', !1);
    }
}
class H extends k {
    renderContent() {
        var e;
        let { user: t, nick: n, status: r, hidePersonalInformation: i, guildId: a } = this.props,
            s = null == a ? O.Z.getNickname(t.id) : null;
        return (0, o.jsxs)(b.RX, {
            children: [
                (0, o.jsx)(b.Tw, {
                    children: (0, o.jsx)(E.Avatar, {
                        size: E.AvatarSizes.SIZE_24,
                        src: t.getAvatarURL(a, 24),
                        'aria-hidden': !0,
                        status: r
                    })
                }),
                (0, o.jsx)(b.z5, { children: (0, o.jsx)(b.BR, { children: null !== (e = null != n ? n : s) && void 0 !== e ? e : y.ZP.getName(t) }) }),
                (0, o.jsxs)(b.dY, {
                    children: [
                        y.ZP.getUserTag(t, {
                            mode: 'username',
                            identifiable: i ? 'never' : 'always'
                        }),
                        i || t.isPomelo()
                            ? null
                            : (0, o.jsxs)('span', {
                                  className: P.descriptionDiscriminator,
                                  children: ['#', t.discriminator]
                              })
                    ]
                })
            ]
        });
    }
}
class Y extends k {
    renderContent() {
        let { role: e, hideDescription: t } = this.props,
            { colorString: n } = e,
            r = 'dot' === f.Z.roleStyle,
            i = 'username' === f.Z.roleStyle && null != n ? { color: n } : void 0;
        return (0, o.jsxs)(b.RX, {
            children: [
                (0, o.jsx)(b.z5, {
                    children: (0, o.jsxs)(b.BR, {
                        children: [
                            r &&
                                (0, o.jsx)(E.RoleDot, {
                                    className: P.roleDot,
                                    color: n,
                                    tooltip: !1
                                }),
                            (0, o.jsxs)('span', {
                                style: i,
                                children: ['@', e.name]
                            })
                        ]
                    })
                }),
                t ? null : (0, o.jsx)(b.dY, { children: M.Z.Messages.MENTION_USERS_WITH_ROLE })
            ]
        });
    }
}
class j extends k {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === L.d4z.GUILD_CATEGORY ? E.FolderIcon : (0, T.KS)(e);
        return (0, o.jsxs)(b.RX, {
            children: [null != n && (0, o.jsx)(b.Tw, { children: (0, o.jsx)(n, { className: P.icon }) }), (0, o.jsx)(b.z5, { children: (0, o.jsx)(b.BR, { children: (0, I.F6)(e, R.default, O.Z) }) }), null != t ? (0, o.jsx)(b.dY, { children: t.name }) : null]
        });
    }
}
class W extends k {
    renderContent() {
        let { command: e } = this.props;
        return (0, o.jsxs)(b.RX, {
            children: [
                (0, o.jsx)(b.Tw, {
                    children: (0, o.jsx)(E.SlashIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: P.icon,
                        colorClass: P.iconForeground
                    })
                }),
                (0, o.jsx)(b.z5, { children: (0, o.jsx)(b.BR, { children: e.displayName }) }),
                (0, o.jsx)(b.dY, { children: e.displayDescription })
            ]
        });
    }
}
class K extends k {
    isSelectable() {
        return this.props.command.inputType !== h.iw.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: t, showImage: n, section: r, selected: i } = this.props,
            { hovered: a } = this.state,
            s = this.isSelectable();
        return e.inputType === h.iw.PLACEHOLDER
            ? (0, o.jsx)(m.Z, {})
            : (0, o.jsx)(p.Z, {
                  command: e,
                  channel: t,
                  showImage: n,
                  showOptions: a || (s && i),
                  section: r,
                  isSelectable: s
              });
    }
}
class z extends k {
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            r = v.Yk.getSetting(),
            i =
                null != e.id || '' !== e.url
                    ? (0, o.jsx)('img', {
                          alt: '',
                          className: P.emojiImage,
                          src:
                              null != e.id
                                  ? C.ZP.getEmojiURL({
                                        id: e.id,
                                        animated: e.animated && r,
                                        size: D.$U
                                    })
                                  : e.url
                      })
                    : (0, o.jsx)('span', {
                          className: P.emojiRaw,
                          children: e.surrogates
                      }),
            a = null != n ? (0, o.jsx)(b.dY, { children: n.name }) : null;
        return (0, o.jsxs)(b.RX, {
            children: [
                (0, o.jsx)(b.Tw, { children: i }),
                (0, o.jsx)(b.z5, {
                    children: (0, o.jsxs)(b.BR, {
                        children: [t, e.name, t]
                    })
                }),
                a
            ]
        });
    }
    constructor(...e) {
        super(...e), U(this, 'layoutClass', u()(P.autocompleteRowVertical, P.autocompleteRowVerticalSmall));
    }
}
class q extends k {
    renderContent() {
        var e, t;
        let n;
        let { queryMatch: r, renderSticker: i, selected: a, sticker: s } = this.props,
            { hovered: l } = this.state;
        return (
            (0, A.jl)(s) ? (n = null === (e = S.Z.getStickerPack(s.pack_id)) || void 0 === e ? void 0 : e.name) : (0, A.J8)(s) && (n = null === (t = N.Z.getGuild(s.guild_id)) || void 0 === t ? void 0 : t.name),
            (0, o.jsxs)(b.RX, {
                children: [
                    (0, o.jsx)(b.Tw, { children: i(s, l || !0 === a) }),
                    (0, o.jsxs)(b.z5, {
                        children: [(0, o.jsx)(b.BR, { children: s.name }), null != r && (0, o.jsx)(b.wL, { children: M.Z.Messages.AUTOCOMPLETE_STICKERS_QUERY_MATCH.format({ queryMatch: r }) })]
                    }),
                    null != n && (0, o.jsx)(b.dY, { children: n })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e), U(this, 'layoutClass', u()(P.autocompleteRowVertical, P.autocompleteRowVerticalSmall));
    }
}
class Q extends k {
    renderContent() {
        let { width: e, height: t, src: n } = this.props;
        return (0, o.jsx)('img', {
            alt: '',
            src: n,
            width: e,
            height: t
        });
    }
    constructor(...e) {
        super(...e), U(this, 'layoutClass', P.autocompleteRowHorizontal);
    }
}
class X extends k {
    renderContent() {
        return (0, o.jsx)(g.Z, { emojis: this.props.emojis });
    }
}
class $ extends (r = s.PureComponent) {
    render() {
        let { children: e, className: t, innerClassName: n, id: r, ...i } = this.props;
        return s.Children.count(e) > 0
            ? (0, o.jsx)(G.Provider, {
                  value: { id: null != r ? r : '' },
                  children: (0, o.jsx)('div', {
                      className: u()(P.autocomplete, t),
                      children: (0, o.jsx)('div', {
                          className: u()(P.autocompleteInner, n),
                          ...i,
                          children: e
                      })
                  })
              })
            : null;
    }
}
U($, 'Generic', B), U($, 'Loading', F), U($, 'Title', Z), U($, 'Divider', V), U($, 'User', H), U($, 'Role', Y), U($, 'Channel', j), U($, 'Command', W), U($, 'NewCommand', K), U($, 'Emoji', z), U($, 'GIFIntegration', Q), U($, 'Sticker', q), U($, 'EmojiUpsell', X), (t.ZP = $);
