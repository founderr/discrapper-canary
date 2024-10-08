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
    l = n.n(s),
    r = n(954955),
    o = n.n(r),
    c = n(507274),
    d = n(481060),
    u = n(130402),
    _ = n(466794),
    E = n(659215),
    I = n(222677),
    m = n(995774),
    T = n(931651),
    N = n(594174),
    h = n(630388),
    C = n(74538),
    p = n(833803),
    f = n(566006),
    g = n(981631),
    A = n(185923),
    S = n(474936),
    M = n(689938),
    O = n(96042),
    x = n(968661);
function R(e, t, n) {
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
        let { type: e, message: t, className: n, children: a, useChatFontScaling: s, tabIndex: r = 0 } = this.props,
            { isReactionPickerActive: o } = this.state,
            c = t.state === g.yb.SENDING,
            E = e === f.O.BURST;
        if (c || (0, h.yE)(t.flags, g.iLy.EPHEMERAL)) return null;
        let I = N.default.getCurrentUser(),
            m = (0, C.I5)(I),
            T = E ? M.Z.Messages.ADD_BURST_REACTION : M.Z.Messages.ADD_REACTION;
        !m && E && (T = (0, i.jsx)(_.X, { tooltipText: M.Z.Messages.ADD_BURST_REACTION }));
        let S = s ? x : O,
            { canShowImprovedReactionButton: R } = p.Z.getCurrentConfig({ location: 'ButtonAddReaction' }, { autoTrackExposure: !this.props.isForumToolbar }),
            v = R && !this.props.isForumToolbar,
            L = {
                size: 'sm',
                color: 'currentColor',
                className: l()(S.icon, { [S.largeIcon]: v })
            };
        return (0, i.jsx)(d.Popout, {
            shouldShow: o,
            onRequestClose: this.handleReactionPickerToggle,
            renderPopout: this.renderReactionPopout,
            position: 'right',
            children: (e, t) => {
                let { isShown: s } = t;
                return (0, i.jsx)(d.TooltipContainer, {
                    text: T,
                    color: d.TooltipColors.PRIMARY,
                    'aria-label': E ? M.Z.Messages.ADD_BURST_REACTION : M.Z.Messages.ADD_REACTION,
                    tooltipClassName: S.__invalid_addReactionTooltip,
                    children: (0, i.jsxs)(d.Clickable, {
                        ...e,
                        tabIndex: r,
                        onClick: (e) => {
                            this.handleAddReactionClick(e);
                        },
                        onMouseEnter: () => (0, u.x)(A.qR.AddReactionPopoutMouseEntered),
                        onFocus: () => (0, u.x)(A.qR.AddReactionPopoutFocused),
                        className: l()(
                            S.reactionBtn,
                            {
                                [S.active]: s,
                                [S.largeReactionBtn]: v
                            },
                            n
                        ),
                        children: [E ? (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(d.SuperReactionIcon, { ...L }) }) : (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(d.ReactionIcon, { ...L }) }), a]
                    })
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            R(this, 'state', { isReactionPickerActive: !1 }),
            R(this, 'onAddReaction', (e, t) => {
                if (null == e) return;
                let { channel: n, message: i, isForumToolbar: a } = this.props;
                (0, I.rU)(n.id, i.id, (0, m.g1)(e), a ? I.TW.FORUM_TOOLBAR : I.TW.MESSAGE_INLINE_BUTTON, { burst: t });
            }),
            R(this, 'handleReactionPickerToggle', () => {
                this.setState((e) => ({ isReactionPickerActive: !e.isReactionPickerActive }));
            }),
            R(this, 'handleAddReactionClick', (e) => {
                let { type: t, channel: n } = this.props;
                e.stopPropagation();
                let i = N.default.getCurrentUser();
                t === f.O.BURST &&
                    !(0, C.I5)(i) &&
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
            R(this, 'renderReactionPopout', (e) => {
                let { closePopout: t } = e,
                    { type: n, channel: a, message: s } = this.props,
                    l = {
                        openPopoutType: 'message_reaction_emoji_picker',
                        ...(n === f.O.BURST && {
                            openPopoutType: 'message_super_reaction_emoji_picker',
                            page: null != a.getGuildId() ? g.ZY5.GUILD_CHANNEL : g.ZY5.DM_CHANNEL,
                            section: (0, m.s4)(a),
                            object: g.qAy.REACTION_RAIL
                        })
                    },
                    r = (0, i.jsx)(T.$, {
                        closePopout: t,
                        channel: a,
                        onSelectEmoji: (e, n, i) => {
                            this.onAddReaction(e, i), n && (i ? o()(t, 150)() : t());
                        },
                        analyticsOverride: l,
                        messageId: s.id
                    });
                return (0, i.jsx)(c.M.Consumer, {
                    children: (e) =>
                        e
                            ? (0, i.jsx)(d.Dialog, {
                                  'aria-label': M.Z.Messages.REACTION_PICKER,
                                  children: r
                              })
                            : r
                });
            });
    }
}
