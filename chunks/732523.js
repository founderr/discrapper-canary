"use strict";
n.r(t), n.d(t, {
  useModalState: function() {
    return g
  },
  useIframeModalState: function() {
    return A
  }
}), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
var l = n("884691"),
  u = n("627445"),
  a = n.n(u),
  o = n("446674"),
  r = n("872717"),
  i = n("913144"),
  s = n("798609"),
  c = n("763898"),
  d = n("711562"),
  f = n("274800"),
  E = n("271938"),
  I = n("42203"),
  _ = n("26989"),
  p = n("162771"),
  M = n("315102"),
  R = n("718517"),
  m = n("299039"),
  C = n("812684"),
  T = n("470055"),
  h = n("524094"),
  S = n("49111"),
  N = n("782340");
let O = e => {
  let t = !0;
  return e.forEach(e => {
    !e() && (t = !1)
  }), t
};

function v(e) {
  return l.useMemo(() => {
    let t = p.default.getGuildId(),
      n = null != t && null != e.bot ? _.default.getMember(t, e.bot.id) : void 0,
      l = M.default.getApplicationIconURL({
        id: e.id,
        icon: e.icon,
        botIconFirst: !0,
        bot: null != n ? e.bot : void 0
      }),
      u = null != n && null != e.bot ? e.bot.username : e.name,
      a = (0, d.default)(e.id);
    return {
      applicationIconURL: l,
      applicationName: u,
      applicationBaseUrl: a
    }
  }, [e.id, e.icon, e.name, e.bot])
}

function g(e, t) {
  var n;
  let {
    application: u,
    customId: d,
    components: _,
    channelId: p
  } = e, M = null === (n = I.default.getChannel(p)) || void 0 === n ? void 0 : n.guild_id, h = (0, c.default)(), [g, A] = l.useState(null), [L, y] = l.useState(null), U = (0, o.useStateFromStores)([T.default], () => T.default.getModalState(L), [L]), x = l.useMemo(() => (0, C.createComponents)(_, u.id, M), [_, u.id, M]), b = l.useRef(new Set), B = l.useCallback(() => {
    A(null), y(null), O(b.current) && y(function(e, t) {
      let n = m.default.fromTimestamp(Date.now()),
        l = e.channelId,
        u = I.default.getChannel(l);
      a(null != u, "expected channel");
      let o = D(e.customId, e.components, []);
      (0, f.addQueued)(n, {
        data: {
          interactionType: s.InteractionTypes.MODAL_SUBMIT
        }
      });
      let i = () => {
        (null == t || !t.aborted) && r.default.post({
          url: S.Endpoints.INTERACTIONS,
          body: {
            type: s.InteractionTypes.MODAL_SUBMIT,
            application_id: e.application.id,
            channel_id: u.id,
            guild_id: u.guild_id,
            data: {
              id: e.id,
              custom_id: e.customId,
              components: o
            },
            session_id: E.default.getSessionId(),
            nonce: n
          },
          signal: t
        }).catch(e => {
          429 === e.status ? setTimeout(i, e.body.retry_after * R.default.Millis.SECOND) : (0, f.setFailed)(n)
        })
      };
      return i(), n
    }(e, h))
  }, [h, e]);
  l.useEffect(() => {
    U === T.InteractionModalState.SUCCEEDED && (i.default.dispatch({
      type: "CLEAR_INTERACTION_MODAL_STATE",
      id: d
    }), t()), U === T.InteractionModalState.ERRORED && A(N.default.Messages.INTERACTION_FORM_SUBMISSION_FAILED)
  }, [L, U, t, d]);
  let {
    applicationIconURL: w,
    applicationName: F
  } = v(u);
  return {
    components: x,
    applicationIconURL: w,
    applicationName: F,
    submissionState: U,
    error: g,
    validators: b.current,
    onSubmit: B
  }
}

function A(e) {
  let {
    application: t,
    customId: n
  } = e, {
    applicationIconURL: l,
    applicationName: u,
    applicationBaseUrl: o
  } = v(t), r = I.default.getChannel(e.channelId);
  a(null != r, "channel should not be null");
  let i = "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
    s = {
      instance_id: i,
      custom_id: n,
      channel_id: e.channelId
    };
  null != r.guild_id && "" !== r.guild_id && (s.guild_id = r.guild_id);
  let c = new URL(null != o ? o : "");
  c.pathname = e.iframePath;
  let d = c.toString();
  return {
    applicationIconURL: l,
    applicationName: u,
    applicationBaseUrl: o,
    queryParams: s,
    iframeUrl: d
  }
}
let D = (e, t, n) => t.map((t, l) => {
  let u = [...n, l];
  switch (t.type) {
    case s.ComponentType.ACTION_ROW:
      var o;
      return {
        type: t.type, components: D(e, null !== (o = t.components) && void 0 !== o ? o : [], u)
      };
    case s.ComponentType.INPUT_TEXT: {
      let n = h.default.getInteractionComponentState(e, u);
      return {
        type: t.type,
        custom_id: t.custom_id,
        value: (null == n ? void 0 : n.type) === t.type ? n.value : null
      }
    }
    case s.ComponentType.STRING_SELECT: {
      let n = h.default.getInteractionComponentState(e, u);
      return {
        type: t.type,
        custom_id: t.custom_id,
        values: (null == n ? void 0 : n.type) === t.type ? n.values : null
      }
    }
    default:
      a(!1, "unreachable")
  }
})