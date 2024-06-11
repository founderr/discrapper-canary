"use strict";
s.r(t), s.d(t, {
  openModal: function() {
    return l
  }
});
var a = s("416867"),
  n = s("549631"),
  i = s("689938");
let l = () => {
  (0, a.openActionCompleteSuccessModal)({
    title: i.default.Messages.GUILD_ROLE_SUBSCRIPTION_RESTARTED_TITLE,
    body: i.default.Messages.GUILD_ROLE_SUBSCRIPTION_RESTARTED_DESCRIPTION,
    Icon: n.default
  })
}