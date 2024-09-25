n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(410030),
    u = n(718582),
    c = n(981631),
    d = n(979340);
let _ = 30,
    E = 34,
    f = 2,
    h = 1,
    p = [
        [
            {
                translateY: 0,
                translateX: 0,
                scale: 1.2
            },
            {
                translateY: 0,
                translateX: 0,
                scale: 0
            },
            {
                translateY: 0,
                translateX: 0,
                scale: 0
            },
            {
                translateY: 0,
                translateX: 0,
                scale: 0
            }
        ],
        [
            {
                translateY: -14,
                translateX: -14,
                scale: 0.7058823529411765
            },
            {
                translateY: 12,
                translateX: 12,
                scale: 0.8235294117647058
            },
            {
                translateY: 0,
                translateX: 0,
                scale: 0
            },
            {
                translateY: 0,
                translateX: 0,
                scale: 0
            }
        ],
        [
            {
                translateY: -4,
                translateX: 16,
                scale: 0.7058823529411765
            },
            {
                translateY: 14,
                translateX: -14,
                scale: 0.8235294117647058
            },
            {
                translateY: -18,
                translateX: -12,
                scale: 0.5882352941176471
            },
            {
                translateY: 0,
                translateX: 0,
                scale: 0
            }
        ],
        [
            {
                translateY: -13,
                translateX: -13,
                scale: 0.8235294117647058
            },
            {
                translateY: 13,
                translateX: 13,
                scale: 0.8235294117647058
            },
            {
                translateY: -18,
                translateX: 18,
                scale: 0.5882352941176471
            },
            {
                translateY: 18,
                translateX: -18,
                scale: 0.5882352941176471
            }
        ]
    ];
function m(e) {
    let { users: t, guildId: n } = e,
        a = (0, u.fd)(t),
        s = (0, l.ZP)(),
        _ = i.useRef(!1);
    i.useEffect(() => {
        _.current = !0;
    }, []);
    let E = Math.min(p.length - 1, a.length - 1),
        m = p[Math.max(0, E)],
        g = a.length > 4,
        S = a.length - 3,
        A = S >= 10 ? h : f,
        v = m.map((e, t) => {
            let i = a[t];
            if (null == i) return null;
            let s = g && t === A;
            return (0, r.jsx)(
                'div',
                {
                    className: o()(d.avatarContainer),
                    style: {
                        opacity: 1,
                        transform: 'translateX('.concat(e.translateX, 'px) translateY(').concat(e.translateY, 'px) scale(').concat(e.scale, ')')
                    },
                    children: s
                        ? (0, r.jsx)(I, { count: S })
                        : (0, r.jsx)(T, {
                              guildId: n,
                              user: i
                          })
                },
                i.id
            );
        });
    return (0, r.jsx)('div', {
        className: s === c.BRd.DARK ? d.gradientContainerDark : d.gradientContainer,
        children: (0, r.jsx)('div', {
            className: d.groupContainer,
            children: v
        })
    });
}
function I(e) {
    let { count: t } = e;
    return (0, r.jsx)('div', {
        className: d.avatarWrapper,
        children: (0, r.jsx)('div', {
            className: d.overflowCount,
            children: (0, r.jsxs)(s.Text, {
                variant: 'text-sm/semibold',
                children: ['+', t]
            })
        })
    });
}
function T(e) {
    let { guildId: t, user: n } = e;
    return null == i.useMemo(() => (null == n ? void 0 : n.getAvatarSource(t, !1, _)), [t, n])
        ? null
        : (0, r.jsx)('div', {
              className: d.avatarWrapper,
              children: (0, r.jsx)('img', {
                  className: d.avatar,
                  src: null == n ? void 0 : n.getAvatarURL(t, 80),
                  alt: ''
              })
          });
}
