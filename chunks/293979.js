"use strict";
n.r(t), n.d(t, {
  useIframeModalState: function() {
    return R
  },
  useModalState: function() {
    return g
  }
}), n("47120"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648");
var l = n("470079"),
  a = n("512722"),
  i = n.n(a),
  u = n("442837"),
  r = n("544891"),
  o = n("570140"),
  s = n("911969"),
  d = n("81897"),
  c = n("155268"),
  f = n("603721"),
  I = n("314897"),
  T = n("592125"),
  m = n("271383"),
  E = n("914010"),
  p = n("768581"),
  _ = n("70956"),
  N = n("709054"),
  S = n("292419"),
  h = n("471073"),
  A = n("892902"),
  M = n("981631"),
  C = n("689938");
let O = e => {
  let t = !0;
  return e.forEach(e => {
    !e() && (t = !1)
  }), t
};

function v(e) {
  return l.useMemo(() => {
    let t = E.default.getGuildId(),
      n = null != t && null != e.bot ? m.default.getMember(t, e.bot.id) : void 0,
      l = p.default.getApplicationIconURL({
        id: e.id,
        icon: e.icon,
        botIconFirst: !0,
        bot: null != n ? e.bot : void 0
      }),
      a = null != n && null != e.bot ? e.bot.username : e.name;
    return {
      applicationIconURL: l,
      applicationName: a,
      applicationBaseUrl: (0, c.default)(e.id)
    }
  }, [e.id, e.icon, e.name, e.bot])
}

function g(e, t) {
  var n;
  let {
    application: a,
    customId: c,
    components: m,
    channelId: E
  } = e, p = null === (n = T.default.getChannel(E)) || void 0 === n ? void 0 : n.guild_id, A = (0, d.default)(), [g, R] = l.useState(null), [D, y] = l.useState(null), L = (0, u.useStateFromStores)([h.default], () => h.default.getModalState(D), [D]), w = l.useMemo(() => (0, S.createComponents)(m, a.id, p), [m, a.id, p]), x = l.useRef(new Set), U = l.useCallback(() => {
    R(null), y(null), O(x.current) && y(function(e, t) {
      let n = N.default.fromTimestamp(Date.now()),
        l = e.channelId,
        a = T.default.getChannel(l);
      i()(null != a, "expected channel");
      let u = b(e.customId, e.components, []);
      (0, f.addQueued)(n, {
        data: {
          interactionType: s.InteractionTypes.MODAL_SUBMIT
        }
      });
      let o = () => {
        (null == t || !t.aborted) && r.HTTP.post({
          url: M.Endpoints.INTERACTIONS,
          body: {
            type: s.InteractionTypes.MODAL_SUBMIT,
            application_id: e.application.id,
            channel_id: a.id,
            guild_id: a.guild_id,
            data: {
              id: e.id,
              custom_id: e.customId,
              components: u
            },
            session_id: I.default.getSessionId(),
            nonce: n
          },
          signal: t
        }).catch(e => {
          429 === e.status ? setTimeout(o, e.body.retry_after * _.default.Millis.SECOND) : (0, f.setFailed)(n)
        })
      };
      return o(), n
    }(e, A))
  }, [A, e]);
  l.useEffect(() => {
    L === h.InteractionModalState.SUCCEEDED && (o.default.dispatch({
      type: "CLEAR_INTERACTION_MODAL_STATE",
      id: c
    }), t()), L === h.InteractionModalState.ERRORED && R(C.default.Messages.INTERACTION_FORM_SUBMISSION_FAILED)
  }, [D, L, t, c]);
  let {
    applicationIconURL: j,
    applicationName: F
  } = v(a);
  return {
    components: w,
    applicationIconURL: j,
    applicationName: F,
    submissionState: L,
    error: g,
    validators: x.current,
    onSubmit: U
  }
}

function R(e) {
  let {
    application: t,
    customId: n
  } = e, {
    applicationIconURL: l,
    applicationName: a,
    applicationBaseUrl: u
  } = v(t), r = T.default.getChannel(e.channelId);
  i()(null != r, "channel should not be null");
  let o = {
    instance_id: "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
    custom_id: n,
    channel_id: e.channelId
  };
  null != r.guild_id && "" !== r.guild_id && (o.guild_id = r.guild_id);
  let s = new URL(null != u ? u : "");
  return s.pathname = e.iframePath, {
    applicationIconURL: l,
    applicationName: a,
    applicationBaseUrl: u,
    queryParams: o,
    iframeUrl: s.toString()
  }
}
let b = (e, t, n) => t.map((t, l) => {
  let a = [...n, l];
  switch (t.type) {
    case s.ComponentType.ACTION_ROW:
      var u;
      return {
        type: t.type, components: b(e, null !== (u = t.components) && void 0 !== u ? u : [], a)
      };
    case s.ComponentType.INPUT_TEXT: {
      let n = A.default.getInteractionComponentState(e, a);
      return {
        type: t.type,
        custom_id: t.custom_id,
        value: (null == n ? void 0 : n.type) === t.type ? n.value : null
      }
    }
    case s.ComponentType.STRING_SELECT: {
      let n = A.default.getInteractionComponentState(e, a);
      return {
        type: t.type,
        custom_id: t.custom_id,
        values: (null == n ? void 0 : n.type) === t.type ? n.values : null
      }
    }
    default:
      i()(!1, "unreachable")
  }
})