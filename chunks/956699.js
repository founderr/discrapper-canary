n(47120), n(411104);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(392711),
    o = n.n(a),
    c = n(268146),
    d = n(442837),
    u = n(692547),
    m = n(481060),
    h = n(570140),
    g = n(661111),
    p = n(179658),
    x = n(491428),
    S = n(225433),
    T = n(484614),
    E = n(615287),
    C = n(386506),
    _ = n(865427),
    f = n(802098),
    I = n(663993),
    N = n(600164),
    A = n(118012),
    b = n(482215),
    v = n(38618),
    j = n(32300),
    O = n(371651),
    R = n(388627),
    P = n(921801),
    D = n(857192),
    y = n(558724),
    B = n(808506),
    L = n(998502),
    Z = n(210887),
    F = n(601948),
    M = n(726985),
    k = n(981631),
    w = n(908442),
    U = n(282535),
    V = n(684309),
    G = n(232186),
    Y = n(763971);
function H(e, t, n) {
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
let z = ['discord_web', 'discord_marketing', 'discord_developers', 'discord_ios', 'discord_android'],
    W = [
        {
            value: 'branch',
            label: 'Branch Name'
        },
        {
            value: 'id',
            label: 'Commit SHA'
        }
    ];
function K(e) {
    return 'discord_ios' in e || 'discord_android' in e;
}
class q extends s.Component {
    render() {
        let { project: e, overrideType: t, overrideId: n, disabled: s, error: r } = this.props;
        return (0, i.jsxs)(N.Z, {
            direction: N.Z.Direction.VERTICAL,
            className: l()(U.buildOverrideGroup, G.marginBottom20, V.card, U.row),
            children: [
                (0, i.jsx)(S.Z, {
                    className: l()(U.removeBuildOverride, { [U.removeBuildOverrideDisabled]: s }),
                    onClick: s ? void 0 : this.handleRemoveBuildOverride
                }),
                (0, i.jsxs)(N.Z, {
                    className: G.marginBottom8,
                    children: [
                        (0, i.jsx)(N.Z.Child, {
                            basis: '50%',
                            children: (0, i.jsx)(m.FormItem, {
                                title: 'Override Type',
                                className: U.item,
                                children: (0, i.jsx)(m.SingleSelect, {
                                    options: W,
                                    onChange: this.handleOverrideTypeChanged,
                                    value: t,
                                    isDisabled: s
                                })
                            })
                        }),
                        (0, i.jsx)(N.Z.Child, {
                            basis: '50%',
                            children: (0, i.jsx)(m.FormItem, {
                                title: 'branch' === t ? 'Branch Name' : 'Commit SHA',
                                className: U.item,
                                children: (0, i.jsx)(m.TextInput, {
                                    value: n,
                                    onChange: this.handleOverrideIdChanged,
                                    disabled: s
                                })
                            })
                        })
                    ]
                }),
                (0, i.jsxs)(N.Z.Child, {
                    children: [
                        null != r &&
                            '' !== r &&
                            (0, i.jsx)(m.FormText, {
                                className: U.item,
                                style: { color: u.Z.unsafe_rawColors.RED_400.css },
                                type: m.FormText.Types.DESCRIPTION,
                                children: r
                            }),
                        (0, i.jsxs)(m.FormText, {
                            className: U.item,
                            type: m.FormText.Types.DESCRIPTION,
                            children: ['This controls the build that will be served for the ', (0, i.jsx)('code', { children: e }), ' project.']
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            H(this, 'handleRemoveBuildOverride', () => {
                this.props.onBuildOverrideRemoved(this.props.project);
            }),
            H(this, 'handleOverrideIdChanged', (e) => {
                this.props.onBuildOverrideUpdated(this.props.project, { id: e });
            }),
            H(this, 'handleOverrideTypeChanged', (e) => {
                this.props.onBuildOverrideUpdated(this.props.project, {
                    type: e,
                    id: ''
                });
            });
    }
}
class X extends s.Component {
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, _.Ce)();
        this.setState({
            loading: !1,
            buildOverrides: e,
            loadedBuildOverrides: o().cloneDeep(e),
            errors: {}
        });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !o().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return o().without(z, ...t);
    }
    renderEmpty() {
        return (0, i.jsxs)(m.EmptyState, {
            theme: Z.Z.theme,
            className: l()(G.marginTop40, G.marginBottom20),
            children: [
                (0, i.jsx)(m.EmptyStateImage, {
                    darkSrc: n(770227),
                    lightSrc: n(398684),
                    width: 294,
                    height: 192
                }),
                (0, i.jsx)(m.EmptyStateText, { children: 'You have no build overrides configured.' })
            ]
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : o().map(e, (e, s) =>
                  (0, i.jsx)(
                      q,
                      {
                          project: s,
                          overrideType: e.type,
                          overrideId: e.id,
                          disabled: t,
                          error: n[s],
                          onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
                          onBuildOverrideRemoved: this.handleBuildOverrideRemoved
                      },
                      s
                  )
              );
    }
    renderRefreshButton() {
        return !this.state.didSave || this.isDirty()
            ? null
            : (0, i.jsx)(N.Z, {
                  grow: 0,
                  direction: N.Z.Direction.HORIZONTAL_REVERSE,
                  children: (0, i.jsx)(N.Z.Child, {
                      grow: 0,
                      children: (0, i.jsx)(m.Button, {
                          onClick: () => location.reload(),
                          color: m.Button.Colors.PRIMARY,
                          children: 'Reload App'
                      })
                  })
              });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, i.jsx)(N.Z, {
                  grow: 0,
                  direction: N.Z.Direction.HORIZONTAL_REVERSE,
                  children: (0, i.jsx)(N.Z.Child, {
                      grow: 0,
                      children: (0, i.jsx)(m.Button, {
                          onClick: this.handleLinkGeneration,
                          color: m.Button.Colors.BRAND,
                          children: 'Generate Public Link'
                      })
                  })
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, i.jsxs)(N.Z, {
            grow: 0,
            direction: N.Z.Direction.HORIZONTAL_REVERSE,
            children: [
                (0, i.jsx)(N.Z.Child, {
                    grow: 0,
                    children: (0, i.jsx)(m.Button, {
                        disabled: K(null != t ? t : {}),
                        onClick: this.handleSaveChanges,
                        submitting: e,
                        color: m.Button.Colors.GREEN,
                        children: 'Save Build Overrides'
                    })
                }),
                (0, i.jsx)(N.Z.Child, {
                    grow: 0,
                    children: (0, i.jsx)(m.Button, {
                        onClick: this.handleDiscardChanges,
                        disabled: e,
                        color: m.Button.Colors.RED,
                        children: 'Discard Changes'
                    })
                })
            ]
        });
    }
    render() {
        let e;
        let { loading: t, saving: n, buildOverrides: s } = this.state;
        e = t ? (0, i.jsx)(m.Spinner, { className: G.marginTop20 }) : null != s && 0 === Object.keys(s).length ? this.renderEmpty() : this.renderItems();
        let r = !n && !t && this.getAvailableProjects().length > 0,
            l =
                K(null != s ? s : {}) && 'stable' !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, i.jsx)(m.Text, {
                          color: 'text-danger',
                          variant: 'text-md/normal',
                          children: 'Mobile build overrides must be generated using the desktop/web stable client for now!'
                      })
                    : null;
        return (0, i.jsx)(P.F, {
            setting: M.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE,
            children: (0, i.jsxs)(m.FormSection, {
                className: G.marginTop60,
                children: [
                    (0, i.jsxs)(N.Z, {
                        className: G.marginBottom20,
                        children: [
                            (0, i.jsx)(N.Z.Child, {
                                children: (0, i.jsx)(m.FormTitle, {
                                    tag: m.FormTitleTags.H1,
                                    children: 'Build Overrides'
                                })
                            }),
                            (0, i.jsx)(N.Z.Child, {
                                grow: 0,
                                children: (0, i.jsx)(m.Button, {
                                    size: m.ButtonSizes.SMALL,
                                    onClick: this.handleAddBuildOverride,
                                    disabled: !r,
                                    children: 'Add Build Override'
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(m.FormDivider, {}),
                    (0, i.jsxs)(N.Z, {
                        direction: N.Z.Direction.VERTICAL,
                        children: [
                            l,
                            e,
                            (0, i.jsxs)(N.Z, {
                                grow: 0,
                                direction: N.Z.Direction.HORIZONTAL_REVERSE,
                                children: [this.renderRefreshButton(), this.renderSaveButton(), this.renderLinkButton()]
                            })
                        ]
                    })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            H(this, 'state', {
                loading: !0,
                buildOverrides: {},
                loadedBuildOverrides: {},
                errors: {},
                saving: !1,
                didSave: !1
            }),
            H(this, 'handleAddBuildOverride', async () => {
                var e;
                let t = await ((e = this.getAvailableProjects()),
                new Promise((t) => {
                    (0, m.openModal)((n) => {
                        let s = (e) => {
                            n.onClose(), t(e);
                        };
                        return (0, i.jsxs)(m.ModalRoot, {
                            ...n,
                            'aria-label': 'Choose A Project to Override',
                            children: [
                                (0, i.jsx)(m.ModalHeader, {
                                    separator: !1,
                                    children: (0, i.jsx)(m.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: 'Choose A Project to Override'
                                    })
                                }),
                                (0, i.jsx)(m.ModalContent, {
                                    children: (0, i.jsx)('div', {
                                        className: U.buildOverrideList,
                                        children: e.map((e) =>
                                            (0, i.jsx)(
                                                m.Button,
                                                {
                                                    value: e,
                                                    color: m.Button.Colors.GREEN,
                                                    onClick: () => s(e),
                                                    children: e
                                                },
                                                e
                                            )
                                        )
                                    })
                                }),
                                (0, i.jsx)(m.ModalFooter, {
                                    children: (0, i.jsx)(m.Button, {
                                        color: m.Button.Colors.PRIMARY,
                                        look: m.Button.Looks.LINK,
                                        onClick: () => s(null),
                                        children: 'Nevermind'
                                    })
                                })
                            ]
                        });
                    });
                }));
                if (null == t) return;
                let n = {
                    ...this.state.buildOverrides,
                    [t]: {
                        type: 'branch',
                        id: ''
                    }
                };
                this.setState({ buildOverrides: n });
            }),
            H(this, 'handleBuildOverrideUpdated', (e, t) => {
                let { buildOverrides: n } = this.state,
                    i = {
                        ...(null != n ? n[e] : {}),
                        ...t
                    },
                    s = {
                        ...this.state.buildOverrides,
                        [e]: i
                    };
                this.setState({ buildOverrides: s });
            }),
            H(this, 'handleBuildOverrideRemoved', (e) => {
                let t = { ...this.state.buildOverrides };
                delete t[e], this.setState({ buildOverrides: t });
            }),
            H(this, 'handleDiscardChanges', () => {
                this.setState({
                    buildOverrides: o().cloneDeep(this.state.loadedBuildOverrides),
                    errors: {},
                    didSave: !1
                });
            }),
            H(this, 'handleSaveChanges', async () => {
                let { buildOverrides: e } = this.state;
                if (null == e) return;
                this.setState({ saving: !0 });
                let t = await (0, C.aD)(e);
                if (200 === t.status) {
                    let e = t.body;
                    this.setState({
                        buildOverrides: e,
                        loadedBuildOverrides: o().cloneDeep(e),
                        errors: {},
                        didSave: !0,
                        saving: !1
                    });
                } else if (400 === t.status) {
                    let e = t.body;
                    this.setState({
                        errors: e,
                        saving: !1,
                        didSave: !1
                    });
                } else
                    this.setState({
                        saving: !1,
                        didSave: !1
                    });
            }),
            H(this, 'handleLinkGeneration', () => {
                let { buildOverrides: e } = this.state;
                (0, m.openModal)((t) =>
                    (0, i.jsx)(Q, {
                        ...t,
                        buildOverrides: e
                    })
                );
            });
    }
}
class Q extends s.Component {
    isMobile() {
        var e;
        return K(null !== (e = this.props.buildOverrides) && void 0 !== e ? e : {});
    }
    renderSettingsForm() {
        let { ttlSeconds: e, releaseChannel: t, userIdEntry: n, userIdEntryError: s, allowedVersions: r, allowedVersionEntry: l, allowedVersionEntryError: a, allowLoggedOut: o, experiments: c, experimentsError: d } = this.state,
            u = w.S6.find((t) => t.value === e),
            h = r.map((e) => ({
                label: e,
                value: e
            }));
        return (0, i.jsxs)(N.Z.Child, {
            basis: '70%',
            children: [
                (0, i.jsx)(m.FormItem, {
                    title: 'Expire After',
                    className: G.marginBottom20,
                    children: (0, i.jsx)(m.SingleSelect, {
                        value: null != u ? u.value : null,
                        options: w.S6,
                        onChange: this.handleExpirationChange
                    })
                }),
                this.isMobile()
                    ? null
                    : (0, i.jsx)(m.FormItem, {
                          title: 'Release Channel',
                          className: G.marginBottom20,
                          children: (0, i.jsx)(m.SingleSelect, {
                              value: t,
                              options: w.F$,
                              onChange: this.handleReleaseChannelChange
                          })
                      }),
                this.isMobile()
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(m.FormItem, {
                                  title: 'Add allowed app version (required)',
                                  className: G.marginBottom20,
                                  children: (0, i.jsxs)(N.Z, {
                                      direction: N.Z.Direction.HORIZONTAL,
                                      children: [
                                          (0, i.jsx)(N.Z.Child, {
                                              wrap: !0,
                                              basis: '90%',
                                              children: (0, i.jsx)(m.TextInput, {
                                                  autoFocus: !0,
                                                  value: l,
                                                  onKeyPress: this.handleAllowedVersionEnter,
                                                  error: a,
                                                  onChange: this.handleAllowedVersionEntry,
                                                  placeholder: 'Example: 34'
                                              })
                                          }),
                                          (0, i.jsx)(m.Button, {
                                              onClick: this.handleAddAllowedVersion,
                                              children: 'Add'
                                          })
                                      ]
                                  })
                              }),
                              (0, i.jsx)(m.FormItem, {
                                  title: 'Remove allowed app version',
                                  className: G.marginBottom20,
                                  children: (0, i.jsx)(m.SingleSelect, {
                                      value: null,
                                      options: h,
                                      onChange: this.handleRemoveAllowedVersion,
                                      isDisabled: 0 === r.length
                                  })
                              })
                          ]
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsxs)(m.FormItem, {
                              title: 'Limit to User IDs (optional)',
                              className: G.marginBottom20,
                              children: [
                                  (0, i.jsx)(N.Z, {
                                      direction: N.Z.Direction.HORIZONTAL,
                                      children: (0, i.jsx)(N.Z.Child, {
                                          wrap: !0,
                                          basis: '90%',
                                          children: (0, i.jsx)(m.TextArea, {
                                              value: n,
                                              error: s,
                                              onBlur: () => this.setUserEntryError(''),
                                              onChange: this.handleUserIDEntry
                                          })
                                      })
                                  }),
                                  (0, i.jsx)(m.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      className: G.marginTop8,
                                      children: 'User IDs can be separated by whitespace or commas.'
                                  })
                              ]
                          })
                      }),
                (0, i.jsxs)(m.FormItem, {
                    title: 'Client Experiment Override',
                    className: G.marginBottom20,
                    children: [
                        (0, i.jsx)(N.Z, {
                            direction: N.Z.Direction.HORIZONTAL,
                            children: (0, i.jsx)(N.Z.Child, {
                                wrap: !0,
                                basis: '90%',
                                children: (0, i.jsx)(m.TextArea, {
                                    value: c,
                                    error: d,
                                    onChange: this.handleExperiments,
                                    placeholder: '{"2022-01_threads":1}'
                                })
                            })
                        }),
                        (0, i.jsx)(m.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            className: G.marginTop8,
                            children: 'Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.'
                        })
                    ]
                }),
                (0, i.jsx)(m.FormSwitch, {
                    onChange: this.handleAllowLoggedOut,
                    value: o,
                    children: 'Allow logged out users'
                })
            ]
        });
    }
    renderPayloadBlock() {
        let e = JSON.stringify(this.generatePayload(), null, 2),
            t = () => e,
            s = (0, i.jsx)(I.GI, {
                createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                webpackId: 364964,
                renderFallback: t,
                render: (n) => {
                    let s = n.highlight('json', e, !0);
                    return null == s
                        ? t()
                        : (0, i.jsx)('code', {
                              className: 'hljs scroller '.concat(s.language, ' ').concat(Y.scrollbarGhost, ' ').concat(U.codebox),
                              dangerouslySetInnerHTML: { __html: s.value }
                          });
                }
            });
        return (0, i.jsx)(N.Z.Child, { children: (0, i.jsx)(m.Card, { children: (0, i.jsx)('pre', { children: s }) }) });
    }
    renderLinkForm() {
        let { statusTextColor: e, statusText: t, publicLink: n } = this.state;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(m.FormItem, {
                    title: 'Signed Link',
                    children: (0, i.jsxs)(N.Z, {
                        children: [
                            (0, i.jsx)(N.Z.Child, {
                                wrap: !0,
                                basis: '75%',
                                children: (0, i.jsx)(T.Z, { value: n })
                            }),
                            (0, i.jsx)(m.Button, {
                                onClick: this.handleGenerateLink,
                                children: 'Generate Link'
                            })
                        ]
                    })
                }),
                (0, i.jsx)(A.Z, {
                    color: e,
                    className: ''.concat(G.marginBottom8, ' ').concat(G.marginTop8),
                    children: t
                })
            ]
        });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props;
        return (0, i.jsxs)(m.ModalRoot, {
            size: m.ModalSize.LARGE,
            transitionState: t,
            'aria-label': 'Generate Public Build Override Link',
            children: [
                (0, i.jsxs)(m.ModalHeader, {
                    justify: N.Z.Justify.BETWEEN,
                    separator: !1,
                    children: [
                        (0, i.jsx)(m.Heading, {
                            variant: 'heading-lg/semibold',
                            children: 'Generate Public Build Override Link'
                        }),
                        (0, i.jsx)(m.ModalCloseButton, { onClick: e })
                    ]
                }),
                (0, i.jsxs)(m.ModalContent, {
                    children: [
                        (0, i.jsxs)(N.Z, {
                            children: [this.renderSettingsForm(), this.renderPayloadBlock()]
                        }),
                        this.renderLinkForm()
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            H(this, 'state', {
                ttlSeconds: 3600,
                releaseChannel: 'all',
                userIds: new Set(),
                userIdEntry: '',
                userIdEntryError: null,
                allowedVersions: [],
                allowedVersionEntry: '',
                allowedVersionEntryError: null,
                publicLink: ' ',
                statusText: null,
                statusTextColor: A.Z.Colors.STATUS_RED,
                allowLoggedOut: !1
            }),
            H(this, 'setUserEntryError', (e) => {
                this.setState({ userIdEntryError: e });
            }),
            H(this, 'setStatusMessage', (e, t) => {
                this.setState({
                    statusText: e,
                    statusTextColor: null != t ? t : A.Z.Colors.STATUS_RED
                });
            }),
            H(this, 'handleUserIDEntry', (e) => {
                if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError('User IDs are numbers!');
                let t = new Set(e.split(/[,\s]+/).filter(Boolean));
                this.setState({
                    userIdEntry: e,
                    userIds: t
                });
            }),
            H(this, 'setAllowedVersionError', (e) => {
                this.setState({ allowedVersionEntryError: e });
            }),
            H(this, 'handleAllowedVersionEntry', (e) => {
                this.setState({ allowedVersionEntry: e });
            }),
            H(this, 'handleAllowedVersionEnter', (e) => {
                e.charCode === k.yXg.ENTER && this.handleAddAllowedVersion();
            }),
            H(this, 'handleAddAllowedVersion', () => {
                let { allowedVersions: e, allowedVersionEntry: t } = this.state;
                return 0 === (t = t.trim()).length
                    ? this.setAllowedVersionError('Enter a valid version number!')
                    : e.indexOf(t) >= 0
                      ? this.setAllowedVersionError('You already added that version!')
                      : void this.setState({
                            allowedVersions: [...e, t],
                            allowedVersionEntry: '',
                            allowedVersionEntryError: ''
                        });
            }),
            H(this, 'handleRemoveAllowedVersion', (e) => {
                let { allowedVersions: t } = this.state;
                (t = t.filter((t) => t !== e)), this.setState({ allowedVersions: t });
            }),
            H(this, 'handleAllowLoggedOut', (e) => {
                this.setState({ allowLoggedOut: e });
            }),
            H(this, 'handleExpirationChange', (e) => {
                this.setState({ ttlSeconds: e });
            }),
            H(this, 'handleReleaseChannelChange', (e) => {
                this.setState({ releaseChannel: e });
            }),
            H(this, 'handleExperiments', (e) => {
                if (0 === e.trim().length) {
                    this.setState({ experimentsError: void 0 });
                    return;
                }
                try {
                    let t = JSON.parse(e);
                    for (let e in t) {
                        if (null == e.match(/^[0-9]{4}\-[0-9]{2}_[a-z0-9_]+$/)) {
                            this.setState({ experimentsError: ''.concat(e, ' is an invalid experiment name') });
                            return;
                        }
                        if ('number' != typeof t[e]) {
                            this.setState({ experimentsError: ''.concat(e, ' has an invalid bucket override') });
                            return;
                        }
                    }
                } catch (e) {
                    this.setState({ experimentsError: 'Unable to parse experiments '.concat(e.message) });
                    return;
                }
                this.setState({
                    experiments: e,
                    experimentsError: void 0
                });
            }),
            H(this, 'generatePayload', () => ({
                overrides: this.props.buildOverrides,
                meta: {
                    release_channel: 'all' === this.state.releaseChannel ? null : this.state.releaseChannel,
                    ttl_seconds: this.state.ttlSeconds,
                    user_ids: Array.from(this.state.userIds),
                    allowed_versions: this.isMobile() ? this.state.allowedVersions : void 0,
                    allow_logged_out: this.state.allowLoggedOut,
                    experiments: null == this.state.experiments ? null : JSON.parse(this.state.experiments)
                }
            })),
            H(this, 'handleGenerateLink', async () => {
                if (this.isMobile() && 0 === this.state.allowedVersions.length) {
                    this.setAllowedVersionError('You must add at least one allowed version for iOS');
                    return;
                }
                this.setStatusMessage(null);
                let e = this.generatePayload(),
                    t = await (0, C.M3)(e);
                !1 !== t.error ? this.setStatusMessage(JSON.stringify(t.error), A.Z.Colors.STATUS_RED) : (this.setState({ publicLink: t.url.toString() }), 0 === e.meta.user_ids.length && this.setStatusMessage('Warning! No users added to the whitelist! This link could be used by anyone to override their build.', A.Z.Colors.STATUS_YELLOW));
            });
    }
}
function J(e) {
    let { layoutDebuggingEnabled: t, cssDebuggingEnabled: n } = e,
        { horizontalSpacing: r, verticalSpacing: l, maxHorizontalSpacing: a, maxVerticalSpacing: o } = (0, b.i)(),
        c = s.useMemo(() => Array.from({ length: a + 1 }, (e, t) => t), [a]),
        d = s.useMemo(() => Array.from({ length: o + 1 }, (e, t) => t), [o]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.FormTitle, {
                tag: m.FormTitleTags.H1,
                children: 'Design Tools'
            }),
            (0, i.jsx)(P.F, {
                setting: M.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING,
                children: (0, i.jsx)(m.FormSwitch, {
                    value: n,
                    note: 'Display raw colors as pink. Toggling this will refresh the browser.',
                    onChange: (e) => {
                        (0, p.y)({ cssDebuggingEnabled: e }), setTimeout(() => location.reload(), 500);
                    },
                    children: 'Enable CSS Debugging'
                })
            }),
            (0, i.jsx)(P.F, {
                setting: M.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING,
                children: (0, i.jsx)(m.FormSwitch, {
                    value: t,
                    note: 'Renders a grid on top of the app to help debug layout alignment issues.',
                    onChange: (e) => {
                        (0, p.y)({ layoutDebuggingEnabled: e });
                    },
                    children: 'Enable Layout Debugging'
                })
            }),
            (0, i.jsxs)(P.F, {
                setting: M.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS,
                children: [
                    (0, i.jsxs)(m.FormSection, {
                        className: G.marginBottom20,
                        children: [
                            (0, i.jsx)(m.FormTitle, { children: 'Horizontal Grid Spacing' }),
                            (0, i.jsx)(m.FormText, {
                                className: G.marginBottom20,
                                type: m.FormTextTypes.DESCRIPTION,
                                children: 'Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.'
                            }),
                            (0, i.jsx)(m.Slider, {
                                initialValue: r,
                                minValue: 0,
                                maxValue: a,
                                markers: c,
                                onValueChange: (e) => b.i.getState().setHorizontalSpacing(e),
                                onValueRender: (e) => ''.concat(Math.round(e), 'px'),
                                onMarkerRender: (e) => (e % 4 == 0 ? ''.concat(e) : void 0),
                                equidistant: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)(m.FormSection, {
                        className: G.marginBottom20,
                        children: [
                            (0, i.jsx)(m.FormTitle, { children: 'Vertical Grid Spacing' }),
                            (0, i.jsx)(m.FormText, {
                                className: G.marginBottom20,
                                type: m.FormTextTypes.DESCRIPTION,
                                children: 'Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.'
                            }),
                            (0, i.jsx)(m.Slider, {
                                initialValue: l,
                                minValue: 0,
                                maxValue: o,
                                markers: d,
                                onValueChange: (e) => b.i.getState().setVerticalSpacing(e),
                                onValueRender: (e) => ''.concat(Math.round(e), 'px'),
                                onMarkerRender: (e) => (e % 4 == 0 ? ''.concat(e) : void 0),
                                equidistant: !0
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function $() {
    throw Error('Send help');
}
function ee() {
    let e = (0, j.XE)('developer_settings'),
        t = (0, d.e7)([O.Z], () => O.Z.getForcedRenderMode()),
        [n, r] = s.useState(!1),
        [l, a] = s.useState(''),
        o = e || t === E.R5.OUT_OF_PROCESS_V2 || t === E.R5.OUT_OF_PROCESS_V3;
    return (s.useEffect(() => {
        (async () => {
            a(await (0, B.Y)());
        })();
    }, []),
    n)
        ? {}
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: [U.buttonsContainer, G.marginBottom20].join(' '),
                      children: [
                          (0, i.jsx)(P.F, {
                              setting: M.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY,
                              children: o
                                  ? (0, i.jsx)(m.Button, {
                                        onClick: () => (0, R.fK)(),
                                        children: 'Open Overlay'
                                    })
                                  : (0, i.jsx)(m.Button, {
                                        onClick: () => window.open(l, '_blank'),
                                        disabled: '' === l,
                                        children: 'Open Overlay'
                                    })
                          }),
                          (0, i.jsx)(P.F, {
                              setting: M.s6.DEVELOPER_OPTIONS_RESET_SOCKET,
                              children: (0, i.jsx)(m.Button, {
                                  onClick: () => {
                                      v.Z.getSocket().close(), v.Z.getSocket().connect();
                                  },
                                  children: 'Reset Socket'
                              })
                          }),
                          (0, i.jsx)(P.F, {
                              setting: M.s6.DEVELOPER_OPTIONS_CLEAR_CACHES,
                              children: (0, i.jsx)(m.Button, {
                                  onClick: () => {
                                      h.Z.dispatch({
                                          type: 'CLEAR_CACHES',
                                          reason: 'Requested by user',
                                          preventWritingCachesAgainThisSession: !0,
                                          resetSocket: !0
                                      });
                                  },
                                  children: 'Clear Caches'
                              })
                          })
                      ]
                  }),
                  (0, i.jsx)(P.F, {
                      setting: M.s6.DEVELOPER_OPTIONS_CRASHES,
                      children: (0, i.jsx)(m.FormSection, {
                          title: 'Crashes',
                          tag: m.FormTitleTags.H1,
                          children: (0, i.jsxs)('div', {
                              className: U.buttonsContainer,
                              children: [
                                  (0, i.jsx)(m.SingleSelect, {
                                      value: void 0,
                                      options: [
                                          {
                                              value: void 0,
                                              label: 'Native libdiscord crash'
                                          },
                                          {
                                              value: 0,
                                              label: 'Abort()'
                                          },
                                          {
                                              value: 1,
                                              label: 'SIGSEGV()'
                                          },
                                          {
                                              value: 2,
                                              label: 'EXCEPTION_ACCESS_VIOLATION'
                                          },
                                          {
                                              value: 3,
                                              label: 'RaiseFailFastException'
                                          },
                                          {
                                              value: 4,
                                              label: 'Out of Memory'
                                          }
                                      ],
                                      onChange: (e) => null != e && L.ZP.crash(e)
                                  }),
                                  (0, i.jsx)(m.SingleSelect, {
                                      value: void 0,
                                      options: [
                                          {
                                              value: void 0,
                                              label: 'Native JS crash'
                                          },
                                          {
                                              value: c.Xo.RendererProcessDelayed,
                                              label: 'Delayed exception in renderer process'
                                          },
                                          {
                                              value: c.Xo.RendererProcess,
                                              label: 'Exception in renderer process'
                                          },
                                          {
                                              value: c.Xo.MainProcess,
                                              label: 'Exception in main process'
                                          }
                                      ],
                                      onChange: (e) => {
                                          var t;
                                          return null != e ? ((t = e), void L.ZP.triggerJSException(t)) : void 0;
                                      }
                                  }),
                                  (0, i.jsx)(m.Button, {
                                      onClick: () => r(!0),
                                      children: 'React Crash'
                                  }),
                                  (0, i.jsx)(m.Button, {
                                      onClick: $,
                                      children: 'onClick Throw'
                                  })
                              ]
                          })
                      })
                  })
              ]
          });
}
let et = d.ZP.connectStores([D.default], () => ({
    isTracingRequests: D.default.isTracingRequests,
    isForcedCanary: D.default.isForcedCanary,
    isLoggingGatewayEvents: D.default.isLoggingGatewayEvents,
    isLoggingOverlayEvents: D.default.isLoggingOverlayEvents,
    isLoggingAnalyticsEvents: D.default.isLoggingAnalyticsEvents,
    isAxeEnabled: D.default.isAxeEnabled,
    cssDebuggingEnabled: D.default.cssDebuggingEnabled,
    layoutDebuggingEnabled: D.default.layoutDebuggingEnabled,
    isSourceMapsEnabled: D.default.sourceMapsEnabled,
    isAnalyticsDebuggerEnabled: D.default.isAnalyticsDebuggerEnabled,
    isIdleStatusIndicatorEnabled: D.default.isIdleStatusIndicatorEnabled,
    appDirectoryIncludesInactiveCollections: D.default.appDirectoryIncludesInactiveCollections,
    preventPopoutClose: D.default.preventPopoutClose
}))((e) => {
    let { isTracingRequests: t, isForcedCanary: n, isLoggingGatewayEvents: s, isLoggingOverlayEvents: r, isLoggingAnalyticsEvents: l, isAxeEnabled: a, cssDebuggingEnabled: o, layoutDebuggingEnabled: c, isSourceMapsEnabled: d, isAnalyticsDebuggerEnabled: u, isIdleStatusIndicatorEnabled: h, appDirectoryIncludesInactiveCollections: g, preventPopoutClose: x } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(P.F, {
                setting: M.s6.DEVELOPER_OPTIONS_FLAGS,
                children: (0, i.jsxs)(m.FormSection, {
                    title: 'Developer Flags',
                    tag: m.FormTitleTags.H1,
                    children: [
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: t,
                                note: 'Force trace all client requests with APM',
                                onChange: (e) => (0, p.y)({ trace: e }),
                                children: 'Enable Tracing Requests'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_FORCED_CANARY,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: n,
                                note: 'Force all API requests to canary instances',
                                onChange: (e) => (0, p.y)({ canary: e }),
                                children: 'Enable Forced Canary'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: s,
                                note: 'Logs all incoming and outgoing gateway events to the developer console, enable verbose logging in the developer console to see! This includes all message content.',
                                onChange: (e) => (0, p.y)({ logGatewayEvents: e }),
                                children: 'Enable Logging of Gateway Events to Console'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: r,
                                note: 'Logs all overlay related RPC events. Super noisy if an overlay is connected',
                                onChange: (e) => (0, p.y)({ logOverlayEvents: e }),
                                children: 'Enable Logging of Overlay RPC Events & Commands'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: l,
                                note: 'Logs all analytics events to the developer console',
                                onChange: (e) => (0, p.y)({ logAnalyticsEvents: e }),
                                children: 'Enable Logging of Analytics Events'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_SOURCE_MAPS,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: d,
                                note: 'Only enable on devices you trust.',
                                onChange: (e) => (0, p.y)({ sourceMapsEnabled: e }),
                                children: 'Enable source maps to be loaded on this client'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: u,
                                note: 'Displays a floating debugger with viewed impressions',
                                onChange: (e) => (0, p.y)({ analyticsDebuggerEnabled: e }),
                                children: 'Enable standard analytics debugger view'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: h,
                                note: 'Displays a floating idle status indicator',
                                onChange: (e) => (0, p.y)({ idleStatusIndicatorEnabled: e }),
                                children: 'Enable idle status indicator'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: a,
                                note: 'Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development',
                                onChange: (e) => (0, p.y)({ axeEnabled: e }),
                                children: 'Enable Accessibility Auditing'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: x,
                                note: 'This is to enable viewing console logs for popout crashes. This may leave your app/popout in a weird state.',
                                onChange: (e) => (0, p.y)({ preventPopoutClose: e }),
                                children: 'Prevent Popouts From Closing Automatically'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: g,
                                note: 'In App Directory, include inactive collections on the homepage. Use this to preview changes to collections before publishing them.',
                                onChange: (e) => (0, p.y)({ appDirectoryIncludesInactiveCollections: e }),
                                children: 'Preview Unpublished Collections on App Directory Homepage'
                            })
                        }),
                        (0, i.jsxs)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                            children: [
                                (0, i.jsx)('div', {
                                    className: [U.buttonsContainer, G.marginBottom20].join(' '),
                                    children: (0, i.jsx)(F.S, {})
                                }),
                                (0, i.jsx)(m.FormDivider, { className: U.divider })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsx)(J, {
                layoutDebuggingEnabled: c,
                cssDebuggingEnabled: o
            })
        ]
    });
});
function en() {
    let e = (0, d.e7)([y.Z], () => y.Z.getSurveyOverride()),
        [t, n] = s.useState(null != e ? e : '');
    return (0, i.jsx)(P.F, {
        setting: M.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE,
        children: (0, i.jsxs)(m.FormSection, {
            tag: m.FormTitleTags.H1,
            title: 'Survey Override',
            className: G.marginTop60,
            children: [
                (0, i.jsx)(m.FormTitle, { children: 'Copy the ID of the Survey you want to test:' }),
                (0, i.jsxs)('form', {
                    className: U.surveyOverride,
                    onSubmit: (e) => {
                        e.preventDefault(), t.length > 0 ? x.Xq(t) : x.Xq(null);
                    },
                    children: [
                        (0, i.jsx)(m.TextInput, {
                            className: U.surveyOverrideInput,
                            value: t,
                            onChange: n
                        }),
                        (0, i.jsx)(m.Button, {
                            type: 'submit',
                            children: 'Save Override'
                        })
                    ]
                })
            ]
        })
    });
}
function ei() {
    var e;
    let t = (0, d.e7)([f.Z], () => f.Z.overrideId()),
        [n, r] = s.useState(null !== (e = f.Z.overrideId()) && void 0 !== e ? e : '');
    return (0, i.jsx)(P.F, {
        setting: M.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE,
        children: (0, i.jsxs)(m.FormSection, {
            tag: m.FormTitleTags.H1,
            title: 'Changelog Override',
            className: G.marginTop60,
            children: [
                (0, i.jsx)(m.FormTitle, { children: 'Enter the ID of the changelog you want to test' }),
                (0, i.jsxs)('div', {
                    className: U.surveyOverride,
                    children: [
                        (0, i.jsx)(m.TextInput, {
                            className: U.surveyOverrideInput,
                            value: n,
                            onChange: r
                        }),
                        (0, i.jsx)(m.Button, {
                            onClick: () => {
                                '' === n ? g.Z.setChangelogOverride(null) : g.Z.setChangelogOverride(n);
                            },
                            disabled: t === n,
                            children: 'Update Changelog'
                        })
                    ]
                })
            ]
        })
    });
}
class es extends s.PureComponent {
    render() {
        return (0, i.jsxs)(s.Fragment, {
            children: [(0, i.jsx)(et, {}), (0, i.jsx)(ee, {}), (0, i.jsx)(en, {}), (0, i.jsx)(ei, {}), (0, i.jsx)(X, {})]
        });
    }
}
t.Z = es;
