n.r(t),
    n.d(t, {
        activityInviteKey: function () {
            return S;
        }
    }),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(512722),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(904245),
    d = n(654030),
    u = n(744061),
    h = n(367907),
    p = n(728345),
    m = n(812206),
    f = n(541716),
    g = n(752305),
    C = n(893718),
    x = n(957730),
    v = n(789407),
    _ = n(300429),
    I = n(838440),
    E = n(981631),
    b = n(388032),
    N = n(404780);
function Z(e, t, n) {
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
let S = 'ActivityInvite';
class T extends l.PureComponent {
    componentDidMount() {
        this.fetchApplication();
    }
    componentDidUpdate(e) {
        let { activity: t } = this.props;
        t.application_id !== e.activity.application_id && this.fetchApplication();
    }
    fetchApplication() {
        let { activity: e, application: t } = this.props;
        null != e.application_id && null == t && p.ZP.fetchApplication(e.application_id);
    }
    renderTitle() {
        let { activity: e } = this.props;
        switch (e.type) {
            case E.IIU.LISTENING:
                return b.intl.string(b.t.EfJzLC);
            case E.IIU.PLAYING:
            case E.IIU.STREAMING:
            default:
                return b.intl.string(b.t.I52SNT);
        }
    }
    render() {
        let { textValue: e, richValue: t, textFocused: n, contentWarningProps: l } = this.state,
            { activity: r, analyticsLocations: s, channel: c, activityActionType: h, cooldown: p, application: m, transitionState: g, onClose: x } = this.props,
            v = p > 0,
            _ = v ? b.intl.formatToPlainString(b.t['4rMiHx'], { seconds: Math.round((p + 1000) / 1000) }) : null;
        return (0, i.jsxs)(o.ModalRoot, {
            size: o.ModalSize.SMALL,
            transitionState: g,
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
                            className: N.subHeader,
                            children: b.intl.string(b.t['0mUmIi'])
                        }),
                        (0, i.jsx)(d.Z, {
                            activityActionType: h,
                            activity: r,
                            className: N.preview,
                            application: m,
                            partyId: null != r.party ? r.party.id : null,
                            isPreview: !0,
                            analyticsLocations: s
                        }),
                        (0, i.jsx)('div', {
                            className: N.subHeader,
                            children: b.intl.string(b.t.i4GlAQ)
                        }),
                        (0, i.jsx)(o.Popout, {
                            position: 'top',
                            onRequestClose: () => {
                                var e;
                                null == l || null === (e = l.onCancel) || void 0 === e || e.call(l), this.setState({ contentWarningProps: null });
                            },
                            shouldShow: null != l,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (
                                    a()(null != l, 'ActivityInvite.render - renderPopout: contentWarningProps cannot be null'),
                                    (0, i.jsx)(u.Z, {
                                        onClose: t,
                                        ...l
                                    })
                                );
                            },
                            children: () =>
                                (0, i.jsx)(C.Z, {
                                    className: N.textArea,
                                    textValue: e,
                                    richValue: t,
                                    focused: n,
                                    channel: c,
                                    onChange: this.handleTextChange,
                                    onSubmit: this.handleShare,
                                    type: f.I.FORM,
                                    parentModalKey: S,
                                    disableThemedBackground: !0
                                })
                        })
                    ]
                }),
                (0, i.jsxs)(o.ModalFooter, {
                    children: [
                        (0, i.jsx)(o.Tooltip, {
                            text: _,
                            children: (e) =>
                                (0, i.jsx)('div', {
                                    ...e,
                                    children: (0, i.jsx)(o.Button, {
                                        disabled: v,
                                        onClick: this.handleShare,
                                        children: b.intl.string(b.t.Z2irYG)
                                    })
                                })
                        }),
                        (0, i.jsx)(o.Button, {
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            onClick: x,
                            children: b.intl.string(b.t['ETE/oK'])
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            Z(this, 'state', {
                ...(0, g.H2)(),
                textFocused: !0,
                contentWarningProps: null
            }),
            Z(this, 'trackInvite', (e) => {
                if (null != e && e.ok) {
                    let { activity: t, channel: n, activityActionType: i } = this.props,
                        l = '';
                    switch (i) {
                        case E.mFx.JOIN:
                            l = 'Invite to Join';
                            break;
                        case E.mFx.LISTEN:
                            l = 'Invite to Listen';
                            break;
                        case E.mFx.WATCH:
                            l = 'Invite to Watch';
                    }
                    return (
                        h.ZP.trackWithMetadata(E.rMx.INVITE_SENT, {
                            location: 'Channel Text Area - '.concat(l),
                            invite_type: t.type === E.IIU.LISTENING ? E.dAT.SPOTIFY : E.dAT.APPLICATION,
                            application_id: t.application_id,
                            guild_id: n.getGuildId(),
                            channel_id: n.id,
                            message_id: null != e ? e.body.id : null
                        }),
                        Promise.resolve()
                    );
                }
            }),
            Z(this, 'handleTextChange', (e, t, n) => {
                this.setState({
                    textValue: t,
                    richValue: n
                });
            }),
            Z(this, 'handleShare', () => {
                let { channel: e, activity: t, activityActionType: n, cooldown: i, onClose: l } = this.props,
                    { textValue: r, contentWarningProps: a } = this.state;
                if (i > 0)
                    return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0
                    });
                let s = x.ZP.parse(e, r),
                    o = {
                        activity: t,
                        type: n
                    };
                return null != a
                    ? (this.setState({ contentWarningProps: null }),
                      c.Z.sendMessage(e.id, s, !0, { activityAction: o }).then((e) => this.trackInvite(e)),
                      l(),
                      Promise.resolve({
                          shouldClear: !0,
                          shouldRefocus: !0
                      }))
                    : (0, I.v)({
                          openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                          type: f.I.FORM,
                          content: r,
                          channel: e
                      }).then((t) => {
                          let { valid: n } = t;
                          return n
                              ? (c.Z.sendMessage(e.id, s, !0, { activityAction: o }).then((e) => this.trackInvite(e)),
                                l(),
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
t.default = s.ZP.connectStores([_.Z, m.Z], (e) => {
    let { channel: t, activity: n } = e;
    return {
        cooldown: _.Z.getSlowmodeCooldownGuess(t.id),
        application: null != n.application_id ? m.Z.getApplication(n.application_id) : v.r9
    };
})(T);
