"use strict";
n.d(t, {
  BQ: function() {
    return d
  },
  Y$: function() {
    return I
  },
  ye: function() {
    return E
  }
}), n(789020);
var i = n(668781),
  r = n(904245),
  s = n(895924),
  o = n(667204),
  a = n(957730),
  l = n(630388),
  u = n(981631),
  _ = n(689079),
  c = n(689938);

function d(e) {
  return e.id !== _.bi.BUILT_IN
}

function E(e) {
  var t;
  let {
    application: n
  } = e;
  return d(n) && (0, l.yE)(null !== (t = n.flags) && void 0 !== t ? t : 0, u.udG.EMBEDDED)
}

function I(e) {
  let {
    command: t,
    optionValues: n,
    context: l,
    commandTargetId: u,
    maxSizeCallback: _,
    sectionName: d
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
        sectionName: d
      });
      if (t.inputType === s.iw.BUILT_IN_TEXT && null != i) {
        var e;
        let t = a.ZP.parse(E, i.content);
        t.tts = null !== (e = i.tts) && void 0 !== e && e, r.Z.sendMessage(l.channel.id, t)
      }
    } catch (e) {
      throw i.Z.show({
        title: c.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_TITLE,
        body: c.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_BODY,
        confirmText: c.Z.Messages.RETRY,
        onConfirm: () => I()
      }), e
    }
  };
  return I()
}
_.bi.BUILT_IN