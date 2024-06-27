t.d(n, {
  $d: function() {
    return N
  },
  BQ: function() {
    return h
  },
  Wx: function() {
    return p
  },
  Y$: function() {
    return C
  },
  jD: function() {
    return _
  },
  sl: function() {
    return A
  },
  ye: function() {
    return E
  }
}), t(789020);
var i = t(668781),
  l = t(904245),
  a = t(895924),
  r = t(667204),
  s = t(957730),
  o = t(768581),
  c = t(630388),
  u = t(981631),
  d = t(689079),
  m = t(689938);
let p = {
  id: d.bi.BUILT_IN
};

function h(e) {
  return e.id !== d.bi.BUILT_IN
}

function N(e) {
  return h(e) ? e.name : m.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME
}

function _(e) {
  return h(e) ? e.description : m.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION
}

function E(e) {
  var n;
  let {
    application: t
  } = e;
  return h(t) && (0, c.yE)(null !== (n = t.flags) && void 0 !== n ? n : 0, u.udG.EMBEDDED)
}

function C(e) {
  let {
    command: n,
    optionValues: t,
    context: o,
    commandTargetId: c,
    maxSizeCallback: u,
    sectionName: d
  } = e, {
    channel: p
  } = o, h = async () => {
    try {
      let i = await (0, r.Z)({
        command: n,
        optionValues: t,
        context: o,
        commandTargetId: c,
        maxSizeCallback: u,
        commandOrigin: a.bB.APPLICATION_LAUNCHER,
        sectionName: d
      });
      if (n.inputType === a.iw.BUILT_IN_TEXT && null != i) {
        var e;
        let n = s.ZP.parse(p, i.content);
        n.tts = null !== (e = i.tts) && void 0 !== e && e, l.Z.sendMessage(o.channel.id, n)
      }
    } catch (e) {
      throw i.Z.show({
        title: m.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_TITLE,
        body: m.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_BODY,
        confirmText: m.Z.Messages.RETRY,
        onConfirm: () => h()
      }), e
    }
  };
  return h()
}

function A(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    {
      fakeAppIconURL: t,
      ...i
    } = n;
  return h(e) ? {
    iconURL: o.ZP.getApplicationIconURL({
      ...i,
      id: e.id,
      icon: e.icon,
      bot: e.bot
    }),
    name: e.name,
    description: e.description
  } : {
    iconURL: null != t ? t : null,
    name: m.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME,
    description: m.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION
  }
}