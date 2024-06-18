"use strict";
var s = n(470079),
  l = n(451478),
  a = n(830917),
  r = n(985518);
t.Z = {
  useForumChannelSeenManager: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e, i = s.useRef(null), o = (0, a.UU)(), c = !l.Z.isFocused(o);
    return s.useLayoutEffect(() => (null == i.current && (i.current = new r.ZP({
      guildId: t,
      channelId: n,
      isPaused: c,
      windowId: o
    }), i.current.initialize()), () => {
      var e;
      null === (e = i.current) || void 0 === e || e.terminate(), i.current = null
    }), [n, t, c, o]), i.current
  }
}