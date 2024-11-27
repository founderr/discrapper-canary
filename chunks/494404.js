n.d(t, {
    ZP: function () {
        return k;
    },
    h4: function () {
        return P;
    },
    nH: function () {
        return L;
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
    u = n(442837),
    d = n(481060),
    m = n(668781),
    h = n(904245),
    f = n(724757),
    p = n(576855),
    g = n(294218),
    _ = n(703656),
    E = n(210887),
    C = n(592125),
    I = n(375954),
    x = n(496675),
    N = n(933429),
    v = n(451478),
    T = n(626135),
    S = n(585483),
    A = n(981631),
    b = n(388032),
    j = n(312422);
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
                        null != n ? (0, i.jsx)(n, { color: d.tokens.colors.INTERACTIVE_NORMAL }) : null,
                        null == t
                            ? null
                            : (0, i.jsx)(d.Text, {
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
    L = (e) => {
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
class y extends r.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, i.jsxs)(d.Clickable, {
            className: j.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, i.jsx)('div', {
                    className: a()(j.__invalid_text, { hidden: e }),
                    children: b.intl.string(b.t.k5WiPT)
                }),
                (0, i.jsx)(d.Spinner, {
                    type: d.Spinner.Type.PULSING_ELLIPSIS,
                    className: a()(j.loading, { [j.visible]: e })
                })
            ]
        });
    }
    renderCloseButton() {
        let { onCloseMessage: e, canCloseAllMessages: t, canManageMessages: n, channel: r } = this.props;
        return null != e && (t || n || (null != r && r.isPrivate()))
            ? (0, i.jsx)(d.Button, {
                  look: d.Button.Looks.BLANK,
                  size: d.Button.Sizes.NONE,
                  onClick: this.handleClickClose,
                  children: (0, i.jsx)(d.XSmallIcon, {
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
let O = u.ZP.connectStores([x.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && x.Z.can(A.Plq.MANAGE_MESSAGES, t) };
})(y);
function M(e) {
    let { analyticsName: t, items: n, hasMore: l, loading: o, loadMore: m, renderHeader: h, renderEmptyState: g, renderItem: _, getProTip: C, scrollerClassName: I, className: x, listName: Z } = e,
        P = r.useRef(null),
        L = (0, f.Z)(Z, P),
        y = (0, u.e7)([N.Z], () => N.Z.hasNotice()),
        O = (0, u.e7)([v.Z], () => v.Z.windowSize());
    r.useEffect(() => {
        T.default.track(A.rMx.OPEN_POPOUT, { type: t });
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
                S.S.subscribe(A.CkL.SCROLL_PAGE_DOWN, t),
                S.S.subscribe(A.CkL.SCROLL_PAGE_UP, e),
                () => {
                    S.S.unsubscribe(A.CkL.SCROLL_PAGE_DOWN, t), S.S.unsubscribe(A.CkL.SCROLL_PAGE_UP, e);
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
                      children: (0, i.jsx)(d.Spinner, {})
                  },
                  'spinner'
              )
          ])
        : 0 === n.length
          ? k.push((0, i.jsx)(r.Fragment, { children: g(E.Z.theme) }, 'empty-state'))
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
                      children: (0, i.jsx)(d.Spinner, {})
                  },
                  'loading-more-after'
              )
            : l
              ? (0, i.jsx)('div', {
                    className: j.hasMore,
                    children: (0, i.jsx)(d.Button, {
                        look: d.Button.Looks.FILLED,
                        color: d.Button.Colors.PRIMARY,
                        size: d.Button.Sizes.MAX,
                        onClick: m,
                        children: b.intl.string(b.t.XBlaiI)
                    })
                })
              : (0, i.jsx)('div', {
                    className: j.scrollingFooterWrap,
                    children: g(E.Z.theme)
                }));
    let U = null == C ? void 0 : C(),
        w =
            D && null != U
                ? (0, i.jsx)('div', {
                      className: j.footer,
                      children: (0, i.jsx)(p.Z, {
                          style: {
                              width: '100%',
                              paddingTop: 10,
                              paddingBottom: 10
                          },
                          children: U
                      })
                  })
                : null,
        F = { maxHeight: O.height - 43 - 25 };
    y && (F.maxHeight -= 40);
    let G = null != m && l;
    return (0, i.jsx)('div', {
        className: a()(x, j.messagesPopoutWrap),
        style: F,
        onClick: R,
        onDoubleClick: R,
        'aria-label': e['aria-label'],
        children: (0, i.jsxs)(d.HeadingLevel, {
            component: h(),
            children: [
                (0, i.jsxs)(d.AdvancedScroller, {
                    className: a()(j.messagesPopout, I),
                    onScroll: G ? M : void 0,
                    ref: P,
                    children: [
                        (0, i.jsx)(c.bG, {
                            navigator: L,
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
                w
            ]
        })
    });
}
function k(e) {
    let { analyticsName: t, onFetch: n, channel: l, messages: a, hasMore: o, loading: s, loadMore: c, onJump: d, canCloseAllMessages: f = !1, renderHeader: p, renderEmptyState: E, renderMessage: x, getProTip: N, scrollerClassName: v, className: T, onCloseMessage: S, listName: Z } = e,
        R = (0, u.e7)([I.Z], () => {
            let e = null != l ? I.Z.getMessages(l.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function P(e, n) {
        let { id: i, blocked: r, ignored: l, author: a, channel_id: o } = e;
        if (r)
            m.Z.show({
                title: b.intl.string(b.t['j7eA/v']),
                body: b.intl.formatToPlainString(b.t.dTNNgo, { name: a.username }),
                confirmText: b.intl.string(b.t.BddRzc)
            });
        else if (l)
            m.Z.show({
                title: b.intl.string(b.t.XyWoKS),
                body: b.intl.formatToPlainString(b.t['8t8doK'], { name: a.username }),
                confirmText: b.intl.string(b.t.BddRzc)
            });
        else if (!R) {
            let e = C.Z.getChannel(o);
            null != e && (h.Z.trackJump(o, i, t), (0, _.uL)(A.Z5c.CHANNEL(e.getGuildId(), o, i))), null == d || d(n);
        }
    }
    r.useEffect(() => {
        n(l);
    }, [l, n]);
    let L = r.useMemo(
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
        scrollerClassName: v,
        items: L,
        loading: s,
        analyticsName: t,
        renderEmptyState: E,
        renderHeader: p,
        hasMore: o,
        loadMore: c,
        getProTip: N,
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
