n.d(t, {
    CN: function () {
        return b;
    },
    ZP: function () {
        return y;
    },
    eP: function () {
        return L;
    },
    hR: function () {
        return M;
    },
    jo: function () {
        return R;
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
    S = n(496675),
    x = n(914010),
    v = n(281029),
    T = n(981631),
    Z = n(689938),
    A = n(872356);
function b(e, t, n) {
    return null != t && !!t && !(0, v.ig)(n, e.type);
}
function R(e, t) {
    return null == t ? A.containerDefault : e > t ? A.containerDragAfter : A.containerDragBefore;
}
function M(e) {
    let { channel: t, disableManageChannels: n, tabIndex: i, forceShowButtons: l, hasChannelInfo: r = !1 } = e;
    if ((0, d.e7)([S.Z, x.Z], () => n || x.Z.getGuildId() === T.I_8 || (!S.Z.can(T.Plq.MANAGE_CHANNELS, t) && !S.Z.can(T.Plq.MANAGE_ROLES, t) && !S.Z.can(T.Plq.MANAGE_WEBHOOKS, t)) || ((0, I.r8)(t.type) && !S.Z.can(T.Plq.VIEW_CHANNEL, t)) || (t.isGuildVocal() && !S.Z.can(T.Plq.CONNECT, t)) || !I.dF.has(t.type))) return null;
    function a() {
        p.ZP.open(t.id);
    }
    return (0, s.jsx)(h.Tooltip, {
        text: Z.Z.Messages.EDIT_CHANNEL,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n, onFocus: o, onBlur: c } = e;
            return (0, s.jsx)(h.Clickable, {
                className: u()(A.iconItem, l ? A.alwaysShown : void 0, r ? A.iconWithChannelInfo : A.iconNoChannelInfo),
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
                    className: A.actionIcon
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
        I = (0, d.e7)([S.Z], () => (0, _.b)(S.Z, c, t, p)),
        x = (0, d.e7)([S.Z], () => (S.Z.can(T.Plq.CREATE_INSTANT_INVITE, t) ? Z.Z.Messages.CREATE_INSTANT_INVITE : Z.Z.Messages.INVITE_TO_SERVER));
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
    let b = (0, s.jsx)(h.GroupPlusIcon, {
        size: 'xs',
        className: A.actionIcon,
        'aria-hidden': !0
    });
    return (
        i &&
            (b = (0, s.jsx)(C.Z, {
                tutorialId: 'instant-invite',
                position: 'left',
                children: (0, s.jsx)('div', { children: b })
            })),
        (0, s.jsx)(h.Tooltip, {
            text: x,
            children: (e) =>
                (0, s.jsx)(h.Clickable, {
                    className: u()(A.iconItem, a ? A.alwaysShown : void 0, o ? A.iconWithChannelInfo : A.iconNoChannelInfo),
                    ...e,
                    onClick: v,
                    tabIndex: r,
                    'aria-label': x,
                    children: b
                })
        })
    );
}
function P(e) {
    let { channel: t } = e,
        n = () => {
            (0, m._U)(t.guild_id, t.id);
        };
    return (0, s.jsx)(h.Tooltip, {
        text: Z.Z.Messages.REMOVE_FAVORITE_SUGGESTION,
        children: (e) =>
            (0, s.jsx)(h.Clickable, {
                className: A.iconItem,
                ...e,
                onClick: n,
                'aria-label': Z.Z.Messages.REMOVE_FAVORITE_SUGGESTION,
                children: (0, s.jsx)(h.XSmallIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: A.actionIcon
                })
            })
    });
}
function O(e) {
    let { channel: t } = e,
        n = () => {
            (0, m.dM)(t.guild_id, t.id, !0, { section: T.jXE.CHANNEL_LIST });
        };
    return (0, s.jsx)(h.Tooltip, {
        text: Z.Z.Messages.ADD_FAVORITE,
        children: (e) =>
            (0, s.jsx)(h.Clickable, {
                className: A.iconItem,
                ...e,
                onClick: n,
                'aria-label': Z.Z.Messages.ADD_FAVORITE,
                children: (0, s.jsx)(h.CheckmarkLargeIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: A.actionIcon
                })
            })
    });
}
class y extends (a = o.PureComponent) {
    renderEditButton() {
        return (0, s.jsx)(M, { ...this.props });
    }
    renderInviteButton() {
        return (0, s.jsx)(L, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, s.jsx)(P, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, s.jsx)(O, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return R(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return b(e, t, n);
    }
}
(r = { isDefaultChannel: !1 }),
    (l = 'defaultProps') in (i = y)
        ? Object.defineProperty(i, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = r);
