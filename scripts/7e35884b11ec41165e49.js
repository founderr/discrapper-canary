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
                        onChange: x,
                        showIcon: S,
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
                                className: S ? r(v.imageUploaderIconWrapper, E) : void 0,
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
                                        onChange: x,
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
                                }), S && (0, t.jsx)(h, {
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
                } = e, [i, s] = r.useState(0), [I, x] = (0, u.useSpring)(() => ({
                    from: {
                        rotate: "0deg"
                    },
                    config: {
                        tension: 1e3,
                        friction: 5
                    }
                })), S = r.useRef({
                    seconds: i,
                    jitter: async () => {
                        for (;;) {
                            var e;
                            let a = (e = S.current.seconds, c.default.useReducedMotion ? 0 : Math.min(10, (e -= 5399) / 300 * 10));
                            x({
                                rotate: "-".concat(a, "deg")
                            }), await new Promise(e => setTimeout(e, 80)), x({
                                rotate: "".concat(a, "deg")
                            }), await new Promise(e => setTimeout(e, 80))
                        }
                    }
                });
                return r.useEffect(() => void(S.current.seconds = i)), r.useEffect(() => {
                    let e = setInterval(() => {
                        s(e => (5399 === e && S.current.jitter(), ++e))
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
                    return et
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
                I = l("335031"),
                x = l("608684"),
                S = l("635471"),
                A = l("388491"),
                U = l("217513"),
                N = l("581295"),
                T = l("878569"),
                E = l("430312"),
                j = l("552243"),
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
                F = l("471671"),
                L = l("275623"),
                D = l("832132"),
                G = l("315102"),
                W = l("719923"),
                H = l("158998"),
                V = l("50885"),
                Z = l("360871"),
                Y = l("771325"),
                q = l("453252"),
                K = l("49111"),
                X = l("75015"),
                J = l("590456"),
                Q = l("782340"),
                $ = l("923843"),
                ee = l("231185");
            let ea = V.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar,
                el = (0, T.buildGetPremiumUserBannerStyles)({
                    premiumUserWithBanner: $.avatarUploaderPremium,
                    premiumUserWithoutBanner: $.avatarUploaderPremiumNoBanner,
                    default: $.avatarUploaderNormal
                });

            function et(e) {
                var a, n, T;
                let {
                    user: V,
                    guild: et,
                    canUsePremiumCustomization: ei,
                    onUpsellClick: en,
                    onAvatarChange: er,
                    onBannerChange: es,
                    pendingAccentColor: eo,
                    pendingBanner: eu,
                    pendingBio: ed,
                    pendingPronouns: ec,
                    pendingAvatar: em,
                    pendingAvatarDecoration: ef,
                    pendingNickname: ev,
                    pendingGlobalName: eh,
                    pendingThemeColors: ep,
                    pendingProfileEffectID: eg,
                    avatarClassName: eI,
                    activityName: ex,
                    activityCharacter: eS,
                    isTryItOutFlow: eA = !1,
                    disabledInputs: eU = !1,
                    hideExampleButton: eN = !1,
                    hideFakeActivity: eT = !1,
                    hideBioSection: eE = !1,
                    forProfileEffectModal: ej = !1,
                    hideMemberStatusSection: ey = !0,
                    bodyClassName: eC,
                    slideInAvatarDecoration: eP = !1
                } = e, eb = i.useRef(null), [eM, eR] = i.useState(!1), e_ = w.GifAutoPlay.getSetting(), {
                    avatarDecorationSrc: ek,
                    avatarSrc: ew,
                    eventHandlers: eB
                } = (0, k.default)({
                    user: V,
                    guildId: null == et ? void 0 : et.id,
                    avatarDecorationOverride: ef,
                    avatarOverride: em,
                    size: d.AvatarSizes.SIZE_80,
                    showPending: !0
                }), eO = (0, U.default)(V.id, null == et ? void 0 : et.id), ez = (0, o.useStateFromStores)([v.default], () => v.default.syncProfileThemeWithUserTheme), eF = (0, f.default)(), eL = (0, o.useStateFromStores)([B.default], () => null == et ? null : B.default.getMember(et.id, V.id)), eD = void 0 === em ? V.getAvatarURL(void 0, 80) : em, eG = (0, p.default)(eD, (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_530).hsl(), !1), eW = null == eO ? void 0 : eO.getPreviewThemeColors(ep), eH = null !== (a = null == eW ? void 0 : eW[0]) && void 0 !== a ? a : null == eO ? void 0 : eO.primaryColor, eV = ez ? eF : (0, A.getProfileTheme)(eH), eZ = (0, I.default)(null !== (n = null != eo ? eo : eH) && void 0 !== n ? n : (0, s.hex2int)(eG)).hsl, eY = (0, o.useStateFromStores)([F.default], () => F.default.isFocused()), eq = null == eO ? void 0 : eO.getPreviewBanner(eu, e_ ? eY : eM), eK = null != eq || null != eg, eX = (null == eO ? void 0 : eO.profileEffectID) != null, eJ = null !== (T = (0, Y.getPreviewNickname)(ev, null == eL ? void 0 : eL.nick)) && void 0 !== T ? T : (0, Y.getPreviewDisplayName)(eh, H.default.getName(V)), [eQ, e$] = (0, o.useStateFromStoresArray)([O.default], () => [O.default.findActivity(V.id, e => e.type === K.ActivityTypes.CUSTOM_STATUS), O.default.getStatus(V.id)]), e0 = (0, o.useStateFromStores)([z.default], () => z.default.hidePersonalInformation), e1 = (null == eO ? void 0 : eO.canUsePremiumProfileCustomization) || ei, e5 = i.useCallback(() => {
                    var e, a;
                    null === (a = eb.current) || void 0 === a || null === (e = a.inputRef.current) || void 0 === e || e.activateUploadDialogue()
                }, []), e2 = i.useCallback((e, a) => {
                    null == e || null == a ? er(null) : "image/gif" !== a.type || W.default.canUseAnimatedAvatar(V) ? (0, d.openModalLazy)(async () => {
                        let {
                            default: i
                        } = await l.el("57015").then(l.bind(l, "57015"));
                        return l => (0, t.jsx)(i, {
                            onCrop: er,
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
                                l.onClose(), e5()
                            }
                        })
                    })
                }, [V, e5, er]), e8 = (e, a) => {
                    if (null == e || null == a) return es(null);
                    (0, d.openModalLazy)(async () => {
                        let {
                            default: i
                        } = await l.el("57015").then(l.bind(l, "57015"));
                        return l => (0, t.jsx)(i, {
                            onCrop: es,
                            uploadType: X.UploadTypes.BANNER,
                            file: a,
                            imgURI: e,
                            allowSkip: !0,
                            ...l
                        })
                    })
                };

                function e3() {
                    let e = null != eV ? (0, d.getStatusBackdropColor)(eV) : null;
                    return (0, t.jsxs)("div", {
                        className: $.status,
                        children: [null != e && (null == eO ? void 0 : eO.canUsePremiumProfileCustomization) && (0, t.jsx)("div", {
                            className: $.statusDotBackground,
                            style: {
                                backgroundColor: e,
                                opacity: (0, d.getStatusBackdropOpacity)(e$, e)
                            }
                        }), (0, t.jsx)("svg", {
                            className: $.statusDot,
                            children: (0, t.jsx)("rect", {
                                height: "100%",
                                width: "100%",
                                fill: (0, d.getStatusFillColor)(e$),
                                mask: "url(#".concat((0, d.getStatusMask)(e$, !1), ")")
                            })
                        })]
                    })
                }
                let e6 = "ProfileCustomizationPreview";
                (0, m.useTriggerDebuggingAA)({
                    location: e6 + " auto on",
                    autoTrackExposure: !0
                }), (0, m.useTriggerDebuggingAA)({
                    location: e6 + " auto off",
                    autoTrackExposure: !1
                });
                let {
                    analyticsLocations: e4
                } = (0, h.default)();
                i.useEffect(() => {
                    if (e_) return;
                    let e = null == eO ? void 0 : eO.getBannerURL({
                        canAnimate: !0,
                        size: 480
                    });
                    if (!G.isAnimatedImageURL(e)) return;
                    let a = new Image;
                    a.src = null != e ? e : ""
                }, [eO, e_]);
                let e7 = null == et,
                    e9 = null == eO ? void 0 : eO.profileEffectID;
                return (0, t.jsxs)(E.default, {
                    forceShowPremium: ei,
                    user: V,
                    guildId: null == et ? void 0 : et.id,
                    profileType: J.UserProfileTypes.POPOUT,
                    pendingThemeColors: ep,
                    pendingProfileEffectId: eg,
                    className: ej ? e1 ? $.profileEffectsModalCustomizationPreviewWithTheme : $.profileEffectsModalCustomizationPreviewWithoutTheme : e1 ? $.profileCustomizationPreviewWithTheme : $.profileCustomizationPreviewWithoutTheme,
                    children: [(0, t.jsx)(S.default, {
                        profileEffectID: void 0 !== eg ? eg : e9
                    }), (0, t.jsxs)(d.HeadingLevel, {
                        children: [(0, t.jsx)(N.default, {
                            profileType: J.UserProfileTypes.POPOUT,
                            hasBanner: eK,
                            isPremium: ei,
                            hasThemeColors: e1,
                            forProfileEffectModal: ej,
                            hasProfileEffect: eX,
                            children: ei ? (0, t.jsxs)("div", {
                                onMouseMove: () => eR(!0),
                                onMouseLeave: () => eR(!1),
                                children: [(0, t.jsx)(x.default, {
                                    className: $.bannerUploader,
                                    showRemoveButton: !1,
                                    disabled: !ei || eU,
                                    image: eq,
                                    makeURL: () => eq,
                                    onChange: e8,
                                    imageStyle: {
                                        backgroundColor: eZ
                                    },
                                    imageClassName: r(eK ? $.bannerUploaderInnerSquare : $.bannerUploaderInnerSquareEmpty),
                                    hint: Q.default.Messages.CHANGE_BANNER,
                                    onOpenImageSelectModal: () => (0, Y.handleOpenSelectImageModal)(X.UploadTypes.BANNER, null == eL ? void 0 : eL.guildId, eA, void 0),
                                    hideSize: !0,
                                    maxFileSizeBytes: q.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                                    onFileSizeError: Y.showFileSizeErrorModal
                                }), !e_ && G.isAnimatedImageURL(eq) ? (0, t.jsx)(L.default, {
                                    className: $.gifTag
                                }) : null]
                            }) : (0, t.jsx)("div", {
                                className: eX ? $.bannerUploaderInnerSquare : $.bannerNormal,
                                style: {
                                    backgroundColor: eZ
                                },
                                children: eU ? null : (0, t.jsx)(d.Clickable, {
                                    onClick: () => null == en ? void 0 : en({
                                        object: K.AnalyticsObjects.EDIT_PROFILE_BANNER
                                    }),
                                    className: $.bannerNitroUpsell,
                                    children: (0, t.jsx)(d.Heading, {
                                        className: $.bannerNitroUpsellText,
                                        variant: "eyebrow",
                                        children: Q.default.Messages.USER_SETTINGS_UNLOCK_BANNER
                                    })
                                })
                            })
                        }), e7 ? function() {
                            let e = () => (0, Y.handleOpenSelectImageModal)(X.UploadTypes.AVATAR, null == eL ? void 0 : eL.guildId, eA),
                                a = () => (0, g.openAvatarDecorationModal)({
                                    analyticsLocations: e4,
                                    isTryItOutFlow: eA
                                });
                            return (0, t.jsxs)(d.Clickable, {
                                ...eB,
                                "aria-disabled": eU,
                                onClick: eU ? void 0 : i => {
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
                                className: r(el({
                                    isPremium: ei,
                                    hasBanner: eK,
                                    hasProfileEffect: eX
                                }), {
                                    [$.defaultCursor]: eU
                                }),
                                children: [(0, t.jsx)(ea, {
                                    className: $.avatarUploaderInner,
                                    src: ew,
                                    avatarDecoration: eP ? null : ek,
                                    size: d.AvatarSizes.SIZE_80,
                                    "aria-label": V.username
                                }), eP && (0, t.jsx)(j.default, {
                                    initTranslate3d: "translate3d(-20px, -120px, 0)",
                                    children: (0, t.jsx)(ea, {
                                        src: ee,
                                        avatarDecoration: ek,
                                        size: d.AvatarSizes.SIZE_80,
                                        status: K.StatusTypes.UNKNOWN,
                                        className: $.tryingOutAvatarDecoration,
                                        "aria-hidden": !0
                                    })
                                }, ek), eU ? null : (0, t.jsx)("div", {
                                    className: $.hoverIconWrapper,
                                    children: (0, t.jsx)(D.default, {
                                        className: $.hoverIcon,
                                        color: "white"
                                    })
                                }), e3()]
                            })
                        }() : function() {
                            let e = null != eL && !ei,
                                a = (0, t.jsxs)("div", {
                                    className: el({
                                        isPremium: ei,
                                        hasBanner: eK,
                                        hasProfileEffect: eX
                                    }),
                                    children: [(0, t.jsx)(x.default, {
                                        disabled: eU,
                                        ref: eb,
                                        showIcon: null == ek,
                                        hint: e ? Q.default.Messages.UNLOCK_GUILD_MEMBER_AVATAR : Q.default.Messages.CHANGE_AVATAR,
                                        showRemoveButton: !1,
                                        imageClassName: r(eI, $.avatarUploaderInner),
                                        image: ew,
                                        onChange: e2,
                                        makeURL: () => ew,
                                        maxFileSizeBytes: q.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                                        onFileSizeError: Y.showFileSizeErrorModal,
                                        onOpenImageSelectModal: () => (0, Y.handleOpenSelectImageModal)(X.UploadTypes.AVATAR, null == eL ? void 0 : eL.guildId, eA, void 0)
                                    }), null != ek && (0, t.jsx)("img", {
                                        className: $.avatarDecoration,
                                        src: ek,
                                        alt: " ",
                                        "aria-hidden": !0
                                    }), e3()]
                                });
                            return e ? (0, t.jsx)(d.Clickable, {
                                onClickCapture: e => {
                                    e.stopPropagation(), null == en || en({
                                        object: K.AnalyticsObjects.AVATAR
                                    })
                                },
                                children: a
                            }) : a
                        }(), (0, t.jsx)(C.UserPopoutBadgeList, {
                            user: V,
                            guildId: null == et ? void 0 : et.id,
                            isTryItOutFlow: eA,
                            forProfileEffectModal: ej
                        }), function() {
                            let e = null == eO ? void 0 : eO.getPreviewBio(ed);
                            return (0, t.jsxs)(E.default.Inner, {
                                className: r($.body, eC),
                                children: [(0, t.jsx)(_.default, {
                                    isTryItOut: eA,
                                    user: V,
                                    nickname: null != eJ ? eJ : V.username,
                                    pronouns: null != ec ? ec : null == eO ? void 0 : eO.pronouns,
                                    usernameIcon: (() => {
                                        let e = null != eL;
                                        if (!e) return;
                                        let a = null === em;
                                        if (a) return;
                                        let l = null != eL.avatar || null != em;
                                        if (l) return (0, t.jsx)(P.default, {
                                            user: V,
                                            nickname: eJ
                                        })
                                    })()
                                }), !ej && (0, t.jsx)(M.default, {
                                    customStatusActivity: eQ
                                }), (0, t.jsx)(y.default, {}), !eE && (0, t.jsx)(b.default, {
                                    isUsingGuildBio: null == e ? void 0 : e.isUsingGuildValue,
                                    guild: et,
                                    bio: null == e ? void 0 : e.value,
                                    hidePersonalInformation: e0,
                                    lastSection: eT,
                                    lineClamp: ej ? 3 : void 0
                                }), !ey && (0, t.jsx)(R.default, {
                                    userId: V.id,
                                    guild: et,
                                    guildMember: eL
                                }), !eT && (0, t.jsx)(Z.default, {
                                    activityName: ex,
                                    activityCharacter: eS,
                                    showExampleButton: null == et && !eN
                                })]
                            })
                        }()]
                    })]
                })
            }
        }
    }
]);