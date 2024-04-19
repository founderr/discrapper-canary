"use strict";
a.r(t);
var n = a("45792"),
  s = a("914946"),
  l = a("238679"),
  i = a("981631");
t.default = {
  [i.RPCCommands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: (0, n.createRPCCommand)(i.RPCCommands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS, {
    scope: l.activityInstanceConnectedParticipantsScope,
    handler(e) {
      let {
        socket: t
      } = e;
      return (0, s.validatePostMessageTransport)(t.transport), (0, l.activityInstanceConnectedParticipants)()
    }
  })
}