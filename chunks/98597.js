n.d(t, {
    CN: function () {
        return T;
    },
    ZP: function () {
        return L;
    },
    eP: function () {
        return P;
    },
    hR: function () {
        return j;
    },
    jo: function () {
        return A;
    }
});
var i,
    l,
    r,
    o,
    a = n(200651),
    s = n(192379),
    c = n(120356),
    u = n.n(c),
    d = n(442837),
    h = n(481060),
    p = n(787014),
    m = n(924301),
    f = n(159300),
    g = n(152376),
    C = n(427679),
    _ = n(155409),
    v = n(131704),
    x = n(199902),
    I = n(430824),
    b = n(496675),
    S = n(914010),
    E = n(281029),
    Z = n(981631),
    N = n(388032),
    y = n(831746);
function T(e, t, n) {
    return null != t && !!t && !(0, E.ig)(n, e.type);
}
function A(e, t) {
    return null == t ? y.containerDefault : e > t ? y.containerDragAfter : y.containerDragBefore;
}
function j(e) {
    let { channel: t, disableManageChannels: n, tabIndex: i, forceShowButtons: l, hasChannelInfo: r = !1 } = e;
    if ((0, d.e7)([b.Z, S.Z], () => n || S.Z.getGuildId() === Z.I_8 || (!b.Z.can(Z.Plq.MANAGE_CHANNELS, t) && !b.Z.can(Z.Plq.MANAGE_ROLES, t) && !b.Z.can(Z.Plq.MANAGE_WEBHOOKS, t)) || ((0, v.r8)(t.type) && !b.Z.can(Z.Plq.VIEW_CHANNEL, t)) || (t.isGuildVocal() && !b.Z.can(Z.Plq.CONNECT, t)) || !v.dF.has(t.type))) return null;
    function o() {
        p.ZP.open(t.id);
    }
    return (0, a.jsx)(h.Tooltip, {
        text: N.intl.string(N.t['3gUsJS']),
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n, onFocus: s, onBlur: c } = e;
            return (0, a.jsx)(h.Clickable, {
                className: u()(y.iconItem, l ? y.alwaysShown : void 0, r ? y.iconWithChannelInfo : y.iconNoChannelInfo),
                onClick: o,
                tabIndex: i,
                'aria-label': N.intl.string(N.t['3gUsJS']),
                onMouseEnter: t,
                onMouseLeave: n,
                onFocus: s,
                onBlur: c,
                children: (0, a.jsx)(h.SettingsIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: y.actionIcon
                })
            });
        }
    });
}
function P(e) {
    let { channel: t, isDefaultChannel: i = !1, locked: l, tabIndex: r, forceShowButtons: o, hasChannelInfo: s = !1 } = e,
        c = (0, d.e7)([I.Z], () => I.Z.getGuild(t.getGuildId())),
        p = (0, d.e7)([C.Z], () => C.Z.getStageInstanceByChannel(t.id), [t.id]),
        g = (0, d.e7)([m.ZP], () => m.ZP.getActiveEventByChannel(t.id), [t.id]),
        v = (0, d.e7)([b.Z], () => (0, f.b)(b.Z, c, t, p)),
        S = (0, d.e7)([b.Z], () => (b.Z.can(Z.Plq.CREATE_INSTANT_INVITE, t) ? N.intl.string(N.t.zJrgTE) : N.intl.string(N.t.Sd8Ix8)));
    if (l || !v) return null;
    function E() {
        if (null != c) {
            let e = x.Z.getAllActiveStreams().filter((e) => e.state !== Z.jm8.ENDED && e.channelId === t.id);
            (0, h.openModalLazy)(async () => {
                let { default: i } = await Promise.all([n.e('7654'), n.e('86004')]).then(n.bind(n, 560114));
                return (n) =>
                    (0, a.jsx)(i, {
                        ...n,
                        guild: c,
                        channel: t,
                        streamUserId: 1 === e.length ? e[0].ownerId : null,
                        source: Z.t4x.GUILD_CHANNELS,
                        guildScheduledEvent: g
                    });
            });
        }
    }
    let T = (0, a.jsx)(h.GroupPlusIcon, {
        size: 'xs',
        className: y.actionIcon,
        'aria-hidden': !0
    });
    return (
        i &&
            (T = (0, a.jsx)(_.Z, {
                tutorialId: 'instant-invite',
                position: 'left',
                children: (0, a.jsx)('div', { children: T })
            })),
        (0, a.jsx)(h.Tooltip, {
            text: S,
            children: (e) =>
                (0, a.jsx)(h.Clickable, {
                    className: u()(y.iconItem, o ? y.alwaysShown : void 0, s ? y.iconWithChannelInfo : y.iconNoChannelInfo),
                    ...e,
                    onClick: E,
                    tabIndex: r,
                    'aria-label': S,
                    children: T
                })
        })
    );
}
function R(e) {
    let { channel: t } = e,
        n = () => {
            (0, g._U)(t.guild_id, t.id);
        };
    return (0, a.jsx)(h.Tooltip, {
        text: N.intl.string(N.t.ROh4T0),
        children: (e) =>
            (0, a.jsx)(h.Clickable, {
                className: y.iconItem,
                ...e,
                onClick: n,
                'aria-label': N.intl.string(N.t.ROh4T0),
                children: (0, a.jsx)(h.XSmallIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: y.actionIcon
                })
            })
    });
}
function M(e) {
    let { channel: t } = e,
        n = () => {
            (0, g.dM)(t.guild_id, t.id, !0, { section: Z.jXE.CHANNEL_LIST });
        };
    return (0, a.jsx)(h.Tooltip, {
        text: N.intl.string(N.t['N2c/Ul']),
        children: (e) =>
            (0, a.jsx)(h.Clickable, {
                className: y.iconItem,
                ...e,
                onClick: n,
                'aria-label': N.intl.string(N.t['N2c/Ul']),
                children: (0, a.jsx)(h.CheckmarkLargeIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: y.actionIcon
                })
            })
    });
}
class L extends (o = s.PureComponent) {
    renderEditButton() {
        return (0, a.jsx)(j, { ...this.props });
    }
    renderInviteButton() {
        return (0, a.jsx)(P, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, a.jsx)(R, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, a.jsx)(M, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return A(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return T(e, t, n);
    }
}
(r = { isDefaultChannel: !1 }),
    (l = 'defaultProps') in (i = L)
        ? Object.defineProperty(i, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = r);
