n.d(t, {
    ZP: function () {
        return k;
    },
    h4: function () {
        return P;
    },
    nH: function () {
        return y;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(91192),
    d = n(442837),
    u = n(481060),
    m = n(668781),
    h = n(904245),
    f = n(724757),
    p = n(576855),
    g = n(294218),
    _ = n(703656),
    C = n(210887),
    E = n(592125),
    I = n(375954),
    x = n(496675),
    v = n(933429),
    N = n(451478),
    T = n(626135),
    S = n(585483),
    b = n(981631),
    A = n(388032),
    j = n(177387);
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
function R(e) {
    e.stopPropagation();
}
let P = (e) => {
        let { title: t, icon: n, children: r, className: l } = e;
        return (0, i.jsxs)('div', {
            className: a()(l, j.header),
            children: [
                (0, i.jsxs)('div', {
                    className: j.titleContainer,
                    children: [
                        null != n ? (0, i.jsx)(n, { color: u.tokens.colors.INTERACTIVE_NORMAL }) : null,
                        null == t
                            ? null
                            : (0, i.jsx)(u.Text, {
                                  variant: 'text-lg/semibold',
                                  color: 'interactive-active',
                                  children: t
                              })
                    ]
                }),
                r
            ]
        });
    },
    y = (e) => {
        let { msg: t, image: n } = e;
        return (0, i.jsxs)('div', {
            className: j.emptyPlaceholder,
            children: [
                (0, i.jsx)('div', {
                    className: j.image,
                    style: { backgroundImage: 'url('.concat(n, ')') }
                }),
                (0, i.jsx)('div', {
                    className: j.body,
                    children: t
                })
            ]
        });
    };
class L extends r.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, i.jsxs)(u.Clickable, {
            className: j.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, i.jsx)('div', {
                    className: a()(j.__invalid_text, { hidden: e }),
                    children: A.intl.string(A.t.k5WiPT)
                }),
                (0, i.jsx)(u.Spinner, {
                    type: u.Spinner.Type.PULSING_ELLIPSIS,
                    className: a()(j.loading, { [j.visible]: e })
                })
            ]
        });
    }
    renderCloseButton() {
        let { onCloseMessage: e, canCloseAllMessages: t, canManageMessages: n, channel: r } = this.props;
        return null != e && (t || n || (null != r && r.isPrivate()))
            ? (0, i.jsx)(u.Button, {
                  look: u.Button.Looks.BLANK,
                  size: u.Button.Sizes.NONE,
                  onClick: this.handleClickClose,
                  children: (0, i.jsx)(u.XSmallIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: j.closeIcon
                  })
              })
            : null;
    }
    render() {
        return (0, i.jsxs)('div', {
            className: j.actionButtons,
            children: [this.renderJumpButton(), this.renderCloseButton()]
        });
    }
    constructor(...e) {
        super(...e),
            Z(this, 'handleClickJump', (e) => {
                let { jumpTo: t, message: n } = this.props;
                t(n, e);
            }),
            Z(this, 'handleClickClose', (e) => {
                let { onCloseMessage: t, message: n } = this.props;
                null != t && t(n, e);
            });
    }
}
let O = d.ZP.connectStores([x.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && x.Z.can(b.Plq.MANAGE_MESSAGES, t) };
})(L);
function M(e) {
    let { analyticsName: t, items: n, hasMore: l, loading: o, loadMore: m, renderHeader: h, renderEmptyState: g, renderItem: _, getProTip: E, scrollerClassName: I, className: x, listName: Z } = e,
        P = r.useRef(null),
        y = (0, f.Z)(Z, P),
        L = (0, d.e7)([v.Z], () => v.Z.hasNotice()),
        O = (0, d.e7)([N.Z], () => N.Z.windowSize());
    r.useEffect(() => {
        T.default.track(b.rMx.OPEN_POPOUT, { type: t });
    }, [t]),
        r.useEffect(() => {
            function e() {
                var e;
                null === (e = P.current) || void 0 === e || e.scrollPageUp({ animate: !0 });
            }
            function t() {
                var e;
                null === (e = P.current) || void 0 === e || e.scrollPageDown({ animate: !0 });
            }
            return (
                S.S.subscribe(b.CkL.SCROLL_PAGE_DOWN, t),
                S.S.subscribe(b.CkL.SCROLL_PAGE_UP, e),
                () => {
                    S.S.unsubscribe(b.CkL.SCROLL_PAGE_DOWN, t), S.S.unsubscribe(b.CkL.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let M = r.useCallback(() => {
            var e;
            let t = null === (e = P.current) || void 0 === e ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight === t.scrollTop + t.offsetHeight && l && !o && (null == m || m());
        }, [l, m, o]),
        k = [],
        D = !0;
    null == n
        ? (k = [
              (0, i.jsx)(
                  'div',
                  {
                      className: a()(j.emptyPlaceholder, j.loadingPlaceholder),
                      children: (0, i.jsx)(u.Spinner, {})
                  },
                  'spinner'
              )
          ])
        : 0 === n.length
          ? k.push((0, i.jsx)(r.Fragment, { children: g(C.Z.theme) }, 'empty-state'))
          : ((D = !1),
            (k = []),
            s().each(n, (e) => {
                k.push(..._(e));
            }));
    let B = null;
    null != n &&
        n.length > 0 &&
        null != m &&
        (B = o
            ? (0, i.jsx)(
                  'div',
                  {
                      className: j.loadingMore,
                      children: (0, i.jsx)(u.Spinner, {})
                  },
                  'loading-more-after'
              )
            : l
              ? (0, i.jsx)('div', {
                    className: j.hasMore,
                    children: (0, i.jsx)(u.Button, {
                        look: u.Button.Looks.FILLED,
                        color: u.Button.Colors.PRIMARY,
                        size: u.Button.Sizes.MAX,
                        onClick: m,
                        children: A.intl.string(A.t.XBlaiI)
                    })
                })
              : (0, i.jsx)('div', {
                    className: j.scrollingFooterWrap,
                    children: g(C.Z.theme)
                }));
    let w = null == E ? void 0 : E(),
        U =
            D && null != w
                ? (0, i.jsx)('div', {
                      className: j.footer,
                      children: (0, i.jsx)(p.Z, {
                          style: {
                              width: '100%',
                              paddingTop: 10,
                              paddingBottom: 10
                          },
                          children: w
                      })
                  })
                : null,
        F = { maxHeight: O.height - 43 - 25 };
    L && (F.maxHeight -= 40);
    let G = null != m && l;
    return (0, i.jsx)('div', {
        className: a()(x, j.messagesPopoutWrap),
        style: F,
        onClick: R,
        onDoubleClick: R,
        'aria-label': e['aria-label'],
        children: (0, i.jsxs)(u.HeadingLevel, {
            component: h(),
            children: [
                (0, i.jsxs)(u.AdvancedScroller, {
                    className: a()(j.messagesPopout, I),
                    onScroll: G ? M : void 0,
                    ref: P,
                    children: [
                        (0, i.jsx)(c.bG, {
                            navigator: y,
                            children: (0, i.jsx)(c.SJ, {
                                children: (e) => {
                                    let { ref: t, ...n } = e;
                                    return (0, i.jsx)('div', {
                                        ref: t,
                                        ...n,
                                        children: k
                                    });
                                }
                            })
                        }),
                        B
                    ]
                }),
                U
            ]
        })
    });
}
function k(e) {
    let { analyticsName: t, onFetch: n, channel: l, messages: a, hasMore: o, loading: s, loadMore: c, onJump: u, canCloseAllMessages: f = !1, renderHeader: p, renderEmptyState: C, renderMessage: x, getProTip: v, scrollerClassName: N, className: T, onCloseMessage: S, listName: Z } = e,
        R = (0, d.e7)([I.Z], () => {
            let e = null != l ? I.Z.getMessages(l.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function P(e, n) {
        let { id: i, blocked: r, author: l, channel_id: a } = e;
        if (r)
            m.Z.show({
                title: A.intl.string(A.t['j7eA/v']),
                body: A.intl.formatToPlainString(A.t.dTNNgo, { name: l.username }),
                confirmText: A.intl.string(A.t.BddRzc)
            });
        else if (!R) {
            let e = E.Z.getChannel(a);
            null != e && (h.Z.trackJump(a, i, t), (0, _.uL)(b.Z5c.CHANNEL(e.getGuildId(), a, i))), null == u || u(n);
        }
    }
    r.useEffect(() => {
        n(l);
    }, [l, n]);
    let y = r.useMemo(
        () =>
            null == a
                ? void 0
                : a.map((e) => ({
                      message: e,
                      channel: l
                  })),
        [a, l]
    );
    return (0, i.jsx)(M, {
        className: T,
        scrollerClassName: N,
        items: y,
        loading: s,
        analyticsName: t,
        renderEmptyState: C,
        renderHeader: p,
        hasMore: o,
        loadMore: c,
        getProTip: v,
        renderItem: function (e) {
            let { message: t, channel: n } = e;
            if (null == t) return [];
            if (null != x) return x(t, (e) => P(t, e));
            let r = [];
            return null == n
                ? []
                : (r.push(
                      (0, i.jsxs)(
                          'div',
                          {
                              className: j.messageGroupWrapper,
                              children: [
                                  (0, i.jsx)(g.Z, {
                                      className: j.messageGroupCozy,
                                      message: t,
                                      channel: n
                                  }),
                                  (0, i.jsx)(O, {
                                      channel: l,
                                      message: t,
                                      jumping: R,
                                      canCloseAllMessages: f,
                                      jumpTo: P,
                                      onCloseMessage: S
                                  })
                              ]
                          },
                          t.id
                      )
                  ),
                  r);
        },
        listName: Z,
        'aria-label': e['aria-label']
    });
}
