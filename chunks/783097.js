"use strict";
n.d(t, {
  $d: function() {
    return T
  },
  BQ: function() {
    return I
  },
  Wx: function() {
    return E
  },
  Y$: function() {
    return S
  },
  jD: function() {
    return h
  },
  sl: function() {
    return A
  },
  ye: function() {
    return f
  }
}), n(789020);
var i = n(668781),
  r = n(904245),
  s = n(895924),
  o = n(667204),
  a = n(957730),
  l = n(768581),
  u = n(630388),
  _ = n(981631),
  c = n(689079),
  d = n(689938);
let E = {
  id: c.bi.BUILT_IN
};

function I(e) {
  return e.id !== c.bi.BUILT_IN
}

function T(e) {
  return I(e) ? e.name : d.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME
}

function h(e) {
  return I(e) ? e.description : d.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION
}

function f(e) {
  var t;
  let {
    application: n
  } = e;
  return I(n) && (0, u.yE)(null !== (t = n.flags) && void 0 !== t ? t : 0, _.udG.EMBEDDED)
}

function S(e) {
  let {
    command: t,
    optionValues: n,
    context: l,
    commandTargetId: u,
    maxSizeCallback: _,
    sectionName: c
  } = e, {
    channel: E
  } = l, I = async () => {
    try {
      let i = await (0, o.Z)({
        command: t,
        optionValues: n,
        context: l,
        commandTargetId: u,
        maxSizeCallback: _,
        commandOrigin: s.bB.APPLICATION_LAUNCHER,
        sectionName: c
      });
      if (t.inputType === s.iw.BUILT_IN_TEXT && null != i) {
        var e;
        let t = a.ZP.parse(E, i.content);
        t.tts = null !== (e = i.tts) && void 0 !== e && e, r.Z.sendMessage(l.channel.id, t)
      }
    } catch (e) {
      throw i.Z.show({
        title: d.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_TITLE,
        body: d.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_BODY,
        confirmText: d.Z.Messages.RETRY,
        onConfirm: () => I()
      }), e
    }
  };
  return I()
}

function A(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    {
      fakeAppIconURL: n,
      ...i
    } = t;
  return I(e) ? {
    iconURL: l.ZP.getApplicationIconURL({
      ...i,
      id: e.id,
      icon: e.icon,
      bot: e.bot
    }),
    name: e.name,
    description: e.description
  } : {
    iconURL: null != n ? n : null,
    name: d.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME,
    description: d.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION
  }
}