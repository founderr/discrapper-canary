n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(91192),
    s = n(286379),
    c = n(442837),
    d = n(704215),
    u = n(481060),
    h = n(150063),
    m = n(230711),
    p = n(112724),
    g = n(183126),
    f = n(607070),
    _ = n(209613),
    E = n(325708),
    I = n(320149),
    C = n(82295),
    v = n(252618),
    S = n(605236),
    N = n(243778),
    T = n(984370),
    b = n(797614),
    x = n(359110),
    A = n(6025),
    Z = n(897473),
    L = n(108427),
    y = n(970731),
    P = n(187819),
    O = n(210887),
    R = n(433355),
    j = n(592125),
    D = n(819640),
    M = n(626135),
    w = n(647090),
    k = n(385956),
    U = n(610697),
    G = n(26373),
    B = n(486622),
    H = n(922409),
    V = n(899740),
    F = n(177033),
    z = n(355350),
    W = n(307947),
    Y = n(96479),
    K = n(480874),
    q = n(687683),
    X = n(981631),
    Q = n(921944),
    J = n(526761),
    $ = n(388032),
    ee = n(863705),
    et = n(247627);
function en() {
    let e = r.useRef(null),
        t = (0, V.q)(),
        n = (0, F.Z)(),
        l = (0, G.K)(),
        c = (0, g.N)(),
        d = r.useCallback(() => {
            (0, u.showToast)((0, u.createToast)($.intl.string($.t.EDYbS0), u.ToastType.FAILURE));
        }, []),
        { rejectAll: h } = (0, B.m)({ onError: d }),
        m = (0, _.Z)('message-requests-list'),
        { channelId: p } = (0, H._)(),
        f = r.useCallback(() => {
            h(n.map((e) => e.channel.id));
        }, [n, h]),
        E = r.useCallback(
            (e) => {
                var t, r;
                let { row: o } = e,
                    s = n[o],
                    c = null === (r = n[o + 1]) || void 0 === r ? void 0 : null === (t = r.channel) || void 0 === t ? void 0 : t.id,
                    d = s.channel.id;
                return (0, i.jsx)(
                    Y.Z,
                    {
                        index: o,
                        className: a()({
                            [ee.selected]: null != p && p === d,
                            [ee.siblingSelected]: null != p && p === c
                        }),
                        channel: s.channel,
                        user: s.user,
                        hasSingleMessageRequest: l
                    },
                    d
                );
            },
            [l, n, p]
        ),
        I = r.useCallback(
            () =>
                (0, i.jsxs)(
                    C.Z,
                    {
                        className: ee.sectionTitle,
                        children: [
                            t > 0 ? $.intl.formatToPlainString($.t.rA4iWV, { count: t }) : $.intl.string($.t.flPU6u),
                            c && t > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(u.Text, {
                                              className: ee.titleDivider,
                                              variant: 'eyebrow',
                                              color: 'header-secondary',
                                              tag: 'span',
                                              children: '\u2022'
                                          }),
                                          (0, i.jsx)(u.Button, {
                                              onClick: f,
                                              look: u.ButtonLooks.LINK,
                                              color: u.ButtonColors.LINK,
                                              size: u.ButtonSizes.NONE,
                                              className: ee.clearAllButton,
                                              'aria-label': $.intl.string($.t.p6t7RE),
                                              children: $.intl.string($.t.p6t7RE)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    },
                    'title'
                ),
            [t, f, c]
        );
    return (n.length !== t && b.Z.increment({ name: s.V.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === n.length)
        ? (0, i.jsx)(W.Z, { section: q.pS.REQUESTS })
        : (0, i.jsx)(o.bG, {
              navigator: m,
              children: (0, i.jsx)(o.SJ, {
                  children: (t) => {
                      let { ref: r, role: l, ...a } = t;
                      return (0, i.jsx)(
                          u.List,
                          {
                              className: ee.list,
                              innerRole: l,
                              innerAriaLabel: $.intl.string($.t.e7GWjY),
                              ref: (t) => {
                                  var n;
                                  (e.current = t), (r.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: q.oi,
                              rowHeight: q.WN,
                              renderSection: I,
                              renderRow: E,
                              sections: [n.length],
                              chunkSize: 30,
                              fade: !0,
                              ...a
                          },
                          'message-requests-list'
                      );
                  }
              })
          });
}
function ei(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        r = (0, c.e7)([R.ZP], () => R.ZP.getSidebarState(R.uZ)),
        l = (0, c.e7)([j.Z], () => j.Z.getChannel(null == r ? void 0 : r.channelId));
    if (null == r || r.type !== Z.tI.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
    let a = t - X.R7I;
    return (0, i.jsx)(E.Z, {
        sidebarType: E.y.MessageRequestSidebar,
        maxWidth: a,
        onWidthChange: n,
        children: (0, i.jsx)(I.Z, {
            channel: l,
            baseChannelId: R.uZ
        })
    });
}
let er = function (e) {
        let { markAsDismissed: t } = e;
        return (0, i.jsx)(y.ZP, {
            header: $.intl.string($.t.hRT8tb),
            content: $.intl.string($.t.apPgJC),
            buttonCTA: $.intl.string($.t.LNoAQU),
            className: ee.messageRequestCoachmark,
            onClick: () => t(Q.L.UNKNOWN),
            markAsDismissed: t,
            caretPosition: y.DF.TOP_CENTER,
            headerClassName: ee.__invalid_header
        });
    },
    el = (e) => {
        let t = (0, U.Z)(),
            n = () => D.Z.hasLayers() || (0, u.hasAnyModalOpen)(),
            l = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
            a = (0, P._p)({ location: 'message-request-coachmark' });
        return (
            r.useEffect(() => {
                (0, S.kk)(d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
            }, []),
            (0, i.jsx)(N.ZP, {
                contentTypes: [d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
                children: (r) => {
                    let { visibleContent: o, markAsDismissed: s } = r;
                    if (o === d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK)
                        return (0, i.jsx)(u.Popout, {
                            renderPopout: () =>
                                t
                                    ? (0, i.jsx)(er, { markAsDismissed: s })
                                    : (0, i.jsx)(y.ZP, {
                                          header: $.intl.string($.t.hRT8tb),
                                          content: $.intl.string($.t['8JWodn']),
                                          buttonCTA: $.intl.string($.t.JN6EOD),
                                          secondaryButtonCTA: $.intl.string($.t.LNoAQU),
                                          className: ee.messageRequestCoachmark,
                                          onClick: (e) => {
                                              e.stopPropagation(), a ? m.Z.open(X.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: J.to.MESSAGE_REQUESTS_V2 }) : m.Z.open(X.oAB.PRIVACY_AND_SAFETY, null, { scrollPosition: J.to.MESSAGE_REQUESTS });
                                          },
                                          markAsDismissed: s,
                                          caretPosition: y.DF.TOP_CENTER,
                                          headerClassName: ee.__invalid_header
                                      }),
                            position: 'bottom',
                            align: 'center',
                            animation: l ? u.Popout.Animation.NONE : u.Popout.Animation.TRANSLATE,
                            shouldShow: !n(),
                            spacing: 16,
                            children: () => e.children
                        });
                    return e.children;
                }
            })
        );
    };
function ea(e) {
    let { section: t } = e;
    return t === q.pS.SPAM ? (0, i.jsx)(K.Z, {}) : (0, i.jsx)(en, {});
}
let eo = (0, p.Z)(function (e) {
    let { width: t } = e,
        n = (0, V.q)();
    r.useEffect(() => {
        h.Y(X.Z5c.MESSAGE_REQUESTS), (0, L.e)('message-requests'), M.default.track(X.rMx.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }), b.Z.increment({ name: s.V.MESSAGE_REQUEST_VIEW });
    }, []);
    let l = (0, c.e7)([O.Z], () => O.Z.theme),
        o = (0, z.w)(),
        [d, m] = r.useState(!1),
        p = (0, c.e7)([R.ZP], () => {
            let e = R.ZP.getSidebarState(R.uZ);
            return null != e && e.type === Z.tI.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        g = null == p ? void 0 : p.channelId,
        f = null != p,
        _ = (0, k.T)(g),
        E = (0, w.J)(g);
    r.useEffect(() => {
        null != g && !_ && E && f && ((0, x.Kh)(g), A.Z.closeChannelSidebar(R.uZ));
    }, [g, E, f, _]);
    let [I, C] = r.useState(q.pS.REQUESTS),
        S = (e) => {
            C(e);
        };
    return (
        (0, v.Tt)({ location: $.intl.string($.t.e7GWjY) }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: a()(et.chat, ee.container, {
                        [et.threadSidebarOpen]: f,
                        [et.threadSidebarFloating]: f && d
                    }),
                    children: [
                        (0, i.jsx)(u.ThemeProvider, {
                            theme: l,
                            children: (e) =>
                                (0, i.jsxs)(T.Z, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, i.jsx)(T.Z.Icon, {
                                            icon: u.EnvelopeIcon,
                                            'aria-hidden': !0
                                        }),
                                        (0, i.jsx)(el, { children: (0, i.jsx)(T.Z.Title, { children: $.intl.string($.t.e7GWjY) }) }),
                                        (0, i.jsx)(T.Z.Divider, {}),
                                        (0, i.jsxs)(u.TabBar, {
                                            'aria-label': $.intl.string($.t.e7GWjY),
                                            selectedItem: I,
                                            type: 'top-pill',
                                            onItemSelect: S,
                                            className: ee.__invalid_tabBar,
                                            children: [
                                                (0, i.jsx)(u.TabBar.Item, {
                                                    id: q.pS.REQUESTS,
                                                    className: ee.__invalid_item,
                                                    children: $.intl.string($.t['7RFcXV'])
                                                }),
                                                (0, i.jsx)(u.TabBar.Item, {
                                                    id: q.pS.SPAM,
                                                    className: ee.__invalid_item,
                                                    children: 0 === o ? $.intl.string($.t.ulKXHh) : $.intl.formatToPlainString($.t['5jtrlZ'], { count: o })
                                                })
                                            ]
                                        })
                                    ]
                                })
                        }),
                        (0, i.jsx)('div', {
                            className: et.content,
                            children: (0, i.jsx)(ea, { section: I })
                        })
                    ]
                }),
                f &&
                    (0, i.jsx)(ei, {
                        pageWidth: t,
                        onSidebarResize: (e, t) => {
                            m(t);
                        }
                    })
            ]
        })
    );
});
t.Z = eo;
