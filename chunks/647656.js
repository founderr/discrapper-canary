n(47120), n(789020), n(411104);
var i = n(392711),
  s = n.n(i),
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
        socket: i,
        args: {
          pid: l,
          activity: E
        },
        isSocketConnected: m
      } = e;
      if (![h.He.IPC, h.He.WEBSOCKET, h.He.POST_MESSAGE].includes(i.transport)) throw new u.Z({
        errorCode: _.lTL.INVALID_COMMAND
      }, 'command not available from "'.concat(i.transport, '" transport'));
      if (null == l && h.He.IPC === i.transport) throw new u.Z({
        errorCode: _.lTL.INVALID_COMMAND
      }, "nonzero pid required");
      if (null == E) return a.Z.dispatch({
        type: "LOCAL_ACTIVITY_UPDATE",
        socketId: i.id,
        pid: l,
        activity: E
      }), Promise.resolve(E);
      E.name = i.application.name, E.application_id = i.application.id;
      let g = i.transport === h.He.POST_MESSAGE,
        p = (0, d.S5)(E, g);
      p > 0 && (E.flags = p), delete E.instance, null === (t = E.party) || void 0 === t || delete t.privacy;
      let {
        assets: N,
        party: T,
        secrets: C,
        timestamps: S,
        buttons: A,
        type: f
      } = E;
      if ((null == f || f !== _.IIU.PLAYING && !g) && (E.type = _.IIU.PLAYING), null != C) {
        let e = s().values(C).filter(e => !!e);
        if (null != T && s().intersection(e, [T.id]).length > 0 && !I.includes(i.application.id)) throw new u.Z({
          errorCode: _.lTL.INVALID_ACTIVITY_SECRET
        }, "secrets cannot match the party id");
        if (s().uniq(e).length < e.length) throw new u.Z({
          errorCode: _.lTL.INVALID_ACTIVITY_SECRET
        }, "secrets must be unique");
        if (null != A) throw new u.Z({
          errorCode: _.lTL.INVALID_ACTIVITY_SECRET
        }, "secrets cannot currently be sent with buttons")
      }
      if (null != A && (E.metadata = {
          button_urls: A.map(e => e.url)
        }, E.buttons = A.map(e => e.label)), null != S)
        for (let e of Object.keys(S)) Date.now().toString().length - S[e].toString().length > 2 && (S[e] = Math.floor(S[e] * c.Z.Millis.SECOND));
      if (null == N) n = Promise.resolve([]);
      else {
        if (null == i.application || null == i.application.id) throw Error();
        n = (0, o.fetchAssetIds)(i.application.id, [N.large_image, N.small_image])
      }
      return n.then(e => {
        var t, n;
        let [s, o] = e;
        if (null != N && (null != s ? N.large_image = s : delete N.large_image, null != o ? N.small_image = o : delete N.small_image), !m()) return;
        a.Z.dispatch({
          type: "LOCAL_ACTIVITY_UPDATE",
          socketId: i.id,
          pid: l,
          activity: E
        });
        let {
          secrets: c,
          party: u
        } = E, d = {
          application_id: i.application.id,
          type: E.type,
          name: E.name,
          details: null !== (t = E.details) && void 0 !== t ? t : "",
          state: null !== (n = E.state) && void 0 !== n ? n : ""
        };
        return null != c && (d.has_match_secret = !!c.match, d.has_join_secret = !!c.join), null != N && (d.has_images = !!(N.large_image || N.small_image)), null != u && (d.party_max = null != u.size ? u.size[1] : void 0, d.party_id = u.id), r.default.track(_.rMx.ACTIVITY_UPDATED, d), E
      })
    }
  }
}