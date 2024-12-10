n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(593473),
    s = n(442837),
    c = n(481060),
    d = n(749210),
    u = n(558381),
    h = n(666743),
    m = n(770146),
    p = n(600164),
    g = n(565138),
    f = n(41776),
    _ = n(703656),
    E = n(769654),
    I = n(601964),
    C = n(430824),
    v = n(843445),
    S = n(981631),
    N = n(388032),
    T = n(106269);
function b(e, t, n) {
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
class x extends r.PureComponent {
    renderMemberInfo() {
        let { approximateMemberCount: e, approximatePresenceCount: t } = this.props.guild;
        return null == e || null == t
            ? null
            : (0, i.jsxs)(p.Z, {
                  className: T.memberInfo,
                  align: p.Z.Align.CENTER,
                  children: [
                      (0, i.jsx)('div', { className: T.dotOnline }),
                      (0, i.jsx)('span', {
                          className: T.memberText,
                          children: N.intl.format(N.t['LC+S+v'], { membersOnline: t })
                      }),
                      (0, i.jsx)('div', { className: T.dotOffline }),
                      (0, i.jsx)('span', {
                          className: T.memberText,
                          children: N.intl.format(N.t.zRl6XV, { count: e })
                      })
                  ]
              });
    }
    render() {
        let { guild: e, inChannel: t, isInGuild: n, isLurking: r, isAuthenticated: l, className: o, pageSize: s } = this.props;
        if (t && n) return null;
        let d = new I.ZP(e),
            u = N.intl.string(N.t.pxwdrK),
            h = this.handleJoinOrView,
            f = c.Button.Looks.FILLED,
            _ = c.Button.Colors.PRIMARY;
        return (
            l
                ? n
                    ? ((f = c.Button.Looks.OUTLINED),
                      (_ = T.buttonColorInGuild),
                      (u = (0, i.jsxs)(p.Z, {
                          align: p.Z.Align.CENTER,
                          children: [
                              (0, i.jsx)('div', { children: N.intl.string(N.t.cEnaW1) }),
                              (0, i.jsx)(c.CheckmarkLargeIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: T.joinedCheckmark
                              })
                          ]
                      })))
                    : r && t && (u = N.intl.string(N.t.XpeFYm))
                : ((u = N.intl.string(N.t.dKhVQE)), (h = this.handleLogin)),
            (0, i.jsxs)('div', {
                className: a()(o, s === v.b.SMALL ? T.inviteSmall : T.inviteLarge),
                children: [
                    (0, i.jsx)(m.Z, { children: N.intl.string(N.t.s1KcLi) }),
                    (0, i.jsxs)('div', {
                        className: T.content,
                        children: [
                            (0, i.jsxs)('div', {
                                className: T.info,
                                children: [
                                    (0, i.jsx)(g.Z, {
                                        guild: d,
                                        active: !0,
                                        size: g.Z.Sizes.LARGE,
                                        className: T.guildIcon
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: T.infoText,
                                        children: [
                                            (0, i.jsx)('div', {
                                                className: T.name,
                                                children: e.name
                                            }),
                                            this.renderMemberInfo()
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(c.Button, {
                                size: c.Button.Sizes.SMALL,
                                className: T.actionButton,
                                fullWidth: !0,
                                color: _,
                                look: f,
                                onClick: h,
                                children: u
                            })
                        ]
                    })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            b(this, 'handleJoinOrView', async () => {
                let { guild: e, skuId: t, isInGuild: n, isLurking: i } = this.props,
                    r = () => (0, E.X)(e.id);
                if (i) (0, u.Oj)(t).then(r);
                else if (n) r();
                else
                    try {
                        await d.Z.joinGuild(e.id, {
                            lurker: !0,
                            source: S.vtS.APPLICATION_STORE
                        }),
                            r();
                    } catch {}
            }),
            b(this, 'handleLogin', () => {
                let e = { redirect_to: S.Z5c.APPLICATION_STORE_LISTING_SKU(this.props.skuId) };
                (0, _.uL)(S.Z5c.LOGIN, { search: (0, o.stringify)(e) });
            });
    }
}
t.Z = (0, h.Z)(
    s.ZP.connectStores([C.Z, f.Z], (e) => {
        let { guild: t } = e,
            n = f.Z.isLurking(t.id);
        return {
            isInGuild: null != C.Z.getGuild(t.id) && !n,
            isLurking: n
        };
    })(x)
);
