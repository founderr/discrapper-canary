"use strict";
n.r(t);
var a = n("45792"),
  s = n("914946"),
  i = n("238679"),
  l = n("981631");
t.default = {
  [l.RPCCommands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: (0, a.createRPCCommand)(l.RPCCommands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS, {
    scope: i.activityInstanceConnectedParticipantsScope,
    handler(e) {
      let {
        socket: t
      } = e;
      return (0, s.validatePostMessageTransport)(t.transport), (0, i.activityInstanceConnectedParticipants)()
    }
  })
}