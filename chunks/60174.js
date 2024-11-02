n.d(t, {
    X: function () {
        return O;
    }
}),
    n(789020),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(954955),
    o = n.n(l),
    c = n(507274),
    u = n(481060),
    d = n(130402),
    _ = n(466794),
    E = n(659215),
    I = n(222677),
    m = n(995774),
    f = n(931651),
    T = n(594174),
    h = n(630388),
    N = n(74538),
    p = n(833803),
    C = n(566006),
    g = n(981631),
    S = n(185923),
    A = n(474936),
    x = n(689938),
    R = n(96042),
    v = n(968661);
function M(e, t, n) {
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
class O extends a.Component {
    render() {
        let { type: e, message: t, className: n, children: a, useChatFontScaling: s, tabIndex: l = 0 } = this.props,
            { isReactionPickerActive: o } = this.state,
            c = t.state === g.yb.SENDING,
            E = e === C.O.BURST;
        if (c || (0, h.yE)(t.flags, g.iLy.EPHEMERAL)) return null;
        let I = T.default.getCurrentUser(),
            m = (0, N.I5)(I),
            f = E ? x.Z.Messages.ADD_BURST_REACTION : x.Z.Messages.ADD_REACTION;
        !m && E && (f = (0, i.jsx)(_.X, { tooltipText: x.Z.Messages.ADD_BURST_REACTION }));
        let A = s ? v : R,
            { canShowImprovedReactionButton: M } = p.Z.getCurrentConfig({ location: 'ButtonAddReaction' }, { autoTrackExposure: !this.props.isForumToolbar }),
            O = M && !this.props.isForumToolbar,
            L = {
                size: 'sm',
                color: 'currentColor',
                className: r()(A.icon, { [A.largeIcon]: O })
            };
        return (0, i.jsx)(u.Popout, {
            shouldShow: o,
            onRequestClose: this.handleReactionPickerToggle,
            renderPopout: this.renderReactionPopout,
            position: 'right',
            children: (e, t) => {
                let { isShown: s } = t;
                return (0, i.jsx)(u.TooltipContainer, {
                    text: f,
                    color: u.TooltipColors.PRIMARY,
                    'aria-label': E ? x.Z.Messages.ADD_BURST_REACTION : x.Z.Messages.ADD_REACTION,
                    tooltipClassName: A.__invalid_addReactionTooltip,
                    children: (0, i.jsxs)(u.Clickable, {
                        ...e,
                        tabIndex: l,
                        onClick: (e) => {
                            this.handleAddReactionClick(e);
                        },
                        onMouseEnter: () => (0, d.x)(S.qR.AddReactionPopoutMouseEntered),
                        onFocus: () => (0, d.x)(S.qR.AddReactionPopoutFocused),
                        className: r()(
                            A.reactionBtn,
                            {
                                [A.active]: s,
                                [A.largeReactionBtn]: O
                            },
                            n
                        ),
                        children: [E ? (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(u.SuperReactionIcon, { ...L }) }) : (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(u.ReactionIcon, { ...L }) }), a]
                    })
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            M(this, 'state', { isReactionPickerActive: !1 }),
            M(this, 'onAddReaction', (e, t) => {
                if (null == e) return;
                let { channel: n, message: i, isForumToolbar: a } = this.props;
                (0, I.rU)(n.id, i.id, (0, m.g1)(e), a ? I.TW.FORUM_TOOLBAR : I.TW.MESSAGE_INLINE_BUTTON, { burst: t });
            }),
            M(this, 'handleReactionPickerToggle', () => {
                this.setState((e) => ({ isReactionPickerActive: !e.isReactionPickerActive }));
            }),
            M(this, 'handleAddReactionClick', (e) => {
                let { type: t, channel: n } = this.props;
                e.stopPropagation();
                let i = T.default.getCurrentUser();
                t === C.O.BURST &&
                    !(0, N.I5)(i) &&
                    (0, E.openBurstReactionsUpsellModal)({
                        analytics: {
                            type: A.cd.BURST_REACTION_UPSELL,
                            page: null != n.getGuildId() ? g.ZY5.GUILD_CHANNEL : g.ZY5.DM_CHANNEL,
                            section: (0, m.s4)(n),
                            object: g.qAy.INLINE_REACTION_PICKER_UPSELL
                        }
                    }),
                    this.handleReactionPickerToggle();
            }),
            M(this, 'renderReactionPopout', (e) => {
                let { closePopout: t } = e,
                    { type: n, channel: a, message: s } = this.props,
                    r = {
                        openPopoutType: 'message_reaction_emoji_picker',
                        ...(n === C.O.BURST && {
                            openPopoutType: 'message_super_reaction_emoji_picker',
                            page: null != a.getGuildId() ? g.ZY5.GUILD_CHANNEL : g.ZY5.DM_CHANNEL,
                            section: (0, m.s4)(a),
                            object: g.qAy.REACTION_RAIL
                        })
                    },
                    l = (0, i.jsx)(f.$, {
                        closePopout: t,
                        channel: a,
                        onSelectEmoji: (e, n, i) => {
                            this.onAddReaction(e, i), n && (i ? o()(t, 150)() : t());
                        },
                        analyticsOverride: r,
                        messageId: s.id
                    });
                return (0, i.jsx)(c.M.Consumer, {
                    children: (e) =>
                        e
                            ? (0, i.jsx)(u.Dialog, {
                                  'aria-label': x.Z.Messages.REACTION_PICKER,
                                  children: l
                              })
                            : l
                });
            });
    }
}
