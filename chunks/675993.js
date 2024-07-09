t.d(n, {
    Z: function () {
        return N;
    }
}), t(47120);
var i = t(735250), l = t(470079), a = t(581051), r = t(353381), s = t(993365), o = t(481060), c = t(240991), u = t(810090), d = t(283442), m = t(783097), p = t(591204), _ = t(689938), E = t(970311), A = t(153521);
function N(e) {
    let {
            channel: n,
            application: t,
            videoUrl: a,
            imageCoverUrl: r,
            sectionName: o
        } = e, c = l.useMemo(() => {
            var e;
            return null !== (e = (0, m.jD)(t)) && void 0 !== e ? e : '';
        }, [t]), d = null != a || null != r, p = c.length > 0;
    return (0, i.jsxs)('div', {
        className: E.container,
        children: [
            (0, i.jsx)(h, {
                channel: n,
                application: t,
                sectionName: o
            }),
            d || p ? (0, i.jsxs)('div', {
                className: E.profileAndVideoContainer,
                children: [
                    d ? (0, i.jsx)('div', {
                        className: E.videoContainer,
                        children: (0, i.jsx)(u.Z, {
                            loop: !0,
                            autoPlay: !0,
                            muted: !0,
                            className: p ? E.videoWithOverview : E.videoNoOverview,
                            src: a,
                            poster: r
                        })
                    }) : null,
                    p ? (0, i.jsxs)('div', {
                        className: d ? E.overviewContainerWithVideo : E.overviewContainerNoVideo,
                        children: [
                            (0, i.jsx)(s.x, {
                                variant: 'text-sm/semibold',
                                children: _.Z.Messages.OVERVIEW
                            }),
                            (0, i.jsx)(f, { description: c })
                        ]
                    }) : null
                ]
            }) : null
        ]
    });
}
function h(e) {
    let {
            channel: n,
            application: t,
            sectionName: a
        } = e, {
            name: r,
            activityApplication: s
        } = l.useMemo(() => {
            var e;
            return (0, m.BQ)(t) ? {
                name: t.name,
                activityApplication: (0, m.ye)({ application: t }) ? t : null
            } : { name: null !== (e = (0, m.$d)(t)) && void 0 !== e ? e : '' };
        }, [t]), c = n.isThread(), u = (0, d.Z)({
            applicationId: t.id,
            channel: n
        });
    return (0, i.jsx)('div', {
        className: E.titleContainer,
        children: (0, i.jsxs)('div', {
            className: E.titleInnerContainer,
            children: [
                (0, i.jsx)(o.Heading, {
                    variant: 'heading-xl/extrabold',
                    children: r
                }),
                null != s ? (0, i.jsx)(p.Z, {
                    channel: n,
                    application: s,
                    disabled: c,
                    sectionName: a,
                    commandName: u
                }) : null
            ]
        })
    });
}
function f(e) {
    let {description: n} = e, [t, u] = l.useState(!1), d = l.useMemo(() => (0, c.YP)(n), [n]), {
            ref: m,
            lineCount: p
        } = function () {
            let e = l.useRef(null), [n, t] = l.useState(null);
            return l.useEffect(() => {
                let n = e.current;
                if (null === n || 0 === n.clientHeight)
                    return;
                let i = parseInt(getComputedStyle(n).lineHeight);
                if (!isNaN(i))
                    t(Math.max(Math.floor(n.clientHeight / i)));
            }, []), {
                ref: e,
                lineCount: n
            };
        }();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.x, {
                ref: m,
                className: A.markup,
                variant: 'text-sm/medium',
                lineClamp: t ? void 0 : 3,
                children: d
            }),
            null != p && p >= 3 ? (0, i.jsxs)(o.Clickable, {
                className: E.expandableDescriptionClickable,
                onClick: () => {
                    u(e => !e);
                },
                children: [
                    (0, i.jsx)(s.x, {
                        ref: m,
                        variant: 'text-sm/semibold',
                        color: 'text-brand',
                        children: t ? _.Z.Messages.APP_LAUNCHER_SHOW_LESS : _.Z.Messages.APP_LAUNCHER_SHOW_MORE
                    }),
                    t ? (0, i.jsx)(r.u, {
                        size: 'sm',
                        color: o.tokens.colors.TEXT_BRAND
                    }) : (0, i.jsx)(a.C, {
                        size: 'sm',
                        color: o.tokens.colors.TEXT_BRAND
                    })
                ]
            }) : null
        ]
    });
}
