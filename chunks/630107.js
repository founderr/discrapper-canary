n.r(t),
    n.d(t, {
        default: function () {
            return N;
        }
    });
var a = n(200651),
    i = n(192379),
    s = n(873546),
    r = n(442837),
    l = n(481060),
    o = n(830064),
    c = n(388905),
    u = n(625128),
    d = n(362762),
    p = n(703656),
    m = n(626135),
    x = n(981631),
    b = n(186901),
    h = n(388032),
    g = n(901628),
    f = n(821744);
r.ZP.initialize();
let j = s.tq || s.Em;
function N(e) {
    let { match: t } = e,
        n = (0, r.e7)([d.Z], () => d.Z.getState('quests')),
        s = t.params.questId;
    if (
        (i.useEffect(() => {
            if (!j)
                null == n
                    ? (m.default.track(x.rMx.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT, { quest_id: s }),
                      u.Z.openNativeAppModal('quests', x.Etm.DEEP_LINK, {
                          type: b.jE.QUEST_HOME,
                          params: { questId: s }
                      }))
                    : n === x.kEZ.OPEN_FAIL &&
                      (0, p.dL)({
                          pathname: x.Z5c.QUEST_HOME,
                          hash: s
                      });
        }, [n, s]),
        j)
    )
        return (0, a.jsxs)('div', {
            className: g.mobileWebContainer,
            children: [
                (0, a.jsx)('img', {
                    src: f,
                    alt: '',
                    className: g.mobileWebImage
                }),
                (0, a.jsx)(l.Heading, {
                    variant: 'display-lg',
                    color: 'text-brand',
                    children: h.intl.string(h.t.xmotYm)
                }),
                (0, a.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    className: g.mobileWebCopy,
                    children: h.intl.string(h.t.gtZK09)
                })
            ]
        });
    let N = null == n || n === x.kEZ.OPENING || n === x.kEZ.OPEN_FAIL;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(o.Z, {
                className: g.backgroundArtwork,
                preserveAspectRatio: 'xMinYMin slice'
            }),
            (0, a.jsx)('div', {
                className: g.container,
                children: (0, a.jsx)(c.ZP, {
                    children: N
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [(0, a.jsx)(c.Dx, { children: h.intl.string(h.t['Z+hCVV']) }), (0, a.jsx)(c.Hh, {})]
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(c.Dx, {
                                      className: g.appOpenedTitle,
                                      children: h.intl.string(h.t.csrAMD)
                                  }),
                                  (0, a.jsx)(c.DK, { children: h.intl.string(h.t.ghBJz8) })
                              ]
                          })
                })
            })
        ]
    });
}
