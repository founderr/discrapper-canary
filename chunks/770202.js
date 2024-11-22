n(411104), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    s = n(493683),
    c = n(239091),
    u = n(146773),
    d = n(201895),
    h = n(703656),
    p = n(592125),
    m = n(430824),
    f = n(496675),
    g = n(98597),
    C = n(473403),
    _ = n(981631),
    v = n(490897),
    x = n(872356);
function I(e, t, n) {
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
function b(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error('TextChannel, preloadChannel: Channel does not have a guildId');
    s.Z.preload(n, t.id);
}
class E extends g.ZP {
    render() {
        let { channel: e, selected: t, connectChannelDropTarget: n, connectChannelDragSource: l, connectDragPreview: r, canReorderChannel: o } = this.props,
            s = (0, i.jsx)('li', {
                className: a()(this.getClassName(), { [x.disabled]: this.isDisabled() }),
                'data-dnd-name': e.name,
                children: (0, i.jsxs)(C.Z, {
                    className: x.iconVisibility,
                    channel: e,
                    selected: t,
                    onClick: this.handleClick,
                    onMouseDown: b,
                    onContextMenu: this.handleContextMenu,
                    connectDragPreview: o ? r : null,
                    'aria-label': (0, d.ZP)({ channel: e }),
                    resolvedUnreadSetting: v.i.ONLY_MENTIONS,
                    children: [this.renderInviteButton(), this.renderEditButton()]
                })
            });
        return o ? n(l(s)) : s;
    }
    constructor(...e) {
        super(...e),
            I(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    l = m.Z.getGuild(t.getGuildId());
                null != l &&
                    (0, c.jW)(e, async () => {
                        let { default: e } = await n.e('99905').then(n.bind(n, 649400));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                channel: t,
                                guild: l
                            });
                    });
            }),
            I(this, 'handleClick', (e) => {
                !(function (e) {
                    let t = e.getGuildId();
                    if (null == t) throw Error('TextChannel, transitionTo: Channel does not have a guildId');
                    (0, h.uL)(_.Z5c.CHANNEL(t, e.id), {
                        state: {
                            analyticsSource: {
                                page: _.ZY5.GUILD_CHANNEL,
                                section: _.jXE.CHANNEL_LIST,
                                object: _.qAy.CHANNEL
                            }
                        }
                    });
                })(e);
            });
    }
}
let S = (0, u.B)(E);
t.Z = l.memo(function (e) {
    let { channel: t, guild: n, disableSorting: l } = e,
        r = (0, o.cj)([p.Z, f.Z], () => {
            let e = p.Z.getChannel(t.parent_id);
            return {
                canManageChannel: f.Z.can(_.Plq.MANAGE_CHANNELS, t),
                canReorderChannel: !0 !== l && null != e ? f.Z.can(_.Plq.MANAGE_CHANNELS, e) : f.Z.can(_.Plq.MANAGE_CHANNELS, n)
            };
        });
    return (0, i.jsx)(S, {
        ...r,
        ...e
    });
});
