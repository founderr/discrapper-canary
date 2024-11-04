n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(392711),
    s = n.n(r),
    a = n(374470),
    o = n(481060),
    c = n(239091),
    u = n(294218),
    d = n(592125),
    h = n(388032),
    m = n(595165);
function p(e, t, n) {
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
class f extends l.PureComponent {
    render() {
        let { result: e, listItemProps: t, searchOffset: n, index: l, totalResults: r } = this.props,
            a = s().find(e, (e) => e.isSearchHit);
        if (null == a) return null;
        let c = d.Z.getChannel(a.channel_id);
        if (null == c) return null;
        let p = 'search-result-'.concat(a.id);
        return (0, i.jsx)(o.FocusRing, {
            ringTarget: this.hitRef,
            ringClassName: m.__invalid_searchResultFocusRing,
            offset: 4,
            children: (0, i.jsxs)('li', {
                className: m.container,
                ...t,
                'aria-posinset': 1 + n + l,
                'aria-setsize': r,
                'aria-labelledby': p,
                children: [
                    (0, i.jsx)(o.Clickable, {
                        tabIndex: -1,
                        onClick: this.handleMessageClick,
                        innerRef: this.containerRef,
                        className: m.searchResult,
                        focusProps: { enabled: !1 },
                        children: (0, i.jsx)(
                            'div',
                            {
                                ref: this.hitRef,
                                className: m.message,
                                children: (0, i.jsx)(u.Z, {
                                    id: p,
                                    message: a,
                                    channel: c,
                                    onContextMenu: (e) => this.handleContextMenu(e, a),
                                    animateAvatar: !1,
                                    subscribeToComponentDispatch: !1,
                                    trackAnnouncementViews: !0,
                                    isSearchResult: !0
                                })
                            },
                            a.id
                        )
                    }),
                    (0, i.jsx)('div', {
                        className: m.buttonsContainer,
                        'aria-hidden': !0,
                        children: (0, i.jsx)(o.Clickable, {
                            className: m.button,
                            onClick: this.jumpTo,
                            children: h.intl.string(h.t.k5WiPT)
                        })
                    })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            p(this, 'containerRef', l.createRef()),
            p(this, 'hitRef', l.createRef()),
            p(this, 'handleContextMenu', (e, t) => {
                let l = d.Z.getChannel(t.channel_id);
                if (null != l)
                    e.stopPropagation(),
                        (0, c.jW)(e, async () => {
                            let { default: e } = await n.e('53809').then(n.bind(n, 858341));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    message: t,
                                    channel: l
                                });
                        });
            }),
            p(this, 'jumpTo', (e) => {
                null != e && (e.preventDefault(), e.stopPropagation());
                let { onJump: t, result: n } = this.props,
                    i = n.find((e) => e.isSearchHit);
                null != i && t(i);
            }),
            p(this, 'handleMessageClick', (e) => {
                if (
                    (function (e, t) {
                        var n;
                        let i = null === (n = window) || void 0 === n ? void 0 : n.getSelection();
                        if (null != i && !i.isCollapsed) return !0;
                        if (null == e || null == t) return !1;
                        for (; (0, a.k)(e) && e !== t; ) {
                            let { tagName: t } = e;
                            if ('A' === t || 'IMG' === t || 'BUTTON' === t) return !0;
                            e = e.parentNode;
                        }
                        return !1;
                    })(e.target, this.containerRef.current)
                ) {
                    e.stopPropagation();
                    return;
                }
                this.jumpTo(e);
            });
    }
}
