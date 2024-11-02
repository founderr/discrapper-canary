t.d(n, {
    Qm: function () {
        return E;
    },
    hR: function () {
        return p;
    },
    yJ: function () {
        return s;
    }
});
var i = t(192379),
    l = t(892814),
    a = t(442837),
    o = t(895924),
    r = t(581364),
    c = t(823379),
    d = t(399654),
    u = t(844439);
let s = {
        '1181475143340539995': {
            imageOption: 'image',
            overrideSendCommandInfo: {
                commandId: '1272485059353640963',
                imageOption: 'image'
            }
        },
        '991195178360635431': {
            imageOption: 'image',
            onlyAllowEdit: !0
        },
        '1091213298818613408': { imageOption: 'image' },
        '1029794689932611625': { imageOption: 'image' },
        '1238332854602043454': { imageOption: 'image' }
    },
    m = Object.keys(s);
function E(e) {
    let { contentType: n } = e;
    switch (n) {
        case 'image/jpeg':
        case 'image/jpg':
            return '.jpg';
        case 'image/png':
        case 'image/apng':
            return '.png';
        case 'image/webp':
            return '.webp';
        default:
            return '';
    }
}
function p(e) {
    let { channelId: n } = e,
        { fetchState: t, recommendationsSections: E } = (function (e) {
            let { channelId: n } = e,
                t = l.I.CONTEXTUAL_IMAGE,
                o = i.useMemo(
                    () => ({
                        channelId: n,
                        location: t,
                        withCommands: !0
                    }),
                    [n, t]
                );
            i.useEffect(() => {
                (0, d.a)(o);
            }, [o]);
            let { fetchState: r, recommendationsSections: c } = (0, a.cj)([u.ZP], () => ({
                fetchState: u.ZP.getFetchState(o),
                recommendationsSections: u.ZP.getRecommendations(o)
            }));
            return {
                fetchState: r,
                recommendationsSections: c
            };
        })({ channelId: n });
    return {
        fetchState: t,
        imageRecCommandContexts: i.useMemo(() => {
            let e = E.length > 0 ? E[0].items : void 0;
            return void 0 === e
                ? []
                : m
                      .map((n) => {
                          var t, i, l, a;
                          let c, d;
                          let u = e.find((e) => {
                              var t;
                              return null != (c = null === (t = e.commands) || void 0 === t ? void 0 : t.find((e) => e.id === n));
                          });
                          if (null == u) return null;
                          let { application: m } = u;
                          if (null == c) return null;
                          let E = (0, r.Z8)({
                                  rootCommand: c,
                                  command: c,
                                  applicationId: m.id
                              }),
                              p = null === (t = s[n].overrideSendCommandInfo) || void 0 === t ? void 0 : t.commandId;
                          if (null != p) {
                              let e = null != p ? (null === (l = u.commands) || void 0 === l ? void 0 : l.find((e) => e.id === p)) : void 0;
                              null != e &&
                                  (d = (0, r.Z8)({
                                      rootCommand: e,
                                      command: e,
                                      applicationId: m.id
                                  }));
                          }
                          return {
                              command: {
                                  ...E,
                                  displayName: E.displayName
                                      .split(/[_ ]/)
                                      .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
                                      .join(' ')
                              },
                              overrideSendCommand: d,
                              section: {
                                  type: o.Qi.APPLICATION,
                                  id: m.id,
                                  icon: m.icon,
                                  name: null !== (a = null == m ? void 0 : null === (i = m.bot) || void 0 === i ? void 0 : i.username) && void 0 !== a ? a : m.name,
                                  application: m
                              }
                          };
                      })
                      .filter(c.lm);
        }, [E])
    };
}
