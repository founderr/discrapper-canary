t.d(n, {
    $W: function () {
        return M;
    },
    Mx: function () {
        return k;
    },
    PZ: function () {
        return Z;
    },
    h4: function () {
        return P;
    },
    ic: function () {
        return z;
    },
    n5: function () {
        return D;
    },
    rU: function () {
        return _;
    },
    s8: function () {
        return A;
    }
}),
    t(47120);
var s,
    r = t(200651),
    i = t(192379),
    l = t(481060),
    a = t(815372),
    o = t(43267),
    c = t(933557),
    d = t(471445),
    u = t(16206),
    h = t(790145),
    p = t(925329),
    m = t(565138),
    x = t(754688),
    f = t(237583),
    C = t(430824),
    g = t(699516),
    j = t(594174),
    N = t(51144),
    v = t(388032),
    b = t(30352);
function I(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
class E extends i.PureComponent {
    componentDidMount() {
        let { focused: e, onFocus: n } = this.props,
            { node: t } = this;
        e && null != t && n(t);
    }
    componentDidUpdate(e) {
        let { focused: n, onFocus: t } = this.props,
            { node: s } = this;
        null != s && n && !e.focused && t(s);
    }
    render() {
        let { focused: e, children: n, score: t, onContextMenu: s, id: i, 'aria-label': a } = this.props;
        return (0, r.jsxs)(l.Clickable, {
            role: 'option',
            id: i,
            'aria-label': a,
            'aria-selected': e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: b.result,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: s,
            children: [
                n,
                null != t
                    ? (0, r.jsx)('div', {
                          className: b.score,
                          children: t >> 0
                      })
                    : null
            ]
        });
    }
    constructor(...e) {
        super(...e),
            I(this, 'node', void 0),
            I(this, 'handleClick', (e) => {
                e.preventDefault();
                let { onClick: n } = this.props,
                    { node: t } = this;
                null != t && n(e, t);
            }),
            I(this, 'handleMouseEnter', (e) => {
                let { onMouseEnter: n } = this.props,
                    { node: t } = this;
                null != t && n(e, t);
            }),
            I(this, 'setRef', (e) => {
                this.node = e;
            });
    }
}
class z extends i.Component {
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
        return v.intl.formatToPlainString(v.t.WVq3Li, { name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: n, onFocus: t, onContextMenu: s, focused: i, score: l, id: a } = this.props;
        return (0, r.jsx)(E, {
            id: a,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: s,
            focused: i,
            score: l,
            children: this.renderContent()
        });
    }
}
class M extends (s = i.Component) {
    renderIcon() {
        var e;
        let { channel: n } = this.props,
            t = (0, d.KS)(n);
        if (null == t) return null;
        let s = null !== (e = (0, u.Z)(n)) && void 0 !== e ? e : '';
        return (0, r.jsx)('div', {
            className: b.iconContainer,
            role: 'img',
            'aria-label': s,
            children: (0, r.jsx)(t, {
                className: b.icon,
                size: 'xs',
                color: 'currentColor'
            })
        });
    }
    renderName() {
        let e, n;
        let { mentions: t, category: s, channel: i } = this.props;
        return (
            null != t &&
                t > 0 &&
                (e = (0, r.jsx)(h.Z, {
                    className: b.badge,
                    value: t
                })),
            null != s &&
                (n = (0, r.jsx)('span', {
                    className: b.note,
                    children: (0, c.F6)(s, j.default, g.Z)
                })),
            (0, r.jsxs)('div', {
                className: b.name,
                children: [
                    (0, r.jsx)('span', {
                        className: b.match,
                        children: (0, c.F6)(i, j.default, g.Z)
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
            : (0, r.jsx)(f.Z, {
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
        let { unread: e, mentions: n, children: t } = this.props;
        return (0, r.jsxs)('div', {
            'aria-hidden': !0,
            className: e || (null != n && n > 0) ? b.contentUnread : b.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, r.jsx)('div', {
                    className: b.misc,
                    children: t
                })
            ]
        });
    }
    getAccessibilityLabel() {
        var e;
        let { channel: n } = this.props,
            t = null === (e = C.Z.getGuild(this.props.channel.guild_id)) || void 0 === e ? void 0 : e.name,
            s = (0, c.F6)(n, j.default, g.Z),
            r = (0, u.Z)(n);
        return v.intl.formatToPlainString(v.t['Vw/da2'], {
            name: s,
            type: r,
            guild: t
        });
    }
    render() {
        let { onMouseEnter: e, onClick: n, onFocus: t, onContextMenu: s, focused: i, score: l, id: a } = this.props;
        return (0, r.jsx)(E, {
            id: a,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: s,
            focused: i,
            score: l,
            children: this.renderContent()
        });
    }
}
I(M, 'defaultProps', { unread: !1 });
class Z extends i.Component {
    renderIcon() {
        let { channel: e } = this.props;
        return (0, r.jsx)('div', {
            className: b.dmIconContainer,
            children: (0, r.jsx)(l.Avatar, {
                src: (0, o.x)(e),
                size: l.AvatarSizes.SIZE_20,
                'aria-hidden': !0
            })
        });
    }
    renderName() {
        let e;
        let { mentions: n, channel: t } = this.props;
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
                        children: (0, c.F6)(t, j.default, g.Z)
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
            t = (0, c.F6)(e, j.default, g.Z);
        return null != n && n > 0
            ? v.intl.formatToPlainString(v.t.LYdVfH, {
                  name: t,
                  mentions: n
              })
            : v.intl.formatToPlainString(v.t.lLSbnp, { name: t });
    }
    render() {
        let { onMouseEnter: e, onClick: n, onFocus: t, onContextMenu: s, focused: i, score: l, id: a } = this.props;
        return (0, r.jsx)(E, {
            id: a,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: s,
            focused: i,
            score: l,
            children: this.renderContent()
        });
    }
}
class D extends i.Component {
    renderIcon() {
        let { user: e } = this.props;
        return (0, r.jsx)('div', {
            className: b.iconContainer,
            children: (0, r.jsx)(l.Avatar, {
                src: e.getAvatarURL(void 0, 20),
                'aria-hidden': !0,
                size: l.AvatarSizes.SIZE_20
            })
        });
    }
    getDisplayNickname() {
        let e;
        let { user: n, comparator: t } = this.props,
            s = g.Z.getNickname(n.id);
        return ((e = t === n.tag || null == t || '' === t ? n.username : t) === n.username || e === n.id) && (e = null != s ? s : N.ZP.getName(n)), e;
    }
    renderName() {
        let e;
        let { user: n, mentions: t } = this.props,
            s = this.getDisplayNickname();
        return (
            null != t &&
                t > 0 &&
                (e = (0, r.jsx)(h.Z, {
                    className: b.badge,
                    value: t
                })),
            (0, r.jsxs)('div', {
                className: b.name,
                children: [
                    (0, r.jsx)('span', {
                        className: b.match,
                        children: s
                    }),
                    e,
                    (0, r.jsx)('span', {
                        className: b.username,
                        children: N.ZP.getUserTag(n)
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
            t = this.getDisplayNickname(),
            s = N.ZP.getUserTag(n);
        return null != e && e > 0
            ? v.intl.formatToPlainString(v.t['6b9Ura'], {
                  name: t,
                  id: s,
                  mentions: e
              })
            : v.intl.formatToPlainString(v.t.GWYOAQ, {
                  name: t,
                  id: s
              });
    }
    render() {
        let { onMouseEnter: e, onClick: n, onFocus: t, onContextMenu: s, focused: i, score: l, id: a } = this.props;
        return (0, r.jsx)(E, {
            id: a,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: s,
            focused: i,
            score: l,
            children: this.renderContent()
        });
    }
}
class k extends i.Component {
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
        let { onMouseEnter: e, onClick: n, onFocus: t, focused: s, id: i } = this.props;
        return (0, r.jsx)(E, {
            id: i,
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            focused: s,
            children: this.renderContent()
        });
    }
}
class P extends i.Component {
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
class _ extends i.Component {
    renderContent() {
        let e, n;
        let { link: t, children: s } = this.props,
            i = (0, x.Qj)(t.path);
        return (
            null == i || void 0 === i.messageId
                ? ((e = v.intl.string(v.t.qbSCqq)),
                  (n = (0, r.jsx)(l.LinkIcon, {
                      size: 'xs',
                      color: 'currentColor'
                  })))
                : (0, x.VO)(i)
                  ? ((e = v.intl.string(v.t['6Fd/j4'])),
                    (n = (0, r.jsx)(l.ChatArrowRightIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    })))
                  : ((e = v.intl.string(v.t.jQRwp6)),
                    (n = (0, r.jsx)(l.LockIcon, {
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
                        children: s
                    })
                ]
            })
        );
    }
    render() {
        let { onMouseEnter: e, onClick: n, onFocus: t, onContextMenu: s, focused: i, score: l, id: a } = this.props;
        return (0, r.jsx)(E, {
            id: a,
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: s,
            focused: i,
            score: l,
            children: this.renderContent()
        });
    }
}
class A extends i.Component {
    renderContent() {
        let e, n;
        let { navigationRecord: t, children: s } = this.props;
        switch (t.type) {
            case a.Ky.SHOP:
                (e = v.intl.string(v.t.pWG4zc)),
                    (n = (0, r.jsx)(l.ShopIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case a.Ky.NITRO_HOME:
                (e = v.intl.string(v.t.Ipxkoq)),
                    (n = (0, r.jsx)(l.NitroWheelIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case a.Ky.QUEST_HOME:
                (e = v.intl.string(v.t.JALI2N)),
                    (n = (0, r.jsx)(l.QuestsIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            default:
                (e = t.id),
                    (n = (0, r.jsx)(l.LinkIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
        }
        return (0, r.jsxs)('div', {
            className: b.contentDefault,
            children: [
                (0, r.jsx)('div', {
                    className: b.iconContainer,
                    children: n
                }),
                e,
                (0, r.jsx)('div', {
                    className: b.misc,
                    children: s
                })
            ]
        });
    }
    render() {
        let { onMouseEnter: e, onClick: n, onFocus: t, onContextMenu: s, focused: i, score: l, id: a } = this.props;
        return (0, r.jsx)(E, {
            id: a,
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: s,
            focused: i,
            score: l,
            children: this.renderContent()
        });
    }
}
