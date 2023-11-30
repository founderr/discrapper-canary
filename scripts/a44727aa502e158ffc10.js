(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["97584"], {
        551290: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f156f6c8b61734c205fc.png"
        },
        513002: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f328a6f8209d4f1f5022.png"
        },
        777273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserAffinities: function() {
                    return l
                }
            });
            var s = n("872717"),
                r = n("913144"),
                i = n("843823"),
                a = n("49111");

            function l() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return i.default.needsRefresh() ? (r.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), s.default.get({
                    url: a.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    r.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    r.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_FAILURE"
                    })
                })) : Promise.resolve()
            }
        },
        749432: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                i = n("917351"),
                a = n.n(i),
                l = n("446674"),
                o = n("862337"),
                u = n("77078"),
                d = n("54239"),
                c = n("736964"),
                f = n("777273"),
                p = n("79112"),
                E = n("87657"),
                I = n("210721"),
                h = n("671484"),
                _ = n("27618"),
                S = n("102985"),
                C = n("843823"),
                T = n("697218"),
                m = n("188525"),
                A = n("145131"),
                g = n("953109"),
                O = n("306160"),
                R = n("659632"),
                N = n("719923"),
                x = n("158998"),
                v = n("49111"),
                P = n("646718"),
                L = n("782340"),
                M = n("146948");
            class y extends r.Component {
                componentWillUnmount() {
                    this._copyModeTimeout.stop()
                }
                get iconSKUId() {
                    let {
                        subscriptionPlan: e,
                        sku: t
                    } = this.props;
                    return null != e ? e.skuId : null != t ? t.id : null
                }
                get headerBlurb() {
                    let e;
                    let {
                        subscriptionPlan: t,
                        hasSentMessage: n,
                        giftMessageError: s,
                        giftRecipient: r,
                        selectedGiftStyle: i
                    } = this.props, a = null != i && P.SeasonalGiftStyles2023.includes(i);
                    if (null != s) return L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB;
                    if (null == t) return L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_BLURB;
                    let l = n || null != r;
                    return (e = t.interval === P.SubscriptionIntervalTypes.MONTH ? l ? a ? L.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : l ? a ? L.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
                        skuName: (0, N.getTierDisplayName)(t.id),
                        intervalCount: t.intervalCount
                    })
                }
                render() {
                    let e, t;
                    let {
                        application: n,
                        selectedGiftStyle: r,
                        hasSentMessage: i,
                        giftRecipient: a,
                        giftMessageError: l,
                        isSendingMessage: o
                    } = this.props, d = (0, R.isCustomGiftEnabled)(a);
                    return e = d || i && null == l ? L.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != l ? L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : L.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE, t = o ? (0, s.jsx)(u.Spinner, {
                        type: u.SpinnerTypes.PULSING_ELLIPSIS
                    }) : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(u.Heading, {
                            variant: "heading-lg/semibold",
                            className: null != r ? M.headerCustomGifting : M.header,
                            children: e
                        }), i && null != a && null == l || (0, R.isCustomGiftEnabled)(a) ? this.renderConfirmSentGift() : this.renderRequestSendGift()]
                    }), (0, s.jsxs)(A.default, {
                        direction: A.default.Direction.VERTICAL,
                        align: A.default.Align.CENTER,
                        children: [null != n ? (0, s.jsx)(g.default, {
                            game: n,
                            className: M.icon,
                            size: g.default.Sizes.LARGE,
                            skuId: this.iconSKUId
                        }) : null, t]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        copyMode: m.default.Modes.DEFAULT
                    }, this._copyModeTimeout = new o.Timeout, this.handleGiftCodeCopy = (e, t) => {
                        let {
                            sku: n
                        } = this.props;
                        null != n && (0, R.trackGiftCodeCopy)(new h.default({
                            code: t,
                            maxUses: 1
                        }), n);
                        try {
                            (0, O.copy)(e), this.setState({
                                copyMode: m.default.Modes.SUCCESS
                            })
                        } catch (e) {
                            this.setState({
                                copyMode: m.default.Modes.ERROR
                            })
                        }
                        this._copyModeTimeout.start(1500, () => {
                            this.setState({
                                copyMode: m.default.Modes.DEFAULT
                            })
                        })
                    }, this.handleInventoryClick = () => {
                        p.default.open(v.UserSettingsSections.INVENTORY), this.props.onClose()
                    }, this.renderGiftCodeSection = () => {
                        let e;
                        let {
                            obscureGiftCode: t,
                            giftCode: n
                        } = this.props;
                        if (null == n) return null;
                        let {
                            copyMode: r
                        } = this.state;
                        switch (r) {
                            case m.default.Modes.SUCCESS:
                                e = L.default.Messages.BILLING_GIFT_COPIED;
                                break;
                            case m.default.Modes.ERROR:
                                e = L.default.Messages.FAILED;
                                break;
                            default:
                                e = L.default.Messages.COPY
                        }
                        return (0, s.jsx)(A.default, {
                            direction: A.default.Direction.VERTICAL,
                            children: (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(u.FormTitle, {
                                    children: L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
                                }), null != n && (0, s.jsx)(m.default, {
                                    hideMessage: t ? L.default.Messages.GIFT_INVENTORY_HIDDEN : null,
                                    value: (0, R.getGiftCodeURL)(n),
                                    mode: r,
                                    text: e,
                                    onCopy: e => this.handleGiftCodeCopy(e, n),
                                    supportsCopy: O.SUPPORTS_COPY,
                                    className: M.copyInput,
                                    buttonColor: m.default.ButtonColors.LINK,
                                    buttonLook: m.default.ButtonLooks.LINK
                                }), (0, s.jsx)("div", {
                                    className: M.subtext,
                                    children: L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
                                })]
                            })
                        })
                    }, this.renderRequestSendGift = () => {
                        let {
                            giftCode: e,
                            onClose: t,
                            giftMessageError: n
                        } = this.props;
                        return (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)("div", {
                                className: M.blurb,
                                children: this.headerBlurb
                            }), null == n && (0, s.jsx)(F, {
                                giftCode: e,
                                onClose: t
                            }), (0, s.jsx)("div", {
                                className: M.divider
                            }), this.renderGiftCodeSection()]
                        })
                    }, this.renderConfirmSentGift = () => {
                        let {
                            giftRecipient: e
                        } = this.props;
                        return (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(E.default, {
                                user: e,
                                className: M.giftRecipient,
                                size: u.AvatarSizes.SIZE_80
                            }), (0, s.jsx)(u.Heading, {
                                className: M.giftRecipientName,
                                variant: "heading-md/semibold",
                                children: x.default.getName(e)
                            }), (0, s.jsxs)("div", {
                                className: M.giftRecipientTag,
                                children: [" ", x.default.getUserTag(e)]
                            }), (0, s.jsx)("div", {
                                className: M.giftSentMessage,
                                children: this.headerBlurb
                            })]
                        })
                    }
                }
            }
            let F = e => {
                let {
                    giftCode: t,
                    onClose: n
                } = e;
                r.useEffect(() => {
                    c.default.fetchRelationships(), (0, f.fetchUserAffinities)()
                }, []);
                let [i, o] = r.useState(), [p, h] = r.useState(!1), [S, m] = r.useState(!1), {
                    userAffinities: A,
                    isLoading: g
                } = (0, l.useStateFromStoresObject)([C.default], () => ({
                    userAffinities: C.default.getUserAffinitiesUserIds(),
                    isLoading: C.default.getFetching()
                })), O = Array.from(A.values()), R = (0, l.useStateFromStores)([_.default], () => _.default.getFriendIDs()), N = a.difference(R, O), v = [...O, ...N], P = (0, l.useStateFromStores)([T.default], () => T.default.filter(e => v.includes(e.id) && !e.bot), [v]), y = null == P || 0 === P.length;
                if (y) return null;
                let F = a.sortBy(P, e => v.indexOf(e.id));
                return (0, s.jsxs)("div", {
                    className: M.giftRecipientSection,
                    children: [(0, s.jsx)(u.FormTitle, {
                        children: L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
                    }), (0, s.jsxs)("div", {
                        className: M.giftRecipient,
                        children: [(0, s.jsx)(u.SearchableSelect, {
                            placeholder: L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                            wrapperClassName: M.giftRecipientInputWrapper,
                            className: p ? M.giftRecipientInputError : void 0,
                            renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, s.jsx)(E.default, {
                                user: e.value,
                                size: u.AvatarSizes.SIZE_20
                            }),
                            renderLeading: () => g ? (0, s.jsx)(u.Spinner, {
                                type: u.SpinnerTypes.PULSING_ELLIPSIS
                            }) : null,
                            value: i,
                            onChange: e => {
                                o(e), h(!1)
                            },
                            options: F.map(e => ({
                                value: e,
                                label: "".concat(x.default.getUserTag(e))
                            }))
                        }), (0, s.jsx)(u.Button, {
                            disabled: null == i,
                            submitting: S,
                            className: M.sendToRecipientButton,
                            onClick: () => {
                                m(!0), (0, I.sendGiftMessage)(i, t).then(() => {
                                    n(), (0, d.popAllLayers)()
                                }).catch(() => {
                                    h(!0), m(!1)
                                })
                            },
                            children: L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                        })]
                    }), (0, s.jsx)("div", {
                        className: p ? M.subtextError : M.subtext,
                        children: p ? L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
                    })]
                })
            };
            var j = l.default.connectStores([S.default], () => ({
                obscureGiftCode: S.default.enabled
            }))(y)
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return a
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, i.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM17.7863 5.37403C17.8815 5.20737 17.7612 5 17.5692 5H14.4352C14.1661 5 13.9176 5.14421 13.7841 5.3779L6.21373 18.626C6.1185 18.7926 6.23884 19 6.43079 19H9.56476C9.8339 19 10.0824 18.8558 10.2159 18.6221L17.7863 5.37403Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: l
                    })
                })
            }
        },
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("884691");

            function r(e, t) {
                let n = s.useRef(e);
                return s.useEffect(() => {
                    function e(e) {
                        null != n.current && !n.current.contains(e.target) && t()
                    }
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [n, t]), n
            }
        },
        478272: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                i = n("974889"),
                a = n("954016"),
                l = n("49111");

            function o(e) {
                let {
                    channel: t,
                    guildId: o,
                    locationObject: u,
                    openInPopout: d,
                    initialSelectedApplicationId: c,
                    initialSlide: f = a.ActivityShelfSlides.DIRECTORY,
                    enableSelectedTextChannelInvite: p = !1,
                    analyticsLocations: E
                } = e;
                d && (0, i.default)(l.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let I = d ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
                return (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("605455").then(n.bind(n, "605455"));
                    return n => (0, s.jsx)(e, {
                        ...n,
                        channel: t,
                        guildId: o,
                        locationObject: u,
                        initialSlide: f,
                        initialSelectedApplicationId: c,
                        enableSelectedTextChannelInvite: p,
                        analyticsLocations: E
                    })
                }, {
                    modalKey: a.ACTIVITY_SHELF_WEB_MODAL_KEY,
                    contextKey: I
                })
            }
        },
        149022: function(e, t, n) {
            "use strict";

            function s() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function r(e) {
                return {
                    textValue: e,
                    richValue: a(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return s
                },
                createState: function() {
                    return r
                },
                toRichValue: function() {
                    return a
                },
                voidToOptionValue: function() {
                    return l
                }
            }), n("70102");
            let i = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function a(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : i
            }

            function l(e) {
                switch (e.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: e.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: e.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: e.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: e.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: e.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: e.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
                        };
                    case "testInlineVoid":
                        throw Error("Unable to convert test types")
                }
                return null
            }
        },
        162848: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            }), n("222007");
            var s = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                a = n("77078"),
                l = n("446674"),
                o = n("265586"),
                u = n("606292"),
                d = n("688318"),
                c = n("635357"),
                f = n("184900"),
                p = n("845962"),
                E = n("506885"),
                I = n("697218"),
                h = n("153160"),
                _ = n("426188"),
                S = n("49111"),
                C = n("782340"),
                T = n("416465"),
                m = n("513002");
            let A = e => {
                    let {
                        avatarDecoration: t
                    } = e, n = (0, l.useStateFromStores)([I.default], () => I.default.getCurrentUser()), {
                        avatarDecorationSrc: r
                    } = (0, d.default)({
                        user: n,
                        avatarDecorationOverride: t,
                        size: (0, u.getDecorationSizeForAvatarSize)(a.AvatarSizes.SIZE_40)
                    });
                    return (0, s.jsx)("img", {
                        src: r,
                        alt: t.label,
                        className: T.avatarDecoration
                    })
                },
                g = e => {
                    var t;
                    let {
                        profileEffect: n
                    } = e, r = (0, l.useStateFromStores)([p.default], () => p.default.getProfileEffectById(n.id)), {
                        accessibilityLabel: i,
                        thumbnailPreviewSrc: a,
                        title: o
                    } = null !== (t = null == r ? void 0 : r.config) && void 0 !== t ? t : {};
                    return (0, s.jsxs)("div", {
                        className: T.profileEffectContainer,
                        children: [(0, s.jsx)("img", {
                            src: m,
                            alt: i,
                            className: T.profileEffectBackground
                        }), (0, s.jsx)("img", {
                            className: T.profileEffect,
                            src: a,
                            alt: o
                        })]
                    })
                };
            var O = e => {
                let {
                    selectedSkuId: t,
                    selectedSkuPricePreview: n
                } = e, {
                    product: r
                } = (0, _.useFetchCollectiblesProduct)(t), {
                    giftRecipient: u,
                    giftRecipientError: d
                } = (0, c.useGiftContext)(), p = (0, l.useStateFromStores)([I.default], () => I.default.getCurrentUser());
                if (null == r || null == n) return null;
                let [m] = r.items, O = null != u && u.id !== (null == p ? void 0 : p.id);
                return (0, s.jsxs)("div", {
                    children: [(0, s.jsxs)("div", {
                        className: T.previewTitleContainer,
                        children: [(0, s.jsx)(a.FormTitle, {
                            className: T.previewTitle,
                            children: C.default.Messages.COLLECTIBLES_GIFT_LABEL
                        }), O && (0, s.jsx)(a.Popout, {
                            preload: () => (0, E.default)(u.id, u.getAvatarURL(null, 80)),
                            renderPopout: e => (0, s.jsx)(f.default, {
                                ...e,
                                user: u,
                                pendingAvatar: u.avatar,
                                pendingAvatarDecoration: m.type === o.CollectiblesItemType.AVATAR_DECORATION ? m : null,
                                pendingProfileEffectID: m.type === o.CollectiblesItemType.PROFILE_EFFECT ? m.id : null,
                                canUsePremiumCustomization: !0,
                                onAvatarChange: S.NOOP,
                                onBannerChange: S.NOOP,
                                disabledInputs: !0
                            }),
                            align: "center",
                            position: "right",
                            children: e => (0, s.jsx)(a.Button, {
                                ...e,
                                look: a.ButtonLooks.LINK,
                                children: C.default.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
                            })
                        }, u.id)]
                    }), (0, s.jsxs)("div", {
                        className: i(T.previewContainer, {
                            [T.previewContainerError]: null != d
                        }),
                        children: [m.type === o.CollectiblesItemType.AVATAR_DECORATION && (0, s.jsx)(A, {
                            avatarDecoration: m
                        }), m.type === o.CollectiblesItemType.PROFILE_EFFECT && (0, s.jsx)(g, {
                            profileEffect: m
                        }), (0, s.jsxs)("div", {
                            className: T.previewTextContainer,
                            children: [(0, s.jsx)(a.Text, {
                                variant: "text-md/semibold",
                                children: r.name
                            }), (0, s.jsx)(a.Heading, {
                                variant: "heading-sm/medium",
                                color: "header-secondary",
                                children: m.type === o.CollectiblesItemType.AVATAR_DECORATION ? C.default.Messages.USER_SETTINGS_AVATAR_DECORATION : m.type === o.CollectiblesItemType.PROFILE_EFFECT ? C.default.Messages.USER_SETTINGS_PROFILE_EFFECT : null
                            })]
                        }), (0, s.jsx)(a.Text, {
                            variant: "text-md/semibold",
                            children: (0, h.formatPrice)(n.amount, n.currency)
                        })]
                    }), null != d && (0, s.jsx)(a.Text, {
                        className: T.recipientError,
                        variant: "text-sm/normal",
                        color: "status-danger-background",
                        children: d
                    })]
                })
            }
        },
        349133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                i = n("446674"),
                a = n("87657"),
                l = n("635357"),
                o = n("27618"),
                u = n("697218"),
                d = n("158998"),
                c = n("21526"),
                f = n("782340"),
                p = e => {
                    let {
                        selectedSkuId: t
                    } = e, n = (0, i.useStateFromStores)([o.default], () => o.default.getFriendIDs()), p = (0, i.useStateFromStores)([u.default], () => u.default.filter(e => n.includes(e.id) && !e.bot), [n]), {
                        giftRecipient: E,
                        setGiftRecipient: I,
                        giftRecipientError: h,
                        setGiftRecipientError: _,
                        setValidatingGiftRecipient: S
                    } = (0, l.useGiftContext)();
                    if (null == t) return null;
                    let C = async e => {
                        S(!0), null != h && _(), I(e);
                        let n = await (0, c.validateCollectiblesRecipient)(e.id, t);
                        !n && _(f.default.Messages.COLLECTIBLES_GIFT_SEND_ERROR_OWNED), S(!1)
                    };
                    return (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(r.FormTitle, {
                            children: f.default.Messages.FORM_LABEL_SEND_TO
                        }), (0, s.jsx)(r.SearchableSelect, {
                            placeholder: f.default.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
                            renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, s.jsx)(a.default, {
                                user: e.value,
                                size: r.AvatarSizes.SIZE_20
                            }),
                            value: E,
                            onChange: C,
                            options: p.map(e => ({
                                value: e,
                                label: "".concat(d.default.getUserTag(e))
                            }))
                        })]
                    })
                }
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return a
                },
                setHotspotOverride: function() {
                    return l
                },
                clearHotspotOverride: function() {
                    return o
                }
            });
            var s = n("913144"),
                r = n("599110"),
                i = n("49111");

            function a(e) {
                r.default.track(i.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), s.default.wait(() => {
                    s.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function l(e, t) {
                s.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function o(e) {
                s.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var s = n("446674"),
                r = n("913144"),
                i = n("197881"),
                a = n("492397");
            let l = new Set,
                o = {};
            class u extends s.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (l = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (o = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && o[e];
                    return !(a.CONFERENCE_MODE_ENABLED || i.ProcessArgs.isDisallowPopupsSet()) && (n || !l.has(e))
                }
                hasHiddenHotspot(e) {
                    return l.has(e)
                }
                getHotspotOverride(e) {
                    return o[e]
                }
                getState() {
                    return {
                        hiddenHotspots: l,
                        hotspotOverrides: o
                    }
                }
            }
            u.displayName = "HotspotStore", u.persistKey = "hotspots", u.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var d = new u(r.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    l = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (l.has(t)) return !1;
                    l.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    o[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == o[t]) return !1;
                    delete o[t]
                }
            })
        },
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return i.default
                }
            });
            var s = n("533613");
            n.es(s, t);
            var r = n("597517");
            n.es(r, t);
            var i = n("269596")
        },
        894742: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                i = n("516555"),
                a = n("812204"),
                l = n("685665"),
                o = n("635357"),
                u = n("642906"),
                d = n("85336"),
                c = n("385179"),
                f = n("292215"),
                p = n("158184"),
                E = n("385890"),
                I = n("337978"),
                h = n("49111"),
                _ = n("843455"),
                S = n("322859");
            let C = (e, t, n) => (0, s.jsx)(I.CollectiblesPaymentModalHeader, {
                step: n,
                onClose: () => t(!1)
            });

            function T(e) {
                let {
                    onClose: t,
                    onComplete: n,
                    transitionState: I,
                    loadId: T,
                    skuId: m,
                    isGift: A = !1,
                    giftRecipient: g,
                    giftMessage: O,
                    analyticsLocations: R,
                    returnRef: N
                } = e, {
                    analyticsLocations: x,
                    AnalyticsLocationProvider: v
                } = (0, l.default)([...R, a.default.COLLECTIBLES_PAYMENT_MODAL]), P = r.useRef(new i.Environment), [L, M] = r.useState(null), y = [f.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, E.COLLECTIBLES_GIFT_CUSTOMIZATION_STEP, f.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...f.SHARED_STEP_CONFIGS, f.REVIEW_STEP_CONFIG, {
                    key: d.Step.CONFIRM,
                    renderStep: e => (0, s.jsx)(p.CollectiblesPaymentModalConfirmStep, {
                        ...e,
                        confettiCanvas: L,
                        analyticsLocations: x
                    }),
                    options: {
                        bodyClassName: S.modalOverrideBody,
                        sliderBodyClassName: S.modalOverrideSliderBody
                    }
                }];
                return (0, s.jsxs)(v, {
                    children: [(0, s.jsx)(i.ConfettiCanvas, {
                        ref: M,
                        className: S.confettiCanvas,
                        environment: P.current
                    }), (0, s.jsx)(u.PaymentContextProvider, {
                        stepConfigs: y,
                        applicationId: h.COLLECTIBLES_APPLICATION_ID,
                        skuIDs: [m],
                        isGift: A,
                        activeSubscription: null,
                        purchaseType: _.PurchaseTypes.ONE_TIME,
                        children: (0, s.jsx)(o.GiftContextProvider, {
                            isGift: A,
                            giftRecipient: g,
                            giftMessage: O,
                            children: (0, s.jsx)(c.PaymentModal, {
                                onClose: t,
                                onComplete: n,
                                loadId: T,
                                applicationId: h.COLLECTIBLES_APPLICATION_ID,
                                skuId: m,
                                initialPlanId: null,
                                analyticsLocations: x,
                                transitionState: I,
                                renderHeader: C,
                                returnRef: N,
                                hideShadow: !0
                            })
                        })
                    })]
                })
            }
        },
        158184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CollectiblesPaymentModalConfirmStep: function() {
                    return I
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("627445"),
                i = n.n(r),
                a = n("65597"),
                l = n("749432"),
                o = n("853987"),
                u = n("658756"),
                d = n("635357"),
                c = n("642906"),
                f = n("650484"),
                p = n("367767");

            function E(e) {
                let {
                    handleClose: t,
                    confettiCanvas: n,
                    analyticsLocations: r
                } = e, {
                    skusById: l,
                    selectedSkuId: d,
                    application: E
                } = (0, c.usePaymentContext)(), {
                    product: I,
                    category: h
                } = (0, a.useStateFromStoresObject)([o.default], () => ({
                    product: o.default.getProduct(d),
                    category: o.default.getCategoryForProduct(d)
                }));
                i(null != d, "Expected selectedSkuId"), i(null != E, "Expected application");
                let _ = l[d];
                return (i(null != _, "Expected sku"), null == h || null == I) ? null : (0, s.jsxs)(f.PaymentPortalBody, {
                    children: [(0, s.jsx)(p.default, {}), (0, s.jsx)(u.CollectiblesCollectedModalInner, {
                        product: I,
                        category: h,
                        onClose: t,
                        confettiCanvas: n,
                        analyticsLocations: r
                    })]
                })
            }

            function I(e) {
                let {
                    isGift: t,
                    giftCode: n,
                    selectedGiftStyle: r,
                    hasSentMessage: i,
                    giftRecipient: a,
                    giftMessageError: o,
                    isSendingMessage: u
                } = (0, d.useGiftContext)();
                return t ? (0, s.jsx)(l.default, {
                    giftCode: n,
                    onClose: e.handleClose,
                    selectedGiftStyle: r,
                    hasSentMessage: i,
                    giftRecipient: a,
                    giftMessageError: o,
                    isSendingMessage: u
                }) : (0, s.jsx)(E, {
                    ...e
                })
            }
        },
        385890: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                COLLECTIBLES_GIFT_CUSTOMIZATION_STEP: function() {
                    return C
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                i = n("446674"),
                a = n("162848"),
                l = n("349133"),
                o = n("705820"),
                u = n("208559"),
                d = n("177998"),
                c = n("697218"),
                f = n("145131"),
                p = n("635357"),
                E = n("642906"),
                I = n("85336"),
                h = n("650484"),
                _ = n("782340"),
                S = n("578956");
            let C = {
                key: I.Step.GIFT_CUSTOMIZATION,
                renderStep: e => (0, s.jsx)(m, {
                    ...e
                }),
                options: {
                    isLargeModal: !0
                }
            };

            function T(e) {
                let {
                    onStepChange: t,
                    onBackClick: n,
                    showBackButton: i,
                    disabled: a = !1,
                    loading: l = !1
                } = e, {
                    hasPaymentSources: o
                } = (0, E.usePaymentContext)(), u = o ? I.Step.REVIEW : I.Step.ADD_PAYMENT_STEPS;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(r.Button, {
                        onClick: () => t(u),
                        disabled: a,
                        submitting: l,
                        children: _.default.Messages.PAGINATION_NEXT
                    }), i ? (0, s.jsx)(d.default, {
                        onClick: n
                    }) : null]
                })
            }

            function m(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, {
                    customGiftMessage: d = "",
                    setCustomGiftMessage: I,
                    giftRecipientError: C,
                    validatingGiftRecipient: m,
                    giftRecipient: A
                } = (0, p.useGiftContext)(), {
                    selectedSkuId: g,
                    selectedSkuPricePreview: O
                } = (0, E.usePaymentContext)(), R = (0, i.useStateFromStores)([c.default], () => c.default.getCurrentUser());
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(h.PaymentPortalBody, {
                        children: (0, s.jsxs)("div", {
                            className: S.stepBody,
                            children: [(0, s.jsx)("div", {
                                className: S.bodyColumnMiddle,
                                children: (0, s.jsx)(u.GiftAnimationOptions, {})
                            }), (0, s.jsxs)("div", {
                                className: S.bodyColumnRight,
                                children: [(0, s.jsx)(l.default, {
                                    selectedSkuId: g
                                }), (0, s.jsx)(o.default, {
                                    sectionTitle: _.default.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: e => null == I ? void 0 : I(e),
                                    pendingText: d,
                                    currentText: d
                                }), (0, s.jsx)(a.default, {
                                    selectedSkuId: g,
                                    selectedSkuPricePreview: O
                                })]
                            })]
                        })
                    }), (0, s.jsx)(h.PaymentPortalFooter, {
                        children: (0, s.jsx)(r.ModalFooter, {
                            justify: f.default.Justify.BETWEEN,
                            align: f.default.Align.CENTER,
                            children: (0, s.jsx)(T, {
                                onStepChange: t,
                                showBackButton: !0,
                                onBackClick: n,
                                disabled: null != C || null == A || A.id === (null == R ? void 0 : R.id),
                                loading: m
                            })
                        })
                    })]
                })
            }
        },
        337978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CollectiblesPaymentModalHeader: function() {
                    return f
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                i = n("834897"),
                a = n("635357"),
                l = n("85336"),
                o = n("425480"),
                u = n("782340"),
                d = n("504898"),
                c = n("551290");
            let f = e => {
                let {
                    step: t,
                    onClose: n
                } = e, {
                    isGift: f
                } = (0, a.useGiftContext)(), p = (0, i.default)(o.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
                if (t === l.Step.CONFIRM || t === l.Step.BENEFITS) return (0, s.jsx)("div", {});
                if (f && (t === l.Step.GIFT_CUSTOMIZATION || t === l.Step.REVIEW)) {
                    let e = t === l.Step.REVIEW ? u.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_REVIEW_HEADER : u.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER;
                    return (0, s.jsxs)(r.ModalHeader, {
                        className: d.headerContainerGift,
                        separator: !1,
                        children: [(0, s.jsx)("div", {
                            className: d.headerGift,
                            children: (0, s.jsx)(r.Heading, {
                                variant: "heading-lg/semibold",
                                children: e
                            })
                        }), (0, s.jsx)(r.ModalCloseButton, {
                            onClick: n,
                            className: d.closeButtonGift
                        })]
                    })
                }
                return (0, s.jsxs)("div", {
                    className: d.headerContainer,
                    children: [!p && (0, s.jsx)("div", {
                        className: d.headerImageContainer,
                        "aria-hidden": "true",
                        "data-accessibility": "desaturate",
                        children: (0, s.jsx)("img", {
                            src: c,
                            alt: "",
                            className: d.headerImage
                        })
                    }), (0, s.jsx)(r.ModalCloseButton, {
                        withCircleBackground: !0,
                        className: d.closeButton,
                        onClick: n
                    })]
                })
            }
        },
        7127: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PaymentModalConfirmStep: function() {
                    return f
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("627445"),
                i = n.n(r),
                a = n("77078"),
                l = n("642906"),
                o = n("367767"),
                u = n("650484"),
                d = n("782340"),
                c = n("966425");

            function f(e) {
                let {
                    handleClose: t
                } = e, {
                    skusById: n,
                    selectedSkuId: r,
                    application: f
                } = (0, l.usePaymentContext)();
                i(null != r, "Expected selectedSkuId"), i(null != f, "Expected application");
                let p = n[r];
                i(null != p, "Expected sku");
                let E = d.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                    applicationName: f.name,
                    itemName: p.name
                });
                return (0, s.jsxs)(u.PaymentPortalBody, {
                    children: [(0, s.jsx)(o.default, {}), (0, s.jsxs)("div", {
                        className: c.confirmation,
                        children: [(0, s.jsx)(a.Heading, {
                            variant: "heading-xxl/bold",
                            className: c.confirmationHeader,
                            children: "Success!"
                        }), (0, s.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: E
                        }), (0, s.jsx)("div", {
                            className: c.divider
                        }), (0, s.jsx)(a.Button, {
                            onClick: t,
                            children: d.default.Messages.CLOSE
                        })]
                    })]
                })
            }
        },
        292215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
                    return f
                },
                ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
                    return p
                },
                REVIEW_STEP_CONFIG: function() {
                    return h
                },
                ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
                    return _
                },
                SHARED_STEP_CONFIGS: function() {
                    return S
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("357957"),
                i = n("85336"),
                a = n("262683"),
                l = n("946359"),
                o = n("724269"),
                u = n("7127"),
                d = n("99836"),
                c = n("217796");
            let f = {
                    key: null,
                    renderStep: e => (0, s.jsx)(c.OneTimePaymentPredicateStep, {
                        ...e
                    })
                },
                p = {
                    key: i.Step.ADD_PAYMENT_STEPS,
                    renderStep: e => (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)(a.PaymentModalAddPaymentStep, {
                            ...e,
                            breadcrumbSteps: [i.Step.ADD_PAYMENT_STEPS, i.Step.REVIEW, i.Step.CONFIRM],
                            onReturn: () => {
                                let t = r.default.paymentSources;
                                0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(i.Step.REVIEW, {
                                    trackedFromStep: i.Step.ADD_PAYMENT_STEPS
                                })
                            }
                        })
                    }),
                    options: {
                        renderHeader: !0
                    }
                },
                E = {
                    key: i.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: () => (0, s.jsx)(o.default, {})
                },
                I = {
                    key: i.Step.AWAITING_AUTHENTICATION,
                    renderStep: () => (0, s.jsx)(l.default, {})
                },
                h = {
                    key: i.Step.REVIEW,
                    renderStep: e => (0, s.jsx)(d.PaymentModalReviewStep, {
                        ...e
                    })
                },
                _ = {
                    key: i.Step.CONFIRM,
                    renderStep: e => (0, s.jsx)(u.PaymentModalConfirmStep, {
                        ...e
                    })
                },
                S = [E, I]
        },
        217796: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                OneTimePaymentPredicateStep: function() {
                    return p
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                i = n("627445"),
                a = n.n(i),
                l = n("245187"),
                o = n("635357"),
                u = n("642906"),
                d = n("85336"),
                c = n("628738"),
                f = n("49111");

            function p(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, {
                    blockedPayments: i,
                    hasFetchedSkus: p,
                    paymentSources: E,
                    hasFetchedPaymentSources: I,
                    application: h,
                    skusById: _,
                    selectedSkuId: S
                } = (0, u.usePaymentContext)(), {
                    isGift: C
                } = (0, o.useGiftContext)(), [T, m] = r.useState(!0);
                return (r.useEffect(() => {
                    let e = null != h;
                    p && I && e && m(!1)
                }, [p, I, h]), r.useEffect(() => {
                    if (T || i) return;
                    a(null != S, "Expected selectedSkuId");
                    let e = _[S];
                    if (C && (null == e ? void 0 : e.productLine) === f.SKUProductLines.COLLECTIBLES) {
                        t(d.Step.GIFT_CUSTOMIZATION);
                        return
                    }
                    if (0 === Object.keys(E).length) {
                        t(d.Step.ADD_PAYMENT_STEPS);
                        return
                    }
                    t(d.Step.REVIEW)
                }, [T, i, t, E, C, _, S]), T) ? (0, s.jsx)(c.default, {}) : i ? (0, s.jsx)(l.BlockedPaymentsContentModal, {
                    onClose: n
                }) : null
            }
        },
        166960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("862205");
            let r = (0, s.createExperiment)({
                kind: "user",
                id: "2023-05_referral_trials_birthday_moment",
                label: "Referral Trials Birthday Moment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Users will see the birthday moment referral trial UX",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var i = r
        },
        1607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("862205");
            let r = (0, s.createExperiment)({
                kind: "user",
                id: "2023-02_referral_trials",
                label: "Referral Trials",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Nitro users can send a Nitro trial offer to another user.",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var i = r
        },
        65324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007"), n("70102");
            var s = n("37983"),
                r = n("884691"),
                i = n("446674"),
                a = n("206230"),
                l = n("491605"),
                o = n("210721"),
                u = n("78345");

            function d(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: d = !0,
                    defaultAnimationState: c,
                    idleAnimationState: f
                } = e, p = (0, i.useStateFromStores)([a.default], () => a.default.useReducedMotion), [E, I] = r.useState(c), h = r.useRef((0, o.getGiftAnimationData)(t, E)), [_, S] = r.useState(null == f), [C, T] = r.useState(!1), [m, A] = r.useState(-1), g = () => {
                    h.current = (0, o.getGiftAnimationData)(t, E), A(e => e + 1)
                }, O = () => {
                    S(!1), T(!0), A(-1), I(c)
                };
                r.useEffect(() => {
                    null == f && I(c)
                }, [f, c]), r.useEffect(() => {
                    if (null != f && m >= 0) {
                        O();
                        return
                    }
                    g()
                }, [t, f]), r.useEffect(() => {
                    (!C || null == f) && g()
                }, [E]), r.useEffect(() => {
                    C && (S(null == f), T(!1), g())
                }, [C]);
                if (!u.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, s.jsx)(l.default, {
                    importData: h.current,
                    shouldAnimate: !p && d,
                    className: n,
                    versionKey: m,
                    onComplete: null != f ? () => {
                        null != f && (I(f), S(!0))
                    } : void 0,
                    loop: _
                })
            }
        },
        967241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openThreadSidebarForViewing: function() {
                    return A
                },
                openThreadSidebarForCreating: function() {
                    return g
                },
                closeThreadSidebar: function() {
                    return O
                },
                closeAndClearThreadSidebar: function() {
                    return R
                }
            });
            var s = n("627445"),
                r = n.n(s),
                i = n("917351"),
                a = n.n(i),
                l = n("913144"),
                o = n("295426"),
                u = n("244201"),
                d = n("716241"),
                c = n("565298"),
                f = n("393414"),
                p = n("144491"),
                E = n("845579"),
                I = n("474643"),
                h = n("18494"),
                _ = n("800762"),
                S = n("659500"),
                C = n("648564"),
                T = n("49111"),
                m = n("724210");

            function A(e, t, n) {
                u.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE);
                let s = !a.isEmpty(_.default.getVoiceStatesForChannel(e.id));
                if (t || !E.UseThreadSidebar.getSetting() || __OVERLAY__ || s) {
                    l.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, p.transitionToThread)(e, n) : (0, p.transitionToChannel)(e.id);
                    return
                }
                r(null != e.parent_id, "all threads must have parents");
                let i = h.default.getChannelId();
                e.parent_id !== i && !(0, m.isGuildHomeChannel)(i) && (0, p.transitionToChannel)(e.parent_id), (0, f.transitionTo)(T.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, m.isGuildHomeChannel)(i) ? m.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? C.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    S.ComponentDispatch.dispatch(T.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function g(e, t, n) {
                r(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), r(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(T.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), u.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE), h.default.getChannelId() !== e.id && (0, p.transitionToChannel)(e.id);
                let s = I.default.getDraft(e.id, I.DraftType.FirstThreadMessage);
                if ("" === s) {
                    let t = I.default.getDraft(e.id, I.DraftType.ChannelMessage);
                    o.default.saveDraft(e.id, "", I.DraftType.ChannelMessage), o.default.saveDraft(e.id, t, I.DraftType.FirstThreadMessage)
                }
                setTimeout(() => {
                    l.default.dispatch({
                        type: "SIDEBAR_CREATE_THREAD",
                        parentChannelId: e.id,
                        parentMessageId: null == t ? void 0 : t.id,
                        location: n
                    })
                }, 0)
            }

            function O(e, t) {
                (0, f.transitionTo)(T.Routes.CHANNEL(e, (0, m.isGuildHomeChannel)(t) ? m.StaticChannelRoute.GUILD_HOME : t)), l.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function R(e) {
                l.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), l.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: I.DraftType.FirstThreadMessage
                }), l.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: I.DraftType.ThreadSettings
                })
            }
        },
        671484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("702976");
            var s, r = n("866227"),
                i = n.n(r),
                a = n("666038"),
                l = n("568734"),
                o = n("797647"),
                u = n("646718");
            let d = Object.freeze({
                PAYMENT_SOURCE_REQUIRED: 1,
                EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
                NOT_SELF_REDEEMABLE: 4
            });
            s = class e extends a.default {
                static createFromServer(t) {
                    return new e({
                        userId: null != t.user ? t.user.id : null,
                        code: t.code,
                        skuId: t.sku_id,
                        applicationId: t.application_id,
                        uses: t.uses,
                        maxUses: t.max_uses,
                        storeListingId: null != t.store_listing ? t.store_listing.id : null,
                        expiresAt: null != t.expires_at ? i(t.expires_at) : null,
                        redeemed: t.redeemed,
                        subscriptionPlanId: null != t.subscription_plan ? t.subscription_plan.id : t.subscription_plan_id,
                        subscriptionPlan: null != t.subscription_plan ? o.default.createFromServer(t.subscription_plan) : null,
                        revoked: !1,
                        entitlementBranches: null != t.entitlement_branches ? t.entitlement_branches : null,
                        flags: null != t.flags ? t.flags : 0,
                        giftStyle: t.gift_style,
                        subscriptionTrial: null != t.subscription_trial ? {
                            id: t.subscription_trial.id,
                            interval: t.subscription_trial.interval,
                            intervalCount: t.subscription_trial.interval_count,
                            skuId: t.subscription_trial.sku_id
                        } : null,
                        promotion: null != t.promotion ? {
                            id: t.promotion.id,
                            startDate: t.promotion.start_date,
                            endDate: t.promotion.end_date,
                            inboundHeaderText: t.promotion.inbound_header_text,
                            inboundBodyText: t.promotion.inbound_body_text,
                            inboundHelpCenterLink: t.promotion.inbound_help_center_link
                        } : null
                    })
                }
                isExpired() {
                    let e = this.expiresAt;
                    return null != e && i().isAfter(e)
                }
                get hasMultipleCopies() {
                    return this.maxUses > 1
                }
                get isClaimed() {
                    return this.uses >= this.maxUses
                }
                get remainingUses() {
                    return this.maxUses - this.uses
                }
                get isSubscription() {
                    return null != this.subscriptionPlanId
                }
                get premiumSubscriptionType() {
                    return this.isSubscription && u.PremiumSubscriptionSKUToPremiumType[this.skuId] || null
                }
                get isSelfRedeemable() {
                    return !(0, l.hasFlag)(this.flags, d.NOT_SELF_REDEEMABLE)
                }
                get isExistingPremiumSubscriptionDisallowed() {
                    return (0, l.hasFlag)(this.flags, d.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED)
                }
                get analyticsData() {
                    return {
                        gift_code: this.code,
                        gift_code_max_uses: this.maxUses
                    }
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.userId = e.userId, this.code = e.code, this.skuId = e.skuId, this.applicationId = e.applicationId, this.uses = e.uses, this.maxUses = e.maxUses, this.expiresAt = e.expiresAt, this.redeemed = e.redeemed, this.storeListingId = e.storeListingId, this.subscriptionPlanId = e.subscriptionPlanId, this.subscriptionPlan = e.subscriptionPlan, this.revoked = e.revoked, this.entitlementBranches = e.entitlementBranches, this.flags = e.flags, this.subscriptionTrial = e.subscriptionTrial, this.promotion = e.promotion, this.giftStyle = e.giftStyle
                }
            }
        },
        843823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var s = n("446674"),
                r = n("913144"),
                i = n("27618");
            let a = !1,
                l = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                o = {
                    ...l
                };

            function u() {
                o.affinityUserIds = new Set(o.userAffinities.map(e => e.user_id).filter(e => !i.default.isBlocked(e)))
            }
            class d extends s.default.PersistedStore {
                initialize(e) {
                    this.waitFor(i.default), null != e && (o.userAffinities = e.userAffinities, o.affinityUserIds = new Set(e.affinityUserIds), o.lastFetched = e.lastFetched), this.syncWith([i.default], u)
                }
                needsRefresh() {
                    return Date.now() - o.lastFetched > 864e5
                }
                getFetching() {
                    return a
                }
                getState() {
                    return o
                }
                getUserAffinities() {
                    return o.userAffinities
                }
                getUserAffinitiesUserIds() {
                    return o.affinityUserIds
                }
            }
            d.displayName = "UserAffinitiesStore", d.persistKey = "UserAffinitiesStore", d.migrations = [e => null];
            var c = new d(r.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: n
                    } = e;
                    o.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], o.lastFetched = Date.now(), u(), a = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    a = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    a = !1
                },
                LOGOUT: function() {
                    o = {
                        ...l
                    }
                }
            })
        },
        188525: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CopyInputModes: function() {
                    return f
                },
                default: function() {
                    return E
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                i = n("414456"),
                a = n.n(i),
                l = n("77078"),
                o = n("474293"),
                u = n("145131"),
                d = n("782340"),
                c = n("863448");
            let f = {
                DEFAULT: "default",
                SUCCESS: "success",
                ERROR: "error"
            };
            class p extends r.PureComponent {
                select() {
                    var e;
                    null === (e = this.inputRef.current) || void 0 === e || e.select()
                }
                renderInput(e) {
                    var t;
                    let {
                        value: n,
                        mode: r
                    } = this.props, i = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
                    return (0, s.jsx)("input", {
                        className: a((0, o.getClass)(c, "input", r), {
                            [c.inputHidden]: e
                        }),
                        ref: this.inputRef,
                        type: "text",
                        value: n,
                        onClick: this.handleInputClick,
                        readOnly: !0,
                        "aria-labelledby": i
                    })
                }
                render() {
                    let e;
                    let {
                        text: t = d.default.Messages.COPY,
                        mode: n,
                        hideMessage: r,
                        className: i,
                        buttonLook: p
                    } = this.props, E = null != r;
                    switch (n) {
                        case f.SUCCESS:
                            e = l.ButtonColors.GREEN;
                            break;
                        case f.ERROR:
                            e = l.ButtonColors.RED;
                            break;
                        default:
                            e = this.props.buttonColor
                    }
                    return (0, s.jsx)(l.FocusRing, {
                        focusTarget: this.inputRef,
                        ringTarget: this.containerRef,
                        children: (0, s.jsx)("div", {
                            className: a((0, o.getClass)(c, "copyInput", n), i),
                            ref: this.containerRef,
                            children: (0, s.jsxs)(u.default, {
                                className: c.layout,
                                children: [(0, s.jsxs)(u.default, {
                                    className: c.inputWrapper,
                                    children: [this.renderInput(E), E ? (0, s.jsx)("div", {
                                        className: c.hiddenMessage,
                                        children: r
                                    }) : null]
                                }), (0, s.jsx)(u.default, {
                                    shrink: 1,
                                    grow: 0,
                                    style: {
                                        margin: 0
                                    },
                                    children: (0, s.jsx)(l.Button, {
                                        className: c.button,
                                        onClick: this.handleButtonClick,
                                        size: l.ButtonSizes.MIN,
                                        color: e,
                                        look: p,
                                        children: t
                                    })
                                })]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = r.createRef(), this.containerRef = r.createRef(), this.handleButtonClick = () => {
                        this.select();
                        let {
                            onCopy: e,
                            value: t
                        } = this.props;
                        e(t)
                    }, this.handleInputClick = () => {
                        this.select()
                    }
                }
            }
            p.contextType = l.FormContext, p.defaultProps = {
                supportsCopy: !0,
                buttonColor: l.ButtonColors.PRIMARY,
                buttonLook: l.ButtonLooks.FILLED,
                mode: f.DEFAULT
            }, p.Modes = f, p.ButtonColors = l.ButtonColors, p.ButtonLooks = l.ButtonLooks;
            var E = p
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("926001"),
                a = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: i,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, i.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        346955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("509317"),
                a = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            fill: r,
                            className: i,
                            d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"
                        })
                    })
                }, i.FolderIcon, void 0, {
                    size: 24
                })
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("578478"),
                a = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: i,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: r
                        })
                    })
                }, i.ImageIcon, void 0, {
                    size: 24
                })
        },
        659186: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatLayerContainer: function() {
                    return l
                },
                ChatLayerProvider: function() {
                    return o
                },
                default: function() {
                    return u
                }
            });
            var s = n("228256");
            let {
                Layer: r,
                LayerContainer: i,
                LayerProvider: a
            } = (0, s.createLayer)("Chat"), l = i, o = a;
            var u = r
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return S
                },
                default: function() {
                    return m
                }
            }), n("424973"), n("222007");
            var s = n("37983"),
                r = n("884691"),
                i = n("414456"),
                a = n.n(i),
                l = n("627445"),
                o = n.n(l),
                u = n("77078"),
                d = n("506885"),
                c = n("981601"),
                f = n("766274"),
                p = n("697218"),
                E = n("368121"),
                I = n("523096"),
                h = n("587974"),
                _ = n("494101");
            let S = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function C(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class T extends r.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: r,
                        extraDetail: i
                    } = this.props, a = [], l = e.length === t ? e.length : t - 1, o = this.renderMoreUsers(l), u = 0;
                    for (; u < l && u < e.length;) {
                        var d;
                        let t = null == o && null == i && u === e.length - 1,
                            l = n(e[u], t, u);
                        a.push(t ? (0, s.jsx)("div", {
                            className: _.avatarContainer,
                            children: l
                        }, C(null !== (d = e[u]) && void 0 !== d ? d : null, u)) : (0, s.jsx)(h.default, {
                            className: _.avatarContainerMasked,
                            height: r,
                            width: r,
                            mask: h.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: l
                        }, C(e[u], u))), u++
                    }
                    return null != i ? a.push(i) : null != o && a.push(o), a
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: i,
                        renderMoreUsers: a,
                        users: l
                    } = this.props, o = Math.min(e, l.length);
                    if (!i) {
                        if (null != n) {
                            if (n >= t) return (0, s.jsx)(r.Fragment, {
                                children: a("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > l.length) {
                                let e = n - l.length;
                                return (0, s.jsx)(r.Fragment, {
                                    children: a("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (o < l.length) {
                            let e = Math.min(l.length - o, 99);
                            return (0, s.jsx)(r.Fragment, {
                                children: a("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, s.jsx)(E.default, {
                        foreground: _.foreground,
                        className: _.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: r,
                        showUserPopout: i,
                        useFallbackUserForPopout: l
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, E = n.find(e => null != e && e.id === f), I = l && null == p.default.getUser(f);
                    return (0, s.jsx)(u.Popout, {
                        position: "right",
                        preload: null == E ? void 0 : () => (0, d.default)(E.id, E.getAvatarURL(r, 80), {
                            guildId: r
                        }),
                        shouldShow: !0 === i && null != f,
                        fixed: !0,
                        renderPopout: e => (o(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, s.jsx)(c.default, {
                            ...this.props,
                            user: I && null != E ? E : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, s.jsxs)("div", {
                            className: a(e, _.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.SIZE_24;
                                switch (e) {
                                    case S.SIZE_16:
                                        return _.size16;
                                    case S.SIZE_24:
                                        return _.size24;
                                    case S.SIZE_32:
                                        return _.size32;
                                    case S.SIZE_56:
                                        return _.size56;
                                    default:
                                        return _.size24
                                }
                            }(t)),
                            ref: this._ref,
                            ...n,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutUserId: null
                    }, this._ref = r.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: r,
                            guildId: i,
                            size: a
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, s.jsx)("div", {
                                className: _.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % I.default.DEFAULT_AVATARS.length,
                                    t = I.default.DEFAULT_AVATARS[e];
                                return (0, s.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: _.avatar
                                })
                            }
                        }
                        let l = (0, s.jsx)("img", {
                            src: e.getAvatarURL(i, a),
                            alt: e.username,
                            className: _.avatar
                        }, e.id);
                        return r ? (0, s.jsx)(u.Clickable, {
                            className: _.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: l
                        }, e.id) : l
                    }
                }
            }
            T.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, s.jsx)("div", {
                        className: _.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: S.SIZE_24
            };
            var m = T
        }
    }
]);