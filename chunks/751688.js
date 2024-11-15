n(47120);
var r,
    i = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(481060),
    u = n(129861),
    c = n(600164),
    d = n(184301),
    f = n(347475),
    _ = n(48954);
function p(e, t, n) {
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
class h extends (r = a.Component) {
    render() {
        let { popoutOpen: e } = this.state,
            { user: t, disablePopout: n, ignoreModalClicks: r, guildId: a, channelId: s } = this.props;
        return (0, i.jsx)(l.Popout, {
            preload: () =>
                (0, d.Z)(t.id, t.getAvatarURL(a, 80), {
                    guildId: a,
                    channelId: s
                }),
            renderPopout: (e) =>
                (0, i.jsx)(f.Z, {
                    ...e,
                    userId: t.id,
                    guildId: a,
                    channelId: s
                }),
            position: 'left',
            onRequestClose: this.handleUserPopoutClose,
            shouldShow: !n && e,
            ignoreModalClicks: r,
            children: (e) => this.renderUserPopout(e)
        });
    }
    constructor(...e) {
        super(...e),
            p(this, 'state', { popoutOpen: !1 }),
            p(this, 'handleClickUser', () => {
                let { onPopoutOpen: e } = this.props;
                this.setState({ popoutOpen: !this.state.popoutOpen }), null == e || e();
            }),
            p(this, 'handleUserPopoutClose', () => {
                let { onPopoutClose: e } = this.props;
                this.setState({ popoutOpen: !1 }), null == e || e();
            }),
            p(this, 'renderUserPopout', (e) => {
                let { className: t, disablePopout: n, onContextMenu: r, user: a, status: s, textClassName: d, nick: f, guildId: p } = this.props;
                return (0, i.jsxs)(c.Z, {
                    align: c.Z.Align.CENTER,
                    className: o()(_.memberListItem, t, { [_.popoutDisabled]: n }),
                    onContextMenu: r,
                    onMouseDown: e.onMouseDown,
                    onKeyDown: e.onKeyDown,
                    onClick: this.handleClickUser,
                    children: [
                        (0, i.jsx)(l.Avatar, {
                            src: a.getAvatarURL(p, 24),
                            className: _.avatar,
                            'aria-label': a.username,
                            size: l.AvatarSizes.SIZE_24,
                            status: s
                        }),
                        (0, i.jsx)(l.Text, {
                            className: o()(_.memberListItemTag, d),
                            variant: 'text-sm/normal',
                            children: (0, i.jsx)(u.Z, {
                                user: a,
                                nick: f,
                                usernameClass: _.username,
                                hideDiscriminator: !0
                            })
                        })
                    ]
                });
            });
    }
}
p(h, 'defaultProps', { disablePopout: !1 }), (t.Z = h);
