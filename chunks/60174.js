n.d(t, {
    X: function () {
        return v;
    }
}),
    n(789020),
    n(47120);
var i = n(735250),
    a = n(470079),
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
    T = n(931651),
    h = n(594174),
    N = n(630388),
    f = n(74538),
    C = n(833803),
    p = n(566006),
    g = n(981631),
    A = n(185923),
    S = n(474936),
    R = n(689938),
    x = n(96042),
    O = n(968661);
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
class v extends a.Component {
    render() {
        let { type: e, message: t, className: n, children: a, useChatFontScaling: s, tabIndex: l = 0 } = this.props,
            { isReactionPickerActive: o } = this.state,
            c = t.state === g.yb.SENDING,
            E = e === p.O.BURST;
        if (c || (0, N.yE)(t.flags, g.iLy.EPHEMERAL)) return null;
        let I = h.default.getCurrentUser(),
            m = (0, f.I5)(I),
            T = E ? R.Z.Messages.ADD_BURST_REACTION : R.Z.Messages.ADD_REACTION;
        !m && E && (T = (0, i.jsx)(_.X, { tooltipText: R.Z.Messages.ADD_BURST_REACTION }));
        let S = s ? O : x,
            { canShowImprovedReactionButton: M } = C.Z.getCurrentConfig({ location: 'ButtonAddReaction' }, { autoTrackExposure: !this.props.isForumToolbar }),
            v = M && !this.props.isForumToolbar,
            L = {
                size: 'sm',
                color: 'currentColor',
                className: r()(S.icon, { [S.largeIcon]: v })
            };
        return (0, i.jsx)(u.Popout, {
            shouldShow: o,
            onRequestClose: this.handleReactionPickerToggle,
            renderPopout: this.renderReactionPopout,
            position: 'right',
            children: (e, t) => {
                let { isShown: s } = t;
                return (0, i.jsx)(u.TooltipContainer, {
                    text: T,
                    color: u.TooltipColors.PRIMARY,
                    'aria-label': E ? R.Z.Messages.ADD_BURST_REACTION : R.Z.Messages.ADD_REACTION,
                    tooltipClassName: S.__invalid_addReactionTooltip,
                    children: (0, i.jsxs)(u.Clickable, {
                        ...e,
                        tabIndex: l,
                        onClick: (e) => {
                            this.handleAddReactionClick(e);
                        },
                        onMouseEnter: () => (0, d.x)(A.qR.AddReactionPopoutMouseEntered),
                        onFocus: () => (0, d.x)(A.qR.AddReactionPopoutFocused),
                        className: r()(
                            S.reactionBtn,
                            {
                                [S.active]: s,
                                [S.largeReactionBtn]: v
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
                let i = h.default.getCurrentUser();
                t === p.O.BURST &&
                    !(0, f.I5)(i) &&
                    (0, E.openBurstReactionsUpsellModal)({
                        analytics: {
                            type: S.cd.BURST_REACTION_UPSELL,
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
                        ...(n === p.O.BURST && {
                            openPopoutType: 'message_super_reaction_emoji_picker',
                            page: null != a.getGuildId() ? g.ZY5.GUILD_CHANNEL : g.ZY5.DM_CHANNEL,
                            section: (0, m.s4)(a),
                            object: g.qAy.REACTION_RAIL
                        })
                    },
                    l = (0, i.jsx)(T.$, {
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
                                  'aria-label': R.Z.Messages.REACTION_PICKER,
                                  children: l
                              })
                            : l
                });
            });
    }
}
