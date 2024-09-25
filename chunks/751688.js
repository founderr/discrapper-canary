var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(481060),
    c = n(129861),
    d = n(600164),
    _ = n(184301),
    E = n(347475),
    f = n(415457);
function h(e, t, n) {
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
class p extends (r = o.Component) {
    render() {
        let { popoutOpen: e } = this.state,
            { user: t, disablePopout: n, ignoreModalClicks: r, guildId: i, channelId: o } = this.props;
        return (0, a.jsx)(u.Popout, {
            preload: () =>
                (0, _.Z)(t.id, t.getAvatarURL(i, 80), {
                    guildId: i,
                    channelId: o
                }),
            renderPopout: (e) =>
                (0, a.jsx)(E.Z, {
                    ...e,
                    userId: t.id,
                    guildId: i,
                    channelId: o
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
            h(this, 'state', { popoutOpen: !1 }),
            h(this, 'handleClickUser', () => {
                let { onPopoutOpen: e } = this.props;
                this.setState({ popoutOpen: !this.state.popoutOpen }), null == e || e();
            }),
            h(this, 'handleUserPopoutClose', () => {
                let { onPopoutClose: e } = this.props;
                this.setState({ popoutOpen: !1 }), null == e || e();
            }),
            h(this, 'renderUserPopout', (e) => {
                let { className: t, disablePopout: n, onContextMenu: r, user: i, status: o, textClassName: s, nick: _, guildId: E } = this.props;
                return (0, a.jsxs)(d.Z, {
                    align: d.Z.Align.CENTER,
                    className: l()(f.memberListItem, t, { [f.popoutDisabled]: n }),
                    onContextMenu: r,
                    onMouseDown: e.onMouseDown,
                    onKeyDown: e.onKeyDown,
                    onClick: this.handleClickUser,
                    children: [
                        (0, a.jsx)(u.Avatar, {
                            src: i.getAvatarURL(E, 24),
                            className: f.avatar,
                            'aria-label': i.username,
                            size: u.AvatarSizes.SIZE_24,
                            status: o
                        }),
                        (0, a.jsx)(u.Text, {
                            className: l()(f.memberListItemTag, s),
                            variant: 'text-sm/normal',
                            children: (0, a.jsx)(c.Z, {
                                user: i,
                                nick: _,
                                usernameClass: f.username,
                                hideDiscriminator: !0
                            })
                        })
                    ]
                });
            });
    }
}
h(p, 'defaultProps', { disablePopout: !1 }), (t.Z = p);
