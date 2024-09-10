n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(91192),
    o = n(286379),
    c = n(442837),
    d = n(704215),
    u = n(481060),
    _ = n(150063),
    E = n(230711),
    h = n(112724),
    m = n(183126),
    I = n(607070),
    g = n(209613),
    p = n(325708),
    T = n(320149),
    S = n(82295),
    C = n(252618),
    f = n(605236),
    N = n(243778),
    A = n(984370),
    v = n(797614),
    L = n(359110),
    Z = n(6025),
    R = n(897473),
    O = n(108427),
    x = n(970731),
    b = n(210887),
    P = n(433355),
    M = n(592125),
    D = n(819640),
    y = n(626135),
    j = n(647090),
    U = n(385956),
    G = n(610697),
    w = n(26373),
    k = n(486622),
    B = n(922409),
    H = n(899740),
    V = n(177033),
    F = n(355350),
    Y = n(307947),
    W = n(96479),
    z = n(480874),
    K = n(687683),
    q = n(981631),
    Q = n(921944),
    X = n(526761),
    J = n(689938),
    $ = n(23947),
    ee = n(625032);
function et() {
    let e = a.useRef(null),
        t = (0, H.q)(),
        n = (0, V.Z)(),
        s = (0, w.K)(),
        c = (0, m.N)(),
        d = a.useCallback(() => {
            (0, u.showToast)((0, u.createToast)(J.Z.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, u.ToastType.FAILURE));
        }, []),
        { rejectAll: _ } = (0, k.m)({ onError: d }),
        E = (0, g.Z)('message-requests-list'),
        { channelId: h } = (0, B._)(),
        I = a.useCallback(() => {
            _(n.map((e) => e.channel.id));
        }, [n, _]),
        p = a.useCallback(
            (e) => {
                var t, a;
                let { row: l } = e,
                    o = n[l],
                    c = null === (a = n[l + 1]) || void 0 === a ? void 0 : null === (t = a.channel) || void 0 === t ? void 0 : t.id,
                    d = o.channel.id;
                return (0, i.jsx)(
                    W.Z,
                    {
                        index: l,
                        className: r()({
                            [$.selected]: null != h && h === d,
                            [$.siblingSelected]: null != h && h === c
                        }),
                        channel: o.channel,
                        user: o.user,
                        hasSingleMessageRequest: s
                    },
                    d
                );
            },
            [s, n, h]
        ),
        T = a.useCallback(
            () =>
                (0, i.jsxs)(
                    S.Z,
                    {
                        className: $.sectionTitle,
                        children: [
                            t > 0 ? J.Z.Messages.MESSAGE_REQUESTS_PAGE_TITLE_WITH_COUNT.format({ count: t }) : J.Z.Messages.MESSAGE_REQUESTS_PAGE_TITLE,
                            c && t > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(u.Text, {
                                              className: $.titleDivider,
                                              variant: 'eyebrow',
                                              color: 'header-secondary',
                                              tag: 'span',
                                              children: '\u2022'
                                          }),
                                          (0, i.jsx)(u.Button, {
                                              onClick: I,
                                              look: u.ButtonLooks.LINK,
                                              color: u.ButtonColors.LINK,
                                              size: u.ButtonSizes.SMALL,
                                              className: $.clearAllButton,
                                              'aria-label': J.Z.Messages.MESSAGE_REQUESTS_CLEAR_ALL,
                                              children: J.Z.Messages.MESSAGE_REQUESTS_CLEAR_ALL
                                          })
                                      ]
                                  })
                                : null
                        ]
                    },
                    'title'
                ),
            [t, I, c]
        );
    return (n.length !== t && v.Z.increment({ name: o.V.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === n.length)
        ? (0, i.jsx)(Y.Z, { section: K.pS.REQUESTS })
        : (0, i.jsx)(l.bG, {
              navigator: E,
              children: (0, i.jsx)(l.SJ, {
                  children: (t) => {
                      let { ref: a, role: s, ...r } = t;
                      return (0, i.jsx)(
                          u.List,
                          {
                              className: $.list,
                              innerRole: s,
                              innerAriaLabel: J.Z.Messages.MESSAGE_REQUESTS,
                              ref: (t) => {
                                  var n;
                                  (e.current = t), (a.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: K.oi,
                              rowHeight: K.WN,
                              renderSection: T,
                              renderRow: p,
                              sections: [n.length],
                              chunkSize: 30,
                              fade: !0,
                              ...r
                          },
                          'message-requests-list'
                      );
                  }
              })
          });
}
function en(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        a = (0, c.e7)([P.ZP], () => P.ZP.getSidebarState(P.uZ)),
        s = (0, c.e7)([M.Z], () => M.Z.getChannel(null == a ? void 0 : a.channelId));
    if (null == a || a.type !== R.tI.VIEW_MESSAGE_REQUEST || null == s || !s.isPrivate()) return null;
    let r = t - q.R7I;
    return (0, i.jsx)(p.Z, {
        sidebarType: p.y.MessageRequestSidebar,
        maxWidth: r,
        onWidthChange: n,
        children: (0, i.jsx)(T.Z, {
            channel: s,
            baseChannelId: P.uZ
        })
    });
}
let ei = function (e) {
        let { markAsDismissed: t } = e;
        return (0, i.jsx)(x.ZP, {
            header: J.Z.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
            content: J.Z.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT_TEENS,
            buttonCTA: J.Z.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
            className: $.messageRequestCoachmark,
            onClick: () => t(Q.L.UNKNOWN),
            markAsDismissed: t,
            caretPosition: x.DF.TOP_CENTER,
            headerClassName: $.__invalid_header
        });
    },
    ea = (e) => {
        let t = (0, G.Z)(),
            n = () => D.Z.hasLayers() || (0, u.hasAnyModalOpen)(),
            s = (0, c.e7)([I.Z], () => I.Z.useReducedMotion);
        return (
            a.useEffect(() => {
                (0, f.kk)(d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
            }, []),
            (0, i.jsx)(N.ZP, {
                contentTypes: [d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
                children: (a) => {
                    let { visibleContent: r, markAsDismissed: l } = a;
                    if (r === d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK)
                        return (0, i.jsx)(u.Popout, {
                            renderPopout: () =>
                                t
                                    ? (0, i.jsx)(ei, { markAsDismissed: l })
                                    : (0, i.jsx)(x.ZP, {
                                          header: J.Z.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
                                          content: J.Z.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT,
                                          buttonCTA: J.Z.Messages.MESSAGE_REQUESTS_COACHMARK_CONFIRM,
                                          secondaryButtonCTA: J.Z.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
                                          className: $.messageRequestCoachmark,
                                          onClick: (e) => {
                                              e.stopPropagation(), E.Z.open(q.oAB.PRIVACY_AND_SAFETY, null, { scrollPosition: X.to.MESSAGE_REQUESTS });
                                          },
                                          markAsDismissed: l,
                                          caretPosition: x.DF.TOP_CENTER,
                                          headerClassName: $.__invalid_header
                                      }),
                            position: 'bottom',
                            align: 'center',
                            animation: s ? u.Popout.Animation.NONE : u.Popout.Animation.TRANSLATE,
                            shouldShow: !n(),
                            spacing: 16,
                            children: () => e.children
                        });
                    return e.children;
                }
            })
        );
    };
function es(e) {
    let { section: t } = e;
    return t === K.pS.SPAM ? (0, i.jsx)(z.Z, {}) : (0, i.jsx)(et, {});
}
let er = (0, h.Z)(function (e) {
    let { width: t } = e,
        n = (0, H.q)();
    a.useEffect(() => {
        _.Y(q.Z5c.MESSAGE_REQUESTS), (0, O.e)('message-requests'), y.default.track(q.rMx.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }), v.Z.increment({ name: o.V.MESSAGE_REQUEST_VIEW });
    }, []);
    let s = (0, c.e7)([b.Z], () => b.Z.theme),
        l = (0, F.w)(),
        [d, E] = a.useState(!1),
        h = (0, c.e7)([P.ZP], () => {
            let e = P.ZP.getSidebarState(P.uZ);
            return null != e && e.type === R.tI.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        m = null == h ? void 0 : h.channelId,
        I = null != h,
        g = (0, U.T)(m),
        p = (0, j.J)(m);
    a.useEffect(() => {
        null != m && !g && p && I && ((0, L.Kh)(m), Z.Z.closeChannelSidebar(P.uZ));
    }, [m, p, I, g]);
    let [T, S] = a.useState(K.pS.REQUESTS),
        f = (e) => {
            S(e);
        };
    return (
        (0, C.Tt)({ location: J.Z.Messages.MESSAGE_REQUESTS }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: r()(ee.chat, $.container, {
                        [ee.threadSidebarOpen]: I,
                        [ee.threadSidebarFloating]: I && d
                    }),
                    children: [
                        (0, i.jsx)(u.ThemeProvider, {
                            theme: s,
                            children: (e) =>
                                (0, i.jsxs)(A.Z, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, i.jsx)(A.Z.Icon, {
                                            icon: u.EnvelopeIcon,
                                            'aria-hidden': !0
                                        }),
                                        (0, i.jsx)(ea, { children: (0, i.jsx)(A.Z.Title, { children: J.Z.Messages.MESSAGE_REQUESTS }) }),
                                        (0, i.jsx)(A.Z.Divider, {}),
                                        (0, i.jsxs)(u.TabBar, {
                                            'aria-label': J.Z.Messages.MESSAGE_REQUESTS,
                                            selectedItem: T,
                                            type: 'top-pill',
                                            onItemSelect: f,
                                            className: $.__invalid_tabBar,
                                            children: [
                                                (0, i.jsx)(u.TabBar.Item, {
                                                    id: K.pS.REQUESTS,
                                                    className: $.__invalid_item,
                                                    children: J.Z.Messages.MESSAGE_REQUESTS_REQUESTS_TAB_TITLE
                                                }),
                                                (0, i.jsx)(u.TabBar.Item, {
                                                    id: K.pS.SPAM,
                                                    className: $.__invalid_item,
                                                    children: 0 === l ? J.Z.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE : J.Z.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE_WITH_COUNT.format({ count: l })
                                                })
                                            ]
                                        })
                                    ]
                                })
                        }),
                        (0, i.jsx)('div', {
                            className: ee.content,
                            children: (0, i.jsx)(es, { section: T })
                        })
                    ]
                }),
                I &&
                    (0, i.jsx)(en, {
                        pageWidth: t,
                        onSidebarResize: (e, t) => {
                            E(t);
                        }
                    })
            ]
        })
    );
});
t.Z = er;
