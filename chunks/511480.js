n.d(t, {
    s: function () {
        return H;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(772848),
    s = n(442837),
    a = n(481060),
    o = n(852860),
    c = n(558324),
    d = n(933557),
    u = n(719879),
    m = n(59970),
    h = n(946314),
    g = n(938502),
    x = n(1259),
    p = n(296386),
    f = n(150192),
    C = n(816817),
    v = n(339085),
    _ = n(231053),
    I = n(285888),
    N = n(134432),
    T = n(813197),
    j = n(208567),
    b = n(183023),
    S = n(984933),
    E = n(496675),
    R = n(699516),
    Z = n(594174),
    y = n(768581),
    A = n(900849),
    L = n(434404),
    D = n(999382),
    O = n(450474),
    k = n(354051),
    M = n(347604),
    P = n(203377),
    w = n(981631),
    B = n(731455),
    U = n(388032),
    G = n(606217);
function F(e, t, n) {
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
let H = s.ZP.connectStores([D.Z], () => {
    let { guild: e, originalGuild: t, submitting: n, guildMetadata: i } = D.Z.getProps();
    return {
        guild: e,
        submitting: n,
        onReset() {
            if (null != e) L.Z.init(e.id);
        },
        onSave() {
            if (null != e)
                (0, g.UA)(e, t),
                    L.Z.saveGuild(e.id, {
                        features: e.features,
                        discoverySplash: e.discoverySplash,
                        description: e.description,
                        safetyAlertsChannelId: e.safetyAlertsChannelId,
                        rulesChannelId: e.rulesChannelId,
                        preferredLocale: e.preferredLocale
                    }),
                    p.Vv({
                        guildId: e.id,
                        primaryCategoryId: i.primaryCategoryId,
                        keywords: i.keywords,
                        emojiDiscoverabilityEnabled: i.emojiDiscoverabilityEnabled,
                        partnerActionedTimestamp: i.partnerActionedTimestamp,
                        partnerApplicationTimestamp: i.partnerApplicationTimestamp,
                        isPublished: i.isPublished,
                        reasonsToJoin: i.reasonsToJoin,
                        socialLinks: i.socialLinks,
                        about: i.about
                    });
        }
    };
})(o.Z);
class z extends r.PureComponent {
    async componentDidMount() {
        let { guild: e } = this.props;
        if (null != e) {
            (0, m.k)(e.id).then(() => {
                (0, u.V)(e.id);
            }),
                p.le(),
                p.aC(e.id);
            let t = await (0, A.Eg)(e.id);
            null != t && this.setState({ discoverableGuild: t }),
                this.checkForLowerMemberCountReqEnabled(e) &&
                    x.t.trackExposure({
                        guildId: e.id,
                        location: '006266_1'
                    });
        }
    }
    renderDiscoverableSection() {
        let { guild: e, isGuildAdmin: t } = this.props;
        if (null == e) return;
        let n = e.hasFeature(w.oNc.DISCOVERABLE);
        return (0, i.jsxs)(a.FormSection, {
            className: G.twoColumnFormSection,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(a.FormTitle, {
                            className: G.formTitle,
                            children: U.intl.string(U.t.XU0S6u)
                        }),
                        (0, i.jsx)(a.FormText, {
                            type: a.FormTextTypes.DESCRIPTION,
                            className: G.formDescription,
                            children: U.intl.string(U.t['IIiV/P'])
                        }),
                        (0, i.jsx)(a.FormText, {
                            type: a.FormTextTypes.DESCRIPTION,
                            className: G.formDescription,
                            children: U.intl.string(U.t.rSHA09)
                        }),
                        (0, i.jsx)(a.Tooltip, {
                            text: t ? null : U.intl.string(U.t['5VbUBw']),
                            children: (e) =>
                                (0, i.jsx)(a.Button, {
                                    size: a.Button.Sizes.SMALL,
                                    onClick: this.handleToggleDiscovery,
                                    color: n ? a.Button.Colors.PRIMARY : a.Button.Colors.GREEN,
                                    disabled: !t,
                                    ...e,
                                    children: n ? U.intl.string(U.t.VHHyFR) : U.intl.string(U.t.XU0S6u)
                                })
                        })
                    ]
                }),
                (0, i.jsx)(C.Z, {
                    className: G.guildCard,
                    loading: null == e,
                    guild: e
                })
            ]
        });
    }
    renderCoverImageSection() {
        let { guild: e, errors: t, canManageGuild: n } = this.props;
        if (null != e)
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)(a.FormSection, {
                        className: G.twoColumnFormSection,
                        children: [
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(a.FormTitle, {
                                        className: G.formTitle,
                                        children: U.intl.string(U.t['8bT/Cg'])
                                    }),
                                    (0, i.jsx)(a.FormText, {
                                        type: a.FormTextTypes.DESCRIPTION,
                                        className: G.formDescription,
                                        children: U.intl.string(U.t.Ltsutr)
                                    }),
                                    (0, i.jsxs)(a.Button, {
                                        size: a.Button.Sizes.SMALL,
                                        color: a.Button.Colors.PRIMARY,
                                        children: [
                                            U.intl.string(U.t.yG2pUl),
                                            (0, i.jsx)(T.ZP, {
                                                disabled: !n,
                                                onChange: this.handleSplashChange
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: G.imageUploaderWrapper,
                                children: (0, i.jsx)(j.Z, {
                                    image: e.discoverySplash,
                                    makeURL: (t) =>
                                        y.ZP.getGuildDiscoverySplashURL({
                                            id: e.id,
                                            splash: t,
                                            size: 512 * (0, N.x_)()
                                        }),
                                    disabled: !n,
                                    onChange: this.handleSplashChange,
                                    hint: U.intl.string(U.t.uPvxqK),
                                    imageClassName: G.imageUploaderInnerSquare,
                                    hideSize: !0
                                })
                            })
                        ]
                    }),
                    (null == t ? void 0 : t.discovery_splash) != null
                        ? (0, i.jsx)(a.Text, {
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              children: t.discovery_splash
                          })
                        : null
                ]
            });
    }
    renderEmojiDiscoverabilitySection() {
        var e;
        let { canManageGuild: t, guildMetadata: n, guild: r } = this.props,
            { discoverableGuild: s } = this.state,
            { emojiDiscoverabilityEnabled: o } = n,
            c = s;
        if (null == c && null != r) {
            let e = v.ZP.getGuildEmoji(r.id);
            c = {
                ...r,
                premiumSubscriptionCount: null == r ? void 0 : r.premiumSubscriberCount,
                emojis: e,
                emojiCount: e.length,
                presenceCount: 1234,
                memberCount: 1234
            };
        }
        let d = null != c ? _.JO.createFromDiscoverableGuild(c) : null,
            u = null == c ? void 0 : null === (e = c.emojis) || void 0 === e ? void 0 : e[0],
            m =
                null != u
                    ? {
                          name: u.require_colons ? ':'.concat(u.name, ':') : u.name,
                          emojiId: u.id,
                          animated: u.animated,
                          jumboable: !0
                      }
                    : {};
        return (0, i.jsxs)(a.FormSection, {
            className: G.twoColumnFormSection,
            children: [
                (0, i.jsxs)('div', {
                    className: G.formColumnLeft,
                    children: [
                        (0, i.jsx)(a.FormTitle, {
                            className: G.formTitle,
                            children: U.intl.string(U.t.DhJ8ur)
                        }),
                        (0, i.jsx)(a.FormText, {
                            className: G.description,
                            type: a.FormTextTypes.DESCRIPTION,
                            children: U.intl.string(U.t['/RSSlZ'])
                        }),
                        (0, i.jsx)(a.Button, {
                            size: a.Button.Sizes.SMALL,
                            color: o ? a.Button.Colors.PRIMARY : a.Button.Colors.GREEN,
                            disabled: !t,
                            onClick: this.handleToggleEmojiDiscoverability,
                            children: o ? U.intl.string(U.t.XnrNLi) : U.intl.string(U.t.bHbZLC)
                        })
                    ]
                }),
                null != d &&
                    d.isDiscoverable() &&
                    (0, i.jsx)(b.UA, {
                        sourceType: _.w6.GUILD,
                        expressionSourceApplication: null,
                        expressionSourceGuild: d,
                        node: m,
                        closePopout: w.dG4,
                        nonce: (0, l.Z)(),
                        demoMode: !0
                    })
            ]
        });
    }
    renderLocaleSelector() {
        let { guild: e, canManageGuild: t, localeOptions: n } = this.props;
        if (null != e)
            return (0, i.jsxs)(a.FormSection, {
                className: G.twoColumnFormSection,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(a.FormTitle, {
                                className: G.formTitle,
                                children: U.intl.string(U.t.pO60f3)
                            }),
                            (0, i.jsx)(a.FormText, {
                                type: a.FormTextTypes.DESCRIPTION,
                                className: G.formDescription,
                                children: U.intl.string(U.t['SF/GRk'])
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: G.formSelect,
                        children: (0, i.jsx)(a.SingleSelect, {
                            value: e.preferredLocale,
                            options: n,
                            onChange: this.handleLocaleChange,
                            isDisabled: !t
                        })
                    })
                ]
            });
    }
    renderCategoriesSection() {
        let { canManageGuild: e, guildMetadata: t, primaryCategoryOptions: n, errors: r, guild: l } = this.props;
        if (null != l)
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)(a.FormSection, {
                        children: [
                            (0, i.jsx)(a.FormTitle, {
                                className: G.formTitle,
                                children: U.intl.string(U.t['5b4VCQ'])
                            }),
                            (0, i.jsx)(a.FormText, {
                                type: a.FormTextTypes.DESCRIPTION,
                                className: G.description,
                                children: U.intl.string(U.t.MSfJlZ)
                            })
                        ]
                    }),
                    (0, i.jsx)(I.Z, {
                        value: t.primaryCategoryId === B.o3 ? null : t.primaryCategoryId,
                        placeholder: U.intl.string(U.t.XqMe3N),
                        options: n,
                        onChange: this.handlePrimaryCategoryChange,
                        disabled: !e,
                        searchable: !0,
                        clearable: !0
                    }),
                    (0, i.jsxs)(a.FormSection, {
                        className: G.noDividerFormSection,
                        children: [
                            (0, i.jsx)(a.FormTitle, {
                                className: G.formTitle,
                                children: U.intl.string(U.t.oOPlPD)
                            }),
                            (0, i.jsx)(O.Z, {
                                guild: l,
                                guildMetadata: t
                            })
                        ]
                    }),
                    (null == r ? void 0 : r.category) != null
                        ? (0, i.jsx)(a.Text, {
                              color: 'text-danger',
                              className: G.error,
                              variant: 'text-sm/normal',
                              children: r.category
                          })
                        : null
                ]
            });
    }
    renderKeywordsSection() {
        let { canManageGuild: e, guildMetadata: t, errors: n } = this.props;
        return (0, i.jsxs)(a.FormSection, {
            children: [
                (0, i.jsx)(a.FormTitle, {
                    className: G.formTitle,
                    children: U.intl.string(U.t.V5pXNT)
                }),
                (0, i.jsx)(a.FormText, {
                    className: G.description,
                    type: a.FormTextTypes.DESCRIPTION,
                    children: U.intl.format(U.t.FLMb5O, {})
                }),
                (0, i.jsx)(c.Z, {
                    tags: t.keywords,
                    onRemoveTag: this.handleRemoveKeyword,
                    onAddTag: this.handleAddKeyword,
                    maxTags: P.G7,
                    maxTaxLength: P._0,
                    disabled: !e
                }),
                (null == n ? void 0 : n.keywords) != null
                    ? (0, i.jsx)(a.Text, {
                          color: 'text-danger',
                          className: G.error,
                          variant: 'text-sm/normal',
                          children: n.keywords
                      })
                    : null
            ]
        });
    }
    render() {
        let { guild: e, discoveryChecklist: t, isGuildAdmin: n } = this.props;
        if (null == e || null == t) return null;
        switch ((0, g.TJ)(e, t)) {
            case g.d5.INTRO:
                return (0, i.jsx)(M.Z, {
                    guild: e,
                    onEnableDiscovery: this.handleEnableDiscovery,
                    isGuildAdmin: n
                });
            case g.d5.DISQUALIFIED:
                return (0, i.jsx)(k.Z, { guild: e });
            case g.d5.SETTINGS:
                return (0, i.jsxs)(a.FormSection, {
                    className: G.__invalid_discoverySettings,
                    title: U.intl.string(U.t.oGaVGx),
                    tag: a.FormTitleTags.H1,
                    children: [this.renderDiscoverableSection(), (0, i.jsx)(a.FormDivider, { className: G.divider }), this.renderCoverImageSection(), (0, i.jsx)(a.FormDivider, { className: G.divider }), this.renderEmojiDiscoverabilitySection(), (0, i.jsx)(a.FormDivider, { className: G.divider }), this.renderCategoriesSection(), (0, i.jsx)(a.FormDivider, { className: G.divider }), this.renderKeywordsSection(), (0, i.jsx)(a.FormDivider, { className: G.divider }), this.renderLocaleSelector()]
                });
            default:
                return null;
        }
    }
    constructor(...e) {
        super(...e),
            F(this, 'state', { discoverableGuild: null }),
            F(this, 'checkForLowerMemberCountReqEnabled', (e) => {
                let { isGuildAdmin: t } = this.props,
                    n = e.hasFeature(w.oNc.COMMUNITY),
                    { enableLowerMemberCountReq: i } = x.t.getCurrentConfig(
                        {
                            guildId: e.id,
                            location: '006266_2'
                        },
                        {
                            disable: !(t && n),
                            autoTrackExposure: !1
                        }
                    );
                return i;
            }),
            F(this, 'handleToggleDiscovery', () => {
                let { guild: e } = this.props;
                if (null == e) return;
                let t = new Set(e.features);
                e.hasFeature(w.oNc.DISCOVERABLE) ? t.delete(w.oNc.DISCOVERABLE) : t.add(w.oNc.DISCOVERABLE), L.Z.updateGuild({ features: t });
            }),
            F(this, 'handleEnableDiscovery', async () => {
                let e = await (0, a.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e('18634').then(n.bind(n, 993382));
                        return (t) => {
                            let { ...n } = t;
                            return (0, i.jsx)(e, { ...n });
                        };
                    },
                    {
                        onCloseRequest: () => {
                            null != e && (0, a.closeModal)(e);
                        }
                    }
                );
            }),
            F(this, 'handleSplashChange', (e) => {
                L.Z.updateGuild({ discoverySplash: e });
            }),
            F(this, 'handleLocaleChange', (e) => {
                L.Z.updateGuild({ preferredLocale: e });
            }),
            F(this, 'handlePrimaryCategoryChange', (e) => {
                var t;
                let { guild: n } = this.props;
                (null == n ? void 0 : n.id) != null && p.TA(null == n ? void 0 : n.id, null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : B.o3);
            }),
            F(this, 'handleRemoveKeyword', (e) => {
                let { guild: t, guildMetadata: n } = this.props;
                if ((null == t ? void 0 : t.id) == null) return;
                let i = [...n.keywords];
                i.splice(e, 1), p.zH(t.id, i);
            }),
            F(this, 'handleAddKeyword', (e) => {
                let { guild: t, guildMetadata: n } = this.props,
                    { keywords: i } = n;
                if ((null == t ? void 0 : t.id) != null) !(i.length >= P.G7) && p.zH(t.id, [...i, e]);
            }),
            F(this, 'handleToggleEmojiDiscoverability', () => {
                let { guild: e, guildMetadata: t } = this.props,
                    { emojiDiscoverabilityEnabled: n } = t;
                (null == e ? void 0 : e.id) != null && p.J9(e.id, !n);
            });
    }
}
t.Z = s.ZP.connectStores([D.Z, E.Z, h.ZP, S.ZP, f.Z, Z.default, R.Z], () => {
    let { guild: e, errors: t, submitting: n, guildMetadata: i } = D.Z.getProps(),
        r = E.Z.can(w.Plq.MANAGE_GUILD, e),
        l = E.Z.can(w.Plq.ADMINISTRATOR, e),
        s = null != e ? h.ZP.getDiscoveryChecklist(e.id) : null,
        a = null != e ? S.ZP.getChannels(e.id) : null,
        o = [];
    null != a &&
        a[S.sH].forEach((e) => {
            let { channel: t } = e;
            t.type === w.d4z.GUILD_TEXT &&
                o.push({
                    value: t.id,
                    label: (0, d.F6)(t, Z.default, R.Z, !0)
                });
        });
    let c = f.Z.getPrimaryCategories().map((e) => {
        let { categoryId: t, name: n } = e;
        return {
            value: t,
            label: n
        };
    });
    return {
        guild: e,
        errors: t,
        submitting: n,
        discoveryChecklist: s,
        selectableChannels: o,
        canManageGuild: r,
        isGuildAdmin: l,
        guildMetadata: i,
        primaryCategoryOptions: c,
        localeOptions: (0, B.jb)()
    };
})(z);
