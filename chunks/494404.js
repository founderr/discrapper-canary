n.d(t, {
    ZP: function () {
        return U;
    },
    h4: function () {
        return Z;
    },
    nH: function () {
        return b;
    }
}),
    n(47120),
    n(653041);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(91192),
    u = n(442837),
    d = n(481060),
    _ = n(668781),
    E = n(904245),
    I = n(724757),
    m = n(951844),
    T = n(294218),
    f = n(703656),
    h = n(210887),
    N = n(592125),
    p = n(375954),
    C = n(496675),
    g = n(933429),
    S = n(451478),
    A = n(626135),
    x = n(585483),
    R = n(981631),
    v = n(689938),
    O = n(177387);
function M(e, t, n) {
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
function L(e) {
    e.stopPropagation();
}
let Z = (e) => {
        let { title: t, icon: n, children: a, className: s } = e;
        return (0, i.jsxs)('div', {
            className: r()(s, O.header),
            children: [
                (0, i.jsxs)('div', {
                    className: O.titleContainer,
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
                a
            ]
        });
    },
    b = (e) => {
        let { msg: t, image: n } = e;
        return (0, i.jsxs)('div', {
            className: O.emptyPlaceholder,
            children: [
                (0, i.jsx)('div', {
                    className: O.image,
                    style: { backgroundImage: 'url('.concat(n, ')') }
                }),
                (0, i.jsx)('div', {
                    className: O.body,
                    children: t
                })
            ]
        });
    };
class P extends a.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, i.jsxs)(d.Clickable, {
            className: O.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, i.jsx)('div', {
                    className: r()(O.__invalid_text, { hidden: e }),
                    children: v.Z.Messages.JUMP
                }),
                (0, i.jsx)(d.Spinner, {
                    type: d.Spinner.Type.PULSING_ELLIPSIS,
                    className: r()(O.loading, { [O.visible]: e })
                })
            ]
        });
    }
    renderCloseButton() {
        let { onCloseMessage: e, canCloseAllMessages: t, canManageMessages: n, channel: a } = this.props;
        return null != e && (t || n || (null != a && a.isPrivate()))
            ? (0, i.jsx)(d.Button, {
                  look: d.Button.Looks.BLANK,
                  size: d.Button.Sizes.NONE,
                  onClick: this.handleClickClose,
                  children: (0, i.jsx)(d.XSmallIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: O.closeIcon
                  })
              })
            : null;
    }
    render() {
        return (0, i.jsxs)('div', {
            className: O.actionButtons,
            children: [this.renderJumpButton(), this.renderCloseButton()]
        });
    }
    constructor(...e) {
        super(...e),
            M(this, 'handleClickJump', (e) => {
                let { jumpTo: t, message: n } = this.props;
                t(n, e);
            }),
            M(this, 'handleClickClose', (e) => {
                let { onCloseMessage: t, message: n } = this.props;
                null != t && t(n, e);
            });
    }
}
let D = u.ZP.connectStores([C.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && C.Z.can(R.Plq.MANAGE_MESSAGES, t) };
})(P);
function j(e) {
    let { analyticsName: t, items: n, hasMore: s, loading: l, loadMore: _, renderHeader: E, renderEmptyState: T, renderItem: f, getProTip: N, scrollerClassName: p, className: C, listName: M } = e,
        Z = a.useRef(null),
        b = (0, I.Z)(M, Z),
        P = (0, u.e7)([g.Z], () => g.Z.hasNotice()),
        D = (0, u.e7)([S.Z], () => S.Z.windowSize());
    a.useEffect(() => {
        A.default.track(R.rMx.OPEN_POPOUT, { type: t });
    }, [t]),
        a.useEffect(() => {
            function e() {
                var e;
                null === (e = Z.current) || void 0 === e || e.scrollPageUp({ animate: !0 });
            }
            function t() {
                var e;
                null === (e = Z.current) || void 0 === e || e.scrollPageDown({ animate: !0 });
            }
            return (
                x.S.subscribe(R.CkL.SCROLL_PAGE_DOWN, t),
                x.S.subscribe(R.CkL.SCROLL_PAGE_UP, e),
                () => {
                    x.S.unsubscribe(R.CkL.SCROLL_PAGE_DOWN, t), x.S.unsubscribe(R.CkL.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let j = a.useCallback(() => {
            var e;
            let t = null === (e = Z.current) || void 0 === e ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight === t.scrollTop + t.offsetHeight && s && !l && (null == _ || _());
        }, [s, _, l]),
        U = [],
        y = !0;
    null == n
        ? (U = [
              (0, i.jsx)(
                  'div',
                  {
                      className: r()(O.emptyPlaceholder, O.loadingPlaceholder),
                      children: (0, i.jsx)(d.Spinner, {})
                  },
                  'spinner'
              )
          ])
        : 0 === n.length
          ? U.push((0, i.jsx)(a.Fragment, { children: T(h.Z.theme) }, 'empty-state'))
          : ((y = !1),
            (U = []),
            o().each(n, (e) => {
                U.push(...f(e));
            }));
    let B = null;
    null != n &&
        n.length > 0 &&
        null != _ &&
        (B = l
            ? (0, i.jsx)(
                  'div',
                  {
                      className: O.loadingMore,
                      children: (0, i.jsx)(d.Spinner, {})
                  },
                  'loading-more-after'
              )
            : s
              ? (0, i.jsx)('div', {
                    className: O.hasMore,
                    children: (0, i.jsx)(d.Button, {
                        look: d.Button.Looks.FILLED,
                        color: d.Button.Colors.PRIMARY,
                        size: d.Button.Sizes.MAX,
                        onClick: _,
                        children: v.Z.Messages.LOAD_MORE_MESSAGES
                    })
                })
              : (0, i.jsx)('div', {
                    className: O.scrollingFooterWrap,
                    children: T(h.Z.theme)
                }));
    let k = null == N ? void 0 : N(),
        G =
            y && null != k
                ? (0, i.jsx)('div', {
                      className: O.footer,
                      children: (0, i.jsx)(m.Z, {
                          style: {
                              width: '100%',
                              paddingTop: 10,
                              paddingBottom: 10
                          },
                          children: k
                      })
                  })
                : null,
        F = { maxHeight: D.height - 43 - 25 };
    P && (F.maxHeight -= 40);
    let w = null != _ && s;
    return (0, i.jsx)('div', {
        className: r()(C, O.messagesPopoutWrap),
        style: F,
        onClick: L,
        onDoubleClick: L,
        'aria-label': e['aria-label'],
        children: (0, i.jsxs)(d.HeadingLevel, {
            component: E(),
            children: [
                (0, i.jsxs)(d.AdvancedScroller, {
                    className: r()(O.messagesPopout, p),
                    onScroll: w ? j : void 0,
                    ref: Z,
                    children: [
                        (0, i.jsx)(c.bG, {
                            navigator: b,
                            children: (0, i.jsx)(c.SJ, {
                                children: (e) => {
                                    let { ref: t, ...n } = e;
                                    return (0, i.jsx)('div', {
                                        ref: t,
                                        ...n,
                                        children: U
                                    });
                                }
                            })
                        }),
                        B
                    ]
                }),
                G
            ]
        })
    });
}
function U(e) {
    let { analyticsName: t, onFetch: n, channel: s, messages: r, hasMore: l, loading: o, loadMore: c, onJump: d, canCloseAllMessages: I = !1, renderHeader: m, renderEmptyState: h, renderMessage: C, getProTip: g, scrollerClassName: S, className: A, onCloseMessage: x, listName: M } = e,
        L = (0, u.e7)([p.Z], () => {
            let e = null != s ? p.Z.getMessages(s.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function Z(e, n) {
        let { id: i, blocked: a, author: s, channel_id: r } = e;
        if (a)
            _.Z.show({
                title: v.Z.Messages.UNBLOCK_TO_JUMP_TITLE,
                body: v.Z.Messages.UNBLOCK_TO_JUMP_BODY.format({ name: s.username }),
                confirmText: v.Z.Messages.OKAY
            });
        else if (!L) {
            let e = N.Z.getChannel(r);
            null != e && (E.Z.trackJump(r, i, t), (0, f.uL)(R.Z5c.CHANNEL(e.getGuildId(), r, i))), null == d || d(n);
        }
    }
    a.useEffect(() => {
        n(s);
    }, [s, n]);
    let b = a.useMemo(
        () =>
            null == r
                ? void 0
                : r.map((e) => ({
                      message: e,
                      channel: s
                  })),
        [r, s]
    );
    return (0, i.jsx)(j, {
        className: A,
        scrollerClassName: S,
        items: b,
        loading: o,
        analyticsName: t,
        renderEmptyState: h,
        renderHeader: m,
        hasMore: l,
        loadMore: c,
        getProTip: g,
        renderItem: function (e) {
            let { message: t, channel: n } = e;
            if (null == t) return [];
            if (null != C) return C(t, (e) => Z(t, e));
            let a = [];
            return null == n
                ? []
                : (a.push(
                      (0, i.jsxs)(
                          'div',
                          {
                              className: O.messageGroupWrapper,
                              children: [
                                  (0, i.jsx)(T.Z, {
                                      className: O.messageGroupCozy,
                                      message: t,
                                      channel: n
                                  }),
                                  (0, i.jsx)(D, {
                                      channel: s,
                                      message: t,
                                      jumping: L,
                                      canCloseAllMessages: I,
                                      jumpTo: Z,
                                      onCloseMessage: x
                                  })
                              ]
                          },
                          t.id
                      )
                  ),
                  a);
        },
        listName: M,
        'aria-label': e['aria-label']
    });
}
