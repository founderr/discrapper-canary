n.d(t, {
    s: function () {
        return F;
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
    x = n(296386),
    p = n(150192),
    f = n(816817),
    C = n(339085),
    v = n(231053),
    _ = n(285888),
    I = n(134432),
    N = n(813197),
    T = n(208567),
    j = n(183023),
    b = n(984933),
    S = n(496675),
    E = n(699516),
    R = n(594174),
    y = n(768581),
    Z = n(900849),
    A = n(434404),
    L = n(999382),
    D = n(450474),
    O = n(354051),
    k = n(347604),
    P = n(203377),
    M = n(981631),
    w = n(731455),
    B = n(388032),
    U = n(37084);
function G(e, t, n) {
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
let F = s.ZP.connectStores([L.Z], () => {
    let { guild: e, originalGuild: t, submitting: n, guildMetadata: i } = L.Z.getProps();
    return {
        guild: e,
        submitting: n,
        onReset() {
            if (null != e) A.Z.init(e.id);
        },
        onSave() {
            if (null != e)
                (0, g.UA)(e, t),
                    A.Z.saveGuild(e.id, {
                        features: e.features,
                        discoverySplash: e.discoverySplash,
                        description: e.description,
                        safetyAlertsChannelId: e.safetyAlertsChannelId,
                        rulesChannelId: e.rulesChannelId,
                        preferredLocale: e.preferredLocale
                    }),
                    x.Vv({
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
class H extends r.PureComponent {
    async componentDidMount() {
        let { guild: e } = this.props;
        if (null != e) {
            (0, m.k)(e.id).then(() => {
                (0, u.V)(e.id);
            }),
                x.le(),
                x.aC(e.id);
            let t = await (0, Z.Eg)(e.id);
            null != t && this.setState({ discoverableGuild: t });
        }
    }
    renderDiscoverableSection() {
        let { guild: e, isGuildAdmin: t } = this.props;
        if (null == e) return;
        let n = e.hasFeature(M.oNc.DISCOVERABLE);
        return (0, i.jsxs)(a.FormSection, {
            className: U.twoColumnFormSection,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(a.FormTitle, {
                            className: U.formTitle,
                            children: B.intl.string(B.t.XU0S6u)
                        }),
                        (0, i.jsx)(a.FormText, {
                            type: a.FormTextTypes.DESCRIPTION,
                            className: U.formDescription,
                            children: B.intl.string(B.t['IIiV/P'])
                        }),
                        (0, i.jsx)(a.FormText, {
                            type: a.FormTextTypes.DESCRIPTION,
                            className: U.formDescription,
                            children: B.intl.string(B.t.rSHA09)
                        }),
                        (0, i.jsx)(a.Tooltip, {
                            text: t ? null : B.intl.string(B.t['5VbUBw']),
                            children: (e) =>
                                (0, i.jsx)(a.Button, {
                                    size: a.Button.Sizes.SMALL,
                                    onClick: this.handleToggleDiscovery,
                                    color: n ? a.Button.Colors.PRIMARY : a.Button.Colors.GREEN,
                                    disabled: !t,
                                    ...e,
                                    children: n ? B.intl.string(B.t.VHHyFR) : B.intl.string(B.t.XU0S6u)
                                })
                        })
                    ]
                }),
                (0, i.jsx)(f.Z, {
                    className: U.guildCard,
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
                        className: U.twoColumnFormSection,
                        children: [
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(a.FormTitle, {
                                        className: U.formTitle,
                                        children: B.intl.string(B.t['8bT/Cg'])
                                    }),
                                    (0, i.jsx)(a.FormText, {
                                        type: a.FormTextTypes.DESCRIPTION,
                                        className: U.formDescription,
                                        children: B.intl.string(B.t.Ltsutr)
                                    }),
                                    (0, i.jsxs)(a.Button, {
                                        size: a.Button.Sizes.SMALL,
                                        color: a.Button.Colors.PRIMARY,
                                        children: [
                                            B.intl.string(B.t.yG2pUl),
                                            (0, i.jsx)(N.ZP, {
                                                disabled: !n,
                                                onChange: this.handleSplashChange
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: U.imageUploaderWrapper,
                                children: (0, i.jsx)(T.Z, {
                                    image: e.discoverySplash,
                                    makeURL: (t) =>
                                        y.ZP.getGuildDiscoverySplashURL({
                                            id: e.id,
                                            splash: t,
                                            size: 512 * (0, I.x_)()
                                        }),
                                    disabled: !n,
                                    onChange: this.handleSplashChange,
                                    hint: B.intl.string(B.t.uPvxqK),
                                    imageClassName: U.imageUploaderInnerSquare,
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
            let e = C.ZP.getGuildEmoji(r.id);
            c = {
                ...r,
                premiumSubscriptionCount: null == r ? void 0 : r.premiumSubscriberCount,
                emojis: e,
                emojiCount: e.length,
                presenceCount: 1234,
                memberCount: 1234
            };
        }
        let d = null != c ? v.JO.createFromDiscoverableGuild(c) : null,
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
            className: U.twoColumnFormSection,
            children: [
                (0, i.jsxs)('div', {
                    className: U.formColumnLeft,
                    children: [
                        (0, i.jsx)(a.FormTitle, {
                            className: U.formTitle,
                            children: B.intl.string(B.t.DhJ8ur)
                        }),
                        (0, i.jsx)(a.FormText, {
                            className: U.description,
                            type: a.FormTextTypes.DESCRIPTION,
                            children: B.intl.string(B.t['/RSSlZ'])
                        }),
                        (0, i.jsx)(a.Button, {
                            size: a.Button.Sizes.SMALL,
                            color: o ? a.Button.Colors.PRIMARY : a.Button.Colors.GREEN,
                            disabled: !t,
                            onClick: this.handleToggleEmojiDiscoverability,
                            children: o ? B.intl.string(B.t.XnrNLi) : B.intl.string(B.t.bHbZLC)
                        })
                    ]
                }),
                null != d &&
                    d.isDiscoverable() &&
                    (0, i.jsx)(j.UA, {
                        sourceType: v.w6.GUILD,
                        expressionSourceApplication: null,
                        expressionSourceGuild: d,
                        node: m,
                        closePopout: M.dG4,
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
                className: U.twoColumnFormSection,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(a.FormTitle, {
                                className: U.formTitle,
                                children: B.intl.string(B.t.pO60f3)
                            }),
                            (0, i.jsx)(a.FormText, {
                                type: a.FormTextTypes.DESCRIPTION,
                                className: U.formDescription,
                                children: B.intl.string(B.t['SF/GRk'])
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: U.formSelect,
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
                                className: U.formTitle,
                                children: B.intl.string(B.t['5b4VCQ'])
                            }),
                            (0, i.jsx)(a.FormText, {
                                type: a.FormTextTypes.DESCRIPTION,
                                className: U.description,
                                children: B.intl.string(B.t.MSfJlZ)
                            })
                        ]
                    }),
                    (0, i.jsx)(_.Z, {
                        value: t.primaryCategoryId === w.o3 ? null : t.primaryCategoryId,
                        placeholder: B.intl.string(B.t.XqMe3N),
                        options: n,
                        onChange: this.handlePrimaryCategoryChange,
                        disabled: !e,
                        searchable: !0,
                        clearable: !0
                    }),
                    (0, i.jsxs)(a.FormSection, {
                        className: U.noDividerFormSection,
                        children: [
                            (0, i.jsx)(a.FormTitle, {
                                className: U.formTitle,
                                children: B.intl.string(B.t.oOPlPD)
                            }),
                            (0, i.jsx)(D.Z, {
                                guild: l,
                                guildMetadata: t
                            })
                        ]
                    }),
                    (null == r ? void 0 : r.category) != null
                        ? (0, i.jsx)(a.Text, {
                              color: 'text-danger',
                              className: U.error,
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
                    className: U.formTitle,
                    children: B.intl.string(B.t.V5pXNT)
                }),
                (0, i.jsx)(a.FormText, {
                    className: U.description,
                    type: a.FormTextTypes.DESCRIPTION,
                    children: B.intl.format(B.t.FLMb5O, {})
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
                          className: U.error,
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
                return (0, i.jsx)(k.Z, {
                    guild: e,
                    onEnableDiscovery: this.handleEnableDiscovery,
                    isGuildAdmin: n
                });
            case g.d5.DISQUALIFIED:
                return (0, i.jsx)(O.Z, { guild: e });
            case g.d5.SETTINGS:
                return (0, i.jsxs)(a.FormSection, {
                    className: U.__invalid_discoverySettings,
                    title: B.intl.string(B.t.oGaVGx),
                    tag: a.FormTitleTags.H1,
                    children: [this.renderDiscoverableSection(), (0, i.jsx)(a.FormDivider, { className: U.divider }), this.renderCoverImageSection(), (0, i.jsx)(a.FormDivider, { className: U.divider }), this.renderEmojiDiscoverabilitySection(), (0, i.jsx)(a.FormDivider, { className: U.divider }), this.renderCategoriesSection(), (0, i.jsx)(a.FormDivider, { className: U.divider }), this.renderKeywordsSection(), (0, i.jsx)(a.FormDivider, { className: U.divider }), this.renderLocaleSelector()]
                });
            default:
                return null;
        }
    }
    constructor(...e) {
        super(...e),
            G(this, 'state', { discoverableGuild: null }),
            G(this, 'handleToggleDiscovery', () => {
                let { guild: e } = this.props;
                if (null == e) return;
                let t = new Set(e.features);
                e.hasFeature(M.oNc.DISCOVERABLE) ? t.delete(M.oNc.DISCOVERABLE) : t.add(M.oNc.DISCOVERABLE), A.Z.updateGuild({ features: t });
            }),
            G(this, 'handleEnableDiscovery', async () => {
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
            G(this, 'handleSplashChange', (e) => {
                A.Z.updateGuild({ discoverySplash: e });
            }),
            G(this, 'handleLocaleChange', (e) => {
                A.Z.updateGuild({ preferredLocale: e });
            }),
            G(this, 'handlePrimaryCategoryChange', (e) => {
                var t;
                let { guild: n } = this.props;
                (null == n ? void 0 : n.id) != null && x.TA(null == n ? void 0 : n.id, null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : w.o3);
            }),
            G(this, 'handleRemoveKeyword', (e) => {
                let { guild: t, guildMetadata: n } = this.props;
                if ((null == t ? void 0 : t.id) == null) return;
                let i = [...n.keywords];
                i.splice(e, 1), x.zH(t.id, i);
            }),
            G(this, 'handleAddKeyword', (e) => {
                let { guild: t, guildMetadata: n } = this.props,
                    { keywords: i } = n;
                if ((null == t ? void 0 : t.id) != null) !(i.length >= P.G7) && x.zH(t.id, [...i, e]);
            }),
            G(this, 'handleToggleEmojiDiscoverability', () => {
                let { guild: e, guildMetadata: t } = this.props,
                    { emojiDiscoverabilityEnabled: n } = t;
                (null == e ? void 0 : e.id) != null && x.J9(e.id, !n);
            });
    }
}
t.Z = s.ZP.connectStores([L.Z, S.Z, h.ZP, b.ZP, p.Z, R.default, E.Z], () => {
    let { guild: e, errors: t, submitting: n, guildMetadata: i } = L.Z.getProps(),
        r = S.Z.can(M.Plq.MANAGE_GUILD, e),
        l = S.Z.can(M.Plq.ADMINISTRATOR, e),
        s = null != e ? h.ZP.getDiscoveryChecklist(e.id) : null,
        a = null != e ? b.ZP.getChannels(e.id) : null,
        o = [];
    null != a &&
        a[b.sH].forEach((e) => {
            let { channel: t } = e;
            t.type === M.d4z.GUILD_TEXT &&
                o.push({
                    value: t.id,
                    label: (0, d.F6)(t, R.default, E.Z, !0)
                });
        });
    let c = p.Z.getPrimaryCategories().map((e) => {
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
        localeOptions: (0, w.jb)()
    };
})(H);
