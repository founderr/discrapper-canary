(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["56122"], {
        101017: function(e, a, l) {
            "use strict";
            e.exports = l.p + "76db37e93ca50f3fa98b.svg"
        },
        65757: function(e, a, l) {
            "use strict";
            e.exports = l.p + "829f8ef7dcf355fbe141.svg"
        },
        125632: function(e, a, l) {
            "use strict";
            e.exports = l.p + "1a008a52c770a5334da4.png"
        },
        591589: function(e, a, l) {
            "use strict";
            e.exports = l.p + "a97cf12e63e89483261f.png"
        },
        608684: function(e, a, l) {
            "use strict";
            l.r(a), l.d(a, {
                ImageUploaderIcon: function() {
                    return h
                },
                default: function() {
                    return g
                }
            }), l("222007");
            var t = l("37983"),
                i = l("884691"),
                n = l("414456"),
                r = l.n(n),
                s = l("627445"),
                o = l.n(s),
                u = l("77078"),
                d = l("159885"),
                c = l("694187"),
                m = l("49111"),
                f = l("782340"),
                v = l("911686");

            function h(e) {
                let {
                    className: a,
                    icon: l = null
                } = e;
                return (0, t.jsx)("div", {
                    className: r(v.imageUploaderIcon, a),
                    children: l
                })
            }
            class p extends i.PureComponent {
                handleExternalFileChange(e) {
                    o(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let a, l, i, n;
                    let {
                        image: s,
                        hint: o,
                        name: p,
                        makeURL: g,
                        disabled: I,
                        onChange: S,
                        showIcon: x,
                        showIconDisabled: A,
                        className: U,
                        imageClassName: N,
                        iconClassName: T,
                        iconWrapperClassName: E,
                        icon: j,
                        hideSize: y,
                        imageStyle: C,
                        showRemoveButton: P,
                        maxFileSizeBytes: b,
                        onFileSizeError: M,
                        onOpenImageSelectModal: R,
                        "aria-label": _
                    } = this.props;
                    if (null != (a = null != s && /^data:/.test(s) ? s : g(s)) ? l = 'url("'.concat(a, '")') : null != p && (i = (0, t.jsx)("div", {
                            className: v.imageUploaderAcronym,
                            children: (0, d.getAcronym)(p)
                        })), I) return (0, t.jsx)("div", {
                        className: r(v.imageUploader, v.disabled, U),
                        children: (0, t.jsxs)("div", {
                            className: r(v.imageUploaderInner, N),
                            style: {
                                ...C,
                                backgroundImage: l
                            },
                            children: [i, A && (0, t.jsx)("div", {
                                className: r(v.imageUploaderIcon, v.imageUploaderIconDisabled, T),
                                children: j
                            })]
                        })
                    });
                    null != s ? n = (0, t.jsx)(u.Anchor, {
                        className: v.removeButton,
                        onClick: this.handleRemove,
                        children: f.default.Messages.REMOVE
                    }) : !y && (n = (0, t.jsx)("small", {
                        className: v.sizeInfo,
                        children: f.default.Messages.MINIMUM_SIZE.format({
                            size: m.AVATAR_SIZE
                        })
                    }));
                    let k = null !== (e = null != _ ? _ : o) && void 0 !== e ? e : f.default.Messages.CHANGE_AVATAR;
                    return (0, t.jsxs)("div", {
                        className: r(v.imageUploader, U),
                        children: [(0, t.jsx)(u.FocusRing, {
                            within: !0,
                            children: (0, t.jsxs)("div", {
                                className: x ? r(v.imageUploaderIconWrapper, E) : void 0,
                                children: [(0, t.jsxs)("div", {
                                    className: r(v.imageUploaderInner, N),
                                    style: {
                                        ...C,
                                        backgroundImage: l
                                    },
                                    children: [(0, t.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: i
                                    }), null != R ? (0, t.jsx)(u.Clickable, {
                                        className: v.imageUploaderFileInput,
                                        "aria-label": k,
                                        onClick: R
                                    }) : (0, t.jsx)(c.default, {
                                        ref: this.inputRef,
                                        onChange: S,
                                        className: v.imageUploaderFileInput,
                                        "aria-label": k,
                                        tabIndex: 0,
                                        maxFileSizeBytes: b,
                                        onFileSizeError: M
                                    })]
                                }), null != o && (0, t.jsx)("div", {
                                    className: v.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: o
                                }), x && (0, t.jsx)(h, {
                                    className: T,
                                    icon: j
                                })]
                            })
                        }), P ? n : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = i.createRef(), this.handleRemove = () => {
                        this.props.onChange(null)
                    }
                }
            }
            p.defaultProps = {
                name: "",
                makeURL: e => e,
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            var g = p
        },
        360871: function(e, a, l) {
            "use strict";
            l.r(a), l.d(a, {
                FakeActivityCharacter: function() {
                    return t
                },
                default: function() {
                    return I
                }
            }), l("222007");
            var t, i, n = l("37983"),
                r = l("884691"),
                s = l("414456"),
                o = l.n(s),
                u = l("301165"),
                d = l("77078"),
                c = l("206230"),
                m = l("777003"),
                f = l("782340"),
                v = l("337778"),
                h = l("125632"),
                p = l("591589");
            (i = t || (t = {}))[i.WUMPUS = 0] = "WUMPUS", i[i.PHIBI = 1] = "PHIBI";
            let g = {
                0: v.activityCharacterWumpus,
                1: v.activityCharacterPhibi
            };
            var I = r.memo(function(e) {
                let {
                    activityName: a,
                    activityCharacter: l = 0,
                    showExampleButton: t = !1
                } = e, [i, s] = r.useState(0), [I, S] = (0, u.useSpring)(() => ({
                    from: {
                        rotate: "0deg"
                    },
                    config: {
                        tension: 1e3,
                        friction: 5
                    }
                })), x = r.useRef({
                    seconds: i,
                    jitter: async () => {
                        for (;;) {
                            var e;
                            let a = (e = x.current.seconds, c.default.useReducedMotion ? 0 : Math.min(10, (e -= 5399) / 300 * 10));
                            S({
                                rotate: "-".concat(a, "deg")
                            }), await new Promise(e => setTimeout(e, 80)), S({
                                rotate: "".concat(a, "deg")
                            }), await new Promise(e => setTimeout(e, 80))
                        }
                    }
                });
                return r.useEffect(() => void(x.current.seconds = i)), r.useEffect(() => {
                    let e = setInterval(() => {
                        s(e => (5399 === e && x.current.jitter(), ++e))
                    }, 1e3);
                    return () => clearInterval(e)
                }, []), (0, n.jsxs)(m.default, {
                    lastSection: !0,
                    "aria-hidden": !0,
                    children: [(0, n.jsx)(d.Heading, {
                        className: v.fakeActivityTitle,
                        variant: "eyebrow",
                        children: f.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_TITLE
                    }), (0, n.jsxs)("div", {
                        className: v.fakeActivityLayout,
                        children: [(0, n.jsx)("div", {
                            className: o(v.fakeActivityIcon, g[l]),
                            children: (0, n.jsx)(u.animated.img, {
                                className: v.fakeActivityPencil,
                                src: 0 === l ? p : h,
                                style: I
                            })
                        }), (0, n.jsxs)("div", {
                            className: v.fakeActivityContent,
                            children: [(0, n.jsx)(d.Text, {
                                variant: "text-sm/semibold",
                                children: null != a ? a : f.default.Messages.USER_SETTINGS_USER_PROFILE
                            }), (0, n.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: f.default.Messages.PROFILE_CUSTOMIZATION_ACTIVITY_TIME.format({
                                    renderTimeHook(e, a) {
                                        let l = i % 60,
                                            t = (i - l) / 60;
                                        return (0, n.jsxs)("span", {
                                            className: v.fakeActivityTimeValues,
                                            children: [t.toString().padStart(2, "0"), ":", l.toString().padStart(2, "0")]
                                        }, a)
                                    }
                                })
                            })]
                        })]
                    }), t && (0, n.jsx)(d.Button, {
                        className: v.button,
                        color: v.buttonColor,
                        size: d.Button.Sizes.SMALL,
                        fullWidth: !0,
                        children: f.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON
                    })]
                })
            })
        },
        184900: function(e, a, l) {
            "use strict";
            l.r(a), l.d(a, {
                default: function() {
                    return el
                }
            }), l("222007");
            var t = l("37983"),
                i = l("884691"),
                n = l("414456"),
                r = l.n(n),
                s = l("509043"),
                o = l("446674"),
                u = l("669491"),
                d = l("77078"),
                c = l("272030"),
                m = l("875212"),
                f = l("841098"),
                v = l("206230"),
                h = l("685665"),
                p = l("462274"),
                g = l("606292"),
                I = l("449918"),
                S = l("335031"),
                x = l("608684"),
                A = l("635471"),
                U = l("388491"),
                N = l("217513"),
                T = l("581295"),
                E = l("878569"),
                j = l("430312"),
                y = l("10532"),
                C = l("935409"),
                P = l("648149"),
                b = l("369869"),
                M = l("802279"),
                R = l("465215"),
                _ = l("491250"),
                k = l("106435"),
                w = l("845579"),
                B = l("26989"),
                O = l("824563"),
                z = l("102985"),
                L = l("471671"),
                F = l("275623"),
                D = l("832132"),
                G = l("315102"),
                W = l("719923"),
                H = l("158998"),
                V = l("50885"),
                Z = l("360871"),
                Y = l("771325"),
                q = l("453252"),
                X = l("49111"),
                K = l("75015"),
                J = l("590456"),
                Q = l("782340"),
                $ = l("923843");
            let ee = V.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar,
                ea = (0, E.buildGetPremiumUserBannerStyles)({
                    premiumUserWithBanner: $.avatarUploaderPremium,
                    premiumUserWithoutBanner: $.avatarUploaderPremiumNoBanner,
                    default: $.avatarUploaderNormal
                });

            function el(e) {
                var a, n, E;
                let {
                    user: V,
                    guild: el,
                    canUsePremiumCustomization: et,
                    onUpsellClick: ei,
                    onAvatarChange: en,
                    onBannerChange: er,
                    pendingAccentColor: es,
                    pendingBanner: eo,
                    pendingBio: eu,
                    pendingPronouns: ed,
                    pendingAvatar: ec,
                    pendingAvatarDecoration: em,
                    pendingNickname: ef,
                    pendingGlobalName: ev,
                    pendingThemeColors: eh,
                    avatarClassName: ep,
                    activityName: eg,
                    activityCharacter: eI,
                    isTryItOutFlow: eS = !1,
                    disabledInputs: ex = !1,
                    hideExampleButton: eA = !1,
                    hideFakeActivity: eU = !1,
                    hideBioSection: eN = !1,
                    forProfileEffectModal: eT = !1,
                    hideMemberStatusSection: eE = !0,
                    pendingProfileEffectID: ej,
                    bodyClassName: ey
                } = e, eC = i.useRef(null), [eP, eb] = i.useState(!1), eM = w.GifAutoPlay.getSetting(), {
                    avatarDecorationSrc: eR,
                    avatarSrc: e_,
                    eventHandlers: ek
                } = (0, k.default)({
                    user: V,
                    guildId: null == el ? void 0 : el.id,
                    avatarDecorationOverride: em,
                    avatarOverride: ec,
                    size: d.AvatarSizes.SIZE_80,
                    showPending: !0
                }), ew = (0, N.default)(V.id, null == el ? void 0 : el.id), eB = (0, o.useStateFromStores)([v.default], () => v.default.syncProfileThemeWithUserTheme), eO = (0, f.default)(), ez = (0, o.useStateFromStores)([B.default], () => null == el ? null : B.default.getMember(el.id, V.id)), eL = void 0 === ec ? V.getAvatarURL(void 0, 80) : ec, eF = (0, p.default)(eL, (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_530).hsl(), !1), eD = null == ew ? void 0 : ew.getPreviewThemeColors(eh), eG = null !== (a = null == eD ? void 0 : eD[0]) && void 0 !== a ? a : null == ew ? void 0 : ew.primaryColor, eW = eB ? eO : (0, U.getProfileTheme)(eG), eH = (0, S.default)(null !== (n = null != es ? es : eG) && void 0 !== n ? n : (0, s.hex2int)(eF)).hsl, eV = (0, o.useStateFromStores)([L.default], () => L.default.isFocused()), eZ = null == ew ? void 0 : ew.getPreviewBanner(eo, eM ? eV : eP), eY = null != eZ, eq = (null == ew ? void 0 : ew.profileEffectID) != null, eX = null !== (E = (0, Y.getPreviewNickname)(ef, null == ez ? void 0 : ez.nick)) && void 0 !== E ? E : (0, Y.getPreviewDisplayName)(ev, H.default.getName(V)), [eK, eJ] = (0, o.useStateFromStoresArray)([O.default], () => [O.default.findActivity(V.id, e => e.type === X.ActivityTypes.CUSTOM_STATUS), O.default.getStatus(V.id)]), eQ = (0, o.useStateFromStores)([z.default], () => z.default.hidePersonalInformation), e$ = (null == ew ? void 0 : ew.canUsePremiumProfileCustomization) || et, e0 = i.useCallback(() => {
                    var e, a;
                    null === (a = eC.current) || void 0 === a || null === (e = a.inputRef.current) || void 0 === e || e.activateUploadDialogue()
                }, []), e1 = i.useCallback((e, a) => {
                    null == e || null == a ? en(null) : "image/gif" !== a.type || W.default.canUseAnimatedAvatar(V) ? (0, d.openModalLazy)(async () => {
                        let {
                            default: i
                        } = await l.el("57015").then(l.bind(l, "57015"));
                        return l => (0, t.jsx)(i, {
                            onCrop: en,
                            file: a,
                            imgURI: e,
                            allowSkip: !0,
                            ...l
                        })
                    }) : (0, d.openModalLazy)(async () => {
                        let {
                            default: a
                        } = await l.el("805923").then(l.bind(l, "805923"));
                        return l => (0, t.jsx)(a, {
                            ...l,
                            imgURI: e,
                            onChangeAvatar: () => {
                                l.onClose(), e0()
                            }
                        })
                    })
                }, [V, e0, en]), e5 = (e, a) => {
                    if (null == e || null == a) return er(null);
                    (0, d.openModalLazy)(async () => {
                        let {
                            default: i
                        } = await l.el("57015").then(l.bind(l, "57015"));
                        return l => (0, t.jsx)(i, {
                            onCrop: er,
                            uploadType: K.UploadTypes.BANNER,
                            file: a,
                            imgURI: e,
                            allowSkip: !0,
                            ...l
                        })
                    })
                };

                function e8() {
                    let e = null != eW ? (0, d.getStatusBackdropColor)(eW) : null;
                    return (0, t.jsxs)("div", {
                        className: $.status,
                        children: [null != e && (null == ew ? void 0 : ew.canUsePremiumProfileCustomization) && (0, t.jsx)("div", {
                            className: $.statusDotBackground,
                            style: {
                                backgroundColor: e,
                                opacity: (0, d.getStatusBackdropOpacity)(eJ, e)
                            }
                        }), (0, t.jsx)("svg", {
                            className: $.statusDot,
                            children: (0, t.jsx)("rect", {
                                height: "100%",
                                width: "100%",
                                fill: (0, I.getColor)((0, d.getStatusColor)(eJ)),
                                mask: "url(#".concat((0, d.getStatusMask)(eJ, !1), ")")
                            })
                        })]
                    })
                }
                let e2 = "ProfileCustomizationPreview";
                (0, m.useTriggerDebuggingAA)({
                    location: e2 + " auto on",
                    autoTrackExposure: !0
                }), (0, m.useTriggerDebuggingAA)({
                    location: e2 + " auto off",
                    autoTrackExposure: !1
                });
                let {
                    analyticsLocations: e3
                } = (0, h.default)();
                i.useEffect(() => {
                    if (eM) return;
                    let e = null == ew ? void 0 : ew.getBannerURL({
                        canAnimate: !0,
                        size: 480
                    });
                    if (!G.isAnimatedImageURL(e)) return;
                    let a = new Image;
                    a.src = null != e ? e : ""
                }, [ew, eM]);
                let e6 = null == el,
                    e4 = null == ew ? void 0 : ew.profileEffectID;
                return (0, t.jsxs)(j.default, {
                    forceShowPremium: et,
                    user: V,
                    guildId: null == el ? void 0 : el.id,
                    profileType: J.UserProfileTypes.POPOUT,
                    pendingThemeColors: eh,
                    className: eT ? e$ ? $.profileEffectsModalCustomizationPreviewWithTheme : $.profileEffectsModalCustomizationPreviewWithoutTheme : e$ ? $.profileCustomizationPreviewWithTheme : $.profileCustomizationPreviewWithoutTheme,
                    children: [(0, t.jsx)(A.default, {
                        profileEffectID: void 0 !== ej ? ej : e4
                    }), (0, t.jsxs)(d.HeadingLevel, {
                        children: [(0, t.jsx)(T.default, {
                            profileType: J.UserProfileTypes.POPOUT,
                            hasBanner: eY,
                            isPremium: et,
                            hasThemeColors: e$,
                            forProfileEffectModal: eT,
                            hasProfileEffect: eq,
                            children: et ? (0, t.jsxs)("div", {
                                onMouseMove: () => eb(!0),
                                onMouseLeave: () => eb(!1),
                                children: [(0, t.jsx)(x.default, {
                                    className: $.bannerUploader,
                                    showRemoveButton: !1,
                                    disabled: !et || ex,
                                    image: eZ,
                                    makeURL: () => eZ,
                                    onChange: e5,
                                    imageStyle: {
                                        backgroundColor: eH
                                    },
                                    imageClassName: r(eY ? $.bannerUploaderInnerSquare : $.bannerUploaderInnerSquareEmpty),
                                    hint: Q.default.Messages.CHANGE_BANNER,
                                    onOpenImageSelectModal: () => (0, Y.handleOpenSelectImageModal)(K.UploadTypes.BANNER, null == ez ? void 0 : ez.guildId, eS, void 0),
                                    hideSize: !0,
                                    maxFileSizeBytes: q.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                                    onFileSizeError: Y.showFileSizeErrorModal
                                }), !eM && G.isAnimatedImageURL(eZ) ? (0, t.jsx)(F.default, {
                                    className: $.gifTag
                                }) : null]
                            }) : (0, t.jsx)("div", {
                                className: eq ? $.bannerUploaderInnerSquare : $.bannerNormal,
                                style: {
                                    backgroundColor: eH
                                },
                                children: ex ? null : (0, t.jsx)(d.Clickable, {
                                    onClick: () => null == ei ? void 0 : ei({
                                        object: X.AnalyticsObjects.EDIT_PROFILE_BANNER
                                    }),
                                    className: $.bannerNitroUpsell,
                                    children: (0, t.jsx)(d.Heading, {
                                        className: $.bannerNitroUpsellText,
                                        variant: "eyebrow",
                                        children: Q.default.Messages.USER_SETTINGS_UNLOCK_BANNER
                                    })
                                })
                            })
                        }), e6 ? function() {
                            let e = () => (0, Y.handleOpenSelectImageModal)(K.UploadTypes.AVATAR, null == ez ? void 0 : ez.guildId, eS),
                                a = () => (0, g.openAvatarDecorationModal)({
                                    analyticsLocations: e3,
                                    isTryItOutFlow: eS
                                });
                            return (0, t.jsxs)(d.Clickable, {
                                ...ek,
                                "aria-disabled": ex,
                                onClick: ex ? void 0 : i => {
                                    (0, c.openContextMenuLazy)(i, async () => {
                                        let {
                                            default: i
                                        } = await l.el("609516").then(l.bind(l, "609516"));
                                        return () => (0, t.jsx)(i, {
                                            changeAvatarAction: e,
                                            changeDecorationAction: a
                                        })
                                    })
                                },
                                className: r(ea({
                                    isPremium: et,
                                    hasBanner: eY,
                                    hasProfileEffect: eq
                                }), {
                                    [$.defaultCursor]: ex
                                }),
                                children: [(0, t.jsx)(ee, {
                                    className: $.avatarUploaderInner,
                                    src: e_,
                                    avatarDecoration: eR,
                                    size: d.AvatarSizes.SIZE_80,
                                    "aria-label": V.username
                                }), ex ? null : (0, t.jsx)("div", {
                                    className: $.hoverIconWrapper,
                                    children: (0, t.jsx)(D.default, {
                                        className: $.hoverIcon,
                                        color: "white"
                                    })
                                }), e8()]
                            })
                        }() : function() {
                            let e = null != ez && !et,
                                a = (0, t.jsxs)("div", {
                                    className: ea({
                                        isPremium: et,
                                        hasBanner: eY,
                                        hasProfileEffect: eq
                                    }),
                                    children: [(0, t.jsx)(x.default, {
                                        disabled: ex,
                                        ref: eC,
                                        showIcon: null == eR,
                                        hint: e ? Q.default.Messages.UNLOCK_GUILD_MEMBER_AVATAR : Q.default.Messages.CHANGE_AVATAR,
                                        showRemoveButton: !1,
                                        imageClassName: r(ep, $.avatarUploaderInner),
                                        image: e_,
                                        onChange: e1,
                                        makeURL: () => e_,
                                        maxFileSizeBytes: q.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                                        onFileSizeError: Y.showFileSizeErrorModal,
                                        onOpenImageSelectModal: () => (0, Y.handleOpenSelectImageModal)(K.UploadTypes.AVATAR, null == ez ? void 0 : ez.guildId, eS, void 0)
                                    }), null != eR && (0, t.jsx)("img", {
                                        className: $.avatarDecoration,
                                        src: eR,
                                        alt: " ",
                                        "aria-hidden": !0
                                    }), e8()]
                                });
                            return e ? (0, t.jsx)(d.Clickable, {
                                onClickCapture: e => {
                                    e.stopPropagation(), null == ei || ei({
                                        object: X.AnalyticsObjects.AVATAR
                                    })
                                },
                                children: a
                            }) : a
                        }(), (0, t.jsx)(C.UserPopoutBadgeList, {
                            user: V,
                            guildId: null == el ? void 0 : el.id,
                            isTryItOutFlow: eS,
                            forProfileEffectModal: eT
                        }), function() {
                            let e = null == ew ? void 0 : ew.getPreviewBio(eu);
                            return (0, t.jsxs)(j.default.Inner, {
                                className: r($.body, ey),
                                children: [(0, t.jsx)(_.default, {
                                    isTryItOut: eS,
                                    user: V,
                                    nickname: null != eX ? eX : V.username,
                                    pronouns: null != ed ? ed : null == ew ? void 0 : ew.pronouns,
                                    usernameIcon: (() => {
                                        let e = null != ez;
                                        if (!e) return;
                                        let a = null === ec;
                                        if (a) return;
                                        let l = null != ez.avatar || null != ec;
                                        if (l) return (0, t.jsx)(P.default, {
                                            user: V,
                                            nickname: eX
                                        })
                                    })()
                                }), !eT && (0, t.jsx)(M.default, {
                                    customStatusActivity: eK
                                }), (0, t.jsx)(y.default, {}), !eN && (0, t.jsx)(b.default, {
                                    isUsingGuildBio: null == e ? void 0 : e.isUsingGuildValue,
                                    guild: el,
                                    bio: null == e ? void 0 : e.value,
                                    hidePersonalInformation: eQ,
                                    lastSection: eU,
                                    lineClamp: eT ? 3 : void 0
                                }), !eE && (0, t.jsx)(R.default, {
                                    userId: V.id,
                                    guild: el,
                                    guildMember: ez
                                }), !eU && (0, t.jsx)(Z.default, {
                                    activityName: eg,
                                    activityCharacter: eI,
                                    showExampleButton: null == el && !eA
                                })]
                            })
                        }()]
                    })]
                })
            }
        }
    }
]);