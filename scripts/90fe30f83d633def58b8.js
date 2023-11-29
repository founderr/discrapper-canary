(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["56096"], {
        291802: function(e, t, n) {
            var l = {
                "./2017-11-16.mp4": "720564",
                "./2019-12-17.mp4": "27510",
                "./channel-following.png": "595687",
                "./discovery.jpg": "26022",
                "./discriminator.mp4": "294795",
                "./g250k-cl.mp4": "968428",
                "./header.mp4": "243705",
                "./hypesquad-hack-week/header.png": "585113",
                "./hypesquad-hack-week/paladins-loot.png": "486667",
                "./ko-new-year.jpg": "811755",
                "./league-rp-cl.mp4": "533299",
                "./polish-week.png": "877016",
                "./special-template/desktop-cta.png": "772882",
                "./special-template/update-badge.svg": "659148",
                "./stickers-launch/2020_PMM_STICKERS_Mrkt_BlogHdr_2500x1000.png": "622690",
                "./stickers-launch/2020_PMM_STICKERS_Mrkt_DesktopHero_Left_180x220.png": "303679",
                "./stickers-launch/2020_PMM_STICKERS_Mrkt_DesktopHero_Right_180x220.png": "203661",
                "./stickers-launch/2020_PMM_STICKERS_Mrkt_Desktop_Changelog_658X220.png": "927032",
                "./stickers-launch/2020_PMM_STICKERS_Mrkt_Desktop_FooterCTA_238x220.png": "291544",
                "./stickers-launch/2020_PMM_STICKERS_Mrkt_MobileHero_375x190.png": "245490",
                "./stickers-launch/2020_PMM_STICKERS_Mrkt_Mobile_FooterCTA_343x78.png": "322717",
                "./store.jpg": "938368"
            };

            function a(e) {
                return n(s(e))
            }

            function s(e) {
                if (!n.o(l, e)) {
                    var t = Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return l[e]
            }
            a.id = '"291802"', a.keys = function() {
                return Object.keys(l)
            }, a.resolve = s, e.exports = a
        },
        720564: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ca5a948d164f6ce225e5.mp4"
        },
        27510: function(e, t, n) {
            "use strict";
            e.exports = n.p + "918d75cfaf2f93685736.mp4"
        },
        595687: function(e, t, n) {
            "use strict";
            e.exports = n.p + "04166adfcb72e52bc295.png"
        },
        26022: function(e, t, n) {
            "use strict";
            e.exports = n.p + "cbfdbaf12547f2bc088d.jpg"
        },
        294795: function(e, t, n) {
            "use strict";
            e.exports = n.p + "21b75d6e855402010caa.mp4"
        },
        968428: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6e26350a0e5a42564d84.mp4"
        },
        243705: function(e, t, n) {
            "use strict";
            e.exports = n.p + "0c76c0ebcd143998b078.mp4"
        },
        585113: function(e, t, n) {
            "use strict";
            e.exports = n.p + "768e2db24b4be4cb5ada.png"
        },
        486667: function(e, t, n) {
            "use strict";
            e.exports = n.p + "eb675889271dd2dbc33b.png"
        },
        811755: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b52d70718517aa0a80c5.jpg"
        },
        533299: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4f95bd8264236dafad87.mp4"
        },
        877016: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e5283f308298742b4d40.png"
        },
        772882: function(e, t, n) {
            "use strict";
            e.exports = n.p + "79d88077390653508caa.png"
        },
        659148: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5c1996c0fa63a89f5182.svg"
        },
        622690: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b7074384432f11736b79.png"
        },
        303679: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6485daa6cdedfe5d8396.png"
        },
        203661: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3c1c9f559e95cbdbb7c9.png"
        },
        927032: function(e, t, n) {
            "use strict";
            e.exports = n.p + "51c7fb00c7456a3c9c8b.png"
        },
        291544: function(e, t, n) {
            "use strict";
            e.exports = n.p + "92570c182c371886ade1.png"
        },
        245490: function(e, t, n) {
            "use strict";
            e.exports = n.p + "96a5f689acd225738eca.png"
        },
        322717: function(e, t, n) {
            "use strict";
            e.exports = n.p + "14f41fc98f7994dad265.png"
        },
        938368: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3a2f3db8ffc94f41ad04.jpg"
        },
        170935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("77078"),
                r = n("717811"),
                o = n("114535"),
                i = n("599110"),
                c = n("562897"),
                u = n("49111"),
                d = n("234222"),
                C = n("782340"),
                p = n("287794");
            class h extends a.PureComponent {
                componentDidMount() {
                    this.mountedAt = Date.now(), this.maxScrolledPercentage = 0, this.track(u.AnalyticEvents.CHANGE_LOG_OPENED, {}, !0)
                }
                componentWillUnmount() {
                    this.track(u.AnalyticEvents.CHANGE_LOG_CLOSED)
                }
                render() {
                    return (0, l.jsx)(c.default, {
                        ...this.props,
                        onClose: this.close,
                        onScroll: this.handleScroll,
                        track: this.track
                    })
                }
                constructor(...e) {
                    var t;
                    super(...e), t = this, this.maxScrolledPercentage = 0, this.mountedAt = 0, this.close = () => {
                        (0, s.closeModal)(d.CHANGELOG_MODAL_KEY)
                    }, this.handleScroll = e => {
                        let {
                            offsetHeight: t,
                            scrollHeight: n,
                            scrollTop: l
                        } = e.getScrollerState();
                        this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, l / (n - t)), 1)
                    }, this.track = function(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            {
                                changeLog: a
                            } = t.props,
                            {
                                date: s,
                                revision: r
                            } = a,
                            o = {
                                change_log_id: "".concat(s, ":").concat(r),
                                ...n
                            };
                        !l && (o = {
                            seconds_open: Math.round((Date.now() - t.mountedAt) / 1e3),
                            max_scrolled_percentage: 100 * parseInt(t.maxScrolledPercentage.toPrecision(4), 10),
                            ...o
                        }), i.default.track(e, o)
                    }
                }
            }

            function f(e) {
                let {
                    changelog: t,
                    loaded: n,
                    clientTooOld: i
                } = (0, o.useCurrentChangelog)();
                if (a.useEffect(() => {
                        if (n && null != t) return () => r.default.markChangelogAsSeen(t.id, t.date)
                    }, [n, t]), i) return (0, l.jsx)(s.ModalRoot, {
                    transitionState: e.transitionState,
                    children: (0, l.jsx)("div", {
                        className: p.empty,
                        children: (0, l.jsx)(s.Heading, {
                            variant: "heading-lg/medium",
                            children: C.default.Messages.CHANGE_LOG_CLIENT_OLD
                        })
                    })
                });
                if (null == t) return n ? (0, l.jsx)(s.ModalRoot, {
                    transitionState: e.transitionState,
                    children: (0, l.jsx)("div", {
                        className: p.empty,
                        children: (0, l.jsx)(s.Text, {
                            variant: "text-md/semibold",
                            children: C.default.Messages.CHANGE_LOG_FAILED_TO_LOAD
                        })
                    })
                }) : (0, l.jsx)(s.ModalRoot, {
                    transitionState: e.transitionState,
                    children: (0, l.jsx)("div", {
                        className: p.empty,
                        children: (0, l.jsx)(s.Spinner, {
                            type: s.Spinner.Type.WANDERING_CUBES
                        })
                    })
                });
                return (0, l.jsx)(s.ModalRoot, {
                    transitionState: e.transitionState,
                    children: (0, l.jsx)(h, {
                        changeLog: t
                    })
                })
            }
        },
        562897: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                r = n.n(s),
                o = n("866227"),
                i = n.n(o),
                c = n("77078"),
                u = n("15649"),
                d = n("367376"),
                C = n("933629"),
                p = n("560176"),
                h = n("633667"),
                f = n("145131"),
                g = n("762740"),
                m = n("369952"),
                x = n("15435"),
                _ = n("58608"),
                v = n("142367"),
                L = n("49111"),
                k = n("782340"),
                E = n("722097"),
                R = n("9461");
            let M = d.default.reactParserFor(v.default.getDefaultRules(E)),
                N = {};
            class S extends a.PureComponent {
                track(e, t, n) {
                    this.props.track(e, t, n)
                }
                renderFooter() {
                    return (0, l.jsxs)("div", {
                        className: E.footer,
                        children: [(0, l.jsx)(c.Anchor, {
                            "aria-label": k.default.Messages.TWITTER,
                            className: E.socialLink,
                            href: (0, u.default)(L.LocalizedLinks.TWITTER),
                            target: "blank",
                            children: (0, l.jsx)(x.default, {})
                        }), (0, l.jsx)(c.Anchor, {
                            "aria-label": k.default.Messages.FACEBOOK,
                            className: E.socialLink,
                            href: L.SOCIAL_LINKS.FACEBOOK_URL,
                            target: "blank",
                            children: (0, l.jsx)(g.default, {})
                        }), (0, l.jsx)(c.Anchor, {
                            "aria-label": k.default.Messages.INSTAGRAM,
                            className: E.socialLink,
                            href: L.SOCIAL_LINKS.INSTAGRAM_URL,
                            target: "blank",
                            children: (0, l.jsx)(m.default, {})
                        }), (0, l.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            children: k.default.Messages.FOLLOW_US_FOR_MORE_UPDATES
                        })]
                    })
                }
                renderVideo() {
                    let {
                        changeLog: e
                    } = this.props, t = e.youtube_video_id, a = e.video, s = e.image;
                    if (null != t && "" !== t) return (0, l.jsx)(p.EmbedVideo, {
                        className: r(E.video),
                        allowFullScreen: !1,
                        href: "https://youtu.be/".concat(t),
                        thumbnail: {
                            url: "https://i.ytimg.com/vi/".concat(t, "/maxresdefault.jpg"),
                            width: 451,
                            height: 254
                        },
                        video: {
                            url: "https://www.youtube.com/embed/".concat(t, "?vq=large&rel=0&controls=0&showinfo=0"),
                            width: 451,
                            height: 254
                        },
                        provider: h.SupportedEmbedIFrame.YOUTUBE,
                        maxWidth: 451,
                        maxHeight: 254,
                        renderVideoComponent: C.renderVideoComponent,
                        renderImageComponent: C.renderImageComponent,
                        renderLinkComponent: C.renderMaskedLinkComponent,
                        onPlay: () => {
                            this.track(L.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {}, !0)
                        }
                    });
                    if (null != a && "" !== a) {
                        let e = a.startsWith("https://") ? a : n("291802")("../../images/change-log/".concat(a).replace("../../images/change-log/", "./"));
                        return (0, l.jsx)(_.default, {
                            src: e,
                            poster: s,
                            width: 451,
                            height: 254,
                            loop: !0,
                            muted: !0,
                            autoPlay: !0,
                            className: E.video,
                            onPlay: () => {
                                this.track(L.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {}, !0)
                            }
                        })
                    }
                    if (null == s || "" === s) return null;
                    else {
                        let e = s.startsWith("https://") ? s : n("291802")("../../images/change-log/".concat(s).replace("../../images/change-log/", "./"));
                        return (0, l.jsx)("img", {
                            className: E.image,
                            alt: "",
                            src: e,
                            width: 451,
                            height: 254
                        })
                    }
                }
                render() {
                    let {
                        changeLog: e
                    } = this.props;
                    return (0, l.jsxs)(c.ModalRoot, {
                        transitionState: c.ModalTransitionState.ENTERED,
                        className: R.modal,
                        children: [(0, l.jsxs)(c.ModalHeader, {
                            align: f.default.Justify.BETWEEN,
                            separator: !1,
                            children: [this.renderHeader(), (0, l.jsx)(f.default.Child, {
                                grow: 0,
                                children: (0, l.jsx)(c.ModalCloseButton, {
                                    onClick: this.props.onClose
                                })
                            })]
                        }), (0, l.jsx)(c.ModalContent, {
                            className: r(R.content, E.container, {}),
                            scrollerRef: this.scrollerRef,
                            onScroll: this.handleScroll,
                            children: (0, l.jsxs)("div", {
                                tabIndex: 0,
                                role: "region",
                                "aria-label": k.default.Messages.CHANGELOG_CONTENT_LABEL,
                                children: [this.renderVideo(), M(e.body, !1, {
                                    changeLog: this,
                                    interpolations: N,
                                    onLinkClick: this.trackLinkClick
                                })]
                            })
                        }), (0, l.jsx)(c.ModalFooter, {
                            direction: f.default.Direction.HORIZONTAL,
                            children: this.renderFooter()
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.scrollerRef = a.createRef(), this.handleScroll = () => {
                        let {
                            current: e
                        } = this.scrollerRef;
                        if (null != e) {
                            var t, n;
                            null === (t = (n = this.props).onScroll) || void 0 === t || t.call(n, e)
                        }
                    }, this.trackLinkClick = e => {
                        this.props.track(L.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                            cta_type: "inline_link",
                            target: e
                        }, !1)
                    }, this.renderHeader = () => {
                        let {
                            changeLog: e
                        } = this.props;
                        return (0, l.jsxs)(f.default.Child, {
                            grow: 1,
                            shrink: 1,
                            children: [(0, l.jsx)(c.Heading, {
                                variant: "heading-lg/semibold",
                                children: k.default.Messages.WHATS_NEW
                            }), (0, l.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                className: E.date,
                                children: k.default.Messages.WHATS_NEW_DATE.format({
                                    date: null != e.date && "" !== e.date ? i(e.date).toDate() : new Date
                                })
                            })]
                        })
                    }
                }
            }
            var A = S
        },
        491589: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FacebookIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        d: "M23 12C23 5.92483 18.0751 0.999969 12 0.999969C5.92486 0.999969 1 5.92483 1 12C1 17.4904 5.02254 22.0411 10.2812 22.8663V15.1797H7.48828V12H10.2812V9.57653C10.2812 6.81966 11.9235 5.29684 14.4361 5.29684C15.6396 5.29684 16.8984 5.51169 16.8984 5.51169V8.21872H15.5114C14.1449 8.21872 13.7187 9.06664 13.7187 9.93654V12H16.7695L16.2818 15.1797H13.7187V22.8663C18.9775 22.0411 23 17.4904 23 12Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: o
                    })
                })
            }
        },
        887560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InstagramIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...i
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        d: "M17.25 8C17.9404 8 18.5 7.44036 18.5 6.75C18.5 6.05964 17.9404 5.5 17.25 5.5C16.5596 5.5 16 6.05964 16 6.75C16 7.44036 16.5596 8 17.25 8Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.85848 2.06994C6.79447 2.12014 6.06786 2.28994 5.43265 2.53954C4.77524 2.79574 4.21804 3.13954 3.66363 3.69594C3.10923 4.25235 2.76782 4.80995 2.51342 5.46835C2.26722 6.10495 2.10042 6.83215 2.05342 7.89676C2.00642 8.96136 1.99602 9.30356 2.00122 12.0192C2.00642 14.7348 2.01842 15.0752 2.07002 16.142C2.12082 17.2058 2.29002 17.9322 2.53962 18.5676C2.79622 19.225 3.13963 19.782 3.69623 20.3366C4.25284 20.8912 4.81004 21.2318 5.47005 21.4866C6.10606 21.7324 6.83347 21.9 7.89788 21.9466C8.96229 21.9932 9.30489 22.004 12.0197 21.9988C14.7345 21.9936 15.0763 21.9816 16.143 21.931C17.6954 21.8574 19.2158 21.4311 20.3368 20.3048C21.4582 19.1782 21.8789 17.6578 21.9464 16.1042C21.993 15.0368 22.004 14.696 21.9988 11.9808C21.9936 9.26556 21.9814 8.92516 21.9308 7.85876C21.8571 6.30466 21.4311 4.78658 20.305 3.66334C19.1798 2.54101 17.6566 2.12084 16.1038 2.05374C15.0393 2.00774 14.6967 1.99594 11.9809 2.00114C9.26509 2.00634 8.92509 2.01794 7.85848 2.06994ZM7.95587 4.06757L7.95273 4.06772C7.07742 4.10901 6.56983 4.24156 6.1641 4.40099L6.15888 4.40304C5.7435 4.56492 5.42601 4.76075 5.08039 5.10761C4.73463 5.45461 4.54006 5.77236 4.379 6.1892C4.221 6.59773 4.09019 7.108 4.05147 7.98497C4.00653 9.00294 3.99603 9.30863 4.00121 12.0153C4.00639 14.7216 4.01834 15.0253 4.06768 16.0454L4.06774 16.0466C4.10961 16.9233 4.24188 17.4309 4.40114 17.8363L4.40273 17.8404C4.5653 18.2569 4.76111 18.5743 5.10789 18.9198C5.45429 19.265 5.77118 19.459 6.19035 19.6208C6.59953 19.779 7.1103 19.9102 7.98535 19.9485C9.00391 19.9931 9.31064 20.004 12.0159 19.9988C14.7212 19.9936 15.0273 19.9817 16.0482 19.9333C17.329 19.8725 18.2833 19.5328 18.9193 18.8939C19.5568 18.2534 19.8927 17.298 19.9483 16.0174C19.9929 14.9955 20.004 14.6898 19.9988 11.9846C19.9936 9.27925 19.9815 8.97444 19.9331 7.95355C19.8723 6.67192 19.5332 5.7183 18.8926 5.07934C18.2549 4.44326 17.2988 4.10725 16.0174 4.05187C14.9973 4.00779 14.6894 3.99596 11.9847 4.00113C9.27761 4.00632 8.9749 4.01788 7.95587 4.06757Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: o
                    })]
                })
            }
        },
        850830: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TwitterIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        d: "M20.7477 7.51215C20.7611 7.7061 20.7611 7.90004 20.7611 8.09578C20.7611 14.0599 16.2207 20.9384 7.91851 20.9384V20.9348C5.466 20.9384 3.06444 20.2359 0.999832 18.9113C1.35645 18.9542 1.71485 18.9757 2.07414 18.9765C4.10658 18.9783 6.08092 18.2964 7.67987 17.0406C5.74844 17.004 4.05474 15.7447 3.46306 13.9062C4.13965 14.0367 4.83679 14.0099 5.50086 13.8284C3.39514 13.403 1.8802 11.5529 1.8802 9.40426C1.8802 9.3846 1.8802 9.36583 1.8802 9.34706C2.50762 9.69652 3.21013 9.89047 3.92872 9.91192C1.94544 8.58646 1.3341 5.94805 2.53176 3.88523C4.82338 6.70507 8.20452 8.41932 11.8341 8.60076C11.4704 7.03309 11.9673 5.39034 13.1399 4.28832C14.9578 2.57943 17.817 2.66702 19.5259 4.48405C20.5368 4.28474 21.5056 3.91383 22.3922 3.38829C22.0553 4.43311 21.3501 5.32062 20.4081 5.88459C21.3027 5.77913 22.1768 5.5396 23 5.17404C22.394 6.08211 21.6307 6.8731 20.7477 7.51215Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: o
                    })
                })
            }
        },
        114535: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCurrentChangelog: function() {
                    return u
                }
            });
            var l = n("884691"),
                a = n("65597"),
                s = n("717811"),
                r = n("915639"),
                o = n("34966"),
                i = n("234222");

            function c(e, t) {
                let {
                    changelog: n,
                    loadState: r,
                    defaultChangelog: c,
                    defaultLoadState: u
                } = (0, a.useStateFromStoresObject)([o.default], () => {
                    let n = null != e ? o.default.getChangelog(e, t) : null,
                        l = null != e ? o.default.getChangelog(e, "en-US") : null,
                        a = null != e && o.default.getChangelogLoadStatus(e, "en-US"),
                        s = null != e && o.default.getChangelogLoadStatus(e, t);
                    return {
                        changelog: n,
                        loadState: s,
                        defaultChangelog: l,
                        defaultLoadState: a
                    }
                }, [e, t]);
                return (l.useEffect(() => {
                    null != e && null == n && r === i.ChangelogLoadState.NOT_LOADED && s.default.fetchChangelog(e, t)
                }, [e, n, r, t]), null == e) ? {
                    id: e,
                    changelog: null,
                    loaded: !1
                } : null == n && r === i.ChangelogLoadState.LOADED_FAILURE ? {
                    id: e,
                    changelog: c,
                    loaded: u !== i.ChangelogLoadState.NOT_LOADED
                } : {
                    id: e,
                    changelog: n,
                    loaded: r !== i.ChangelogLoadState.NOT_LOADED
                }
            }

            function u() {
                let e = (0, a.default)([r.default], () => r.default.locale),
                    t = (0, a.default)([o.default], () => o.default.latestChangelogId()),
                    n = (0, a.default)([o.default], () => o.default.getConfig()),
                    l = null != n && 0 === Object.keys(n).length,
                    s = null != n && Object.keys(n).length > 0 && null == t,
                    i = (0, a.default)([o.default], () => o.default.overrideId()),
                    {
                        changelog: u,
                        loaded: d
                    } = c(t, e),
                    {
                        changelog: C,
                        loaded: p
                    } = c(i, e);
                return null == i || null == C && p ? {
                    id: t,
                    changelog: u,
                    loaded: !!l || d,
                    clientTooOld: s
                } : {
                    id: i,
                    changelog: C,
                    loaded: p,
                    clientTooOld: !1
                }
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("65597"),
                s = n("880731");

            function r(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, r = (0, a.default)([s.default], () => s.default.isEnabled({
                    confettiLocation: n
                }));
                return r ? (0, l.jsx)(l.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("884691"),
                a = n("65597"),
                s = n("526887"),
                r = n("880731");

            function o() {
                let {
                    createMultipleConfettiAt: e
                } = l.useContext(s.ConfettiCannonContext), t = (0, a.default)([r.default], () => r.default.getState()), n = l.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), o = l.useMemo(() => ({
                    fire: (l, a, s) => {
                        var r, o;
                        let i = (null == s ? void 0 : s.settings) != null ? {
                                ...t,
                                ...s.settings
                            } : t,
                            c = n(i);
                        e(l, a, c, (null !== (r = null == s ? void 0 : s.count) && void 0 !== r ? r : i.confettiCount) * (null !== (o = null == s ? void 0 : s.countMultiplier) && void 0 !== o ? o : 1), {
                            sprite: null == s ? void 0 : s.sprite
                        })
                    }
                }), [e, n, t]);
                return o
            }
        },
        762740: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("491589"),
                r = n("75196"),
                o = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        className: s,
                        foreground: o,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        className: s,
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        ...(0, r.default)(i),
                        children: (0, l.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, l.jsx)("path", {
                                className: o,
                                fill: a,
                                d: "M0,1.99406028 C0,0.892771196 0.894513756,0 1.99406028,0 L14.0059397,0 C15.1072288,0 16,0.894513756 16,1.99406028 L16,14.0059397 C16,15.1072288 15.1054862,16 14.0059397,16 L1.99406028,16 C0.892771196,16 0,15.1054862 0,14.0059397 L0,1.99406028 Z M8.23182341,16 L10.3991764,16 L10.3991764,9.93141161 L12.5663127,9.93141161 L13,7.76405862 L10.3991764,7.76405862 L10.3246195,6.3468265 C10.3246195,5.66107601 10.5049432,5.17342158 11.4698488,5.17342158 L12.974642,5.17385505 L12.974642,3.12202197 C12.7618079,3.09319618 12.3142495,3 11.4644304,3 C9.69001851,3 8.18500859,4.20353112 8.18500859,6.23043964 L8.23182341,7.76405862 L6.06425368,7.76405862 L6.06425368,9.93141161 L8.23182341,9.93141161 L8.23182341,16 Z"
                            }), (0, l.jsx)("rect", {
                                width: "16",
                                height: "16"
                            })]
                        })
                    })
                }, s.FacebookIcon, void 0, {
                    size: 16
                })
        },
        369952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("887560"),
                r = n("75196"),
                o = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        className: s,
                        foreground: o,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        className: s,
                        xmlns: "http://www.w3.org/2000/svg",
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        ...(0, r.default)(i),
                        children: (0, l.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, l.jsx)("path", {
                                className: o,
                                fill: a,
                                d: "M4.70012698,0.0531746 C3.84888888,0.092 3.2675238,0.22720635 2.7588254,0.42492063 C2.23292063,0.62926983 1.78692063,0.90273016 1.3422857,1.34733333 C0.89768254,1.79196825 0.62422222,2.23796825 0.41987302,2.76387303 C0.22215872,3.27257143 0.08695238,3.85393651 0.04812698,4.7051746 C0.00920635,5.55819048 0,5.83053968 0,8.00253968 C0,10.1745079 0.00920635,10.4468571 0.04812698,11.299873 C0.08695238,12.1511111 0.22215873,12.7324762 0.41987302,13.2411746 C0.62422222,13.7670794 0.89768254,14.2130794 1.34228572,14.6577143 C1.78692062,15.1023175 2.23292062,15.3757778 2.7588254,15.5801587 C3.2675238,15.7778413 3.8488889,15.9130476 4.70012698,15.951873 C5.55314286,15.9907937 5.82549206,16 7.99749206,16 C10.1694603,16 10.4418095,15.9907937 11.2948254,15.951873 C12.1460635,15.9130476 12.7274286,15.7778413 13.236127,15.5801587 C13.7620317,15.3757778 14.2080317,15.1023175 14.6526667,14.6577143 C15.0972698,14.2130794 15.3707302,13.7670794 15.5751111,13.2411746 C15.7727937,12.7324762 15.908,12.1511111 15.9468254,11.299873 C15.985746,10.4468571 15.9949524,10.1745079 15.9949524,8.00253968 C15.9949524,5.83053968 15.985746,5.55819048 15.9468254,4.7051746 C15.908,3.8539365 15.7727937,3.27257143 15.5751111,2.76387302 C15.3707302,2.23796825 15.0972698,1.79196825 14.6526667,1.34733332 C14.2080317,0.90273016 13.7620317,0.62926984 13.236127,0.42492064 C12.7274286,0.22720634 12.1460635,0.092 11.2948254,0.0531746 C10.4418095,0.01425397 10.1694603,0.00504762 7.99749206,0.00504762 C5.82549206,0.00504762 5.55314286,0.01425397 4.70012698,0.0531746 L4.70012698,0.0531746 Z M8.00001453,2.00504762 C9.95416635,2.00504762 10.185649,2.01251386 10.9573741,2.04772432 C11.6709381,2.08026206 12.0584565,2.19948958 12.3163471,2.29971739 C12.6579641,2.43248289 12.9017646,2.59107525 13.157854,2.84719363 C13.4139723,3.10328295 13.5725647,3.34708347 13.7053302,3.68870053 C13.805558,3.94659105 13.9247856,4.33410953 13.9573233,5.04767346 C13.9925338,5.8193986 14,6.05088127 14,8.00506213 C14,9.95921396 13.9925338,10.1906966 13.9573233,10.9624217 C13.9247856,11.6759857 13.805558,12.0635042 13.7053302,12.3213947 C13.5725647,12.6630117 13.4139723,12.9068123 13.157854,13.1629016 C12.9017646,13.41902 12.6579641,13.5776123 12.3163471,13.7103779 C12.0584565,13.8106057 11.6709381,13.9298332 10.9573741,13.9623709 C10.1857652,13.9975814 9.9543116,14.0050476 8.00001453,14.0050476 C6.04568839,14.0050476 5.81426383,13.9975814 5.04262587,13.9623709 C4.32906195,13.9298332 3.94154347,13.8106057 3.68365294,13.7103779 C3.34203588,13.5776123 3.09823536,13.41902 2.84214604,13.1629016 C2.58605671,12.9068123 2.42743531,12.6630117 2.29466977,12.3213947 C2.19444197,12.0635042 2.07521444,11.6759857 2.04267671,10.9624217 C2.00746628,10.1906966 2,9.95921395 2,8.00506212 C2,6.05088125 2.00746625,5.81939858 2.0426767,5.04767347 C2.07521444,4.33410953 2.19444196,3.94659104 2.29466977,3.68870052 C2.42743531,3.34708346 2.58602767,3.10328294 2.84214604,2.84719362 C3.09823536,2.59107524 3.34203588,2.43248288 3.68365294,2.29971735 C3.94154346,2.19948953 4.32906194,2.08026201 5.04262587,2.04772428 C5.81435097,2.01251381 6.04583365,2.00504758 8.00001453,2.00504758 L8.00001453,2.00504762 Z"
                            }), (0, l.jsx)("path", {
                                className: o,
                                fill: a,
                                d: "M8.0000119,10 C6.89542535,10 6,9.10457466 6,8.0000119 C6,6.89542535 6.89542534,6 8.0000119,6 C9.10457467,6 10,6.89542534 10,8.0000119 C10,9.10457467 9.10457466,10 8.0000119,10 L8.0000119,10 Z M8.00001546,4 C5.7908468,4 4,5.7908468 4,8.00001546 C4,10.2091532 5.7908468,12 8.00001546,12 C10.2091532,12 12,10.2091532 12,8.00001546 C12,5.7908468 10.2091532,4 8.00001546,4 L8.00001546,4 Z M13,4.00001654 C13,4.55230644 12.5522734,5 11.9999835,5 C11.4477266,5 11,4.55230645 11,4.00001654 C11,3.44772664 11.4477266,3 11.9999835,3 C12.5522734,3 13,3.44772663 13,4.00001654 L13,4.00001654 Z"
                            }), (0, l.jsx)("rect", {
                                width: "16",
                                height: "16"
                            })]
                        })
                    })
                }, s.InstagramIcon, void 0, {
                    size: 16
                })
        },
        15435: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("850830"),
                r = n("75196"),
                o = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 16,
                        color: a = "currentColor",
                        className: s,
                        foreground: o,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        className: s,
                        width: t,
                        height: n,
                        viewBox: "0 0 20 16",
                        ...(0, r.default)(i),
                        children: (0, l.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, l.jsx)("path", {
                                className: o,
                                fill: a,
                                d: "M1,14.1538462 L1.95,14.1538462 C3.73125,14.1538462 5.5125,13.5384615 6.81875,12.4307692 C5.15625,12.4307692 3.73125,11.2 3.1375,9.6 C3.375,9.6 3.6125,9.72307692 3.85,9.72307692 C4.20625,9.72307692 4.5625,9.72307692 4.91875,9.6 C3.1375,9.23076923 1.7125,7.63076923 1.7125,5.66153846 C2.1875,5.90769231 2.78125,6.15384615 3.49375,6.15384615 C2.425,5.41538462 1.83125,4.18461538 1.83125,2.70769231 C1.83125,1.96923077 2.06875,1.23076923 2.30625,0.615384615 C4.20625,3.07692308 7.05625,4.67692308 10.38125,4.8 C10.2625,4.67692308 10.2625,4.30769231 10.2625,4.06153846 C10.2625,1.84615385 12.04375,0 14.18125,0 C15.25,0 16.31875,0.492307692 17.03125,1.23076923 C17.8625,1.10769231 18.8125,0.738461538 19.525,0.246153846 C19.2875,1.23076923 18.575,1.96923077 17.8625,2.46153846 C18.575,2.46153846 19.2875,2.21538462 20,1.84615385 C19.525,2.70769231 18.8125,3.32307692 18.1,3.93846154 L18.1,4.43076923 C18.1,9.84615385 14.18125,16 6.9375,16 C4.68125,16 2.6625,15.3846154 1,14.1538462 Z"
                            }), (0, l.jsx)("rect", {
                                width: "20",
                                height: "16"
                            })]
                        })
                    })
                }, s.TwitterIcon, void 0, {
                    size: 20
                })
        },
        142367: function(e, t, n) {
            "use strict";
            let l;
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("781738");
            var a = n("132710"),
                s = n.n(a),
                r = n("290689");
            let o = s.defaultRules.lheading,
                i = s.defaultRules.heading,
                c = s.defaultRules.link,
                u = s.defaultRules.image,
                d = s.defaultRules.list,
                C = s.defaultRules.blockQuote,
                p = s.defaultRules.paragraph,
                h = /\{(.+?)}/,
                f = /^\$(\w+?)\$/;
            l = n("159661");
            let g = e => {
                    let {
                        transformUpperCase: t = !1
                    } = e;
                    return (e, n, l) => {
                        let a = h.exec(e[1]),
                            r = e[1].replace(h, "");
                        return t && (r = r.toUpperCase()), {
                            className: null != a ? a[1] : null,
                            level: "=" === e[2] ? 1 : 2,
                            content: s.parseInline(n, r, l)
                        }
                    }
                },
                m = e => ({
                    ...l.baseRules,
                    image: {
                        ...u,
                        ..."function" == typeof l.customRules.image ? l.customRules.image(e) : l.customRules.image
                    },
                    link: {
                        ...c,
                        ..."function" == typeof l.customRules.link ? l.customRules.link(e) : l.customRules.link
                    },
                    list: {
                        ...d,
                        ..."function" == typeof l.customRules.list ? l.customRules.list(e) : l.customRules.list
                    },
                    interpolation: {
                        order: r.default.order,
                        match: e => f.exec(e),
                        parse(e, t, n) {
                            let l = n.interpolations[e[1]];
                            return null == l ? {
                                type: "text",
                                content: e[0]
                            } : {
                                type: "interpolation",
                                renderer: l
                            }
                        },
                        react: e => e.renderer()
                    },
                    lheading: {
                        ...o,
                        parse: g({
                            transformUpperCase: !0
                        }),
                        ..."function" == typeof l.customRules.lheading ? l.customRules.lheading(e) : l.customRules.lheading
                    },
                    heading: {
                        ...i,
                        ..."function" == typeof l.customRules.heading ? l.customRules.heading(e) : l.customRules.heading
                    },
                    blockQuote: {
                        ...C,
                        ..."function" == typeof l.customRules.blockQuote ? l.customRules.blockQuote(e) : l.customRules.blockQuote
                    },
                    paragraph: {
                        ...p,
                        ..."function" == typeof l.customRules.paragraph ? l.customRules.paragraph(e) : l.customRules.paragraph
                    }
                }),
                x = e => ({
                    lheading: {
                        ...o,
                        parse: g({
                            transformUpperCase: !1
                        }),
                        ..."function" == typeof l.customRules.lheading ? l.customRules.lheading(e) : l.customRules.lheading
                    }
                });
            var _ = {
                getDefaultRules: e => ({
                    ...m(e)
                }),
                getSpecialRules: e => ({
                    ...m(e),
                    ...x(e)
                })
            }
        },
        159661: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                baseRules: function() {
                    return v
                },
                customRules: function() {
                    return L
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                r = n.n(s),
                o = n("132710"),
                i = n.n(o),
                c = n("77078"),
                u = n("54239"),
                d = n("79112"),
                C = n("367376"),
                p = n("393414"),
                h = n("599110"),
                f = n("49111"),
                g = n("234222");
            let m = i.defaultRules.link,
                x = {
                    section: f.AnalyticsSections.SETTINGS_CHANGELOG
                },
                _ = e => {
                    var t, n;
                    let {
                        level: l,
                        children: s,
                        className: o = null,
                        styleSheet: i = {}
                    } = e, u = (0, c.usePrivateHeadingLevel)(), d = parseInt(l, 10), C = isNaN(d) ? 1 : d;
                    return a.createElement("h".concat(u + C - 1), {
                        className: r(...(t = i, null == (n = o) ? [] : n.split(" ").map(e => t[e])))
                    }, s)
                },
                v = C.default.defaultRules,
                L = {
                    link: {
                        parse(e, t, n) {
                            let l;
                            let a = e[2],
                                s = a.startsWith("https://discordapp.com/nitro") || a.startsWith("https://discord.com/nitro"),
                                r = a.startsWith("https://discordapp.com/hypesquad") || a.startsWith("https://discord.com/hypesquad"),
                                o = a.startsWith("/shop/fullscreen?source=1");
                            return l = s || r ? e => {
                                h.default.track(f.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                                    location: x
                                }), s ? d.default.open(f.UserSettingsSections.PREMIUM) : r && d.default.open(f.UserSettingsSections.HYPESQUAD_ONLINE), n.changeLog.track(f.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    cta_type: "nitro"
                                }), (0, c.closeModal)(g.CHANGELOG_MODAL_KEY), e.preventDefault()
                            } : o ? e => {
                                (0, p.transitionTo)(a), n.changeLog.track(f.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    ...h.default.getCampaignParams(a)
                                }), (0, u.popAllLayers)(), (0, c.closeModal)(g.CHANGELOG_MODAL_KEY), e.preventDefault()
                            } : () => {
                                n && "function" == typeof n.onLinkClick && n.onLinkClick(a), n.changeLog.track(f.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    ...h.default.getCampaignParams(a)
                                })
                            }, {
                                ...m.parse(e, t, n),
                                callToAction: l
                            }
                        },
                        react(e, t, n) {
                            let a = (0, l.jsx)(c.Anchor, {
                                href: i.sanitizeUrl(e.target),
                                title: e.title,
                                onClick: e.callToAction,
                                target: "_blank",
                                className: e.callToAction ? "cta" : void 0,
                                children: t(e.content, n)
                            }, n.key);
                            return a
                        }
                    },
                    lheading: e => ({
                        react: (t, n, a) => (0, l.jsx)(_, {
                            level: t.level,
                            className: t.className,
                            styleSheet: e,
                            children: n(t.content, a)
                        }, a.key)
                    }),
                    heading: {
                        react: (e, t, n) => (0, l.jsx)(_, {
                            level: e.level,
                            children: t(e.content, n)
                        }, n.key)
                    },
                    image: {
                        react(e, t, a) {
                            let s = n("291802")("../../images/change-log/".concat(e.target).replace("../../images/change-log/", "./"));
                            return (0, l.jsx)("img", {
                                alt: e.alt,
                                src: s
                            }, a.key)
                        }
                    },
                    blockQuote: {
                        react: v.blockQuote.react
                    },
                    paragraph: {
                        react: (e, t, n) => (0, l.jsx)("p", {
                            children: t(e.content, n)
                        }, n.key)
                    }
                }
        }
    }
]);