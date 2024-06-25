n(47120), n(789020), n(411104);
var s = n(392711),
  i = n.n(s),
  l = n(243814),
  a = n(570140),
  r = n(626135),
  o = n(81063),
  c = n(70956),
  u = n(996106),
  d = n(914946),
  E = n(452426),
  h = n(186901),
  _ = n(981631);
let I = ["349134787773988865"];
t.Z = {
  [_.Etm.SET_ACTIVITY]: {
    scope: {
      [h.Gp.ANY]: [l.x.RPC, l.x.RPC_ACTIVITIES_WRITE, h.lH]
    },
    validation: e => (0, E.Z)(e).required().keys({
      pid: e.number().min(0),
      activity: e.object().keys({
        state: e.string().min(2).max(128),
        details: e.string().min(2).max(128),
        timestamps: (0, E.Z)(e).keys({
          start: e.number().min(1),
          end: e.number().min(1)
        }),
        assets: (0, E.Z)(e).keys({
          large_image: e.string().min(1).max(256),
          large_text: e.string().min(2).max(128),
          small_image: e.string().min(1).max(256),
          small_text: e.string().min(2).max(128)
        }),
        party: (0, E.Z)(e).keys({
          id: e.string().min(2).max(128),
          size: e.array().items(e.number().min(1)).length(2),
          privacy: e.number().default(_.RYY.PRIVATE).valid([_.RYY.PRIVATE, _.RYY.PUBLIC])
        }),
        secrets: (0, E.Z)(e).keys({
          match: e.string().min(2).max(128),
          join: e.string().min(2).max(128),
          spectate: e.string().min(2).max(128)
        }),
        buttons: e.array().items((0, E.Z)(e).keys({
          label: e.string().min(1).max(32).required(),
          url: e.string().uri().min(1).max(512).required()
        })).min(1).max(2),
        instance: e.boolean(),
        supported_platforms: e.array().items(e.string().min(1).max(32)).min(1).max(3),
        type: e.number().default(_.IIU.PLAYING).valid(_.IIU.PLAYING, _.IIU.LISTENING, _.IIU.WATCHING)
      }).allow(null)
    }),
    handler(e) {
      var t;
      let n, {
        socket: s,
        args: {
          pid: l,
          activity: E
        },
        isSocketConnected: m
      } = e;
      if (![h.He.IPC, h.He.WEBSOCKET, h.He.POST_MESSAGE].includes(s.transport)) throw new u.Z({
        errorCode: _.lTL.INVALID_COMMAND
      }, 'command not available from "'.concat(s.transport, '" transport'));
      if (null == l && h.He.IPC === s.transport) throw new u.Z({
        errorCode: _.lTL.INVALID_COMMAND
      }, "nonzero pid required");
      if (null == E) return a.Z.dispatch({
        type: "LOCAL_ACTIVITY_UPDATE",
        socketId: s.id,
        pid: l,
        activity: E
      }), Promise.resolve(E);
      E.name = s.application.name, E.application_id = s.application.id;
      let T = s.transport === h.He.POST_MESSAGE,
        g = (0, d.S5)(E, T);
      g > 0 && (E.flags = g), delete E.instance, null === (t = E.party) || void 0 === t || delete t.privacy;
      let {
        assets: p,
        party: N,
        secrets: S,
        timestamps: C,
        buttons: A,
        type: f
      } = E;
      if ((null == f || f !== _.IIU.PLAYING && !T) && (E.type = _.IIU.PLAYING), null != S) {
        let e = i().values(S).filter(e => !!e);
        if (null != N && i().intersection(e, [N.id]).length > 0 && !I.includes(s.application.id)) throw new u.Z({
          errorCode: _.lTL.INVALID_ACTIVITY_SECRET
        }, "secrets cannot match the party id");
        if (i().uniq(e).length < e.length) throw new u.Z({
          errorCode: _.lTL.INVALID_ACTIVITY_SECRET
        }, "secrets must be unique");
        if (null != A) throw new u.Z({
          errorCode: _.lTL.INVALID_ACTIVITY_SECRET
        }, "secrets cannot currently be sent with buttons")
      }
      if (null != A && (E.metadata = {
          button_urls: A.map(e => e.url)
        }, E.buttons = A.map(e => e.label)), null != C)
        for (let e of Object.keys(C)) Date.now().toString().length - C[e].toString().length > 2 && (C[e] = Math.floor(C[e] * c.Z.Millis.SECOND));
      if (null == p) n = Promise.resolve([]);
      else {
        if (null == s.application || null == s.application.id) throw Error();
        n = (0, o.fetchAssetIds)(s.application.id, [p.large_image, p.small_image])
      }
      return n.then(e => {
        var t, n;
        let [i, o] = e;
        if (null != p && (null != i ? p.large_image = i : delete p.large_image, null != o ? p.small_image = o : delete p.small_image), !m()) return;
        a.Z.dispatch({
          type: "LOCAL_ACTIVITY_UPDATE",
          socketId: s.id,
          pid: l,
          activity: E
        });
        let {
          secrets: c,
          party: u
        } = E, d = {
          application_id: s.application.id,
          type: E.type,
          name: E.name,
          details: null !== (t = E.details) && void 0 !== t ? t : "",
          state: null !== (n = E.state) && void 0 !== n ? n : ""
        };
        return null != c && (d.has_match_secret = !!c.match, d.has_join_secret = !!c.join), null != p && (d.has_images = !!(p.large_image || p.small_image)), null != u && (d.party_max = null != u.size ? u.size[1] : void 0, d.party_id = u.id), r.default.track(_.rMx.ACTIVITY_UPDATED, d), E
      })
    }
  }
}