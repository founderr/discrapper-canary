n.d(t, {
    ZP: function () {
        return w;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(605436),
    m = n(663993),
    h = n(518738),
    g = n(786761),
    x = n(3148),
    p = n(753206),
    f = n(598077),
    C = n(496675),
    _ = n(764260),
    I = n(95242),
    v = n(541575),
    N = n(420966),
    T = n(337344),
    b = n(275296),
    j = n(203377),
    S = n(981631),
    E = n(388032),
    R = n(837349),
    y = n(490909),
    A = n(179517),
    Z = n(79829);
let L = (0, m.Un)({
        createPromise: () => n.e('5609').then(n.bind(n, 336231)),
        webpackId: 336231
    }),
    D = o().debounce((e, t) => (0, _.Uv)(e, t), 200);
function O(e) {
    let { role: t, disabled: n } = e,
        [l, s] = r.useState(t.name);
    return (
        r.useEffect(() => {
            s(t.name);
        }, [t.name]),
        (0, i.jsx)(d.FormItem, {
            title: E.intl.string(E.t.dLbkBg),
            required: !0,
            children: (0, i.jsx)(d.TextInput, {
                type: 'text',
                value: l,
                maxLength: S.VKK,
                onChange: function (e) {
                    s(e), D(t.id, e);
                },
                disabled: n
            })
        })
    );
}
function P(e) {
    let { role: t, disabled: n } = e;
    return (0, i.jsxs)(d.FormItem, {
        className: R.colorPicker,
        title: E.intl.string(E.t['1F6FzM']),
        required: !0,
        children: [
            (0, i.jsx)(d.FormText, {
                className: R.colorDescription,
                children: E.intl.string(E.t['9UCxlZ'])
            }),
            (0, i.jsx)(
                L,
                {
                    defaultColor: S.p6O,
                    colors: S.pmI,
                    value: t.color,
                    disabled: n,
                    onChange: (e) =>
                        (function (e, t) {
                            if (e.color !== t && (t !== S.p6O || 0 !== e.color)) t === S.p6O && (t = 0), (0, _.OW)(e.id, t);
                        })(t, e),
                    customPickerPosition: 'right'
                },
                t.id
            )
        ]
    });
}
function k(e) {
    var t, l;
    let { role: s, guildId: a } = e;
    let o =
            ((l = E.intl.string(E.t.Mi9KbW)),
            r.useMemo(() => {
                let e = (0, g.e5)({
                    ...(0, x.ZP)({
                        channelId: '1337',
                        content: l
                    }),
                    state: S.yb.SENT,
                    id: '31337'
                });
                return (
                    (e.author = new f.Z({
                        id: '313337',
                        username: E.intl.string(E.t.cqpybG),
                        discriminator: '0000',
                        bot: !1
                    })),
                    (e.author.getAvatarURL = () => n(52008)),
                    e
                );
            }, [l])),
        c = {
            nick: o.author.username,
            colorString: null !== (t = s.colorString) && void 0 !== t ? t : void 0
        },
        u = {
            src: A,
            name: s.name
        },
        m = {
            src: Z,
            name: s.name
        },
        C = (0, h.oC)(a, s);
    return (0, i.jsx)(d.FocusBlock, {
        children: (0, i.jsxs)('div', {
            className: R.previewContainer,
            'aria-hidden': !0,
            'data-disable-adaptive-theme': !0,
            children: [
                (0, i.jsx)(d.ThemeProvider, {
                    theme: S.BRd.LIGHT,
                    children: (e) =>
                        (0, i.jsx)('div', {
                            className: e,
                            children: (0, i.jsx)('div', {
                                className: R.messageContainer,
                                children: (0, i.jsx)(p.Z, {
                                    author: c,
                                    message: o,
                                    roleIcon: null != C ? C : m,
                                    isGroupStart: !0
                                })
                            })
                        })
                }),
                (0, i.jsx)(d.ThemeProvider, {
                    theme: S.BRd.DARK,
                    children: (e) =>
                        (0, i.jsx)('div', {
                            className: e,
                            children: (0, i.jsx)('div', {
                                className: R.messageContainer,
                                children: (0, i.jsx)(p.Z, {
                                    author: c,
                                    message: o,
                                    roleIcon: null != C ? C : u,
                                    isGroupStart: !0
                                })
                            })
                        })
                })
            ]
        })
    });
}
function M(e) {
    let { role: t, disabled: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.FormSwitch, {
                disabled: n,
                value: t.hoist,
                onChange: (e) => (0, _.we)(t.id, e, t.mentionable),
                hideBorder: !0,
                children: E.intl.string(E.t.vceJPj)
            }),
            (0, i.jsx)(d.FormDivider, { className: R.divider }),
            (0, i.jsx)(d.FormSwitch, {
                disabled: n,
                value: t.mentionable,
                onChange: (e) => (0, _.we)(t.id, t.hoist, e),
                note: E.intl.string(E.t.kRg5W1),
                hideBorder: !0,
                children: E.intl.format(E.t.DTXoJS, {})
            })
        ]
    });
}
function w(e) {
    let { guild: t, role: n, locked: r, setSelectedSection: l } = e,
        a = (0, u.pM)(null == t ? void 0 : t.id, n.id),
        o = r || a,
        m = (0, c.e7)([C.Z], () => C.Z.canImpersonateRole(t, n)),
        { headerHeight: h, headerRef: g } = (0, I.Z)(0),
        { scrolledToTop: x, handleScroll: p } = (0, N.V)();
    return (0, i.jsx)(d.AdvancedScrollerAuto, {
        className: R.scroller,
        style: { scrollPaddingTop: h },
        onScroll: p,
        children: (0, i.jsxs)('div', {
            className: y.contentWidth,
            children: [
                (0, i.jsx)('div', {
                    className: s()(y.header, y.stickyHeader, { [y.stickyHeaderElevated]: !x }),
                    ref: g,
                    children: (0, i.jsx)(N.Z, {
                        guild: t,
                        role: n,
                        selectedSection: j.ZI.DISPLAY,
                        setSelectedSection: l
                    })
                }),
                (0, i.jsx)(O, {
                    role: n,
                    disabled: o
                }),
                (0, i.jsx)('div', {
                    className: R.noticeContainer,
                    children: (0, i.jsx)(b.Z, { role: n })
                }),
                (0, i.jsx)(d.FormDivider, { className: R.divider }),
                (0, i.jsx)(P, {
                    role: n,
                    disabled: o
                }),
                (0, i.jsx)(v.Z, {
                    guild: t,
                    disabled: o,
                    role: n
                }),
                (0, i.jsx)(k, {
                    role: n,
                    guildId: t.id
                }),
                (0, i.jsx)(d.FormDivider, { className: R.divider }),
                (0, i.jsx)(M, {
                    role: n,
                    disabled: o
                }),
                m
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(d.FormDivider, { className: R.divider }),
                              (0, i.jsx)(T.L, {
                                  guildId: t.id,
                                  role: n
                              })
                          ]
                      })
                    : null
            ]
        })
    });
}
