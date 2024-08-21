s.d(n, {
    $W: function () {
        return A;
    },
    Mx: function () {
        return Z;
    },
    PZ: function () {
        return T;
    },
    h4: function () {
        return S;
    },
    ic: function () {
        return j;
    },
    n5: function () {
        return L;
    },
    rU: function () {
        return R;
    },
    s8: function () {
        return D;
    }
}),
    s(47120);
var t,
    r = s(735250),
    i = s(470079),
    a = s(481060),
    l = s(815372),
    c = s(43267),
    o = s(933557),
    d = s(471445),
    u = s(16206),
    h = s(790145),
    E = s(245216),
    p = s(925329),
    m = s(565138),
    _ = s(754688),
    C = s(237583),
    f = s(430824),
    N = s(699516),
    x = s(594174),
    I = s(51144),
    g = s(689938),
    b = s(900601);
function M(e, n, s) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = s),
        e
    );
}
class v extends i.PureComponent {
    componentDidMount() {
        let { focused: e, onFocus: n } = this.props,
            { node: s } = this;
        e && null != s && n(s);
    }
    componentDidUpdate(e) {
        let { focused: n, onFocus: s } = this.props,
            { node: t } = this;
        null != t && n && !e.focused && s(t);
    }
    render() {
        let { focused: e, children: n, score: s, onContextMenu: t, id: i, 'aria-label': l } = this.props;
        return (0, r.jsxs)(a.Clickable, {
            role: 'option',
            id: i,
            'aria-label': l,
            'aria-selected': e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: b.result,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: t,
            children: [
                n,
                null != s
                    ? (0, r.jsx)('div', {
                          className: b.score,
                          children: s >> 0
                      })
                    : null
            ]
        });
    }
    constructor(...e) {
        super(...e),
            M(this, 'node', void 0),
            M(this, 'handleClick', (e) => {
                e.preventDefault();
                let { onClick: n } = this.props,
                    { node: s } = this;
                null != s && n(e, s);
            }),
            M(this, 'handleMouseEnter', (e) => {
                let { onMouseEnter: n } = this.props,
                    { node: s } = this;
                null != s && n(e, s);
            }),
            M(this, 'setRef', (e) => {
                this.node = e;
            });
    }
}
class j extends i.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, r.jsx)('div', {
            className: b.guildIconContainer,
            children: (0, r.jsx)(m.Z, {
                tabIndex: -1,
                guild: e,
                size: m.Z.Sizes.MINI,
                className: b.guildIcon
            })
        });
    }
    renderName() {
        let { guild: e } = this.props;
        return (0, r.jsx)('div', {
            className: b.name,
            children: (0, r.jsx)('span', {
                className: b.match,
                children: e.name
            })
        });
    }
    renderContent() {
        let { unread: e, children: n } = this.props;
        return (0, r.jsxs)('div', {
            className: e ? b.contentUnread : b.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, r.jsx)('div', {
                    className: b.misc,
                    children: n
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { guild: e } = this.props;
        return g.Z.Messages.QUICK_SWITCHER_RESULTS_GUILD_LABEL.format({ name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: n, onFocus: s, onContextMenu: t, focused: i, score: a, id: l } = this.props;
        return (0, r.jsx)(v, {
            id: l,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: n,
            onFocus: s,
            onContextMenu: t,
            focused: i,
            score: a,
            children: this.renderContent()
        });
    }
}
class A extends (t = i.Component) {
    renderIcon() {
        var e;
        let { channel: n } = this.props,
            s = (0, d.KS)(n);
        if (null == s) return null;
        let t = null !== (e = (0, u.Z)(n)) && void 0 !== e ? e : '';
        return (0, r.jsx)('div', {
            className: b.iconContainer,
            role: 'img',
            'aria-label': t,
            children: (0, r.jsx)(s, {
                className: b.icon,
                size: 'xs',
                color: 'currentColor'
            })
        });
    }
    renderName() {
        let e, n;
        let { mentions: s, category: t, channel: i } = this.props;
        return (
            null != s &&
                s > 0 &&
                (e = (0, r.jsx)(h.Z, {
                    className: b.badge,
                    value: s
                })),
            null != t &&
                (n = (0, r.jsx)('span', {
                    className: b.note,
                    children: (0, o.F6)(t, x.default, N.Z)
                })),
            (0, r.jsxs)('div', {
                className: b.name,
                children: [
                    (0, r.jsx)('span', {
                        className: b.match,
                        children: (0, o.F6)(i, x.default, N.Z)
                    }),
                    e,
                    this.renderVoiceStates(),
                    n
                ]
            })
        );
    }
    renderVoiceStates() {
        let { voiceStates: e, channel: n } = this.props;
        return null == e
            ? null
            : (0, r.jsx)(C.Z, {
                  className: b.voiceSummaryContainer,
                  guildId: n.guild_id,
                  users: e.map((e) => {
                      let { user: n } = e;
                      return { user: n };
                  }),
                  max: 4
              });
    }
    renderContent() {
        let { unread: e, mentions: n, children: s } = this.props;
        return (0, r.jsxs)('div', {
            'aria-hidden': !0,
            className: e || (null != n && n > 0) ? b.contentUnread : b.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, r.jsx)('div', {
                    className: b.misc,
                    children: s
                })
            ]
        });
    }
    getAccessibilityLabel() {
        var e;
        let { channel: n } = this.props,
            s = null === (e = f.Z.getGuild(this.props.channel.guild_id)) || void 0 === e ? void 0 : e.name,
            t = (0, o.F6)(n, x.default, N.Z),
            r = (0, u.Z)(n);
        return g.Z.Messages.QUICK_SWITCHER_RESULTS_CHANNEL_LABEL.format({
            name: t,
            type: r,
            guild: s
        });
    }
    render() {
        let { onMouseEnter: e, onClick: n, onFocus: s, onContextMenu: t, focused: i, score: a, id: l } = this.props;
        return (0, r.jsx)(v, {
            id: l,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: n,
            onFocus: s,
            onContextMenu: t,
            focused: i,
            score: a,
            children: this.renderContent()
        });
    }
}
M(A, 'defaultProps', { unread: !1 });
class T extends i.Component {
    renderIcon() {
        let { channel: e } = this.props;
        return (0, r.jsx)('div', {
            className: b.dmIconContainer,
            children: (0, r.jsx)(a.Avatar, {
                src: (0, c.x)(e),
                size: a.AvatarSizes.SIZE_20,
                'aria-hidden': !0
            })
        });
    }
    renderName() {
        let e;
        let { mentions: n, channel: s } = this.props;
        return (
            null != n &&
                n > 0 &&
                (e = (0, r.jsx)(h.Z, {
                    className: b.badge,
                    value: n
                })),
            (0, r.jsxs)('div', {
                className: b.name,
                children: [
                    (0, r.jsx)('span', {
                        className: b.match,
                        children: (0, o.F6)(s, x.default, N.Z)
                    }),
                    e
                ]
            })
        );
    }
    renderContent() {
        let { mentions: e, children: n } = this.props;
        return (0, r.jsxs)('div', {
            className: null != e && e > 0 ? b.contentUnread : b.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, r.jsx)('div', {
                    className: b.misc,
                    children: n
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: n } = this.props,
            s = (0, o.F6)(e, x.default, N.Z);
        return null != n && n > 0
            ? g.Z.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_UNREAD_LABEL.format({
                  name: s,
                  mentions: n
              })
            : g.Z.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_LABEL.format({ name: s });
    }
    render() {
        let { onMouseEnter: e, onClick: n, onFocus: s, onContextMenu: t, focused: i, score: a, id: l } = this.props;
        return (0, r.jsx)(v, {
            id: l,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: n,
            onFocus: s,
            onContextMenu: t,
            focused: i,
            score: a,
            children: this.renderContent()
        });
    }
}
class L extends i.Component {
    renderIcon() {
        let { user: e } = this.props;
        return (0, r.jsx)('div', {
            className: b.iconContainer,
            children: (0, r.jsx)(a.Avatar, {
                src: e.getAvatarURL(void 0, 20),
                'aria-hidden': !0,
                size: a.AvatarSizes.SIZE_20
            })
        });
    }
    getDisplayNickname() {
        let e;
        let { user: n, comparator: s } = this.props,
            t = N.Z.getNickname(n.id);
        return ((e = s === n.tag || null == s || '' === s ? n.username : s) === n.username || e === n.id) && (e = null != t ? t : I.ZP.getName(n)), e;
    }
    renderName() {
        let e;
        let { user: n, mentions: s } = this.props,
            t = this.getDisplayNickname();
        return (
            null != s &&
                s > 0 &&
                (e = (0, r.jsx)(h.Z, {
                    className: b.badge,
                    value: s
                })),
            (0, r.jsxs)('div', {
                className: b.name,
                children: [
                    (0, r.jsx)('span', {
                        className: b.match,
                        children: t
                    }),
                    e,
                    (0, r.jsx)('span', {
                        className: b.username,
                        children: I.ZP.getUserTag(n)
                    })
                ]
            })
        );
    }
    renderContent() {
        let { children: e, mentions: n } = this.props;
        return (0, r.jsxs)('div', {
            className: null != n && n > 0 ? b.contentUnread : b.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, r.jsx)('div', {
                    className: b.misc,
                    children: e
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { mentions: e, user: n } = this.props,
            s = this.getDisplayNickname(),
            t = I.ZP.getUserTag(n);
        return null != e && e > 0
            ? g.Z.Messages.QUICK_SWITCHER_RESULTS_USER_UNREAD_LABEL.format({
                  name: s,
                  id: t,
                  mentions: e
              })
            : g.Z.Messages.QUICK_SWITCHER_RESULTS_USER_LABEL.format({
                  name: s,
                  id: t
              });
    }
    render() {
        let { onMouseEnter: e, onClick: n, onFocus: s, onContextMenu: t, focused: i, score: a, id: l } = this.props;
        return (0, r.jsx)(v, {
            id: l,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: n,
            onFocus: s,
            onContextMenu: t,
            focused: i,
            score: a,
            children: this.renderContent()
        });
    }
}
class Z extends i.Component {
    renderContent() {
        let { children: e, application: n } = this.props;
        return (0, r.jsxs)('div', {
            className: b.contentDefault,
            children: [
                (0, r.jsx)('div', {
                    className: b.iconContainer,
                    children: (0, r.jsx)(p.Z, {
                        tabIndex: -1,
                        className: b.gameIcon,
                        game: n,
                        size: b.gameIconSize
                    })
                }),
                n.name,
                (0, r.jsx)('div', {
                    className: b.misc,
                    children: e
                })
            ]
        });
    }
    render() {
        let { onMouseEnter: e, onClick: n, onFocus: s, focused: t, id: i } = this.props;
        return (0, r.jsx)(v, {
            id: i,
            onMouseEnter: e,
            onClick: n,
            onFocus: s,
            focused: t,
            children: this.renderContent()
        });
    }
}
class S extends i.Component {
    render() {
        return (0, r.jsx)('div', {
            className: b.__invalid_resultDefault,
            children: (0, r.jsx)('div', {
                className: b.contentDefault,
                children: (0, r.jsx)('div', {
                    className: b.header,
                    children: this.props.children
                })
            })
        });
    }
}
class R extends i.Component {
    renderContent() {
        let e, n;
        let { link: s, children: t } = this.props,
            i = (0, _.Qj)(s.path);
        return (
            null == i || void 0 === i.messageId
                ? ((e = g.Z.Messages.QUICKSWITCHER_LINK_UNKNOWN),
                  (n = (0, r.jsx)(a.LinkIcon, {
                      size: 'xs',
                      color: 'currentColor'
                  })))
                : (0, _.VO)(i)
                  ? ((e = g.Z.Messages.QUICKSWITCHER_LINK_MESSAGE),
                    (n = (0, r.jsx)(E.Z, {
                        size: 'xs',
                        color: 'currentColor'
                    })))
                  : ((e = g.Z.Messages.QUICKSWITCHER_LINK_NO_ACCESS),
                    (n = (0, r.jsx)(a.LockIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }))),
            (0, r.jsxs)('div', {
                className: b.contentDefault,
                children: [
                    (0, r.jsx)('div', {
                        className: b.iconContainer,
                        children: n
                    }),
                    e,
                    (0, r.jsx)('div', {
                        className: b.misc,
                        children: t
                    })
                ]
            })
        );
    }
    render() {
        let { onMouseEnter: e, onClick: n, onFocus: s, onContextMenu: t, focused: i, score: a, id: l } = this.props;
        return (0, r.jsx)(v, {
            id: l,
            onMouseEnter: e,
            onClick: n,
            onFocus: s,
            onContextMenu: t,
            focused: i,
            score: a,
            children: this.renderContent()
        });
    }
}
class D extends i.Component {
    renderContent() {
        let e;
        let { navigationRecord: n, children: s } = this.props,
            t = '';
        switch (n.type) {
            case l.Ky.SHOP:
                (t = g.Z.Messages.COLLECTIBLES_SHOP),
                    (e = (0, r.jsx)(a.ShopIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case l.Ky.NITRO_HOME:
                (t = g.Z.Messages.PREMIUM),
                    (e = (0, r.jsx)(a.NitroWheelIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            default:
                (t = n.id),
                    (e = (0, r.jsx)(a.LinkIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
        }
        return (0, r.jsxs)('div', {
            className: b.contentDefault,
            children: [
                (0, r.jsx)('div', {
                    className: b.iconContainer,
                    children: e
                }),
                t,
                (0, r.jsx)('div', {
                    className: b.misc,
                    children: s
                })
            ]
        });
    }
    render() {
        let { onMouseEnter: e, onClick: n, onFocus: s, onContextMenu: t, focused: i, score: a, id: l } = this.props;
        return (0, r.jsx)(v, {
            id: l,
            onMouseEnter: e,
            onClick: n,
            onFocus: s,
            onContextMenu: t,
            focused: i,
            score: a,
            children: this.renderContent()
        });
    }
}
