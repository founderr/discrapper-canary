n.d(t, {
    CN: function () {
        return A;
    },
    ZP: function () {
        return O;
    },
    eP: function () {
        return L;
    },
    hR: function () {
        return R;
    },
    jo: function () {
        return M;
    }
});
var i,
    l,
    r,
    a,
    s = n(735250),
    o = n(470079),
    c = n(120356),
    u = n.n(c),
    d = n(442837),
    h = n(481060),
    p = n(787014),
    f = n(924301),
    _ = n(159300),
    m = n(152376),
    g = n(427679),
    C = n(155409),
    I = n(131704),
    E = n(199902),
    N = n(430824),
    x = n(496675),
    S = n(914010),
    v = n(281029),
    T = n(981631),
    Z = n(689938),
    b = n(872356);
function A(e, t, n) {
    return null != t && !!t && !(0, v.ig)(n, e.type);
}
function M(e, t) {
    return null == t ? b.containerDefault : e > t ? b.containerDragAfter : b.containerDragBefore;
}
function R(e) {
    let { channel: t, disableManageChannels: n, tabIndex: i, forceShowButtons: l, hasChannelInfo: r = !1 } = e;
    if ((0, d.e7)([x.Z, S.Z], () => n || S.Z.getGuildId() === T.I_8 || (!x.Z.can(T.Plq.MANAGE_CHANNELS, t) && !x.Z.can(T.Plq.MANAGE_ROLES, t) && !x.Z.can(T.Plq.MANAGE_WEBHOOKS, t)) || ((0, I.r8)(t.type) && !x.Z.can(T.Plq.VIEW_CHANNEL, t)) || (t.isGuildVocal() && !x.Z.can(T.Plq.CONNECT, t)) || !I.dF.has(t.type))) return null;
    function a() {
        p.ZP.open(t.id);
    }
    return (0, s.jsx)(h.Tooltip, {
        text: Z.Z.Messages.EDIT_CHANNEL,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n, onFocus: o, onBlur: c } = e;
            return (0, s.jsx)(h.Clickable, {
                className: u()(b.iconItem, l ? b.alwaysShown : void 0, r ? b.iconWithChannelInfo : b.iconNoChannelInfo),
                onClick: a,
                tabIndex: i,
                'aria-label': Z.Z.Messages.EDIT_CHANNEL,
                onMouseEnter: t,
                onMouseLeave: n,
                onFocus: o,
                onBlur: c,
                children: (0, s.jsx)(h.SettingsIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: b.actionIcon
                })
            });
        }
    });
}
function L(e) {
    let { channel: t, isDefaultChannel: i = !1, locked: l, tabIndex: r, forceShowButtons: a, hasChannelInfo: o = !1 } = e,
        c = (0, d.e7)([N.Z], () => N.Z.getGuild(t.getGuildId())),
        p = (0, d.e7)([g.Z], () => g.Z.getStageInstanceByChannel(t.id), [t.id]),
        m = (0, d.e7)([f.ZP], () => f.ZP.getActiveEventByChannel(t.id), [t.id]),
        I = (0, d.e7)([x.Z], () => (0, _.b)(x.Z, c, t, p)),
        S = (0, d.e7)([x.Z], () => (x.Z.can(T.Plq.CREATE_INSTANT_INVITE, t) ? Z.Z.Messages.CREATE_INSTANT_INVITE : Z.Z.Messages.INVITE_TO_SERVER));
    if (l || !I) return null;
    function v() {
        if (null != c) {
            let e = E.Z.getAllActiveStreams().filter((e) => e.state !== T.jm8.ENDED && e.channelId === t.id);
            (0, h.openModalLazy)(async () => {
                let { default: i } = await Promise.all([n.e('7654'), n.e('85683')]).then(n.bind(n, 560114));
                return (n) =>
                    (0, s.jsx)(i, {
                        ...n,
                        guild: c,
                        channel: t,
                        streamUserId: 1 === e.length ? e[0].ownerId : null,
                        source: T.t4x.GUILD_CHANNELS,
                        guildScheduledEvent: m
                    });
            });
        }
    }
    let A = (0, s.jsx)(h.GroupPlusIcon, {
        size: 'xs',
        className: b.actionIcon,
        'aria-hidden': !0
    });
    return (
        i &&
            (A = (0, s.jsx)(C.Z, {
                tutorialId: 'instant-invite',
                position: 'left',
                children: (0, s.jsx)('div', { children: A })
            })),
        (0, s.jsx)(h.Tooltip, {
            text: S,
            children: (e) =>
                (0, s.jsx)(h.Clickable, {
                    className: u()(b.iconItem, a ? b.alwaysShown : void 0, o ? b.iconWithChannelInfo : b.iconNoChannelInfo),
                    ...e,
                    onClick: v,
                    tabIndex: r,
                    'aria-label': S,
                    children: A
                })
        })
    );
}
function y(e) {
    let { channel: t } = e,
        n = () => {
            (0, m._U)(t.guild_id, t.id);
        };
    return (0, s.jsx)(h.Tooltip, {
        text: Z.Z.Messages.REMOVE_FAVORITE_SUGGESTION,
        children: (e) =>
            (0, s.jsx)(h.Clickable, {
                className: b.iconItem,
                ...e,
                onClick: n,
                'aria-label': Z.Z.Messages.REMOVE_FAVORITE_SUGGESTION,
                children: (0, s.jsx)(h.XSmallIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: b.actionIcon
                })
            })
    });
}
function P(e) {
    let { channel: t } = e,
        n = () => {
            (0, m.dM)(t.guild_id, t.id, !0, { section: T.jXE.CHANNEL_LIST });
        };
    return (0, s.jsx)(h.Tooltip, {
        text: Z.Z.Messages.ADD_FAVORITE,
        children: (e) =>
            (0, s.jsx)(h.Clickable, {
                className: b.iconItem,
                ...e,
                onClick: n,
                'aria-label': Z.Z.Messages.ADD_FAVORITE,
                children: (0, s.jsx)(h.CheckmarkLargeIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: b.actionIcon
                })
            })
    });
}
class O extends (a = o.PureComponent) {
    renderEditButton() {
        return (0, s.jsx)(R, { ...this.props });
    }
    renderInviteButton() {
        return (0, s.jsx)(L, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, s.jsx)(y, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, s.jsx)(P, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return M(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return A(e, t, n);
    }
}
(r = { isDefaultChannel: !1 }),
    (l = 'defaultProps') in (i = O)
        ? Object.defineProperty(i, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = r);
