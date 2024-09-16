n.r(t),
    n.d(t, {
        activityInviteKey: function () {
            return A;
        }
    }),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(512722),
    l = n.n(a),
    r = n(442837),
    o = n(481060),
    c = n(904245),
    u = n(654030),
    d = n(744061),
    h = n(367907),
    m = n(728345),
    p = n(812206),
    _ = n(541716),
    f = n(752305),
    E = n(893718),
    g = n(957730),
    C = n(789407),
    I = n(300429),
    T = n(838440),
    x = n(981631),
    S = n(689938),
    v = n(940083);
function N(e, t, n) {
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
let A = 'ActivityInvite';
class Z extends s.PureComponent {
    componentDidMount() {
        this.fetchApplication();
    }
    componentDidUpdate(e) {
        let { activity: t } = this.props;
        t.application_id !== e.activity.application_id && this.fetchApplication();
    }
    fetchApplication() {
        let { activity: e, application: t } = this.props;
        null != e.application_id && null == t && m.Z.fetchApplication(e.application_id);
    }
    renderTitle() {
        let { activity: e } = this.props;
        switch (e.type) {
            case x.IIU.LISTENING:
                return S.Z.Messages.INVITE_EMBED_LISTENING_INVITE;
            case x.IIU.PLAYING:
            case x.IIU.STREAMING:
            default:
                return S.Z.Messages.INVITE_EMBED_GAME_INVITE;
        }
    }
    render() {
        let { textValue: e, richValue: t, textFocused: n, contentWarningProps: s } = this.state,
            { activity: a, analyticsLocations: r, channel: c, activityActionType: h, cooldown: m, application: p, transitionState: f, onClose: g } = this.props,
            C = m > 0,
            I = C ? S.Z.Messages.CHANNEL_SLOWMODE_COOLDOWN.format({ seconds: Math.round((m + 1000) / 1000) }) : null;
        return (0, i.jsxs)(o.ModalRoot, {
            size: o.ModalSize.SMALL,
            transitionState: f,
            'aria-label': this.renderTitle(),
            children: [
                (0, i.jsx)(o.ModalHeader, {
                    separator: !1,
                    children: (0, i.jsx)(o.Heading, {
                        variant: 'heading-lg/semibold',
                        children: this.renderTitle()
                    })
                }),
                (0, i.jsxs)(o.ModalContent, {
                    children: [
                        (0, i.jsx)('div', {
                            className: v.subHeader,
                            children: S.Z.Messages.MESSAGE_PREVIEW
                        }),
                        (0, i.jsx)(u.Z, {
                            activityActionType: h,
                            activity: a,
                            className: v.preview,
                            application: p,
                            partyId: null != a.party ? a.party.id : null,
                            isPreview: !0,
                            analyticsLocations: r
                        }),
                        (0, i.jsx)('div', {
                            className: v.subHeader,
                            children: S.Z.Messages.ADD_A_COMMENT_OPTIONAL
                        }),
                        (0, i.jsx)(o.Popout, {
                            position: 'top',
                            onRequestClose: () => {
                                var e;
                                null == s || null === (e = s.onCancel) || void 0 === e || e.call(s), this.setState({ contentWarningProps: null });
                            },
                            shouldShow: null != s,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (
                                    l()(null != s, 'ActivityInvite.render - renderPopout: contentWarningProps cannot be null'),
                                    (0, i.jsx)(d.Z, {
                                        onClose: t,
                                        ...s
                                    })
                                );
                            },
                            children: () =>
                                (0, i.jsx)(E.Z, {
                                    className: v.textArea,
                                    textValue: e,
                                    richValue: t,
                                    focused: n,
                                    channel: c,
                                    onChange: this.handleTextChange,
                                    onSubmit: this.handleShare,
                                    type: _.I.FORM,
                                    parentModalKey: A,
                                    disableThemedBackground: !0
                                })
                        })
                    ]
                }),
                (0, i.jsxs)(o.ModalFooter, {
                    children: [
                        (0, i.jsx)(o.Tooltip, {
                            text: I,
                            children: (e) =>
                                (0, i.jsx)('div', {
                                    ...e,
                                    children: (0, i.jsx)(o.Button, {
                                        disabled: C,
                                        onClick: this.handleShare,
                                        children: S.Z.Messages.INVITE_EMBED_SEND_INVITE
                                    })
                                })
                        }),
                        (0, i.jsx)(o.Button, {
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            onClick: g,
                            children: S.Z.Messages.CANCEL
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            N(this, 'state', {
                ...(0, f.H2)(),
                textFocused: !0,
                contentWarningProps: null
            }),
            N(this, 'trackInvite', (e) => {
                if (null != e && e.ok) {
                    let { activity: t, channel: n, activityActionType: i } = this.props,
                        s = '';
                    switch (i) {
                        case x.mFx.JOIN:
                            s = 'Invite to Join';
                            break;
                        case x.mFx.LISTEN:
                            s = 'Invite to Listen';
                            break;
                        case x.mFx.WATCH:
                            s = 'Invite to Watch';
                    }
                    return (
                        h.ZP.trackWithMetadata(x.rMx.INVITE_SENT, {
                            location: 'Channel Text Area - '.concat(s),
                            invite_type: t.type === x.IIU.LISTENING ? x.dAT.SPOTIFY : x.dAT.APPLICATION,
                            application_id: t.application_id,
                            guild_id: n.getGuildId(),
                            channel_id: n.id,
                            message_id: null != e ? e.body.id : null
                        }),
                        Promise.resolve()
                    );
                }
            }),
            N(this, 'handleTextChange', (e, t, n) => {
                this.setState({
                    textValue: t,
                    richValue: n
                });
            }),
            N(this, 'handleShare', () => {
                let { channel: e, activity: t, activityActionType: n, cooldown: i, onClose: s } = this.props,
                    { textValue: a, contentWarningProps: l } = this.state;
                if (i > 0)
                    return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0
                    });
                let r = g.ZP.parse(e, a),
                    o = {
                        activity: t,
                        type: n
                    };
                return null != l
                    ? (this.setState({ contentWarningProps: null }),
                      c.Z.sendMessage(e.id, r, !0, { activityAction: o }).then((e) => this.trackInvite(e)),
                      s(),
                      Promise.resolve({
                          shouldClear: !0,
                          shouldRefocus: !0
                      }))
                    : (0, T.v)({
                          openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                          type: _.I.FORM,
                          content: a,
                          channel: e
                      }).then((t) => {
                          let { valid: n } = t;
                          return n
                              ? (c.Z.sendMessage(e.id, r, !0, { activityAction: o }).then((e) => this.trackInvite(e)),
                                s(),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                })
                              : {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                };
                      });
            });
    }
}
t.default = r.ZP.connectStores([I.Z, p.Z], (e) => {
    let { channel: t, activity: n } = e;
    return {
        cooldown: I.Z.getSlowmodeCooldownGuess(t.id),
        application: null != n.application_id ? p.Z.getApplication(n.application_id) : C.r9
    };
})(Z);
