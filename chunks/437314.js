n.d(t, {
    j: function () {
        return i;
    }
}),
    n(411104),
    n(47120);
var i,
    r = n(200651),
    a = n(192379),
    l = n(748780),
    s = n(442837),
    o = n(481060),
    c = n(210887),
    d = n(981631),
    u = n(388032),
    h = n(176075);
function m(e, t, n) {
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
(i || (i = {})).SECTION_NO_RESULTS = 'SECTION_NO_RESULTS';
let p = Object.freeze({
        SECTION_ALL: {
            lightSrc: n(900933),
            darkSrc: n(67764),
            width: 376,
            height: 162,
            renderContent: (e) =>
                (0, r.jsxs)(a.Fragment, {
                    children: [
                        (0, r.jsx)(o.EmptyStateText, { note: u.intl.string(u.t['oi+B4u']) }),
                        (0, r.jsx)(o.Button, {
                            className: h.button,
                            onClick: e,
                            children: u.intl.string(u.t.w5uwoK)
                        })
                    ]
                })
        },
        SECTION_ONLINE: {
            lightSrc: n(55346),
            darkSrc: n(917847),
            width: 421,
            height: 218,
            renderContent: () => (0, r.jsx)(o.EmptyStateText, { note: u.intl.string(u.t['1ESycn']) })
        },
        SECTION_BLOCKED: {
            lightSrc: n(459505),
            darkSrc: n(356634),
            width: 433,
            height: 232,
            renderContent: () => (0, r.jsx)(o.EmptyStateText, { note: u.intl.string(u.t.eC6imZ) })
        },
        SECTION_PENDING: {
            lightSrc: n(979770),
            darkSrc: n(138715),
            width: 415,
            height: 200,
            renderContent: (e) =>
                (0, r.jsxs)('div', {
                    className: h.emptyStateContainer,
                    children: [
                        (0, r.jsx)(o.EmptyStateText, { note: u.intl.string(u.t['7uvAKS']) }),
                        null != e &&
                            (0, r.jsx)(o.Button, {
                                color: o.Button.Colors.PRIMARY,
                                look: o.Button.Looks.OUTLINED,
                                size: o.Button.Sizes.TINY,
                                onClick: e,
                                className: h.spamButton,
                                children: (0, r.jsx)(o.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-muted',
                                    children: u.intl.string(u.t.rXl8fn)
                                })
                            })
                    ]
                })
        },
        SECTION_SUGGESTIONS: {
            lightSrc: n(979770),
            darkSrc: n(138715),
            width: 415,
            height: 200,
            renderContent: () => (0, r.jsx)(o.EmptyStateText, { note: u.intl.string(u.t['1AUTCA']) })
        },
        SECTION_NO_RESULTS: {
            lightSrc: n(55346),
            darkSrc: n(917847),
            width: 421,
            height: 218,
            renderContent: () => (0, r.jsx)(o.EmptyStateText, { note: u.intl.string(u.t['+Zg0lZ']) })
        }
    }),
    g = (e) => {
        let { theme: t } = e,
            n = u.intl.string(u.t['oi+B4u']),
            i = p.SECTION_ALL;
        return (0, r.jsx)(a.Fragment, {
            children: (0, r.jsxs)(o.EmptyState, {
                theme: t,
                children: [
                    (0, r.jsx)(o.EmptyStateImage, {
                        width: i.width,
                        height: i.height,
                        lightSrc: i.lightSrc,
                        darkSrc: i.darkSrc
                    }),
                    (0, r.jsx)(o.EmptyStateText, { note: n })
                ]
            })
        });
    };
class f extends a.PureComponent {
    render() {
        let { type: e, onClick: t, theme: n } = this.props,
            i = { opacity: this.state.opacity },
            a = (function (e) {
                switch (e) {
                    case d.pJs.ADD_FRIEND:
                    case d.pJs.ALL:
                        return p.SECTION_ALL;
                    case d.pJs.ONLINE:
                        return p.SECTION_ONLINE;
                    case d.pJs.PENDING:
                        return p.SECTION_PENDING;
                    case d.pJs.SUGGESTIONS:
                        return p.SECTION_SUGGESTIONS;
                    case d.pJs.BLOCKED:
                        return p.SECTION_BLOCKED;
                    case 'SECTION_NO_RESULTS':
                        return p.SECTION_NO_RESULTS;
                    default:
                        throw Error('FriendsEmptyState: Invalid empty state');
                }
            })(e);
        return e === d.pJs.ADD_FRIEND
            ? (0, r.jsx)(l.Z.div, {
                  className: h.friendsEmpty,
                  style: i,
                  children: (0, r.jsx)(g, { theme: n })
              })
            : (0, r.jsx)(l.Z.div, {
                  className: h.friendsEmpty,
                  style: i,
                  children: (0, r.jsxs)(o.EmptyState, {
                      theme: n,
                      children: [
                          (0, r.jsx)(o.EmptyStateImage, {
                              width: a.width,
                              height: a.height,
                              lightSrc: a.lightSrc,
                              darkSrc: a.darkSrc
                          }),
                          a.renderContent(t)
                      ]
                  })
              });
    }
    constructor(...e) {
        super(...e),
            m(this, 'state', { opacity: new l.Z.Value(1) }),
            m(this, 'componentWillEnter', (e) => {
                this.state.opacity.setValue(0),
                    l.Z.timing(this.state.opacity, {
                        toValue: 1,
                        duration: 250
                    }).start(e);
            }),
            m(this, 'componentWillLeave', (e) => {
                l.Z.timing(this.state.opacity, {
                    toValue: 0,
                    duration: 250
                }).start(e);
            });
    }
}
t.Z = s.ZP.connectStores([c.Z], () => ({ theme: c.Z.theme }), { forwardRef: !0 })(f);
