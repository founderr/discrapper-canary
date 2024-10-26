n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(593473),
    o = n(442837),
    c = n(481060),
    d = n(749210),
    u = n(558381),
    _ = n(666743),
    E = n(770146),
    h = n(600164),
    m = n(565138),
    I = n(41776),
    p = n(703656),
    g = n(769654),
    T = n(601964),
    S = n(430824),
    C = n(843445),
    f = n(981631),
    N = n(689938),
    A = n(144902);
function v(e, t, n) {
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
class Z extends a.PureComponent {
    renderMemberInfo() {
        let { approximateMemberCount: e, approximatePresenceCount: t } = this.props.guild;
        return null == e || null == t
            ? null
            : (0, i.jsxs)(h.Z, {
                  className: A.memberInfo,
                  align: h.Z.Align.CENTER,
                  children: [
                      (0, i.jsx)('div', { className: A.dotOnline }),
                      (0, i.jsx)('span', {
                          className: A.memberText,
                          children: N.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: t })
                      }),
                      (0, i.jsx)('div', { className: A.dotOffline }),
                      (0, i.jsx)('span', {
                          className: A.memberText,
                          children: N.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: e })
                      })
                  ]
              });
    }
    render() {
        let { guild: e, inChannel: t, isInGuild: n, isLurking: a, isAuthenticated: s, className: l, pageSize: o } = this.props;
        if (t && n) return null;
        let d = new T.ZP(e),
            u = N.Z.Messages.LURKER_MODE_VIEW_GUILD,
            _ = this.handleJoinOrView,
            I = c.Button.Looks.FILLED,
            p = c.Button.Colors.PRIMARY;
        return (
            s
                ? n
                    ? ((I = c.Button.Looks.OUTLINED),
                      (p = A.buttonColorInGuild),
                      (u = (0, i.jsxs)(h.Z, {
                          align: h.Z.Align.CENTER,
                          children: [
                              (0, i.jsx)('div', { children: N.Z.Messages.JOINED_GUILD }),
                              (0, i.jsx)(c.CheckmarkLargeIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: A.joinedCheckmark
                              })
                          ]
                      })))
                    : a && t && (u = N.Z.Messages.JOIN_GUILD)
                : ((u = N.Z.Messages._LOGIN), (_ = this.handleLogin)),
            (0, i.jsxs)('div', {
                className: r()(l, o === C.b.SMALL ? A.inviteSmall : A.inviteLarge),
                children: [
                    (0, i.jsx)(E.Z, { children: N.Z.Messages.APPLICATION_STORE_SECTION_TITLE_VERIFIED_GUILD }),
                    (0, i.jsxs)('div', {
                        className: A.content,
                        children: [
                            (0, i.jsxs)('div', {
                                className: A.info,
                                children: [
                                    (0, i.jsx)(m.Z, {
                                        guild: d,
                                        active: !0,
                                        size: m.Z.Sizes.LARGE,
                                        className: A.guildIcon
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: A.infoText,
                                        children: [
                                            (0, i.jsx)('div', {
                                                className: A.name,
                                                children: e.name
                                            }),
                                            this.renderMemberInfo()
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(c.Button, {
                                size: c.Button.Sizes.SMALL,
                                className: A.actionButton,
                                fullWidth: !0,
                                color: p,
                                look: I,
                                onClick: _,
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
            v(this, 'handleJoinOrView', async () => {
                let { guild: e, skuId: t, isInGuild: n, isLurking: i } = this.props,
                    a = () => (0, g.X)(e.id);
                if (i) (0, u.Oj)(t).then(a);
                else if (n) a();
                else
                    try {
                        await d.Z.joinGuild(e.id, {
                            lurker: !0,
                            source: f.vtS.APPLICATION_STORE
                        }),
                            a();
                    } catch {}
            }),
            v(this, 'handleLogin', () => {
                let e = { redirect_to: f.Z5c.APPLICATION_STORE_LISTING_SKU(this.props.skuId) };
                (0, p.uL)(f.Z5c.LOGIN, { search: (0, l.stringify)(e) });
            });
    }
}
t.Z = (0, _.Z)(
    o.ZP.connectStores([S.Z, I.Z], (e) => {
        let { guild: t } = e,
            n = I.Z.isLurking(t.id);
        return {
            isInGuild: null != S.Z.getGuild(t.id) && !n,
            isLurking: n
        };
    })(Z)
);
