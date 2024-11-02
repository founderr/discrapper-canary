n.d(t, {
    T: function () {
        return A;
    },
    Z: function () {
        return y;
    }
}),
    n(757143),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(497321),
    d = n(852860),
    u = n(100527),
    m = n(367907),
    h = n(906732),
    g = n(263145),
    x = n(807582),
    p = n(26323),
    f = n(366980),
    C = n(246946),
    I = n(709586),
    _ = n(267642),
    N = n(999382),
    v = n(621319),
    T = n(44550),
    j = n(770270),
    E = n(981631),
    S = n(30513),
    b = n(388032),
    R = n(279404);
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
let A = a.ZP.connectStores([N.Z, T.Z], () => {
    let e = T.Z.vanityURLCode,
        t = N.Z.getGuildId();
    return {
        vanityURLCode: e,
        guildId: t,
        onReset() {
            (0, v.H7)();
        },
        onSave() {
            null != t && (0, v.en)(t, e);
        }
    };
})(d.Z);
class L extends r.PureComponent {
    componentWillUnmount() {
        (0, v.xv)();
    }
    renderEditCard() {
        let { isRemoving: e } = this.state,
            { hasError: t, originalVanityURLCode: n, vanityURLCode: r, vanityURLUses: l, guild: s } = this.props;
        if (null == r) return (0, i.jsx)(o.Spinner, {});
        let a = (null == s ? void 0 : s.hasFeature(E.oNc.VANITY_URL)) === !0;
        return (0, i.jsxs)(o.Card, {
            editable: !0,
            className: R.editVanityUrlCard,
            children: [
                (0, i.jsxs)(o.FormTitle, {
                    className: R.__invalid_formTitle,
                    children: [
                        (0, i.jsx)('div', {
                            className: R.formTitleField,
                            children: b.intl.string(b.t['6oJyq6'])
                        }),
                        r.length > 0 ? (0, i.jsx)('div', { children: b.intl.format(b.t.MVWOUV, { uses: l }) }) : null
                    ]
                }),
                (0, i.jsx)(g.Z, {
                    prefix: ''.concat('https://discord.gg', '/'),
                    value: r,
                    onChange: this.handleInviteCodeChange,
                    maxLength: 25,
                    autoFocus: !0,
                    error: t,
                    disabled: !a
                }),
                null != n && n.length > 0
                    ? (0, i.jsx)(o.Button, {
                          className: R.removeVanityUrlButton,
                          onClick: this.handleRemoveVanityURL,
                          submitting: e,
                          look: o.Button.Looks.LINK,
                          size: o.Button.Sizes.MIN,
                          color: o.Button.Colors.RED,
                          children: b.intl.string(b.t['3ggb6O'])
                      })
                    : null
            ]
        });
    }
    renderUpsellButton() {
        return (0, i.jsxs)(o.ShinyButton, {
            color: o.Button.Colors.GREEN,
            className: s()(R.marginTop16),
            innerClassName: R.upsellButton,
            onClick: this.handleVanityUrlUpsellButton,
            children: [
                (0, i.jsx)(I.Z, {
                    height: 16,
                    width: 16,
                    className: R.premiumUpsellBadge
                }),
                ' ',
                b.intl.string(b.t['+7XY39'])
            ]
        });
    }
    renderInfo() {
        let { hasError: e, errorDetails: t, originalVanityURLCode: n } = this.props;
        if (e)
            return (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'text-danger',
                className: R.__invalid_marginTop20,
                children: (0, j.i)(null == t ? void 0 : t.code)
            });
        if (null != n && n.length > 0) {
            let e = (0, f.Z)(n);
            return (0, i.jsx)(o.FormText, {
                className: R.__invalid_marginTop20,
                type: o.FormTextTypes.LABEL_DESCRIPTOR,
                children: b.intl.format(b.t['1qTOvr'], {
                    urlText: e,
                    urlValue: e
                })
            });
        }
    }
    handleRemoveVanityURL() {
        (0, v.Gy)('');
    }
    handleInviteCodeChange(e) {
        (0, v.Gy)(e.replace(/ /g, '-'));
    }
    render() {
        let { hide: e, guild: t } = this.props;
        return null == t
            ? null
            : e
              ? (0, i.jsx)(c.Z, {})
              : (0, i.jsxs)(o.FormSection, {
                    children: [
                        (0, i.jsxs)(o.FormTitle, {
                            tag: o.FormTitleTags.H1,
                            className: R.flexFormTitle,
                            children: [
                                (0, i.jsx)('div', { children: b.intl.string(b.t['5XZKy8']) }),
                                (0, i.jsx)(x.Z, {
                                    guild: t,
                                    guildFeature: E.oNc.VANITY_URL,
                                    className: R.guildFeatureAvailabilityIndicator,
                                    onClick: this.handleVanityUrlUpsellIndicator
                                })
                            ]
                        }),
                        (0, i.jsx)(o.FormText, {
                            type: o.FormTextTypes.DESCRIPTION,
                            className: R.__invalid_marginBottom8,
                            children: b.intl.string(b.t.IhWDcn)
                        }),
                        (0, i.jsx)(o.FormText, {
                            type: o.FormTextTypes.DESCRIPTION,
                            className: R.__invalid_marginBottom20,
                            children: b.intl.string(b.t['1mRkFh'])
                        }),
                        (0, i.jsx)(o.FormText, {
                            type: o.FormTextTypes.DESCRIPTION,
                            className: R.__invalid_marginBottom20,
                            children: b.intl.string(b.t['eH/HMz'])
                        }),
                        (0, j.p)(t) ? this.renderEditCard() : this.renderUpsellButton(),
                        this.renderInfo()
                    ]
                });
    }
    constructor(...e) {
        super(...e),
            Z(this, 'state', { isRemoving: !1 }),
            Z(this, 'handleShowModalUpsell', (e, t, n, i, r) => {
                e.preventDefault(), e.stopPropagation();
                let { guild: l, analyticsLocations: s } = this.props;
                null != l &&
                    ((0, m.yw)(E.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                        location: {
                            section: n,
                            object: E.qAy.LEARN_MORE,
                            objectType: (0, _.ge)(t),
                            location_stack: s
                        },
                        guild_id: null == l ? void 0 : l.id
                    }),
                    (0, p.Z)({
                        analyticsLocations: s,
                        analyticsSourceLocation: {
                            section: n,
                            object: i,
                            page: E.ZY5.GUILD_SETTINGS
                        },
                        guild: l,
                        perks: r
                    }));
            }),
            Z(this, 'handleVanityUrlUpsellIndicator', (e) => {
                this.handleShowModalUpsell(e, E.Eu4.TIER_3, E.jXE.GUILD_SETTINGS_VANITY_URL, E.qAy.BADGE, (0, S.WW)());
            }),
            Z(this, 'handleVanityUrlUpsellButton', (e) => {
                this.handleShowModalUpsell(e, E.Eu4.TIER_3, E.jXE.GUILD_SETTINGS_VANITY_URL, E.qAy.BUTTON_CTA, (0, S.WW)());
            });
    }
}
function y() {
    let e = (0, a.e7)([N.Z], () => N.Z.getGuild()),
        t = (0, a.cj)([T.Z], () => ({
            vanityURLCode: T.Z.vanityURLCode,
            vanityURLUses: T.Z.vanityURLUses,
            originalVanityURLCode: T.Z.originalVanityURLCode,
            hasError: T.Z.hasError(),
            errorDetails: T.Z.errorDetails
        })),
        n = (0, a.e7)([C.Z], () => C.Z.hideInstantInvites),
        { analyticsLocations: r } = (0, h.ZP)(u.Z.VANITY_URL);
    return (0, i.jsx)(h.Gt, {
        value: r,
        children: (0, i.jsx)(L, {
            guild: e,
            ...t,
            hide: n,
            analyticsLocations: r
        })
    });
}
