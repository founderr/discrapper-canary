t.r(e),
    t.d(e, {
        __import__useLazyAPIPromise: function () {
            return M;
        },
        default: function () {
            return L;
        }
    });
var i = t(200651),
    l = t(192379),
    r = t(392711),
    a = t.n(r),
    o = t(442837),
    c = t(481060),
    s = t(45114),
    u = t(313201),
    d = t(597),
    g = t(147754),
    h = t(984933),
    v = t(720202),
    m = t(430824),
    x = t(306680),
    Z = t(626135),
    f = t(823379),
    C = t(981888),
    p = t(709054),
    N = t(897285),
    j = t(518756),
    E = t(554747),
    k = t(710679),
    I = t(74562),
    _ = t(576749),
    P = t(765305),
    T = t(981631),
    y = t(490897),
    b = t(388032),
    G = t(975455);
let M = C.Z;
function L(n) {
    let { transitionState: e, onClose: r, guildId: C } = n,
        M = (0, u.Dt)(),
        L = (0, o.e7)([m.Z], () => m.Z.getGuild(C)),
        S = (0, j.Z)(null == L ? void 0 : L.id),
        A = (0, E.ZP)(C),
        R = l.useRef(x.ZP.ackMessageId(C, y.W.GUILD_EVENT)),
        w = (0, _.Z)();
    return (
        l.useEffect(() => {
            A.forEach((n) => N.Z.getGuildEventUserCounts(C, n.id, [])), N.Z.getGuildEventsForCurrentUser(C);
        }, [A, C]),
        l.useEffect(() => {
            let n = m.Z.getGuild(C);
            if (!(null == n ? void 0 : n.hasFeature(T.oNc.HUB))) return;
            let { showHubEventsList: e } = g.Z.getCurrentConfig({
                guildId: C,
                location: 'd3755f_1'
            });
            if (!e) return;
            let t = h.ZP.getDefaultChannel(C);
            null != t && d.c(t.id);
        }, [C]),
        l.useEffect(() => {
            Z.default.track(T.rMx.OPEN_MODAL, {
                type: P.zw,
                guild_id: C,
                guild_events_count: A.length
            });
        }, []),
        l.useEffect(() => {
            a()(A)
                .map((n) => n.creator_id)
                .filter(f.lm)
                .uniq()
                .forEach((n) => {
                    v.Z.requestMember(C, n);
                });
        }, [C, A]),
        l.useEffect(() => {
            null != C && (0, s.Ju)(C, y.W.GUILD_EVENT);
        }, [C]),
        (0, i.jsxs)(c.ModalRoot, {
            size: c.ModalSize.MEDIUM,
            transitionState: e,
            'aria-labelledby': M,
            children: [
                (0, i.jsxs)(c.ModalHeader, {
                    className: G.header,
                    children: [
                        (0, i.jsx)(c.CalendarIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: G.icon
                        }),
                        (0, i.jsx)(c.Heading, {
                            id: M,
                            variant: 'heading-md/semibold',
                            children: A.length > 0 ? b.intl.formatToPlainString(b.t.IBdqSk, { number: A.length }) : b.intl.string(b.t.tlopTE)
                        }),
                        S &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('div', {
                                        className: G.divider,
                                        children: '|'
                                    }),
                                    (0, i.jsx)(c.Button, {
                                        size: c.Button.Sizes.MIN,
                                        onClick: () => {
                                            (0, c.openModalLazy)(async () => {
                                                let { default: n } = await Promise.all([t.e('58023'), t.e('25417')]).then(t.bind(t, 779250));
                                                return (e) =>
                                                    (0, i.jsx)(n, {
                                                        ...e,
                                                        guildId: C
                                                    });
                                            }, w);
                                        },
                                        innerClassName: G.button,
                                        children: b.intl.string(b.t['60lJ0N'])
                                    })
                                ]
                            }),
                        (0, i.jsx)(c.Clickable, {
                            onClick: r,
                            className: G.iconButton,
                            'aria-label': b.intl.string(b.t.cpT0Cg),
                            children: (0, i.jsx)(c.XSmallIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: G.icon
                            })
                        })
                    ]
                }),
                (0, i.jsx)(c.ModalContent, {
                    className: G.content,
                    children:
                        A.length > 0
                            ? A.map((n) =>
                                  (0, i.jsx)(
                                      k.Z,
                                      {
                                          guildEvent: n,
                                          guildId: C,
                                          onActionTaken: r,
                                          isNew: null != R.current && p.default.compare(n.id, R.current) > 0
                                      },
                                      n.id
                                  )
                              )
                            : (0, i.jsx)(I.Z, {
                                  guildId: C,
                                  onClose: r
                              })
                })
            ]
        })
    );
}
