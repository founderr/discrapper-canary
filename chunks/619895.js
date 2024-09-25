n.d(t, {
    Qm: function () {
        return E;
    },
    hR: function () {
        return f;
    },
    yJ: function () {
        return d;
    }
});
var r = n(470079),
    i = n(892814),
    a = n(442837),
    o = n(895924),
    s = n(581364),
    l = n(823379),
    u = n(399654),
    c = n(844439);
let d = {
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
    _ = Object.keys(d);
function E(e) {
    let { contentType: t } = e;
    switch (t) {
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
function f(e) {
    let { channelId: t } = e,
        { fetchState: n, recommendationsSections: i } = h({ channelId: t });
    return {
        fetchState: n,
        imageRecCommandContexts: r.useMemo(() => {
            let e = i.length > 0 ? i[0].items : void 0;
            return void 0 === e
                ? []
                : _.map((t) => {
                      var n, r, i, a;
                      let l, u;
                      let c = e.find((e) => {
                          var n;
                          return null != (l = null === (n = e.commands) || void 0 === n ? void 0 : n.find((e) => e.id === t));
                      });
                      if (null == c) return null;
                      let { application: _ } = c;
                      if (null == l) return null;
                      let E = (0, s.Z8)({
                              rootCommand: l,
                              command: l,
                              applicationId: _.id
                          }),
                          f = null === (n = d[t].overrideSendCommandInfo) || void 0 === n ? void 0 : n.commandId;
                      if (null != f) {
                          let e = null != f ? (null === (i = c.commands) || void 0 === i ? void 0 : i.find((e) => e.id === f)) : void 0;
                          null != e &&
                              (u = (0, s.Z8)({
                                  rootCommand: e,
                                  command: e,
                                  applicationId: _.id
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
                          overrideSendCommand: u,
                          section: {
                              type: o.Qi.APPLICATION,
                              id: _.id,
                              icon: _.icon,
                              name: null !== (a = null == _ ? void 0 : null === (r = _.bot) || void 0 === r ? void 0 : r.username) && void 0 !== a ? a : _.name,
                              application: _
                          }
                      };
                  }).filter(l.lm);
        }, [i])
    };
}
function h(e) {
    let { channelId: t } = e,
        n = i.I.CONTEXTUAL_IMAGE,
        o = r.useMemo(
            () => ({
                channelId: t,
                location: n,
                withCommands: !0
            }),
            [t, n]
        );
    r.useEffect(() => {
        (0, u.a)(o);
    }, [o]);
    let { fetchState: s, recommendationsSections: l } = (0, a.cj)([c.ZP], () => ({
        fetchState: c.ZP.getFetchState(o),
        recommendationsSections: c.ZP.getRecommendations(o)
    }));
    return {
        fetchState: s,
        recommendationsSections: l
    };
}
