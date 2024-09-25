n.d(t, {
    X: function () {
        return L;
    }
});
var r = n(789020);
var i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(954955),
    c = n.n(u),
    d = n(507274),
    _ = n(481060),
    E = n(130402),
    f = n(466794),
    h = n(659215),
    p = n(222677),
    m = n(995774),
    I = n(931651),
    T = n(594174),
    g = n(630388),
    S = n(74538),
    A = n(566006),
    v = n(981631),
    N = n(185923),
    O = n(474936),
    R = n(689938),
    C = n(96042),
    y = n(968661);
function b(e, t, n) {
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
class L extends o.Component {
    render() {
        let { type: e, message: t, className: n, children: r, useChatFontScaling: i, tabIndex: o = 0 } = this.props,
            { isReactionPickerActive: s } = this.state,
            u = t.state === v.yb.SENDING,
            c = e === A.O.BURST;
        if (u || (0, g.yE)(t.flags, v.iLy.EPHEMERAL)) return null;
        let d = T.default.getCurrentUser(),
            h = (0, S.I5)(d),
            p = c ? R.Z.Messages.ADD_BURST_REACTION : R.Z.Messages.ADD_REACTION;
        !h && c && (p = (0, a.jsx)(f.X, { tooltipText: R.Z.Messages.ADD_BURST_REACTION }));
        let m = i ? y : C;
        return (0, a.jsx)(_.Popout, {
            shouldShow: s,
            onRequestClose: this.handleReactionPickerToggle,
            renderPopout: this.renderReactionPopout,
            position: 'right',
            children: (e, t) => {
                let { isShown: i } = t;
                return (0, a.jsx)(_.TooltipContainer, {
                    text: p,
                    color: _.TooltipColors.PRIMARY,
                    'aria-label': c ? R.Z.Messages.ADD_BURST_REACTION : R.Z.Messages.ADD_REACTION,
                    tooltipClassName: m.__invalid_addReactionTooltip,
                    children: (0, a.jsxs)(_.Clickable, {
                        ...e,
                        tabIndex: o,
                        onClick: (e) => {
                            this.handleAddReactionClick(e);
                        },
                        onMouseEnter: () => (0, E.x)(N.qR.AddReactionPopoutMouseEntered),
                        onFocus: () => (0, E.x)(N.qR.AddReactionPopoutFocused),
                        className: l()(m.reactionBtn, { [m.active]: i }, n),
                        children: [
                            c
                                ? (0, a.jsx)(a.Fragment, {
                                      children: (0, a.jsx)(_.SuperReactionIcon, {
                                          size: 'sm',
                                          color: 'currentColor',
                                          className: m.icon
                                      })
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                      children: (0, a.jsx)(_.ReactionIcon, {
                                          size: 'sm',
                                          color: 'currentColor',
                                          className: m.icon
                                      })
                                  }),
                            r
                        ]
                    })
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'state', { isReactionPickerActive: !1 }),
            b(this, 'onAddReaction', (e, t) => {
                if (null == e) return;
                let { channel: n, message: r, isForumToolbar: i } = this.props;
                (0, p.rU)(n.id, r.id, (0, m.g1)(e), i ? p.TW.FORUM_TOOLBAR : p.TW.MESSAGE_INLINE_BUTTON, { burst: t });
            }),
            b(this, 'handleReactionPickerToggle', () => {
                this.setState((e) => ({ isReactionPickerActive: !e.isReactionPickerActive }));
            }),
            b(this, 'handleAddReactionClick', (e) => {
                let { type: t, channel: n } = this.props;
                e.stopPropagation();
                let r = T.default.getCurrentUser();
                t === A.O.BURST &&
                    !(0, S.I5)(r) &&
                    (0, h.openBurstReactionsUpsellModal)({
                        analytics: {
                            type: O.cd.BURST_REACTION_UPSELL,
                            page: null != n.getGuildId() ? v.ZY5.GUILD_CHANNEL : v.ZY5.DM_CHANNEL,
                            section: (0, m.s4)(n),
                            object: v.qAy.INLINE_REACTION_PICKER_UPSELL
                        }
                    }),
                    this.handleReactionPickerToggle();
            }),
            b(this, 'renderReactionPopout', (e) => {
                let { closePopout: t } = e,
                    { type: n, channel: r, message: i } = this.props,
                    o = {
                        openPopoutType: 'message_reaction_emoji_picker',
                        ...(n === A.O.BURST && {
                            openPopoutType: 'message_super_reaction_emoji_picker',
                            page: null != r.getGuildId() ? v.ZY5.GUILD_CHANNEL : v.ZY5.DM_CHANNEL,
                            section: (0, m.s4)(r),
                            object: v.qAy.REACTION_RAIL
                        })
                    },
                    s = (0, a.jsx)(I.$, {
                        closePopout: t,
                        channel: r,
                        onSelectEmoji: (e, n, r) => {
                            this.onAddReaction(e, r), n && (r ? c()(t, 150)() : t());
                        },
                        analyticsOverride: o,
                        messageId: i.id
                    });
                return (0, a.jsx)(d.M.Consumer, {
                    children: (e) =>
                        e
                            ? (0, a.jsx)(_.Dialog, {
                                  'aria-label': R.Z.Messages.REACTION_PICKER,
                                  children: s
                              })
                            : s
                });
            });
    }
}
