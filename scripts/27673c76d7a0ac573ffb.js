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
                f = l("49111"),
                m = l("782340"),
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
                        iconClassName: E,
                        iconWrapperClassName: T,
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
                                className: r(v.imageUploaderIcon, v.imageUploaderIconDisabled, E),
                                children: j
                            })]
                        })
                    });
                    null != s ? n = (0, t.jsx)(u.Anchor, {
                        className: v.removeButton,
                        onClick: this.handleRemove,
                        children: m.default.Messages.REMOVE
                    }) : !y && (n = (0, t.jsx)("small", {
                        className: v.sizeInfo,
                        children: m.default.Messages.MINIMUM_SIZE.format({
                            size: f.AVATAR_SIZE
                        })
                    }));
                    let k = null !== (e = null != _ ? _ : o) && void 0 !== e ? e : m.default.Messages.CHANGE_AVATAR;
                    return (0, t.jsxs)("div", {
                        className: r(v.imageUploader, U),
                        children: [(0, t.jsx)(u.FocusRing, {
                            within: !0,
                            children: (0, t.jsxs)("div", {
                                className: S ? r(v.imageUploaderIconWrapper, T) : void 0,
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
                                    className: E,
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
                u = l("907002"),
                d = l("77078"),
                c = l("206230"),
                f = l("777003"),
                m = l("782340"),
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
                }, []), (0, n.jsxs)(f.default, {
                    lastSection: !0,
                    "aria-hidden": !0,
                    children: [(0, n.jsx)(d.Heading, {
                        className: v.fakeActivityTitle,
                        variant: "eyebrow",
                        children: m.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_TITLE
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
                                children: null != a ? a : m.default.Messages.USER_SETTINGS_USER_PROFILE
                            }), (0, n.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: m.default.Messages.PROFILE_CUSTOMIZATION_ACTIVITY_TIME.format({
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
                        children: m.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON
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
                f = l("875212"),
                m = l("841098"),
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
                E = l("878569"),
                T = l("430312"),
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
                el = (0, E.buildGetPremiumUserBannerStyles)({
                    premiumUserWithBanner: $.avatarUploaderPremium,
                    premiumUserWithoutBanner: $.avatarUploaderPremiumNoBanner,
                    default: $.avatarUploaderNormal
                });

            function et(e) {
                var a, n, E;
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
                    pendingAvatar: ef,
                    pendingAvatarDecoration: em,
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
                    hideFakeActivity: eE = !1,
                    hideBioSection: eT = !1,
                    forProfileEffectModal: ej = !1,
                    hideMemberStatusSection: ey = !0,
                    bodyClassName: eC,
                    slideInAvatarDecoration: eP = !1,
                    useLargeBanner: eb = !1
                } = e, eM = i.useRef(null), [eR, e_] = i.useState(!1), ek = w.GifAutoPlay.getSetting(), {
                    avatarDecorationSrc: ew,
                    avatarSrc: eB,
                    eventHandlers: eO
                } = (0, k.default)({
                    user: V,
                    guildId: null == et ? void 0 : et.id,
                    avatarDecorationOverride: em,
                    avatarOverride: ef,
                    size: d.AvatarSizes.SIZE_80,
                    showPending: !0
                }), ez = (0, U.default)(V.id, null == et ? void 0 : et.id), eF = (0, o.useStateFromStores)([v.default], () => v.default.syncProfileThemeWithUserTheme), eL = (0, m.default)(), eD = (0, o.useStateFromStores)([B.default], () => null == et ? null : B.default.getMember(et.id, V.id)), eG = void 0 === ef ? V.getAvatarURL(void 0, 80) : ef, eW = (0, p.default)(eG, (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_530).hsl(), !1), eH = null == ez ? void 0 : ez.getPreviewThemeColors(ep), eV = null !== (a = null == eH ? void 0 : eH[0]) && void 0 !== a ? a : null == ez ? void 0 : ez.primaryColor, eZ = eF ? eL : (0, A.getProfileTheme)(eV), eY = (0, I.default)(null !== (n = null != eo ? eo : eV) && void 0 !== n ? n : (0, s.hex2int)(eW)).hsl, eq = (0, o.useStateFromStores)([F.default], () => F.default.isFocused()), eK = null == ez ? void 0 : ez.getPreviewBanner(eu, ek ? eq : eR), eX = null != eK || null != eg, eJ = eb || (null == ez ? void 0 : ez.profileEffectID) != null, eQ = null !== (E = (0, Y.getPreviewNickname)(ev, null == eD ? void 0 : eD.nick)) && void 0 !== E ? E : (0, Y.getPreviewDisplayName)(eh, H.default.getName(V)), [e$, e0] = (0, o.useStateFromStoresArray)([O.default], () => [O.default.findActivity(V.id, e => e.type === K.ActivityTypes.CUSTOM_STATUS), O.default.getStatus(V.id)]), e1 = (0, d.useStatusFillColor)(e0), e2 = (0, o.useStateFromStores)([z.default], () => z.default.hidePersonalInformation), e5 = (null == ez ? void 0 : ez.canUsePremiumProfileCustomization) || ei, e8 = i.useCallback(() => {
                    var e, a;
                    null === (a = eM.current) || void 0 === a || null === (e = a.inputRef.current) || void 0 === e || e.activateUploadDialogue()
                }, []), e3 = i.useCallback((e, a) => {
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
                                l.onClose(), e8()
                            }
                        })
                    })
                }, [V, e8, er]), e6 = (e, a) => {
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

                function e4() {
                    let e = null != eZ ? (0, d.getStatusBackdropColor)(eZ) : null;
                    return (0, t.jsxs)("div", {
                        className: $.status,
                        children: [null != e && (null == ez ? void 0 : ez.canUsePremiumProfileCustomization) && (0, t.jsx)("div", {
                            className: $.statusDotBackground,
                            style: {
                                backgroundColor: e,
                                opacity: (0, d.getStatusBackdropOpacity)(e0, e)
                            }
                        }), (0, t.jsx)("svg", {
                            className: $.statusDot,
                            children: (0, t.jsx)("rect", {
                                height: "100%",
                                width: "100%",
                                fill: e1,
                                mask: "url(#".concat((0, d.getStatusMask)(e0, !1), ")")
                            })
                        })]
                    })
                }
                let e7 = "ProfileCustomizationPreview";
                (0, f.useTriggerDebuggingAA)({
                    location: e7 + " auto on",
                    autoTrackExposure: !0
                }), (0, f.useTriggerDebuggingAA)({
                    location: e7 + " auto off",
                    autoTrackExposure: !1
                });
                let {
                    analyticsLocations: e9
                } = (0, h.default)();
                i.useEffect(() => {
                    if (ek) return;
                    let e = null == ez ? void 0 : ez.getBannerURL({
                        canAnimate: !0,
                        size: 480
                    });
                    if (!G.isAnimatedImageURL(e)) return;
                    let a = new Image;
                    a.src = null != e ? e : ""
                }, [ez, ek]);
                let ae = null == et,
                    aa = null == ez ? void 0 : ez.profileEffectID;
                return (0, t.jsxs)(T.default, {
                    forceShowPremium: ei,
                    user: V,
                    guildId: null == et ? void 0 : et.id,
                    profileType: J.UserProfileTypes.POPOUT,
                    pendingThemeColors: ep,
                    pendingProfileEffectId: eg,
                    className: ej ? e5 ? $.profileEffectsModalCustomizationPreviewWithTheme : $.profileEffectsModalCustomizationPreviewWithoutTheme : e5 ? $.profileCustomizationPreviewWithTheme : $.profileCustomizationPreviewWithoutTheme,
                    children: [(0, t.jsx)(S.default, {
                        profileEffectID: void 0 !== eg ? eg : aa
                    }), (0, t.jsxs)(d.HeadingLevel, {
                        children: [(0, t.jsx)(N.default, {
                            profileType: J.UserProfileTypes.POPOUT,
                            hasBanner: eX,
                            isPremium: ei,
                            hasThemeColors: e5,
                            forProfileEffectModal: ej,
                            hasProfileEffect: eJ,
                            children: ei ? (0, t.jsxs)("div", {
                                onMouseMove: () => e_(!0),
                                onMouseLeave: () => e_(!1),
                                children: [(0, t.jsx)(x.default, {
                                    className: $.bannerUploader,
                                    showRemoveButton: !1,
                                    disabled: !ei || eU,
                                    image: eK,
                                    makeURL: () => eK,
                                    onChange: e6,
                                    imageStyle: {
                                        backgroundColor: eY
                                    },
                                    imageClassName: r(eX ? $.bannerUploaderInnerSquare : $.bannerUploaderInnerSquareEmpty),
                                    hint: Q.default.Messages.CHANGE_BANNER,
                                    onOpenImageSelectModal: () => (0, Y.handleOpenSelectImageModal)(X.UploadTypes.BANNER, null == eD ? void 0 : eD.guildId, eA, void 0),
                                    hideSize: !0,
                                    maxFileSizeBytes: q.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                                    onFileSizeError: Y.showFileSizeErrorModal
                                }), !ek && G.isAnimatedImageURL(eK) ? (0, t.jsx)(L.default, {
                                    className: $.gifTag
                                }) : null]
                            }) : (0, t.jsx)("div", {
                                className: eJ ? $.bannerUploaderInnerSquare : $.bannerNormal,
                                style: {
                                    backgroundColor: eY
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
                        }), ae ? function() {
                            let e = () => (0, Y.handleOpenSelectImageModal)(X.UploadTypes.AVATAR, null == eD ? void 0 : eD.guildId, eA),
                                a = () => (0, g.openAvatarDecorationModal)({
                                    analyticsLocations: e9,
                                    isTryItOutFlow: eA
                                });
                            return (0, t.jsxs)(d.Clickable, {
                                ...eO,
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
                                    hasBanner: eX,
                                    hasProfileEffect: eJ
                                }), {
                                    [$.defaultCursor]: eU
                                }),
                                children: [(0, t.jsx)(ea, {
                                    className: $.avatarUploaderInner,
                                    src: eB,
                                    avatarDecoration: eP ? null : ew,
                                    size: d.AvatarSizes.SIZE_80,
                                    "aria-label": V.username
                                }), eP && (0, t.jsx)(j.default, {
                                    initTranslate3d: "translate3d(-20px, -120px, 0)",
                                    children: (0, t.jsx)(ea, {
                                        src: ee,
                                        avatarDecoration: ew,
                                        size: d.AvatarSizes.SIZE_80,
                                        status: K.StatusTypes.UNKNOWN,
                                        className: $.tryingOutAvatarDecoration,
                                        "aria-hidden": !0
                                    })
                                }, ew), eU ? null : (0, t.jsx)("div", {
                                    className: $.hoverIconWrapper,
                                    children: (0, t.jsx)(D.default, {
                                        className: $.hoverIcon,
                                        color: "white"
                                    })
                                }), e4()]
                            })
                        }() : function() {
                            let e = null != eD && !ei,
                                a = (0, t.jsxs)("div", {
                                    className: el({
                                        isPremium: ei,
                                        hasBanner: eX,
                                        hasProfileEffect: eJ
                                    }),
                                    children: [(0, t.jsx)(x.default, {
                                        disabled: eU,
                                        ref: eM,
                                        showIcon: null == ew,
                                        hint: e ? Q.default.Messages.UNLOCK_GUILD_MEMBER_AVATAR : Q.default.Messages.CHANGE_AVATAR,
                                        showRemoveButton: !1,
                                        imageClassName: r(eI, $.avatarUploaderInner),
                                        image: eB,
                                        onChange: e3,
                                        makeURL: () => eB,
                                        maxFileSizeBytes: q.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                                        onFileSizeError: Y.showFileSizeErrorModal,
                                        onOpenImageSelectModal: () => (0, Y.handleOpenSelectImageModal)(X.UploadTypes.AVATAR, null == eD ? void 0 : eD.guildId, eA, void 0)
                                    }), null != ew && (0, t.jsx)("img", {
                                        className: $.avatarDecoration,
                                        src: ew,
                                        alt: " ",
                                        "aria-hidden": !0
                                    }), e4()]
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
                            let e = null == ez ? void 0 : ez.getPreviewBio(ed);
                            return (0, t.jsxs)(T.default.Inner, {
                                className: r($.body, eC),
                                children: [(0, t.jsx)(_.default, {
                                    isTryItOut: eA,
                                    user: V,
                                    nickname: null != eQ ? eQ : V.username,
                                    pronouns: null != ec ? ec : null == ez ? void 0 : ez.pronouns,
                                    usernameIcon: (() => {
                                        let e = null != eD;
                                        if (!e) return;
                                        let a = null === ef;
                                        if (a) return;
                                        let l = null != eD.avatar || null != ef;
                                        if (l) return (0, t.jsx)(P.default, {
                                            user: V,
                                            nickname: eQ
                                        })
                                    })()
                                }), !ej && (0, t.jsx)(M.default, {
                                    customStatusActivity: e$
                                }), (0, t.jsx)(y.default, {}), !eT && (0, t.jsx)(b.default, {
                                    isUsingGuildBio: null == e ? void 0 : e.isUsingGuildValue,
                                    guild: et,
                                    bio: null == e ? void 0 : e.value,
                                    hidePersonalInformation: e2,
                                    lastSection: eE,
                                    lineClamp: ej ? 3 : void 0
                                }), !ey && (0, t.jsx)(R.default, {
                                    userId: V.id,
                                    guild: et,
                                    guildMember: eD
                                }), !eE && (0, t.jsx)(Z.default, {
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