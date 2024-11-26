n.d(t, {
    e: function () {
        return I;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(752877),
    s = n(442837),
    o = n(780384),
    l = n(481060),
    u = n(410030),
    c = n(607070),
    d = n(965645),
    f = n(362061),
    _ = n(424496);
let p = [
        {
            box: '#FFD89E',
            ribbon: '#FF7476'
        },
        {
            box: '#17B5E2',
            ribbon: '#FFFFFF'
        },
        {
            box: '#EED169',
            ribbon: '#51A1EB'
        },
        {
            box: '#509C65',
            ribbon: '#FFC96E'
        },
        {
            box: '#E4578A',
            ribbon: '#BEC4FF'
        },
        {
            box: '#AFE0FC',
            ribbon: '#FF9356'
        },
        {
            box: '#DB6D6D',
            ribbon: '#67DA9C'
        }
    ],
    h = [
        {
            box: '#EABB75',
            ribbon: '#E4595C'
        },
        {
            box: '#2D7AA5',
            ribbon: '#64C7C2'
        },
        {
            box: '#ECBF21',
            ribbon: '#51A1EB'
        },
        {
            box: '#439359',
            ribbon: '#D5A24C'
        },
        {
            box: '#FC90C4',
            ribbon: '#777FCE'
        },
        {
            box: '#549DC6',
            ribbon: '#FF9356'
        },
        {
            box: '#DB6F6F',
            ribbon: '#81C29F'
        }
    ],
    m = 1 / 300,
    g = (0, a.animated)(d.Z),
    E = (0, a.animated)(f.Z),
    v = (0, a.animated)(l.GiftIcon);
function I(e) {
    let {
            themeOverride: t,
            hovered: n,
            isContentDismissed: a,
            boxColors: s = {
                dark: p,
                light: h
            }
        } = e,
        c = (0, u.ZP)(),
        [d, f] = (function (e) {
            let [t, n] = i.useState(!1),
                [r, a] = i.useState(Math.floor(7 * Math.random()));
            return (
                i.useEffect(() => {
                    if (e) return;
                    let t = Math.random() <= m;
                    if ((n(t), !t)) {
                        let e;
                        do e = Math.floor(7 * Math.random());
                        while (e === r);
                        a(e);
                    }
                }, [e]),
                [t, r]
            );
        })(n),
        _ = (0, l.useSpring)({
            reverse: !n,
            reset: !0,
            from: { scale: 1 },
            to: { scale: 1.14 },
            config: {
                tension: 800,
                friction: 24
            }
        }),
        I = a ? f : 0,
        T = (0, o.wj)(null != t ? t : c) ? s.dark[I] : s.light[I];
    return !n && a
        ? (0, r.jsx)(v, {})
        : a && d
          ? (0, r.jsx)(E, {
                isDark: (0, o.wj)(c),
                style: _
            })
          : (0, r.jsx)(g, {
                boxColor: T.box,
                ribbonColor: T.ribbon,
                style: _
            });
}
t.Z = i.memo(function (e) {
    let { hovered: t } = e,
        a = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        o = i.useMemo(() => [() => n.e('31496').then(n.t.bind(n, 347381, 19)), () => n.e('37711').then(n.t.bind(n, 891220, 19))], []);
    return !a && t
        ? (0, r.jsx)(l.ChainedLottieAnimation, {
              className: _.icon,
              animationData: o
          })
        : (0, r.jsx)(I, {
              hovered: t,
              isContentDismissed: !0
          });
});
