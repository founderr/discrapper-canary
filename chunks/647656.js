"use strict";
a.r(t), a("47120"), a("789020"), a("411104");
var n = a("392711"),
  s = a.n(n),
  l = a("570140"),
  i = a("626135"),
  r = a("81063"),
  o = a("70956"),
  u = a("996106"),
  d = a("914946"),
  c = a("452426"),
  f = a("186901"),
  E = a("981631");
let h = ["349134787773988865"];
t.default = {
  [E.RPCCommands.SET_ACTIVITY]: {
    scope: {
      [f.RPC_SCOPE_CONFIG.ANY]: [E.OAuth2Scopes.RPC, E.OAuth2Scopes.RPC_ACTIVITIES_WRITE, f.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, c.default)(e).required().keys({
      pid: e.number().min(0),
      activity: e.object().keys({
        state: e.string().min(2).max(128),
        details: e.string().min(2).max(128),
        timestamps: (0, c.default)(e).keys({
          start: e.number().min(1),
          end: e.number().min(1)
        }),
        assets: (0, c.default)(e).keys({
          large_image: e.string().min(1).max(256),
          large_text: e.string().min(2).max(128),
          small_image: e.string().min(1).max(256),
          small_text: e.string().min(2).max(128)
        }),
        party: (0, c.default)(e).keys({
          id: e.string().min(2).max(128),
          size: e.array().items(e.number().min(1)).length(2),
          privacy: e.number().default(E.ActivityPartyPrivacy.PRIVATE).valid([E.ActivityPartyPrivacy.PRIVATE, E.ActivityPartyPrivacy.PUBLIC])
        }),
        secrets: (0, c.default)(e).keys({
          match: e.string().min(2).max(128),
          join: e.string().min(2).max(128),
          spectate: e.string().min(2).max(128)
        }),
        buttons: e.array().items((0, c.default)(e).keys({
          label: e.string().min(1).max(32).required(),
          url: e.string().uri().min(1).max(512).required()
        })).min(1).max(2),
        instance: e.boolean(),
        supported_platforms: e.array().items(e.string().min(1).max(32)).min(1).max(3),
        type: e.number().default(E.ActivityTypes.PLAYING).valid(E.ActivityTypes.PLAYING, E.ActivityTypes.LISTENING, E.ActivityTypes.WATCHING)
      }).allow(null)
    }),
    handler(e) {
      var t;
      let a, {
        socket: n,
        args: {
          pid: c,
          activity: _
        },
        isSocketConnected: C
      } = e;
      if (![f.TransportTypes.IPC, f.TransportTypes.WEBSOCKET, f.TransportTypes.POST_MESSAGE].includes(n.transport)) throw new u.default({
        errorCode: E.RPCErrors.INVALID_COMMAND
      }, 'command not available from "'.concat(n.transport, '" transport'));
      if (null == c && f.TransportTypes.IPC === n.transport) throw new u.default({
        errorCode: E.RPCErrors.INVALID_COMMAND
      }, "nonzero pid required");
      if (null == _) return l.default.dispatch({
        type: "LOCAL_ACTIVITY_UPDATE",
        socketId: n.id,
        pid: c,
        activity: _
      }), Promise.resolve(_);
      _.name = n.application.name, _.application_id = n.application.id;
      let m = n.transport === f.TransportTypes.POST_MESSAGE,
        S = (0, d.computeActivityFlags)(_, m);
      S > 0 && (_.flags = S), delete _.instance, null === (t = _.party) || void 0 === t || delete t.privacy;
      let {
        assets: p,
        party: I,
        secrets: T,
        timestamps: g,
        buttons: A,
        type: N
      } = _;
      if ((null == N || N !== E.ActivityTypes.PLAYING && !m) && (_.type = E.ActivityTypes.PLAYING), null != T) {
        let e = s().values(T).filter(e => !!e);
        if (null != I && s().intersection(e, [I.id]).length > 0 && !h.includes(n.application.id)) throw new u.default({
          errorCode: E.RPCErrors.INVALID_ACTIVITY_SECRET
        }, "secrets cannot match the party id");
        if (s().uniq(e).length < e.length) throw new u.default({
          errorCode: E.RPCErrors.INVALID_ACTIVITY_SECRET
        }, "secrets must be unique");
        if (null != A) throw new u.default({
          errorCode: E.RPCErrors.INVALID_ACTIVITY_SECRET
        }, "secrets cannot currently be sent with buttons")
      }
      if (null != A && (_.metadata = {
          button_urls: A.map(e => e.url)
        }, _.buttons = A.map(e => e.label)), null != g)
        for (let e of Object.keys(g)) Date.now().toString().length - g[e].toString().length > 2 && (g[e] = Math.floor(g[e] * o.default.Millis.SECOND));
      if (null == p) a = Promise.resolve([]);
      else {
        if (null == n.application || null == n.application.id) throw Error();
        a = (0, r.fetchAssetIds)(n.application.id, [p.large_image, p.small_image])
      }
      return a.then(e => {
        var t, a;
        let [s, r] = e;
        if (null != p && (null != s ? p.large_image = s : delete p.large_image, null != r ? p.small_image = r : delete p.small_image), !C()) return;
        l.default.dispatch({
          type: "LOCAL_ACTIVITY_UPDATE",
          socketId: n.id,
          pid: c,
          activity: _
        });
        let {
          secrets: o,
          party: u
        } = _, d = {
          application_id: n.application.id,
          type: _.type,
          name: _.name,
          details: null !== (t = _.details) && void 0 !== t ? t : "",
          state: null !== (a = _.state) && void 0 !== a ? a : ""
        };
        return null != o && (d.has_match_secret = !!o.match, d.has_join_secret = !!o.join), null != p && (d.has_images = !!(p.large_image || p.small_image)), null != u && (d.party_max = null != u.size ? u.size[1] : void 0, d.party_id = u.id), i.default.track(E.AnalyticEvents.ACTIVITY_UPDATED, d), _
      })
    }
  }
}