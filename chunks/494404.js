n.d(t, {
    ZP: function () {
        return Z;
    },
    h4: function () {
        return x;
    },
    nH: function () {
        return G;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(392711),
    c = n.n(u),
    d = n(91192),
    _ = n(442837),
    E = n(481060),
    f = n(668781),
    h = n(904245),
    p = n(724757),
    m = n(951844),
    I = n(294218),
    T = n(703656),
    g = n(210887),
    S = n(592125),
    A = n(375954),
    v = n(496675),
    N = n(933429),
    O = n(451478),
    R = n(626135),
    C = n(585483),
    y = n(981631),
    L = n(689938),
    b = n(177387);
function D(e, t, n) {
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
let M = 43,
    P = 25,
    U = 40;
function w(e) {
    e.stopPropagation();
}
let x = (e) => {
        let { title: t, icon: n, children: r, className: i } = e;
        return (0, a.jsxs)('div', {
            className: l()(i, b.header),
            children: [
                (0, a.jsxs)('div', {
                    className: b.titleContainer,
                    children: [
                        null != n ? (0, a.jsx)(n, { color: E.tokens.colors.INTERACTIVE_NORMAL }) : null,
                        null == t
                            ? null
                            : (0, a.jsx)(E.Text, {
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
    G = (e) => {
        let { msg: t, image: n } = e;
        return (0, a.jsxs)('div', {
            className: b.emptyPlaceholder,
            children: [
                (0, a.jsx)('div', {
                    className: b.image,
                    style: { backgroundImage: 'url('.concat(n, ')') }
                }),
                (0, a.jsx)('div', {
                    className: b.body,
                    children: t
                })
            ]
        });
    };
class k extends o.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, a.jsxs)(E.Clickable, {
            className: b.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, a.jsx)('div', {
                    className: l()(b.__invalid_text, { hidden: e }),
                    children: L.Z.Messages.JUMP
                }),
                (0, a.jsx)(E.Spinner, {
                    type: E.Spinner.Type.PULSING_ELLIPSIS,
                    className: l()(b.loading, { [b.visible]: e })
                })
            ]
        });
    }
    renderCloseButton() {
        let { onCloseMessage: e, canCloseAllMessages: t, canManageMessages: n, channel: r } = this.props;
        return null != e && (t || n || (null != r && r.isPrivate()))
            ? (0, a.jsx)(E.Button, {
                  look: E.Button.Looks.BLANK,
                  size: E.Button.Sizes.NONE,
                  onClick: this.handleClickClose,
                  children: (0, a.jsx)(E.XSmallIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: b.closeIcon
                  })
              })
            : null;
    }
    render() {
        return (0, a.jsxs)('div', {
            className: b.actionButtons,
            children: [this.renderJumpButton(), this.renderCloseButton()]
        });
    }
    constructor(...e) {
        super(...e),
            D(this, 'handleClickJump', (e) => {
                let { jumpTo: t, message: n } = this.props;
                t(n, e);
            }),
            D(this, 'handleClickClose', (e) => {
                let { onCloseMessage: t, message: n } = this.props;
                null != t && t(n, e);
            });
    }
}
let B = _.ZP.connectStores([v.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && v.Z.can(y.Plq.MANAGE_MESSAGES, t) };
})(k);
function F(e) {
    let { analyticsName: t, items: n, hasMore: r, loading: i, loadMore: s, renderHeader: u, renderEmptyState: f, renderItem: h, getProTip: I, scrollerClassName: T, className: S, listName: A } = e,
        v = o.useRef(null),
        D = (0, p.Z)(A, v),
        x = (0, _.e7)([N.Z], () => N.Z.hasNotice()),
        G = (0, _.e7)([O.Z], () => O.Z.windowSize());
    o.useEffect(() => {
        R.default.track(y.rMx.OPEN_POPOUT, { type: t });
    }, [t]),
        o.useEffect(() => {
            function e() {
                var e;
                null === (e = v.current) || void 0 === e || e.scrollPageUp({ animate: !0 });
            }
            function t() {
                var e;
                null === (e = v.current) || void 0 === e || e.scrollPageDown({ animate: !0 });
            }
            return (
                C.S.subscribe(y.CkL.SCROLL_PAGE_DOWN, t),
                C.S.subscribe(y.CkL.SCROLL_PAGE_UP, e),
                () => {
                    C.S.unsubscribe(y.CkL.SCROLL_PAGE_DOWN, t), C.S.unsubscribe(y.CkL.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let k = o.useCallback(() => {
            var e;
            let t = null === (e = v.current) || void 0 === e ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight === t.scrollTop + t.offsetHeight && r && !i && (null == s || s());
        }, [r, s, i]),
        B = [],
        F = !0;
    null == n
        ? (B = [
              (0, a.jsx)(
                  'div',
                  {
                      className: l()(b.emptyPlaceholder, b.loadingPlaceholder),
                      children: (0, a.jsx)(E.Spinner, {})
                  },
                  'spinner'
              )
          ])
        : 0 === n.length
          ? B.push((0, a.jsx)(o.Fragment, { children: f(g.Z.theme) }, 'empty-state'))
          : ((F = !1),
            (B = []),
            c().each(n, (e) => {
                B.push(...h(e));
            }));
    let Z = null;
    null != n &&
        n.length > 0 &&
        null != s &&
        (Z = i
            ? (0, a.jsx)(
                  'div',
                  {
                      className: b.loadingMore,
                      children: (0, a.jsx)(E.Spinner, {})
                  },
                  'loading-more-after'
              )
            : r
              ? (0, a.jsx)('div', {
                    className: b.hasMore,
                    children: (0, a.jsx)(E.Button, {
                        look: E.Button.Looks.FILLED,
                        color: E.Button.Colors.PRIMARY,
                        size: E.Button.Sizes.MAX,
                        onClick: s,
                        children: L.Z.Messages.LOAD_MORE_MESSAGES
                    })
                })
              : (0, a.jsx)('div', {
                    className: b.scrollingFooterWrap,
                    children: f(g.Z.theme)
                }));
    let V = null == I ? void 0 : I(),
        H =
            F && null != V
                ? (0, a.jsx)('div', {
                      className: b.footer,
                      children: (0, a.jsx)(m.Z, {
                          style: {
                              width: '100%',
                              paddingTop: 10,
                              paddingBottom: 10
                          },
                          children: V
                      })
                  })
                : null,
        Y = { maxHeight: G.height - M - P };
    x && (Y.maxHeight -= U);
    let j = null != s && r;
    return (0, a.jsx)('div', {
        className: l()(S, b.messagesPopoutWrap),
        style: Y,
        onClick: w,
        onDoubleClick: w,
        'aria-label': e['aria-label'],
        children: (0, a.jsxs)(E.HeadingLevel, {
            component: u(),
            children: [
                (0, a.jsxs)(E.AdvancedScroller, {
                    className: l()(b.messagesPopout, T),
                    onScroll: j ? k : void 0,
                    ref: v,
                    children: [
                        (0, a.jsx)(d.bG, {
                            navigator: D,
                            children: (0, a.jsx)(d.SJ, {
                                children: (e) => {
                                    let { ref: t, ...n } = e;
                                    return (0, a.jsx)('div', {
                                        ref: t,
                                        ...n,
                                        children: B
                                    });
                                }
                            })
                        }),
                        Z
                    ]
                }),
                H
            ]
        })
    });
}
function Z(e) {
    let { analyticsName: t, onFetch: n, channel: r, messages: i, hasMore: s, loading: l, loadMore: u, onJump: c, canCloseAllMessages: d = !1, renderHeader: E, renderEmptyState: p, renderMessage: m, getProTip: g, scrollerClassName: v, className: N, onCloseMessage: O, listName: R } = e,
        C = (0, _.e7)([A.Z], () => {
            let e = null != r ? A.Z.getMessages(r.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function D(e, n) {
        let { id: r, blocked: i, author: a, channel_id: o } = e;
        if (i)
            f.Z.show({
                title: L.Z.Messages.UNBLOCK_TO_JUMP_TITLE,
                body: L.Z.Messages.UNBLOCK_TO_JUMP_BODY.format({ name: a.username }),
                confirmText: L.Z.Messages.OKAY
            });
        else if (!C) {
            let e = S.Z.getChannel(o);
            null != e && (h.Z.trackJump(o, r, t), (0, T.uL)(y.Z5c.CHANNEL(e.getGuildId(), o, r))), null == c || c(n);
        }
    }
    function M(e) {
        let { message: t, channel: n } = e;
        if (null == t) return [];
        if (null != m) return m(t, (e) => D(t, e));
        let i = [];
        return null == n
            ? []
            : (i.push(
                  (0, a.jsxs)(
                      'div',
                      {
                          className: b.messageGroupWrapper,
                          children: [
                              (0, a.jsx)(I.Z, {
                                  className: b.messageGroupCozy,
                                  message: t,
                                  channel: n
                              }),
                              (0, a.jsx)(B, {
                                  channel: r,
                                  message: t,
                                  jumping: C,
                                  canCloseAllMessages: d,
                                  jumpTo: D,
                                  onCloseMessage: O
                              })
                          ]
                      },
                      t.id
                  )
              ),
              i);
    }
    o.useEffect(() => {
        n(r);
    }, [r, n]);
    let P = o.useMemo(
        () =>
            null == i
                ? void 0
                : i.map((e) => ({
                      message: e,
                      channel: r
                  })),
        [i, r]
    );
    return (0, a.jsx)(F, {
        className: N,
        scrollerClassName: v,
        items: P,
        loading: l,
        analyticsName: t,
        renderEmptyState: p,
        renderHeader: E,
        hasMore: s,
        loadMore: u,
        getProTip: g,
        renderItem: M,
        listName: R,
        'aria-label': e['aria-label']
    });
}
