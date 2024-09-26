n.r(t),
    n.d(t, {
        default: function () {
            return eu;
        }
    });
var r = n(47120);
var i = n(653041);
var a = n(177593);
var o = n(411104);
var s = n(735250),
    l = n(470079),
    u = n(120356),
    c = n.n(u),
    d = n(392711),
    _ = n.n(d),
    E = n(866442),
    f = n(442837),
    h = n(780384),
    p = n(481060),
    m = n(596454),
    I = n(129861),
    T = n(700582),
    g = n(607070),
    S = n(600164),
    A = n(633302),
    v = n(712057),
    N = n(660189),
    O = n(372900),
    R = n(566006),
    C = n(620652),
    y = n(815605),
    L = n(222677),
    b = n(995774),
    D = n(665906),
    M = n(210887),
    P = n(314897),
    U = n(592125),
    w = n(271383),
    x = n(542578),
    G = n(375954),
    k = n(496675),
    B = n(699516),
    F = n(594174),
    Z = n(768581),
    V = n(176354),
    H = n(5192),
    Y = n(709054),
    j = n(91047),
    W = n(981631),
    K = n(689938),
    z = n(211985),
    q = n(113207);
function Q(e, t, n) {
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
let X = 44,
    $ = 440,
    J = 24;
function ee(e) {
    return null == e.id ? A.ZP.convertSurrogateToName(e.name) : ':'.concat(e.name, ':');
}
function et(e, t, n, r) {
    let i =
        null == e.id
            ? V.ZP.getURL(e.name)
            : Z.ZP.getEmojiURL({
                  id: e.id,
                  animated: e.animated,
                  size: t
              });
    return null != i && '' !== i
        ? (0, s.jsx)('img', {
              className: n,
              src: i,
              alt: e.name
          })
        : (0, s.jsx)('span', {
              className: r,
              children: e.name
          });
}
let en = (e) => {
    let { emoji: t, channelId: n, messageId: r } = e,
        [i, a] = l.useState(!0),
        [o, u] = l.useState([]),
        d = l.useMemo(() => {
            if (null == o || o.length < 1) return;
            let e = (0, y.Zn)(t, o[0], n, {
                emojiSize: C.M.LARGE,
                messageId: r
            });
            return (0, s.jsx)(C.Z, {
                className: z.__invalid_effect,
                effect: e,
                emojiSize: C.M.LARGE,
                onComplete: () => a(!1)
            });
        }, [o, t, n, r]);
    return (
        l.useEffect(() => {
            let e = !1;
            return (
                a(!0),
                !(async function () {
                    let n = await (0, V.B6)(t);
                    Array.isArray(n) && n.length > 0 && !e && u(n);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [t]),
        (0, s.jsxs)('div', {
            className: z.burstEmojiSection,
            children: [
                d,
                (0, s.jsx)(m.Z, {
                    className: c()(z.burstEmoji, { [z.hideEmoji]: i }),
                    emojiId: t.id,
                    emojiName: t.name,
                    animated: t.animated,
                    size: 'reaction'
                }),
                (0, s.jsx)(p.Text, {
                    variant: 'text-md/medium',
                    children: ee(t)
                })
            ]
        })
    );
};
class er extends l.PureComponent {
    render() {
        let { emoji: e, count: t, isSelected: n, setSelected: r, reactionType: i, colors: a } = this.props,
            o = ee(e),
            l = et(e, J, z.emoji, c()(z.emoji, z.emojiText)),
            u = i === R.O.BURST,
            d = (u ? K.Z.Messages.BURST_REACTION_REACTORS_A11Y : K.Z.Messages.REACTION_REACTORS_A11Y).format({
                name: o,
                n: t
            }),
            _ = {},
            f = {};
        if (u) {
            let { backgroundColor: e = '', opacity: t = 1, accentColor: r = '' } = null != a ? a : {};
            if (((f.color = r), n)) {
                var h;
                _.background = null !== (h = (0, E.wK)(e, t)) && void 0 !== h ? h : '';
            }
        }
        return (0, s.jsx)(p.Tooltip, {
            position: 'left',
            text: o,
            children: (a) => {
                let { onMouseEnter: o, onMouseLeave: u } = a;
                return (0, s.jsxs)(p.Clickable, {
                    className: c()({
                        [z.reactionDefault]: !n,
                        [z.reactionSelected]: n
                    }),
                    'aria-label': d,
                    onClick: () =>
                        r({
                            emoji: e,
                            reactionType: i
                        }),
                    onMouseEnter: o,
                    onMouseLeave: u,
                    style: _,
                    children: [
                        l,
                        (0, s.jsx)(p.Text, {
                            variant: 'text-sm/bold',
                            style: f,
                            children: t
                        })
                    ]
                });
            }
        });
    }
}
function ei(e) {
    let { emoji: t, user: n, message: r, channel: i, guildId: a, reactionType: o, onRemoveReactor: l, disableManage: u = !1 } = e,
        c = (0, f.e7)([P.default], () => P.default.getId()),
        d = (0, f.e7)([F.default], () => F.default.getUser(n.id), [n]),
        _ = (0, D.$R)(i),
        E = (0, f.e7)([k.Z], () => k.Z.can(W.Plq.MANAGE_MESSAGES, i) && _) || c === n.id,
        h = (0, f.e7)([w.ZP, U.Z, B.Z], () => H.ZP.getName(a, i.id, n));
    function m() {
        L.WO({
            channelId: i.id,
            messageId: r.id,
            emoji: t,
            location: L.TW.MESSAGE,
            userId: n.id,
            options: { burst: o === R.O.BURST }
        }),
            null == l || l();
    }
    return (0, s.jsxs)(S.Z, {
        className: z.reactorDefault,
        onContextMenu: (e) => (0, j.Pv)(e, n, i),
        align: S.Z.Align.CENTER,
        children: [
            (0, s.jsx)(S.Z.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: q.marginReset,
                children: (0, s.jsx)(T.Z, {
                    user: null != d ? d : n,
                    size: p.AvatarSizes.SIZE_24
                })
            }),
            (0, s.jsx)(S.Z.Child, {
                children: (0, s.jsxs)(p.Text, {
                    tag: 'strong',
                    variant: 'text-md/normal',
                    className: z.name,
                    children: [
                        null != h &&
                            '' !== h &&
                            (0, s.jsx)('span', {
                                className: n.isPomelo() ? '' : z.nickname,
                                children: h
                            }),
                        (0, s.jsx)(I.Z, {
                            user: n,
                            className: null != h && '' !== h ? z.tagFaded : null,
                            usernameClass: z.username,
                            discriminatorClass: z.discriminator,
                            forceUsername: !0
                        })
                    ]
                })
            }),
            !u &&
                E &&
                (0, s.jsx)(p.Clickable, {
                    onClick: m,
                    children: (0, s.jsx)(p.XSmallIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: z.remove
                    })
                })
        ]
    });
}
class ea extends l.PureComponent {
    componentDidMount() {
        this.loadMore();
    }
    componentDidUpdate(e) {
        (!_().isEqual(this.props.reaction, e.reaction) || this.props.reactionType !== e.reactionType) &&
            this.setState(
                {
                    lastId: null,
                    loadingMore: !1
                },
                () => this.loadMore()
            );
    }
    loadMore() {
        let { message: e, reaction: t, reactionType: n } = this.props,
            { lastId: r } = this.state;
        this.setState({ loadingMore: !0 }),
            L.U0({
                channelId: e.getChannelId(),
                messageId: e.id,
                emoji: t.emoji,
                limit: W.pTL,
                after: r,
                type: n
            }).then((e) => {
                var t;
                return this.setState({
                    loadingMore: !1,
                    lastId: null === (t = e[e.length - 1]) || void 0 === t ? void 0 : t.id
                });
            });
    }
    renderSection() {
        return null;
    }
    render() {
        let { hasMore: e, reactors: t, reaction: n, message: r, reactionType: i } = this.props,
            a = [];
        return (
            0 === t.length && this.state.loadingMore ? a.push(length) : (a.push(t.length), e && a.push(1)),
            (0, s.jsxs)('div', {
                className: z.reactorsContainer,
                children: [
                    i === R.O.BURST &&
                        (0, s.jsx)(en, {
                            emoji: n.emoji,
                            channelId: r.getChannelId(),
                            messageId: r.id
                        }),
                    (0, s.jsx)(p.List, {
                        className: z.reactors,
                        fade: !0,
                        ref: this.scrollerRef,
                        sections: a,
                        sectionHeight: 0,
                        rowHeight: this.getRowHeight,
                        renderRow: this.renderRow,
                        renderSection: this.renderSection,
                        onScroll: e ? this.handleScroll : void 0
                    })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            Q(this, 'scrollerRef', l.createRef()),
            Q(this, 'state', {
                lastId: null,
                loadingMore: !1
            }),
            Q(this, 'handleScroll', () => {
                let { current: e } = this.scrollerRef;
                if (null == e) return;
                let t = e.getScrollerState();
                t.scrollTop + t.offsetHeight >= t.scrollHeight - X && this.props.hasMore && !this.state.loadingMore && this.loadMore();
            }),
            Q(this, 'getRowHeight', (e, t) => {
                let { reactors: n } = this.props;
                if (1 === e) return 0 === t ? X : 0;
                if (0 === e) {
                    if (0 === t && 0 === n.length) return $;
                    if (null != this.props.reactors[t]) return X;
                }
                return 0;
            }),
            Q(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { message: r, guildId: i, channel: a, reaction: o, reactors: l, reactionType: u, disableManage: c } = this.props,
                    d = l[n];
                if (1 === t) return 0 === n ? (0, s.jsx)(p.Spinner, { className: z.spinnerMore }, 'hasMore') : null;
                return 0 === l.length && this.state.loadingMore
                    ? (0, s.jsx)(p.Spinner, { className: z.spinner }, 'loadingMore')
                    : null != d &&
                          (0, s.jsx)(
                              ei,
                              {
                                  message: r,
                                  emoji: o.emoji,
                                  guildId: i,
                                  channel: a,
                                  user: d,
                                  reaction: o,
                                  reactionType: u,
                                  disableManage: c
                              },
                              d.id
                          );
            });
    }
}
let eo = f.ZP.connectStores([x.Z], (e) => {
    let { message: t, reaction: n, reactionType: r } = e,
        i = x.Z.getReactions(t.getChannelId(), t.id, n.emoji, W.pTL, r);
    if (null == i)
        return {
            reactors: [],
            hasMore: !1
        };
    let a = Object.values(i),
        o = (r === R.O.BURST ? n.burst_count : n.count) > a.length;
    return {
        reactors: a,
        hasMore: o
    };
})(ea);
function es(e) {
    return l.useMemo(() => {
        let t = [];
        return (
            e.forEach((e) => {
                e.burst_count > 0 &&
                    t.push({
                        ...e,
                        count: 0
                    }),
                    e.count > 0 &&
                        t.push({
                            ...e,
                            burst_count: 0
                        });
            }),
            t.sort((e, t) => {
                let n = e.burst_count > 0 ? e.burst_count : e.count;
                return (t.burst_count > 0 ? t.burst_count : t.count) - n;
            }),
            t
        );
    }, [e]);
}
function el(e, t, n) {
    let [r, i] = l.useState(null != e ? e : t);
    return (
        l.useEffect(() => {
            null != r &&
                null ==
                    n.find((e) => {
                        let t = null != e.me_vote ? R.O.VOTE : e.burst_count > 0 ? R.O.BURST : R.O.NORMAL;
                        return (0, b.ir)(e.emoji, r.emoji) && t === r.reactionType;
                    }) &&
                i(t);
        }, [r, i, n, t]),
        [r, i]
    );
}
function eu(e) {
    let { message: t, selectedReaction: n, disableManage: r = !1, disableTabs: i = !1, onClose: a, transitionState: o, 'aria-label': u = K.Z.Messages.REACTIONS } = e,
        c = (0, f.e7)([U.Z], () => U.Z.getChannel(t.getChannelId())),
        d = null == c ? void 0 : c.getGuildId(),
        _ = (0, f.e7)(
            [G.Z, N.Z],
            () => {
                var e, n;
                let r = null !== (n = G.Z.getMessage(t.getChannelId(), t.id)) && void 0 !== n ? n : null === (e = N.Z.getMessage(Y.default.castMessageIdAsChannelId(t.id))) || void 0 === e ? void 0 : e.firstMessage;
                return null != r ? r.reactions : [];
            },
            [t]
        ),
        E = es(_),
        m = E[0],
        [I, T] = el(
            n,
            null != m
                ? {
                      emoji: m.emoji,
                      reactionType: m.burst_count > 0 ? R.O.BURST : R.O.NORMAL
                  }
                : null,
            _
        ),
        S = l.useMemo(() => {
            var e;
            return null == I ? null : null !== (e = _.find((e) => (0, b.ir)(e.emoji, I.emoji))) && void 0 !== e ? e : null;
        }, [_, I]),
        A = (0, f.e7)([g.Z], () => g.Z.saturation),
        C = (0, f.e7)([M.Z], () => (0, h.wj)(M.Z.theme));
    if (
        (l.useEffect(() => {
            (0 === _.length || (null == I && null == S)) && setImmediate(a);
        }, [a, _.length, S, I]),
        null == I || null == S)
    )
        return (0, s.jsx)(p.Spinner, {});
    if (null == c) throw Error('MessageReactions.render: Message does not have a channelId');
    return (0, s.jsx)(O.Z.Provider, {
        value: null != d ? d : void 0,
        children: (0, s.jsxs)(p.ModalRoot, {
            'aria-label': u,
            transitionState: o,
            size: p.ModalSize.DYNAMIC,
            className: z.container,
            children: [
                i
                    ? null
                    : (0, s.jsx)(p.Scroller, {
                          className: z.scroller,
                          fade: !0,
                          children: E.map((e) => {
                              var t;
                              let n = e.burst_count > 0;
                              return (0, s.jsx)(
                                  er,
                                  {
                                      isSelected: ec(I, e, n ? R.O.BURST : R.O.NORMAL),
                                      setSelected: T,
                                      reactionType: n ? R.O.BURST : R.O.NORMAL,
                                      emoji: e.emoji,
                                      count: n ? e.burst_count : e.count,
                                      colors: null != e.burst_colors ? (0, v.Z)(e.burst_colors, A, C) : void 0
                                  },
                                  ''
                                      .concat(n ? 'burst-' : 'normal-')
                                      .concat(null !== (t = e.emoji.id) && void 0 !== t ? t : '', ':')
                                      .concat(e.emoji.name)
                              );
                          })
                      }),
                (0, s.jsx)(eo, {
                    message: t,
                    reaction: S,
                    guildId: d,
                    channel: c,
                    reactionType: I.reactionType,
                    disableManage: r
                })
            ]
        })
    });
}
let ec = (e, t, n) => _().isEqual(e.emoji, t.emoji) && e.reactionType === n;
