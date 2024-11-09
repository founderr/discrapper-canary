var r,
    i = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(568611),
    u = n(442837),
    c = n(692547),
    d = n(481060),
    f = n(891819),
    _ = n(372769),
    h = n(451478),
    p = n(956664),
    m = n(153066),
    g = n(230084);
function E(e, t, n) {
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
let v = {
        SMOL: 'Smol',
        MINI: 'Mini',
        SMALLER: 'Smaller',
        SMALL: 'Small',
        MEDIUM: 'Medium',
        LARGE: 'Large',
        LARGER: 'Larger',
        XLARGE: 'XLarge'
    },
    I = {
        [v.SMOL]: 16,
        [v.MINI]: 20,
        [v.SMALLER]: 24,
        [v.SMALL]: 30,
        [v.MEDIUM]: 40,
        [v.LARGE]: 50,
        [v.LARGER]: 64,
        [v.XLARGE]: 100
    },
    S = {
        [v.SMOL]: [10, 10, 8, 6, 6, 4],
        [v.MINI]: [12, 12, 10, 10, 8, 6, 4],
        [v.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
        [v.SMALL]: [14, 14, 12, 12, 10, 8, 6],
        [v.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
        [v.LARGE]: [18, 18, 16, 16, 14, 12, 10],
        [v.LARGER]: [19, 19, 17, 17, 15, 13, 11],
        [v.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
    };
class T extends a.PureComponent {
    renderAcronym() {
        let { guild: e, iconSrc: t } = this.props;
        return null != e.icon || null != t
            ? null
            : (0, i.jsx)('div', {
                  className: g.acronym,
                  children: e.acronym
              });
    }
    renderBadge() {
        let { showBadge: e, guild: t, badgeStrokeColor: n, badgeTooltipColor: r, badgeTooltipDelay: a } = this.props;
        return e && null != t.hasFeature
            ? (0, i.jsx)(_.Z, {
                  className: g.guildIconBadge,
                  guild: t,
                  badgeStrokeColor: n,
                  tooltipColor: r,
                  tooltipDelay: a
              })
            : null;
    }
    renderIcon() {
        var e, t;
        let { guild: n, className: r, showBadge: a, active: s, size: l, style: u = {}, textScale: c, showTooltip: f, tooltipPosition: _, onClick: h, to: p, badgeStrokeColor: E, animate: v, tabIndex: I, iconSrc: T, 'aria-hidden': b, ...y } = this.props,
            A = S[l],
            N = null != h ? d.Clickable : 'div';
        return (0, i.jsxs)(N, {
            className: o()(g.icon, r, (0, m.l)(g, 'iconSize', l), {
                [null !== (e = (0, m.l)(g, 'iconActive', l)) && void 0 !== e ? e : '']: s,
                [g.iconInactive]: !s,
                [g.noIcon]: null == n.icon
            }),
            'aria-hidden': b,
            style:
                null == n.icon
                    ? {
                          fontSize: (null !== (t = A[n.acronym.length]) && void 0 !== t ? t : A[A.length - 1]) * c,
                          ...u
                      }
                    : u,
            onClick: null != p || null == h ? void 0 : h,
            tabIndex: I,
            ...y,
            children: [this.renderAcronym(), this.renderBadge()]
        });
    }
    renderTooltip() {
        let { guild: e, showTooltip: t, tooltipPosition: n } = this.props;
        return t
            ? (0, i.jsx)(d.Tooltip, {
                  text: e.name,
                  position: n,
                  'aria-label': !1,
                  children: (e) => a.cloneElement(a.Children.only(this.renderIcon()), { ...e })
              })
            : this.renderIcon();
    }
    render() {
        let { to: e, guild: t, source: n, tabIndex: r, 'aria-hidden': a } = this.props;
        return null != e
            ? (0, i.jsx)(l.rU, {
                  'aria-hidden': a,
                  to: {
                      pathname: e,
                      state: null != n ? { analyticsSource: n } : null
                  },
                  'aria-label': t.toString(),
                  tabIndex: r,
                  children: this.renderTooltip()
              })
            : this.renderTooltip();
    }
}
let b = u.ZP.connectStores([h.Z], (e) => {
    let { guild: t, animate: n, iconSrc: r, style: i, size: a } = e;
    return {
        style: {
            ...i,
            backgroundImage: (0, p.rv)(null != r ? r : t.getIconURL(I[a], n && h.Z.isFocused()))
        }
    };
})((0, f.N)((e) => (0, i.jsx)(T, { ...e })));
class y extends (r = a.PureComponent) {
    render() {
        return (0, i.jsx)(b, { ...this.props });
    }
}
E(y, 'Sizes', v),
    E(y, 'defaultProps', {
        size: v.LARGE,
        textScale: 1,
        showBadge: !1,
        showTooltip: !1,
        active: !1,
        tooltipPosition: 'top',
        badgeStrokeColor: c.Z.unsafe_rawColors.WHITE_500.css,
        animate: !1
    }),
    (t.Z = y);
