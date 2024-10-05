n.d(t, {
    X: function () {
        return R;
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
    p = n(566006),
    f = n(981631),
    g = n(185923),
    A = n(474936),
    S = n(689938),
    M = n(96042),
    x = n(968661);
function O(e, t, n) {
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
class R extends a.Component {
    render() {
        let { type: e, message: t, className: n, children: a, useChatFontScaling: s, tabIndex: r = 0 } = this.props,
            { isReactionPickerActive: o } = this.state,
            c = t.state === f.yb.SENDING,
            E = e === p.O.BURST;
        if (c || (0, h.yE)(t.flags, f.iLy.EPHEMERAL)) return null;
        let I = N.default.getCurrentUser(),
            m = (0, C.I5)(I),
            T = E ? S.Z.Messages.ADD_BURST_REACTION : S.Z.Messages.ADD_REACTION;
        !m && E && (T = (0, i.jsx)(_.X, { tooltipText: S.Z.Messages.ADD_BURST_REACTION }));
        let A = s ? x : M;
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
                    'aria-label': E ? S.Z.Messages.ADD_BURST_REACTION : S.Z.Messages.ADD_REACTION,
                    tooltipClassName: A.__invalid_addReactionTooltip,
                    children: (0, i.jsxs)(d.Clickable, {
                        ...e,
                        tabIndex: r,
                        onClick: (e) => {
                            this.handleAddReactionClick(e);
                        },
                        onMouseEnter: () => (0, u.x)(g.qR.AddReactionPopoutMouseEntered),
                        onFocus: () => (0, u.x)(g.qR.AddReactionPopoutFocused),
                        className: l()(A.reactionBtn, { [A.active]: s }, n),
                        children: [
                            E
                                ? (0, i.jsx)(i.Fragment, {
                                      children: (0, i.jsx)(d.SuperReactionIcon, {
                                          size: 'sm',
                                          color: 'currentColor',
                                          className: A.icon
                                      })
                                  })
                                : (0, i.jsx)(i.Fragment, {
                                      children: (0, i.jsx)(d.ReactionIcon, {
                                          size: 'sm',
                                          color: 'currentColor',
                                          className: A.icon
                                      })
                                  }),
                            a
                        ]
                    })
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            O(this, 'state', { isReactionPickerActive: !1 }),
            O(this, 'onAddReaction', (e, t) => {
                if (null == e) return;
                let { channel: n, message: i, isForumToolbar: a } = this.props;
                (0, I.rU)(n.id, i.id, (0, m.g1)(e), a ? I.TW.FORUM_TOOLBAR : I.TW.MESSAGE_INLINE_BUTTON, { burst: t });
            }),
            O(this, 'handleReactionPickerToggle', () => {
                this.setState((e) => ({ isReactionPickerActive: !e.isReactionPickerActive }));
            }),
            O(this, 'handleAddReactionClick', (e) => {
                let { type: t, channel: n } = this.props;
                e.stopPropagation();
                let i = N.default.getCurrentUser();
                t === p.O.BURST &&
                    !(0, C.I5)(i) &&
                    (0, E.openBurstReactionsUpsellModal)({
                        analytics: {
                            type: A.cd.BURST_REACTION_UPSELL,
                            page: null != n.getGuildId() ? f.ZY5.GUILD_CHANNEL : f.ZY5.DM_CHANNEL,
                            section: (0, m.s4)(n),
                            object: f.qAy.INLINE_REACTION_PICKER_UPSELL
                        }
                    }),
                    this.handleReactionPickerToggle();
            }),
            O(this, 'renderReactionPopout', (e) => {
                let { closePopout: t } = e,
                    { type: n, channel: a, message: s } = this.props,
                    l = {
                        openPopoutType: 'message_reaction_emoji_picker',
                        ...(n === p.O.BURST && {
                            openPopoutType: 'message_super_reaction_emoji_picker',
                            page: null != a.getGuildId() ? f.ZY5.GUILD_CHANNEL : f.ZY5.DM_CHANNEL,
                            section: (0, m.s4)(a),
                            object: f.qAy.REACTION_RAIL
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
                                  'aria-label': S.Z.Messages.REACTION_PICKER,
                                  children: r
                              })
                            : r
                });
            });
    }
}
