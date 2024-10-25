n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    a = n(392711),
    l = n.n(a),
    r = n(374470),
    o = n(481060),
    c = n(239091),
    u = n(294218),
    d = n(592125),
    h = n(689938),
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
class _ extends s.PureComponent {
    render() {
        let { result: e, listItemProps: t, searchOffset: n, index: s, totalResults: a } = this.props,
            r = l().find(e, (e) => e.isSearchHit);
        if (null == r) return null;
        let c = d.Z.getChannel(r.channel_id);
        if (null == c) return null;
        let p = 'search-result-'.concat(r.id);
        return (0, i.jsx)(o.FocusRing, {
            ringTarget: this.hitRef,
            ringClassName: m.__invalid_searchResultFocusRing,
            offset: 4,
            children: (0, i.jsxs)('li', {
                className: m.container,
                ...t,
                'aria-posinset': 1 + n + s,
                'aria-setsize': a,
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
                                    message: r,
                                    channel: c,
                                    onContextMenu: (e) => this.handleContextMenu(e, r),
                                    animateAvatar: !1,
                                    subscribeToComponentDispatch: !1,
                                    trackAnnouncementViews: !0,
                                    isSearchResult: !0
                                })
                            },
                            r.id
                        )
                    }),
                    (0, i.jsx)('div', {
                        className: m.buttonsContainer,
                        'aria-hidden': !0,
                        children: (0, i.jsx)(o.Clickable, {
                            className: m.button,
                            onClick: this.jumpTo,
                            children: h.Z.Messages.JUMP
                        })
                    })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            p(this, 'containerRef', s.createRef()),
            p(this, 'hitRef', s.createRef()),
            p(this, 'handleContextMenu', (e, t) => {
                let s = d.Z.getChannel(t.channel_id);
                if (null != s)
                    e.stopPropagation(),
                        (0, c.jW)(e, async () => {
                            let { default: e } = await n.e('53809').then(n.bind(n, 858341));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    message: t,
                                    channel: s
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
                        for (; (0, r.k)(e) && e !== t; ) {
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
